import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { faqItems } from "../data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-offwhite">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Concise answers to questions commonly raised by admissions committees and academic contacts."
          align="center"
        />

        <div className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-navy/10 bg-white overflow-hidden"
              >
                <h3>
                  <button
                    id={`faq-btn-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-serif-display text-lg text-navy">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-teal transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm text-graycool leading-relaxed border-t border-navy/5 pt-4">
                    {item.answer}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}