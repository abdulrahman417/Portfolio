import profileImg from "@/assets/profile.jpg";
import expStc from "@/assets/exp-stc.jpg";
import expKaust from "@/assets/exp-kaust.jpg";
import expNaseej from "@/assets/exp-naseej.jpg";
import projSeen from "@/assets/proj-seen.jpg";
import projMaher from "@/assets/proj-maher.jpg";
import projYolo from "@/assets/proj-yolo.jpg";
import projEdutwin from "@/assets/proj-edutwin.jpg";
import projTomato from "@/assets/proj-tomato.jpg";
import projBees from "@/assets/proj-bees.jpg";
import projMuthmirah from "@/assets/proj-muthmirah.jpg";
import award1st from "@/assets/award-1st.jpg";
import awardHack from "@/assets/award-hackathon.jpg";
import awardTop11 from "@/assets/award-top11.jpg";
import certGeneric from "@/assets/cert-generic.jpg";

export type Lang = "en" | "ar";

export const ASSETS = {
  profile: profileImg,
  certGeneric,
};

export const CV_URL = "/cv/Abdulrahman_Dawshi_CV.pdf";

export const experiences = [
  {
    period: "06/2024 – 09/2024",
    image: expStc,
    link: "https://drive.google.com/drive/folders/1xMPhiOthI5-8vWxOzzTWRqCdrdB8HlZL?usp=sharing",
    titleEn: "Cooperative Training - STC",
    titleAr: "التدريب التعاوني - STC",
    locEn: "Jazan, Saudi Arabia",
    locAr: "جازان، المملكة العربية السعودية",
    descEn: "Delivered end-user IT support, configured network infrastructure and security, managed Active Directory and DNS, and performed data analysis to support network performance and reliability.",
    descAr: "قدمت دعمًا فنيًا للمستخدمين، وضبط البنية التحتية للشبكة وأمنها، وإدارة Active Directory وDNS، وتحليل البيانات لدعم أداء وموثوقية الشبكة.",
  },
  {
    period: "01/2025",
    image: expKaust,
    link: "https://drive.google.com/file/d/1fE-hJ8zQnbplmNP5d39lwjtDqPY7_ZYR/view?usp=sharing",
    titleEn: "AI Teaching Assistant – KAUST AI Qualifiers",
    titleAr: "مساعد تدريس الذكاء الاصطناعي – مؤهلات كاوست",
    locEn: "Jazan, Saudi Arabia",
    locAr: "جازان، المملكة العربية السعودية",
    descEn: "Co-led a five-day AI course teaching regression, ANN, autoencoders, DCT and overseeing labs where participants built SVM, CatBoost, and Decision Tree models.",
    descAr: "شاركت في تقديم دورة في الذكاء الاصطناعي لمدة خمسة أيام، تشمل الانحدار، الشبكات العصبية، autoencoders، وDCT، وأشرفت على تطبيقات بنى فيها المشاركون نماذج SVM وCatBoost وأشجار القرار.",
  },
  {
    period: "07/2025 – 07/2026",
    image: expNaseej,
    link: "https://www.naseej.com",
    titleEn: "AI Software Developer – Naseej",
    titleAr: "مطور برمجيات الذكاء الاصطناعي – نسيج",
    locEn: "Riyadh, Diplomatic Quarter",
    locAr: "الرياض، الحي الدبلوماسي",
    descEn: "Developing advanced AI software solutions to automate complex workflows, digitize documents, and create highly interactive user experiences.",
    descAr: "تطوير حلول برمجية متقدمة بالذكاء الاصطناعي لأتمتة سير العمل المعقد، ورقمنة المستندات، وبناء تجارب مستخدم تفاعلية.",
  },
];

