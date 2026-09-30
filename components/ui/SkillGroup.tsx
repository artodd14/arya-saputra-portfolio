"use client";

import { motion } from "framer-motion";
import type { SkillGroup as SkillGroupType } from "@/types/skill";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="border-t-2 border-black py-6"
    >
      <div className="grid gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[80px_minmax(0,1fr)_1.2fr] lg:gap-8">
        <span className="font-mono text-ms">
          {group.number}
        </span>

        <div>
          <h3 className="text-3xl font-bold uppercase leading-none tracking-[-0.05em] md:text-5xl">
            {group.title}
          </h3>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="max-w-xl text-xl leading-relaxed text-neutral-600">
            {group.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {group.skills.map((skill, index) => (
              <span
                key={skill}
                className={`border border-black px-3 py-2 font-mono text-[10px] uppercase tracking-wider ${
                  index % 3 === 0
                    ? "bg-[var(--accent-soft)] text-black"
                    : index % 3 === 1
                      ? "bg-[var(--purple)] text-black"
                      : "bg-[var(--accent)] text-black"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}