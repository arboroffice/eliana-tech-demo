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
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <Link href="/" className="font-bebas text-2xl tracking-[0.12em] text-[#0C0C0C]">
          ELIANA<span className="text-[#D90019]">TECH</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/apply" className="bg-[#D90019] text-white text-[11px] uppercase tracking-widest font-bold px-6 py-3 hover:bg-black transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-500/20">
            Get Access
          </Link>
        </div>
        <Link href="/apply" className="md:hidden bg-[#D90019] text-white p-1.5 rounded-full shadow-lg shadow-red-500/20">
          <ArrowRight size={16} />
        </Link>
      </nav>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center overflow-hidden bg-white">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-8 border border-[#D90019]/20 bg-[#D90019]/5 rounded-full">
              <p className="text-[#D90019] font-mono text-[10px] font-bold uppercase tracking-[0.3em]">ElianaTech</p>
            </div>

            <h1 className="font-bebas text-[clamp(40px,9vw,100px)] leading-[0.85] uppercase mb-8 tracking-tight text-black">
              Turn AI Into<br />
              Real Business<br />
              <span className="text-[#D90019]">Systems.</span>
            </h1>

            <p className="text-gray-500 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
              ElianaTech helps founders and operators use AI to automate workflows,
              capture leads, and scale faster &mdash; without hiring a ton of staff.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/apply" className="w-full sm:w-auto inline-flex font-bebas text-2xl tracking-widest bg-[#D90019] text-white px-10 py-5 hover:bg-black transition-all hover:scale-[1.02] active:scale-95 shadow-2xl shadow-red-500/20 items-center justify-center gap-3">
                Get Access Today <ArrowRight size={22} strokeWidth={3} />
              </Link>
              <a href="#how-it-works" className="text-gray-400 text-sm font-medium tracking-wide hover:text-black transition-colors py-4">
                See How It Works &darr;
              </a>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <section className="bg-black py-6 overflow-hidden border-y border-white/5 whitespace-nowrap">
          <div className="flex animate-marquee gap-12">
            {[
              "AI Systems",
              "Founder Community",
              "Plug-In Workflows",
              "Done For You Builds",
              "AI Systems",
              "Founder Community",
              "Plug-In Workflows",
              "Done For You Builds"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 text-white font-bebas text-2xl sm:text-3xl tracking-[0.1em] uppercase opacity-80">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D90019]"></span>
                {text}
              </div>
            ))}
          </div>
        </section>

        {/* ═══ THE PROBLEM ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">The Problem</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-16 leading-[0.9]">
              Most Founders Are<br />
              <span className="text-gray-300">Stuck With AI.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>They generate content and prompts but nothing changes.</p>
                <p>Leads fall through the cracks.</p>
                <p>Operations are chaotic.</p>
                <p className="text-black font-semibold text-xl pt-4 border-t border-gray-100">
                  Sound familiar?
                </p>
              </div>
              <div>
                <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Meanwhile</p>
                <p className="text-black font-semibold text-lg mb-6">
                  A small group of AI-native founders are building systems that run their business for them:
                </p>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90019] mt-2.5 flex-shrink-0"></span>
                    <p>Automated lead follow-ups</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90019] mt-2.5 flex-shrink-0"></span>
                    <p>Instant estimates and proposals</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90019] mt-2.5 flex-shrink-0"></span>
                    <p>AI-powered client communication</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D90019] mt-2.5 flex-shrink-0"></span>
                    <p>Backend workflows that replace hours of admin</p>
                  </div>
                </div>
                <p className="mt-8 text-black font-semibold border-l-2 border-[#D90019] pl-4">
                  They use the same AI tools you have. You just haven&apos;t seen how yet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#050505] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D90019]/5 blur-[200px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">The Shift</p>
            <h2 className="font-bebas text-4xl sm:text-7xl uppercase tracking-tight mb-6 leading-[0.85]">
              AI Isn&apos;t Just a Tool.<br />
              <span className="text-[#D90019]">It&apos;s an Operator.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Once you start thinking like an AI-native founder, you stop experimenting.
              You start building systems that actually make money.
            </p>
          </div>
        </section>

        {/* ═══ WHAT IS ELIANATECH ═══ */}
        <section id="how-it-works" className="py-24 sm:py-40 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">What Is ElianaTech</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-20 leading-[0.9]">
              The Place for Founders<br />
              Who Want to <span className="text-[#D90019]">Build.</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-gray-100">
              {[
                { num: "01", title: "Build AI Systems", desc: "Real systems for your business, not toy demos." },
                { num: "02", title: "Learn From Operators", desc: "See exactly how other founders are using AI." },
                { num: "03", title: "Plug-In Workflows", desc: "Pre-built workflows that work immediately." },
                { num: "04", title: "Get Help When You Want It", desc: "From DIY to done-for-you, on your terms." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 group">
                  <p className="text-[#D90019] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">{item.num}</p>
                  <h3 className="font-bebas text-2xl uppercase tracking-wide mb-4 group-hover:text-[#D90019] transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-12 text-black font-semibold text-center text-lg border-l-2 border-[#D90019] pl-4 text-left max-w-md mx-auto">
              No theory. No fluff. Just real systems, real results.
            </p>
          </div>
        </section>

        {/* ═══ WHAT YOU GET ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#FAF9F6]">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">What You Get</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-20 leading-[0.9]">
              Pick Your <span className="text-[#D90019]">Level.</span>
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "01",
                  title: "Founder Community",
                  price: "$99/mo",
                  desc: "See other founders' workflows in action. Share your builds and get feedback. Daily AI tips and hacks.",
                  accent: true,
                },
                {
                  phase: "02",
                  title: "AI System Packs",
                  price: "$597\u2013$997+",
                  desc: "Plug-and-play systems: lead capture, AI receptionist, instant estimates, CRM automations.",
                },
                {
                  phase: "03",
                  title: "Build With You",
                  price: "$2K\u2013$5K",
                  desc: "Hands-on group sessions. Implement systems in real-time with guidance. Get it live fast.",
                },
                {
                  phase: "04",
                  title: "Done For You",
                  price: "$5K\u2013$20K+",
                  desc: "Custom AI backend built around your business. Full setup and integration. Serious operators only.",
                },
              ].map((tier, i) => (
                <Link key={i} href="/apply" className={`group block p-8 border transition-all hover:border-[#D90019] hover:-translate-y-1 hover:shadow-xl ${tier.accent ? 'bg-[#D90019] text-white border-[#D90019]' : 'bg-white border-gray-100'}`}>
                  <p className={`font-mono text-[10px] font-bold uppercase tracking-widest mb-6 ${tier.accent ? 'text-white/60' : 'text-gray-300'}`}>{tier.phase}</p>
                  <h3 className={`font-bebas text-2xl uppercase tracking-wide mb-2 ${tier.accent ? '' : 'group-hover:text-[#D90019] transition-colors'}`}>{tier.title}</h3>
                  <p className={`font-bebas text-xl mb-4 ${tier.accent ? 'text-white/80' : 'text-[#D90019]'}`}>{tier.price}</p>
                  <p className={`text-sm leading-relaxed ${tier.accent ? 'text-white/70' : 'text-gray-500'}`}>{tier.desc}</p>
                  <div className={`mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${tier.accent ? 'text-white/80' : 'text-gray-400 group-hover:text-[#D90019]'} transition-all`}>
                    Get Started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHY NOW ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">Why Now</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-20 leading-[0.9]">
              The Gap Is <span className="text-[#D90019]">Growing.</span>
            </h2>

            <div className="space-y-0">
              {[
                { num: "01", title: "AI adoption is exploding", desc: "The tools are here and they're powerful." },
                { num: "02", title: "Most are still experimenting", desc: "Playing with prompts, not building systems." },
                { num: "03", title: "A few are building real leverage", desc: "Systems that save hours and make money." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start py-8 border-b border-gray-100 group hover:bg-[#FAF9F6] px-4 -mx-4 transition-colors">
                  <span className="font-bebas text-3xl text-gray-200 group-hover:text-[#D90019] transition-colors leading-none pt-1">{step.num}</span>
                  <div>
                    <h3 className="text-black font-semibold text-lg mb-1 group-hover:text-[#D90019] transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 text-black font-semibold text-xl text-center">
              Don&apos;t get left behind.
            </p>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">This Is For</p>
              <div className="space-y-4">
                {[
                  "Local service business owners",
                  "Agency owners",
                  "Operators who want leverage",
                  "Founders already using AI but not getting results",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 border-2 border-[#D90019] mt-1.5 flex-shrink-0"></div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-gray-400 font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Not For</p>
              <div className="space-y-4">
                {[
                  "People looking for shortcuts without work",
                  "People who just want to \"learn AI\"",
                  "People who won't implement",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 border-2 border-gray-200 mt-1.5 flex-shrink-0"></div>
                    <p className="text-gray-400">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRIES ═══ */}
        <section className="py-20 sm:py-32 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Industries</p>
            <h2 className="font-bebas text-3xl sm:text-5xl uppercase tracking-tight mb-4">We&apos;ve Built Systems For</h2>
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

        {/* ═══ FINAL CLOSE ═══ */}
        <section className="py-32 sm:py-48 px-6 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D90019]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-gray-600 text-lg mb-4">You can keep using AI for small tasks.</p>
            <p className="text-gray-700 font-bebas text-lg tracking-[0.2em] uppercase mb-8">Or</p>
            <h2 className="font-bebas text-4xl sm:text-7xl leading-[0.85] uppercase mb-8 tracking-tight">
              Use It to Run Parts<br />
              of Your <span className="text-[#D90019]">Business.</span>
            </h2>

            <Link href="/apply" className="group inline-flex font-bebas text-2xl sm:text-3xl tracking-[0.1em] bg-[#D90019] text-white px-14 py-7 hover:bg-white hover:text-black transition-all items-center gap-4 shadow-[0_20px_60px_rgba(217,0,25,0.3)]">
              Join ElianaTech Today <ArrowRight size={28} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <p className="mt-8 text-gray-600 text-xs font-medium">No contracts. No pressure. Just systems.</p>
          </div>
        </section>

      </main>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-black text-white py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
            <Link href="/" className="font-bebas text-3xl tracking-[0.1em] block mb-3">
                ELIANA<span className="text-[#D90019]">TECH</span>
            </Link>
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase text-[9px] mb-2">AI Systems for Founders.</p>
            <p className="text-gray-500 text-xs tracking-wide mb-10">Build. Automate. Scale.</p>

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
      `}</style>
    </div>
  )
}