export const projects = [
  {
    period: "09/2024 – 05/2025",
    image: projSeen,
    link: "https://drive.google.com/file/d/1PE7KQ1e7XGBBWJ33UCy2O4lmsjrp8wIL/view?usp=sharing",
    titleEn: "Seen Academy – Smart Learning Platform",
    titleAr: "أكاديمية سين – منصة تعلم ذكية",
    descEn: "AI-driven web-based inclusive learning platform modernizing education for students, instructors, and institutions. Senior graduation project.",
    descAr: "منصة تعلم شاملة بقيادة الذكاء الاصطناعي تأخذ التعليم إلى مستوى آخر للطلاب والمعلمين والمؤسسات. مشروع التخرج.",
  },
  {
    period: "04/2025",
    image: projMaher,
    link: "https://drive.google.com/drive/folders/1Cj-wkxRqDGFbmdHAI-8lnFLeFNk99fF-?usp=sharing",
    titleEn: "Maher – Intelligent Virtual Sports Companion",
    titleAr: "ماهر – الرفيق الرياضي الافتراضي الذكي",
    descEn: "AI-driven mobile platform delivering personalized real-time sports commentary and accessible features for visually and hearing-impaired fans.",
    descAr: "منصة جوال ذكية تقدم تعليقًا رياضيًا مخصصًا في الوقت الفعلي وميزات وصول للمعجبين من ذوي الإعاقة البصرية والسمعية.",
  },
  {
    period: "03/2025 – 04/2025",
    image: projYolo,
    link: "https://drive.google.com/drive/folders/1HMoaxYaqaOu-AMjPoVFauK66PworHbbC?usp=sharing",
    titleEn: "Multi-Model Object Detection with YOLO",
    titleAr: "اكتشاف الكائنات متعدد النماذج باستخدام YOLO",
    descEn: "Optimized 3 YOLOv11 models — 99% mAP50 for people/vehicles, 82% for traffic signs — for real-time (≥40 FPS) edge deployment on Jetson Nano.",
    descAr: "تحسين 3 نماذج YOLOv11 — دقة 99% للأشخاص والمركبات و82% لإشارات المرور — للنشر الفوري (≥40 FPS) على Jetson Nano.",
  },
  {
    period: "02/2025 – 04/2025",
    image: projEdutwin,
    link: "https://drive.google.com/drive/folders/1gI6v78FOZ3nGyhtKwL1DIwMdf0Phyx6n?usp=sharing",
    titleEn: "EduTwin – University Digital Twin",
    titleAr: "EduTwin – التوأم الرقمي للجامعة",
    descEn: "A personalized education platform that leverages student record data and interactive input forms to create a Digital Twin of the learner. It analyzes academic history to map out and recommend the optimal personalized learning journey for every student.",
    descAr: "   منصة تعليمية مخصصة تعتمد على نمذجة  التوأم الرقمي  للطالب من خلال استيعاب سجلات البيانات والنماذج المدخلة. يقوم النظام بتحليل البيانات الأكاديمية لرسم وتقديم أفضل مسار تعليمي مخصص يضمن تجربة تعلم مثالية لكل طالب. .",
  },
  {
    period: "12/2024 – 02/2025",
    image: projTomato,
    link: "https://drive.google.com/drive/folders/10XA27qs9hPigOsRzUZaQTOIkM4MypG7r?usp=sharing",
    titleEn: "AI Tomato Freshness Detection",
    titleAr: "نظام التحقق من صلاحية الطماطم بالذكاء الاصطناعي",
    descEn: "I-Powered Tomato Freshness Assessment: YOLOv8 vs. YOLOv11 Performance Enhancement.",
    descAr: "  تقييم نضج الطماطم باستخدام YOLO 8  و  YOLO 11 بعد التحسين .",
  },
  {
    period: "04/2024 – 08/2024",
    image: projBees,
    link: "https://drive.google.com/file/d/1V3Jd2mMAO36Y3dmL0JjDqlWff7Cicl8Z/view?usp=sharing",
    titleEn: "Queen Bee Detection with YOLOv8",
    titleAr: "اكتشاف ملكة النحل باستخدام YOLOv8",
    descEn: "Real-time object-detection pipeline leveraging YOLOv8 to identify queen bees within high-density hives.",
    descAr: "خط أنابيب لاكتشاف الكائنات في الوقت الفعلي باستخدام YOLOv8 لتحديد ملكات النحل في الخلايا عالية الكثافة.",
  },
  {
    period: "07/2025 – 08/2025",
    image: projMuthmirah,
    link: "https://drive.google.com/drive/folders/1JLsipB3QaTR5eBeF-EzL_i_DW1tS6L1e?usp=sharing",
    titleEn: "Muthmirah – Sustainable Land Investment",
    titleAr: "مُثمرة – الاستثمار الزراعي المستدام",
    descEn: "Transforms idle land into sustainable, high-ROI investments via AI soil analysis, interactive mapping, and blockchain trust — fueling Vision 2030.",
    descAr: "تحوّل الأراضي الخاملة إلى استثمارات مستدامة عبر تحليل التربة بالذكاء الاصطناعي والخرائط التفاعلية وثقة البلوك تشين — دعمًا لرؤية 2030.",
  },
];

