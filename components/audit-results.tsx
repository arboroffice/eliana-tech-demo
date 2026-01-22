"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
    TrendingUp,
    TrendingDown,
    AlertCircle,
    CheckCircle2,
    Target,
    Lightbulb,
    Wrench,
    Rocket,
    DollarSign,
    Clock,
    Users,
    BarChart3,
    ArrowRight,
    Download,
    Calendar,
    Copy,
    Check,
    Gift,
    Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { generateMiniWins, type MiniWin, formatMiniWinForCopy } from "@/lib/mini-wins-generator"

interface AuditResultsProps {
    formData: any
    auditScore: number
}

export function AuditResults({ formData, auditScore }: AuditResultsProps) {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    // Generate mini-wins
    const miniWins = generateMiniWins(formData)

    const handleCopy = async (content: string, index: number) => {
        await navigator.clipboard.writeText(content)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    // Calculate scores for different areas
    const calculateAreaScore = (area: string): number => {
        switch (area) {
            case 'revenue':
                return formData.revenueTrend === 'Growing' ? 75 : formData.revenueTrend === 'Flat' ? 50 : 25
            case 'automation':
                const autoScore = formData.percentAutomated === '>70%' ? 85 :
                    formData.percentAutomated === '30-70%' ? 60 :
                    formData.percentAutomated === '<30%' ? 35 : 15
                return autoScore
            case 'sales':
                const convRate = formData.conversionRate === '50%+' ? 90 :
                    formData.conversionRate === '30-50%' ? 70 :
                    formData.conversionRate === '20-30%' ? 50 :
                    formData.conversionRate === '10-20%' ? 30 : 15
                return convRate
            case 'retention':
                const retRate = formData.repeatCustomers === '50%+' ? 85 :
                    formData.repeatCustomers === '25-50%' ? 65 :
                    formData.repeatCustomers === '10-25%' ? 40 : 20
                return retRate
            case 'time':
                return formData.twoWeeksOff === 'Yes' ? 80 : formData.twoWeeksOff === 'Maybe' ? 45 : 20
            default:
                return 50
        }
    }

    const revenueScore = calculateAreaScore('revenue')
    const automationScore = calculateAreaScore('automation')
    const salesScore = calculateAreaScore('sales')
    const retentionScore = calculateAreaScore('retention')
    const timeScore = calculateAreaScore('time')

    // Calculate potential revenue increase
    const calculatePotentialIncrease = (): string => {
        const missedCalls = formData.missedCalls === '30+' ? 30 :
            formData.missedCalls === '10-30' ? 20 :
            formData.missedCalls === '5-10' ? 7 : 3

        const avgDealSize = formData.dealSize === 'enterprise' ? 50000 :
            formData.dealSize === 'high' ? 15000 :
            formData.dealSize === 'medium' ? 5000 :
            formData.dealSize === 'small' ? 500 : 100

        const currentConversion = formData.conversionRate === '<10%' ? 0.05 :
            formData.conversionRate === '10-20%' ? 0.15 : 0.25

        const potentialRevenue = missedCalls * 4 * avgDealSize * currentConversion

        if (potentialRevenue >= 1000000) {
            return `$${(potentialRevenue / 1000000).toFixed(1)}M+`
        } else if (potentialRevenue >= 1000) {
            return `$${(potentialRevenue / 1000).toFixed(0)}K+`
        }
        return `$${potentialRevenue.toFixed(0)}+`
    }

    const potentialIncrease = calculatePotentialIncrease()

    // Generate personalized opportunities
    const generateOpportunities = () => {
        const opportunities = []

        if (formData.missedCalls !== '0-5') {
            opportunities.push({
                title: "Capture Every Lead",
                impact: "High",
                description: `You're missing ${formData.missedCalls} calls per week. An AI receptionist could capture these leads 24/7.`,
                icon: AlertCircle,
                color: "text-red-500"
            })
        }

        if (formData.systematicFollowUp !== 'Yes') {
            opportunities.push({
                title: "Automated Follow-Up System",
                impact: "High",
                description: "Systematic follow-ups can increase conversions by 50%. Automate this entirely with AI.",
                icon: Target,
                color: "text-orange-500"
            })
        }

        if (formData.askReviewsSystem === 'none' || formData.askReviewsSystem === 'manual') {
            opportunities.push({
                title: "Review Generation Engine",
                impact: "Medium",
                description: "Automated review requests can double your review rate, boosting local SEO and trust.",
                icon: TrendingUp,
                color: "text-blue-500"
            })
        }

        if (parseInt(formData.painLevel[0]) >= 7) {
            opportunities.push({
                title: "Urgent Process Automation",
                impact: "Critical",
                description: `Your pain level is ${formData.painLevel[0]}/10. Immediate automation can relieve this pressure within 30 days.`,
                icon: AlertCircle,
                color: "text-red-600"
            })
        }

        if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') {
            opportunities.push({
                title: "Low-Hanging Automation Wins",
                impact: "High",
                description: "70%+ of repetitive tasks can be automated, freeing 15-20 hours per week.",
                icon: Lightbulb,
                color: "text-yellow-500"
            })
        }

        return opportunities
    }

    const opportunities = generateOpportunities()

    // Generate DIY steps
    const generateDIYSteps = () => {
        const steps = [
            {
                step: 1,
                title: "Document Your Current Processes",
                description: "Map out your top 5 most time-consuming tasks. Write down every step.",
                timeframe: "Week 1"
            },
            {
                step: 2,
                title: "Identify Quick Wins",
                description: "Look for repetitive tasks: email responses, appointment booking, follow-ups.",
                timeframe: "Week 1-2"
            },
            {
                step: 3,
                title: "Research Automation Tools",
                description: "Explore tools like Zapier, Make.com for workflows. Try AI tools like ChatGPT for responses.",
                timeframe: "Week 2-3"
            },
            {
                step: 4,
                title: "Start with One Workflow",
                description: "Automate your simplest process first. Master it before moving to complex ones.",
                timeframe: "Week 3-4"
            },
            {
                step: 5,
                title: "Test and Refine",
                description: "Run your automation alongside manual process for 2 weeks. Fix errors.",
                timeframe: "Week 4-6"
            },
            {
                step: 6,
                title: "Scale Gradually",
                description: "Add one new automation per month. Track time saved and ROI.",
                timeframe: "Month 2-6"
            }
        ]

        return steps
    }

    const diySteps = generateDIYSteps()

    // Generate solution recommendations
    const generateSolutions = () => {
        const solutions = []

        // Starter Package
        if (formData.currentRevenue === 'early' || formData.growthBudget === 'starter') {
            solutions.push({
                tier: "Foundation",
                price: "$2,500 - $5,000",
                timeline: "2-4 weeks",
                includes: [
                    "AI Call Handling Setup",
                    "Automated Follow-Up System",
                    "Review Collection Automation",
                    "Basic CRM Integration"
                ],
                bestFor: "Early-stage businesses ready to systemize",
                cta: "Perfect for your current stage"
            })
        }

        // Growth Package
        if (formData.currentRevenue === 'growth' || formData.growthBudget === 'moderate' || formData.growthBudget === 'aggressive') {
            solutions.push({
                tier: "Scale",
                price: "$10,000 - $25,000",
                timeline: "4-8 weeks",
                includes: [
                    "Everything in Foundation",
                    "Custom AI Agent Development",
                    "Multi-Channel Automation (SMS, Email, WhatsApp)",
                    "Advanced Analytics Dashboard",
                    "Team Training & Documentation",
                    "90-Day Optimization Support"
                ],
                bestFor: "Growing companies hitting capacity limits",
                cta: "Recommended for your goals"
            })
        }

        // Enterprise Package
        if (formData.currentRevenue === 'established' || formData.currentRevenue === 'leader' || formData.growthBudget === 'leader' || formData.growthBudget === 'enterprise') {
            solutions.push({
                tier: "AI-Native Transformation",
                price: "$50,000+",
                timeline: "3-6 months",
                includes: [
                    "Everything in Scale",
                    "Full Business Process Re-Engineering",
                    "Custom AI Model Development",
                    "Multi-Location Orchestration",
                    "API Integrations (Unlimited)",
                    "Dedicated Success Manager",
                    "12-Month Strategic Partnership"
                ],
                bestFor: "Market leaders ready to dominate their space",
                cta: "Built for your ambition"
            })
        }

        // Co-Founder Model
        solutions.push({
            tier: "Co-Founder Partnership",
            price: "Revenue Share Model",
            timeline: "6-12 months",
            includes: [
                "Zero Upfront Investment",
                "We build, you grow, we share in the wins",
                "Full AI-Native Business Transformation",
                "Ongoing Strategy & Optimization",
                "Aligned Incentives - We Win When You Win"
            ],
            bestFor: "High-potential businesses with proven traction",
            cta: "Let's explore this together"
        })

        return solutions
    }

    const solutions = generateSolutions()

    return (
        <div className="max-w-6xl mx-auto space-y-12 pb-12">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-6"
            >
                <div className="inline-block">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-4 mb-4">
                        <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Your AI Readiness Report
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    {formData.companyName}, here's your custom roadmap to becoming AI-native
                </p>
            </motion.div>

            {/* Overall Score */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-8">
                    <div className="text-center space-y-6">
                        <h2 className="text-2xl font-bold text-white">Overall AI Readiness Score</h2>
                        <div className="relative inline-block">
                            <div className="text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {Math.round((revenueScore + automationScore + salesScore + retentionScore + timeScore) / 5)}
                            </div>
                            <div className="text-slate-400 text-sm mt-2">out of 100</div>
                        </div>
                        <div className="max-w-2xl mx-auto">
                            <Progress
                                value={(revenueScore + automationScore + salesScore + retentionScore + timeScore) / 5}
                                className="h-3"
                            />
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Instant Mini-Wins */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-6"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                        <Gift className="w-8 h-8 text-green-400" />
                        Instant Mini-Wins
                    </h2>
                    <span className="text-sm text-slate-400 bg-slate-800 px-4 py-2 rounded-full">
                        Free • Copy & Use Now
                    </span>
                </div>
                <p className="text-slate-300 text-lg">
                    Start getting value immediately! Copy these ready-to-use resources:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {miniWins.map((win, idx) => (
                        <Card key={idx} className="bg-slate-900/50 border-slate-800 p-6 hover:border-green-500/50 transition-all group">
                            <div className="space-y-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">{win.icon}</span>
                                            <h3 className="text-white font-bold text-lg">{win.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm mb-4">{win.description}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-950 rounded-lg p-4 border border-slate-700 font-mono text-sm text-slate-300 max-h-64 overflow-y-auto">
                                    <pre className="whitespace-pre-wrap">{win.content}</pre>
                                </div>

                                <Button
                                    onClick={() => handleCopy(formatMiniWinForCopy(win), idx)}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                    variant={copiedIndex === idx ? "outline" : "default"}
                                >
                                    {copiedIndex === idx ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy to Clipboard
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 p-6">
                    <div className="flex items-start gap-4">
                        <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-bold mb-2">Implementation Tip</h3>
                            <p className="text-slate-300 mb-3">
                                These are just the quick wins! Imagine what you could do with a complete automation system.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Want us to implement all of this for you? Book a strategy call below and we'll show you our done-for-you approach.
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Current State Analysis */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                    Where You Are Today
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: 'Revenue Growth', score: revenueScore, icon: TrendingUp },
                        { name: 'Automation Level', score: automationScore, icon: Rocket },
                        { name: 'Sales Efficiency', score: salesScore, icon: Target },
                        { name: 'Customer Retention', score: retentionScore, icon: Users },
                        { name: 'Time Freedom', score: timeScore, icon: Clock },
                    ].map((area, idx) => (
                        <Card key={idx} className="bg-slate-900/50 border-slate-800 p-6 hover:border-blue-500/50 transition-all">
                            <div className="flex items-center justify-between mb-4">
                                <area.icon className={`w-6 h-6 ${area.score >= 70 ? 'text-green-500' : area.score >= 40 ? 'text-yellow-500' : 'text-red-500'}`} />
                                <span className="text-2xl font-bold text-white">{area.score}</span>
                            </div>
                            <h3 className="text-white font-semibold mb-2">{area.name}</h3>
                            <Progress value={area.score} className="h-2" />
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* Opportunity Gaps */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Lightbulb className="w-8 h-8 text-yellow-400" />
                    Your Biggest Opportunities
                </h2>
                <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30 p-8">
                    <div className="text-center space-y-4 mb-8">
                        <p className="text-slate-300 text-lg">Based on your audit, you're leaving this much on the table:</p>
                        <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                            {potentialIncrease}
                        </div>
                        <p className="text-slate-400">in annual revenue potential</p>
                    </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    {opportunities.map((opp, idx) => (
                        <Card key={idx} className="bg-slate-900/50 border-slate-800 p-6 hover:border-purple-500/50 transition-all">
                            <div className="flex items-start gap-4">
                                <div className={`p-3 bg-slate-800 rounded-lg ${opp.color}`}>
                                    <opp.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-bold">{opp.title}</h3>
                                        <span className={`text-xs px-2 py-1 rounded ${opp.impact === 'Critical' ? 'bg-red-500/20 text-red-400' : opp.impact === 'High' ? 'bg-orange-500/20 text-orange-400' : 'bg-blue-500/20 text-blue-400'}`}>
                                            {opp.impact} Impact
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm">{opp.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* DIY Steps */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Wrench className="w-8 h-8 text-orange-400" />
                    DIY Implementation Roadmap
                </h2>
                <p className="text-slate-400 text-lg">Want to tackle this yourself? Here's your step-by-step guide:</p>

                <div className="space-y-4">
                    {diySteps.map((step, idx) => (
                        <Card key={idx} className="bg-slate-900/50 border-slate-800 p-6 hover:border-orange-500/50 transition-all">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 text-orange-400 rounded-full flex items-center justify-center font-bold text-xl">
                                    {step.step}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                                        <span className="text-sm text-slate-500 bg-slate-800 px-3 py-1 rounded-full">
                                            {step.timeframe}
                                        </span>
                                    </div>
                                    <p className="text-slate-400">{step.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="bg-yellow-900/20 border-yellow-500/30 p-6">
                    <div className="flex items-start gap-4">
                        <AlertCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-bold mb-2">Reality Check</h3>
                            <p className="text-slate-300 mb-3">
                                DIY automation typically takes 6-12 months and requires significant trial and error.
                                Most business owners underestimate the complexity and end up with disconnected tools that create more problems.
                            </p>
                            <p className="text-slate-400 text-sm">
                                Our clients typically recoup their investment in 60-90 days because we've already made (and fixed) every mistake.
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Solutions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Rocket className="w-8 h-8 text-purple-400" />
                    Fast-Track Solutions Built for You
                </h2>
                <p className="text-slate-400 text-lg">Based on your goals and stage, here's how we can help:</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {solutions.map((solution, idx) => (
                        <Card key={idx} className={`bg-slate-900/50 border-slate-800 p-8 hover:border-purple-500/50 transition-all ${solution.cta.includes('Recommended') ? 'ring-2 ring-purple-500/50' : ''}`}>
                            {solution.cta.includes('Recommended') && (
                                <div className="bg-purple-500 text-white text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
                                    RECOMMENDED FOR YOU
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{solution.tier}</h3>
                            <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                                    {solution.price}
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm mb-6">Timeline: {solution.timeline}</p>

                            <div className="space-y-3 mb-6">
                                {solution.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-slate-800 pt-4 mb-6">
                                <p className="text-slate-400 text-sm">
                                    <strong className="text-white">Best for:</strong> {solution.bestFor}
                                </p>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white">
                                {solution.cta}
                            </Button>
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Card className="bg-gradient-to-br from-purple-900 to-blue-900 border-purple-500/30 p-12 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Transform {formData.companyName}?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Book a free 30-minute strategy call. We'll show you exactly how to capture that {potentialIncrease} in lost revenue.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-purple-900 hover:bg-slate-200 text-lg px-8 py-6">
                            <Calendar className="w-5 h-5 mr-2" />
                            Book Your Strategy Call
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                            <Download className="w-5 h-5 mr-2" />
                            Download Full Report
                        </Button>
                    </div>
                    <p className="text-slate-400 text-sm mt-6">
                        No pressure. No pitch. Just a real conversation about your business.
                    </p>
                </Card>
            </motion.div>

            {/* Personalized Note */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
            >
                <Card className="bg-slate-900/50 border-slate-800 p-8">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                            E
                        </div>
                        <div className="flex-1">
                            <h3 className="text-white font-bold text-lg mb-2">A Personal Note from Our Team</h3>
                            <p className="text-slate-300 mb-4">
                                Hey {formData.fullName.split(' ')[0]},
                            </p>
                            <p className="text-slate-300 mb-4">
                                I noticed you mentioned "{formData.keepsUpAtNight}" keeps you up at night. I've been there.
                                {formData.painLevel[0] >= 7 && " And with a pain level of " + formData.painLevel[0] + "/10, I know this isn't just annoying—it's urgent."}
                            </p>
                            <p className="text-slate-300 mb-4">
                                The good news? {opportunities.length > 0 && `We've identified ${opportunities.length} high-impact opportunities that could `}
                                transform your business in the next 90 days.
                            </p>
                            <p className="text-slate-300">
                                Whether you go DIY or work with us, the key is to start. This report is yours to keep.
                                {formData.newsletterOptIn && " I'll also send you bite-sized implementation tips every week—no fluff, just actionable stuff."}
                            </p>
                            <p className="text-slate-300 mt-4">
                                Let's build something great together.
                            </p>
                            <p className="text-white font-semibold mt-2">
                                - The Eliana Team
                            </p>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}
