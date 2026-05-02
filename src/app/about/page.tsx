import type { Metadata } from "next";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { MissionSection } from "@/components/about/MissionSection";
import { TeamSection } from "@/components/about/TeamSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the GoldWisdom story — our mission to democratize business credit and empower entrepreneurs with the financial tools they deserve.",
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-brand-charcoal-2 px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mb-4">About GoldWisdom</Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            We&apos;re On a Mission to Level the Playing Field
          </h1>
          <p className="mx-auto max-w-2xl text-brand-cream-muted">
            Business credit shouldn&apos;t be a mystery. We built GoldWisdom to give every
            entrepreneur the tools, knowledge, and support to build powerful business credit.
          </p>
        </div>
      </div>

      <SectionWrapper className="bg-brand-charcoal">
        <MissionSection />
        <TeamSection />
      </SectionWrapper>
    </>
  );
}
