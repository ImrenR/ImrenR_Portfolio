export const profile = {
  name: "Imren Rahbay",
  title: "Full Stack Developer",
  location: "Porto, Portugal",
  email: "imrenrahbay@gmail.com",
  linkedin: "https://www.linkedin.com/in/imrenr/",
  github: "https://github.com/ImrenR",
  summary:
    "Full Stack Developer with a background in food engineering and quality management, bringing over 3 years of experience building responsive web applications. Comfortable across the stack with JavaScript, TypeScript, React.js, Next.js, Node.js, and Express.js, alongside SQL, Java, PostgreSQL, and MongoDB. Focused on delivering user-friendly interfaces backed by solid, well-structured server-side solutions.",
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux",
      "React Router DOM",
      "React Hook Form",
      "Material-UI",
      "Context API",
    ],
  },
  {
    category: "Backend",
    items: ["Express.js", "Spring", "Spring Boot", "Mongoose", "Sequelize", "Prisma"],
  },
  {
    category: "Styling",
    items: ["TailwindCSS", "CSS/SCSS", "Sass"],
  },
  {
    category: "Data & APIs",
    items: ["REST APIs", "MongoDB", "PostgreSQL", "MySQL", "ORM", "JWT", "Axios / Fetch API"],
  },
  {
    category: "Tooling",
    items: ["Git / GitHub", "npm", "pnpm", "yarn", "Vite", "Docker", "GitHub Actions (CI/CD)"],
  },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Full Stack Developer",
    company: "Reckon AI",
    location: "Remote",
    period: "04/2025 - Current",
    highlights: [
      "Building and maintaining full-stack features across the product, working with modern JavaScript/TypeScript tooling.",
    ],
  },
  {
    role: "Full Stack Developer: Web Development",
    company: "Clarusway",
    location: "Remote",
    period: "07/2022 - 04/2025",
    highlights: [
      "Build responsive and dynamic web applications using HTML, CSS, JavaScript, React, Next.js and other modern front-end libraries.",
      "Implement server-side logic and APIs using Node.js, Express, and Java (Spring Boot), integrating SQL/NoSQL databases for full-stack functionality.",
      "Led the migration of legacy systems to modern technology stacks, improving application scalability and maintainability.",
      "Collaborated with cross-functional teams to design and implement RESTful APIs, streamlining data exchange and improving efficiency.",
    ],
  },
  {
    role: "Research Support Officer 1: Web & E-Learning Development",
    company: "University of Malta",
    location: "Malta (Remote)",
    period: "02/2022 - 08/2023",
    highlights: [
      "Created and maintained the project website and e-learning platform for FOSTER-xR, an EU-funded initiative.",
      "Collaborated with academic staff to design and implement digital learning strategies that increased student engagement.",
      "Conducted user testing and gathered feedback, leading to iterative improvements in online learning tools and platforms.",
      "Managed the content update process for the university's e-learning platform, ensuring accuracy and relevance of educational materials.",
    ],
  },

];

export type ProjectEntry = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  liveUrl?: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "Cinescope",
    description:
      "Movie explorer app — browse current movies, view ratings and details, sign in with email or Google.",
    tech: ["React", "TMDb API", "Firebase Auth"],
    url: "https://github.com/ImrenR/cinescope",
    liveUrl: "https://cinescope-alpha.vercel.app",
  },
  {
    name: "Legends United",
    description:
      "Explore football legends with interactive profiles, stats, and search.",
    tech: ["React", "Vite", "Bootstrap"],
    url: "https://github.com/ImrenR/Legends-United-App",
    liveUrl: "https://legends-united-app.vercel.app",
  },
  {
    name: "RecipeApp",
    description:
      "Recipe discovery app — search dishes and explore detailed recipes powered by a food API.",
    tech: ["React", "Redux Thunk", "React Router", "Axios"],
    url: "https://github.com/ImrenR/RecipeApp",
    liveUrl: "https://recipe-app-ecru-omega.vercel.app",
  },
  {
    name: "React Shopping Cart",
    description:
      "Shopping cart app — add, update, and delete products via a mock API, with dynamic tax and shipping totals.",
    tech: ["React", "React Router", "Axios", "Bootstrap"],
    url: "https://github.com/ImrenR/React-ShoppingCard",
    liveUrl: "https://react-shoppingcard.vercel.app",
  },
  {
    name: "Team Management App",
    description:
      "Full-stack team management application with JWT authentication and role-based access control (Admin, Manager, User).",
    tech: ["Next.js 16", "Prisma", "PostgreSQL", "JWT"],
    url: "https://github.com/ImrenR/team-managment-nextjs-16",
  },
];

export type EducationEntry = {
  title: string;
  institution: string;
  location: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    title: "Full-Stack Development",
    institution: "Clarusway",
    location: "USA",
    period: "05/2025",
  },
  {
    title: "Bachelor of Science: Food Engineering",
    institution: "University of Mersin",
    location: "Turkey",
    period: "06/2014",
  },
];

export const certificates: { title: string; year: string }[] = [
  { title: "Web Development Essentials Module", year: "2024" },
  { title: "Web Development with React", year: "2024" },
  { title: "Back-End Development", year: "2025" },
];

export const languages: { name: string; level: string }[] = [
  { name: "English", level: "Fluent" },
  { name: "Turkish", level: "Native" },
  { name: "Arabic", level: "Elementary" },
  { name: "Portuguese", level: "Beginner" },
];
