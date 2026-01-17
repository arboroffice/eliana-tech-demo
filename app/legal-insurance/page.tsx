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
                title="Legal & Insurance Automation"
                subtitle="Automate case management, claims, and client communication."
            />
            <GrowthStages />
            <TransformationDemos />
            <ROICalculatorSection />
            <CTASection />
            <Footer />
        </main>
    )
}
