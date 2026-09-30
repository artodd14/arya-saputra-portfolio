import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t-2 border-black"
                      style={{ backgroundColor: "var(--accent-soft)" }}
    >
      <Container>
        <div className="flex flex-col gap-4 py-8 font-mono text-ms uppercase text-black lg:flex-row lg:items-center lg:justify-between">
          <p>©AryaSaputra</p>

          <p>
            Universitas Dian Nuswantoro, Semarang, Indonesia
          </p>

          <a
            href="#top"
            className="transition-colors hover:text-[var(--accent)]"
          >
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}