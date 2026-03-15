"use client"

import { Button } from "../components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
          You Don't Have a Revenue Problem.
          <br />
          <span className="bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent">
            You Have a Freedom Problem.
          </span>
        </h1>

        <p className="text-sm sm:text-base uppercase tracking-widest text-slate-400 mb-4 font-medium">
          AI Company Builder — Founders of the Future
        </p>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          We build your AI Growth Infrastructure alongside you — LLMs, content waterfall, agent infrastructure, and systems — so your business runs on AI, not your hours.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100 rounded-full px-8 py-6 text-lg font-medium transition-all"
            asChild
          >
            <a href="/apply">
              Apply Now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-white border-white/30 rounded-full px-8 py-6 text-lg font-medium hover:bg-white/10"
            asChild
          >
            <a href="#how-it-works">
              See How It Works
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
