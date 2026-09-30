"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className="grid gap-4 border-t-2 border-black py-8 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[160px_minmax(0,1fr)]"
    >
      <div className="font-mono text-xl">
        {experience.period}
      </div>

      <div
        className={
          experience.image
            ? "grid gap-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:items-start"
            : ""
        }
      >
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="font-mono text-ms uppercase tracking-wider">
              {experience.type}
            </span>

            <span className="h-2 w-2 bg-[var(--accent)]" />
          </div>

          <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            {experience.organization}
          </h3>

          <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
            {experience.tambahan}
          </h3>

          <p className="mt-2 font-mono text-xl uppercase">
            {experience.role}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
            {experience.description}
          </p>

          {experience.technologies &&
            experience.technologies.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {experience.technologies.map((technology, index) => (
                  <span
                    key={technology}
                    className={`border border-black px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em] ${
                      index % 3 === 0
                        ? "bg-[var(--accent-soft)] text-black"
                        : index % 3 === 1
                          ? "bg-[var(--purple)] text-black"
                          : "bg-[var(--accent)] text-black"
                    }`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            )}
        </div>

        {experience.image && (
          <div className="relative mx-auto w-full max-w-[200px] border-2 border-black bg-[var(--accent)] p-2 shadow-[6px_6px_0_var(--shadow)] lg:ml-auto lg:max-w-[240px]">
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-black">
              <Image
                src={experience.image}
                alt={`Photo for ${experience.organization}`}
                fill
                sizes="(max-width: 767px) 80vw, 240px"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}