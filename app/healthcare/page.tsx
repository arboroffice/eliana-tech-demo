import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { HealthcareHeroHeader } from "../../components/healthcare-hero-header"
import { HealthcareSplitScreen } from "../../components/healthcare-split-screen"
import { TestimonialsSection } from "../../components/testimonials-section"
import { CTASection } from "../../components/cta-section"
import { GrowthStages } from "../../components/growth-stages"
import { TransformationDemos } from "../../components/transformation-demos"
import { ROICalculatorSection } from "../../components/roi-calculator-section"
import { HealthcareWhatsAppDemo } from "../../components/healthcare-whatsapp-demo"
import { HealthcareInstantAnswers } from "../../components/healthcare-instant-answers";

// Combining existing Healthcare page components with new Growth Stages
export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <GlassmorphismNav />
      <HealthcareHeroHeader />
      <HealthcareSplitScreen />
      <GrowthStages />
      <TransformationDemos />
      <HealthcareInstantAnswers />
      <HealthcareWhatsAppDemo />
      <ROICalculatorSection />
      <Footer />
    </main>
  )
}
