import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import React from "react";
import { renderToString } from "react-dom/server";

// تنظیم مسیر برای ماژول‌های ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// تنظیم React در global برای پشتیبانی از JSX در App
global.React = React;

// ایمپورت اپلیکیشن (توجه: پسوند .tsx را مستقیم وارد می‌کنیم)
import App from "../src/App.tsx";

// رندر کردن اپلیکیشن به رشته HTML
const appHtml = renderToString(React.createElement(App));

// قالب نهایی HTML
const template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0b1d30" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <title>Hossein Rezaei | Catalysis & Green Chemistry — Academic Portfolio</title>
  <meta name="description" content="Academic portfolio of Hossein Rezaei: B.Sc. Applied Chemistry (GPA 17.9/20), focused on catalysis and green chemistry, applying for Master's study in Europe." />
  <meta name="author" content="Hossein Rezaei" />
  <meta name="keywords" content="Hossein Rezaei, catalysis, green chemistry, sustainable chemistry, organometallic chemistry, applied chemistry, Master's admission Europe, chemistry student portfolio" />
  <meta name="robots" content="index, follow" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Hossein Rezaei | Catalysis & Green Chemistry" />
  <meta property="og:description" content="B.Sc. Applied Chemistry student (GPA 17.9/20) focused on catalysis and green chemistry, preparing for Master's study in Europe." />
  <meta property="og:url" content="https://my-academic-portfolio-pearl.vercel.app/" />
  <meta property="og:site_name" content="Hossein Rezaei — Academic Portfolio" />
  <meta property="og:image" content="https://my-academic-portfolio-pearl.vercel.app/og-image.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Hossein Rezaei — Applied Chemistry, Catalysis and Green Chemistry" />
  <meta property="og:locale" content="en_US" />
  <link rel="canonical" href="https://my-academic-portfolio-pearl.vercel.app/" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Hossein Rezaei | Catalysis & Green Chemistry" />
  <meta name="twitter:description" content="B.Sc. Applied Chemistry student preparing for Master's study in Europe." />
  <meta name="twitter:image" content="https://my-academic-portfolio-pearl.vercel.app/og-image.png" />
  <meta name="twitter:image:alt" content="Hossein Rezaei — Applied Chemistry, Catalysis and Green Chemistry" />
  <link rel="preload" as="image" href="/profile.jpg" fetchpriority="high" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Hossein Rezaei",
        "jobTitle": "Applied Chemistry Student · Catalysis & Green Chemistry",
        "affiliation": {
          "@type": "CollegeOrUniversity",
          "name": "Khatam al-Anbia University of Behbahan"
        },
        "url": "https://my-academic-portfolio-pearl.vercel.app/",
        "image": "https://my-academic-portfolio-pearl.vercel.app/profile.jpg",
        "email": "hossein9990.ir@gmail.com",
        "knowsAbout": ["Catalysis", "Green Chemistry", "Organometallic Chemistry", "Analytical Chemistry", "Organic Chemistry"],
        "sameAs": [
          "https://www.linkedin.com/in/hossein-rezaei-chemistry/",
          "https://github.com/Norbert646",
          "https://www.researchgate.net/profile/Hossein-Rezaei-Chem"
        ]
      }
    }
  </script>
</head>
<body>
  <div id="root">${appHtml}</div>
  <noscript>
    <div style="max-width:42rem;margin:4rem auto;padding:0 1.5rem;font-family:system-ui;line-height:1.6">
      <h1>Hossein Rezaei</h1>
      <p>B.Sc. Applied Chemistry, Khatam al-Anbia University of Behbahan (GPA 17.9/20). Focused on catalysis and green chemistry; applying for Master's study in Europe.</p>
      <p>This portfolio requires JavaScript. In the meantime:</p>
      <ul>
        <li><a href="/cv/Hossein-Rezaei-Academic-CV.pdf">Download my academic CV (PDF)</a></li>
        <li><a href="mailto:hossein9990.ir@gmail.com">hossein9990.ir@gmail.com</a></li>
        <li><a href="https://www.linkedin.com/in/hossein-rezaei-chemistry/">LinkedIn</a></li>
      </ul>
    </div>
  </noscript>
</body>
</html>`;

// مسیر پوشه dist
const distPath = path.resolve("dist");

// اطمینان از وجود پوشه dist
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// نوشتن فایل index.html در پوشه dist
fs.writeFileSync(path.join(distPath, "index.html"), template);
console.log("✅ Pre-rendered index.html با موفقیت ساخته شد!");