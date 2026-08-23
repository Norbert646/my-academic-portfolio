import { motion } from "framer-motion";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { scrollToSection } from "../lib/scroll";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center bg-navy overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 grid-backdrop opacity-[0.35]" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy-deep" />

      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[560px] h-[560px] hidden md:block pointer-events-none" aria-hidden="true">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border border-teal/30"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: "easeOut" }}
          className="absolute inset-[70px] rounded-full border border-gold/25"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
          className="absolute inset-[150px] rounded-full border border-graycool/20"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[70px]"
        >
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-teal-light" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full">
          <div className="flex-1 max-w-3xl text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            >
              <span className="h-px w-10 bg-gold" />
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-gold-light">
                Applied Chemistry &middot; Behbahan, Iran
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-offwhite text-balance"
            >
              {profile.name}
              <span className="block text-graycool-light text-2xl sm:text-3xl md:text-4xl mt-3 font-normal">
                {profile.title}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 text-lg text-graycool-light leading-relaxed max-w-xl text-balance mx-auto md:mx-0"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-4 text-sm text-graycool-onnavy leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              Undergraduate at {profile.university}, currently holding a GPA of{" "}
              {profile.gpa}. My academic curiosity centers on organic and
              analytical chemistry, supported by hands-on laboratory training
              and a developing familiarity with instrumental methods.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36 }}
              className="mt-10 flex flex-wrap items-center gap-4 justify-center md:justify-start"
            >
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep hover:bg-gold-light transition-colors"
              >
                <FileDown size={16} strokeWidth={2} aria-hidden="true" />
                Download Academic CV (PDF)
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#about");
                }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-offwhite hover:border-teal-light hover:text-teal-light transition-colors"
              >
                Explore My Background
                <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-graycool-light hover:text-offwhite transition-colors"
              >
                <Mail size={16} strokeWidth={2} aria-hidden="true" />
                Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="shrink-0"
          >
            <picture>
              <source srcSet="/profile.avif" type="image/avif" />
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.jpg"
                alt="Portrait of Hossein Rezaei"
                width={256}
                height={256}
                fetchPriority="high"
                decoding="async"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover border-[3px] border-gold/40 shadow-2xl shadow-navy-deep/50"
              />
            </picture>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-graycool">
          Scroll
        </span>
        <span className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}