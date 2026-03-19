"use client"

import Link from "next/link"
import { ArrowRight, Check, X, Phone, MessageSquare, Calendar, CreditCard, BarChart3, Clock, Zap, Shield, Zap as ZapIcon, Bot, DollarSign, Users, FileText, Mail, Star, Headphones, Send, Database, Globe, Wrench, TrendingUp, CircleDot, Target } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#FAFAF8] text-[#0C0C0C] font-sans overflow-x-hidden selection:bg-[#D90019] selection:text-white">
      
      {/* ═══ NAVIGATION ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <Link href="/" className="font-bebas text-2xl tracking-[0.12em] text-[#0C0C0C]">
          ELIANA<span className="text-[#D90019]">TECH</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/audit" className="bg-[#D90019] text-white text-[11px] uppercase tracking-widest font-bold px-6 py-3 hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20">
            Free AI Audit
          </Link>
        </div>
        <Link href="/audit" className="md:hidden bg-[#D90019] text-white p-1.5 rounded-full shadow-lg shadow-red-500/20">
          <ArrowRight size={16} />
        </Link>
      </nav>

      <main>
        {/* ═══ HERO SECTION ═══ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden bg-white">
          {/* Background Grid Accent */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="inline-block text-[#D90019] text-[10px] font-bold tracking-[0.4em] uppercase mb-10 border-b-2 border-red-600 pb-2">
              The AI Infrastructure Layer
            </p>
            <h1 className="font-bebas text-[clamp(60px,14vw,180px)] leading-[0.8] uppercase mb-12 tracking-tighter text-black">
              Own Your AI.<br />
              <span className="text-[#D90019]">Run Without You.</span>
            </h1>
            <p className="text-gray-500 text-[clamp(18px,2vw,24px)] leading-tight max-w-3xl mx-auto mb-16 font-medium tracking-tight">
              We install AI systems that capture leads, close jobs, and run operations automatically. <br className="hidden sm:block" />
              Stop renting tools — start owning your workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/audit" className="w-full sm:w-auto font-bebas text-3xl tracking-widest bg-[#D90019] text-white px-12 py-6 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-red-500/20 flex items-center justify-center gap-4">
                Get Your Free AI Audit <ArrowRight size={28} strokeWidth={3} />
              </Link>
              <Link href="#process" className="w-full sm:w-auto font-bebas text-3xl tracking-widest text-black px-12 py-6 border-b-4 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-4 group">
                See How It Works <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ PROOF STRIP (FIXED & STRONG) ═══ */}
        <section className="bg-black py-8 overflow-hidden border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-4">
              {[
                "Lead response < 60s",
                "First system live in 14 days",
                "Zero missed calls",
                "Automated follow-up",
                "Payments handled automatically",
                "Operations that run without you"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white font-bebas text-lg tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D90019]"></span>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ LIVING BUSINESS DIAGRAM (REDESIGNED) ═══ */}
        <section className="bg-[#FAF9F6] border-y border-[#EAE9E4] py-24 sm:py-32 px-6 overflow-hidden relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D90019]/5 rounded-full blur-[160px]"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 sm:mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">Infrastructure</p>
              <h2 className="font-bebas text-5xl sm:text-7xl lg:text-9xl leading-[0.85] uppercase text-[#0C0C0C] tracking-tight">
                Your Business.<br />
                <span className="text-[#D90019]">Fully Alive.</span>
              </h2>
              <p className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto mt-8 leading-relaxed italic">
                One lead triggers everything.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-12 text-[#D90019] font-bebas text-xl sm:text-2xl uppercase tracking-widest">
                {["Lead comes in", "AI responds instantly", "Quote gets built", "Follow-ups go out", "Job gets scheduled", "Payment gets collected"].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span>{step}</span>
                    {i < 5 && <span className="text-gray-200 hidden sm:block">/</span>}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 mt-8 text-sm font-bold uppercase tracking-widest">All without you touching it.</p>
            </div>

            {/* THE DIAGRAM */}
            <div className="relative max-w-5xl mx-auto">
              {/* ── CENTER: AI Brain ── */}
              <div className="flex justify-center mb-12 sm:mb-0 relative z-30">
                <div className="diagram-brain w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-white shadow-[0_25px_60px_rgba(217,0,25,0.2)] border border-[#EAE9E4] flex flex-col items-center justify-center text-center relative overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D90019]/5 to-transparent rounded-full"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-[#D90019]/10 animate-diagram-pulse-light"></div>
                  
                  <div className="relative z-10 flex flex-col items-center px-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black flex items-center justify-center mb-4 shadow-xl">
                      <Bot className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                    <span className="font-bebas text-3xl sm:text-4xl tracking-wide text-black leading-tight">AI Brain</span>
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#D90019] mt-3 whitespace-nowrap">Active Logic Layer</span>
                  </div>
                </div>
              </div>

              {/* ── CONNECTION LINES (SVG) ── */}
              <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 1000 700" fill="none" preserveAspectRatio="xMidYMid meet">
                  {/* Inputs to Brain */}
                  <path d="M220 120 Q 400 120 500 220" stroke="#D90019" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.2">
                    <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M780 120 Q 600 120 500 220" stroke="#D90019" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.2">
                    <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Brain to tools - Light mode accents */}
                  <path d="M420 320 Q 300 380 150 450" stroke="#0C0C0C" strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />
                  <path d="M400 350 Q 250 420 100 550" stroke="#0C0C0C" strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />
                  <path d="M580 320 Q 700 380 850 450" stroke="#0C0C0C" strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />
                  <path d="M600 350 Q 750 420 900 550" stroke="#0C0C0C" strokeWidth="1" strokeDasharray="4 4" opacity="0.08" />

                  {/* Animated flow dots */}
                  <circle r="4" fill="#D90019">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M220 120 Q 400 120 500 220" />
                  </circle>
                  <circle r="4" fill="#D90019">
                    <animateMotion dur="2.5s" repeatCount="indefinite" path="M780 120 Q 600 120 500 220" />
                  </circle>
                </svg>
              </div>

              {/* ── INPUTS (TOP) ── */}
              <div className="grid grid-cols-2 gap-4 sm:gap-16 mt-8 sm:-mt-16 mb-20 relative z-20">
                <div className="flex justify-center sm:justify-end">
                  <div className="bg-white border border-[#EAE9E4] p-4 sm:p-8 w-[140px] sm:w-56 shadow-sm hover:shadow-xl hover:border-[#D90019]/20 transition-all duration-500 rounded-2xl group text-center">
                    <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D90019]/5 transition-colors">
                      <Phone className="text-[#D90019]" size={22} />
                    </div>
                    <span className="font-bebas text-lg sm:text-xl tracking-wide text-black block">Voice Inbox</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mt-2 block">Voice Capturing</span>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <div className="bg-white border border-[#EAE9E4] p-4 sm:p-8 w-[140px] sm:w-56 shadow-sm hover:shadow-xl hover:border-[#D90019]/20 transition-all duration-500 rounded-2xl group text-center">
                    <div className="w-12 h-12 rounded-full bg-[#FAF9F6] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D90019]/5 transition-colors">
                      <MessageSquare className="text-[#D90019]" size={22} />
                    </div>
                    <span className="font-bebas text-lg sm:text-xl tracking-wide text-black block">Text / Lead</span>
                    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-gray-400 mt-2 block">Instant Response</span>
                  </div>
                </div>
              </div>

              {/* ── LIVE FEED (CENTER) ── */}
              <div className="max-w-lg mx-auto mb-20 relative z-20">
                <div className="bg-white border border-[#EAE9E4] rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-[#0C0C0C] px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <span className="w-2 h-2 rounded-full bg-[#D90019] animate-pulse"></span>
                       <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">LIVE SYSTEM ACTIVITY</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/30 font-mono">STATUS: RUNNING</span>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    {[
                      { icon: Phone, color: "text-green-500", text: "Voice lead captured — Auto-qualified" },
                      { icon: Bot, color: "text-[#D90019]", text: "Automated quote generated for Sarah M." },
                      { icon: Send, color: "text-blue-500", text: "Follow-up sent via SMS" },
                      { icon: Calendar, color: "text-purple-500", text: "Job scheduled for Mar 22" },
                      { icon: DollarSign, color: "text-emerald-500", text: "Payment confirmed — $2,400" },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center gap-4 animate-diagram-feed-row`} style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className={`w-8 h-8 rounded-lg bg-[#FAF9F6] flex items-center justify-center shrink-0`}>
                          <row.icon size={14} className={row.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-black tracking-tight">{row.text}</p>
                        </div>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-gray-200">OK</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── TOOLS (BOTTOM) — Shortened ── */}
              <div className="relative z-20">
                <div className="text-center mb-12">
                   <h3 className="font-bebas text-4xl text-black mb-2">Connects to Your Stack</h3>
                   <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">If you use it, we connect it.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-4xl mx-auto">
                  {[
                    "Stripe / QuickBooks", "GoHighLevel", "HubSpot", "Jobber", "ServiceTitan", "Twilio", "Gmail", "Zapier / n8n"
                  ].map((name, i) => (
                    <div key={i} className="bg-white border border-[#EAE9E4] p-6 text-center rounded-xl shadow-sm hover:shadow-md transition-all group">
                      <span className="font-bebas text-xl sm:text-2xl tracking-wide text-black group-hover:text-[#D90019] transition-colors">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── STATS (FOOTER) ── */}
              <div className="mt-16 sm:mt-24 grid grid-cols-3 gap-8 sm:gap-16">
                 {[
                   { label: "Status", value: "24/7", color: "text-[#D90019]" },
                   { label: "Response", value: "0.8s", color: "text-black" },
                   { label: "Outcome", value: "Profit", color: "text-green-600" },
                 ].map((stat, i) => (
                   <div key={i} className="text-center border-t border-[#EAE9E4] pt-8">
                      <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-400 block mb-2">{stat.label}</span>
                      <span className={`font-bebas text-4xl sm:text-6xl ${stat.color}`}>{stat.value}</span>
                   </div>
                 ))}
              </div>

            </div>
          </div>
        </section>

        {/* ═══ WHY THIS IS DIFFERENT ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-8 text-xs font-mono">The Edge</p>
                <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-[0.8] uppercase text-[#0C0C0C] mb-12 tracking-tight">
                  Most Businesses Are <span className="text-gray-300">Renting AI.</span>
                </h2>
                <div className="space-y-6 max-w-lg">
                  <div className="flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <X size={20} /> monthly subscriptions
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <X size={20} /> locked systems
                  </div>
                  <div className="flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-sm">
                    <X size={20} /> no control
                  </div>
                </div>
              </div>
              <div className="bg-[#FAF9F6] p-12 sm:p-20 border-l-8 border-[#D90019] shadow-2xl relative">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Shield size={120} />
                </div>
                <h3 className="font-bebas text-5xl sm:text-7xl uppercase mb-10 text-black tracking-tight leading-none">
                  We build systems <br /><span className="text-[#D90019]">you own.</span>
                </h3>
                <ul className="space-y-8 mb-12">
                   {[
                     { label: "Your workflows", desc: "Built for your specific operational logic." },
                     { label: "Your data", desc: "You maintain full custody and privacy." },
                     { label: "Your automation layer", desc: "No dependency on external black boxes." }
                   ].map((item, i) => (
                     <li key={i} className="flex gap-6">
                        <Check className="text-[#D90019] shrink-0 mt-1" size={24} />
                        <div>
                           <p className="text-black font-bebas text-2xl uppercase tracking-widest">{item.label}</p>
                           <p className="text-gray-500 font-medium">{item.desc}</p>
                        </div>
                     </li>
                   ))}
                </ul>
                <p className="text-black font-black uppercase tracking-[0.3em] text-[10px]">Zero Dependency Architecture</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE SINGLE OFFER ═══ */}
        <section id="offer" className="py-24 sm:py-48 px-6 bg-[#050505] overflow-hidden relative border-y border-white/5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D90019]/5 blur-[160px]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-8 text-xs font-mono">The AI Department</p>
            <h2 className="font-bebas text-7xl sm:text-9xl lg:text-[140px] leading-[0.85] uppercase text-white mb-16 tracking-tighter">
              The Living <br />
              <span className="text-[#D90019]">Business.</span>
            </h2>
            
            <div className="bg-white p-8 sm:p-20 text-left border-t-8 border-[#D90019] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-12 opacity-[0.03] select-none pointer-events-none">
                  <TrendingUp size={300} />
               </div>
               
               <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
                  <div className="flex-1">
                     <div className="inline-block bg-[#FAF9F6] px-4 py-2 border border-gray-100 rounded-lg mb-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Powered by 100+ Industry Playbooks</span>
                     </div>
                     <h3 className="font-bebas text-5xl text-black mb-6 uppercase">We become your <br /><span className="text-[#D90019]">AI Department.</span></h3>
                     <p className="text-gray-500 text-lg font-medium leading-relaxed italic">
                       We leverage our library of proven industry blueprints to install your infrastructure fast. One build. Infinite evolution.
                     </p>
                  </div>
                  <div className="shrink-0">
                     <span className="text-gray-400 font-bold tracking-widest uppercase text-[10px] block mb-2 font-mono">Infrastructure Install</span>
                     <div className="font-bebas text-7xl text-black leading-none">$10,000</div>
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#D90019] mt-2 block">+ Monthly Maintenance</span>
                  </div>
               </div>

               <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 border-t border-gray-100 pt-16 mb-16">
                  {[
                    { label: "Active Logic Layer", desc: "The 'Brain' that runs your operational logic." },
                    { label: "Lead Response", desc: "Instant response across text, voice, and web." },
                    { label: "Proven Blueprints", desc: "Leveraging our tested Industry Playbooks." },
                    { label: "Payment Logic", desc: "Automated billing and revenue tracking." },
                    { label: "Tool Integration", desc: "Full connection to your existing software." },
                    { label: "Monthly Support", desc: "We host, maintain, and upgrade your system." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                       <Check className="text-[#D90019] shrink-0 mt-1" size={20} />
                       <div>
                          <p className="text-black font-bebas text-xl uppercase tracking-widest">{item.label}</p>
                          <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>

               <Link href="/audit" className="group relative inline-flex w-full font-bebas text-3xl sm:text-4xl tracking-[0.1em] bg-black text-white px-10 py-8 hover:bg-[#D90019] transition-all items-center justify-between shadow-2xl">
                 Secure Your Build <ArrowRight size={32} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA SECTION (CLEANED) ═══ */}
        <section className="py-40 px-6 bg-black text-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-[140px] leading-[0.8] uppercase mb-16 tracking-tighter">
              If your business <br />
              <span className="text-gray-600 italic">depends on you...</span><br />
              <span className="text-[#D90019]">You have a job.</span>
            </h2>
            
            <p className="text-white/60 text-2xl font-bebas tracking-[0.4em] uppercase mb-20">We fix that.</p>
            
            <div className="flex flex-col items-center gap-10">
               <Link href="/audit" className="group relative inline-flex font-bebas text-4xl sm:text-6xl tracking-[0.1em] bg-[#D90019] text-white px-20 py-12 hover:bg-white hover:text-black transition-all items-center justify-center gap-8 shadow-[0_30px_100px_rgba(217,0,25,0.4)]">
                 Get Your Free AI Audit <ArrowRight size={48} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-black text-white py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
            <Link href="/" className="font-bebas text-5xl tracking-[0.1em] block mb-4">
                ELIANA<span className="text-[#D90019]">TECH</span>
            </Link>
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase text-xs mb-12">AI Systems for Real Businesses</p>
            
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16">
                <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">About</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Privacy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Terms</Link>
                <Link href="/audit" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Audit</Link>
                <a href="mailto:elianatech@yahoo.com" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Contact</a>
            </div>
            
            <p className="text-gray-700 text-[9px] font-bold tracking-[0.5em] uppercase">&copy; 2026 ELIANATECH — ALL RIGHTS RESERVED</p>
        </div>
      </footer>
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

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

        /* ═══ TYPOGRAPHY ═══ */
        .font-bebas {
           font-family: var(--font-bebas-neue), cursive;
        }

        /* ═══ DIAGRAM ANIMATIONS ═══ */
        @keyframes diagramPulseLight {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.15); opacity: 0.03; }
        }
        .animate-diagram-pulse-light {
          animation: diagramPulseLight 4s ease-in-out infinite;
        }

        @keyframes diagramFeedRow {
          0% { opacity: 0; transform: translateY(10px); }
          10% { opacity: 1; transform: translateY(0); }
          90% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0.8; }
        }
        .animate-diagram-feed-row {
          animation: diagramFeedRow 8s ease-out infinite;
          opacity: 0;
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  )
}
