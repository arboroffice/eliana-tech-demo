"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import { industries } from "@/lib/industry-data"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function IndustryPage() {
    const params = useParams()
    const slug = params.slug as string
    const industry = industries.find((i) => i.slug === slug)
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    if (!industry) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black overflow-x-hidden">
            <GlassmorphismNav />

            <main className="relative">
                {/* HERO SECTION */}
                <section className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <Aurora colorStops={["#1e293b", "#475569", "#1e293b"]} amplitude={1.0} blend={0.6} speed={0.5} />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-slate-500 font-bold mb-6"
                        >
                            Your AI Department &middot; {industry.name}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.9]"
                        >
                            {industry.hook}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                        >
                            {industry.problem}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Link
                                href="/audit"
                                className="w-full sm:w-auto inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-black hover:bg-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] shadow-xl shadow-white/5"
                            >
                                Get Your Free Audit →
                            </Link>
                            <Link
                                href="#how-it-works"
                                className="w-full sm:w-auto inline-block px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white text-base font-black hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                See How It Works
                            </Link>
                        </motion.div>
                    </div>
                </section>

                {/* THE OPERATOR PROBLEM SECTION */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 bg-stone-50 text-stone-900 border-y border-stone-200">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-8">The Problem</p>
                            <p className="text-2xl sm:text-4xl font-black leading-tight italic text-stone-800 mb-6">
                                &ldquo;{industry.operatorProblem}&rdquo;
                            </p>
                            <p className="text-sm font-bold uppercase tracking-widest text-stone-400">
                                We are not paid to install software. We are paid to remove bottlenecks.
                            </p>
                        </div>
                    </ScrollReveal>
                </section>

                {/* SERVICE TIERS */}
                <section id="how-it-works" className="py-24 sm:py-32 px-4 sm:px-6 bg-black border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <ScrollReveal>
                            <div className="text-center mb-20">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold block mb-4">How It Works</span>
                                <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.95]">
                                    We build the operating system<br />
                                    <span className="text-slate-500 italic">that runs your business.</span>
                                </h2>
                                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">We do not just give you tools. We build the infrastructure that lets your business grow without adding more people.</p>
                            </div>
                        </ScrollReveal>

                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Single Systems */}
                            <StaggerItem>
                                <div className="h-full p-8 rounded-[2.5rem] bg-stone-900/40 border border-white/5 flex flex-col hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">{industry.services.singleSystems.title}</h3>
                                    <p className="text-slate-500 mb-8 text-sm font-medium">{industry.services.singleSystems.description}</p>
                                    <div className="space-y-6 flex-grow">
                                        {industry.services.singleSystems.examples.map((ex, idx) => (
                                            <div key={idx} className="space-y-2 pb-6 border-b border-white/5 last:border-0">
                                                <h4 className="text-white font-black text-lg uppercase tracking-tight">{ex.title}</h4>
                                                <p className="text-slate-400 text-sm leading-relaxed">{ex.detail}</p>
                                                <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] pt-2">ROI: {ex.roi}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Departments */}
                            <StaggerItem>
                                <div className="h-full p-8 rounded-[2.5rem] bg-white text-stone-900 flex flex-col relative overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-300">
                                    <div className="absolute top-0 right-0 p-4">
                                        <span className="text-[10px] bg-stone-100 text-stone-400 px-3 py-1 rounded-full uppercase tracking-tighter font-black">Scalable</span>
                                    </div>
                                    <h3 className="text-xl font-black text-stone-900 mb-2 uppercase tracking-wide">{industry.services.departments.title}</h3>
                                    <p className="text-stone-500 mb-8 text-sm font-medium">{industry.services.departments.description}</p>
                                    <div className="space-y-6 flex-grow">
                                        {industry.services.departments.areas.map((area, idx) => (
                                            <div key={idx} className="space-y-2 pb-6 border-b border-stone-100 last:border-0">
                                                <h4 className="text-stone-900 font-black text-lg uppercase tracking-tight">{area.area}</h4>
                                                <p className="text-stone-600 text-sm leading-relaxed">{area.detail}</p>
                                                <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em] pt-2">Impact: {area.impact}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </StaggerItem>

                            {/* Custom OS */}
                            <StaggerItem>
                                <div className="h-full p-8 rounded-[2.5rem] bg-gradient-to-b from-stone-900 to-black border border-white/10 flex flex-col hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                                    <h3 className="text-xl font-black text-white mb-2 uppercase tracking-wide">{industry.services.custom.title}</h3>
                                    <p className="text-slate-500 mb-8 text-sm font-medium">{industry.services.custom.description}</p>
                                    <ul className="space-y-4 mb-12 flex-grow text-slate-400 text-sm font-bold uppercase tracking-tight">
                                        {industry.services.custom.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-slate-700 mt-1">/ /</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/audit"
                                        className="w-full text-center py-4 rounded-2xl bg-white text-black font-black text-sm hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 shadow-xl inline-block"
                                    >
                                        Get Your Free Audit →
                                    </Link>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>
                    </div>
                </section>

                {/* RESULT STATEMENT */}
                {industry.result && (
                    <section className="py-12 px-4 sm:px-6 bg-stone-900 text-white">
                        <ScrollReveal>
                            <div className="max-w-4xl mx-auto text-center">
                                <p className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold mb-4">The Result</p>
                                <p className="text-xl sm:text-3xl font-black uppercase tracking-tight leading-tight text-white">
                                    {industry.result}
                                </p>
                            </div>
                        </ScrollReveal>
                    </section>
                )}

                {/* STRATEGIC LAYERS SECTION */}
                {industry.layers && (
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-100 text-stone-900 overflow-hidden relative border-y border-stone-200">
                        <div className="max-w-6xl mx-auto relative z-10">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-4">Separating Human Work From Non-Human Work</span>
                                    <h3 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">This task needs a person.<br /><span className="italic text-stone-400">This one does not.</span></h3>
                                    <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-medium">We identify the highest-leverage processes in your business and replace the manual layers with AI infrastructure. Every bottleneck we remove is time and money back in your pocket.</p>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-12">
                                {industry.layers.map((layer, lIdx) => (
                                    <ScrollReveal key={lIdx} delay={lIdx * 0.1}>
                                        <div className="p-6 sm:p-10 lg:p-16 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white border border-stone-200 shadow-xl shadow-stone-200/50 relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                                                <div className="lg:col-span-4">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300 block mb-6 px-4 py-1.5 border border-stone-100 rounded-full w-fit">Level 0{lIdx + 1} / Department</span>
                                                    <h4 className="text-4xl font-black uppercase tracking-tight mb-8 leading-none">{layer.department}</h4>
                                                    <div className="w-16 h-2 bg-stone-900" />
                                                </div>

                                                <div className="lg:col-span-4">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300 block mb-6">Roles AI Takes Over</span>
                                                    <ul className="space-y-4">
                                                        {layer.roles.map((role, rIdx) => (
                                                            <li key={rIdx} className="flex items-center gap-4 text-stone-700 font-black uppercase tracking-tight text-lg">
                                                                <span className="w-2.5 h-2.5 rounded-full bg-stone-900 shrink-0" />
                                                                {role}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div className="lg:col-span-4">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-300 block mb-6">Tasks AI Executes</span>
                                                    <div className="flex flex-wrap gap-2">
                                                        {layer.tasks.map((task, tIdx) => (
                                                            <span key={tIdx} className="px-5 py-2.5 rounded-2xl bg-stone-50 border border-stone-200 text-[10px] font-black text-stone-500 uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-colors duration-300 cursor-default">
                                                                {task}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <ScrollReveal delay={0.3}>
                                <div className="mt-24 flex justify-center">
                                    <div className="p-10 rounded-[2.5rem] bg-stone-950 text-white text-center max-w-2xl border border-white/5 shadow-2xl">
                                        <p className="text-2xl font-black uppercase italic mb-4 tracking-tight leading-tight">&ldquo;Humans should do human work.<br />Machines should do the rest.&rdquo;</p>
                                        <p className="text-stone-500 text-sm font-bold uppercase tracking-widest italic">We do not build tools. We build the operating system your business runs on.</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>
                )}

                {/* CTA SECTION */}
                <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-y border-stone-200 relative z-10 font-sans">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">Ready?</span>
                            <h3 className="text-3xl sm:text-5xl font-black mb-6 uppercase tracking-tighter leading-[0.9]">
                                Stop being the bottleneck.<br />
                                <span className="text-stone-400 italic">Start building the machine.</span>
                            </h3>
                            <p className="text-base sm:text-lg text-stone-500 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                                Get a free business audit. We will show you exactly where your time and money are leaking and what AI can do about it. No pressure. Just clarity.
                            </p>
                            <Link
                                href="/audit"
                                className="inline-block px-12 py-5 rounded-full bg-stone-900 text-white text-lg font-black hover:bg-stone-800 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
                            >
                                Get Your Free Audit →
                            </Link>
                        </div>
                    </ScrollReveal>
                </section>

                {/* FAQ SECTION */}
                <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-16 uppercase tracking-tight text-center">Frequently Asked</h2>
                        </ScrollReveal>

                        <div className="space-y-4">
                            {industry.faq.map((item, idx) => (
                                <ScrollReveal key={idx} delay={idx * 0.05}>
                                    <div className="rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-300">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between gap-6 p-6 sm:p-8 text-left group"
                                        >
                                            <div className="flex items-start gap-4 sm:gap-6">
                                                <span className="text-slate-600 font-bold text-xs uppercase tracking-[0.3em] mt-1 shrink-0">0{idx + 1}</span>
                                                <h4 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-slate-200 transition-colors duration-300">{item.q}</h4>
                                            </div>
                                            <span className={`text-slate-500 text-2xl font-light shrink-0 transition-transform duration-300 ${openFaq === idx ? "rotate-45" : ""}`}>+</span>
                                        </button>
                                        <AnimatePresence>
                                            {openFaq === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8 pl-10 sm:pl-16">
                                                        <p className="text-slate-400 leading-relaxed font-medium">{item.a}</p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </main>

            <style jsx global>{`
                h1, h2, h3, h4 {
                    line-height: 1;
                }
            `}</style>
        </div>
    )
}
