"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">About Eliana Tech</h1>
                <div className="prose prose-invert prose-lg max-w-none space-y-6">
                    <p className="text-xl text-slate-300 leading-relaxed text-center mb-12">
                        We are building the future of autonomous business operations.
                    </p>
                    <p>
                        Eliana Tech is at the forefront of the AI revolution, dedicated to transforming how businesses operate. We believe that the future workforce is hybrid—where humans and AI work together seamlessly to achieve unprecedented scale and efficiency.
                    </p>
                    <p>
                        Our mission is to democratize access to advanced AI technology. We build intelligent agents that handle the repetitive, complex, and time-consuming tasks of modern business, freeing up human creativity and strategic thinking.
                    </p>
                    <p>
                        From capturing every lead 24/7 to automating complex back-office workflows, our solutions are designed to be the invisible engine of your growth. We don't just provide software; we provide a digital workforce that grows with you.
                    </p>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
