"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Target, 
  Repeat, 
  BarChart3, 
  ShieldCheck, 
  Cpu 
} from "lucide-react"

const SYSTEMS = [
  {
    id: "lead",
    name: "Lead Generation",
    icon: <Target className="w-6 h-6" />,
    description: "The autonomous intake engine. Captures, triages, and qualifies prospects 24/7 without human intervention.",
    subNodes: ["Trust Signals", "Google Business Profile", "A/B Content Testing"],
    stats: "100% Capture Rate"
  },
  {
    id: "sales",
    name: "Sales & Conversion",
    icon: <Zap className="w-6 h-6" />,
    description: "Instant response systems. Every lead is called within 30 seconds. Recursive follow-up that never forgets.",
    subNodes: ["AI Sales Scripting", "Instant SMS/Call Connect", "CRM Automation"],
    stats: "32% Higher Close Rate"
  },
  {
    id: "ops",
    name: "Operations & Systems",
    icon: <Repeat className="w-6 h-6" />,
    description: "Standardized excellence. Every process is documented, tracked, and optimized by your AI Wing.",
    subNodes: ["Process Documentation", "Autonomous Scheduling", "Capacity Planning"],
    stats: "20+ Hours Saved/Wk"
  },
  {
    id: "reputation",
    name: "Reputation & Reviews",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Automated social proof. Generates, monitors, and responds to reviews to build unbreakable trust.",
    subNodes: ["Feedback Loops", "Review Generation", "Referral Systems"],
    stats: "4.9★ Average Rating"
  },
  {
    id: "marketing",
    name: "Marketing & Brand",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Omnipresent authority. Your brand stays top-of-mind across all channels with zero manual effort.",
    subNodes: ["Social Distribution", "Recursive Content", "Local Authority SEO"],
    stats: "5x Digital Presence"
  },
  {
    id: "ai",
    name: "AI & Automation",
    icon: <Cpu className="w-6 h-6" />,
    description: "The system's nervous system. Connects your tools into a single, cohesive business brain.",
    subNodes: ["Workflow Logic", "Custom AI Agents", "Private Data Infrastructure"],
    stats: "Zero Data Leaks"
  }
]

export function ArchitectureMap() {
  return (
    <section className="py-24 sm:py-40 px-6 bg-white text-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
          <div className="max-w-3xl">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[11px] font-mono">Technical Infrastructure</p>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-[0.85] mb-8">
              Building Your<br />
              <span className="text-[#D90019]">Business Brain.</span>
            </h2>
            <p className="text-gray-500 text-lg sm:text-xl font-inter font-light max-w-2xl leading-relaxed">
              Six AI systems that compound on each other. Every layer adds intelligence. 
              This is the infrastructure that makes your business an autonomous asset.
            </p>
          </div>
        </div>

        {/* The Grid - Clean, Professional, Optimized */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SYSTEMS.map((system, i) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-[#FAFAF8] border border-gray-100 hover:border-[#D90019] hover:bg-black hover:text-white transition-all duration-500 flex flex-col h-full shadow-sm hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="p-4 bg-white border border-gray-100 group-hover:bg-[#D90019] group-hover:border-[#D90019] text-black group-hover:text-white transition-all">
                  {system.icon}
                </div>
                <div className="text-right">
                    <span className="block text-[9px] font-bold tracking-[0.3em] text-[#D90019] uppercase mb-1">Performance</span>
                    <span className="text-[11px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white">
                        {system.stats}
                    </span>
                </div>
              </div>
              
              <h3 className="font-bebas text-3xl sm:text-4xl uppercase tracking-wide mb-6 group-hover:text-white transition-colors">{system.name}</h3>
              <p className="text-gray-500 group-hover:text-gray-400 text-sm leading-relaxed font-inter mb-10 flex-grow">
                {system.description}
              </p>

              {/* Sub-layers */}
              <div className="border-t border-black/5 group-hover:border-white/10 pt-8 mt-auto">
                <p className="text-[9px] font-bold tracking-[0.3em] text-gray-300 uppercase mb-4">Core Components</p>
                <div className="space-y-3">
                  {system.subNodes.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D90019]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Insight */}
        <div className="mt-24 pt-16 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-gray-400 text-sm font-inter leading-relaxed max-w-xl text-center md:text-left">
              "Every layer you install feeds data back to the central circuit. Your AI Wing gets smarter, faster, and more autonomous every single month."
            </p>
            <div className="flex gap-2">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-[#D90019] animate-pulse' : 'bg-gray-100'}`} />
                ))}
            </div>
        </div>

      </div>
    </section>
  )
}
