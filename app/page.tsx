"use client"

import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem, Divider } from "../components/scroll-reveal"

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
              <motion.p
                className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                Your AI Wing / Chief AI Officer
              </motion.p>
              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                RECLAIM 20 HOURS A WEEK WITH YOUR{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  CUSTOM AI EMPLOYEE
                </span>{" "}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                We architect, build, and install a custom AI system into your business in 30 days. No strategy sessions. No learning prompts. We build it - you get your time back. Guaranteed.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              >
                <Link
                  href="/audit"
                  className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                >
                  Get Your Free Automation Audit →
                </Link>
              </motion.div>
            </div>
          </section>

          {/* THE FIX — LIGHT PATTERN INTERRUPT */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-50 relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6">What we actually do</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-8">
                  We Install AI Systems That Do the Work You Shouldn't Be Doing.
                </h2>
              </ScrollReveal>

              <div className="flex justify-center my-8"><div className="w-16 h-px bg-stone-300" /></div>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-stone-600 leading-relaxed mb-6">
                  We <span className="text-stone-900 font-semibold">architect, build, and install</span> the actual systems - integrated into the tools you already use - and we don't leave until they're running.
                </p>
              </ScrollReveal>

              <div className="flex justify-center my-8"><div className="w-16 h-px bg-stone-300" /></div>

              <ScrollReveal delay={0.3}>
                <p className="text-lg text-stone-500 leading-relaxed">
                  Think of us as your AI wing. We start by solving your single biggest bottleneck. As we prove it works, we grow deeper into your business - system by system, each one compounding on the last - until your operations run themselves.
                </p>
              </ScrollReveal>
            </div>
          </section>

          {/* OFFER */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <ScrollReveal>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">The offer</p>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                    Here's Exactly What You Get
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    One setup fee. You own everything we build. No retainer unless you want us to stay on.
                  </p>
                </ScrollReveal>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* The Build */}
                <ScrollReveal direction="left" delay={0.1}>
                  <div className="p-8 rounded-2xl border border-white/10 bg-white/5 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-widest">
                      Most Popular
                    </div>
                    <div className="mb-6">
                      <span className="text-sm uppercase tracking-wider text-slate-400">Step 1</span>
                      <h3 className="text-2xl font-bold text-white mt-2">The 30-Day Efficiency Install</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      We build, install, and test your system end-to-end. Fully integrated into your existing stack and ready to run.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Custom architecture for your specific bottleneck",
                        "Full integration with your existing tools",
                        "30 days of build, install & optimization",
                        "Team training - you're never dependent on us",
                        "You own everything we build",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-white mt-0.5">&#x2022;</span>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bonuses */}
                    <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-4 mb-8">
                      <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Included Bonuses:</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-white text-sm font-semibold italic">
                          <span className="text-blue-400">+</span> The Founder&apos;s AI Blueprint ($1,500 Value)
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm font-semibold italic">
                          <span className="text-blue-400">+</span> Priority Support 30-Day Sprint ($2,000 Value)
                        </li>
                      </ul>
                    </div>

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
                </ScrollReveal>

                {/* Growth Infrastructure */}
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent relative h-full">
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border border-amber-500/30 text-amber-400 bg-amber-500/10">Optional</span>
                    <div className="mb-6">
                      <span className="text-sm uppercase tracking-wider text-amber-400">Step 2 - Growth Infrastructure</span>
                      <h3 className="text-2xl font-bold text-white mt-2">Revenue Partnership</h3>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-8">
                      Once the system is live, we stay on as your growth infrastructure. We're not maintaining — we're building and compounding. New systems, new revenue channels, new automation layers. We earn a percentage of what the systems generate. If revenue doesn't grow, we don't get paid.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {[
                        "Revenue share on system-attributed growth",
                        "Continuous build — new systems added as you scale",
                        "Growth strategy with Mia every quarter",
                        "Priority support & system upgrades",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="text-amber-400 mt-0.5">&#x2022;</span>
                          <span className="text-slate-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-amber-500/20 pt-6">
                      <p className="text-slate-400 text-sm">Percentage based on scope. Discussed after the audit.</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                  <p className="text-slate-300">
                    Not sure which systems you need? <span className="text-white font-semibold">Start with the free audit.</span> We'll map your business, identify the highest-ROI automations, and scope it out. No commitment.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </section>

          {/* GUARANTEE — LIGHT PATTERN INTERRUPT */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-50 relative">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6">Our guarantee</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight mb-8">
                  If It Doesn&apos;t Save You at Least 15 Hours a Week,<br />We Keep Working For Free.
                </h2>
              </ScrollReveal>

              <div className="flex justify-center my-8"><div className="w-16 h-px bg-stone-300" /></div>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-stone-600 leading-relaxed mb-8">
                  We don&apos;t call it done until the system is hitting the outcome we scoped. If it takes longer than 30 days to get your time back, we stay on it — <span className="text-stone-900 font-bold">at our expense</span> — until the job is done. Zero risk. All upside.
                </p>
              </ScrollReveal>

              <div className="flex justify-center my-6"><div className="w-16 h-px bg-stone-300" /></div>

              <ScrollReveal delay={0.3}>
                <p className="text-stone-500 italic">
                  &quot;Money-back guarantees are for people who aren&apos;t sure they can deliver. We&apos;re sure. We just keep working until you win.&quot;
                </p>
              </ScrollReveal>
            </div>
          </section>


          {/* WHO IT'S FOR */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-slate-900/10">
            <div className="max-w-5xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">Who this is for</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  Built for Founders Who Are Done Being the Operator
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
                  Online, local, or enterprise - if you&apos;re a founder stuck running the machine instead of building the vision, we&apos;re built for you.
                </p>
              </ScrollReveal>
              <StaggerContainer className="flex flex-wrap justify-center gap-3" staggerDelay={0.04}>
                {[
                  { name: "SaaS Founders", slug: "saas" },
                  { name: "Course Creators", slug: "course-creators" },
                  { name: "Coaches & Consultants", slug: "coaching" },
                  { name: "E-commerce & Retail", slug: "ecommerce" },
                  { name: "Agencies", slug: "agencies" },
                  { name: "Home Services", slug: "home-services" },
                  { name: "Healthcare & Dental", slug: "healthcare" },
                  { name: "Law Firms & Accounting", slug: "legal-finance" },
                  { name: "Real Estate", slug: "real-estate" },
                  { name: "Restaurants & Hospitality", slug: "hospitality" },
                  { name: "Construction & Trades", slug: "construction" },
                  { name: "Manufacturing & Logistics", slug: "manufacturing" },
                  { name: "Membership & Community", slug: "membership" },
                  { name: "Digital Products", slug: "digital-products" },
                  { name: "Professional Services", slug: "professional-services" },
                ].map((industry) => (
                  <StaggerItem key={industry.slug}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="inline-block px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-slate-300 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {industry.name}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 text-center">Objections</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12 text-center">
                  Straight Answers
                </h2>
              </ScrollReveal>
              <StaggerContainer className="space-y-6" staggerDelay={0.1}>
                {[
                  {
                    q: "What if it doesn't work?",
                    a: "Then we haven't done our job. Every system ships with 30 days of optimization. If it's not hitting the outcome we scoped, we keep working - no extra charge. We don't get paid to build things. We get paid to build things that work.",
                  },
                  {
                    q: "Do I need to be technical?",
                    a: "No. You tell us how your business works. We handle everything else - the architecture, the build, the integrations, the testing. You show up to see the demo.",
                  },
                  {
                    q: "Will this work with my existing tools?",
                    a: "Yes. Stripe, HubSpot, Salesforce, QuickBooks, ServiceTitan, Jobber, Shopify, Webflow, Zapier - if it has an API, we plug into it. We build around your stack, not against it.",
                  },
                  {
                    q: "How long does this actually take?",
                    a: "A single system takes 30 days - build, install, and optimization included. A full department build is 6–8 weeks. Enterprise is scoped individually.",
                  },
                  {
                    q: "Why start with an audit instead of just quoting me?",
                    a: "Because every business is different and we don't sell generic packages. The audit is how we find the one thing that will move the needle most for you specifically - so we're not guessing and neither are you.",
                  },
                ].map((item) => (
                  <StaggerItem key={item.q}>
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                      <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                      <p className="text-slate-400 leading-relaxed">{item.a}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6">One step</p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  One System. 30 Days.<br />We Prove It Works.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-slate-400 mb-4 max-w-2xl mx-auto">
                  Start with the free audit. We'll find your biggest operational leak, tell you exactly what to build, and scope what it would cost to fix it.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.25}>
                <p className="text-slate-500 mb-10">
                  If it doesn't make sense for you, you walk away with a blueprint you can use anyway.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Link
                  href="/audit"
                  className="inline-block px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                >
                  Get Your Free Audit →
                </Link>
              </ScrollReveal>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
