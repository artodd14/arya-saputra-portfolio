import type { SkillGroup } from "@/types/skill";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "Building responsive and interactive web interfaces with modern frontend technologies.",
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },

  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "Creating structured interfaces with a focus on usability, visual hierarchy, and design systems.",
    skills: [
      "UI Design",
      "UX Design",
      "Figma",
      "Design Systems",
      "Prototyping",
    ],
  },

  {
    id: "engineering",
    number: "03",
    title: "Engineering",
    description:
      "Applying engineering thinking to analyze problems, systems, processes, and digital solutions.",
    skills: [
      "Industrial Engineering",
      "Process Analysis",
      "System Thinking",
      "Data Analysis",
      "Problem Solving",
    ],
  },
];