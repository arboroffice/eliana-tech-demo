import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { GrowthStages } from "@/components/growth-stages";
import { TransformationDemos } from "@/components/transformation-demos";
import { ROICalculatorSection } from "@/components/roi-calculator-section";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <GlassmorphismNav />
      <CategoryHero
        title="Food & Hospitality"
        subtitle="More bookings, better reviews, and less chaos for Restaurants and Hotels."
      />
      <GrowthStages />
      <TransformationDemos />
      <ROICalculatorSection />
      <Footer />
    </main>
  )
}
