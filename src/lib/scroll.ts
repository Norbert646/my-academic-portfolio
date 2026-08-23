export function scrollToSection(href: string) {
  if (!href.startsWith("#") || href.length < 2) return;

  let el: Element | null = null;
  try {
    el = document.querySelector(href);
  } catch {
    return;
  }

  if (!el) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  el.scrollIntoView({
    behavior: prefersReducedMotion ? "instant" : "smooth",
    block: "start",
  });

  history.replaceState(null, "", href);
}
