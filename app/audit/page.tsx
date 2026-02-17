"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { AuditForm } from "@/components/audit-form"

export default function AuditPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden">
            <main className="min-h-screen relative overflow-hidden">
                {/* Aurora background */}
                <div className="fixed inset-0 w-full h-full">
                    <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
                </div>

                <div className="relative z-10">
                    {/* Navbar */}
                    <GlassmorphismNav />

                    <section className="min-h-screen pt-24 md:pt-32 pb-20 px-4 relative">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 animate-fade-in-badge">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                                Free Automation Audit
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                                Find Your Biggest <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automation Wins</span>
                            </h1>

                            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                Take 5 minutes to map your business. We'll identify the workflows costing you the most time, the automation opportunities with the highest ROI, and exactly where to start.
                            </p>
                        </div>

                        <AuditForm />
                    </section>

                    {/* Footer */}
                    <Footer />
                </div>
            </main>
        </div>
    )
}
