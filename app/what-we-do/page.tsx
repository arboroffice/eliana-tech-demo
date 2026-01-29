"use client"

import { motion } from "framer-motion"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import { Button } from "../../components/ui/button"
import { CheckCircle2, ArrowRight, Zap, Sparkles, Bot, Rocket, X, Crown, Building2, Clock, DollarSign, TrendingUp, Shield, MessageSquare, BarChart3, Mail, Globe, FileText, Users, Calendar, Brain } from "lucide-react"

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
                            Two Ways to Work With Us
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                            Stop Being the <span className="text-slate-400 italic">Bottleneck</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                            We install AI systems that run your business — so you can focus on growth, 
                            or just live your life. Pick your path.
                        </motion.p>
                    </motion.div>

                    {/* The Problem */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-32"
                    >
                        <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-10 sm:p-14">
                            <h2 className="text-3xl font-bold mb-8 text-red-400">You're Paying a Hidden Tax</h2>
                            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                                Right now, your business is bleeding time and money on things AI can do better, faster, and cheaper. Here's what that looks like:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: X, text: "20+ hours/week on emails, follow-ups, and reporting" },
                                    { icon: X, text: "$150K+/year on roles AI could handle" },
                                    { icon: X, text: "Leads going cold because nobody followed up" },
                                    { icon: X, text: "Content that never gets posted" },
                                    { icon: X, text: "You can't take a vacation without things breaking" },
                                    { icon: X, text: "Every decision still flows through YOU" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <item.icon className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                        <span className="text-slate-300">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-xl text-white font-semibold">
                                We fix all of this. Pick your level:
                            </p>
                        </div>
                    </motion.div>

                    {/* TWO OFFERS */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">

                        {/* OFFER 1: AI COO Installation */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                            
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-blue-500/10 rounded-2xl">
                                    <Bot className="w-8 h-8 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">AI COO Installation</h3>
                                    <p className="text-blue-400 text-sm font-medium">Most Popular</p>
                                </div>
                            </div>

                            <p className="text-slate-400 mb-8 leading-relaxed">
                                We install an autonomous AI assistant that runs your business operations 24/7. 
                                It briefs you every morning, handles your content, manages your pipeline, and works while you sleep.
                            </p>

                            {/* What's Included */}
                            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mb-6">What You Get</h4>
                            
                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Brain, text: "Autonomous AI assistant (runs 24/7)", value: "$150K/yr value" },
                                    { icon: MessageSquare, text: "Connected to WhatsApp, email, & your tools", value: "$5K value" },
                                    { icon: Calendar, text: "Daily morning briefs & evening recaps", value: "$3K/yr value" },
                                    { icon: BarChart3, text: "Weekly performance reports (auto-generated)", value: "$2K/yr value" },
                                    { icon: FileText, text: "Content engine (writes & schedules your posts)", value: "$48K/yr value" },
                                    { icon: Mail, text: "Email triage & draft responses", value: "$24K/yr value" },
                                    { icon: Users, text: "Lead qualification & pipeline management", value: "$36K/yr value" },
                                    { icon: Globe, text: "SEO blog deployment (daily, automated)", value: "$12K/yr value" },
                                    { icon: Shield, text: "Custom automations for YOUR business", value: "$10K value" },
                                    { icon: Clock, text: "2 weeks of tuning & optimization", value: "$5K value" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                            <span className="text-slate-200 text-sm">{item.text}</span>
                                        </div>
                                        <span className="text-slate-500 text-xs whitespace-nowrap">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Value Stack */}
                            <div className="bg-white/5 rounded-2xl p-6 mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400 text-sm">Total Value</span>
                                    <span className="text-slate-400 line-through text-lg">$295,000/yr</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400 text-sm">Not even</span>
                                    <span className="text-slate-400 line-through text-lg">$50,000</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                                    <span className="text-white font-bold text-lg">Your Investment</span>
                                    <span className="text-4xl font-black text-white">$10,000</span>
                                </div>
                                <p className="text-blue-400 text-sm mt-2 text-right">One-time. You own everything.</p>
                            </div>

                            {/* Guarantee */}
                            <div className="bg-blue-500/5 border border-blue-500/20 rounded-xl p-4 mb-8">
                                <p className="text-sm text-blue-300">
                                    <strong>🛡️ ROI Guarantee:</strong> If you don't save at least 20 hours/week within 30 days, we'll rebuild it for free until you do.
                                </p>
                            </div>

                            <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-500 group" asChild>
                                <a href="/audit">
                                    GET YOUR AI COO
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <p className="text-center text-slate-500 text-sm mt-4">Starts with a free audit call</p>
                        </motion.div>

                        {/* OFFER 2: Full AI Infrastructure */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="bg-white/5 backdrop-blur-3xl border-2 border-amber-500/30 rounded-[2rem] p-8 sm:p-10 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-yellow-500" />
                            <div className="absolute top-6 right-6 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/30">
                                PREMIUM
                            </div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-amber-500/10 rounded-2xl">
                                    <Crown className="w-8 h-8 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Full AI Infrastructure</h3>
                                    <p className="text-amber-400 text-sm font-medium">The Complete Transformation</p>
                                </div>
                            </div>

                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Everything in the AI COO — plus we build your entire digital infrastructure from scratch.
                                Website. Content strategy. Sales pipeline. Lead magnets. Automations. The whole machine.
                            </p>

                            {/* What's Included */}
                            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-slate-500 mb-6">Everything in AI COO, Plus</h4>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: Globe, text: "Custom website (designed, built, deployed)", value: "$15K value" },
                                    { icon: FileText, text: "Full content strategy (4 weeks, every platform)", value: "$20K value" },
                                    { icon: Mail, text: "Email sequences (welcome, nurture, follow-up)", value: "$8K value" },
                                    { icon: Users, text: "Lead magnets (written, designed, deployed)", value: "$6K value" },
                                    { icon: MessageSquare, text: "ManyChat/DM automations (full flows)", value: "$5K value" },
                                    { icon: TrendingUp, text: "Sales scripts & proposal templates", value: "$5K value" },
                                    { icon: BarChart3, text: "30 SEO blog posts (deployed & ranking)", value: "$15K value" },
                                    { icon: Building2, text: "CRM setup & pipeline configuration", value: "$5K value" },
                                    { icon: Rocket, text: "Go-to-market launch plan (week-by-week)", value: "$10K value" },
                                    { icon: Shield, text: "90-day roadmap with revenue targets", value: "$8K value" },
                                    { icon: Clock, text: "30 days of hands-on support & optimization", value: "$10K value" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                                            <span className="text-slate-200 text-sm">{item.text}</span>
                                        </div>
                                        <span className="text-slate-500 text-xs whitespace-nowrap">{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Value Stack */}
                            <div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-6 mb-8">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400 text-sm">Total Value</span>
                                    <span className="text-slate-400 line-through text-lg">$402,000+</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-400 text-sm">Not even</span>
                                    <span className="text-slate-400 line-through text-lg">$100,000</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-amber-500/20">
                                    <span className="text-white font-bold text-lg">Your Investment</span>
                                    <div className="text-right">
                                        <span className="text-4xl font-black text-white">$25,000</span>
                                        <span className="text-slate-400 text-lg"> - $50,000</span>
                                    </div>
                                </div>
                                <p className="text-amber-400 text-sm mt-2 text-right">Based on scope. You own everything.</p>
                            </div>

                            {/* Guarantee */}
                            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 mb-8">
                                <p className="text-sm text-amber-300">
                                    <strong>🛡️ Revenue Guarantee:</strong> We build until you see results. If you don't generate at least $50K in pipeline within 90 days, we keep working for free.
                                </p>
                            </div>

                            <Button size="lg" className="w-full h-16 rounded-2xl text-lg font-bold bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:from-amber-400 hover:to-yellow-400 group" asChild>
                                <a href="/audit">
                                    GET FULL INFRASTRUCTURE
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </Button>
                            <p className="text-center text-slate-500 text-sm mt-4">Starts with a free audit call</p>
                        </motion.div>
                    </div>

                    {/* Comparison */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-32"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">The Real Cost Comparison</h2>
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12">
                            <div className="space-y-6">
                                {[
                                    { role: "Executive Assistant", salary: "$55K/yr", ai: "Included" },
                                    { role: "Content Manager", salary: "$65K/yr", ai: "Included" },
                                    { role: "Marketing Coordinator", salary: "$50K/yr", ai: "Included" },
                                    { role: "Sales Development Rep", salary: "$55K/yr", ai: "Included" },
                                    { role: "Operations Manager", salary: "$75K/yr", ai: "Included" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                                        <span className="text-slate-300 font-medium">{item.role}</span>
                                        <div className="flex items-center gap-8">
                                            <span className="text-red-400 line-through text-sm">{item.salary}</span>
                                            <span className="text-blue-400 font-bold text-sm bg-blue-500/10 px-3 py-1 rounded-full">{item.ai}</span>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex items-center justify-between pt-6 border-t-2 border-white/10">
                                    <span className="text-white font-bold text-xl">Total Cost to You</span>
                                    <div className="flex items-center gap-8">
                                        <span className="text-red-400 line-through text-xl">$300K/yr</span>
                                        <span className="text-blue-400 font-black text-xl">$10K once</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Process Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-32 max-w-4xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-center">How It Works</h2>
                        <p className="text-slate-400 text-center mb-12 text-lg">From audit to autopilot in 2-4 weeks.</p>
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Free AI Audit", desc: "We analyze your business operations, identify bottlenecks, and show you exactly where AI saves you time and money. No pitch. Just clarity.", time: "30-minute call" },
                                { step: "02", title: "Custom Build", desc: "We install your AI COO, connect it to your tools, configure your automations, and train it on your specific business. Everything is custom to you.", time: "1-2 weeks" },
                                { step: "03", title: "Launch & Optimize", desc: "Your AI goes live. Morning briefs start arriving. Content starts flowing. Pipeline starts building. We optimize for 2-4 weeks until it's dialed in.", time: "2-4 weeks" },
                                { step: "04", title: "You Own It", desc: "No retainers. No subscriptions. No vendor lock-in. The system is yours. It runs 24/7. And it only gets better over time.", time: "Forever" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-8 items-start">
                                    <span className="text-6xl font-black text-white/10 shrink-0">{item.step}</span>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <span className="text-xs text-slate-500 bg-white/5 px-3 py-1 rounded-full">{item.time}</span>
                                        </div>
                                        <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Who This Is For */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto mb-32"
                    >
                        <h2 className="text-4xl font-bold text-center mb-12">Who This Is For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-green-400 mb-6">✅ This IS for you if:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "You're doing $1M-$50M in revenue",
                                        "You're the bottleneck in your own business",
                                        "You know AI matters but don't know where to start",
                                        "You want systems, not more employees",
                                        "You value time over money",
                                        "You're ready to invest in infrastructure",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-red-400 mb-6">❌ This is NOT for you if:</h3>
                                <ul className="space-y-4">
                                    {[
                                        "You're pre-revenue or just starting out",
                                        "You want a chatbot, not a business system",
                                        "You're looking for the cheapest option",
                                        "You don't have existing operations to optimize",
                                        "You want someone else to run your business entirely",
                                        "You're not willing to invest in real infrastructure",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300">
                                            <X className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Final CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-center bg-blue-600/10 border border-blue-500/20 p-16 sm:p-24 rounded-[4rem]"
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold mb-6">Your Business Should Run <br /><span className="text-blue-400 italic">Without You</span></h2>
                        <p className="text-xl text-slate-400 mb-4 max-w-2xl mx-auto font-light">
                            We only take on a handful of clients at a time to ensure quality.
                        </p>
                        <p className="text-slate-500 mb-12 max-w-xl mx-auto">
                            The audit is free. We'll look at your operations, show you where AI creates leverage, 
                            and give you a clear roadmap — whether you work with us or not.
                        </p>
                        <Button size="lg" className="h-20 px-12 rounded-full text-xl font-bold bg-white text-black hover:bg-slate-200 group" asChild>
                            <a href="/audit">
                                BOOK YOUR FREE AI AUDIT
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                        <p className="mt-6 text-slate-500 font-medium">30-minute call. No pitch. Just clarity.</p>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
