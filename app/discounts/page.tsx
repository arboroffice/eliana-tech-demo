"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import { Percent, Zap, Users, ArrowRight } from "lucide-react"

const offers = [
  {
    name: "AI COO Installation",
    original: "$10,000",
    discounted: "$9,000",
    savings: "$1,000",
    href: "/ai-coo",
  },
  {
    name: "Full AI Infrastructure",
    original: "From $25,000",
    discounted: "From $22,500",
    savings: "Up to $5,000",
    href: "/infrastructure",
  },
]

export default function DiscountsPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero */}
          <section className="pt-32 pb-16 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Percent className="w-4 h-4" />
                Limited Time Offer
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
                Save{" "}
                <span className="text-emerald-400">10%</span>{" "}
                on Any Package
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                Get 10% off our AI automation packages. Same transformative results — at a better price.
              </p>
            </div>
          </section>

          {/* Discounted Offers */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {offers.map((offer) => (
                <div
                  key={offer.name}
                  className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center flex flex-col"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{offer.name}</h3>
                  <p className="text-slate-500 line-through text-2xl mb-1">{offer.original}</p>
                  <p className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">{offer.discounted}</p>
                  <p className="text-emerald-300 text-sm font-semibold mb-8">You save {offer.savings}</p>
                  <div className="mt-auto">
                    <a
                      href={offer.href}
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors w-full justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Claim */}
          <section className="py-16 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How to Claim Your Discount</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Zap, title: "Book an Audit", desc: "Start with a free AI Audit to see what we can automate for you." },
                  { icon: Users, title: "Mention This Page", desc: "Let us know you found the discount page during your audit call." },
                  { icon: Percent, title: "Save 10%", desc: "We'll apply 10% off your package. That simple." },
                ].map((step, i) => (
                  <div key={i} className="bg-slate-900/40 backdrop-blur border border-slate-700/40 rounded-xl p-6 text-center">
                    <step.icon className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Save?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Book your free AI Audit and mention this page to lock in your 10% discount.
              </p>
              <a
                href="/audit"
                className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg px-10 py-5 rounded-full transition-colors"
              >
                Book Your Free AI Audit
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-slate-500 text-sm mt-4">No commitment required. See what AI can do for your business first.</p>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
