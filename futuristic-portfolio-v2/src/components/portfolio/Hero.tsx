import { motion } from "framer-motion";
import { Download, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { usePortfolio } from "@/lib/portfolio-context";
import { t, CV_URL, profile, ASSETS } from "@/lib/i18n";

export function Hero() {
  const { lang } = usePortfolio();
  const tt = t[lang];
  const name = lang === "ar" ? profile.nameAr : profile.nameEn;
  const loc = lang === "ar" ? profile.locationAr : profile.locationEn;

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full gradient-hero opacity-20 blur-3xl animate-float" aria-hidden />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full gradient-hero opacity-20 blur-3xl animate-float" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.2fr_1fr] md:items-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {tt.hero.role}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
            {name.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-gradient">{name.split(" ").slice(-1)}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">{tt.hero.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CV_URL} download className="inline-flex items-center gap-2 rounded-xl gradient-hero px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
              <Download className="h-4 w-4" />
              {tt.hero.cta}
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-muted transition">
              <Mail className="h-4 w-4" />
              {tt.hero.contact}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{loc}</span>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition"><Github className="h-4 w-4" />GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground transition"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -m-6 rounded-full gradient-hero opacity-30 blur-2xl animate-glow-pulse" aria-hidden />
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/30 shadow-glow md:h-80 md:w-80">
            <img src={ASSETS.profile} alt={name} className="h-full w-full object-cover" />
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-4 rounded-full border border-dashed border-primary/40"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
