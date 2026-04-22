// import { motion } from "framer-motion";
// import { ExternalLink, Calendar } from "lucide-react";
// import { usePortfolio } from "@/lib/portfolio-context";
// import { projects, t } from "@/lib/i18n";
// import { Section } from "./Section";

// export function Projects() {
//   const { lang } = usePortfolio();
//   const tt = t[lang];

//   return (
//     <Section id="projects" title={tt.sections.projects} eyebrow="03">
//       <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
//         {projects.map((p, i) => (
//           <motion.a
//             key={i}
//             href={p.link}
//             target="_blank"
//             rel="noreferrer"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="glass group flex flex-col overflow-hidden rounded-2xl shadow-soft transition hover:shadow-glow"
//           >
//             <div className="relative aspect-video overflow-hidden">
//               <img src={p.image} alt={lang === "ar" ? p.titleAr : p.titleEn} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
//               <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-card/80 px-2 py-1 text-[10px] backdrop-blur"><Calendar className="h-3 w-3" />{p.period}</span>
//               <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full gradient-hero text-primary-foreground opacity-0 transition group-hover:opacity-100">
//                 <ExternalLink className="h-4 w-4" />
//               </span>
//             </div>
//             <div className="flex flex-1 flex-col p-5">
//               <h3 className="font-display text-lg font-semibold">{lang === "ar" ? p.titleAr : p.titleEn}</h3>
//               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lang === "ar" ? p.descAr : p.descEn}</p>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </Section>
//   );
// }
