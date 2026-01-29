"use client"

import { useState, FormEvent } from "react"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"

const steps = [
  { num: "01", title: "Apply Below", desc: "Tell us about yourself and how you'd refer clients. Takes 2 minutes." },
  { num: "02", title: "We Review & Approve", desc: "We'll review your application and reach out if you're a good fit." },
  { num: "03", title: "Earn 10% Commission", desc: "Once approved, refer businesses and earn on every closed deal." },
]

const benefits = [
  "High-ticket offers = big commissions",
  "We close the deals — you just refer",
  "90-day cookie / tracking window",
  "Monthly payouts via PayPal or bank transfer",
  "Real-time dashboard to track referrals (coming soon)",
]

const faqs = [
  { q: "When do I get paid?", a: "Monthly, net-30 after the client pays. You'll receive an email when your commission is processed." },
  { q: "Is there a limit on earnings?", a: "No cap. Refer as many businesses as you want — there's no ceiling on what you can earn." },
  { q: "Do I need to sell?", a: "Not at all. Just make the introduction — we handle the sales process, demos, and closing." },
  { q: "How do I track my referrals?", a: "A real-time dashboard is coming soon. For now, you'll get email updates whenever a referral converts." },
]

const referralMethods = [
  "Social Media",
  "Email List",
  "Word of Mouth",
  "Blog/Content",
  "Business Network",
  "Other",
]

export default function AffiliatesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referralMethod: "",
    website: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/affiliates/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
    } catch {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
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

          {/* Hero */}
          <section className="pt-32 pb-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">Affiliate Program</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Earn{" "}
                <span className="text-emerald-400">$1,000 – $5,000</span>
                <br />
                For Every Business You Refer
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                Know a business that needs AI? Introduce them to ElianaTech and earn 10% commission on every closed deal. No selling required.
              </p>
              <a
                href="#signup"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
              >
                Apply Now →
              </a>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((s) => (
                  <div key={s.num} className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center">
                    <div className="text-5xl font-black text-blue-500/30 mb-4">{s.num}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-slate-400">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Commission Breakdown */}
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Your Commission</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center">
                  <p className="text-blue-400 font-semibold uppercase text-sm mb-2">AI COO Installation</p>
                  <p className="text-slate-400 mb-4">Client pays $10,000</p>
                  <p className="text-5xl md:text-6xl font-black text-emerald-400 mb-2">$1,000</p>
                  <p className="text-slate-400 text-sm">per referral</p>
                </div>
                <div className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 text-center">
                  <p className="text-blue-400 font-semibold uppercase text-sm mb-2">Full AI Infrastructure</p>
                  <p className="text-slate-400 mb-4">Client pays $25,000 – $50,000</p>
                  <p className="text-5xl md:text-6xl font-black text-emerald-400 mb-2">$2,500 – $5,000</p>
                  <p className="text-slate-400 text-sm">per referral</p>
                </div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-8 text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Refer just 5 clients a year ={" "}
                  <span className="text-emerald-400">$5,000 – $25,000</span>{" "}
                  in passive income
                </p>
              </div>
            </div>
          </section>

          {/* Why Partner */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Partner With Us</h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 bg-slate-900/40 backdrop-blur border border-slate-700/40 rounded-xl p-5">
                    <span className="text-blue-400 text-xl mt-0.5">✓</span>
                    <p className="text-slate-200 text-lg">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sign-Up Form */}
          <section id="signup" className="py-20 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Apply to Become an Affiliate</h2>
              <p className="text-slate-400 text-center mb-12">Submit your application below. We&apos;ll review it and contact you if you&apos;re a good fit.</p>

              {submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-12 text-center">
                  <p className="text-3xl mb-2">🎉</p>
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-slate-300">We&apos;ll review your application and reach out if you&apos;re a good fit. Keep an eye on your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-900/60 backdrop-blur border border-slate-700/50 rounded-2xl p-8 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">How will you refer clients?</label>
                    <select
                      value={formData.referralMethod}
                      onChange={(e) => setFormData({ ...formData, referralMethod: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select one...</option>
                      {referralMethods.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Website or Social Link (optional)</label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-slate-800/80 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="https://..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg transition-colors"
                  >
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-slate-900/40 backdrop-blur border border-slate-700/40 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                    <p className="text-slate-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
