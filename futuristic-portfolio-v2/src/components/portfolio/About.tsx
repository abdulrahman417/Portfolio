import { motion } from "framer-motion";
import { usePortfolio } from "@/lib/portfolio-context";
import { profile, t } from "@/lib/i18n";
import { Section } from "./Section";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function About() {
  const { lang } = usePortfolio();
  const tt = t[lang];

  return (
    <Section id="about" title={tt.sections.about} eyebrow="01">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-5xl gap-6 md:grid-cols-[1fr_auto]"
      >
        <div className="glass rounded-2xl p-6 md:p-8 shadow-soft">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {lang === "ar" ? profile.bioAr : profile.bioEn}
          </p>
        </div>
        <div className="glass flex flex-col gap-3 rounded-2xl p-6 md:p-8 text-sm shadow-soft">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-primary transition"><Mail className="h-4 w-4 text-primary" />{profile.email}</a>
          <a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-primary transition"><Phone className="h-4 w-4 text-primary" />{profile.phone}</a>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />{lang === "ar" ? profile.locationAr : profile.locationEn}</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition"><Github className="h-4 w-4 text-primary" />GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition"><Linkedin className="h-4 w-4 text-primary" />LinkedIn</a>
        </div>
      </motion.div>
    </Section>
  );
}
