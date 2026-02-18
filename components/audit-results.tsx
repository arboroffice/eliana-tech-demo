"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import {
  TrendingUp, AlertCircle, CheckCircle2, Target, Lightbulb,
  Rocket, DollarSign, Clock, Users, BarChart3, ArrowRight,
  Download, Calendar, Zap, Brain, Mail,
  ShieldCheck, Settings, MessageSquare, FileText, Calculator,
  RefreshCw, Headphones, LayoutDashboard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { generateIndustryPlaybook } from "@/lib/freebie-generator"

interface AuditResultsProps {
  formData: any
  auditScore: number
}

// ─── Helpers ──────────────────────────────────────────────
function parseChurnPct(v: string): number {
  if (v === '20+') return 0.25
  if (v === '10-20') return 0.15
  if (v === '5-10') return 0.07
  if (v === 'under-5') return 0.03
  return 0.10
}

function parseProductPrice(v: string): number {
  if (v === '5k+') return 7500
  if (v === '1k-5k') return 3000
  if (v === '500-1k') return 750
  if (v === '100-500') return 300
  if (v === 'recurring') return 100
  return 50
}

function parseConversionPct(v: string): number {
  if (v === '10+') return 0.12
  if (v === '5-10') return 0.07
  if (v === '3-5') return 0.04
  if (v === '1-3') return 0.02
  return 0.005
}

