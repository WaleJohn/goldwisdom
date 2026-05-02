import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES_LIST } from "@/lib/constants";

export function ServicesOverview() {
  const featured = SERVICES_LIST.slice(0, 3);

  return (
    <SectionWrapper className="bg-brand-charcoal">
      <div className="mb-12 text-center">
        <Badge className="mb-4">What We Do</Badge>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Comprehensive Business Credit Solutions
        </h2>
        <p className="mx-auto max-w-2xl text-brand-cream-muted">
          From initial setup to advanced funding strategies, we provide
          everything your business needs to build a strong credit foundation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((service) => (
          <div
            key={service.id}
            className="rounded-lg border border-brand-charcoal-3 bg-brand-charcoal-2 p-6 transition-colors hover:border-brand-gold/40"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-gold/10">
              <svg className="h-6 w-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold text-brand-cream">{service.title}</h3>
            <p className="text-sm leading-relaxed text-brand-cream-muted">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/services"
          className="text-sm font-semibold text-brand-gold transition-colors hover:text-brand-gold-light"
        >
          View All Services →
        </Link>
      </div>
    </SectionWrapper>
  );
}
