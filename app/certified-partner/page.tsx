"use client"

import { useState, FormEvent } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"

const curriculum = [
  { title: "AI Business Auditing", desc: "How to audit any business for AI opportunities and build a transformation roadmap" },
  { title: "AI COO System Installation", desc: "Install our flagship AI COO system — the $10K offer that sells itself" },
  { title: "Full AI Infrastructure Builds", desc: "Architect and deploy $25K–$50K enterprise AI infrastructure projects" },
  { title: "Client Management & Onboarding", desc: "Proven frameworks for smooth client experiences from day one" },
  { title: "Sales & Positioning", desc: "How to sell AI services, handle objections, and close high-ticket deals" },
  { title: "Proprietary Installation Framework", desc: "Our exact playbook — the systems we use internally on every engagement" },
  { title: "Tools, Templates & SOPs", desc: "Full access to our tool stack, project templates, and standard operating procedures" },
]

const benefits = [
  { icon: "🔥", title: "High-Demand Skill", desc: "Every business needs AI. The market is exploding and there aren't enough installers." },
  { icon: "💰", title: "Earn $5K–$25K Per Installation", desc: "One project per month can replace most full-time incomes." },
  { icon: "🏗️", title: "Proven Framework & Brand", desc: "Use the ElianaTech name, methodology, and brand credibility." },
  { icon: "🤝", title: "Ongoing Support & Community", desc: "You're never alone. Weekly calls, Slack access, and direct team support." },
  { icon: "📈", title: "Deal Flow Access", desc: "We send you clients. Our pipeline grows faster than we can serve it." },
  { icon: "🎓", title: "No Tech Background Required", desc: "We teach you everything from scratch. Willingness to learn is all you need." },
]

const steps = [
  { num: "01", title: "Apply Below", desc: "Fill out the application. Tell us who you are and why you want in." },
  { num: "02", title: "Interview & Acceptance", desc: "We'll hop on a call. This is selective — we want the right partners." },
  { num: "03", title: "Complete Certification Training", desc: "4–6 weeks of intensive, hands-on training with our team." },
  { num: "04", title: "Start Installing AI", desc: "Launch your AI installation business with our full support behind you." },
]

const faqs = [
  { q: "What does certification cost?", a: "Pricing is discussed during the interview. We want the right partners, not the most." },
  { q: "How long is the training?", a: "4–6 weeks of intensive training plus ongoing support and resources." },
  { q: "Do I need technical experience?", a: "No. We teach you everything from scratch. Many of our best partners came from non-tech backgrounds." },
  { q: "Can I keep my current job?", a: "Absolutely. Many partners start part-time. One installation per month = $5K–$25K extra income." },
  { q: "What support do I get after certification?", a: "Slack community, weekly calls, templates, SOPs, and direct access to our team — for as long as you're a partner." },
]

export default function CertifiedPartnerPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      await fetch("/api/certified-partner/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
          <Aurora colorStops={["#2e1065", "#4c1d95", "#2e1065"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero */}
          <section className="pt-32 pb-20 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide uppercase">
                Application-Only Program
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Become a Certified{" "}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  AI Installer
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                Join our partner program. Learn our framework. Get certified. Build your own AI installation business.
              </p>
              <a href="#apply" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors text-lg">
                Apply Now
              </a>
            </div>
          </section>

          {/* What You'll Learn */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">What You&apos;ll Learn</h2>
              <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">Our certification covers everything you need to install AI systems for businesses — from audit to deployment.</p>
              <div className="grid md:grid-cols-2 gap-4">
                {curriculum.map((item, i) => (
                  <div key={i} className="p-6 rounded-xl border border-purple-500/20 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Become a Partner */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Why Become a Partner</h2>
              <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">This isn&apos;t a course. It&apos;s a business-in-a-box backed by a team that&apos;s already doing it.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((b, i) => (
                  <div key={i} className="p-6 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
                    <div className="text-3xl mb-3">{b.icon}</div>
                    <h3 className="text-white font-semibold mb-2">{b.title}</h3>
                    <p className="text-slate-400 text-sm">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
              <div className="space-y-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-400 font-bold text-lg shrink-0">
                      {s.num}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-white font-semibold text-lg mb-1">{s.title}</h3>
                      <p className="text-slate-400">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who This Is For */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Is This For You?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-xl border border-purple-500/30 bg-purple-500/5 backdrop-blur-sm">
                  <h3 className="text-purple-400 font-bold text-lg mb-4 flex items-center gap-2">✅ This Is For You If…</h3>
                  <ul className="space-y-3 text-slate-300 text-sm">
                    <li>• You&apos;re an entrepreneur, consultant, or agency owner</li>
                    <li>• You want to build a real business around AI</li>
                    <li>• You&apos;re a tech enthusiast ready to go pro</li>
                    <li>• You&apos;re coachable and client-focused</li>
                    <li>• You want high-income skills backed by a proven system</li>
                  </ul>
                </div>
                <div className="p-8 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
                  <h3 className="text-red-400 font-bold text-lg mb-4 flex items-center gap-2">❌ This Is NOT For You If…</h3>
                  <ul className="space-y-3 text-slate-400 text-sm">
                    <li>• You&apos;re looking for a quick buck</li>
                    <li>• You&apos;re not willing to learn and put in the work</li>
                    <li>• You don&apos;t care about client results</li>
                    <li>• You want passive income with zero effort</li>
                    <li>• You can&apos;t commit to the training process</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form */}
          <section id="apply" className="py-20 px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">Apply Now</h2>
              <p className="text-slate-400 text-center mb-10">Spots are limited. We review every application personally.</p>

              {submitted ? (
                <div className="p-8 rounded-xl border border-purple-500/30 bg-purple-500/10 text-center">
                  <div className="text-4xl mb-4">🎉</div>
                  <h3 className="text-white text-xl font-bold mb-2">Application Received!</h3>
                  <p className="text-slate-300">We review applications weekly and will reach out if you&apos;re a good fit. Keep an eye on your inbox.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Full Name *</label>
                    <input name="fullName" required className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Email *</label>
                    <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Phone *</label>
                    <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">LinkedIn or Website</label>
                    <input name="linkedinOrWebsite" className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="https://" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Current Role / Business *</label>
                    <input name="currentRole" required className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors" placeholder="e.g. Marketing Consultant, Agency Owner" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">Why do you want to become a Certified AI Installer? *</label>
                    <textarea name="motivation" required rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell us what drives you…" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-300 mb-1.5">How did you hear about us? *</label>
                    <select name="source" required className="w-full px-4 py-3 rounded-lg bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-purple-500 transition-colors">
                      <option value="">Select one…</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral</option>
                      <option value="YouTube">YouTube</option>
                      <option value="Blog">Blog</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-lg mt-4">
                    {loading ? "Submitting…" : "Submit Application"}
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left p-5 rounded-xl border border-slate-700/50 bg-slate-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-colors">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white font-medium pr-4">{faq.q}</h3>
                      <span className="text-purple-400 text-xl shrink-0">{openFaq === i ? "−" : "+"}</span>
                    </div>
                    {openFaq === i && <p className="text-slate-400 mt-3 text-sm">{faq.a}</p>}
                  </button>
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
