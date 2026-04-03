"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function OpenClawPage() {
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
            TAKE YOUR OS AUDIT
          </Link>
        </div>
      </nav>

      <main>
        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 md:px-24 bg-[#FAFAF8] overflow-hidden">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-12 animate-fade-in">
              <div className="w-16 h-[1px] bg-[#D90019]"></div>
              <p className="text-[#D90019] font-inter text-[11px] font-bold uppercase tracking-[0.4em]">OPENCLAW &bull; AUTONOMOUS BUSINESS INFRASTRUCTURE</p>
            </div>

            <div className="relative mb-14">
              <h1 className="font-playfair text-[clamp(48px,8.5vw,100px)] leading-[1.05] text-black font-medium tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Build a Business<br className="hidden md:block" />
                That Runs<br className="hidden md:block" />
                <span className="relative inline-block">
                  Without You.
                  <span className="absolute bottom-2 left-0 w-full h-[0.15em] bg-[#D90019]/10 -z-10"></span>
                </span>
              </h1>
            </div>

            <div className="text-[#1A1A1A]/60 font-inter text-xl md:text-2xl leading-relaxed max-w-3xl mb-16 space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p>We deploy <span className="text-black font-bold">OpenClaw</span> inside your business&mdash;so your operations, sales, fulfillment, and growth systems run <span className="text-black font-bold">autonomously</span>. Not someday. Now.</p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link href="/audit" className="bg-[#1A1A1A] text-white font-inter text-[11px] font-bold uppercase tracking-[0.2em] px-12 py-7 hover:bg-[#D90019] transition-all active:scale-95 shadow-xl">
                TAKE YOUR OS AUDIT
              </Link>
              <div className="flex flex-col text-[9px] font-bold tracking-[0.2em] text-[#1A1A1A]/40 uppercase leading-relaxed">
                <span>WE MAP YOUR OPERATIONS.</span>
                <span>YOU SEE WHAT RUNS WITHOUT YOU.</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <section className="bg-black py-6 overflow-hidden border-y border-white/5 whitespace-nowrap">
          <div className="flex animate-marquee gap-12">
            {[
              "OpenClaw Setup",
              "Autonomous Operations",
              "AI-Native Business",
              "Founder Freedom",
              "OpenClaw Setup",
              "Autonomous Operations",
              "AI-Native Business",
              "Founder Freedom"
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
          <div className="max-w-3xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">The Problem</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-16 leading-[0.9]">
              You Built a Business.<br />
              <span className="text-gray-300">Now It Owns You.</span>
            </h2>

            <div className="space-y-10 text-lg text-gray-600 leading-relaxed">
              <p>
                Every decision routes through you. Every fire gets put out by you. You started this for <span className="text-black font-semibold">freedom</span>&mdash;but now you are the bottleneck in the system you created.
              </p>
              <p>
                Your sales slow down when you step away. Your operations break when you take a week off. Your team cannot move without your input because the business was never designed to run without you.
              </p>
              <p className="text-black font-semibold text-xl">
                The problem is not that you need more people. The problem is that your business has no autonomous infrastructure. Every workflow still runs through a human who should not need to be there.
              </p>
              <p className="text-[#D90019] font-semibold">
                OpenClaw changes that. We install the infrastructure that makes your business self-running.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ WHAT OPENCLAW DOES ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#0A0A0A] text-white overflow-hidden relative">
          <div className="max-w-3xl mx-auto relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">What We Deploy</p>
            <h2 className="font-bebas text-4xl sm:text-7xl uppercase tracking-tight text-center mb-6 leading-[0.85]">
              Your Business.<br />
              <span className="text-[#D90019]">On Autopilot.</span>
            </h2>

            <div className="space-y-8 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto mb-16">
              <p>
                OpenClaw is <span className="text-white font-semibold">autonomous business infrastructure</span>. We configure it around your operations, your data, and your growth model&mdash;so the business keeps moving whether you are in it or not.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-white/5">
              {[
                {
                  title: "01",
                  headline: "Autonomous Lead Follow-Up",
                  body: "Every lead gets followed up with instantly. Qualified, nurtured, and booked on your calendar without a human touching it. No more leads dying in your inbox."
                },
                {
                  title: "02",
                  headline: "Self-Running Operations",
                  body: "Client onboarding, task delegation, project tracking, team coordination — all automated. Your business runs its own day-to-day so you do not have to."
                },
                {
                  title: "03",
                  headline: "AI-Powered Sales Engine",
                  body: "Proposals generated, objections handled, follow-ups sent, deals closed — your pipeline moves on its own. You step in only for the conversations that matter."
                },
                {
                  title: "04",
                  headline: "Content & Marketing on Autopilot",
                  body: "Blog posts, social content, email sequences, SEO — all created in your brand voice and published without you. Consistent output without the burnout."
                },
                {
                  title: "05",
                  headline: "Financial Intelligence",
                  body: "Revenue tracking, expense monitoring, cash flow forecasting, anomaly detection. You get executive-level visibility without building a finance team."
                },
                {
                  title: "06",
                  headline: "Customer Retention Systems",
                  body: "Automated check-ins, churn prevention, upsell identification, support ticket routing. Your customers stay because the system never forgets them."
                }
              ].map((step, i) => (
                <div key={i} className="bg-[#111] p-10 group">
                  <p className="text-[#D90019] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">{step.title}</p>
                  <h3 className="font-bebas text-2xl uppercase tracking-wide mb-4 group-hover:text-[#D90019] transition-colors">{step.headline}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono text-center">The Process</p>
            <h2 className="font-bebas text-4xl sm:text-6xl uppercase tracking-tight text-center mb-16 leading-[0.9]">
              From OS Audit to<br />
              <span className="text-[#D90019]">Autonomous.</span>
            </h2>

            <div className="space-y-12">
              {[
                {
                  num: "01",
                  title: "OS Audit: Your Entire Operation",
                  body: "We map every workflow, bottleneck, and growth lever in your business. You get a full report showing exactly where you are losing time, money, and momentum — and what should be autonomous."
                },
                {
                  num: "02",
                  title: "We Design Your Autonomous Architecture",
                  body: "We build the blueprint: which systems run themselves, what connects to what, how data flows, and where AI agents take over. Custom to your business, your industry, your goals."
                },
                {
                  num: "03",
                  title: "We Deploy OpenClaw",
                  body: "We install and configure OpenClaw around your operations. CRM, email, calendar, payments, fulfillment — everything integrated. Your business starts running on infrastructure, not on you."
                },
                {
                  num: "04",
                  title: "We Train the System on Your Business",
                  body: "OpenClaw learns your data, your customers, your processes. It gets smarter every day. Within 30 days it understands how your company runs better than most of your team."
                },
                {
                  num: "05",
                  title: "You Step Back",
                  body: "The business runs. Leads get followed up. Operations execute. Content publishes. Reports generate. You make decisions from clarity instead of chaos. That is the whole point."
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="flex-shrink-0 w-14 h-14 border border-gray-200 group-hover:border-[#D90019] transition-colors flex items-center justify-center">
                    <span className="text-[#D90019] font-mono text-sm font-bold">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl uppercase tracking-wide mb-3 group-hover:text-[#D90019] transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR ═══ */}
        <section className="py-20 sm:py-32 px-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">Who This Is For</p>
            <h2 className="font-bebas text-3xl sm:text-5xl uppercase tracking-tight mb-4">Founders Who Want Their Business to Run Without Them.</h2>
            <p className="text-gray-400 text-sm mb-14">If you built something worth keeping but you are tired of being the engine, this is your move.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Agency Owners",
                "SaaS Founders",
                "Consultants & Coaches",
                "Healthcare & Med Spas",
                "Real Estate & Property",
                "Home Services",
                "Professional & Financial",
                "E-commerce & Retail",
                "Course Creators",
                "Events & Hospitality",
                "Local Businesses",
                "Any Founder Ready to Scale",
              ].map((role, i) => (
                <div key={i} className="group bg-[#FAF9F6] border border-gray-100 px-6 py-5 flex items-center justify-between hover:border-[#D90019] hover:bg-white transition-all">
                  <span className="text-gray-700 text-sm font-semibold tracking-wide group-hover:text-[#D90019] transition-colors">{role}</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#D90019] group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE SHIFT ═══ */}
        <section className="py-24 sm:py-40 px-6 bg-[#050505] text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#D90019]/5 blur-[200px]"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="text-[#D90019] font-bold tracking-[0.4em] uppercase mb-6 text-[10px] font-mono">The Shift</p>
            <h2 className="font-bebas text-4xl sm:text-7xl uppercase tracking-tight mb-8 leading-[0.85]">
              Your Competitors Are<br />
              <span className="text-[#D90019]">Already Building This.</span>
            </h2>

            <div className="space-y-8 text-lg text-gray-400 leading-relaxed text-left max-w-2xl mx-auto mb-14">
              <p>
                Every industry is splitting into two groups: founders running AI-native businesses that scale without headcount, and founders still doing everything manually wondering why growth stalled.
              </p>
              <p>
                The ones who move first get compounding advantages. Their systems get smarter every month. Their costs stay flat while revenue grows. Their businesses run while they sleep.
              </p>
              <p className="text-white font-semibold">
                That window is open right now. OpenClaw is how you walk through it.
              </p>
            </div>

            <Link href="/audit" className="group inline-flex font-bebas text-2xl sm:text-3xl tracking-[0.1em] bg-white text-black px-14 py-7 hover:bg-[#D90019] hover:text-white transition-all items-center gap-4 shadow-xl">
              Take Your OS Audit <ArrowRight size={28} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="py-32 sm:py-48 px-6 bg-black text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-[#D90019]/5 to-transparent pointer-events-none"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="font-bebas text-4xl sm:text-7xl leading-[0.85] uppercase mb-8 tracking-tight">
              You Built Something<br />
              <span className="text-gray-600">Worth Protecting.</span><br />
              <span className="text-[#D90019]">Now Automate It.</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-6 leading-relaxed">
              The audit is free. We map your entire operation and show you exactly what runs without you, what OpenClaw automates, and what changes in 30 days.
            </p>

            <p className="text-gray-500 text-sm mb-14">No pressure. No pitch deck. Just your blueprint.</p>

            <Link href="/audit" className="group inline-flex font-bebas text-2xl sm:text-3xl tracking-[0.1em] bg-[#D90019] text-white px-14 py-7 hover:bg-white hover:text-black transition-all items-center gap-4 shadow-[0_20px_60px_rgba(217,0,25,0.3)]">
              Take Your OS Audit <ArrowRight size={28} strokeWidth={3} className="group-hover:translate-x-2 transition-transform" />
            </Link>
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
            <p className="text-gray-500 text-xs tracking-[0.2em] uppercase font-bold mb-4">Chief AI Officer for the modern business.</p>
            <p className="text-gray-600 text-[10px] tracking-[0.15em] uppercase mb-10">Built by a new generation for the businesses that refuse to get left behind.</p>

            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12">
                <Link href="/audit" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Community</Link>
                <Link href="/about" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Work</Link>
                <Link href="/audit" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Audit</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Privacy</Link>
                <Link href="/terms" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Terms</Link>
                <a href="mailto:support@elianatech.com" className="text-gray-500 hover:text-white transition-colors text-[10px] font-bold tracking-widest uppercase">Contact</a>
            </div>

            <p className="text-gray-700 text-[9px] font-bold tracking-[0.5em] uppercase">&copy; 2026 ELIANATECH. ALL RIGHTS RESERVED</p>
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
