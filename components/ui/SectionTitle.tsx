interface SectionTitleProps {
  number: string;
  label: string;
}

export function SectionTitle({
  number,
  label,
}: SectionTitleProps) {
  return (
    <div className="flex items-center gap-4 border-b-2 border-black pb-4">
      <span className="font-mono text-xl font-medium">
        {number}
      </span>

      <span className="font-mono text-xl uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}