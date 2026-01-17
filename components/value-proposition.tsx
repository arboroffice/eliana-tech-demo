"use client"

import { motion } from "framer-motion"
import { Eye, Users, TrendingUp, Clock, Shield, Zap } from "lucide-react"

export function ValueProposition() {
    return (
        <section className="relative z-10">
            <div className="bg-white pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                        }}
                    ></div>
                </div>

                {/* Floating Dots */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-slate-200 rounded-full animate-float"
                            style={{
                                left: `${20 + i * 15}%`,
                                top: `${30 + (i % 3) * 20}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${4 + i * 0.5}s`,
                            }}
                        ></div>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto relative">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 text-balance mb-4 sm:mb-6">
                            We're Not Just Your AI Team—
                            <br />
                            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                                We're Your Growth Co-Founders
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                            We come in as your <strong className="font-semibold text-slate-700">AI implementation arm</strong>, your <strong className="font-semibold text-slate-700">strategic growth partner</strong>—the co-founder who sees the revenue leaks and bottlenecks that you're too close to spot.
                        </p>
                    </motion.div>

                    {/* Three Pillars */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Business Expertise First</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Our background is in <strong className="font-semibold text-slate-700">growing companies</strong>, not just building tech. We understand revenue, retention, and real-world operations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">AI as Leverage</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                We use AI as a <strong className="font-semibold text-slate-700">force multiplier</strong>—automating the repetitive so your team can focus on what actually moves the needle.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200 hover:border-slate-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Humanity Where It Matters</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                We automate tasks, not relationships. Your team stays <strong className="font-semibold text-slate-700">human where it counts</strong>, free from soul-crushing busywork.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-900 font-semibold">More Freedom for You</span>
                            </div>
                            <div className="hidden md:block text-slate-300">•</div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-900 font-semibold">Less Repetition for Your Team</span>
                            </div>
                            <div className="hidden md:block text-slate-300">•</div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-slate-500" />
                                <span className="text-slate-900 font-semibold">Time & Money Saved</span>
                            </div>
                        </div>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                            The outcome? You reclaim your time. Your team escapes the grind. Your business scales without burning out.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
