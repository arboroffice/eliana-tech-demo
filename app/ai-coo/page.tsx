"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import Link from "next/link"
import { CheckCircle2, Clock, TrendingUp, Shield, Zap, ArrowRight, ChevronDown } from "lucide-react"
import { useState } from "react"

const valueStack = [
  { item: "24/7 Autonomous AI Assistant", sublabel: "Runs while you sleep. Literally.", value: "$3,000/mo" },
  { item: "Daily Morning Briefs & Evening Recaps", sublabel: "Know exactly what happened and what's next.", value: "$1,500/mo" },
  { item: "Content Engine — Writes & Schedules Posts", sublabel: "LinkedIn, Twitter, Instagram. On autopilot.", value: "$2,000/mo" },
  { item: "Email Triage & Draft Responses", sublabel: "Never touch a \"just following up\" email again.", value: "$1,000/mo" },
  { item: "Lead Qualification & Pipeline Management", sublabel: "Hot leads get flagged. Cold ones get nurtured.", value: "$2,500/mo" },
  { item: "SEO Blog Engine — Daily, Automated", sublabel: "Rank on Google while doing literally nothing.", value: "$1,500/mo" },
  { item: "Custom Automations for YOUR Business", sublabel: "Built around how YOU work, not a template.", value: "$5,000" },
  { item: "2 Weeks of Tuning & Optimization", sublabel: "We dial it in until it's perfect.", value: "$3,000" },
  { item: "Connected to WhatsApp, Email & Your Tools", sublabel: "Lives where you already work.", value: "Priceless" },
  { item: "Weekly Performance Reports (Auto-Generated)", sublabel: "Data you'd pay an analyst for.", value: "$1,000/mo" },
]

