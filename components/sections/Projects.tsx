import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-b-2 border-black py-12 md:py-16"
      style={{ backgroundColor: "var(--section-projects-background)" }}
    >
      <Container>
        <SectionTitle
          number="03"
          label="Selected Projects"
        />

        <div className="mt-10 grid gap-3 md:grid-cols-2 md:gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <span className="font-mono text-ms uppercase tracking-wider text-neutral-500">
            {projects.length} Projects / Selected Work
          </span>
        </div>
      </Container>
    </section>
  );
}