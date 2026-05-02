"use client";

import { useState } from "react";
import type { PricingPlan } from "@/types";
import { cn } from "@/lib/cn";

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
}

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
  const [loading, setLoading] = useState(false);
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ planId: plan.id, annual: isAnnual }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col rounded-xl border p-8 transition-colors",
        plan.highlighted
          ? "border-brand-gold bg-brand-charcoal-2 shadow-[0_0_40px_rgba(201,168,76,0.12)]"
          : "border-brand-charcoal-3 bg-brand-charcoal-2 hover:border-brand-gold/30"
      )}
    >
      {plan.highlighted && (
        <div className="mb-4 inline-block self-start rounded-full bg-brand-gold/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
          Most Popular
        </div>
      )}

      <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>

      <div className="mb-6">
        <span className="font-heading text-4xl font-bold text-brand-gold">
          ${price}
        </span>
        <span className="ml-1 text-brand-cream-muted">/mo</span>
        {isAnnual && (
          <p className="mt-1 text-xs text-brand-cream-muted">Billed annually</p>
        )}
      </div>

      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-brand-cream-muted">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={cn(
          "w-full rounded py-3 font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
          plan.highlighted
            ? "bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light"
            : "border border-brand-gold text-brand-gold hover:bg-brand-gold/10"
        )}
      >
        {loading ? "Redirecting..." : "Get Started"}
      </button>
    </div>
  );
}
