import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "brutal-shadow inline-flex items-center justify-center border-2 border-black px-6 py-3 font-mono text-xl font-semibold uppercase tracking-wide";

  const variants = {
    primary:
      "bg-[var(--accent)] text-black",
    secondary:
      "bg-transparent text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}