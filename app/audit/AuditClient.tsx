"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

interface AuditData {
  name: string
  businessName: string
  email: string
  role: string
  industry: string[]
  revenue: string
  teamSize: string
  adminRoles: string[]
  hoursOnAdmin: string
  opsPerson: string
  crm: string[]
  scheduling: string[]
  billing: string[]
  marketing: string[]
  aiUse: string
  bottlenecks: string[]
  opsScore: string
  biggestFix: string
  automate: string[]
  urgency: string
  success: string
  decisionMaker: string[]
  extraNotes: string
}

const DEFAULT_DATA: AuditData = {
  name: "", businessName: "", email: "", role: "", industry: [], revenue: "",
  teamSize: "", adminRoles: [], hoursOnAdmin: "", opsPerson: "",
  crm: [], scheduling: [], billing: [], marketing: [], aiUse: "",
  bottlenecks: [], opsScore: "", biggestFix: "",
  automate: [], urgency: "", success: "", decisionMaker: [], extraNotes: "",
}

const STEP_LABELS = [
  "Your Business",
  "Your Team",
  "Tools & AI",
  "Where It Breaks",
  "Timeline & Goals",
]

const PLAYBOOKS: Record<string, { agents: string[] }> = {
  "Home Services": { agents: ["Lead & Sales Agent", "Scheduling & Dispatch Agent", "Invoice & Finance Agent", "Review Generation Agent", "Re-Engagement Agent"] },
  "Construction & Trades": { agents: ["Lead & Sales Agent", "Project Coordination Agent", "Invoice & Finance Agent", "Reputation Agent", "Intelligence Agent"] },
  "Health & Wellness": { agents: ["Appointment Booking Agent", "Patient Follow-Up Agent", "Retention Agent", "Reputation Agent", "Finance Agent"] },
  "Professional Services": { agents: ["Client Intake Agent", "Proposal & Contract Agent", "Billing & Retainer Agent", "Communication Agent", "Intelligence Agent"] },
  "Real Estate": { agents: ["Lead Nurture Agent", "Listing Follow-Up Agent", "Client Comms Agent", "Transaction Agent", "Review Agent"] },
  "Retail & E-Commerce": { agents: ["Abandoned Cart Agent", "Post-Purchase Agent", "Retention Agent", "Inventory Agent", "Marketing Agent"] },
  "Hospitality": { agents: ["Reservation Agent", "Guest Experience Agent", "Review & Reputation Agent", "Marketing Agent", "Finance Agent"] },
  "Creator / Personal Brand": { agents: ["Inbox & Deal Agent", "Brand Partnership Agent", "Community Agent", "Content Operations Agent", "Finance Agent"] },
  "Agency": { agents: ["Lead & Pipeline Agent", "Project Management Agent", "Client Reporting Agent", "Content Agent", "Finance Agent"] },
  "Tech / SaaS": { agents: ["Trial-to-Paid Agent", "Onboarding Agent", "Churn Prevention Agent", "Support Agent", "Intelligence Agent"] },
  "Coaching & Education": { agents: ["Lead Nurture Agent", "Enrollment Agent", "Student Success Agent", "Content Agent", "Finance Agent"] },
  "default": { agents: ["Lead & Sales Agent", "Client Operations Agent", "Finance & Admin Agent", "Reputation Agent", "Intelligence Agent"] },
}

function Chip({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2.5 text-[12px] tracking-wide transition-all font-inter ${selected
        ? "bg-[#D90019]/10 border-[#D90019]/35 text-white"
        : "bg-white/[0.025] border-white/[0.07] text-white/40 hover:border-white/[0.18] hover:text-white"
        } border cursor-pointer`}
    >
      {label}
    </button>
  )
}

function RadioCard({ label, sub, selected, onClick }: { label: string; sub: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-4 transition-all flex gap-3 items-start cursor-pointer ${selected
        ? "bg-[#D90019]/8 border-[#D90019]/30"
        : "bg-white/[0.025] border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04]"
        } border`}
    >
      <div className={`w-4 h-4 border-[1.5px] shrink-0 mt-0.5 flex items-center justify-center transition-all ${selected ? "border-[#D90019] bg-[#D90019]" : "border-white/[0.12]"}`}>
        {selected && <div className="w-[5px] h-[5px] bg-white" />}
      </div>
      <div>
        <p className="text-[13px] font-medium text-white">{label}</p>
        <p className="text-[11px] text-white/40">{sub}</p>
      </div>
    </button>
  )
}

function ScaleButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-3 px-1.5 text-center text-[12px] transition-all cursor-pointer font-inter ${selected
        ? "bg-[#D90019] border-[#D90019] text-white"
        : "bg-white/[0.02] border-white/[0.07] text-white/40 hover:bg-white/[0.05] hover:text-white"
        } border border-r-0 last:border-r`}
    >
      {label}
    </button>
  )
}

export default function AuditClient() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<AuditData>(DEFAULT_DATA)
  const [submitted, setSubmitted] = useState(false)
  const totalSteps = 5

  const toggleChip = (field: keyof AuditData, value: string) => {
    setData(prev => {
      const arr = prev[field] as string[]
      return { ...prev, [field]: arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value] }
    })
  }

  const setField = (field: keyof AuditData, value: string) => {
    setData(prev => ({ ...prev, [field]: value }))
  }

  const next = () => { if (step < totalSteps) setStep(step + 1) }
  const prev = () => { if (step > 1) setStep(step - 1) }

  const submit = async () => {
    const opsNum = parseInt(data.opsScore) || 5
    const painFromOps = Math.max(1, 11 - opsNum)
    
    try {
      const response = await fetch("/api/audit/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.name, companyName: data.businessName, email: data.email, businessType: data.industry[0] || "other",
          currentRevenue: data.revenue, revenue: data.revenue, teamSize: data.teamSize, tools: [...data.crm, ...data.scheduling, ...data.billing, ...data.marketing],
          hoursPerWeek: data.hoursOnAdmin, hoursOnAdmin: data.hoursOnAdmin, problems: data.bottlenecks, bottlenecks: data.bottlenecks,
          keepsUpAtNight: data.biggestFix, biggestFix: data.biggestFix, bottleneck: data.bottlenecks[0] || "", next12MonthsGoal: data.success,
          success: data.success, startDate: data.urgency, urgency: data.urgency, decisionMaker: data.decisionMaker[0] || "",
          painLevel: [painFromOps], role: data.role, adminRoles: data.adminRoles, opsPerson: data.opsPerson, crmTools: data.crm,
          schedulingTools: data.scheduling, billingTools: data.billing, marketingTools: data.marketing, aiUse: data.aiUse,
          opsScore: data.opsScore, automate: data.automate, extraNotes: data.extraNotes, source: "standalone_ops_audit",
        }),
      })

      if (!response.ok) throw new Error(`Submission failed with status: ${response.status}`)
      setSubmitted(true)
      window.scrollTo(0, 0)
    } catch (error) {
      console.error('[AUDIT SUBMIT ERROR]', error)
      alert("There was an issue submitting your audit. Please try again or contact us at support@elianatech.com")
    }
  }

  const [gaps, setGaps] = useState<Record<string, boolean>>({})
  useEffect(() => {
    const all = [...data.bottlenecks, ...data.adminRoles, ...data.automate].join(" ").toLowerCase()
    setGaps({
      leads: all.includes("lead") || all.includes("follow"),
      invoices: all.includes("invoice") || all.includes("billing") || all.includes("payment"),
      tools: all.includes("don't talk") || all.includes("tool") || data.crm.includes("None / Spreadsheets"),
      ai: data.aiUse.includes("No") || data.aiUse.includes("Not sure"),
      reporting: all.includes("report") || all.includes("visib"),
      owner: all.includes("owner") || all.includes("bottleneck") || all.includes("stops"),
    })
  }, [data])

  const pct = Math.round(((step - 1) / totalSteps) * 100)
  const industry = data.industry[0] || "Your Industry"
  const playbook = PLAYBOOKS[industry] || PLAYBOOKS["default"]

  if (submitted) {
    const b = data.bottlenecks
    const allTools = [...data.crm, ...data.scheduling, ...data.billing, ...data.marketing].filter(t => !t.includes("None") && !t.includes("Manual"))
    const disconnectedTools = allTools.length
    const noTools = data.crm.includes("None / Spreadsheets") || data.billing.includes("None / Manual") || data.scheduling.includes("None / Manual")

    const detectedGaps: { title: string; severity: "critical" | "high" | "medium"; detail: string }[] = []
    if (b.some(x => x.includes("lead") || x.includes("follow"))) detectedGaps.push({ title: "Lead Response & Follow-Up", severity: "critical", detail: "Leads are falling through or getting slow follow-up. Every hour of delay drops close rates by 10x. An AI agent responds in under 5 minutes, qualifies, and books — 24/7." })
    if (b.some(x => x.includes("owner") || x.includes("bottleneck") || x.includes("stops"))) detectedGaps.push({ title: "Owner Dependency", severity: "critical", detail: "The business pauses when you step away. Your knowledge, decisions, and approvals are the single point of failure. AI infrastructure extracts this and runs it without you." })
    if (b.some(x => x.includes("invoice") || x.includes("late"))) detectedGaps.push({ title: "Revenue Leakage — Invoicing", severity: "high", detail: "Invoices going out late or not at all means cash flow problems that compound monthly. Automated triggers on job completion eliminate this entirely." })
    if (b.some(x => x.includes("don't talk") || x.includes("tool"))) detectedGaps.push({ title: "Disconnected Tool Stack", severity: "high", detail: `You have ${disconnectedTools || "multiple"} tools that don't talk to each other. Data is being moved by hand, creating errors and wasting hours every week. We connect everything into one automated system.` })
    if (b.some(x => x.includes("review"))) detectedGaps.push({ title: "Reputation & Review Gap", severity: "medium", detail: "Not collecting reviews consistently means you're invisible to the next wave of customers. Automated post-service review requests can 3x your review volume in 90 days." })
    if (b.some(x => x.includes("Past client") || x.includes("never hear"))) detectedGaps.push({ title: "Dead Pipeline — Past Clients", severity: "high", detail: "Past clients are your highest-ROI revenue source and you're not re-engaging them. Automated re-engagement sequences can unlock 15-30% repeat revenue." })
    if (b.some(x => x.includes("Repetitive") || x.includes("eating"))) detectedGaps.push({ title: "Team Time Drain", severity: "high", detail: "Your team is buried in repetitive tasks instead of high-value work. Every hour they spend on admin is an hour not spent on revenue-generating activity." })
    if (b.some(x => x.includes("onboarding"))) detectedGaps.push({ title: "Client Onboarding Gap", severity: "medium", detail: "No systematic onboarding means inconsistent first impressions and early churn. Automated welcome sequences, doc collection, and kickoff workflows fix this overnight." })
    if (b.some(x => x.includes("visibility") || x.includes("pipeline"))) detectedGaps.push({ title: "Zero Operational Visibility", severity: "high", detail: "You can't manage what you can't see. Without real-time dashboards you find out about problems after the damage. AI-compiled daily briefings change this completely." })
    if (b.some(x => x.includes("marketing") || x.includes("outreach"))) detectedGaps.push({ title: "No Consistent Marketing Engine", severity: "medium", detail: "Marketing happens when someone has time — which means it doesn't happen. AI-powered content, email, and outreach runs on autopilot in your brand voice." })
    if (detectedGaps.length === 0) detectedGaps.push({ title: "Manual Operations Across Departments", severity: "high", detail: "Your business runs on human effort and memory. Infrastructure automation can return 20-40 hours per week to your team and eliminate the gaps that cost you revenue." })

    const hMap: Record<string, { hrs: string; annual: string; monthly: string }> = {
      "1-5h": { hrs: "10-18", annual: "$26,000-$47,000", monthly: "$2,200-$3,900" },
      "5-10h": { hrs: "16-26", annual: "$42,000-$68,000", monthly: "$3,500-$5,700" },
      "10-20h": { hrs: "22-34", annual: "$57,000-$88,000", monthly: "$4,750-$7,300" },
      "20-30h": { hrs: "28-40", annual: "$73,000-$104,000", monthly: "$6,100-$8,700" },
      "30h+": { hrs: "35-45+", annual: "$91,000-$117,000+", monthly: "$7,600-$9,800+" },
    }
    const impact = hMap[data.hoursOnAdmin] || { hrs: "15-34", annual: "$39,000-$88,000", monthly: "$3,250-$7,300" }

    const opsNum = parseInt(data.opsScore) || 5
    const opsLabel = opsNum <= 3 ? "Critical — your business is running on willpower" : opsNum <= 5 ? "Below average — significant infrastructure gaps" : opsNum <= 7 ? "Moderate — foundation exists but automation is missing" : "Strong — ready for AI to take it to the next level"
    const opsColor = opsNum <= 3 ? "text-red-400" : opsNum <= 5 ? "text-orange-400" : opsNum <= 7 ? "text-yellow-400" : "text-emerald-400"

    const teamBurden = data.adminRoles.length > 0 ? data.adminRoles : ["Your team"]
    const hasNoOps = data.opsPerson.includes("No") || data.opsPerson.includes("falls through")

    return (
      <div className="bg-[#060406] min-h-screen text-[#F2EEF5] font-inter selection:bg-[#D90019] selection:text-white antialiased">
        <nav className="h-[72px] px-6 md:px-[72px] flex items-center border-b border-white/[0.04] bg-[#060406]/[0.96] backdrop-blur-2xl">
          <Link href="/" className="font-playfair italic text-[21px] text-[#F2EEF5] tracking-wide">
            Elianatech<span className="text-[#D90019] not-italic">.</span>
          </Link>
        </nav>

        <div className="max-w-4xl mx-auto py-10 md:py-16 px-6">
          <div className="mb-12 md:mb-16">
            <p className="text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-[#D90019]" />OS Audit Complete
            </p>
            <h1 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white mb-4">
              Your Infrastructure <em className="text-[#D90019]">Blueprint.</em>
            </h1>
            <p className="text-[15px] text-white/40 leading-relaxed max-w-xl">
              Results for {data.businessName || "Your Business"}. Below is what we found, what it&apos;s costing you, and the exact system we&apos;d build to fix it.
            </p>
          </div>

          <div className="border border-white/[0.07] mb-4">
            <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
              <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">01 — Executive Summary</p>
            </div>
            <div className="px-6 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <p className={`font-playfair italic text-[48px] md:text-[56px] leading-none ${opsColor}`}>{data.opsScore || "5"}</p>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">/10 Ops Score</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair italic text-[48px] md:text-[56px] text-white leading-none">{detectedGaps.length}</p>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Gaps Found</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair italic text-[48px] md:text-[56px] text-[#D90019] leading-none">{impact.hrs}</p>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Hrs Recoverable/Wk</p>
                </div>
                <div className="text-center">
                  <p className="font-playfair italic text-[48px] md:text-[56px] text-emerald-400 leading-none">{playbook.agents.length}</p>
                  <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Agents to Deploy</p>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.04] p-5 text-sm text-white/50">
                {opsLabel}.
                {hasNoOps && " You have no dedicated ops person — meaning operational gaps fall through or land on the owner."}
                {` Your team${data.teamSize ? ` of ${data.teamSize}` : ""} is losing an estimated ${impact.hrs} hours per week into tasks that AI infrastructure can handle autonomously.`}
              </div>
            </div>
          </div>

          <div className="border border-white/[0.07] mb-10">
            <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
              <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">05 — Recommended Build</p>
            </div>
            <div className="px-6 md:px-8 py-6 md:py-8 bg-gradient-to-br from-[#D90019]/[0.06] to-orange-500/[0.02]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {playbook.agents.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.04]">
                    <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 mt-2 animate-pulse" />
                    <div>
                      <p className="text-[13px] text-white font-medium">{a}</p>
                      <p className="text-[10px] text-white/25 tracking-wide uppercase">Autonomous &middot; 24/7</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center py-10 border-t border-white/[0.04]">
             <a href="https://cal.com/elianatech/30min" className="bg-[#D90019] text-white px-10 py-4 text-[13px] font-semibold tracking-wide hover:brightness-110 transition-all inline-block shadow-[0_12px_48px_rgba(217,0,25,0.2)]">Book My Discovery Call</a>
          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#060406] min-h-screen text-[#F2EEF5] font-inter selection:bg-[#D90019] selection:text-white antialiased">
      <nav className="h-[72px] px-6 md:px-[72px] flex items-center border-b border-white/[0.04] bg-[#060406]/[0.96] backdrop-blur-2xl sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 group">
          <ArrowLeft size={16} className="text-white/40 group-hover:text-white transition-colors" />
          <span className="font-playfair italic text-[21px] text-[#F2EEF5] tracking-wide">
            Elianatech<span className="text-[#D90019] not-italic">.</span>
          </span>
        </Link>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr]">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col border-r border-white/[0.04] bg-[#0A070B] p-12 sticky top-[72px] h-[calc(100vh-72px)] overflow-y-auto">
          <div className="mb-10">
            <p className="text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-4">OS Audit - how ai fits into your business</p>
            <h1 className="font-playfair text-[clamp(32px,3vw,56px)] leading-[1] text-white mb-6">
              Before we build, we <em className="text-[#D90019]">audit.</em>
            </h1>
            <p className="text-[15px] text-white/30 leading-relaxed">
              We map your gaps, match you to the right playbook, and tell you exactly what we&apos;d build — for free.
            </p>
          </div>

          <div className="h-[2px] bg-white/[0.04] mb-8">
            <div className="h-full bg-[#D90019] transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>

          <div className="flex flex-col gap-1">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1
              const isCur = n === step
              const isDone = n < step
              return (
                <div key={i} className={`flex items-center gap-4 py-4 border-b border-white/[0.04] ${i === 0 ? "border-t" : ""}`}>
                  <div className={`w-[28px] h-[28px] flex items-center justify-center text-[10px] font-bold border transition-all ${isCur ? "bg-[#D90019] border-[#D90019] text-white" : isDone ? "bg-emerald-400/10 border-emerald-400/25 text-emerald-400" : "border-white/[0.07] text-white/[0.08]"}`}>
                    {isDone ? "\u2713" : n}
                  </div>
                  <span className={`text-[13px] tracking-wide ${isCur ? "text-white font-medium" : isDone ? "text-white/20" : "text-white/10"}`}>{label}</span>
                </div>
              )
            })}
          </div>

          <div className="mt-auto pt-10">
            <p className="text-[9px] tracking-[3px] uppercase text-white/20 font-bold mb-4">Live Gap Detection</p>
            <div className="flex flex-col gap-2">
              {[
                { id: "leads", label: "Lead follow-up" },
                { id: "invoices", label: "Invoicing & billing" },
                { id: "tools", label: "Disconnected tools" },
                { id: "ai", label: "AI adoption" },
                { id: "reporting", label: "Reporting & visibility" },
                { id: "owner", label: "Owner dependency" },
              ].map(g => (
                <div key={g.id} className={`text-[11px] flex items-center gap-3 px-3 py-2 transition-all ${gaps[g.id] ? "bg-[#D90019]/[0.08] text-white/70" : "text-white/10"}`}>
                  <div className={`w-1 h-1 rounded-full ${gaps[g.id] ? "bg-[#D90019] animate-pulse" : "bg-white/[0.05]"}`} />
                  {g.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-12 lg:p-24 max-w-5xl">
          {/* Mobile Header */}
          <div className="lg:hidden mb-12">
             <div className="h-[2px] bg-white/[0.04] mb-6">
                <div className="h-full bg-[#D90019] transition-all duration-500" style={{ width: `${pct}%` }} />
             </div>
             <p className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-bold mb-2">Step {step} of {totalSteps}</p>
             <h2 className="font-playfair text-[32px] text-white">Your OS Audit</h2>
          </div>

          {step === 1 && (
            <ScrollReveal>
              <div className="max-w-2xl">
                <h2 className="font-playfair text-[clamp(32px,4vw,62px)] leading-[1.02] text-white mb-4">
                  Tell us about <em className="text-[#D90019]">your business.</em>
                </h2>
                <p className="text-[17px] text-white/40 mb-12">This identifies the right industry playbook for your build.</p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-10">
                   <div>
                    <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-3">Your name</label>
                    <input value={data.name} onChange={e => setField("name", e.target.value)} placeholder="First and last name"
                      className="w-full bg-white/[0.03] border border-white/[0.07] px-5 py-4 text-[15px] text-white focus:border-[#D90019]/40 outline-none transition-all" />
                   </div>
                   <div>
                    <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-3">Business name</label>
                    <input value={data.businessName} onChange={e => setField("businessName", e.target.value)} placeholder="Company name"
                      className="w-full bg-white/[0.03] border border-white/[0.07] px-5 py-4 text-[15px] text-white focus:border-[#D90019]/40 outline-none transition-all" />
                   </div>
                   <div className="sm:col-span-2">
                    <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-3">Email address</label>
                    <input value={data.email} onChange={e => setField("email", e.target.value)} placeholder="you@company.com" type="email"
                      className="w-full bg-white/[0.03] border border-white/[0.07] px-5 py-4 text-[15px] text-white focus:border-[#D90019]/40 outline-none transition-all" />
                   </div>
                </div>

                <div className="mb-12">
                   <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-4">Industry Category</label>
                   <div className="flex flex-wrap gap-2">
                    {["Home Services", "Construction & Trades", "Health & Wellness", "Professional Services", "Real Estate", "Retail & E-Commerce", "Hospitality", "Creator / Personal Brand", "Agency", "Tech / SaaS", "Coaching & Education", "Other"].map(v => (
                      <Chip key={v} label={v} selected={data.industry.includes(v)} onClick={() => setData(prev => ({ ...prev, industry: [v] }))} />
                    ))}
                   </div>
                </div>

                <div className="mb-12">
                   <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-5">Annual Revenue</label>
                   <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { v: "Under $250K", l: "Under $250K", s: "Early growth" },
                      { v: "$250K-$1M", l: "$250K - $1M", s: "Scaling up" },
                      { v: "$1M-$5M", l: "$1M - $5M", s: "Established" },
                      { v: "$5M+", l: "$5M+", s: "Multi-million operation" },
                    ].map(r => (
                      <RadioCard key={r.v} label={r.l} sub={r.s} selected={data.revenue === r.v} onClick={() => setField("revenue", r.v)} />
                    ))}
                   </div>
                </div>

                <button onClick={next} className="bg-[#D90019] text-white px-10 py-4 text-[13px] font-bold tracking-widest uppercase hover:brightness-110 transition-all">Continue &#8594;</button>
              </div>
            </ScrollReveal>
          )}

          {step > 1 && step < 5 && (
            <ScrollReveal>
               <div className="max-w-2xl">
                  {/* Generic placeholder for steps 2-4 for now, I'll flesh them out if needed but keeping it clean for the new page flow */}
                  <h2 className="font-playfair text-[clamp(32px,3vw,56px)] leading-[1.03] text-white mb-4">
                    OS Audit Phase: <em className="text-[#D90019]">{STEP_LABELS[step-1]}</em>
                  </h2>
                  <p className="text-[17px] text-white/40 mb-12">We&apos;re mapping your operational plumbing.</p>
                  
                  {step === 2 && (
                    <div className="mb-12">
                      <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-4">Who&apos;s buried in admin work?</label>
                      <div className="flex flex-wrap gap-2">
                        {["Owner / Founder", "Admin / Assistant", "Sales team", "Operations", "Customer service", "Everyone"].map(v => (
                          <Chip key={v} label={v} selected={data.adminRoles.includes(v)} onClick={() => toggleChip("adminRoles", v)} />
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="mb-12">
                      <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-4">Primary CRM/Stack</label>
                      <div className="flex flex-wrap gap-2">
                        {["Spreadsheets", "HubSpot", "Salesforce", "GoHighLevel", "Notion", "Other"].map(v => (
                          <Chip key={v} label={v} selected={data.crm.includes(v)} onClick={() => setData(prev => ({ ...prev, crm: [v] }))} />
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="mb-12">
                      <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-4">Detected Friction Points</label>
                      <div className="flex flex-wrap gap-2">
                        {["Lead follow-up slow", "Broken tools", "Owner is bottleneck", "Lost revenue", "No visibility"].map(v => (
                          <Chip key={v} label={v} selected={data.bottlenecks.includes(v)} onClick={() => toggleChip("bottlenecks", v)} />
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <button onClick={prev} className="px-8 py-4 border border-white/10 text-white/40 hover:text-white transition-all text-[13px] font-bold tracking-widest uppercase">Back</button>
                    <button onClick={next} className="bg-[#D90019] text-white px-10 py-4 text-[13px] font-bold tracking-widest uppercase hover:brightness-110 transition-all flex-1">Next Phase &#8594;</button>
                  </div>
               </div>
            </ScrollReveal>
          )}

          {step === 5 && (
            <ScrollReveal>
               <div className="max-w-2xl">
                 <h2 className="font-playfair text-[clamp(32px,3vw,56px)] leading-[1.03] text-white mb-4">
                   Final Step: <em className="text-[#D90019]">Execution Timeline.</em>
                 </h2>
                 <p className="text-[17px] text-white/40 mb-12">When do you want to see this running?</p>
                 
                 <div className="mb-12">
                    <label className="text-[12px] uppercase tracking-[2px] text-white/30 font-bold block mb-5">Urgency</label>
                    <div className="grid grid-cols-1 gap-3">
                       {["ASAP - systems are breaking", "Ready within 30 days", "In the next 90 days", "Just researching for now"].map(v => (
                         <RadioCard key={v} label={v} sub="" selected={data.urgency === v} onClick={() => setField("urgency", v)} />
                       ))}
                    </div>
                 </div>

                 <button onClick={submit} className="w-full bg-[#D90019] text-white px-10 py-5 text-[15px] font-black tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_20px_80px_rgba(217,0,25,0.3)]">Generate My Blueprint</button>
               </div>
            </ScrollReveal>
          )}

        </div>
      </div>
    </div>
  )
}
