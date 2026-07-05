import { Hero } from "@/components/hero";
import { QuickChips } from "@/components/quick-chips";
import { ElectromobilityHighlight } from "@/components/electromobility-highlight";
import { HowItWorks } from "@/components/how-it-works";
import { SolutionsGrid } from "@/components/solutions-grid";
import { ProofSection } from "@/components/proof-section";
import { Differentiators } from "@/components/differentiators";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker";

export default function Home() {
  return (
    <>
      <ScrollDepthTracker eventName="scroll_75_home" />
      <Hero />
      <QuickChips />
      <ElectromobilityHighlight />
      <HowItWorks />
      <SolutionsGrid />
      <ProofSection />
      <Differentiators />
      <FAQ />
      <FinalCTA />
    </>
  );
}
