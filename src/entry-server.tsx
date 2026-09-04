import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MotionConfig } from "framer-motion";
import App from "./App";

/**
 * Server entry used exclusively by scripts/prerender.mjs at build time.
 * Produces the static HTML that is injected into dist/index.html so crawlers,
 * link previews and first paint do not depend on JavaScript.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </StrictMode>,
  );
}
