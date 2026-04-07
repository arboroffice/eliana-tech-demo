"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Terminal } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060406] text-[#F2EEF5] flex flex-col items-center justify-center p-6 font-mono overflow-hidden relative">
      {/* Background Matrix-like Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden leading-none text-[8px] text-[#D90019] break-all">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="mb-1">
            ERROR_404_OPERATIVE_OFFLINE_SYSTEM_RESTR_01010101_SYSTEM_FAILURE_REBOOT_REQUIRED_
          </div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl px-4"
      >
        <div className="inline-flex items-center gap-3 bg-[#D90019]/10 border border-[#D90019]/20 px-4 py-2 rounded-full mb-10">
          <Terminal size={14} className="text-[#D90019]" />
          <span className="text-[10px] tracking-[3px] uppercase font-bold text-[#D90019]">System Log: 404 Error</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter uppercase whitespace-pre-wrap">
          OPERATIVE<br />
          <span className="text-[#D90019]">OFFLINE</span>
        </h1>

        <p className="text-sm md:text-base text-white/40 leading-relaxed mb-12 max-w-md mx-auto">
          The requested system terminal is disconnected or restricted. Our operatives are processing higher-priority deployments. Please reboot your connection to the main frame.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="/" 
            className="group bg-[#D90019] text-white px-10 py-5 text-[11px] uppercase tracking-[0.3em] font-black hover:brightness-110 transition-all flex items-center gap-4"
          >
            Reboot to Home
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/audit" 
            className="text-[11px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors"
          >
            Run OS Audit
          </Link>
        </div>
      </motion.div>

      {/* Decorative Corners */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/5 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/5 pointer-events-none" />
    </div>
  )
}
