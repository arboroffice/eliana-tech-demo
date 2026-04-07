"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "./scroll-reveal"
import { Cpu, Brain, Zap, Target, Users, TrendingUp, ShieldCheck, Mail, Calendar, Database } from "lucide-react"

export function ZoneOfGenius() {
    const techTasks = [
        { icon: <Mail className="w-5 h-5 text-[#D90019]" />, title: "Inbox Triage", desc: "Every email filtered, prioritized, and drafted by agents who know your voice." },
        { icon: <Target className="w-5 h-5 text-[#D90019]" />, title: "Lead Persistence", desc: "100% follow-up rate. Agents nurture leads for months until they are ready to buy." },
        { icon: <Database className="w-5 h-5 text-[#D90019]" />, title: "Data Plumbing", desc: "CRMs, spreadsheets, and tools synced instantly. Zero manual entry ever again." },
        { icon: <Calendar className="w-5 h-5 text-[#D90019]" />, title: "The 'Calendar Dance'", desc: "Meetings booked, rescheduled, and prepared for without a single 'when works for you?'" },
    ]

    const humanTasks = [
        { icon: <Brain className="w-5 h-5 text-white" />, title: "Strategic Vision", desc: "Determining the 'Next Big Thing' and steering the company toward its North Star." },
        { icon: <Zap className="w-5 h-5 text-white" />, title: "Innovation", desc: "Creating new products, services, and experiences that leave competitors in the dust." },
        { icon: <Users className="w-5 h-5 text-white" />, title: "High-Level Relationships", desc: "Building the key partnerships and closing the deals that require a human soul." },
        { icon: <TrendingUp className="w-5 h-5 text-white" />, title: "Company Growth", desc: "Working ON the business, not IN it. Scaling without adding operational drag." },
    ]

    return (
        <section className="bg-white py-24 md:py-48 px-6 md:px-[72px] overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#D90019] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                        <p className="flex items-center justify-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-bold mb-6">
                            <span className="w-8 h-px bg-[#D90019]" />
                            The Core Philosophy
                            <span className="w-8 h-px bg-[#D90019]" />
                        </p>
                        <h2 className="font-playfair text-[clamp(40px,5vw,84px)] leading-[0.95] text-[#060406] mb-8 tracking-tighter">
                            Operate in Your<br />
                            <em className="text-[#D90019]">Zone of Genius.</em>
                        </h2>
                        <p className="text-[18px] md:text-[21px] text-[#060406]/60 leading-relaxed font-light">
                            80% of business owners spend their days fighting operational friction. 
                            We take the "Weight" so you can reclaim your "Wisdom."
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
                    {/* The Weight Column */}
                    <ScrollReveal delay={0.1}>
                        <div className="h-full bg-[#F8F7F9] border border-black/[0.04] p-8 md:p-12 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                                <Cpu size={120} />
                            </div>
                            
                            <div className="relative mb-12">
                                <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-bold block mb-4">The Weight</span>
                                <h3 className="font-playfair text-3xl md:text-5xl text-[#060406] mb-4">Tech Handles<br /><em className="text-[#D90019]">The Work.</em></h3>
                                <p className="text-[#060406]/50 text-sm leading-relaxed max-w-md">
                                    The recurring, the binary, and the time-consuming. Infrastructure that never sleeps and never forgets.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {techTasks.map((task, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 w-10 h-10 bg-white border border-[#D90019]/10 flex items-center justify-center shrink-0 shadow-sm">
                                            {task.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-[#060406] mb-1">{task.title}</h4>
                                            <p className="text-[13px] text-[#060406]/50 leading-relaxed">{task.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* The Wisdom Column */}
                    <ScrollReveal delay={0.2}>
                        <div className="h-full bg-[#060406] text-white p-8 md:p-12 relative overflow-hidden group border border-white/5">
                            <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">
                                <Brain size={120} />
                            </div>

                            <div className="relative mb-12">
                                <span className="text-[10px] tracking-[3px] uppercase text-white/40 font-bold block mb-4">Your Wisdom</span>
                                <h3 className="font-playfair text-3xl md:text-5xl text-white mb-4">Humans Handle<br /><em className="text-[#D90019]">The Genius.</em></h3>
                                <p className="text-white/40 text-sm leading-relaxed max-w-md">
                                    The strategic, the creative, and the empathetic. You doing only what only YOU can do.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {humanTasks.map((task, i) => (
                                    <div key={i} className="flex gap-4 items-start">
                                        <div className="mt-1 w-10 h-10 bg-[#D90019]/20 border border-[#D90019]/40 flex items-center justify-center shrink-0">
                                            {task.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-[15px] font-bold text-white mb-1">{task.title}</h4>
                                            <p className="text-[13px] text-white/40 leading-relaxed">{task.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.3}>
                    <div className="mt-16 md:mt-24 bg-[#D90019] p-8 md:p-16 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
                        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
                            <div className="max-w-2xl">
                                <h3 className="font-playfair text-2xl md:text-4xl text-white leading-tight mb-4">
                                    The goal isn't "efficiency."<br />
                                    The goal is <em className="italic">Freedom of Focus.</em>
                                </h3>
                                <p className="text-white/70 text-base leading-relaxed">
                                    When you stop worrying about who is answering the phone or if that client got their invoice, 
                                    you start thinking about how to double your company's value. That is the shift.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
                                <div className="text-center md:text-right">
                                    <p className="text-white/50 text-[10px] tracking-[2px] uppercase font-bold mb-2">Impact Measured Weekly</p>
                                    <p className="text-white font-playfair italic text-4xl md:text-6xl">25—40<span className="text-[20px] not-italic ml-2 opacity-60">Hours saved</span></p>
                                </div>
                                <a href="/audit" className="w-full md:w-auto bg-white text-[#D90019] px-10 py-5 text-[14px] font-bold tracking-widest uppercase hover:bg-[#F2EEF5] transition-all text-center inline-block shadow-[0_20px_80px_rgba(0,0,0,0.1)]">
                                    Reclaim Your Genius &#8594;
                                </a>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
