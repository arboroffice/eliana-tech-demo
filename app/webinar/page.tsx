"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

export default function WebinarPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <main className="min-h-screen relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 w-full h-full">
                    <Aurora
                        colorStops={["#0f172a", "#1e293b", "#0f172a"]}
                        amplitude={1.2}
                        blend={0.6}
                        speed={0.4}
                    />
                </div>

                <div className="relative z-10">
                    <GlassmorphismNav />

                    {/* HERO / WEBINAR HEADER */}
                    <section className="pt-32 pb-16 px-4 sm:px-6">
                        <div className="max-w-5xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                                    FREE MASTERCLASS: THE 24-HOUR FOUNDER
                                </span>
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 uppercase leading-[1.1]">
                                    How to Replace Yourself with{" "}
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                                        AI Systems
                                    </span>{" "}
                                    in 30 Days.
                                </h1>
                                <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                                    Stop manualizing your growth. Learn the exact 3-step framework we use to install autonomous departments and reclaim 20+ hours of your week.
                                </p>
                            </motion.div>

                            {/* VIDEO CONTAINER */}
                            <ScrollReveal>
                                <div className="relative group max-w-4xl mx-auto">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative aspect-video rounded-[2rem] bg-slate-900/80 border border-white/10 backdrop-blur-xl overflow-hidden flex items-center justify-center shadow-2xl">
                                        {/* Placeholder for Video Player */}
                                        <div className="text-center p-8">
                                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-110 transition-transform shadow-xl">
                                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-black border-b-[12px] border-b-transparent ml-2" />
                                            </div>
                                            <p className="text-white font-bold text-xl uppercase tracking-widest">Start Masterclass</p>
                                            <p className="text-slate-500 text-sm mt-2 font-mono">(Evergreen Training: 45m 12s)</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="mt-12"
                            >
                                <Link
                                    href="/audit"
                                    className="inline-block px-10 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105 shadow-2xl"
                                >
                                    Skip to the Free Audit →
                                </Link>
                            </motion.div>
                        </div>
                    </section>

                    {/* WHAT YOU WILL LEARN */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900">
                        <div className="max-w-6xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-20">
                                    <h2 className="text-3xl sm:text-5xl font-black mb-6 uppercase tracking-tight">The Agenda</h2>
                                    <p className="text-stone-500 max-w-2xl mx-auto">No fluff. No generic consulting. Just the architecture of autonomy.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                {[
                                    {
                                        step: "01",
                                        title: "The Bottleneck Audit",
                                        detail: "Why your business feels heavy and how to identify the high-value nodes where AI provides the most leverage."
                                    },
                                    {
                                        step: "02",
                                        title: "Building the Brain",
                                        detail: "How we create a 'Company Memory' that allows AI agents to act as expert employees who know your business inside out."
                                    },
                                    {
                                        step: "03",
                                        title: "The Installation Loop",
                                        detail: "Our 30-day process for deploying, testing, and scaling autonomous systems without disrupting your current operations."
                                    }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 h-full">
                                            <span className="text-5xl font-black text-stone-200 mb-6 block">{item.step}</span>
                                            <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">{item.title}</h3>
                                            <p className="text-stone-600 leading-relaxed">{item.detail}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* SALES COPY / SHIT */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white border-y border-white/5">
                        <div className="max-w-4xl mx-auto text-center">
                            <ScrollReveal>
                                <h2 className="text-3xl sm:text-5xl font-black mb-12 uppercase tracking-tight italic">
                                    "Most founders are just highly paid operators of a museum dedicated to manual labor."
                                </h2>
                            </ScrollReveal>

                            <div className="space-y-8 text-lg text-slate-400 leading-relaxed">
                                <ScrollReveal delay={0.1}>
                                    <p>
                                        Success doesn't come from working more. It comes from owning things that work for you. In 2026, those things are <span className="text-white font-bold">Autonomous Systems</span>.
                                    </p>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2}>
                                    <p>
                                        Every hour you spend answering a repetitive query, chasing a vendor, or manually drafting a report is an hour stolen from your vision. You aren't building an empire; you're building a cage.
                                    </p>
                                </ScrollReveal>
                                <ScrollReveal delay={0.3}>
                                    <p>
                                        We provide the key. We don't just 'consult' - we install. We build the infrastructure that allows your business to breathe, to scale, and to run without your constant supervision.
                                    </p>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.4}>
                                <div className="mt-16 p-1 bg-gradient-to-r from-slate-800 to-slate-900 rounded-[2.5rem]">
                                    <div className="bg-black rounded-[2.3rem] p-10 sm:p-16 border border-white/5">
                                        <h3 className="text-2xl sm:text-4xl font-black mb-8 uppercase">Ready to stop operating?</h3>
                                        <p className="text-slate-400 mb-12">Click below to book your free 15-minute Automation Audit. We'll identify your three biggest bottlenecks and show you exactly how AI solves them.</p>
                                        <Link
                                            href="/audit"
                                            className="inline-block w-full sm:w-auto px-12 py-5 rounded-full bg-white text-black text-xl font-bold hover:bg-slate-200 transition-all hover:scale-105"
                                        >
                                            GET YOUR FREE AUDIT →
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    <Footer />
                </div>
            </main>
        </div>
    )
}
