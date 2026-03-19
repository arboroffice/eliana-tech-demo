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
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0 opacity-40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D90019_0%,transparent_70%)] opacity-10"></div>
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="inline-block text-[#D90019] text-xs font-bold tracking-[0.3em] uppercase mb-8 border border-red-100 px-4 py-1.5 rounded-full bg-red-50/50 animate-fade-in">
              AI Systems for Real Businesses
            </p>
            <h1 className="font-bebas text-[clamp(50px,12vw,140px)] leading-[0.82] uppercase mb-10 tracking-tight animate-fade-in-heading">
              Your Business<br />
              <span className="text-gray-400">Should Run</span><br />
              <span className="text-[#D90019]">Without You</span>
            </h1>
            <p className="text-gray-600 text-[clamp(16px,1.5vw,21px)] leading-relaxed max-w-2xl mx-auto mb-12 font-medium animate-fade-in-subheading">
              We build AI systems that capture leads, close deals, and run operations so you stop being the bottleneck.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fade-in-buttons">
              <Link href="/audit" className="w-full sm:w-auto font-bebas text-2xl tracking-wider bg-[#D90019] text-white px-10 py-5 hover:bg-black transition-all hover:-translate-y-1 shadow-2xl shadow-red-500/30 flex items-center justify-center gap-3">
                Get Your Free AI Audit <ArrowRight size={22} strokeWidth={2.5} />
              </Link>
              <Link href="#process" className="w-full sm:w-auto font-bebas text-2xl tracking-wider text-[#0C0C0C] px-10 py-5 border-2 border-black hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group">
                See How It Works <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
             <div className="w-px h-12 bg-gradient-to-b from-red-600 to-transparent"></div>
          </div>
        </section>

        {/* ═══ TICKER MARQUEE ═══ */}
        <section className="bg-black py-5 overflow-hidden whitespace-nowrap border-y border-red-600/20">
          <div className="flex animate-marquee hover:[animation-play-state:paused] gap-12 px-6">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><Clock size={16} className="text-[#D90019]" /> Lead response in under 60 seconds</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><Zap size={16} className="text-[#D90019]" /> First automation live in 14 days</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><Phone size={16} className="text-[#D90019]" /> Zero missed calls</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><MessageSquare size={16} className="text-[#D90019]" /> Automated follow-up systems</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><CreditCard size={16} className="text-[#D90019]" /> Payments handled automatically</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
                <span className="text-white font-bebas text-xl tracking-widest flex items-center gap-3"><Shield size={16} className="text-[#D90019]" /> Operations that run without oversight</span>
                <span className="text-[#333] font-bebas text-xl">/</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ LIVING BUSINESS DIAGRAM (REDESIGNED) ═══ */}
        <section className="bg-[#FAF9F6] border-y border-[#EAE9E4] py-24 sm:py-32 px-6 overflow-hidden relative">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D90019]/5 rounded-full blur-[160px]"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16 sm:mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">The Infrastructure</p>
              <h2 className="font-bebas text-5xl sm:text-7xl lg:text-9xl leading-[0.85] uppercase text-[#0C0C0C] tracking-tight">
                Your Business<br />
                <span className="text-[#D90019]">Comes Alive</span>
              </h2>
              <p className="text-gray-500 text-lg sm:text-xl font-medium max-w-2xl mx-auto mt-8 leading-relaxed">
                One lead triggers the entire machine. Your back office operates in milliseconds, while you focus on the big picture.
              </p>
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
              <div className="grid grid-cols-2 gap-8 sm:gap-16 -mt-10 sm:-mt-16 mb-20 relative z-20">
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
                       <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/60">Logic Pipeline</span>
                    </div>
                    <span className="text-[10px] font-bold text-white/30 font-mono">LIVE_FEED_v2.0</span>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4">
                    {[
                      { icon: Phone, color: "text-green-500", text: "Voice lead captured — Auto-qualified", time: "2m ago" },
                      { icon: Bot, color: "text-[#D90019]", text: "Automated quote generated for Sarah M.", time: "1m ago" },
                      { icon: Send, color: "text-blue-500", text: "SMS Confirmation & Follow-up sent", time: "45s ago" },
                      { icon: Calendar, color: "text-purple-500", text: "Job dispatched to field team (Mar 22)", time: "10s ago" },
                      { icon: DollarSign, color: "text-emerald-500", text: "Payment link clicked — $2,400 confirmed", time: "NOW" },
                    ].map((row, i) => (
                      <div key={i} className={`flex items-center gap-4 animate-diagram-feed-row`} style={{ animationDelay: `${i * 0.2}s` }}>
                        <div className={`w-8 h-8 rounded-lg bg-[#FAF9F6] flex items-center justify-center shrink-0`}>
                          <row.icon size={14} className={row.color} />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs sm:text-sm font-semibold text-black tracking-tight">{row.text}</p>
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300 whitespace-nowrap">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── TOOLS (BOTTOM) — Real software per category ── */}
              <div className="relative z-20">
                <div className="text-center mb-10">
                   <p className="text-[10px] font-bold tracking-[0.5em] uppercase text-gray-400">Sends to your entire tool stack</p>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                  {[
                    { category: "Books Jobs", tools: ["Calendly", "Housecall Pro", "Jobber"], icon: Calendar },
                    { category: "Collects $", tools: ["Stripe", "Square", "QuickBooks"], icon: CreditCard },
                    { category: "Email", tools: ["Mailchimp", "SendGrid", "Gmail"], icon: Mail },
                    { category: "Texting", tools: ["Twilio", "OpenPhone", "Podium"], icon: MessageSquare },
                    { category: "CRM", tools: ["HubSpot", "GoHighLevel", "Salesforce"], icon: Database },
                    { category: "Billing", tools: ["FreshBooks", "Xero", "Wave"], icon: FileText },
                    { category: "Reviews", tools: ["Google", "Yelp", "Trustpilot"], icon: Star },
                    { category: "Dispatches", tools: ["ServiceTitan", "Workiz", "FieldPulse"], icon: Users },
                    { category: "Revenue", tools: ["QuickBooks", "ProfitWell", "Baremetrics"], icon: BarChart3 },
                    { category: "Lead Gen", tools: ["Meta Ads", "Google Ads", "Typeform"], icon: Globe },
                    { category: "Support", tools: ["Intercom", "Zendesk", "Freshdesk"], icon: Headphones },
                    { category: "Operations", tools: ["Zapier", "Make", "n8n"], icon: Wrench },
                  ].map((tool, i) => (
                    <div key={i} className="bg-white border border-[#EAE9E4] p-4 sm:p-5 text-center rounded-xl shadow-sm hover:shadow-md hover:border-[#D90019]/20 transition-all duration-300 group">
                      <tool.icon className="text-gray-200 group-hover:text-[#D90019] mx-auto mb-2 transition-colors duration-300" size={18} strokeWidth={1.5} />
                      <span className="font-bebas text-xs sm:text-sm tracking-wide text-[#D90019] block mb-2">{tool.category}</span>
                      <div className="space-y-0.5">
                        {tool.tools.map((name, j) => (
                          <span key={j} className="text-[8px] sm:text-[9px] font-bold tracking-[0.1em] uppercase text-gray-300 group-hover:text-gray-500 transition-colors block leading-tight">{name}</span>
                        ))}
                      </div>
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



        {/* ═══ F.O.T.F. MOVEMENT SECTION ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#FAFAF8] relative overflow-hidden border-t border-gray-100">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="lg:sticky lg:top-32">
                <p className="text-[#D90019] font-bold tracking-[0.5em] uppercase mb-8 text-xs font-mono">Founders of the Future</p>
                <h2 className="font-bebas text-[clamp(60px,10vw,140px)] leading-[0.8] uppercase text-black mb-12 tracking-tight">
                  This Is A<br />
                  <span className="text-[#D90019]">Movement.</span>
                </h2>
                <div className="space-y-8 max-w-lg">
                   <h3 className="text-3xl font-black uppercase tracking-tight leading-none italic">
                     Stop Playing With AI.<br />
                     <span className="text-[#D90019]">Start Building Systems That Make Money.</span>
                   </h3>
                   <p className="text-gray-500 text-lg font-medium leading-relaxed">
                     Whether you're a founder, building toward becoming one, an employee automating your role, or a manager running ops with AI — this is where you learn to build.
                   </p>
                   <div className="flex flex-col sm:flex-row gap-6 pt-4">
                      <Link href="https://www.skool.com/founders-of-the-future-3908/about" target="_blank" className="bg-[#D90019] text-white font-bebas text-2xl tracking-widest px-10 py-5 hover:bg-black transition-all shadow-xl shadow-red-500/10 text-center">
                        Join the Community
                      </Link>
                      <button className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors flex items-center gap-2 justify-center group">
                        See what founders are building <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform rotate-90" />
                      </button>
                   </div>
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100 hidden lg:block">
                   <div className="grid grid-cols-2 gap-8 grayscale opacity-40">
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                            <Users size={14} />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-widest">Active Community</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center">
                            <Zap size={14} />
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-widest">Weekly Blueprints</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="space-y-32">
                {/* Block 1 & 2: Comparison Grid */}
                <div className="grid sm:grid-cols-2 gap-1 px-4 sm:px-0 bg-gray-100 border border-gray-100 rounded-sm overflow-hidden">
                   <div className="bg-white p-10 flex flex-col justify-between group overflow-hidden relative">
                      <div className="absolute top-4 right-4 text-gray-100 font-bebas text-4xl group-hover:text-red-500/10 transition-colors italic uppercase">The Play</div>
                      <div>
                        <span className="text-[#D90019] font-mono text-[10px] tracking-widest mb-4 block uppercase font-bold">Standard Use</span>
                        <h4 className="font-bebas text-4xl mb-6 text-black tracking-wide">Playing <br />With AI</h4>
                        <div className="space-y-3">
                           {["Generate Content", "Ask Questions", "Test Prompts", "Manual Followup"].map((task, i) => (
                             <div key={i} className="flex items-center gap-2 text-gray-400 text-[10px] font-bold uppercase">
                                <X size={10} className="text-gray-300" /> {task}
                             </div>
                           ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-400 mt-10 font-medium">Result: You stay as the bottleneck.</p>
                   </div>
                   <div className="bg-black p-10 flex flex-col justify-between group overflow-hidden relative border-t-4 sm:border-t-0 sm:border-l-4 border-[#D90019]">
                      <div className="absolute top-4 right-4 text-white/5 font-bebas text-4xl italic uppercase">The Shift</div>
                      <div>
                        <span className="text-[#D90019] font-mono text-[10px] tracking-widest mb-4 block uppercase font-bold">Founder Mode</span>
                        <h4 className="font-bebas text-4xl mb-6 text-white tracking-wide">Building <br />Systems</h4>
                        <div className="space-y-3">
                           {["Autonomous Logic", "Tool Integration", "Lead Routing", "Auto-Profits"].map((task, i) => (
                             <div key={i} className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase">
                                <Check size={10} className="text-[#D90019]" /> {task}
                             </div>
                           ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#D90019] mt-10 font-bold uppercase tracking-widest">Result: The system runs itself.</p>
                   </div>
                </div>

                {/* Block 3: The Operator Insight Card */}
                <div className="relative group">
                   <div className="absolute -inset-4 bg-gradient-to-tr from-[#D90019]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative bg-white border border-[#EAE9E4] p-12 sm:p-20 text-center shadow-sm">
                      <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto mb-10 shadow-2xl">
                         <Bot className="text-white" size={40} />
                      </div>
                      <h4 className="font-bebas text-7xl sm:text-8xl leading-none uppercase mb-8 text-black tracking-tight">
                        AI Is Not <br />
                        <span className="text-gray-300">Just A Tool.</span><br />
                        <span className="text-[#D90019]">It's An Operator.</span>
                      </h4>
                      <p className="text-gray-500 font-bold uppercase tracking-[0.25em] text-xs max-w-sm mx-auto leading-loose">
                        Once you understand that, you stop chatting with it — and start building with it.
                      </p>
                   </div>
                </div>

                {/* Block 4: What This Is */}
                <div className="py-16 border-y border-gray-100">
                   <h4 className="font-bebas text-5xl sm:text-6xl mb-6 text-black uppercase leading-tight">
                     Not a course.<br />
                     Not a community.<br />
                     <span className="text-[#D90019]">A Movement.</span>
                   </h4>
                   <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-2xl">
                     Founders. Future founders. Employees. Managers. Operators. Anyone using AI to build, automate, and replace the manual grind. Inside, you don't get theory.
                   </p>
                </div>

              </div>
            </div>

            {/* Block 5: The Closing Tension (STRETCHED) */}
            <div className="relative mt-32 sm:mt-48 border-t-4 border-black pt-16 sm:pt-24">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D90019]/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
               <div className="max-w-4xl">
                  <p className="text-gray-400 font-bold tracking-[0.5em] uppercase mb-10 text-xs font-mono">The Window</p>
                  <p className="text-3xl sm:text-5xl font-black text-black leading-tight mb-12 tracking-tighter">
                    This is early. Most people are still playing with AI. <br />
                    <span className="text-[#D90019] italic font-serif">A few are building real systems with it.</span>
                  </p>
                  <h2 className="font-bebas text-[clamp(50px,12vw,160px)] text-black leading-[0.8] mb-16 uppercase tracking-tight">
                    THAT GAP IS ABOUT <br /><span className="text-[#D90019]">TO GET VERY BIG.</span>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-12 items-end">
                     <div>
                        <p className="text-gray-500 text-lg sm:text-xl font-medium leading-relaxed mb-8">
                          You can keep using AI for small tasks. Or you can use it to run your business.<br />
                          If you've had the thought: <span className="text-black italic">“I could build something crazy with this...”</span>
                        </p>
                        <p className="text-black font-black uppercase tracking-widest text-sm mb-4">This is where you actually do it.</p>
                     </div>
                     <div className="flex flex-col gap-4">
                        <Link href="https://www.skool.com/founders-of-the-future-3908/about" className="group inline-flex items-center justify-between bg-black text-white px-10 py-8 font-bebas text-4xl sm:text-5xl tracking-widest hover:bg-[#D90019] transition-all hover:scale-[1.02] active:scale-95 shadow-2xl rounded-sm">
                           Join Now <ArrowRight size={48} strokeWidth={3} className="group-hover:translate-x-4 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-3 px-4 opacity-40">
                           <span className="w-2 h-2 rounded-full bg-[#D90019] animate-pulse"></span>
                           <span className="text-[10px] font-bold uppercase tracking-widest">Entry limited to 50 slots per month</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ═══ PRICING SECTION (COLOR BLOCK: BLACK) ═══ */}
        <section className="py-32 px-6 bg-[#050505] overflow-hidden border-y border-white/5 relative">
          <div className="absolute top-0 right-0 w-1/4 h-full bg-[#D90019]/5 blur-[120px]"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">Investment</p>
              <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-none uppercase text-white">
                The Pipeline
              </h2>
              <p className="text-gray-400 text-xl font-medium max-w-2xl mx-auto mt-8 leading-relaxed">
                From entry-level logic to full business automation and ongoing scale.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-12">
               {[
                 { phase: "01", meta: "The Logic", title: "Founders of the Future", desc: "Entry level access to the logic. This is where you learn how to think in systems before you spend a dollar on builds.", price: "$97", cta: "Join FOTF", href: "https://www.skool.com/founders-of-the-future-3908/about", accent: true },
                 { phase: "02", meta: "The Layer", title: "Build One: Living Layer", desc: "A custom communication infrastructure between your existing tools and the coming agent workforce. Rapid deployment in 14 days.", price: "$5K+", cta: "Secure Build", href: "/build", accent: true },
                 { phase: "03", meta: "The Scale", title: "Full Build: Industry Playbook", desc: "Proven operational playbooks for your specific niche. Full automation across every department. The true Business OS.", price: "$25K+", cta: "Apply Now", href: "/apply", accent: false },
                 { phase: "04", meta: "The Evolution", title: "The Retainer", desc: "Not required for all builds. We host, maintain, and upgrade your system. Unlimited skill upgrades and new automations on demand. 48-hour turnarounds.", price: "$1.5K - $5K/mo", cta: "Apply Now", href: "/apply", accent: false },
                 { phase: "05", meta: "The Legend", title: "Partnership / Share", desc: "Skin in the game. Full alignment. We become your equity AI department for high-scale growth.", price: "Partnership", cta: "Apply Now", href: "/apply", accent: false },
               ].map((step, i) => (
                 <div key={i} className={`group relative bg-white/5 border ${step.accent ? 'border-[#D90019]/50' : 'border-white/10'} p-8 sm:p-16 transition-all hover:bg-white/10 hover:border-[#D90019] overflow-hidden`}>
                    {/* Visual Number Background */}
                    <div className="absolute top-0 right-0 p-8 font-bebas text-[120px] sm:text-[200px] text-white/[0.03] group-hover:text-[#D90019]/[0.05] transition-all uppercase leading-none pointer-events-none select-none italic transform translate-x-12 -translate-y-12">
                      {step.phase}
                    </div>
                    
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 relative z-10 w-full">
                       <div className="flex-1 max-w-3xl">
                          <div className="flex items-center gap-4 mb-6">
                            <span className="bg-[#D90019] text-white font-bebas text-xl px-3 py-1">{step.phase}</span>
                            <span className="text-[#D90019] font-bold tracking-[0.4em] uppercase text-[10px] font-mono">{step.meta}</span>
                          </div>
                          <h3 className="font-bebas text-4xl sm:text-7xl text-white mb-8 uppercase tracking-wider leading-none">{step.title}</h3>
                          <p className="text-gray-400 text-lg sm:text-xl font-medium leading-relaxed">{step.desc}</p>
                       </div>
                       
                       <div className="shrink-0 w-full lg:w-80 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 flex flex-col justify-between h-full">
                          <div className="mb-10 lg:mb-0">
                            <span className="text-gray-500 font-bold tracking-widest uppercase text-[10px] block mb-2 font-mono">Investment</span>
                            <div className="font-bebas text-5xl sm:text-6xl text-white leading-none">{step.price}</div>
                          </div>
                          <Link href={step.href} className={`inline-flex items-center justify-between group/btn gap-4 mt-8 lg:mt-12 px-10 py-6 font-bebas text-3xl tracking-widest transition-all w-full ${step.accent ? 'bg-[#D90019] text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:bg-[#D90019] hover:text-white'}`}>
                             {step.cta} <ArrowRight size={28} className="group-hover/btn:translate-x-2 transition-transform" />
                          </Link>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </section>


        {/* ═══ INDUSTRY PLAYBOOKS (COLOR BLOCK: RED) ═══ */}
        <section className="py-32 px-6 bg-[#D90019] overflow-hidden relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-center md:text-left">
               <div>
                  <p className="text-white/60 font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">Proven Systems</p>
                  <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-none uppercase text-white">Industry <span className="opacity-40">Playbooks.</span></h2>
               </div>
               <div className="flex-1 md:max-w-sm">
                  <p className="text-white/80 font-medium text-xl italic leading-relaxed">
                    Battle-tested operational logic deployed across 18+ high-scale verticals.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 border-t border-white/20">
              {[
                { slug: "medical-dental", name: "Medical & Dental" },
                { slug: "home-services-high-ticket", name: "Home Services — High Ticket" },
                { slug: "legal", name: "Legal Services" },
                { slug: "beauty-personal-care", name: "Beauty & Personal Care" },
                { slug: "home-services-recurring", name: "Home Services — Recurring" },
                { slug: "real-estate-property", name: "Real Estate & Property" },
                { slug: "health-wellness", name: "Health & Wellness" },
                { slug: "pet-services", name: "Pet Services" },
                { slug: "automotive", name: "Automotive" },
                { slug: "professional-financial", name: "Professional & Financial Services" },
                { slug: "events-hospitality", name: "Events & Hospitality" },
                { slug: "education-childcare", name: "Education & Childcare" },
                { slug: "misc-local-services", name: "Misc. Local Services" },
                { slug: "saas", name: "SaaS Founders" },
                { slug: "course-creators", name: "Course Creators" },
                { slug: "coaching", name: "Coaches & Consultants" },
                { slug: "ecommerce", name: "E-commerce & Retail" },
                { slug: "agencies", name: "Agencies" },
              ].map((ind, i) => (
                <Link key={i} href={`/industry-categories/${ind.slug}`} className="flex items-center gap-6 py-6 border-b border-white/10 group transition-all hover:pl-4 hover:bg-white/5 active:scale-[0.98]">
                  <span className="font-bebas text-lg text-white/30 group-hover:text-white transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-bold text-base tracking-tight text-white group-hover:opacity-100 opacity-80 transition-all duration-300 flex-1">{ind.name}</span>
                  <ArrowRight size={16} className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA SECTION (COLOR BLOCK: CREAM/WHITE) ═══ */}
        <section className="py-40 px-6 bg-[#FAF9F6] overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-[0.85] uppercase mb-12 tracking-tight text-[#0C0C0C]">
              What Your Business<br />
              <span className="text-[#D90019]">Looks Like Automated</span>
            </h2>
            
            <div className="max-w-2xl mx-auto mb-16 text-left border-l-4 border-[#D90019] pl-10">
               <p className="text-gray-950 text-2xl font-bold mb-6 italic uppercase tracking-wider">Live Audit reveals:</p>
               <ul className="space-y-4">
                  {[
                    "Where you’re losing money",
                    "What to automate first",
                    "A custom system buildout roadmap"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-bold text-gray-800">
                       <Check size={24} className="text-[#D90019] shrink-0" /> {item}
                    </li>
                  ))}
               </ul>
               <p className="mt-10 text-xl font-black uppercase tracking-[0.3em] text-[#D90019]">No pitch. Just clarity.</p>
            </div>
            
            <div className="flex flex-col items-center gap-10">
               <Link href="/audit" className="group relative inline-flex font-bebas text-3xl sm:text-5xl tracking-[0.1em] bg-black text-white px-20 py-10 hover:bg-[#D90019] transition-all hover:-translate-y-2 shadow-2xl items-center justify-center gap-8 overflow-hidden rounded-sm">
                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
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
