"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { AuditResults } from "@/components/audit-results"

const STEPS = [
    "About You",
    "Revenue & Growth",
    "Your Team",
    "Sales & Leads",
    "Time & Operations",
    "Reputation & Retention",
    "Tech & Tools",
    "Let's Go",
]

const ENCOURAGEMENTS = [
    "Great start! Let's look at your numbers.",
    "Almost a third done! Your team insights help us personalize.",
    "Halfway point coming up! Your sales data unlocks big insights.",
    "Over halfway! Let's see where your time goes.",
    "Almost there! A few more questions about your reputation.",
    "Last two steps! Tell us about your tech stack.",
    "Final step! Just a few more clicks.",
]

const STORAGE_KEY = "elianatech-audit-progress"

interface FormData {
    fullName: string;
    companyName: string;
    email: string;
    phoneNumber: string;
    websiteUrl: string;
    industryCategory: string;
    specificIndustry: string;
    currentRevenue: string;
    revenueTrend: string;
    profitMargin: string;
    cashFlow: string;
    teamSize: string;
    teamPerformance: string;
    systemsDocumented: string;
    leadSource: string;
    conversionRate: string;
    dealSize: string;
    salesCycle: string;
    revenueGoal: string;
    bottleneck: string;
    timeInBusiness: string;
    nicheIndustry: string;
    hvacLeadsPerMonth: string;
    hvacCloseRate: string;
    hvacAvgTicket: string;
    hvacMaintenance: string;
    retentionRate: string;
    customerValue: string;
    hoursPerWeek: string;
    highValueWork: string;
    twoWeeksOff: string;
    missedCalls: string;
    systematicFollowUp: string;
    fixTimeline: string;
    painLevel: number[];
    keepsUpAtNight: string;
    whoRunsSystems: string;
    techComfort: number[];
    googleReviews: string;
    googleRating: string;
    askReviewsSystem: string;
    respondReviews: string;
    repeatCustomers: string;
    recurringRevenue: string;
    winBackSystem: string;
    referralSystem: string;
    tools: string[];
    percentAutomated: string;
    dataOrganization: string;
    next12MonthsGoal: string;
    holdingBack: string;
    problems: string[];
    excitementLevel: string;
    startDate: string;
    growthBudget: string;
    decisionMaker: string;
    newsletterOptIn: boolean;
}

