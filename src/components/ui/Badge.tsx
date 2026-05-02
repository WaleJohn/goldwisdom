import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold",
        className
      )}
    >
      {children}
    </span>
  );
}
