"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Lock, LogOut, Search, ChevronDown, ChevronUp, Trash2,
    Users, TrendingUp, Zap, Eye, ArrowLeft, RefreshCw,
    Mail, Phone, Building2, Globe, Clock, DollarSign, Filter,
    Download, Star, Settings, Target, BarChart3, AlertTriangle,
    Briefcase, Calendar, Flame, Thermometer, Snowflake,
    AlertCircle, CheckCircle2, ArrowRight
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getIndustryConfig, getBusinessCategory } from '@/lib/audit-industry-config'

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

interface Submission {
    id: string
    fullName: string
    companyName: string
    email: string
    phoneNumber?: string
    websiteUrl?: string
    // Business detail fields
    businessType?: string
    businessTypeOther?: string
    productDescription?: string
    productPricePoint?: string
    numberOfProducts?: string
    platform?: string
    deliveryMethod?: string
    listSize?: string
    trafficSource?: string
    launchesPerYear?: string
    churnRate?: string
    contentCreationHours?: string
    supportHoursPerWeek?: string
    onboardingAutomated?: string
    biggestTimeWaste?: string
    // Shared fields (old + new)
    currentRevenue?: string
    revenueTrend?: string
    profitMargin?: string
    revenueGoal?: string
    bottleneck?: string
    teamSize?: string
    conversionRate?: string
    hoursPerWeek?: string
    highValueWork?: string
    twoWeeksOff?: string
    painLevel?: number[]
    keepsUpAtNight?: string
    tools?: string[]
    percentAutomated?: string
    next12MonthsGoal?: string
    holdingBack?: string
    problems?: string[]
    excitementLevel?: string
    startDate?: string
    growthBudget?: string
    decisionMaker?: string
    newsletterOptIn?: boolean
    // Legacy fields (backward compat)
    industryCategory?: string
    specificIndustry?: string
    cashFlow?: string
    teamPerformance?: string
    systemsDocumented?: string
    whoRunsSystems?: string
    techComfort?: number[]
    leadSource?: string
    dealSize?: string
    salesCycle?: string
    missedCalls?: string
    systematicFollowUp?: string
    fixTimeline?: string
    googleReviews?: string
    googleRating?: string
    askReviewsSystem?: string
    respondReviews?: string
    repeatCustomers?: string
    recurringRevenue?: string
    winBackSystem?: string
    referralSystem?: string
    dataOrganization?: string
    timeInBusiness?: string
    nicheIndustry?: string
    hvacLeadsPerMonth?: string
    hvacCloseRate?: string
    hvacAvgTicket?: string
    hvacMaintenance?: string
    retentionRate?: string
    customerValue?: string
    auditScore?: number
    intentLevel?: string
    opportunities?: Array<{ title: string; impact: string; description: string; category: string }>
    createdAt?: string
    submittedAt?: string
}

// ═══════════════════════════════════════════════════════════════════════════
// SAFE HELPERS
// ═══════════════════════════════════════════════════════════════════════════

function safeArray<T>(val: unknown): T[] {
    if (Array.isArray(val)) return val as T[]
    return []
}

function safeNumFromSlider(val: unknown): number {
    if (Array.isArray(val) && val.length > 0) return parseInt(String(val[0])) || 0
    if (typeof val === 'number') return val
    if (typeof val === 'string') return parseInt(val) || 0
    return 0
}

// ═══════════════════════════════════════════════════════════════════════════
// AUDIT RESULT COMPUTATIONS (mirrors lib/audit-analyzer + lib/lead-router)
// ═══════════════════════════════════════════════════════════════════════════

function calcSubScores(s: Submission) {
    // Revenue
    let revenue = 50
    if (s.revenueTrend === 'Growing') revenue += 25
    else if (s.revenueTrend === 'Declining') revenue -= 25
    if (s.profitMargin === '60+') revenue += 15
    else if (s.profitMargin === '40-60') revenue += 10
    else if (s.profitMargin === 'under-20') revenue -= 10
    else if (s.profitMargin === 'negative') revenue -= 20
    if (s.currentRevenue === '3m+') revenue += 10
    else if (s.currentRevenue === '1m-3m') revenue += 5
    else if (s.currentRevenue === 'pre-revenue') revenue -= 10
    revenue = Math.max(0, Math.min(100, revenue))

    // Automation
    let automation = 0
    if (s.percentAutomated === '60+') automation = 85
    else if (s.percentAutomated === '30-60') automation = 60
    else if (s.percentAutomated === 'under-30') automation = 35
    else if (s.percentAutomated === 'none') automation = 15
    automation += Math.min(15, safeArray(s.tools).length * 2)
    if (s.onboardingAutomated === 'Yes') automation += 10
    else if (s.onboardingAutomated === 'Partially') automation += 5
    automation = Math.max(0, Math.min(100, automation))

    // Acquisition
    let acquisition = 50
    if (s.conversionRate === '10+') acquisition = 90
    else if (s.conversionRate === '5-10') acquisition = 75
    else if (s.conversionRate === '3-5') acquisition = 55
    else if (s.conversionRate === '1-3') acquisition = 35
    else if (s.conversionRate === 'under-1') acquisition = 15
    if (s.listSize === '50k+') acquisition += 10
    else if (s.listSize === '10k-50k') acquisition += 5
    else if (s.listSize === 'under-1k') acquisition -= 10
    if (s.trafficSource === 'mixed') acquisition += 5
    acquisition = Math.max(0, Math.min(100, acquisition))

    // Retention
    let retention = 50
    if (s.churnRate === 'under-5') retention = 85
    else if (s.churnRate === '5-10') retention = 60
    else if (s.churnRate === '10-20') retention = 35
    else if (s.churnRate === '20+') retention = 15
    else if (s.churnRate === 'unknown') retention = 30
    if (s.productPricePoint === '5k+' || s.productPricePoint === '1k-5k') retention += 10
    if (s.productPricePoint === 'recurring') retention += 5
    retention = Math.max(0, Math.min(100, retention))

    // Time
    let time = 50
    if (s.twoWeeksOff === 'Yes') time = 80
    else if (s.twoWeeksOff === 'Maybe') time = 45
    else time = 20
    if (s.hoursPerWeek === 'under-20') time += 10
    else if (s.hoursPerWeek === '20-40') time += 5
    else if (s.hoursPerWeek === '40-60') time -= 5
    else if (s.hoursPerWeek === '60+') time -= 15
    if (s.highValueWork === '60+') time += 10
    else if (s.highValueWork === '20-40') time -= 10
    else if (s.highValueWork === 'under-20') time -= 15
    time = Math.max(0, Math.min(100, time))

    return { revenue, automation, acquisition, retention, time }
}

