import { motion } from "framer-motion";
import { ExternalLink, Award as AwardIcon } from "lucide-react";
import { usePortfolio } from "@/lib/portfolio-context";
import { certificates, t, ASSETS } from "@/lib/i18n";
import { Section } from "./Section";

export function Certificates() {
  const { lang } = usePortfolio();
  const tt = t[lang];

  return (
    <Section id="certs" title={tt.sections.certs} eyebrow="04">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificates.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass group flex flex-col overflow-hidden rounded-2xl shadow-soft transition hover:shadow-glow"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={ASSETS.certGeneric} alt={lang === "ar" ? c.ar : c.en} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay" />
              <span className="absolute top-3 left-3 inline-flex h-9 w-9 items-center justify-center rounded-full gradient-hero text-primary-foreground shadow-glow">
                <AwardIcon className="h-4 w-4" />
              </span>
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-card/80 px-2 py-1 text-[10px] backdrop-blur opacity-0 transition group-hover:opacity-100">
                <ExternalLink className="h-3 w-3" /> {tt.viewLink}
              </span>
            </div>
            <div className="flex-1 p-4">
              <h3 className="font-medium leading-snug">{lang === "ar" ? c.ar : c.en}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