// ─── Certificates ─────────────────────────────────────────────────────────────
// Drop your image into  public/logos/  then update only the filename in logo:"".
// Any format is accepted: avif · webp · png · jpg · jpeg · svg
// ─────────────────────────────────────────────────────────────────────────────
export const certificates = [
  { en: "Google Data Analytics Professional Certificate",              ar: "شهادة تحليل البيانات الاحترافية من قوقل",         issuer: "Google",                    logo: "/logos/google.webp",          link: "https://drive.google.com/file/d/1YP27g3bX4hoHkR2eqVSPqFtFEgkoaUGP/view?usp=sharing" },
  { en: "AI Concepts and Advanced Applications",                       ar: "مفاهيم الذكاء الاصطناعي والتطبيقات المتقدمة",       issuer: "SDAIA",                     logo: "/logos/sdaia.jpg",            link: "https://drive.google.com/file/d/117T4kkarESmktjqa2srJNliDWmj8IGMY/view?usp=sharing" },
  { en: "Unsupervised Learning, Recommenders, Reinforcement Learning", ar: "التعلم غير الموجه والأنظمة الموصية والتعلم المعزز", issuer: "DeepLearning.AI & Stanford", logo: "/logos/deeplearning.png",     link: "https://drive.google.com/file/d/1GiSwSpxbTEyJXM0nACsqhSEhYE3c1ggT/view?usp=sharing" },
  { en: "Fundamentals of Artificial Intelligence",                     ar: "أساسيات الذكاء الاصطناعي",                          issuer: "SDAIA",                     logo: "/logos/sdaia.jpg",            link: "https://drive.google.com/file/d/1-tKaa5jsWMyDe9osTl1j7AkA0OPl8srH/view?usp=sharing" },
  { en: "Cybersecurity Fundamentals",                                  ar: "أساسيات الأمن السيبراني",                            issuer: "IBM SkillsBuild",           logo: "/logos/ibm-skillsbuild.jpg",  link: "https://drive.google.com/file/d/1sD7vNRv2QNAYVpc7SOdpMe77Vw_g7Nns/view?usp=sharing" },
  { en: "Oracle Data Platform 2025 Certified Foundations Associate",   ar: "مساعد معتمد في أساسيات منصة أوراكل للبيانات 2025",              issuer: "Oracle",                    logo: "/logos/oracle.png",           link: "https://drive.google.com/file/d/1BtI05BA5BhfvMC4jUP9gkjSJsZevDfGs/view?usp=sharing" },
  { en: "STEP - 74",                                                   ar: "ستيب - 74",                                          issuer: "STEP",                      logo: "/logos/step.jpg",             link: "https://drive.google.com/file/d/1-5UsFGA2GnP1uidMzxtcyX60HVeT-t4F/view?usp=sharing" },
  { en: "Microsoft AI & ML Engineering Professional Certificate",      ar: "شهادة هندسة الذكاء الاصطناعي والتعلم الآلي",        issuer: "Microsoft",                 logo: "/logos/microsoft.png",        link: "https://drive.google.com/file/d/1kTlvrLxV9q3LQqavcALQsmjHdwAt7kmx/view?usp=sharing" },
  { en: "Supervised Machine Learning: Regression and Classification",  ar: "التعلم الآلي الموجه: الانحدار والتصنيف",             issuer: "Coursera",                  logo: "/logos/coursera.avif",         link: "https://drive.google.com/file/d/1nAs0ZC8GAnOEVnACk26ROpcbcTBBofQy/view?usp=sharing" },
  { en: "Advanced Learning Algorithms",                                ar: "خوارزميات التعلم المتقدمة",                          issuer: "DeepLearning.AI & Stanford", logo: "/logos/deeplearning.png",    link: "https://drive.google.com/file/d/1pFn1u_8su1ZxoNQ9gvs_fxiVo5SuKyCO/view?usp=sharing" },
  { en: "Artificial Intelligence Fundamentals",                        ar: "أساسيات الذكاء الاصطناعي",                          issuer: "IBM SkillsBuild",           logo: "/logos/ibm-skillsbuild.jpg",  link: "https://drive.google.com/file/d/1DkMi5WNi3IoELWqhvVToczWeMmIdgUBx/view?usp=sharing" },
  { en: "Google Project Management Professional Certificate",          ar: "شهادة إدارة المشاريع الاحترافية من قوقل",         issuer: "Google",                  logo: "/logos/google.webp",         link: "https://drive.google.com/file/d/1Eu4a2W02zipCSG9yqQWJaCseYG_zmioG/view?usp=sharing" },
  { en: "Machine Learning with Python",                                ar: "تعلم الآلة باستخدام بايثون",                        issuer: "IBM",                       logo: "/logos/ibm.jpg",              link: "https://drive.google.com/file/d/1ZiGQyhUACLGDhurl6bxZUtBzPPWW3VQk/view?usp=sharing" },
  { en: "IBM Applied DevOps Engineering",                              ar: " هندسة العمليات والتطوير التطبيقية من آي بي إم ",                             issuer: "IBM",                       logo: "/logos/ibm.jpg",              link: "https://drive.google.com/drive/folders/1NfJH9cKsqFykbA3cXjcXqCrp43hEfk2-?usp=sharing" },
  { en: "REST API Design, Development & Management (C#)",              ar: "تصميم وتطوير وإدارة REST API (C#)",                  issuer: "The Knowledge Academy",     logo: "/logos/the-knowledge-academy.jpg", link: "https://drive.google.com/file/d/1sAyLVzx_qUn1EoYl9L28rVOajX24HbaW/view?usp=sharing" },
];

