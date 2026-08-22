import { motion } from "framer-motion";
import {
  FileDown,
  FileText,
  GraduationCap,
  FlaskConical,
  Award,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const previewSections = [
  {
    icon: GraduationCap,
    label: "Education",
    text: "B.Sc. Applied Chemistry, Khatam al-Anbia University of Behbahan (GPA 17.9/20)",
  },
  {
    icon: FlaskConical,
    label: "Laboratory Training",
    text: "Instrumental analysis, solution preparation, separation techniques, laboratory safety",
  },
  {
    icon: Award,
    label: "Experience",
    text: "Supervised internship — Bid Boland Gas Refinery, HSE-trained",
  },
  {
    icon: FileText,
    label: "Interests",
    text: "Organic, organometallic/catalysis, sustainable, and analytical chemistry",
  },
];

export default function CV() {
  return (
    <section
      id="cv"
      className="relative py-24 md:py-32 bg-navy overflow-hidden"
    >
      <div className="absolute inset-0 grid-backdrop opacity-[0.12]" />
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <SectionHeading
          eyebrow="Curriculum Vitae"
          title="Academic CV"
          description="A structured summary of my education, training, and academic profile — prepared for admissions review."
          align="center"
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 gap-4 mb-12 text-left"
        >
          {previewSections.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <s.icon
                size={18}
                strokeWidth={1.5}
                className="text-gold mt-1 shrink-0"
              />
              <div>
                <p className="text-xs tracking-widest uppercase text-gold-light">
                  {s.label}
                </p>
                <p className="text-sm text-graycool-light mt-1 leading-relaxed">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={profile.cvPath}
          download
          className="inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-sm font-medium text-navy-deep hover:bg-gold-light transition-colors"
        >
          <FileDown size={18} strokeWidth={2} />
          Download Academic CV (PDF)
        </motion.a>
        <p className="text-graycool-light/70 text-xs mt-4">
          Updated periodically to reflect current academic standing.
        </p>
      </div>
    </section>
  );
}
