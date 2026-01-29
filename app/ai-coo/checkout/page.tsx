"use client"

import { GlassmorphismNav } from "../../../components/glassmorphism-nav"
import { Footer } from "../../../components/footer"
import Aurora from "../../../components/Aurora"
import { CheckCircle2, Shield, Lock, ArrowRight, Tag } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const deliverables = [
  "24/7 Autonomous AI Assistant",
  "Daily Morning Briefs & Evening Recaps",
  "Weekly Performance Reports (Auto-Generated)",
  "Content Engine — Writes & Schedules Posts",
  "Email Triage & Draft Responses",
  "Lead Qualification & Pipeline Management",
  "SEO Blog Engine — Daily, Automated",
  "Connected to WhatsApp, Email & Your Tools",
  "Custom Automations for YOUR Business",
  "2 Weeks of Tuning & Optimization",
]

const DISCOUNT_CODES: Record<string, number> = {
  ELIANA10: 10,
}

export default function AICOOCheckoutPage() {
  const [discountCode, setDiscountCode] = useState("")
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null)
  const [discountError, setDiscountError] = useState("")

  const basePrice = 10000
  const discountAmount = appliedDiscount ? Math.round(basePrice * appliedDiscount.percent / 100) : 0
  const totalPrice = basePrice - discountAmount

  const applyDiscount = () => {
    const code = discountCode.trim().toUpperCase()
    const percent = DISCOUNT_CODES[code]
    if (percent) {
      setAppliedDiscount({ code, percent })
      setDiscountError("")
    } else {
      setAppliedDiscount(null)
      setDiscountError("Invalid discount code")
    }
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="pt-32 pb-24 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                  Complete Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">
                    AI COO
                  </span>{" "}
                  Installation
                </h1>
                <p className="text-lg text-slate-400">
                  One-time investment. No monthly fees. You own everything.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Order Summary */}
                <div className="lg:col-span-3 order-2 lg:order-1">
                  <div className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-8">
                    <h2 className="text-xl font-bold text-white mb-6">What You&apos;re Getting</h2>
                    <div className="space-y-3 mb-8">
                      {deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                          <span className="text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Guarantee */}
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-5 mb-8">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-semibold mb-1">ROI Guarantee</p>
                          <p className="text-slate-300 text-sm">
                            Save 20+ hours per week within 30 days — or we rebuild it free. No questions asked.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      {[
                        { icon: Lock, label: "256-bit Encrypted" },
                        { icon: Shield, label: "ROI Guaranteed" },
                        { icon: CheckCircle2, label: "You Own Everything" },
                      ].map((badge, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-400 text-sm">
                          <badge.icon className="w-4 h-4" />
                          <span>{badge.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Payment Card */}
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <div className="backdrop-blur-sm bg-slate-900/40 border-2 border-amber-500/40 rounded-2xl p-8 lg:sticky lg:top-24">
                    <div className="text-center mb-6">
                      <p className="text-slate-400 text-sm mb-1">AI COO Installation</p>
                      <p className={`text-5xl font-black text-white mb-1 ${appliedDiscount ? "line-through text-slate-500 text-3xl" : ""}`}>$10,000</p>
                      {appliedDiscount && (
                        <p className="text-5xl font-black text-emerald-400 mb-1">${totalPrice.toLocaleString()}</p>
                      )}
                      <p className="text-slate-400 text-sm">One-time payment</p>
                    </div>

                    {/* Discount Code */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        <div className="relative flex-1">
                          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            value={discountCode}
                            onChange={(e) => { setDiscountCode(e.target.value); setDiscountError(""); }}
                            placeholder="Discount code"
                            className="w-full bg-slate-800/80 border border-slate-600 rounded-lg pl-9 pr-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                          />
                        </div>
                        <button
                          onClick={applyDiscount}
                          className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium px-4 py-3 rounded-lg transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {discountError && <p className="text-red-400 text-xs mt-2">{discountError}</p>}
                      {appliedDiscount && (
                        <div className="flex items-center justify-between mt-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-3 py-2">
                          <span className="text-emerald-400 text-sm font-medium">{appliedDiscount.code} — {appliedDiscount.percent}% off</span>
                          <button onClick={() => { setAppliedDiscount(null); setDiscountCode(""); }} className="text-slate-400 hover:text-white text-xs">Remove</button>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 mb-6 text-sm text-slate-300">
                      <div className="flex justify-between">
                        <span>AI COO System</span>
                        <span className="text-white font-medium">$10,000</span>
                      </div>
                      {appliedDiscount && (
                        <div className="flex justify-between">
                          <span className="text-emerald-400">Discount ({appliedDiscount.percent}%)</span>
                          <span className="text-emerald-400 font-medium">-${discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Monthly fees</span>
                        <span className="text-emerald-400 font-medium">$0 — forever</span>
                      </div>
                      <div className="border-t border-slate-700 pt-3 flex justify-between">
                        <span className="text-white font-semibold">Total</span>
                        <span className="text-white font-bold text-lg">${totalPrice.toLocaleString()}</span>
                      </div>
                    </div>

                    <a
                      href="https://buy.stripe.com/4gM9AT5Wgguf1gI6ks97G05"
                      className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/25"
                    >
                      Complete Purchase
                      <ArrowRight className="w-5 h-5" />
                    </a>

                    <p className="text-slate-500 text-xs text-center mt-4">
                      Secure payment via Stripe. You&apos;ll receive onboarding instructions within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
