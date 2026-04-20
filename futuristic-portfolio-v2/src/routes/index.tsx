import { createFileRoute } from "@tanstack/react-router";
import { PortfolioProvider } from "@/lib/portfolio-context";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certificates } from "@/components/portfolio/Certificates";
import { Skills } from "@/components/portfolio/Skills";
import { Awards } from "@/components/portfolio/Awards";
import { Languages } from "@/components/portfolio/Languages";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abdulrahman Dawshi — AI Software Developer" },
      { name: "description", content: "Portfolio of Abdulrahman Ali Dawshi — AI Software Developer at Naseej. Projects, experience, certificates, and awards in AI, ML, and full-stack development." },
      { property: "og:title", content: "Abdulrahman Dawshi — AI Software Developer" },
      { property: "og:description", content: "Futuristic portfolio showcasing AI projects, experience, and certificates." },
    ],
  }),
});

function Index() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen gradient-soft">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Certificates />
          <Skills />
          <Awards />
          <Languages />
          <Contact />
        </main>
      </div>
    </PortfolioProvider>
  );
}
