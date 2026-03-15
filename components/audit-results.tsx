"use client"

import { motion } from "framer-motion"
import { useState, useMemo, useEffect } from "react"
import ReactMarkdown from 'react-markdown'
import {
  TrendingUp, AlertCircle, CheckCircle2, Target, Lightbulb,
  Rocket, DollarSign, Clock, Users, BarChart3, ArrowRight,
  Download, Calendar, Zap, Brain, Mail, Search,
  ShieldCheck, Settings, MessageSquare, FileText, Calculator,
  RefreshCw, Headphones, LayoutDashboard, Layers, Building2,
  Loader2, Sparkles, ChevronDown, ChevronUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { generateIndustryPlaybook } from "@/lib/freebie-generator"
import { getBusinessCategory, type BusinessCategory } from "@/lib/audit-industry-config"
import { industries } from "@/lib/industry-data"

interface AuditResultsProps {
  formData: any
  auditScore: number
  researchFindings?: {
    websiteFindings?: string[]
    operationalIssues?: string[]
    opportunities?: { opportunity: string; roi: string }[]
    aiScores?: any
    websiteContent?: string
  } | null
}

// ─── Helpers (industry-aware number parsing) ─────────────
function parseChurnPct(v: string): number {
  if (v === '20+') return 0.25
  if (v === '10-20') return 0.15
  if (v === '5-10') return 0.07
  if (v === 'under-5') return 0.03
  return 0.10
}

function parseProductPrice(v: string, cat: BusinessCategory): number {
  // Same value keys map to different dollar amounts per industry
  const map: Record<BusinessCategory, Record<string, number>> = {
    online: { '5k+': 7500, '1k-5k': 3000, '200-1k': 600, '50-200': 125, 'under-50': 30, 'recurring': 100 },
    local: { '5k+': 15000, '1k-5k': 5000, '200-1k': 1200, '50-200': 350, 'under-50': 100, 'recurring': 200 },
    professional: { '5k+': 25000, '1k-5k': 10000, '200-1k': 3500, '50-200': 1000, 'under-50': 250, 'recurring': 5000 },
    product: { '5k+': 7500, '1k-5k': 2500, '200-1k': 600, '50-200': 100, 'under-50': 30, 'recurring': 50 },
  }
  return map[cat]?.[v] ?? 100
}

function parseConversionPct(v: string, cat: BusinessCategory): number {
  // Local/professional use different scales (20-80% close rates vs 1-10% web conversion)
  if (cat === 'local' || cat === 'professional') {
    if (v === '10+') return 0.80
    if (v === '5-10') return 0.65
    if (v === '3-5') return 0.45
    if (v === '1-3') return 0.30
    return 0.15
  }
  if (v === '10+') return 0.12
  if (v === '5-10') return 0.07
  if (v === '3-5') return 0.04
  if (v === '1-3') return 0.02
  return 0.005
}

function parseListSize(v: string, cat: BusinessCategory): number {
  // Same keys map to different actual counts per industry
  const map: Record<BusinessCategory, Record<string, number>> = {
    online: { '50k+': 75000, '10k-50k': 30000, '5k-10k': 7500, '1k-5k': 3000, 'under-1k': 500 },
    local: { '50k+': 15000, '10k-50k': 5000, '5k-10k': 1000, '1k-5k': 300, 'under-1k': 50 },
    professional: { '50k+': 750, '10k-50k': 250, '5k-10k': 60, '1k-5k': 20, 'under-1k': 5 },
    product: { '50k+': 150000, '10k-50k': 50000, '5k-10k': 12000, '1k-5k': 2500, 'under-1k': 250 },
  }
  return map[cat]?.[v] ?? 500
}

function fmt$(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`
  return `$${Math.round(n)}`
}

function scoreColor(s: number) {
  if (s >= 70) return "text-[#D90019]"
  if (s >= 40) return "text-[#888]"
  return "text-black"
}
function scoreBg(s: number) {
  if (s >= 70) return "stroke-[#D90019]"
  if (s >= 40) return "stroke-[#888]"
  return "stroke-black"
}

// ─── Sub-score calculator (mirrors lib/audit-analyzer.ts) ─
function calcSubScores(fd: any) {
  // Revenue
  let revenue = 50
  if (fd.revenueTrend === 'Growing') revenue += 25
  else if (fd.revenueTrend === 'Declining') revenue -= 25
  if (fd.profitMargin === '60+') revenue += 15
  else if (fd.profitMargin === '40-60') revenue += 10
  else if (fd.profitMargin === 'under-20') revenue -= 10
  else if (fd.profitMargin === 'negative') revenue -= 20
  if (fd.currentRevenue === '3m+') revenue += 10
  else if (fd.currentRevenue === '1m-3m') revenue += 5
  else if (fd.currentRevenue === 'pre-revenue') revenue -= 10
  revenue = Math.max(0, Math.min(100, revenue))

  // Automation
  let automation = 0
  if (fd.percentAutomated === '60+') automation = 85
  else if (fd.percentAutomated === '30-60') automation = 60
  else if (fd.percentAutomated === 'under-30') automation = 35
  else if (fd.percentAutomated === 'none') automation = 15
  const toolCount = fd.tools?.length || 0
  automation += Math.min(15, toolCount * 2)
  if (fd.onboardingAutomated === 'Yes') automation += 10
  else if (fd.onboardingAutomated === 'Partially') automation += 5
  automation = Math.max(0, Math.min(100, automation))

  // Acquisition
  let acquisition = 50
  if (fd.conversionRate === '10+') acquisition = 90
  else if (fd.conversionRate === '5-10') acquisition = 75
  else if (fd.conversionRate === '3-5') acquisition = 55
  else if (fd.conversionRate === '1-3') acquisition = 35
  else if (fd.conversionRate === 'under-1') acquisition = 15
  if (fd.listSize === '50k+') acquisition += 10
  else if (fd.listSize === '10k-50k') acquisition += 5
  else if (fd.listSize === 'under-1k') acquisition -= 10
  if (fd.trafficSource === 'mixed') acquisition += 5
  acquisition = Math.max(0, Math.min(100, acquisition))

  // Retention
  let retention = 50
  if (fd.churnRate === 'under-5') retention = 85
  else if (fd.churnRate === '5-10') retention = 60
  else if (fd.churnRate === '10-20') retention = 35
  else if (fd.churnRate === '20+') retention = 15
  else if (fd.churnRate === 'unknown') retention = 30
  if (fd.productPricePoint === '5k+' || fd.productPricePoint === '1k-5k') retention += 10
  if (fd.productPricePoint === 'recurring') retention += 5
  retention = Math.max(0, Math.min(100, retention))

  // Time
  let time = 50
  if (fd.twoWeeksOff === 'Yes') time = 80
  else if (fd.twoWeeksOff === 'Maybe') time = 45
  else time = 20
  if (fd.hoursPerWeek === 'under-20') time += 10
  else if (fd.hoursPerWeek === '20-40') time += 5
  else if (fd.hoursPerWeek === '40-60') time -= 5
  else if (fd.hoursPerWeek === '60+') time -= 15
  if (fd.highValueWork === '60+') time += 10
  else if (fd.highValueWork === '20-40') time -= 10
  else if (fd.highValueWork === 'under-20') time -= 15
  time = Math.max(0, Math.min(100, time))

  return { revenue, automation, acquisition, retention, time }
}

function categoryInsight(cat: string, fd: any): string {
  const bCat = getBusinessCategory(fd.businessType || '')

  switch (cat) {
    case 'Revenue': {
      if (fd.revenueTrend === 'Growing') {
        const m: Record<BusinessCategory, string> = {
          online: "Revenue is trending up. AI infrastructure can accelerate this without adding headcount.",
          local: "Revenue is climbing. Automated booking, review generation, and follow-up can compound this growth without adding crew.",
          professional: "Revenue is trending up. Systematizing client delivery and pipeline automation can accelerate growth without proportional hiring.",
          product: "Revenue is growing. Automated inventory, marketing, and fulfillment can sustain this trajectory at higher volume.",
        }
        return m[bCat]
      }
      if (fd.revenueTrend === 'Flat') {
        const m: Record<BusinessCategory, string> = {
          online: "Revenue has plateaued. Automated funnels and AI-driven upsells can reignite growth.",
          local: "Revenue has plateaued. Automated follow-up, review generation, and lead capture can reignite growth without more ad spend.",
          professional: "Revenue is flat. Automated pipeline nurture, proposal systems, and upsell sequences to existing clients can restart momentum.",
          product: "Sales have plateaued. Email automation, abandoned cart recovery, and retargeting can unlock the next growth phase.",
        }
        return m[bCat]
      }
      const m: Record<BusinessCategory, string> = {
        online: "Revenue is declining. Urgent automation of acquisition and retention can stabilize and reverse the trend.",
        local: "Revenue is declining. Immediate focus on lead recapture, review generation, and reactivating past customers can reverse this.",
        professional: "Revenue is declining. Urgent pipeline rebuilding, client reactivation, and referral automation can stabilize the business.",
        product: "Revenue is declining. Immediate focus on customer retention, marketing optimization, and reducing returns can stop the bleeding.",
      }
      return m[bCat]
    }
    case 'Automation': {
      if (fd.percentAutomated === '60+') return "You're well-automated. AI intelligence layers and optimization are your next edge."
      if (fd.percentAutomated === '30-60') {
        const m: Record<BusinessCategory, string> = {
          online: "You have tools but they're not connected. Full automation could save 20+ hrs/week.",
          local: "You have some tools in place, but they're siloed. Connecting scheduling, invoicing, and follow-up creates a system that runs itself.",
          professional: "You have tools but they're not talking to each other. Connecting CRM, project management, and billing can eliminate 15+ hours of admin per week.",
          product: "Your systems are partially connected. Linking inventory, orders, and shipping into one flow can eliminate errors and save 15+ hrs/week.",
        }
        return m[bCat]
      }
      const m: Record<BusinessCategory, string> = {
        online: "Most of your operations are manual. Automation alone could transform your capacity overnight.",
        local: "Most of your operations are manual. Even basic automation of scheduling, follow-up, and invoicing will transform your capacity.",
        professional: "Most of your workflows are manual. Automating client intake, proposals, and project tracking will free your team for billable work.",
        product: "Most of your operations are manual. Automating order processing, inventory updates, and customer communication is the fastest path to scale.",
      }
      return m[bCat]
    }
    case 'Acquisition': {
      const cvr = parseConversionPct(fd.conversionRate, bCat)
      const goodThreshold = bCat === 'local' || bCat === 'professional' ? 0.50 : 0.05
      if (cvr >= goodThreshold) {
        const m: Record<BusinessCategory, string> = {
          online: "Solid conversion rate. AI can optimize your funnel for even higher enrollment and purchase rates.",
          local: "Strong close rate. AI can optimize your booking flow and speed up response times for even better results.",
          professional: "Strong proposal close rate. AI can enhance your proposals, speed follow-up, and identify cross-sell opportunities.",
          product: "Solid conversion rate. AI-driven A/B testing and personalization can push this even higher.",
        }
        return m[bCat]
      }
      const m: Record<BusinessCategory, string> = {
        online: "Low conversion rate means your funnel is leaking. AI-driven optimization and follow-up can 2-3x your conversions.",
        local: "Leads are slipping through the cracks. Faster response times, automated follow-up, and online booking can 2-3x your close rate.",
        professional: "Low close rate means deals are dying in the pipeline. Faster proposals, automated nurture, and better qualification can double your win rate.",
        product: "Low conversion rate means visitors aren't buying. Personalized recommendations, urgency triggers, and cart recovery can 2-3x conversions.",
      }
      return m[bCat]
    }
    case 'Retention': {
      if (fd.churnRate === 'under-5') {
        const m: Record<BusinessCategory, string> = {
          online: "Excellent retention. AI can deepen engagement with personalized content and proactive outreach.",
          local: "Excellent customer retention. Proactive maintenance reminders and loyalty campaigns can boost repeat business even further.",
          professional: "Excellent client retention. AI can identify expansion opportunities and automate renewal conversations.",
          product: "Excellent repeat purchase rate. AI can optimize loyalty programs and personalized recommendations to increase LTV.",
        }
        return m[bCat]
      }
      if (fd.churnRate === '5-10') {
        const m: Record<BusinessCategory, string> = {
          online: "Moderate churn. Automated onboarding and engagement sequences can cut this significantly.",
          local: "Moderate customer loss. Automated post-service follow-ups, review requests, and maintenance reminders can strengthen loyalty.",
          professional: "Moderate client churn. Proactive check-ins, automated reporting, and quarterly reviews can improve retention.",
          product: "Moderate return/churn rate. Post-purchase nurture sequences and loyalty programs can improve this.",
        }
        return m[bCat]
      }
      const m: Record<BusinessCategory, string> = {
        online: "High churn is eating your growth. Automated health scoring and re-engagement can cut churn by 30-50%.",
        local: "You're losing customers that should be coming back. Automated follow-up, satisfaction surveys, and loyalty programs can cut this by 30-50%.",
        professional: "Client attrition is dragging revenue. Automated satisfaction checks, proactive value delivery, and retention systems can cut losses significantly.",
        product: "High return/churn rate is killing margins. Better product descriptions, post-purchase education, and quality improvements are critical.",
      }
      return m[bCat]
    }
    case 'Time': {
      if (fd.twoWeeksOff === 'Yes') return "Your business runs without you. AI can unlock the next level of scale."
      const m: Record<BusinessCategory, string> = {
        online: "You're the bottleneck. AI delegation systems let you step back without losing momentum.",
        local: "You're the bottleneck in daily operations. AI can handle scheduling, follow-up, and client communication so you focus on growth.",
        professional: "You're the bottleneck. AI can handle client intake, scheduling, and routine communication so your team focuses on billable work.",
        product: "You're tied to daily operations. AI can handle order management, customer service, and inventory so you focus on growth strategy.",
      }
      return m[bCat]
    }
    default: return ""
  }
}

const catIcons: Record<string, any> = {
  Revenue: DollarSign, Automation: Settings, Acquisition: Target, Retention: Users, Time: Clock
}

// ─── Opportunities (fully category-aware + growth-level aware) ─
function topOpportunities(fd: any) {
  const opps: { icon: any; title: string; desc: string; roi: string; timeline: string; priority: number }[] = []
  const cat = getBusinessCategory(fd.businessType || '')
  const growth = getGrowthLevel(fd)
  const industryData = industries.find(i => i.slug === fd.businessType)

  if (industryData?.services?.singleSystems?.examples) {
    industryData.services.singleSystems.examples.slice(0, 2).forEach(ex => {
      opps.push({
        icon: Sparkles,
        title: ex.title,
        desc: ex.detail,
        roi: ex.roi,
        timeline: "1-2 weeks",
        priority: 90
      })
    })
  }

  if (fd.onboardingAutomated === 'No' || fd.onboardingAutomated === 'Partially') {
    const titles: Record<BusinessCategory, string> = {
      online: "Automated Onboarding",
      local: "Automated Client Intake & Scheduling",
      professional: "Automated Client Onboarding",
      product: "Automated Order & Fulfillment Flow",
    }
    const descs: Record<BusinessCategory, string> = {
      online: "Manual onboarding creates bottlenecks and inconsistent experiences. AI-driven sequences can activate users 3x faster and reduce early churn.",
      local: "Manual intake wastes time and loses leads. Automated booking confirmation, intake forms, and pre-visit communication get jobs started faster and reduce no-shows.",
      professional: "Manual client onboarding creates delays and inconsistent first impressions. Automated intake, document collection, and welcome sequences set the right tone from day one.",
      product: "Manual order processing creates delays and errors. Automated confirmation, tracking updates, and post-purchase sequences improve the customer experience at scale.",
    }
    const rois: Record<BusinessCategory, string> = {
      online: "3x faster activation",
      local: "70% faster client onboarding, 50% fewer no-shows",
      professional: "70% faster client onboarding",
      product: "2x faster order processing",
    }
    opps.push({ icon: Rocket, title: titles[cat], desc: descs[cat], roi: rois[cat], timeline: "2-3 weeks", priority: 92 })
  }

  if (fd.churnRate === '20+' || fd.churnRate === '10-20') {
    const churnPct = parseChurnPct(fd.churnRate)
    const price = parseProductPrice(fd.productPricePoint, cat)
    const list = parseListSize(fd.listSize, cat)
    const lostAnnual = Math.round(list * churnPct * price)
    const titles: Record<BusinessCategory, string> = {
      online: "Churn Prevention Engine",
      local: "Customer Retention & Repeat Business System",
      professional: "Client Retention & Renewal System",
      product: "Customer Loyalty & Repeat Purchase Engine",
    }
    const descs: Record<BusinessCategory, string> = {
      online: `Your ${fd.churnRate}% churn rate is costing an estimated ${fmt$(lostAnnual)}/year. Automated health scoring and re-engagement sequences can cut churn by 30-50%.`,
      local: `You're losing customers worth an estimated ${fmt$(lostAnnual)}/year. Automated follow-up, maintenance reminders, and satisfaction surveys can recover 30-50% of that.`,
      professional: `Client attrition is costing an estimated ${fmt$(lostAnnual)}/year. Automated check-ins, proactive reporting, and renewal sequences can cut churn by 30-50%.`,
      product: `Customer loss is costing an estimated ${fmt$(lostAnnual)}/year. Loyalty programs, post-purchase nurture, and reorder reminders can recover 30-50% of lost revenue.`,
    }
    opps.push({ icon: RefreshCw, title: titles[cat], desc: descs[cat], roi: `${fmt$(lostAnnual * 0.3)}/year saved`, timeline: "3-4 weeks", priority: 95 })
  }

  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    const hrs = fd.supportHoursPerWeek === '10+' ? 12 : 7
    const titles: Record<BusinessCategory, string> = {
      online: "AI-Powered Support",
      local: "AI Receptionist & Support System",
      professional: "AI Client Communication Layer",
      product: "AI Customer Service System",
    }
    const descs: Record<BusinessCategory, string> = {
      online: `You're spending ${fd.supportHoursPerWeek} hrs/week on support. An AI assistant trained on your content can handle 80% of questions instantly.`,
      local: `You're spending ${fd.supportHoursPerWeek} hrs/week on calls and inquiries. An AI receptionist handles scheduling, FAQs, and call routing 24/7 — even after hours.`,
      professional: `You're spending ${fd.supportHoursPerWeek} hrs/week on client communication. AI can handle status updates, scheduling, and routine questions, freeing your team for billable work.`,
      product: `You're spending ${fd.supportHoursPerWeek} hrs/week on customer service. An AI system can handle order status, returns, and FAQs — resolving 80% of tickets instantly.`,
    }
    opps.push({ icon: Headphones, title: titles[cat], desc: descs[cat], roi: `${Math.round(hrs * 0.8 * 4)} hrs/month freed up`, timeline: "2-3 weeks", priority: 88 })
  }

  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') {
    const titles: Record<BusinessCategory, string> = {
      online: "AI Content Engine",
      local: "Automated Marketing & Review Engine",
      professional: "AI Thought Leadership & Marketing Engine",
      product: "AI Marketing & Product Content Engine",
    }
    const descs: Record<BusinessCategory, string> = {
      online: "You're spending significant time on content. AI repurposing can turn 1 piece into 30+ assets in your voice and style.",
      local: "Automate review requests after every job, generate social proof, and run targeted local campaigns without lifting a finger.",
      professional: "AI can draft case studies, LinkedIn posts, and email campaigns from your existing client work — building authority without the time sink.",
      product: "AI can generate product descriptions, social content, and email campaigns from your existing assets — at 10x the speed.",
    }
    const rois: Record<BusinessCategory, string> = {
      online: "10-15 hrs/week saved", local: "3x reviews, consistent lead flow",
      professional: "5-10 hrs/week saved, consistent pipeline", product: "10-15 hrs/week saved",
    }
    opps.push({ icon: FileText, title: titles[cat], desc: descs[cat], roi: rois[cat], timeline: "1-2 weeks", priority: 82 })
  }

  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    const descs: Record<BusinessCategory, string> = {
      online: "With most processes still manual, a central automation layer connecting your tools can save 15-20 hours per week and eliminate errors.",
      local: "Scheduling, invoicing, follow-ups, and client communication are all manual. Connecting these systems saves 15-20 hours per week and eliminates dropped balls.",
      professional: "Client intake, proposals, billing, and project updates are all manual. An automation hub connecting these saves 15-20 hours per week and reduces errors.",
      product: "Order processing, inventory updates, and customer communication are all manual. Automating these workflows saves 15-20 hours per week and prevents costly errors.",
    }
    opps.push({ icon: Zap, title: "Workflow Automation Hub", desc: descs[cat], roi: "15-20 hrs/week saved", timeline: "3-4 weeks", priority: 85 })
  }

  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    const titles: Record<BusinessCategory, string> = {
      online: "Funnel Optimization",
      local: "Lead Capture & Speed-to-Contact",
      professional: "Pipeline & Proposal Optimization",
      product: "Conversion Rate Optimization",
    }
    const descs: Record<BusinessCategory, string> = {
      online: "Low conversion rates mean your funnel is leaking. AI-driven A/B testing, lead scoring, and personalized follow-up can 2-3x your conversion rate.",
      local: "Slow response times and missed follow-ups are costing you jobs. AI instant response and automated nurture can 2-3x your booking rate.",
      professional: "Deals are dying in the pipeline. Faster proposal generation, automated follow-up, and better lead qualification can double your win rate.",
      product: "Low conversion rate means visitors aren't buying. Personalized recommendations, urgency triggers, and abandoned cart recovery can 2-3x conversions.",
    }
    opps.push({ icon: Target, title: titles[cat], desc: descs[cat], roi: "2-3x conversion rate", timeline: "2-4 weeks", priority: 80 })
  }

  if (fd.twoWeeksOff !== 'Yes') {
    // Priority increases if they're also working 60+ hours and in growth/scale stage
    let delegationPriority = 76
    if (fd.hoursPerWeek === '60+') delegationPriority += 8
    if (growth.level === 'scale' || growth.level === 'enterprise') delegationPriority += 5
    if (fd.bottleneck === 'time') delegationPriority += 10

    const descs: Record<BusinessCategory, string> = {
      online: "You can't step away without things breaking. AI agents handle triage, support, and client comms 24/7.",
      local: "You can't step away without jobs falling through the cracks. AI handles scheduling, client communication, and dispatch 24/7.",
      professional: "You can't take vacation without client work slipping. AI handles intake, scheduling, and routine client communication while you're away.",
      product: "You can't step away without orders and customer issues piling up. AI handles order management, support, and inventory alerts 24/7.",
    }
    opps.push({ icon: Brain, title: "AI Business Delegation Layer", desc: descs[cat], roi: "Owner freedom + sustained revenue", timeline: "4-6 weeks", priority: delegationPriority })
  }

  // Boost priority for bottleneck-aligned opportunities
  const bottleneckMap: Record<string, string[]> = {
    traffic: ["Lead Capture", "Funnel", "Marketing", "Conversion"],
    conversion: ["Funnel", "Conversion", "Pipeline", "Lead Capture"],
    fulfillment: ["Workflow", "Automated Order", "Automated Client"],
    churn: ["Churn", "Retention", "Loyalty", "Repeat"],
    time: ["Delegation", "Workflow", "Automation Hub"],
    team: ["Delegation", "Automation Hub", "Workflow"],
  }
  const boostTerms = bottleneckMap[fd.bottleneck] || []
  opps.forEach(o => {
    if (boostTerms.some(t => o.title.includes(t))) o.priority += 10
  })

  opps.sort((a, b) => b.priority - a.priority)
  return opps.slice(0, 3)
}

