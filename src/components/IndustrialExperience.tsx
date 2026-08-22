import { motion } from "framer-motion";
import { Factory, ShieldCheck, ClipboardList } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  industrialExperience,
  hseTraining,
} from "../data/industrialExperience";

export default function IndustrialExperience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-navy">
      <div className="absolute inset-0 grid-backdrop opacity-[0.12]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Industrial Experience"
          title="Internship at Bid Boland Gas Refinery"
          light
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-2xl bg-white/[0.04] border border-white/10 p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal/15 text-teal-light">
                <Factory size={20} strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-serif-display text-xl text-offwhite">
                  {industrialExperience.organization}
                </h3>
                <p className="text-xs text-gold-light">
                  {industrialExperience.role} &middot;{" "}
                  {industrialExperience.location}
                </p>
              </div>
            </div>
            <p className="text-graycool-light text-[14.5px] leading-relaxed">
              {industrialExperience.description}
            </p>
            <ul className="mt-6 space-y-3">
              {industrialExperience.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-graycool-light"
                >
                  <ClipboardList
                    size={15}
                    className="text-teal-light mt-0.5 shrink-0"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 rounded-2xl bg-gold/[0.06] border border-gold/25 p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gold/15 text-gold">
                <ShieldCheck size={20} strokeWidth={1.5} />
              </span>
              <h3 className="font-serif-display text-xl text-offwhite">
                HSE Training
              </h3>
            </div>
            <p className="text-graycool-light text-sm leading-relaxed mb-5">
              <span className="text-gold-light">Duration: </span>
              {hseTraining.duration}
            </p>
            <p className="text-xs tracking-widest uppercase text-gold-light/80 mb-3">
              Topics Covered
            </p>
            <ul className="space-y-2.5">
              {hseTraining.topics.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2.5 text-sm text-graycool-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
