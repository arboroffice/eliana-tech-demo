import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { HeroSection } from "../components/hero-section"
import { StorySection } from "../components/story-section"
import { ProblemSection } from "../components/problem-section"
import { ProcessSection } from "../components/process-section"
import { OffersSection } from "../components/offers-section"
import { ResultsSection } from "../components/results-section"
import { IndustriesSection } from "../components/industries-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <StorySection />
          <ProblemSection />
          <ProcessSection />
          <OffersSection />
          <ResultsSection />
          <IndustriesSection />
          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
