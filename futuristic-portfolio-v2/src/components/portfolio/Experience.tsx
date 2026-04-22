// import { motion } from "framer-motion";
// import { ExternalLink, Calendar, MapPin } from "lucide-react";
// import { usePortfolio } from "@/lib/portfolio-context";
// import { experiences, t } from "@/lib/i18n";
// import { Section } from "./Section";

// export function Experience() {
//   const { lang } = usePortfolio();
//   const tt = t[lang];

//   return (
//     <Section id="experience" title={tt.sections.experience} eyebrow="02">
//       <div className="grid gap-6 md:gap-8">
//         {experiences.map((e, i) => (
//           <motion.article
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-60px" }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             className="glass group grid gap-0 overflow-hidden rounded-2xl shadow-soft transition hover:shadow-glow md:grid-cols-[280px_1fr]"
//           >
//             <a
//               href={e.link}
//               target="_blank"
//               rel="noreferrer"
//               className="relative block aspect-video overflow-hidden md:aspect-auto"
//               aria-label={lang === "ar" ? e.titleAr : e.titleEn}
//             >
//               <img src={e.image} alt={lang === "ar" ? e.titleAr : e.titleEn} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition group-hover:opacity-100" />
//               <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground opacity-0 transition group-hover:opacity-100">
//                 <ExternalLink className="h-3 w-3" /> {tt.viewLink}
//               </span>
//             </a>
//             <div className="p-6 md:p-8">
//               <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
//                 <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{e.period}</span>
//                 <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{lang === "ar" ? e.locAr : e.locEn}</span>
//               </div>
//               <h3 className="mt-2 font-display text-xl font-semibold">{lang === "ar" ? e.titleAr : e.titleEn}</h3>
//               <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{lang === "ar" ? e.descAr : e.descEn}</p>
//             </div>
//           </motion.article>
//         ))}
//       </div>
//     </Section>
//   );
// }
