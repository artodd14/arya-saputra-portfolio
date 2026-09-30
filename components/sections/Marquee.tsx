export function Marquee() {
  const items = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "TECHNOLOGY",
    "INDUSTRIAL ENGINEERING",
    "DIGITAL PRODUCTS",
  ];

  return (
    <section
      className="overflow-hidden border-b-2 border-black text-black"
      style={{ backgroundColor: "var(--section-marquee-background)" }}
      aria-label="Areas of interest"
    >
      <div className="marquee-track flex w-max">
        {[...items, ...items].map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center gap-8 px-4 py-4 font-mono text-xl font-semibold uppercase tracking-wider md:text-xl"
          >
            <span>{item}</span>
            <span aria-hidden="true">→</span>
          </div>
        ))}
      </div>
    </section>
  );
}