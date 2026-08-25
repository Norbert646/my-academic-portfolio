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
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // برای اطمینان از اجرای اسکرول در موبایل
  try {
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });
  } catch {
    // fallback در صورت خطا
    el.scrollIntoView(true);
  }

  history.replaceState(null, "", href);
}