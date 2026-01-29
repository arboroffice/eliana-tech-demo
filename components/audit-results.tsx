"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import {
  TrendingUp, AlertCircle, CheckCircle2, Target, Lightbulb,
  Rocket, DollarSign, Clock, Users, BarChart3, ArrowRight,
  Download, Calendar, Zap, Brain, Phone, Mail, Star,
  ShieldCheck, Settings, MessageSquare, FileText, Calculator
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface AuditResultsProps {
  formData: any
  auditScore: number
}

// ─── Helpers ──────────────────────────────────────────────
function parseMissedCalls(v: string): number {
  if (v === '30+') return 35
  if (v === '10-30') return 20
  if (v === '5-10') return 7
  return 3
}

function parseDealSize(v: string): number {
  if (v === 'enterprise') return 50000
  if (v === 'high') return 15000
  if (v === 'medium') return 5000
  if (v === 'small') return 500
  return 100
}

function parseConversionPct(v: string): number {
  if (v === '50%+') return 0.55
  if (v === '30-50%') return 0.4
  if (v === '20-30%') return 0.25
  if (v === '10-20%') return 0.15
  return 0.07
}

function fmt$(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`
  return `$${Math.round(n)}`
}

function scoreColor(s: number) {
  if (s >= 70) return "text-emerald-400"
  if (s >= 40) return "text-yellow-400"
  return "text-red-400"
}
function scoreBg(s: number) {
  if (s >= 70) return "stroke-emerald-400"
  if (s >= 40) return "stroke-yellow-400"
  return "stroke-red-400"
}

// ─── Sub-score calculator ─────────────────────────────────
function calcSubScores(fd: any) {
  const revenue = fd.revenueTrend === 'Growing' ? 78 : fd.revenueTrend === 'Flat' ? 48 : 22
  const automation = fd.percentAutomated === '>70%' ? 85 : fd.percentAutomated === '30-70%' ? 58 : fd.percentAutomated === '<30%' ? 32 : 12
  const sales = fd.conversionRate === '50%+' ? 88 : fd.conversionRate === '30-50%' ? 68 : fd.conversionRate === '20-30%' ? 48 : fd.conversionRate === '10-20%' ? 28 : 14
  const retention = fd.repeatCustomers === '50%+' ? 85 : fd.repeatCustomers === '25-50%' ? 62 : fd.repeatCustomers === '10-25%' ? 38 : 18
  const time = fd.twoWeeksOff === 'Yes' ? 82 : fd.twoWeeksOff === 'Maybe' ? 48 : 18
  return { revenue, automation, sales, retention, time }
}

function categoryInsight(cat: string, fd: any): string {
  switch (cat) {
    case 'Revenue':
      if (fd.revenueTrend === 'Growing') return "Your financial foundation is solid. AI can accelerate this trajectory."
      if (fd.revenueTrend === 'Flat') return "Revenue has plateaued — AI-driven lead gen and upsells can reignite growth."
      return "Revenue is declining. Urgent AI intervention can stabilize and reverse the trend."
    case 'Automation':
      if (fd.percentAutomated === '>70%') return "You're well-automated. Fine-tuning and AI intelligence layers are your next edge."
      if (fd.percentAutomated === '30-70%') return "You have the tools but they're not connected. Automation could save you 20+ hrs/week."
      return "Most tasks are manual. Automation alone could transform your capacity overnight."
    case 'Sales':
      if (parseConversionPct(fd.conversionRate) >= 0.3) return "Strong conversion rate. AI can optimize your pipeline for even higher close rates."
      return "Low conversion signals leaky pipeline stages. AI follow-up and scoring can double your close rate."
    case 'Retention':
      if (fd.repeatCustomers === '50%+') return "Excellent retention. AI can deepen loyalty with predictive offers and proactive outreach."
      return "Low repeat business = high acquisition cost. Automated nurture sequences fix this fast."
    case 'Time':
      if (fd.twoWeeksOff === 'Yes') return "Your business runs without you — that's rare. AI can unlock the next level of scale."
      return "You're the bottleneck. AI delegation systems let you step back without losing momentum."
    default: return ""
  }
}

const catIcons: Record<string, any> = {
  Revenue: DollarSign, Automation: Settings, Sales: Target, Retention: Users, Time: Clock
}

// ─── Opportunities ────────────────────────────────────────
function topOpportunities(fd: any) {
  const missed = parseMissedCalls(fd.missedCalls)
  const deal = parseDealSize(fd.dealSize)
  const conv = parseConversionPct(fd.conversionRate)
  const opps: { icon: any; title: string; desc: string; roi: string; timeline: string; priority: number }[] = []

  if (fd.missedCalls !== '0-5') {
    const lostAnnual = missed * 52 * deal * conv
    opps.push({
      icon: Phone, title: "AI-Powered Call Capture",
      desc: `You're missing ~${missed} calls/week. At ${fmt$(deal)} avg deal × ${(conv * 100).toFixed(0)}% close rate, that's ${fmt$(lostAnnual)} lost annually.`,
      roi: `${fmt$(lostAnnual / 12)}/month recovered`, timeline: "2-3 weeks", priority: 95
    })
  }
  if (fd.systematicFollowUp !== 'Yes') {
    opps.push({
      icon: Mail, title: "Automated Follow-Up Sequences",
      desc: "Leads go cold without systematic follow-up. An AI nurture system re-engages every prospect automatically.",
      roi: "30-50% more conversions", timeline: "2-4 weeks", priority: 88
    })
  }
  if (fd.askReviewsSystem === 'none' || fd.askReviewsSystem === 'manual') {
    opps.push({
      icon: Star, title: "Automated Review Generation",
      desc: "Manual review requests get forgotten. Automated post-job triggers can 2-3× your review volume in 30 days.",
      roi: "2× review volume in 30 days", timeline: "1-2 weeks", priority: 72
    })
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === '<30%') {
    opps.push({
      icon: Zap, title: "Workflow Automation Hub",
      desc: "With <30% automation, you're burning hours on repetitive tasks. A central automation layer saves 15-25 hrs/week.",
      roi: `${fmt$(20 * 50 * 4)}/month in saved labor`, timeline: "3-4 weeks", priority: 82
    })
  }
  if (fd.twoWeeksOff !== 'Yes') {
    opps.push({
      icon: Brain, title: "AI Business Delegation Layer",
      desc: "You can't step away without things breaking. AI agents handle triage, scheduling, and client comms 24/7.",
      roi: "Owner freedom + sustained revenue", timeline: "4-6 weeks", priority: 76
    })
  }
  opps.sort((a, b) => b.priority - a.priority)
  return opps.slice(0, 3)
}

// ─── Quick Wins ───────────────────────────────────────────
function quickWins(fd: any) {
  const wins: { icon: string; text: string }[] = []
  if (fd.systematicFollowUp !== 'Yes') wins.push({ icon: "📩", text: "Set up an automated follow-up sequence — can increase conversions 50%" })
  if (fd.askReviewsSystem === 'none' || fd.askReviewsSystem === 'manual') wins.push({ icon: "⭐", text: "Automate review requests after every job — 2× your review volume in 30 days" })
  if (fd.twoWeeksOff === 'No') wins.push({ icon: "🧠", text: "Delegate email triage to AI — save 5-10 hrs/week instantly" })
  if (fd.percentAutomated === 'none' || fd.percentAutomated === '<30%') wins.push({ icon: "⚡", text: "Connect your top 3 tools with Zapier — eliminate 80% of copy-paste work" })
  if (fd.missedCalls !== '0-5') wins.push({ icon: "📞", text: "Install an AI receptionist to capture leads 24/7 — never miss a call again" })
  if (fd.repeatCustomers !== '50%+') wins.push({ icon: "🔄", text: "Launch a win-back email campaign to past clients — recover 10-20% of churned revenue" })
  if (fd.conversionRate === '<10%' || fd.conversionRate === '10-20%') wins.push({ icon: "🎯", text: "Add lead scoring to prioritize hot prospects — close 30% more deals with less effort" })
  if (fd.revenueTrend !== 'Growing') wins.push({ icon: "📈", text: "Set up automated upsell/cross-sell sequences — increase avg deal value 15-25%" })
  wins.push({ icon: "📊", text: "Create a real-time KPI dashboard — spot issues before they become problems" })
  wins.push({ icon: "🤖", text: "Add a chatbot to your website for instant lead capture — convert 3× more visitors" })
  return wins.slice(0, 5)
}

// ─── Roadmap ──────────────────────────────────────────────
function roadmap(fd: any) {
  const phase1Items = ["AI call capture / receptionist setup", "CRM integration & data migration", "Automated follow-up sequences"]
  const phase2Items = ["Tune response scripts from real call data", "A/B test nurture email sequences", "Train team on new dashboard"]
  const missed = parseMissedCalls(fd.missedCalls)
  const deal = parseDealSize(fd.dealSize)
  const conv = parseConversionPct(fd.conversionRate)
  const monthlyRec = Math.round(missed * 4 * deal * conv)
  const phase3Items = [`Projected: ${fmt$(monthlyRec)}/mo in recovered revenue`, "Expand automation to new channels", "Full owner-optional operations"]
  return [
    { label: "Days 1-14", title: "Install & Configure", items: phase1Items, color: "border-blue-500/40 bg-blue-500/5" },
    { label: "Days 15-30", title: "Optimize & Tune", items: phase2Items, color: "border-yellow-500/40 bg-yellow-500/5" },
    { label: "Days 31-90", title: "Scale & Grow", items: phase3Items, color: "border-emerald-500/40 bg-emerald-500/5" },
  ]
}

// ─── Score Gauge SVG ──────────────────────────────────────
function ScoreGauge({ score }: { score: number }) {
  const r = 80, c = 2 * Math.PI * r, offset = c - (score / 100) * c
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
      <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
      <circle cx="100" cy="100" r={r} fill="none" className={scoreBg(score)} strokeWidth="12"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 100 100)" style={{ transition: 'stroke-dashoffset 1.5s ease-out' }} />
      <text x="100" y="92" textAnchor="middle" className={`${scoreColor(score)} text-5xl font-bold`} fill="currentColor" fontSize="48">{score}</text>
      <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="14">/100</text>
    </svg>
  )
}

// ─── ROI Calculator ───────────────────────────────────────
function ROICalculator({ fd }: { fd: any }) {
  const defaultHours = fd.percentAutomated === '>70%' ? 5 : fd.percentAutomated === '30-70%' ? 15 : 25
  const defaultLeads = parseMissedCalls(fd.missedCalls) * 4
  const defaultDeal = parseDealSize(fd.dealSize)

  const [hours, setHours] = useState(defaultHours)
  const [rate, setRate] = useState(50)
  const [leads, setLeads] = useState(defaultLeads)
  const [dealVal, setDealVal] = useState(defaultDeal)

  const monthly = hours * 4 * rate + leads * dealVal * 0.2
  const annual = monthly * 12
  const roiPct = Math.round((annual / 10000) * 100)

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Hours saved per week: <span className="text-white font-bold">{hours}</span></label>
          <input type="range" min={1} max={40} value={hours} onChange={e => setHours(+e.target.value)}
            className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Hourly rate of saved time</label>
          <input type="number" value={rate} onChange={e => setRate(+e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Additional leads captured/month: <span className="text-white font-bold">{leads}</span></label>
          <input type="range" min={0} max={200} value={leads} onChange={e => setLeads(+e.target.value)}
            className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Average deal value</label>
          <input type="number" value={dealVal} onChange={e => setDealVal(+e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {[
          { label: "Monthly Savings", val: fmt$(monthly) },
          { label: "Annual Impact", val: fmt$(annual) },
          { label: "ROI on $10K", val: `${roiPct}%` },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <div className="text-slate-400 text-xs mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-emerald-400">{item.val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Fade wrapper ─────────────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════
export function AuditResults({ formData, auditScore }: AuditResultsProps) {
  const [showROI, setShowROI] = useState(false)
  const [showChecklist, setShowChecklist] = useState(false)

  const sub = useMemo(() => calcSubScores(formData), [formData])
  const opps = useMemo(() => topOpportunities(formData), [formData])
  const wins = useMemo(() => quickWins(formData), [formData])
  const phases = useMemo(() => roadmap(formData), [formData])

  const tagline = auditScore < 40
    ? "There's massive untapped potential in your business."
    : auditScore < 70
      ? "You're leaving money on the table — but not for long."
      : "You're ahead of most. Let's make you unstoppable."

  const handleDownloadPDF = () => {
    localStorage.setItem("elianatech-audit-report", JSON.stringify({ formData, auditScore }))
    window.open("/audit/report", "_blank")
  }

  return (
    <div className="max-w-5xl mx-auto space-y-20 pb-24">

      {/* ── 1. Hero Score ───────────────────────────────── */}
      <FadeUp>
        <div className="text-center space-y-6">
          <ScoreGauge score={auditScore} />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your AI Readiness Score: <span className={scoreColor(auditScore)}>{auditScore}</span>/100
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">{tagline}</p>
        </div>
      </FadeUp>

      {/* ── 2. Score Breakdown ──────────────────────────── */}
      <FadeUp delay={0.1}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-400" /> Score Breakdown
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(["Revenue", "Automation", "Sales", "Retention", "Time"] as const).map((cat) => {
            const key = cat.toLowerCase() as keyof typeof sub
            const s = sub[key]
            const Icon = catIcons[cat]
            return (
              <Card key={cat} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-5 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${scoreColor(s)}`}><Icon className="w-5 h-5" /></div>
                  <span className="text-white font-semibold">{cat}</span>
                  <span className={`ml-auto text-lg font-bold ${scoreColor(s)}`}>{s}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s}%` }}
                    viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${s >= 70 ? 'bg-emerald-500' : s >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{categoryInsight(cat, formData)}</p>
              </Card>
            )
          })}
        </div>
      </FadeUp>

      {/* ── 3. Top 3 AI Opportunities ──────────────────── */}
      <FadeUp delay={0.15}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-purple-400" /> Top AI Opportunities
        </h2>
        <div className="space-y-4">
          {opps.map((o, i) => (
            <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <o.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-white font-bold text-lg">{o.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-2 text-sm">
                    <span className="text-emerald-400 flex items-center gap-1"><DollarSign className="w-4 h-4" /> {o.roi}</span>
                    <span className="text-blue-400 flex items-center gap-1"><Clock className="w-4 h-4" /> {o.timeline}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 4. 90-Day Roadmap ──────────────────────────── */}
      <FadeUp delay={0.2}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-orange-400" /> Your Custom AI Roadmap
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((p, i) => (
            <Card key={i} className={`border p-6 ${p.color} backdrop-blur-md`}>
              <div className="text-xs font-mono text-slate-400 mb-2">{p.label}</div>
              <h3 className="text-white font-bold text-lg mb-4">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 5. Lead Magnets ────────────────────────────── */}
      <FadeUp delay={0.25}>
        <h2 className="text-2xl font-bold text-white mb-6">Your Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-emerald-500/30 transition-all cursor-pointer"
            onClick={handleDownloadPDF}>
            <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Download Full AI Report</h3>
            <p className="text-slate-400 text-sm">PDF with all scores, opportunities & roadmap</p>
          </Card>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-blue-500/30 transition-all cursor-pointer"
            onClick={() => setShowROI(!showROI)}>
            <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Calculate Your ROI</h3>
            <p className="text-slate-400 text-sm">Interactive calculator pre-filled with your data</p>
          </Card>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-yellow-500/30 transition-all cursor-pointer"
            onClick={() => setShowChecklist(!showChecklist)}>
            <CheckCircle2 className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Quick Wins Checklist</h3>
            <p className="text-slate-400 text-sm">5 things you can do THIS WEEK</p>
          </Card>
        </div>
      </FadeUp>

      {/* ── 6. Inline ROI Calculator ───────────────────── */}
      {showROI && (
        <FadeUp>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" /> ROI Calculator
            </h3>
            <ROICalculator fd={formData} />
          </Card>
        </FadeUp>
      )}

      {/* ── 7. Quick Wins Checklist ────────────────────── */}
      {showChecklist && (
        <FadeUp>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6">⚡ This Week's Quick Wins</h3>
            <div className="space-y-4">
              {wins.map((w, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-2xl">{w.icon}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </FadeUp>
      )}

      {/* ── 8. CTA ─────────────────────────────────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-white/10 p-12 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent)]" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to install these systems?</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Let&apos;s map out the exact AI stack your business needs — in a free 30-minute strategy call.
            </p>
            <div className="w-full rounded-xl overflow-hidden border border-white/10 my-4" style={{ minHeight: 500 }}>
              <iframe
                src="https://cal.com/mia-louviere-a4n2hk/30min?embed=true&theme=dark"
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 'none', background: 'transparent' }}
                allow="payment"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/ai-coo">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full">
                  Or get your AI COO installed <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <p className="text-slate-500 text-sm pt-4">Your results have been saved. Check your email for your full report.</p>
          </div>
        </Card>
      </FadeUp>
    </div>
  )
}
