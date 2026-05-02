import { cn } from "@/lib/cn";

interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent",
        className
      )}
    />
  );
}
