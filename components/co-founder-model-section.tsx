"use client"

import { motion } from "framer-motion"
import { Brain, RefreshCw, Briefcase, Quote, AlertTriangle } from "lucide-react"

export function CoFounderModelSection() {
    return (
        <section className="relative z-10 py-16 sm:py-24 px-4 overflow-hidden">
            {/* Background elements to match dark theme */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 sm:mb-24"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold mb-8">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        95% OF AI IMPLEMENTATIONS FAIL
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-balance mb-8">
                        Most AI Is Static.
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
                            Yours Must Be Alive.
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                        AI is only as good as what it's trained on. Static prompts decay. Outdated context creates errors. That's why we built the <strong className="font-semibold text-white">Co-Founder Model</strong>.
                    </p>

                    {/* Quote */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 -rotate-1"></div>
                        <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-white/20 rotate-180" />
                            <p className="relative z-10 text-lg sm:text-2xl text-white/90 italic font-medium leading-relaxed font-serif">
                                "It's not enough to just 'install AI'. If it doesn't learn from your daily operations, it's just a fancy answering machine that will eventually break."
                            </p>
                            <Quote className="absolute bottom-6 right-6 w-8 h-8 text-white/20" />
                        </div>
                    </div>
                </motion.div>

                {/* Transition to Co-Founder Model */}
                <div className="text-center mb-12 sm:mb-16">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">The Co-Founder Model</h3>
                    <p className="text-slate-400 text-lg mb-6">An AI partner that evolves with your business.</p>
                    <div className="inline-block px-6 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <p className="text-blue-400 font-medium text-lg">Rent or own our technology for your company</p>
                    </div>
                </div>

                {/* Three Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-blue-400 font-bold text-xl">01</span>
                        </div>
                        <div className="mb-4">
                            <Briefcase className="w-8 h-8 text-white/80 mb-3" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Real Business DNA</h3>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            Trained on years of <strong className="font-semibold text-white">real business expertise</strong>, not just generic internet data. We inject deep operational context from Day 1.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-blue-400 font-bold text-xl">02</span>
                        </div>
                        <div className="mb-4">
                            <RefreshCw className="w-8 h-8 text-white/80 mb-3" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Continuous Context Loop</h3>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            We make it easy to correct and refine the AI. It <strong className="font-semibold text-white">learns from every correction</strong>, getting smarter with every interaction.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <span className="text-blue-400 font-bold text-xl">03</span>
                        </div>
                        <div className="mb-4">
                            <Brain className="w-8 h-8 text-white/80 mb-3" />
                            <h3 className="text-xl sm:text-2xl font-bold text-white">Hands-Free Evolution</h3>
                        </div>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            It digests <strong className="font-semibold text-white">real-time company data</strong> from all touchpoints, evolving your strategy without adding to your workload.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}