function calcLeadScore(s: Submission, auditScore: number) {
    const excitementLevel = parseInt(s.excitementLevel || '0') || 0
    const painLevel = safeNumFromSlider(s.painLevel)
    const budget = (s.growthBudget || '').toLowerCase()

    let score = 0
    const reasons: string[] = []

    score += Math.min(30, excitementLevel * 3)
    if (excitementLevel >= 8) reasons.push(`High excitement (${excitementLevel}/10)`)

    score += Math.min(30, painLevel * 3)
    if (painLevel >= 8) reasons.push(`High pain level (${painLevel}/10)`)

    const budgetScores: Record<string, number> = { enterprise: 20, aggressive: 15, moderate: 10, starter: 5 }
    score += budgetScores[budget] || 0
    if (['enterprise', 'aggressive'].includes(budget)) reasons.push(`Strong budget (${budget})`)

    const oppBonus = Math.round((100 - auditScore) / 10)
    score += oppBonus
    if (auditScore < 40) reasons.push(`Low automation readiness (${auditScore}/100) = high opportunity`)

    if (s.churnRate === '20+' || s.churnRate === '10-20') { score += 5; reasons.push('High churn rate — urgent need') }
    if (s.onboardingAutomated === 'No') { score += 3; reasons.push('No onboarding automation') }
    if (s.twoWeeksOff === 'No') { score += 2; reasons.push('Cannot step away') }
    if (s.supportHoursPerWeek === '10+') { score += 3; reasons.push('10+ hrs/week on support') }

    score = Math.min(100, Math.max(0, score))

    const isHot = score >= 80 || excitementLevel >= 8 || painLevel >= 8 || (['aggressive', 'enterprise'].includes(budget) && excitementLevel >= 5)
    const isWarm = !isHot && (score >= 50 || (excitementLevel >= 5 && excitementLevel <= 7) || (painLevel >= 5 && painLevel <= 7) || (budgetScores[budget] >= 10))

    const level: 'hot' | 'warm' | 'cold' = isHot ? 'hot' : isWarm ? 'warm' : 'cold'
    const actions = isHot
        ? ['Call/SMS immediately', 'Send Cal.com link', 'Priority follow-up', 'Personal outreach']
        : isWarm
            ? ['Email nurture sequence', 'SMS on Day 2', 'Retarget with case studies', 'Weekly check-in']
            : ['Add to newsletter', 'Monthly value email', 'Re-engage at Day 30']
    const sequence = isHot ? 'A' : isWarm ? 'B' : 'C'

    return { level, score: isHot ? Math.max(score, 80) : isWarm ? Math.max(score, 50) : score, reasons, actions, sequence }
}

function calcROI(s: Submission) {
    // Churn-based revenue loss
    const churnPct = s.churnRate === '20+' ? 0.25 : s.churnRate === '10-20' ? 0.15 : s.churnRate === '5-10' ? 0.07 : 0.03
    const price = s.productPricePoint === '5k+' ? 7500 : s.productPricePoint === '1k-5k' ? 3000 : s.productPricePoint === '500-1k' ? 750 : s.productPricePoint === '100-500' ? 300 : s.productPricePoint === 'recurring' ? 100 : 50
    const listSize = s.listSize === '50k+' ? 75000 : s.listSize === '10k-50k' ? 30000 : s.listSize === '5k-10k' ? 7500 : s.listSize === '1k-5k' ? 3000 : 500

    const lostAnnual = Math.round(listSize * churnPct * price)
    const lostMonthly = Math.round(lostAnnual / 12)
    const wastedHours = s.hoursPerWeek === '60+' ? '1,040+' : s.hoursPerWeek === '40-60' ? '520+' : s.hoursPerWeek === '20-40' ? '260+' : '130+'
    const vacationDays = s.twoWeeksOff === 'No' ? '0' : s.twoWeeksOff === 'Maybe' ? '~5' : '14+'

    const supportHrs = s.supportHoursPerWeek === '10+' ? 12 : s.supportHoursPerWeek === '5-10' ? 7 : s.supportHoursPerWeek === '2-5' ? 3 : 1

    const pkg = (() => {
        const pain = safeNumFromSlider(s.painLevel)
        if (pain >= 7) return 'Full Build'
        if (s.currentRevenue === 'pre-revenue' || s.currentRevenue === 'under-100k' || s.growthBudget === 'starter') return 'Single System'
        if (['500k-1m', '1m-3m', '3m+'].includes(s.currentRevenue || '') || ['aggressive', 'enterprise'].includes(s.growthBudget || '')) return 'Full Build'
        return 'Multi-System'
    })()

    return { lostAnnual, lostMonthly, wastedHours, vacationDays, churnPct, price, listSize, supportHrs, pkg }
}

function fmt$(n: number) {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
    if (n >= 1000) return `$${Math.round(n / 1000)}K`
    return `$${Math.round(n)}`
}

function scoreColor(s: number) { return s >= 70 ? "text-emerald-400" : s >= 40 ? "text-yellow-400" : "text-red-400" }
function scoreBg(s: number) { return s >= 70 ? "bg-emerald-500" : s >= 40 ? "bg-yellow-500" : "bg-red-500" }

