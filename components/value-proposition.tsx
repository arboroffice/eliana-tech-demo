"use client"

import { motion } from "framer-motion"
import { Building2, Cpu, Users, ArrowRight } from "lucide-react"

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
                            Think of Us as a
                            <br />
                            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                                Digital Operations Firm
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                            We build <strong className="font-semibold text-slate-700">AI agents, workflows, and systems</strong>. We handle <strong className="font-semibold text-slate-700">delivery, monitoring, and improvement</strong>. Clients pay for results. We own the stack.
                        </p>
                    </motion.div>

                    {/* Evolution Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl p-8 sm:p-12 mb-12 sm:mb-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: "32px 32px",
                                }}
                            ></div>
                        </div>
                        <div className="relative z-10">
                            <p className="text-slate-400 text-sm sm:text-base uppercase tracking-wider mb-4 font-semibold">
                                The Model
                            </p>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
                                A Service Business Powered by AI
                            </h3>
                            <p className="text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
                                Selling installs is a one-time event. Selling outcomes is recurring. Clients don't want to run it. <strong className="font-bold text-white">They want it done.</strong> That gives you leverage. Recurring cash. Long relationships. Higher value.
                            </p>
                        </div>
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
                                <Cpu className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">AI Does the Bulk</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Client communication, task execution, reporting, monitoring, data processing, content, scheduling — <strong className="font-semibold text-slate-700">agents handle it all.</strong>
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
                                <Users className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Humans Steer</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Strategy, oversight, sales, product design, quality control — <strong className="font-semibold text-slate-700">the human layer guides everything.</strong> Margin comes from automation.
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
                                <Building2 className="w-6 h-6 text-slate-600" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">Moat That Compounds</h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                                Proprietary workflows, trained agents, operational data, continuous improvement. <strong className="font-semibold text-slate-700">Competitors can copy tools. They can't copy your delivery.</strong>
                            </p>
                        </motion.div>
                    </div>

                    {/* Revenue Ladder */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8"
                    >
                        <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">The Path</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
                            {[
                                { label: "Build Program", sub: "$10K" },
                                { label: "Full Buildout", sub: "$25K–$75K" },
                                { label: "AI Wing Retainer", sub: "$5–10K/mo" },
                                { label: "Revenue Share", sub: "For the ones we believe in" },
                            ].map((step, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-2">
                                    <div className="text-center px-3 py-2">
                                        <span className="text-slate-900 font-semibold text-sm block">{step.label}</span>
                                        <span className="text-slate-500 text-xs">{step.sub}</span>
                                    </div>
                                    {i < 3 && <ArrowRight className="w-4 h-4 text-slate-300 hidden md:block" />}
                                    {i < 3 && <div className="w-px h-4 bg-slate-300 md:hidden" />}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
