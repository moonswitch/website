import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const variantStyles: Record<string, string> = {
  primary:
    "bg-mustard text-white hover:brightness-110",
  secondary:
    "bg-teal text-white hover:brightness-110",
  outline:
    "bg-transparent border border-white text-white hover:bg-white/10",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-block rounded-[30px] px-8 py-3 text-base font-normal transition-all text-center";
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
