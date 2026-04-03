"use client"

import { useEffect } from "react"
import { getBusinessCategory, type BusinessCategory } from "@/lib/audit-industry-config"
import { generateIndustryPlaybook } from "@/lib/freebie-generator"
import { industries } from "@/lib/industry-data"
import Link from "next/link"

interface PrintReportProps {
  formData: any
  auditScore: number
}

// ─── Helpers ─────────────────────────────────────────────
function parseChurnPct(v: string): number {
  if (v === '20+') return 0.25; if (v === '10-20') return 0.15; if (v === '5-10') return 0.07; if (v === 'under-5') return 0.03; return 0.10
}
function parseProductPrice(v: string, cat: BusinessCategory): number {
  const map: Record<BusinessCategory, Record<string, number>> = {
    online: { '5k+': 7500, '1k-5k': 3000, '200-1k': 600, '50-200': 125, 'under-50': 30, 'recurring': 100 },
    local: { '5k+': 15000, '1k-5k': 5000, '200-1k': 1200, '50-200': 350, 'under-50': 100, 'recurring': 200 },
    professional: { '5k+': 25000, '1k-5k': 10000, '200-1k': 3500, '50-200': 1000, 'under-50': 250, 'recurring': 5000 },
    product: { '5k+': 7500, '1k-5k': 2500, '200-1k': 600, '50-200': 100, 'under-50': 30, 'recurring': 50 },
  }
  return map[cat]?.[v] ?? 100
}
function parseListSize(v: string, cat: BusinessCategory): number {
  const map: Record<BusinessCategory, Record<string, number>> = {
    online: { '50k+': 75000, '10k-50k': 30000, '5k-10k': 7500, '1k-5k': 3000, 'under-1k': 500 },
    local: { '50k+': 15000, '10k-50k': 5000, '5k-10k': 1000, '1k-5k': 300, 'under-1k': 50 },
    professional: { '50k+': 750, '10k-50k': 250, '5k-10k': 60, '1k-5k': 20, 'under-1k': 5 },
    product: { '50k+': 150000, '10k-50k': 50000, '5k-10k': 12000, '1k-5k': 2500, 'under-1k': 250 },
  }
  return map[cat]?.[v] ?? 500
}
function parseConversionPct(v: string, cat: BusinessCategory): number {
  if (cat === 'local' || cat === 'professional') {
    if (v === '10+') return 0.80; if (v === '5-10') return 0.65; if (v === '3-5') return 0.45; if (v === '1-3') return 0.30; return 0.15
  }
  if (v === '10+') return 0.12; if (v === '5-10') return 0.07; if (v === '3-5') return 0.04; if (v === '1-3') return 0.02; return 0.005
}
function fmt$(n: number): string {
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`; if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`; return `$${Math.round(n)}`
}

// ─── Sub-score calculator ─────────────────────────────────
function calcSub(fd: any) {
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

  let retention = 50
  if (fd.churnRate === 'under-5') retention = 85
  else if (fd.churnRate === '5-10') retention = 60
  else if (fd.churnRate === '10-20') retention = 35
  else if (fd.churnRate === '20+') retention = 15
  if (fd.productPricePoint === '5k+' || fd.productPricePoint === '1k-5k') retention += 10
  if (fd.productPricePoint === 'recurring') retention += 5
  retention = Math.max(0, Math.min(100, retention))

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

  return { Revenue: revenue, Automation: automation, Acquisition: acquisition, Retention: retention, Time: time }
}

// ─── Category insight ─────────────────────────────────────
function categoryInsight(cat: string, fd: any): string {
  const bCat = getBusinessCategory(fd.businessType || '')
  switch (cat) {
    case 'Revenue': {
      if (fd.revenueTrend === 'Growing') {
        const m: Record<BusinessCategory, string> = {
          online: "Revenue is trending up. AI infrastructure can accelerate this without adding headcount.",
          local: "Revenue is climbing. Automated booking, review generation, and follow-up can compound this growth.",
          professional: "Revenue is trending up. Systematizing client delivery and pipeline automation can accelerate growth.",
          product: "Revenue is growing. Automated inventory, marketing, and fulfillment can sustain this trajectory.",
        }
        return m[bCat]
      }
      if (fd.revenueTrend === 'Flat') {
        const m: Record<BusinessCategory, string> = {
          online: "Revenue has plateaued. Automated funnels and AI-driven upsells can reignite growth.",
          local: "Revenue has plateaued. Automated follow-up, review generation, and lead capture can reignite growth.",
          professional: "Revenue is flat. Automated pipeline nurture and proposal systems can restart momentum.",
          product: "Sales have plateaued. Email automation, abandoned cart recovery, and retargeting can unlock growth.",
        }
        return m[bCat]
      }
      return "Revenue is declining. Urgent automation of acquisition and retention can stabilize and reverse the trend."
    }
    case 'Automation': {
      if (fd.percentAutomated === '60+') return "Well-automated. AI intelligence layers and optimization are the next edge."
      if (fd.percentAutomated === '30-60') return "Tools exist but aren't connected. Full automation could save 20+ hrs/week."
      return "Most operations are manual. Automation alone could transform capacity overnight."
    }
    case 'Acquisition': {
      const cvr = parseConversionPct(fd.conversionRate, bCat)
      const goodThreshold = bCat === 'local' || bCat === 'professional' ? 0.50 : 0.05
      if (cvr >= goodThreshold) return "Solid conversion rate. AI can optimize for even higher enrollment and close rates."
      return "Low conversion rate means the funnel is leaking. AI-driven optimization can 2-3x conversions."
    }
    case 'Retention': {
      if (fd.churnRate === 'under-5') return "Excellent retention. AI can deepen engagement with personalized proactive outreach."
      if (fd.churnRate === '5-10') return "Moderate churn. Automated onboarding and engagement sequences can cut this significantly."
      return "High churn is eating growth. Automated health scoring and re-engagement can cut churn by 30-50%."
    }
    case 'Time': {
      if (fd.twoWeeksOff === 'Yes') return "Business runs independently. AI can unlock the next level of scale."
      return "Owner is the bottleneck. AI delegation systems enable stepping back without losing momentum."
    }
    default: return ""
  }
}

// ─── Growth Level ─────────────────────────────────────────
function getGrowthLevel(fd: any): { level: string; label: string; insight: string } {
  const rev = fd.currentRevenue
  const auto = fd.percentAutomated
  const cat = getBusinessCategory(fd.businessType || '')

  if (rev === 'pre-revenue' || rev === 'under-100k') {
    const insights: Record<BusinessCategory, string> = {
      online: 'Build mode. Priority: automating lead capture and onboarding to focus on product and growth instead of manual ops.',
      local: 'Early days. Priority: capturing every lead and call, automating booking, and building a review engine.',
      professional: 'Building the practice. Priority: automating client intake, streamlining proposals, and building a referral engine.',
      product: 'Launch mode. Priority: automating order processing, building customer base, and optimizing marketing spend.',
    }
    return { level: 'early', label: 'Early Stage', insight: insights[cat] }
  }
  if (rev === '100k-500k' || (rev === '500k-1m' && auto !== '60+')) {
    const insights: Record<BusinessCategory, string> = {
      online: 'Product-market fit found. Now systems are needed to handle volume without adding headcount.',
      local: 'Steady demand. Now systems are needed so growth doesn\'t mean more chaos.',
      professional: 'Solid client base built. Now systems are needed to handle capacity without proportional hiring.',
      product: 'Market traction. Now systems are needed to handle volume without burnout.',
    }
    return { level: 'growth', label: 'Growth Stage', insight: insights[cat] }
  }
  if (rev === '500k-1m' || rev === '1m-3m') {
    const insights: Record<BusinessCategory, string> = {
      online: 'Past the grind phase. The bottleneck is now operational capacity. AI infrastructure should replace manual processes.',
      local: 'Past survival mode. The bottleneck is operational capacity. AI systems will unlock the next level without more hires.',
      professional: 'Past feast-or-famine. The bottleneck is delivery capacity and margins. AI frees the senior team.',
      product: 'Past the startup grind. The bottleneck is supply chain and operations. AI drives the next growth phase.',
    }
    return { level: 'scale', label: 'Scale Stage', insight: insights[cat] }
  }
  return { level: 'enterprise', label: 'Enterprise Stage', insight: 'At this scale, every manual process is a drag on margins and enterprise value. Full AI integration creates operational leverage that drives valuation multiples.' }
}

