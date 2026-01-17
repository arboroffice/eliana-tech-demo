"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
                    <div className="flex items-center gap-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4" /> Lead received via email</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">... 4 hours delay ...</div>
                    <div className="flex items-center gap-2 text-red-400 text-sm"><User className="w-4 h-4" /> Rep calls (No answer)</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">... Forgot to email ...</div>
                    <div className="flex items-center gap-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4" /> Lead lost to competitor</div>
                </div>
            )
        },
        after: {
            label: "Automated Machine",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center gap-2 text-green-400 text-sm"><Database className="w-4 h-4" /> Lead hits CRM</div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 text-blue-400 text-sm ml-4">↳ Instant SMS sent</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2 text-blue-400 text-sm ml-4">↳ Email sequence started</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex items-center gap-2 text-green-400 text-sm"><User className="w-4 h-4" /> Appointment Booked Automatically</motion.div>
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
                <div className="grid grid-cols-2 gap-2 p-2 opacity-60 grayscale">
                    <div className="bg-slate-800 h-16 rounded animate-pulse"></div>
                    <div className="bg-slate-800 h-16 rounded animate-pulse delay-75"></div>
                    <div className="bg-slate-800 h-16 rounded animate-pulse delay-150"></div>
                    <div className="bg-slate-800 h-16 rounded animate-pulse delay-200"></div>
                    <div className="col-span-2 text-center text-xs text-slate-500 mt-2">Data silos & manual spreadsheets</div>
                </div>
            )
        },
        after: {
            label: "Centralized Dashboard",
            visual: (
                <div className="grid grid-cols-2 gap-2 p-2">
                    <div className="bg-slate-800 p-2 rounded border border-green-500/30">
                        <div className="text-[10px] text-slate-400">Revenue</div>
                        <div className="text-sm font-bold text-green-400">↑ 24%</div>
                    </div>
                    <div className="bg-slate-800 p-2 rounded border border-blue-500/30">
                        <div className="text-[10px] text-slate-400">Efficiency</div>
                        <div className="text-sm font-bold text-blue-400">98%</div>
                    </div>
                    <div className="col-span-2 bg-slate-800 p-2 rounded border border-white/10 h-12 flex items-center justify-center">
                        <div className="text-xs text-slate-300">Live Project Tracking</div>
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
                    <div className="flex items-center gap-2 text-red-400 text-sm"><Mail className="w-4 h-4" /> Customer emails support</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">... 24 hours later ...</div>
                    <div className="flex items-center gap-2 text-red-400 text-sm"><AlertCircle className="w-4 h-4" /> "We received your ticket..."</div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm ml-4">... Customer churns ...</div>
                </div>
            )
        },
        after: {
            label: "Instant Resolution",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center gap-2 text-green-400 text-sm"><User className="w-4 h-4" /> Customer asks question</div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 text-blue-400 text-sm ml-4">↳ AI analyzes & searches KB</motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center gap-2 text-green-400 text-sm"><Check className="w-4 h-4" /> Answered in 3 seconds</motion.div>
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
                    <div className="bg-slate-800 p-2 rounded border border-red-500/20 col-span-2">
                        <div className="text-[10px] text-red-400">Inbox (142 unread)</div>
                        <div className="flex -space-x-2 mt-1">
                            {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-6 h-8 bg-slate-700 border border-slate-600 rounded"></div>)}
                        </div>
                    </div>
                    <div className="col-span-2 text-center text-xs text-red-400 mt-1">Good candidates buried</div>
                </div>
            )
        },
        after: {
            label: "AI Headhunter",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="flex items-center justify-between bg-slate-800 p-2 rounded border border-green-500/30">
                        <span className="text-xs text-slate-300">Candidate A</span>
                        <span className="text-xs font-bold text-green-400">98% Match</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-800 p-2 rounded border border-green-500/30">
                        <span className="text-xs text-slate-300">Candidate B</span>
                        <span className="text-xs font-bold text-green-400">95% Match</span>
                    </div>
                    <div className="text-[10px] text-blue-400 text-center mt-1">↳ Interviews Auto-Booked</div>
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
                    <div className="bg-slate-800 p-2 rounded border border-slate-700">
                        <div className="text-[10px] text-slate-400">Slack: "Where's the new SOP?"</div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-xs ml-4">... waiting for reply ...</div>
                    <div className="bg-slate-800 p-2 rounded border border-red-900/30">
                        <div className="text-[10px] text-red-400">Uses outdated PDF ❌</div>
                    </div>
                </div>
            )
        },
        after: {
            label: "Enterprise Brain",
            visual: (
                <div className="flex flex-col gap-2 p-4">
                    <div className="text-xs text-slate-300">Q: "How do I process a return?"</div>
                    <div className="bg-slate-800 p-3 rounded border border-blue-500/30 mt-1">
                        <div className="text-[10px] text-blue-300 mb-1">AI Answer:</div>
                        <div className="text-[10px] text-slate-400">"According to <span className="text-blue-400 underline">Refund Policy v2</span>, steps are..."</div>
                    </div>
                    <div className="text-[10px] text-green-400 flex items-center gap-1"><Check className="w-3 h-3" /> Source Verified</div>
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
                <div className="flex flex-col items-center justify-center h-32 opacity-70 border-2 border-dashed border-slate-700 rounded-lg">
                    <div className="text-4xl mb-2">🤔</div>
                    <div className="text-xs text-slate-500">"What should we post?"</div>
                    <div className="text-xs text-red-400 mt-1">3 hours wasted</div>
                </div>
            )
        },
        after: {
            label: "Command Center",
            visual: (
                <div className="flex flex-col gap-2 p-2">
                    <div className="bg-blue-900/20 p-2 rounded-lg self-end max-w-[90%] border border-blue-500/20">
                        <div className="text-[10px] text-slate-400 mb-1">You</div>
                        <div className="text-xs text-blue-200">"Make me a content plan for this week"</div>
                    </div>
                    <div className="bg-green-900/20 p-2 rounded-lg self-start max-w-[90%] border border-green-500/20">
                        <div className="text-[10px] text-slate-400 mb-1">Eliana</div>
                        <div className="text-xs text-green-200 mb-1">"Here is your 7-day strategy:"</div>
                        <div className="grid grid-cols-7 gap-1 mt-1">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="h-4 bg-green-500/20 rounded border border-green-500/30"></div>
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
        <section className="py-20 px-4 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">See The Transformation</h2>
                    <p className="text-slate-400">Visualizing the difference between manual chaos and automated scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {transformations.map((item) => (
                        <div key={item.id} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                            <p className="text-slate-400 mb-8">{item.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-red-950/20 rounded-xl p-4 border border-red-900/30">
                                    <div className="text-xs font-bold text-red-400 mb-4 uppercase tracking-wider">{item.before.label}</div>
                                    {item.before.visual}
                                </div>
                                <div className="bg-green-950/20 rounded-xl p-4 border border-green-900/30 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-1 bg-green-500 text-black text-[10px] font-bold rounded-bl">AFTER</div>
                                    <div className="text-xs font-bold text-green-400 mb-4 uppercase tracking-wider">{item.after.label}</div>
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
