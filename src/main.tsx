import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import * as Sentry from "@sentry/react";
import "@fontsource/inter/300.css";      // <-- اضافه شد
import "@fontsource/inter/400.css";      // <-- اضافه شد
import "@fontsource/inter/500.css";      // <-- اضافه شد
import "@fontsource/inter/600.css";      // <-- اضافه شد
import "@fontsource/inter/700.css";      // <-- اضافه شد
import "./index.css";
import App from "./App.tsx";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  enabled: import.meta.env.PROD,
  environment: import.meta.env.MODE,
  sendDefaultPii: false,
  tracesSampleRate: 0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Sentry.ErrorBoundary
      fallback={
        <div className="min-h-[100svh] grid place-items-center bg-navy px-6 text-center">
          <h1 className="font-serif-display text-3xl text-offwhite">Hossein Rezaei</h1>
          <p className="mt-3 text-graycool-onnavy">
            Something went wrong loading this page.
          </p>
          <a
            className="mt-6 inline-block text-gold underline hover:text-gold-light transition-colors"
            href="mailto:hossein9990.ir@gmail.com"
          >
            hossein9990.ir@gmail.com
          </a>
          <a
            className="mt-2 block text-gold underline hover:text-gold-light transition-colors"
            href="/cv/Hossein-Rezaei-Academic-CV.pdf"
          >
            Download my CV directly
          </a>
        </div>
      }
    >
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </Sentry.ErrorBoundary>
  </StrictMode>,
);