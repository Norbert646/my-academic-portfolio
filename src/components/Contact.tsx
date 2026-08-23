import { useState, useRef, useEffect } from "react";
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
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [honeypot, setHoneypot] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

const validate = () => {
  firstErrorRef.current = null;
  const e: { [k: string]: string } = {};
  if (!form.name.trim()) e.name = "Please enter your name.";
  if (!form.email.trim()) e.email = "Please enter your email.";
  else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
  if (!form.message.trim()) e.message = "Please enter a message.";
  setErrors(e);
  return Object.keys(e).length === 0;
};

  const clearFieldError = (field: "name" | "email" | "message") => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (status === "loading") return;

    if (!validate()) {
      firstErrorRef.current?.focus();
      return;
    }

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
      _gotcha: honeypot,
    };

    setStatus("loading");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setErrors({});

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (err) {
      setStatus("idle");
      const errorMsg =
        err instanceof DOMException && err.name === "AbortError"
          ? `The request timed out. Please email me directly at ${profile.email}.`
          : "Something went wrong — please try again or email me directly.";
      setErrors({ message: errorMsg });
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-navy">
      <div className="absolute inset-0 grid-backdrop opacity-[0.12]" aria-hidden="true" />
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
                  <p className="text-xs tracking-widest uppercase text-graycool-light">
                    {l.label}
                  </p>
<p className="text-sm text-offwhite mt-1 break-all">
  {l.value}
  {l.label !== "Email" && <span className="sr-only"> (opens in a new tab)</span>}
</p>
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
            <p role="status" aria-live="polite" className="sr-only">
              {status === "loading" && "Sending your message…"}
              {status === "sent" && "Thank you — your message has been sent."}
            </p>

            <div role="alert" aria-live="assertive" className="sr-only">
              {Object.keys(errors).length > 0 &&
                `Form has ${Object.keys(errors).length} error${
                  Object.keys(errors).length > 1 ? "s" : ""
                }. ${Object.values(errors).join(" ")}`}
            </div>

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="text-xs text-graycool-light block mb-2">
                  Name
                </label>
                <input
                  ref={(el) => {
                    if (el && errors.name) firstErrorRef.current = el;
                  }}
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    clearFieldError("name");
                  }}
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
                  ref={(el) => {
                    if (el && errors.email && !errors.name) firstErrorRef.current = el;
                  }}
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    clearFieldError("email");
                  }}
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
                ref={(el) => {
                  if (el && errors.message && !errors.name && !errors.email) firstErrorRef.current = el;
                }}
                id="message"
                name="message"
                rows={4}
                autoComplete="off"
                value={form.message}
                onChange={(e) => {
                  setForm({ ...form, message: e.target.value });
                  clearFieldError("message");
                }}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-offwhite placeholder:text-graycool focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-navy resize-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p id="message-error" className="text-xs text-red-300 mt-1.5">{errors.message}</p>
              )}
            </div>

            <div className="absolute left-[-9999px] w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="_gotcha">Leave this field empty</label>
              <input
                id="_gotcha"
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

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

            <p className="text-xs text-graycool-onnavy mt-6 leading-relaxed">
              Your name, email address, and message are sent via{" "}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline hover:text-gold-light transition-colors"
              >
                Formspree
              </a>{" "}
              and used solely to reply to your enquiry. They are not shared, sold, or used for marketing,
              and are retained only as long as needed to correspond. No cookies or analytics are used on
              this site. To request deletion, email me directly.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}