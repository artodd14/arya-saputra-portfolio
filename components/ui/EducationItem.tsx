"use client";

import { motion } from "framer-motion";
import type { Education } from "@/types/education";

interface EducationItemProps {
  education: Education;
}

export function EducationItem({
  education,
}: EducationItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="grid gap-4 border-t-2 border-black py-8 sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[160px_minmax(0,1fr)]"
    >
      <div className="font-mono text-xl">
        {education.period}
      </div>

      <div>
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          {education.institution}
        </h3>

        <p className="mt-2 font-mono text-xl uppercase">
          {education.degree}
        </p>

        <p className="mt-1 font-mono text-xl uppercase text-[var(--orange)]">
          {education.field}
        </p>

        {education.description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600">
            {education.description}
          </p>
        )}
      </div>
    </motion.article>
  );
}