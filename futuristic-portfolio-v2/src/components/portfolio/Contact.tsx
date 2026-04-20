import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import { usePortfolio } from "@/lib/portfolio-context";
import { profile, t, CV_URL } from "@/lib/i18n";
import { Section } from "./Section";

export function Contact() {
  const { lang } = usePortfolio();
  const tt = t[lang];
  return (
    <Section id="contact" title={tt.sections.contact} eyebrow="08">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-glow md:p-12"
      >
        <h3 className="font-display text-2xl font-bold md:text-3xl">{lang === "ar" ? "هيّا نبني شيئًا رائعًا معًا" : "Let's build something great together"}</h3>
        <p className="mt-3 text-muted-foreground">{lang === "ar" ? "متاح للفرص والتعاونات في الذكاء الاصطناعي وتطوير البرمجيات." : "Open to opportunities and collaborations in AI & software development."}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <a href={`mailto:${profile.email}`} className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm hover:shadow-glow transition"><Mail className="h-4 w-4 text-primary" />{profile.email}</a>
          <a href={`tel:${profile.phone}`} className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm hover:shadow-glow transition"><Phone className="h-4 w-4 text-primary" />{profile.phone}</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm hover:shadow-glow transition"><Github className="h-4 w-4 text-primary" />GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="glass flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm hover:shadow-glow transition"><Linkedin className="h-4 w-4 text-primary" />LinkedIn</a>
        </div>

        <a href={CV_URL} download className="mt-8 inline-flex items-center gap-2 rounded-xl gradient-hero px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
          <Download className="h-4 w-4" />
          {tt.hero.cta}
        </a>
      </motion.div>

      <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {lang === "ar" ? profile.nameAr : profile.nameEn}. {tt.footer}</p>
    </Section>
  );
}
