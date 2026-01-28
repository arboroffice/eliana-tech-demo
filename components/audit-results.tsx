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
    Zap,
    Brain,
    Server,
    Network,
    Database,
    Workflow,
    Cpu,
    ShieldCheck
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

    // Generate personalized opportunities (Now Strategic Vectors)
    const generateOpportunities = () => {
        const opportunities = []

        if (formData.missedCalls !== '0-5') {
            opportunities.push({
                title: "Autonomous Lead Capture Agent",
                impact: "Critical",
                description: `Deploy a voice-enabled AI agent to handle ${formData.missedCalls} weekly missed calls with 24/7 availability and instant CRM sync.`,
                icon: Server,
                color: "text-red-400"
            })
        }

        if (formData.systematicFollowUp !== 'Yes') {
            opportunities.push({
                title: "Nurture Sequence Orchestration",
                impact: "High",
                description: "Implement a multi-modal (SMS/Email) AI nurturer that intelligently adapts follow-ups based on lead sentiment and engagement.",
                icon: Network,
                color: "text-orange-400"
            })
        }

        if (formData.askReviewsSystem === 'none' || formData.askReviewsSystem === 'manual') {
            opportunities.push({
                title: "Reputation Management Engine",
                impact: "Medium",
                description: "Automate post-interaction sentiment analysis to trigger review requests only for high-satisfaction interactions.",
                icon: Brain,
                color: "text-blue-400"
            })
        }

        if (parseInt(formData.painLevel[0]) >= 7) {
            opportunities.push({
                title: "Operational Bottleneck Elimination",
                impact: "Critical",
                description: `Pain level ${formData.painLevel[0]}/10 detected. Deploy task-specific agents to decouple revenue generation from manual effort.`,
                icon: Zap,
                color: "text-red-500"
            })
        }

        if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') {
            opportunities.push({
                title: "Workflow Automation Infrastructure",
                impact: "High",
                description: "Establish a central automation bus (e.g., Make/Zapier enterprise) to orchestrate data flow between disconnected systems.",
                icon: Workflow,
                color: "text-yellow-400"
            })
        }

        return opportunities
    }

    const opportunities = generateOpportunities()

    // Generate Architecture Blueprint (Replacing DIY Steps)
    const generateArchitectureBlueprint = () => {
        const steps = [
            {
                step: "01",
                title: "Data Ingestion Layer",
                description: "Centralize unstructured data (calls, emails, docs) into a vector database for AI retrieval.",
                icon: Database
            },
            {
                step: "02",
                title: "Contextual Reasoning Engine",
                description: "Deploy an LLM (GPT-4o/Claude 3.5) with custom system prompts to analyze intent and sentiment.",
                icon: Brain
            },
            {
                step: "03",
                title: "Action Orchestration Bus",
                description: "Connect the AI reasoning layer to your APIs (CRM, Calendar, Billing) to execute tasks autonomously.",
                icon: Server
            },
            {
                step: "04",
                title: "Multi-Modal Output Interface",
                description: "Deliver responses via the user's preferred channel: Voice, SMS, Email, or WhatsApp.",
                icon: Network
            },
            {
                step: "05",
                title: "Feedback & Optimization Loop",
                description: "Implement RAG (Retrieval Augmented Generation) to let the system learn from past interactions.",
                icon: TrendingUp
            }
        ]

        return steps
    }

    const architectureSteps = generateArchitectureBlueprint()

    // Generate solution recommendations
    const generateSolutions = () => {
        const solutions = []

        // Starter Package -> AI Core Infrastructure
        if (formData.currentRevenue === 'early' || formData.growthBudget === 'starter') {
            solutions.push({
                tier: "AI Core Infrastructure",
                price: "$2,500 - $5,000",
                timeline: "2-4 weeks",
                includes: [
                    "Voice Agent Deployment",
                    "Autonomous Nurture Sequences",
                    "Sentiment-Based Review Engine",
                    "CRM Vector Sync"
                ],
                bestFor: "Businesses establishing their AI foundation",
                cta: "Deploy Core Infrastructure"
            })
        }

        // Growth Package -> Autonomous Growth Engine
        if (formData.currentRevenue === 'growth' || formData.growthBudget === 'moderate' || formData.growthBudget === 'aggressive') {
            solutions.push({
                tier: "Autonomous Growth Engine",
                price: "$10,000 - $25,000",
                timeline: "4-8 weeks",
                includes: [
                    "Everything in Core Infrastructure",
                    "Custom Agent Swarm Development",
                    "Omnichannel Orchestration",
                    "Predictive Analytics Dashboard",
                    "Staff AI Augmentation Training",
                    "90-Day Neural Optimization"
                ],
                bestFor: "Scaling companies needing high-throughput automation",
                cta: "Initialize Growth Engine"
            })
        }

        // Enterprise Package -> Enterprise Neural Network
        if (formData.currentRevenue === 'established' || formData.currentRevenue === 'leader' || formData.growthBudget === 'leader' || formData.growthBudget === 'enterprise') {
            solutions.push({
                tier: "Enterprise Neural Network",
                price: "$50,000+",
                timeline: "3-6 months",
                includes: [
                    "Everything in Growth Engine",
                    "Full-Stack Business Re-Engineering",
                    "Proprietary Model Fine-Tuning",
                    "Multi-Location Sync",
                    "Unlimited API Integrations",
                    "Dedicated Solutions Architect",
                    "12-Month Strategic Partnership"
                ],
                bestFor: "Market leaders dominating via technological moat",
                cta: "Build Enterprise System"
            })
        }

        // Co-Founder Model
        solutions.push({
            tier: "Strategic AI Partnership",
            price: "Revenue Share Model",
            timeline: "6-12 months",
            includes: [
                "Zero Upfront Development Cost",
                "Full Technical Risk Absorption",
                "End-to-End Digital Transformation",
                "Continuous Model Optimization",
                "Aligned Incentives Architecture"
            ],
            bestFor: "High-potential ventures with proven market fit",
            cta: "Apply for Partnership"
        })

        return solutions
    }

    const solutions = generateSolutions()

    return (
        <div className="max-w-7xl mx-auto space-y-16 pb-20">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-8"
            >
                <div className="inline-block relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur opacity-25 animate-pulse"></div>
                    <div className="relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2">
                        <span className="text-blue-400 font-mono text-sm tracking-wider">SYSTEM AUDIT COMPLETE</span>
                    </div>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Your AI Readiness <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Report</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                    {formData.companyName}, we've analyzed your operational data. Here is your blueprint for achieving autonomous scale.
                </p>
            </motion.div>

            {/* Overall Score */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Card className="bg-black/40 backdrop-blur-xl border-white/10 p-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="text-center space-y-8 relative z-10">
                        <h2 className="text-2xl font-medium text-slate-200">System Maturity Index</h2>
                        <div className="relative inline-block">
                            <div className="text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                                {Math.round((revenueScore + automationScore + salesScore + retentionScore + timeScore) / 5)}
                            </div>
                            <div className="text-slate-500 text-sm mt-4 font-mono tracking-widest uppercase">/ 100 Possible Score</div>
                        </div>
                        <div className="max-w-md mx-auto">
                            <Progress
                                value={(revenueScore + automationScore + salesScore + retentionScore + timeScore) / 5}
                                className="h-2 bg-slate-800"
                            />
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Mini-Wins -> AI Quick Deployments */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="space-y-8"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                            <Cpu className="w-6 h-6 text-green-400" />
                        </div>
                        Rapid Deployment Assets
                    </h2>
                    <span className="text-xs font-mono text-green-400 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20">
                        READY FOR DEPLOYMENT
                    </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {miniWins.map((win, idx) => (
                        <Card key={idx} className="bg-black/40 backdrop-blur-md border-white/10 p-8 hover:border-green-500/30 transition-all group relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="text-6xl">{win.icon}</span>
                            </div>
                            <div className="space-y-6 relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <h3 className="text-white font-bold text-lg">{win.title}</h3>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{win.description}</p>
                                </div>

                                <div className="bg-black/50 rounded-xl p-5 border border-white/5 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto custom-scrollbar">
                                    <pre className="whitespace-pre-wrap">{win.content}</pre>
                                </div>

                                <Button
                                    onClick={() => handleCopy(formatMiniWinForCopy(win), idx)}
                                    className="w-full bg-white/5 hover:bg-green-500/20 text-white border border-white/10 hover:border-green-500/50"
                                    variant="outline"
                                >
                                    {copiedIndex === idx ? (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Asset Copied
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-4 h-4 mr-2" />
                                            Copy Asset to Clipboard
                                        </>
                                    )}
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* Current State Analysis */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <BarChart3 className="w-6 h-6 text-blue-400" />
                    </div>
                    Operational Analysis
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: 'Revenue Growth', score: revenueScore, icon: TrendingUp },
                        { name: 'Automation Density', score: automationScore, icon: Rocket },
                        { name: 'Sales Efficiency', score: salesScore, icon: Target },
                        { name: 'Retention Rate', score: retentionScore, icon: Users },
                        { name: 'Founder Autonomy', score: timeScore, icon: Clock },
                    ].map((area, idx) => (
                        <Card key={idx} className="bg-black/40 backdrop-blur-md border-white/10 p-6 hover:border-blue-500/30 transition-all group">
                            <div className="flex items-center justify-between mb-6">
                                <div className={`p-2 rounded-lg bg-white/5 ${area.score >= 70 ? 'text-green-400' : area.score >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                                    <area.icon className="w-5 h-5" />
                                </div>
                                <span className="text-2xl font-bold text-white">{area.score}</span>
                            </div>
                            <h3 className="text-slate-200 font-medium mb-3">{area.name}</h3>
                            <Progress value={area.score} className="h-1.5 bg-slate-800" />
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* Opportunity Gaps */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Lightbulb className="w-6 h-6 text-purple-400" />
                    </div>
                    Strategic Implementation Vectors
                </h2>
                
                <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-white/10 p-10 backdrop-blur-xl">
                    <div className="text-center space-y-4">
                        <p className="text-slate-300 text-lg font-light">Projected Annual Value of Implementation</p>
                        <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 bg-clip-text text-transparent animate-shimmer">
                            {potentialIncrease}
                        </div>
                        <p className="text-slate-500 font-mono text-sm tracking-wider">RECOVERABLE ANNUAL REVENUE</p>
                    </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                    {opportunities.map((opp, idx) => (
                        <Card key={idx} className="bg-black/40 border-white/10 p-8 hover:border-purple-500/30 transition-all group">
                            <div className="flex items-start gap-6">
                                <div className={`p-4 bg-white/5 rounded-xl border border-white/5 ${opp.color}`}>
                                    <opp.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-white font-bold text-lg">{opp.title}</h3>
                                        <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border ${opp.impact === 'Critical' ? 'bg-red-500/10 text-red-400 border-red-500/20' : opp.impact === 'High' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-blue-500/10 text-blue-400 border-blue-500/20'}`}>
                                            {opp.impact} Priority
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">{opp.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </motion.div>

            {/* System Architecture Blueprint (Replaced DIY Steps) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20">
                        <Server className="w-6 h-6 text-orange-400" />
                    </div>
                    System Architecture Blueprint
                </h2>
                <p className="text-slate-400 text-lg">The technical roadmap to building your autonomous enterprise.</p>

                <div className="space-y-4">
                    {architectureSteps.map((step, idx) => (
                        <Card key={idx} className="bg-black/40 backdrop-blur-md border-white/10 p-6 hover:border-orange-500/30 transition-all group">
                            <div className="flex items-center gap-6">
                                <div className="hidden md:flex flex-col items-center gap-2">
                                    <div className="w-px h-8 bg-white/10 group-first:hidden"></div>
                                    <div className="w-12 h-12 rounded-full border border-white/10 bg-black/50 flex items-center justify-center text-slate-500 font-mono text-sm group-hover:border-orange-500/50 group-hover:text-orange-400 transition-colors">
                                        {step.step}
                                    </div>
                                    <div className="w-px h-8 bg-white/10 group-last:hidden"></div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-2 bg-white/5 rounded-lg text-orange-400 md:hidden">
                                            {step.step}
                                        </div>
                                        <h3 className="text-white font-bold text-lg">{step.title}</h3>
                                        <step.icon className="w-4 h-4 text-slate-600" />
                                    </div>
                                    <p className="text-slate-400 text-sm">{step.description}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <Card className="bg-yellow-900/10 border-yellow-500/20 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <ShieldCheck className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-bold mb-2">Technical Feasibility Assessment</h3>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                While this architecture is buildable with off-the-shelf components (LangChain, Pinecone, OpenAI API), 
                                implementing a production-grade system typically requires 400-600 engineering hours to ensure 
                                reliability, latency handling, and proper guardrails against hallucinations.
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
                className="space-y-8"
            >
                <h2 className="text-3xl font-bold text-white flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Rocket className="w-6 h-6 text-purple-400" />
                    </div>
                    Deployment Options
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {solutions.map((solution, idx) => (
                        <Card key={idx} className={`bg-black/40 backdrop-blur-xl border-white/10 p-8 hover:border-purple-500/30 transition-all ${solution.cta.includes('Initialize') ? 'border-purple-500/50 ring-1 ring-purple-500/20' : ''}`}>
                            {solution.cta.includes('Initialize') && (
                                <div className="bg-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-full inline-block mb-6 tracking-widest uppercase">
                                    Recommended Configuration
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{solution.tier}</h3>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-3xl font-light text-slate-200">
                                    {solution.price}
                                </span>
                            </div>
                            <p className="text-slate-500 text-sm font-mono mb-8 flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                EST. DEPLOYMENT: {solution.timeline}
                            </p>

                            <div className="space-y-4 mb-8">
                                {solution.includes.map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                                        <span className="text-slate-300 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="w-full bg-white text-black hover:bg-slate-200 font-medium py-6">
                                {solution.cta} <ArrowRight className="w-4 h-4 ml-2" />
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
                <Card className="bg-gradient-to-br from-indigo-900/60 to-purple-900/60 border-white/10 p-12 text-center backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Deploy Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Autonomous Infrastructure</span>?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                            Book a technical strategy session. We'll architect the exact stack needed to capture your ${potentialIncrease.replace('$', '')} opportunity.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-black hover:bg-slate-200 text-lg px-8 py-6 rounded-full font-medium transition-all hover:scale-105">
                                <Calendar className="w-5 h-5 mr-2" />
                                Schedule Strategy Session
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full transition-all hover:scale-105">
                                <Download className="w-5 h-5 mr-2" />
                                Export Technical Report
                            </Button>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}
