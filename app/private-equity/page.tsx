import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { Footer } from "@/components/footer";
import { CategoryHero } from "@/components/category-hero";
import { GrowthStages } from "@/components/growth-stages";
import { TransformationDemos } from "@/components/transformation-demos";
import { ROICalculatorSection } from "@/components/roi-calculator-section";
import { CTASection } from "@/components/cta-section";

export default function Page() {
    return (
        <main className="min-h-screen bg-black">
            <GlassmorphismNav />
            <CategoryHero
                title="Private Equity Operations"
                subtitle="Optimize portfolio performance and operational due diligence."
            />
            <GrowthStages />
            <TransformationDemos />
            <ROICalculatorSection />
            <CTASection />
            <Footer />
        </main>
    )
}
