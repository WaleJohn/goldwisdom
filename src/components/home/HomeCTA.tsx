import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

export function HomeCTA() {
  return (
    <SectionWrapper className="bg-brand-charcoal">
      <div className="rounded-2xl border border-brand-gold/30 bg-brand-charcoal-2 p-10 text-center md:p-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-gold">
          Ready to Start?
        </p>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Your Business Credit Journey Starts Here
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-brand-cream-muted">
          Choose a plan that fits your goals and get immediate access to expert
          guidance, proven strategies, and funding opportunities.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/pricing" size="lg">
            View Pricing Plans
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Talk to an Expert
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
