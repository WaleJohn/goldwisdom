"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { PricingToggle } from "@/components/pricing/PricingToggle";
import { PricingCard } from "@/components/pricing/PricingCard";
import { PRICING_PLANS } from "@/lib/constants";

const FAQS = [
  {
    q: "Do I need good personal credit to get started?",
    a: "No. We specialize in building business credit separately from your personal credit. We start with your business structure and build from there.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most clients see their first tradelines reporting within 30–60 days and meaningful credit lines within 3–6 months, depending on the plan.",
  },
  {
    q: "Can I cancel my subscription?",
    a: "Yes. You can cancel at any time. Monthly plans cancel immediately, annual plans are non-refundable but remain active through the billing period.",
  },
  {
    q: "What makes GoldWisdom different from DIY credit building?",
    a: "We know exactly which vendors, lenders, and strategies build credit fastest. DIY takes years of trial and error — we compress that into months.",
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <>
      <div className="bg-brand-charcoal-2 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mb-4">Pricing</Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Transparent Pricing for Every Stage
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-brand-cream-muted">
            Choose the plan that fits your goals. Every plan includes expert guidance
            and a 30-day results guarantee.
          </p>
          <PricingToggle isAnnual={isAnnual} onChange={setIsAnnual} />
        </div>
      </div>

      <SectionWrapper className="bg-brand-charcoal">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isAnnual={isAnnual} />
          ))}
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-2xl space-y-3">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-lg border border-brand-charcoal-3 bg-brand-charcoal-2">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold list-none">
                  {faq.q}
                  <svg
                    className="h-4 w-4 flex-shrink-0 text-brand-gold transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-4 text-sm leading-relaxed text-brand-cream-muted">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