const DEFAULT_FORM_DATA: FormData = {
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    websiteUrl: "",
    industryCategory: "",
    specificIndustry: "",
    currentRevenue: "",
    revenueTrend: "",
    profitMargin: "",
    cashFlow: "",
    teamSize: "",
    teamPerformance: "",
    systemsDocumented: "",
    leadSource: "",
    conversionRate: "",
    dealSize: "",
    salesCycle: "",
    revenueGoal: "",
    bottleneck: "",
    timeInBusiness: "",
    nicheIndustry: "",
    hvacLeadsPerMonth: "",
    hvacCloseRate: "",
    hvacAvgTicket: "",
    hvacMaintenance: "",
    retentionRate: "",
    customerValue: "",
    hoursPerWeek: "",
    highValueWork: "",
    twoWeeksOff: "",
    missedCalls: "",
    systematicFollowUp: "",
    fixTimeline: "",
    painLevel: [5],
    keepsUpAtNight: "",
    whoRunsSystems: "",
    techComfort: [5],
    googleReviews: "",
    googleRating: "",
    askReviewsSystem: "",
    respondReviews: "",
    repeatCustomers: "",
    recurringRevenue: "",
    winBackSystem: "",
    referralSystem: "",
    tools: [],
    percentAutomated: "",
    dataOrganization: "",
    next12MonthsGoal: "",
    holdingBack: "",
    problems: [],
    excitementLevel: "",
    startDate: "",
    growthBudget: "",
    decisionMaker: "",
    newsletterOptIn: false,
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

    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA)

    // Restore progress from localStorage on mount
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

    // Save progress to localStorage on step/field change
    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ formData, currentStep }))
        } catch { }
    }, [formData, currentStep])

    // Exit-intent detection
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (e.clientY <= 0 && !showExitCapture && !isSuccess && currentStep > 0 && formData.email) {
                setShowExitCapture(true)
            }
        }
        document.addEventListener('mouseout', handler)
        return () => document.removeEventListener('mouseout', handler)
    }, [showExitCapture, isSuccess, currentStep, formData.email])

    // Helper to update fields
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
            // Show encouragement
            if (currentStep < ENCOURAGEMENTS.length) {
                setEncouragement(ENCOURAGEMENTS[currentStep])
                setTimeout(() => setEncouragement(""), 3000)
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setCurrentStep((prev) => prev + 1)
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
        try {
            const response = await fetch("/api/audit/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok && data.success) {
                setIsSuccess(true)
                setShowResults(true)
                try { localStorage.removeItem(STORAGE_KEY) } catch { }
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                console.warn("API submission failed, showing results anyway:", data)
                setIsSuccess(true)
                setShowResults(true)
                try { localStorage.removeItem(STORAGE_KEY) } catch { }
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } catch (error) {
            console.error("Submission error, showing results anyway:", error)
            setIsSuccess(true)
            setShowResults(true)
            try { localStorage.removeItem(STORAGE_KEY) } catch { }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } finally {
            setIsSubmitting(false)
        }
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
        return <AuditResults formData={formData} auditScore={75} />
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Restored Progress Banner */}
            <AnimatePresence>
                {restoredProgress && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-4 p-3 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm text-center"
                    >
                        👋 Welcome back! We saved your progress.
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Encouragement Message */}
            <AnimatePresence>
                {encouragement && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="mb-2 text-center text-sm text-purple-300 font-medium"
                    >
                        ✨ {encouragement}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Step {currentStep + 1} of {STEPS.length}</span>
                    <span>{Math.round(((currentStep + 1) / STEPS.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <div className="mt-2 text-center text-white font-medium text-lg">
                    {STEPS[currentStep]}
                </div>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-md p-6 md:p-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Step 1: About You */}
                        {currentStep === 0 && (
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Full Name</Label>
                                        <Input value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="John Doe" className="bg-slate-800 border-slate-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Company Name</Label>
                                        <Input value={formData.companyName} onChange={(e) => updateField("companyName", e.target.value)} placeholder="Acme Inc." className="bg-slate-800 border-slate-700" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Email Address</Label>
                                        <Input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="john@example.com" className="bg-slate-800 border-slate-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Phone Number</Label>
                                        <Input type="tel" value={formData.phoneNumber} onChange={(e) => updateField("phoneNumber", e.target.value)} placeholder="+1 (555) 000-0000" className="bg-slate-800 border-slate-700" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Website URL</Label>
                                    <Input value={formData.websiteUrl} onChange={(e) => updateField("websiteUrl", e.target.value)} placeholder="https://..." className="bg-slate-800 border-slate-700" />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Industry Category</Label>
                                        <Select value={formData.industryCategory} onValueChange={(val: string) => updateField("industryCategory", val)}>
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="service">Local Service (HVAC, Plumbing, etc)</SelectItem>
                                                <SelectItem value="agency">Agency / B2B Service</SelectItem>
                                                <SelectItem value="health">Healthcare / Medical</SelectItem>
                                                <SelectItem value="retail">Retail / E-commerce</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Specific Industry</Label>
                                        <Input value={formData.specificIndustry} onChange={(e) => updateField("specificIndustry", e.target.value)} placeholder="e.g. Solar, Dentist, Gym" className="bg-slate-800 border-slate-700" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Revenue & Growth */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Current Monthly Revenue Stage</Label>
                                    <Select value={formData.currentRevenue} onValueChange={(val: string) => updateField("currentRevenue", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select Stage" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="early">Early Stage (Foundation)</SelectItem>
                                            <SelectItem value="growth">Growth Stage (Scaling)</SelectItem>
                                            <SelectItem value="established">Established Business</SelectItem>
                                            <SelectItem value="leader">Market Leader</SelectItem>
                                            <SelectItem value="enterprise">Enterprise / Scaling Fast</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Revenue Trend (Last 3 Months)</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Growing", "Flat", "Declining"].map(opt => (
                                            <Button key={opt} variant={formData.revenueTrend === opt ? "default" : "outline"} onClick={() => updateField("revenueTrend", opt)} className={formData.revenueTrend === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Profit Margin Estimate</Label>
                                    <Select value={formData.profitMargin} onValueChange={(val: string) => updateField("profitMargin", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="negative">Negative (Losing Money)</SelectItem>
                                            <SelectItem value="<10%">Less than 10%</SelectItem>
                                            <SelectItem value="10-20%">10-20%</SelectItem>
                                            <SelectItem value="20-50%">20-50%</SelectItem>
                                            <SelectItem value="50%+">50%+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>12-Month Expansion Goal</Label>
                                    <Select value={formData.revenueGoal} onValueChange={(val: string) => updateField("revenueGoal", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select Goal..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="double">Double Current Output</SelectItem>
                                            <SelectItem value="scale">Significant Market Expansion</SelectItem>
                                            <SelectItem value="dominate">Become Market Leader</SelectItem>
                                            <SelectItem value="legacy">Build Legacy / Exit-Ready State</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Biggest Bottleneck</Label>
                                    <Select value={formData.bottleneck} onValueChange={(val: string) => updateField("bottleneck", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="leads">Lead Volume (Not enough leads)</SelectItem>
                                            <SelectItem value="sales">Sales Process (Can't close leads)</SelectItem>
                                            <SelectItem value="delivery">Delivery/Ops (Too busy doing the work)</SelectItem>
                                            <SelectItem value="team">Team/Hiring (Need good people)</SelectItem>
                                            <SelectItem value="strategy">Strategy (Don't know what to do next)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Your Team */}
                        {currentStep === 2 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Team Size</Label>
                                    <Select value={formData.teamSize} onValueChange={(val: string) => updateField("teamSize", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Just Me (Solopreneur)</SelectItem>
                                            <SelectItem value="2-5">2 - 5 Employees</SelectItem>
                                            <SelectItem value="5-10">5 - 10 Employees</SelectItem>
                                            <SelectItem value="10+">10+ Employees</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>How would you rate your team's performance?</Label>
                                    <Select value={formData.teamPerformance} onValueChange={(val: string) => updateField("teamPerformance", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="excellent">Excellent - They handle everything</SelectItem>
                                            <SelectItem value="good">Good - But need direction</SelectItem>
                                            <SelectItem value="inconsistent">Inconsistent - Hot and cold</SelectItem>
                                            <SelectItem value="struggling">Struggling - Frequent errors</SelectItem>
                                            <SelectItem value="na">N/A - No team yet</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Are your systems and processes documented?</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Yes", "Partially", "No"].map(opt => (
                                            <Button key={opt} type="button" variant={formData.systemsDocumented === opt ? "default" : "outline"} onClick={() => updateField("systemsDocumented", opt)} className={formData.systemsDocumented === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Who would run these new AI/Automation systems?</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {["Me", "My Team", "I need to hire"].map(opt => (
                                            <Button key={opt} type="button" variant={formData.whoRunsSystems === opt ? "default" : "outline"} onClick={() => updateField("whoRunsSystems", opt)} className={formData.whoRunsSystems === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Label>Tech Comfort Level (1-10)</Label>
                                    <Slider value={formData.techComfort} onValueChange={(val: number[]) => updateField("techComfort", val)} min={1} max={10} step={1} className="py-2" />
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>Low</span>
                                        <span>Medium</span>
                                        <span>High</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Sales & Leads */}
                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Primary Lead Source</Label>
                                    <Select value={formData.leadSource} onValueChange={(val: string) => updateField("leadSource", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="referrals">Referrals / Word of Mouth</SelectItem>
                                            <SelectItem value="ads">Paid Ads (FB, Google, etc.)</SelectItem>
                                            <SelectItem value="seo">Content / SEO</SelectItem>
                                            <SelectItem value="outbound">Outbound / Cold Outreach</SelectItem>
                                            <SelectItem value="none">None / Random</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Sales Conversion Rate (Leads to Customers)</Label>
                                    <Select value={formData.conversionRate} onValueChange={(val: string) => updateField("conversionRate", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<10%">Less than 10%</SelectItem>
                                            <SelectItem value="10-20%">10 - 20%</SelectItem>
                                            <SelectItem value="20-30%">20 - 30%</SelectItem>
                                            <SelectItem value="30-50%">30 - 50%</SelectItem>
                                            <SelectItem value="50%+">50%+</SelectItem>
                                            <SelectItem value="unknown">I don't know</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Average Transaction / Deal Size</Label>
                                        <Select value={formData.dealSize} onValueChange={(val: string) => updateField("dealSize", val)}>
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select Size..." /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="micro">Micro Transactions</SelectItem>
                                                <SelectItem value="small">Small (Standard Consumer)</SelectItem>
                                                <SelectItem value="medium">Medium (Premium Service)</SelectItem>
                                                <SelectItem value="high">High-Value (B2B/Contract)</SelectItem>
                                                <SelectItem value="enterprise">Enterprise / Large Scale</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Sales Cycle Length</Label>
                                        <Select value={formData.salesCycle} onValueChange={(val: string) => updateField("salesCycle", val)}>
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="<7days">Less than 7 days</SelectItem>
                                                <SelectItem value="7-30days">7 - 30 days</SelectItem>
                                                <SelectItem value="1-3months">1 - 3 months</SelectItem>
                                                <SelectItem value="3months+">3 months+</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>Missed Calls / Opportunities Per Week</Label>
                                    <Select value={formData.missedCalls} onValueChange={(val: string) => updateField("missedCalls", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0-5">0 - 5 (Not many)</SelectItem>
                                            <SelectItem value="5-10">5 - 10</SelectItem>
                                            <SelectItem value="10-30">10 - 30 (Leaking money)</SelectItem>
                                            <SelectItem value="30+">30+ (Serious problem)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Do you have a systematic follow-up process?</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Yes", "Kinda", "No"].map(opt => (
                                            <Button key={opt} type="button" variant={formData.systematicFollowUp === opt ? "default" : "outline"} onClick={() => updateField("systematicFollowUp", opt)} className={formData.systematicFollowUp === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 5: Time & Operations */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Hours Worked Per Week</Label>
                                    <Select value={formData.hoursPerWeek} onValueChange={(val: string) => updateField("hoursPerWeek", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<30">Less than 30</SelectItem>
                                            <SelectItem value="30-40">30-40 Hours</SelectItem>
                                            <SelectItem value="40-60">40-60 Hours</SelectItem>
                                            <SelectItem value="60+">60+ Hours (Burnout Territory)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>% Time on Strategic / High-Value Work</Label>
                                    <Select value={formData.highValueWork} onValueChange={(val: string) => updateField("highValueWork", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<10%">Less than 10% (Stuck in weeds)</SelectItem>
                                            <SelectItem value="10-30%">10 - 30%</SelectItem>
                                            <SelectItem value="30-70%">30 - 70%</SelectItem>
                                            <SelectItem value="70%+">70%+ (Pure Exec/Strategy)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Could you take 2 weeks off without a crisis?</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Yes", "Maybe", "No"].map(opt => (
                                            <Button key={opt} type="button" variant={formData.twoWeeksOff === opt ? "default" : "outline"} onClick={() => updateField("twoWeeksOff", opt)} className={formData.twoWeeksOff === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <Label>Pain Level (1-10) - How urgent is this?</Label>
                                    <Slider value={formData.painLevel} onValueChange={(val: number[]) => updateField("painLevel", val)} min={1} max={10} step={1} className="py-2" />
                                    <div className="flex justify-between text-xs text-slate-400">
                                        <span>1 (Fine)</span>
                                        <span>5 (Annoying)</span>
                                        <span>10 (Crisis)</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>What keeps you up at night regarding your business?</Label>
                                    <Textarea value={formData.keepsUpAtNight} onChange={(e) => updateField("keepsUpAtNight", e.target.value)} className="bg-slate-800 border-slate-700 h-24" placeholder="Be specific..." />
                                </div>
                            </div>
                        )}

                        {/* Step 6: Reputation & Retention */}
                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Google Reviews Count</Label>
                                        <Input value={formData.googleReviews} onChange={(e) => updateField("googleReviews", e.target.value)} type="number" className="bg-slate-800 border-slate-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Average Google Rating</Label>
                                        <Input value={formData.googleRating} onChange={(e) => updateField("googleRating", e.target.value)} type="number" step="0.1" className="bg-slate-800 border-slate-700" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>System to ask for reviews?</Label>
                                    <Select value={formData.askReviewsSystem} onValueChange={(val: string) => updateField("askReviewsSystem", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="automated">Automated (Software)</SelectItem>
                                            <SelectItem value="manual">Manual (We ask in person)</SelectItem>
                                            <SelectItem value="none">None / Random</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Do you respond to reviews?</Label>
                                    <Select value={formData.respondReviews} onValueChange={(val: string) => updateField("respondReviews", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="always">Always</SelectItem>
                                            <SelectItem value="negative-only">Only Negative Ones</SelectItem>
                                            <SelectItem value="sometimes">Sometimes</SelectItem>
                                            <SelectItem value="never">Never</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>% Repeat Customers</Label>
                                    <Select value={formData.repeatCustomers} onValueChange={(val: string) => updateField("repeatCustomers", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<10%">Less than 10%</SelectItem>
                                            <SelectItem value="10-25%">10 - 25%</SelectItem>
                                            <SelectItem value="25-50%">25 - 50%</SelectItem>
                                            <SelectItem value="50%+">50%+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Recurring Revenue?</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Yes (>30%)", "Small (<30%)", "No"].map(opt => (
                                            <Button key={opt} type="button" variant={formData.recurringRevenue === opt ? "default" : "outline"} onClick={() => updateField("recurringRevenue", opt)} className={formData.recurringRevenue === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 7: Tech & Tools */}
                        {currentStep === 6 && (
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <Label>Which tools do you currently use?</Label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["CRM (HubSpot, Salesforce, etc)", "Spreadsheets / Excel", "Project Mgmt (Trello, Asana)", "Slack / Teams", "Zapier / Make", "Email Marketing", "Accounting (Xero/Quickbooks)", "Calendar Booking"].map(tool => (
                                            <div key={tool} className="flex items-center space-x-2">
                                                <Checkbox id={tool} checked={formData.tools.includes(tool)} onCheckedChange={() => toggleArrayItem("tools", tool)} className="border-slate-600 data-[state=checked]:bg-blue-600" />
                                                <label htmlFor={tool} className="text-sm text-slate-300 cursor-pointer">{tool}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>% Processes Automated</Label>
                                    <Select value={formData.percentAutomated} onValueChange={(val: string) => updateField("percentAutomated", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">0% (All Manual)</SelectItem>
                                            <SelectItem value="<30%">Less than 30%</SelectItem>
                                            <SelectItem value="30-70%">30 - 70%</SelectItem>
                                            <SelectItem value=">70%">70%+ (Highly Automated)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>#1 Goal for Next 12 Months</Label>
                                    <Input value={formData.next12MonthsGoal} onChange={(e) => updateField("next12MonthsGoal", e.target.value)} placeholder="e.g. Double revenue, Hire a GM, Sell business" className="bg-slate-800 border-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Biggest Thing Holding You Back</Label>
                                    <Input value={formData.holdingBack} onChange={(e) => updateField("holdingBack", e.target.value)} placeholder="e.g. Cash flow, finding staff" className="bg-slate-800 border-slate-700" />
                                </div>
                                <div className="space-y-3">
                                    <Label>What problems are you experiencing?</Label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {["Team Confusion", "Burnout", "Inconsistent Sales", "Customer Complaints", "Low Profit Margins", "Tech Overwhelm", "Can't Scale"].map(prob => (
                                            <div key={prob} className="flex items-center space-x-2">
                                                <Checkbox id={prob} checked={formData.problems.includes(prob)} onCheckedChange={() => toggleArrayItem("problems", prob)} className="border-slate-600 data-[state=checked]:bg-red-600" />
                                                <label htmlFor={prob} className="text-sm text-slate-300 cursor-pointer">{prob}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 8: Let's Go */}
                        {currentStep === 7 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Excitement Level (1-10) to fix this?</Label>
                                    <Select value={formData.excitementLevel} onValueChange={(val: string) => updateField("excitementLevel", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="10">10 - Ready to go NOW</SelectItem>
                                            <SelectItem value="8-9">8-9 - Very Interested</SelectItem>
                                            <SelectItem value="5-7">5-7 - Exploring</SelectItem>
                                            <SelectItem value="<5">Less than 5 - Just looking</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>When do you want to start?</Label>
                                    <Select value={formData.startDate} onValueChange={(val: string) => updateField("startDate", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="now">Right now</SelectItem>
                                            <SelectItem value="this-month">This month</SelectItem>
                                            <SelectItem value="next-quarter">Next quarter</SelectItem>
                                            <SelectItem value="exploring">Just exploring</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Investment Tolerance for Growth</Label>
                                    <Select value={formData.growthBudget} onValueChange={(val: string) => updateField("growthBudget", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select Tolerance..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="starter">Starting Foundation</SelectItem>
                                            <SelectItem value="moderate">Steady Growth</SelectItem>
                                            <SelectItem value="aggressive">Aggressive Scaling</SelectItem>
                                            <SelectItem value="leader">Market Dominance</SelectItem>
                                            <SelectItem value="enterprise">Full System Overhaul</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Are you the decision maker?</Label>
                                    <Select value={formData.decisionMaker} onValueChange={(val: string) => updateField("decisionMaker", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="me">Yes, just me</SelectItem>
                                            <SelectItem value="partner">Me + Business Partner</SelectItem>
                                            <SelectItem value="board">Board / Committee</SelectItem>
                                            <SelectItem value="other">No, I'm researching for someone else</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex items-start space-x-2">
                                        <Checkbox id="optin" checked={formData.newsletterOptIn} onCheckedChange={(c: boolean) => updateField("newsletterOptIn", c === true)} className="mt-1 border-slate-600 data-[state=checked]:bg-blue-600" />
                                        <label htmlFor="optin" className="text-sm text-slate-400">
                                            I agree to receive the detailed audit results and occasional growth insights via email. We respect your inbox.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-8 border-t border-slate-800">
                    <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0} className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>

                    {currentStep === STEPS.length - 1 ? (
                        <Button onClick={handleSubmit} disabled={isSubmitting || !formData.newsletterOptIn} className="bg-green-600 hover:bg-green-700 text-white px-8">
                            {isSubmitting ? "Submitting..." : (
                                <>Submit Audit <Send className="w-4 h-4 ml-2" /></>
                            )}
                        </Button>
                    ) : (
                        <Button onClick={handleNext} className="bg-white text-black hover:bg-slate-200">
                            Next Step <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </Card>

            {/* Exit-Intent Modal */}
            <AnimatePresence>
                {showExitCapture && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <Card className="bg-slate-900 border-slate-700 p-8 max-w-md mx-4 relative">
                                <button
                                    onClick={() => setShowExitCapture(false)}
                                    className="absolute top-4 right-4 text-slate-400 hover:text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                {exitEmailSent ? (
                                    <div className="text-center py-4">
                                        <div className="text-3xl mb-3">📬</div>
                                        <p className="text-white font-semibold text-lg">Check your inbox!</p>
                                        <p className="text-slate-400 text-sm mt-1">We sent a link to finish your audit.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-white text-xl font-bold mb-2">Wait! Don&apos;t lose your progress!</h3>
                                        <p className="text-slate-400 text-sm mb-6">
                                            We can send you a link to finish your audit later, or book a call and we&apos;ll walk you through it.
                                        </p>
                                        <div className="space-y-3">
                                            <Button onClick={handleSaveProgress} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                                📧 Email Me a Link
                                            </Button>
                                            <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                                                <a href="https://cal.com/mia-louviere-a4n2hk/30min" target="_blank" rel="noopener noreferrer">
                                                    📞 Book a Call Instead
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
