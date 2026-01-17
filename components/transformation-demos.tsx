"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, User, Mail, Database, Check, AlertCircle } from "lucide-react"

const transformations = [
    {
        id: "sales",
        title: "Sales Transformation",
        description: "From manual chaos to automated precision.",
        before: {
            label: "Manual Follow-up",
            visual: (
                <div className="flex flex-col gap-2 p-4 opacity-70">
                    <div className="flex items-center gap-2 text-white/60 text-sm"><AlertCircle className="w-4 h-4" /> Lead received via email</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm ml-4">... 4 hours delay ...</div>
                    <div className="flex items-center gap-2 text-white/60 text-sm"><User className="w-4 h-4" /> Rep calls (No answer)</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm ml-4">... Forgot to email ...</div>
                    <div className="flex items-center gap-2 text-white/60 text-sm"><AlertCircle className="w-4 h-4" /> Lead lost to competitor</div>
                </div>
            )
        },
        after: {
            label: "Automated Machine",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm"><Database className="w-4 h-4" /> Lead hits CRM</div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 text-white/70 text-sm ml-4">↳ Instant SMS sent</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2 text-white/70 text-sm ml-4">↳ Email sequence started</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex items-center gap-2 text-white/80 text-sm"><User className="w-4 h-4" /> Appointment Booked Automatically</motion.div>
                </div>
            )
        }
    },
    {
        id: "ops",
        title: "Operations Clarity",
        description: "Stop putting out fires, start managing dashboards.",
        before: {
            label: "Operational Chaos",
            visual: (
                <div className="grid grid-cols-2 gap-2 p-2 opacity-60">
                    <div className="bg-white/5 h-16 rounded animate-pulse"></div>
                    <div className="bg-white/5 h-16 rounded animate-pulse delay-75"></div>
                    <div className="bg-white/5 h-16 rounded animate-pulse delay-150"></div>
                    <div className="bg-white/5 h-16 rounded animate-pulse delay-200"></div>
                    <div className="col-span-2 text-center text-xs text-white/40 mt-2">Data silos & manual spreadsheets</div>
                </div>
            )
        },
        after: {
            label: "Centralized Dashboard",
            visual: (
                <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="bg-white/5 p-2 rounded border border-white/20">
                        <div className="text-[10px] text-white/50">Revenue</div>
                        <div className="text-sm font-light text-white/80">↑ 24%</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded border border-white/20">
                        <div className="text-[10px] text-white/50">Efficiency</div>
                        <div className="text-sm font-light text-white/80">98%</div>
                    </div>
                    <div className="col-span-2 bg-white/5 p-2 rounded border border-white/10 h-12 flex items-center justify-center">
                        <div className="text-xs text-white/60">Live Project Tracking</div>
                    </div>
                </div>
            )
        }
    },
    {
        id: "support",
        title: "Customer Support",
        description: "Turn angry tickets into instant resolutions.",
        before: {
            label: "Ticket Black Hole",
            visual: (
                <div className="flex flex-col gap-2 p-4 opacity-70">
                    <div className="flex items-center gap-2 text-white/60 text-sm"><Mail className="w-4 h-4" /> Customer emails support</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm ml-4">... 24 hours later ...</div>
                    <div className="flex items-center gap-2 text-white/60 text-sm"><AlertCircle className="w-4 h-4" /> "We received your ticket..."</div>
                    <div className="flex items-center gap-2 text-white/40 text-sm ml-4">... Customer churns ...</div>
                </div>
            )
        },
        after: {
            label: "Instant Resolution",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm"><User className="w-4 h-4" /> Customer asks question</div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 text-white/70 text-sm ml-4">↳ AI analyzes & searches KB</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2 text-white/80 text-sm"><Check className="w-4 h-4" /> Answered in 3 seconds</motion.div>
                </div>
            )
        }
    },
    {
        id: "recruiting",
        title: "Recruiting & HR",
        description: "Stop drowning in PDFs, start interviewing top talent.",
        before: {
            label: "Resume Overload",
            visual: (
                <div className="grid grid-cols-2 gap-2 p-2 opacity-60">
                    <div className="bg-white/5 p-2 rounded border border-white/10 col-span-2">
                        <div className="text-[10px] text-white/40">Inbox (142 unread)</div>
                        <div className="flex -space-x-2 mt-1">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-6 h-8 bg-white/5 border border-white/10 rounded"></div>)}
                        </div>
                    </div>
                    <div className="col-span-2 text-center text-xs text-white/40 mt-1">Good candidates buried</div>
                </div>
            )
        },
        after: {
            label: "AI Headhunter",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/20">
                        <span className="text-xs text-white/70">Candidate A</span>
                        <span className="text-xs font-light text-white/80">98% Match</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 p-2 rounded border border-white/20">
                        <span className="text-xs text-white/70">Candidate B</span>
                        <span className="text-xs font-light text-white/80">95% Match</span>
                    </div>
                    <div className="text-[10px] text-white/60 text-center mt-1">↳ Interviews Auto-Booked</div>
                </div>
            )
        }
    },
    {
        id: "knowledge",
        title: "Knowledge Management",
        description: "No more 'where is that file?' slack messages.",
        before: {
            label: "Information Silos",
            visual: (
                <div className="flex flex-col gap-2 p-4 opacity-70">
                    <div className="bg-white/5 p-2 rounded border border-white/10">
                        <div className="text-[10px] text-white/50">Slack: "Where's the new SOP?"</div>
                    </div>
                    <div className="flex items-center gap-2 text-white/40 text-xs ml-4">... waiting for reply ...</div>
                    <div className="bg-white/5 p-2 rounded border border-white/10">
                        <div className="text-[10px] text-white/50">Uses outdated PDF ❌</div>
                    </div>
                </div>
            )
        },
        after: {
            label: "Enterprise Brain",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="text-xs text-white/70">Q: "How do I process a return?"</div>
                    <div className="bg-white/5 p-3 rounded border border-white/20 mt-1">
                        <div className="text-[10px] text-white/60 mb-1">AI Answer:</div>
                        <div className="text-[10px] text-white/50">"According to <span className="text-white/70 underline">Refund Policy v2</span>, steps are..."</div>
                    </div>
                    <div className="text-[10px] text-white/70 flex items-center gap-1"><Check className="w-3 h-3" /> Source Verified</div>
                </div>
            )
        }
    },
    {
        id: "business_command",
        title: "Business Command",
        description: "Strategize instantly. Execute immediately.",
        before: {
            label: "Creative Block",
            visual: (
                <div className="flex flex-col items-center justify-center h-32 opacity-70 border-2 border-dashed border-white/10 rounded-lg">
                    <div className="text-4xl mb-2">🤔</div>
                    <div className="text-xs text-white/40">"What should we post?"</div>
                    <div className="text-xs text-white/40 mt-1">3 hours wasted</div>
                </div>
            )
        },
        after: {
            label: "Command Center",
            visual: (
                <div className="flex flex-col gap-2 p-2">
                    <div className="bg-white/5 p-2 rounded-lg self-end max-w-[90%] border border-white/10">
                        <div className="text-[10px] text-white/40 mb-1">You</div>
                        <div className="text-xs text-white/70">"Make me a content plan for this week"</div>
                    </div>
                    <div className="bg-white/5 p-2 rounded-lg self-start max-w-[90%] border border-white/10">
                        <div className="text-[10px] text-white/40 mb-1">Eliana</div>
                        <div className="text-xs text-white/70 mb-1">"Here is your 7-day strategy:"</div>
                        <div className="grid grid-cols-7 gap-1 mt-1">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="h-4 bg-white/10 rounded border border-white/20"></div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
]

export function TransformationDemos() {
    return (
        <section className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8">
            {/* Grid Background - matching testimonials */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                      `,
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
                        <div className="w-8 h-px bg-white/30"></div>
                        Before & After
                        <div className="w-8 h-px bg-white/30"></div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
                        See The <span className="font-medium italic">Transformation</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                        Visualizing the difference between manual chaos and automated scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                    {transformations.map((item) => (
                        <div key={item.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-xl sm:text-2xl font-light text-white mb-2">{item.title}</h3>
                            <p className="text-white/60 mb-6 sm:mb-8">{item.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                    <div className="text-xs font-medium text-white/50 mb-4 uppercase tracking-wider">{item.before.label}</div>
                                    {item.before.visual}
                                </div>
                                <div className="bg-white/5 rounded-xl p-4 border border-white/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-1 bg-white/20 text-white text-[10px] font-medium rounded-bl">AFTER</div>
                                    <div className="text-xs font-medium text-white/50 mb-4 uppercase tracking-wider">{item.after.label}</div>
                                    {item.after.visual}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
