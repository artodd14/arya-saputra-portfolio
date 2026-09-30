"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";

export function Hero() {
  const [currentDate, setCurrentDate] = useState(() => new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentDate(new Date());
    }, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(currentDate);

  return (
    <section
      id="home"
      className="min-h-screen border-b-2 border-black pt-20"
      style={{ backgroundColor: "var(--background-hero)" }}
    >
      <Container className="flex min-h-[calc(100vh-80px)] flex-col justify-between py-10 md:py-16">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] md:text-ms">
          <span>01 / Portfolio</span>

          {/* <span className="hidden md:block">
            Web Development × Industrial Engineering
          </span> */}

          <time dateTime={currentDate.toISOString()}>{formattedDate}</time>
        </div>

        <div className="py-16 md:py-20">
          <div className="relative mt-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -left-1 -top-10 z-10 -rotate-12 whitespace-nowrap border-2 border-black bg-[var(--accent)] px-2 py-1 font-mono text-ms uppercase leading-none tracking-[0.12em] text-black shadow-[3px_3px_0_var(--shadow)] sm:-left-3 sm:px-3 sm:py-2 sm:text-base md:-left-20 md:-rotate-15 md:text-xl md:shadow-[5px_8px_0_var(--shadow)]"
            >
              Hello, I&apos;m Arya Saputra
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-[1100px] text-[2.5rem] font-bold uppercase leading-[0.85] tracking-[-0.075em] sm:text-6xl sm:leading-[0.78] md:text-7xl lg:text-8xl xl:text-[9rem]"
            >
              Building
              <br />
              Digital
              <br />
              <span
                className="hero-title-shadow text-[var(--orange)]"
              >
                Experiences.
              </span>
            </motion.h1>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg"
            >
              Industrial engineering student exploring web development,
              technology, design, and digital products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#projects"
                className="brutal-shadow inline-flex items-center justify-center border-2 border-black bg-[var(--orange)] text-white px-6 py-3 font-mono text-xl font-semibold uppercase tracking-wide"
              >
                View Projects →
              </Link>

              <Link
                href="#contact"
                className="brutal-shadow inline-flex items-center justify-center border-2 border-black bg-transparent px-6 py-3 font-mono text-xl font-semibold uppercase tracking-wide text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--orange)]"
              >
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex items-end justify-between border-t-2 border-black pt-4 font-mono text-[10px] uppercase tracking-wider md:text-ms">
          <div>
            <p>Based in Indonesia</p>
            <p className="mt-1 text-neutral-500">
              Available for projects
            </p>
          </div>

          <Link
            href="#projects"
            className="group hidden items-center gap-2 md:flex"
          >
            Scroll to explore
            <ArrowDownRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
}