"use client"

import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem, Divider } from "../components/scroll-reveal"
import { BrandLogos } from "../components/brand-logos"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-sans">
      <main className="min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#1e293b", "#334155", "#1e293b"]} amplitude={1.2} blend={0.6} speed={0.4} />
        </div>

        <div className="relative z-10">
          <GlassmorphismNav />

          {/* HERO */}
          <section className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 relative py-12 sm:py-0">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6">
                  <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-slate-500 font-bold whitespace-nowrap">Your AI Wing</span>
                  <div className="hidden sm:block w-px h-6 bg-slate-800" />
                  <span className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.4em] text-slate-500 font-bold whitespace-nowrap">Your Chief AI Officer</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-8 uppercase leading-[0.95] sm:leading-[0.9]">
                  We Turn You Into An<br className="hidden sm:block" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500 block sm:inline">
                    AI Native Company
                  </span>
                </h1>

                <div className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                  <p>We identify the single process draining your time and profit, design the system that replaces it, and install it inside your business in 30 days.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Link
                    href="/audit"
                    className="w-full sm:w-auto inline-block px-8 py-3.5 rounded-full bg-white text-black text-base font-black hover:bg-slate-200 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    Free Automation Audit →
                  </Link>
                  <Link
                    href="#founders"
                    className="w-full sm:w-auto inline-block px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-base font-black hover:bg-white/10 transition-all duration-300"
                  >
                    Join Founders of the Future
                  </Link>
                </div>
                <p className="mt-8 text-slate-500 font-bold text-xs uppercase tracking-widest italic">
                  If it does not work, we stay until it does.
                </p>
              </motion.div>
            </div>
          </section>




        </div>

        {/* WHAT WE ACTUALLY DO */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white relative">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mb-16">
                <span className="text-sm uppercase tracking-[0.4em] text-slate-500 font-bold block mb-6">The Product</span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-8 leading-[0.9]">
                  We Install Systems That Do The Work You <span className="text-slate-500">Should Not Be Doing</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-10">
                <ScrollReveal delay={0.1}>
                  <div className="space-y-4 text-lg sm:text-2xl font-black uppercase tracking-tight text-slate-600">
                    <p><span className="text-white">We do not</span> sell tools.</p>
                    <p><span className="text-white">We do not</span> sell prompts.</p>
                    <p><span className="text-white">We do not</span> send you tutorials.</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
                    We architect, build, integrate, test, and deploy real AI systems inside your existing stack.
                  </p>
                </ScrollReveal>
              </div>

              <div className="lg:col-span-5">
                <ScrollReveal delay={0.4}>
                  <div className="p-6 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-white text-black h-full flex flex-col justify-between">
                    <div className="space-y-6">
                      <p className="text-base sm:text-lg font-black uppercase leading-tight italic">
                        "We start with your biggest operational leak. Once it proves itself, we expand."
                      </p>
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base font-bold text-slate-400 uppercase tracking-widest">System by system.</p>
                        <p className="text-sm sm:text-base font-bold text-slate-600 uppercase tracking-widest underline decoration-2 underline-offset-4 decoration-stone-900">Layer by layer.</p>
                        <p className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-widest">Until your operations run without you.</p>
                      </div>
                    </div>
                    <div className="mt-8 sm:mt-12">
                      <Link href="/audit" className="inline-block text-[10px] font-black uppercase tracking-[0.4em] border-b-2 border-black pb-1 hover:text-slate-500 hover:border-slate-500 transition-colors">
                        Request Your Build →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Full Width Logo Carousel */}
            <ScrollReveal delay={0.3} direction="up" className="mt-20 pt-10 border-t border-white/10 overflow-hidden">
              <div className="text-center mb-6">
                <p className="text-slate-500 text-xs italic font-bold tracking-widest uppercase">If it connects, we build on top of it.</p>
              </div>
              <BrandLogos />
            </ScrollReveal>
          </div>
        </section>

        {/* THE OFFER */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-stone-100 text-stone-900 border-y border-stone-200">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">The Economics</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-6">One Build Fee.<br /><span className="text-stone-400 italic">You Own Everything.</span></h2>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                  {["No forced retainers.", "No dependency traps.", "No locked platforms."].map((usp) => (
                    <span key={usp} className="text-[10px] font-black uppercase tracking-[0.3em] px-5 py-2.5 bg-white border border-stone-200 rounded-full">{usp}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* Step 1: The Build */}
              <ScrollReveal delay={0.1}>
                <div className="p-6 sm:p-16 rounded-[2rem] sm:rounded-[3rem] bg-white border border-stone-200 flex flex-col h-full shadow-xl shadow-stone-200/50">
                  <div className="mb-6 sm:mb-10 flex justify-between items-start">
                    <div>
                      <span className="text-stone-300 font-bold text-[9px] uppercase tracking-[0.3em] block mb-3">Phase One</span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">The Build</h3>
                    </div>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-stone-50 flex items-center justify-center border border-stone-100">
                      <span className="text-base sm:text-lg font-black">01</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-stone-500 leading-relaxed mb-6 sm:mb-10 font-medium">
                    We design and install a working AI system inside your business.
                  </p>

                  <div className="space-y-4 mb-16 flex-grow">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-300 block mb-6 px-3 py-1.5 border border-stone-100 rounded-full w-fit">What's Included</span>
                    {[
                      "Custom architecture built around your real bottleneck",
                      "Full integration with your current tools",
                      "End to end build and testing",
                      "30 days of optimization",
                      "Team training",
                      "You own all assets and workflows"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-stone-900 font-bold uppercase tracking-tight text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-stone-100 space-y-4">
                    <div className="flex justify-between items-center group">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors">Single System</span>
                      <span className="text-base font-black uppercase tracking-tight italic">Starting at 5K</span>
                    </div>
                    <div className="flex justify-between items-center group">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors">Department Build</span>
                      <span className="text-base font-black uppercase tracking-tight italic">Starting at 20K</span>
                    </div>
                    <div className="flex justify-between items-center group">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest group-hover:text-stone-900 transition-colors">Enterprise</span>
                      <span className="text-base font-black uppercase tracking-tight italic">Starting at 50K</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Step 2: Revenue Partnership */}
              <ScrollReveal delay={0.2}>
                <div className="p-6 sm:p-16 rounded-[2rem] sm:rounded-[3rem] bg-stone-950 text-white flex flex-col h-full shadow-xl shadow-stone-950/20 relative overflow-hidden group">
                  {/* Abstract background for dark card */}
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-stone-800/10 to-transparent pointer-events-none" />

                  <div className="mb-10 flex justify-between items-start relative z-10">
                    <div>
                      <span className="text-stone-600 font-bold text-[9px] uppercase tracking-[0.3em] block mb-3">Optional Step 02</span>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic">Revenue<br />Partnership</h3>
                    </div>
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                      <span className="text-base sm:text-lg font-black text-stone-500">∞</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-stone-400 leading-relaxed mb-6 sm:mb-10 font-medium relative z-10">
                    Once the first system works, we expand. We do not maintain. We compound.
                  </p>

                  <div className="space-y-4 mb-16 flex-grow relative z-10">
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-stone-600 block mb-6 px-3 py-1.5 border border-white/5 rounded-full w-fit">The Long game</span>
                    {[
                      "New systems & automation layers",
                      "New revenue channels",
                      "Quarterly strategy with Mia",
                      "Priority build queue",
                      "Continuous infrastructure expansion"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-white font-bold uppercase tracking-tight text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-20" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-white/10 relative z-10">
                    <p className="text-lg font-black uppercase italic mb-6 tracking-tighter leading-none">
                      "If revenue does not grow,<br /><span className="text-stone-600">we do not get paid."</span>
                    </p>
                    <p className="text-stone-500 text-[9px] font-black uppercase tracking-[0.2em] mb-1">Percentage scoped after audit.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* THE GUARANTEE & WHO THIS IS FOR */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-white relative border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* The Guarantee column */}
              <div>
                <ScrollReveal>
                  <span className="text-sm uppercase tracking-[0.4em] text-slate-500 font-bold block mb-8">The Guarantee</span>
                  <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                    If It Does Not Save You Time, <span className="italic text-slate-500">We Are Not Done</span>
                  </h2>
                </ScrollReveal>

                <div className="space-y-6 text-base sm:text-lg text-slate-400 font-medium leading-relaxed mb-10 italic border-l-2 border-white/10 pl-6">
                  <ScrollReveal delay={0.1}>
                    <p>"Every build includes 30 days of optimization."</p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.2}>
                    <p>"If the system is not hitting the agreed outcome, we keep working at no extra cost."</p>
                  </ScrollReveal>
                </div>

                <div className="space-y-3">
                  <ScrollReveal delay={0.3}>
                    <p className="text-base font-black uppercase tracking-tight text-slate-500">We are not paid to install software.</p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.35}>
                    <p className="text-xl sm:text-3xl font-black uppercase tracking-tighter underline underline-offset-4 decoration-2">We are paid to remove bottlenecks.</p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Who This Is For column */}
              <div>
                <ScrollReveal>
                  <div className="text-center lg:text-left mb-10">
                    <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">Who This Is For</h2>
                    <p className="text-base text-slate-500 font-bold uppercase tracking-[0.2em] italic">Founders who are done operating.</p>
                  </div>
                </ScrollReveal>

                <StaggerContainer className="flex flex-wrap justify-center lg:justify-start gap-3" staggerDelay={0.03}>
                  {[
                    { name: "SaaS", slug: "saas" },
                    { name: "Agencies", slug: "agencies" },
                    { name: "E-commerce", slug: "ecommerce" },
                    { name: "Home Services", slug: "home-services" },
                    { name: "Real Estate", slug: "real-estate" },
                    { name: "Healthcare", slug: "healthcare" },
                    { name: "Law / Accounting", slug: "legal-finance" },
                    { name: "Construction", slug: "construction" },
                    { name: "Manufacturing", slug: "manufacturing" },
                    { name: "Professional Services", slug: "professional-services" },
                    { name: "Membership", slug: "membership" },
                    { name: "Digital Products", slug: "digital-products" },
                    { name: "Coaches", slug: "coaching" },
                    { name: "Course Creators", slug: "course-creators" },
                    { name: "Hospitality", slug: "hospitality" }
                  ].map((industry) => (
                    <StaggerItem key={industry.slug}>
                      <Link
                        href={`/industries/${industry.slug}`}
                        className="inline-block px-5 py-2.5 rounded-[1.2rem] bg-stone-900/50 border border-white/5 text-xs font-bold uppercase tracking-widest text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        {industry.name} →
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>

                <ScrollReveal delay={0.4}>
                  <div className="mt-12 text-center lg:text-left border-t border-white/5 pt-8">
                    <p className="text-base sm:text-lg font-black uppercase italic tracking-tight mb-2">"If you are scaling and your time is the constraint, this is for you."</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>


        {/* JOIN FOUNDERS OF THE FUTURE */}
        <section id="founders" className="py-24 sm:py-40 px-4 sm:px-6 bg-white text-stone-900 relative overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-sm uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">The Newsletter</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                  Join Founders<br />
                  <span className="italic text-stone-400">Of The Future</span>
                </h2>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto font-medium leading-relaxed italic mb-12">
                  "Two emails a week. Tactical playbooks on building systems that outlive you. No hustle. Just architecture."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="max-w-xl mx-auto p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-stone-50 border border-stone-200 shadow-2xl relative overflow-hidden">
                <form
                  action="https://miaelianaa.substack.com/subscribe"
                  method="GET"
                  target="_blank"
                  className="space-y-4"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 text-base sm:text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-5 rounded-2xl bg-stone-900 text-white font-bold hover:bg-stone-800 transition-all uppercase tracking-widest text-sm shadow-xl"
                  >
                    Subscribe to FOTF
                  </button>
                  <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest mt-4">
                    Read by founders from Techstars, YC, and more. Unsubscribe anytime.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* FINAL CTA: THE PROOF */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tighter mb-10 leading-[0.9]">
                Transform your company into an<br /><span className="text-slate-500 italic">AI native organization</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-base sm:text-lg text-slate-400 font-medium leading-relaxed max-w-xl mx-auto mb-16 italic">
                <p>"Start with the free audit. We map your business, identify the highest leverage automation, and show you exactly what to build."</p>
                <p className="text-white font-bold uppercase not-italic text-sm sm:text-base">If it is not a fit, you leave with the blueprint.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-black hover:bg-slate-200 transition-all duration-300 hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.2)]"
              >
                Get Your Free Audit →
              </Link>
            </ScrollReveal>

          </div>
        </section>

        <Footer />

      </main>

      <style jsx global>{`
        h1, h2, h3, h4 {
          line-height: 1;
        }
      `}</style>
    </div >
  )
}
