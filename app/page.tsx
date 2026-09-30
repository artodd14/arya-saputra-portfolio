import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />

        <Marquee />

        <About />

        <Projects />

        <Experience />

        <Contact />

        <Footer />
      </main>
    </>
  );
}