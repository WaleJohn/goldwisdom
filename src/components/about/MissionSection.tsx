import { Badge } from "@/components/ui/Badge";
import { Divider } from "@/components/ui/Divider";

const VALUES = [
  { title: "Transparency", description: "No hidden fees, no vague promises. We tell you exactly what we do and what to expect." },
  { title: "Results-First", description: "Every strategy we implement is backed by proven results with real business owners." },
  { title: "Education", description: "We don't just build your credit — we teach you how to maintain and grow it independently." },
];

export function MissionSection() {
  return (
    <div>
      <div className="mb-10">
        <Badge className="mb-4">Our Mission</Badge>
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Empowering Businesses Through Financial Literacy
        </h2>
        <p className="mb-4 leading-relaxed text-brand-cream-muted">
          GoldWisdom was founded on a simple belief: every entrepreneur deserves access to
          the same financial tools that large corporations use. Business credit has long been
          a hidden advantage of the wealthy — we&apos;re changing that.
        </p>
        <p className="leading-relaxed text-brand-cream-muted">
          Our team works one-on-one with business owners to build strong credit profiles,
          access meaningful funding, and achieve financial independence — without putting
          personal assets at risk.
        </p>
      </div>

      <Divider className="my-10" />

      <div>
        <h3 className="mb-6 text-xl font-bold">Our Core Values</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {VALUES.map((value) => (
            <div key={value.title} className="rounded-lg border border-brand-charcoal-3 bg-brand-charcoal-2 p-6">
              <div className="mb-2 h-1 w-8 rounded bg-brand-gold" />
              <h4 className="mb-2 font-bold text-brand-cream">{value.title}</h4>
              <p className="text-sm text-brand-cream-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
