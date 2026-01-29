import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 mb-6">
                For Founders Doing $500K–$5M Who Feel Trapped
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                THE OPERATING SYSTEM{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  YOUR BUSINESS NEEDS
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed">
                You built a business. Congrats. Now here&apos;s the problem nobody tells you: you&apos;re not a founder anymore. You&apos;re an employee of your own company.
              </p>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                Every decision goes through you. Every problem lands on your desk. The bigger you get, the more trapped you become. This isn&apos;t a motivation problem. This is a <span className="text-white font-semibold">systems problem</span>.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit
              </Link>
            </div>
          </section>

          {/* THE REAL PROBLEM */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10">
                Here&apos;s The Real Problem
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  You built your business on yourself. Your instincts. Your decisions. Your relationships.
                </p>
                <p>
                  That worked at $100K. That worked at $500K. But now you&apos;re at a crossroads:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-bold text-xl mb-3">Path 1: Stay Stuck</h3>
                    <p className="text-slate-400">You keep doing everything yourself. You make good money but you&apos;re trapped. You can&apos;t scale because you can&apos;t clone yourself.</p>
                  </div>
                  <div className="p-6 rounded-2xl border border-white/20 bg-white/10">
                    <h3 className="text-white font-bold text-xl mb-3">Path 2: Build The System</h3>
                    <p className="text-slate-300">You rebuild your business so it runs without you in the middle of everything.</p>
                  </div>
                </div>
                <p>
                  Most founders don&apos;t take path 2 because they think it&apos;s too hard. Or too expensive. Or they don&apos;t know where to start.
                </p>
                <p className="text-slate-500">
                  They stay on path 1. For years. Making the same money. Working the same hours. Getting more tired.
                </p>
              </div>
            </div>
          </section>

          {/* WHY SCALING FAILS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10">
                Why Most Scaling Attempts Fail
              </h2>
              <div className="space-y-8">
                {[
                  { attempt: "You hire a manager.", result: "They need direction from you. So nothing changes." },
                  { attempt: "You create processes.", result: "Your team doesn't follow them. Because they don't match how your business actually works." },
                  { attempt: "You implement software.", result: "It sits unused. Because nobody understands why it matters." },
                  { attempt: "You take a course on delegation.", result: "You feel motivated for a week. Then you go back to doing everything because it's faster than explaining it." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl text-white/20 font-black shrink-0">✕</span>
                    <div>
                      <p className="text-white font-semibold text-lg">{item.attempt}</p>
                      <p className="text-slate-400 mt-1">{item.result}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-lg text-slate-300 mt-10 p-6 rounded-2xl border border-white/10 bg-white/5">
                The problem isn&apos;t execution. The problem is you never built the actual operating system. You just layered stuff on top of the broken system you already had.
              </p>
            </div>
          </section>

          {/* WHAT AN OS LOOKS LIKE */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  What An Operating System Actually Looks Like
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  It&apos;s not complicated. It&apos;s actually simple. But it has to be built right.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Clear Workflows", desc: "Everyone knows what to do and when to do it. No guessing. No waiting for you." },
                  { title: "Decision Frameworks", desc: "Your team makes decisions without you because they know the rules. When to say yes. When to say no." },
                  { title: "Smart Automation", desc: "Leads get followed up. Reports get made. Content gets scheduled. Because the system does it — not because someone remembers." },
                  { title: "Real Accountability", desc: "People know what they're responsible for. Results are tracked. Problems get fixed fast." },
                  { title: "True Scalability", desc: "Add revenue without adding proportional overhead. Your business grows. Your workload doesn't." },
                  { title: "Your Freedom", desc: "You work less. You think more about strategy. You actually have time to live your life." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-lg text-slate-300 mt-12">
                That&apos;s it. That&apos;s what separates businesses that scale from businesses that stay stuck.
              </p>
            </div>
          </section>

          {/* TIMELINE — WHAT HAPPENS WITHOUT IT */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12">
                What Happens When You Don&apos;t Build This
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/5 hidden sm:block" />
                {[
                  { year: "Year 1–2", text: "You're excited. You're making money. Life is good.", color: "text-green-400" },
                  { year: "Year 3–4", text: "Growth slows. You're tired. Every new customer requires more of your time.", color: "text-yellow-400" },
                  { year: "Year 5+", text: "You're stuck. Making decent money but can't grow. Hiring more people doesn't help — they just slow you down waiting for decisions.", color: "text-red-400" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-6 sm:pl-10">
                    <div>
                      <span className={`text-sm font-bold uppercase tracking-wider ${item.color}`}>{item.year}</span>
                      <p className="text-lg text-slate-400 mt-2">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-slate-500 mt-10 text-lg italic">
                A business that looks successful from the outside but feels like a prison from the inside. This is where most founders live.
              </p>
            </div>
          </section>

          {/* WHAT HAPPENS WHEN YOU DO */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10">
                What Happens When You Do
              </h2>
              <div className="space-y-6">
                {[
                  "Leads come in and get qualified automatically. No more dead leads sitting in your inbox.",
                  "Your team moves fast. They make decisions. They execute. They don't wait for you.",
                  "Problems get caught early because there's visibility. You're not firefighting anymore.",
                  "Growth accelerates because your business can handle more customers without your personal involvement.",
                  "You work less. You think more about strategy. You actually have time to live your life.",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-white/30 text-xl mt-1">→</span>
                    <p className="text-lg text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white font-semibold text-lg mt-10">
                This isn&apos;t theoretical. We&apos;ve done this for 50+ different types of businesses.
              </p>
            </div>
          </section>

          {/* HOW WE DO IT */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  How We Actually Do It
                </h2>
              </div>

              <div className="space-y-12">
                {/* Step 1 */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-5xl font-black text-white/10">01</span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4">The Audit</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-4">
                    We spend time in your actual business. Not surface level. Deep. We talk to your team. We see how decisions really get made. We find where time disappears.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Most founders think they know what&apos;s wrong. They&apos;re usually wrong. They think it&apos;s a people problem. It&apos;s a systems problem.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-5xl font-black text-white/10">02</span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4">The Diagnosis</h3>
                  <p className="text-lg text-slate-400 leading-relaxed mb-4">
                    We map out what your operating system needs to look like. What stays with you. What gets delegated. What gets automated. Where your team needs training.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    Most people are surprised. Not by how expensive it is. By how much money they&apos;re already leaving on the table.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-5xl font-black text-white/10">03</span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4">You Choose</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                      <h4 className="text-white font-bold text-lg mb-2">The Container</h4>
                      <p className="text-slate-400">You learn it. We guide you. You build it inside your business. Takes longer. You own the process. Better if you want to understand how your business works.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-white/20 bg-white/10">
                      <h4 className="text-white font-bold text-lg mb-2">Done-For-You</h4>
                      <p className="text-slate-300">We build it. We install it. We make it work. Takes shorter. You focus on other things. Better if you want results fast.</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mt-6">Both paths get you to the same place. Different timelines. Different investments. Your choice.</p>
                </div>

                {/* Step 4 */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <span className="text-5xl font-black text-white/10">04</span>
                  <h3 className="text-2xl font-bold text-white mt-4 mb-4">Transformation</h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    Systems get installed. Workflows get built. Your team gets trained. Automations start running. Within <span className="text-white font-semibold">90 days</span>, everything looks different. Your team moves faster. You&apos;re not in every decision. Growth accelerates. You have time back.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* THE AUDIT IS FREE */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                The Audit Is Actually Free
              </h2>
              <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
                <p>
                  Not a sales call disguised as a consultation. Not a pitch.
                </p>
                <p>
                  We actually diagnose your business. We show you where you&apos;re broken. What opportunities you&apos;re missing. What&apos;s possible.
                </p>
                <p>
                  Some people do the audit and decide they don&apos;t need us. That&apos;s fine. At least they know what they&apos;re dealing with.
                </p>
                <p className="text-slate-300">
                  Most people do the audit and realize their business is costing them way more than they thought. In time. In missed opportunities. In trapped potential.
                </p>
                <p className="text-white font-semibold">
                  That insight alone is worth something. The path forward is worth even more.
                </p>
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12">
                We&apos;ve Built Operating Systems For
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "Home Services", "Automotive", "Real Estate", "Healthcare",
                  "Restaurants", "Salons & Spas", "Construction", "Retail",
                  "Professional Services", "And 50+ more"
                ].map((industry) => (
                  <span
                    key={industry}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                      industry === "And 50+ more"
                        ? "border-white/30 text-white bg-white/10"
                        : "border-white/10 text-slate-300 bg-white/5 hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="text-lg text-slate-400 italic">
                &ldquo;If your business has customers, leads, and operations, we can help.&rdquo;
              </p>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Ready to stop being the bottleneck in your own business?
              </h2>
              <p className="text-lg text-slate-400 mb-10">
                The audit is free. The insight is priceless. The transformation is inevitable.
              </p>
              <Link
                href="/audit"
                className="inline-block px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Audit
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
