import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "brutalist-portfolio",
    title: "Brutalist Portfolio",
    description:
      "Personal portfolio website focused on brutalist visual design, responsive development, and interactive web experiences.",
    category: "Web Development",
    year: 2026,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    featured: true,
    github: "https://github.com",
    live: "https://example.com",
  },

  {
    slug: "industrial-dashboard",
    title: "Industrial Dashboard",
    description:
      "Dashboard concept for visualizing operational data, production metrics, and engineering information.",
    category: "UI / UX",
    year: 2026,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    featured: true,
    github: "https://github.com",
  },

  // {
  //   slug: "inventory-system",
  //   title: "Inventory System",
  //   description:
  //     "Web-based inventory management concept designed to simplify product tracking and operational workflows.",
  //   category: "Full Stack",
  //   year: 2025,
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "PostgreSQL",
  //   ],
  //   github: "https://github.com",
  // },
];