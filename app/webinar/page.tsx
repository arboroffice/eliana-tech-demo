"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { motion } from "framer-motion"

export default function WebinarPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono antialiased">
            <GlassmorphismNav />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* HERO */}
                <section className="mb-24 text-center">
                    <div className="eyebrow justify-center">Free Masterclass</div>
                    <h1 className="s-title mb-8">
                        The 24-Hour <br />
                        <span className="r">Founder</span>
                    </h1>
                    <p className="text-sm text-[#555] max-w-2xl mx-auto leading-relaxed mb-12">
                        How to replace yourself with AI systems in 7 days. Learn the exact 3-step framework we use to install autonomous departments and reclaim 20+ hours of your week.
                    </p>

                    {/* VIDEO PLACEHOLDER */}
                    <div className="video-container mb-12 group cursor-pointer">
                        <div className="aspect-video bg-[#F2F1ED] border border-[#E4E3DE] flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="w-20 h-20 bg-[#D90019] rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-xl">
                                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2" />
                            </div>
                            <div className="absolute bottom-6 left-6 text-left">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#888]">Evergreen Training</p>
                                <p className="text-sm font-bold text-[#0C0C0C]">45m 12s</p>
                            </div>
                        </div>
                    </div>

                    <Link href="/audit" className="bg-black text-white px-10 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity">
                        Skip to the Free Audit →
                    </Link>
                </section>

                {/* THE AGENDA */}
                <section className="mb-32">
                    <div className="eyebrow">The Agenda</div>
                    <h2 className="s-title mb-16 text-4xl sm:text-5xl">Pure <span className="r">Architecture.</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-[#E4E3DE]">
                        {[
                            {
                                step: "01",
                                title: "The Bottleneck Audit",
                                detail: "Why your business feels heavy and how to identify the high-value nodes where AI provides the most leverage."
                            },
                            {
                                step: "02",
                                title: "Building the Brain",
                                detail: "How we create a 'Company Memory' that allows AI agents to act as expert employees who know your business inside out."
                            },
                            {
                                step: "03",
                                title: "The Installation Loop",
                                detail: "Our 7-day install process for deploying autonomous systems, followed by 30 days of training on your company data — without disrupting your current operations."
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="p-12 bg-white">
                                <span className="text-4xl font-black text-[#E4E3DE] mb-6 block font-bebas-neue">{item.step}</span>
                                <h3 className="text-xl font-bold mb-4 uppercase tracking-wide font-bebas-neue">{item.title}</h3>
                                <p className="text-sm text-[#555] leading-relaxed">{item.detail}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* THE MANIFESTO */}
                <section className="mb-32 p-12 sm:p-24 bg-black text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl sm:text-4xl font-bold mb-12 uppercase italic leading-tight font-bebas-neue">
                            "Most founders are just highly paid operators of a museum dedicated to manual labor."
                        </h2>

                        <div className="space-y-8 text-sm text-[#888] leading-relaxed font-mono">
                            <p>Success doesn't come from working more. It comes from owning things that work for you. In 2026, those things are <span className="text-white font-bold">Autonomous Systems</span>.</p>
                            <p>Every hour you spend answering a repetitive query, chasing a vendor, or manually drafting a report is an hour stolen from your vision. You aren't building an empire; you're building a cage.</p>
                            <p>We provide the key. We don't just 'consult' - we install. We build the infrastructure that allows your business to breathe, to scale, and to run without your constant supervision.</p>
                        </div>

                        <div className="mt-16 pt-16 border-t border-white/10">
                            <h3 className="text-2xl font-bold mb-8 uppercase font-bebas-neue">Ready to stop operating?</h3>
                            <Link href="/audit" className="bg-[#D90019] text-white px-12 py-5 font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity">
                                Get Your Free Audit →
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            <style jsx>{`
                .eyebrow {
                    font-size: 10px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: #D90019;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 24px;
                }

                .eyebrow::before {
                    content: "";
                    width: 24px;
                    height: 1px;
                    background: #D90019;
                }

                .s-title {
                    font-family: var(--font-bebas-neue), sans-serif;
                    font-size: clamp(44px, 6vw, 80px);
                    line-height: 0.9;
                    letter-spacing: 0.02em;
                    color: #0C0C0C;
                }

                .r {
                    color: #D90019;
                }

                .video-container {
                    max-width: 900px;
                    margin-left: auto;
                    margin-right: auto;
                    box-shadow: 0 40px 100px -20px rgba(0,0,0,0.1);
                }
            `}</style>
        </div>
    )
}
