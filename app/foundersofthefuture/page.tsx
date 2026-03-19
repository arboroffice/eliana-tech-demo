"use client"

import Link from "next/link"
import { ArrowRight, Check, X, Cpu, Users, Package, Wrench, Rocket, Target, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function FoundersOfTheFuturePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#FAFAF8] text-[#0C0C0C] font-mono overflow-x-hidden selection:bg-[#D90019] selection:text-white">

      {/* ═══ NAVIGATION ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <Link href="/foundersofthefuture" className="font-bebas text-2xl tracking-[0.12em] text-[#0C0C0C]">
          FOUNDERS<span className="text-[#D90019]">OTF</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#what-you-get" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 hover:text-[#D90019] transition-colors">What You Get</a>
          <a href="#who-its-for" className="text-[11px] uppercase tracking-widest font-bold text-gray-500 hover:text-[#D90019] transition-colors">Who It&apos;s For</a>
          <a href="#offer" className="bg-[#D90019] text-white text-[11px] uppercase tracking-widest font-bold px-6 py-3 hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20">
            Join the Community
          </a>
        </div>
        <a href="#offer" className="md:hidden bg-[#D90019] text-white p-2 rounded-full shadow-lg shadow-red-500/20">
          <ArrowRight size={20} />
        </a>
      </nav>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D90019_0%,transparent_70%)] opacity-10"></div>
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="inline-block text-[#D90019] text-xs font-bold tracking-[0.3em] uppercase mb-8 border border-red-100 px-4 py-1.5 rounded-full bg-red-50/50 animate-fade-in">
              AI Systems for Real Founders
            </p>
            <h1 className="font-bebas text-[clamp(48px,10vw,120px)] leading-[0.85] uppercase mb-10 tracking-tight animate-fade-in-heading">
              Stop Playing<br />
              <span className="text-gray-400">With AI.</span><br />
              <span className="text-[#D90019]">Start Building Systems<br />That Make Money</span>
            </h1>
            <p className="text-gray-600 text-[clamp(16px,1.5vw,21px)] leading-relaxed max-w-2xl mx-auto mb-12 font-medium animate-fade-in-subheading">
              Use tools like Claude to run your backend, capture leads, and automate your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-buttons">
              <a href="#offer" className="w-full sm:w-auto font-bebas text-2xl tracking-wider bg-[#D90019] text-white px-10 py-5 hover:bg-black transition-all hover:-translate-y-1 shadow-2xl shadow-red-500/30 flex items-center justify-center gap-3">
                Join the Community <ArrowRight size={22} strokeWidth={2.5} />
              </a>
              <a href="#what-founders-build" className="w-full sm:w-auto font-bebas text-2xl tracking-wider text-[#0C0C0C] px-10 py-5 border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group">
                See What Founders Are Building <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
            <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
          </div>
        </section>

        {/* ═══ THE PROBLEM ═══ */}
        <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px]"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Problem</p>
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase mb-16">
              Right Now Most People<br />
              Are Using AI <span className="text-[#D90019]">Wrong</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <p className="text-gray-400 text-xl font-medium mb-10 leading-relaxed">They:</p>
                <ul className="space-y-6 mb-16">
                  {[
                    "Generate content",
                    "Ask random questions",
                    "Test prompts",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="mt-1 w-7 h-7 rounded-sm border border-red-600/30 flex items-center justify-center text-[#D90019] group-hover:bg-[#D90019] group-hover:text-white transition-all duration-300">
                        <X size={16} strokeWidth={3} />
                      </div>
                      <span className="text-xl sm:text-2xl text-gray-300 font-medium tracking-tight leading-none">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                  And then go right back to doing everything manually.
                </p>
              </div>

              <div className="relative">
                <div className="bg-[#0C0C0C] border border-white/10 p-12 flex flex-col justify-center shadow-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D90019] to-transparent"></div>
                  <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-6 text-xs">Meanwhile...</p>
                  <p className="text-2xl sm:text-3xl font-bold leading-tight mb-8 tracking-tight">
                    A small group of founders are building systems that:
                  </p>
                  <ul className="space-y-5">
                    {[
                      "Answer their phones",
                      "Follow up with every lead",
                      "Send quotes automatically",
                      "Run parts of their business daily",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-lg text-gray-300 font-medium">
                        <Check className="text-[#D90019] shrink-0" size={18} strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="h-px w-20 bg-red-600/30 my-8"></div>
                  <p className="text-white font-bebas text-3xl tracking-wide">
                    Same tools. <span className="text-[#D90019]">Different approach.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-32 px-6 bg-white border-b border-gray-100 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-gray-50/70 leading-none pointer-events-none select-none -z-0 whitespace-nowrap italic">
            OPERATOR
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Shift</p>
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-[0.85] uppercase mb-12">
              AI Is Not<br />Just A Tool
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-4xl sm:text-5xl font-bebas text-[#D90019] tracking-wide mb-12">
                It&apos;s an operator.
              </p>
              <p className="text-gray-500 text-xl sm:text-2xl font-medium leading-relaxed mb-8">
                Once you understand that...
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-bold">
                <span className="text-gray-400 line-through">you stop chatting with it</span>
                <ArrowRight className="text-[#D90019] hidden sm:block" size={24} />
                <span className="text-[#0C0C0C]">you start building with it</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT THIS IS ═══ */}
        <section className="py-32 px-6 bg-[#FAFAF8]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">What This Is</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-[0.9] uppercase mb-8">
                A Community For<br />
                <span className="text-[#D90019]">AI-Native Founders</span>
              </h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Inside, you don&apos;t get theory. You get:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
              {[
                { title: "Real Workflows", desc: "Step-by-step systems you can follow and implement in your business today." },
                { title: "Real Systems", desc: "Proven automation stacks that founders are running right now to make money." },
                { title: "Real Use Cases", desc: "Stuff you can copy and run. No theory. No fluff. Just what works." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-12 group transition-all duration-500 hover:bg-black hover:text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#D90019] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <span className="font-bebas text-[120px] text-red-600/5 absolute -bottom-6 -right-4 leading-none group-hover:text-red-600/10 pointer-events-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-[#D90019] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-400 font-medium text-lg leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHAT YOU GET ═══ */}
        <section id="what-you-get" className="py-32 px-6 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">What You Get</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase">
                Four Levels Of <span className="text-[#D90019]">Access</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {/* 1. Community */}
              <div className="p-12 border border-gray-100 group transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_30px_60px_-15px_rgba(217,0,25,0.1)] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center">
                    <Users className="text-[#D90019]" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D90019] block">01</span>
                    <h3 className="text-2xl font-bold tracking-tight">Community</h3>
                  </div>
                </div>
                <ul className="space-y-4">
                  {[
                    "Founders sharing real builds daily",
                    "See exactly how others are using AI",
                    "Ask questions and get answers fast",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <Check className="text-[#D90019] shrink-0 mt-1" size={16} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. AI System Packs */}
              <div className="p-12 border border-gray-100 group transition-all duration-500 hover:border-red-600/40 hover:shadow-[0_30px_60px_-15px_rgba(217,0,25,0.1)] relative overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center">
                    <Package className="text-[#D90019]" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D90019] block">02</span>
                    <h3 className="text-2xl font-bold tracking-tight">AI System Packs</h3>
                  </div>
                </div>
                <p className="text-gray-500 font-medium mb-6">Plug-and-play systems by industry. Each pack shows you:</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "What to build",
                    "How it works",
                    "Exact prompts + structure",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <ChevronRight className="text-[#D90019] shrink-0 mt-1" size={14} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Lead capture + follow-up",
                    "AI receptionist + missed call text back",
                    "Instant estimate generators",
                    "CRM + backend automations",
                  ].map((item, i) => (
                    <span key={i} className="text-xs font-bold tracking-wide uppercase text-gray-400 bg-gray-50 border border-gray-100 px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3. Build With You */}
              <div className="p-12 bg-black text-white group transition-all duration-500 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                <div className="absolute top-0 left-0 bg-[#D90019] text-white text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2">
                  Upgrade
                </div>
                <div className="flex items-center gap-4 mb-8 mt-4">
                  <div className="w-12 h-12 bg-red-600/20 border border-red-600/30 flex items-center justify-center">
                    <Wrench className="text-[#D90019]" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D90019] block">03</span>
                    <h3 className="text-2xl font-bold tracking-tight">Build With You</h3>
                  </div>
                </div>
                <p className="text-gray-400 font-medium mb-6">If you don&apos;t want to figure it out alone:</p>
                <ul className="space-y-4">
                  {[
                    "We build it with you",
                    "Step-by-step",
                    "Get it live fast",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 font-medium">
                      <Check className="text-[#D90019] shrink-0 mt-1" size={16} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Done For You */}
              <div className="p-12 border-2 border-[#D90019] group transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(217,0,25,0.15)] relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#D90019] text-white text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2">
                  Application Only
                </div>
                <div className="flex items-center gap-4 mb-8 mt-4">
                  <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center">
                    <Rocket className="text-[#D90019]" size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#D90019] block">04</span>
                    <h3 className="text-2xl font-bold tracking-tight">Done For You</h3>
                  </div>
                </div>
                <p className="text-gray-500 font-medium mb-6">For operators who want everything handled:</p>
                <ul className="space-y-4">
                  {[
                    "Full system installs",
                    "Custom workflows",
                    "Built around your business",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 font-medium">
                      <Check className="text-[#D90019] shrink-0 mt-1" size={16} strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT FOUNDERS ARE BUILDING ═══ */}
        <section id="what-founders-build" className="bg-black py-32 px-6 overflow-hidden relative">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-sm">Inside Right Now</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-[0.85] uppercase text-white">
                What Founders<br />
                <span className="text-[#D90019]">Are Building</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "AI answering calls and booking jobs",
                "Systems that follow up instantly",
                "Automated quoting tools",
                "Content engines running daily",
                "Backend workflows replacing admin work",
              ].map((item, i) => (
                <div key={i} className="border border-white/10 p-8 group hover:border-red-600/40 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Cpu className="text-[#D90019] shrink-0 mt-1" size={20} />
                    <span className="text-white text-lg font-medium">{item}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-gray-500 font-bold tracking-[0.2em] uppercase text-xs">
                This is not theory. <span className="text-[#D90019]">This is already happening.</span>
              </p>
            </div>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR / NOT FOR ═══ */}
        <section id="who-its-for" className="py-32 px-6 bg-[#FAFAF8] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* FOR */}
              <div>
                <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">Who This Is For</p>
                <h2 className="font-bebas text-5xl sm:text-7xl leading-[0.9] uppercase mb-12">
                  Built For <span className="text-[#D90019]">Operators</span>
                </h2>
                <ul className="space-y-6">
                  {[
                    "Local service business owners",
                    "Agency owners",
                    "Operators who want leverage",
                    "Founders already using AI but not getting results",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="mt-1 w-7 h-7 rounded-sm bg-[#D90019] flex items-center justify-center text-white">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-xl text-[#0C0C0C] font-medium tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NOT FOR */}
              <div>
                <p className="text-gray-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm">Who This Is Not For</p>
                <h2 className="font-bebas text-5xl sm:text-7xl leading-[0.9] uppercase mb-12 text-gray-300">
                  Don&apos;t Join If
                </h2>
                <ul className="space-y-6">
                  {[
                    "You're looking for shortcuts without work",
                    "You just want to \"learn AI\"",
                    "You won't implement",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-5 group">
                      <div className="mt-1 w-7 h-7 rounded-sm border border-gray-200 flex items-center justify-center text-gray-300">
                        <X size={16} strokeWidth={3} />
                      </div>
                      <span className="text-xl text-gray-400 font-medium tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-32 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">How It Works</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase">
                Four Steps. <span className="text-[#D90019]">That&apos;s It.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Join", desc: "Get into the community" },
                { step: "02", title: "Pick", desc: "Choose a system or pack" },
                { step: "03", title: "Copy", desc: "Copy and launch it" },
                { step: "04", title: "Upgrade", desc: "Get help if you want it" },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <span className="font-bebas text-[100px] text-red-600/10 leading-none block group-hover:text-red-600/20 transition-colors duration-500">
                    {item.step}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#D90019] transition-colors -mt-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 font-medium">{item.desc}</p>
                  {i < 3 && (
                    <ArrowRight className="text-gray-200 mx-auto mt-6 hidden md:block" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY NOW ═══ */}
        <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/5 blur-[150px]"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">Why Now</p>
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-[0.85] uppercase mb-12">
              This Is <span className="text-[#D90019]">Early</span>
            </h2>
            <p className="text-gray-400 text-xl sm:text-2xl font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Most people are still playing with AI.
            </p>
            <p className="text-white text-xl sm:text-2xl font-bold leading-relaxed max-w-2xl mx-auto mb-8">
              A few are building real systems with it.
            </p>
            <div className="h-px w-20 bg-red-600/40 mx-auto my-12"></div>
            <p className="font-bebas text-4xl sm:text-5xl text-[#D90019] tracking-wide">
              That gap is about to get very big.
            </p>
          </div>
        </section>

        {/* ═══ OFFER ═══ */}
        <section id="offer" className="py-32 px-6 bg-[#FAFAF8] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Offer</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase">
                Pick Your <span className="text-[#D90019]">Level</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Community Access", tag: "Low Monthly", desc: "Real founders. Real builds. Real answers.", highlight: false },
                { title: "AI System Packs", tag: "One-Time Purchase", desc: "Plug-and-play systems by industry.", highlight: false },
                { title: "Build With You", tag: "Hands-On Help", desc: "We build it with you step-by-step.", highlight: true },
                { title: "Done For You", tag: "Full Implementation", desc: "Everything handled. Application only.", highlight: false },
              ].map((tier, i) => (
                <div key={i} className={`p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 ${tier.highlight ? 'bg-black text-white shadow-[0_30px_60px_-15px_rgba(217,0,25,0.2)]' : 'bg-white border border-gray-100 hover:border-red-600/30'}`}>
                  <span className={`text-[10px] font-bold tracking-[0.3em] uppercase mb-4 ${tier.highlight ? 'text-[#D90019]' : 'text-[#D90019]'}`}>
                    {tier.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{tier.title}</h3>
                  <p className={`font-medium leading-relaxed flex-1 ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CLOSE ═══ */}
        <section className="py-40 px-6 bg-white overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-gray-50/70 leading-none pointer-events-none select-none -z-10 whitespace-nowrap italic">
            BUILD SOMETHING
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl leading-[0.85] uppercase mb-8 tracking-tight">
              You Can Keep Using AI<br />
              For Small Tasks.<br />
              <span className="text-[#D90019]">Or You Can Use It<br />To Run Your Business.</span>
            </h2>

            <div className="flex flex-col items-center gap-10 mt-16">
              <a href="#offer" className="group relative inline-flex font-bebas text-3xl sm:text-4xl tracking-[0.1em] bg-[#D90019] text-white px-16 py-8 hover:bg-black transition-all hover:-translate-y-2 shadow-[0_20px_50px_rgba(217,0,25,0.3)] items-center justify-center gap-6 overflow-hidden">
                <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                Join the Community <ArrowRight size={36} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
              </a>

              <div className="mt-8 max-w-md mx-auto border-l-2 border-[#D90019] pl-6 text-left">
                <p className="text-gray-500 text-sm font-medium leading-relaxed italic">
                  If you&apos;ve had the thought: <span className="text-[#0C0C0C] font-bold not-italic">&ldquo;I could build something crazy with this...&rdquo;</span>
                </p>
                <p className="text-[#D90019] font-bold mt-3 text-sm tracking-wide">
                  This is where you actually do it.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-black text-white pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div>
              <span className="font-bebas text-4xl tracking-[0.1em] block mb-4">
                FOUNDERS<span className="text-[#D90019]">OTF</span>
              </span>
              <p className="text-gray-500 font-medium text-sm max-w-xs leading-relaxed">
                A community for founders who build with AI. Powered by ElianaTech.
              </p>
            </div>
            <div className="flex gap-12">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-[#D90019] mb-2">Navigate</span>
                <a href="#what-you-get" className="text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">What You Get</a>
                <a href="#who-its-for" className="text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Who It&apos;s For</a>
                <a href="#offer" className="text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Join</a>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-[10px] uppercase tracking-[0.3em] text-[#D90019] mb-2">Ecosystem</span>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">ElianaTech</Link>
                <a href="mailto:elianatech@yahoo.com" className="text-gray-400 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Contact</a>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-gray-600 text-[10px] font-bold tracking-[0.4em] uppercase">&copy; 2026 FOUNDERS OF THE FUTURE &mdash; AN ELIANATECH COMMUNITY</span>
            <p className="text-gray-700 text-[10px] font-bold tracking-widest uppercase">BUILT FOR OPERATORS</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
          display: flex;
          width: fit-content;
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-in-heading {
          animation: fadeIn 1s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-subheading {
          animation: fadeIn 1s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-buttons {
          animation: fadeIn 1s ease-out 0.6s forwards;
          opacity: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .font-bebas {
          font-family: var(--font-bebas-neue), cursive;
        }
      `}</style>
    </div>
  )
}
