import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// استفاده از require به‌جای import برای vite-plugin-ssg
let SSG;
try {
  SSG = require("vite-plugin-ssg").default || require("vite-plugin-ssg");
} catch {
  SSG = () => ({ name: "ssg-fallback" });
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    SSG({
      entry: "src/main.tsx",
      routes: ["/"],
    }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          sentry: ["@sentry/react"],
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});