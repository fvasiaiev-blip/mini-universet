export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  url?: string;
  github?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Mini Universet",
    description:
      "An educational quiz platform for Norwegian students, modeling courses, quizzes, and multiple-choice questions with a clean REST API.",
    stack: ["Django", "Python", "SQLite", "REST"],
    github: "https://github.com/fvasiaiev-blip/mini-universet",
    year: 2026,
  },
  {
    id: "02",
    title: "Portfolio",
    description:
      "This site — a personal portfolio built with a focus on smooth animations, elegant typography, and subtle ASCII art accents.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    year: 2026,
  },
  {
    id: "03",
    title: "Project Three",
    description:
      "A placeholder for your next project. Replace this with something you're proud of.",
    stack: ["React", "Node.js", "PostgreSQL"],
    year: 2025,
  },
];
