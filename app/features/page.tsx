"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { FeaturesSection } from "../../components/features-section"

export default function FeaturesPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20">
                <div className="px-6 max-w-7xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Powerful Features</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Everything you need to automate your business and scale your growth.
                    </p>
                </div>
                <FeaturesSection />
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