// ═══════════════════════════════════════════════════════════════════════════
// SMALL REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function LoginScreen({ onLogin }: { onLogin: (token: string) => void }) {
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); setError(""); setLoading(true)
        try {
            const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) })
            const data = await res.json()
            if (data.success) onLogin(data.token); else setError("Invalid password")
        } catch { setError("Connection error.") } finally { setLoading(false) }
    }
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <div className="relative w-10 h-10 overflow-hidden rounded-xl"><Image src="/icon.png" alt="Elianatech" fill className="object-cover" /></div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">ELIANATECH</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mt-4">Admin Dashboard</h1>
                    <p className="text-slate-400 mt-2">Enter your password to continue</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoFocus
                            className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-all" />
                    </div>
                    <AnimatePresence>{error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400 text-sm text-center">{error}</motion.p>}</AnimatePresence>
                    <button type="submit" disabled={loading || !password} className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed">{loading ? "Verifying..." : "Sign In"}</button>
                </form>
            </motion.div>
        </div>
    )
}

function StatCard({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string | number; color: string }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-2"><div className={`p-2 rounded-lg ${color}`}><Icon className="w-4 h-4" /></div><span className="text-slate-400 text-sm">{label}</span></div>
            <p className="text-2xl font-bold text-white">{value}</p>
        </div>
    )
}

function DetailSection({ title, icon: Icon, iconColor, children }: { title: string; icon: React.ElementType; iconColor: string; children: React.ReactNode }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><Icon className={`w-4 h-4 ${iconColor}`} />{title}</h3>
            {children}
        </div>
    )
}

function DetailField({ label, value }: { label: string; value?: string | number | boolean | null }) {
    if (value === undefined || value === null || value === "") return null
    const display = typeof value === "boolean" ? (value ? "Yes" : "No") : String(value)
    return (<div className="bg-white/[0.03] rounded-xl p-3 border border-white/5"><span className="text-xs text-slate-500 block mb-0.5">{label}</span><p className="text-white text-sm">{display}</p></div>)
}