// ─── Quick Wins (industry-aware) ──────────────────────────
function quickWins(fd: any) {
  const wins: { icon: string; text: string }[] = []
  const cat = getBusinessCategory(fd.businessType || '')

  if (fd.onboardingAutomated !== 'Yes') {
    const m: Record<BusinessCategory, string> = {
      online: "Set up automated onboarding emails for new customers — reduce early churn by 30%+",
      local: "Set up automated booking confirmations and pre-visit instructions — reduce no-shows by 40%+",
      professional: "Set up automated client welcome sequences with intake forms and scheduling — make a great first impression every time",
      product: "Set up automated order confirmation and shipping notification emails — reduce support tickets by 30%+",
    }
    wins.push({ icon: "🚀", text: m[cat] })
  }
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') {
    const m: Record<BusinessCategory, string> = {
      online: "Launch a win-back email campaign to churned users — recover 10-20% of lost revenue",
      local: "Send a 'we miss you' campaign to past customers with a special offer — reactivate 10-20% of dormant clients",
      professional: "Reach out to past clients with a value-add update or check-in — reactivate 10-20% of dormant relationships",
      product: "Launch a win-back campaign to lapsed buyers with personalized recommendations — recover 10-20% of lost customers",
    }
    wins.push({ icon: "🔄", text: m[cat] })
  }
  if (fd.twoWeeksOff === 'No') {
    const m: Record<BusinessCategory, string> = {
      online: "Delegate email triage and support to AI — save 5-10 hrs/week instantly",
      local: "Set up an after-hours auto-response with booking link — stop losing leads outside business hours",
      professional: "Delegate routine client emails and scheduling to AI — save 5-10 hrs/week instantly",
      product: "Set up automated customer service responses for common questions — save 5-10 hrs/week",
    }
    wins.push({ icon: "🧠", text: m[cat] })
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    const m: Record<BusinessCategory, string> = {
      online: "Connect your top 3 tools with Zapier/Make — eliminate 80% of manual workflows",
      local: "Connect your booking, invoicing, and review tools — eliminate double data entry and missed follow-ups",
      professional: "Connect your CRM, calendar, and billing — eliminate manual data entry between systems",
      product: "Connect your store, inventory, and shipping tools — eliminate manual order processing errors",
    }
    wins.push({ icon: "⚡", text: m[cat] })
  }
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    const m: Record<BusinessCategory, string> = {
      online: "Add an AI chatbot trained on your content — handle 80% of support questions automatically",
      local: "Add an AI chatbot to your website for booking and FAQs — capture leads 24/7 without answering the phone",
      professional: "Add a chatbot to your site for intake screening and FAQs — qualify leads automatically",
      product: "Add an AI chatbot for order status, returns, and product questions — resolve 80% of tickets instantly",
    }
    wins.push({ icon: "💬", text: m[cat] })
  }
  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') {
    const m: Record<BusinessCategory, string> = {
      online: "Use AI to repurpose your long-form content into social posts, emails, and threads",
      local: "Set up automated review request emails after every completed job — build social proof on autopilot",
      professional: "Use AI to turn client wins into case studies, LinkedIn posts, and email campaigns",
      product: "Use AI to generate product descriptions, social posts, and email campaigns from your existing content",
    }
    wins.push({ icon: "📝", text: m[cat] })
  }
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    const m: Record<BusinessCategory, string> = {
      online: "Add an automated email nurture sequence for leads — convert 30-50% more prospects",
      local: "Respond to every new lead within 5 minutes with an automated text/email — businesses that respond first win 78% of jobs",
      professional: "Add an automated proposal follow-up sequence — deals that get follow-up close at 2x the rate",
      product: "Set up abandoned cart email recovery — recapture 10-15% of lost sales automatically",
    }
    wins.push({ icon: "🎯", text: m[cat] })
  }
  if (fd.revenueTrend !== 'Growing') {
    const m: Record<BusinessCategory, string> = {
      online: "Set up automated upsell/cross-sell sequences to existing customers — increase LTV 15-25%",
      local: "Send seasonal maintenance reminders to your customer list — generate repeat business on autopilot",
      professional: "Send quarterly value reports to existing clients with expansion opportunities — increase account value 15-25%",
      product: "Set up post-purchase cross-sell and reorder reminder emails — increase repeat purchase rate 15-25%",
    }
    wins.push({ icon: "📈", text: m[cat] })
  }

  // Always-show items (industry-specific)
  const dashboardText: Record<BusinessCategory, string> = {
    online: "Create a real-time KPI dashboard — spot churn, revenue, and engagement issues early",
    local: "Create a real-time dashboard tracking leads, jobs, revenue, and reviews — spot problems before they cost you",
    professional: "Create a pipeline dashboard tracking proposals, close rate, and utilization — spot issues before they impact revenue",
    product: "Create a real-time dashboard tracking orders, inventory, returns, and ad spend — spot issues before they cost you",
  }
  wins.push({ icon: "📊", text: dashboardText[cat] })

  return wins.slice(0, 5)
}

