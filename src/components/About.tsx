import { motion } from "framer-motion";
import { Compass, BookOpenCheck, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Compass,
    title: "Scientific Curiosity",
    text: "An early and consistent interest in why chemical systems behave as they do, rather than only how to apply established procedures.",
  },
  {
    icon: BookOpenCheck,
    title: "Disciplined Foundation",
    text: "A strong academic record built through consistent coursework, laboratory practice, and attention to methodological rigor.",
  },
  {
    icon: Target,
    title: "Forward Orientation",
    text: "A deliberate, ongoing preparation for graduate-level study, shaped around European academic standards and expectations.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About"
              title="A student building a foundation, deliberately."
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-graycool leading-relaxed text-[15px]"
            >
              I am an undergraduate Applied Chemistry student at Khatam
              al-Anbia University of Behbahan, currently in the process of
              completing my B.Sc. with a GPA of 17.9/20. My academic path so
              far has been shaped by consistent coursework, close attention
              to laboratory method, and a growing interest in how molecular
              behavior can be measured, understood, and applied
              responsibly.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-graycool leading-relaxed text-[15px]"
            >
              I do not present myself as an expert or an established
              researcher — I am a student, still early in my formation,
              approaching each course and laboratory session as preparation
              for the more demanding, research-oriented environment of
              graduate study in Europe.
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-navy/10 bg-white/60 hover:border-teal/40 transition-colors ${
                  i === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <p.icon size={22} strokeWidth={1.5} className="text-teal mb-4" aria-hidden="true" />
                <h3 className="font-serif-display text-xl text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-graycool leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}