import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyDifferent } from "@/components/WhyDifferent";
import { WhatToBuild } from "@/components/WhatToBuild";
import { Judging } from "@/components/Judging";
import { Timeline } from "@/components/Timeline";
import { Rules } from "@/components/Rules";
import { Prizes } from "@/components/Prizes";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a]">
      <Hero />
      <HowItWorks />
      <WhyDifferent />
      <WhatToBuild />
      <Judging />
      <Timeline />
      <Rules />
      <Prizes />
      <FAQ />
      <Footer />
    </main>
  );
}