"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { AITeamSection } from "../../components/ai-team-section"

export default function AITeamPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20">
                <div className="px-6 max-w-7xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Your AI Workforce</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Meet the digital team members that never sleep, miss a lead, or take a day off.
                        Scalable, efficient, and always on brand.
                    </p>
                </div>

                {/* Agent Profiles */}
                <div className="px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-32">
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-blue-500/50 transition-all duration-500">
                        <div className="h-48 bg-gradient-to-br from-blue-900/50 to-slate-900 border-b border-white/5 relative flex items-center justify-center p-6">
                            <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-4xl">💼</span>
                            </div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-xl font-bold text-white">Eliana</h3>
                                <p className="text-blue-400 text-sm font-medium uppercase tracking-wider">Sales Specialist</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                specializies in turning cold traffic into qualified appointments. She engages visitors instantly, answers product questions, handles objections, and books meetings directly on your calendar.
                            </p>
                            <ul className="space-y-3">
                                {["Instant Lead Response", "24/7 Qualification", "Objection Handling", "Calendar Management"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-500">
                        <div className="h-48 bg-gradient-to-br from-purple-900/50 to-slate-900 border-b border-white/5 relative flex items-center justify-center p-6">
                            <div className="w-24 h-24 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/30 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-4xl">🛡️</span>
                            </div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-xl font-bold text-white">Support Bot</h3>
                                <p className="text-purple-400 text-sm font-medium uppercase tracking-wider">Customer Experience</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                Your first line of defense for customer happiness. Handles tickets, answers FAQs, troubleshoots common issues, and intelligently routes complex problems to human agents.
                            </p>
                            <ul className="space-y-3">
                                {["Ticket Triage", "Instant FAQ Answers", "Order Tracking", "Multilingual Support"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm group hover:border-emerald-500/50 transition-all duration-500">
                        <div className="h-48 bg-gradient-to-br from-emerald-900/50 to-slate-900 border-b border-white/5 relative flex items-center justify-center p-6">
                            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-4xl">⚡</span>
                            </div>
                            <div className="absolute bottom-4 left-6">
                                <h3 className="text-xl font-bold text-white">Ops Manager</h3>
                                <p className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Operations & Admin</p>
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <p className="text-slate-300 leading-relaxed">
                                The glue that holds your processes together. Automates invoices, chases payments, updates CRM records, and reminds your team of key deliverables.
                            </p>
                            <ul className="space-y-3">
                                {["Invoice Automation", "CRM Data Entry", "Review & Referral Requests", "Staff Reminders"].map((item, i) => (
                                    <li key={i} className="flex items-center text-sm text-slate-400">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="px-6 max-w-7xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">See Them In Action</h2>
                    <AITeamSection />
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
