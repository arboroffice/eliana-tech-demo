"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import {
  TrendingUp, AlertCircle, CheckCircle2, Target, Lightbulb,
  Rocket, DollarSign, Clock, Users, BarChart3, ArrowRight,
  Download, Calendar, Zap, Brain, Mail,
  ShieldCheck, Settings, MessageSquare, FileText, Calculator,
  RefreshCw, Headphones, LayoutDashboard
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { generateIndustryPlaybook } from "@/lib/freebie-generator"
import { getBusinessCategory, type BusinessCategory } from "@/lib/audit-industry-config"

interface AuditResultsProps {
  formData: any
  auditScore: number
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
  if (s >= 70) return "text-emerald-400"
  if (s >= 40) return "text-yellow-400"
  return "text-red-400"
}
function scoreBg(s: number) {
  if (s >= 70) return "stroke-emerald-400"
  if (s >= 40) return "stroke-yellow-400"
  return "stroke-red-400"
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
    { label: "Days 1-14", title: "Install & Configure", items: phase1[cat], color: "border-blue-500/40 bg-blue-500/5" },
    { label: "Days 15-30", title: "Optimize & Tune", items: phase2[cat], color: "border-yellow-500/40 bg-yellow-500/5" },
    { label: "Days 31-90", title: "Scale & Grow", items: [...phase3Shared, phase3Final[cat]], color: "border-emerald-500/40 bg-emerald-500/5" },
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

// ─── Score Gauge SVG ──────────────────────────────────────
function ScoreGauge({ score }: { score: number }) {
  const r = 80, c = 2 * Math.PI * r, offset = c - (score / 100) * c
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
      <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
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
          <label className="text-slate-400 text-sm mb-2 block">Hours saved per week: <span className="text-white font-bold">{hours}</span></label>
          <input type="range" min={1} max={40} value={hours} onChange={e => setHours(+e.target.value)}
            className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Hourly rate of saved time</label>
          <input type="number" value={rate} onChange={e => setRate(+e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Customers saved from churn/month: <span className="text-white font-bold">{churnReduced}</span></label>
          <input type="range" min={0} max={500} value={churnReduced} onChange={e => setChurnReduced(+e.target.value)}
            className="w-full accent-emerald-500" />
        </div>
        <div>
          <label className="text-slate-400 text-sm mb-2 block">Average customer value</label>
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
            <div className="text-slate-400 text-xs mb-1">{item.label}</div>
            <div className="text-2xl font-bold text-emerald-400">{item.val}</div>
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
export function AuditResults({ formData, auditScore }: AuditResultsProps) {
  const [showROI, setShowROI] = useState(false)
  const [showChecklist, setShowChecklist] = useState(false)

  const sub = useMemo(() => calcSubScores(formData), [formData])
  const opps = useMemo(() => topOpportunities(formData), [formData])
  const wins = useMemo(() => quickWins(formData), [formData])
  const phases = useMemo(() => roadmap(formData), [formData])
  const playbook = useMemo(() => generateIndustryPlaybook(formData), [formData])
  const growthLevel = useMemo(() => getGrowthLevel(formData), [formData])

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

      {/* ── 1. Hero Score ───────────────────────────────── */}
      <FadeUp>
        <div className="text-center space-y-6">
          <ScoreGauge score={auditScore} />
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your Automation Score: <span className={scoreColor(auditScore)}>{auditScore}</span>/100
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto">{tagline}</p>
        </div>
      </FadeUp>

      {/* ── 2. Score Breakdown ──────────────────────────── */}
      <FadeUp delay={0.1}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-blue-400" /> Score Breakdown
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(["Revenue", "Automation", "Acquisition", "Retention", "Time"] as const).map((cat) => {
            const key = cat.toLowerCase() as keyof typeof sub
            const s = sub[key]
            const Icon = catIcons[cat]
            return (
              <Card key={cat} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-5 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${scoreColor(s)}`}><Icon className="w-5 h-5" /></div>
                  <span className="text-white font-semibold">{cat}</span>
                  <span className={`ml-auto text-lg font-bold ${scoreColor(s)}`}>{s}</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-3">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s}%` }}
                    viewport={{ once: true }} transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${s >= 70 ? 'bg-emerald-500' : s >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`} />
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{categoryInsight(cat, formData)}</p>
              </Card>
            )
          })}
        </div>
      </FadeUp>

      {/* ── 2b. Your Growth Stage ─────────────────────────── */}
      <FadeUp delay={0.12}>
        <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400"><TrendingUp className="w-5 h-5" /></div>
            <div>
              <h3 className="text-white font-bold">Your Growth Stage: {growthLevel.label}</h3>
              <p className="text-slate-500 text-sm">{playbook.industryName}</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">{growthLevel.insight}</p>
        </Card>
      </FadeUp>

      {/* ── 2c. Industry Playbook ─────────────────────────── */}
      <FadeUp delay={0.13}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-400" /> Your {playbook.industryName} Playbook
        </h2>
        <div className="space-y-3 mb-8">
          {playbook.aiSolutions.map((s, i) => (
            <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-5 hover:border-emerald-500/20 transition-all">
              <div className="flex items-start gap-4">
                <span className="text-emerald-400 font-bold text-sm mt-0.5 shrink-0">0{i + 1}</span>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-1">{s.challenge}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{s.solution}</p>
                  <span className="text-emerald-400 text-xs bg-emerald-500/10 px-2 py-1 rounded-full">{s.roi}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="bg-gradient-to-r from-emerald-500/5 to-transparent border-emerald-500/20 p-5">
          <h4 className="text-white font-semibold text-sm mb-2">Industry Benchmark</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-red-400 text-xs font-mono mb-1">BEFORE</p>
              <p className="text-slate-400 text-sm">{playbook.caseStudy.before}</p>
            </div>
            <div>
              <p className="text-emerald-400 text-xs font-mono mb-1">AFTER</p>
              <p className="text-slate-300 text-sm">{playbook.caseStudy.after}</p>
            </div>
          </div>
        </Card>
      </FadeUp>

      {/* ── 3. Top AI Opportunities ──────────────────────── */}
      <FadeUp delay={0.15}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-purple-400" /> Top Automation Opportunities
        </h2>
        <div className="space-y-4">
          {opps.map((o, i) => (
            <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 hover:border-purple-500/30 transition-all">
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <o.icon className="w-6 h-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-white font-bold text-lg">{o.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{o.desc}</p>
                  <div className="flex flex-wrap gap-4 pt-2 text-sm">
                    <span className="text-emerald-400 flex items-center gap-1"><DollarSign className="w-4 h-4" /> {o.roi}</span>
                    <span className="text-blue-400 flex items-center gap-1"><Clock className="w-4 h-4" /> {o.timeline}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 4. 90-Day Roadmap ──────────────────────────── */}
      <FadeUp delay={0.2}>
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-orange-400" /> Your Custom Automation Roadmap
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {phases.map((p, i) => (
            <Card key={i} className={`border p-6 ${p.color} backdrop-blur-md`}>
              <div className="text-xs font-mono text-slate-400 mb-2">{p.label}</div>
              <h3 className="text-white font-bold text-lg mb-4">{p.title}</h3>
              <ul className="space-y-2">
                {p.items.map((item, j) => (
                  <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </FadeUp>

      {/* ── 5. Lead Magnets ────────────────────────────── */}
      <FadeUp delay={0.25}>
        <h2 className="text-2xl font-bold text-white mb-6">Your Resources</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-emerald-500/30 transition-all cursor-pointer"
            onClick={handleDownloadPDF}>
            <FileText className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Download Full Report</h3>
            <p className="text-slate-400 text-sm">PDF with all scores, opportunities & roadmap</p>
          </Card>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-blue-500/30 transition-all cursor-pointer"
            onClick={() => setShowROI(!showROI)}>
            <Calculator className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Calculate Your ROI</h3>
            <p className="text-slate-400 text-sm">Interactive calculator pre-filled with your data</p>
          </Card>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 text-center hover:border-yellow-500/30 transition-all cursor-pointer"
            onClick={() => setShowChecklist(!showChecklist)}>
            <CheckCircle2 className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Quick Wins Checklist</h3>
            <p className="text-slate-400 text-sm">5 things you can do THIS WEEK</p>
          </Card>
        </div>
      </FadeUp>

      {/* ── 6. Inline ROI Calculator ───────────────────── */}
      {showROI && (
        <FadeUp>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-blue-400" /> ROI Calculator
            </h3>
            <ROICalculator fd={formData} />
          </Card>
        </FadeUp>
      )}

      {/* ── 7. Quick Wins Checklist ────────────────────── */}
      {showChecklist && (
        <FadeUp>
          <Card className="bg-white/[0.03] backdrop-blur-md border-white/10 p-8">
            <h3 className="text-xl font-bold text-white mb-6">This Week&apos;s Quick Wins</h3>
            <div className="space-y-4">
              {wins.map((w, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-2xl">{w.icon}</span>
                  <p className="text-slate-300 text-sm leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </FadeUp>
      )}

      {/* ── 8. DIY Action Plan ─────────────────────────── */}
      <FadeUp delay={0.28}>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Rocket className="w-6 h-6 text-amber-400" /> DIY Action Plan — Start Today
        </h2>
        <p className="text-slate-400 mb-6">Don&apos;t want to wait? Here are things you can implement yourself right now.</p>
        <div className="space-y-4">
          {(() => {
            const cat = getBusinessCategory(formData.businessType || '')

            const onboardingDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Set Up Automated Onboarding Emails",
                steps: [
                  "Map your ideal customer journey from purchase to 'aha moment'",
                  "Create a 5-email welcome sequence in your email platform",
                  "Include: welcome + access → quick win tutorial → community invite → success story → next step CTA",
                  "Set up triggers so they fire automatically on purchase/signup"
                ]
              },
              local: {
                title: "Set Up Automated Booking & Pre-Visit Sequence",
                steps: [
                  "Set up instant booking confirmation via email/text with job details",
                  "Send a 'what to expect' message 24 hours before the appointment",
                  "Include directions, prep instructions, and technician info",
                  "Add a same-day reminder text to reduce no-shows by 40%+"
                ]
              },
              professional: {
                title: "Set Up Automated Client Welcome Sequence",
                steps: [
                  "Create a welcome email with engagement letter and intake questionnaire",
                  "Send a 'meet the team' email with your process overview and timeline",
                  "Include a scheduling link for the kickoff call",
                  "Set up an automated document collection workflow"
                ]
              },
              product: {
                title: "Set Up Post-Purchase Email Sequence",
                steps: [
                  "Create an order confirmation email with estimated delivery",
                  "Send a shipping notification with tracking link",
                  "Follow up 3 days after delivery with care/usage tips",
                  "Send a review request 7 days after delivery"
                ]
              },
            }

            const churnDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Launch a Churn Win-Back Campaign",
                steps: [
                  "Export a list of churned/refunded customers from the last 6 months",
                  "Segment by reason (if known): price, usage, support, alternative",
                  "Send a 3-email re-engagement sequence: 'We miss you' → new feature/value → special offer",
                  "Track open rates and replies — respond personally to engaged leads"
                ]
              },
              local: {
                title: "Reactivate Past Customers",
                steps: [
                  "Pull a list of customers who haven't booked in 6+ months",
                  "Send a 'we miss you' email/text with a special return offer",
                  "Include seasonal maintenance reminders relevant to their last service",
                  "Follow up with a phone call to the top 20% by past spend"
                ]
              },
              professional: {
                title: "Reactivate Dormant Client Relationships",
                steps: [
                  "Identify clients who haven't engaged in 6+ months",
                  "Send a personalized 'checking in' email with a relevant industry update",
                  "Offer a complimentary review or assessment of their current situation",
                  "Schedule catch-up calls with the top 10 by past revenue"
                ]
              },
              product: {
                title: "Launch a Win-Back Campaign for Lapsed Buyers",
                steps: [
                  "Export customers who haven't purchased in 90+ days",
                  "Send a personalized 'new arrivals' email based on their past purchases",
                  "Include a time-limited discount or free shipping offer",
                  "Set up an automated reorder reminder sequence for consumable products"
                ]
              },
            }

            const automationDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Connect Your Tools with Zapier/Make",
                steps: [
                  "Sign up for Zapier or Make (both have free tiers)",
                  "Connect your payment tool → email platform for auto-tagging new buyers",
                  "Connect your community platform → CRM for engagement tracking",
                  "Set up notifications for new purchases and cancellations",
                  "Start with 3-5 automations and expand from there"
                ]
              },
              local: {
                title: "Connect Your Booking, Invoicing & Review Tools",
                steps: [
                  "Sign up for Zapier or Make (both have free tiers)",
                  "Connect your booking system → invoicing tool for automatic billing",
                  "Set up automatic review requests after completed jobs",
                  "Add new leads to your CRM automatically from web forms and calls",
                  "Set up text/email notifications for new bookings and cancellations"
                ]
              },
              professional: {
                title: "Connect Your CRM, Calendar & Billing",
                steps: [
                  "Sign up for Zapier or Make (both have free tiers)",
                  "Connect your CRM → calendar for automatic meeting scheduling",
                  "Set up automatic invoice generation when projects hit milestones",
                  "Connect intake forms → CRM for automatic lead creation",
                  "Set up notifications for new leads, won deals, and overdue invoices"
                ]
              },
              product: {
                title: "Connect Your Store, Inventory & Shipping",
                steps: [
                  "Sign up for Zapier or Make (both have free tiers)",
                  "Connect your store → shipping tool for automatic label generation",
                  "Set up low-inventory alerts to prevent stockouts",
                  "Connect orders → accounting software for automatic bookkeeping",
                  "Set up notifications for returns, refunds, and high-value orders"
                ]
              },
            }

            const supportDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Build an AI Support Bot",
                steps: [
                  "Gather your top 50 FAQs from support tickets, DMs, and emails",
                  "Sign up for a chatbot tool (Intercom, Crisp, or Tidio — free tiers available)",
                  "Upload your FAQ content and let the AI train on it",
                  "Install the widget on your website and community",
                  "Review weekly transcripts to improve accuracy"
                ]
              },
              local: {
                title: "Set Up an AI Receptionist / Website Chatbot",
                steps: [
                  "Gather your top 30 customer questions (pricing, hours, service areas, etc.)",
                  "Sign up for a chatbot tool (Tidio or Crisp — free tiers available)",
                  "Train it on your services, pricing, and booking process",
                  "Install on your website with a 'Book Now' button for instant scheduling",
                  "Set up after-hours auto-responses with a booking link"
                ]
              },
              professional: {
                title: "Build an AI Client Intake & FAQ Bot",
                steps: [
                  "Gather your top 30 prospect questions (services, process, pricing, timeline)",
                  "Sign up for a chatbot tool (Intercom or Crisp — free tiers available)",
                  "Train it to qualify leads and collect intake information",
                  "Install on your website with a 'Schedule a Consultation' CTA",
                  "Review weekly to improve lead qualification accuracy"
                ]
              },
              product: {
                title: "Build an AI Customer Service Bot",
                steps: [
                  "Gather your top 50 customer questions (order status, returns, sizing, etc.)",
                  "Sign up for a chatbot tool (Tidio or Gorgias — free tiers available)",
                  "Connect it to your order system for real-time tracking lookups",
                  "Install on your website and post-purchase emails",
                  "Review weekly transcripts and add new FAQs"
                ]
              },
            }

            const contentDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Set Up AI Content Repurposing",
                steps: [
                  "Take your best-performing long-form content (podcast, video, blog)",
                  "Use Claude or ChatGPT to extract key insights and quotes",
                  "Create templates: 1 long-form → 5 social posts + 3 email snippets + 1 thread",
                  "Schedule distribution across platforms with Buffer or Hypefury",
                  "Track engagement and double down on what resonates"
                ]
              },
              local: {
                title: "Build an Automated Review & Social Proof Engine",
                steps: [
                  "Set up automated review request texts/emails after every completed job",
                  "Use AI to turn your best reviews into social media posts",
                  "Create before/after photo templates for Instagram and Facebook",
                  "Respond to every review (positive and negative) within 24 hours",
                  "Share customer testimonials in your email marketing"
                ]
              },
              professional: {
                title: "Build a Thought Leadership Content Engine",
                steps: [
                  "Use AI to turn client wins and case studies into LinkedIn posts",
                  "Create a monthly email newsletter with industry insights (AI-assisted)",
                  "Record a 10-minute Loom video → use AI to create a blog post + social clips",
                  "Repurpose your best content into lead magnets and email sequences",
                  "Track engagement and double down on topics that resonate"
                ]
              },
              product: {
                title: "Set Up AI Product Content Pipeline",
                steps: [
                  "Use AI to generate product descriptions from your photos and specs",
                  "Create social media templates for new arrivals and bestsellers",
                  "Set up automated email campaigns for product launches",
                  "Use AI to create UGC-style content from customer reviews and photos",
                  "Track which content drives sales and iterate"
                ]
              },
            }

            const conversionDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Optimize Your Sales Funnel",
                steps: [
                  "Map every step: ad/traffic → landing page → opt-in → nurture → offer → purchase",
                  "Identify the biggest drop-off point (use analytics or gut feel)",
                  "A/B test headlines and CTAs on your landing page",
                  "Add urgency or social proof to your offer page",
                  "Set up an abandoned cart/checkout email sequence"
                ]
              },
              local: {
                title: "Speed Up Your Lead Response Time",
                steps: [
                  "Set up instant auto-response (text + email) for every new lead",
                  "Include your booking link, service area, and next available slots",
                  "Follow up with a phone call within 30 minutes during business hours",
                  "Send a 'still need help?' follow-up after 24 hours if no booking",
                  "Track response time and close rate to see improvement"
                ]
              },
              professional: {
                title: "Optimize Your Proposal & Close Process",
                steps: [
                  "Create proposal templates so you can send within 24 hours of consultation",
                  "Add case studies and testimonials to your proposal package",
                  "Set up an automated 3-email follow-up sequence after sending proposals",
                  "Include a clear CTA and deadline in every proposal",
                  "Track win rate by proposal type and adjust"
                ]
              },
              product: {
                title: "Optimize Your Store Conversion Rate",
                steps: [
                  "Add customer reviews and photos to product pages",
                  "Simplify your checkout flow (fewer steps = higher conversion)",
                  "Add urgency triggers (low stock, limited time)",
                  "Set up abandoned cart email recovery (3-email sequence)",
                  "A/B test product page headlines, images, and CTAs"
                ]
              },
            }

            const timeBlockDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
              online: {
                title: "Reclaim 10 Hours/Week with Time Blocking",
                steps: [
                  "Audit your last week — where did every hour go?",
                  "Identify your top 3 time-wasters (usually: support, content creation, admin)",
                  "Block 2-hour 'deep work' slots on your calendar (no meetings allowed)",
                  "Batch similar tasks: all content in one block, all support in another",
                  "Delegate or automate anything that doesn't require YOUR expertise"
                ]
              },
              local: {
                title: "Get Out of the Day-to-Day Grind",
                steps: [
                  "Audit your last week — how much time was on the phone, dispatching, and admin?",
                  "Identify the top 3 tasks someone else (or a tool) could handle",
                  "Block mornings for high-value work (estimates, client meetings, growth)",
                  "Batch admin tasks: invoicing in one slot, callbacks in another",
                  "Delegate or automate everything that doesn't require you personally"
                ]
              },
              professional: {
                title: "Reclaim Billable Hours from Admin",
                steps: [
                  "Track your time for one week — separate billable from non-billable",
                  "Identify the top 3 non-billable time sinks (proposals, scheduling, follow-up)",
                  "Block focused client work time on your calendar (no admin allowed)",
                  "Batch similar admin tasks: all proposals Monday, all billing Friday",
                  "Delegate or automate everything that isn't client-facing or strategic"
                ]
              },
              product: {
                title: "Reclaim 10 Hours/Week from Operations",
                steps: [
                  "Audit your last week — how much time was on orders, shipping, and customer emails?",
                  "Identify the top 3 repetitive tasks that could be automated or delegated",
                  "Block time for strategic work (product development, marketing, partnerships)",
                  "Batch operational tasks: all shipping in one slot, all customer service in another",
                  "Delegate or automate everything that doesn't drive growth"
                ]
              },
            }

            const dashboardDIY: Record<BusinessCategory, { title: string; steps: string[]; metrics: string }> = {
              online: {
                title: "Create a Real-Time KPI Dashboard",
                steps: [
                  "Choose a tool: Google Sheets, Notion, or a dashboard tool like Databox",
                  "Track 5 key metrics: MRR, churn rate, new signups, support tickets, engagement",
                  "Set up weekly auto-reports sent to your email",
                  "Review weekly and look for trends before they become problems",
                  "Share with your team so everyone is aligned on what matters"
                ],
                metrics: "MRR, churn rate, new signups, support tickets, engagement"
              },
              local: {
                title: "Create a Business Health Dashboard",
                steps: [
                  "Choose a tool: Google Sheets or a simple dashboard like Databox",
                  "Track 5 key metrics: new leads, booked jobs, revenue, reviews, and response time",
                  "Set up weekly auto-reports sent to your email",
                  "Review weekly and look for trends before they cost you",
                  "Share with your team so everyone knows what matters"
                ],
                metrics: "new leads, booked jobs, revenue, reviews, response time"
              },
              professional: {
                title: "Create a Pipeline & Performance Dashboard",
                steps: [
                  "Choose a tool: your CRM dashboard, Google Sheets, or Databox",
                  "Track 5 key metrics: pipeline value, proposals sent, close rate, utilization, and revenue",
                  "Set up weekly auto-reports sent to your email",
                  "Review weekly and identify pipeline gaps before they impact revenue",
                  "Share with your team so everyone is aligned on targets"
                ],
                metrics: "pipeline value, proposals sent, close rate, utilization, revenue"
              },
              product: {
                title: "Create a Sales & Operations Dashboard",
                steps: [
                  "Choose a tool: Shopify analytics, Google Sheets, or Triple Whale",
                  "Track 5 key metrics: orders, revenue, conversion rate, return rate, and ad ROAS",
                  "Set up weekly auto-reports sent to your email",
                  "Review weekly and spot trends before they become problems",
                  "Share with your team so everyone is aligned"
                ],
                metrics: "orders, revenue, conversion rate, return rate, ad ROAS"
              },
            }

            const ob = onboardingDIY[cat]
            const ch = churnDIY[cat]
            const au = automationDIY[cat]
            const su = supportDIY[cat]
            const co = contentDIY[cat]
            const cv = conversionDIY[cat]
            const tb = timeBlockDIY[cat]
            const db = dashboardDIY[cat]

            const diy: { title: string; steps: string[]; time: string; impact: string; emoji: string; show: boolean }[] = [
              { ...ob, time: "2-3 hours", impact: cat === 'local' ? "40%+ fewer no-shows" : "Reduce early churn by 30%+", emoji: "🚀", show: formData.onboardingAutomated !== 'Yes' },
              { ...ch, time: "2-3 hours", impact: "Recover 10-20% of lost revenue", emoji: "🔄", show: formData.churnRate === '20+' || formData.churnRate === '10-20' },
              { ...au, time: "1-2 hours", impact: "Eliminate 80% of manual workflows", emoji: "⚡", show: formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30' },
              { ...su, time: "2-3 hours", impact: "Handle 80% of inquiries automatically", emoji: "💬", show: formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10' },
              { ...co, time: "1-2 hours", impact: cat === 'local' ? "3x more reviews on autopilot" : "10-15 hrs/week saved", emoji: "📝", show: formData.contentCreationHours === '20+' || formData.contentCreationHours === '10-20' },
              { ...cv, time: "3-4 hours", impact: "2-3x your conversion rate over 30 days", emoji: "🎯", show: formData.conversionRate === 'under-1' || formData.conversionRate === '1-3' },
              { ...tb, time: "1 hour to plan", impact: "10+ hours reclaimed per week", emoji: "⏰", show: formData.hoursPerWeek === '60+' || formData.highValueWork === 'under-20' },
              { ...db, time: "2-3 hours", impact: "Spot problems before they become crises", emoji: "📊", show: true },
            ]
            return diy.filter(d => d.show).slice(0, 5).map((d, i) => (
              <Card key={i} className="bg-white/[0.03] backdrop-blur-md border-white/10 p-6 hover:border-amber-500/20 transition-all">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{d.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-lg">{d.title}</h3>
                      <div className="flex gap-3 text-xs">
                        <span className="text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{d.time}</span>
                        <span className="text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full hidden sm:block">{d.impact}</span>
                      </div>
                    </div>
                    <p className="text-emerald-400 text-sm mb-3 sm:hidden">{d.impact}</p>
                    <ol className="space-y-2">
                      {d.steps.map((step, j) => (
                        <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-amber-400 font-bold text-xs mt-0.5 shrink-0">{j + 1}.</span>
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

      {/* ── 9. Free Tools & Resources ──────────────────── */}
      <FadeUp delay={0.29}>
        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
          <Zap className="w-6 h-6 text-blue-400" /> Free Tools We Recommend
        </h2>
        <p className="text-slate-400 mb-6">No budget? No problem. These free tools can get you started today.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {((): { name: string; use: string; emoji: string; cat: string }[] => {
            const bCat = getBusinessCategory(formData.businessType || '')
            const shared = [
              { name: "Zapier", use: "Connect apps & automate workflows", emoji: "⚡", cat: "Automation" },
              { name: "Cal.com", use: "Open-source scheduling for calls & bookings", emoji: "📅", cat: "Scheduling" },
              { name: "Canva", use: "Design marketing assets & social posts", emoji: "🎨", cat: "Design" },
              { name: "Claude", use: "AI assistant for content, strategy & automation", emoji: "🤖", cat: "AI" },
            ]
            const byIndustry: Record<BusinessCategory, { name: string; use: string; emoji: string; cat: string }[]> = {
              online: [
                { name: "ConvertKit", use: "Email marketing built for creators (free to 1K subs)", emoji: "📧", cat: "Email" },
                { name: "Notion", use: "Document processes, SOPs & manage projects", emoji: "📝", cat: "Docs" },
                { name: "Stripe", use: "Payment processing & subscription management", emoji: "💳", cat: "Payments" },
                { name: "Loom", use: "Record tutorials, SOPs & async video", emoji: "🎥", cat: "Video" },
                { name: "Crisp", use: "Live chat + AI chatbot for support", emoji: "💬", cat: "Support" },
              ],
              local: [
                { name: "Jobber", use: "Scheduling, invoicing & client management for service businesses", emoji: "🔧", cat: "Operations" },
                { name: "Google Business", use: "Free listing — get found in local search & collect reviews", emoji: "📍", cat: "Marketing" },
                { name: "Mailchimp", use: "Email marketing for customer follow-up (free tier)", emoji: "📧", cat: "Email" },
                { name: "Wave", use: "Free invoicing and accounting for small businesses", emoji: "💳", cat: "Payments" },
                { name: "Tidio", use: "Website chatbot for booking & FAQs (free tier)", emoji: "💬", cat: "Support" },
              ],
              professional: [
                { name: "HubSpot CRM", use: "Free CRM for pipeline, contacts & deals", emoji: "📊", cat: "CRM" },
                { name: "Notion", use: "Document processes, proposals & client portals", emoji: "📝", cat: "Docs" },
                { name: "Loom", use: "Record client updates & async video proposals", emoji: "🎥", cat: "Video" },
                { name: "FreshBooks", use: "Simple invoicing & time tracking (free trial)", emoji: "💳", cat: "Billing" },
                { name: "Crisp", use: "Website chat for lead qualification & intake", emoji: "💬", cat: "Support" },
              ],
              product: [
                { name: "Klaviyo", use: "Email marketing built for e-commerce (free to 250 contacts)", emoji: "📧", cat: "Email" },
                { name: "Shopify", use: "E-commerce platform with built-in analytics", emoji: "🛒", cat: "Store" },
                { name: "ShipStation", use: "Shipping & order fulfillment automation", emoji: "📦", cat: "Shipping" },
                { name: "Triple Whale", use: "E-commerce analytics & attribution", emoji: "📊", cat: "Analytics" },
                { name: "Tidio", use: "AI chatbot for order status & customer service", emoji: "💬", cat: "Support" },
              ],
            }
            return [...byIndustry[bCat], ...shared]
          })().map((tool, i) => (
            <div key={i} className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl p-4 hover:border-blue-500/20 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.emoji}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{tool.name}</h4>
                  <p className="text-slate-500 text-xs">{tool.cat}</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{tool.use}</p>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* ── 10. "What Happens If You Don't Act" ────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-red-500/5 backdrop-blur-md border-red-500/20 p-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <AlertCircle className="w-6 h-6 text-red-400" /> The Cost of Doing Nothing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {fmt$(parseListSize(formData.listSize, getBusinessCategory(formData.businessType || '')) * parseChurnPct(formData.churnRate) * parseProductPrice(formData.productPricePoint, getBusinessCategory(formData.businessType || '')))}
              </p>
              <p className="text-slate-400 text-sm">Lost revenue per year from churn alone</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {formData.hoursPerWeek === '60+' ? '1,040+' : formData.hoursPerWeek === '40-60' ? '520+' : '260+'} hrs
              </p>
              <p className="text-slate-400 text-sm">Spent on tasks automation could handle this year</p>
            </div>
            <div className="space-y-2">
              <p className="text-red-400 font-bold text-3xl">
                {formData.twoWeeksOff === 'No' ? '0 days' : formData.twoWeeksOff === 'Maybe' ? '~5 days' : '14+ days'}
              </p>
              <p className="text-slate-400 text-sm">You can take off without the business breaking</p>
            </div>
          </div>
          <p className="text-slate-300 mt-6 text-sm">
            Every week without systems is another week of lost revenue, preventable churn, and missed growth.
            The companies that win aren&apos;t working harder. They&apos;re building smarter infrastructure.
          </p>
        </Card>
      </FadeUp>

      {/* ── 11. CTA ─────────────────────────────────────── */}
      <FadeUp delay={0.3}>
        <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 border-white/10 p-12 text-center backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.15),transparent)]" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to install these systems?</h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto">
              Let&apos;s map out the exact automation stack your business needs — in a free 30-minute strategy call.
            </p>
            <div className="w-full rounded-xl overflow-hidden border border-white/10 my-4" style={{ minHeight: 500 }}>
              <iframe
                src="https://cal.com/mia-louviere-a4n2hk/30min?embed=true&theme=dark"
                width="100%"
                height="500"
                frameBorder="0"
                style={{ border: 'none', background: 'transparent' }}
                allow="payment"
              />
            </div>
            <p className="text-slate-500 text-sm pt-4">Your results have been saved. Check your email for your full report.</p>
          </div>
        </Card>
      </FadeUp>
    </div>
  )
}
