import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ExternalLink, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "View Profile", href: profile.linkedin, icon: Linkedin },
  { label: "ResearchGate", value: "View Profile", href: profile.researchgate, icon: ExternalLink },
  { label: "GitHub", value: "View Profile", href: profile.github, icon: Github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [honeypot, setHoneypot] = useState("");

  const validate = () => {
    const e: { [k: string]: string } = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate() || status === "loading") return;

    if (honeypot) {
      setErrors({ message: "Spam detected. Your message was blocked." });
      return;
    }

    const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    
    if (!formEndpoint) {
      setErrors({ message: "Contact form is temporarily unavailable. Please email me directly." });
      return;
    }

    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    setStatus("loading");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Request failed");
      
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("idle");
      setErrors({ message: "Something went wrong — please try again or email me directly." });
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-navy">
      <div className="absolute inset-0 grid-backdrop opacity-[0.12]" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="For academic inquiries, admissions correspondence, or professional networking."
          light
        />

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 content-start">
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                href={l.href}
                target={l.label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex flex-col gap-3 p-5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-gold/40 hover:bg-white/[0.07] transition-colors"
              >
                <l.icon size={18} className="text-gold" strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <p className="text-xs tracking-widest uppercase text-graycool">
                    {l.label}
                  </p>
                  <p className="text-sm text-offwhite mt-1 truncate">{l.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            noValidate
            className="lg:col-span-7 rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="text-xs text-graycool-light block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-offwhite placeholder:text-graycool focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-navy"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="text-xs text-red-300 mt-1.5">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-graycool-light block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-offwhite placeholder:text-graycool focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-navy"
                  placeholder="you@institution.edu"
                />
                {errors.email && (
                  <p id="email-error" className="text-xs text-red-300 mt-1.5">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-xs text-graycool-light block mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-offwhite placeholder:text-graycool focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-navy resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-300 mt-1.5">{errors.message}</p>
              )}
            </div>

            {/* Honeypot field — hidden from real users */}
            <input
              type="text"
              name="_gotcha"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy-deep hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sent" ? <CheckCircle2 size={16} aria-hidden="true" /> : <Send size={16} aria-hidden="true" />}
              {status === "loading" ? "Sending…" : status === "sent" ? "Message Sent" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-xs text-teal-light mt-3">
                Thanks — your message has been sent. I'll get back to you soon.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}