function parseListSize(v: string): number {
  if (v === '50k+') return 75000
  if (v === '10k-50k') return 30000
  if (v === '5k-10k') return 7500
  if (v === '1k-5k') return 3000
  return 500
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

// ─── Sub-score calculator (mirrors lib/audit-analyzer.ts) ─
function calcSubScores(fd: any) {
  // Revenue
  let revenue = 50
  if (fd.revenueTrend === 'Growing') revenue += 25
  else if (fd.revenueTrend === 'Declining') revenue -= 25
  if (fd.profitMargin === '60+') revenue += 15
  else if (fd.profitMargin === '40-60') revenue += 10
  else if (fd.profitMargin === 'under-20') revenue -= 10
  else if (fd.profitMargin === 'negative') revenue -= 20
  if (fd.currentRevenue === '3m+') revenue += 10
  else if (fd.currentRevenue === '1m-3m') revenue += 5
  else if (fd.currentRevenue === 'pre-revenue') revenue -= 10
  revenue = Math.max(0, Math.min(100, revenue))

  // Automation
  let automation = 0
  if (fd.percentAutomated === '60+') automation = 85
  else if (fd.percentAutomated === '30-60') automation = 60
  else if (fd.percentAutomated === 'under-30') automation = 35
  else if (fd.percentAutomated === 'none') automation = 15
  const toolCount = fd.tools?.length || 0
  automation += Math.min(15, toolCount * 2)
  if (fd.onboardingAutomated === 'Yes') automation += 10
  else if (fd.onboardingAutomated === 'Partially') automation += 5
  automation = Math.max(0, Math.min(100, automation))

  // Acquisition
  let acquisition = 50
  if (fd.conversionRate === '10+') acquisition = 90
  else if (fd.conversionRate === '5-10') acquisition = 75
  else if (fd.conversionRate === '3-5') acquisition = 55
  else if (fd.conversionRate === '1-3') acquisition = 35
  else if (fd.conversionRate === 'under-1') acquisition = 15
  if (fd.listSize === '50k+') acquisition += 10
  else if (fd.listSize === '10k-50k') acquisition += 5
  else if (fd.listSize === 'under-1k') acquisition -= 10
  if (fd.trafficSource === 'mixed') acquisition += 5
  acquisition = Math.max(0, Math.min(100, acquisition))

  // Retention
  let retention = 50
  if (fd.churnRate === 'under-5') retention = 85
  else if (fd.churnRate === '5-10') retention = 60
  else if (fd.churnRate === '10-20') retention = 35
  else if (fd.churnRate === '20+') retention = 15
  else if (fd.churnRate === 'unknown') retention = 30
  if (fd.productPricePoint === '5k+' || fd.productPricePoint === '1k-5k') retention += 10
  if (fd.productPricePoint === 'recurring') retention += 5
  retention = Math.max(0, Math.min(100, retention))

  // Time
  let time = 50
  if (fd.twoWeeksOff === 'Yes') time = 80
  else if (fd.twoWeeksOff === 'Maybe') time = 45
  else time = 20
  if (fd.hoursPerWeek === 'under-20') time += 10
  else if (fd.hoursPerWeek === '20-40') time += 5
  else if (fd.hoursPerWeek === '40-60') time -= 5
  else if (fd.hoursPerWeek === '60+') time -= 15
  if (fd.highValueWork === '60+') time += 10
  else if (fd.highValueWork === '20-40') time -= 10
  else if (fd.highValueWork === 'under-20') time -= 15
  time = Math.max(0, Math.min(100, time))

  return { revenue, automation, acquisition, retention, time }
}

function categoryInsight(cat: string, fd: any): string {
  const bt = (fd.businessType || '').toLowerCase()
  const isTraditional = ['home-services','healthcare','professional-services','construction','restaurant-hospitality','real-estate','manufacturing'].some(t => bt.includes(t))

  switch (cat) {
    case 'Revenue':
      if (fd.revenueTrend === 'Growing') return "Revenue is trending up. AI infrastructure can accelerate this without adding headcount."
      if (fd.revenueTrend === 'Flat') return isTraditional
        ? "Revenue has plateaued. Automated follow-up, review generation, and lead capture can reignite growth."
        : "Revenue has plateaued. Automated funnels and AI-driven upsells can reignite growth."
      return "Revenue is declining. Urgent automation of acquisition and retention can stabilize and reverse the trend."
    case 'Automation':
      if ((fd.percentAutomated === '60+')) return "You're well-automated. AI intelligence layers and optimization are your next edge."
      if (fd.percentAutomated === '30-60') return isTraditional
        ? "You have some tools in place, but they're siloed. Connecting them creates a system that runs itself."
        : "You have tools but they're not connected. Full automation could save 20+ hrs/week."
      return isTraditional
        ? "Most of your operations are manual. Even basic automation of scheduling, follow-up, and invoicing will transform your capacity."
        : "Most of your operations are manual. Automation alone could transform your capacity overnight."
    case 'Acquisition':
      if (parseConversionPct(fd.conversionRate) >= 0.05) return isTraditional
        ? "Strong conversion rate. AI can optimize your booking flow and follow-up for even better results."
        : "Solid conversion rate. AI can optimize your funnel for even higher enrollment and purchase rates."
      return isTraditional
        ? "Low conversion means leads are slipping through the cracks. Faster response times and automated follow-up can 2-3x your bookings."
        : "Low conversion rate means your funnel is leaking. AI-driven optimization and follow-up can 2-3x your conversions."
    case 'Retention':
      if (fd.churnRate === 'under-5') return isTraditional
        ? "Excellent customer retention. AI can boost repeat business with proactive maintenance reminders and loyalty campaigns."
        : "Excellent retention. AI can deepen engagement with personalized content and proactive outreach."
      if (fd.churnRate === '5-10') return isTraditional
        ? "Moderate customer churn. Automated post-service follow-ups and review requests can strengthen loyalty."
        : "Moderate churn. Automated onboarding and engagement sequences can cut this significantly."
      return isTraditional
        ? "You're losing customers that should be coming back. Automated follow-up and loyalty programs can cut this by 30-50%."
        : "High churn is eating your growth. Automated health scoring and re-engagement can cut churn by 30-50%."
    case 'Time':
      if (fd.twoWeeksOff === 'Yes') return "Your business runs without you. AI can unlock the next level of scale."
      return isTraditional
        ? "You're the bottleneck in daily operations. AI can handle scheduling, follow-up, and client communication so you can focus on growth."
        : "You're the bottleneck. AI delegation systems let you step back without losing momentum."
    default: return ""
  }
}

const catIcons: Record<string, any> = {
  Revenue: DollarSign, Automation: Settings, Acquisition: Target, Retention: Users, Time: Clock
}

// ─── Opportunities ────────────────────────────────────────
function topOpportunities(fd: any) {
  const opps: { icon: any; title: string; desc: string; roi: string; timeline: string; priority: number }[] = []
  const bt = (fd.businessType || '').toLowerCase()
  const isTraditional = ['home-services','healthcare','professional-services','construction','restaurant-hospitality','real-estate','manufacturing'].some(t => bt.includes(t))

  if (fd.onboardingAutomated === 'No' || fd.onboardingAutomated === 'Partially') {
    opps.push({
      icon: Rocket, title: isTraditional ? "Automated Client Onboarding" : "Automated Onboarding",
      desc: isTraditional
        ? "Manual intake and onboarding creates delays and inconsistent first impressions. Automated scheduling, intake forms, and welcome sequences get clients started faster."
        : "Manual onboarding creates bottlenecks and inconsistent experiences. AI-driven sequences can activate users 3x faster and reduce early churn.",
      roi: isTraditional ? "70% faster client onboarding" : "3x faster activation", timeline: "2-3 weeks", priority: 92
    })
  }
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') {
    const churnPct = parseChurnPct(fd.churnRate)
    const price = parseProductPrice(fd.productPricePoint)
    const list = parseListSize(fd.listSize)
    const lostAnnual = Math.round(list * churnPct * price)
    opps.push({
      icon: RefreshCw, title: isTraditional ? "Customer Retention System" : "Churn Prevention Engine",
      desc: isTraditional
        ? `You're losing customers that should be coming back. Automated follow-up, maintenance reminders, and loyalty campaigns can recover ${fmt$(lostAnnual * 0.3)}/year.`
        : `Your ${fd.churnRate}% churn rate is costing you an estimated ${fmt$(lostAnnual)}/year. Automated health scoring and re-engagement sequences can cut churn by 30-50%.`,
      roi: `${fmt$(lostAnnual * 0.3)}/year saved`, timeline: "3-4 weeks", priority: 95
    })
  }
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    const hrs = fd.supportHoursPerWeek === '10+' ? 12 : 7
    opps.push({
      icon: Headphones, title: isTraditional ? "AI Phone & Support System" : "AI-Powered Support",
      desc: isTraditional
        ? `You're spending ${fd.supportHoursPerWeek} hrs/week on calls and inquiries. An AI receptionist can handle scheduling, FAQs, and routing 24/7.`
        : `You're spending ${fd.supportHoursPerWeek} hrs/week on support. An AI assistant trained on your content can handle 80% of questions instantly.`,
      roi: `${Math.round(hrs * 0.8 * 4)} hrs/month freed up`, timeline: "2-3 weeks", priority: 88
    })
  }
  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') {
    opps.push({
      icon: FileText, title: isTraditional ? "Automated Marketing & Reviews" : "AI Content Engine",
      desc: isTraditional
        ? "Automate review requests after every job, generate social proof, and run targeted campaigns without lifting a finger."
        : "You're spending significant time on content. AI repurposing can turn 1 piece into 30+ assets in your voice and style.",
      roi: isTraditional ? "3x reviews, consistent lead flow" : "10-15 hrs/week saved", timeline: "1-2 weeks", priority: 82
    })
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    opps.push({
      icon: Zap, title: "Workflow Automation Hub",
      desc: isTraditional
        ? "Scheduling, invoicing, follow-ups, and client communication are all manual. Connecting these systems saves 15-20 hours per week and eliminates dropped balls."
        : "With most processes still manual, a central automation layer connecting your tools can save 15-20 hours per week and eliminate errors.",
      roi: "15-20 hrs/week saved", timeline: "3-4 weeks", priority: 85
    })
  }
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    opps.push({
      icon: Target, title: isTraditional ? "Lead Capture & Follow-up" : "Funnel Optimization",
      desc: isTraditional
        ? "Slow response times and missed follow-ups are costing you jobs. AI instant response and automated nurture can 2-3x your booking rate."
        : "Low conversion rates mean your funnel is leaking. AI-driven A/B testing, lead scoring, and personalized follow-up can 2-3x your conversion rate.",
      roi: "2-3x conversion rate", timeline: "2-4 weeks", priority: 80
    })
  }
  if (fd.twoWeeksOff !== 'Yes') {
    opps.push({
      icon: Brain, title: "AI Business Delegation Layer",
      desc: isTraditional
        ? "You can't step away without jobs falling through the cracks. AI systems handle scheduling, client communication, and dispatch 24/7."
        : "You can't step away without things breaking. AI agents handle triage, support, and client comms 24/7.",
      roi: "Owner freedom + sustained revenue", timeline: "4-6 weeks", priority: 76
    })
  }
  opps.sort((a, b) => b.priority - a.priority)
  return opps.slice(0, 3)
}

