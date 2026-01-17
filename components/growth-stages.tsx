"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ArrowRight, Zap, Target, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GROWTH_STAGES } from "@/lib/industry-content"
import { cn } from "@/lib/utils"

export function GrowthStages() {
    const [activeStage, setActiveStage] = useState(0)

    return (
        <section className="py-24 px-4 bg-black/50 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Every Solution • Every Industry • <span className="text-blue-400">Every Stage</span>
                    </h2>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                        Elianatech serves ALL industries. The difference is your growth stage, not your niche.
                        Find your stage below to see your custom automation roadmap.
                    </p>
                </div>

                {/* Stage Tabs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {GROWTH_STAGES.map((stage, index) => {
                        const isActive = activeStage === index
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveStage(index)}
                                className={cn(
                                    "relative group p-6 rounded-2xl border text-left transition-all duration-300",
                                    isActive
                                        ? "bg-white/10 border-blue-500/50 shadow-2xl shadow-blue-500/10"
                                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                                )}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className={cn("text-xl font-bold", isActive ? "text-white" : "text-slate-300")}>
                                        {stage.title.split(":")[1]}
                                    </h3>
                                    {isActive && <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />}
                                </div>

                                <div className="space-y-2 text-sm text-slate-400 mb-4">
                                    <div className="flex justify-between">
                                        <span>Revenue:</span>
                                        <span className="text-slate-200">{stage.revenue}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Team:</span>
                                        <span className="text-slate-200">{stage.team}</span>
                                    </div>
                                </div>

                                <div className={cn("h-1 w-full rounded-full overflow-hidden bg-slate-800", isActive && "bg-slate-700")}>
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: isActive ? "100%" : "0%" }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>
                            </button>
                        )
                    })}
                </div>

                {/* Content Display */}
                <div className="min-h-[600px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStage}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{GROWTH_STAGES[activeStage].title}</h3>
                                        <p className="text-lg text-slate-300 leading-relaxed">{GROWTH_STAGES[activeStage].description}</p>
                                    </div>

                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                                        <h4 className="flex items-center text-lg font-semibold text-blue-400 mb-4">
                                            <Zap className="w-5 h-5 mr-2" />
                                            Key AI Unlock
                                        </h4>
                                        <div className="space-y-3">
                                            {GROWTH_STAGES[activeStage].ai_automations.items.slice(0, 4).map((item, i) => (
                                                <div key={i} className="flex items-start text-slate-300 text-sm">
                                                    <Check className="w-4 h-4 mr-3 text-green-500 shrink-0 mt-0.5" />
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <Button asChild size="lg" className="bg-white text-black hover:bg-slate-200 rounded-full px-8 h-12 text-base font-semibold">
                                            <a href="/audit">
                                                Get {GROWTH_STAGES[activeStage].title.split(":")[1]} Roadmap
                                                <ArrowRight className="w-4 h-4 ml-2" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Visual / Demo Area */}
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <div className="relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden aspect-video shadow-2xl">
                                        {/* Mock Dashboard UI */}
                                        <div className="absolute inset-0 flex flex-col">
                                            {/* Header */}
                                            <div className="h-8 bg-slate-800 border-b border-white/5 flex items-center px-4 space-x-2">
                                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                            </div>
                                            {/* Body */}
                                            <div className="flex-1 p-6 relative">
                                                {/* Simulated Graph */}
                                                <div className="flex items-end space-x-2 h-32 mb-6">
                                                    {[40, 65, 50, 80, 75, 90, 85].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ height: 0 }}
                                                            animate={{ height: `${h}%` }}
                                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                                            className="flex-1 bg-blue-500/20 rounded-t-sm relative group/bar"
                                                        >
                                                            <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-t-sm transition-all duration-500" style={{ height: activeStage > i % 3 ? '100%' : '30%' }}></div>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Simulated Metrics */}
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="bg-white/5 rounded-lg p-3">
                                                        <div className="text-xs text-slate-400 mb-1">Efficiency Gain</div>
                                                        <div className="text-xl font-bold text-green-400">+127%</div>
                                                    </div>
                                                    <div className="bg-white/5 rounded-lg p-3">
                                                        <div className="text-xs text-slate-400 mb-1">Hours Saved</div>
                                                        <div className="text-xl font-bold text-blue-400">42 hrs/wk</div>
                                                    </div>
                                                </div>

                                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium border border-white/20">
                                                        View Full Demo
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center text-xs text-slate-500 mt-3 font-mono">
                                        *Interactive {GROWTH_STAGES[activeStage].title.split(":")[1]} System Preview
                                    </p>
                                </div>
                            </div>

                            {/* Detailed Categories */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {GROWTH_STAGES[activeStage].automations.map((cat, i) => (
                                    <div key={i} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
                                        <div className="flex items-center mb-4">
                                            <span className="text-2xl mr-3">{cat.icon}</span>
                                            <h4 className="text-lg font-bold text-white">{cat.category}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {cat.items.slice(0, 5).map((item, j) => (
                                                <li key={j} className="text-sm text-slate-400 flex items-start">
                                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                            {cat.items.length > 5 && (
                                                <li className="text-xs text-blue-400 font-medium pl-3.5 pt-1">
                                                    + {cat.items.length - 5} more...
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    )
}
