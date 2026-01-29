"use client"

import { GlassmorphismNav } from "../../../components/glassmorphism-nav"
import { Footer } from "../../../components/footer"
import Aurora from "../../../components/Aurora"
import { Shield, Lock, CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const orderItems = [
  "24/7 Autonomous AI Assistant",
  "Daily Briefs & Evening Recaps",
  "Content Engine (writes & schedules)",
  "Email Triage & Draft Responses",
  "Lead Qualification & Pipeline Mgmt",
  "SEO Blog Engine (daily, automated)",
  "Custom Automations for Your Business",
  "2 Weeks of Tuning & Optimization",
  "WhatsApp, Email & Tool Integrations",
  "Weekly Performance Reports",
]

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
  })

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          <section className="pt-32 pb-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto">
              <Link
                href="/ai-coo"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to details
              </Link>

              <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">
                Complete Your Order
              </h1>
              <p className="text-slate-400 text-lg mb-10">
                You&apos;re one step away from your AI COO.
              </p>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* LEFT — Form */}
                <div className="lg:col-span-3 space-y-6">
                  <div className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-6">Your Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => update("company", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1.5">Company Size</label>
                        <select
                          value={form.companySize}
                          onChange={(e) => update("companySize", e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-colors"
                        >
                          <option value="" className="bg-slate-800">Select company size</option>
                          <option value="1" className="bg-slate-800">Just me (Solopreneur)</option>
                          <option value="2-5" className="bg-slate-800">2–5 employees</option>
                          <option value="6-20" className="bg-slate-800">6–20 employees</option>
                          <option value="21-50" className="bg-slate-800">21–50 employees</option>
                          <option value="50+" className="bg-slate-800">50+ employees</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Payment */}
                  <div className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8">
                    <h2 className="text-xl font-bold text-white mb-6">Payment</h2>
                    <a
                      href="#stripe-link"
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-xl hover:scale-[1.02] transition-transform shadow-lg shadow-amber-500/25"
                    >
                      <Lock className="w-5 h-5" />
                      Complete Purchase — $10,000
                    </a>
                    <div className="flex items-center justify-center gap-6 mt-6 text-sm text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Lock className="w-3.5 h-3.5" /> 256-bit Encrypted
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5" /> ROI Guaranteed
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Own Everything
                      </span>
                    </div>
                  </div>
                </div>

                {/* RIGHT — Order Summary */}
                <div className="lg:col-span-2">
                  <div className="backdrop-blur-sm bg-slate-900/40 border border-slate-700/50 rounded-2xl p-6 sm:p-8 sticky top-28">
                    <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
                    <div className="space-y-3 mb-6">
                      {orderItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-slate-700/50 pt-4 mb-6">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-400">Total Value</span>
                        <span className="text-slate-400 line-through">$19,500/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white font-bold text-lg">You Pay (One-Time)</span>
                        <span className="text-amber-400 font-black text-2xl">$10,000</span>
                      </div>
                    </div>

                    {/* Guarantee */}
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-emerald-400 font-semibold text-sm mb-1">ROI Guarantee</p>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            Save 20+ hrs/week in 30 days or we rebuild your entire system free of charge. Zero risk.
                          </p>
                        </div>
                      </div>
                    </div>
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
