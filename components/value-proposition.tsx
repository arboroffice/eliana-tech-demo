"use client"

import { motion } from "framer-motion"
import { Eye, Users, TrendingUp, Clock, Shield, Zap } from "lucide-react"

export function ValueProposition() {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Main Value Prop */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            We're Not Just Your AI Team—
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400">
                                We're Your Growth Co-Founders
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                            We come in as your <span className="text-blue-400 font-semibold">AI implementation arm</span>, your <span className="text-emerald-400 font-semibold">strategic growth partner</span>—the co-founder who sees the revenue leaks and bottlenecks that you're too close to spot.
                        </p>
                    </motion.div>

                    {/* Three Pillars */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                                <Eye className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Business Expertise First</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Our background is in <strong className="text-slate-300">growing companies</strong>, not just building tech. We understand revenue, retention, and real-world operations.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">AI as Leverage</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We use AI as a <strong className="text-slate-300">force multiplier</strong>—automating the repetitive so your team can focus on what actually moves the needle.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Humanity Where It Matters</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We automate tasks, not relationships. Your team stays <strong className="text-slate-300">human where it counts</strong>, free from soul-crushing busywork.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-gradient-to-r from-blue-600/10 to-emerald-600/10 border border-blue-500/20 rounded-2xl p-8 text-center"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-semibold">More Freedom for You</span>
                            </div>
                            <div className="hidden md:block text-slate-600">•</div>
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-emerald-400" />
                                <span className="text-white font-semibold">Less Repetition for Your Team</span>
                            </div>
                            <div className="hidden md:block text-slate-600">•</div>
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-purple-400" />
                                <span className="text-white font-semibold">Time & Money Saved</span>
                            </div>
                        </div>
                        <p className="text-slate-400 text-lg">
                            The outcome? You reclaim your time. Your team escapes the grind. Your business scales without burning out.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
