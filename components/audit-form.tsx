"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"

const STEPS = [
    "Basics",
    "Financials",
    "Team",
    "Sales",
    "Strategy",
    "Time",
    "Pain",
    "Capacity",
    "Reputation",
    "Retention",
    "Tools",
    "Big Picture",
    "Final",
]

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

export function AuditForm() {
    const [currentStep, setCurrentStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        // Step 1: Basics
        fullName: "",
        companyName: "",
        email: "",
        phoneNumber: "",
        websiteUrl: "",
        industryCategory: "",
        specificIndustry: "",

        // Step 2: Diagnostics
        currentRevenue: "",
        revenueTrend: "",
        profitMargin: "",
        cashFlow: "",

        // Step 3: Team
        teamSize: "",
        teamPerformance: "",
        systemsDocumented: "",

        // Step 4: Sales
        leadSource: "",
        conversionRate: "",
        dealSize: "",
        salesCycle: "",

        // Step 5: Strategy
        revenueGoal: "",
        bottleneck: "",
        timeInBusiness: "",
        nicheIndustry: "", // Text input
        // Conditional HVAC
        hvacLeadsPerMonth: "",
        hvacCloseRate: "",
        hvacAvgTicket: "",
        hvacMaintenance: "",
        // Conditional Other
        retentionRate: "",
        customerValue: "",

        // Step 6: Time
        hoursPerWeek: "",
        highValueWork: "",
        twoWeeksOff: "",

        // Step 7: Pain
        missedCalls: "",
        systematicFollowUp: "",
        fixTimeline: "",
        painLevel: [5], // Slider
        keepsUpAtNight: "",

        // Step 8: Capacity
        whoRunsSystems: "",
        techComfort: [5], // Slider

        // Step 9: Reputation
        googleReviews: "",
        googleRating: "",
        askReviewsSystem: "",
        respondReviews: "",

        // Step 10: Retention
        repeatCustomers: "",
        recurringRevenue: "",
        winBackSystem: "",
        referralSystem: "",

        // Step 11: Tools
        tools: [] as string[],
        percentAutomated: "",
        dataOrganization: "",

        // Step 12: Big Picture
        next12MonthsGoal: "",
        holdingBack: "",
        problems: [] as string[],

        // Step 13: Final
        excitementLevel: "",
        startDate: "",
        growthBudget: "",
        decisionMaker: "",
        newsletterOptIn: false,
    })

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
            // Validate current step here if needed
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
            const response = await fetch("https://hook.us2.make.com/80bkfpmxwbfs28uzg9wknmbk9pnkq57j", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setIsSuccess(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                alert("Something went wrong. Please try again.")
            }
        } catch (error) {
            console.error("Submission error", error)
            alert("Error submitting form. Please check your connection.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="max-w-2xl mx-auto p-8 text-center">
                <div className="mb-6 flex justify-center">
                    <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="h-10 w-10 text-white" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Audit Submitted Successfully!</h2>
                <p className="text-slate-300 text-lg mb-8">
                    Thank you for completing the audit. We are analyzing your data and will send your custom report to
                    <span className="text-white font-medium"> {formData.email}</span> shortly.
                </p>
                <Button onClick={() => window.location.href = "/"} className="bg-white text-black hover:bg-slate-200">
                    Return Home
                </Button>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">
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
                        {/* Step 1: Basics */}
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

                        {/* Step 2: Financials */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Current Monthly Revenue</Label>
                                    <Select value={formData.currentRevenue} onValueChange={(val: string) => updateField("currentRevenue", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select Range" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<10k">Less than $10k</SelectItem>
                                            <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                                            <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                                            <SelectItem value="100k-500k">$100k - $500k</SelectItem>
                                            <SelectItem value="500k+">$500k+</SelectItem>
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
                                    <Label>Cash Flow Status</Label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {["Healthy", "Tight", "Crisis"].map(opt => (
                                            <Button key={opt} variant={formData.cashFlow === opt ? "default" : "outline"} onClick={() => updateField("cashFlow", opt)} className={formData.cashFlow === opt ? "bg-blue-600 hover:bg-blue-700" : "bg-transparent border-slate-700 hover:bg-slate-800"}>
                                                {opt}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Team */}
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
                            </div>
                        )}

                        {/* Step 4: Sales */}
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
                                        <Label>Average Deal Size</Label>
                                        <Select value={formData.dealSize} onValueChange={(val: string) => updateField("dealSize", val)}>
                                            <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="<1k">Less than $1k</SelectItem>
                                                <SelectItem value="1k-5k">$1k - $5k</SelectItem>
                                                <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                                <SelectItem value="10k-50k">$10k - $50k</SelectItem>
                                                <SelectItem value="50k+">$50k+</SelectItem>
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
                            </div>
                        )}

                        {/* Step 5: Strategy */}
                        {currentStep === 4 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>12-Month Revenue Goal</Label>
                                    <Select value={formData.revenueGoal} onValueChange={(val: string) => updateField("revenueGoal", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="100k">$100k</SelectItem>
                                            <SelectItem value="500k">$500k</SelectItem>
                                            <SelectItem value="1M">$1 Million</SelectItem>
                                            <SelectItem value="3M+">$3 Million+</SelectItem>
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
                                <div className="space-y-2">
                                    <Label>Niche / Industry Industry (e.g. HVAC, SaaS)</Label>
                                    <Input value={formData.nicheIndustry} onChange={(e) => updateField("nicheIndustry", e.target.value)} className="bg-slate-800 border-slate-700" />
                                </div>

                                {/* Conditional Fields based on input (Basic detection) */}
                                {(formData.nicheIndustry.toLowerCase().includes("hvac") ||
                                    formData.nicheIndustry.toLowerCase().includes("plumb") ||
                                    formData.nicheIndustry.toLowerCase().includes("electric") ||
                                    formData.industryCategory === "service") && (
                                        <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 space-y-4">
                                            <h4 className="text-blue-400 font-medium text-sm uppercase">Service Business Metrics</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="space-y-2"><Label>Leads per Month</Label><Input value={formData.hvacLeadsPerMonth} onChange={e => updateField("hvacLeadsPerMonth", e.target.value)} className="bg-slate-900" /></div>
                                                <div className="space-y-2"><Label>Close Rate %</Label><Input value={formData.hvacCloseRate} onChange={e => updateField("hvacCloseRate", e.target.value)} className="bg-slate-900" /></div>
                                                <div className="space-y-2"><Label>Avg Repair Ticket $</Label><Input value={formData.hvacAvgTicket} onChange={e => updateField("hvacAvgTicket", e.target.value)} className="bg-slate-900" /></div>
                                                <div className="space-y-2"><Label>Membership/Maint. %</Label><Input value={formData.hvacMaintenance} onChange={e => updateField("hvacMaintenance", e.target.value)} className="bg-slate-900" /></div>
                                            </div>
                                        </div>
                                    )}

                                {(!formData.nicheIndustry.toLowerCase().includes("hvac") && !formData.nicheIndustry.toLowerCase().includes("plum") && !formData.nicheIndustry.toLowerCase().includes("elec") && formData.industryCategory !== "service") && (
                                    <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 space-y-4">
                                        <h4 className="text-purple-400 font-medium text-sm uppercase">Growth Metrics</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-2"><Label>Customer Retention Rate %</Label><Input value={formData.retentionRate} onChange={e => updateField("retentionRate", e.target.value)} className="bg-slate-900" /></div>
                                            <div className="space-y-2"><Label>Average Lifetime Value $</Label><Input value={formData.customerValue} onChange={e => updateField("customerValue", e.target.value)} className="bg-slate-900" /></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Step 6: Time */}
                        {currentStep === 5 && (
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
                                    <Label>% Time on High-Value Work ($500/hr+)</Label>
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
                            </div>
                        )}

                        {/* Step 7: Pain */}
                        {currentStep === 6 && (
                            <div className="space-y-6">
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
                                    <Label>What keeps you up at night regarding proper business?</Label>
                                    <Textarea value={formData.keepsUpAtNight} onChange={(e) => updateField("keepsUpAtNight", e.target.value)} className="bg-slate-800 border-slate-700 h-24" placeholder="Be specific..." />
                                </div>
                            </div>
                        )}

                        {/* Step 8: Capacity */}
                        {currentStep === 7 && (
                            <div className="space-y-6">
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

                        {/* Step 9: Reputation */}
                        {currentStep === 8 && (
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
                            </div>
                        )}

                        {/* Step 10: Retention */}
                        {currentStep === 9 && (
                            <div className="space-y-6">
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

                        {/* Step 11: Tools */}
                        {currentStep === 10 && (
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
                            </div>
                        )}

                        {/* Step 12: Big Picture */}
                        {currentStep === 11 && (
                            <div className="space-y-6">
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

                        {/* Step 13: Final */}
                        {currentStep === 12 && (
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <Label>Excitement Level (1-10) to fix this?</Label>
                                    <Select value={formData.excitementLevel} onValueChange={(val: string) => updateField("excitementLevel", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="10">10 - Ready to go NOW</SelectItem>
                                            <SelectItem value="8-9">8-9 - Very Interested</SelectItem>
                                            <SelectItem value="5-7">5-7 - exploring</SelectItem>
                                            <SelectItem value="<5">Less than 5 - Just looking</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Budget for Growth Investments</Label>
                                    <Select value={formData.growthBudget} onValueChange={(val: string) => updateField("growthBudget", val)}>
                                        <SelectTrigger className="bg-slate-800 border-slate-700"><SelectValue placeholder="Select..." /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="<1k">Less than $1k</SelectItem>
                                            <SelectItem value="1k-2.5k">$1k - $2.5k</SelectItem>
                                            <SelectItem value="2.5k-5k">$2.5k - $5k</SelectItem>
                                            <SelectItem value="5k-10k">$5k - $10k</SelectItem>
                                            <SelectItem value="10k+">$10k+</SelectItem>
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
        </div>
    )
}
