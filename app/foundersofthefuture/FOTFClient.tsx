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

export default function FOTFClient() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#FAFAF8] text-[#0C0C0C] overflow-x-hidden selection:bg-[#D90019] selection:text-white antialiased">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm' : 'bg-transparent'}`}>
        <Link href="/foundersofthefuture" className="font-bebas text-[22px] tracking-[0.2em] text-[#0C0C0C]">
          FOUNDERS<span className="text-[#D90019]">OTF</span>
        </Link>
        <a href="#join" className="font-mono bg-[#D90019] text-white text-[10px] uppercase tracking-[0.25em] font-bold px-5 py-2.5 hover:bg-black transition-all duration-300">
          Join Now
        </a>
      </nav>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="relative min-h-screen flex flex-col justify-end pb-20 sm:pb-32 px-6 md:px-12 overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D90019]/5 rounded-full blur-[200px] pointer-events-none"></div>
          {/* Grid texture */}
          <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}></div>

          <div className="relative z-10 max-w-[1200px] mx-auto w-full">
            <div className="mb-8 overflow-hidden">
              <p className="font-mono text-[#D90019] text-[10px] sm:text-xs font-bold tracking-[0.5em] uppercase animate-fade-in">
                This is a movement
              </p>
            </div>

            <h1 className="font-bebas text-[clamp(52px,11vw,160px)] leading-[0.82] uppercase tracking-[-0.02em] text-[#0C0C0C] animate-fade-in-heading">
              Stop Playing<br />
              With AI.<br />
              <span className="text-[#D90019]">Start Building<br className="sm:hidden" /> Systems<br className="hidden sm:block" /> That<br className="sm:hidden" /> Make Money.</span>
            </h1>

            <p className="font-syne text-gray-500 text-base sm:text-lg max-w-lg mt-8 leading-relaxed animate-fade-in-sub">
              Whether you&apos;re a founder, building toward becoming one, an employee automating your role, or a manager running ops with AI — this is where you learn to build.
            </p>

            <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-start gap-5 animate-fade-in-buttons">
              <a href="#join" className="group font-bebas text-xl sm:text-2xl tracking-[0.15em] bg-[#D90019] text-white pl-8 pr-6 py-4 sm:py-5 flex items-center gap-4 hover:gap-6 transition-all duration-300 hover:bg-black shadow-lg shadow-red-500/20">
                Join the Community <ArrowRight size={20} strokeWidth={2.5} />
              </a>
              <a href="#proof" className="font-syne text-sm sm:text-base font-semibold text-gray-400 hover:text-[#0C0C0C] transition-colors duration-300 py-4 sm:py-5 flex items-center gap-3">
                See what founders are building <span className="text-[#D90019]">&darr;</span>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-6 md:left-12 w-px h-20 bg-gradient-to-b from-red-600/30 to-transparent"></div>
        </section>


        {/* ═══ THE PROBLEM ═══ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 bg-white border-y border-gray-100 relative">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-syne text-gray-400 text-sm sm:text-base font-medium leading-[2] max-w-xl">
                Right now most people are using AI wrong. They generate content. Ask random questions. Test prompts. And then go right back to doing everything manually.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-20 sm:mt-32">
                <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">Meanwhile</p>
                <h2 className="font-bebas text-[clamp(36px,7vw,100px)] leading-[0.88] uppercase tracking-tight text-[#0C0C0C]">
                  A small group of founders<br />
                  are building systems that<br />
                  <span className="text-[#D90019]">run their businesses.</span>
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-20 font-syne text-gray-300 text-[clamp(20px,3vw,36px)] font-bold leading-tight max-w-2xl">
                Same tools. <span className="text-[#0C0C0C]">Different approach.</span>
              </p>
            </Reveal>
          </div>
        </section>


        {/* ═══ THE SHIFT ═══ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[30vw] text-gray-100 leading-none pointer-events-none select-none whitespace-nowrap">
            OPERATOR
          </div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(60px,14vw,200px)] leading-[0.78] uppercase tracking-[-0.02em] text-[#0C0C0C]">
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
              <p className="mt-16 sm:mt-24 font-syne text-gray-400 text-lg sm:text-xl max-w-lg leading-relaxed">
                Once you understand that, you stop chatting with it — and start <span className="text-[#0C0C0C] font-bold">building</span> with it.
              </p>
            </Reveal>
          </div>
        </section>


        {/* ═══ WHAT THIS IS ═══ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 bg-white border-y border-gray-100">
          <div className="max-w-[1200px] mx-auto">
            <Reveal>
              <p className="font-mono text-[#D90019] text-[10px] font-bold tracking-[0.5em] uppercase mb-6">What This Is</p>
              <h2 className="font-bebas text-[clamp(40px,7vw,100px)] leading-[0.88] uppercase tracking-tight text-[#0C0C0C] mb-6">
                Not a course.<br />
                Not a community.<br />
                <span className="text-[#D90019]">A movement.</span>
              </h2>
              <p className="font-syne text-gray-400 text-lg sm:text-xl max-w-lg mt-8 font-medium">
                Founders. Future founders. Employees. Managers. Operators. Anyone using AI to build, automate, and replace the manual grind. Inside, you don&apos;t get theory.
              </p>
            </Reveal>

            <div className="mt-20 sm:mt-32 grid md:grid-cols-3 gap-0">
              {[
                { label: "Real Workflows", text: "Step-by-step systems you can follow and implement today." },
                { label: "Real Systems", text: "Proven automation stacks that founders are running right now." },
                { label: "Real Use Cases", text: "Stuff you can copy and run. No fluff. Just what works." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="border-t border-gray-200 py-10 pr-12 group">
                    <span className="font-bebas text-[#D90019] text-xl tracking-wide block mb-4">{item.label}</span>
                    <p className="font-syne text-gray-400 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-500">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>








        {/* ═══ WHY NOW ═══ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 border-t border-gray-100 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D90019]/5 rounded-full blur-[150px] pointer-events-none"></div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(48px,10vw,140px)] leading-[0.82] uppercase tracking-[-0.02em] text-[#0C0C0C]">
                This is <span className="text-[#D90019]">early.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-16 sm:mt-24 max-w-xl space-y-6">
                <p className="font-syne text-gray-400 text-lg sm:text-xl leading-relaxed">
                  Most people are still playing with AI.
                </p>
                <p className="font-syne text-[#0C0C0C] text-lg sm:text-xl font-bold leading-relaxed">
                  A few are building real systems with it.
                </p>
                <div className="w-16 h-px bg-[#D90019]/30 my-8"></div>
                <p className="font-syne text-[#D90019] text-2xl sm:text-3xl font-bold italic">
                  That gap is about to get very big.
                </p>
              </div>
            </Reveal>
          </div>
        </section>




        {/* ═══ FINAL CLOSE ═══ */}
        <section className="px-6 md:px-12 py-32 sm:py-48 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-gray-100/50 leading-none pointer-events-none select-none whitespace-nowrap italic">
            BUILD SOMETHING
          </div>

          <div className="max-w-[1200px] mx-auto relative z-10">
            <Reveal>
              <h2 className="font-bebas text-[clamp(36px,6vw,80px)] leading-[0.9] uppercase tracking-tight max-w-4xl text-[#0C0C0C]">
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
                <div className="border-l-2 border-[#D90019]/20 pl-6">
                  <p className="font-syne text-gray-400 text-sm leading-relaxed">
                    If you&apos;ve had the thought:
                  </p>
                  <p className="font-syne text-[#0C0C0C] text-xl font-bold mt-3 leading-snug">
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
      <footer className="bg-black text-white px-6 md:px-12 py-12">
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
