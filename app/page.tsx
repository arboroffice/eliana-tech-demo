import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { HeroSection } from "../components/hero-section"
import { ValueProposition } from "../components/value-proposition"
import { CoFounderModelSection } from "../components/co-founder-model-section"
import { IndustriesSection } from "../components/industries-section"



import Aurora from "../components/Aurora"
import { TestimonialsSection } from "../components/testimonials-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ValueProposition />
          <CoFounderModelSection />

          <TestimonialsSection />
          <IndustriesSection />


          <CTASection />
          <Footer />
        </div>
      </main>
    </div>
  )
}
