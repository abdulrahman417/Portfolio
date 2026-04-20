import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Lang } from "./i18n";

type Theme = "light" | "dark";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  toggleLang: () => void;
}

const PortfolioContext = createContext<Ctx | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedLang = (localStorage.getItem("lang") as Lang) || "en";
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setLang(savedLang);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <PortfolioContext.Provider
      value={{
        lang,
        setLang,
        theme,
        toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        toggleLang: () => setLang((l) => (l === "en" ? "ar" : "en")),
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const ctx = useContext(PortfolioContext);
  if (!ctx) throw new Error("usePortfolio must be used within PortfolioProvider");
  return ctx;
}
