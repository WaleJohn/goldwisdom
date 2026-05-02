import { cn } from "@/lib/cn";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light active:bg-brand-gold-dark font-semibold",
  secondary:
    "border border-brand-gold text-brand-gold hover:bg-brand-gold/10 active:bg-brand-gold/20",
  ghost:
    "text-brand-cream-muted hover:text-brand-gold",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base min-h-[44px]",
  lg: "px-8 py-4 text-lg min-h-[52px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-brand-charcoal disabled:opacity-50 disabled:pointer-events-none",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
