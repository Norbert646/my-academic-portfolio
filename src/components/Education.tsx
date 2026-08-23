import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { educationTimeline } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 bg-navy">
      <div className="absolute inset-0 grid-backdrop opacity-[0.12]" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Record"
          description="A concise account of formal education, presented chronologically."
          light
        />

        <div className="relative border-l border-white/15 pl-8 sm:pl-12 space-y-14 max-w-3xl">
          {educationTimeline.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] sm:-left-[57px] top-1 w-3 h-3 rounded-full bg-gold ring-4 ring-navy" />
              <span className="text-xs tracking-[0.2em] uppercase text-gold-light">
                {entry.period}
              </span>
              <h3 className="font-serif-display text-2xl text-offwhite mt-2 flex items-center gap-2">
                <GraduationCap size={20} className="text-teal-light" strokeWidth={1.5} aria-hidden="true" />
                {entry.title}
              </h3>
              <p className="text-graycool-light text-sm mt-2 flex items-center gap-1.5">
                <MapPin size={13} aria-hidden="true" /> {entry.institution}, {entry.location}
              </p>
              <p className="text-graycool-light/90 text-sm leading-relaxed mt-3 max-w-xl">
                {entry.detail}
              </p>
              {entry.highlight && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs text-gold">
                  <Award size={13} aria-hidden="true" />
                  {entry.highlight}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}