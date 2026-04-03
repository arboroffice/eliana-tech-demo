"use client"

import React, { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Lock, LogOut, Search, ChevronDown, ChevronUp, Trash2,
    Users, TrendingUp, Zap, Eye, ArrowLeft, RefreshCw,
    Mail, Phone, Building2, Globe, Clock, DollarSign, Filter,
    Download, Star, Settings, Target, BarChart3, AlertTriangle,
    Briefcase, Calendar, Flame, Thermometer, Snowflake,
    AlertCircle, CheckCircle2, ArrowRight, Plus, Loader2,
    Send, Sparkles, RotateCcw, Copy, Check,
    FileText, MessageSquare, StickyNote, GripVertical,
    PhoneCall, Award, XCircle, CircleDot
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getIndustryConfig, getBusinessCategory } from '@/lib/audit-industry-config'
import VaultTab from '@/components/admin/vault-tab'
import VaultDetail from '@/components/admin/vault-detail'

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
    // Build Program application fields
    whatBuilding?: string
    whatTried?: string
    whyNow?: string
    source?: string
    accountType?: 'apply' | 'audit' | 'admin_manual'
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
    // Pipeline fields
    stage?: string
    stageUpdatedAt?: string
    notes?: Array<{ text: string; type: string; createdAt: string }>
    proposalSentAt?: string
    dealValue?: string
    // GHL fields
    ghlContactId?: string
    ghlOpportunityId?: string
    ghlSyncedAt?: string
    // New operations audit fields
    role?: string
    adminRoles?: string[]
    opsPerson?: string
    crmTools?: string[]
    schedulingTools?: string[]
    billingTools?: string[]
    marketingTools?: string[]
    aiUse?: string
    opsScore?: string
    automate?: string[]
    extraNotes?: string
    revenue?: string
    hoursOnAdmin?: string
}

// ═══════════════════════════════════════════════════════════════════════════
// PIPELINE STAGES
// ═══════════════════════════════════════════════════════════════════════════

