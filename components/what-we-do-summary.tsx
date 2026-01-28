"use client"

import { motion } from "framer-motion"
import { MessageSquare, Zap, Rocket, ShieldCheck } from "lucide-react"

const features = [
    {
        title: "Lead follow-up",
        description: "Every lead gets a response in seconds, 24/7. No more missed opportunities.",
        icon: <Rocket className="w-8 h-8" />
    },
    {
        title: "Customer support",
        description: "Answers questions, books appointments, and handles complaints autonomously.",
        icon: <MessageSquare className="w-8 h-8" />
    },
    {
        title: "Daily operations",
        description: "The repetitive stuff that eats your day, now handled by smart systems.",
        icon: <Zap className="w-8 h-8" />
    },
    {
        title: "Sales support",
        description: "Nurtures leads until they're ready to buy, keeping your pipeline full.",
        icon: <ShieldCheck className="w-8 h-8" />
    }
]

export function WhatWeDoSummary() {
    return (
        <section className="py-32 px-4 bg-black text-white overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <span className="text-slate-700 font-black tracking-[0.4em] uppercase text-xs mb-6 block font-bold">The Core Expertise</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-[1] max-w-5xl mx-auto">
                        We Build AI Systems That <span className="text-slate-600 italic font-serif font-light">Run Your Business</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        We don't sell you software and walk away. We come in, learn your business DNA, and build custom AI systems that <span className="text-white">do the work for you.</span>
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-400 mb-10 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-lg text-slate-500 leading-relaxed font-light group-hover:text-slate-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-24 p-16 sm:p-24 rounded-[4rem] bg-white/[0.01] border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />
                    <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-slate-300 leading-[1.3] italic max-w-4xl mx-auto">
                        "You get your time back. Your team escapes the grind. Your business grows without <span className="text-white not-italic font-sans font-black tracking-tighter">burning out.</span>"
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
