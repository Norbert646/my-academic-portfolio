import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}`}
    >
      <div
        className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gold" />
        <span
          className={`text-xs font-sans tracking-[0.25em] uppercase ${
            light ? "text-gold-light" : "text-teal"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`font-serif-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.1] font-medium text-balance ${
          light ? "text-offwhite" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-graycool-light" : "text-graycool"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
