import { motion } from "framer-motion";
import { Beaker, Layers, Shield, Laptop, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { labSkillGroups } from "../data/labSkills";
import { courses } from "../data/courses";

const icons = { beaker: Beaker, layers: Layers, shield: Shield, laptop: Laptop };

export default function LabSkills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Laboratory & Digital Skills"
          title="Developing Practical Competence"
          description="Skills built progressively through supervised laboratory sessions and coursework requirements."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {labSkillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="rounded-2xl border border-navy/10 bg-white p-6"
              >
                <Icon size={22} strokeWidth={1.5} className="text-teal mb-4" />
                <h3 className="font-serif-display text-lg text-navy mb-3">
                  {g.title}
                </h3>
                <ul className="space-y-2 mb-4">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[13px] text-graycool">
                      <Check size={14} className="text-teal mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] text-navy/50 italic border-t border-navy/10 pt-3">
                  {g.note}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-navy p-8 md:p-10"
        >
          <h3 className="font-serif-display text-2xl text-offwhite mb-2">
            Courses & Training
          </h3>
          <p className="text-graycool-light text-sm mb-8 max-w-xl">
            Core coursework forming the academic basis of my chemistry
            education to date.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
            {courses.map((c) => (
              <div key={c.name} className="border-l-2 border-gold/40 pl-4">
                <h4 className="text-offwhite text-sm font-medium">{c.name}</h4>
                <p className="text-graycool-light/80 text-[12.5px] leading-relaxed mt-1">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
