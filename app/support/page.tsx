"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Support Center</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                    We are here to help you get the most out of Eliana Tech.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold text-white mb-4">Help Articles</h3>
                        <p className="text-slate-300">Browse tutorials, FAQs, and setup guides.</p>
                    </div>
                    <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-bold text-white mb-4">Contact Support</h3>
                        <p className="text-slate-300">Reach out to our team for personalized assistance.</p>
                    </div>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
