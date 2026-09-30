"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

const themeChangeEvent = "portfolio-theme-change";

function subscribeToTheme(onChange: () => void) {
  window.addEventListener(themeChangeEvent, onChange);
  return () => window.removeEventListener(themeChangeEvent, onChange);
}

function getThemeSnapshot() {
  return document.documentElement.dataset.theme === "dark";
}

function getServerThemeSnapshot() {
  return false;
}

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 ">
      <nav
        className="border-b-2 border-black bg-[var(--background)]"
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10 xl:px-16">
          {/* Logo */}
          <Link
            href="#home"
            onClick={closeMenu}
            className="font-display text-xl font-bold tracking-[-0.06em] sm:text-2xl"
            aria-label="Arya Saputra home"
          >
            ARYA_SAPUTRA<span className="text-[var(--orange)]">®</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-mono text-base font-medium uppercase tracking-wider xl:text-xl"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}

            <Link
              href="http://github.com/artodd14"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 border-l-2 border-black pl-4 font-mono text-base font-medium uppercase tracking-wider xl:pl-8 xl:text-xl"
            >
              GitHub
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>

            <ThemeToggleButton isDark={isDark} onToggle={toggleTheme} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex shrink-0 items-center gap-3 lg:hidden">
            <ThemeToggleButton isDark={isDark} onToggle={toggleTheme} />
            <button
              type="button"
              onClick={() => setIsOpen((current) => !current)}
              className="brutal-shadow flex h-11 w-11 items-center justify-center border-2 border-black hover:bg-[var(--foreground)] hover:text-[var(--background)]"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "calc(100vh - 80px)", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="overflow-hidden border-b-2 border-black bg-[var(--background)] lg:hidden"
          >
            <div className="flex h-full flex-col justify-between p-6">
              <div className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center justify-between border-b-2 border-black py-5 font-display text-4xl font-bold uppercase tracking-[-0.05em]"
                    >
                      <span>{item.label}</span>

                      <ArrowUpRight size={28} strokeWidth={2} />
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="font-mono text-ms uppercase leading-relaxed text-neutral-500">
                <p>Portfolio / 2026</p>
                <p>Web Development × Industrial Engineering</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ThemeToggleButton({
  isDark,
  onToggle,
}: {
  isDark: boolean;
  onToggle: () => void;
}) {
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={onToggle}
      className="brutal-shadow flex h-11 w-11 items-center justify-center border-2 border-black hover:bg-[var(--foreground)] hover:text-[var(--background)]"
      aria-label={label}
      title={label}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}