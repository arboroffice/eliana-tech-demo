"use client"

import { Button } from "./ui/button"

const buildProgramDeliverables = [
  "LLMs trained on your business, voice, and offers",
  "Content waterfall running — 100+ pieces a week from one pillar",
  "Offer stack designed and priced",
  "Your AI Department built — content, support, ops agents",
  "Your AI Wing running without you as the bottleneck",
  "Full AI Growth Infrastructure — workflows, automations, SOPs",
  "Connected tools — CRM, calendar, email, everything wired",
  "Roadmap to Full Buildout ($25K–$75K) and AI Wing Retainer",
]

export function OffersSection() {
  return (
    <section id="offers" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6">
            Your AI Company Builder — One Program. One Outcome: Infrastructure.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Founders of the Future
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Not a mastermind. Not a course. Not coaching. A 7-day install for a complete business build — done alongside you — that ends with infrastructure, not information.
          </p>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden flex flex-col max-w-2xl mx-auto">
          <div className="bg-red-600 px-8 py-4">
            <p className="text-center text-red-100 text-sm font-medium">
              Application only. Limited spots.
            </p>
          </div>
          <div className="p-8 md:p-10 flex flex-col flex-1">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                The Build Program
              </h3>
              <p className="text-slate-500 font-light mb-4">We install in 7 days. 30 days of training. Then we stay on as your AI Wing.</p>
              <p className="text-slate-400 text-sm mt-1">Application only. Book a strategy session to start.</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-6">
              <p className="text-slate-700 text-sm leading-relaxed text-center">
                Every program you've bought before gave you information. Knowledge without installation. The Build Program doesn't teach you how to build. <strong>It builds alongside you.</strong> By the end you don't have knowledge. You have infrastructure.
              </p>
            </div>

            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 text-center">What you walk away with</p>

            <div className="space-y-3 mb-8 flex-1">
              {buildProgramDeliverables.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-red-800 text-sm text-center font-medium">
                Not promised. Installed.
              </p>
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-xs mb-4">Three questions. Application only.</p>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-500 text-white rounded-full px-10 py-6 text-lg font-medium w-full"
                asChild
              >
                <a href="/apply">Apply to Build</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