const PIPELINE_STAGES = [
    { id: 'new', label: 'New', icon: CircleDot, color: 'text-blue-400 bg-blue-400/10 border-blue-400/20' },
    { id: 'contacted', label: 'Contacted', icon: Mail, color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20' },
    { id: 'call-booked', label: 'Call Booked', icon: PhoneCall, color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
    { id: 'proposal-sent', label: 'Proposal Sent', icon: FileText, color: 'text-purple-400 bg-purple-400/10 border-purple-400/20' },
    { id: 'negotiating', label: 'Negotiating', icon: MessageSquare, color: 'text-red-400 bg-red-400/10 border-red-400/20' },
    { id: 'won', label: 'Won', icon: Award, color: 'text-green-400 bg-green-400/10 border-green-400/20' },
    { id: 'lost', label: 'Lost', icon: XCircle, color: 'text-slate-400 bg-slate-400/10 border-slate-400/20' },
] as const

function getStageInfo(stageId: string) {
    return PIPELINE_STAGES.find(s => s.id === stageId) || PIPELINE_STAGES[0]
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
    const rev = s.revenue || s.currentRevenue || ''
    if (rev.includes('$1M-$5M') || rev.includes('$5M+')) revenue += 30
    else if (rev.includes('$250K-$1M')) revenue += 15
    else if (rev.includes('Under $250K')) revenue += 5
    else if (rev.includes('pre-revenue')) revenue -= 10
    revenue = Math.max(0, Math.min(100, revenue))

    // Automation
    let automation = 20
    const ops = parseInt(s.opsScore || '5') || 5
    automation = ops * 10
    if (s.aiUse?.includes('Yes')) automation += 15
    else if (s.aiUse?.includes('little')) automation += 5
    automation = Math.max(0, Math.min(100, automation))

    // Acquisition & Retention
    let acquisition = 50
    let retention = 60
    const problems = (s.problems || []) as string[]
    if (problems.some(p => p.toLowerCase().includes('lead') || p.toLowerCase().includes('marketing'))) {
        acquisition -= 20
    } else {
        acquisition += 10
    }
    if (problems.some(p => p.toLowerCase().includes('review') || p.toLowerCase().includes('past client'))) {
        retention -= 15
    }
    acquisition = Math.max(0, Math.min(100, acquisition))
    retention = Math.max(0, Math.min(100, retention))

    // Time
    let time = 50
    const hours = s.hoursOnAdmin || s.hoursPerWeek || ''
    if (hours === '30h+' || hours === '20-30h') time = 20
    else if (hours === '10-20h') time = 35
    else if (hours === '5-10h') time = 60
    else if (hours === '1-5h') time = 85
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

function getSubmissionType(s: Submission): 'application' | 'audit' | 'manual' {
    if (s.source === 'build_program_application') return 'application'
    if (s.source === 'admin_manual_entry') return 'manual'
    return 'audit'
}

function isApplicationOnly(s: Submission): boolean {
    return s.source === 'build_program_application' && !s.auditScore && !s.businessType
}

function scoreColor(s: number) { return s >= 70 ? "text-red-400" : s >= 40 ? "text-red-400" : "text-red-400" }
function scoreBg(s: number) { return s >= 70 ? "bg-red-500" : s >= 40 ? "bg-red-500" : "bg-red-500" }

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
    const color = safeVal >= 7 ? "from-red-500 to-red-400" : safeVal >= 4 ? "from-red-500 to-red-400" : "from-red-500 to-red-400"
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
// QUICK ADD BUSINESS
// ═══════════════════════════════════════════════════════════════════════════

function AddBusinessModal({ isOpen, onClose, onAdd, token }: { isOpen: boolean; onClose: () => void; onAdd: (s: Submission) => void; token: string }) {
    const [mode, setMode] = useState<'scan' | 'manual'>('scan')
    const [url, setUrl] = useState("")
    const [scanning, setScanning] = useState(false)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState("")

    const [formData, setFormData] = useState<Partial<Submission>>({
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        websiteUrl: "",
        businessType: ""
    })

    if (!isOpen) return null

    const handleScan = async () => {
        if (!url) return
        setScanning(true)
        setError("")
        try {
            const res = await fetch("/api/admin/scan", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ url })
            })
            const result = await res.json()
            if (result.success) {
                setFormData(prev => ({ ...prev, ...result.data }))
                setMode('manual')
            } else {
                setError(result.error || "Failed to scan website")
            }
        } catch {
            setError("Error connecting to scan service")
        } finally {
            setScanning(false)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)
        setError("")
        try {
            const res = await fetch("/api/admin/submissions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const result = await res.json()
            if (result.success) {
                onAdd(result.submission)
                onClose()
                // Reset form
                setFormData({ fullName: "", companyName: "", email: "", phoneNumber: "", websiteUrl: "", businessType: "" })
                setUrl("")
                setMode('scan')
            } else {
                setError(result.error || "Failed to save business")
            }
        } catch {
            setError("Error saving business")
        } finally {
            setSaving(false)
        }
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
            >
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-white">Quick Add Business</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5 rotate-45" />
                    </button>
                </div>

                <div className="p-6">
                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setMode('scan')}
                            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${mode === 'scan' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 border border-white/10'}`}
                        >
                            Scan Website
                        </button>
                        <button
                            onClick={() => setMode('manual')}
                            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${mode === 'manual' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 border border-white/10'}`}
                        >
                            Manual Entry
                        </button>
                    </div>

                    {mode === 'scan' ? (
                        <div className="space-y-4">
                            <p className="text-slate-400 text-sm">Enter a website URL and we'll use AI to extract the business details for you.</p>
                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="url"
                                    placeholder="https://example.com"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30"
                                />
                            </div>
                            <button
                                onClick={handleScan}
                                disabled={scanning || !url}
                                className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {scanning ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing Site...</> : "Scan Website"}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Business Name</label>
                                    <input
                                        required
                                        value={formData.companyName}
                                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Full Name</label>
                                    <input
                                        required
                                        value={formData.fullName}
                                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Phone</label>
                                    <input
                                        value={formData.phoneNumber}
                                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Website</label>
                                    <input
                                        value={formData.websiteUrl}
                                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-500 mb-1 block">Business Type</label>
                                    <input
                                        value={formData.businessType}
                                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={saving}
                                className="w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving...</> : "Save Business"}
                            </button>
                        </form>
                    )}

                    {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
                </div>
            </motion.div>
        </div>
    )
}

// ═══════════════════════════════════════════════════════════════════════════
// SUBMISSION DETAIL (full answers + audit results + lead score + ROI)
// ═══════════════════════════════════════════════════════════════════════════

function SubmissionDetail({ submission: s, onBack, onDelete, token, onUpdate, onOpenVault }: { submission: Submission; onBack: () => void; onDelete: (id: string) => void; token: string; onUpdate: (updated: Partial<Submission>) => void; onOpenVault?: (email: string) => void }) {
    const [activeTab, setActiveTab] = useState<'results' | 'answers' | 'followup' | 'notes'>('results')

    // Stage state
    const [changingStage, setChangingStage] = useState(false)

    // Notes state
    const [noteText, setNoteText] = useState('')
    const [noteType, setNoteType] = useState<string>('note')
    const [addingNote, setAddingNote] = useState(false)

    // Proposal state
    const [generatingProposal, setGeneratingProposal] = useState(false)
    const [proposalData, setProposalData] = useState<any>(null)

    // GHL state
    const [syncingGHL, setSyncingGHL] = useState(false)

    // Audit invite state
    const [sendingAuditInvite, setSendingAuditInvite] = useState(false)
    const [auditInviteStatus, setAuditInviteStatus] = useState<'idle' | 'sent' | 'error'>('idle')
    const [auditInviteMethod, setAuditInviteMethod] = useState<'email' | 'sms'>('email')

    // Follow-up state
    const [emailType, setEmailType] = useState<string>('warm-nudge')
    const [customContext, setCustomContext] = useState('')
    const [generatedEmail, setGeneratedEmail] = useState<{ subject: string; body: string } | null>(null)
    const [generating, setGenerating] = useState(false)
    const [sending, setSending] = useState(false)
    const [followupStatus, setFollowupStatus] = useState<'idle' | 'previewing' | 'sent' | 'error'>('idle')
    const [followupError, setFollowupError] = useState('')
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const handleGeneratePreview = async () => {
        setGenerating(true)
        setFollowupError('')
        setFollowupStatus('idle')
        try {
            const res = await fetch('/api/admin/followup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ lead: s, emailType, customContext: emailType === 'custom' ? customContext : undefined, previewOnly: true }),
            })
            const data = await res.json()
            if (data.success) {
                setGeneratedEmail(data.email)
                setFollowupStatus('previewing')
            } else {
                setFollowupError(data.error || 'Failed to generate email')
                setFollowupStatus('error')
            }
        } catch (err: any) {
            setFollowupError(err.message || 'Connection error')
            setFollowupStatus('error')
        } finally {
            setGenerating(false)
        }
    }

    const handleSendEmail = async () => {
        if (!generatedEmail) return
        setSending(true)
        setFollowupError('')
        try {
            const res = await fetch('/api/admin/followup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ lead: s, emailType, customContext: emailType === 'custom' ? customContext : undefined }),
            })
            const data = await res.json()
            if (data.success && data.sent) {
                setFollowupStatus('sent')
                const note = { 
                    text: `Email Sent: ${generatedEmail.subject}`, 
                    type: 'system', 
                    createdAt: new Date().toISOString() 
                }
                onUpdate({ notes: [...(s.notes || []), note] })
            } else {
                setFollowupError(data.error || 'Failed to send email')
                setFollowupStatus('error')
            }
        } catch (err: any) {
            setFollowupError(err.message || 'Connection error')
            setFollowupStatus('error')
        } finally {
            setSending(false)
        }
    }

    const handleCopy = (field: string, text: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    const handleStageChange = async (newStage: string) => {
        setChangingStage(true)
        try {
            const res = await fetch('/api/admin/submissions', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ id: s.id, action: 'update-stage', stage: newStage }),
            })
            const data = await res.json()
            if (data.success) {
                const note = { text: `Stage changed to "${newStage}"`, type: 'system', createdAt: new Date().toISOString() }
                onUpdate({ stage: newStage, stageUpdatedAt: new Date().toISOString(), notes: [...(s.notes || []), note] })
            }
        } catch { /* ignore */ } finally { setChangingStage(false) }
    }

    const handleAddNote = async () => {
        if (!noteText.trim()) return
        setAddingNote(true)
        try {
            const res = await fetch('/api/admin/submissions', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ id: s.id, action: 'add-note', text: noteText, type: noteType }),
            })
            const data = await res.json()
            if (data.success) {
                onUpdate({ notes: [...(s.notes || []), data.note] })
                setNoteText('')
            }
        } catch { /* ignore */ } finally { setAddingNote(false) }
    }

    const handleGenerateProposal = async () => {
        setGeneratingProposal(true)
        try {
            const res = await fetch('/api/admin/followup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ lead: s, emailType: 'custom', customContext: `Generate a business proposal email for ${s.companyName}. Include: their pain points, recommended systems based on their audit (score: ${s.auditScore}/100), timeline (90-day installation), investment range, and ROI projections. Make it professional but warm. Reference their specific bottleneck: "${s.bottleneck || s.keepsUpAtNight || 'scaling operations'}". End with a clear CTA to book a strategy call.`, previewOnly: true }),
            })
            const data = await res.json()
            if (data.success) {
                setProposalData(data.email)
                setActiveTab('followup')
                setEmailType('custom')
                setGeneratedEmail(data.email)
                setFollowupStatus('previewing')
            }
        } catch { /* ignore */ } finally { setGeneratingProposal(false) }
    }

    const handleSyncToGHL = async () => {
        setSyncingGHL(true)
        try {
            const res = await fetch('/api/admin/ghl', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ action: 'push-lead', lead: s }),
            })
            const data = await res.json()
            if (data.success) {
                onUpdate({ ghlContactId: data.contactId, ghlOpportunityId: data.opportunityId, ghlSyncedAt: new Date().toISOString() })
            }
        } catch { /* ignore */ } finally { setSyncingGHL(false) }
    }

    const handleSendAuditInvite = async (method: 'email' | 'sms') => {
        setSendingAuditInvite(true)
        setAuditInviteStatus('idle')
        try {
            const res = await fetch('/api/admin/followup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({
                    lead: s,
                    emailType: 'custom',
                    customContext: `Send a short, friendly ${method === 'sms' ? 'text message' : 'email'} inviting ${s.fullName?.split(' ')[0] || 'them'} to complete their free AI audit. They already applied to the Build Program. Now we want them to take the full audit so we can give them personalized recommendations. Include the link: https://elianatech.com/audit — keep it brief and warm. ${method === 'sms' ? 'Keep it under 160 characters.' : ''}`,
                    previewOnly: false,
                }),
            })
            const data = await res.json()
            if (data.success) {
                setAuditInviteStatus('sent')
                const note = { text: `Audit invite sent via ${method} to ${method === 'sms' ? s.phoneNumber : s.email}`, type: 'system', createdAt: new Date().toISOString() }
                onUpdate({ notes: [...(s.notes || []), note] })
            } else {
                setAuditInviteStatus('error')
            }
        } catch {
            setAuditInviteStatus('error')
        } finally {
            setSendingAuditInvite(false)
        }
    }

    const intentColor = { high: "text-red-400 bg-red-400/10 border-red-400/20", medium: "text-red-400 bg-red-400/10 border-red-400/20", low: "text-slate-400 bg-slate-400/10 border-slate-400/20" }[s.intentLevel || "low"] || "text-slate-400 bg-slate-400/10 border-slate-400/20"

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
    const leadTempColor = lead.level === 'hot' ? 'text-red-400 bg-red-400/10 border-red-400/20' : lead.level === 'warm' ? 'text-red-400 bg-red-400/10 border-red-400/20' : 'text-red-400 bg-red-400/10 border-red-400/20'

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
                        <div className="flex items-center gap-3">
                            <h2 className="text-2xl font-bold text-white">{s.fullName}</h2>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${isApplicationOnly(s) ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
                                {isApplicationOnly(s) ? 'APPLICATION' : 'AUDIT'}
                            </span>
                        </div>
                        <p className="text-slate-400 mt-1">{s.companyName} {catLabel && <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-400">{catLabel}</span>}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                            <span>{formattedDate}</span>
                            {s.email && <span>| {s.email}</span>}
                            {s.phoneNumber && <span>| {s.phoneNumber}</span>}
                        </div>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                        {isApplicationOnly(s) ? (
                            <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                PENDING AUDIT
                            </span>
                        ) : (
                            <>
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
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Pipeline Stage + Quick Actions ── */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    {/* Stage Selector */}
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-slate-500 mr-1">Stage:</span>
                        {PIPELINE_STAGES.map((stage) => {
                            const current = (s.stage || 'new') === stage.id
                            return (
                                <button
                                    key={stage.id}
                                    onClick={() => !current && handleStageChange(stage.id)}
                                    disabled={changingStage}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${current ? stage.color + ' ring-1 ring-current' : 'bg-white/[0.02] border-white/5 text-slate-600 hover:text-slate-300 hover:border-white/10'}`}
                                >
                                    {React.createElement(stage.icon, { className: "w-3 h-3" })}
                                    {stage.label}
                                </button>
                            )
                        })}
                    </div>
                    {/* Quick Actions */}
                    <div className="flex gap-2">
                        <button
                            onClick={handleGenerateProposal}
                            disabled={generatingProposal}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 transition-all disabled:opacity-50"
                        >
                            {generatingProposal ? <Loader2 className="w-3 h-3 animate-spin" /> : <FileText className="w-3 h-3" />}
                            Send Proposal
                        </button>
                        <button
                            onClick={handleSyncToGHL}
                            disabled={syncingGHL}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all disabled:opacity-50 ${s.ghlContactId ? 'bg-green-500/10 border-green-500/20 text-green-400 hover:bg-green-500/20' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}
                        >
                            {syncingGHL ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                            {s.ghlContactId ? 'Synced to GHL' : 'Push to GHL'}
                        </button>
                        {onOpenVault && (
                            <button
                                onClick={() => onOpenVault(s.email)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-all"
                            >
                                <FileText className="w-3 h-3" />
                                Open Vault
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Tab Switcher ── */}
            <div className="flex gap-2 mb-6">
                <button onClick={() => setActiveTab('results')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'results' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    {isApplicationOnly(s) ? 'Application' : 'Audit Results'}
                </button>
                <button onClick={() => setActiveTab('answers')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === 'answers' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    All Answers
                </button>
                <button onClick={() => setActiveTab('notes')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'notes' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    <StickyNote className="w-3.5 h-3.5" /> Notes {(s.notes || []).length > 0 && <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeTab === 'notes' ? 'bg-black/10' : 'bg-white/10'}`}>{(s.notes || []).length}</span>}
                </button>
                <button onClick={() => setActiveTab('followup')} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeTab === 'followup' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                    <Mail className="w-3.5 h-3.5" /> Follow Up
                </button>
            </div>

            {activeTab === 'results' && (
                <>
                    {/* ════ APPLICATION INFO (for apply-only accounts) ════ */}
                    {isApplicationOnly(s) && (
                        <>
                            {/* Contact Info */}
                            <DetailSection title="Contact Information" icon={Users} iconColor="text-purple-400">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                    <DetailField label="Full Name" value={s.fullName} />
                                    <DetailField label="Email" value={s.email} />
                                    <DetailField label="Phone" value={s.phoneNumber} />
                                    <DetailField label="Company" value={s.companyName} />
                                </div>
                            </DetailSection>

                            {/* Application Answers */}
                            <DetailSection title="Application Answers" icon={FileText} iconColor="text-purple-400">
                                <div className="space-y-3">
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-purple-400 font-medium">What are you building?</span>
                                        <p className="text-slate-300 text-sm mt-1.5 leading-relaxed whitespace-pre-wrap">{s.whatBuilding}</p>
                                    </div>
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-purple-400 font-medium">What have you already tried?</span>
                                        <p className="text-slate-300 text-sm mt-1.5 leading-relaxed whitespace-pre-wrap">{s.whatTried}</p>
                                    </div>
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-purple-400 font-medium">Why now?</span>
                                        <p className="text-slate-300 text-sm mt-1.5 leading-relaxed whitespace-pre-wrap">{s.whyNow}</p>
                                    </div>
                                </div>
                            </DetailSection>

                            {/* Send Audit Invite */}
                            <DetailSection title="Convert to Audit Account" icon={Sparkles} iconColor="text-purple-400">
                                <p className="text-slate-400 text-sm mb-4">This is an application-only account. Send them an invite to complete the full AI audit to get personalized recommendations and convert this to an audit account.</p>
                                <div className="flex gap-3 mb-4">
                                    <button
                                        onClick={() => handleSendAuditInvite('email')}
                                        disabled={sendingAuditInvite || !s.email}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 font-medium hover:bg-purple-500/20 transition-all disabled:opacity-50"
                                    >
                                        {sendingAuditInvite && auditInviteMethod === 'email' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Mail className="w-4 h-4" />}
                                        Send Audit Invite via Email
                                    </button>
                                    <button
                                        onClick={() => handleSendAuditInvite('sms')}
                                        disabled={sendingAuditInvite || !s.phoneNumber}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 font-medium hover:bg-purple-500/20 transition-all disabled:opacity-50"
                                    >
                                        {sendingAuditInvite && auditInviteMethod === 'sms' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Phone className="w-4 h-4" />}
                                        Send Audit Invite via SMS
                                    </button>
                                </div>
                                {auditInviteStatus === 'sent' && (
                                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 mx-auto mb-2" />
                                        <p className="text-green-400 text-sm font-medium">Audit invite sent successfully</p>
                                    </div>
                                )}
                                {auditInviteStatus === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-center">
                                        <AlertTriangle className="w-6 h-6 text-red-400 mx-auto mb-2" />
                                        <p className="text-red-400 text-sm font-medium">Failed to send audit invite</p>
                                    </div>
                                )}
                                {!s.phoneNumber && <p className="text-slate-600 text-xs mt-2">SMS unavailable — no phone number on file</p>}
                            </DetailSection>
                        </>
                    )}

                    {/* ════ AUDIT RESULTS TAB ════ */}

                    {/* Score Breakdown — only show if they have audit data */}
                    {!isApplicationOnly(s) && (
                        <DetailSection title="Score Breakdown" icon={BarChart3} iconColor="text-red-400">
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
                    )}

                    {/* Lead Score & Routing */}
                    {!isApplicationOnly(s) && (
                        <DetailSection title="Lead Score & Routing" icon={Target} iconColor="text-red-400">
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
                                            <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                                            <span className="text-slate-300">{a}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </DetailSection>
                    )}

                    {/* Revenue Opportunity / Cost of Doing Nothing */}
                    {!isApplicationOnly(s) && (
                        <DetailSection title="Revenue Opportunity" icon={DollarSign} iconColor="text-red-400">
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
                            <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                                <p className="text-red-400 font-semibold mb-2">If we close this lead:</p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                                    <div><p className="text-white font-bold">{fmt$(roi.lostMonthly)}</p><p className="text-xs text-slate-500">Monthly churn cost</p></div>
                                    <div><p className="text-white font-bold">{Math.round(roi.churnPct * 100)}%</p><p className="text-xs text-slate-500">Churn rate</p></div>
                                    <div><p className="text-white font-bold">{fmt$(roi.price)}</p><p className="text-xs text-slate-500">Avg product price</p></div>
                                    <div><p className="text-white font-bold">{roi.supportHrs} hrs/wk</p><p className="text-xs text-slate-500">Support hours</p></div>
                                </div>
                            </div>
                        </DetailSection>
                    )}

                    {/* Build Program Application — shown on audit accounts that also have application data */}
                    {(s.whatBuilding || s.whatTried || s.whyNow) && (
                        <DetailSection title="Build Program Application" icon={Sparkles} iconColor="text-red-400">
                            <div className="space-y-3">
                                {s.source === 'build_program_application' && (
                                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs font-medium mb-2">
                                        FOTF Build Program Applicant
                                    </div>
                                )}
                                {s.whatBuilding && (
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-slate-500">What are you building?</span>
                                        <p className="text-slate-300 text-sm mt-1 leading-relaxed whitespace-pre-wrap">{s.whatBuilding}</p>
                                    </div>
                                )}
                                {s.whatTried && (
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-slate-500">What have you already tried?</span>
                                        <p className="text-slate-300 text-sm mt-1 leading-relaxed whitespace-pre-wrap">{s.whatTried}</p>
                                    </div>
                                )}
                                {s.whyNow && (
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-slate-500">Why now?</span>
                                        <p className="text-slate-300 text-sm mt-1 leading-relaxed whitespace-pre-wrap">{s.whyNow}</p>
                                    </div>
                                )}
                            </div>
                        </DetailSection>
                    )}

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
                        <DetailSection title="Identified Opportunities" icon={Zap} iconColor="text-red-400">
                            <div className="space-y-3">
                                {safeArray(s.opportunities).map((opp: any, i: number) => (
                                    <div key={i} className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-white text-sm font-medium">{opp?.title || 'Opportunity'}</span>
                                            <span className={`text-xs px-2 py-0.5 rounded-full ${opp?.impact === "Critical" ? "text-red-400 bg-red-400/10" : opp?.impact === "High" ? "text-red-400 bg-red-400/10" : "text-red-400 bg-red-400/10"}`}>{opp?.impact || 'Medium'}</span>
                                        </div>
                                        <p className="text-slate-400 text-xs">{opp?.description || ''}</p>
                                    </div>
                                ))}
                            </div>
                        </DetailSection>
                    )}

                    {/* Quick key facts — only for audit accounts */}
                    {!isApplicationOnly(s) && (
                        <DetailSection title="Key Facts at a Glance" icon={Eye} iconColor="text-red-400">
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
                                {s.role && <DetailField label="Role" value={s.role} />}
                                {s.opsPerson && <DetailField label="Ops Person" value={s.opsPerson} />}
                                {s.opsScore && <DetailField label="Ops Score (1-10)" value={s.opsScore} />}
                                {s.aiUse && <DetailField label="AI Usage" value={s.aiUse} />}
                                {s.source === 'embedded_ops_audit' && <DetailField label="Source" value="Operations Audit (Landing Page)" />}
                            </div>
                        </DetailSection>
                    )}
                </>
            )}

            {activeTab === 'answers' && (
                <>
                    {/* ════ ALL ANSWERS TAB ════ */}

                    <DetailSection title="About You" icon={Users} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Full Name" value={s.fullName} /><DetailField label="Company Name" value={s.companyName} /><DetailField label="Email" value={s.email} />
                            <DetailField label="Phone Number" value={s.phoneNumber} /><DetailField label="Website URL" value={s.websiteUrl} />
                            <DetailField label="Business Type" value={s.businessType} /><DetailField label="Business Type (Other)" value={s.businessTypeOther} />
                            {/* Legacy */}
                            <DetailField label="Industry Category" value={s.industryCategory} /><DetailField label="Specific Industry" value={s.specificIndustry} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[1]} icon={Briefcase} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label={config.step2.productDescription.label || "Description"} value={s.productDescription} />
                            <DetailField label={config.step2.productPricePoint.label || "Price Point"} value={s.productPricePoint} /><DetailField label={config.step2.numberOfProducts.label || "# of Products"} value={s.numberOfProducts} />
                            <DetailField label={config.step2.platform.label || "Platform"} value={s.platform} /><DetailField label={config.step2.deliveryMethod.label || "Delivery Method"} value={s.deliveryMethod} />
                        </div>
                    </DetailSection>

                    <DetailSection title="Revenue & Growth" icon={DollarSign} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Current Revenue" value={s.currentRevenue} /><DetailField label="Revenue Trend" value={s.revenueTrend} /><DetailField label="Profit Margin" value={s.profitMargin} />
                            <DetailField label="Revenue Goal" value={s.revenueGoal} /><DetailField label="Biggest Bottleneck" value={s.bottleneck} /><DetailField label="Team Size" value={s.teamSize} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[3]} icon={Target} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label={config.step4.listSize.label || "List Size"} value={s.listSize} /><DetailField label={config.step4.trafficSource.label || "Traffic Source"} value={s.trafficSource} /><DetailField label={config.step4.conversionRate.label || "Conversion Rate"} value={s.conversionRate} />
                            <DetailField label={config.step4.launchesPerYear.label || "Launches Per Year"} value={s.launchesPerYear} /><DetailField label={config.step4.churnRate.label || "Churn Rate"} value={s.churnRate} /><DetailField label={config.step4.contentCreationHours.label || "Content Hrs/Wk"} value={s.contentCreationHours} />
                            {/* Legacy */}
                            <DetailField label="Lead Source (legacy)" value={s.leadSource} /><DetailField label="Deal Size (legacy)" value={s.dealSize} /><DetailField label="Missed Calls (legacy)" value={s.missedCalls} />
                        </div>
                    </DetailSection>

                    <DetailSection title={config.stepLabels[4]} icon={Clock} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                            <DetailField label="Hours Worked/Week" value={s.hoursPerWeek} /><DetailField label={config.step5.supportHoursPerWeek.label || "Support Hrs/Week"} value={s.supportHoursPerWeek} />
                            <DetailField label="% High-Value Work" value={s.highValueWork} /><DetailField label={config.step5.onboardingAutomated.label || "Onboarding Automated?"} value={s.onboardingAutomated} />
                            <DetailField label="Can Take 2 Weeks Off?" value={s.twoWeeksOff} /><DetailField label="Biggest Time Waste" value={s.biggestTimeWaste} />
                        </div>
                        {safeNumFromSlider(s.painLevel) > 0 && <div className="mb-4"><SliderBar label="Pain Level" value={safeNumFromSlider(s.painLevel)} /></div>}
                        {s.keepsUpAtNight && <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5"><span className="text-xs text-slate-500 block mb-1">What keeps them up at night</span><p className="text-slate-300 text-sm leading-relaxed">{s.keepsUpAtNight}</p></div>}
                    </DetailSection>

                    <DetailSection title={config.stepLabels[5]} icon={Settings} iconColor="text-red-400">
                        {safeArray<string>(s.tools).length > 0 && <div className="mb-4"><span className="text-xs text-slate-500 block mb-2">Current Tools</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.tools).map((t, i) => <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">{t}</span>)}</div></div>}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                            <DetailField label="% Automated" value={s.percentAutomated} /><DetailField label="#1 Goal (12 Mo)" value={s.next12MonthsGoal} /><DetailField label="Holding Back" value={s.holdingBack} />
                        </div>
                        {safeArray<string>(s.problems).length > 0 && <div><span className="text-xs text-slate-500 block mb-2">Problems</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.problems).map((p, i) => <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">{p}</span>)}</div></div>}
                    </DetailSection>

                    <DetailSection title="Readiness & Intent" icon={Zap} iconColor="text-red-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DetailField label="Excitement Level" value={s.excitementLevel} /><DetailField label="When Start?" value={s.startDate} /><DetailField label="Investment Tolerance" value={s.growthBudget} />
                            <DetailField label="Decision Maker?" value={s.decisionMaker} /><DetailField label="Newsletter Opt-In" value={s.newsletterOptIn} />
                        </div>
                    </DetailSection>

                    {/* ════ NEW OPERATIONS AUDIT DATA ════ */}
                    {s.source === 'embedded_ops_audit' && (
                        <>
                            <DetailSection title="Operations Audit — Team & Role" icon={Users} iconColor="text-orange-400">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                                    <DetailField label="Role" value={s.role} />
                                    <DetailField label="Ops/Admin Person" value={s.opsPerson} />
                                    <DetailField label="Ops Score (1-10)" value={s.opsScore} />
                                </div>
                                {safeArray<string>(s.adminRoles).length > 0 && (
                                    <div className="mb-4">
                                        <span className="text-xs text-slate-500 block mb-2">Roles Buried in Admin</span>
                                        <div className="flex flex-wrap gap-2">{safeArray<string>(s.adminRoles).map((r: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs">{r}</span>)}</div>
                                    </div>
                                )}
                            </DetailSection>

                            <DetailSection title="Operations Audit — Tool Stack" icon={Settings} iconColor="text-orange-400">
                                <div className="space-y-3">
                                    {safeArray<string>(s.crmTools).length > 0 && (
                                        <div><span className="text-xs text-slate-500 block mb-2">CRM / Lead Management</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.crmTools).map((t: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">{t}</span>)}</div></div>
                                    )}
                                    {safeArray<string>(s.schedulingTools).length > 0 && (
                                        <div><span className="text-xs text-slate-500 block mb-2">Scheduling</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.schedulingTools).map((t: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">{t}</span>)}</div></div>
                                    )}
                                    {safeArray<string>(s.billingTools).length > 0 && (
                                        <div><span className="text-xs text-slate-500 block mb-2">Invoicing & Payments</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.billingTools).map((t: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">{t}</span>)}</div></div>
                                    )}
                                    {safeArray<string>(s.marketingTools).length > 0 && (
                                        <div><span className="text-xs text-slate-500 block mb-2">Marketing & Campaigns</span><div className="flex flex-wrap gap-2">{safeArray<string>(s.marketingTools).map((t: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs">{t}</span>)}</div></div>
                                    )}
                                    <DetailField label="AI Usage" value={s.aiUse} />
                                </div>
                            </DetailSection>

                            <DetailSection title="Operations Audit — Automation Priorities" icon={Zap} iconColor="text-orange-400">
                                {safeArray<string>(s.automate).length > 0 && (
                                    <div className="mb-4">
                                        <span className="text-xs text-slate-500 block mb-2">Functions They Want AI to Own</span>
                                        <div className="flex flex-wrap gap-2">{safeArray<string>(s.automate).map((a: string, i: number) => <span key={i} className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs">{a}</span>)}</div>
                                    </div>
                                )}
                                {s.extraNotes && (
                                    <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                        <span className="text-xs text-slate-500 block mb-1">Additional Notes</span>
                                        <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">{s.extraNotes}</p>
                                    </div>
                                )}
                            </DetailSection>
                        </>
                    )}
                </>
            )}

            {activeTab === 'notes' && (
                <>
                    {/* ════ NOTES & ACTIVITY TAB ════ */}
                    <DetailSection title="Add Note" icon={StickyNote} iconColor="text-red-400">
                        <div className="space-y-3">
                            <div className="flex gap-2">
                                {[
                                    { id: 'note', label: 'Note', icon: StickyNote },
                                    { id: 'call', label: 'Call', icon: PhoneCall },
                                    { id: 'email', label: 'Email', icon: Mail },
                                    { id: 'meeting', label: 'Meeting', icon: Calendar },
                                ].map((t) => (
                                    <button
                                        key={t.id}
                                        onClick={() => setNoteType(t.id)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center gap-1.5 ${noteType === t.id ? 'bg-white/10 border-white/20 text-white' : 'bg-white/[0.02] border-white/5 text-slate-500 hover:text-slate-300'}`}
                                    >
                                        {React.createElement(t.icon, { className: "w-3 h-3" })} {t.label}
                                    </button>
                                ))}
                            </div>
                            <textarea
                                value={noteText}
                                onChange={(e) => setNoteText(e.target.value)}
                                placeholder="Add a note about this lead... (call outcome, next steps, objections, etc.)"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 text-sm resize-none"
                                rows={3}
                            />
                            <button
                                onClick={handleAddNote}
                                disabled={addingNote || !noteText.trim()}
                                className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-all disabled:opacity-50 flex items-center gap-2"
                            >
                                {addingNote ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />} Add Note
                            </button>
                        </div>
                    </DetailSection>

                    <DetailSection title="Activity Timeline" icon={Clock} iconColor="text-red-400">
                        {(!s.notes || s.notes.length === 0) ? (
                            <div className="text-center py-8">
                                <StickyNote className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                                <p className="text-slate-500 text-sm">No notes yet. Add your first note above.</p>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                {[...(s.notes || [])].reverse().map((note, i) => {
                                    const noteIcon = note.type === 'call' ? PhoneCall : note.type === 'email' ? Mail : note.type === 'meeting' ? Calendar : note.type === 'system' ? Settings : StickyNote
                                    const noteColor = note.type === 'system' ? 'text-slate-500' : note.type === 'call' ? 'text-green-400' : note.type === 'email' ? 'text-blue-400' : note.type === 'meeting' ? 'text-purple-400' : 'text-slate-300'
                                    const fmtTime = new Date(note.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })
                                    return (
                                        <div key={i} className="flex gap-3 py-3 border-b border-white/5 last:border-0">
                                            <div className={`mt-0.5 ${noteColor}`}>
                                                {React.createElement(noteIcon, { className: "w-4 h-4" })}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className={`text-sm leading-relaxed ${note.type === 'system' ? 'text-slate-500 italic' : 'text-slate-300'}`}>{note.text}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-xs text-slate-600">{fmtTime}</span>
                                                    <span className="text-xs text-slate-700 capitalize">{note.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </DetailSection>
                </>
            )}

            {activeTab === 'followup' && (
                <>
                    {/* ════ FOLLOW UP TAB ════ */}
                    <DetailSection title={`Follow Up with ${(s.fullName || '').split(' ')[0]}`} icon={Mail} iconColor="text-red-400">
                        <div className="space-y-4">
                            {/* Email Type Selector */}
                            <div>
                                <label className="text-xs text-slate-500 block mb-2">Email Type</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {[
                                        { id: 'warm-nudge', label: 'Warm Nudge', desc: 'Casual check-in' },
                                        { id: 'value-drop', label: 'Value Drop', desc: 'Quick win from audit' },
                                        { id: 'pain-agitate', label: 'Pain + Solution', desc: 'Address their pain' },
                                        { id: 'case-study', label: 'Case Study', desc: 'Relevant success story' },
                                        { id: 'breakup', label: 'Breakup Email', desc: 'Final follow-up' },
                                        { id: 'custom', label: 'Custom', desc: 'Your own context' },
                                    ].map((type) => (
                                        <button
                                            key={type.id}
                                            onClick={() => { setEmailType(type.id); setGeneratedEmail(null); setFollowupStatus('idle') }}
                                            className={`text-left p-3 rounded-xl border transition-all ${emailType === type.id ? 'bg-red-500/10 border-red-500/30 text-white' : 'bg-white/[0.03] border-white/10 text-slate-400 hover:border-white/20 hover:text-white'}`}
                                        >
                                            <p className="text-sm font-medium">{type.label}</p>
                                            <p className="text-xs opacity-60 mt-0.5">{type.desc}</p>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Custom Context Input */}
                            {emailType === 'custom' && (
                                <div>
                                    <label className="text-xs text-slate-500 block mb-2">Custom Context</label>
                                    <textarea
                                        value={customContext}
                                        onChange={(e) => setCustomContext(e.target.value)}
                                        placeholder="E.g., They mentioned on the call they're interested in chatbot automation but worried about cost..."
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-white/30 text-sm resize-none"
                                        rows={3}
                                    />
                                </div>
                            )}

                            {/* Lead Context Summary */}
                            <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                                <p className="text-xs text-slate-500 mb-2">Claude will use this context to personalize the email</p>
                                <div className="flex flex-wrap gap-2">
                                    {s.intentLevel && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">{s.intentLevel} intent</span>}
                                    {s.auditScore && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Score: {s.auditScore}</span>}
                                    {s.businessType && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">{s.businessType}</span>}
                                    {s.keepsUpAtNight && <span className="px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs truncate max-w-[200px]">{s.keepsUpAtNight}</span>}
                                    {s.bottleneck && <span className="px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-xs truncate max-w-[200px]">{s.bottleneck}</span>}
                                    {s.currentRevenue && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">{s.currentRevenue}</span>}
                                    {s.growthBudget && <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">Budget: {s.growthBudget}</span>}
                                </div>
                            </div>

                            {/* Generate Button */}
                            <button
                                onClick={handleGeneratePreview}
                                disabled={generating || (emailType === 'custom' && !customContext.trim())}
                                className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {generating ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> Claude is writing...</>
                                ) : (
                                    <><Sparkles className="w-4 h-4" /> Generate Email Preview</>
                                )}
                            </button>

                            {/* Error */}
                            {followupStatus === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 shrink-0" /> {followupError}
                                </div>
                            )}

                            {/* Email Preview */}
                            {generatedEmail && followupStatus === 'previewing' && (
                                <div className="bg-white/[0.03] rounded-xl border border-white/10 overflow-hidden">
                                    <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                                        <p className="text-xs text-slate-500">Email Preview</p>
                                        <button onClick={handleGeneratePreview} disabled={generating} className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                                            <RotateCcw className="w-3 h-3" /> Regenerate
                                        </button>
                                    </div>
                                    <div className="p-5 space-y-3">
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-slate-500">To</span>
                                            </div>
                                            <p className="text-slate-300 text-sm">{s.email}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-slate-500">Subject</span>
                                                <button onClick={() => handleCopy('subject', generatedEmail.subject)} className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                                                    {copiedField === 'subject' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                                </button>
                                            </div>
                                            <p className="text-white text-sm font-medium">{generatedEmail.subject}</p>
                                        </div>
                                        <div>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-xs text-slate-500">Body</span>
                                                <button onClick={() => handleCopy('body', generatedEmail.body)} className="text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-1">
                                                    {copiedField === 'body' ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                                </button>
                                            </div>
                                            <div className="bg-white/[0.03] rounded-lg p-4 border border-white/5">
                                                <p className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">{generatedEmail.body}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4 border-t border-white/10 flex gap-3">
                                        <button
                                            onClick={handleSendEmail}
                                            disabled={sending}
                                            className="flex-1 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                        >
                                            {sending ? (
                                                <><Loader2 className="w-4 h-4 animate-spin" /> Sending via Loops...</>
                                            ) : (
                                                <><Send className="w-4 h-4" /> Send to {(s.fullName || '').split(' ')[0]}</>
                                            )}
                                        </button>
                                        <button
                                            onClick={() => { setGeneratedEmail(null); setFollowupStatus('idle') }}
                                            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Sent Confirmation */}
                            {followupStatus === 'sent' && (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                                    <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto mb-3" />
                                    <p className="text-green-400 font-semibold mb-1">Email Sent Successfully</p>
                                    <p className="text-slate-400 text-sm">Sent to {s.email} via Loops</p>
                                    <button
                                        onClick={() => { setGeneratedEmail(null); setFollowupStatus('idle') }}
                                        className="mt-4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm hover:bg-white/10 transition-all"
                                    >
                                        Send Another
                                    </button>
                                </div>
                            )}
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
    const headers = ["Date", "Full Name", "Company", "Email", "Phone", "Website", "Business Type", "Business Category", "Product Description", "Price Point", "# Products", "Platform", "Delivery Method", "Revenue Stage", "Revenue Trend", "Profit Margin", "Revenue Goal", "Bottleneck", "Team Size", "List Size", "Traffic Source", "Conversion Rate", "Launches/Year", "Churn Rate", "Content Creation Hrs", "Support Hrs/Week", "Onboarding Automated", "Hours/Week", "High-Value Work %", "2 Weeks Off?", "Pain Level", "Keeps Up at Night", "Biggest Time Waste", "Tools", "% Automated", "12-Mo Goal", "Holding Back", "Problems", "Excitement", "Start Date", "Growth Budget", "Decision Maker", "Newsletter Opt-In", "Audit Score", "Intent Level", "Lead Temperature", "Lead Score", "Opportunities"]
    const rows = submissions.map(s => {
        const lead = calcLeadScore(s, s.auditScore ?? 0)
        const cat = s.businessType ? getBusinessCategory(s.businessType) : ''
        return [s.createdAt || s.submittedAt || "", s.fullName, s.companyName, s.email, s.phoneNumber || "", s.websiteUrl || "", s.businessType || s.industryCategory || "", cat, s.productDescription || "", s.productPricePoint || "", s.numberOfProducts || "", s.platform || "", s.deliveryMethod || "", s.currentRevenue || "", s.revenueTrend || "", s.profitMargin || "", s.revenueGoal || "", s.bottleneck || "", s.teamSize || "", s.listSize || "", s.trafficSource || "", s.conversionRate || "", s.launchesPerYear || "", s.churnRate || "", s.contentCreationHours || "", s.supportHoursPerWeek || "", s.onboardingAutomated || "", s.hoursPerWeek || "", s.highValueWork || "", s.twoWeeksOff || "", safeNumFromSlider(s.painLevel).toString(), s.keepsUpAtNight || "", s.biggestTimeWaste || "", safeArray<string>(s.tools).join("; "), s.percentAutomated || "", s.next12MonthsGoal || "", s.holdingBack || "", safeArray<string>(s.problems).join("; "), s.excitementLevel || "", s.startDate || "", s.growthBudget || "", s.decisionMaker || "", s.newsletterOptIn ? "Yes" : "No", s.auditScore?.toString() || "", s.intentLevel || "", lead.level, lead.score.toString(), safeArray(s.opportunities).map((o: any) => `${o?.title || ''} (${o?.impact || ''})`).join("; ")]
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
    const [typeFilter, setTypeFilter] = useState<string>("all")
    const [sortAsc, setSortAsc] = useState(false)
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null)
    const [dashTab, setDashTab] = useState<'pipeline' | 'leads' | 'schedule' | 'vault'>('pipeline')
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [selectedVaultId, setSelectedVaultId] = useState<string | null>(null)

    // GHL state
    const [ghlConnected, setGhlConnected] = useState<boolean | null>(null)
    const [bulkSyncing, setBulkSyncing] = useState(false)
    const [bulkSyncResult, setBulkSyncResult] = useState<{ synced: number; failed: number } | null>(null)

    // Test GHL connection on mount
    useEffect(() => {
        fetch('/api/admin/ghl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
            body: JSON.stringify({ action: 'test-connection' }),
        }).then(r => r.json()).then(d => setGhlConnected(d.ok === true)).catch(() => setGhlConnected(false))
    }, [token])

    const handleBulkSyncGHL = async () => {
        const unsynced = submissions.filter(s => !s.ghlContactId)
        if (unsynced.length === 0) { alert('All leads are already synced to GHL'); return }
        if (!confirm(`Push ${unsynced.length} unsynced leads to GoHighLevel?`)) return
        setBulkSyncing(true)
        setBulkSyncResult(null)
        try {
            const res = await fetch('/api/admin/ghl', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
                body: JSON.stringify({ action: 'bulk-push', leads: unsynced }),
            })
            const data = await res.json()
            if (data.success) {
                setBulkSyncResult({ synced: data.synced, failed: data.failed })
                fetchSubmissions() // Refresh to get GHL IDs
            }
        } catch { /* ignore */ } finally { setBulkSyncing(false) }
    }

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
            const matchesType = typeFilter === "all" || getSubmissionType(s) === typeFilter
            return matchesSearch && matchesIntent && matchesType
        })
        .sort((a, b) => {
            const dateA = new Date(a.createdAt || a.submittedAt || 0).getTime()
            const dateB = new Date(b.createdAt || b.submittedAt || 0).getTime()
            return sortAsc ? dateA - dateB : dateB - dateA
        })

    const totalLeads = submissions.length
    const auditCount = submissions.filter(s => getSubmissionType(s) === 'audit').length
    const applicationCount = submissions.filter(s => getSubmissionType(s) === 'application').length
    const highIntent = submissions.filter((s) => s.intentLevel === "high").length
    const avgScore = submissions.length ? Math.round(submissions.reduce((sum, s) => sum + (s.auditScore || 0), 0) / submissions.length) : 0
    const thisWeek = submissions.filter((s) => { const d = new Date(s.createdAt || s.submittedAt || 0); return d >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }).length
    const hotLeads = submissions.filter((s) => { const l = calcLeadScore(s, s.auditScore ?? 0); return l.level === 'hot' }).length

    // Vault detail view
    if (selectedVaultId) {
        return (
            <div className="min-h-screen bg-black">
                <div className="border-b border-white/10 bg-black/80 backdrop-blur-md sticky top-0 z-40">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="flex items-center gap-2"><div className="relative w-8 h-8 overflow-hidden rounded-lg"><Image src="/icon.png" alt="Elianatech" fill className="object-cover" /></div></Link>
                            <span className="text-slate-600">/</span>
                            <button onClick={() => setSelectedVaultId(null)} className="text-slate-400 hover:text-white text-sm transition-colors">Vault</button>
                        </div>
                        <button onClick={onLogout} className="text-slate-400 hover:text-white transition-colors text-sm"><LogOut className="w-4 h-4" /></button>
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
                    <VaultDetail vaultId={selectedVaultId} token={token} onBack={() => setSelectedVaultId(null)} />
                </div>
            </div>
        )
    }

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
                        <SubmissionDetail
                            submission={selectedSubmission}
                            onBack={() => setSelectedSubmission(null)}
                            onDelete={handleDelete}
                            token={token}
                            onUpdate={(updated) => {
                                const merged = { ...selectedSubmission, ...updated }
                                setSelectedSubmission(merged)
                                setSubmissions(prev => prev.map(sub => sub.id === merged.id ? merged : sub))
                            }}
                            onOpenVault={async (email) => {
                                try {
                                    const res = await fetch(`/api/admin/vault`, { headers: { Authorization: `Bearer ${token}` } })
                                    const data = await res.json()
                                    if (data.success) {
                                        const match = data.vaults.find((v: any) => v.email === email)
                                        if (match) {
                                            setSelectedSubmission(null)
                                            setSelectedVaultId(match.id)
                                        } else {
                                            alert('No vault found for this email. Submit an audit or create one from the Vault tab.')
                                        }
                                    }
                                } catch { alert('Failed to look up vault') }
                            }}
                        />
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
                        <button onClick={() => setIsAddModalOpen(true)} className="flex items-center gap-2 bg-white text-black hover:bg-slate-200 transition-colors text-sm font-semibold px-4 py-1.5 rounded-lg">
                            <Plus className="w-4 h-4" /><span>Add Business</span>
                        </button>
                        {submissions.length > 0 && (
                            <button onClick={() => exportToCSV(filtered)} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm px-3 py-1.5 rounded-lg hover:bg-white/5">
                                <Download className="w-4 h-4" /><span className="hidden sm:inline">Export CSV</span>
                            </button>
                        )}
                        {/* GHL Status */}
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${ghlConnected === true ? 'bg-green-500/10 text-green-400' : ghlConnected === false ? 'bg-red-500/10 text-red-400' : 'bg-white/5 text-slate-500'}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${ghlConnected === true ? 'bg-green-400' : ghlConnected === false ? 'bg-red-400' : 'bg-slate-500'}`} />
                            <span className="hidden sm:inline">GHL</span>
                        </div>
                        <button onClick={onLogout} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"><LogOut className="w-4 h-4" /><span className="hidden sm:inline">Sign Out</span></button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Dashboard Tabs */}
                <div className="flex gap-2 mb-8">
                    <button onClick={() => setDashTab('pipeline')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'pipeline' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <Target className="w-4 h-4" /> Pipeline
                        {submissions.filter(s => !['won', 'lost'].includes(s.stage || 'new')).length > 0 && <span className={`px-2 py-0.5 rounded-full text-xs ${dashTab === 'pipeline' ? 'bg-black/10' : 'bg-white/10'}`}>{submissions.filter(s => !['won', 'lost'].includes(s.stage || 'new')).length}</span>}
                    </button>
                    <button onClick={() => setDashTab('leads')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'leads' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <Users className="w-4 h-4" /> All Leads
                        {totalLeads > 0 && <span className={`px-2 py-0.5 rounded-full text-xs ${dashTab === 'leads' ? 'bg-black/10' : 'bg-white/10'}`}>{totalLeads}</span>}
                    </button>
                    <button onClick={() => setDashTab('schedule')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'schedule' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <Calendar className="w-4 h-4" /> Schedule
                    </button>
                    <button onClick={() => setDashTab('vault')} className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${dashTab === 'vault' ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}>
                        <FileText className="w-4 h-4" /> Vault
                    </button>
                </div>

                {dashTab === 'pipeline' && (
                    /* ════ PIPELINE TAB ════ */
                    <div>
                        {/* GHL Sync Bar */}
                        {ghlConnected && (
                            <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl px-4 py-3 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-400" />
                                        <span className="text-xs text-green-400 font-medium">GHL Connected</span>
                                    </div>
                                    <span className="text-xs text-slate-600">|</span>
                                    <span className="text-xs text-slate-500">{submissions.filter(s => s.ghlContactId).length}/{submissions.length} synced</span>
                                    {bulkSyncResult && (
                                        <span className="text-xs text-slate-400">Last sync: {bulkSyncResult.synced} pushed, {bulkSyncResult.failed} failed</span>
                                    )}
                                </div>
                                <button
                                    onClick={handleBulkSyncGHL}
                                    disabled={bulkSyncing}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:bg-white/10 transition-all disabled:opacity-50"
                                >
                                    {bulkSyncing ? <Loader2 className="w-3 h-3 animate-spin" /> : <RefreshCw className="w-3 h-3" />}
                                    Sync All to GHL
                                </button>
                            </div>
                        )}

                        {/* Pipeline Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <StatCard icon={CircleDot} label="Active Deals" value={submissions.filter(s => !['won', 'lost'].includes(s.stage || 'new')).length} color="bg-blue-500/10 text-blue-400" />
                            <StatCard icon={Award} label="Won" value={submissions.filter(s => s.stage === 'won').length} color="bg-green-500/10 text-green-400" />
                            <StatCard icon={XCircle} label="Lost" value={submissions.filter(s => s.stage === 'lost').length} color="bg-slate-500/10 text-slate-400" />
                            <StatCard icon={Flame} label="Hot Leads" value={hotLeads} color="bg-red-500/10 text-red-400" />
                        </div>

                        {/* Pipeline Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                            {PIPELINE_STAGES.filter(st => !['won', 'lost'].includes(st.id)).map((stage) => {
                                const stageLeads = submissions.filter(s => (s.stage || 'new') === stage.id)
                                    .sort((a, b) => {
                                        const dateA = new Date(a.createdAt || a.submittedAt || 0).getTime()
                                        const dateB = new Date(b.createdAt || b.submittedAt || 0).getTime()
                                        return dateB - dateA
                                    })
                                return (
                                    <div key={stage.id} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                                        <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className={`${stage.color.split(' ')[0]}`}>{React.createElement(stage.icon, { className: "w-4 h-4" })}</span>
                                                <span className="text-sm font-medium text-white">{stage.label}</span>
                                            </div>
                                            <span className="text-xs text-slate-500 bg-white/5 px-2 py-0.5 rounded-full">{stageLeads.length}</span>
                                        </div>
                                        <div className="p-2 space-y-2 max-h-[500px] overflow-y-auto">
                                            {stageLeads.length === 0 && (
                                                <p className="text-slate-600 text-xs text-center py-6">No leads</p>
                                            )}
                                            {stageLeads.map((sub) => {
                                                const lead = calcLeadScore(sub, sub.auditScore ?? 0)
                                                const tempColor = lead.level === 'hot' ? 'text-red-400' : lead.level === 'warm' ? 'text-orange-400' : 'text-slate-500'
                                                const dateStr = sub.createdAt || sub.submittedAt
                                                const timeAgo = dateStr ? new Date(dateStr).toLocaleDateString("en-US", { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Unknown'
                                                
                                                return (
                                                    <div
                                                        key={sub.id}
                                                        onClick={() => setSelectedSubmission(sub)}
                                                        className="bg-white/[0.03] border border-white/5 rounded-xl p-3 cursor-pointer hover:border-white/15 transition-all group"
                                                    >
                                                        <div className="flex items-start justify-between gap-2">
                                                            <div className="min-w-0">
                                                                <div className="flex items-center gap-1.5">
                                                                    <p className="text-white text-sm font-medium truncate">{sub.fullName}</p>
                                                                    <span className={`px-1 py-0.5 rounded text-[9px] font-bold shrink-0 ${getSubmissionType(sub) === 'application' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
                                                                        {getSubmissionType(sub) === 'application' ? 'APPLY' : 'AUDIT'}
                                                                    </span>
                                                                </div>
                                                                <p className="text-slate-500 text-xs truncate">{sub.companyName}</p>
                                                            </div>
                                                            <span className={`text-xs font-medium ${tempColor} shrink-0`}>{lead.level.toUpperCase()}</span>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-2">
                                                            <div className="flex items-center gap-2">
                                                                {sub.auditScore && <span className="text-xs text-slate-500">{sub.auditScore}/100</span>}
                                                                {sub.growthBudget && <span className="text-xs text-slate-600">{sub.growthBudget}</span>}
                                                            </div>
                                                            <span className="text-[10px] text-slate-600 flex items-center gap-1">
                                                                <Clock className="w-2.5 h-2.5" />
                                                                {timeAgo}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Won & Lost Summary */}
                        {(submissions.some(s => s.stage === 'won') || submissions.some(s => s.stage === 'lost')) && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                {/* Won */}
                                <div className="bg-green-500/5 border border-green-500/10 rounded-2xl p-4">
                                    <h3 className="text-green-400 font-semibold text-sm mb-3 flex items-center gap-2"><Award className="w-4 h-4" /> Won ({submissions.filter(s => s.stage === 'won').length})</h3>
                                    <div className="space-y-2">
                                        {submissions.filter(s => s.stage === 'won')
                                            .sort((a, b) => new Date(b.createdAt || b.submittedAt || 0).getTime() - new Date(a.createdAt || a.submittedAt || 0).getTime())
                                            .map(sub => (
                                                <div key={sub.id} onClick={() => setSelectedSubmission(sub)} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.03] cursor-pointer hover:bg-white/[0.05] transition-all">
                                                    <div><p className="text-white text-sm">{sub.fullName}</p><p className="text-slate-500 text-xs">{sub.companyName}</p></div>
                                                    <span className="text-green-400 text-xs font-medium">{sub.dealValue || ''}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                {/* Lost */}
                                <div className="bg-slate-500/5 border border-slate-500/10 rounded-2xl p-4">
                                    <h3 className="text-slate-400 font-semibold text-sm mb-3 flex items-center gap-2"><XCircle className="w-4 h-4" /> Lost ({submissions.filter(s => s.stage === 'lost').length})</h3>
                                    <div className="space-y-2">
                                        {submissions.filter(s => s.stage === 'lost')
                                            .sort((a, b) => new Date(b.createdAt || b.submittedAt || 0).getTime() - new Date(a.createdAt || a.submittedAt || 0).getTime())
                                            .map(sub => (
                                                <div key={sub.id} onClick={() => setSelectedSubmission(sub)} className="flex items-center justify-between py-2 px-3 rounded-lg bg-white/[0.03] cursor-pointer hover:bg-white/[0.05] transition-all">
                                                    <div><p className="text-white text-sm">{sub.fullName}</p><p className="text-slate-500 text-xs">{sub.companyName}</p></div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {dashTab === 'schedule' && (
                    /* ════ SCHEDULE TAB ════ */
                    <div>
                        {/* Quick Actions */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            <a href="https://app.cal.com/bookings/upcoming" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-all">
                                <Calendar className="w-4 h-4" /> Upcoming Bookings <ArrowRight className="w-3 h-3" />
                            </a>
                            <a href="https://app.cal.com/bookings/past" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 transition-all">
                                <Clock className="w-4 h-4" /> Past Bookings <ArrowRight className="w-3 h-3" />
                            </a>
                            <a href="https://app.cal.com/event-types" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 transition-all">
                                <Settings className="w-4 h-4" /> Event Types <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>

                        {/* Cal.com Bookings Embed */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                            <h2 className="text-white font-semibold mb-2 flex items-center gap-2"><Calendar className="w-5 h-5 text-red-400" /> Your Schedule</h2>
                            <p className="text-slate-400 text-sm mb-4">Your real Cal.com bookings. Click &quot;Upcoming Bookings&quot; above for the full management view.</p>
                            <div className="rounded-xl overflow-hidden border border-white/10" style={{ minHeight: 700 }}>
                                <iframe
                                    src="https://app.cal.com/bookings/upcoming"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    style={{ border: 'none', background: '#0a0a0a' }}
                                    allow="payment"
                                />
                            </div>
                        </div>

                        {/* Booking Page Preview */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-white font-semibold mb-2 flex items-center gap-2"><Eye className="w-4 h-4 text-slate-400" /> Your Public Booking Page</h3>
                            <p className="text-slate-400 text-sm mb-4">This is what leads see when they book a call with you.</p>
                            <div className="rounded-xl overflow-hidden border border-white/10" style={{ minHeight: 500 }}>
                                <iframe
                                    src="https://cal.com/elianatech/30min?embed=true&theme=dark"
                                    width="100%"
                                    height="500"
                                    frameBorder="0"
                                    style={{ border: 'none', background: 'transparent' }}
                                    allow="payment"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {dashTab === 'leads' && (
                    /* ════ LEADS TAB ════ */
                    <>
                        {/* Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
                            <StatCard icon={Users} label="Total Leads" value={totalLeads} color="bg-red-500/10 text-red-400" />
                            <StatCard icon={BarChart3} label="Audits" value={auditCount} color="bg-emerald-500/10 text-emerald-400" />
                            <StatCard icon={FileText} label="Applications" value={applicationCount} color="bg-purple-500/10 text-purple-400" />
                            <StatCard icon={Flame} label="Hot Leads" value={hotLeads} color="bg-red-500/10 text-red-400" />
                            <StatCard icon={TrendingUp} label="Avg Score" value={avgScore} color="bg-red-500/10 text-red-400" />
                            <StatCard icon={Clock} label="This Week" value={thisWeek} color="bg-red-500/10 text-red-400" />
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <div className="relative flex-1">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search name, company, email, industry, phone..."
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 text-sm transition-all" />
                            </div>
                            <div className="flex gap-2">
                                <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 appearance-none cursor-pointer transition-all">
                                    <option value="all">All Types</option><option value="audit">Audits</option><option value="application">Applications</option>
                                </select>
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
                                    const intentBadge = { high: "text-red-400 bg-red-400/10", medium: "text-red-400 bg-red-400/10", low: "text-slate-400 bg-slate-400/10" }[sub.intentLevel || "low"] || "text-slate-400 bg-slate-400/10"
                                    const painRaw = safeNumFromSlider(sub.painLevel)
                                    const painVal = painRaw > 0 ? painRaw : null
                                    const painColor = painVal != null && painVal >= 7 ? "text-red-400" : painVal != null && painVal >= 4 ? "text-red-400" : "text-slate-400"
                                    const lead = calcLeadScore(sub, sub.auditScore ?? 0)
                                    const tempBadge = lead.level === 'hot' ? 'text-red-400 bg-red-400/10' : lead.level === 'warm' ? 'text-red-400 bg-red-400/10' : 'text-red-400 bg-red-400/10'

                                    return (
                                        <div key={sub.id} className="grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-4 px-6 py-4 border-b border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group" onClick={() => setSelectedSubmission(sub)}>
                                            <div className="lg:col-span-3">
                                                <div className="flex items-center gap-2">
                                                    <p className="text-white text-sm font-medium">{sub.fullName}</p>
                                                    {(() => { const st = getStageInfo(sub.stage || 'new'); return <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${st.color}`}>{st.label}</span> })()}
                                                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${getSubmissionType(sub) === 'application' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>{getSubmissionType(sub) === 'application' ? 'APPLICATION' : 'AUDIT'}</span>
                                                </div>
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

                {dashTab === 'vault' && (
                    <VaultTab token={token} onSelectVault={(id) => setSelectedVaultId(id)} />
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