// ─── Quick Wins ───────────────────────────────────────────
function quickWins(fd: any) {
  const wins: { icon: string; text: string }[] = []
  if (fd.onboardingAutomated !== 'Yes') wins.push({ icon: "🚀", text: "Set up automated onboarding emails for new customers — reduce early churn by 30%+" })
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') wins.push({ icon: "🔄", text: "Launch a win-back email campaign to churned users — recover 10-20% of lost revenue" })
  if (fd.twoWeeksOff === 'No') wins.push({ icon: "🧠", text: "Delegate email triage and support to AI — save 5-10 hrs/week instantly" })
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') wins.push({ icon: "⚡", text: "Connect your top 3 tools with Zapier/Make — eliminate 80% of manual workflows" })
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') wins.push({ icon: "💬", text: "Add an AI chatbot trained on your content — handle 80% of support questions automatically" })
  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') wins.push({ icon: "📝", text: "Use AI to repurpose your long-form content into social posts, emails, and threads" })
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') wins.push({ icon: "🎯", text: "Add an automated email nurture sequence for leads — convert 30-50% more prospects" })
  if (fd.revenueTrend !== 'Growing') wins.push({ icon: "📈", text: "Set up automated upsell/cross-sell sequences to existing customers — increase LTV 15-25%" })
  wins.push({ icon: "📊", text: "Create a real-time KPI dashboard — spot churn, revenue, and engagement issues early" })
  wins.push({ icon: "📧", text: "Segment your email list by engagement level — send targeted re-activation campaigns" })
  return wins.slice(0, 5)
}

