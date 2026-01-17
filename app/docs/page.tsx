"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[60vh] flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                    Comprehensive guides and API references for developers and users.
                </p>

                <div className="p-12 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm max-w-3xl w-full">
                    <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
                    <p className="text-slate-300">
                        We are currently compiling our public documentation.
                        <br />
                        If you are an existing customer, please contact your account manager for direct access to our beta docs.
                    </p>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
