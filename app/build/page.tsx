"use client"

import Link from "next/link"
import { ArrowRight, Check, Zap, Rocket, Shield, Clock, MousePointer2, Bot, Database } from "lucide-react"

export default function BuildPage() {
  const scrollToSteps = () => {
    document.getElementById('steps')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-[#FAFAF8] text-[#0C0C0C] font-sans overflow-x-hidden selection:bg-[#D90019] selection:text-white">
      
      {/* ═══ NAVIGATION (MINIMAL) ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 h-20 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-gray-100">
        <Link href="/" className="font-bebas text-2xl tracking-[0.12em] text-[#0C0C0C]">
          ELIANA<span className="text-[#D90019]">TECH</span>
        </Link>
        <Link href="/" className="text-xs sm:text-[11px] uppercase tracking-widest font-bold text-gray-500 hover:text-black transition-colors">
          Back to Home
        </Link>
      </nav>

      <main className="pt-24 sm:pt-32">
        {/* ═══ HERO / PRODUCT BLOCK ═══ */}
        <section className="py-12 sm:py-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
            <div>
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-xs font-mono">Infrastructure Tier 01</p>
              <h1 className="font-bebas text-6xl sm:text-9xl leading-[0.85] uppercase mb-8 tracking-tight">
                Build One:<br />
                <span className="text-[#D90019]">The Layer.</span>
              </h1>
              <p className="text-gray-600 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-lg">
                We install a custom communication infrastructure between your existing tools and the coming agent workforce. Rapid deployment. Zero downtime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-12 border-l-4 border-black pl-6 sm:border-0 sm:pl-0">
                <div className="bg-black text-white px-8 py-4 font-bebas text-3xl sm:text-4xl tracking-wider">
                  Request Build
                </div>
                <div>
                   <p className="text-black font-black text-sm uppercase tracking-widest leading-tight">Implementation Phase</p>
                   <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">Limited Availability</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                 <Link href="https://cal.com/elianatech/30min" className="group relative inline-flex font-bebas text-3xl sm:text-4xl tracking-[0.1em] bg-[#D90019] text-white px-12 py-6 hover:bg-black transition-all hover:-translate-y-1 shadow-xl items-center justify-center gap-6 overflow-hidden rounded-sm w-full sm:w-auto">
                    Book Strategy Session <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                 </Link>
                 <button onClick={scrollToSteps} className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors flex items-center gap-2">
                   View Deployment Roadmap <ArrowRight size={10} className="rotate-90" />
                 </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-black p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl rounded-sm">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Zap size={100} />
                </div>
                <h3 className="font-bebas text-3xl mb-10 tracking-widest border-b border-white/10 pb-6 uppercase">Service Manifest</h3>
                <ul className="space-y-6">
                  {[
                    "Custom Layer 1 Logic Build",
                    "Deep Integration of Existing Tools",
                    "AI Agent Communication Hub",
                    "Automated Lead Capture & Routing",
                    "Logic Security & Encryption",
                    "14-Day Deployment Speed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-xs font-bold uppercase tracking-[0.15em] text-gray-300">
                      <Check className="text-[#D90019] shrink-0 mt-0.5" size={14} strokeWidth={3} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ OUTCOMES: THE LIVING LAYER ═══ */}
        <section className="py-24 sm:py-32 px-6 border-y border-gray-100 bg-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D90019]/5 skew-x-[-12deg] -z-10 translate-x-1/2"></div>
          <div className="max-w-6xl mx-auto">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="order-2 lg:order-1">
                   <div className="grid grid-cols-2 gap-4 sm:gap-8">
                      {[
                        { label: "Speed to Lead", value: "< 2s", sub: "Response time across all tools" },
                        { label: "Lead Retention", value: "100%", sub: "Zero leaks in your routing logic" },
                        { label: "Operational Uptime", value: "24/7", sub: "Logic that never sleeps" },
                        { label: "Human Friction", value: "0%", sub: "Automated at the first touch" },
                      ].map((stat, i) => (
                        <div key={i} className="bg-[#FAFAF8] p-8 border border-gray-100 group hover:border-[#D90019] transition-all duration-500">
                           <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 block mb-4 group-hover:text-[#D90019] transition-colors">{stat.label}</span>
                           <span className="font-bebas text-5xl sm:text-7xl block mb-2 text-black leading-none">{stat.value}</span>
                           <p className="text-[10px] text-gray-500 font-medium leading-relaxed">{stat.sub}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="order-1 lg:order-2">
                   <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-8 text-xs font-mono">The Outcome</p>
                   <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase text-black mb-10 tracking-tight">
                     Target: Extreme <br />
                     <span className="text-[#D90019]">Coverage.</span>
                   </h2>
                   <div className="space-y-10">
                      <div className="flex gap-8 items-start">
                         <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                            <MousePointer2 className="text-white" size={20} />
                         </div>
                         <div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2 italic">Lead Protection</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                              When a prospect clicks, they get an immediate, intelligent response across SMS, Email, and WhatsApp. No human needed to bridge the gap.
                            </p>
                         </div>
                      </div>
                      <div className="flex gap-8 items-start">
                         <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                            <Database className="text-white" size={20} />
                         </div>
                         <div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2 italic">Infrastructure Sync</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                              Your CRM, calendar, and payment systems are fused into a single living entity. Updates in one tool trigger logical shifts in all others—instantly.
                           </p>
                         </div>
                      </div>
                      <div className="flex gap-8 items-start">
                         <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0">
                            <Bot className="text-white" size={20} />
                         </div>
                         <div>
                            <h4 className="text-xl font-black uppercase tracking-tight mb-2 italic">Future Built</h4>
                            <p className="text-gray-500 font-medium leading-relaxed">
                              This isn't a temporary fix. It's the permanent foundation required to run an autonomous agent workforce. If it happens in your business, the Layer catches it.
                           </p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* ═══ VALUE PROP (COLOR BLOCK: RED) ═══ */}
        <section className="py-24 sm:py-32 px-6 bg-[#D90019] text-white">
          <div className="max-w-6xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
                {[
                  { icon: Clock, title: "14 Days", desc: "Your system is live and running logic in two weeks. No six-month implementation cycles." },
                  { icon: Shield, title: "Your Stack", desc: "We don't replace your tools. We make them talk to each other through an AI brain." },
                  { icon: Rocket, title: "Evolution Ready", desc: "Once it's live, adding new AI agents is as simple as flipping a switch." },
                ].map((item, i) => (
                  <div key={i} className="text-center md:text-left">
                    <item.icon className="mx-auto md:mx-0 mb-6 text-white/40" size={40} />
                    <h3 className="font-bebas text-4xl mb-4 tracking-widest uppercase">{item.title}</h3>
                    <p className="text-white/80 font-medium text-lg leading-relaxed">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* ═══ THE NEXT STEPS ═══ */}
        <section id="steps" className="py-24 sm:py-32 px-6 bg-white overflow-hidden relative border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16 sm:mb-20">
                <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">The Deployment</p>
                <h2 className="font-bebas text-5xl sm:text-8xl leading-tight uppercase text-black">What Happens <span className="text-[#D90019]">Next</span></h2>
             </div>

             <div className="space-y-12">
                {[
                  { step: "01", title: "Book a Strategy Session", desc: "Select a time for your deep-dive audit and roadmap session." },
                  { step: "02", title: "Logic Audit", desc: "Immediately after checkout, you'll record a 15-minute walkthrough of your current tools and bottlenecks." },
                  { step: "03", title: "Implementation", desc: "Our team builds your communication layer in the background. No technical work required from you." },
                  { step: "04", title: "Live Handoff", desc: "Day 14. We meet to show you the machine running. Your business is now AI-native." },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group relative">
                    <div className="font-bebas text-7xl md:text-6xl text-gray-100 group-hover:text-[#D90019] transition-colors shrink-0 leading-none md:static absolute -top-4 -left-2 opacity-50 md:opacity-100">{item.step}</div>
                    <div className="pt-2">
                       <h4 className="text-2xl font-black mb-3 uppercase tracking-tight">{item.title}</h4>
                       <p className="text-gray-500 text-lg font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>

             <div className="mt-24 text-center">
                <Link href="https://cal.com/elianatech/30min" className="group relative inline-flex font-bebas text-3xl sm:text-5xl tracking-[0.1em] bg-black text-white px-20 py-10 hover:bg-[#D90019] transition-all hover:-translate-y-2 shadow-2xl items-center justify-center gap-8 overflow-hidden rounded-sm w-full sm:w-auto">
                  <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  Book Strategy Session <ArrowRight size={48} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
                </Link>
                <div className="mt-10 flex flex-col items-center gap-4">
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                    <span className="text-[#D90019] mr-2">●</span> Limited to 4 new builds per month
                  </p>
                  <div className="flex items-center gap-4 grayscale opacity-40">
                    {/* Add some tool icons to show compatibility */}
                     <Shield size={16} />
                     <Clock size={16} />
                     <Rocket size={16} />
                  </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER (MINIMAL) ═══ */}
      <footer className="bg-black text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <Link href="/" className="font-bebas text-4xl tracking-[0.1em] block mb-4">
                ELIANA<span className="text-[#D90019]">TECH</span>
            </Link>
            <p className="text-gray-500 text-[10px] font-bold tracking-[0.5em] uppercase">&copy; 2026 ELIANATECH — ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
        .font-bebas {
          font-family: 'Bebas Neue', cursive;
        }
      `}</style>
    </div>
  )
}
