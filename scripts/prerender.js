#!/usr/bin/env node
/**
 * Static pre-rendering for the portfolio.
 *
 * Runs after `vite build` (see package.json → "build"):
 *   1. Builds a server bundle of src/entry-server.tsx into a temp dir.
 *   2. Renders <App /> to an HTML string.
 *   3. Injects it into dist/index.html in place of <!--app-html-->.
 *   4. Adds <link rel="preload"> for the two fonts used above the fold.
 *   5. Regenerates dist/sitemap.xml with today's date.
 *   6. Removes the temp server bundle.
 *
 * The result: crawlers, link unfurlers and first paint no longer depend on
 * JavaScript; React hydrates the existing markup on the client.
 */
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { readFile, writeFile, readdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");
const SSR_OUT = path.join(ROOT, ".prerender");
const SITE_URL = "https://my-academic-portfolio-pearl.vercel.app";

const PLACEHOLDER = "<!--app-html-->";
const PRELOAD_FONTS = [
  /^inter-latin-wght-normal-.*\.woff2$/,
  /^cormorant-garamond-latin-600-normal-.*\.woff2$/,
];

function log(msg) {
  console.log(`[prerender] ${msg}`);
}

async function buildServerBundle() {
  log("building server bundle…");
  await build({
    // Deliberately independent of vite.config.ts: the client-side
    // manualChunks/esbuild settings must not leak into the SSR bundle.
    configFile: false,
    plugins: [react()],
    logLevel: "warn",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: SSR_OUT,
      emptyOutDir: true,
      // Keep CSS/asset emission off: the client build already produced them.
      cssCodeSplit: false,
      copyPublicDir: false,
      rollupOptions: { output: { entryFileNames: "entry-server.js" } },
    },
  });
}

async function renderApp() {
  const entry = path.join(SSR_OUT, "entry-server.js");
  const mod = await import(pathToFileURL(entry).href);
  if (typeof mod.render !== "function") {
    throw new Error("entry-server.js does not export render()");
  }
  return mod.render();
}

async function fontPreloadTags() {
  const assetsDir = path.join(DIST, "assets");
  if (!existsSync(assetsDir)) return "";
  const files = await readdir(assetsDir);
  const tags = [];
  for (const pattern of PRELOAD_FONTS) {
    const file = files.find((f) => pattern.test(f));
    if (file) {
      tags.push(
        `<link rel="preload" as="font" type="font/woff2" href="/assets/${file}" crossorigin />`,
      );
    } else {
      log(`warning: no font matched ${pattern}`);
    }
  }
  return tags.join("\n    ");
}

async function injectHtml(appHtml) {
  const indexPath = path.join(DIST, "index.html");
  let html = await readFile(indexPath, "utf8");

  if (!html.includes(PLACEHOLDER)) {
    throw new Error(`${PLACEHOLDER} not found in dist/index.html`);
  }
  html = html.replace(PLACEHOLDER, appHtml);

  const preloads = await fontPreloadTags();
  if (preloads) {
    html = html.replace("</head>", `    ${preloads}\n  </head>`);
  }

  await writeFile(indexPath, html, "utf8");
  log(`wrote dist/index.html (${(html.length / 1024).toFixed(1)} KiB)`);
}

async function writeSitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
</urlset>
`;
  await writeFile(path.join(DIST, "sitemap.xml"), xml, "utf8");
  log(`wrote dist/sitemap.xml (lastmod ${today})`);
}

async function main() {
  if (!existsSync(path.join(DIST, "index.html"))) {
    throw new Error("dist/index.html not found — run `vite build` first");
  }

  await buildServerBundle();
  const appHtml = await renderApp();
  if (!appHtml.includes("Hossein Rezaei")) {
    throw new Error("rendered HTML looks empty — aborting");
  }
  await injectHtml(appHtml);
  await writeSitemap();
  await rm(SSR_OUT, { recursive: true, force: true });
  log("done ✔");
}

main().catch((err) => {
  console.error("[prerender] failed:", err);
  process.exitCode = 1;
});
