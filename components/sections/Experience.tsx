import { experiences } from "@/data/experience";
import { education } from "@/data/education";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { EducationItem } from "@/components/ui/EducationItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="pt-12 pb-8 md:pt-16 md:pb-12"
      style={{ backgroundColor: "var(--section-experience-background)" }}
    >
      <Container>
        <SectionTitle
          number="05"
          label="Experience"
        />

        <div className="mt-12">
          <div className="mb-8">
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight">
              Background
            </h2>
          </div>
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-8">
            <h2 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight">
              Education
            </h2>
          </div>

          <div>
            {education.map((item) => (
              <EducationItem
                key={item.id}
                education={item}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}