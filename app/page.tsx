"use client"

import Link from "next/link"
import { ArrowRight, Check, Bot, TrendingUp, Zap, Clock, MessageSquare, FileText, Globe, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

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
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          
          <div className="relative z-10 max-w-5xl mx-auto">
            <p className="inline-block text-[#D90019] text-[10px] font-bold tracking-[0.4em] uppercase mb-10 border-b-2 border-red-600 pb-2">
              The AI Infrastructure Layer
            </p>
            <h1 className="font-bebas text-[clamp(50px,12vw,160px)] leading-[0.85] uppercase mb-12 tracking-tighter text-black">
              Your Business Runs.<br />
              <span className="text-[#D90019]">You Don't Have To.</span>
            </h1>
            <p className="text-gray-500 text-[clamp(18px,2vw,24px)] leading-tight max-w-3xl mx-auto mb-16 font-medium tracking-tight">
              We install an AI agent that wakes up before you do, handles the work before you see it, and never calls in sick. Your business on autopilot.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/audit" className="w-full sm:w-auto font-bebas text-3xl tracking-widest bg-[#D90019] text-white px-12 py-6 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-red-500/20 flex items-center justify-center gap-4">
                Get Your Free AI Audit <ArrowRight size={28} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </section>

        {/* ═══ PROOF STRIP (MARQUEE) ═══ */}
        <section className="bg-black py-10 overflow-hidden border-y border-white/5 whitespace-nowrap">
          <div className="flex animate-marquee gap-16">
            {[
              "Live in 7 Days",
              "Money Back Guarantee",
              "Always On 24/7",
              "Infinite Automations",
              "Secure Private Server",
              "No Human Bottleneck",
              "Live in 7 Days",
              "Money Back Guarantee",
              "Always On 24/7",
              "Infinite Automations",
              "Secure Private Server",
              "No Human Bottleneck"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-6 text-white font-bebas text-5xl tracking-[0.1em] uppercase opacity-80">
                <span className="w-4 h-4 rounded-full bg-[#D90019]"></span>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ THE SINGLE OFFER ═══ */}
        <section id="offer" className="py-24 sm:py-48 px-6 bg-[#050505] overflow-hidden relative border-y border-white/5">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D90019]/5 blur-[160px]"></div>
          
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-8 text-xs font-mono">Your AI Department</p>
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
                       We become your AI department. One build. Infinite evolution. Your business keeps growing while you live your life.
                     </p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end">
                     <span className="text-gray-400 font-bold tracking-widest uppercase text-[10px] block mb-2 font-mono">Specialized Install</span>
                     <div className="font-bebas text-5xl text-black leading-none mb-2">Book Your Audit</div>
                     <div className="flex gap-4 mt-2">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#D90019] py-1 px-2 bg-red-50 rounded">7 Day Delivery Guarantee</span>
                        <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 py-1 px-2 bg-gray-50 rounded">Slots Limited</span>
                     </div>
                  </div>
               </div>

               <Link href="/audit" className="group relative inline-flex w-full font-bebas text-3xl sm:text-4xl tracking-[0.1em] bg-black text-white px-10 py-8 hover:bg-[#D90019] transition-all items-center justify-between shadow-2xl">
                 Book Your Audit <ArrowRight size={32} strokeWidth={3} className="group-hover:translate-x-3 transition-transform" />
               </Link>
            </div>
          </div>
        </section>

        {/* ═══ WHAT CHANGES ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white border-t border-gray-100">
           <div className="max-w-4xl mx-auto">
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-12 text-center text-xs font-mono">The Transformation</p>
              <h2 className="font-bebas text-5xl sm:text-7xl text-center mb-20 uppercase tracking-tight">What Changes <span>When You Have It.</span></h2>
              
              <div className="space-y-12">
                 {[
                   "Wake up to leads already followed up.",
                   "Open your phone to content already posted.",
                   "Check your email to client messages already drafted.",
                   "End your week with a full business report you did not have to write.",
                   "Never chase a payment again.",
                   "Never be the bottleneck again."
                 ].map((text, i) => (
                   <div key={i} className="flex gap-8 items-start border-l-4 border-gray-100 pl-8 py-4 hover:border-[#D90019] transition-colors group">
                      <span className="font-bebas text-4xl text-gray-200 group-hover:text-[#D90019] transition-colors">0{i+1}</span>
                      <p className="text-2xl sm:text-3xl font-medium text-gray-600 group-hover:text-black transition-colors">{text}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* ═══ THE LOGIC ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#FAF9F6] border-y border-gray-200">
           <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20 md:mb-32">
                <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-4 text-xs font-mono">The Engine</p>
                <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl uppercase tracking-tighter leading-none">The Logic <span>That Runs It.</span></h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {[
                   { icon: Zap, title: "Lead Response", desc: "Under 60 seconds. Every time. No exceptions." },
                   { icon: Bot, title: "Weekly Content", desc: "Written, designed, and posted. You never touch it." },
                   { icon: MessageSquare, title: "Client Communication", desc: "Emails, follow ups, and confirmations in your voice." },
                   { icon: FileText, title: "Business Reports", desc: "Every Sunday night. What happened. What is next." },
                   { icon: Globe, title: "Tool Integration", desc: "Connected to everything you already use." },
                   { icon: Wrench, title: "Monthly Upgrades", desc: "New automations every month. It never stops growing." }
                 ].map((item, i) => (
                   <div key={i} className="bg-white p-12 border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                      <div className="w-16 h-16 bg-[#FAF9F6] flex items-center justify-center mb-8 group-hover:bg-[#D90019] transition-colors">
                         <item.icon size={28} className="text-black group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-bebas text-3xl uppercase mb-4 tracking-wide">{item.title}</h3>
                      <p className="text-gray-500 font-medium leading-relaxed">{item.desc}</p>
                   </div>
                 ))}
              </div>

              <div className="mt-20 text-center">
                 <Link href="/audit" className="inline-flex font-bebas text-3xl tracking-widest bg-black text-white px-12 py-6 hover:bg-[#D90019] transition-all shadow-xl">
                    Get Your Free AI Audit <ArrowRight size={28} className="ml-4" />
                 </Link>
              </div>
           </div>
        </section>

        {/* ═══ FINAL CTA SECTION ═══ */}
        <section className="py-40 px-6 bg-black text-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-[140px] leading-[0.8] uppercase mb-16 tracking-tighter text-white">
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ═══ TYPOGRAPHY ═══ */
        .font-bebas {
           font-family: var(--font-bebas-neue), cursive;
        }
      `}</style>
    </div>
  )
}
