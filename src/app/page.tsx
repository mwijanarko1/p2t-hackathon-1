import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Judging } from "@/components/Judging";
import { Timeline } from "@/components/Timeline";
import { Rules } from "@/components/Rules";
import { Prizes } from "@/components/Prizes";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0ebe3]" id="main-content">
      <Hero />
      <HowItWorks />
      <Judging />
      <Timeline />
      <Rules />
      <Prizes />
      <FAQ />
      <Footer />
    </main>
  );
}