"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  {
    label: "Instagram",
    username: "@aryatodb",
    href: "https://www.instagram.com/aryatodb/",
  },
  {
    label: "GitHub",
    username: "@artodd14",
    href: "https://github.com/artodd14",
  },
  {
    label: "LinkedIn",
    username: "arya-saputra-b5455043b",
    href: "https://www.linkedin.com/in/arya-saputra-b5455043b/",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t-2 border-black"
      style={{ backgroundColor: "var(--section-contact-background)" }}
    >
      <Container>
        <div className="py-12 md:py-16">
          <div className="mb-10 font-mono text-ms uppercase tracking-[0.2em]">
            06 / Contact
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl font-display text-[2.75rem] font-bold uppercase leading-[0.85] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem]"
          >
            Let&apos;s Build
            <br />
            Something
            <br />
            <span className="hero-title-shadow text-[var(--orange)]">
              Useful.
            </span>
          </motion.h2>

          <div className="mt-12 grid gap-8 border-t-2 border-black pt-8 lg:mt-16 lg:grid-cols-2 lg:gap-10">
            <div>
              <p className="font-mono text-ms uppercase tracking-[0.2em] text-neutral-500">
                Get in touch
              </p>

              <a
                href="mailto:aryasaputramhs@gmail.com"
                className="mt-4 inline-flex max-w-full flex-wrap items-center gap-3 break-all font-display text-base font-bold transition-colors hover:text-[var(--accent)] sm:text-xl lg:text-2xl"
              >
                <Mail size={20} strokeWidth={2} />
                aryasaputramhs@gmail.com
              </a>
            </div>

            <div className="flex flex-col lg:items-end">
              <p className="mt-4 font-mono text-ms uppercase tracking-[0.2em] text-neutral-500 lg:mt-8">
                Find me online
              </p>

              <div className="mt-4 flex flex-wrap gap-3 lg:justify-end">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`brutal-shadow group inline-flex items-center gap-2 border-2 border-black px-3 py-3 font-mono text-base uppercase sm:px-5 sm:text-xl ${
                      link.label === "Instagram"
                        ? "bg-[var(--accent-soft)] text-white"
                        : index % 2 === 0
                          ? "bg-[var(--purple)] text-white"
                          : "bg-[var(--accent)] text-white"
                    }`}
                  >
                    <span className="flex flex-col items-start">
                      <span>{link.label}</span>
                      <span className="font-mono text-ms normal-case">
                        {link.username}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}