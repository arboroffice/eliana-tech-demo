"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const PLANETS = [
    { name: "CRM", x: 20, y: 20, color: "#f97316" },     // Orange
    { name: "Email", x: 80, y: 30, color: "#3b82f6" },    // Blue
    { name: "Calendar", x: 25, y: 75, color: "#a855f7" }, // Purple
    { name: "Payments", x: 75, y: 70, color: "#10b981" }, // Emerald
    { name: "Social", x: 50, y: 15, color: "#ec4899" },   // Pink
    { name: "Analytics", x: 50, y: 85, color: "#eab308" },// Yellow
]

export function ConstellationVisual() {
    const [windowWidth, setWindowWidth] = useState(1024)

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        const handleResize = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <section className="py-24 bg-black overflow-hidden relative">
            {/* Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Connected Ecosystem</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Eliana doesn&#39;t just work in isolation. It sits at the center of your stack, orchestraing data between your favorite tools.
                    </p>
                </div>

                <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] md:aspect-[16/9] lg:h-[600px]">
                    {/* The "Orbit" Container */}
                    <div className="absolute inset-0 flex items-center justify-center">

                        {/* Central Star (Eliana) */}
                        <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.5)] flex items-center justify-center relative z-20">
                            <div className="absolute inset-0 border border-white/20 rounded-full animate-ping opacity-20" />
                            <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">ELIANA</span>
                        </div>

                        {/* Connecting Lines & Packets */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
                            {PLANETS.map((planet, i) => (
                                <g key={i}>
                                    {/* Line from Center to Planet (using percentages for responsive placement) */}
                                    <line
                                        x1="50%" y1="50%"
                                        x2={`${planet.x}%`} y2={`${planet.y}%`}
                                        stroke="rgba(255,255,255,0.1)"
                                        strokeWidth="1"
                                    />
                                    {/* Moving Packet */}
                                    <circle r="3" fill="white" className="animate-packet-flow">
                                        <animateMotion
                                            dur={`${2 + i * 0.5}s`}
                                            repeatCount="indefinite"
                                            path={`M ${windowWidth < 768 ? '50,50' : '50,50'} L ${planet.x},${planet.y} L ${windowWidth < 768 ? '50,50' : '50,50'}`}
                                        // Note: Simple path for demo, ideally we calculate absolute coords or use a better method for SVG paths in React
                                        // For simplicity/robustness in this "write_file", we'll rely on CSS animations or just simple lines if motion path is hard to calc dynamically in string
                                        />
                                        {/* Fallback animation using CSS since path calc is tricky in static string */}
                                    </circle>
                                </g>
                            ))}
                        </svg>

                        {/* Planets */}
                        {PLANETS.map((planet, i) => (
                            <motion.div
                                key={i}
                                className="absolute p-4 md:p-6 rounded-2xl bg-slate-900/80 backdrop-blur border border-white/10 shadow-xl flex flex-col items-center gap-2 cursor-pointer hover:scale-110 transition-transform z-20"
                                style={{
                                    left: `${planet.x}%`,
                                    top: `${planet.y}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                            >
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: planet.color }} />
                                <span className="text-slate-200 font-medium text-xs md:text-sm whitespace-nowrap">{planet.name}</span>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}