// ─── Executive Report ─────────────────────────────────────
function executiveReport(fd: any, score: number, cat: BusinessCategory) {
  const churnPct = parseChurnPct(fd.churnRate)
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const annualChurnLoss = Math.round(list * churnPct * price)
  const weeklyHrs = fd.hoursPerWeek === '60+' ? 60 : fd.hoursPerWeek === '40-60' ? 50 : fd.hoursPerWeek === '20-40' ? 30 : 20
  const automatedPct = fd.percentAutomated === '60+' ? 70 : fd.percentAutomated === '30-60' ? 45 : fd.percentAutomated === 'under-30' ? 20 : 5
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2

  const findings: { type: 'critical' | 'warning' | 'opportunity'; label: string; value: string; detail: string }[] = []

  if (annualChurnLoss > 3000) {
    findings.push({ type: 'critical', label: 'Revenue Leaking from Churn', value: fmt$(annualChurnLoss) + '/year',
      detail: `Based on ${fd.churnRate}% churn rate and average customer value, an estimated ${fmt$(annualChurnLoss)} per year in revenue is being lost that AI retention systems can recover.` })
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    findings.push({ type: 'critical', label: 'Operations Gap', value: `${100 - automatedPct}% still manual`,
      detail: `${100 - automatedPct}% of recurring operations are manual. Businesses that automate 60%+ of ops generate 2-3x more revenue per employee and command higher exit multiples.` })
  }
  if (fd.twoWeeksOff === 'No') {
    findings.push({ type: 'critical', label: 'Owner Dependency Risk', value: 'Business stops without you',
      detail: 'The business cannot function without direct owner involvement. This caps the growth ceiling, suppresses valuation, and is a leading cause of founder burnout.' })
  }
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    findings.push({ type: 'warning', label: 'Conversion Underperformance', value: 'Below industry average',
      detail: 'Conversion rate is significantly below what AI-optimized businesses achieve. A 2x improvement requires no new traffic — just better systems and automated follow-up.' })
  }
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    findings.push({ type: 'warning', label: 'High-Cost Support Load', value: `${supportHrs}+ hrs/week manual`,
      detail: `${supportHrs}+ hours per week on support that AI can handle. At $75/hr equivalent, that is ${fmt$(supportHrs * 4 * 75)}/month in recoverable capacity.` })
  }
  if (findings.length < 3) {
    findings.push({ type: 'opportunity', label: 'Growth Acceleration Window', value: 'High potential',
      detail: 'The business foundation is solid. AI infrastructure will compound existing momentum — more revenue from the same inputs, without proportional cost increases.' })
  }

  const timeValueAtStake = Math.round(weeklyHrs * 0.35 * 52 * 75)
  const totalAtStake = annualChurnLoss + timeValueAtStake
  
  // Market Displacement Risk (consultant-style metric)
  const displacementRisk = Math.min(95, Math.max(15, (100 - score) + (cat === 'online' ? 20 : 10)))
  
  return { findings: findings.slice(0, 4), totalAtStake, annualChurnLoss, displacementRisk }
}

// ─── Industry Benchmarks ──────────────────────────────────
function getIndustryBenchmarks(fd: any, cat: BusinessCategory) {
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
    { metric: 'Operations Automated', yours: `${autoPct}%`, benchmark: `${t.automation}%`, gap: autoPct >= t.automation ? null : `${t.automation - autoPct}% gap`, status: autoPct >= t.automation ? 'good' : autoPct >= t.automation * 0.65 ? 'warning' : 'critical' },
    { metric: cat === 'local' ? 'Customer Retention Loss' : cat === 'professional' ? 'Client Attrition' : 'Churn Rate', yours: `${churnNum.toFixed(0)}%`, benchmark: `${t.churn}% or less`, gap: churnNum <= t.churn ? null : `${(churnNum - t.churn).toFixed(0)}% above`, status: churnNum <= t.churn ? 'good' : churnNum <= t.churn * 1.5 ? 'warning' : 'critical' },
    { metric: cat === 'local' || cat === 'professional' ? 'Lead-to-Client Close Rate' : 'Conversion Rate', yours: `${convNum.toFixed(1)}%`, benchmark: `${t.conversion}%+`, gap: convNum >= t.conversion ? null : `${(t.conversion - convNum).toFixed(1)}% below`, status: convNum >= t.conversion ? 'good' : convNum >= t.conversion * 0.6 ? 'warning' : 'critical' },
    { metric: 'Owner Hours/Week', yours: fd.hoursPerWeek || '40-60', benchmark: t.hoursPerWeek, gap: (fd.hoursPerWeek === 'under-20' || fd.hoursPerWeek === '20-40') ? null : 'Above target', status: (fd.hoursPerWeek === 'under-20' || fd.hoursPerWeek === '20-40') ? 'good' : fd.hoursPerWeek === '40-60' ? 'warning' : 'critical' },
    { metric: 'Can Step Away 2 Weeks', yours: fd.twoWeeksOff || 'No', benchmark: 'Yes', gap: fd.twoWeeksOff === 'Yes' ? null : 'Owner-dependent', status: fd.twoWeeksOff === 'Yes' ? 'good' : fd.twoWeeksOff === 'Maybe' ? 'warning' : 'critical' },
  ]
}

