import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HomeCTA } from "@/components/home/HomeCTA";

export const metadata: Metadata = {
  title: "GoldWisdom | Business Credit Services",
  description:
    "Build the business credit you deserve. GoldWisdom helps entrepreneurs access $50K–$250K in funding through proven credit-building strategies.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <HomeCTA />
    </>
  );
}
