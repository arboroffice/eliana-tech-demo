"use client"

import { useState, useEffect, useMemo, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Send, X, Loader2, Sparkles, CheckCircle2, Brain, Search, Settings, Lightbulb, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { AuditResults } from "@/components/audit-results"
import { getIndustryConfig } from "@/lib/audit-industry-config"
import { calculateAuditScore } from "@/lib/audit-analyzer"
import { getLiveInsights, LiveInsight } from "@/lib/audit-live-insights"
import { ProposalVisualizer } from "@/components/proposal-visualizer"
import type { ResearchInsight } from "@/lib/audit-research"

const STORAGE_KEY = "elianatech-audit-progress"

interface FormData {
    fullName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    websiteUrl: string;
    businessType: string;
    businessTypeOther: string;
    productDescription: string;
    productPricePoint: string;
    numberOfProducts: string;
    platform: string;
    deliveryMethod: string;
    currentRevenue: string;
    revenueTrend: string;
    profitMargin: string;
    revenueGoal: string;
    bottleneck: string;
    teamSize: string;
    listSize: string;
    trafficSource: string;
    conversionRate: string;
    launchesPerYear: string;
    churnRate: string;
    contentCreationHours: string;
    hoursPerWeek: string;
    highValueWork: string;
    twoWeeksOff: string;
    supportHoursPerWeek: string;
    onboardingAutomated: string;
    painLevel: number[];
    keepsUpAtNight: string;
    tools: string[];
    percentAutomated: string;
    biggestTimeWaste: string;
    next12MonthsGoal: string;
    holdingBack: string;
    problems: string[];
    excitementLevel: string;
    startDate: string;
    growthBudget: string;
    decisionMaker: string;
    newsletterOptIn: boolean;
    monthlyAdSpend: string;
    triedBefore: string;
    recurringRevenuePct: string;
    revenueTracking: string;
    leadManagement: string;
    leadResponseTime: string;
    followUpProcess: string;
    hasCrm: string;
    emailSequences: string;
    customerCommunication: string;
    dailyInvolvement: string;
    successVision: string;
    referralSystem: string;
    salesProcess: string;
}

const DEFAULT_FORM_DATA: FormData = {
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    websiteUrl: "",
    businessType: "",
    businessTypeOther: "",
    productDescription: "",
    productPricePoint: "",
    numberOfProducts: "",
    platform: "",
    deliveryMethod: "",
    currentRevenue: "",
    revenueTrend: "",
    profitMargin: "",
    revenueGoal: "",
    bottleneck: "",
    teamSize: "",
    listSize: "",
    trafficSource: "",
    conversionRate: "",
    launchesPerYear: "",
    churnRate: "",
    contentCreationHours: "",
    hoursPerWeek: "",
    highValueWork: "",
    twoWeeksOff: "",
    supportHoursPerWeek: "",
    onboardingAutomated: "",
    painLevel: [5],
    keepsUpAtNight: "",
    tools: [],
    percentAutomated: "",
    biggestTimeWaste: "",
    next12MonthsGoal: "",
    holdingBack: "",
    problems: [],
    excitementLevel: "",
    startDate: "",
    growthBudget: "",
    decisionMaker: "",
    newsletterOptIn: false,
    monthlyAdSpend: "",
    triedBefore: "",
    recurringRevenuePct: "",
    revenueTracking: "",
    leadManagement: "",
    leadResponseTime: "",
    followUpProcess: "",
    hasCrm: "",
    emailSequences: "",
    customerCommunication: "",
    dailyInvolvement: "",
    successVision: "",
    referralSystem: "",
    salesProcess: "",
}

export function AuditForm() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [showExitCapture, setShowExitCapture] = useState(false)
    const [exitEmailSent, setExitEmailSent] = useState(false)
    const [restoredProgress, setRestoredProgress] = useState(false)
    const [encouragement, setEncouragement] = useState("")
    const [isScanning, setIsScanning] = useState(false)
    const [liveInsights, setLiveInsights] = useState<LiveInsight[]>([])

    // AI Research state
    const [aiInsights, setAiInsights] = useState<ResearchInsight[]>([])
    const [cachedWebsiteContent, setCachedWebsiteContent] = useState("")
    const researchFiredUrlRef = useRef("")

    // Deep analysis state (post-submit)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [analysisStages, setAnalysisStages] = useState<{ stage: number; label: string; status: string; findings: string[] }[]>([
        { stage: 1, label: "Scanning website...", status: "pending", findings: [] },
        { stage: 2, label: "Analyzing operations...", status: "pending", findings: [] },
        { stage: 3, label: "Identifying opportunities...", status: "pending", findings: [] },
        { stage: 4, label: "Building your report...", status: "pending", findings: [] },
        { stage: 5, label: "Preparing your strategy brief...", status: "pending", findings: [] },
    ])
    const [researchFindings, setResearchFindings] = useState<any>(null)

    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA)

    const config = useMemo(() => getIndustryConfig(formData.businessType), [formData.businessType])
    const STEPS = config.stepLabels
    const ENCOURAGEMENTS = config.encouragements

    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                const parsed = JSON.parse(saved)
                if (parsed.formData) {
                    setFormData({ ...DEFAULT_FORM_DATA, ...parsed.formData })
                    if (parsed.currentStep) setCurrentStep(parsed.currentStep)
                    setRestoredProgress(true)
                    setTimeout(() => setRestoredProgress(false), 4000)
                }
            }
        } catch { }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData, currentStep }))
        } catch { }
    }, [formData, currentStep])

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (e.clientY <= 0 && !showExitCapture && !isSuccess && currentStep > 0 && formData.email) {
                setShowExitCapture(true)
            }
        }
        document.addEventListener('mouseout', handler)
        return () => document.removeEventListener('mouseout', handler)
    }, [showExitCapture, isSuccess, currentStep, formData.email])

    useEffect(() => {
        setLiveInsights(getLiveInsights(formData))
    }, [formData])

    // Fire background research when user has a URL and moves past step 0
    const triggerBackgroundResearch = useCallback(async (url: string) => {
        const normalized = url.trim().toLowerCase()
        if (researchFiredUrlRef.current === normalized || !url || url.length < 5) return
        researchFiredUrlRef.current = normalized
        try {
            const res = await fetch('/api/audit/research', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ websiteUrl: url }),
            })
            const data = await res.json()
            if (data.success && data.insights?.length > 0) {
                setAiInsights(data.insights)
            }
            if (data.websiteContent) {
                setCachedWebsiteContent(data.websiteContent)
            }
        } catch {
            // Silently fail — fallback insights remain
        }
    }, [])

    const updateField = (field: keyof FormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const toggleArrayItem = (field: keyof FormData, item: string) => {
        setFormData((prev) => {
            const current = (prev[field] as string[]) || []
            if (current.includes(item)) {
                return { ...prev, [field]: current.filter((i) => i !== item) }
            } else {
                return { ...prev, [field]: [...current, item] }
            }
        })
    }

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            // Fire background research when leaving step 0
            if (currentStep === 0 && formData.websiteUrl) {
                triggerBackgroundResearch(formData.websiteUrl)
            }
            setIsScanning(true)
            setTimeout(() => {
                setIsScanning(false)
                if (currentStep < ENCOURAGEMENTS.length) {
                    setEncouragement(ENCOURAGEMENTS[currentStep])
                    setTimeout(() => setEncouragement(""), 3000)
                }
                window.scrollTo({ top: 0, behavior: 'smooth' })
                setCurrentStep((prev) => prev + 1)
            }, 1200)
        }
    }

    const handleBack = () => {
        if (currentStep > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentStep((prev) => prev - 1)
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true)
        setIsAnalyzing(true)
        window.scrollTo({ top: 0, behavior: 'smooth' })

        // Fire-and-forget: existing submit for email/SMS/Firebase
        fetch("/api/audit/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        }).catch(() => { })

        // Run deep analysis via SSE
        try {
            const res = await fetch("/api/audit/deep-analysis", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ formData, cachedWebsiteContent }),
            })

            if (!res.ok || !res.body) throw new Error('Deep analysis failed')

            const reader = res.body.getReader()
            const decoder = new TextDecoder()
            let buffer = ''

            while (true) {
                const { done, value } = await reader.read()
                if (done) break

                buffer += decoder.decode(value, { stream: true })
                const lines = buffer.split('\n')
                buffer = lines.pop() || ''

                let currentEvent = ''
                for (const line of lines) {
                    if (line.startsWith('event: ')) {
                        currentEvent = line.slice(7)
                    } else if (line.startsWith('data: ') && currentEvent) {
                        try {
                            const data = JSON.parse(line.slice(6))
                            if (currentEvent === 'stage') {
                                setAnalysisStages(prev => prev.map(s =>
                                    s.stage === data.stage ? { ...s, ...data } : s
                                ))
                            } else if (currentEvent === 'complete') {
                                setResearchFindings(data)
                            }
                        } catch { }
                        currentEvent = ''
                    }
                }
            }
        } catch (error) {
            console.error("Deep analysis error:", error)
            // Fallback: proceed without AI findings
        }

        // Show results regardless
        try { localStorage.removeItem(STORAGE_KEY) } catch { }
        setIsAnalyzing(false)
        setIsSubmitting(false)
        setIsSuccess(true)
        setShowResults(true)
    }

    const handleSaveProgress = async () => {
        try {
            await fetch("/api/audit/save-progress", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: formData.email, name: formData.fullName, formData, currentStep }),
            })
            setExitEmailSent(true)
            setTimeout(() => setShowExitCapture(false), 2000)
        } catch {
            setExitEmailSent(true)
            setTimeout(() => setShowExitCapture(false), 2000)
        }
    }

    if (isSuccess && showResults) {
        return <AuditResults formData={formData} auditScore={calculateAuditScore(formData)} researchFindings={researchFindings} />
    }

    // Deep analysis UI — shown after submit while AI works
    if (isAnalyzing) {
        const stageIcons = [Search, Settings, Lightbulb, FileText, Brain]
        return (
            <div className="max-w-2xl mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6">
                        <Brain className="w-4 h-4 animate-pulse" />
                        AI Agent Researching Your Business
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">
                        Analyzing {formData.companyName || 'Your Business'}
                    </h2>
                    <p className="text-slate-400 text-sm">
                        Our AI is researching your business and building a personalized report. This takes about 15-20 seconds.
                    </p>
                </div>

                <div className="space-y-4">
                    {analysisStages.map((stage, idx) => {
                        const Icon = stageIcons[idx]
                        return (
                            <motion.div
                                key={stage.stage}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Card className={`border p-5 transition-all ${stage.status === 'complete' ? 'bg-red-300/5 border-red-300/20' :
                                    stage.status === 'running' ? 'bg-red-500/5 border-red-500/30' :
                                        'bg-white/[0.02] border-white/10'
                                    }`}>
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg shrink-0 ${stage.status === 'complete' ? 'bg-red-300/10 text-red-300' :
                                            stage.status === 'running' ? 'bg-red-500/10 text-red-400' :
                                                'bg-white/5 text-slate-500'
                                            }`}>
                                            {stage.status === 'complete' ? (
                                                <CheckCircle2 className="w-5 h-5" />
                                            ) : stage.status === 'running' ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <Icon className="w-5 h-5" />
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`font-semibold text-sm ${stage.status === 'complete' ? 'text-red-400' :
                                                stage.status === 'running' ? 'text-white' :
                                                    'text-slate-500'
                                                }`}>
                                                {stage.label}
                                            </p>
                                            <AnimatePresence>
                                                {stage.status === 'complete' && stage.findings.length > 0 && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        className="mt-2 space-y-1"
                                                    >
                                                        {stage.findings.map((f, i) => (
                                                            <p key={i} className="text-slate-400 text-xs leading-relaxed flex items-start gap-2">
                                                                <span className="text-red-500 mt-0.5 shrink-0">-</span>
                                                                {f}
                                                            </p>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                <div className="mt-8 text-center">
                    <div className="h-1 bg-slate-800 rounded-full overflow-hidden max-w-xs mx-auto">
                        <motion.div
                            className="h-full bg-gradient-to-r from-red-600 to-red-400"
                            initial={{ width: '5%' }}
                            animate={{
                                width: `${Math.max(5, analysisStages.filter(s => s.status === 'complete').length * 25)}%`
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-6xl mx-auto px-4 font-mono">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Main Form Area */}
                <div className="lg:col-span-8">
                    <AnimatePresence>
                        {restoredProgress && (
                            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                                className="mb-4 p-3 rounded-lg bg-[#D90019]/10 border border-[#D90019]/30 text-[#D90019] text-sm text-center">
                                Welcome back! We saved your progress.
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {encouragement && (
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }} className="mb-2 text-center text-sm text-[#D90019] font-medium">
                                {encouragement}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-[#888] mb-2">
                            <span>Step {currentStep + 1} of {STEPS.length}</span>
                            <span>{Math.round(((currentStep + 1) / STEPS.length) * 100)}%</span>
                        </div>
                        <div className="h-2 bg-[#E4E3DE] rounded-full overflow-hidden">
                            <motion.div className="h-full bg-[#D90019]"
                                initial={{ width: 0 }} animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                                transition={{ duration: 0.3 }} />
                        </div>
                        <div className="mt-4 text-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isScanning ? 'scanning' : currentStep}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-black font-black text-xl uppercase tracking-tight"
                                >
                                    {isScanning ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin text-[#D90019]" />
                                            Analyzing {STEPS[currentStep].split(' ').pop()}...
                                        </span>
                                    ) : (
                                        STEPS[currentStep]
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    <Card className="bg-white border-[#E4E3DE] p-6 md:p-8 relative overflow-hidden rounded-none shadow-none">
                        {isScanning && (
                            <motion.div
                                initial={{ top: '-100%' }}
                                animate={{ top: '200%' }}
                                transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
                                className="absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-red-500/10 to-transparent z-20 pointer-events-none"
                            />
                        )}

                        <AnimatePresence mode="wait">
                            <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className={`space-y-6 ${isScanning ? 'opacity-30 grayscale pointer-events-none' : ''}`}>

                                {/* Step 1: About You (same for all) */}
                                {currentStep === 0 && (
                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Full Name</Label>
                                                <Input value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="Jane Smith" className="bg-white border-[#E4E3DE]" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Company / Brand Name</Label>
                                                <Input value={formData.companyName} onChange={(e) => updateField("companyName", e.target.value)} placeholder="Your Brand" className="bg-white border-[#E4E3DE]" />
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Email Address</Label>
                                                <Input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@example.com" className="bg-white border-[#E4E3DE]" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Phone Number</Label>
                                                <Input type="tel" value={formData.phoneNumber} onChange={(e) => updateField("phoneNumber", e.target.value)} placeholder="+1 (555) 000-0000" className="bg-white border-[#E4E3DE]" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Website URL</Label>
                                            <Input value={formData.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} placeholder="https://..." className="bg-white border-[#E4E3DE]" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What type of business do you run?</Label>
                                            <Select value={formData.businessType} onValueChange={(val: string) => updateField("businessType", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5">Online Business</SelectLabel>
                                                        <SelectItem value="saas">SaaS / Software</SelectItem>
                                                        <SelectItem value="course-creators">Course Creator</SelectItem>
                                                        <SelectItem value="coaching">Coaching / Consulting</SelectItem>
                                                        <SelectItem value="membership">Membership / Community</SelectItem>
                                                        <SelectItem value="digital-products">Digital Products</SelectItem>
                                                        <SelectItem value="newsletter">Newsletter / Media</SelectItem>
                                                        <SelectItem value="cohort">Cohort-Based Program</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5 font-semibold">Trades & Services</SelectLabel>
                                                        <SelectItem value="home-services">General Home Services</SelectItem>
                                                        <SelectItem value="roofing">Roofing Companies</SelectItem>
                                                        <SelectItem value="storm-restoration">Storm Restoration</SelectItem>
                                                        <SelectItem value="solar-installers">Solar & Renewables</SelectItem>
                                                        <SelectItem value="pool-construction">Pool Construction</SelectItem>
                                                        <SelectItem value="custom-home-builders">Custom Home Builders</SelectItem>
                                                        <SelectItem value="commercial-cleaning">Commercial Cleaning</SelectItem>
                                                        <SelectItem value="commercial-home-services">Commercial Facility Services</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5 font-semibold">Professional Services</SelectLabel>
                                                        <SelectItem value="agencies">Marketing / Creative Agencies</SelectItem>
                                                        <SelectItem value="legal-finance">Legal & Accounting</SelectItem>
                                                        <SelectItem value="financial-advisors">Financial Advisors</SelectItem>
                                                        <SelectItem value="mortgage-brokers">Mortgage Brokers</SelectItem>
                                                        <SelectItem value="real-estate">Real Estate (General)</SelectItem>
                                                        <SelectItem value="luxury-real-estate">Luxury Real Estate</SelectItem>
                                                        <SelectItem value="staffing-agencies">Staffing & Recruiting</SelectItem>
                                                        <SelectItem value="private-equity">Private Equity / M&A</SelectItem>
                                                        <SelectItem value="franchise-owners">Franchise Groups</SelectItem>
                                                        <SelectItem value="personal-concierge">Personal Concierge / HNW</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5 font-semibold">Medical & Wellness</SelectLabel>
                                                        <SelectItem value="healthcare">Healthcare / Dental</SelectItem>
                                                        <SelectItem value="med-spas">Med Spas & Aesthetics</SelectItem>
                                                        <SelectItem value="plastic-surgery">Plastic Surgery Clinics</SelectItem>
                                                        <SelectItem value="gyms-fitness">Gyms & Fitness Studios</SelectItem>
                                                        <SelectItem value="senior-living">Senior Living Facilities</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5 font-semibold">Industrial & Special</SelectLabel>
                                                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                                        <SelectItem value="logistics-freight">Logistics & Freight</SelectItem>
                                                        <SelectItem value="agricultural">Agricultural / Farming</SelectItem>
                                                        <SelectItem value="dealerships">Dealerships (Auto, Boat, RV)</SelectItem>
                                                        <SelectItem value="hospitality">Restaurant / Hospitality</SelectItem>
                                                        <SelectItem value="yacht-charters">Yacht Charter / Marine</SelectItem>
                                                        <SelectItem value="venues-events">Venues & Events</SelectItem>
                                                    </SelectGroup>
                                                    <SelectGroup>
                                                        <SelectLabel className="text-xs text-muted-foreground uppercase tracking-wider px-2 py-1.5 font-semibold">Other</SelectLabel>
                                                        <SelectItem value="other">Other / Not Listed</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        {formData.businessType === "other" && (
                                            <div className="space-y-2">
                                                <Label>Describe your business</Label>
                                                <Input value={formData.businessTypeOther} onChange={(e) => updateField("businessTypeOther", e.target.value)} placeholder="e.g. Agency, Service business..." className="bg-white border-[#E4E3DE]" />
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Step 2: Product / Services (industry-aware) */}
                                {currentStep === 1 && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>{config.step2.productDescription.label}</Label>
                                            <Textarea value={formData.productDescription} onChange={(e) => updateField("productDescription", e.target.value)}
                                                className="bg-white border-[#E4E3DE] h-20" placeholder={config.step2.productDescription.placeholder} />
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>{config.step2.productPricePoint.label}</Label>
                                                <Select value={formData.productPricePoint} onValueChange={(val: string) => updateField("productPricePoint", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step2.productPricePoint.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{config.step2.numberOfProducts.label}</Label>
                                                <Select value={formData.numberOfProducts} onValueChange={(val: string) => updateField("numberOfProducts", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step2.numberOfProducts.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>{config.step2.platform.label}</Label>
                                                <Select value={formData.platform} onValueChange={(val: string) => updateField("platform", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step2.platform.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{config.step2.deliveryMethod.label}</Label>
                                                <Select value={formData.deliveryMethod} onValueChange={(val: string) => updateField("deliveryMethod", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step2.deliveryMethod.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Revenue & Growth (industry-aware bottleneck) */}
                                {currentStep === 2 && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>Current Annual Revenue</Label>
                                            <Select value={formData.currentRevenue} onValueChange={(val: string) => updateField("currentRevenue", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="pre-revenue">Pre-revenue / Just starting</SelectItem>
                                                    <SelectItem value="under-100k">Under $100K</SelectItem>
                                                    <SelectItem value="100k-250k">$100K - $250K</SelectItem>
                                                    <SelectItem value="250k-500k">$250K - $500K</SelectItem>
                                                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                                                    <SelectItem value="1m-3m">$1M - $3M</SelectItem>
                                                    <SelectItem value="3m+">$3M+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Revenue Trend (Last 3 Months)</Label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {["Growing", "Flat", "Declining"].map(opt => (
                                                    <Button key={opt} type="button" variant={formData.revenueTrend === opt ? "default" : "outline"}
                                                        onClick={() => updateField("revenueTrend", opt)}
                                                        className={formData.revenueTrend === opt ? "bg-[#D90019] hover:opacity-80" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                        {opt}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Profit Margin Estimate</Label>
                                            <Select value={formData.profitMargin} onValueChange={(val: string) => updateField("profitMargin", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="negative">Negative (losing money)</SelectItem>
                                                    <SelectItem value="under-20">Under 20%</SelectItem>
                                                    <SelectItem value="20-40">20 - 40%</SelectItem>
                                                    <SelectItem value="40-60">40 - 60%</SelectItem>
                                                    <SelectItem value="60+">60%+ (high margin)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>12-Month Goal</Label>
                                            <Select value={formData.revenueGoal} onValueChange={(val: string) => updateField("revenueGoal", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="double">Double revenue</SelectItem>
                                                    <SelectItem value="scale">Scale to 7 figures</SelectItem>
                                                    <SelectItem value="freedom">More time freedom (same revenue)</SelectItem>
                                                    <SelectItem value="systemize">Systemize so I can step back</SelectItem>
                                                    <SelectItem value="exit">Build to sell / exit</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Biggest Bottleneck Right Now</Label>
                                            <Select value={formData.bottleneck} onValueChange={(val: string) => updateField("bottleneck", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    {config.step3.bottleneck.options?.map(opt => (
                                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Team Size</Label>
                                            <Select value={formData.teamSize} onValueChange={(val: string) => updateField("teamSize", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="solo">Just me</SelectItem>
                                                    <SelectItem value="2-3">2 - 3 people</SelectItem>
                                                    <SelectItem value="4-10">4 - 10 people</SelectItem>
                                                    <SelectItem value="10+">10+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Monthly Ad / Marketing Spend</Label>
                                            <Select value={formData.monthlyAdSpend} onValueChange={(val: string) => updateField("monthlyAdSpend", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">None / $0</SelectItem>
                                                    <SelectItem value="under-1k">Under $1K/month</SelectItem>
                                                    <SelectItem value="1k-5k">$1K – $5K/month</SelectItem>
                                                    <SelectItem value="5k-15k">$5K – $15K/month</SelectItem>
                                                    <SelectItem value="15k+">$15K+/month</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What % of your revenue is recurring / subscription-based?</Label>
                                            <Select value={formData.recurringRevenuePct} onValueChange={(val: string) => updateField("recurringRevenuePct", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">None — all one-time</SelectItem>
                                                    <SelectItem value="under-20">Under 20%</SelectItem>
                                                    <SelectItem value="20-50">20 – 50%</SelectItem>
                                                    <SelectItem value="50-80">50 – 80%</SelectItem>
                                                    <SelectItem value="80+">80%+ (mostly recurring)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>How do you currently track revenue and pipeline?</Label>
                                            <Select value={formData.revenueTracking} onValueChange={(val: string) => updateField("revenueTracking", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="crm-full">CRM with full pipeline tracking</SelectItem>
                                                    <SelectItem value="accounting-only">Accounting software only (QuickBooks, Xero)</SelectItem>
                                                    <SelectItem value="spreadsheet">Spreadsheet / Google Sheets</SelectItem>
                                                    <SelectItem value="nothing">Nothing formal — I just know</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What does your sales process look like?</Label>
                                            <Select value={formData.salesProcess} onValueChange={(val: string) => updateField("salesProcess", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="structured">Structured — defined stages, CRM, follow-up cadence</SelectItem>
                                                    <SelectItem value="semi">Semi-structured — I have a process but it's inconsistent</SelectItem>
                                                    <SelectItem value="adhoc">Ad-hoc — every deal is different</SelectItem>
                                                    <SelectItem value="referral-only">Mostly referrals — no real sales process</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Do you have a referral or repeat-customer system?</Label>
                                            <Select value={formData.referralSystem} onValueChange={(val: string) => updateField("referralSystem", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="formal">Yes — formal referral program with incentives</SelectItem>
                                                    <SelectItem value="informal">Informal — I ask sometimes, no system</SelectItem>
                                                    <SelectItem value="passive">Passive — referrals happen but I don't drive them</SelectItem>
                                                    <SelectItem value="none">No referral system at all</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 4: Audience / Customers (industry-aware) */}
                                {currentStep === 3 && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>{config.step4.listSize.label}</Label>
                                            <Select value={formData.listSize} onValueChange={(val: string) => updateField("listSize", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    {config.step4.listSize.options?.map(opt => (
                                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{config.step4.trafficSource.label}</Label>
                                            <Select value={formData.trafficSource} onValueChange={(val: string) => updateField("trafficSource", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    {config.step4.trafficSource.options?.map(opt => (
                                                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>{config.step4.conversionRate.label}</Label>
                                                <Select value={formData.conversionRate} onValueChange={(val: string) => updateField("conversionRate", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step4.conversionRate.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{config.step4.launchesPerYear.label}</Label>
                                                <Select value={formData.launchesPerYear} onValueChange={(val: string) => updateField("launchesPerYear", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step4.launchesPerYear.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>{config.step4.churnRate.label}</Label>
                                                <Select value={formData.churnRate} onValueChange={(val: string) => updateField("churnRate", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step4.churnRate.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{config.step4.contentCreationHours.label}</Label>
                                                <Select value={formData.contentCreationHours} onValueChange={(val: string) => updateField("contentCreationHours", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        {config.step4.contentCreationHours.options?.map(opt => (
                                                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>How do you currently manage new leads?</Label>
                                            <Select value={formData.leadManagement} onValueChange={(val: string) => updateField("leadManagement", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="crm-automated">CRM with automated follow-up sequences</SelectItem>
                                                    <SelectItem value="crm-manual">CRM but follow-up is manual</SelectItem>
                                                    <SelectItem value="spreadsheet">Spreadsheet or shared doc</SelectItem>
                                                    <SelectItem value="email-inbox">Email inbox / phone — no real system</SelectItem>
                                                    <SelectItem value="nothing">Nothing — leads come in and I respond when I can</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>How fast do you typically respond to a new inquiry?</Label>
                                            <Select value={formData.leadResponseTime} onValueChange={(val: string) => updateField("leadResponseTime", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="instant">Instant / automated response</SelectItem>
                                                    <SelectItem value="under-1hr">Within 1 hour</SelectItem>
                                                    <SelectItem value="same-day">Same day</SelectItem>
                                                    <SelectItem value="1-3-days">1 – 3 days</SelectItem>
                                                    <SelectItem value="whenever">Whenever I get to it</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>How do you communicate with existing customers?</Label>
                                            <Select value={formData.customerCommunication} onValueChange={(val: string) => updateField("customerCommunication", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="regular-automated">Regular — automated email sequences + newsletters</SelectItem>
                                                    <SelectItem value="regular-manual">Regular — manually send updates/newsletters</SelectItem>
                                                    <SelectItem value="occasional">Occasional — when I have something to share</SelectItem>
                                                    <SelectItem value="reactive">Reactive only — I respond when they reach out</SelectItem>
                                                    <SelectItem value="rarely">Rarely / never proactively reach out</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                )}

                                {/* Step 5: Time & Operations (industry-aware labels) */}
                                {currentStep === 4 && (
                                    <div className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Total Hours Worked Per Week</Label>
                                                <Select value={formData.hoursPerWeek} onValueChange={(val: string) => updateField("hoursPerWeek", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="under-20">Under 20</SelectItem>
                                                        <SelectItem value="20-40">20 - 40 hours</SelectItem>
                                                        <SelectItem value="40-60">40 - 60 hours</SelectItem>
                                                        <SelectItem value="60+">60+ hours (burnout zone)</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>{config.step5.supportHoursPerWeek.label}</Label>
                                                <Select value={formData.supportHoursPerWeek} onValueChange={(val: string) => updateField("supportHoursPerWeek", val)}>
                                                    <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="0-2">0 - 2 hours</SelectItem>
                                                        <SelectItem value="2-5">2 - 5 hours</SelectItem>
                                                        <SelectItem value="5-10">5 - 10 hours</SelectItem>
                                                        <SelectItem value="10+">10+ hours</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>% Time on High-Value Work (creating, selling, strategy)</Label>
                                            <Select value={formData.highValueWork} onValueChange={(val: string) => updateField("highValueWork", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="under-20">Under 20% (stuck in the weeds)</SelectItem>
                                                    <SelectItem value="20-40">20 - 40%</SelectItem>
                                                    <SelectItem value="40-60">40 - 60%</SelectItem>
                                                    <SelectItem value="60+">60%+ (mostly strategic)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>{config.step5.onboardingAutomated.label}</Label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {["Yes", "Partially", "No"].map(opt => (
                                                    <Button key={opt} type="button" variant={formData.onboardingAutomated === opt ? "default" : "outline"}
                                                        onClick={() => updateField("onboardingAutomated", opt)}
                                                        className={formData.onboardingAutomated === opt ? "bg-[#D90019] hover:opacity-80" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                        {opt}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Could you take 2 weeks off without revenue dipping?</Label>
                                            <div className="grid grid-cols-3 gap-3">
                                                {["Yes", "Maybe", "No"].map(opt => (
                                                    <Button key={opt} type="button" variant={formData.twoWeeksOff === opt ? "default" : "outline"}
                                                        onClick={() => updateField("twoWeeksOff", opt)}
                                                        className={formData.twoWeeksOff === opt ? "bg-[#D90019] hover:opacity-80" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                        {opt}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <Label>Pain Level (1-10) -- How urgent is fixing this?</Label>
                                            <Slider value={formData.painLevel} onValueChange={(val: number[]) => updateField("painLevel", val)} min={1} max={10} step={1} className="py-2" />
                                            <div className="flex justify-between text-xs text-slate-400">
                                                <span>1 (Fine)</span><span>5 (Annoying)</span><span>10 (Crisis)</span>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What keeps you up at night about your business?</Label>
                                            <Textarea value={formData.keepsUpAtNight} onChange={(e) => updateField("keepsUpAtNight", e.target.value)}
                                                className="bg-white border-[#E4E3DE] h-24" placeholder="Be specific..." />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What tasks require YOUR personal involvement every day? (that shouldn't)</Label>
                                            <Textarea value={formData.dailyInvolvement} onChange={(e) => updateField("dailyInvolvement", e.target.value)}
                                                className="bg-white border-[#E4E3DE] h-20" placeholder="e.g. Answering DMs, sending invoices, scheduling calls, handling complaints..." />
                                        </div>
                                    </div>
                                )}

                                {/* Step 6: Tech & Automation (industry-aware tools & problems) */}
                                {currentStep === 5 && (
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <Label>Which tools do you currently use?</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {config.step6.tools.map(tool => (
                                                    <div key={tool} className="flex items-center space-x-2">
                                                        <Checkbox id={tool} checked={formData.tools.includes(tool)} onCheckedChange={() => toggleArrayItem("tools", tool)} className="border-slate-600 data-[state=checked]:bg-red-600" />
                                                        <label htmlFor={tool} className="text-sm text-slate-300 cursor-pointer">{tool}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>% of Your Business That&apos;s Automated</Label>
                                            <Select value={formData.percentAutomated} onValueChange={(val: string) => updateField("percentAutomated", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="none">Almost nothing (all manual)</SelectItem>
                                                    <SelectItem value="under-30">Under 30%</SelectItem>
                                                    <SelectItem value="30-60">30 - 60%</SelectItem>
                                                    <SelectItem value="60+">60%+ (highly automated)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Biggest Time-Waster in Your Business</Label>
                                            <Input value={formData.biggestTimeWaste} onChange={(e) => updateField("biggestTimeWaste", e.target.value)}
                                                placeholder={config.step6.biggestTimeWaste.placeholder} className="bg-white border-[#E4E3DE]" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Do you have a CRM?</Label>
                                            <Select value={formData.hasCrm} onValueChange={(val: string) => updateField("hasCrm", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="yes-active">Yes — actively using it (HubSpot, GHL, Salesforce, etc.)</SelectItem>
                                                    <SelectItem value="yes-barely">Yes — set up but barely used</SelectItem>
                                                    <SelectItem value="no-spreadsheet">No CRM — using spreadsheets</SelectItem>
                                                    <SelectItem value="no-nothing">No CRM — nothing formal</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Do you have any automated email sequences running right now?</Label>
                                            <Select value={formData.emailSequences} onValueChange={(val: string) => updateField("emailSequences", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="yes-multiple">Yes — multiple sequences (welcome, nurture, re-engagement)</SelectItem>
                                                    <SelectItem value="yes-one">Yes — one basic welcome sequence</SelectItem>
                                                    <SelectItem value="no-planned">No — but it's on my list</SelectItem>
                                                    <SelectItem value="no-nothing">No — email is all manual</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What happens when a new lead comes in — what's your follow-up process?</Label>
                                            <Select value={formData.followUpProcess} onValueChange={(val: string) => updateField("followUpProcess", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="automated-full">Fully automated — CRM triggers sequence immediately</SelectItem>
                                                    <SelectItem value="automated-partial">Partial — auto initial response, then manual follow-up</SelectItem>
                                                    <SelectItem value="manual-consistent">Manual but consistent — I have a process I follow</SelectItem>
                                                    <SelectItem value="manual-inconsistent">Manual and inconsistent — depends on how busy I am</SelectItem>
                                                    <SelectItem value="none">No follow-up process — they either convert or they don't</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Have you tried to solve these problems before?</Label>
                                            <Select value={formData.triedBefore} onValueChange={(val: string) => updateField("triedBefore", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="no">No, haven't tried yet</SelectItem>
                                                    <SelectItem value="diy">Yes — tried DIY (Zapier, YouTube, tools)</SelectItem>
                                                    <SelectItem value="hired-freelancer">Yes — hired a freelancer, didn't stick</SelectItem>
                                                    <SelectItem value="hired-agency">Yes — hired an agency, wasn't the right fit</SelectItem>
                                                    <SelectItem value="internal">Yes — internal team tried, fell short</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>#1 Goal for Next 12 Months</Label>
                                            <Input value={formData.next12MonthsGoal} onChange={(e) => updateField("next12MonthsGoal", e.target.value)}
                                                placeholder={config.step6.next12MonthsGoal.placeholder} className="bg-white border-[#E4E3DE]" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label>What problems are you experiencing?</Label>
                                            <div className="grid grid-cols-2 gap-2">
                                                {config.step6.problems.map(prob => (
                                                    <div key={prob} className="flex items-center space-x-2">
                                                        <Checkbox id={prob} checked={formData.problems.includes(prob)} onCheckedChange={() => toggleArrayItem("problems", prob)} className="border-slate-600 data-[state=checked]:bg-red-600" />
                                                        <label htmlFor={prob} className="text-sm text-slate-300 cursor-pointer">{prob}</label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 7: Let's Go (same for all) */}
                                {currentStep === 6 && (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>How excited are you to fix this? (1-10)</Label>
                                            <Select value={formData.excitementLevel} onValueChange={(val: string) => updateField("excitementLevel", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="10">10 - Ready to go NOW</SelectItem>
                                                    <SelectItem value="8-9">8-9 - Very interested</SelectItem>
                                                    <SelectItem value="5-7">5-7 - Exploring</SelectItem>
                                                    <SelectItem value="under-5">Under 5 - Just looking</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>When do you want to start?</Label>
                                            <Select value={formData.startDate} onValueChange={(val: string) => updateField("startDate", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="now">Right now</SelectItem>
                                                    <SelectItem value="this-month">This month</SelectItem>
                                                    <SelectItem value="next-quarter">Next quarter</SelectItem>
                                                    <SelectItem value="exploring">Just exploring</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What&apos;s your budget to adopt AI systems?</Label>
                                            <Select value={formData.growthBudget} onValueChange={(val: string) => updateField("growthBudget", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="starter">Under $5K</SelectItem>
                                                    <SelectItem value="moderate">$5K - $10K</SelectItem>
                                                    <SelectItem value="growth">$10K - $25K</SelectItem>
                                                    <SelectItem value="aggressive">$25K - $50K</SelectItem>
                                                    <SelectItem value="enterprise">$50K+</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Are you the decision maker?</Label>
                                            <Select value={formData.decisionMaker} onValueChange={(val: string) => updateField("decisionMaker", val)}>
                                                <SelectTrigger className="bg-white border-[#E4E3DE]"><SelectValue placeholder="Select..." /></SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="me">Yes, just me</SelectItem>
                                                    <SelectItem value="partner">Me + business partner</SelectItem>
                                                    <SelectItem value="team">Team decision</SelectItem>
                                                    <SelectItem value="other">Researching for someone else</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>What does success look like for you in 6 months?</Label>
                                            <Textarea value={formData.successVision} onChange={(e) => updateField("successVision", e.target.value)}
                                                className="bg-white border-[#E4E3DE] h-20" placeholder="e.g. Revenue doubled, I'm working 30 hours a week, leads are handled automatically..." />
                                        </div>
                                        <div className="pt-4 border-t border-slate-800">
                                            <div className="flex items-start space-x-2">
                                                <Checkbox id="optin" checked={formData.newsletterOptIn} onCheckedChange={(c: boolean) => updateField("newsletterOptIn", c === true)} className="mt-1 border-slate-600 data-[state=checked]:bg-red-600" />
                                                <label htmlFor="optin" className="text-sm text-slate-400">
                                                    I agree to receive my detailed audit results, occasional growth insights, and newsletter updates via email.
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-between mt-8 pt-8 border-t border-slate-800">
                            <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0 || isScanning} className="text-[#888] hover:text-black hover:bg-[#F2F1ED]">
                                <ArrowLeft className="w-4 h-4 mr-2" /> Back
                            </Button>
                            {currentStep === STEPS.length - 1 ? (
                                <Button onClick={handleSubmit} disabled={isSubmitting || !formData.newsletterOptIn} className="bg-red-600 hover:bg-red-700 text-white px-8">
                                    {isSubmitting ? "Submitting..." : (<>Submit Audit <Send className="w-4 h-4 ml-2" /></>)}
                                </Button>
                            ) : (
                                <Button onClick={handleNext} disabled={isScanning} className="bg-black text-white hover:opacity-80">
                                    {isScanning ? "Processing..." : (<>Next Step <ArrowRight className="w-4 h-4 ml-2" /></>)}
                                </Button>
                            )}
                        </div>
                    </Card>
                </div>

                {/* Sidebar Space */}
                <div className="lg:col-span-4 space-y-6">
                    <ProposalVisualizer currentStep={currentStep} totalSteps={STEPS.length} formData={formData} />

                    <AnimatePresence>
                        {(aiInsights.length > 0 || liveInsights.length > 0) && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-2 px-2">
                                    <Sparkles className="w-3 h-3 text-red-400" />
                                    <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                                        {aiInsights.length > 0 ? 'AI Research' : 'AI Discoveries'}
                                    </h4>
                                </div>
                                {/* Show AI insights first (from real research), then fallback local insights */}
                                {aiInsights.slice(0, 3).map((insight, idx) => (
                                    <motion.div
                                        key={`ai-${idx}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.15 }}
                                        className={`p-4 rounded-xl border ${insight.type === 'warning' ? 'bg-red-700/10 border-red-700/20 text-red-300' :
                                            insight.type === 'opportunity' ? 'bg-red-400/10 border-red-400/20 text-red-200' :
                                                'bg-red-500/10 border-red-500/20 text-red-200'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">{insight.icon || '🔍'}</span>
                                            <p className="text-[11px] font-bold leading-relaxed uppercase tracking-tight">
                                                {insight.message}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                                {/* Show local fallback insights if no AI insights yet */}
                                {aiInsights.length === 0 && liveInsights.slice(0, 3).map((insight, idx) => (
                                    <motion.div
                                        key={`local-${idx}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`p-4 rounded-xl border ${insight.type === 'warning' ? 'bg-red-700/10 border-red-700/20 text-red-300' :
                                            insight.type === 'opportunity' ? 'bg-red-400/10 border-red-400/20 text-red-200' :
                                                'bg-red-500/10 border-red-500/20 text-red-200'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-lg">{insight.icon}</span>
                                            <p className="text-[11px] font-bold leading-relaxed uppercase tracking-tight">
                                                {insight.message}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Exit-Intent Modal */}
            <AnimatePresence>
                {showExitCapture && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <Card className="bg-white border-[#E4E3DE] p-8 max-w-md mx-4 relative">
                                <button onClick={() => setShowExitCapture(false)} className="absolute top-4 right-4 text-slate-400 hover:text-black">
                                    <X className="w-5 h-5" />
                                </button>
                                {exitEmailSent ? (
                                    <div className="text-center py-4">
                                        <p className="text-black font-semibold text-lg">Check your inbox!</p>
                                        <p className="text-slate-500 text-sm mt-1">We sent a link to finish your audit.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-black text-xl font-bold mb-2">Don&apos;t lose your progress!</h3>
                                        <p className="text-slate-500 text-sm mb-6">
                                            We can send you a link to finish your audit later, or book a call and we&apos;ll walk you through it.
                                        </p>
                                        <div className="space-y-3">
                                            <Button onClick={handleSaveProgress} className="w-full bg-red-600 hover:bg-red-700 text-white">
                                                Email Me a Link
                                            </Button>
                                            <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                                                <a href="https://cal.com/elianatech/30min" target="_blank" rel="noopener noreferrer">
                                                    Book a Call Instead
                                                </a>
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </Card>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
