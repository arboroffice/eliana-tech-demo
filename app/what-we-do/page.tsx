"use client"

import { motion } from "framer-motion"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import { Button } from "../../components/ui/button"
import { CheckCircle2, ArrowRight, Zap, Sparkles, TrendingUp, ShieldCheck, Clock } from "lucide-react"

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function WhatWeDoPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-white/20">
            <div className="fixed inset-0 w-full h-full pointer-events-none">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>

            <GlassmorphismNav />

            <main className="relative z-10 pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={stagger}
                        className="text-center mb-24"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                            Excellence in AI Systems Engineering
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                            AI Systems <span className="text-slate-400 italic">Build-Out</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            We build the backend infrastructure that powers your business,
                            allowing you to scale without increasing headcount or hours.
                        </motion.p>
                    </motion.div>

                    {/* Main Offer Detail */}
                    <div className="max-w-5xl mx-auto mb-32">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-8 sm:p-20 shadow-2xl overflow-hidden relative"
                        >
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                            <Zap className="text-blue-400" />
                                            The Core Objective
                                        </h2>
                                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                                            Most businesses are held back by manual operations.
                                            We replace those bottlenecks with "Alive AI" systems that
                                            handle your sales, leads, customer support, and daily triage
                                            automatically and intelligently.
                                        </p>
                                        <div className="space-y-6">
                                            {[
                                                { icon: TrendingUp, text: "Increase revenue through 24/7 lead response" },
                                                { icon: Clock, text: "Save 20-40 hours per week for you and your team" },
                                                { icon: ShieldCheck, text: "Eliminate human error in repetitive operations" }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-4 group">
                                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-blue-500/10 transition-colors">
                                                        <item.icon className="w-6 h-6 text-blue-400" />
                                                    </div>
                                                    <span className="text-slate-400 font-medium">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10">
                                        <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mb-8 underline decoration-blue-500 underline-offset-8">What You Get</h3>
                                        <ul className="space-y-6 mb-12">
                                            {[
                                                "Comprehensive Business Audit",
                                                "Custom AI Agent Development",
                                                "Deep CRM & Toolkit Integration",
                                                "Staff Training & Handover",
                                                "Comprehensive SOP Documentation",
                                                "90-Day Implementation Roadmapping",
                                                "30 Days Post-Launch Support"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-4">
                                                    <CheckCircle2 className="w-6 h-6 text-blue-500 mt-0.5 shrink-0" />
                                                    <span className="text-lg text-slate-200">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-8 border-t border-white/10">
                                            <p className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-bold">Investment</p>
                                            <p className="text-4xl font-bold mb-2">$15,000 - $100,000+</p>
                                            <p className="text-sm text-slate-400">Customized to your scale and complexity.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-20 text-center">
                                    <Button size="lg" className="h-24 px-16 rounded-full text-2xl font-black bg-white text-black hover:bg-slate-200 group w-full sm:w-auto" asChild>
                                        <a href="/call">
                                            APPROVE A BUILD-OUT
                                            <ArrowRight className="ml-3 h-10 w-10 group-hover:translate-x-2 transition-transform" />
                                        </a>
                                    </Button>
                                    <p className="mt-8 text-slate-500 font-medium">90-day typical implementation. ROI expected within first quarter.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Process Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-32 text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-8">How It Works</h2>
                        <div className="space-y-12 text-left">
                            {[
                                { step: "01", title: "The Audit", desc: "We spend 14 days living in your business to find every bottleneck and leakage point." },
                                { step: "02", title: "The Build", desc: "Our team constructs your custom AI infrastructure, integrating with your existing tools." },
                                { step: "03", title: "The Launch", desc: "We deploy the system and train your team. Your business starts running on autopilot." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-start">
                                    <span className="text-5xl font-black text-white/10">{item.step}</span>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                        <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center bg-blue-600/10 border border-blue-500/20 p-16 sm:p-24 rounded-[4rem]"
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold mb-8">Ready to evolve?</h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                            We only work with a few businesses at a time to ensure build quality.
                            Book your audit to see if you're a fit.
                        </p>
                        <Button size="lg" className="h-20 px-12 rounded-full text-xl font-bold bg-white text-black hover:bg-slate-200 group" asChild>
                            <a href="/call">
                                BOOK YOUR AUDIT
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
