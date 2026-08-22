import { motion } from "framer-motion";
import { Microscope } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { instrumentalTechniques } from "../data/instrumentalAnalysis";

export default function InstrumentalAnalysis() {
  return (
    <section id="analysis" className="relative py-24 md:py-32 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Instrumental Analysis"
            title="Training in Analytical Methods"
            description="An overview of the instrumental techniques I have been introduced to during coursework and supervised laboratory sessions. These reflect training-level exposure, not professional proficiency."
            light
          />
          <Microscope
            size={44}
            strokeWidth={1}
            className="hidden lg:block text-teal-light/40 mb-16"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {instrumentalTechniques.map((t, i) => (
            <motion.div
              key={t.abbr}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="flex gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-gold/30 transition-colors"
            >
              <div className="shrink-0">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl border border-teal-light/30 text-teal-light font-serif-display text-sm tracking-tight">
                  {t.abbr}
                </span>
              </div>
              <div>
                <h3 className="font-serif-display text-lg text-offwhite">
                  {t.name}
                </h3>
                <p className="text-sm text-graycool-light leading-relaxed mt-1.5">
                  {t.description}
                </p>
                <span className="inline-block mt-3 text-xs tracking-wide uppercase text-gold-light/80">
                  {t.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