const faqs = [
  {
    q: "What if I'm not technical?",
    a: "Perfect. You don't need to be. We build it, install it, tune it, and hand you the keys. You just use it — like texting an employee who happens to be a genius."
  },
  {
    q: "How is this different from ChatGPT?",
    a: "ChatGPT waits for you to ask it something. Your AI COO doesn't wait. It runs your morning brief, triages your inbox, writes your content, qualifies your leads, and reports back — all without you lifting a finger. It's the difference between a search engine and an employee."
  },
  {
    q: "What if it doesn't work for my business?",
    a: "Then we rebuild it. Free. That's our ROI Guarantee. If you're not saving 20+ hours per week within 30 days, we start over at zero cost to you. We've never had to."
  },
  {
    q: "Why $10,000? That seems like a lot.",
    a: "A junior hire costs $4,000–$6,000/month. An executive assistant is $5,000–$8,000/month. A COO? $150,000+/year. You're paying $10,000 once for a system that replaces all three. The ROI isn't 2x. It's 10x."
  },
  {
    q: "How long does setup take?",
    a: "We go live in 5–7 business days. The first two weeks after that are tuning — we watch, adjust, and optimize until it runs like clockwork."
  },
  {
    q: "Do I own everything?",
    a: "Yes. Every automation, every workflow, every integration. It's yours. No monthly fees, no licensing traps, no hostage situations."
  },
  {
    q: "Only 5 spots per month?",
    a: "Each installation is custom-built for your business. We're not copy-pasting templates. That takes time and attention, and we refuse to compromise on quality. When spots are full, they're full."
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden backdrop-blur-sm bg-slate-900/30">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors"
      >
        <span className="text-lg font-semibold text-white pr-4">{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 text-slate-300 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

export default function AICOOSalesPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* HERO / HEADLINE */}
          <section className="pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-6">
                Limited to 5 Installations Per Month
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8">
                What If You Had a COO That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Never Sleeps
                </span>
                , Never Complains, and Costs Less Than One Month of a Junior Hire?
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                A fully autonomous AI system that runs your operations, content, leads, and communications — 24/7. 
                One-time investment. No monthly fees. You own everything.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg sm:text-xl px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Book Your Free AI Audit
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </section>

          {/* PROBLEM AGITATION */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
                Let Me Guess...
              </h2>
              <div className="space-y-6 text-lg sm:text-xl text-slate-300 leading-relaxed">
                <p>
                  You&apos;re the founder, the CEO, the marketing department, the sales team, the customer support rep, and the janitor. <span className="text-white font-semibold">All at the same time.</span>
                </p>
                <p>
                  You&apos;re working 60, 70, 80-hour weeks. Revenue is growing — but <span className="text-white font-semibold">so is the chaos.</span> Every new client means more fires to put out. More emails. More content to create. More leads to follow up on.
                </p>
                <p>
                  You&apos;ve thought about hiring. But a real COO costs <span className="text-amber-400 font-bold">$150,000+/year</span>. An executive assistant is <span className="text-amber-400 font-bold">$5,000–$8,000/month</span>. And even a junior hire takes <span className="text-amber-400 font-bold">3 months</span> to train — and might quit in 6.
                </p>
                <p>
                  So you keep doing everything yourself. And the business grows slower because <span className="text-white font-semibold">YOU are the bottleneck.</span>
                </p>
                <p className="text-white font-bold text-2xl text-center pt-4">
                  Sound familiar?
                </p>
              </div>
            </div>
          </section>

          {/* SOLUTION INTRO */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8">
                This Is Not Another &quot;AI Tool.&quot;
              </h2>
              <p className="text-xl sm:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
                We don&apos;t give you software and say &quot;good luck.&quot; We build you a <span className="text-white font-semibold">fully autonomous AI system</span> that actually <span className="text-amber-400 font-bold">runs your business operations.</span>
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Clock, title: "Runs 24/7", desc: "While you sleep, travel, or actually live your life." },
                  { icon: Zap, title: "Fully Autonomous", desc: "No prompting. No babysitting. It just works." },
                  { icon: TrendingUp, title: "Gets Smarter", desc: "2 weeks of tuning. Learns YOUR business." },
                ].map((item, i) => (
                  <div key={i} className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
                    <item.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* VALUE STACK */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-center mb-4">
                Here&apos;s Everything You Get
              </h2>
              <p className="text-xl text-slate-400 text-center mb-12">
                (And what it would cost to replace each piece)
              </p>

              <div className="space-y-4">
                {valueStack.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-xl p-5 sm:p-6 gap-3"
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold text-lg">{item.item}</p>
                        <p className="text-slate-400 text-sm">{item.sublabel}</p>
                      </div>
                    </div>
                    <p className="text-amber-400 font-bold text-lg whitespace-nowrap sm:text-right pl-10 sm:pl-0">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-10 backdrop-blur-sm bg-gradient-to-r from-amber-500/10 to-yellow-400/10 border-2 border-amber-500/40 rounded-2xl p-8 text-center">
                <p className="text-slate-300 text-lg mb-2">Total Value:</p>
                <p className="text-4xl sm:text-5xl font-black text-white mb-2">
                  $19,500<span className="text-2xl text-slate-400">/mo</span> <span className="text-slate-500 text-2xl">+ $8,000 setup</span>
                </p>
                <div className="w-20 h-1 bg-amber-400 mx-auto my-6 rounded-full" />
                <p className="text-slate-300 text-lg mb-2">You Pay:</p>
                <p className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mb-2">
                  $10,000
                </p>
                <p className="text-xl text-white font-semibold">One time. No monthly fees. Ever.</p>
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-12">
                The Results Speak for Themselves
              </h2>
              <div className="grid sm:grid-cols-3 gap-8">
                {[
                  { stat: "20+", label: "Hours Saved Per Week", sub: "Within the first 30 days" },
                  { stat: "24/7", label: "Always Running", sub: "Nights, weekends, holidays" },
                  { stat: "$0", label: "Monthly Fees", sub: "You own everything, forever" },
                ].map((item, i) => (
                  <div key={i} className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
                    <p className="text-5xl font-black text-amber-400 mb-2">{item.stat}</p>
                    <p className="text-white font-semibold text-lg mb-1">{item.label}</p>
                    <p className="text-slate-400 text-sm">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RISK REVERSAL / GUARANTEE */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="backdrop-blur-sm bg-slate-900/40 border-2 border-emerald-500/40 rounded-2xl p-8 sm:p-12 text-center">
                <Shield className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                  The &quot;No Brainer&quot; ROI Guarantee
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  If your AI COO doesn&apos;t save you <span className="text-white font-bold">20+ hours per week</span> within the first <span className="text-white font-bold">30 days</span>, we rebuild the entire system — <span className="text-emerald-400 font-bold">free of charge.</span>
                </p>
                <p className="text-lg text-slate-400">
                  No questions asked. No fine print. No weasel clauses. We take the risk so you don&apos;t have to.
                </p>
              </div>
            </div>
          </section>

          {/* URGENCY / SCARCITY */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
                We Only Take <span className="text-amber-400">5 Clients</span> Per Month.
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-4">
                Every AI COO is custom-built for your business. Your workflows. Your tools. Your voice. That level of customization takes time.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                We refuse to rush it. When the 5 spots are filled, <span className="text-white font-semibold">you wait until next month.</span>
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg sm:text-xl px-10 py-5 rounded-full hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Book Your AI Audit — It&apos;s Free
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-12">
                Still Have Questions?
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
                Stop Being the Bottleneck.
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Your AI COO is ready to start. The only question is — are you?
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg sm:text-xl px-12 py-6 rounded-full hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Get Your Free AI Audit
                <ArrowRight className="w-6 h-6" />
              </Link>
              <p className="text-slate-500 mt-6 text-sm">
                Free audit · No obligation · See exactly how AI fits your business
              </p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