export const awards = [
  {
    image: award1st,
    link: "https://drive.google.com/file/d/1bzheJzM0LHwZnGNx9VUHZzUJ0tdmodDs/view?usp=sharing",
    date: "05/06/2025",
    titleEn: "1st Rank in Computer Science Major",
    titleAr: "المرتبة الأولى في تخصص علوم الحاسب",
    descEn: "Jazan University — graduated top of the class with First-Class Honours.",
    descAr: "جامعة جازان — تخرجت الأول على الدفعة بمرتبة الشرف الأولى.",
  },
  {
    image: awardHack,
    link: "https://drive.google.com/file/d/1sOmtJj-fZhYkxo7TMyioal2iIlJC0zF-/view?usp=sharing",
    date: "01/07/2025",
    titleEn: "3rd Place – Muthmirah Project",
    titleAr: "المركز الثالث – مشروع مُثمرة",
    descEn: "Innovation Hackathon, Al Baha.",
    descAr: "هاكاثون الابتكار، الباحة.",
  },
  {
    image: awardTop11,
    link: "https://drive.google.com/drive/folders/1gI6v78FOZ3nGyhtKwL1DIwMdf0Phyx6n?usp=sharing",
    date: "27/04/2025",
    titleEn: "Top 11 Project Ideas (Digital Twin)",
    titleAr: "أفضل 11 فكرة مشروع (التوأم الرقمي)",
    descEn: "Selected among the top 11 project ideas at Jazan University.",
    descAr: "مختار ضمن أفضل 11 فكرة مشروع في جامعة جازان.",
  },
];