// ─── System Architecture ──────────────────────────────────
function systemArchitecture(fd: any, cat: BusinessCategory) {
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const churnPct = parseChurnPct(fd.churnRate)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2

  type Sys = { name: string; phase: 1 | 2 | 3; problem: string; value: string; timeline: string; priority: 'critical' | 'high' | 'medium' }

  const allSystems: Record<BusinessCategory, Sys[]> = {
    online: [
      { name: "AI Lead Capture & Qualifier", phase: 1, problem: "Leads visiting but not converting", value: "+15-30% more qualified leads", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Onboarding Engine", phase: 1, problem: "New customers confused, churning early", value: "-30% early churn", timeline: "Week 1-2", priority: 'critical' },
      { name: "AI Support System", phase: 1, problem: `${supportHrs}+ hrs/week on manual support`, value: fmt$(supportHrs * 4 * 60) + '/mo recovered', timeline: "Week 2-3", priority: 'high' },
      { name: "Churn Prevention Engine", phase: 2, problem: `${fd.churnRate}% churn eating revenue`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-4", priority: 'critical' },
      { name: "Content Repurposing Pipeline", phase: 2, problem: "Content creation eating 10-20 hrs/week", value: "10-15 hrs/week saved", timeline: "Week 3-5", priority: 'high' },
      { name: "Revenue Intelligence Dashboard", phase: 2, problem: "No real-time view of what's working", value: "Spot issues before they cost you", timeline: "Week 4-5", priority: 'high' },
      { name: "AI Upsell & Expansion Engine", phase: 3, problem: "Leaving LTV on the table", value: "+15-25% revenue from existing base", timeline: "Week 6-8", priority: 'medium' },
      { name: "Predictive Analytics Layer", phase: 3, problem: "Reactive decisions, not proactive", value: "30% faster decision-making", timeline: "Week 8-10", priority: 'medium' },
      { name: "Partner & Affiliate Automation", phase: 3, problem: "Manual partnership management", value: "+New revenue channel on autopilot", timeline: "Week 10-12", priority: 'medium' },
    ],
    local: [
      { name: "AI Receptionist & Lead Capture", phase: 1, problem: "Missing calls and after-hours leads", value: "+20-40% more booked jobs", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Booking & Confirmation", phase: 1, problem: "Manual scheduling and no-shows", value: "-40% no-shows", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Review Engine", phase: 1, problem: "No systematic review generation", value: "3-5x more reviews, higher ranking", timeline: "Week 2-3", priority: 'high' },
      { name: "Customer Follow-Up & Retention", phase: 2, problem: "Customers not returning after service", value: "+30% repeat business", timeline: "Week 3-4", priority: 'critical' },
      { name: "Invoice & Payment Automation", phase: 2, problem: "Manual billing and collections", value: "5-8 hrs/week saved", timeline: "Week 3-5", priority: 'high' },
      { name: "Business Health Dashboard", phase: 2, problem: "No real-time view of jobs/revenue/reviews", value: "Spot issues before they cost you", timeline: "Week 4-5", priority: 'high' },
      { name: "Referral & Loyalty Program", phase: 3, problem: "No systematic referral generation", value: "+10-20% new customers from referrals", timeline: "Week 6-8", priority: 'medium' },
      { name: "Seasonal Campaign Engine", phase: 3, problem: "Revenue dips in slow seasons", value: "Predictable revenue year-round", timeline: "Week 8-10", priority: 'medium' },
      { name: "Team & Dispatch Automation", phase: 3, problem: "Manual crew management", value: "10+ hrs/week saved", timeline: "Week 10-12", priority: 'medium' },
    ],
    professional: [
      { name: "AI Client Intake & Qualification", phase: 1, problem: "Manual intake wasting senior time", value: "5-10 hrs/week saved", timeline: "Week 1-2", priority: 'critical' },
      { name: "Automated Proposal System", phase: 1, problem: "Slow proposals losing deals", value: "+30% close rate, 3x faster", timeline: "Week 1-2", priority: 'critical' },
      { name: "Client Portal & Communication", phase: 1, problem: `${supportHrs}+ hrs/week on status updates`, value: fmt$(supportHrs * 4 * 100) + '/mo billable time recovered', timeline: "Week 2-3", priority: 'high' },
      { name: "Pipeline & Deal Automation", phase: 2, problem: "Deals dying in the pipeline", value: "+20-30% win rate", timeline: "Week 3-4", priority: 'critical' },
      { name: "Client Health & Retention", phase: 2, problem: `${fd.churnRate}% client attrition`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-5", priority: 'high' },
      { name: "Thought Leadership Engine", phase: 2, problem: "Inconsistent content and pipeline", value: "Consistent inbound on autopilot", timeline: "Week 4-6", priority: 'high' },
      { name: "Referral & Partnership System", phase: 3, problem: "No systematic referral generation", value: "+15-25% new client pipeline", timeline: "Week 6-8", priority: 'medium' },
      { name: "Revenue Intelligence Dashboard", phase: 3, problem: "No view of pipeline health/margins", value: "Spot issues before they cost you", timeline: "Week 8-10", priority: 'medium' },
      { name: "Upsell & Account Expansion", phase: 3, problem: "Leaving expansion revenue on table", value: "+15-20% revenue from existing clients", timeline: "Week 10-12", priority: 'medium' },
    ],
    product: [
      { name: "Abandoned Cart Recovery", phase: 1, problem: "70%+ of carts abandoned", value: "+10-15% recovered revenue", timeline: "Week 1-2", priority: 'critical' },
      { name: "Post-Purchase Nurture Engine", phase: 1, problem: "Low repeat purchase rate", value: "+20-30% repeat purchases", timeline: "Week 1-2", priority: 'critical' },
      { name: "AI Customer Service System", phase: 1, problem: `${supportHrs}+ hrs/week on manual support`, value: fmt$(supportHrs * 4 * 60) + '/mo saved', timeline: "Week 2-3", priority: 'high' },
      { name: "Customer Retention & Loyalty", phase: 2, problem: `${fd.churnRate}% customer loss`, value: fmt$(Math.round(list * churnPct * price * 0.3)) + '/year saved', timeline: "Week 3-4", priority: 'critical' },
      { name: "Inventory & Fulfillment Automation", phase: 2, problem: "Manual order processing", value: "10-15 hrs/week saved", timeline: "Week 3-5", priority: 'high' },
      { name: "AI Marketing & Content Engine", phase: 2, problem: "Manual content creation", value: "10-15 hrs/week saved", timeline: "Week 4-6", priority: 'high' },
      { name: "Revenue Intelligence Dashboard", phase: 3, problem: "No real-time sales/inventory view", value: "Spot issues before they cost you", timeline: "Week 6-8", priority: 'medium' },
      { name: "Predictive Reorder System", phase: 3, problem: "Stockouts and overstock waste", value: "20-30% inventory cost reduction", timeline: "Week 8-10", priority: 'medium' },
      { name: "VIP & High-LTV Program", phase: 3, problem: "No treatment of best customers", value: "+25-40% LTV from top tier", timeline: "Week 10-12", priority: 'medium' },
    ],
  }
  return allSystems[cat]
}

// ─── 90-Day Roadmap ───────────────────────────────────────
function roadmap(fd: any, cat: BusinessCategory) {
  const phase1: Record<BusinessCategory, string[]> = {
    online: ["Audit existing tech stack & integrations", "Automated onboarding email sequences", "AI support chatbot setup", "Lead capture optimization"],
    local: ["Audit existing tools & disconnected systems", "Automated booking confirmation & reminders", "AI receptionist / after-hours response", "Review request automation"],
    professional: ["Audit existing tools & client workflow", "Automated client intake & welcome sequence", "AI-assisted proposal generation", "Scheduling & calendar automation"],
    product: ["Audit existing tech stack & integrations", "Automated order processing & fulfillment alerts", "AI customer service for common inquiries", "Abandoned cart recovery setup"],
  }
  const phase2: Record<BusinessCategory, string[]> = {
    online: ["A/B test email sequences & funnels", "Churn prediction & re-engagement automation", "Content repurposing pipeline", "Revenue dashboard setup"],
    local: ["Automated review requests after every job", "Re-engagement campaigns for past customers", "Lead follow-up speed optimization", "Invoice & payment automation"],
    professional: ["Automated proposal follow-up sequences", "Client health scoring & proactive check-ins", "Thought leadership content pipeline", "Pipeline analytics dashboard"],
    product: ["Abandoned cart recovery & email flows", "Customer loyalty & repeat purchase automation", "Product content & social media pipeline", "Inventory forecasting setup"],
  }

  const churnPct = parseChurnPct(fd.churnRate)
  const price = parseProductPrice(fd.productPricePoint, cat)
  const list = parseListSize(fd.listSize, cat)
  const churnSaved = Math.round(list * churnPct * price * 0.3)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 10 : fd.supportHoursPerWeek === '5-10' ? 5 : 2
  const hrsRecovered = Math.round(supportHrs * 0.8 * 4)

  const phase3Final: Record<BusinessCategory, string> = {
    online: "Full owner-optional operations achieved",
    local: "Business runs without daily on-site presence",
    professional: "Senior team focused on clients, not admin",
    product: "Operations run at 2x volume without hiring",
  }

  return [
    { label: "Days 1-14", title: "Install & Configure", items: phase1[cat] },
    { label: "Days 15-30", title: "Optimize & Tune", items: phase2[cat] },
    { label: "Days 31-90", title: "Scale & Grow", items: [`Projected: ${fmt$(churnSaved)}/year saved from reduced churn`, `${hrsRecovered}+ hrs/month freed from automated support`, "AI upsell & expansion engine active", phase3Final[cat]] },
  ]
}

// ─── DIY Action Plans ─────────────────────────────────────
function getDIYPlans(fd: any, cat: BusinessCategory) {
  const plans: { title: string; time: string; impact: string; steps: string[] }[] = []

  const onboardingDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
    online: { title: "Set Up Automated Onboarding Emails", steps: ["Map your ideal customer journey from purchase to aha-moment", "Create a 5-email welcome sequence in your email platform", "Include: welcome + access, tutorial, community invite, success story, next step CTA", "Set up triggers so they fire automatically on purchase/signup", "Track open rates and optimize subject lines weekly"] },
    local: { title: "Set Up Automated Booking & Pre-Visit Sequence", steps: ["Set up instant booking confirmation via email/text with job details", "Send a 'what to expect' message 24 hours before appointment", "Include directions, prep instructions, and technician info", "Add a same-day reminder text to reduce no-shows by 40%+", "Set up post-service follow-up with review request"] },
    professional: { title: "Set Up Automated Client Welcome Sequence", steps: ["Create a welcome email with engagement letter and intake questionnaire", "Send a 'meet the team' email with process overview and timeline", "Include a scheduling link for the kickoff call", "Set up automated document collection workflow", "Send a 'what to expect in week 1' guide"] },
    product: { title: "Set Up Post-Purchase Email Sequence", steps: ["Create an order confirmation email with estimated delivery", "Send a shipping notification with tracking link", "Follow up 3 days after delivery with care/usage tips", "Send a review request 7 days after delivery", "Set up cross-sell recommendation 14 days post-purchase"] },
  }
  const churnDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
    online: { title: "Launch a Churn Win-Back Campaign", steps: ["Export churned/refunded customers from the last 6 months", "Segment by reason: price, usage, support, or alternative", "Send 3-email re-engagement: 'We miss you' then new value then special offer", "Track open rates and replies — respond personally to engaged leads", "Set up automated win-back trigger for future churned users"] },
    local: { title: "Reactivate Past Customers", steps: ["Pull customers who haven't booked in 6+ months", "Send a 'we miss you' email/text with a special return offer", "Include seasonal maintenance reminders relevant to their last service", "Follow up with a phone call to the top 20% by past spend", "Set up automated reactivation campaigns going forward"] },
    professional: { title: "Reactivate Dormant Client Relationships", steps: ["Identify clients who haven't engaged in 6+ months", "Send a personalized 'checking in' email with a relevant industry update", "Offer a complimentary review or assessment of their current situation", "Schedule catch-up calls with the top 10 by past revenue", "Set up quarterly automated check-in sequences"] },
    product: { title: "Launch a Win-Back Campaign for Lapsed Buyers", steps: ["Export customers who haven't purchased in 90+ days", "Send personalized 'new arrivals' email based on past purchases", "Include a time-limited discount or free shipping offer", "Set up automated reorder reminders for consumable products", "Track recovery rate and optimize offer amounts"] },
  }
  const automationDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
    online: { title: "Connect Your Tools with Zapier/Make", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect payment tool to email platform for auto-tagging new buyers", "Connect community platform to CRM for engagement tracking", "Set up notifications for new purchases and cancellations", "Start with 3-5 automations and expand weekly"] },
    local: { title: "Connect Booking, Invoicing & Review Tools", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect booking system to invoicing tool for automatic billing", "Set up automatic review requests after completed jobs", "Add new leads to CRM automatically from web forms and calls", "Set up text/email notifications for new bookings and cancellations"] },
    professional: { title: "Connect CRM, Calendar & Billing", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect CRM to calendar for automatic meeting scheduling", "Set up automatic invoice generation when projects hit milestones", "Connect intake forms to CRM for automatic lead creation", "Set up notifications for new leads, won deals, and overdue invoices"] },
    product: { title: "Connect Store, Inventory & Shipping", steps: ["Sign up for Zapier or Make (both have free tiers)", "Connect store to shipping tool for automatic label generation", "Set up low-inventory alerts to prevent stockouts", "Connect orders to accounting software for automatic bookkeeping", "Set up notifications for returns, refunds, and high-value orders"] },
  }
  const contentDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
    online: { title: "Build an AI Content Repurposing Pipeline", steps: ["Record one long-form piece per week (video, podcast, or article)", "Use Claude AI to extract 10+ social posts, 3 email hooks, and 1 thread", "Schedule content across platforms using Buffer or Hootsuite", "Repurpose customer success stories into case study templates", "Track engagement and double down on what resonates"] },
    local: { title: "Automate Your Local Marketing Engine", steps: ["Set up automated review request emails/texts after every completed job", "Create a Google Business Profile posting schedule (2x/week)", "Use AI to turn job photos into before/after social content", "Set up seasonal maintenance reminder campaigns to past customers", "Track which marketing channels drive the most booked jobs"] },
    professional: { title: "Build a Thought Leadership Content Engine", steps: ["Turn 1 client win per week into a case study using AI", "Use Claude to draft LinkedIn posts and email campaigns from case studies", "Set up an automated monthly newsletter with industry insights", "Create a content calendar that maps to your sales pipeline", "Repurpose webinar recordings into blog posts and social clips"] },
    product: { title: "Automate Product Content Creation", steps: ["Use AI to generate optimized product descriptions for all SKUs", "Create email campaigns from existing product photography and reviews", "Set up automated social posting with product highlights", "Build abandoned browse email sequences with personalized recommendations", "Track which content types drive the highest conversion rate"] },
  }
  const funnelDIY: Record<BusinessCategory, { title: string; steps: string[] }> = {
    online: { title: "Optimize Your Conversion Funnel", steps: ["Install heatmapping (Hotjar free tier) on your top 5 pages", "Identify where visitors drop off and test one change per week", "Add exit-intent popups with a lead magnet or discount", "Set up a 5-email nurture sequence for new leads who don't buy", "A/B test your pricing page layout and CTA copy"] },
    local: { title: "Speed Up Lead-to-Booking Response Time", steps: ["Set up instant auto-reply to all new lead inquiries (under 5 min)", "Create a text message follow-up sequence for phone leads", "Add online booking to your website and Google Business Profile", "Set up a missed-call text-back automation", "Track response time and booking rate weekly"] },
    professional: { title: "Streamline Your Proposal-to-Close Pipeline", steps: ["Create proposal templates for your top 3 service types", "Set up automated proposal follow-up: day 1, day 3, day 7, day 14", "Add a 'book a call to discuss' link in every proposal", "Create a case study library organized by industry/problem type", "Track proposal-to-close rate by service type and optimize"] },
    product: { title: "Recover Lost Sales with Cart & Browse Abandonment", steps: ["Set up a 3-email abandoned cart sequence (1hr, 24hr, 72hr)", "Add urgency triggers: limited stock, expiring discount, social proof", "Set up browse abandonment emails for high-intent visitors", "Add product recommendation widgets based on browsing history", "Track recovery rate by email and optimize timing/offers"] },
  }

  if (fd.onboardingAutomated !== 'Yes') {
    const ob = onboardingDIY[cat]
    plans.push({ ...ob, time: "2-3 hours", impact: "Reduce early churn by 30%+" })
  }
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') {
    const ch = churnDIY[cat]
    plans.push({ ...ch, time: "2-3 hours", impact: "Recover 10-20% of lost revenue" })
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    const au = automationDIY[cat]
    plans.push({ ...au, time: "1-2 hours", impact: "Eliminate 80% of manual workflows" })
  }
  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') {
    const ct = contentDIY[cat]
    plans.push({ ...ct, time: "3-4 hours", impact: "Save 10-15 hrs/week on content" })
  }
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    const fn = funnelDIY[cat]
    plans.push({ ...fn, time: "2-4 hours", impact: "2-3x conversion rate" })
  }

  return plans.slice(0, 4)
}