// ─── Roadmap (industry + growth-level aware) ─────────────
function roadmap(fd: any) {
  const cat = getBusinessCategory(fd.businessType || '')
  const growth = getGrowthLevel(fd)

  const phase1: Record<BusinessCategory, string[]> = {
    online: ["Audit existing tech stack & integrations", "Automated onboarding sequences", "AI support chatbot setup"],
    local: ["Audit existing tools & disconnected systems", "Automated booking confirmation & reminders", "AI receptionist / after-hours response"],
    professional: ["Audit existing tools & client workflow", "Automated client intake & welcome sequence", "AI-assisted proposal & scheduling"],
    product: ["Audit existing tech stack & integrations", "Automated order processing & fulfillment alerts", "AI customer service for common inquiries"],
  }

  const phase2: Record<BusinessCategory, string[]> = {
    online: ["A/B test email sequences & funnels", "Churn prediction & re-engagement automation", "Content repurposing pipeline"],
    local: ["Automated review requests after every job", "Re-engagement campaigns for past customers", "Lead follow-up speed optimization"],
    professional: ["Automated proposal follow-up sequences", "Client health scoring & proactive check-ins", "Thought leadership content pipeline"],
    product: ["Abandoned cart recovery & email flows", "Customer loyalty & repeat purchase automation", "Product content & social media pipeline"],
  }

  // Growth-level adjustments for phase 2
  if (growth.level === 'early') {
    phase2[cat] = phase2[cat].map(item => {
      if (item.includes('Churn') || item.includes('health scoring')) return cat === 'local' ? "Google Business Profile optimization" : "Lead magnet & list building automation"
      return item
    })
  }

  const churnPct = parseChurnPct(fd.churnRate)
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const churnSaved = Math.round(list * churnPct * price * 0.3)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2
  const hrsRecovered = Math.round(supportHrs * 0.8 * 4)

  const phase3Shared = [`Projected: ${fmt$(churnSaved)}/year saved from reduced churn`, `${hrsRecovered}+ hrs/month freed from automated support`]
  const phase3Final: Record<BusinessCategory, string> = {
    online: "Full owner-optional operations",
    local: "Business runs without you on-site daily",
    professional: "Senior team focused on clients, not admin",
    product: "Operations run at 2x volume without hiring",
  }

  return [
    { label: "Days 1-14", title: "Install & Configure", items: phase1[cat], color: "border-red-500/40 bg-red-500/5" },
    { label: "Days 15-30", title: "Optimize & Tune", items: phase2[cat], color: "border-red-500/40 bg-red-500/5" },
    { label: "Days 31-90", title: "Scale & Grow", items: [...phase3Shared, phase3Final[cat]], color: "border-red-500/40 bg-red-500/5" },
  ]
}

