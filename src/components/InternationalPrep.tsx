import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { internationalPrep } from "../data/internationalPrep";

export default function InternationalPrep() {
  return (
    <section id="preparation" className="relative py-24 md:py-32 bg-paper">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="International Preparation"
              title="Preparing for Graduate Study in Europe"
              description="Concrete steps I am taking to become a well-prepared candidate for European Master's programs."
            />
            <div className="flex items-center gap-3 mt-6 text-teal">
              <Globe2 size={22} strokeWidth={1.5} aria-hidden="true" />
              <span className="text-sm text-graycool">
                Oriented toward chemistry departments across Europe
              </span>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {internationalPrep.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-white border border-navy/10"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-serif-display text-lg text-navy mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-graycool leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}