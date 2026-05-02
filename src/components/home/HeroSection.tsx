import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-brand-charcoal bg-grid-pattern px-4 py-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-gold">
          Business Credit Experts
        </p>

        <h1 className="mb-6 text-balance text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          <span className="gold-gradient">{COMPANY_INFO.tagline}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-brand-cream-muted md:text-xl">
          We help entrepreneurs and small business owners establish powerful
          business credit profiles — giving you access to the funding you need
          to scale, without relying on personal credit.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/pricing" size="lg">
            Get Started Today
          </Button>
          <Button href="#how-it-works" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          {[
            { number: "500+", label: "Clients Served" },
            { number: "$150K+", label: "Avg. Credit Line" },
            { number: "30-Day", label: "Results Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-brand-gold md:text-4xl">
                {stat.number}
              </p>
              <p className="mt-1 text-sm text-brand-cream-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
