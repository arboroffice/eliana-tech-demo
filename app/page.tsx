"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-24 h-20 sm:h-24 flex items-center justify-between ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-playfair italic text-2xl tracking-tight text-[#0C0C0C] font-black">
            Elianatech
          </span>
          <span className="font-playfair text-[11px] tracking-[0.1em] text-[#D90019] font-bold">
            [AI WING]
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/audit" className="bg-[#1A1A1A] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-8 py-3.5 hover:bg-[#D90019] transition-all active:scale-95">
            FREE AI AUDIT
          </Link>
        </div>
      </nav>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 md:px-24 bg-[#FAFAF8] overflow-hidden">
          <div className="max-w-5xl">
            {/* Tagline with line */}
            <div className="flex items-center gap-4 mb-12 animate-fade-in">
              <div className="w-16 h-[1px] bg-[#D90019]"></div>
              <p className="text-[#D90019] font-inter text-[11px] font-bold uppercase tracking-[0.4em]">YOUR CHIEF AI OFFICER</p>
            </div>

            {/* Headline */}
            <div className="relative mb-14">
              <h1 className="font-playfair text-[clamp(48px,8.5vw,100px)] leading-[1.05] text-black font-medium tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                What If Your <br className="hidden md:block" />
                <span className="relative inline-block">
                  Business Ran
                  <span className="absolute bottom-2 left-0 w-full h-[0.15em] bg-[#D90019]/10 -z-10"></span>
                </span> Without <br className="hidden md:block" />
                <span className="relative inline-block">
                  You?
                  <span className="absolute bottom-2 left-0 w-full h-[0.15em] bg-[#D90019]/10 -z-10"></span>
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[#1A1A1A]/60 font-inter text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Not a chatbot. Not a dashboard. A full <span className="text-black font-bold">AI Wing</span> installed
              inside your company so you wake up to a business that already handled
              the morning without you.
            </p>

            {/* CTA Area */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/audit" className="bg-[#1A1A1A] text-white font-inter text-[11px] font-bold uppercase tracking-[0.2em] px-12 py-7 hover:bg-[#D90019] transition-all active:scale-95 shadow-xl">
                SEE WHAT WE'D BUILD FOR YOU
              </Link>
              <div className="flex flex-col text-[9px] font-bold tracking-[0.2em] text-[#1A1A1A]/40 uppercase leading-relaxed">
                <span>FREE AUDIT. NO PITCH DECK.</span>
                <span>JUST YOUR BLUEPRINT.</span>
              </div>
            </div>
          </div>

        </section>

        {/* ═══ MARQUEE ═══ */}
        <section className="bg-black py-6 overflow-hidden border-y border-white/5 whitespace-nowrap">
          <div className="flex animate-marquee gap-12">
            {[
              "Your AI Wing",
              "Chief AI Officer",
              "Private Infrastructure",
              "Installed in 7 Days",
              "Your AI Wing",
              "Chief AI Officer",
              "Private Infrastructure",
              "Installed in 7 Days"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-bebas text-2xl sm:text-3xl tracking-[0.1em] uppercase opacity-80">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D90019]"></span>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ THE REAL PROBLEM ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">The Truth</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-16 leading-[0.9]">
              You Built a Business.<br />
              <span className="text-gray-300">Then It Trapped You.</span>
            </h2>

            <div className="space-y-10 text-lg text-gray-600 leading-relaxed">
              <p>
                You're the first one in and the last one out. Every decision routes through you.
                Every lead that slips is on you. Every follow-up you forgot? Revenue gone.
              </p>
              <p>
                You didn't start this to become the most overworked person in the building.
                You started it for <span className="text-black font-semibold">freedom</span>.
              </p>
              <p className="text-black font-semibold text-xl">
                Somewhere along the way, you became the system. And the system broke.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#050505] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D90019]/5 blur-[200px]"></div>
          <div className="max-w-4xl mx-auto relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">The Shift</p>
            <h2 className="font-bebas text-4xl sm:text-7xl uppercase tracking-tight text-center mb-6 leading-[0.85]">
              We Become Your<br />
              <span className="text-[#D90019]">AI Wing.</span>
            </h2>
            <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto mb-20">
              Think of us as the department you always needed but couldn't afford to hire.
              A Chief AI Officer, a systems architect, and an operations team.
              Except it's infrastructure, not headcount.
            </p>

            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {[
                {
                  title: "Day 1-3",
                  headline: "We Map Everything",
                  body: "Where you're bleeding time. Where leads die. Where money sits on the table. We find it all."
                },
                {
                  title: "Day 4-6",
                  headline: "We Build the Machine",
                  body: "Private servers. Custom agents. Your entire operation wired into a system that thinks, acts, and reports back."
                },
                {
                  title: "Day 7",
                  headline: "You Step Back",
                  body: "The business runs. You make decisions from a position of clarity instead of chaos. That's the whole point."
                },
                {
                  title: "Ongoing",
                  headline: "We Stay On As Your AI Wing",
                  body: "Optionally, we keep building new playbooks and automations monthly."
                }
              ].map((step, i) => (
                <div key={i} className="bg-[#0A0A0A] p-10 group">
                  <p className="text-[#D90019] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">{step.title}</p>
                  <h3 className="font-bebas text-2xl uppercase tracking-wide mb-4 group-hover:text-[#D90019] transition-colors">{step.headline}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ═══ NOT A TOOL / AN AI WING ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#FAF9F6]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Not a Tool</p>
              <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight mb-8 leading-[0.9]">
                This Isn't Software.<br />
                <span className="text-[#D90019]">It's a Department.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Software gives you another tab to check. Another login. Another thing to manage.
                </p>
                <p>
                  An AI Wing gives you <span className="text-black font-semibold">a part of your company that works without you</span>.
                  It doesn't wait for instructions. It reads the situation, acts, and reports back.
                </p>
                <p>
                  We install it on private infrastructure you own. It evolves monthly.
                  And it never asks for time off.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="font-bebas text-4xl text-[#D90019] mb-2 leading-none uppercase">Private</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Servers</p>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Your data never leaves your control. No third-party training on your proprietary ops.</p>
              </div>
              <div className="bg-black p-8 text-white shadow-xl">
                <h3 className="font-bebas text-4xl text-[#D90019] mb-2 leading-none uppercase">Chief AI</h3>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Officer</p>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Strategic AI leadership without the $300K salary. We map the vision, you make the calls.</p>
              </div>
              <div className="bg-white p-8 border border-gray-100 shadow-sm col-span-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bebas text-4xl text-[#D90019] mb-2 leading-none uppercase">Evolving</h3>
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-4">Monthly</p>
                  </div>
                  <div className="bg-[#D90019]/10 text-[#D90019] text-[8px] font-bold px-2 py-1 uppercase tracking-widest">Always New</div>
                </div>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">New capabilities, new playbooks, new intelligence. Deployed to your system every month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES ═══ */}
        <section className="py-20 sm:py-32 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Industries</p>
            <h2 className="font-bebas text-3xl sm:text-5xl uppercase tracking-tight mb-4">We've Built Systems For</h2>
            <p className="text-gray-400 text-sm mb-14">Every industry has different ops. We know yours.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Medical & Dental", slug: "medical-dental" },
                { name: "Home Services (High Ticket)", slug: "home-services-high-ticket" },
                { name: "Home Services (Recurring)", slug: "home-services-recurring" },
                { name: "Legal Services", slug: "legal" },
                { name: "Beauty & Personal Care", slug: "beauty-personal-care" },
                { name: "Real Estate & Property", slug: "real-estate-property" },
                { name: "Health & Wellness", slug: "health-wellness" },
                { name: "Pet Services", slug: "pet-services" },
                { name: "Automotive", slug: "automotive" },
                { name: "Professional & Financial", slug: "professional-financial" },
                { name: "Events & Hospitality", slug: "events-hospitality" },
                { name: "Education & Childcare", slug: "education-childcare" },
                { name: "SaaS Founders", slug: "saas" },
                { name: "Course Creators", slug: "course-creators" },
                { name: "Coaches & Consultants", slug: "coaching" },
                { name: "E-commerce & Retail", slug: "ecommerce" },
                { name: "Agencies", slug: "agencies" },
                { name: "Misc. Local Services", slug: "misc-local-services" }
              ].map((cat, i) => (
                <Link key={i} href={`/industry-categories/${cat.slug}`} className="group bg-[#FAF9F6] border border-gray-100 px-6 py-5 flex items-center justify-between hover:border-[#D90019] hover:bg-white transition-all">
                  <span className="text-gray-700 text-sm font-semibold tracking-wide group-hover:text-[#D90019] transition-colors">{cat.name}</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#D90019] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE QUESTION ═══ */}
        <section className="py-32 sm:py-48 px-6 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D90019]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-4xl sm:text-7xl leading-[0.85] uppercase mb-8 tracking-tight">
              You Built Something<br />
              <span className="text-gray-600">Worth Protecting.</span><br />
              <span className="text-[#D90019]">Now Systemize It.</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-14 leading-relaxed">
              The audit is free. We'll map your entire operation and show you
              exactly where an AI Wing would sit inside your company.
              If it doesn't make sense, we'll tell you.
            </p>

            <Link href="/audit" className="group inline-flex font-bebas text-2xl sm:text-3xl tracking-[0.1em] bg-[#D90019] text-white px-14 py-7 hover:bg-white hover:text-black transition-all items-center gap-4 shadow-[0_20px_60px_rgba(217,0,25,0.3)]">
              Get Your Free AI Audit <ArrowRight size={28} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <p className="mt-8 text-gray-600 text-xs font-medium">No contracts. No pressure. Just clarity.</p>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-black text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
            <Link href="/" className="inline-block group mb-6">
                <span className="font-playfair italic text-3xl tracking-tight text-white font-black">
                  Elianatech
                </span>
                <span className="font-playfair text-[12px] tracking-[0.1em] text-[#D90019] font-bold block mt-1">
                  [AI WING]
                </span>
            </Link>
            <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold mb-10">Chief AI Officer for the modern enterprise.</p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
                <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">About</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Privacy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Terms</Link>
                <Link href="/audit" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Audit</Link>
                <a href="mailto:elianatech@yahoo.com" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Contact</a>
            </div>

            <p className="text-gray-700 text-[9px] font-bold tracking-[0.5em] uppercase">&copy; 2026 ELIANATECH. ALL RIGHTS RESERVED</p>
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

        .font-bebas {
           font-family: var(--font-bebas-neue), cursive;
        }

        .font-playfair {
          font-family: var(--font-playfair), serif;
        }

        .font-inter {
          font-family: var(--font-inter), sans-serif;
        }
      `}</style>
    </div>
  )
}