// ─── Growth Level ─────────────────────────────────────────
function getGrowthLevel(fd: any): { level: string; label: string; insight: string } {
  const rev = fd.currentRevenue
  const auto = fd.percentAutomated
  const cat = getBusinessCategory(fd.businessType || '')

  if (rev === 'pre-revenue' || rev === 'under-100k') {
    const insights: Record<BusinessCategory, string> = {
      online: 'You\'re in build mode. The priority is automating lead capture and onboarding so you can focus on product and growth instead of manual operations.',
      local: 'You\'re in the early days. The priority is capturing every lead and call, automating booking, and building a review engine to establish your reputation.',
      professional: 'You\'re building your practice. The priority is automating client intake, streamlining proposals, and building a referral engine to grow your pipeline.',
      product: 'You\'re in launch mode. The priority is automating order processing, building your customer base, and optimizing your marketing spend.',
    }
    return { level: 'early', label: 'Early Stage', insight: insights[cat] }
  }
  if (rev === '100k-500k' || (rev === '500k-1m' && auto !== '60+')) {
    const insights: Record<BusinessCategory, string> = {
      online: 'You\'ve found product-market fit. Now you need systems to handle the volume without adding headcount. Automation, churn prevention, and funnel optimization are your highest-ROI moves.',
      local: 'You\'ve got steady demand. Now you need systems so growth doesn\'t mean more chaos. Automated scheduling, follow-up, and review generation are your highest-ROI moves.',
      professional: 'You\'ve built a solid client base. Now you need systems to handle capacity without proportional hiring. Pipeline automation, client onboarding, and delivery systems are key.',
      product: 'You\'ve got market traction. Now you need systems to handle volume without burning out. Fulfillment automation, email marketing, and inventory management are your highest-ROI moves.',
    }
    return { level: 'growth', label: 'Growth Stage', insight: insights[cat] }
  }
  if (rev === '500k-1m' || rev === '1m-3m') {
    const insights: Record<BusinessCategory, string> = {
      online: 'You\'re past the grind phase. The bottleneck is now operational capacity. AI infrastructure should replace manual processes across onboarding, support, and retention to free the leadership team.',
      local: 'You\'re past survival mode. The bottleneck is now operational capacity. AI systems for dispatch, customer communication, and team management will unlock the next level without more hires.',
      professional: 'You\'re past the feast-or-famine phase. The bottleneck is now delivery capacity and margins. AI-powered project management, client communication, and proposal systems free your senior team.',
      product: 'You\'re past the startup grind. The bottleneck is now supply chain and operations. AI-powered inventory forecasting, customer service, and marketing automation drive the next growth phase.',
    }
    return { level: 'scale', label: 'Scale Stage', insight: insights[cat] }
  }
  const insights: Record<BusinessCategory, string> = {
    online: 'At your scale, every manual process is a drag on margins and enterprise value. Full AI integration across departments creates the operational leverage that drives valuation multiples.',
    local: 'At your scale, every manual process limits growth and enterprise value. Full AI integration across locations, crews, and operations creates the leverage that drives valuation multiples.',
    professional: 'At your scale, every manual process drags on margins and limits partner earnings. Full AI integration across client service, operations, and business development creates institutional leverage.',
    product: 'At your scale, every manual process limits throughput and margins. Full AI integration across supply chain, customer experience, and operations creates the efficiency that drives enterprise value.',
  }
  return { level: 'enterprise', label: 'Enterprise Stage', insight: insights[cat] }
}

// ─── Executive Intelligence Report ───────────────────────
function executiveReport(fd: any, score: number) {
  const cat = getBusinessCategory(fd.businessType || '')
  const churnPct = parseChurnPct(fd.churnRate)
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const annualChurnLoss = Math.round(list * churnPct * price)
  const weeklyHrs = fd.hoursPerWeek === '60+' ? 60 : fd.hoursPerWeek === '40-60' ? 50 : fd.hoursPerWeek === '20-40' ? 30 : 20
  const automatedPct = fd.percentAutomated === '60+' ? 70 : fd.percentAutomated === '30-60' ? 45 : fd.percentAutomated === 'under-30' ? 20 : 5
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2

  const findings: { type: 'critical' | 'warning' | 'opportunity'; label: string; value: string; detail: string }[] = []

  if (annualChurnLoss > 3000) {
    findings.push({
      type: 'critical',
      label: 'Revenue Leaking from Churn',
      value: fmt$(annualChurnLoss) + '/year',
      detail: `Based on your ${fd.churnRate}% churn rate and average customer value, you are losing an estimated ${fmt$(annualChurnLoss)} per year in revenue that AI retention systems can recover.`
    })
  }

  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    const opsPct = 100 - automatedPct
    findings.push({
      type: 'critical',
      label: 'Operations Gap',
      value: `${opsPct}% still manual`,
      detail: `${opsPct}% of your recurring operations are manual. Businesses at your stage that automate 60%+ of ops generate 2-3x more revenue per employee and command higher exit multiples.`
    })
  }

  if (fd.twoWeeksOff === 'No') {
    findings.push({
      type: 'critical',
      label: 'Owner Dependency Risk',
      value: 'Business stops without you',
      detail: 'Your business cannot function without your direct involvement. This caps your growth ceiling, suppresses your valuation, and is a leading cause of founder burnout.'
    })
  }

  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    findings.push({
      type: 'warning',
      label: 'Conversion Underperformance',
      value: 'Below industry average',
      detail: 'Your conversion rate is significantly below what AI-optimized businesses in your category achieve. A 2x improvement requires no new traffic - just better systems and automated follow-up.'
    })
  }

  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    findings.push({
      type: 'warning',
      label: 'High-Cost Support Load',
      value: `${supportHrs}+ hrs/week manual`,
      detail: `You or your team spend ${supportHrs}+ hours per week on support that AI can handle. At $75/hr equivalent, that is ${fmt$(supportHrs * 4 * 75)}/month in recoverable capacity.`
    })
  }

  if (findings.length < 3) {
    findings.push({
      type: 'opportunity',
      label: 'Growth Acceleration Window',
      value: 'High potential',
      detail: 'Your business foundation is solid. AI infrastructure will compound your existing momentum - more revenue from the same inputs, without proportional cost increases.'
    })
  }

  const timeValueAtStake = Math.round(weeklyHrs * 0.35 * 52 * 75)
  const totalAtStake = annualChurnLoss + timeValueAtStake

  return { findings: findings.slice(0, 4), totalAtStake, annualChurnLoss }
}

// ─── Industry Benchmarks ──────────────────────────────────
function getIndustryBenchmarks(fd: any) {
  const cat = getBusinessCategory(fd.businessType || '')

  const targets: Record<BusinessCategory, { automation: number; churn: number; conversion: number; hoursPerWeek: string }> = {
    online: { automation: 65, churn: 5, conversion: 5, hoursPerWeek: '20-40' },
    local: { automation: 55, churn: 12, conversion: 45, hoursPerWeek: '40-60' },
    professional: { automation: 60, churn: 8, conversion: 40, hoursPerWeek: '40-60' },
    product: { automation: 70, churn: 8, conversion: 4, hoursPerWeek: '40-60' },
  }
  const t = targets[cat]
  const autoPct = fd.percentAutomated === '60+' ? 70 : fd.percentAutomated === '30-60' ? 45 : fd.percentAutomated === 'under-30' ? 20 : 5
  const churnNum = parseChurnPct(fd.churnRate) * 100
  const convNum = parseConversionPct(fd.conversionRate, cat) * 100

  return [
    {
      metric: 'Operations Automated',
      yours: `${autoPct}%`,
      benchmark: `${t.automation}%`,
      gap: autoPct >= t.automation ? null : `${t.automation - autoPct}% gap`,
      status: autoPct >= t.automation ? 'good' : autoPct >= t.automation * 0.65 ? 'warning' : 'critical',
    },
    {
      metric: cat === 'local' ? 'Customer Retention Loss' : cat === 'professional' ? 'Client Attrition Rate' : 'Churn Rate',
      yours: `${churnNum.toFixed(0)}%`,
      benchmark: `${t.churn}% or less`,
      gap: churnNum <= t.churn ? null : `${(churnNum - t.churn).toFixed(0)}% above target`,
      status: churnNum <= t.churn ? 'good' : churnNum <= t.churn * 1.5 ? 'warning' : 'critical',
    },
    {
      metric: cat === 'local' || cat === 'professional' ? 'Lead-to-Client Close Rate' : 'Conversion Rate',
      yours: `${convNum.toFixed(1)}%`,
      benchmark: `${t.conversion}%+`,
      gap: convNum >= t.conversion ? null : `${(t.conversion - convNum).toFixed(1)}% below target`,
      status: convNum >= t.conversion ? 'good' : convNum >= t.conversion * 0.6 ? 'warning' : 'critical',
    },
    {
      metric: 'Owner Hours per Week',
      yours: fd.hoursPerWeek || '40-60',
      benchmark: t.hoursPerWeek,
      gap: (fd.hoursPerWeek === 'under-20' || fd.hoursPerWeek === '20-40') ? null : 'Above sustainable range',
      status: (fd.hoursPerWeek === 'under-20' || fd.hoursPerWeek === '20-40') ? 'good' : fd.hoursPerWeek === '40-60' ? 'warning' : 'critical',
    },
    {
      metric: 'Can Step Away 2 Weeks',
      yours: fd.twoWeeksOff || 'No',
      benchmark: 'Yes',
      gap: fd.twoWeeksOff === 'Yes' ? null : 'Business is owner-dependent',
      status: fd.twoWeeksOff === 'Yes' ? 'good' : fd.twoWeeksOff === 'Maybe' ? 'warning' : 'critical',
    },
  ]
}