// ─── Quick Wins ───────────────────────────────────────────
function quickWins(fd: any, cat: BusinessCategory): string[] {
  const w: string[] = []
  if (fd.onboardingAutomated !== 'Yes') {
    const m: Record<BusinessCategory, string> = {
      online: "Set up automated onboarding emails — reduce early churn by 30%+",
      local: "Set up automated booking confirmations & reminders — reduce no-shows by 40%+",
      professional: "Set up automated client welcome sequences with intake forms — great first impression every time",
      product: "Set up order confirmation & shipping notification emails — reduce support tickets by 30%+",
    }
    w.push(m[cat])
  }
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') {
    const m: Record<BusinessCategory, string> = {
      online: "Launch a win-back email campaign to churned users — recover 10-20% of lost revenue",
      local: "Send a 'we miss you' campaign to past customers with a special offer — reactivate 10-20%",
      professional: "Reach out to past clients with a value-add update — reactivate 10-20% of dormant relationships",
      product: "Launch a win-back campaign to lapsed buyers — recover 10-20% of lost customers",
    }
    w.push(m[cat])
  }
  if (fd.twoWeeksOff === 'No') {
    const m: Record<BusinessCategory, string> = {
      online: "Delegate email triage and support to AI — save 5-10 hrs/week instantly",
      local: "Set up an after-hours auto-response with booking link — stop losing leads outside hours",
      professional: "Delegate routine client emails and scheduling to AI — save 5-10 hrs/week",
      product: "Set up automated customer service for common questions — save 5-10 hrs/week",
    }
    w.push(m[cat])
  }
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') {
    const m: Record<BusinessCategory, string> = {
      online: "Connect your top 3 tools with Zapier/Make — eliminate 80% of manual workflows",
      local: "Connect booking, invoicing, and review tools — eliminate double data entry",
      professional: "Connect CRM, calendar, and billing — eliminate manual data entry between systems",
      product: "Connect store, inventory, and shipping tools — eliminate manual order processing errors",
    }
    w.push(m[cat])
  }
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') {
    const m: Record<BusinessCategory, string> = {
      online: "Add an AI chatbot trained on your content — handle 80% of support automatically",
      local: "Add an AI chatbot for booking and FAQs — capture leads 24/7",
      professional: "Add a chatbot for intake screening and FAQs — qualify leads automatically",
      product: "Add an AI chatbot for order status, returns, and product questions — resolve 80% of tickets",
    }
    w.push(m[cat])
  }
  if (fd.conversionRate === 'under-1' || fd.conversionRate === '1-3') {
    const m: Record<BusinessCategory, string> = {
      online: "Add an automated email nurture sequence — convert 30-50% more prospects",
      local: "Respond to every new lead within 5 minutes with automated text/email — win 78% more jobs",
      professional: "Add an automated proposal follow-up sequence — deals with follow-up close at 2x",
      product: "Set up abandoned cart email recovery — recapture 10-15% of lost sales",
    }
    w.push(m[cat])
  }
  w.push("Create a real-time KPI dashboard — spot churn and engagement issues early")
  w.push("Segment your email list by engagement and send targeted re-activation campaigns")
  return w.slice(0, 7)
}

