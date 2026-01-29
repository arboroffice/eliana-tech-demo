import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"

const benefits = [
  {
    title: "An AI That Never Sleeps",
    description: "Your business runs 24/7. Morning briefs, evening recaps, lead follow-ups — all handled before you wake up.",
  },
  {
    title: "Get 20+ Hours Back",
    description: "Email triage, content scheduling, pipeline management — automated. You focus on what actually moves the needle.",
  },
  {
    title: "Growth on Autopilot",
    description: "SEO blogs deployed daily. Social content written and scheduled. Leads qualified and routed. While you sleep.",
  },
  {
    title: "Every Lead, Handled",
    description: "AI qualifies, responds, and nurtures every lead. No more missed opportunities sitting in your inbox.",
  },
  {
    title: "Know Your Numbers",
    description: "Weekly performance reports generated automatically. See what's working without building a single spreadsheet.",
  },
  {
    title: "Built for YOUR Business",
    description: "Not a template. Not a course. Custom AI systems installed and running inside your actual workflow.",
  },
]

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
                Two Paths. One Outcome: Freedom.
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                STOP BEING THE{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  BOTTLENECK
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                We install AI systems that run your business — so you can focus on growth, or just live your life. Both paths start with a free AI Audit.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free AI Audit
              </Link>
            </div>
          </section>

          {/* BENEFITS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16 sm:mb-20">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  YOUR BUSINESS, UNCHAINED.
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  Imagine waking up to a business that already handled the morning. That&apos;s not a dream — it&apos;s what we build.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <Link
                  href="/audit"
                  className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
                >
                  Get Your Free AI Audit
                </Link>
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-8">
                Ready to stop being the bottleneck?
              </h2>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free AI Audit
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
