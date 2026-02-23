import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 mb-6">
                Your AI Wing
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                WE BUILD YOU INTO AN{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  AI-NATIVE
                </span>{" "}
                ORGANIZATION
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed italic">
                We install growth infrastructure and act as your Chief AI Officer. Building the systems that let you scale without scaling headcount.
              </p>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                The fastest-growing founders aren't hiring more people. They have an <span className="text-white font-semibold">AI wing</span> building systems that do the work of 10, so they can focus on <span className="text-white font-semibold">vision and revenue</span>.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Automation Audit →
              </Link>
            </div>
          </section>

          {/* YOUR AI WING + FOUR PILLARS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-5xl mx-auto">
              <div className="max-w-3xl mx-auto text-center mb-20">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">Your Chief AI Officer</p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10">
                  We Don't Just Build Tools.<br />We Become Your AI Wing.
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  Most companies bolt AI onto broken processes. We embed inside your business and rebuild it from the infrastructure up, turning you into an <span className="text-white font-semibold">AI-native organization</span> where growth compounds and operations run themselves.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Think of us as your fractional Chief AI Officer, except we don't just advise. We <span className="text-white font-semibold">architect, build, and install</span> every system ourselves.
                </p>
              </div>

              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Growth Infrastructure
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  Four pillars that turn your company into a machine that runs and grows without you in it.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "IP Licensing",
                    desc: "Proven frameworks and systems you can license and own. Build once, benefit forever.",
                    icon: "01",
                  },
                  {
                    title: "Autonomous Operations",
                    desc: "Processes that execute without you. Triggers, actions, and outcomes, all automated.",
                    icon: "02",
                  },
                  {
                    title: "Executive Intelligence",
                    desc: "Real-time dashboards and AI-powered insights. Make decisions based on data, not gut.",
                    icon: "03",
                  },
                  {
                    title: "Exit Readiness",
                    desc: "A business that runs on systems is a business that can be sold. We build for enterprise value.",
                    icon: "04",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-4xl font-black text-white/10 block mb-4">{item.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  How It Works
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  Three steps from overwhelmed operator to automated growth machine.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Automation Audit",
                    desc: "We map your entire business: every workflow, every bottleneck, every hour wasted on ops. You get a custom blueprint for what to automate and in what order.",
                  },
                  {
                    step: "02",
                    title: "Build & Install",
                    desc: "We start by solving one problem—your biggest bottleneck. Over 30 days of building and implementing, we architect and install your first AI system, integrate it into your existing stack, and prove it works. As we deliver results, we grow as your AI wing: expanding system by system, each one compounding on the last—custom built for your industry, plugged into your existing tools, running autonomously.",
                  },
                  {
                    step: "03",
                    title: "Launch & Optimize",
                    desc: "Your systems go live. We monitor, tune, and optimize for 30 days. You get trained on everything so you're never dependent on us.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-5xl font-black text-white/10 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-24 text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  We Win When You Win
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  No bloated retainers. No hourly billing. You pay a one-time setup fee to build the systems. Want ongoing support? Add an optional partnership. Our incentives are aligned with yours.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Setup Fee */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-slate-400">Step 1</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Setup Fee</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Covers the build. We architect and install your AI systems, integrate with your existing stack, and get everything live. You own it all.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Custom system architecture & build",
                      "Full integration with your tools",
                      "30 days of optimization & tuning",
                      "Team training & documentation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-white mt-0.5">&#x2022;</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-slate-400 text-sm">Scoped per project. Starts at <span className="text-white font-bold">$5K</span> for a single system.</p>
                  </div>
                </div>

                {/* Ongoing Partnership */}
                <div className="p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent relative">
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-500/30 text-amber-400 bg-amber-500/10">Optional</span>
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-amber-400">Step 2</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Ongoing Partnership</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Want us to stay on? We monitor, optimize, and scale your systems over time. We earn a percentage of the revenue they help generate. If we don't move the needle, you don't pay.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Revenue share on system-attributed growth",
                      "Ongoing monitoring & optimization",
                      "Priority support & system upgrades",
                      "Quarterly strategy reviews with Mia",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-amber-400 mt-0.5">&#x2022;</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-amber-500/20 pt-6">
                    <p className="text-slate-400 text-sm">Percentage based on scope. <span className="text-amber-400 font-bold">We only eat when you eat.</span></p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-500 text-sm">Scoped per project — starting at <span className="text-slate-300">$5K</span> for a single system, <span className="text-slate-300">$20K</span> for a department, and <span className="text-slate-300">$50K</span> for custom builds. Submit an audit to see how we can help you.</p>
              </div>

              <div className="mt-6 p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-slate-300">
                  Not sure which systems you need? <span className="text-white font-semibold">Start with the free audit.</span> We'll map your business, identify the highest-ROI automations, and scope it out. No commitment.
                </p>
              </div>
            </div>
          </section>

          {/* BUILT FOR */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-slate-900/10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Built for Founders Who Want Freedom
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                Online, local, or enterprise. If you're a founder stuck running the machine instead of building your dream life, we're your AI wing.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SaaS Founders", "Course Creators", "Coaches & Consultants",
                  "E-commerce & Retail", "Agencies", "Home Services",
                  "Healthcare & Dental", "Law Firms & Accounting", "Real Estate",
                  "Restaurants & Hospitality", "Construction & Trades",
                  "Manufacturing & Logistics", "Membership & Community",
                  "Digital Products", "Professional Services",
                ].map((type) => (
                  <span
                    key={type}
                    className="px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-slate-300 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12 text-center">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do I need to be technical?",
                    a: "Not at all. We handle every aspect of the build. You just tell us how your business works, and we build the systems around it.",
                  },
                  {
                    q: "Will this work with my existing tools?",
                    a: "Yes. We integrate with Stripe, HubSpot, Salesforce, QuickBooks, ServiceTitan, Jobber, Shopify, Webflow, Zapier, and pretty much anything with an API. We build around your stack, not against it.",
                  },
                  {
                    q: "How long until my systems are live?",
                    a: "A single system takes 2–4 weeks. A full-stack build takes 6–8 weeks. Enterprise builds are scoped individually but typically 8–12 weeks.",
                  },
                  {
                    q: "What if I outgrow the system?",
                    a: "That's the point. These systems are built to scale with you. And if you need to expand, we can add new systems anytime. Each one compounds on the last.",
                  },
                  {
                    q: "Is this just ChatGPT wrappers?",
                    a: "No. We build custom infrastructure: automated workflows, intelligent routing, data pipelines, and AI agents trained on your specific business. This is engineering, not prompt tricks.",
                  },
                ].map((item) => (
                  <div key={item.q} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Your Business Should Work<br />Without You in It.
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Take the free automation audit. We'll show you exactly where you're losing time, what to automate first, and what it looks like on the other side.
              </p>
              <Link
                href="/audit"
                className="inline-block px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Automation Audit →
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
