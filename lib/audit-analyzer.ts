/**
 * Audit Analyzer
 * Calculates scores and analyzes intent from audit responses
 */

export function calculateAuditScore(formData: any): number {
    const scores = {
        revenue: calculateRevenueScore(formData),
        automation: calculateAutomationScore(formData),
        sales: calculateSalesScore(formData),
        retention: calculateRetentionScore(formData),
        time: calculateTimeScore(formData)
    }

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / 5
    return Math.round(totalScore)
}

export function analyzeIntent(formData: any): 'high' | 'medium' | 'low' {
    const excitementLevel = parseInt(formData.excitementLevel) || 0
    const painLevel = formData.painLevel?.[0] || 0

    // High intent: Ready to act now
    if (excitementLevel >= 8 || painLevel >= 7) {
        return 'high'
    }

    // Medium intent: Exploring seriously
    if (excitementLevel >= 5 && excitementLevel < 8) {
        return 'medium'
    }

    // Low intent: Early research
    return 'low'
}

function calculateRevenueScore(formData: any): number {
    let score = 50 // Base score

    // Revenue trend impact
    if (formData.revenueTrend === 'Growing') score += 25
    else if (formData.revenueTrend === 'Flat') score += 0
    else if (formData.revenueTrend === 'Declining') score -= 25

    // Profit margin impact
    if (formData.profitMargin === '50%+') score += 15
    else if (formData.profitMargin === '20-50%') score += 10
    else if (formData.profitMargin === '10-20%') score += 0
    else if (formData.profitMargin === '<10%') score -= 10
    else if (formData.profitMargin === 'negative') score -= 20

    // Cash flow impact
    if (formData.cashFlow === 'Healthy') score += 10
    else if (formData.cashFlow === 'Tight') score -= 5
    else if (formData.cashFlow === 'Crisis') score -= 15

    return Math.max(0, Math.min(100, score))
}

function calculateAutomationScore(formData: any): number {
    let score = 0

    // Automation percentage is the primary factor
    if (formData.percentAutomated === '>70%') score = 85
    else if (formData.percentAutomated === '30-70%') score = 60
    else if (formData.percentAutomated === '<30%') score = 35
    else if (formData.percentAutomated === 'none') score = 15

    // Adjust based on tools used
    const toolCount = formData.tools?.length || 0
    score += Math.min(15, toolCount * 2)

    return Math.max(0, Math.min(100, score))
}

function calculateSalesScore(formData: any): number {
    let score = 50

    // Conversion rate impact
    if (formData.conversionRate === '50%+') score = 90
    else if (formData.conversionRate === '30-50%') score = 70
    else if (formData.conversionRate === '20-30%') score = 50
    else if (formData.conversionRate === '10-20%') score = 30
    else if (formData.conversionRate === '<10%') score = 15

    // Missed calls penalty
    if (formData.missedCalls === '30+') score -= 20
    else if (formData.missedCalls === '10-30') score -= 15
    else if (formData.missedCalls === '5-10') score -= 5

    // Follow-up system bonus
    if (formData.systematicFollowUp === 'Yes') score += 10
    else if (formData.systematicFollowUp === 'Kinda') score += 0
    else score -= 10

    return Math.max(0, Math.min(100, score))
}

function calculateRetentionScore(formData: any): number {
    let score = 0

    // Repeat customer rate
    if (formData.repeatCustomers === '50%+') score = 85
    else if (formData.repeatCustomers === '25-50%') score = 65
    else if (formData.repeatCustomers === '10-25%') score = 40
    else score = 20

    // Recurring revenue bonus
    if (formData.recurringRevenue === 'Yes (>30%)') score += 10
    else if (formData.recurringRevenue === 'Small (<30%)') score += 5

    // Referral system bonus
    if (formData.referralSystem === 'Yes') score += 5

    return Math.max(0, Math.min(100, score))
}

function calculateTimeScore(formData: any): number {
    let score = 50

    // Can take 2 weeks off?
    if (formData.twoWeeksOff === 'Yes') score = 80
    else if (formData.twoWeeksOff === 'Maybe') score = 45
    else score = 20

    // Hours per week impact
    if (formData.hoursPerWeek === '<30') score += 10
    else if (formData.hoursPerWeek === '30-40') score += 5
    else if (formData.hoursPerWeek === '40-60') score -= 5
    else if (formData.hoursPerWeek === '60+') score -= 15

    // High-value work percentage
    if (formData.highValueWork === '70%+') score += 10
    else if (formData.highValueWork === '30-70%') score += 0
    else if (formData.highValueWork === '10-30%') score -= 10
    else score -= 15

    return Math.max(0, Math.min(100, score))
}

export function calculatePotentialRevenue(formData: any): string {
    const missedCallsPerWeek =
        formData.missedCalls === '30+' ? 35 :
        formData.missedCalls === '10-30' ? 20 :
        formData.missedCalls === '5-10' ? 7 : 3

    const avgDealSize =
        formData.dealSize === 'enterprise' ? 50000 :
        formData.dealSize === 'high' ? 15000 :
        formData.dealSize === 'medium' ? 5000 :
        formData.dealSize === 'small' ? 500 : 100

    const currentConversion =
        formData.conversionRate === '<10%' ? 0.05 :
        formData.conversionRate === '10-20%' ? 0.15 :
        formData.conversionRate === '20-30%' ? 0.25 :
        formData.conversionRate === '30-50%' ? 0.35 : 0.5

    // Calculate annual potential from just missed calls
    const potentialFromMissedCalls = missedCallsPerWeek * 52 * avgDealSize * currentConversion

    // Add potential from improving conversion rate
    const currentLeads = 50 // Assume average
    const conversionImprovement = 0.2 // 20% improvement potential
    const potentialFromConversion = currentLeads * 12 * avgDealSize * conversionImprovement

    const totalPotential = potentialFromMissedCalls + potentialFromConversion

    if (totalPotential >= 1000000) {
        return `$${(totalPotential / 1000000).toFixed(1)}M`
    } else if (totalPotential >= 1000) {
        return `$${Math.round(totalPotential / 1000)}K`
    }
    return `$${Math.round(totalPotential)}`
}

export function getRecommendedPackage(formData: any, auditScore: number): string {
    const revenue = formData.currentRevenue
    const budget = formData.growthBudget
    const painLevel = formData.painLevel?.[0] || 0

    // High pain = immediate need for Scale package
    if (painLevel >= 7) {
        return 'scale'
    }

    // Early stage
    if (revenue === 'early' || budget === 'starter') {
        return 'foundation'
    }

    // Growth stage
    if (revenue === 'growth' || budget === 'moderate' || budget === 'aggressive') {
        return 'scale'
    }

    // Established/Leader
    if (revenue === 'established' || revenue === 'leader' || budget === 'leader' || budget === 'enterprise') {
        return 'transformation'
    }

    // Default to foundation
    return 'foundation'
}