// ─── Recommended Stack ────────────────────────────────────
function getRecommendedStack(cat: BusinessCategory): { name: string; use: string }[] {
  const shared = [
    { name: "Zapier / Make", use: "Workflow Automation" },
    { name: "Cal.com", use: "Scheduling" },
    { name: "Claude AI", use: "AI Reasoning & Content" },
    { name: "Notion", use: "Operating System Docs" },
  ]
  const byIndustry: Record<BusinessCategory, { name: string; use: string }[]> = {
    online: [{ name: "ConvertKit", use: "Email Marketing" }, { name: "Stripe", use: "Payments" }],
    local: [{ name: "Jobber", use: "Service Management" }, { name: "Google Business", use: "Local SEO" }],
    professional: [{ name: "HubSpot", use: "Pipeline CRM" }, { name: "Loom", use: "Async Communication" }],
    product: [{ name: "Shopify", use: "Commerce" }, { name: "Klaviyo", use: "Email Flows" }],
  }
  return [...byIndustry[cat], ...shared].slice(0, 6)
}


// ═══════════════════════════════════════════════════════════
// MAIN PRINT COMPONENT
// ═══════════════════════════════════════════════════════════
export function AuditReportPrint({ formData, auditScore }: PrintReportProps) {
  const cat = getBusinessCategory(formData.businessType || '')
  const sub = calcSub(formData)
  const wins = quickWins(formData, cat)
  const phases = roadmap(formData, cat)
  const systems = systemArchitecture(formData, cat)
  const benchmarks = getIndustryBenchmarks(formData, cat)
  const execReport = executiveReport(formData, auditScore, cat)
  const growthLevel = getGrowthLevel(formData)
  const playbook = generateIndustryPlaybook(formData)
  const diyPlans = getDIYPlans(formData, cat)
  const industryData = industries.find(i => i.slug === formData.businessType)
  const stack = getRecommendedStack(cat)

  const churnPct = parseChurnPct(formData.churnRate)
  const price = parseProductPrice(formData.productPricePoint, cat)
  const listSize = parseListSize(formData.listSize, cat)
  const churnLossAnnual = Math.round(listSize * churnPct * price)
  const supportHrs = formData.supportHoursPerWeek === '10+' ? 12 : formData.supportHoursPerWeek === '5-10' ? 7 : 2
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  useEffect(() => {
    const timer = setTimeout(() => window.print(), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          @page { margin: 0.2in 0.2in; }
        }
        .report-body { 
          font-family: var(--font-inter), system-ui, sans-serif; 
          background-image: linear-gradient(#f0f0f0 0.5px, transparent 0.5px), linear-gradient(90deg, #f0f0f0 0.5px, transparent 0.5px);
          background-size: 20px 20px;
        }
        .mono { font-family: var(--font-dm-mono), monospace; }
        .section-header { border-left: 4px solid #000; padding-left: 16px; margin-bottom: 24px; }
        .nb-border { border: 0.5px solid #000; }
        .nb-card { border: 0.5px solid #000; background: #fff; border-radius: 0; box-shadow: 4px 4px 0 #000; }
        .nb-button { border: 0.5px solid #000; background: #fff; color: #000; transition: all 0.1s; }
        .nb-button:hover { background: #000; color: #fff; transform: translate(-1px, -1px); box-shadow: 2px 2px 0 #D90019; }
        
        .metric-bar { height: 4px; background: #eee; border-radius: 0; overflow: hidden; position: relative; }
        .metric-fill { height: 100%; border-radius: 0; position: relative; }
        .metric-fill::after { content: ''; position: absolute; top: 0; right: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.5); }
        
        .finding-critical { border: 0.5px solid #D90019; background: #fff; box-shadow: 4px 4px 0 #D90019; }
        .finding-warning { border: 0.5px solid #f59e0b; background: #fff; box-shadow: 4px 4px 0 #f59e0b; }
        .finding-opportunity { border: 0.5px solid #000; background: #fff; box-shadow: 4px 4px 0 #000; }
        
        .benchmark-row { border-bottom: 0.5px solid #eee; }
        .benchmark-good { color: #059669; font-weight: 900; }
        .benchmark-warning { color: #d97706; font-weight: 900; }
        .benchmark-critical { color: #D90019; font-weight: 900; }
        
        .priority-tag { font-size: 8px; font-weight: 900; padding: 2px 6px; border: 0.5px solid currentColor; text-transform: uppercase; letter-spacing: 0.1em; }
        .priority-critical { color: #D90019; }
        .priority-high { color: #ea580c; }
        .priority-medium { color: #6b7280; }
        
        .diy-step { padding-left: 32px; position: relative; margin-bottom: 12px; border-left: 0.5px solid #eee; padding-top: 4px; padding-bottom: 4px; }
        .diy-step::before { content: ''; position: absolute; left: -2px; top: 10px; width: 4px; height: 4px; background: #000; }
        
        .consultant-tag { font-size: 8px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; background: #000; color: #fff; padding: 3px 8px; }
        .risk-gauge { height: 8px; background: #f3f4f6; border-radius: 0; overflow: hidden; position: relative; border: 0.5px solid #eee; }
        .risk-marker { position: absolute; top: 0; height: 100%; width: 2px; background: #000; z-index: 10; }
        .risk-gradient { height: 100%; background: linear-gradient(90deg, #eee 0%, #000 100%); }
        
        .scanline { position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 9999; background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.02) 50%); background-size: 100% 4px; }
      `}</style>
        <div className="scanline no-print" />

      <div className="report-body min-h-screen bg-white text-gray-900 p-6 max-w-4xl mx-auto" style={{ fontSize: '13px', lineHeight: '1.5' }}>

        {/* Print button */}
        <div className="no-print mb-6 flex gap-3 sticky top-0 bg-white py-3 z-50 border-b">
          <button onClick={() => window.print()}
            className="bg-[#D90019] text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 text-sm">
            Print / Save as PDF
          </button>
          <button onClick={() => window.close()}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 text-sm">
            Close
          </button>
        </div>

        {/* ═══ COVER / HEADER ═══ */}
        <div className="border-b-2 border-[#D90019] pb-6 mb-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-black text-[#D90019] tracking-tight mb-0 uppercase">ElianaTech</h1>
              <p className="text-gray-400 text-[10px] font-mono uppercase tracking-[0.3em] mt-1">Confidential Business Intelligence Report</p>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">Report Date</p>
              <p className="text-gray-600 text-sm font-medium">{today}</p>
            </div>
          </div>
          <div className="mt-8 flex items-end justify-between gap-8">
            <div>
              <p className="text-gray-400 text-[9px] font-mono uppercase tracking-[0.4em] mb-2">Prepared For</p>
              <h2 className="text-3xl font-black text-black uppercase tracking-tighter leading-none">{formData.companyName || formData.fullName || 'Your Business'}</h2>
              <p className="text-gray-500 text-[10px] mono mt-2 uppercase tracking-widest">{playbook.industryName} // {growthLevel.label} // {formData.websiteUrl || 'INTERNAL CORE'}</p>
            </div>
            <div className="text-center px-10 py-6 nb-card">
              <p className="text-gray-400 text-[9px] font-mono uppercase tracking-[0.4em] mb-2">Efficiency Index</p>
              <p className="text-6xl font-black text-[#000] leading-none tracking-tighter">{auditScore}</p>
              <p className="text-gray-400 text-[10px] font-mono mt-1">/ 100.00</p>
            </div>
          </div>
        </div>

        {/* ═══ EXECUTIVE SUMMARY ═══ */}
        <div className="mb-10">
          <div className="section-header flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-black uppercase tracking-tight">Executive Intelligence Summary</h3>
              <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">Actionable Intelligence Layer for Stakeholders</p>
            </div>
            <div className="consultant-tag">Level: OS Audit - how ai fits into your business</div>
          </div>
          
          <div className="grid grid-cols-12 gap-8 mt-6">
            <div className="col-span-8 space-y-4">
              {execReport.findings.map((f, i) => (
                <div key={i} className={`p-5 rounded-sm ${f.type === 'critical' ? 'finding-critical' : f.type === 'warning' ? 'finding-warning' : 'finding-opportunity'}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <span className="font-black text-[12px] text-black uppercase tracking-widest">{f.label}</span>
                    <span className={`text-[11px] font-mono font-black shrink-0 ${f.type === 'critical' ? 'text-[#D90019]' : f.type === 'warning' ? 'text-orange-600' : 'text-gray-500'}`}>{f.value}</span>
                  </div>
                  <p className="text-gray-600 text-xs leading-relaxed font-medium">{f.detail}</p>
                </div>
              ))}
            </div>
            
            <div className="col-span-4 flex flex-col gap-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-sm">
                <p className="text-[9px] font-mono font-black uppercase text-gray-400 mb-4 tracking-[0.2em]">Market Displacement Risk</p>
                <div className="risk-gauge mb-2">
                  <div className="risk-gradient" />
                  <div className="risk-marker" style={{ left: `${execReport.displacementRisk}%` }} />
                </div>
                <div className="flex justify-between text-[8px] font-black uppercase text-gray-400">
                  <span>Safe</span>
                  <span className="text-[#D90019]">Existential Risk</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-4 leading-tight">
                  <span className="font-bold text-black">Risk Analysis:</span> Based on your industry velocity and current {100 - auditScore}% operational manuality, your business faces a critical displacement risk from AI-native competitors as revealed in your OS Audit.
                </p>
              </div>
              
              <div className="p-5 bg-black text-white rounded-sm">
                <p className="text-[9px] font-mono font-black uppercase text-[#D90019] mb-4 tracking-[0.2em]">Efficiency Deficit</p>
                <p className="text-4xl font-black tracking-tight mb-1">{100 - auditScore}<span className="text-sm font-normal text-gray-500">%</span></p>
                <p className="text-[10px] text-gray-400 leading-snug">The gap between your current throughput and the AI-native standard for {playbook.industryName}.</p>
              </div>
            </div>
          </div>

          {execReport.totalAtStake > 5000 && (
            <div className="mt-8 p-6 bg-[#D90019] text-white flex items-center justify-between rounded-sm shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-white/70 text-[10px] font-mono uppercase tracking-[0.3em] font-black mb-1">Annual Capital Opportunity Loss</p>
                <h4 className="text-4xl font-black tracking-tighter">-{fmt$(execReport.totalAtStake)}</h4>
                <p className="text-white/60 text-[9px] mt-1 italic">Total measurable revenue leakage + time-value theft (12-mo horizon)</p>
              </div>
              <div className="text-right relative z-10">
                <p className="text-[10px] font-mono uppercase font-black mb-1">Status</p>
                <div className="bg-white text-[#D90019] px-4 py-2 font-black text-xs uppercase tracking-widest rounded-sm border border-white">Immediate Intervention Required</div>
              </div>
              {/* Abs decoration */}
              <div className="absolute -right-10 -bottom-10 opacity-20 transform -rotate-12">
                <div className="w-40 h-40 border-[20px] border-white rounded-full" />
              </div>
            </div>
          )}
        </div>

        {/* ═══ GROWTH STAGE ═══ */}
        <div className="mb-10 p-6 nb-card border-l-[12px] border-l-[#000]">
          <div className="flex items-center gap-4 mb-3">
            <span className="consultant-tag">Growth Stage:</span>
            <span className="text-black font-black text-sm uppercase tracking-widest">{growthLevel.label}</span>
          </div>
          <p className="text-gray-600 text-[11px] leading-relaxed mono uppercase tracking-tight">{growthLevel.insight}</p>
        </div>

        {/* ═══ SCORE BREAKDOWN ═══ */}
        <div className="mb-8">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Efficiency Score Breakdown</h3>
          </div>
          <div className="space-y-4">
            {(Object.entries(sub) as [string, number][]).map(([label, score]) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs uppercase tracking-tight text-black">{label}</span>
                  <span className={`font-bold text-sm font-mono ${score >= 70 ? 'text-[#D90019]' : score >= 40 ? 'text-orange-500' : 'text-red-800'}`}>{score}/100</span>
                </div>
                <div className="metric-bar">
                  <div className="metric-fill" style={{
                    width: `${score}%`,
                    backgroundColor: score >= 70 ? '#D90019' : score >= 40 ? '#f59e0b' : '#991b1b'
                  }} />
                </div>
                <p className="text-gray-500 text-[10px] mt-1 leading-snug">{categoryInsight(label, formData)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ INDUSTRY BENCHMARKS ═══ */}
        <div className="page-break mb-8">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Industry Benchmark Comparison</h3>
            <p className="text-gray-500 text-[10px] font-mono uppercase">{playbook.industryName} sector targets</p>
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 text-gray-500 font-medium uppercase tracking-wider text-[10px]">Metric</th>
                <th className="text-center py-2 text-gray-500 font-medium uppercase tracking-wider text-[10px]">Your Business</th>
                <th className="text-center py-2 text-gray-500 font-medium uppercase tracking-wider text-[10px]">Industry Target</th>
                <th className="text-center py-2 text-gray-500 font-medium uppercase tracking-wider text-[10px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((b, i) => (
                <tr key={i} className="benchmark-row">
                  <td className="py-3 font-black text-[10px] text-black uppercase tracking-widest">{b.metric}</td>
                  <td className={`py-3 text-center mono font-black ${b.status === 'good' ? 'benchmark-good' : b.status === 'warning' ? 'benchmark-warning' : 'benchmark-critical'}`}>{b.yours}</td>
                  <td className="py-3 text-center text-gray-500 font-mono italic">{b.benchmark}</td>
                  <td className="py-3 text-center">
                    {b.gap ? <span className={`${b.status === 'warning' ? 'text-orange-600' : 'text-[#D90019]'} font-black mono text-[9px]`}>[{b.gap}]</span> : <span className="text-green-600 font-black mono text-[9px]">[ALIGNED]</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ═══ INDUSTRY PLAYBOOK ═══ */}
        <div className="mb-8">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">{playbook.industryName} AI Playbook</h3>
            <p className="text-gray-500 text-[10px] font-mono uppercase">Industry-specific automation solutions</p>
          </div>
          <div className="space-y-3">
            {playbook.aiSolutions.map((s, i) => (
              <div key={i} className="flex items-start gap-3 p-3 border rounded-sm bg-gray-50">
                <span className="text-[#D90019] font-bold text-xs shrink-0 mt-0.5">0{i + 1}</span>
                <div className="flex-1">
                  <p className="font-bold text-xs text-black uppercase tracking-tight mb-0.5">{s.challenge}</p>
                  <p className="text-gray-600 text-[11px] leading-relaxed mb-1">{s.solution}</p>
                  <span className="text-[#D90019] text-[9px] font-mono font-bold uppercase tracking-wider bg-[#D90019]/5 px-2 py-0.5 inline-block">ROI: {s.roi}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Before / After transformation */}
          <div className="mt-4 grid grid-cols-2 gap-4 p-4 bg-gray-50 border rounded-sm">
            <div>
              <p className="text-gray-400 text-[9px] font-mono uppercase tracking-widest mb-1">Traditional Operations</p>
              <p className="text-gray-600 text-xs italic">&ldquo;{industryData?.operatorProblem || playbook.caseStudy.before}&rdquo;</p>
            </div>
            <div className="border-l border-gray-200 pl-4">
              <p className="text-[#D90019] text-[9px] font-mono uppercase tracking-widest mb-1 font-bold">AI-Native Future</p>
              <p className="text-black text-xs font-bold">&ldquo;{industryData?.result || playbook.caseStudy.after}&rdquo;</p>
            </div>
          </div>
        </div>

        {/* ═══ FULL SYSTEM ARCHITECTURE ═══ */}
        <div className="page-break mb-10">
          <div className="section-header">
            <h3 className="text-xl font-black text-black uppercase tracking-tight">Structural Systems Topology</h3>
            <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">Engineering Blueprint for Operational Autonomy</p>
          </div>

          <div className="mt-8 relative">
            {/* Visual Topology Header */}
            <div className="grid grid-cols-3 gap-1 mb-8">
              <div className="bg-black text-white p-4 text-center">
                <p className="text-[9px] font-mono font-bold uppercase tracking-widest opacity-60">Tier 1</p>
                <p className="text-xs font-black uppercase">Central Nervous System</p>
              </div>
              <div className="bg-gray-100 text-black p-4 text-center">
                <p className="text-[9px] font-mono font-bold uppercase tracking-widest opacity-60">Tier 2</p>
                <p className="text-xs font-black uppercase">Growth Layer</p>
              </div>
              <div className="bg-gray-50 text-black p-4 text-center border">
                <p className="text-[9px] font-mono font-bold uppercase tracking-widest opacity-60">Tier 3</p>
                <p className="text-xs font-black uppercase">Intelligence Layer</p>
              </div>
            </div>

            {/* Systems Grid */}
            <div className="space-y-8">
              {([1, 2, 3] as const).map((phase) => {
                const phaseSystems = systems.filter(s => s.phase === phase)
                return (
                  <div key={phase} className="relative">
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gray-200 -ml-4" />
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-black border-2 ${phase === 1 ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-200'}`}>0{phase}</div>
                      <h4 className="text-sm font-black uppercase tracking-tight text-gray-400">
                        {phase === 1 ? 'Phase 1: Foundation & Infrastructure' : phase === 2 ? 'Phase 2: Operational Optimization' : 'Phase 3: Strategic Scaling & Intelligence'}
                      </h4>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 ml-8">
                      {phaseSystems.map((s, i) => (
                        <div key={i} className="nb-card p-4 hover:border-[#D90019] transition-all group">
                          <div className="flex items-center justify-between mb-3">
                            <span className={`priority-tag priority-${s.priority}`}>{s.priority}</span>
                            <span className="text-[8px] font-mono font-bold text-gray-400">{s.timeline}</span>
                          </div>
                          <p className="font-black text-[11px] text-black uppercase tracking-widest mb-1 group-hover:text-[#D90019] transition-colors">{s.name}</p>
                          <p className="text-[9px] text-gray-400 leading-snug mb-4 h-8 overflow-hidden line-clamp-2">{s.problem}</p>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                            <span className="text-[7px] font-mono uppercase text-gray-300">Net Impact:</span>
                            <span className="text-[10px] font-black text-black font-mono">{s.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ═══ DAY 1 ACTION ITEMS ═══ */}

        {/* ═══ 90-DAY ROADMAP ═══ */}
        <div className="mb-8">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Your 90-Day Automation Roadmap</h3>
            <p className="text-gray-500 text-[10px] font-mono uppercase">Custom implementation timeline based on your audit data</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {phases.map((p, i) => (
              <div key={i} className="phase-card">
                <p className="text-[#D90019] text-[9px] font-mono font-bold uppercase tracking-widest mb-1">{p.label}</p>
                <h4 className="font-bold text-sm text-black mb-3 uppercase tracking-tight">{p.title}</h4>
                <ul className="space-y-2">
                  {p.items.map((item, j) => (
                    <li key={j} className="text-gray-600 text-[11px] flex items-start gap-2 leading-snug">
                      <span className="text-[#D90019] mt-0.5 shrink-0 text-[10px]">&#10003;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ QUICK WINS ═══ */}
        <div className="mb-8">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Quick Wins — This Week</h3>
            <p className="text-gray-500 text-[10px] font-mono uppercase">Highest-impact actions you can take immediately</p>
          </div>
          <ol className="space-y-2">
            {wins.map((w, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-gray-50 border rounded-sm">
                <span className="text-[#D90019] font-black text-xs mt-0.5 shrink-0 w-5 h-5 flex items-center justify-center bg-[#D90019]/10 rounded-full">{i + 1}</span>
                <span className="text-gray-700 text-xs leading-relaxed">{w}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* ═══ DIY ACTION PLANS ═══ */}
        {diyPlans.length > 0 && (
          <div className="page-break mb-8">
            <div className="section-header">
              <h3 className="text-lg font-black text-black uppercase tracking-tight">Growth Sprint Action Plans</h3>
              <p className="text-gray-500 text-[10px] font-mono uppercase">Step-by-step self-implementation guides</p>
            </div>
            <div className="space-y-5">
              {diyPlans.map((plan, i) => (
                <div key={i} className="border rounded-sm overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-b">
                    <h4 className="font-bold text-sm text-black uppercase tracking-tight">{plan.title}</h4>
                    <div className="flex gap-3 text-[9px] font-mono">
                      <span className="text-[#D90019] font-bold bg-[#D90019]/5 px-2 py-0.5">TIME: {plan.time}</span>
                      <span className="text-gray-500 font-bold bg-gray-100 px-2 py-0.5">IMPACT: {plan.impact}</span>
                    </div>
                  </div>
                  <div className="p-4" style={{ counterReset: 'step' }}>
                    {plan.steps.map((step, j) => (
                      <div key={j} className="diy-step text-gray-600 text-xs leading-relaxed">{step}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ═══ COST OF INACTION ═══ */}
        <div className="mb-10 p-8 nb-card bg-black text-white">
          <h3 className="font-black text-lg uppercase tracking-[0.4em] text-white mb-8 flex items-center gap-4">
            <span className="w-12 h-1 bg-[#D90019]" /> Capital Opportunity Loss
          </h3>
          <div className="grid grid-cols-3 gap-8">
            <div className="border-l border-white/10 pl-6">
              <p className="text-[#D90019] font-black text-4xl tracking-tighter mono">{fmt$(churnLossAnnual)}</p>
              <p className="text-gray-500 text-[9px] font-mono uppercase tracking-widest mt-3 leading-relaxed">Annual revenue leakage from systemic churn</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="text-white font-black text-4xl tracking-tighter mono">
                {formData.hoursPerWeek === '60+' ? '1,040+' : formData.hoursPerWeek === '40-60' ? '520+' : '260+'}H
              </p>
              <p className="text-gray-500 text-[9px] font-mono uppercase tracking-widest mt-3 leading-relaxed">Annual manual labor locked in legacy ops</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="text-white font-black text-4xl tracking-tighter mono">
                {formData.twoWeeksOff === 'No' ? '0.00' : formData.twoWeeksOff === 'Maybe' ? '5.00' : '14.00'}+
              </p>
              <p className="text-gray-500 text-[9px] font-mono uppercase tracking-widest mt-3 leading-relaxed">Owner freedom threshold (days autonomous)</p>
            </div>
          </div>
          <p className="text-gray-600 mt-8 text-[9px] font-mono border-t border-white/5 pt-6 italic uppercase tracking-widest">
            Every week without systems is a deliberate decision to reject scale. Industrial-grade efficiency requires autonomous infrastructure.
          </p>
        </div>

        {/* ═══ RECOMMENDED STACK ═══ */}
        <div className="mb-10">
          <div className="section-header">
            <h3 className="text-lg font-black text-black uppercase tracking-tight">Intelligence Stack Configuration</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stack.map((tool, i) => (
              <div key={i} className="nb-card p-4">
                <p className="font-black text-[10px] text-black uppercase tracking-widest mb-1">{tool.name}</p>
                <p className="text-gray-500 text-[9px] font-mono uppercase">{tool.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ ROI PROJECTION & SCALABILITY ═══ */}
        <div className="mb-10 page-break">
          <div className="section-header">
            <h3 className="text-xl font-black text-black uppercase tracking-tight">Financial Modeling & Scalability</h3>
            <p className="text-gray-400 text-[10px] font-mono uppercase tracking-widest">Projected Economic Impact of Systemic Transformation</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-6">
            <div className="p-6 border rounded-sm bg-gray-50">
              <p className="text-[9px] font-mono font-black uppercase text-gray-400 mb-6 tracking-[0.2em]">Scalability Threshold Analysis</p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase">Current Cap (Manual Ops)</span>
                    <span className="text-[10px] font-mono font-bold">$1.2M Rev</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black" style={{ width: '85%' }} />
                  </div>
                  <p className="text-[8px] text-gray-400 mt-1 italic">You are currently at 85% of your operational ceiling. New growth will lead to delivery failure.</p>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase text-[#D90019]">Future Cap (AI-Native)</span>
                    <span className="text-[10px] font-mono font-bold text-[#D90019]">$5M+ Rev</span>
                  </div>
                  <div className="h-1.5 bg-[#D90019]/20 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D90019]" style={{ width: '25%' }} />
                  </div>
                  <p className="text-[8px] text-[#D90019] mt-1 italic">Post-Transformation, the business can scale to 4x current volume without meaningful headcount increases.</p>
                </div>
              </div>
            </div>

            <div className="nb-card bg-black text-white p-8 flex flex-col justify-between">
              <div>
                <p className="text-[#D90019] text-[9px] font-mono font-black uppercase tracking-[0.4em] mb-6">90-Day Efficiency Dividend</p>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono uppercase text-gray-500">Churn Recovered</span>
                    <span className="text-2xl font-black">{fmt$(churnLossAnnual * 0.3)}<span className="text-[10px] font-mono text-gray-600 ml-2">P.A.</span></span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/5 pb-3">
                    <span className="text-[10px] font-mono uppercase text-gray-500">Manual Load Freed</span>
                    <span className="text-2xl font-black">{Math.round(supportHrs * 0.8 * 4)}H<span className="text-[10px] font-mono text-gray-600 ml-2">P.M.</span></span>
                  </div>
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-mono uppercase text-gray-500">Yield Multiplier</span>
                    <span className="text-3xl font-black text-[#D90019]">2.40X</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 pt-6 border-t border-[#D90019]/40">
                <p className="text-[9px] font-mono uppercase text-gray-600 mb-1 tracking-widest">Aggregate Value Recovery</p>
                <p className="text-5xl font-black text-[#FAFAF8] tracking-tighter">{fmt$(churnLossAnnual * 0.3 + supportHrs * 0.8 * 4 * 75 * 12)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ NEXT STEPS / CTA ═══ */}
        <div className="border-t-2 border-[#000] pt-12 mt-12 bg-white -mx-6 px-6 pb-12 relative overflow-hidden">
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-4 leading-none">Operational Transformation Protocols</h3>
            <p className="text-gray-400 text-[10px] font-mono uppercase tracking-[0.4em] max-w-sm mx-auto">Select deployment methodology for current cycle</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mb-12 relative z-10">
            {/* Path 1: DIY + FOTF */}
            <div className="nb-card p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <span className="consultant-tag">Protocol 01</span>
                <p className="text-gray-400 text-[9px] font-mono uppercase tracking-[0.3em] font-black">Self-Implementation</p>
              </div>
              <h4 className="text-xl font-black text-black uppercase tracking-tighter mb-6 leading-none">Join FOTF Network</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed mb-8 mono uppercase tracking-tight">
                BLUEPRINT REPOSITORY // ACCESS GRANTED. USE OUR PRIVATE SYSTEM LIBRARY TO DEPLOY YOUR OWN INFRASTRUCTURE.
              </p>
              <ul className="text-gray-600 text-[10px] space-y-4 mb-10 mono uppercase tracking-widest font-black">
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[+]</span> BLUEPRINTS</li>
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[+]</span> SYSTEM LIBRARY</li>
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[+]</span> PEER NETWORK</li>
              </ul>
              <div className="nb-button block w-full py-5 text-center font-mono text-[10px] font-black uppercase tracking-[0.3em] opacity-30 cursor-default">
                Coming Soon
              </div>
            </div>

            {/* Path 2: Done-For-You */}
            <div className="nb-card p-8 bg-black text-white relative transform translate-x-1 translate-y-1">
              <div className="absolute -top-4 right-8 consultant-tag bg-[#D90019]">Recommended</div>
              <div className="flex items-center gap-4 mb-6">
                <span className="consultant-tag bg-white text-black">Protocol 02</span>
                <p className="text-[#D90019] text-[9px] font-mono uppercase tracking-[0.3em] font-black">Managed Engineering</p>
              </div>
              <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-6 leading-none">Deploy Intelligence Layer</h4>
              <p className="text-gray-400 text-[11px] leading-relaxed mb-8 mono uppercase tracking-tight">
                FULL-SCALE INSTALLATION // ELIANATECH ENGINEERS WILL BUILD AND OPTIMIZE YOUR CORE SYSTEMS TOPOLOGY.
              </p>
              <ul className="text-white text-[10px] space-y-4 mb-10 mono uppercase tracking-widest font-black">
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[✔]</span> CUSTOM ENGINEERING</li>
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[✔]</span> EDGE OPTIMIZATION</li>
                <li className="flex items-start gap-3"><span className="text-[#D90019]">[✔]</span> 24/7 MAINTENANCE</li>
              </ul>
              <Link href="/audit" className="block w-full py-5 bg-[#D90019] text-white text-center font-mono text-[10px] font-black uppercase tracking-[0.3em] hover:bg-red-700 transition-colors">
                Request Engineering
              </Link>
            </div>
          </div>

          {/* The Brief Signup */}
          <div className="nb-card bg-black text-white p-10 flex items-center justify-between gap-12 mb-12 border-none">
            <div className="flex-1">
              <p className="text-[#D90019] text-[10px] font-mono font-black uppercase tracking-[0.5em] mb-4">Transmission: The Daily OS Brief</p>
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-3 leading-none">Operational Intelligence Feed</h4>
              <p className="text-gray-500 text-[11px] leading-relaxed mono uppercase tracking-tight">
                JOIN 50,000+ FOUNDERS // DAILY CORE UPDATES ON AI-NATIVE ARCHITECTURE AND SYSTEMS ENGINEERING.
              </p>
            </div>
            <a href="http://c12hsh4n5bfc02e5c9p4wyax.187.124.238.237.sslip.io" target="_blank" rel="noopener noreferrer" 
               className="nb-button shrink-0 py-5 px-12 bg-transparent text-white border-white/20 text-center font-mono text-[10px] font-black uppercase tracking-[0.3em] hover:border-[#D90019]">
              Secure Access
            </a>
          </div>

          <div className="text-center pt-12 border-t border-gray-100">
            <p className="text-gray-400 text-[9px] uppercase font-black tracking-[0.4em] mb-3">Technical Support & Inquiries</p>
            <p className="text-black font-mono text-sm font-black">SUPPORT@ELIANATECH.COM</p>
            <p className="text-gray-300 text-[8px] mt-10 font-mono tracking-widest">&copy; {new Date().getFullYear()} ELIANATECH // OWN YOUR INTELLIGENCE // CONFIDENTIAL</p>
          </div>
        </div>
      </div>
    </>
  )
}
