"use client"

import { useParams, notFound } from "next/navigation"
import { industries } from "@/lib/industry-data"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem, Divider } from "@/components/scroll-reveal"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

export default function IndustryPage() {
    const params = useParams()
    const slug = params.slug as string
    const industry = industries.find((i) => i.slug === slug)

    if (!industry) {
        notFound()
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <main className="min-h-screen relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 w-full h-full">
                    <Aurora
                        colorStops={["#1e293b", "#334155", "#1e293b"]}
                        amplitude={1.2}
                        blend={0.6}
                        speed={0.4}
                    />
                </div>

                <div className="relative z-10">
                    <GlassmorphismNav />

                    {/* HERO SECTION */}
                    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.p
                                className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 mb-6"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                AI Solutions for {industry.name}
                            </motion.p>
                            <motion.h1
                                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 uppercase leading-[1.1]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                {industry.hook}
                            </motion.h1>
                            <motion.p
                                className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                {industry.problem}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                <Link
                                    href="/audit"
                                    className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                                >
                                    Reclaim Your Time →
                                </Link>
                            </motion.div>
                        </div>
                    </section>

                    {/* THE OPERATOR PROBLEM SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-50 text-stone-900">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-8 text-center">The Operator vs. The Founder</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <p className="text-2xl sm:text-3xl font-medium leading-relaxed italic text-center">
                                    "{industry.operatorProblem}"
                                </p>
                            </ScrollReveal>
                            <div className="mt-16 flex justify-center">
                                <div className="w-24 h-px bg-stone-200" />
                            </div>
                        </div>
                    </section>

                    {/* SERVICE TIERS */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black border-y border-white/5">
                        <div className="max-w-7xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-20">
                                    <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight">Our Solution Ecosystem</h2>
                                    <p className="text-slate-400 max-w-2xl mx-auto">We don't just give you tools. We build the architecture of your future.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Single Systems */}
                                <ScrollReveal delay={0.1}>
                                    <div className="h-full p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{industry.services.singleSystems.title}</h3>
                                        <p className="text-slate-400 mb-8 text-sm">{industry.services.singleSystems.description}</p>
                                        <div className="space-y-6 flex-grow">
                                            {industry.services.singleSystems.examples.map((ex, idx) => (
                                                <div key={idx} className="space-y-2 pb-6 border-b border-white/5 last:border-0">
                                                    <h4 className="text-white font-bold text-lg">{ex.title}</h4>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{ex.detail}</p>
                                                    <p className="text-slate-200 text-xs font-mono uppercase tracking-widest pt-2">ROI: {ex.roi}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Departments */}
                                <ScrollReveal delay={0.2}>
                                    <div className="h-full p-8 rounded-3xl bg-slate-800/20 border border-white/10 backdrop-blur-sm flex flex-col relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-4">
                                            <span className="text-[10px] bg-white/10 text-white/40 px-2 py-1 rounded-full uppercase tracking-tighter">Scalable</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{industry.services.departments.title}</h3>
                                        <p className="text-slate-400 mb-8 text-sm">{industry.services.departments.description}</p>
                                        <div className="space-y-6 flex-grow">
                                            {industry.services.departments.areas.map((area, idx) => (
                                                <div key={idx} className="space-y-2 pb-6 border-b border-white/5 last:border-0">
                                                    <h4 className="text-white font-bold text-lg">{area.area}</h4>
                                                    <p className="text-slate-400 text-sm leading-relaxed">{area.detail}</p>
                                                    <p className="text-slate-200 text-xs font-mono uppercase tracking-widest pt-2">Impact: {area.impact}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Custom OS */}
                                <ScrollReveal delay={0.3}>
                                    <div className="h-full p-8 rounded-3xl bg-gradient-to-b from-slate-800 to-black border border-white/10 flex flex-col">
                                        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{industry.services.custom.title}</h3>
                                        <p className="text-slate-400 mb-8 text-sm">{industry.services.custom.description}</p>
                                        <ul className="space-y-4 mb-12 flex-grow text-slate-300 text-sm">
                                            {industry.services.custom.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <span className="text-slate-500 mt-1">/ /</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/audit"
                                            className="w-full text-center py-4 rounded-xl bg-white text-black font-bold text-sm hover:scale-[1.02] transition-transform"
                                        >
                                            REQUEST CUSTOM OS
                                        </Link>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* LONG FORM CONTENT SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900">
                        <div className="max-w-3xl mx-auto prose prose-stone prose-lg dark:prose-invert">
                            <ScrollReveal>
                                <div className="long-form-content">
                                    <ReactMarkdown>{industry.longFormContent}</ReactMarkdown>
                                </div>
                            </ScrollReveal>

                            <div className="mt-20 p-10 bg-stone-50 rounded-3xl border border-stone-100 text-center">
                                <h3 className="text-2xl font-black mb-4">Ready to stop operating and start building?</h3>
                                <p className="text-stone-600 mb-8">We build your custom AI employee in 30 days. Guaranteed.</p>
                                <Link
                                    href="/audit"
                                    className="inline-block px-10 py-4 rounded-full bg-stone-900 text-white font-bold hover:bg-stone-800 transition-all"
                                >
                                    Get Your Audit →
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* FAQ SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-slate-950 border-t border-white/5">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <h2 className="text-3xl sm:text-4xl font-black text-white mb-12 uppercase tracking-tight text-center">Frequently Asked</h2>
                            </ScrollReveal>

                            <div className="space-y-12">
                                {industry.faq.map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 border-b border-white/5">
                                            <div className="md:col-span-1">
                                                <span className="text-slate-500 font-mono text-xs uppercase tracking-widest">Question {idx + 1}</span>
                                            </div>
                                            <div className="md:col-span-3">
                                                <h4 className="text-xl font-bold text-white mb-4">{item.q}</h4>
                                                <p className="text-slate-400 leading-relaxed">{item.a}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </main>

            <style jsx global>{`
        .long-form-content h2 {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          font-size: 2.25rem;
          line-height: 1.1;
        }
        .long-form-content h3 {
          font-weight: 800;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }
        .long-form-content p {
          color: #444;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }
      `}</style>
        </div>
    )
}
