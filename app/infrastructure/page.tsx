"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import Link from "next/link"
import { useState } from "react"

const valueStack = [
  { item: "AI COO System — Voice, Workflows, Automations", value: "$10,000" },
  { item: "Custom Website — Designed, Built & Deployed", value: "$8,000" },
  { item: "4-Week Content Strategy, Every Platform", value: "$5,000" },
  { item: "Email Sequences — Welcome, Nurture & Follow-Up", value: "$3,000" },
  { item: "Lead Magnets — Written, Designed & Deployed", value: "$2,500" },
  { item: "ManyChat / DM Automation Flows", value: "$3,000" },
  { item: "Sales Scripts & Proposal Templates", value: "$2,000" },
  { item: "30 SEO Blog Posts — Deployed & Ranking", value: "$6,000" },
  { item: "CRM Setup & Full Pipeline Configuration", value: "$2,500" },
  { item: "Go-to-Market Launch Plan + 90-Day Roadmap", value: "$5,000" },
  { item: "30 Days Hands-On Support & Optimization", value: "$4,000" },
]

const faqs = [
  {
    q: "What if I already have a website?",
    a: "Great — we'll either rebuild it properly or optimize what you have. Either way, you'll end up with a site that actually converts. Most 'existing' websites we see are costing their owners money, not making it.",
  },
  {
    q: "How is this different from hiring an agency?",
    a: "Agencies give you deliverables. We give you infrastructure. The difference? Deliverables sit in a Google Drive. Infrastructure runs your business 24/7 — generating leads, nurturing prospects, and closing deals while you sleep.",
  },
  {
    q: "What does the $50K pipeline guarantee actually mean?",
    a: "It means exactly what it says. Within 90 days of launch, you'll have $50,000+ in qualified pipeline — real opportunities with real people ready to buy. If you don't? We keep working for free until you do. We don't hide behind asterisks.",
  },
  {
    q: "Why does it cost $25K–$50K?",
    a: "Because you're buying $51,000+ worth of real infrastructure — built by people who actually know what they're doing. You could hire 5 freelancers, a project manager, and spend 6 months coordinating. Or you could let us handle everything in 30 days. The investment pays for itself with the guarantee alone.",
  },
  {
    q: "How long does it actually take?",
    a: "30 days from kickoff to full launch. We move fast because we've built systems to move fast. Your only job is to show up to a few onboarding calls and approve deliverables. We handle everything else.",
  },
  {
    q: "What if I'm not ready?",
    a: "Then you're not ready — and that's fine. This isn't for everyone. But if you've been 'not ready' for 6 months while competitors eat your lunch… the cost of waiting is way higher than the cost of starting.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not even a little bit. We build, deploy, and manage everything. You get trained on how to use it, and we support you for 30 days after launch. If you can send a text message, you can run what we build.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-700/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors"
      >
        <span className="text-lg font-semibold text-white">{q}</span>
        <span className="text-amber-400 text-2xl shrink-0">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-300 leading-relaxed">{a}</div>
      )}
    </div>
  )
}

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* ═══════════════════ HERO / HEADLINE ═══════════════════ */}
          <section className="pt-32 pb-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium tracking-wide uppercase">
                Full AI Infrastructure — Build &amp; Release
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8">
                What If We Built Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                  Entire Digital Infrastructure
                </span>{" "}
                in 30 Days — And{" "}
                <span className="underline decoration-amber-400 decoration-4 underline-offset-4">
                  Guaranteed
                </span>{" "}
                $50K in Pipeline Within 90?
              </h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                Website. Content. Email. Automations. CRM. AI. Everything — built, deployed, and generating revenue. Not &quot;deliverables.&quot; Not &quot;strategy decks.&quot; A working business machine.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Book Your Free AI Audit →
              </Link>
              <p className="text-sm text-slate-500 mt-4">
                No commitment. No pitch deck. Just a real conversation about your business.
              </p>
            </div>
          </section>

          {/* ═══════════════════ PROBLEM AGITATION ═══════════════════ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Let&apos;s Be Honest About Where You Are Right Now
              </h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  You&apos;re posting content that gets 12 likes — 8 of them from your mom and your business partner.
                </p>
                <p>
                  Your website was built 3 years ago by a &quot;friend who knows Squarespace.&quot; It looks like it. And it converts like it.
                </p>
                <p>
                  You have <span className="text-white font-semibold">zero email sequences</span>. Every lead that comes in gets a manual follow-up… if you remember. Most of the time? They ghost. Because you ghosted first.
                </p>
                <p>
                  No automations. No funnel. No CRM — or worse, a CRM with 4,000 contacts and zero pipeline.
                </p>
                <p>
                  You&apos;re leaving <span className="text-amber-400 font-bold">tens of thousands of dollars</span> on the table every single month. Not because your service is bad. Because your <em>infrastructure</em> doesn&apos;t exist.
                </p>
                <p className="text-white font-semibold text-xl pt-4">
                  You don&apos;t have a marketing problem. You don&apos;t have a sales problem. You have an <span className="text-amber-400">infrastructure problem</span>.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════ SOLUTION ═══════════════════ */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                We Don&apos;t Give You Tools.{" "}
                <span className="text-amber-400">We Build the Entire Machine.</span>
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Most agencies hand you a strategy doc and wish you luck. Most freelancers build one piece and disappear. Most &quot;AI companies&quot; sell you a chatbot and call it transformation.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                We do something different. We build, install, and launch your <span className="text-white font-semibold">entire digital business infrastructure</span> — from scratch — in 30 days.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center mt-12">
                {["Website", "Content", "Email", "Automations", "CRM", "AI Systems", "SEO", "Lead Magnets", "Sales Scripts"].map((item) => (
                  <div key={item} className="px-4 py-3 rounded-lg border border-amber-500/20 bg-amber-500/5 text-amber-300 font-medium">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-xl text-white font-semibold mt-10">
                Everything. Built. Deployed. Generating revenue.
              </p>
            </div>
          </section>

          {/* ═══════════════════ VALUE STACK ═══════════════════ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
                Here&apos;s Everything You Get
              </h2>
              <p className="text-center text-slate-400 mb-12 text-lg">
                The complete infrastructure, broken down:
              </p>

              <div className="space-y-3">
                {valueStack.map((row, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-4 px-6 py-4 rounded-xl border border-amber-500/20 bg-gradient-to-r from-slate-900/80 to-slate-800/40"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-amber-400 text-lg">✓</span>
                      <span className="text-white font-medium">{row.item}</span>
                    </div>
                    <span className="text-slate-500 line-through font-mono text-sm shrink-0">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-8 p-6 rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/10 to-transparent text-center">
                <p className="text-slate-400 text-lg">Total Value:</p>
                <p className="text-4xl font-bold text-white mt-1">
                  <span className="line-through text-slate-500 text-3xl mr-3">$51,000+</span>
                </p>
                <p className="text-slate-400 mt-4 text-lg">Your Investment:</p>
                <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 mt-1">
                  Starting at $25,000
                </p>
                <p className="text-slate-500 text-sm mt-3">
                  Custom scoping based on your business. Final investment up to $50K depending on complexity.
                </p>
              </div>

              <div className="text-center mt-10">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-lg rounded-xl hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
                >
                  Book Your Free AI Audit →
                </Link>
              </div>
            </div>
          </section>

          {/* ═══════════════════ WHO THIS IS FOR ═══════════════════ */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                This Is For You If…
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-emerald-400 mb-4">✅ You&apos;re a fit if:</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>You run a real business doing $500K+ (or you&apos;re damn close)</li>
                    <li>You know your offer works — you just can&apos;t scale the systems around it</li>
                    <li>You&apos;re tired of duct-taping tools together</li>
                    <li>You want to invest in infrastructure that compounds</li>
                    <li>You&apos;re ready to move in the next 30 days — not &quot;someday&quot;</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400 mb-4">❌ Not for you if:</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li>You don&apos;t have a proven offer yet</li>
                    <li>You&apos;re looking for the cheapest option</li>
                    <li>You want to &quot;think about it&quot; for 6 months</li>
                    <li>You need to &quot;run it by your team&quot; (you are the team)</li>
                    <li>You think AI is a fad</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════════════ RISK REVERSAL ═══════════════════ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                The Guarantee That Makes This a{" "}
                <span className="text-amber-400">No-Brainer</span>
              </h2>
              <div className="p-8 rounded-2xl border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-transparent">
                <p className="text-6xl mb-4">🛡️</p>
                <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  $50K Pipeline in 90 Days — Or We Work Free Until You Hit It.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We don&apos;t do &quot;satisfaction guarantees&quot; or &quot;money-back if you&apos;re not happy.&quot; We do <span className="text-white font-semibold">performance guarantees</span>. $50,000 in qualified pipeline within 90 days of launch. If we don&apos;t hit it, we keep working — on our dime — until we do.
                </p>
                <p className="text-amber-400 font-semibold mt-4">
                  We eat what we kill. Simple as that.
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════ URGENCY ═══════════════════ */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                We Take On <span className="text-amber-400">3 Builds Per Month</span>. That&apos;s It.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Each infrastructure build is fully custom. Real strategy. Real design. Real engineering. We don&apos;t use templates and we don&apos;t cut corners.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                That means we physically cannot take on more than 3 clients per month and deliver at the level we promise.
              </p>
              <p className="text-xl text-white font-semibold">
                If all 3 spots are filled, the next available slot is 30+ days out.
              </p>
            </div>
          </section>

          {/* ═══════════════════ FINAL CTA ═══════════════════ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Build the Machine?
              </h2>
              <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                The audit is free. It takes 30 minutes. We&apos;ll map your current infrastructure, identify the gaps, and show you exactly what we&apos;d build — whether you hire us or not.
              </p>
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold text-xl rounded-xl hover:scale-105 transition-transform shadow-lg shadow-amber-500/25"
              >
                Book Your Free AI Audit →
              </Link>
              <p className="text-sm text-slate-500 mt-4">
                No commitment. No credit card. Just clarity.
              </p>
            </div>
          </section>

          {/* ═══════════════════ FAQ ═══════════════════ */}
          <section className="py-20 px-4 bg-slate-900/40">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
                Questions You&apos;re Probably Asking
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