// ─── Roadmap ──────────────────────────────────────────────
function roadmap(fd: any) {
  const phase1Items = ["Audit existing tech stack & integrations", "Automated onboarding sequences", "AI support chatbot setup"]
  const phase2Items = ["A/B test email sequences & funnels", "Churn prediction & re-engagement automation", "Content repurposing pipeline"]

  const churnPct = parseChurnPct(fd.churnRate)
  const price = parseProductPrice(fd.productPricePoint)
  const list = parseListSize(fd.listSize)
  const churnSaved = Math.round(list * churnPct * price * 0.3)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2
  const hrsRecovered = Math.round(supportHrs * 0.8 * 4)

  const phase3Items = [`Projected: ${fmt$(churnSaved)}/year saved from reduced churn`, `${hrsRecovered}+ hrs/month freed from automated support`, "Full owner-optional operations"]
  return [
    { label: "Days 1-14", title: "Install & Configure", items: phase1Items, color: "border-blue-500/40 bg-blue-500/5" },
    { label: "Days 15-30", title: "Optimize & Tune", items: phase2Items, color: "border-yellow-500/40 bg-yellow-500/5" },
    { label: "Days 31-90", title: "Scale & Grow", items: phase3Items, color: "border-emerald-500/40 bg-emerald-500/5" },
  ]
}

