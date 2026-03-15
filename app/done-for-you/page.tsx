"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function DoneForYouPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
            <GlassmorphismNav />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* HERO SECTION */}
                <section className="mb-24">
                    <div className="eyebrow">The Digital Workforce</div>
                    <h1 className="s-title mb-8 leading-tight">
                        AI Department <br />
                        <span className="r">Build</span>
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {["Sales Assistant", "Ops Coordinator", "Finance Tracker", "Marketing Engine"].map((item) => (
                            <span key={item} className="text-[10px] uppercase tracking-widest border border-[#E4E3DE] px-4 py-2 bg-white">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mb-8">
                        <span className="text-sm font-bold text-[#D90019] tracking-widest uppercase">Price: $15k to $40k</span>
                    </div>

                    <p className="text-sm text-[#555] leading-relaxed max-w-2xl mb-12">
                        “Before you hire, let us build your digital team.”
                        <br /><br />
                        Instead of hiring 3 people to handle the manual load, we build a custom AI department that handles
                        the specific revenue-generating and operational roles of your business. Zero overhead.
                        Infinite scale.
                    </p>

                    <Link href="/audit" className="btn-red-large !text-white">
                        Apply for Department Build
                    </Link>
                </section>

                {/* THE AI AGENTS breakdown */}
                <section className="mb-24 py-16 border-y border-[#E4E3DE]">
                    <div className="category-header mb-12">
                        <span className="cat-num">The Digital Team</span>
                        <h2 className="cat-title">The Installed AI Department</h2>
                        <p className="text-sm text-[#555] mt-4">We install specialized intelligence across every revenue-generating function.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { title: "AI Sales Assistant", desc: "Qualifies leads 24/7 via voice/text and books appointments on your calendar without sleep." },
                            { title: "AI Operations Coordinator", desc: "Connects your tech stack, manages task routing, and ensures projects stay on track." },
                            { title: "AI Finance Tracker", desc: "Monitors profit, flags late payments, and provides real-time financial reporting." },
                            { title: "AI Reporting Agent", desc: "Aggregates data from every source into clean, actionable dashboards for the founder." },
                            { title: "AI Marketing Engine", desc: "Generates content, manages distribution, and optimizes ad-spend in real-time." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-[#F2F1ED] border border-[#E4E3DE]">
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-3">{item.title}</h4>
                                <p className="text-[11px] leading-relaxed text-[#666]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* THE PROMISE */}
                <section className="mb-24 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="cat-title mb-8">What Your <span className="r">AI Team</span> Handles</h2>
                        <ul className="space-y-6">
                            {[
                                "Custom Trained AI Sales & Support Agents",
                                "Full Financial & Operational Reporting",
                                "Automated Marketing & Content Distribution",
                                "Internal Ops Automation (The 'Invisible Hand')",
                                "Real-time Profit & Performance Dashboards",
                                "Ongoing Technical Oversight & Maintenance",
                                "Custom API Middleware & Data Bridges",
                                "Digital SOP & Team Knowledge Base",
                                "Automated Client Onboarding & Referral Systems"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-center text-sm border-b border-[#E4E3DE] pb-4">
                                    <span className="text-[#D90019] font-bold">{String(i + 1).padStart(2, '0')}</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-[#0C0C0C] p-12 text-white border-l-4 border-[#D90019]">
                        <h3 className="font-bebas text-3xl mb-6">The Department Promise</h3>
                        <p className="text-sm leading-relaxed text-gray-400 mb-8 italic">
                            "You are currently building a business around yourself. Our goal is to build a business that runs despite you.
                            We build your digital team so that you can stop being the operator and start being the architect."
                        </p>
                        <div className="text-[10px] uppercase tracking-widest text-[#D90019]">
                            Transformative AI Infrastructure
                        </div>
                    </div>
                </section>

                {/* THE NEXT STEPS (Detailed Journey) */}
                <section className="mb-24">
                    <div className="category-header mb-12">
                        <span className="cat-num">The Implementation Path</span>
                        <h2 className="cat-title">Audit to Managed Scale</h2>
                    </div>
                    <div className="grid md:grid-cols-5 gap-4">
                        {[
                            { step: "01", title: "Technical Audit", desc: "A deep dive into your existing tech stack and operational bottlenecks." },
                            { step: "02", title: "Blueprint", desc: "We design the custom infrastructure and AI department for your business." },
                            { step: "03", title: "Infrastructure Build", desc: "Our engineers build the entire system in our lab environment." },
                            { step: "04", title: "Live Migration", desc: "We port the systems over to your business with zero downtime." },
                            { step: "05", title: "Managed Scale", desc: "Ongoing management, optimization, and constant technical evolution." }
                        ].map((item, idx) => (
                            <div key={idx} className="p-6 border border-[#E4E3DE] bg-white">
                                <span className="text-[20px] font-bebas text-[#D90019] block mb-2">{item.step}</span>
                                <h4 className="font-bold text-[12px] mb-2">{item.title}</h4>
                                <p className="text-[10px] leading-relaxed text-[#666]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA BANNER */}
                <section className="cta-banner">
                    <div className="cta-content">
                        <h3 className="cta-title">Build your <span className="r">Empire</span>, not your systems.</h3>
                        <p className="cta-text">
                            We don't work with everyone. We only install infrastructure for businesses ready to handle the scale.
                            Start with a technical audit to see if we're a fit.
                        </p>
                        <Link href="/audit" className="btn-red-large !text-white">
                            Get Your Technical Audit
                        </Link>
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

                .cat-title {
                    font-family: var(--font-syne), sans-serif;
                    font-size: 32px;
                    font-weight: 700;
                    color: #0C0C0C;
                }

                .cat-num {
                    font-size: 10px;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                    color: #888;
                    display: block;
                    margin-bottom: 12px;
                }

                .r {
                    color: #D90019;
                }

                .btn-red-large {
                    display: inline-block;
                    background: #D90019;
                    color: #FAFAF8 !important;
                    padding: 24px 48px;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.3em;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .btn-red-large:hover {
                    background: #FAFAF8;
                    color: #D90019 !important;
                    transform: scale(1.02);
                }

                .cta-banner {
                    background: #0C0C0C;
                    padding: 80px 48px;
                    text-align: center;
                    border: 1px solid #D90019;
                }

                .cta-title {
                    font-family: var(--font-bebas-neue), sans-serif;
                    font-size: clamp(32px, 5vw, 56px);
                    color: #FAFAF8;
                    margin-bottom: 16px;
                    line-height: 1.1;
                }

                .cta-text {
                    color: #888;
                    font-size: 14px;
                    max-width: 600px;
                    margin: 0 auto 40px;
                    line-height: 1.6;
                }

                @media (max-width: 768px) {
                    .cta-banner {
                        padding: 48px 24px;
                    }
                }
            `}</style>
        </div>
    )
}
