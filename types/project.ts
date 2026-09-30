export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: number;
  technologies: string[];
  featured?: boolean;
  github?: string;
  live?: string;
}