// ─── Growth Level ─────────────────────────────────────────
function getGrowthLevel(fd: any): { level: string; label: string; insight: string } {
  const rev = fd.currentRevenue
  const auto = fd.percentAutomated
  const trend = fd.revenueTrend

  if (rev === 'pre-revenue' || rev === 'under-100k') {
    return {
      level: 'early',
      label: 'Early Stage',
      insight: 'You\'re in build mode. The priority is automating lead capture and onboarding so you can focus on product and growth instead of manual operations.'
    }
  }
  if (rev === '100k-500k' || (rev === '500k-1m' && auto !== '60+')) {
    return {
      level: 'growth',
      label: 'Growth Stage',
      insight: 'You\'ve found product-market fit. Now you need systems to handle the volume without adding headcount. Automation, churn prevention, and funnel optimization are your highest-ROI moves.'
    }
  }
  if (rev === '500k-1m' || rev === '1m-3m') {
    return {
      level: 'scale',
      label: 'Scale Stage',
      insight: 'You\'re past the grind phase. The bottleneck is now operational capacity. AI infrastructure should replace manual processes across onboarding, support, and retention to free the leadership team.'
    }
  }
  return {
    level: 'enterprise',
    label: 'Enterprise Stage',
    insight: 'At your scale, every manual process is a drag on margins and enterprise value. Full AI integration across departments creates the operational leverage that drives valuation multiples.'
  }
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
  const defaultHours = fd.percentAutomated === '60+' ? 5 : fd.percentAutomated === '30-60' ? 12 : 25
  const defaultChurnSaved = Math.round(parseListSize(fd.listSize) * parseChurnPct(fd.churnRate) * 0.3)
  const defaultPrice = parseProductPrice(fd.productPricePoint)

  const [hours, setHours] = useState(defaultHours)
  const [rate, setRate] = useState(75)
  const [churnReduced, setChurnReduced] = useState(defaultChurnSaved)
  const [avgPrice, setAvgPrice] = useState(defaultPrice)

  const timeSavings = hours * 4 * rate
  const churnSavings = churnReduced * avgPrice
  const monthly = timeSavings + churnSavings
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
          <label className="text-slate-400 text-sm mb-2 block">Customers saved from churn/month: <span className="text-white font-bold">{churnReduced}</span></label>
          <input type="range" min={0} max={500} value={churnReduced} onChange={e => setChurnReduced(+e.target.value)}
            className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Average customer value</label>
          <input type="number" value={avgPrice} onChange={e => setAvgPrice(+e.target.value)}
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
  const playbook = useMemo(() => generateIndustryPlaybook(formData), [formData])
  const growthLevel = useMemo(() => getGrowthLevel(formData), [formData])

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
            Your Automation Score: <span className={scoreColor(auditScore)}>{auditScore}</span>/100
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
          {(["Revenue", "Automation", "Acquisition", "Retention", "Time"] as const).map((cat) => {
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

      {/* ── 2b. Your Growth Stage ─────────────────────────── */}
      <FadeUp delay={0.12}>
        <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><TrendingUp className="w-5 h-5" /></div>
            <div>
              <h3 className="text-white font-bold">Your Growth Stage: {growthLevel.label}</h3>
              <p className="text-slate-500 text-sm">{playbook.industryName}</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{growthLevel.insight}</p>
        </Card>
      </FadeUp>

      {/* ── 2c. Industry Playbook ─────────────────────────── */}
      <FadeUp delay={0.13}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400" /> Your {playbook.industryName} Playbook
        </h2>
        <div className="space-y-3 mb-8">
          {playbook.aiSolutions.map((s, i) => (
            <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-5 hover:border-emerald-500/20 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold text-sm mt-0.5 shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">{s.challenge}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{s.solution}</p>
                  <span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded-full">{s.roi}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="bg-gradient-to-r from-emerald-500/5 to-transparent border-emerald-500/20 p-5">
          <h4 className="text-white font-semibold text-sm mb-2">Industry Benchmark</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-red-400 text-xs font-mono mb-1">BEFORE</p>
              <p className="text-slate-400 text-sm">{playbook.caseStudy.before}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-mono mb-1">AFTER</p>
              <p className="text-slate-300 text-sm">{playbook.caseStudy.after}</p>
            </div>
          </div>
        </Card>
      </FadeUp>

      {/* ── 3. Top AI Opportunities ──────────────────────── */}
      <FadeUp delay={0.15}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-purple-400" /> Top Automation Opportunities
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
          <Rocket className="w-6 h-6 text-orange-400" /> Your Custom Automation Roadmap
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
            <h3 className="text-white font-bold mb-1">Download Full Report</h3>
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
            <h3 className="text-xl font-bold text-white mb-6">This Week&apos;s Quick Wins</h3>
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

      {/* ── 8. DIY Action Plan ─────────────────────────── */}
      <FadeUp delay={0.28}>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-amber-400" /> DIY Action Plan — Start Today
        </h2>
        <p className="text-slate-400 mb-6">Don&apos;t want to wait? Here are things you can implement yourself right now.</p>
        <div className="space-y-4">
          {(() => {
            const diy: { title: string; steps: string[]; time: string; impact: string; emoji: string; show: boolean }[] = [
              {
                title: "Set Up Automated Onboarding Emails",
                steps: [
                  "Map your ideal customer journey from purchase to 'aha moment'",
                  "Create a 5-email welcome sequence in ConvertKit or ActiveCampaign",
                  "Include: welcome + access → quick win tutorial → community invite → success story → next step CTA",
                  "Set up triggers so they fire automatically on purchase/signup"
                ],
                time: "2-3 hours", impact: "Reduce early churn by 30%+ and boost activation",
                emoji: "🚀",
                show: formData.onboardingAutomated !== 'Yes'
              },
              {
                title: "Launch a Churn Win-Back Campaign",
                steps: [
                  "Export a list of churned/refunded customers from the last 6 months",
                  "Segment by reason (if known): price, usage, support, alternative",
                  "Send a 3-email re-engagement sequence: 'We miss you' → new feature/value → special offer",
                  "Track open rates and replies — respond personally to engaged leads"
                ],
                time: "2-3 hours", impact: "Recover 10-20% of churned revenue",
                emoji: "🔄",
                show: formData.churnRate === '20+' || formData.churnRate === '10-20'
              },
              {
                title: "Connect Your Tools with Zapier/Make",
                steps: [
                  "Sign up for Zapier or Make (both have free tiers)",
                  "Connect your payment tool (Stripe) → email platform (ConvertKit/ActiveCampaign)",
                  "Connect your community (Skool/Circle) → CRM for engagement tracking",
                  "Set up Slack/email notifications for new purchases and cancellations",
                  "Start with 3-5 automations and expand from there"
                ],
                time: "1-2 hours", impact: "Eliminate 80% of manual data entry and notifications",
                emoji: "⚡",
                show: formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30'
              },
              {
                title: "Build an AI Support Bot",
                steps: [
                  "Gather your top 50 FAQs from support tickets, DMs, and emails",
                  "Sign up for a chatbot tool (Intercom, Crisp, or Tidio — free tiers available)",
                  "Upload your FAQ content and let the AI train on it",
                  "Install the widget on your website and community",
                  "Review weekly transcripts to improve accuracy"
                ],
                time: "2-3 hours", impact: "Handle 80% of support questions automatically",
                emoji: "💬",
                show: formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10'
              },
              {
                title: "Set Up AI Content Repurposing",
                steps: [
                  "Take your best-performing long-form content (podcast, video, blog)",
                  "Use Claude or ChatGPT to extract key insights and quotes",
                  "Create templates: 1 long-form → 5 social posts + 3 email snippets + 1 thread",
                  "Schedule distribution across platforms with Buffer or Hypefury",
                  "Track engagement and double down on what resonates"
                ],
                time: "1-2 hours", impact: "10-15 hrs/week saved on content creation",
                emoji: "📝",
                show: formData.contentCreationHours === '20+' || formData.contentCreationHours === '10-20'
              },
              {
                title: "Optimize Your Sales Funnel",
                steps: [
                  "Map every step: ad/traffic → landing page → opt-in → nurture → offer → purchase",
                  "Identify the biggest drop-off point (use analytics or gut feel)",
                  "A/B test headlines and CTAs on your landing page",
                  "Add urgency or social proof to your offer page",
                  "Set up an abandoned cart/checkout email sequence"
                ],
                time: "3-4 hours", impact: "2-3x your conversion rate over 30 days",
                emoji: "🎯",
                show: formData.conversionRate === 'under-1' || formData.conversionRate === '1-3'
              },
              {
                title: "Segment Your Email List",
                steps: [
                  "Tag subscribers by behavior: purchased, engaged, inactive",
                  "Create segments: hot leads, customers, churned, cold list",
                  "Send targeted campaigns to each segment (not one-size-fits-all)",
                  "Set up automated re-engagement for inactive subscribers",
                  "Clean your list quarterly — remove permanently inactive contacts"
                ],
                time: "1-2 hours", impact: "Boost email open rates 30-50% and reduce unsubscribes",
                emoji: "📧",
                show: true
              },
              {
                title: "Reclaim 10 Hours/Week with Time Blocking",
                steps: [
                  "Audit your last week — where did every hour go?",
                  "Identify your top 3 time-wasters (usually: support, content creation, admin)",
                  "Block 2-hour 'deep work' slots on your calendar (no meetings allowed)",
                  "Batch similar tasks: all content in one block, all support in another",
                  "Delegate or automate anything that doesn't require YOUR expertise"
                ],
                time: "1 hour to plan", impact: "10+ hours reclaimed per week",
                emoji: "⏰",
                show: formData.hoursPerWeek === '60+' || formData.highValueWork === 'under-20'
              },
              {
                title: "Create a Real-Time Dashboard",
                steps: [
                  "Choose a tool: Google Sheets, Notion, or a dashboard tool like Databox",
                  "Track 5 key metrics: MRR, churn rate, new signups, support tickets, engagement",
                  "Set up weekly auto-reports sent to your email",
                  "Review weekly and look for trends before they become problems",
                  "Share with your team so everyone is aligned on what matters"
                ],
                time: "2-3 hours", impact: "Spot problems before they become crises",
                emoji: "📊",
                show: true
              }
            ]
            return diy.filter(d => d.show).slice(0, 5).map((d, i) => (
              <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 hover:border-amber-500/20 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{d.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-lg">{d.title}</h3>
                      <div className="flex gap-3 text-xs">
                        <span className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{d.time}</span>
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full hidden sm:block">{d.impact}</span>
                      </div>
                    </div>
                    <p className="text-emerald-400 text-sm mb-3 sm:hidden">{d.impact}</p>
                    <ol className="space-y-2">
                      {d.steps.map((step, j) => (
                        <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-amber-400 font-bold text-xs mt-0.5 shrink-0">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Card>
            ))
          })()}
        </div>
      </FadeUp>

      {/* ── 9. Free Tools & Resources ──────────────────── */}
      <FadeUp delay={0.29}>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Zap className="w-6 h-6 text-blue-400" /> Free Tools We Recommend
        </h2>
        <p className="text-slate-400 mb-6">No budget? No problem. These free tools can get you started today.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { name: "ConvertKit", use: "Email marketing built for creators (free to 1K subs)", emoji: "📧", cat: "Email" },
            { name: "Zapier", use: "Connect apps & automate workflows", emoji: "⚡", cat: "Automation" },
            { name: "Notion", use: "Document processes, SOPs & manage projects", emoji: "📝", cat: "Docs" },
            { name: "Stripe", use: "Payment processing & subscription management", emoji: "💳", cat: "Payments" },
            { name: "Cal.com", use: "Open-source scheduling for strategy calls", emoji: "📅", cat: "Scheduling" },
            { name: "Canva", use: "Design course assets, social posts & lead magnets", emoji: "🎨", cat: "Design" },
            { name: "Loom", use: "Record tutorials, SOPs & async video", emoji: "🎥", cat: "Video" },
            { name: "Crisp", use: "Live chat + AI chatbot for support", emoji: "💬", cat: "Support" },
            { name: "Claude", use: "AI assistant for content, strategy & automation", emoji: "🤖", cat: "AI" },
          ].map((tool, i) => (
            <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-blue-500/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.emoji}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
                  <p className="text-slate-500 text-xs">{tool.cat}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{tool.use}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* ── 10. "What Happens If You Don't Act" ────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-red-500/5 backdrop-blur-md border-red-500/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400" /> The Cost of Doing Nothing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {fmt$(parseListSize(formData.listSize) * parseChurnPct(formData.churnRate) * parseProductPrice(formData.productPricePoint))}
              </p>
              <p className="text-slate-400 text-sm">Lost revenue per year from churn alone</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {formData.hoursPerWeek === '60+' ? '1,040+' : formData.hoursPerWeek === '40-60' ? '520+' : '260+'} hrs
              </p>
              <p className="text-slate-400 text-sm">Spent on tasks automation could handle this year</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {formData.twoWeeksOff === 'No' ? '0 days' : formData.twoWeeksOff === 'Maybe' ? '~5 days' : '14+ days'}
              </p>
              <p className="text-slate-400 text-sm">You can take off without the business breaking</p>
            </div>
          </div>
          <p className="text-slate-300 mt-6 text-sm">
            Every week without systems is another week of lost revenue, preventable churn, and missed growth.
            The companies that win aren&apos;t working harder. They&apos;re building smarter infrastructure.
          </p>
        </Card>
      </FadeUp>

      {/* ── 11. CTA ─────────────────────────────────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-white/10 p-12 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent)]" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to install these systems?</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Let&apos;s map out the exact automation stack your business needs — in a free 30-minute strategy call.
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
            <p className="text-slate-500 text-sm pt-4">Your results have been saved. Check your email for your full report.</p>
          </div>
        </Card>
      </FadeUp>
    </div>
  )
}