function ScoreBar({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
    return (
        <div>
            <div className="flex items-center justify-between mb-1"><span className="text-sm text-slate-300">{label}</span><span className={`text-sm font-bold ${scoreColor(value)}`}>{value}</span></div>
            <div className="h-2.5 bg-white/10 rounded-full overflow-hidden"><div className={`h-full ${scoreBg(value)} rounded-full transition-all`} style={{ width: `${Math.min(value, max)}%` }} /></div>
        </div>
    )
}

function SliderBar({ label, value, max = 10 }: { label: string; value: number; max?: number }) {
    const safeVal = typeof value === 'number' && !isNaN(value) ? value : 0
    const safeMax = typeof max === 'number' && !isNaN(max) && max > 0 ? max : 10
    const pct = (safeVal / safeMax) * 100
    const color = safeVal >= 7 ? "from-red-500 to-red-400" : safeVal >= 4 ? "from-yellow-500 to-yellow-400" : "from-green-500 to-green-400"
    return (<div><div className="flex items-center justify-between mb-1"><span className="text-xs text-slate-500">{label}</span><span className="text-white text-sm font-medium">{safeVal}/{safeMax}</span></div><div className="h-2 bg-white/10 rounded-full overflow-hidden"><div className={`h-full bg-gradient-to-r ${color} rounded-full`} style={{ width: `${pct}%` }} /></div></div>)
}

// ═══════════════════════════════════════════════════════════════════════════
// ERROR BOUNDARY
// ═══════════════════════════════════════════════════════════════════════════

class DetailErrorBoundary extends React.Component<{ children: React.ReactNode; onBack: () => void }, { hasError: boolean }> {
    constructor(props: { children: React.ReactNode; onBack: () => void }) { super(props); this.state = { hasError: false } }
    static getDerivedStateFromError() { return { hasError: true } }
    render() {
        if (this.state.hasError) {
            return (
                <div className="text-center py-20">
                    <AlertTriangle className="w-10 h-10 text-red-400 mx-auto mb-3" />
                    <p className="text-white font-semibold mb-2">Something went wrong loading this submission</p>
                    <p className="text-slate-400 text-sm mb-4">This submission may have incomplete or malformed data.</p>
                    <button onClick={this.props.onBack} className="px-4 py-2 rounded-xl bg-white/10 text-white text-sm hover:bg-white/20 transition-all">Back to list</button>
                </div>
            )
        }
        return this.props.children
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// SUBMISSION DETAIL (full answers + audit results + lead score + ROI)
// ═══════════════════════════════════════════════════════════════════════════

function SubmissionDetail({ submission: s, onBack, onDelete }: { submission: Submission; onBack: () => void; onDelete: (id: string) => void }) {
    const [activeTab, setActiveTab] = useState<'results' | 'answers'>('results')

    const intentColor = { high: "text-green-400 bg-green-400/10 border-green-400/20", medium: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20", low: "text-slate-400 bg-slate-400/10 border-slate-400/20" }[s.intentLevel || "low"] || "text-slate-400 bg-slate-400/10 border-slate-400/20"

    const date = s.createdAt || s.submittedAt
    const formattedDate = date ? new Date(date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }) : "Unknown"

    const auditScore = s.auditScore ?? 0
    const sub = useMemo(() => calcSubScores(s), [s])
    const lead = useMemo(() => calcLeadScore(s, auditScore), [s, auditScore])
    const roi = useMemo(() => calcROI(s), [s])
    const config = useMemo(() => getIndustryConfig(s.businessType || ''), [s.businessType])
    const businessCat = useMemo(() => getBusinessCategory(s.businessType || ''), [s.businessType])
    const catLabel = { online: 'Online', local: 'Local Services', professional: 'Professional', product: 'Product / E-com' }[businessCat]

    const leadTempIcon = lead.level === 'hot' ? Flame : lead.level === 'warm' ? Thermometer : Snowflake
    const leadTempColor = lead.level === 'hot' ? 'text-red-400 bg-red-400/10 border-red-400/20' : lead.level === 'warm' ? 'text-orange-400 bg-orange-400/10 border-orange-400/20' : 'text-blue-400 bg-blue-400/10 border-blue-400/20'

    return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            {/* Top controls */}
            <div className="flex items-center justify-between mb-6">
                <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to list</button>
                <button onClick={() => onDelete(s.id)} className="flex items-center gap-2 text-red-400/70 hover:text-red-400 transition-colors text-sm"><Trash2 className="w-4 h-4" /> Delete</button>
            </div>

            {/* ── Header Card ── */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">{s.fullName}</h2>
                        <p className="text-slate-400 mt-1">{s.companyName} <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400">{catLabel}</span></p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                            <span>{formattedDate}</span>
                            {s.email && <span>| {s.email}</span>}
                            {s.phoneNumber && <span>| {s.phoneNumber}</span>}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                        {auditScore > 0 && (
                            <div className="text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                                <p className={`text-2xl font-bold ${scoreColor(auditScore)}`}>{auditScore}</p>
                                <p className="text-xs text-slate-500">AI Score</p>
                            </div>
                        )}
                        <div className="text-center px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                            <p className="text-2xl font-bold text-white">{lead.score}</p>
                            <p className="text-xs text-slate-500">Lead Score</p>
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium border ${intentColor}`}>{(s.intentLevel || "unknown").toUpperCase()} INTENT</span>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1 ${leadTempColor}`}>
                            {React.createElement(leadTempIcon, { className: "w-3 h-3" })} {lead.level.toUpperCase()}
                        </span>
                    </div>
                </div>
            </div>

            {/* ── Tab Switcher ── */}
            <div className="flex gap-2 mb-6">
                <button onClick={() => setActiveTab('results')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'results' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    Audit Results
                </button>
                <button onClick={() => setActiveTab('answers')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'answers' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    All Answers
                </button>
            </div>

            {activeTab === 'results' ? (
                <>
                    {/* ════ AUDIT RESULTS TAB ════ */}

                    {/* Score Breakdown */}
                    <DetailSection title="Score Breakdown" icon={BarChart3} iconColor="text-blue-400">
                        <div className="space-y-4">
                            <ScoreBar label="Revenue & Growth" value={sub.revenue} />
                            <ScoreBar label="Automation & Tech" value={sub.automation} />
                            <ScoreBar label="Acquisition & Conversion" value={sub.acquisition} />
                            <ScoreBar label="Retention & Engagement" value={sub.retention} />
                            <ScoreBar label="Time & Operations" value={sub.time} />
                        </div>
                        <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-5 gap-2 text-center">
                            {[
                                { label: "Revenue", val: sub.revenue },
                                { label: "Automation", val: sub.automation },
                                { label: "Acquisition", val: sub.acquisition },
                                { label: "Retention", val: sub.retention },
                                { label: "Time", val: sub.time },
                            ].map(({ label, val }) => (
                                <div key={label}>
                                    <p className={`text-lg font-bold ${scoreColor(val)}`}>{val}</p>
                                    <p className="text-xs text-slate-500">{label}</p>
                                </div>
                            ))}
                        </div>
                    </DetailSection>

                    {/* Lead Score & Routing */}
                    <DetailSection title="Lead Score & Routing" icon={Target} iconColor="text-orange-400">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className={`rounded-xl p-4 border text-center ${leadTempColor}`}>
                                {React.createElement(leadTempIcon, { className: "w-8 h-8 mx-auto mb-2" })}
                                <p className="text-lg font-bold">{lead.level.toUpperCase()} LEAD</p>
                                <p className="text-xs opacity-70">Score: {lead.score}/100</p>
                            </div>
                            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-slate-500 mb-2">Nurture Sequence</p>
                                <p className="text-white font-bold text-lg">Sequence {lead.sequence}</p>
                                <p className="text-slate-400 text-xs mt-1">{lead.sequence === 'A' ? 'Aggressive (high-touch)' : lead.sequence === 'B' ? 'Standard nurture' : 'Low-touch drip'}</p>
                            </div>
                            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-slate-500 mb-2">Recommended Package</p>
                                <p className="text-white font-bold text-lg">{roi.pkg}</p>
                                <p className="text-slate-400 text-xs mt-1">{roi.pkg === 'Single System' ? 'One core system' : roi.pkg === 'Multi-System' ? 'Multiple systems' : 'Full build-out'}</p>
                            </div>
                        </div>

                        {lead.reasons.length > 0 && (
                            <div className="mb-4">
                                <p className="text-xs text-slate-500 mb-2">Scoring Reasons</p>
                                <div className="flex flex-wrap gap-2">
                                    {lead.reasons.map((r, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">{r}</span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div>
                            <p className="text-xs text-slate-500 mb-2">Recommended Actions</p>
                            <div className="space-y-2">
                                {lead.actions.map((a, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-slate-300">{a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DetailSection>

                    {/* Revenue Opportunity / Cost of Doing Nothing */}
                    <DetailSection title="Revenue Opportunity" icon={DollarSign} iconColor="text-emerald-400">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 text-center">
                                <p className="text-red-400 font-bold text-2xl">{fmt$(roi.lostAnnual)}</p>
                                <p className="text-slate-400 text-xs mt-1">Lost revenue/year from churn</p>
                            </div>
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 text-center">
                                <p className="text-red-400 font-bold text-2xl">{roi.wastedHours} hrs</p>
                                <p className="text-slate-400 text-xs mt-1">Spent on tasks automation could handle/year</p>
                            </div>
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 text-center">
                                <p className="text-red-400 font-bold text-2xl">{roi.vacationDays} days</p>
                                <p className="text-slate-400 text-xs mt-1">They can take off without crisis</p>
                            </div>
                        </div>
                        <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4">
                            <p className="text-emerald-400 font-semibold mb-2">If we close this lead:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                                <div><p className="text-white font-bold">{fmt$(roi.lostMonthly)}</p><p className="text-xs text-slate-500">Monthly churn cost</p></div>
                                <div><p className="text-white font-bold">{Math.round(roi.churnPct * 100)}%</p><p className="text-xs text-slate-500">Churn rate</p></div>
                                <div><p className="text-white font-bold">{fmt$(roi.price)}</p><p className="text-xs text-slate-500">Avg product price</p></div>
                                <div><p className="text-white font-bold">{roi.supportHrs} hrs/wk</p><p className="text-xs text-slate-500">Support hours</p></div>
                            </div>
                        </div>
                    </DetailSection>

                    {/* Pain Points Summary */}
                    {(s.keepsUpAtNight || s.bottleneck || s.holdingBack || (s.problems && s.problems.length > 0)) && (
                        <DetailSection title="Pain Points & Blockers" icon={AlertCircle} iconColor="text-red-400">
                            <div className="space-y-3">
                                {safeNumFromSlider(s.painLevel) > 0 && <SliderBar label="Pain Level (urgency)" value={safeNumFromSlider(s.painLevel)} />}
                                {s.keepsUpAtNight && <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5 mt-3"><span className="text-xs text-slate-500">What keeps them up at night</span><p className="text-slate-300 text-sm mt-1 leading-relaxed">{s.keepsUpAtNight}</p></div>}
                                {s.bottleneck && <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5"><span className="text-xs text-slate-500">Biggest Bottleneck</span><p className="text-slate-300 text-sm mt-1">{s.bottleneck}</p></div>}
                                {s.holdingBack && <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5"><span className="text-xs text-slate-500">What's Holding Them Back</span><p className="text-slate-300 text-sm mt-1">{s.holdingBack}</p></div>}
                                {safeArray<string>(s.problems).length > 0 && <div className="flex flex-wrap gap-2 mt-2">{safeArray<string>(s.problems).map((p, i) => <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">{p}</span>)}</div>}
                            </div>
                        </DetailSection>
                    )}

                    {/* Identified Opportunities */}
                    {safeArray(s.opportunities).length > 0 && (
                        <DetailSection title="Identified Opportunities" icon={Zap} iconColor="text-purple-400">
                            <div className="space-y-3">
                                {safeArray(s.opportunities).map((opp: any, i: number) => (
                                    <div key={i} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-white text-sm font-medium">{opp?.title || 'Opportunity'}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${opp?.impact === "Critical" ? "text-red-400 bg-red-400/10" : opp?.impact === "High" ? "text-orange-400 bg-orange-400/10" : "text-blue-400 bg-blue-400/10"}`}>{opp?.impact || 'Medium'}</span>
                                        </div>
                                        <p className="text-slate-400 text-xs">{opp?.description || ''}</p>
                                    </div>
                                ))}
                            </div>
                        </DetailSection>
                    )}

                    {/* Quick key facts */}
                    <DetailSection title="Key Facts at a Glance" icon={Eye} iconColor="text-cyan-400">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            <DetailField label="Business Type" value={s.businessType || s.specificIndustry || s.industryCategory} />
                            <DetailField label="Category" value={catLabel} />
                            <DetailField label="Revenue" value={s.currentRevenue} />
                            <DetailField label="Team Size" value={s.teamSize} />
                            <DetailField label={config.step2.platform.label || "Platform"} value={s.platform} />
                            <DetailField label="Growth Budget" value={s.growthBudget} />
                            <DetailField label="Wants to Start" value={s.startDate} />
                            <DetailField label="Excitement" value={s.excitementLevel} />
                            <DetailField label={config.step4.churnRate.label || "Churn Rate"} value={s.churnRate} />
                        </div>
                    </DetailSection>
                </>
            ) : (
                <>
                    {/* ════ ALL ANSWERS TAB ════ */}

                    <DetailSection title="About You" icon={Users} iconColor="text-blue-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Full Name" value={s.fullName} /><DetailField label="Company Name" value={s.companyName} /><DetailField label="Email" value={s.email} />
                            <DetailField label="Phone Number" value={s.phoneNumber} /><DetailField label="Website URL" value={s.websiteUrl} />
                            <DetailField label="Business Type" value={s.businessType} /><DetailField label="Business Type (Other)" value={s.businessTypeOther} />
                            {/* Legacy */}
                            <DetailField label="Industry Category" value={s.industryCategory} /><DetailField label="Specific Industry" value={s.specificIndustry} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[1]} icon={Briefcase} iconColor="text-purple-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label={config.step2.productDescription.label || "Description"} value={s.productDescription} />
                            <DetailField label={config.step2.productPricePoint.label || "Price Point"} value={s.productPricePoint} /><DetailField label={config.step2.numberOfProducts.label || "# of Products"} value={s.numberOfProducts} />
                            <DetailField label={config.step2.platform.label || "Platform"} value={s.platform} /><DetailField label={config.step2.deliveryMethod.label || "Delivery Method"} value={s.deliveryMethod} />
                        </div>
                    </DetailSection>

                    <DetailSection title="Revenue & Growth" icon={DollarSign} iconColor="text-green-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Current Revenue" value={s.currentRevenue} /><DetailField label="Revenue Trend" value={s.revenueTrend} /><DetailField label="Profit Margin" value={s.profitMargin} />
                            <DetailField label="Revenue Goal" value={s.revenueGoal} /><DetailField label="Biggest Bottleneck" value={s.bottleneck} /><DetailField label="Team Size" value={s.teamSize} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[3]} icon={Target} iconColor="text-orange-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label={config.step4.listSize.label || "List Size"} value={s.listSize} /><DetailField label={config.step4.trafficSource.label || "Traffic Source"} value={s.trafficSource} /><DetailField label={config.step4.conversionRate.label || "Conversion Rate"} value={s.conversionRate} />
                            <DetailField label={config.step4.launchesPerYear.label || "Launches Per Year"} value={s.launchesPerYear} /><DetailField label={config.step4.churnRate.label || "Churn Rate"} value={s.churnRate} /><DetailField label={config.step4.contentCreationHours.label || "Content Hrs/Wk"} value={s.contentCreationHours} />
                            {/* Legacy */}
                            <DetailField label="Lead Source (legacy)" value={s.leadSource} /><DetailField label="Deal Size (legacy)" value={s.dealSize} /><DetailField label="Missed Calls (legacy)" value={s.missedCalls} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[4]} icon={Clock} iconColor="text-cyan-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                            <DetailField label="Hours Worked/Week" value={s.hoursPerWeek} /><DetailField label={config.step5.supportHoursPerWeek.label || "Support Hrs/Week"} value={s.supportHoursPerWeek} />
                            <DetailField label="% High-Value Work" value={s.highValueWork} /><DetailField label={config.step5.onboardingAutomated.label || "Onboarding Automated?"} value={s.onboardingAutomated} />
                            <DetailField label="Can Take 2 Weeks Off?" value={s.twoWeeksOff} /><DetailField label="Biggest Time Waste" value={s.biggestTimeWaste} />
                        </div>
                        {safeNumFromSlider(s.painLevel) > 0 && <div className="mb-4"><SliderBar label="Pain Level" value={safeNumFromSlider(s.painLevel)} /></div>}
                        {s.keepsUpAtNight && <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5"><span className="text-xs text-slate-500 block mb-1">What keeps them up at night</span><p className="text-slate-300 text-sm leading-relaxed">{s.keepsUpAtNight}</p></div>}
                    </DetailSection>

                    <DetailSection title={config.stepLabels[5]} icon={Settings} iconColor="text-indigo-400">
                        {safeArray<string>(s.tools).length > 0 && <div className="mb-4"><span className="text-xs text-slate-500 block mb-2">Current Tools</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.tools).map((t, i) => <span key={i} className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs">{t}</span>)}</div></div>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                            <DetailField label="% Automated" value={s.percentAutomated} /><DetailField label="#1 Goal (12 Mo)" value={s.next12MonthsGoal} /><DetailField label="Holding Back" value={s.holdingBack} />
                        </div>
                        {safeArray<string>(s.problems).length > 0 && <div><span className="text-xs text-slate-500 block mb-2">Problems</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.problems).map((p, i) => <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">{p}</span>)}</div></div>}
                    </DetailSection>

                    <DetailSection title="Readiness & Intent" icon={Zap} iconColor="text-emerald-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Excitement Level" value={s.excitementLevel} /><DetailField label="When Start?" value={s.startDate} /><DetailField label="Investment Tolerance" value={s.growthBudget} />
                            <DetailField label="Decision Maker?" value={s.decisionMaker} /><DetailField label="Newsletter Opt-In" value={s.newsletterOptIn} />
                        </div>
                    </DetailSection>
                </>
            )}
        </motion.div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════
// CSV EXPORT
// ═══════════════════════════════════════════════════════════════════════════

function exportToCSV(submissions: Submission[]) {
    const headers = ["Date","Full Name","Company","Email","Phone","Website","Business Type","Business Category","Product Description","Price Point","# Products","Platform","Delivery Method","Revenue Stage","Revenue Trend","Profit Margin","Revenue Goal","Bottleneck","Team Size","List Size","Traffic Source","Conversion Rate","Launches/Year","Churn Rate","Content Creation Hrs","Support Hrs/Week","Onboarding Automated","Hours/Week","High-Value Work %","2 Weeks Off?","Pain Level","Keeps Up at Night","Biggest Time Waste","Tools","% Automated","12-Mo Goal","Holding Back","Problems","Excitement","Start Date","Growth Budget","Decision Maker","Newsletter Opt-In","Audit Score","Intent Level","Lead Temperature","Lead Score","Opportunities"]
    const rows = submissions.map(s => {
        const lead = calcLeadScore(s, s.auditScore ?? 0)
        const cat = s.businessType ? getBusinessCategory(s.businessType) : ''
        return [s.createdAt||s.submittedAt||"",s.fullName,s.companyName,s.email,s.phoneNumber||"",s.websiteUrl||"",s.businessType||s.industryCategory||"",cat,s.productDescription||"",s.productPricePoint||"",s.numberOfProducts||"",s.platform||"",s.deliveryMethod||"",s.currentRevenue||"",s.revenueTrend||"",s.profitMargin||"",s.revenueGoal||"",s.bottleneck||"",s.teamSize||"",s.listSize||"",s.trafficSource||"",s.conversionRate||"",s.launchesPerYear||"",s.churnRate||"",s.contentCreationHours||"",s.supportHoursPerWeek||"",s.onboardingAutomated||"",s.hoursPerWeek||"",s.highValueWork||"",s.twoWeeksOff||"",safeNumFromSlider(s.painLevel).toString(),s.keepsUpAtNight||"",s.biggestTimeWaste||"",safeArray<string>(s.tools).join("; "),s.percentAutomated||"",s.next12MonthsGoal||"",s.holdingBack||"",safeArray<string>(s.problems).join("; "),s.excitementLevel||"",s.startDate||"",s.growthBudget||"",s.decisionMaker||"",s.newsletterOptIn?"Yes":"No",s.auditScore?.toString()||"",s.intentLevel||"",lead.level,lead.score.toString(),safeArray(s.opportunities).map((o:any)=>`${o?.title||''} (${o?.impact||''})`).join("; ")]
    })
    const esc = (v: string) => `"${v.replace(/"/g, '""')}"`
    const csv = [headers.map(esc).join(","), ...rows.map(r => r.map(esc).join(","))].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a"); a.href = url; a.download = `elianatech-leads-${new Date().toISOString().split("T")[0]}.csv`; a.click(); URL.revokeObjectURL(url)
}

// ═══════════════════════════════════════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════════════════════════════════════

function Dashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
    const [submissions, setSubmissions] = useState<Submission[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [intentFilter, setIntentFilter] = useState<string>("all")
    const [sortAsc, setSortAsc] = useState(false)
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
    const [dashTab, setDashTab] = useState<'leads' | 'schedule'>('leads')

    const fetchSubmissions = useCallback(async () => {
        setLoading(true); setError("")
        try {
            const res = await fetch("/api/admin/submissions", { headers: { Authorization: `Bearer ${token}` } })
            const data = await res.json()
            if (data.success) setSubmissions(data.submissions)
            else if (res.status === 401) onLogout()
            else setError("Failed to load submissions")
        } catch { setError("Connection error") } finally { setLoading(false) }
    }, [token, onLogout])

    useEffect(() => { fetchSubmissions() }, [fetchSubmissions])

    const handleDelete = async (id: string) => {
        if (!confirm("Delete this submission?")) return
        try {
            const res = await fetch("/api/admin/submissions", { method: "DELETE", headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }, body: JSON.stringify({ id }) })
            const data = await res.json()
            if (data.success) { setSubmissions((prev) => prev.filter((s) => s.id !== id)); setSelectedSubmission(null) }
        } catch { alert("Failed to delete") }
    }

    const filtered = submissions
        .filter((s) => {
            const q = search.toLowerCase()
            const matchesSearch = !search || s.fullName?.toLowerCase().includes(q) || s.companyName?.toLowerCase().includes(q) || s.email?.toLowerCase().includes(q) || s.businessType?.toLowerCase().includes(q) || s.platform?.toLowerCase().includes(q) || s.phoneNumber?.includes(search)
            const matchesIntent = intentFilter === "all" || s.intentLevel === intentFilter
            return matchesSearch && matchesIntent
        })
        .sort((a, b) => {
            const dateA = new Date(a.createdAt || a.submittedAt || 0).getTime()
            const dateB = new Date(b.createdAt || b.submittedAt || 0).getTime()
            return sortAsc ? dateA - dateB : dateB - dateA
        })

    const totalLeads = submissions.length
    const highIntent = submissions.filter((s) => s.intentLevel === "high").length
    const avgScore = submissions.length ? Math.round(submissions.reduce((sum, s) => sum + (s.auditScore || 0), 0) / submissions.length) : 0
    const thisWeek = submissions.filter((s) => { const d = new Date(s.createdAt || s.submittedAt || 0); return d >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }).length
    const hotLeads = submissions.filter((s) => { const l = calcLeadScore(s, s.auditScore ?? 0); return l.level === 'hot' }).length

    // Detail view
    if (selectedSubmission) {
        return (
            <div className="min-h-screen bg-black">
                <div className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-40">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="flex items-center gap-2"><div className="relative w-8 h-8 overflow-hidden rounded-lg"><Image src="/icon.png" alt="Elianatech" fill className="object-cover" /></div></Link>
                            <span className="text-slate-600">/</span>
                            <button onClick={() => setSelectedSubmission(null)} className="text-slate-400 hover:text-white text-sm transition-colors">Admin</button>
                            <span className="text-slate-600">/</span>
                            <span className="text-slate-300 text-sm font-medium truncate max-w-[200px]">{selectedSubmission.fullName}</span>
                        </div>
                        <button onClick={onLogout} className="text-slate-400 hover:text-white transition-colors text-sm"><LogOut className="w-4 h-4" /></button>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                    <DetailErrorBoundary onBack={() => setSelectedSubmission(null)}>
                        <SubmissionDetail submission={selectedSubmission} onBack={() => setSelectedSubmission(null)} onDelete={handleDelete} />
                    </DetailErrorBoundary>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Top bar */}
            <div className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative w-8 h-8 overflow-hidden rounded-lg"><Image src="/icon.png" alt="Elianatech" fill className="object-cover" /></div>
                            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 hidden sm:inline">ELIANATECH</span>
                        </Link>
                        <span className="text-slate-600 hidden sm:inline">/</span>
                        <span className="text-slate-300 text-sm font-medium">Admin</span>
                    </div>
                    <div className="flex items-center gap-3">
                        {submissions.length > 0 && (
                            <button onClick={() => exportToCSV(filtered)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5">
                                <Download className="w-4 h-4" /><span className="hidden sm:inline">Export CSV</span>
                            </button>
                        )}
                        <button onClick={onLogout} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"><LogOut className="w-4 h-4" /><span className="hidden sm:inline">Sign Out</span></button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Dashboard Tabs */}
                <div className="flex gap-2 mb-8">
                    <button onClick={() => setDashTab('leads')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'leads' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <Users className="w-4 h-4" /> Leads
                        {totalLeads > 0 && <span className={`px-2 py-0.5 rounded-full text-xs ${dashTab === 'leads' ? 'bg-black/10' : 'bg-white/10'}`}>{totalLeads}</span>}
                    </button>
                    <button onClick={() => setDashTab('schedule')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'schedule' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <Calendar className="w-4 h-4" /> My Schedule
                    </button>
                </div>

                {dashTab === 'schedule' ? (
                    /* ════ SCHEDULE TAB ════ */
                    <div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                            <h2 className="text-white font-semibold mb-2 flex items-center gap-2"><Calendar className="w-5 h-5 text-blue-400" /> Your Cal.com Schedule</h2>
                            <p className="text-slate-400 text-sm mb-4">View and manage your upcoming bookings. Leads who book after the audit will appear here.</p>
                            <div className="rounded-xl overflow-hidden border border-white/10" style={{ minHeight: 700 }}>
                                <iframe
                                    src="https://cal.com/mia-louviere-a4n2hk?embed=true&theme=dark"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    style={{ border: 'none', background: 'transparent' }}
                                    allow="payment"
                                />
                            </div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://app.cal.com/bookings/upcoming" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm hover:bg-blue-500/20 transition-all">
                                    <Calendar className="w-4 h-4" /> View All Bookings <ArrowRight className="w-3 h-3" />
                                </a>
                                <a href="https://app.cal.com/event-types" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-all">
                                    <Settings className="w-4 h-4" /> Manage Event Types <ArrowRight className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ════ LEADS TAB ════ */
                    <>
                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                            <StatCard icon={Users} label="Total Leads" value={totalLeads} color="bg-blue-500/10 text-blue-400" />
                            <StatCard icon={Flame} label="Hot Leads" value={hotLeads} color="bg-red-500/10 text-red-400" />
                            <StatCard icon={Zap} label="High Intent" value={highIntent} color="bg-green-500/10 text-green-400" />
                            <StatCard icon={TrendingUp} label="Avg Score" value={avgScore} color="bg-purple-500/10 text-purple-400" />
                            <StatCard icon={Clock} label="This Week" value={thisWeek} color="bg-orange-500/10 text-orange-400" />
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, company, email, industry, phone..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 text-sm transition-all" />
                            </div>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                    <select value={intentFilter} onChange={(e) => setIntentFilter(e.target.value)} className="pl-10 pr-8 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 appearance-none cursor-pointer transition-all">
                                        <option value="all">All Intent</option><option value="high">High</option><option value="medium">Medium</option><option value="low">Low</option>
                                    </select>
                                </div>
                                <button onClick={() => setSortAsc(!sortAsc)} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors" title={sortAsc ? "Oldest first" : "Newest first"}>
                                    {sortAsc ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                                </button>
                                <button onClick={fetchSubmissions} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors" title="Refresh">
                                    <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                </button>
                            </div>
                        </div>

                        {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-red-400 text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4 shrink-0" />{error}</div>}
                        {loading && <div className="flex items-center justify-center py-20"><RefreshCw className="w-6 h-6 text-slate-500 animate-spin" /></div>}
                        {!loading && filtered.length === 0 && (
                            <div className="text-center py-20"><Users className="w-10 h-10 text-slate-600 mx-auto mb-3" /><p className="text-slate-400">{submissions.length === 0 ? "No submissions yet." : "No results match your filters."}</p></div>
                        )}

                        {!loading && filtered.length > 0 && (
                            <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/10 text-xs text-slate-500 font-medium">
                                    <div className="col-span-3">Contact</div><div className="col-span-2">Company</div><div className="col-span-1 text-center">Score</div><div className="col-span-1 text-center">Temp</div><div className="col-span-1 text-center">Intent</div><div className="col-span-1 text-center">Pain</div><div className="col-span-1">Budget</div><div className="col-span-1">Date</div><div className="col-span-1 text-right">Actions</div>
                                </div>
                                {filtered.map((sub) => {
                                    const d = sub.createdAt || sub.submittedAt
                                    const fmtDate = d ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "--"
                                    const intentBadge = { high: "text-green-400 bg-green-400/10", medium: "text-yellow-400 bg-yellow-400/10", low: "text-slate-400 bg-slate-400/10" }[sub.intentLevel || "low"] || "text-slate-400 bg-slate-400/10"
                                    const painRaw = safeNumFromSlider(sub.painLevel)
                                    const painVal = painRaw > 0 ? painRaw : null
                                    const painColor = painVal != null && painVal >= 7 ? "text-red-400" : painVal != null && painVal >= 4 ? "text-yellow-400" : "text-slate-400"
                                    const lead = calcLeadScore(sub, sub.auditScore ?? 0)
                                    const tempBadge = lead.level === 'hot' ? 'text-red-400 bg-red-400/10' : lead.level === 'warm' ? 'text-orange-400 bg-orange-400/10' : 'text-blue-400 bg-blue-400/10'

                                    return (
                                        <div key={sub.id} className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group" onClick={() => setSelectedSubmission(sub)}>
                                            <div className="lg:col-span-3">
                                                <p className="text-white text-sm font-medium">{sub.fullName}</p>
                                                <p className="text-slate-500 text-xs truncate">{sub.email}</p>
                                            </div>
                                            <div className="lg:col-span-2 flex items-center gap-2"><p className="text-slate-300 text-sm truncate">{sub.companyName}</p>{sub.businessType && <span className="hidden lg:inline px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-500 shrink-0">{{ online: 'Online', local: 'Local', professional: 'Prof', product: 'Product' }[getBusinessCategory(sub.businessType)]}</span>}</div>
                                            <div className="lg:col-span-1 flex items-center justify-center"><span className="text-white text-sm font-medium">{sub.auditScore ?? "--"}</span></div>
                                            <div className="lg:col-span-1 flex items-center justify-center"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${tempBadge}`}>{lead.level.toUpperCase()}</span></div>
                                            <div className="lg:col-span-1 flex items-center justify-center"><span className={`px-2 py-0.5 rounded-full text-xs font-medium ${intentBadge}`}>{(sub.intentLevel || "--").toUpperCase()}</span></div>
                                            <div className="lg:col-span-1 flex items-center justify-center"><span className={`text-sm font-medium ${painColor}`}>{painVal != null ? `${painVal}/10` : "--"}</span></div>
                                            <div className="lg:col-span-1 flex items-center"><span className="text-slate-400 text-xs truncate">{sub.growthBudget || "--"}</span></div>
                                            <div className="lg:col-span-1 flex items-center"><span className="text-slate-500 text-sm">{fmtDate}</span></div>
                                            <div className="lg:col-span-1 flex items-center justify-end gap-2">
                                                <button onClick={(e) => { e.stopPropagation(); setSelectedSubmission(sub) }} className="p-1.5 rounded-lg text-slate-500 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100"><Eye className="w-4 h-4" /></button>
                                                <button onClick={(e) => { e.stopPropagation(); handleDelete(sub.id) }} className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-400/10 transition-all opacity-0 group-hover:opacity-100"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                        {!loading && filtered.length > 0 && <p className="text-slate-600 text-xs mt-3 text-center">Showing {filtered.length} of {submissions.length} submissions</p>}
                    </>
                )}
            </div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN
// ═══════════════════════════════════════════════════════════════════════════

export default function AdminPage() {
    const [token, setToken] = useState<string | null>(null)
    useEffect(() => { const saved = sessionStorage.getItem("admin_token"); if (saved) setToken(saved) }, [])
    const handleLogin = (t: string) => { sessionStorage.setItem("admin_token", t); setToken(t) }
    const handleLogout = () => { sessionStorage.removeItem("admin_token"); setToken(null) }
    if (!token) return <LoginScreen onLogin={handleLogin} />
    return <Dashboard token={token} onLogout={handleLogout} />
}
