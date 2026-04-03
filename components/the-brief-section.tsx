"use client"

import { motion } from "framer-motion"
import { Search, ShieldCheck, Zap, Mail, ArrowRight, Bell, Target, Filter } from "lucide-react"

export function TheBriefSection() {
    const agents = [
        {
            num: "Agent 01",
            role: "The Researcher",
            desc: "Hunts the web for the most important AI stories from the last 24 hours. Real-time intelligence, not just headlines.",
            icon: <Search className="w-5 h-5" />,
            color: "#D90019"
        },
        {
            num: "Agent 02",
            role: "The Analyst",
            desc: "Scores stories for relevance based on your specific job, industry, tools, and goals. AI news that actually fits your life.",
            icon: <Target className="w-5 h-5" />,
            color: "#D90019"
        },
        {
            num: "Agent 03",
            role: "The Strategist",
            desc: "Provides step-by-step workflows with ready-to-use 'copy-paste' prompts for every major update. Actionable, not just informational.",
            icon: <Zap className="w-5 h-5" />,
            color: "#D90019"
        }
    ]

    const callouts = [
        {
            title: "Live Web Search",
            desc: "Every morning, our agents scan the edge of the internet to find the signal in the noise.",
            icon: <Search className="w-4 h-4 text-[#D90019]" />
        },
        {
            title: "Profile-Matched",
            desc: "Content is ranked and filtered for role-specific relevance. If it doesn't help you win, you don't see it.",
            icon: <Filter className="w-4 h-4 text-[#D90019]" />
        },
        {
            title: "Today's Move",
            desc: "Every brief includes a concrete action with estimated time and expected outcome. Do the work.",
            icon: <Zap className="w-4 h-4 text-[#D90019]" />
        },
        {
            title: "Signal vs. Noise",
            desc: "A dedicated section to help you prioritize what matters most and ignore the AI hype cycle.",
            icon: <ShieldCheck className="w-4 h-4 text-[#D90019]" />
        }
    ]

    return (
        <section className="bg-[#060406] py-24 md:py-40 px-6 md:px-[72px] relative overflow-hidden border-t border-white/[0.04]" id="brief">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(217,0,25,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(217,0,25,0.015) 1px,transparent 1px)",
                backgroundSize: "60px 60px"
            }} />
            <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.05)_0%,transparent_70%)] -top-[200px] -left-[200px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-[120px]">
                    {/* Left: Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-bold mb-6">
                                <span className="w-8 h-px bg-[#D90019]" />
                                The Daily OS
                            </span>
                            <h2 className="font-playfair italic text-[clamp(48px,6vw,84px)] leading-[0.9] text-[#F2EEF5] mb-8 tracking-tight">
                                THE <span className="text-[#D90019]">BRIEF</span>.
                            </h2>
                            <p className="text-[18px] md:text-[21px] text-white/40 leading-relaxed max-w-[540px] mb-12">
                                <strong className="text-white font-medium">AI news that knows you.</strong> A daily intelligence briefing produced by three autonomous agents, tailored to your job, your industry, and your goals.
                            </p>

                            <div className="flex flex-col gap-8 mb-16">
                                {agents.map((agent, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                        className="group"
                                    >
                                        <div className="flex items-start gap-6 border-l border-white/[0.08] pl-8 group-hover:border-[#D90019]/40 transition-colors">
                                            <div className="pt-1">
                                                <div className="w-10 h-10 border border-white/[0.1] rounded-full flex items-center justify-center text-white/20 group-hover:text-[#D90019] group-hover:border-[#D90019]/30 transition-all">
                                                    {agent.icon}
                                                </div>
                                            </div>
                                            <div>
                                                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-bold mb-1">{agent.num} // {agent.role}</p>
                                                <p className="text-[14px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{agent.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <a 
                                href="http://c12hsh4n5bfc02e5c9p4wyax.187.124.238.237.sslip.io" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#D90019] text-white px-9 py-5 text-[14px] font-bold tracking-widest uppercase hover:brightness-110 hover:-translate-y-1 transition-all shadow-[0_20px_80px_rgba(217,0,25,0.25)]"
                            >
                                Secure Your Briefing <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Mockup/Visual */}
                    <div className="flex-1 lg:max-w-[480px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 relative z-20 shadow-2xl">
                                <div className="flex items-center justify-between mb-8 border-b border-white/[0.04] pb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#D90019] animate-pulse" />
                                        <span className="text-[11px] font-mono tracking-widest text-white/20 uppercase">Intelligence Brief // 04.01.26</span>
                                    </div>
                                    <Bell className="w-4 h-4 text-white/10" />
                                </div>
                                
                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-4">
                                        {callouts.map((c, i) => (
                                            <div key={i} className="bg-white/[0.02] border border-white/[0.04] p-5 hover:bg-white/[0.04] transition-colors group">
                                                <div className="mb-3">{c.icon}</div>
                                                <h4 className="text-[12px] font-bold text-white mb-1.5">{c.title}</h4>
                                                <p className="text-[10px] text-white/30 leading-relaxed font-inter line-clamp-2 group-hover:text-white/50">{c.desc}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/[0.04]">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] tracking-[2px] uppercase text-[#D90019] font-bold">Today&apos;s Move</span>
                                            <span className="text-[10px] text-white/20 font-mono">EST. 12 MIN</span>
                                        </div>
                                        <div className="bg-white/[0.02] border border-white/[0.06] p-5 rounded-lg border-l-2 border-l-[#D90019]">
                                            <p className="text-[13px] text-white/80 leading-relaxed italic font-playfair">&quot;Implement the GPT-4o voice-to-lead pipeline for your customer intake. Use the copy-paste prompt below to bypass manual entry.&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Accents behind mockup */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-[#D90019]/20 to-transparent blur-3xl -z-10 opacity-30" />
                            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#D90019]/5 rounded-full blur-3xl -z-10" />
                        </motion.div>

                        <div className="mt-12 flex items-center justify-center gap-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-60 transition-all duration-700">
                           <Mail className="w-6 h-6 text-white" />
                           <span className="h-px w-12 bg-white/20" />
                           <p className="text-[12px] font-mono tracking-tighter text-white">DAILY 7:00 AM DELIVERY</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
