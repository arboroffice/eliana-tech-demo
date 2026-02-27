/**
 * Eliana Tech — 6-Step Pricing Engine
 * Takes audit form data + scores → outputs tier, price, and reasoning
 *
 * Hard floor: $7,500. Always. No exceptions.
 */

import { getBusinessCategory, type BusinessCategory } from './audit-industry-config'

export interface PricingResult {
  qualified: boolean
  disqualifyReason?: string
  tier: 'multi-system' | 'full-build' | 'ai-native'
  tierLabel: string
  basePrice: number
  finalPrice: number
  priceRange: string
  complexityAddOns: { reason: string; amount: number }[]
  overrides: string[]
  roiCeiling: number
  discounts: { reason: string; amount: number }[]
  intentLevel: 'high' | 'medium' | 'low'
  reasoning: string[]
  timeline: string
}

export interface AuditScores {
  revenue: number
  automation: number
  acquisition: number
  retention: number
  time: number
  overall: number
}

export function calculateSubScores(fd: any): AuditScores {
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

  const overall = Math.round((revenue + automation + acquisition + retention + time) / 5)

  return { revenue, automation, acquisition, retention, time, overall }
}

function getPainLevel(fd: any): number {
  return Array.isArray(fd.painLevel)
    ? parseInt(String(fd.painLevel[0])) || 0
    : parseInt(String(fd.painLevel)) || 0
}

function getExcitement(fd: any): number {
  const val = fd.excitementLevel
  if (val === '10') return 10
  if (val === '8-9') return 9
  if (val === '5-7') return 6
  return 3
}

function estimateCurrentRevenue(fd: any): number {
  const map: Record<string, number> = {
    'pre-revenue': 0,
    'under-100k': 75000,
    '100k-250k': 175000,
    '250k-500k': 375000,
    '500k-1m': 750000,
    '1m-3m': 2000000,
    '3m+': 5000000,
  }
  return map[fd.currentRevenue] || 100000
}

export function runPricingEngine(fd: any): PricingResult {
  const scores = calculateSubScores(fd)
  const pain = getPainLevel(fd)
  const excitement = getExcitement(fd)
  const reasoning: string[] = []

  // Intent level
  let intentLevel: 'high' | 'medium' | 'low' = 'low'
  if (excitement >= 8 || pain >= 7) intentLevel = 'high'
  else if (excitement >= 5) intentLevel = 'medium'

  // ═══ STEP 1: Check the Floor ═══
  if (fd.currentRevenue === 'pre-revenue' || fd.currentRevenue === 'under-100k') {
    // Exception: if pain is 7+ and budget is not starter, they might still qualify
    if (pain < 7 || fd.growthBudget === 'starter') {
      return {
        qualified: false,
        disqualifyReason: 'Revenue is pre-revenue or under $100K. Too early for our services — we provide free advice and add to nurture list.',
        tier: 'multi-system',
        tierLabel: 'Multi-System Build',
        basePrice: 7500,
        finalPrice: 7500,
        priceRange: '$7,500 – $15,000',
        complexityAddOns: [],
        overrides: [],
        roiCeiling: 0,
        discounts: [],
        intentLevel,
        reasoning: ['Revenue under $100K — disqualified.'],
        timeline: '2-4 weeks',
      }
    }
    reasoning.push('Revenue under $100K but pain is 7+ — reframing value.')
  }

  if (fd.growthBudget === 'starter' && pain < 5 && excitement < 5) {
    return {
      qualified: false,
      disqualifyReason: 'Budget under $5K, low pain, and low excitement. Not ready — nurture with content.',
      tier: 'multi-system',
      tierLabel: 'Multi-System Build',
      basePrice: 7500,
      finalPrice: 7500,
      priceRange: '$7,500 – $15,000',
      complexityAddOns: [],
      overrides: [],
      roiCeiling: 0,
      discounts: [],
      intentLevel,
      reasoning: ['Budget under $5K + low pain + low excitement — disqualified.'],
      timeline: '2-4 weeks',
    }
  }

  // ═══ STEP 2: Pick Starting Tier ═══
  let tier: 'multi-system' | 'full-build' | 'ai-native'
  let basePrice: number

  if (scores.overall >= 60) {
    tier = 'multi-system'
    basePrice = 7500
    reasoning.push(`Overall score ${scores.overall} (60+) → starting at Multi-System Build ($7,500).`)
  } else if (scores.overall >= 35) {
    tier = 'full-build'
    basePrice = 15000
    reasoning.push(`Overall score ${scores.overall} (35-59) → starting at Full Build ($15,000).`)
  } else {
    tier = 'full-build'
    basePrice = 20000
    reasoning.push(`Overall score ${scores.overall} (under 35) → starting at Full Build+ ($20,000).`)
  }

  // ═══ STEP 3: Override Rules ═══
  const overrides: string[] = []

  if (fd.hoursPerWeek === '60+' && fd.twoWeeksOff === 'No' && fd.highValueWork === 'under-20') {
    if (tier === 'multi-system') {
      tier = 'full-build'
      basePrice = Math.max(basePrice, 15000)
      overrides.push('Owner trapped (60+ hrs, can\'t leave, under 20% high-value) → bumped to Full Build.')
    }
  }

  const revenueHigh = ['500k-1m', '1m-3m', '3m+'].includes(fd.currentRevenue)
  if (fd.currentRevenue === '1m-3m' || fd.currentRevenue === '3m+') {
    if (tier === 'multi-system') {
      tier = 'full-build'
      basePrice = Math.max(basePrice, 15000)
      overrides.push('Revenue $1M+ → bumped to Full Build minimum.')
    }
  }

  if (pain >= 8 && fd.startDate === 'now' && excitement >= 8) {
    if (tier === 'multi-system') {
      tier = 'full-build'
      basePrice = Math.max(basePrice, 15000)
      overrides.push('High pain (8+) + "Right now" + high excitement → bumped to Full Build.')
    }
  }

  if (fd.growthBudget === 'enterprise' && revenueHigh) {
    tier = 'ai-native'
    basePrice = Math.max(basePrice, 40000)
    overrides.push('Budget $40K+ + revenue $500K+ → AI-Native Ops.')
  }

  // ═══ STEP 4: Complexity Add-Ons ═══
  const addOns: { reason: string; amount: number }[] = []

  const allUnder50 = scores.revenue < 50 && scores.automation < 50 && scores.acquisition < 50 && scores.retention < 50 && scores.time < 50
  if (allUnder50 && tier !== 'multi-system') {
    const bump = Math.round(basePrice * 0.15)
    addOns.push({ reason: 'All 5 scores under 50 (problems everywhere)', amount: bump })
  }

  if (fd.teamSize === '10+') {
    const bump = Math.round(basePrice * 0.10)
    addOns.push({ reason: 'Team size 10+ (more training/change management)', amount: bump })
  }

  const toolCount = fd.tools?.length || 0
  if (toolCount > 6) {
    addOns.push({ reason: `${toolCount} tools to integrate (complex integration)`, amount: 3000 })
  }

  // ═══ STEP 5: ROI Ceiling ═══
  const currentRevenue = estimateCurrentRevenue(fd)
  const conservativeGain = currentRevenue * 0.20 // 20% conservative improvement
  const roiCeiling = Math.round(conservativeGain * 0.30)

  let finalPrice = basePrice + addOns.reduce((sum, a) => sum + a.amount, 0)

  if (roiCeiling > 0 && finalPrice > roiCeiling) {
    reasoning.push(`Price $${finalPrice.toLocaleString()} exceeds ROI ceiling $${roiCeiling.toLocaleString()} (30% of $${conservativeGain.toLocaleString()} gain). Capping.`)
    finalPrice = roiCeiling
  }

  // ═══ STEP 6: Discounts ═══
  const discounts: { reason: string; amount: number }[] = []
  // Discounts are applied at proposal time, not auto-calculated
  // We just note what's available

  // Hard floor
  if (finalPrice < 7500) {
    reasoning.push(`Price below $7,500 floor. Setting to $7,500.`)
    finalPrice = 7500
  }

  // Tier labels and ranges
  const tierConfig = {
    'multi-system': { label: 'Multi-System Build', range: '$7,500 – $15,000', timeline: '2-4 weeks' },
    'full-build': { label: 'Full Build', range: '$15,000 – $40,000', timeline: '4-8 weeks' },
    'ai-native': { label: 'AI-Native Operations', range: '$40,000+', timeline: '8-16 weeks' },
  }

  const config = tierConfig[tier]

  return {
    qualified: true,
    tier,
    tierLabel: config.label,
    basePrice,
    finalPrice,
    priceRange: config.range,
    complexityAddOns: addOns,
    overrides,
    roiCeiling,
    discounts,
    intentLevel,
    reasoning,
    timeline: config.timeline,
  }
}