// ─── Full System Architecture ─────────────────────────────
function systemArchitecture(fd: any) {
  const cat = getBusinessCategory(fd.businessType || '')
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const churnPct = parseChurnPct(fd.churnRate)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2

  type Sys = { name: string; phase: 1 | 2 | 3; problem: string; value: string; timeline: string; priority: 'critical' | 'high' | 'medium' }

  const allSystems: Record<BusinessCategory, Sys[]> = {
    online: [
      { name: "AI Lead Capture & Qualifier", phase: 1, problem: "Leads visiting but not converting", value: "+15-30% more qualified leads", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Onboarding Engine", phase: 1, problem: "New customers confused, churning early", value: "-30% early churn", timeline: "Week 1-2", priority: 'critical' },
      { name: "AI Support System", phase: 1, problem: `${supportHrs}+ hrs/week on manual support`, value: fmt$(supportHrs * 4 * 60) + '/mo in recovered time', timeline: "Week 2-3", priority: 'high' },
      { name: "Churn Prevention Engine", phase: 2, problem: `${fd.churnRate}% churn eating revenue`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-4", priority: 'critical' },
      { name: "Content Repurposing Pipeline", phase: 2, problem: "Content creation eating 10-20 hrs/week", value: "10-15 hrs/week saved", timeline: "Week 3-5", priority: 'high' },
      { name: "Revenue Intelligence Dashboard", phase: 2, problem: "No real-time view of what is working", value: "Spot issues before they cost you", timeline: "Week 4-5", priority: 'high' },
      { name: "AI Upsell & Expansion Engine", phase: 3, problem: "Leaving LTV on the table", value: "+15-25% revenue from existing base", timeline: "Week 6-8", priority: 'medium' },
      { name: "Predictive Analytics Layer", phase: 3, problem: "Reactive decisions, not proactive", value: "30% faster decision-making", timeline: "Week 8-10", priority: 'medium' },
      { name: "Partner & Affiliate Automation", phase: 3, problem: "Manual partnership management", value: "+New revenue channel on autopilot", timeline: "Week 10-12", priority: 'medium' },
    ],
    local: [
      { name: "AI Receptionist & Lead Capture", phase: 1, problem: "Missing calls and after-hours leads", value: "+20-40% more booked jobs", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Booking & Confirmation", phase: 1, problem: "Manual scheduling and no-shows", value: "-40% no-shows", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Review Engine", phase: 1, problem: "No systematic review generation", value: "3-5x more reviews, higher ranking", timeline: "Week 2-3", priority: 'high' },
      { name: "Customer Follow-Up & Retention System", phase: 2, problem: "Customers not returning after service", value: "+30% repeat business", timeline: "Week 3-4", priority: 'critical' },
      { name: "Invoice & Payment Automation", phase: 2, problem: "Manual billing and collections", value: "5-8 hrs/week saved, faster payments", timeline: "Week 3-5", priority: 'high' },
      { name: "Business Health Dashboard", phase: 2, problem: "No real-time view of jobs, revenue, reviews", value: "Spot issues before they cost you", timeline: "Week 4-5", priority: 'high' },
      { name: "Referral & Loyalty Program", phase: 3, problem: "No systematic referral generation", value: "+10-20% new customers from referrals", timeline: "Week 6-8", priority: 'medium' },
      { name: "Seasonal Campaign Engine", phase: 3, problem: "Revenue dips in slow seasons", value: "Predictable revenue year-round", timeline: "Week 8-10", priority: 'medium' },
      { name: "Team & Dispatch Automation", phase: 3, problem: "Manual crew management and coordination", value: "10+ hrs/week saved in coordination", timeline: "Week 10-12", priority: 'medium' },
    ],
    professional: [
      { name: "AI Client Intake & Qualification", phase: 1, problem: "Manual intake wasting senior team time", value: "5-10 hrs/week saved on intake", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Proposal System", phase: 1, problem: "Slow proposals losing deals", value: "+30% close rate, 3x faster proposals", timeline: "Week 1-2", priority: 'critical' },
      { name: "Client Portal & Communication", phase: 1, problem: `${supportHrs}+ hrs/week on status updates`, value: fmt$(supportHrs * 4 * 100) + '/mo in recovered billable time', timeline: "Week 2-3", priority: 'high' },
      { name: "Pipeline & Deal Automation", phase: 2, problem: "Deals dying in the pipeline", value: "+20-30% win rate improvement", timeline: "Week 3-4", priority: 'critical' },
      { name: "Client Health & Retention System", phase: 2, problem: `${fd.churnRate}% client attrition`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-5", priority: 'high' },
      { name: "Thought Leadership Engine", phase: 2, problem: "Inconsistent content and pipeline", value: "Consistent inbound pipeline on autopilot", timeline: "Week 4-6", priority: 'high' },
      { name: "Referral & Partnership System", phase: 3, problem: "No systematic referral generation", value: "+15-25% new client pipeline", timeline: "Week 6-8", priority: 'medium' },
      { name: "Revenue Intelligence Dashboard", phase: 3, problem: "No view of pipeline health or margins", value: "Spot issues before they cost you", timeline: "Week 8-10", priority: 'medium' },
      { name: "Upsell & Account Expansion Engine", phase: 3, problem: "Leaving expansion revenue on the table", value: "+15-20% revenue from existing clients", timeline: "Week 10-12", priority: 'medium' },
    ],
    product: [
      { name: "Abandoned Cart Recovery System", phase: 1, problem: "70%+ of carts abandoned", value: "+10-15% recovered revenue", timeline: "Week 1-2", priority: 'critical' },
      { name: "Post-Purchase Nurture Engine", phase: 1, problem: "Low repeat purchase rate", value: "+20-30% repeat purchases", timeline: "Week 1-2", priority: 'critical' },
      { name: "AI Customer Service System", phase: 1, problem: `${supportHrs}+ hrs/week on manual support`, value: fmt$(supportHrs * 4 * 60) + '/mo saved, 80% auto-resolution', timeline: "Week 2-3", priority: 'high' },
      { name: "Customer Retention & Loyalty Engine", phase: 2, problem: `${fd.churnRate}% customer loss`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-4", priority: 'critical' },
      { name: "Inventory & Fulfillment Automation", phase: 2, problem: "Manual order processing errors and delays", value: "10-15 hrs/week saved, fewer errors", timeline: "Week 3-5", priority: 'high' },
      { name: "AI Marketing & Content Engine", phase: 2, problem: "Manual content creation for ads and email", value: "10-15 hrs/week saved", timeline: "Week 4-6", priority: 'high' },
      { name: "Revenue Intelligence Dashboard", phase: 3, problem: "No real-time view of sales, inventory, ROAS", value: "Spot issues before they cost you", timeline: "Week 6-8", priority: 'medium' },
      { name: "Predictive Reorder System", phase: 3, problem: "Stockouts and overstock waste", value: "20-30% reduction in inventory costs", timeline: "Week 8-10", priority: 'medium' },
      { name: "VIP & High-LTV Customer Program", phase: 3, problem: "No systematic treatment of best customers", value: "+25-40% LTV from top tier", timeline: "Week 10-12", priority: 'medium' },
    ],
  }

  return allSystems[cat]
}

// ─── Score Gauge SVG ──────────────────────────────────────
function ScoreGauge({ score }: { score: number }) {
  const r = 80, c = 2 * Math.PI * r, offset = c - (score / 100) * c
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
      <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="12" />
      <circle cx="100" cy="100" r={r} fill="none" className={scoreBg(score)} strokeWidth="12"
        strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
        transform="rotate(-90 100 100)" style={{ transition: 'stroke-dashoffset 1.5s ease-out' }} />
      <text x="100" y="92" textAnchor="middle" className={`${scoreColor(score)} text-5xl font-bold`} fill="currentColor" fontSize="48">{score}</text>
      <text x="100" y="120" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="14">/100</text>
    </svg>
  )
}

// ─── ROI Calculator ───────────────────────────────────────
function ROICalculator({ fd }: { fd: any }) {
  const cat = getBusinessCategory(fd.businessType || '')
  const defaultHours = fd.percentAutomated === '60+' ? 5 : fd.percentAutomated === '30-60' ? 12 : 25
  const defaultChurnSaved = Math.round(parseListSize(fd.listSize, cat) * parseChurnPct(fd.churnRate) * 0.3)
  const defaultPrice = parseProductPrice(fd.productPricePoint, cat)

  const [hours, setHours] = useState(defaultHours)
  const [rate, setRate] = useState(75)
  const [churnReduced, setChurnReduced] = useState(defaultChurnSaved)
  const [avgPrice, setAvgPrice] = useState(defaultPrice)

  const timeSavings = hours * 4 * rate
  const churnSavings = churnReduced * avgPrice
  const monthly = timeSavings + churnSavings
  const annual = monthly * 12
  const roiPct = Math.round((annual / 10000) * 100)

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-[#555] text-sm mb-2 block">Hours saved per week: <span className="text-white font-bold">{hours}</span></label>
          <input type="range" min={1} max={40} value={hours} onChange={e => setHours(+e.target.value)}
            className="w-full accent-red-500" />
        </div>
        <div>
          <label className="text-[#555] text-sm mb-2 block">Hourly rate of saved time</label>
          <input type="number" value={rate} onChange={e => setRate(+e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
        </div>
        <div>
          <label className="text-[#555] text-sm mb-2 block">Customers saved from churn/month: <span className="text-white font-bold">{churnReduced}</span></label>
          <input type="range" min={0} max={500} value={churnReduced} onChange={e => setChurnReduced(+e.target.value)}
            className="w-full accent-red-500" />
        </div>
        <div>
          <label className="text-[#555] text-sm mb-2 block">Average customer value</label>
          <input type="number" value={avgPrice} onChange={e => setAvgPrice(+e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4">
        {[
          { label: "Monthly Savings", val: fmt$(monthly) },
          { label: "Annual Impact", val: fmt$(annual) },
          { label: "ROI on $10K", val: `${roiPct}%` },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
            <div className="text-[#555] text-xs mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-red-400">{item.val}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Fade wrapper ─────────────────────────────────────────
function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

// ═══════════════════════════════════════════════════════════
// Main Component
// ═══════════════════════════════════════════════════════════
export function AuditResults({ formData, auditScore, researchFindings }: AuditResultsProps) {
  const [showROI, setShowROI] = useState(false)
  const [showChecklist, setShowChecklist] = useState(false)
  const [proposalMarkdown, setProposalMarkdown] = useState<string | null>(null)
  const [proposalLoading, setProposalLoading] = useState(true)
  const [proposalError, setProposalError] = useState(false)
  const [proposalExpanded, setProposalExpanded] = useState(true)
  const [proposalPricing, setProposalPricing] = useState<any>(null)

  // Fire the proposal agent on mount
  useEffect(() => {
    let cancelled = false
    async function fetchProposal() {
      try {
        const res = await fetch('/api/audit/generate-proposal', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (cancelled) return
        const data = await res.json()
        if (data.success && data.proposal) {
          setProposalMarkdown(data.proposal)
          setProposalPricing(data.pricing)
        } else {
          setProposalError(true)
        }
      } catch {
        if (!cancelled) setProposalError(true)
      } finally {
        if (!cancelled) setProposalLoading(false)
      }
    }
    fetchProposal()
    return () => { cancelled = true }
  }, [formData])

  const sub = useMemo(() => calcSubScores(formData), [formData])
  const opps = useMemo(() => topOpportunities(formData), [formData])
  const wins = useMemo(() => quickWins(formData), [formData])
  const phases = useMemo(() => roadmap(formData), [formData])
  const playbook = useMemo(() => generateIndustryPlaybook(formData), [formData])
  const growthLevel = useMemo(() => getGrowthLevel(formData), [formData])
  const execReport = useMemo(() => executiveReport(formData, auditScore), [formData, auditScore])
  const benchmarks = useMemo(() => getIndustryBenchmarks(formData), [formData])
  const systems = useMemo(() => systemArchitecture(formData), [formData])

  const tagline = auditScore < 40
    ? "There's massive untapped potential in your business."
    : auditScore < 70
      ? "You're leaving money on the table — but not for long."
      : "You're ahead of most. Let's make you unstoppable."

  const handleDownloadPDF = () => {
    localStorage.setItem("elianatech-audit-report", JSON.stringify({ formData, auditScore }))
    window.open("/audit/report", "_blank")
  }

  return (
    <div className="max-w-5xl mx-auto space-y-20 pb-24">
      {/* ── Top Booking CTA ───────────────────────────── */}
      <div className="flex justify-between items-center px-4">
        <p className="text-[#888] text-[10px] font-mono uppercase tracking-[0.2em]">Audit Complete</p>
        <button
          onClick={() => {
            const el = document.getElementById('booking-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn-red !py-3 !px-6 text-xs"
        >
          Book a Call
        </button>
      </div>

      {/* ── Industry Hook ───────────────────────────── */}
      {industries.find(i => i.slug === formData.businessType)?.hook && (
        <FadeUp>
          <div className="text-center">
            <p className="text-[#D90019] text-[10px] font-mono font-bold uppercase tracking-[0.4em] mb-4">Tactical Industry Objective</p>
            <h3 className="text-2xl md:text-4xl font-black text-black uppercase font-bebas-neue tracking-widest max-w-3xl mx-auto italic leading-tight px-4">
              &ldquo;{industries.find(i => i.slug === formData.businessType)?.hook}&rdquo;
            </h3>
            <div className="w-16 h-1 bg-[#D90019] mx-auto mt-8" />
          </div>
        </FadeUp>
      )}

      {/* ── 0. Executive Intelligence Report ───────────── */}
      <FadeUp>
        <div className="border border-[#E4E3DE] rounded-2xl overflow-hidden bg-white shadow-2xl">
          <div className="bg-[#FAFAF8] px-8 py-6 border-b border-[#E4E3DE] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="text-[#D90019] text-[10px] font-mono uppercase tracking-[0.2em] mb-2 font-bold">Confidential Business Audit</p>
              <h2 className="text-black font-black text-3xl uppercase tracking-tighter leading-none">{formData.companyName || (formData.fullName ? formData.fullName + "'s Business" : 'Your Business')}</h2>
              <p className="text-[#888] text-xs font-mono uppercase tracking-widest mt-2">{playbook.industryName} | {growthLevel.label} | {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r border-[#E4E3DE] pl-6 sm:pl-0 sm:pr-6 h-full flex flex-col justify-center">
              <p className="text-[#888] text-[10px] font-mono uppercase tracking-widest mb-1">Health Score</p>
              <p className={`text-6xl font-black leading-none ${scoreColor(auditScore)}`}>{auditScore}<span className="text-[#888] text-xl font-mono">/100</span></p>
            </div>
          </div>
          <div className="p-10">
            <p className="text-[#555] text-sm mb-10 leading-relaxed font-mono uppercase tracking-tight max-w-2xl">
              This intelligence brief identifies high-leverage automation gaps between your current operational state and optimized AI-native infrastructure.
            </p>
            <h3 className="text-black font-bold mb-6 text-xs uppercase tracking-[0.2em] flex items-center gap-2">
              <div className="w-6 h-[1px] bg-black"></div> Critical Audit Findings
            </h3>
            <div className="grid gap-4">
              {execReport.findings.map((f, i) => (
                <div key={i} className={`flex items-start gap-6 p-6 rounded-none border-l-4 ${f.type === 'critical' ? 'border-[#D90019] bg-[#FAFAF8]' :
                  f.type === 'warning' ? 'border-orange-500 bg-[#FAFAF8]' :
                    'border-[#888] bg-[#FAFAF8]'
                  }`}>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <span className="text-black font-black text-sm uppercase tracking-tight">{f.label}</span>
                      <span className={`text-xs font-mono font-black shrink-0 ${f.type === 'critical' ? 'text-[#D90019]' : f.type === 'warning' ? 'text-orange-600' : 'text-[#888]'
                        }`}>{f.value}</span>
                    </div>
                    <p className="text-[#555] text-sm leading-relaxed">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            {execReport.totalAtStake > 5000 && (
              <div className="mt-10 p-8 bg-black text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-[#888] text-[10px] font-mono uppercase tracking-[0.3em] mb-2 font-bold">Annual Capital At Risk</p>
                  <p className="text-white text-sm font-mono opacity-60">Estimated revenue loss + overhead waste (12 month horizon)</p>
                </div>
                <p className="text-[#D90019] font-black text-5xl tracking-tighter">{fmt$(execReport.totalAtStake)}</p>
              </div>
            )}
          </div>
        </div>
      </FadeUp>

      {/* ── 0b. AI Research Findings ─────────────────────── */}
      {researchFindings && (researchFindings.websiteFindings?.length || researchFindings.operationalIssues?.length || researchFindings.opportunities?.length) ? (
        <FadeUp delay={0.05}>
          <div className="border border-[#E4E3DE] rounded-2xl overflow-hidden bg-white shadow-xl">
            <div className="bg-[#FAFAF8] px-8 py-5 border-b border-[#E4E3DE] flex items-center gap-3">
              <Brain className="w-5 h-5 text-[#D90019]" />
              <div>
                <h2 className="text-black font-bold text-lg uppercase tracking-tight">AI Agent Intelligence Briefing</h2>
                <p className="text-[#888] text-xs font-mono uppercase">Extracted from {formData.websiteUrl || 'Business Data'}</p>
              </div>
            </div>
            <div className="p-8 space-y-8">
              {researchFindings.websiteFindings && researchFindings.websiteFindings.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <Search className="w-3 h-3" /> External Presentation Analysis
                  </h3>
                  <div className="grid gap-3">
                    {researchFindings.websiteFindings.map((f: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAF8] border border-[#E4E3DE]">
                        <span className="text-[#D90019] mt-0.5 shrink-0 text-xs font-mono font-bold">0{i + 1}</span>
                        <p className="text-[#555] text-sm leading-relaxed font-medium">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {researchFindings.operationalIssues && researchFindings.operationalIssues.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <Settings className="w-3 h-3" /> Operational Frictions Identified
                  </h3>
                  <div className="grid gap-3">
                    {researchFindings.operationalIssues.map((f: string, i: number) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-orange-50 border border-orange-200">
                        <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 shrink-0" />
                        <p className="text-orange-900 text-sm leading-relaxed font-medium">{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {researchFindings.opportunities && researchFindings.opportunities.length > 0 && (
                <div>
                  <h3 className="text-[#888] text-[10px] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-3 h-3" /> Priority AI Implementations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {researchFindings.opportunities.map((o: { opportunity: string; roi: string }, i: number) => (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-[#D90019]/5 border border-[#D90019]/10">
                        <Zap className="w-5 h-5 text-[#D90019] mt-0.5 shrink-0" />
                        <div className="flex-1">
                          <p className="text-black text-sm font-bold uppercase tracking-tight">{o.opportunity}</p>
                          <p className="text-[#D90019] text-xs font-mono font-bold mt-2 uppercase">{o.roi}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeUp>
      ) : null}

      {/* ── 1. Hero Score ───────────────────────────────── */}
      <FadeUp>
        <div className="text-center space-y-8 py-10">
          <ScoreGauge score={auditScore} />
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-black uppercase font-bebas-neue tracking-tight">
              Efficiency <span className={scoreColor(auditScore)}>{auditScore}</span>/100
            </h1>
            <p className="text-xl text-[#555] max-w-xl mx-auto font-mono uppercase tracking-tight">{tagline}</p>
          </div>
        </div>
      </FadeUp>

      {/* ── 2. Score Breakdown ──────────────────────────── */}
      <FadeUp delay={0.1}>
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3 uppercase font-bebas-neue tracking-widest">
          <BarChart3 className="w-6 h-6 text-[#D90019]" /> Efficiency Breakdown
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(["Revenue", "Automation", "Acquisition", "Retention", "Time"] as const).map((cat) => {
            const key = cat.toLowerCase() as keyof typeof sub
            const s = sub[key]
            const Icon = catIcons[cat]
            return (
              <Card key={cat} className="bg-white border-[#E4E3DE] p-6 hover:border-[#D90019]/30 transition-all shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-[#FAFAF8] ${scoreColor(s)}`}><Icon className="w-5 h-5" /></div>
                  <span className="text-black font-bold text-sm uppercase tracking-tight">{cat}</span>
                  <span className={`ml-auto text-lg font-bold font-mono ${scoreColor(s)}`}>{s}%</span>
                </div>
                <div className="w-full h-1.5 bg-[#F2F1ED] rounded-full overflow-hidden mb-4">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s}%` }}
                    viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${s >= 70 ? 'bg-[#D90019]' : s >= 40 ? 'bg-orange-500' : 'bg-red-800'}`} />
                </div>
                <p className="text-[#555] text-xs leading-relaxed font-mono">{categoryInsight(cat, formData)}</p>
              </Card>
            )
          })}
        </div>
      </FadeUp>

      {/* ── 2b. Your Growth Stage ─────────────────────────── */}
      <FadeUp delay={0.12}>
        <Card className="bg-white border-[#E4E3DE] p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-[#D90019]/10 text-[#D90019]"><TrendingUp className="w-6 h-6" /></div>
            <div>
              <h3 className="text-black font-bold text-xl uppercase tracking-tight">Stage: {growthLevel.label}</h3>
              <p className="text-[#888] text-xs font-mono uppercase tracking-widest">{playbook.industryName} Sector</p>
            </div>
          </div>
          <p className="text-[#555] text-sm leading-relaxed border-l-2 border-[#D90019] pl-6 py-1">{growthLevel.insight}</p>
        </Card>
      </FadeUp>

      {/* ── 2c. Industry Playbook ─────────────────────────── */}
      <FadeUp delay={0.13}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black flex items-center gap-3 uppercase font-bebas-neue tracking-widest">
            <ShieldCheck className="w-6 h-6 text-[#D90019]" /> {playbook.industryName} Playbook
          </h2>
          {industries.find(i => i.slug === formData.businessType)?.subNiches && (
            <p className="text-[#888] text-[10px] font-mono uppercase hidden sm:block">Coverage: {industries.find(i => i.slug === formData.businessType)?.subNiches?.slice(0, 3).join(', ')}</p>
          )}
        </div>
        <div className="space-y-3 mb-8">
          {playbook.aiSolutions.map((s, i) => (
            <Card key={i} className="bg-white border-[#E4E3DE] p-6 hover:border-[#D90019]/20 transition-all shadow-sm">
              <div className="flex items-start gap-4">
                <span className="text-[#D90019] font-bold text-sm mt-0.5 shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <h4 className="text-black font-bold mb-1 uppercase tracking-tight">{s.challenge}</h4>
                  <p className="text-[#555] text-sm leading-relaxed mb-3">{s.solution}</p>
                  <span className="text-[#D90019] text-[10px] font-mono font-bold bg-[#D90019]/5 px-2 py-1 uppercase tracking-widest">{s.roi}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="bg-[#FAFAF8] border-[#E4E3DE] p-6 shadow-sm">
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-4">Strategic Transformation</h4>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-[#888] text-[10px] font-mono tracking-widest uppercase">Traditional Operations</p>
              <p className="text-[#555] text-sm leading-relaxed italic">&ldquo;{industries.find(i => i.slug === formData.businessType)?.operatorProblem || playbook.caseStudy.before}&rdquo;</p>
            </div>
            <div className="space-y-2 border-l border-[#E4E3DE] pl-8">
              <p className="text-[#D90019] text-[10px] font-mono tracking-widest uppercase font-bold">AI-Native Future</p>
              <p className="text-black text-sm leading-relaxed font-bold">&ldquo;{industries.find(i => i.slug === formData.businessType)?.result || playbook.caseStudy.after}&rdquo;</p>
            </div>
          </div>
        </Card>
      </FadeUp>

      {/* ── 2d. AI Workforce Analysis ─────────────────────── */}
      {industries.find(i => i.slug === formData.businessType)?.layers && (
        <FadeUp delay={0.14}>
          <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3 uppercase font-bebas-neue tracking-widest">
            <Users className="w-6 h-6 text-[#D90019]" /> AI Workforce Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.find(i => i.slug === formData.businessType)?.layers?.map((layer, i) => (
              <Card key={i} className="bg-white border-[#E4E3DE] p-6 shadow-sm">
                <p className="text-[#D90019] text-[10px] font-mono uppercase tracking-widest mb-2 font-bold">{layer.department}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {layer.roles.map((role, j) => (
                    <span key={j} className="bg-[#FAFAF8] text-[#555] text-[10px] font-mono px-2 py-0.5 border border-[#E4E3DE] uppercase">
                      {role}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-black font-bold text-xs uppercase tracking-tight">Manual Tasks Replaced by AI:</p>
                  <ul className="space-y-1">
                    {layer.tasks.slice(0, 4).map((task, k) => (
                      <li key={k} className="text-[#555] text-xs flex items-center gap-2">
                        <div className="w-1 h-1 bg-[#D90019]" /> {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </FadeUp>
      )}

      {/* ── 3. Top AI Opportunities ──────────────────────── */}
      <FadeUp delay={0.15}>
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-[#D90019]" /> Top Automation Opportunities
        </h2>
        <div className="space-y-4">
          {opps.map((o, i) => (
            <Card key={i} className="bg-white border-[#E4E3DE] p-6 hover:border-[#D90019]/30 transition-all shadow-sm">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-[#FAFAF8] border border-[#E4E3DE] text-[#D90019] shrink-0">
                  <o.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-black font-bold text-lg uppercase tracking-tight">{o.title}</h3>
                  <p className="text-[#555] text-sm leading-relaxed">{o.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono">
                    <span className="text-[#D90019] flex items-center gap-1 font-bold">ROI: {o.roi}</span>
                    <span className="text-[#888] flex items-center gap-1">TIMELINE: {o.timeline}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 3b. Full System Architecture ────────────────── */}
      <FadeUp delay={0.18}>
        <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-3">
          <Layers className="w-6 h-6 text-[#D90019]" /> Your Full System Architecture
        </h2>
        <p className="text-[#555] mb-8">Every system we would build for you, sequenced by impact and implementation phase.</p>
        <div className="space-y-8">
          {([1, 2, 3] as const).map((phase) => {
            const phaseSystems = systems.filter(s => s.phase === phase)
            const phaseConfig = {
              1: { label: 'Phase 1 — Foundation (Month 1)', color: 'text-[#D90019]', bar: 'bg-[#D90019]/20', card: 'bg-white border-[#E4E3DE]' },
              2: { label: 'Phase 2 — Optimization (Months 2-3)', color: 'text-[#D90019]', bar: 'bg-[#D90019]/20', card: 'bg-white border-[#E4E3DE]' },
              3: { label: 'Phase 3 — Scale (Months 3-6)', color: 'text-[#D90019]', bar: 'bg-[#D90019]/20', card: 'bg-white border-[#E4E3DE]' },
            }[phase]!
            return (
              <div key={phase}>
                <div className={`flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-wider ${phaseConfig.color}`}>
                  <div className={`h-px flex-1 ${phaseConfig.bar}`} />
                  {phaseConfig.label}
                  <div className={`h-px flex-1 ${phaseConfig.bar}`} />
                </div>
                <div className="space-y-2">
                  {phaseSystems.map((s, i) => (
                    <Card key={i} className={`border p-6 shadow-sm ${phaseConfig.card}`}>
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className={`text-xs font-bold px-2 py-0.5 rounded shrink-0 ${s.priority === 'critical' ? 'bg-[#D90019]/10 text-[#D90019]' :
                              s.priority === 'high' ? 'bg-orange-500/10 text-orange-600' :
                                'bg-[#888]/10 text-[#888]'
                              }`}>{s.priority.toUpperCase()}</span>
                            <h4 className="text-black font-bold text-sm uppercase">{s.name}</h4>
                          </div>
                          <p className="text-[#555] text-sm font-mono">PROBLEM: {s.problem}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[#D90019] text-sm font-bold uppercase tracking-tight">{s.value}</p>
                          <p className="text-[#888] text-xs">{s.timeline}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </FadeUp>

      {/* ── 4. 90-Day Roadmap ──────────────────────────── */}
      <FadeUp delay={0.2}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-red-400" /> Your Custom Automation Roadmap
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((p, i) => (
            <Card key={i} className={`border p-6 ${p.color} backdrop-blur-md`}>
              <div className="text-xs font-mono text-slate-400 mb-2">{p.label}</div>
              <h3 className="text-white font-bold text-lg mb-4">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 4b. Industry Benchmarks ──────────────────────── */}
      <FadeUp delay={0.22}>
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3">
          <Building2 className="w-6 h-6 text-[#D90019]" /> Where You Stand vs. Your Industry
        </h2>
        <Card className="bg-white border-[#E4E3DE] overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#E4E3DE] bg-[#FAFAF8]">
                  <th className="text-left p-4 text-[#888] text-xs uppercase tracking-wider font-medium">Metric</th>
                  <th className="text-center p-4 text-[#888] text-xs uppercase tracking-wider font-medium">Your Business</th>
                  <th className="text-center p-4 text-[#888] text-xs uppercase tracking-wider font-medium">Industry Target</th>
                  <th className="text-center p-4 text-[#888] text-xs uppercase tracking-wider font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {benchmarks.map((b, i) => (
                  <tr key={i} className={`border-b border-[#E4E3DE]/50 ${i % 2 === 0 ? '' : 'bg-[#FAFAF8]/50'}`}>
                    <td className="p-4 text-black text-sm font-medium">{b.metric}</td>
                    <td className="p-4 text-center">
                      <span className={`text-sm font-mono font-bold ${b.status === 'good' ? 'text-red-600' : b.status === 'warning' ? 'text-orange-600' : 'text-red-800'
                        }`}>{b.yours}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-[#555] text-sm">{b.benchmark}</span>
                    </td>
                    <td className="p-4 text-center">
                      {b.gap ? (
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${b.status === 'warning' ? 'bg-orange-500/10 text-orange-600' : 'bg-red-700/10 text-red-700'
                          }`}>{b.gap}</span>
                      ) : (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-700 font-medium">On Track</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </FadeUp>

      {/* ── 5. Lead Magnets ────────────────────────────── */}
      <FadeUp delay={0.25}>
        <h2 className="text-2xl font-bold text-black mb-6">Your Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white border-[#E4E3DE] p-6 text-center hover:border-[#D90019]/30 transition-all cursor-pointer shadow-sm"
            onClick={handleDownloadPDF}>
            <FileText className="w-8 h-8 text-[#D90019] mx-auto mb-3" />
            <h3 className="text-black font-bold mb-1">Download Full Report</h3>
            <p className="text-[#888] text-sm">PDF with all scores, opportunities & roadmap</p>
          </Card>
          <Card className="bg-white border-[#E4E3DE] p-6 text-center hover:border-[#D90019]/30 transition-all cursor-pointer shadow-sm"
            onClick={() => setShowROI(!showROI)}>
            <Calculator className="w-8 h-8 text-[#D90019] mx-auto mb-3" />
            <h3 className="text-black font-bold mb-1">Calculate Your ROI</h3>
            <p className="text-[#888] text-sm">Interactive calculator pre-filled with your data</p>
          </Card>
          <Card className="bg-white border-[#E4E3DE] p-6 text-center hover:border-[#D90019]/30 transition-all cursor-pointer shadow-sm"
            onClick={() => setShowChecklist(!showChecklist)}>
            <CheckCircle2 className="w-8 h-8 text-[#D90019] mx-auto mb-3" />
            <h3 className="text-black font-bold mb-1">Quick Wins Checklist</h3>
            <p className="text-[#888] text-sm">5 things you can do THIS WEEK</p>
          </Card>
        </div>
      </FadeUp>

      {/* ── 6. Inline ROI Calculator ───────────────────── */}
      {showROI && (
        <FadeUp>
          <Card className="bg-white border-[#E4E3DE] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-[#D90019]" /> ROI Calculator
            </h3>
            <ROICalculator fd={formData} />
          </Card>
        </FadeUp>
      )}

      {/* ── 7. Quick Wins Checklist ────────────────────── */}
      {showChecklist && (
        <FadeUp>
          <Card className="bg-white border-[#E4E3DE] p-8 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-6">This Week&apos;s Quick Wins</h3>
            <div className="space-y-4">
              {wins.map((w, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-[#FAFAF8] border border-[#E4E3DE]">
                  <span className="text-2xl">{w.icon}</span>
                  <p className="text-[#555] text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </FadeUp>
      )}

      {/* ── 8. DIY Action Plan ─────────────────────────── */}
      <FadeUp delay={0.28}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-black text-black uppercase font-bebas-neue tracking-widest">Growth Sprint Action Plan</h2>
            <p className="text-[#888] font-mono text-[10px] uppercase mt-1 tracking-widest leading-none">High-Impact Self-Implementation Steps</p>
          </div>
          <div className="h-[1px] bg-[#E4E3DE] flex-1 hidden md:block mx-8 mb-4" />
          <Target className="w-10 h-10 text-[#D90019] opacity-20" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {(() => {
            const cat = getBusinessCategory(formData.businessType || '')
            const onboardingDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: { title: "Set Up Automated Onboarding Emails", steps: ["Map your ideal customer journey from purchase-to-aha moment", "Create a 5-email welcome sequence in your email platform", "Include: welcome + access → tutorial → community → success story → next step CTA", "Set up triggers so they fire automatically on purchase/signup"] },
              local: { title: "Set Up Automated Booking & Pre-Visit Sequence", steps: ["Set up instant booking confirmation via email/text with job details", "Send a 'what to expect' message 24 hours before the appointment", "Include directions, prep instructions, and technician info", "Add a same-day reminder text to reduce no-shows by 40%+"] },
              professional: { title: "Set Up Automated Client Welcome Sequence", steps: ["Create a welcome email with engagement letter and intake questionnaire", "Send a 'meet the team' email with your process overview and timeline", "Include a scheduling link for the kickoff call", "Set up an automated document collection workflow"] },
              product: { title: "Set Up Post-Purchase Email Sequence", steps: ["Create an order confirmation email with estimated delivery", "Send a shipping notification with tracking link", "Follow up 3 days after delivery with care/usage tips", "Send a review request 7 days after delivery"] }
            }
            const churnDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: { title: "Launch a Churn Win-Back Campaign", steps: ["Export a list of churned/refunded customers from the last 6 months", "Segment by reason (if known): price, usage, support, alternative", "Send a 3-email re-engagement sequence: 'We miss you' → new value → special offer", "Track open rates and replies — respond personally to engaged leads"] },
              local: { title: "Reactivate Past Customers", steps: ["Pull a list of customers who haven't booked in 6+ months", "Send a 'we miss you' email/text with a special return offer", "Include seasonal maintenance reminders relevant to their last service", "Follow up with a phone call to the top 20% by past spend"] },
              professional: { title: "Reactivate Dormant Client Relationships", steps: ["Identify clients who haven't engaged in 6+ months", "Send a personalized 'checking in' email with a relevant industry update", "Offer a complimentary review or assessment of their current situation", "Schedule catch-up calls with the top 10 by past revenue"] },
              product: { title: "Launch a Win-Back Campaign for Lapsed Buyers", steps: ["Export customers who haven't purchased in 90+ days", "Send a personalized 'new arrivals' email based on their past purchases", "Include a time-limited discount or free shipping offer", "Set up an automated reorder reminder sequence for consumable products"] }
            }
            const automationDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: { title: "Connect Your Tools with Zapier/Make", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect your payment tool → email platform for auto-tagging new buyers", "Connect your community platform → CRM for engagement tracking", "Set up notifications for new purchases and cancellations", "Start with 3-5 automations and expand from there"] },
              local: { title: "Connect Your Booking, Invoicing & Review Tools", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect your booking system → invoicing tool for automatic billing", "Set up automatic review requests after completed jobs", "Add new leads to your CRM automatically from web forms and calls", "Set up text/email notifications for new bookings and cancellations"] },
              professional: { title: "Connect Your CRM, Calendar & Billing", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect your CRM → calendar for automatic meeting scheduling", "Set up automatic invoice generation when projects hit milestones", "Connect intake forms → CRM for automatic lead creation", "Set up notifications for new leads, won deals, and overdue invoices"] },
              product: { title: "Connect Your Store, Inventory & Shipping", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect your store → shipping tool for automatic label generation", "Set up low-inventory alerts to prevent stockouts", "Connect orders → accounting software for automatic bookkeeping", "Set up notifications for returns, refunds, and high-value orders"] }
            }
            const ob = onboardingDIY[cat], ch = churnDIY[cat], au = automationDIY[cat]
            const diy = [
              { ...ob, time: "2-3 hours", impact: "Reduce early churn by 30%+", emoji: "🚀", show: formData.onboardingAutomated !== 'Yes' },
              { ...ch, time: "2-3 hours", impact: "Recover 10-20% of lost revenue", emoji: "🔄", show: formData.churnRate === '20+' || formData.churnRate === '10-20' },
              { ...au, time: "1-2 hours", impact: "Eliminate 80% of manual workflows", emoji: "⚡", show: formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30' },
            ]
            return diy.filter(d => d.show).map((d, i) => (
              <Card key={i} className="bg-white border-[#E4E3DE] p-8 shadow-sm group hover:border-[#D90019]/30 transition-all">
                <div className="flex items-start gap-6">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{d.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-black font-black text-xl uppercase tracking-tighter leading-tight">{d.title}</h3>
                      <div className="flex gap-2 text-[10px] font-mono">
                        <span className="text-[#D90019] bg-[#D90019]/5 px-2 py-1 font-bold">TIME: {d.time}</span>
                        <span className="text-[#888] bg-[#FAFAF8] px-2 py-1 font-bold tracking-tight">IMPACT: {d.impact}</span>
                      </div>
                    </div>
                    <ol className="space-y-4">
                      {d.steps.map((step, j) => (
                        <li key={j} className="text-[#555] text-sm flex items-start gap-3 leading-snug">
                          <span className="text-[#D90019] font-black text-xs mt-0.5 shrink-0">{j + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </Card>
            ))
          })()}
        </div>
      </FadeUp>

      {/* ── 9. Free Tools We Recommend ────────────────── */}
      <FadeUp delay={0.29}>
        <h2 className="text-2xl font-bold text-black mb-6 flex items-center gap-3 uppercase font-bebas-neue tracking-widest">
          <Zap className="w-6 h-6 text-[#D90019]" /> Recommended AI Stack
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {((): { name: string; use: string; emoji: string; cat: string }[] => {
            const bCat = getBusinessCategory(formData.businessType || '')
            const shared = [
              { name: "Zapier", use: "Workflow Automation", emoji: "⚡", cat: "Infrastructure" },
              { name: "Cal.com", use: "High-Performance Scheduling", emoji: "📅", cat: "Acquisition" },
              { name: "Claude", use: "Advanced AI reasoning", emoji: "🤖", cat: "Intelligence" },
              { name: "Notion", use: "Operating System Docs", emoji: "📝", cat: "Ops" },
            ]
            const byIndustry: Record<BusinessCategory, { name: string; use: string; emoji: string; cat: string }[]> = {
              online: [{ name: "ConvertKit", use: "Email Scale", emoji: "📧", cat: "CRM" }, { name: "Stripe", use: "Capital flow", emoji: "💳", cat: "Finance" }],
              local: [{ name: "Jobber", use: "Service Scheduling", emoji: "🔧", cat: "Ops" }, { name: "Google", use: "Local SEO", emoji: "📍", cat: "Growth" }],
              professional: [{ name: "HubSpot", use: "Pipeline CRM", emoji: "📊", cat: "Sales" }, { name: "Loom", use: "Async Comms", emoji: "🎥", cat: "Productivity" }],
              product: [{ name: "Shopify", use: "Direct Commerce", emoji: "🛒", cat: "Store" }, { name: "Klaviyo", use: "Flow Marketing", emoji: "📧", cat: "CRM" }],
            }
            return [...byIndustry[bCat], ...shared].slice(0, 4)
          })().map((tool, i) => (
            <Card key={i} className="bg-white border-[#E4E3DE] p-6 hover:border-[#D90019]/30 transition-all text-center shadow-sm">
              <span className="text-3xl mb-4 block">{tool.emoji}</span>
              <h4 className="text-black font-black text-sm uppercase tracking-tighter mb-1">{tool.name}</h4>
              <p className="text-[#888] text-[9px] font-mono uppercase tracking-[0.1em] mb-3">{tool.cat}</p>
              <p className="text-[#555] text-xs leading-tight">{tool.use}</p>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 10. The Cost of Doing Nothing ─────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-black border border-[#E4E3DE] p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12">
            <AlertCircle className="w-64 h-64 text-red-500" />
          </div>
          <div className="relative z-10">
            <h2 className="text-white font-black text-4xl uppercase tracking-[0.1em] mb-12 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#D90019]" /> Capital Opportunity Loss
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <p className="text-[#D90019] font-black text-5xl tracking-tighter">
                  {fmt$(parseListSize(formData.listSize, getBusinessCategory(formData.businessType || '')) * parseChurnPct(formData.churnRate) * parseProductPrice(formData.productPricePoint, getBusinessCategory(formData.businessType || '')))}
                </p>
                <div className="h-[1px] bg-white/10 w-20" />
                <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">Annual leakage from persistent customer churn</p>
              </div>
              <div className="space-y-4">
                <p className="text-white font-black text-5xl tracking-tighter">
                  {formData.hoursPerWeek === '60+' ? '1,040+' : formData.hoursPerWeek === '40-60' ? '520+' : '260+'}h
                </p>
                <div className="h-[1px] bg-white/10 w-20" />
                <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">Human capacity locked in manual workflows</p>
              </div>
              <div className="space-y-4">
                <p className="text-white font-black text-5xl tracking-tighter">
                  {formData.twoWeeksOff === 'No' ? '0' : formData.twoWeeksOff === 'Maybe' ? '5' : '14'}+d
                </p>
                <div className="h-[1px] bg-white/10 w-20" />
                <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.2em] leading-relaxed">Freedom index: owner dependency threshold</p>
              </div>
            </div>
            <p className="text-slate-500 mt-12 text-xs font-mono max-w-2xl leading-relaxed italic border-l border-[#D90019] pl-6">
              "Every week without systems is a deliberate decision to reject scale. The companies that dominate the next decade aren't working harder; they're deploying more efficient code."
            </p>
          </div>
        </Card>
      </FadeUp>

      {/* ── 11. Strategy Session Booking ───────────────────── */}
      <FadeUp delay={0.32}>
        <div id="booking-section" className="flex flex-col items-center justify-center p-8 md:p-16 bg-white border border-[#E4E3DE] shadow-2xl relative overflow-hidden text-center mt-20">
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#D90019]" />
          <div className="relative z-10 space-y-8 w-full max-w-5xl">
            <div className="space-y-4 text-center">
              <p className="text-[#D90019] font-mono text-xs font-bold uppercase tracking-[0.3em]">Next Step</p>
              <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-tight">
                Book Your <span className="italic">Strategy Session</span>
              </h2>
              <p className="text-[#555] max-w-2xl mx-auto text-sm leading-relaxed font-mono uppercase tracking-tight">
                In the meantime, book a call to discuss your results and get your proposal in real-time.
              </p>
            </div>

            <div className="w-full min-h-[700px] border border-[#E4E3DE] bg-[#FAFAF8] rounded-2xl overflow-hidden shadow-inner mt-8">
              <iframe
                src="https://cal.com/elianatech/30min?embed=true"
                style={{ width: '100%', height: '700px', border: 'none' }}
                title="Strategy Session Booking"
                className="w-full"
              />
            </div>

            <div className="pt-12 border-t border-[#E4E3DE] w-full">
              <div className="flex flex-col items-center gap-6">
                <div className="flex gap-8 mt-4">
                  <Link href="/audit" className="text-[#888] text-[10px] font-mono uppercase tracking-widest hover:text-black transition-colors">
                    Reset Audit Data
                  </Link>
                  <a href="mailto:elianatech@yahoo.com" className="text-[#888] text-[10px] font-mono uppercase tracking-widest hover:text-[#D90019] transition-colors">
                    elianatech@yahoo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  )
}
