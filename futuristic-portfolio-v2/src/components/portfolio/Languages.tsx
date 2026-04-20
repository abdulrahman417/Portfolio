import { motion } from "framer-motion";
import { Languages as LangIcon } from "lucide-react";
import { usePortfolio } from "@/lib/portfolio-context";
import { t } from "@/lib/i18n";
import { Section } from "./Section";

export function Languages() {
  const { lang } = usePortfolio();
  const tt = t[lang];
  const items = [
    { name: tt.languages.arabic, level: 100, label: tt.languages.native, flag: "🇸🇦" },
    { name: tt.languages.english, level: 90, label: tt.languages.fluent, flag: "🇺🇸" },
  ];
  return (
    <Section id="langs" title={tt.sections.langs} eyebrow="07">
      <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
        {items.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 shadow-soft"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-3">
                <motion.span whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }} className="grid h-12 w-12 place-items-center rounded-xl gradient-hero text-2xl shadow-glow">
                  {l.flag}
                </motion.span>
                <span>
                  <h3 className="font-display text-lg font-semibold">{l.name}</h3>
                  <p className="text-xs text-muted-foreground">{l.label}</p>
                </span>
              </span>
              <LangIcon className="h-5 w-5 text-primary" />
            </div>
            <div className="mb-1 flex justify-between text-xs text-muted-foreground">
              <span>{l.label}</span>
              <span className="tabular-nums">{l.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${l.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-full gradient-hero"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
