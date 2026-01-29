"use client"

import { Button } from "./ui/button"

const aiCooFeatures = [
  "Autonomous AI assistant (runs 24/7)",
  "Connected to WhatsApp, email & your tools",
  "Daily morning briefs & evening recaps",
  "Weekly performance reports (auto-generated)",
  "Content engine, writes & schedules posts",
  "Email triage & draft responses",
  "Lead qualification & pipeline management",
  "SEO blog deployment (daily, automated)",
  "Custom automations for YOUR business",
  "2 weeks of tuning & optimization",
]

const fullInfraFeatures = [
  "Everything in AI COO, plus:",
  "Custom website, designed, built, deployed",
  "Full content strategy (4 weeks, every platform)",
  "Email sequences (welcome, nurture, follow-up)",
  "Lead magnets (written, designed, deployed)",
  "ManyChat / DM automations (full flows)",
  "Sales scripts & proposal templates",
  "30 SEO blog posts (deployed & ranking)",
  "CRM setup & pipeline configuration",
  "Go-to-market launch plan + 90-day roadmap",
  "30 days hands-on support & optimization",
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
            Stop Being the Bottleneck
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            We install AI systems that run your business, so you can focus on growth, or just live your life. Both paths start with a free AI Audit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1: AI COO Installation */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
            <div className="bg-blue-600 px-8 py-4">
              <p className="text-center text-blue-100 text-sm font-medium">
                Most Popular. Best for founders ready to automate
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  AI COO Installation
                </h3>
                <p className="text-slate-500 font-light mb-4">Your autonomous AI assistant, installed and running</p>
                <div className="text-4xl font-bold text-slate-900">
                  $10,000
                </div>
                <p className="text-slate-400 text-sm mt-1">One-time · You own everything</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {aiCooFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-blue-800 text-sm text-center font-medium">
                  🛡️ ROI Guarantee: Save 20+ hrs/week in 30 days or we rebuild it free
                </p>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-xs mb-4">Starts with a free AI Audit</p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-10 py-6 text-lg font-medium w-full"
                  asChild
                >
                  <a href="/audit">Get Your AI COO</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2: Full AI Infrastructure */}
          <div className="bg-white rounded-2xl overflow-hidden flex flex-col border-2 border-amber-400">
            <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-4">
              <p className="text-center text-black text-sm font-bold">
                PREMIUM. The complete transformation
              </p>
            </div>
            <div className="p-8 md:p-10 flex flex-col flex-1">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Full AI Infrastructure
                </h3>
                <p className="text-slate-500 font-light mb-4">AI COO + website + content + sales + everything</p>
                <div className="text-4xl font-bold text-slate-900">
                  $25,000<span className="text-xl font-normal text-slate-400"> - $50,000</span>
                </div>
                <p className="text-slate-400 text-sm mt-1">Based on scope · You own everything</p>
              </div>

              <div className="space-y-3 mb-8 flex-1">
                {fullInfraFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div className={`w-2 h-2 ${idx === 0 ? 'bg-amber-500' : 'bg-amber-500'} rounded-full shrink-0`} />
                    <span className={`text-slate-700 text-sm ${idx === 0 ? 'font-semibold' : ''}`}>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-amber-800 text-sm text-center font-medium">
                  🛡️ Revenue Guarantee: $50K in pipeline within 90 days or we keep working free
                </p>
              </div>

              <div className="text-center">
                <p className="text-slate-400 text-xs mb-4">Starts with a free AI Audit</p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-black rounded-full px-10 py-6 text-lg font-bold w-full"
                  asChild
                >
                  <a href="/audit">Get Full Infrastructure</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
