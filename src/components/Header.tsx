import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FlaskConical } from "lucide-react";
import { navLinks, profile } from "../data/profile";
import { scrollToSection } from "../lib/scroll";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const visible = new Set<string>();
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) visible.add("#" + e.target.id);
      else visible.delete("#" + e.target.id);
    });
    const topmost = navLinks.find((l) => visible.has(l.href));
    if (topmost) setActive(topmost.href);
    else setActive("");
  },
  { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
);
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  if (!mobileOpen) {
    document.body.style.overflow = "";
    return;
  }
  document.body.style.overflow = "hidden";

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setMobileOpen(false);
      buttonRef.current?.focus();
    }
  };
  window.addEventListener("keydown", handleEscape);

  const timer = setTimeout(() => {
    const firstLink = menuRef.current?.querySelector("a");
    if (firstLink) (firstLink as HTMLElement).focus();
  }, 100);

  return () => {
    document.body.style.overflow = "";
    window.removeEventListener("keydown", handleEscape);
    clearTimeout(timer);
  };
}, [mobileOpen]);

const handleNavClick = (href: string) => {
  const wasMobileOpen = mobileOpen;
  setMobileOpen(false);

  // اگر منو باز بود، بعد از بسته شدن (با تاخیر) اسکرول کنیم
  if (wasMobileOpen) {
    setTimeout(() => {
      scrollToSection(href);
    }, 100); // ۱۰۰ میلی‌ثانیه تاخیر برای اطمینان از بسته شدن منو
  } else {
    scrollToSection(href);
  }
};

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_4px_24px_rgba(11,29,48,0.25)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center gap-2.5 group"
        >
          <span className="flex items-center justify-center w-9 h-9 rounded-full border border-gold/50 text-gold group-hover:bg-gold/10 transition-colors">
            <FlaskConical size={16} strokeWidth={1.75} aria-hidden="true" />
          </span>
<span className="font-serif-display text-lg text-offwhite tracking-wide">
  {profile.firstName} Rezaei
</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              aria-current={active === link.href ? "page" : undefined}
              className={`px-3 py-2 text-sm tracking-wide rounded-full transition-colors ${
                active === link.href
                  ? "text-gold"
                  : "text-graycool-light hover:text-offwhite"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-4 py-2 text-sm text-gold hover:bg-gold hover:text-navy-deep transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          ref={buttonRef}
          className="lg:hidden text-offwhite p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
        >
          {mobileOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-navy/98 backdrop-blur-md overflow-hidden border-t border-white/10"
          >
            <nav className="flex flex-col px-5 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`py-3 text-base border-b border-white/5 last:border-0 ${
                    active === link.href ? "text-gold" : "text-graycool-light"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
