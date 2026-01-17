"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, MessageSquare, CheckCircle, Clock, Calendar, Globe, Database, User, DollarSign } from "lucide-react"

const EVENTS = [
    { icon: MessageSquare, text: "Engaging visitor from London, UK", type: "sales" },
    { icon: CheckCircle, text: "Qualified lead: Tech Solutions Inc.", type: "sales" },
    { icon: Calendar, text: "Meeting booked: Tomorrow 2 PM", type: "sales" },
    { icon: Database, text: "CRM updated: Deal stage -> Negotiation", type: "ops" },
    { icon: Zap, text: "Resolved Ticket #882 in 4s", type: "support" },
    { icon: User, text: "Screening candidate: Senior Dev", type: "hr" },
    { icon: DollarSign, text: "Invoice #4022 sent (Automated)", type: "finance" },
    { icon: Globe, text: "Analyzing competitor pricing strategy", type: "strategy" },
]

export function LiveDashboard() {
    const [activities, setActivities] = useState<any[]>([])
    const [stats, setStats] = useState({
        activeUsers: 142,
        actionsAutomated: 8432,
        timeSaved: 420 // hours
    })

    // Simulate incoming activities
    useEffect(() => {
        const interval = setInterval(() => {
            const randomEvent = EVENTS[Math.floor(Math.random() * EVENTS.length)]
            const newActivity = {
                ...randomEvent,
                id: Math.random(),
                timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
            }

            setActivities(prev => [newActivity, ...prev].slice(0, 7)) // Keep last 7

            // Update fake stats randomly
            if (Math.random() > 0.5) {
                setStats(prev => ({
                    activeUsers: prev.activeUsers + (Math.random() > 0.7 ? 1 : -1), // Fluctuate
                    actionsAutomated: prev.actionsAutomated + 1,
                    timeSaved: prev.timeSaved + (Math.random() > 0.8 ? 0.1 : 0)
                }))
            }
        }, 1800) // New event every 1.8s

        return () => clearInterval(interval)
    }, [])

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
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/3">
                        <div className="inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6">
                            <div className="w-8 h-px bg-white/30"></div>
                            Real-Time AI
                            <div className="w-8 h-px bg-white/30"></div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6 tracking-tight leading-tight">
                            The Engine That
                            <br />
                            <span className="font-medium italic">Never Stops</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-white/70 mb-6 sm:mb-8 leading-relaxed">
                            While you sleep, your AI workforce is engaging leads, solving tickets, and optimizing operations. Watch it work in real-time.
                        </p>

                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-2xl sm:text-3xl font-light text-white mb-1">{stats.activeUsers.toLocaleString()}</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Active Conversations</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-2xl sm:text-3xl font-light text-white mb-1">{stats.timeSaved.toFixed(1)}h</div>
                                <div className="text-xs text-white/50 uppercase tracking-wider">Time Saved Today</div>
                            </div>
                        </div>
                    </div>

                    {/* The Dashboard Interface */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-6 relative overflow-hidden">
                            {/* Fake Window Controls */}
                            <div className="flex items-center gap-2 mb-4 sm:mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                <div className="w-3 h-3 rounded-full bg-white/10 border border-white/20" />
                                <div className="ml-auto text-xs text-white/40 font-mono">LIVE_FEED :: eliana-os-v2.4</div>
                            </div>

                            {/* Activity List */}
                            <div className="space-y-3 min-h-[300px]">
                                <AnimatePresence initial={false}>
                                    {activities.map((activity) => (
                                        <motion.div
                                            key={activity.id}
                                            initial={{ opacity: 0, x: 20, height: 0 }}
                                            animate={{ opacity: 1, x: 0, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-white/5">
                                                <activity.icon className="w-4 h-4 text-white/60" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm text-white/80 font-light truncate">{activity.text}</div>
                                            </div>
                                            <div className="text-xs text-white/40 font-mono whitespace-nowrap">{activity.timestamp}</div>
                                        </motion.div>
                                    ))}
                                    {activities.length === 0 && (
                                        <div className="flex flex-col items-center justify-center h-48 text-white/40">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white/40 mb-4"></div>
                                            <p>Connecting to neural core...</p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
