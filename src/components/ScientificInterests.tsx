import { useState } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Atom, Leaf, BarChart3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { scientificInterests } from "../data/scientificInterests";

const icons = {
  flask: FlaskConical,
  atom: Atom,
  leaf: Leaf,
  analytics: BarChart3,
};

export default function ScientificInterests() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="interests" className="relative py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Scientific Interests"
          title="Areas of Academic Curiosity"
          description="Fields I engage with as a student — explored through coursework and independent reading, not presented as areas of professional expertise."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {scientificInterests.map((card, i) => {
            const Icon = icons[card.icon];
            const isOpen = openId === card.id;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative rounded-2xl border border-navy/10 bg-white p-7 overflow-hidden hover:shadow-[0_16px_40px_rgba(11,29,48,0.08)] hover:border-teal/30 transition-all duration-300"
                onMouseEnter={() => setOpenId(card.id)}
                onMouseLeave={() => setOpenId(null)}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal/5 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-500" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-navy/5 text-teal mb-5 group-hover:bg-teal group-hover:text-offwhite transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif-display text-xl text-navy mb-2">
                    {card.title}
                  </h3>
                  <button
                    type="button"
                    id={`interest-btn-${card.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`interest-panel-${card.id}`}
                    onClick={() => setOpenId(isOpen ? null : card.id)}
                    className="text-left w-full"
                  >
                    <p className="text-sm text-graycool leading-relaxed">
                      {card.short}
                    </p>
                  </button>
                  <motion.div
                    id={`interest-panel-${card.id}`}
                    role="region"
                    aria-labelledby={`interest-btn-${card.id}`}
                    inert={!isOpen}
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                      marginTop: isOpen ? 14 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-navy/70 leading-relaxed border-t border-navy/10 pt-3">
                      {card.detail}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}