"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { motion } from "framer-motion"

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  role: string
  industry: string
  teamSize: string
  currentTools: string
  biggestBottleneck: string
  dreamOutcome: string
  budget: string
  timeline: string
  howHeard: string
}

export default function CaaSApplyPage() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    industry: "",
    teamSize: "",
    currentTools: "",
    biggestBottleneck: "",
    dreamOutcome: "",
    budget: "",
    timeline: "",
    howHeard: "",
  })

  const update = (key: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }))
  }

  const steps = [
    {
      title: "About You",
      subtitle: "Let's start with the basics",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={e => update("name", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={e => update("email", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="john@company.com"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => update("phone", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Company / Business Name *</label>
            <input
              type="text"
              value={form.company}
              onChange={e => update("company", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="Acme Corp"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Your Business",
      subtitle: "Help us understand your operation",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Your Role *</label>
            <select
              value={form.role}
              onChange={e => update("role", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
            >
              <option value="">Select your role...</option>
              <option value="founder-ceo">Founder / CEO</option>
              <option value="operations">Operations / COO</option>
              <option value="sales-leader">Sales Leader</option>
              <option value="marketing">Marketing Lead</option>
              <option value="agency-owner">Agency Owner</option>
              <option value="freelancer">Freelancer / Solopreneur</option>
              <option value="investor">Investor / PE</option>
              <option value="executive">Executive / VP</option>
              <option value="personal">Personal / Life Management</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Industry *</label>
            <input
              type="text"
              value={form.industry}
              onChange={e => update("industry", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="e.g., SaaS, Real Estate, Agency, Healthcare"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Team Size</label>
            <select
              value={form.teamSize}
              onChange={e => update("teamSize", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
            >
              <option value="">Select team size...</option>
              <option value="solo">Just me</option>
              <option value="2-5">2-5 people</option>
              <option value="6-15">6-15 people</option>
              <option value="16-50">16-50 people</option>
              <option value="50+">50+ people</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Current Tools You Use</label>
            <input
              type="text"
              value={form.currentTools}
              onChange={e => update("currentTools", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="e.g., HubSpot, Slack, Google Workspace, Notion"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Your Vision",
      subtitle: "What does your AI-powered future look like?",
      fields: (
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">What is your biggest bottleneck right now? *</label>
            <textarea
              value={form.biggestBottleneck}
              onChange={e => update("biggestBottleneck", e.target.value)}
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg resize-none"
              placeholder="What tasks eat up most of your time? What breaks when you're not watching?"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Describe your dream outcome *</label>
            <textarea
              value={form.dreamOutcome}
              onChange={e => update("dreamOutcome", e.target.value)}
              rows={4}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg resize-none"
              placeholder="If Claude could handle anything for you, what would your ideal week look like?"
            />
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">Budget Range</label>
            <select
              value={form.budget}
              onChange={e => update("budget", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
            >
              <option value="">Select budget range...</option>
              <option value="starter">$2,500/mo (Starter)</option>
              <option value="unsure">Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">How Soon Do You Want to Start?</label>
            <select
              value={form.timeline}
              onChange={e => update("timeline", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
            >
              <option value="">Select timeline...</option>
              <option value="asap">Immediately</option>
              <option value="2-weeks">Within 2 weeks</option>
              <option value="1-month">Within a month</option>
              <option value="exploring">Just exploring</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] text-zinc-500 uppercase tracking-widest mb-3">How Did You Hear About Us?</label>
            <input
              type="text"
              value={form.howHeard}
              onChange={e => update("howHeard", e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 p-4 text-white text-sm focus:border-amber-500 outline-none transition-colors rounded-lg"
              placeholder="Google, Twitter, referral, etc."
            />
          </div>
        </div>
      ),
    },
  ]

  const handleSubmit = () => {
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] text-white font-sans">
        <GlassmorphismNav />
        <div className="pt-40 pb-32 px-6 max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Application Received</h1>
            <p className="text-xl text-zinc-400 mb-4">We'll review your application and get back to you within 24 hours.</p>
            <p className="text-zinc-500 mb-12">In the meantime, check your email for next steps.</p>
            <a href="/caas" className="inline-block bg-zinc-900 border border-zinc-800 text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:border-amber-500 transition-colors">
              Back to CaaS
            </a>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30">
      <GlassmorphismNav />

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/5 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-12">
              <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">CaaS Application</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                {steps[step].title}
              </h1>
              <p className="text-zinc-500">{steps[step].subtitle}</p>
            </div>

            {/* Progress */}
            <div className="flex gap-2 mb-12">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? 'bg-amber-500' : 'bg-zinc-800'}`}
                />
              ))}
            </div>

            {/* Fields */}
            <div className="mb-12">
              {steps[step].fields}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              {step > 0 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="border border-zinc-800 text-zinc-400 px-8 py-4 text-xs uppercase tracking-widest font-bold hover:text-white hover:border-zinc-600 transition-all"
                >
                  Back
                </button>
              ) : <div />}

              {step < steps.length - 1 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="bg-amber-500 text-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-colors"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="bg-amber-500 text-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-black hover:bg-white transition-colors"
                >
                  Submit Application
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
