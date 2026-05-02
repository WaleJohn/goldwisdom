import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SERVICES_LIST } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Full-range business credit services: credit building, personal credit repair, EIN setup, Net-30 vendors, funding access, and ongoing coaching.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brand-charcoal-2 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mb-4">Our Services</Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Everything You Need to Build Business Credit
          </h1>
          <p className="mx-auto max-w-2xl text-brand-cream-muted">
            We offer a comprehensive suite of business credit services designed to
            take you from startup to fully funded — at every stage of your journey.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-brand-charcoal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-brand-gold/30 bg-brand-charcoal-2 p-10 text-center">
          <h2 className="mb-3 text-2xl font-bold">Not Sure Where to Start?</h2>
          <p className="mb-6 text-brand-cream-muted">
            Book a free consultation and one of our experts will walk you through the
            best path for your business.
          </p>
          <Button href="/contact" size="lg">
            Book a Free Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
