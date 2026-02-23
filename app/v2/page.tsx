import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import Link from "next/link"

export default function HomeV2() {
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
                For founders who are done being the bottleneck
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.05]">
                YOUR BUSINESS IS EATING YOUR LIFE.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  WE FIX THAT IN 30 DAYS.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                We find the one process that's costing you the most time, build an AI system that eliminates it, and install it into your business in 30 days. If it doesn't work, we keep going until it does.
              </p>
              <p className="text-base text-slate-500 max-w-xl mx-auto mb-12">
                We don't pitch decks. We don't advise. We build and install — then prove it works before asking you for more.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit — Find Your Biggest Leak →
              </Link>
            </div>
          </section>

          {/* PAIN SECTION */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 text-center">The real problem</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12 text-center">
                You Don't Have a Growth Problem.<br />You Have an Operations Problem.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    stat: "10–20 hrs/week",
                    label: "lost to manual ops that could be fully automated",
                  },
                  {
                    stat: "Every process that lives in your head",
                    label: "is a liability — you can't scale, sell, or step away from what only you can do",
                  },
                  {
                    stat: "Every hire you make to fix an ops problem",
                    label: "is a symptom. The system is broken. More people don't fix broken systems — they just cost more",
                  },
                  {
                    stat: "The founders pulling away from you",
                    label: "aren't working harder. They have AI running their ops while they focus on revenue and vision",
                  },
                ].map((item) => (
                  <div key={item.stat} className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-white/5">
                    <div className="flex-shrink-0 w-1 rounded-full bg-white/20" />
                    <div>
                      <p className="text-white font-bold text-lg mb-1">{item.stat}</p>
                      <p className="text-slate-400">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* THE FIX */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">What we actually do</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                We Install AI Systems That Do the Work You Shouldn't Be Doing.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-6">
                Not consulting. Not strategy sessions. Not a roadmap that sits in a Google Doc. We <span className="text-white font-semibold">architect, build, and install</span> the actual systems — integrated into the tools you already use — and we don't leave until they're running.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Think of us as your AI wing. We start by solving your single biggest bottleneck. As we prove it works, we grow deeper into your business — system by system, each one compounding on the last — until your operations run themselves.
              </p>
            </div>
          </section>

          {/* WHAT WE BUILD */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">What you get</p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Four Systems That Change How Your Business Runs
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  These aren't tools you have to manage. They're infrastructure that runs whether you're in the building or not.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "01",
                    title: "Autonomous Operations",
                    problem: "You're the one making everything happen.",
                    fix: "We build triggers, automations, and AI agents that handle the recurring work — lead follow-up, scheduling, reporting, client comms — without you in the loop.",
                  },
                  {
                    icon: "02",
                    title: "Executive Intelligence",
                    problem: "You're making decisions on gut and vibes.",
                    fix: "Real-time dashboards and AI-powered insights so you always know what's working, what's leaking, and what to do next. Data in, decisions out.",
                  },
                  {
                    icon: "03",
                    title: "IP Licensing",
                    problem: "You're doing the same work for every new client.",
                    fix: "We turn your expertise into licensable frameworks and systems. Build it once, deploy it infinitely. Your knowledge becomes a product.",
                  },
                  {
                    icon: "04",
                    title: "Exit Readiness",
                    problem: "Your business can't run without you — which means it's worth less.",
                    fix: "A business that runs on documented, automated systems commands a multiple. We build for enterprise value from day one.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <span className="text-4xl font-black text-white/10 block mb-4">{item.icon}</span>
                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-500 text-sm mb-2 italic">"{item.problem}"</p>
                    <p className="text-slate-400 leading-relaxed">{item.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">How we work</p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  We Prove It Works Before We Ask for More
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  No long contracts. No bloated kickoffs. We start small, deliver fast, and earn the right to go deeper.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Free Audit",
                    time: "Week 1",
                    desc: "We map your entire business — every workflow, every bottleneck, every hour leaking out of ops. You leave with a ranked list of what to automate and exactly what it would take. No charge. No commitment.",
                  },
                  {
                    step: "02",
                    title: "Build & Install",
                    time: "30 Days",
                    desc: "We pick the one system that moves the needle most and build it. Fully integrated into your existing stack — your CRM, your payments, your scheduling tool. We install it, test it, and run it live before we call it done.",
                  },
                  {
                    step: "03",
                    title: "Prove & Expand",
                    time: "Ongoing",
                    desc: "You see the results. Time saved. Revenue captured. Ops running without you. Then we decide together what to build next. You own everything. We earn the right to keep going.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-5xl font-black text-white/10 mb-2">{item.step}</div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">{item.time}</p>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* OFFER */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">The offer</p>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Here's Exactly What You Get
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  One setup fee. You own everything we build. No retainer unless you want us to stay on.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Setup Fee */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-slate-400">Step 1 — Required</span>
                    <h3 className="text-2xl font-bold text-white mt-2">The Build</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    We build, install, and test your system. You own the code, the logic, and the results. We don't hold anything hostage.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Custom architecture for your specific bottleneck",
                      "Full integration with your existing tools",
                      "30 days of build, install & optimization",
                      "Team training — you're never dependent on us",
                      "You own everything we build",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-white mt-0.5">&#x2022;</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Single system</span>
                      <span className="text-white font-bold text-sm">Starting at $5K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Department</span>
                      <span className="text-white font-bold text-sm">Starting at $20K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Custom build</span>
                      <span className="text-white font-bold text-sm">Starting at $50K</span>
                    </div>
                  </div>
                </div>

                {/* Ongoing Partnership */}
                <div className="p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent relative">
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-500/30 text-amber-400 bg-amber-500/10">Optional</span>
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-amber-400">Step 2 — If You Want Us to Stay</span>
                    <h3 className="text-2xl font-bold text-white mt-2">The Partnership</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    We stay on, monitor results, optimize performance, and keep building. We earn a percentage of the revenue the systems help generate. If we don't move the needle, we don't eat.
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

              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-slate-300">
                  Not sure which systems you need? <span className="text-white font-semibold">Start with the free audit.</span> We'll map your business, identify the highest-ROI automations, and scope it out. No commitment.
                </p>
              </div>
            </div>
          </section>

          {/* RISK REVERSAL */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">Our guarantee</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                If It Doesn't Save You Time,<br />We Keep Working Until It Does.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Every system we build comes with 30 days of optimization included. If it's not performing the way we scoped it, we don't call it done. We stay on it — at no extra cost — until it is.
              </p>
              <p className="text-slate-500">
                We're not in the business of collecting checks and disappearing. Our reputation is the only thing that gets us the next client.
              </p>
            </div>
          </section>

          {/* WHO IT'S FOR */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-slate-900/10">
            <div className="max-w-5xl mx-auto text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">Who this is for</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Built for Founders Who Are Done Being the Operator
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                Online, local, or enterprise — if you're a founder stuck running the machine instead of building the vision, we're built for you.
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
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 text-center">Objections</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12 text-center">
                Straight Answers
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "What if it doesn't work?",
                    a: "Then we haven't done our job. Every system ships with 30 days of optimization. If it's not hitting the outcome we scoped, we keep working — no extra charge. We don't get paid to build things. We get paid to build things that work.",
                  },
                  {
                    q: "Do I need to be technical?",
                    a: "No. You tell us how your business works. We handle everything else — the architecture, the build, the integrations, the testing. You show up to see the demo.",
                  },
                  {
                    q: "Will this work with my existing tools?",
                    a: "Yes. Stripe, HubSpot, Salesforce, QuickBooks, ServiceTitan, Jobber, Shopify, Webflow, Zapier — if it has an API, we plug into it. We build around your stack, not against it.",
                  },
                  {
                    q: "How long does this actually take?",
                    a: "A single system takes 30 days — build, install, and optimization included. A full department build is 6–8 weeks. Enterprise is scoped individually.",
                  },
                  {
                    q: "Is this just ChatGPT wrappers?",
                    a: "No. We build custom infrastructure: automated workflows, intelligent routing, data pipelines, and AI agents trained on your specific business logic. This is engineering — not prompt tricks.",
                  },
                  {
                    q: "Why start with an audit instead of just quoting me?",
                    a: "Because every business is different and we don't sell generic packages. The audit is how we find the one thing that will move the needle most for you specifically — so we're not guessing and neither are you.",
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
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">One step</p>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                One System. 30 Days.<br />We Prove It Works.
              </h2>
              <p className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto">
                Start with the free audit. We'll find your biggest operational leak, tell you exactly what to build, and scope what it would cost to fix it. No pitch. No pressure.
              </p>
              <p className="text-slate-500 mb-10">
                If it doesn't make sense for you, you walk away with a blueprint you can use anyway.
              </p>
              <Link
                href="/audit"
                className="inline-block px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit →
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
