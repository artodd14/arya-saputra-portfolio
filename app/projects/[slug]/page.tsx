import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Container className="py-8 md:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-ms uppercase tracking-wider transition-opacity hover:opacity-50"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        <div className="mt-20">
          <p className="font-mono text-ms uppercase tracking-[0.2em] text-neutral-500">
            {project.category} / {project.year}
          </p>

          <h1 className="mt-6 max-w-6xl text-[clamp(4rem,11vw,10rem)] font-bold uppercase leading-[0.8] tracking-[-0.075em]">
            {project.title}
          </h1>
        </div>

        <div className="mt-16 grid gap-12 border-t-2 border-black pt-8 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-ms uppercase tracking-wider text-neutral-500">
              Technologies
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-black px-2 py-1 font-mono text-[10px] uppercase"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="max-w-2xl text-xl leading-relaxed md:text-2xl">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-shadow inline-flex items-center gap-2 border-2 border-black bg-[var(--accent)] px-5 py-3 font-mono text-ms uppercase"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </Link>
              )}

              {project.live && (
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-shadow inline-flex items-center gap-2 border-2 border-black px-5 py-3 font-mono text-ms uppercase hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                >
                  Live Website
                  <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mt-20 aspect-video border-2 border-black bg-[var(--background)] p-6 md:p-10">
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-ms uppercase tracking-[0.2em] text-neutral-400">
              Project Preview
            </span>
          </div>
        </div>
      </Container>
    </main>
  );
}