import { cn } from "@/lib/cn";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("px-4 py-16 md:py-24", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
