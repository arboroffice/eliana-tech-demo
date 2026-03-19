"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function FoundersOfTheFuturePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#08080A] text-white overflow-x-hidden selection:bg-[#D90019] selection:text-white">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between ${scrolled ? 'bg-[#08080A]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
        <Link href="/foundersofthefuture" className="font-bebas text-[22px] tracking-[0.2em] text-white">
          FOUNDERS<span className="text-[#D90019]">OTF</span>
        </Link>
        <a href="#join" className="font-mono bg-white text-black text-[10px] uppercase tracking-[0.25em] font-bold px-5 py-2.5 hover:bg-[#D90019] hover:text-white transition-all duration-300">
          Join Now
        </a>
      </nav>

      <main>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col justify-end pb-20 sm:pb-32 px-6 md:px-12 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D90019]/8 rounded-full blur-[200px] pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

          {/* Grain */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 256 256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")' }}></div>

          <div className="relative z-10 max-w-[1200px] mx-auto w-full">
            <div className="mb-8 overflow-hidden">
              <p className="font-mono text-[#D90019] text-[10px] sm:text-xs font-bold tracking-[0.5em] uppercase animate-fade-in">
                The AI Founder Community
              </p>
            </div>

            <h1 className="font-bebas text-[clamp(52px,11vw,160px)] leading-[0.82] uppercase tracking-[-0.02em] animate-fade-in-heading">
              Stop Playing<br />
              With AI.<br />
              <span className="text-[#D90019]">Start Building<br className="sm:hidden" /> Systems<br className="hidden sm:block" /> That<br className="sm:hidden" /> Make Money.</span>
            </h1>

            <p className="font-syne text-white/40 text-base sm:text-lg max-w-md mt-8 leading-relaxed animate-fade-in-sub">
              Use tools like Claude to run your backend, capture leads, and automate your business.
            </p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start gap-5 animate-fade-in-buttons">
              <a href="#join" className="group font-bebas text-xl sm:text-2xl tracking-[0.15em] bg-[#D90019] text-white pl-8 pr-6 py-4 sm:py-5 flex items-center gap-4 hover:gap-6 transition-all duration-300 hover:bg-white hover:text-black">
                Join the Community <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a href="#proof" className="font-syne text-sm sm:text-base font-semibold text-white/30 hover:text-white transition-colors duration-300 py-4 sm:py-5 flex items-center gap-3">
                See what founders are building <span className="text-[#D90019]">&darr;</span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-6 md:left-12 w-px h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
        </section>


        {/* ═══════════════════════════════════════════
            THE PROBLEM
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 relative">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-syne text-white/30 text-sm sm:text-base font-medium leading-[2] max-w-xl">
                Right now most people are using AI wrong. They generate content. Ask random questions. Test prompts. And then go right back to doing everything manually.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-20 sm:mt-32">
                <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">Meanwhile</p>
                <h2 className="font-bebas text-[clamp(36px,7vw,100px)] leading-[0.88] uppercase tracking-tight">
                  A small group of founders<br />
                  are building systems that<br />
                  <span className="text-[#D90019]">run their businesses.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px">
                {["Answer phones", "Follow up instantly", "Send quotes", "Run daily ops"].map((item, i) => (
                  <div key={i} className="border-t border-white/10 pt-6 pr-8">
                    <span className="font-mono text-[#D90019] text-xs tracking-widest block mb-2">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-syne text-white text-sm sm:text-base font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-20 font-syne text-white/20 text-[clamp(20px,3vw,36px)] font-bold leading-tight max-w-2xl">
                Same tools. <span className="text-white">Different approach.</span>
              </p>
            </Reveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            THE SHIFT
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[30vw] text-white/[0.015] leading-none pointer-events-none select-none whitespace-nowrap">
            OPERATOR
          </div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(60px,14vw,200px)] leading-[0.78] uppercase tracking-[-0.02em]">
                AI is not<br />
                just a tool.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-12 sm:mt-20 flex items-center gap-6">
                <div className="w-16 sm:w-32 h-px bg-[#D90019]"></div>
                <p className="font-syne text-[clamp(24px,4vw,56px)] text-[#D90019] font-bold leading-none italic">
                  It&apos;s an operator.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-16 sm:mt-24 font-syne text-white/30 text-lg sm:text-xl max-w-lg leading-relaxed">
                Once you understand that, you stop chatting with it — and start <span className="text-white font-bold">building</span> with it.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            WHAT THIS IS
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">What This Is</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight mb-6">
                A community for founders<br />
                who want to become <span className="text-[#D90019]">AI-native.</span>
              </h2>
              <p className="font-syne text-white/30 text-lg sm:text-xl max-w-lg mt-8 font-medium">
                Inside, you don&apos;t get theory.
              </p>
            </Reveal>

            <div className="mt-20 sm:mt-32 grid md:grid-cols-3 gap-0">
              {[
                { label: "Real Workflows", text: "Step-by-step systems you can follow and implement today." },
                { label: "Real Systems", text: "Proven automation stacks that founders are running right now." },
                { label: "Real Use Cases", text: "Stuff you can copy and run. No fluff. Just what works." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-t border-white/10 py-10 pr-12 group">
                    <span className="font-bebas text-[#D90019] text-xl tracking-wide block mb-4">{item.label}</span>
                    <p className="font-syne text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-500">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            WHAT YOU GET — 3 tiers
        ═══════════════════════════════════════════ */}
        <section id="what-you-get" className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">What You Get</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight">
                Three levels.
              </h2>
            </Reveal>

            {/* Tier 1 — Free Community */}
            <Reveal delay={0.1}>
              <div className="mt-24 sm:mt-32 border-t border-white/10 pt-12 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
                <div>
                  <span className="font-mono text-[#D90019] text-xs tracking-widest">01</span>
                  <h3 className="font-bebas text-4xl sm:text-5xl uppercase mt-2">Free Community</h3>
                  <span className="font-bebas text-3xl text-white/60 mt-3 block">$0</span>
                </div>
                <div>
                  <p className="font-syne text-white/50 text-base sm:text-lg leading-relaxed mb-6">
                    Get in the room. See what&apos;s possible. Start learning from founders who are already building with AI.
                  </p>
                  <div className="space-y-4">
                    {["Access to the community feed", "See real builds and use cases daily", "Ask questions and get answers", "Weekly AI system breakdowns", "Network with other operators"].map((item, i) => (
                      <p key={i} className="font-syne text-white/40 text-base sm:text-lg leading-relaxed pl-6 border-l border-white/10 hover:border-[#D90019] hover:text-white/70 transition-all duration-300">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tier 2 — $97/mo */}
            <Reveal delay={0.1}>
              <div className="mt-20 sm:mt-28 border-t border-white/10 pt-12 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
                <div>
                  <span className="font-mono text-[#D90019] text-xs tracking-widest">02</span>
                  <h3 className="font-bebas text-4xl sm:text-5xl uppercase mt-2">AI System Packs</h3>
                  <span className="font-bebas text-3xl text-white mt-3 block">$97<span className="text-white/30 text-lg">/mo</span></span>
                </div>
                <div>
                  <p className="font-syne text-white/50 text-base sm:text-lg leading-relaxed mb-6">
                    Plug-and-play systems by industry. Each pack shows you exactly what to build, how it works, and the exact prompts + structure to launch it.
                  </p>
                  <div className="space-y-4 mb-8">
                    {["Everything in Free", "Full AI system packs by industry", "Copy-paste prompts + automations", "Step-by-step implementation guides", "New packs dropped monthly", "Private members-only channel"].map((item, i) => (
                      <p key={i} className="font-syne text-white/40 text-base sm:text-lg leading-relaxed pl-6 border-l border-white/10 hover:border-[#D90019] hover:text-white/70 transition-all duration-300">
                        {item}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {["Lead capture + follow-up", "AI receptionist", "Instant estimate generators", "CRM automations"].map((tag, i) => (
                      <span key={i} className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/30 border border-white/10 px-4 py-2 hover:border-[#D90019] hover:text-[#D90019] transition-all duration-300 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Tier 3 — $997/mo Inner Circle */}
            <Reveal delay={0.1}>
              <div className="mt-20 sm:mt-28 border-t border-[#D90019]/30 pt-12 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-20 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#D90019] via-[#D90019]/40 to-transparent"></div>
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-black bg-[#D90019] px-3 py-1 inline-block mb-4">Inner Circle</span>
                  <span className="font-mono text-[#D90019] text-xs tracking-widest block">03</span>
                  <h3 className="font-bebas text-4xl sm:text-5xl uppercase mt-2">The Inner Circle</h3>
                  <span className="font-bebas text-3xl text-[#D90019] mt-3 block">$997<span className="text-white/30 text-lg">/mo</span></span>
                  <p className="font-syne text-white/30 text-sm mt-4 leading-relaxed italic">
                    Direct access to Mia and the team.
                  </p>
                </div>
                <div>
                  <p className="font-syne text-white/50 text-base sm:text-lg leading-relaxed mb-6">
                    This is not a course. This is proximity. You get direct access to the people building these systems every day — and we help you build yours.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Everything in $97",
                      "Direct access to Mia + the ElianaTech team",
                      "Weekly live build sessions",
                      "We review your systems and tell you what to fix",
                      "Custom implementation support",
                      "Priority builds — your use case, built with you",
                      "Private Slack/group with inner circle members only",
                      "First access to every new system, tool, and pack",
                    ].map((item, i) => (
                      <p key={i} className="font-syne text-white/50 text-base sm:text-lg leading-relaxed pl-6 border-l border-[#D90019]/30 hover:border-[#D90019] hover:text-white/80 transition-all duration-300">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            WHAT FOUNDERS ARE BUILDING
        ═══════════════════════════════════════════ */}
        <section id="proof" className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#D90019]/5 rounded-full blur-[200px] pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">Inside Right Now</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight">
                What founders<br />
                <span className="text-[#D90019]">are building.</span>
              </h2>
            </Reveal>

            <div className="mt-20 sm:mt-28 space-y-0">
              {[
                "AI answering calls and booking jobs",
                "Systems that follow up with every lead instantly",
                "Automated quoting tools that never sleep",
                "Content engines running on autopilot daily",
                "Backend workflows replacing admin work entirely",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="border-t border-white/5 py-6 sm:py-8 flex items-center gap-6 group hover:pl-4 transition-all duration-500">
                    <span className="font-mono text-[#D90019]/40 text-xs tracking-widest group-hover:text-[#D90019] transition-colors">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-syne text-white/30 text-lg sm:text-xl font-medium group-hover:text-white transition-colors duration-500">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.5}>
              <p className="mt-16 font-mono text-white/15 text-[10px] font-bold tracking-[0.4em] uppercase">
                This is not theory. This is already happening.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            WHO / WHO NOT
        ═══════════════════════════════════════════ */}
        <section id="who-its-for" className="border-t border-white/5">
          <div className="grid md:grid-cols-2">
            {/* FOR */}
            <div className="px-6 md:px-12 py-24 sm:py-32 border-b md:border-b-0 md:border-r border-white/5">
              <Reveal>
                <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">This is for you if</p>
                <div className="space-y-6 mt-12">
                  {[
                    "You own a local service business",
                    "You run an agency",
                    "You want leverage, not just tools",
                    "You're using AI but not getting results",
                  ].map((item, i) => (
                    <p key={i} className="font-syne text-white/60 text-base sm:text-lg font-medium leading-relaxed pl-6 border-l-2 border-[#D90019] hover:text-white transition-colors duration-300">
                      {item}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* NOT FOR */}
            <div className="px-6 md:px-12 py-24 sm:py-32 bg-white/[0.02]">
              <Reveal delay={0.1}>
                <p className="font-mono text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase mb-6">This is not for you if</p>
                <div className="space-y-6 mt-12">
                  {[
                    "You want shortcuts without work",
                    "You just want to \"learn AI\"",
                    "You won't implement",
                  ].map((item, i) => (
                    <p key={i} className="font-syne text-white/15 text-base sm:text-lg font-medium leading-relaxed pl-6 border-l border-white/5">
                      {item}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">How It Works</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight">
                Three steps.<br />That&apos;s it.
              </h2>
            </Reveal>

            <div className="mt-20 sm:mt-28 grid grid-cols-3 gap-px">
              {[
                { n: "01", word: "Join Free", sub: "Get in the room and start learning" },
                { n: "02", word: "Go $97", sub: "Get the systems and start building" },
                { n: "03", word: "Go Inner Circle", sub: "Build directly with Mia and the team" },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-t border-white/10 pt-8 pr-8 group">
                    <span className="font-mono text-[#D90019]/40 text-[10px] tracking-[0.4em] block mb-3 group-hover:text-[#D90019] transition-colors">{s.n}</span>
                    <span className="font-bebas text-3xl sm:text-4xl uppercase text-white block mb-2 group-hover:translate-x-1 transition-transform duration-300">{s.word}</span>
                    <span className="font-syne text-white/25 text-sm">{s.sub}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            WHY NOW
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D90019]/8 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(48px,10vw,140px)] leading-[0.82] uppercase tracking-[-0.02em]">
                This is <span className="text-[#D90019]">early.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-16 sm:mt-24 max-w-xl space-y-6">
                <p className="font-syne text-white/30 text-lg sm:text-xl leading-relaxed">
                  Most people are still playing with AI.
                </p>
                <p className="font-syne text-white text-lg sm:text-xl font-bold leading-relaxed">
                  A few are building real systems with it.
                </p>
                <div className="w-16 h-px bg-[#D90019]/40 my-8"></div>
                <p className="font-syne text-[#D90019] text-2xl sm:text-3xl font-bold italic">
                  That gap is about to get very big.
                </p>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            OFFER
        ═══════════════════════════════════════════ */}
        <section id="join" className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">The Offer</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight">
                Pick your level.
              </h2>
            </Reveal>

            {/* 3-tier pricing cards */}
            <div className="mt-20 sm:mt-28 grid lg:grid-cols-3 gap-0">

              {/* FREE */}
              <Reveal delay={0.08}>
                <div className="bg-white/[0.02] border border-white/5 p-10 sm:p-12 group hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
                  <span className="font-mono text-white/30 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Start Here</span>
                  <h3 className="font-bebas text-3xl sm:text-4xl uppercase mb-2">Free Community</h3>
                  <span className="font-bebas text-5xl sm:text-6xl text-white block mb-6">$0</span>
                  <div className="w-12 h-px bg-white/10 mb-6"></div>
                  <div className="space-y-3 flex-1 mb-10">
                    {["Community feed access", "Real builds + use cases", "Ask questions anytime", "Weekly AI breakdowns", "Network with operators"].map((item, i) => (
                      <p key={i} className="font-syne text-white/35 text-sm leading-relaxed">{item}</p>
                    ))}
                  </div>
                  <a href="#join" className="group/btn font-bebas text-xl tracking-[0.15em] text-white border border-white/20 px-8 py-4 text-center hover:bg-white hover:text-black transition-all duration-300 block">
                    Join Free
                  </a>
                </div>
              </Reveal>

              {/* $97 */}
              <Reveal delay={0.16}>
                <div className="bg-white/[0.04] border border-white/10 p-10 sm:p-12 group hover:bg-white/[0.06] transition-all duration-500 h-full flex flex-col relative">
                  <span className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Most Popular</span>
                  <h3 className="font-bebas text-3xl sm:text-4xl uppercase mb-2">AI System Packs</h3>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-bebas text-5xl sm:text-6xl text-white">$97</span>
                    <span className="font-mono text-white/30 text-xs">/mo</span>
                  </div>
                  <div className="w-12 h-px bg-[#D90019]/30 mb-6"></div>
                  <div className="space-y-3 flex-1 mb-10">
                    {["Everything in Free", "Full AI system packs by industry", "Copy-paste prompts + automations", "Step-by-step guides", "New packs monthly", "Private members channel"].map((item, i) => (
                      <p key={i} className="font-syne text-white/45 text-sm leading-relaxed">{item}</p>
                    ))}
                  </div>
                  <a href="#join" className="group/btn font-bebas text-xl tracking-[0.15em] bg-white text-black px-8 py-4 text-center hover:bg-[#D90019] hover:text-white transition-all duration-300 block">
                    Get System Packs
                  </a>
                </div>
              </Reveal>

              {/* $997 Inner Circle */}
              <Reveal delay={0.24}>
                <div className="bg-[#D90019]/[0.06] border border-[#D90019]/20 p-10 sm:p-12 group hover:bg-[#D90019]/[0.1] transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-px bg-[#D90019]"></div>
                  <span className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Inner Circle</span>
                  <h3 className="font-bebas text-3xl sm:text-4xl uppercase mb-2">Direct Access</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-bebas text-5xl sm:text-6xl text-[#D90019]">$997</span>
                    <span className="font-mono text-white/30 text-xs">/mo</span>
                  </div>
                  <p className="font-syne text-white/30 text-xs italic mb-6">Work directly with Mia + the team</p>
                  <div className="w-12 h-px bg-[#D90019]/30 mb-6"></div>
                  <div className="space-y-3 flex-1 mb-10">
                    {["Everything in $97", "Direct access to Mia + team", "Weekly live build sessions", "System reviews + fixes", "Custom implementation support", "Priority builds for your business", "Private inner circle group", "First access to everything new"].map((item, i) => (
                      <p key={i} className="font-syne text-white/50 text-sm leading-relaxed">{item}</p>
                    ))}
                  </div>
                  <a href="#join" className="group/btn font-bebas text-xl tracking-[0.15em] bg-[#D90019] text-white px-8 py-4 text-center hover:bg-white hover:text-black transition-all duration-300 block">
                    Apply for Inner Circle
                  </a>
                </div>
              </Reveal>

            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════
            FINAL CLOSE
        ═══════════════════════════════════════════ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 border-t border-white/5 relative overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(36px,6vw,80px)] leading-[0.9] uppercase tracking-tight max-w-4xl">
                You can keep using AI for small tasks.
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-bebas text-[clamp(36px,6vw,80px)] leading-[0.9] uppercase tracking-tight max-w-4xl mt-4 text-[#D90019]">
                Or you can use it to run your business.
              </h2>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-20 sm:mt-28 max-w-md">
                <div className="border-l border-white/10 pl-6">
                  <p className="font-syne text-white/25 text-sm leading-relaxed">
                    If you&apos;ve had the thought:
                  </p>
                  <p className="font-syne text-white text-xl font-bold mt-3 leading-snug">
                    &ldquo;I could build something crazy with this...&rdquo;
                  </p>
                  <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.3em] uppercase mt-5">
                    This is where you actually do it.
                  </p>
                </div>

                <a href="#join" className="group mt-12 inline-flex font-bebas text-xl tracking-[0.15em] text-[#D90019] items-center gap-3 hover:gap-5 transition-all duration-300 border-b border-[#D90019]/30 pb-1 hover:border-[#D90019]">
                  Join Now <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 md:px-12 py-12">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-8">
            <span className="font-bebas text-xl tracking-[0.15em]">
              FOUNDERS<span className="text-[#D90019]">OTF</span>
            </span>
            <span className="text-white/10 text-xs">|</span>
            <Link href="/" className="font-mono text-white/20 hover:text-white/50 transition-colors text-[10px] font-bold tracking-[0.3em] uppercase">
              ElianaTech
            </Link>
          </div>
          <span className="font-mono text-white/15 text-[10px] font-bold tracking-[0.3em] uppercase">&copy; 2026</span>
        </div>
      </footer>


      <style jsx global>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-fade-in-heading {
          animation: fadeIn 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-sub {
          animation: fadeIn 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-fade-in-buttons {
          animation: fadeIn 1s ease-out 0.7s forwards;
          opacity: 0;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .font-bebas {
          font-family: var(--font-bebas-neue), cursive;
        }
        .font-syne {
          font-family: var(--font-syne), sans-serif;
        }
      `}</style>
    </div>
  )
}
