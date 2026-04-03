"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

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
      className={`px-4 py-2.5 text-[12px] tracking-wide transition-all font-[family-name:var(--font-inter)] ${selected
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
      className={`flex-1 py-3 px-1.5 text-center text-[12px] transition-all cursor-pointer font-[family-name:var(--font-inter)] ${selected
        ? "bg-[#D90019] border-[#D90019] text-white"
        : "bg-white/[0.02] border-white/[0.07] text-white/40 hover:bg-white/[0.05] hover:text-white"
        } border border-r-0 last:border-r`}
    >
      {label}
    </button>
  )
}

export function EmbeddedAudit() {
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
    // Map ops score (1=chaos, 10=systemized) to pain level (inverted: high ops score = low pain)
    const opsNum = parseInt(data.opsScore) || 5
    const painFromOps = Math.max(1, 11 - opsNum)
    
    try {
      const response = await fetch("/api/audit/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Core fields mapped to existing admin/API field names
          fullName: data.name,
          companyName: data.businessName,
          email: data.email,
          businessType: data.industry[0] || "other",
          currentRevenue: data.revenue,
          revenue: data.revenue, // Add both for compatibility
          teamSize: data.teamSize,
          tools: [...data.crm, ...data.scheduling, ...data.billing, ...data.marketing],
          hoursPerWeek: data.hoursOnAdmin,
          hoursOnAdmin: data.hoursOnAdmin, // Add both
          problems: data.bottlenecks,
          bottlenecks: data.bottlenecks, // Add both
          keepsUpAtNight: data.biggestFix,
          biggestFix: data.biggestFix, // Add both
          bottleneck: data.bottlenecks[0] || "",
          next12MonthsGoal: data.success,
          success: data.success, // Add both
          startDate: data.urgency,
          urgency: data.urgency, // Add both
          decisionMaker: data.decisionMaker[0] || "",
          painLevel: [painFromOps],
          // New operations audit fields
          role: data.role,
          adminRoles: data.adminRoles,
          opsPerson: data.opsPerson,
          crmTools: data.crm,
          schedulingTools: data.scheduling,
          billingTools: data.billing,
          marketingTools: data.marketing,
          aiUse: data.aiUse,
          opsScore: data.opsScore,
          automate: data.automate,
          extraNotes: data.extraNotes,
          // Source identifier
          source: "embedded_ops_audit",
        }),
      })

      if (!response.ok) {
        throw new Error(`Submission failed with status: ${response.status}`)
      }
      
      setSubmitted(true)
    } catch (error) {
      console.error('[AUDIT SUBMIT ERROR]', error)
      alert("There was an issue submitting your audit. Please try again or contact us at support@elianatech.com")
    }
  }

  // Gap detection
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

    // Build multiple gaps detected
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

    // Revenue impact calculation
    const hMap: Record<string, { hrs: string; annual: string; monthly: string }> = {
      "1-5h": { hrs: "10-18", annual: "$26,000-$47,000", monthly: "$2,200-$3,900" },
      "5-10h": { hrs: "16-26", annual: "$42,000-$68,000", monthly: "$3,500-$5,700" },
      "10-20h": { hrs: "22-34", annual: "$57,000-$88,000", monthly: "$4,750-$7,300" },
      "20-30h": { hrs: "28-40", annual: "$73,000-$104,000", monthly: "$6,100-$8,700" },
      "30h+": { hrs: "35-45+", annual: "$91,000-$117,000+", monthly: "$7,600-$9,800+" },
    }
    const impact = hMap[data.hoursOnAdmin] || { hrs: "15-34", annual: "$39,000-$88,000", monthly: "$3,250-$7,300" }

    // Ops score assessment
    const opsNum = parseInt(data.opsScore) || 5
    const opsLabel = opsNum <= 3 ? "Critical — your business is running on willpower" : opsNum <= 5 ? "Below average — significant infrastructure gaps" : opsNum <= 7 ? "Moderate — foundation exists but automation is missing" : "Strong — ready for AI to take it to the next level"
    const opsColor = opsNum <= 3 ? "text-red-400" : opsNum <= 5 ? "text-orange-400" : opsNum <= 7 ? "text-yellow-400" : "text-emerald-400"

    // Team burden
    const teamBurden = data.adminRoles.length > 0 ? data.adminRoles : ["Your team"]
    const hasNoOps = data.opsPerson.includes("No") || data.opsPerson.includes("falls through")

    return (
      <div className="max-w-4xl mx-auto py-10 md:py-16 px-6 font-[family-name:var(--font-inter)]">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-[#D90019]" />Audit Complete
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(32px,4vw,56px)] leading-[1] text-white mb-4">
            {data.businessName || "Your Business"} — <em className="text-[#D90019]">Operations Blueprint</em>
          </h2>
          <p className="text-[15px] text-white/40 leading-relaxed max-w-xl">
            This is your personalized infrastructure audit. Below is what we found, what it&apos;s costing you, and the exact system we&apos;d build to fix it.
          </p>
        </div>

        {/* ── SECTION 1: Executive Summary ── */}
        <div className="border border-white/[0.07] mb-4">
          <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
            <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">01 — Executive Summary</p>
          </div>
          <div className="px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <p className={`font-[family-name:var(--font-playfair)] italic text-[48px] md:text-[56px] leading-none ${opsColor}`}>{data.opsScore || "5"}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">/10 Ops Score</p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[48px] md:text-[56px] text-white leading-none">{detectedGaps.length}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Gaps Found</p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[48px] md:text-[56px] text-[#D90019] leading-none">{impact.hrs}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Hrs Recoverable/Wk</p>
              </div>
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[48px] md:text-[56px] text-emerald-400 leading-none">{playbook.agents.length}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold mt-1">Agents to Deploy</p>
              </div>
            </div>
            <div className="bg-white/[0.03] border border-white/[0.04] p-5">
              <p className="text-[13px] text-white/50 leading-relaxed">
                <strong className="text-white">Assessment:</strong> {opsLabel}.
                {hasNoOps && " You have no dedicated ops person — meaning operational gaps fall through or land on the owner."}
                {` Your team${data.teamSize ? ` of ${data.teamSize}` : ""} is losing an estimated ${impact.hrs} hours per week to tasks that AI infrastructure can handle autonomously.`}
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 2: Revenue Impact ── */}
        <div className="border border-white/[0.07] mb-4">
          <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
            <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">02 — Cost of Doing Nothing</p>
          </div>
          <div className="px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#D90019]/[0.06] border border-[#D90019]/15 p-5 text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[28px] md:text-[32px] text-[#D90019] leading-none mb-1">{impact.monthly}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold">Lost per month</p>
                <p className="text-[11px] text-white/25 mt-2">In wasted labor, missed leads, and leaked revenue</p>
              </div>
              <div className="bg-[#D90019]/[0.06] border border-[#D90019]/15 p-5 text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[28px] md:text-[32px] text-[#D90019] leading-none mb-1">{impact.annual}</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold">Lost per year</p>
                <p className="text-[11px] text-white/25 mt-2">Compounding cost of manual operations</p>
              </div>
              <div className="bg-emerald-400/[0.06] border border-emerald-400/15 p-5 text-center">
                <p className="font-[family-name:var(--font-playfair)] italic text-[28px] md:text-[32px] text-emerald-400 leading-none mb-1">{impact.hrs}h</p>
                <p className="text-[10px] tracking-[2px] uppercase text-white/30 font-semibold">Returned weekly</p>
                <p className="text-[11px] text-white/25 mt-2">Back to you and your team</p>
              </div>
            </div>
            {teamBurden.length > 0 && (
              <div className="bg-white/[0.03] border border-white/[0.04] p-5">
                <p className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold mb-2">Who&apos;s carrying the weight</p>
                <div className="flex flex-wrap gap-2">
                  {teamBurden.map((r, i) => (
                    <span key={i} className="px-3 py-1.5 text-[12px] bg-[#D90019]/[0.08] border border-[#D90019]/20 text-[#D90019]/80">{r}</span>
                  ))}
                  {data.hoursOnAdmin && <span className="px-3 py-1.5 text-[12px] bg-white/[0.04] border border-white/[0.07] text-white/40">{data.hoursOnAdmin} / week on admin</span>}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 3: Gaps Detected ── */}
        <div className="border border-white/[0.07] mb-4">
          <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
            <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">03 — Infrastructure Gaps Detected ({detectedGaps.length})</p>
          </div>
          <div className="divide-y divide-white/[0.04]">
            {detectedGaps.map((g, i) => (
              <div key={i} className="px-6 md:px-8 py-5 md:py-6 flex gap-4 md:gap-6 items-start">
                <div className="shrink-0 mt-1">
                  <span className={`text-[10px] tracking-[1.5px] uppercase font-bold px-2 py-1 ${g.severity === "critical" ? "bg-red-500/15 text-red-400 border border-red-500/25" : g.severity === "high" ? "bg-orange-500/10 text-orange-400 border border-orange-500/20" : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"}`}>
                    {g.severity}
                  </span>
                </div>
                <div>
                  <p className="text-[15px] text-white font-medium mb-1.5">{g.title}</p>
                  <p className="text-[13px] text-white/40 leading-relaxed">{g.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SECTION 4: Tool Stack Assessment ── */}
        <div className="border border-white/[0.07] mb-4">
          <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
            <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">04 — Current Tool Stack</p>
          </div>
          <div className="px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: "CRM / Leads", tools: data.crm, connected: !data.crm.includes("None / Spreadsheets") },
                { label: "Scheduling", tools: data.scheduling, connected: !data.scheduling.includes("None / Manual") },
                { label: "Invoicing", tools: data.billing, connected: !data.billing.includes("None / Manual") },
                { label: "Marketing", tools: data.marketing, connected: !data.marketing.includes("None") },
              ].map((cat, i) => (
                <div key={i} className={`p-4 border ${cat.connected ? "border-white/[0.07] bg-white/[0.02]" : "border-[#D90019]/20 bg-[#D90019]/[0.04]"}`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-[11px] tracking-[2px] uppercase text-white/30 font-semibold">{cat.label}</p>
                    <span className={`text-[9px] tracking-[1.5px] uppercase font-bold ${cat.connected ? "text-emerald-400" : "text-[#D90019]"}`}>
                      {cat.connected ? "ACTIVE" : "GAP"}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.filter(Boolean).map((t, j) => (
                      <span key={j} className="px-2 py-1 text-[11px] bg-white/[0.04] text-white/50">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white/[0.03] border border-white/[0.04] p-4 flex items-start gap-3">
              <span className={`text-[9px] tracking-[1.5px] uppercase font-bold px-2 py-1 shrink-0 ${data.aiUse.includes("Yes") ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-[#D90019]/10 text-[#D90019] border border-[#D90019]/20"}`}>
                {data.aiUse.includes("Yes") ? "IN USE" : data.aiUse.includes("little") ? "MINIMAL" : "NONE"}
              </span>
              <p className="text-[13px] text-white/40 leading-relaxed">
                <strong className="text-white/70">AI Status:</strong> {data.aiUse || "Not specified"}.
                {noTools ? " Multiple core systems are missing — you're running on spreadsheets and manual processes." : ` You have ${disconnectedTools} tools in your stack. We'd connect them all into one automated system.`}
              </p>
            </div>
          </div>
        </div>

        {/* ── SECTION 5: Recommended Build ── */}
        <div className="border border-[#D90019]/25 bg-gradient-to-br from-[#D90019]/[0.06] to-orange-500/[0.02] mb-4">
          <div className="border-b border-[#D90019]/15 px-6 md:px-8 py-4">
            <p className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold">05 — Recommended Build: {industry} Playbook</p>
          </div>
          <div className="px-6 md:px-8 py-6 md:py-8">
            <h3 className="font-[family-name:var(--font-playfair)] italic text-[24px] md:text-[28px] text-white mb-2">{industry} — Operations Infrastructure</h3>
            <p className="text-[14px] text-white/40 leading-relaxed mb-6 max-w-2xl">
              Based on your {detectedGaps.length} identified gaps, {data.hoursOnAdmin || "10-20h"}/week in recoverable admin time, and your current tool stack — here is the exact agent deployment we&apos;d build for {data.businessName || "your business"}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {playbook.agents.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/[0.03] border border-white/[0.04]">
                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <span className="w-[5px] h-[5px] rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[13px] text-white font-medium">{a}</p>
                    <p className="text-[10px] text-white/25 tracking-wide uppercase mt-0.5">Autonomous &middot; 24/7 &middot; Industry-trained</p>
                  </div>
                </div>
              ))}
            </div>
            {data.automate.length > 0 && (
              <div className="bg-white/[0.03] border border-white/[0.04] p-4 mb-6">
                <p className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold mb-2">Functions you want automated</p>
                <div className="flex flex-wrap gap-2">
                  {data.automate.map((a, i) => (
                    <span key={i} className="px-3 py-1.5 text-[12px] bg-[#D90019]/[0.08] border border-[#D90019]/20 text-white/60">{a}</span>
                  ))}
                </div>
              </div>
            )}
            {data.biggestFix && (
              <div className="bg-white/[0.03] border border-white/[0.04] p-4">
                <p className="text-[11px] tracking-[2px] uppercase text-white/25 font-semibold mb-2">Your #1 priority</p>
                <p className="text-[14px] text-white/60 leading-relaxed italic">&ldquo;{data.biggestFix}&rdquo;</p>
              </div>
            )}
          </div>
        </div>

        {/* ── SECTION 6: What Happens Next ── */}
        <div className="border border-white/[0.07] mb-10">
          <div className="border-b border-white/[0.04] px-6 md:px-8 py-4 bg-white/[0.02]">
            <p className="text-[10px] tracking-[3px] uppercase text-white/30 font-semibold">06 — What Happens Next</p>
          </div>
          <div className="px-6 md:px-8 py-6 md:py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { step: "01", title: "Discovery Call", desc: "We walk through this audit together. You ask questions. We show you exactly what the system looks like running inside your business. 30 minutes, no pitch." },
                { step: "02", title: "Custom Build Scope", desc: "We map the full infrastructure plan — which agents deploy first, what connects to what, and the 14-day installation timeline. You see the entire blueprint before committing." },
                { step: "03", title: "Installation Begins", desc: "We go inside your operation and start building. Agents get trained on your data, tools get connected, and the machine starts running. You see results within the first week." },
              ].map((s, i) => (
                <div key={i} className="p-5 border border-white/[0.04] bg-white/[0.02]">
                  <p className="font-[family-name:var(--font-playfair)] italic text-[32px] text-white/[0.06] leading-none mb-2">{s.step}</p>
                  <p className="text-[14px] text-white font-medium mb-2">{s.title}</p>
                  <p className="text-[12px] text-white/35 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="text-center py-6">
          <p className="font-[family-name:var(--font-playfair)] italic text-[clamp(24px,3vw,36px)] text-white leading-[1.1] mb-3">
            Ready to see this system <em className="text-[#D90019]">running?</em>
          </p>
          <p className="text-[14px] text-white/40 leading-relaxed max-w-md mx-auto mb-8">
            Book a free 30-minute discovery call. We&apos;ll walk through your audit, answer every question, and show you exactly what changes in your business the moment we install it.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://cal.com/elianatech/30min" className="bg-[#D90019] text-white px-8 md:px-10 py-4 text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all inline-block shadow-[0_12px_48px_rgba(217,0,25,0.2)]">Book My Free Discovery Call</a>
          </div>
          <p className="text-[11px] text-white/20 mt-4 tracking-wide">No contracts &middot; No pitch decks &middot; Your blueprint, free</p>
        </div>
      </div>
    )
  }

  return (
    <div className="font-[family-name:var(--font-inter)]">
      {/* Audit Header */}
      <div className="text-center max-w-2xl mx-auto px-6 pt-24 pb-0">
        <p className="text-[10px] tracking-[4px] uppercase text-white/40 font-semibold mb-5 flex items-center justify-center gap-3">
          Free Operations Audit
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(40px,5vw,72px)] leading-[1] text-white mb-5">
          Before we build anything, we need to know what we&apos;re <em className="text-[#D90019]">working with.</em>
        </h2>
        <p className="text-[17px] text-white/40 leading-relaxed">
          Answer 5 sections. We map your gaps, match you to the right playbook, and tell you exactly what we&apos;d build — before any conversation about cost.
        </p>
      </div>

      {/* Audit Body: Sidebar + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] border-t border-white/[0.04] mt-16">

        {/* Sidebar - desktop only */}
        <div className="hidden lg:flex flex-col border-r border-white/[0.04] bg-[#060406] p-10 sticky top-0 h-screen overflow-y-auto">
          <p className="font-[family-name:var(--font-playfair)] italic text-[22px] text-white leading-tight mb-8">
            Your Audit<br /><span className="text-[#D90019]">In Progress</span>
          </p>
          <div className="flex justify-between text-[11px] text-white/[0.16] tracking-wide mb-2">
            <span>Progress</span><span>{pct}%</span>
          </div>
          <div className="h-[2px] bg-white/[0.04] mb-8">
            <div className="h-full bg-[#D90019] transition-all duration-500" style={{ width: `${pct}%` }} />
          </div>
          <div className="flex flex-col gap-0">
            {STEP_LABELS.map((label, i) => {
              const n = i + 1
              const isCur = n === step
              const isDone = n < step
              return (
                <div key={i} className={`flex items-center gap-3.5 py-3 border-b border-white/[0.04] ${i === 0 ? "border-t" : ""}`}>
                  <div className={`w-[26px] h-[26px] flex items-center justify-center text-[10px] font-semibold border transition-all shrink-0 ${isCur ? "bg-[#D90019] border-[#D90019] text-white" : isDone ? "bg-emerald-400/10 border-emerald-400/25 text-emerald-400" : "border-white/[0.07] text-white/[0.16]"}`}>
                    {isDone ? "&#10003;" : n}
                  </div>
                  <span className={`text-[13px] transition-colors ${isCur ? "text-white font-medium" : isDone ? "text-white/[0.16] line-through" : "text-white/[0.16]"}`}>{label}</span>
                </div>
              )
            })}
          </div>

          {/* Gap Preview */}
          <div className="mt-auto pt-7 border-t border-white/[0.04]">
            <p className="text-[9px] tracking-[3px] uppercase text-white/[0.16] font-semibold mb-3.5">Gaps Detected</p>
            <div className="flex flex-col gap-1.5">
              {[
                { id: "leads", label: "Lead follow-up" },
                { id: "invoices", label: "Invoicing & billing" },
                { id: "tools", label: "Disconnected tools" },
                { id: "ai", label: "AI adoption" },
                { id: "reporting", label: "Reporting & visibility" },
                { id: "owner", label: "Owner dependency" },
              ].map(g => (
                <div key={g.id} className={`text-[12px] flex items-center gap-2 px-2.5 py-1.5 transition-all ${gaps[g.id] ? "bg-[#D90019]/[0.07] text-white/65" : "text-white/[0.16]"}`}>
                  <div className={`w-1 h-1 shrink-0 ${gaps[g.id] ? "bg-[#D90019]" : "bg-white/[0.07]"}`} />
                  {g.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="p-8 sm:p-12 lg:p-16">
          {/* Mobile progress bar */}
          <div className="lg:hidden mb-8">
            <div className="flex justify-between text-[11px] text-white/[0.16] mb-2">
              <span>Step {step} of {totalSteps}</span><span>{pct}%</span>
            </div>
            <div className="h-[2px] bg-white/[0.04]">
              <div className="h-full bg-[#D90019] transition-all duration-500" style={{ width: `${pct}%` }} />
            </div>
          </div>

          {/* Step 1: Your Business */}
          {step === 1 && (
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-4">Step 1 of {totalSteps}</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,46px)] leading-[1.03] text-white mb-3">
                Tell us about <em className="text-[#D90019]">your business.</em>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10">This gets us to the right industry playbook before we go deeper.</p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-[13px] font-medium text-white block mb-2">Your name</label>
                  <input value={data.name} onChange={e => setField("name", e.target.value)} placeholder="First and last name"
                    className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-white block mb-2">Business name</label>
                  <input value={data.businessName} onChange={e => setField("businessName", e.target.value)} placeholder="Your company name"
                    className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-white block mb-2">Email address</label>
                  <input value={data.email} onChange={e => setField("email", e.target.value)} placeholder="you@company.com" type="email"
                    className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all" />
                </div>
                <div>
                  <label className="text-[13px] font-medium text-white block mb-2">Your role</label>
                  <select value={data.role} onChange={e => setField("role", e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white focus:border-[#D90019]/40 outline-none transition-all appearance-none">
                    <option value="" className="bg-[#1a1a1a]">Select role</option>
                    <option className="bg-[#1a1a1a]">Founder / Owner</option>
                    <option className="bg-[#1a1a1a]">CEO / Co-Founder</option>
                    <option className="bg-[#1a1a1a]">Operations Manager</option>
                    <option className="bg-[#1a1a1a]">Marketing Director</option>
                    <option className="bg-[#1a1a1a]">Sales Lead</option>
                    <option className="bg-[#1a1a1a]">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-1.5">Industry</label>
                <span className="text-[12px] text-white/40 block mb-3">Pick the closest match</span>
                <div className="flex flex-wrap gap-2">
                  {["Home Services", "Construction & Trades", "Health & Wellness", "Professional Services", "Real Estate", "Retail & E-Commerce", "Hospitality", "Creator / Personal Brand", "Agency", "Tech / SaaS", "Coaching & Education", "Other"].map(v => (
                    <Chip key={v} label={v} selected={data.industry.includes(v)} onClick={() => {
                      setData(prev => ({ ...prev, industry: prev.industry.includes(v) ? prev.industry.filter(x => x !== v) : [v] }))
                    }} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Annual revenue range</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "Pre-revenue", l: "Pre-revenue", s: "Just starting out" },
                    { v: "Under $250K", l: "Under $250K", s: "Early growth" },
                    { v: "$250K-$1M", l: "$250K - $1M", s: "Scaling up" },
                    { v: "$1M-$5M", l: "$1M - $5M", s: "Established" },
                    { v: "$5M+", l: "$5M+", s: "Multi-million operation" },
                    { v: "Prefer not to say", l: "Prefer not to say", s: "\u00A0" },
                  ].map(r => (
                    <RadioCard key={r.v} label={r.l} sub={r.s} selected={data.revenue === r.v} onClick={() => setField("revenue", r.v)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Your Team */}
          {step === 2 && (
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-4">Step 2 of {totalSteps}</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,46px)] leading-[1.03] text-white mb-3">
                Who&apos;s running <em className="text-[#D90019]">the operation?</em>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10">We need to understand where human effort is going before we can redirect it.</p>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Team size (including you)</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "Just me", s: "Solo operator" },
                    { v: "2-5 people", s: "Small team" },
                    { v: "6-15 people", s: "Growing" },
                    { v: "16-50 people", s: "Mid-size" },
                    { v: "50+ people", s: "Large operation" },
                  ].map(r => (
                    <RadioCard key={r.v} label={r.v} sub={r.s} selected={data.teamSize === r.v} onClick={() => setField("teamSize", r.v)} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-1.5">Which roles are buried in admin or repetitive work?</label>
                <span className="text-[12px] text-white/40 block mb-3">Select all that apply</span>
                <div className="flex flex-wrap gap-2">
                  {["Owner / Founder", "Admin / Assistant", "Sales team", "Operations", "Customer service", "Marketing", "Finance / Billing", "Everyone, honestly"].map(v => (
                    <Chip key={v} label={v} selected={data.adminRoles.includes(v)} onClick={() => toggleChip("adminRoles", v)} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Hours per week you personally spend on tasks the system should handle</label>
                <div className="flex">
                  {["1-5h", "5-10h", "10-20h", "20-30h", "30h+"].map(v => (
                    <ScaleButton key={v} label={v} selected={data.hoursOnAdmin === v} onClick={() => setField("hoursOnAdmin", v)} />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-white/[0.16]">Not much</span>
                  <span className="text-[10px] text-white/[0.16]">Half my week</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Do you have a dedicated ops or admin person?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "Yes - full-time", s: "Dedicated ops hire" },
                    { v: "Part-time or VA", s: "Contractor or virtual" },
                    { v: "No - I do it", s: "Falls on me" },
                    { v: "No - it falls through", s: "Things get missed" },
                  ].map(r => (
                    <RadioCard key={r.v} label={r.v} sub={r.s} selected={data.opsPerson === r.v} onClick={() => setField("opsPerson", r.v)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Tools & AI */}
          {step === 3 && (
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-4">Step 3 of {totalSteps}</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,46px)] leading-[1.03] text-white mb-3">
                What tools are you <em className="text-[#D90019]">running on?</em>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10">We connect what you have, fill what&apos;s missing, and eliminate what&apos;s creating friction.</p>

              {[
                { label: "CRM / Lead Management", field: "crm" as keyof AuditData, opts: ["None / Spreadsheets", "HubSpot", "Salesforce", "GoHighLevel", "Pipedrive", "Zoho", "Notion", "Other"] },
                { label: "Scheduling & Calendar", field: "scheduling" as keyof AuditData, opts: ["None / Manual", "Calendly", "Acuity", "Google Calendar", "Jobber", "ServiceTitan", "Other"] },
                { label: "Invoicing & Payments", field: "billing" as keyof AuditData, opts: ["None / Manual", "QuickBooks", "FreshBooks", "Stripe", "Square", "Xero", "Other"] },
                { label: "Marketing & Campaigns", field: "marketing" as keyof AuditData, opts: ["None", "Mailchimp", "Klaviyo", "ActiveCampaign", "GoHighLevel", "Other"] },
              ].map(section => (
                <div key={section.field} className="mb-8">
                  <label className="text-[13px] font-medium text-white block mb-3">{section.label}</label>
                  <div className="flex flex-wrap gap-2">
                    {section.opts.map(v => (
                      <Chip key={v} label={v} selected={(data[section.field] as string[]).includes(v)} onClick={() => toggleChip(section.field, v)} />
                    ))}
                  </div>
                </div>
              ))}

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Does your business currently use any AI tools?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "Yes - actively", s: "We use AI tools regularly" },
                    { v: "A little / experimenting", s: "Tried a few things" },
                    { v: "No - not yet", s: "Haven't started" },
                    { v: "Not sure what counts", s: "Don't know if what we do qualifies" },
                  ].map(r => (
                    <RadioCard key={r.v} label={r.v} sub={r.s} selected={data.aiUse === r.v} onClick={() => setField("aiUse", r.v)} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Where It Breaks */}
          {step === 4 && (
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-4">Step 4 of {totalSteps}</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,46px)] leading-[1.03] text-white mb-3">
                Where is your business <em className="text-[#D90019]">breaking down?</em>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10">Be specific. This is the most important section — it&apos;s what we build the solution around.</p>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-1.5">Which of these are happening right now?</label>
                <span className="text-[12px] text-white/40 block mb-3">Select everything that applies</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Leads fall through or get slow follow-up",
                    "Messages get buried or missed",
                    "Invoices go out late or get forgotten",
                    "No real client onboarding system",
                    "Team doesn't know what to do next",
                    "No visibility into pipeline or revenue",
                    "Repetitive tasks eating everyone's time",
                    "Not collecting reviews consistently",
                    "Past clients never hear from us again",
                    "Owner is the bottleneck for everything",
                    "Tools don't talk to each other",
                    "No consistent marketing or outreach",
                    "Business stops when owner steps away",
                  ].map(v => (
                    <Chip key={v} label={v} selected={data.bottlenecks.includes(v)} onClick={() => toggleChip("bottlenecks", v)} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">Rate the overall state of your operations (1 = chaos, 10 = fully systemized)</label>
                <div className="flex">
                  {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map(v => (
                    <ScaleButton key={v} label={v} selected={data.opsScore === v} onClick={() => setField("opsScore", v)} />
                  ))}
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[10px] text-white/[0.16]">Chaos</span>
                  <span className="text-[10px] text-white/[0.16]">Fully systemized</span>
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-2">What&apos;s the single biggest thing that, if fixed, would change your business most?</label>
                <textarea value={data.biggestFix} onChange={e => setField("biggestFix", e.target.value)}
                  placeholder="Be specific — e.g. 'We lose 3-4 leads every weekend because nobody follows up until Monday morning'..."
                  rows={3}
                  className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all resize-y min-h-[90px] leading-relaxed" />
              </div>
            </div>
          )}

          {/* Step 5: Timeline & Goals */}
          {step === 5 && (
            <div>
              <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-4">Step 5 of {totalSteps}</span>
              <h2 className="font-[family-name:var(--font-playfair)] text-[clamp(28px,3vw,46px)] leading-[1.03] text-white mb-3">
                One last thing — <em className="text-[#D90019]">your timeline.</em>
              </h2>
              <p className="text-[15px] text-white/40 leading-relaxed mb-10">This tells us how to prioritize your build and who&apos;s in the room.</p>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-3">How urgently do you need this?</label>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    { v: "ASAP", s: "This is actively costing us right now" },
                    { v: "Next 30 days", s: "Ready to move this month" },
                    { v: "1-3 months", s: "Planning ahead" },
                    { v: "Just exploring", s: "Getting informed, not ready yet" },
                  ].map(r => (
                    <RadioCard key={r.v} label={r.v} sub={r.s} selected={data.urgency === r.v} onClick={() => setField("urgency", r.v)} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-1.5">Which functions do you want the AI system to own?</label>
                <span className="text-[12px] text-white/40 block mb-3">Prioritize — you don&apos;t have to pick everything</span>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Lead follow-up & sales pipeline",
                    "Client onboarding & comms",
                    "Scheduling & appointments",
                    "Invoicing & payment follow-up",
                    "Review generation & reputation",
                    "Email & SMS campaigns",
                    "Reporting & analytics",
                    "Social media & content",
                    "Customer service & chat",
                    "Outbound outreach",
                    "Re-engagement & repeat bookings",
                  ].map(v => (
                    <Chip key={v} label={v} selected={data.automate.includes(v)} onClick={() => toggleChip("automate", v)} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-2">What does success look like in 90 days?</label>
                <textarea value={data.success} onChange={e => setField("success", e.target.value)}
                  placeholder="e.g. 'I want to work 10 fewer hours a week and know every lead is being followed up automatically'..."
                  rows={3}
                  className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all resize-y min-h-[90px] leading-relaxed" />
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-1.5">Who&apos;s in the decision?</label>
                <div className="flex flex-wrap gap-2">
                  {["Just me", "Me + partner", "Me + ops team", "Me + leadership", "Need approval from others"].map(v => (
                    <Chip key={v} label={v} selected={data.decisionMaker.includes(v)} onClick={() => {
                      setData(prev => ({ ...prev, decisionMaker: [v] }))
                    }} />
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <label className="text-[13px] font-medium text-white block mb-2">Anything else we should know?</label>
                <textarea value={data.extraNotes} onChange={e => setField("extraNotes", e.target.value)}
                  placeholder="Past frustrations, specific context, questions you already have..."
                  rows={3}
                  className="w-full bg-white/[0.03] border border-white/[0.07] px-4 py-3.5 text-[14px] text-white placeholder:text-white/[0.16] focus:border-[#D90019]/40 focus:bg-[#D90019]/[0.04] outline-none transition-all resize-y min-h-[90px] leading-relaxed" />
              </div>
            </div>
          )}

          {/* Step Navigation */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-white/[0.04]">
            {step > 1 ? (
              <button onClick={prev} className="bg-transparent text-white/40 px-6 py-3 text-[13px] border border-white/[0.07] hover:text-white hover:border-white/[0.18] transition-all cursor-pointer">
                &#8592; Back
              </button>
            ) : <span />}
            <span className="text-[11px] text-white/[0.16] tracking-wide">{step} of {totalSteps}</span>
            {step < totalSteps ? (
              <button onClick={next} className="bg-[#D90019] text-white px-8 py-3 text-[13px] font-semibold hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer">
                Continue <ArrowRight size={14} />
              </button>
            ) : (
              <button onClick={submit} className="bg-[#D90019] text-white px-8 py-3 text-[13px] font-semibold hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer">
                Get My Audit Results <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
