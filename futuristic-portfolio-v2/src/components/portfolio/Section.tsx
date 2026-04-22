// import { motion } from "framer-motion";
// import type { ReactNode } from "react";

// export function Section({ id, title, children, eyebrow }: { id: string; title: string; eyebrow?: string; children: ReactNode }) {
//   return (
//     <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
//       <div className="mx-auto max-w-7xl px-4 md:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
// //           transition={{ duration: 0.5 }}
// //           className="mb-10 text-center"
// //         >
// //           {eyebrow && <span className="text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</span>}
// //           <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
// //             <span className="text-gradient">{title}</span>
// //           </h2>
// //           <div className="mx-auto mt-3 h-1 w-16 rounded-full gradient-hero" />
// //         </motion.div>
// //         {children}
// //       </div>
// //     </section>
// //   );
// // }
