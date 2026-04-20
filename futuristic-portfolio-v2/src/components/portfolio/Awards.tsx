import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { usePortfolio } from "@/lib/portfolio-context";
import { awards, t } from "@/lib/i18n";
import { Section } from "./Section";

export function Awards() {
  const { lang } = usePortfolio();
  const tt = t[lang];
  return (
    <Section id="awards" title={tt.sections.awards} eyebrow="06">
      <div className="grid gap-6 md:grid-cols-3">
        {awards.map((a, i) => (
          <motion.a
            key={i}
            href={a.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl shadow-soft transition hover:shadow-glow"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={a.image} alt={lang === "ar" ? a.titleAr : a.titleEn} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute top-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full gradient-hero text-primary-foreground shadow-glow">
                <Trophy className="h-5 w-5" />
              </span>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-card/80 px-2 py-1 text-[10px] backdrop-blur opacity-0 transition group-hover:opacity-100">
                <ExternalLink className="h-3 w-3" /> {tt.viewLink}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground">{a.date}</p>
              <h3 className="mt-1 font-display text-lg font-semibold">{lang === "ar" ? a.titleAr : a.titleEn}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{lang === "ar" ? a.descAr : a.descEn}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
