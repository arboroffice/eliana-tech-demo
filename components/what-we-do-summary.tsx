"use client"

import { motion } from "framer-motion"
import { Layers, Mic, Bot, BarChart3 } from "lucide-react"

const features = [
    {
        title: "Offer stack",
        description: "Designed, priced, and positioned. You know exactly what you sell and why it works.",
        icon: <Layers className="w-8 h-8" />
    },
    {
        title: "Content waterfall",
        description: "100+ pieces a week from one pillar. Create once, distribute everywhere.",
        icon: <Mic className="w-8 h-8" />
    },
    {
        title: "Agent infrastructure",
        description: "Content, support, and ops agents running inside your business. Not tools — teammates.",
        icon: <Bot className="w-8 h-8" />
    },
    {
        title: "Systems & workflows",
        description: "SOPs, automations, and connected tools. Your business runs without you being the bottleneck.",
        icon: <BarChart3 className="w-8 h-8" />
    }
]

export function WhatWeDoSummary() {
    return (
        <section className="py-32 px-4 bg-black text-white overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[150px] -z-10 translate-x-1/3 -translate-y-1/3" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-24"
                >
                    <span className="text-slate-700 font-black tracking-[0.4em] uppercase text-xs mb-6 block font-bold">What You Walk Away With</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-10 tracking-tight leading-[1] max-w-5xl mx-auto">
                        Not Knowledge. <span className="text-slate-600 italic font-serif font-light">Infrastructure.</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        The Build Program doesn't teach you how to build. It builds alongside you. By the end you don't have information. <span className="text-white">You have a running business.</span>
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
                            className="p-10 rounded-[2.5rem] border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-500/30 transition-all duration-500 group"
                        >
                            <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center text-red-400 mb-10 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-red-400 transition-colors uppercase tracking-tight">{feature.title}</h3>
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
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
                    <p className="text-2xl sm:text-4xl md:text-5xl font-serif font-light text-slate-300 leading-[1.3] italic max-w-4xl mx-auto">
                        "$10,000 of infrastructure that runs forever is worth more than $10,000 of <span className="text-white not-italic font-sans font-black tracking-tighter">anything else.</span>"
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
