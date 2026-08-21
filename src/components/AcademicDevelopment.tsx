import { motion } from "framer-motion";
import { BookOpen, Users, Presentation, PenLine } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { academicDevelopment } from "../data/academicDevelopment";

const icons = [Presentation, BookOpen, Users, PenLine];

export default function AcademicDevelopment() {
  return (
    <section className="relative py-24 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Academic Development"
          title="Continued Growth Beyond the Curriculum"
          description="Activities that support and extend my formal coursework."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {academicDevelopment.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-navy/10 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(11,29,48,0.08)] transition-all duration-300"
              >
                <Icon size={20} strokeWidth={1.5} className="text-teal mb-4" />
                <span className="text-[11px] tracking-widest uppercase text-gold">
                  {item.type}
                </span>
                <h3 className="font-serif-display text-lg text-navy mt-1.5 mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-graycool leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
