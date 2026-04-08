"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { OfficialPartners } from "@/components/official-partners"

export default function DoneWithYouPage() {
    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
            <GlassmorphismNav />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                {/* HERO SECTION */}
                <section className="mb-24">
                    <div className="eyebrow">Operation Infrastructure Installation</div>
                    <h1 className="s-title mb-8 leading-tight">
                        Founder AI <br />
                        <span className="r">OS Install</span>
                    </h1>

                    <div className="flex flex-wrap gap-4 mb-8">
                        {["CRM REBUILD", "LEAD ROUTING", "PIPELINE LOGIC", "TASK AUTOMATION"].map((item) => (
                            <span key={item} className="text-[10px] uppercase tracking-widest border border-[#E4E3DE] px-4 py-2 bg-white">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mb-8">
                        <span className="text-sm font-bold text-[#D90019] tracking-widest uppercase">Price: $8k to $20k</span>
                    </div>

                    <p className="text-sm text-[#555] leading-relaxed max-w-2xl mb-12">
                        We handle your operation infrastructure installation — a complete overhaul of your
                        operational backbone. We build your backend admin so you can stop being the system and start being the architect.
                        <br /><br />
                        Result: Founder works on strategy. Not backend admin.
                    </p>

                    <Link href="/audit" className="btn-red-large !text-white">
                        Apply for OS Install
                    </Link>

                    <OfficialPartners className="mt-20 pt-16 border-t border-[#E4E3DE]" variant="light" />
                </section>

                {/* THE INSTALLATION LIST */}
                <section className="mb-24 pt-16 border-t border-[#E4E3DE]">
                    <div className="category-header mb-12">
                        <span className="cat-num">What We Install</span>
                        <h2 className="cat-title">The Operational Package</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-[#CCCBC5] border border-[#CCCBC5]">
                        {[
                            { title: "CRM Rebuild", desc: "We tear down your current CRM and rebuild it for speed and clarity." },
                            { title: "Automated Lead Routing", desc: "No more manual assignments. Leads go to the right person instantly." },
                            { title: "Sales Pipeline Logic", desc: "Custom stages and triggers that push deals through the funnel." },
                            { title: "Proposal Follow Up", desc: "Automated sequences that chase signatures so you don't have to." },
                            { title: "Reporting Dashboards", desc: "Real-time visibility into every dollar and every lead in your business." },
                            { title: "Approval Thresholds", desc: "Systems that flag issues and require approval only when necessary." },
                            { title: "Task Automation", desc: "Moving data between tools automatically. Zero manual entry." },
                            { title: "The Handover", desc: "We train your team and hand you the keys to your new engine." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#FAFAF8] p-8">
                                <h4 className="font-bold text-xs uppercase tracking-widest mb-3">{item.title}</h4>
                                <p className="text-[11px] leading-relaxed text-[#666]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* PHILOSOPHY SECTION */}
                <section className="mb-24 py-16 border-y border-[#E4E3DE]">
                    <div className="category-header mb-12">
                        <span className="cat-num">The Strategy</span>
                        <h2 className="cat-title">From Admin to Architect</h2>
                        <p className="text-sm text-[#555] mt-4">We find the operational systems and translate them into a digital workforce.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-bold text-lg mb-3">Process Intelligence</h4>
                                <p className="text-sm leading-relaxed text-[#666]">
                                    We start with your current business processes. We map the flow of information,
                                    customer interactions, and operational bottlenecks. We find the systems that are hidden in your daily chaos.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-3">The OS Result</h4>
                                <p className="text-sm leading-relaxed text-[#666]">
                                    This model is for founders who are tired of being the bottleneck. We install the logic, the reporting,
                                    and the automation so the business runs without you in the middle of every task.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#0C0C0C] p-8 text-white border-l-4 border-[#D90019]">
                            <div className="text-[10px] uppercase tracking-widest text-[#D90019] mb-4">Core Philosophy</div>
                            <h3 className="font-bebas text-3xl mb-4 italic opacity-80">"Flow Over Force."</h3>
                            <p className="text-xs leading-relaxed text-gray-400">
                                Your business is a machine. If you are breaking, it's because the machine is poorly designed.
                                We don't fix people; we fix the systems that are breaking them. We build the workforce that allows you to scale
                                without the human cost.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA BANNER */}
                <section className="cta-banner">
                    <div className="cta-content">
                        <h3 className="cta-title">Build with <span className="r">Intelligence</span>, not just manpower.</h3>
                        <p className="cta-text">
                            Move your team from administration to strategy. Co-build your AI infrastructure with the architects
                            of the new world.
                        </p>
                        <Link href="/audit" className="btn-red-large !text-white">
                            Book Your Partnership Audit
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
