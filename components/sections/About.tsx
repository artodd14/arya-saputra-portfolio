import { skillGroups } from "@/data/skills";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { SkillGroup } from "@/components/ui/SkillGroup";

export function About() {
  return (
    <section
      id="about"
      className="border-b-2 border-black py-12 md:py-16"
      style={{ backgroundColor: "var(--section-about-background)" }}
    >
      <Container>
        <SectionTitle
          number="02"
          label="About"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <p className="font-mono text-ms uppercase tracking-[0.18em] text-neutral-500">
              Profile
            </p>

            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.85] tracking-[-0.06em] sm:text-5xl md:text-7xl">
              Engineering
              <br />
              Meets
              <br />
              <span className="text-[var(--orange)]">Technology</span>
            </h2>
          </div>

          <div className="self-end">
            <p className="max-w-xl text-lg leading-relaxed md:text-xl">
            I am an Informatics Engineering student interested in web development, digital products, and technology.
            I enjoy combining analytical thinking with visual design to build practical and engaging digital experiences.

            </p>

            <p className="mt-4 max-w-xl text-xl leading-relaxed text-neutral-500">
              My approach combines structured problem solving, experimentation,
              and continuous learning to turn ideas into useful and innovative digital products.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <div className="mb-6 flex items-center justify-between">
            <p className="font-mono text-ms uppercase tracking-[0.18em] text-neutral-500">
              Capabilities
            </p>

            <span className="font-mono text-ms uppercase text-neutral-400">
              {skillGroups.length} Categories
            </span>
          </div>

          <div>
            {skillGroups.map((group) => (
              <SkillGroup
                key={group.id}
                group={group}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}