"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, MessageSquare, CheckCircle, Clock, Calendar, Globe, Database, User, DollarSign } from "lucide-react"

const EVENTS = [
    { icon: MessageSquare, text: "Engaging visitor from London, UK", type: "sales", color: "text-blue-400" },
    { icon: CheckCircle, text: "Qualified lead: Tech Solutions Inc.", type: "sales", color: "text-green-400" },
    { icon: Calendar, text: "Meeting booked: Tomorrow 2 PM", type: "sales", color: "text-purple-400" },
    { icon: Database, text: "CRM updated: Deal stage -> Negotiation", type: "ops", color: "text-orange-400" },
    { icon: Zap, text: "Resolved Ticket #882 in 4s", type: "support", color: "text-yellow-400" },
    { icon: User, text: "Screening candidate: Senior Dev", type: "hr", color: "text-pink-400" },
    { icon: DollarSign, text: "Invoice #4022 sent (Automated)", type: "finance", color: "text-emerald-400" },
    { icon: Globe, text: "Analyzing competitor pricing strategy", type: "strategy", color: "text-cyan-400" },
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
        <section className="py-20 relative bg-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
            <div className="absolute inset-0 z-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            The Engine That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Never Stops
                            </span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            While you sleep, your AI workforce is engaging leads, solving tickets, and optimizing operations.
                            Watch it work in real-time.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-2xl font-bold text-white mb-1">{stats.activeUsers.toLocaleString()}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Active Conversations</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                                <div className="text-2xl font-bold text-emerald-400 mb-1">{stats.timeSaved.toFixed(1)}h</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">Time Saved Today</div>
                            </div>
                        </div>
                    </div>

                    {/* The Dashboard Interface */}
                    <div className="w-full lg:w-2/3">
                        <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden">
                            {/* Fake Window Controls */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                <div className="ml-auto text-xs text-slate-500 font-mono">LIVE_FEED :: eliana-os-v2.4</div>
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
                                            className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                        >
                                            <div className={`p-2 rounded-lg bg-white/5 ${activity.color}`}>
                                                <activity.icon className="w-4 h-4" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm text-slate-200 font-medium truncate">{activity.text}</div>
                                            </div>
                                            <div className="text-xs text-slate-600 font-mono whitespace-nowrap">{activity.timestamp}</div>
                                        </motion.div>
                                    ))}
                                    {activities.length === 0 && (
                                        <div className="flex flex-col items-center justify-center h-48 text-slate-600">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
                                            <p>Connecting to neural core...</p>
                                        </div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Decorative "Scanning" Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-scan" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
