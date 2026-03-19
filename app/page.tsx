"use client"

import Link from "next/link"
import { ArrowRight, Check, X, Phone, MessageSquare, Calendar, CreditCard, BarChart3, Clock, Zap, Shield, Zap as ZapIcon } from "lucide-react"
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
        <Link href="/audit" className="md:hidden bg-[#D90019] text-white p-2 rounded-full shadow-lg shadow-red-500/20">
          <ArrowRight size={20} />
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

        {/* ═══ THE PROBLEM SECTION ═══ */}
        <section className="bg-black text-white py-32 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/5 blur-[120px]"></div>
          <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Problem</p>
              <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase mb-12">
                Right Now,<br />
                Business Depends<br />
                <span className="text-[#D90019]">On You</span>
              </h2>
              <ul className="space-y-8">
                {[
                  { l: "Miss a call", r: "lose the deal" },
                  { l: "Forget to follow up", r: "lead is gone" },
                  { l: "Team needs you", r: "everything slows down" },
                  { l: "No systems", r: "you’re always on" },
                  { l: "Growth stops", r: "when you stop working" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 group">
                    <div className="w-7 h-7 rounded-sm border border-red-600/30 flex items-center justify-center text-[#D90019] group-hover:bg-[#D90019] group-hover:text-white transition-all duration-300">
                      <X size={16} strokeWidth={3} />
                    </div>
                    <span className="text-xl sm:text-2xl text-gray-300 font-medium tracking-tight leading-none italic">
                       {item.l} <span className="text-[#D90019] font-bold not-italic px-2">→</span> {item.r}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
               <div className="aspect-square bg-[#0C0C0C] border border-white/10 p-12 flex flex-col justify-center items-center text-center shadow-2xl relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D90019] to-transparent"></div>
                  <span className="font-serif text-8xl text-red-600/20 mb-4 ">&ldquo;</span>
                  <p className="text-2xl sm:text-4xl font-bold leading-tight mb-10 max-w-md tracking-tight">
                    You don&apos;t have a business.<br />
                    You have a job with overhead.
                  </p>
                  <div className="h-px w-20 bg-red-600/30 mb-8"></div>
                  <p className="text-[#D90019] font-bebas text-5xl tracking-[0.1em] mt-2 animate-pulse">
                    That ends here.
                  </p>
               </div>
               {/* Decorative background orbs */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] -z-10"></div>
               <div className="absolute -top-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-[80px] -z-10"></div>
            </div>
          </div>
        </section>

        {/* ═══ THE PROCESS SECTION ═══ */}
        <section id="process" className="py-32 px-6 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">The Process</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-[0.9] uppercase">
                We Build The System<br />
                <span className="text-[#D90019]">Your Business Is Missing</span>
              </h2>
              <div className="flex flex-col gap-2 mt-8">
                <p className="text-gray-950 text-xl font-bold uppercase tracking-widest">Not another tool.</p>
                <p className="text-gray-950 text-xl font-bold uppercase tracking-widest mb-4">Not another subscription.</p>
                <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  A full AI infrastructure that actually runs your company.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  id: "01",
                  title: "We Find The Bottleneck",
                  desc: "You show us where you’re losing time or money. We find the leaks in your system."
                },
                {
                  id: "02",
                  title: "We Build The System",
                  desc: "We install AI that fixes it. First automation live in 14 days or your money back."
                },
                {
                  id: "03",
                  title: "It Runs Without You",
                  desc: "Leads, follow-ups, scheduling, operations. Handled automatically. You stop chasing. You start scaling."
                }
              ].map((step, i) => (
                <div key={i} className="group p-10 border border-gray-100 bg-[#FAFAF8] relative overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-red-600/40 hover:shadow-[0_30px_60px_-15px_rgba(217,0,25,0.1)]">
                  <span className="font-bebas text-[180px] text-red-600/5 absolute -bottom-10 -right-10 leading-none transition-all group-hover:text-red-600/10 pointer-events-none">{step.id}</span>
                  <div className="relative z-10">
                    <span className="inline-block px-4 py-1 bg-white border border-gray-200 text-xs font-bold tracking-widest text-[#D90019] mb-8">{step.id} — {step.title.split(' ').slice(1).join(' ')}</span>
                    <h3 className="text-3xl font-bold mb-6 tracking-tight leading-tight group-hover:text-[#D90019] transition-colors">{step.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══ PRICING SECTION ═══ */}
        <section className="py-32 px-6 bg-white overflow-hidden border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm">Pricing</p>
              <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase">
                The Pipeline
              </h2>
              <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto mt-8 leading-relaxed">
                From logic to infrastructure to ongoing evolution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
              {/* Founders of the Future */}
              <div className="p-10 border border-gray-100 flex flex-col transition-all duration-500 hover:border-black group">
                <div className="flex justify-between items-start mb-10">
                   <div>
                      <span className="font-bebas text-xl text-gray-400 mb-2 block uppercase tracking-widest">Step 01</span>
                      <h3 className="text-3xl font-bold font-bebas tracking-wide group-hover:text-[#D90019] transition-colors">Founders of the Future</h3>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold font-bebas">LEARN</div>
                   </div>
                </div>
                
                <p className="text-gray-500 mb-10 font-medium text-sm leading-relaxed">Master AI logic before building infrastructure. Hosted on our dedicated subdomain.</p>
                
                <div className="flex-1 space-y-4 mb-10">
                  {[
                    "Logic blueprints",
                    "Weekly strategy",
                    "Community access",
                    "FOTF Subdomain"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]">
                      <Check className="text-[#D90019] shrink-0 mt-0.5" size={12} strokeWidth={3} /> {item}
                    </li>
                  ))}
                </div>
                
                <Link href="https://foundersofthefuture.com" target="_blank" className="w-full text-center py-4 bg-black text-white font-bebas text-xl tracking-[0.2em] transition-all hover:bg-[#D90019] hover:tracking-[0.3em] active:scale-95">
                  Join FOTF
                </Link>
              </div>

              {/* Build One */}
              <div className="p-10 bg-black text-white flex flex-col relative transform lg:scale-105 shadow-[0_40px_100px_-20px_rgba(217,0,25,0.25)] z-20 overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                   <ZapIcon className="text-[#D90019] animate-pulse" size={24} />
                </div>
                
                <div className="mt-8 mb-10">
                   <span className="font-bebas text-xl text-red-600 mb-2 block uppercase tracking-widest">Step 02</span>
                   <h3 className="text-3xl font-bold font-bebas tracking-wide text-white font-bebas">Build One</h3>
                   <div className="mt-4 text-2xl font-bold font-bebas text-[#D90019]">$5,000+</div>
                </div>
                
                <p className="text-gray-400 mb-10 font-medium text-sm leading-relaxed">A living communication layer between your tools and your business.</p>
                
                <div className="flex-1 space-y-4 mb-10">
                  {[
                    "Custom Layer 1 build",
                    "Tool integrations",
                    "Agent logic setup",
                    "14-day deployment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-white">
                      <Check className="text-[#D90019] shrink-0 mt-0.5" size={12} strokeWidth={3} /> {item}
                    </li>
                  ))}
                </div>
                
                <Link href="/apply" className="w-full text-center py-5 bg-[#D90019] text-white font-bebas text-2xl tracking-[0.2em] transition-all hover:bg-white hover:text-[#D90019] hover:tracking-[0.3em] active:scale-95">
                  Apply Now
                </Link>
              </div>

              {/* Full OS */}
              <div className="p-10 border border-gray-100 flex flex-col transition-all duration-500 hover:border-black group">
                <div className="flex justify-between items-start mb-10">
                   <div>
                      <span className="font-bebas text-xl text-gray-400 mb-2 block uppercase tracking-widest">Step 03</span>
                      <h3 className="text-3xl font-bold font-bebas tracking-wide group-hover:text-[#D90019] transition-colors">Playbook OS</h3>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold font-bebas">$25K+</div>
                   </div>
                </div>
                
                <p className="text-gray-500 mb-10 font-medium text-sm leading-relaxed">Proven industry playbooks deployed as full business automation.</p>
                
                <div className="flex-1 space-y-4 mb-10">
                  {[
                    "Full sector automation",
                    "Custom playbook",
                    "Agent workforce",
                    "Revenue scale"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]">
                      <Check className="text-[#D90019] shrink-0 mt-0.5" size={12} strokeWidth={3} /> {item}
                    </li>
                  ))}
                </div>
                
                <Link href="/apply" className="w-full text-center py-4 bg-black text-white font-bebas text-xl tracking-[0.2em] transition-all hover:bg-[#D90019] hover:tracking-[0.3em] active:scale-95">
                  Full Deploy
                </Link>
              </div>

              {/* Inner Circle */}
              <div className="p-10 border border-gray-100 flex flex-col transition-all duration-500 hover:border-black group">
                <div className="flex justify-between items-start mb-10">
                   <div>
                      <span className="font-bebas text-xl text-gray-400 mb-2 block uppercase tracking-widest">Ongoing</span>
                      <h3 className="text-3xl font-bold font-bebas tracking-wide group-hover:text-[#D90019] transition-colors">Inner Circle</h3>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold font-bebas">$997/mo</div>
                   </div>
                </div>
                
                <p className="text-gray-500 mb-10 font-medium text-sm leading-relaxed">After the build, stay in the loop with expert access and network support.</p>
                
                <div className="flex-1 space-y-4 mb-10">
                  {[
                    "Expert build access",
                    "Founders network",
                    "System updates",
                    "Ongoing strategy"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs font-bold uppercase tracking-widest text-[#0C0C0C]">
                      <Check className="text-[#D90019] shrink-0 mt-0.5" size={12} strokeWidth={3} /> {item}
                    </li>
                  ))}
                </div>
                
                <Link href="/apply" className="w-full text-center py-4 bg-black text-white font-bebas text-xl tracking-[0.2em] transition-all hover:bg-[#D90019] hover:tracking-[0.3em] active:scale-95">
                  Stay Connected
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* ═══ INDUSTRY PLAYBOOKS (PRESERVED) ═══ */}
        <section className="py-32 px-6 bg-[#FAFAF8] border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 text-center md:text-left">
               <div>
                  <p className="text-[#D90019] font-bold tracking-[0.3em] uppercase mb-4 text-sm font-mono">Proven Systems</p>
                  <h2 className="font-bebas text-6xl sm:text-8xl leading-none uppercase">Industry <span className="text-[#D90019]">Playbooks.</span></h2>
               </div>
               <div className="flex-1 md:max-w-sm">
                  <p className="text-gray-500 font-medium text-lg italic">
                    Specific roadmaps built from real business logic across every major vertical.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0 border-t border-gray-200">
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
                <Link key={i} href={`/industry-categories/${ind.slug}`} className="flex items-center gap-6 py-6 border-b border-gray-100 group transition-all hover:pl-4 hover:bg-white active:scale-[0.98]">
                  <span className="font-bebas text-lg text-gray-300 group-hover:text-[#D90019] transition-colors duration-300">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-bold text-base tracking-tight group-hover:text-[#D90019] transition-colors duration-300 flex-1">{ind.name}</span>
                  <ArrowRight size={16} className="text-gray-200 group-hover:text-[#D90019] group-hover:translate-x-2 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FINAL CTA SECTION ═══ */}
        <section className="py-40 px-6 bg-white overflow-hidden relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-6xl sm:text-8xl lg:text-9xl leading-[0.85] uppercase mb-12 tracking-tight">
              See What Your Business<br />
              <span className="text-[#D90019]">Looks Like Automated</span>
            </h2>
            
            <div className="max-w-2xl mx-auto mb-16 text-left border-l-2 border-[#D90019] pl-8">
               <p className="text-gray-900 text-2xl font-bold mb-6 italic uppercase tracking-wider">We&apos;ll show you exactly:</p>
               <ul className="space-y-4">
                  {[
                    "Where you’re losing money",
                    "What to automate first",
                    "What it would look like installed"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-medium text-gray-600">
                       <Check size={20} className="text-[#D90019]" /> {item}
                    </li>
                  ))}
               </ul>
               <p className="mt-8 text-xl font-bold uppercase tracking-[0.2em] text-[#D90019]">No pitch. Just clarity.</p>
            </div>
            
            <div className="flex flex-col items-center gap-10">
               <Link href="/audit" className="group relative inline-flex font-bebas text-3xl sm:text-4xl tracking-[0.1em] bg-[#D90019] text-white px-16 py-8 hover:bg-black transition-all hover:-translate-y-2 shadow-[0_20px_50px_rgba(217,0,25,0.3)] items-center justify-center gap-6 overflow-hidden">
                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                 Get Your Free AI Audit <ArrowRight size={36} strokeWidth={2.5} className="group-hover:translate-x-2 transition-transform" />
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
      `}</style>
    </div>
  )
}
