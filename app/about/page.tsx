"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { motion } from "framer-motion"
import { ScrollReveal } from "../../components/scroll-reveal"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-7xl font-black mb-8 text-center uppercase tracking-tighter">The End of Busywork</h1>
                </ScrollReveal>

                <div className="prose prose-invert prose-lg max-w-none space-y-12 mb-20">
                    <ScrollReveal delay={0.1}>
                        <p className="text-xl md:text-3xl text-slate-300 leading-tight font-medium text-center mb-12 italic border-l-4 border-white/20 pl-8 py-4">
                            "We build AI infrastructure that frees founders from their businesses, so they can scale without scaling headcount."
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <ScrollReveal delay={0.2}>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">The Growth Trap</h2>
                                <p className="text-slate-400">
                                    Most growing companies hit the same wall: revenue goes up, but so does the operational chaos. More users means more support tickets. More customers means more onboarding. More growth means more busywork that pulls founders away from the thing that actually matters—building great products and serving their audience.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-4">The Solution</h2>
                                <p className="text-slate-400">
                                    Eliana Tech exists to solve that. We build automated systems—onboarding flows, churn prevention engines, AI-powered support, content pipelines, revenue intelligence—that handle the operational grind so you don't have to. We don't just "implement AI"—we architect freedom.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <ScrollReveal delay={0.4}>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 mt-16">
                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Building Real Infrastructure</h2>
                            <div className="space-y-6 text-slate-300">
                                <p>
                                    We're not consultants who hand you a PDF and leave. We're not an agency renting you hours. We build real infrastructure that becomes part of your company, compounds in value over time, and lets lean teams operate like organizations 10x their size.
                                </p>
                                <p>
                                    Our philosophy is simple: if a human is doing it more than twice, a system should be doing it forever. We look for the "leaks" in your business—the places where time, energy, and profit are escaping—and we plug them with autonomous code.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Meet the Founder CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-12"
                >
                    <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-500 mb-6 block">The Visionary</span>
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">Meet the Founder</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto italic">
                        "From running a car dealership at 14 to building an AI infrastructure company — meet Mia, the force behind Eliana Tech."
                    </p>
                    <Link
                        href="/founder"
                        className="inline-block px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full text-sm hover:bg-slate-200 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                    >
                        Read Mia&apos;s Story →
                    </Link>
                </motion.div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
