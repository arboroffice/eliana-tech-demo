"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { AuditResults } from "@/components/audit-results"
import { getIndustryConfig } from "@/lib/audit-industry-config"
import { calculateAuditScore } from "@/lib/audit-analyzer"

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
                setIsSuccess(true)
                setShowResults(true)
                try { localStorage.removeItem(STORAGE_KEY) } catch { }
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } catch (error) {
            console.error("Submission error:", error)
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
        return <AuditResults formData={formData} auditScore={calculateAuditScore(formData)} />
    }

    return (
        <div className="max-w-3xl mx-auto">
            <AnimatePresence>
                {restoredProgress && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                        className="mb-4 p-3 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm text-center">
                        Welcome back! We saved your progress.
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {encouragement && (
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }} className="mb-2 text-center text-sm text-purple-300 font-medium">
                        {encouragement}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mb-8">
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Step {currentStep + 1} of {STEPS.length}</span>
                    <span>{Math.round(((currentStep + 1) / STEPS.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }} animate={{ width: `${((currentStep + 1) / STEPS.length) * 100}%` }}
                        transition={{ duration: 0.3 }} />
                </div>
                <div className="mt-2 text-center text-white font-medium text-lg">{STEPS[currentStep]}</div>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-md p-6 md:p-8">
                <AnimatePresence mode="wait">
                    <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} className="space-y-6">

                        {/* Step 1: About You (same for all) */}
                        {currentStep === 0 && (
                            <div className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Full Name</Label>
                                        <Input value={formData.fullName} onChange={(e) => updateField("fullName", e.target.value)} placeholder="Jane Smith" className="bg-slate-800 border-slate-700" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Company / Brand Name</Label>
                                        <Input value={formData.companyName} onChange={(e) => updateField("companyName", e.target.value)} placeholder="Your Brand" className="bg-slate-800 border-slate-700" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Email Address</Label>
                                        <Input type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} placeholder="jane@example.com" className="bg-slate-800 border-slate-700" />
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
                                <div className="space-y-2">
                                    <Label>What type of business do you run?</Label>
                                    <Select value={formData.businessType} onValueChange={(val: string) => updateField("businessType", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="course-creator">Course Creator</SelectItem>
                                            <SelectItem value="coaching">Coaching / Consulting</SelectItem>
                                            <SelectItem value="membership">Membership / Community</SelectItem>
                                            <SelectItem value="saas">SaaS / Software</SelectItem>
                                            <SelectItem value="digital-products">Digital Products (templates, tools, etc.)</SelectItem>
                                            <SelectItem value="newsletter">Newsletter / Media</SelectItem>
                                            <SelectItem value="cohort">Cohort-Based Program</SelectItem>
                                            <SelectItem value="agency">Agency (Marketing, Creative, Dev)</SelectItem>
                                            <SelectItem value="ecommerce">E-commerce / Retail</SelectItem>
                                            <SelectItem value="home-services">Home Services (HVAC, Plumbing, Electrical, etc.)</SelectItem>
                                            <SelectItem value="healthcare">Healthcare / Dental / Wellness</SelectItem>
                                            <SelectItem value="professional-services">Professional Services (Law, Accounting, Finance)</SelectItem>
                                            <SelectItem value="construction">Construction / Trades</SelectItem>
                                            <SelectItem value="restaurant-hospitality">Restaurant / Hospitality</SelectItem>
                                            <SelectItem value="real-estate">Real Estate</SelectItem>
                                            <SelectItem value="manufacturing">Manufacturing / Logistics</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                {formData.businessType === "other" && (
                                    <div className="space-y-2">
                                        <Label>Describe your business</Label>
                                        <Input value={formData.businessTypeOther} onChange={(e) => updateField("businessTypeOther", e.target.value)} placeholder="e.g. Agency, Service business..." className="bg-slate-800 border-slate-700" />
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
                                        className="bg-slate-800 border-slate-700 h-20" placeholder={config.step2.productDescription.placeholder} />
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>{config.step2.productPricePoint.label}</Label>
                                        <Select value={formData.productPricePoint} onValueChange={(val: string) => updateField("productPricePoint", val)}>
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                                className={formData.revenueTrend === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="solo">Just me</SelectItem>
                                            <SelectItem value="2-3">2 - 3 people</SelectItem>
                                            <SelectItem value="4-10">4 - 10 people</SelectItem>
                                            <SelectItem value="10+">10+</SelectItem>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                            <SelectContent>
                                                {config.step4.contentCreationHours.options?.map(opt => (
                                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                                className={formData.onboardingAutomated === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
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
                                                className={formData.twoWeeksOff === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
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
                                        className="bg-slate-800 border-slate-700 h-24" placeholder="Be specific..." />
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
                                                <Checkbox id={tool} checked={formData.tools.includes(tool)} onCheckedChange={() => toggleArrayItem("tools", tool)} className="border-slate-600 data-[state=checked]:bg-blue-600" />
                                                <label htmlFor={tool} className="text-sm text-slate-300 cursor-pointer">{tool}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label>% of Your Business That&apos;s Automated</Label>
                                    <Select value={formData.percentAutomated} onValueChange={(val: string) => updateField("percentAutomated", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                        placeholder={config.step6.biggestTimeWaste.placeholder} className="bg-slate-800 border-slate-700" />
                                </div>
                                <div className="space-y-2">
                                    <Label>#1 Goal for Next 12 Months</Label>
                                    <Input value={formData.next12MonthsGoal} onChange={(e) => updateField("next12MonthsGoal", e.target.value)}
                                        placeholder={config.step6.next12MonthsGoal.placeholder} className="bg-slate-800 border-slate-700" />
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
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
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
                                    <Label>Investment Comfort Level</Label>
                                    <Select value={formData.growthBudget} onValueChange={(val: string) => updateField("growthBudget", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="starter">Under $5K (single system)</SelectItem>
                                            <SelectItem value="moderate">$5K - $15K (multiple systems)</SelectItem>
                                            <SelectItem value="aggressive">$15K - $40K (full build)</SelectItem>
                                            <SelectItem value="enterprise">$40K+ (AI-native operations)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Are you the decision maker?</Label>
                                    <Select value={formData.decisionMaker} onValueChange={(val: string) => updateField("decisionMaker", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="me">Yes, just me</SelectItem>
                                            <SelectItem value="partner">Me + business partner</SelectItem>
                                            <SelectItem value="team">Team decision</SelectItem>
                                            <SelectItem value="other">Researching for someone else</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="pt-4 border-t border-slate-800">
                                    <div className="flex items-start space-x-2">
                                        <Checkbox id="optin" checked={formData.newsletterOptIn} onCheckedChange={(c: boolean) => updateField("newsletterOptIn", c === true)} className="mt-1 border-slate-600 data-[state=checked]:bg-blue-600" />
                                        <label htmlFor="optin" className="text-sm text-slate-400">
                                            I agree to receive my detailed audit results and occasional growth insights via email.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        )}

                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-8 pt-8 border-t border-slate-800">
                    <Button variant="ghost" onClick={handleBack} disabled={currentStep === 0} className="text-slate-400 hover:text-white hover:bg-slate-800">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                    {currentStep === STEPS.length - 1 ? (
                        <Button onClick={handleSubmit} disabled={isSubmitting || !formData.newsletterOptIn} className="bg-green-600 hover:bg-green-700 text-white px-8">
                            {isSubmitting ? "Submitting..." : (<>Submit Audit <Send className="w-4 h-4 ml-2" /></>)}
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
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}>
                            <Card className="bg-slate-900 border-slate-700 p-8 max-w-md mx-4 relative">
                                <button onClick={() => setShowExitCapture(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white">
                                    <X className="w-5 h-5" />
                                </button>
                                {exitEmailSent ? (
                                    <div className="text-center py-4">
                                        <p className="text-white font-semibold text-lg">Check your inbox!</p>
                                        <p className="text-slate-400 text-sm mt-1">We sent a link to finish your audit.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-white text-xl font-bold mb-2">Don&apos;t lose your progress!</h3>
                                        <p className="text-slate-400 text-sm mb-6">
                                            We can send you a link to finish your audit later, or book a call and we&apos;ll walk you through it.
                                        </p>
                                        <div className="space-y-3">
                                            <Button onClick={handleSaveProgress} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                                                Email Me a Link
                                            </Button>
                                            <Button asChild variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
                                                <a href="https://cal.com/mia-louviere-a4n2hk/30min" target="_blank" rel="noopener noreferrer">
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
