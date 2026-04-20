import { motion } from "framer-motion";
import { Languages, Moon, Sun, Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePortfolio } from "@/lib/portfolio-context";
import { t, CV_URL } from "@/lib/i18n";

export function Navbar() {
  const { lang, theme, toggleLang, toggleTheme } = usePortfolio();
  const [open, setOpen] = useState(false);
  const tt = t[lang];

  const links = [
    { href: "#about", label: tt.nav.about },
    { href: "#experience", label: tt.nav.experience },
    { href: "#projects", label: tt.nav.projects },
    { href: "#certs", label: tt.nav.certs },
    { href: "#skills", label: tt.nav.skills },
    { href: "#awards", label: tt.nav.awards },
    { href: "#langs", label: tt.nav.langs },
    { href: "#contact", label: tt.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 glass border-b"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-hero text-primary-foreground shadow-glow">AD</span>
          <span className="hidden sm:inline text-gradient">Dawshi</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CV_URL}
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-lg gradient-hero px-3 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:opacity-90 transition"
          >
            <Download className="h-4 w-4" />
            {tt.hero.cta}
          </a>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="rounded-lg border border-border bg-card p-2 text-foreground hover:bg-muted transition"
          >
            <Languages className="h-4 w-4" />
            <span className="sr-only">Toggle language</span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg border border-border bg-card p-2 text-foreground hover:bg-muted transition"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden rounded-lg border border-border bg-card p-2"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-border bg-card/95 backdrop-blur"
        >
          <div className="flex flex-col gap-1 p-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={CV_URL}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg gradient-hero px-3 py-2 text-sm font-medium text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              {tt.hero.cta}
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
