import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiCplusplus, SiPhp, SiHtml5, SiReact, SiLaravel, SiDocker, SiFirebase, SiPostman, SiGithub,
} from "react-icons/si";
import { FaJava, FaDatabase, FaBrain, FaCode, FaKeyboard, FaUsers, FaLightbulb, FaComments } from "react-icons/fa";
import { usePortfolio } from "@/lib/portfolio-context";
import { skillGroups, t } from "@/lib/i18n";
import { Section } from "./Section";

const ICONS: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string }> = {
  Python: { icon: SiPython, color: "text-[#3776AB]" },
  Java: { icon: FaJava, color: "text-[#E76F00]" },
  JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]" },
  SQL: { icon: FaDatabase, color: "text-[#4479A1]" },
  "C++": { icon: SiCplusplus, color: "text-[#00599C]" },
  PHP: { icon: SiPhp, color: "text-[#777BB4]" },
  "HTML / CSS": { icon: SiHtml5, color: "text-[#E34F26]" },
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  Laravel: { icon: SiLaravel, color: "text-[#FF2D20]" },
  Docker: { icon: SiDocker, color: "text-[#2496ED]" },
  Firebase: { icon: SiFirebase, color: "text-[#FFCA28]" },
  Postman: { icon: SiPostman, color: "text-[#FF6C37]" },
  "Git / GitHub": { icon: SiGithub, color: "text-foreground" },
};

function fallbackIcon(name: string) {
  if (/AI|ذكاء/i.test(name)) return { icon: FaBrain, color: "text-primary" };
  if (/Web|ويب/i.test(name)) return { icon: FaCode, color: "text-accent" };
  if (/Typing|كتابة/i.test(name)) return { icon: FaKeyboard, color: "text-primary" };
  if (/Lead|قياد/i.test(name)) return { icon: FaUsers, color: "text-accent" };
  if (/Innov|ابتكار/i.test(name)) return { icon: FaLightbulb, color: "text-primary" };
  if (/Comm|تواصل/i.test(name)) return { icon: FaComments, color: "text-accent" };
  return { icon: FaCode, color: "text-primary" };
}

export function Skills() {
  const { lang } = usePortfolio();
  const tt = t[lang];
  const groups = skillGroups(lang);

  return (
    <Section id="skills" title={tt.sections.skills} eyebrow="05">
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 shadow-soft"
          >
            <h3 className="mb-5 font-display text-lg font-semibold text-gradient">{g.title}</h3>
            <ul className="space-y-4">
              {g.items.map((s, si) => {
                const meta = ICONS[s.name] ?? fallbackIcon(s.name);
                const Icon = meta.icon;
                return (
                  <li key={si}>
                    <div className="mb-1.5 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-sm font-medium">
                        <motion.span whileHover={{ rotate: 360, scale: 1.2 }} transition={{ duration: 0.5 }} className={`grid h-8 w-8 place-items-center rounded-lg bg-muted ${meta.color}`}>
                          <Icon className="h-4 w-4" />
                        </motion.span>
                        {s.name}
                      </span>
                      <span className="text-xs text-muted-foreground tabular-nums">{s.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + si * 0.05, ease: "easeOut" }}
                        className="h-full gradient-hero"
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