export const t = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", certs: "Certificates", skills: "Skills", awards: "Awards", langs: "Languages", contact: "Contact" },
    hero: {
      role: "AI Software Developer",
      tagline: "Building intelligent, production-ready AI systems that automate workflows and elevate user experiences.",
      cta: "Download CV",
      contact: "Get in touch",
    },
    sections: {
      about: "About Me",
      experience: "Professional Experience",
      projects: "Projects",
      certs: "Certificates",
      skills: "Skills",
      awards: "Awards",
      langs: "Spoken Languages",
      contact: "Contact",
    },
    skills: {
      programming: "Programming Languages",
      technical: "Technical & Hard Skills",
      tools: "Developer Tools",
      soft: "Soft Skills",
    },
    languages: { arabic: "Arabic", english: "English", native: "Native", fluent: "Fluent" },
    footer: "Designed & built with passion.",
    viewLink: "Open link",
  },
  ar: {
    nav: { about: "نبذة", experience: "الخبرات", projects: "المشاريع", certs: "الشهادات", skills: "المهارات", awards: "الجوائز", langs: "اللغات", contact: "تواصل" },
    hero: {
      role: "مطوّر برمجيات الذكاء الاصطناعي",
      tagline: "أبني أنظمة ذكاء اصطناعي ذكية وجاهزة للإنتاج تُؤتمت سير العمل وترتقي بتجارب المستخدم.",
      cta: "تحميل السيرة الذاتية",
      contact: "تواصل معي",
    },
    sections: {
      about: "نبذة عني",
      experience: "الخبرات المهنية",
      projects: "المشاريع",
      certs: "الشهادات",
      skills: "المهارات",
      awards: "الجوائز",
      langs: "اللغات",
      contact: "تواصل",
    },
    skills: {
      programming: "لغات البرمجة",
      technical: "المهارات التقنية",
      tools: "أدوات المطوّر",
      soft: "المهارات الشخصية",
    },
    languages: { arabic: "العربية", english: "الإنجليزية", native: "اللغة الأم", fluent: "بطلاقة" },
    footer: "صُمم وبُني بشغف.",
    viewLink: "فتح الرابط",
  },
};

export const profile = {
  nameEn: "Abdulrahman Ali Dawshi",
  nameAr: "عبدالرحمن علي دوشي",
  email: "abdulrahmandawshi2@gmail.com",
  phone: "+966 559 346 289",
  locationEn: "Riyadh, Saudi Arabia",
  locationAr: "الرياض، المملكة العربية السعودية",
  github: "https://github.com/Abdulrahman23-op",
  linkedin: "https://www.linkedin.com/in/abdulrahman-dawshi",
  bioEn: "Current AI Software Developer at Naseej, building advanced AI solutions that automate complex workflows, digitize documents, and create highly interactive user experiences. Graduated top of the class with First-Class Honours in Computer Science (AI Track) from Jazan University, holds the Google Data Analytics Professional Certificate, and served as AI Teaching Assistant for the KAUST program. A strategic builder skilled at translating complex AI/ML concepts into scalable, production-ready systems.",
  bioAr: "مطوّر برمجيات الذكاء الاصطناعي حاليًا في شركة نسيج، أعمل على بناء حلول ذكاء اصطناعي متقدمة لأتمتة سير العمل المعقد، ورقمنة المستندات، وبناء تجارب مستخدم تفاعلية للغاية. تخرجت الأول على الدفعة بمرتبة الشرف الأولى في علوم الحاسب (مسار الذكاء الاصطناعي) من جامعة جازان، أحمل شهادة Google Data Analytics الاحترافية، وعملت مساعد تدريس للذكاء الاصطناعي في برنامج كاوست. شغوف بتحويل مفاهيم الذكاء الاصطناعي إلى أنظمة قابلة للتوسع وجاهزة للإنتاج.",
};

export const skillGroups = (lang: Lang) => [
  {
    title: t[lang].skills.programming,
    items: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 88 },
      { name: "C++", level: 75 },
      { name: "PHP", level: 75 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
  {
    title: t[lang].skills.technical,
    items: [
      { name: lang === "ar" ? "خبير ذكاء اصطناعي (ANN, ML/DL)" : "AI Expert (ANN, ML/DL)", level: 92 },
      { name: lang === "ar" ? "تطوير ويب متكامل" : "Full-Stack Web Dev", level: 88 },
      { name: lang === "ar" ? "الكتابة باللمس (50 WPM)" : "Touch Typing (50 WPM)", level: 80 },
    ],
  },
  {
    title: t[lang].skills.tools,
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "React", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "Docker", level: 75 },
      { name: "Firebase", level: 80 },
      { name: "Postman", level: 88 },
    ],
  },
  {
    title: t[lang].skills.soft,
    items: [
      { name: lang === "ar" ? "القيادة" : "Leadership", level: 92 },
      { name: lang === "ar" ? "حل المشكلات" : "Problem Solving", level: 95 },
      { name: lang === "ar" ? "الابتكار" : "Innovation", level: 90 },
      { name: lang === "ar" ? "التواصل الفعّال" : "Communication", level: 90 },
    ],
  },
];