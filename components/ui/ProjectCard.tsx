import type { Project } from "@/types/project";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="brutal-shadow group overflow-hidden border-2 border-black bg-[var(--background-card)]">
      <div className="flex items-start justify-between gap-3 border-b-2 border-black bg-[var(--background-card))] px-3 py-2">
        <div className="flex flex-col justify-start">
          <span className="translate-y-[-2px] font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500">
            {project.category}
          </span>
        </div>

        <span className="translate-y-[-2px] font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
          {project.year}
        </span>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="block"
        aria-label={`View ${project.title} project`}
      >
        <div
          className={`relative -mt-px border-b-2 border-black p-4 ${
            index % 2 === 0
              ? "bg-[var(--purple)] text-black"
              : "bg-[var(--accent)] text-black"
              
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="max-w-[12ch] text-2xl font-black uppercase leading-none tracking-[-0.06em] md:text-[2rem]">
              {project.title}
            </h3>

            <ArrowUpRight
              size={18}
              strokeWidth={2}
              className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </Link>

      <div className="p-3">
        <p className="text-xl leading-relaxed text-neutral-600">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((technology, technologyIndex) => (
            <span
              key={technology}
              className={`border border-black px-2 py-1 font-mono text-[9px] uppercase tracking-wider ${
                technologyIndex % 3 === 0
                  ? "bg-[var(--accent-soft)] text-black"
                  : technologyIndex % 3 === 1
                    ? "bg-[var(--purple)] text-black"
                    : "bg-[var(--accent)] text-black"
              }`}
            >
              {technology}
              
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 border-t-2 border-black pt-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase underline underline-offset-4 transition-opacity hover:opacity-50"
            >
              GitHub
            </Link>
          )}

          {project.live && (
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase underline underline-offset-4 transition-opacity hover:opacity-50"
            >
              Live
            </Link>
          )}

          <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.12em] text-neutral-500">
            View
          </span>
        </div>
      </div>
    </article>
  );
}