// ─── Revenue & ROI Helpers (for proposal context) ───────────

export function getRevenueNumbers(fd: any) {
  const cat = getBusinessCategory(fd.businessType || '')

  const priceMap: Record<BusinessCategory, Record<string, number>> = {
    online: { '5k+': 7500, '1k-5k': 3000, '200-1k': 600, '50-200': 125, 'under-50': 30, 'recurring': 100 },
    local: { '5k+': 15000, '1k-5k': 5000, '200-1k': 1200, '50-200': 350, 'under-50': 100, 'recurring': 200 },
    professional: { '5k+': 25000, '1k-5k': 10000, '200-1k': 3500, '50-200': 1000, 'under-50': 250, 'recurring': 5000 },
    product: { '5k+': 7500, '1k-5k': 2500, '200-1k': 600, '50-200': 100, 'under-50': 30, 'recurring': 50 },
  }

  const listMap: Record<BusinessCategory, Record<string, number>> = {
    online: { '50k+': 75000, '10k-50k': 30000, '5k-10k': 7500, '1k-5k': 3000, 'under-1k': 500 },
    local: { '50k+': 15000, '10k-50k': 5000, '5k-10k': 1000, '1k-5k': 300, 'under-1k': 50 },
    professional: { '50k+': 750, '10k-50k': 250, '5k-10k': 60, '1k-5k': 20, 'under-1k': 5 },
    product: { '50k+': 150000, '10k-50k': 50000, '5k-10k': 12000, '1k-5k': 2500, 'under-1k': 250 },
  }

  const churnMap: Record<string, number> = {
    '20+': 0.25, '10-20': 0.15, '5-10': 0.07, 'under-5': 0.03, 'unknown': 0.10,
  }

  const avgPrice = priceMap[cat]?.[fd.productPricePoint] ?? 100
  const listSize = listMap[cat]?.[fd.listSize] ?? 500
  const churnPct = churnMap[fd.churnRate] ?? 0.10
  const annualChurnLoss = Math.round(listSize * churnPct * avgPrice)
  const supportHrs = fd.supportHoursPerWeek === '10+' ? 12 : fd.supportHoursPerWeek === '5-10' ? 7 : 2
  const currentRevenue = estimateCurrentRevenue(fd)

  return {
    category: cat,
    avgPrice,
    listSize,
    churnPct,
    annualChurnLoss,
    supportHrs,
    currentRevenue,
    supportCostMonthly: Math.round(supportHrs * 0.8 * 4 * 75),
    timeSavingsAnnual: Math.round(supportHrs * 0.8 * 4 * 75 * 12),
  }
}
