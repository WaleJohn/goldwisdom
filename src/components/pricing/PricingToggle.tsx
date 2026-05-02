"use client";

interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (value: boolean) => void;
}

export function PricingToggle({ isAnnual, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className={`text-sm font-medium ${!isAnnual ? "text-brand-cream" : "text-brand-cream-muted"}`}>
        Monthly
      </span>
      <button
        type="button"
        onClick={() => onChange(!isAnnual)}
        className={`relative h-6 w-11 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
          isAnnual ? "bg-brand-gold" : "bg-brand-charcoal-3"
        }`}
        aria-label="Toggle billing period"
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            isAnnual ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <span className={`text-sm font-medium ${isAnnual ? "text-brand-cream" : "text-brand-cream-muted"}`}>
        Annual <span className="ml-1 rounded bg-brand-gold/20 px-1.5 py-0.5 text-xs text-brand-gold">Save 17%</span>
      </span>
    </div>
  );
}
