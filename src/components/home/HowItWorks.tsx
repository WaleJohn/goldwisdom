import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Schedule a free call with one of our credit experts. We'll review your current business and personal credit situation and map out a customized plan.",
  },
  {
    number: "02",
    title: "Build Your Profile",
    description:
      "We set up your business structure, establish trade lines, and build your credit profile with the top business credit bureaus — step by step.",
  },
  {
    number: "03",
    title: "Access Funding",
    description:
      "Once your profile is established, we connect you with lenders and funding sources ready to offer credit lines, loans, and capital.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-brand-charcoal-2">
      <div className="mb-12 text-center">
        <Badge className="mb-4">The Process</Badge>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          How GoldWisdom Works
        </h2>
        <p className="mx-auto max-w-xl text-brand-cream-muted">
          A proven, three-step process to take your business from zero to fully funded.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
            {index < STEPS.length - 1 && (
              <div className="absolute right-0 top-8 hidden h-px w-1/3 bg-gradient-to-r from-brand-gold/40 to-transparent md:block" />
            )}
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-brand-gold/40 bg-brand-gold/10">
              <span className="font-heading text-xl font-bold text-brand-gold">{step.number}</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-brand-cream-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
