// ─────────────────────────────────────────────────────────────────
//  Portfolio Content Data — Edit this file to update your portfolio
// ─────────────────────────────────────────────────────────────────

export const personal = {
  name: "Amirul Ibrahim",
  firstName: "Amirul",
  lastName: "Ibrahim",
  heroRoles: ["DEVELOPER", "DESIGNER", "PROGRAMMER", "WRITER", "CODER"],
  role: "Bachelor of Information Technology (Software Development)",
  tagline: "Innovation at the Intersection of Code and Design!",
  headline: "Woah! You Landed on the Portfolio Website of The",
  email: "amirul.ibrahim@email.com", // ← replace with real email
  linkedIn: "https://linkedin.com/in/amirul-ibrahim", // ← replace
  github: "https://github.com/amirul-ibrahim", // ← replace
  resumePdf: "/resume.pdf",
  bio: [
    "Hey there! I'm Amirul — a software developer and IT student who genuinely loves turning complex problems into clean, intuitive digital experiences. I thrive at the intersection of thoughtful engineering and creative design, believing that the best software is both technically solid and a joy to use.",
    "I'm a self-driven builder. Whether it's architecting a full-stack web app, optimising an algorithm for a competitive programming challenge, or exploring a new framework over the weekend — I'm always shipping something. I bring strong fundamentals in software development, a product-minded mindset, and an obsession with code quality.",
    "Outside of my studies and projects, you'll find me contributing to open source, grinding LeetCode, and exploring the latest in AI/ML tooling. I'm actively seeking opportunities where I can build real-world impact and keep growing alongside a great team.",
  ],
};

export const experiences = [
  {
    index: "01",
    company: "TechVenture Studio",
    role: "Software Engineering Intern",
    logo: "TV",
    dateRange: "JAN 2026 – APR 2026",
    bullets: [
      "Designed and implemented RESTful APIs with Node.js/Express, reducing average response latency by 38%.",
      "Built reusable React component library consumed across 3 internal dashboards, cutting UI dev time by 40%.",
    ],
  },
  {
    index: "02",
    company: "Freelance / Contract",
    role: "Full-Stack Web Developer",
    logo: "FL",
    dateRange: "JUN 2025 – DEC 2025",
    bullets: [
      "Delivered 5+ client websites (Next.js + Supabase) with 100% on-time delivery and 5-star reviews.",
      "Integrated payment gateways (Stripe, FPX) and automated client onboarding emails using Resend.",
    ],
  },
  {
    index: "03",
    company: "University IT Lab",
    role: "Student Lab Assistant",
    logo: "UL",
    dateRange: "SEP 2024 – MAY 2025",
    bullets: [
      "Assisted 80+ students per semester with programming coursework in Python, Java, and data structures.",
      "Developed automated grading scripts in Python that saved lab instructors 6+ hours per week.",
    ],
  },
];

export const projects = [
  {
    name: "CodeCollab — Real-Time Code Editor",
    category: "Full Stack Web App",
    date: "MAR-2K26",
    description:
      "A collaborative, real-time code editor supporting 20+ languages with live cursor sharing, integrated AI code suggestions (OpenAI), and GitHub OAuth. Built with Next.js, Socket.io, and Monaco Editor. Achieved sub-50ms sync latency under load testing.",
    tags: ["Next.js", "Socket.io", "OpenAI", "Monaco"],
    live: "https://codecollab.demo.com",
    github: "https://github.com/amirul-ibrahim/codecollab",
  },
  {
    name: "AlgoViz — Algorithm Visualiser",
    category: "Educational Tool",
    date: "NOV-2K25",
    description:
      "Interactive data-structures & algorithms visualiser featuring 15+ sorting, graph, and tree algorithms with step-by-step animation controls. Built with React + D3.js, used by 200+ fellow students to prepare for technical interviews.",
    tags: ["React", "D3.js", "TypeScript"],
    live: "https://algoviz.demo.com",
    github: "https://github.com/amirul-ibrahim/algoviz",
  },
  {
    name: "InventoFlow — Inventory SaaS",
    category: "SaaS / Business Tool",
    date: "AUG-2K25",
    description:
      "Multi-tenant inventory management SaaS with real-time stock tracking, low-stock alerts via WhatsApp API, sales analytics dashboard, and PDF report generation. Stack: Next.js, Supabase, Prisma.",
    tags: ["Next.js", "Supabase", "Prisma", "WhatsApp API"],
    live: "https://inventoflow.demo.com",
    github: "https://github.com/amirul-ibrahim/inventoflow",
  },
  {
    name: "DeepChat — AI Chat Interface",
    category: "AI / ML",
    date: "FEB-2K25",
    description:
      "A sleek, token-efficient chat UI wrapping multiple LLM providers (OpenAI, Anthropic, Mistral) with conversation history, system prompt editor, and streaming responses. Built with Next.js App Router + Server-Sent Events.",
    tags: ["Next.js", "OpenAI", "SSE", "Tailwind"],
    live: null,
    github: "https://github.com/amirul-ibrahim/deepchat",
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL", "Bash"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Three.js", "GSAP", "Framer Motion", "HTML/CSS"],
  backend: ["Node.js", "Express", "FastAPI", "REST APIs", "GraphQL", "WebSockets"],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Prisma"],
  tools: ["Git", "Docker", "Linux", "VS Code", "Figma", "Postman", "Vercel", "AWS EC2"],
  concepts: ["DSA", "OOP", "System Design", "Agile/Scrum", "CI/CD", "TDD"],
};

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    description:
      "Foundational understanding of AWS cloud architecture, services, pricing, and security. Covers core compute, storage, and networking services.",
    credentialUrl: "#",
    color: "#FF9900",
  },
  {
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta / Coursera",
    description:
      "Professional certificate covering React, advanced JavaScript, responsive design, and UX principles across a 9-course specialisation.",
    credentialUrl: "#",
    color: "#0668E1",
  },
  {
    title: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    description:
      "Comprehensive data analytics foundations including SQL, R, spreadsheets, data visualisation, and the analytics process lifecycle.",
    credentialUrl: "#",
    color: "#4285F4",
  },
  {
    title: "freeCodeCamp Full Stack Developer",
    issuer: "freeCodeCamp",
    description:
      "300+ hours of hands-on JavaScript, React, Node.js, and database fundamentals with verified project submissions.",
    credentialUrl: "#",
    color: "#0A0A23",
  },
];

export const socials = [
  {
    platform: "LinkedIn",
    label: "LinkedIn",
    sublabel: "Connect",
    url: "https://linkedin.com/in/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "linkedin",
    color: "#0A66C2",
  },
  {
    platform: "GitHub",
    label: "GitHub",
    sublabel: "Commit",
    url: "https://github.com/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "github",
    color: "#6E40C9",
  },
  {
    platform: "LeetCode",
    label: "LeetCode",
    sublabel: "Compete",
    url: "https://leetcode.com/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "leetcode",
    color: "#FFA116",
  },
  {
    platform: "HackerRank",
    label: "HackerRank",
    sublabel: "Solve",
    url: "https://hackerrank.com/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "hackerrank",
    color: "#00EA64",
  },
  {
    platform: "Dev.to",
    label: "Dev.to",
    sublabel: "Write",
    url: "https://dev.to/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "devto",
    color: "#3B49DF",
  },
  {
    platform: "Twitter/X",
    label: "Twitter/X",
    sublabel: "Thread",
    url: "https://x.com/amirul-ibrahim",
    handle: "@amirul-ibrahim",
    icon: "twitter",
    color: "#000000",
  },
];
