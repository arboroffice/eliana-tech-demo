"use client"

import { Button } from "./ui/button"

const containerFeatures = [
  "6-week intensive program",
  "Mia works directly with you",
  "Weekly calls + implementation",
  "Custom AI roadmap",
  "Walk away with working systems",
]

const doneForYouFeatures = [
  "Full AI systems build-out",
  "Lead capture + qualification",
  "Customer support automation",
  "Operations + dispatch",
  "Reporting dashboard",
  "90-day implementation",
]

export function OffersSection() {
  return (
    <section id="offers" className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6">
            Two Paths. One Outcome: Freedom.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Path
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Whether you want to learn alongside us or have us handle everything — both paths start with a free AI Audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: The Container */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-slate-900 px-8 py-4 border-b border-slate-800">
              <p className="text-center text-slate-300 text-sm">
                Best for founders who want to understand and own their AI
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  The Container
                </h3>
                <p className="text-slate-500 font-light mb-4">Learn to Build It With Me</p>
                <div className="text-4xl font-bold text-slate-900">
                  $10,000
                </div>
                <p className="text-slate-400 text-sm mt-1">6-week intensive</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {containerFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-6 mb-6">
                <p className="text-slate-500 text-sm text-center">
                  Add-on: <span className="font-medium text-slate-700">$3,000/mo</span> extended support after program
                </p>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-xs mb-4">Starts with a free AI Audit</p>
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg font-medium w-full"
                  asChild
                >
                  <a href="/audit">Apply Now</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Done-For-You */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-slate-900 px-8 py-4 border-b border-slate-800">
              <p className="text-center text-slate-300 text-sm">
                Best for businesses that want it handled
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Done-For-You
                </h3>
                <p className="text-slate-500 font-light mb-4">We Build It For You</p>
                <div className="text-4xl font-bold text-slate-900">
                  $28,000<span className="text-xl font-normal text-slate-400">+</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Full build-out · scales with complexity</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {doneForYouFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-2 h-2 bg-slate-400 rounded-full shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-auto">
                <p className="text-slate-400 text-xs mb-4">Starts with a free AI Audit</p>
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg font-medium w-full"
                  asChild
                >
                  <a href="/audit">Apply Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
