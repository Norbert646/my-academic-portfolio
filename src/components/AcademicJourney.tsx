import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { academicJourney } from "../data/academicJourney";

export default function AcademicJourney() {
  return (
    <section
      id="journey"
      className="relative py-24 md:py-32 bg-offwhite overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Academic Journey"
          title="How the Path Has Unfolded"
          description="A brief narrative of the milestones that have shaped my academic direction so far."
          align="center"
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-navy/15 sm:-translate-x-1/2" />
          <div className="space-y-10">
            {academicJourney.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.06 }}
                className={`relative flex sm:items-center gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold ring-4 ring-offwhite z-10" />
                <div
                  className={`pl-12 sm:pl-0 sm:w-1/2 ${
                    i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <span className="text-xs tracking-[0.2em] uppercase text-teal font-medium">
                    {m.year}
                  </span>
                  <h3 className="font-serif-display text-xl text-navy mt-1.5 mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-graycool leading-relaxed">
                    {m.description}
                  </p>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
