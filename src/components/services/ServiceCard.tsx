import Link from "next/link";
import type { ServiceItem } from "@/types";

interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-brand-charcoal-3 bg-brand-charcoal-2 p-6 transition-colors hover:border-brand-gold/40">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
        <svg className="h-6 w-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-bold text-brand-cream">{service.title}</h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-cream-muted">
        {service.description}
      </p>
      <Link
        href="/contact"
        className="text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-light"
      >
        Get Started →
      </Link>
    </div>
  );
}
