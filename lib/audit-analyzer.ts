/**
 * Audit Analyzer — Info & SaaS Companies
 * Calculates scores and analyzes intent from audit responses
 */

export function calculateAuditScore(formData: any): number {
    const scores = {
        revenue: calculateRevenueScore(formData),
        automation: calculateAutomationScore(formData),
        acquisition: calculateAcquisitionScore(formData),
        retention: calculateRetentionScore(formData),
        time: calculateTimeScore(formData)
    }

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0) / 5
    return Math.round(totalScore)
}

export function analyzeIntent(formData: any): 'high' | 'medium' | 'low' {
    const excitementLevel = parseInt(formData.excitementLevel) || 0
    const painLevel = formData.painLevel?.[0] || 0

    if (excitementLevel >= 8 || painLevel >= 7) return 'high'
    if (excitementLevel >= 5 && excitementLevel < 8) return 'medium'
    return 'low'
}

function calculateRevenueScore(formData: any): number {
    let score = 50

    if (formData.revenueTrend === 'Growing') score += 25
    else if (formData.revenueTrend === 'Declining') score -= 25

    if (formData.profitMargin === '60+') score += 15
    else if (formData.profitMargin === '40-60') score += 10
    else if (formData.profitMargin === '20-40') score += 0
    else if (formData.profitMargin === 'under-20') score -= 10
    else if (formData.profitMargin === 'negative') score -= 20

    // Revenue stage bonus
    if (formData.currentRevenue === '3m+') score += 10
    else if (formData.currentRevenue === '1m-3m') score += 5
    else if (formData.currentRevenue === 'pre-revenue') score -= 10

    return Math.max(0, Math.min(100, score))
}

function calculateAutomationScore(formData: any): number {
    let score = 0

    if (formData.percentAutomated === '60+') score = 85
    else if (formData.percentAutomated === '30-60') score = 60
    else if (formData.percentAutomated === 'under-30') score = 35
    else if (formData.percentAutomated === 'none') score = 15

    // Tools used bonus
    const toolCount = formData.tools?.length || 0
    score += Math.min(15, toolCount * 2)

    // Onboarding automation bonus
    if (formData.onboardingAutomated === 'Yes') score += 10
    else if (formData.onboardingAutomated === 'Partially') score += 5

    return Math.max(0, Math.min(100, score))
}

function calculateAcquisitionScore(formData: any): number {
    let score = 50

    // Conversion rate
    if (formData.conversionRate === '10+') score = 90
    else if (formData.conversionRate === '5-10') score = 75
    else if (formData.conversionRate === '3-5') score = 55
    else if (formData.conversionRate === '1-3') score = 35
    else if (formData.conversionRate === 'under-1') score = 15

    // List size bonus
    if (formData.listSize === '50k+') score += 10
    else if (formData.listSize === '10k-50k') score += 5
    else if (formData.listSize === 'under-1k') score -= 10

    // Multiple traffic sources
    if (formData.trafficSource === 'mixed') score += 5

    return Math.max(0, Math.min(100, score))
}

function calculateRetentionScore(formData: any): number {
    let score = 50

    // Churn rate (lower = better)
    if (formData.churnRate === 'under-5') score = 85
    else if (formData.churnRate === '5-10') score = 60
    else if (formData.churnRate === '10-20') score = 35
    else if (formData.churnRate === '20+') score = 15
    else if (formData.churnRate === 'unknown') score = 30

    // Price point affects retention scoring context
    if (formData.productPricePoint === '5k+' || formData.productPricePoint === '1k-5k') score += 10
    if (formData.productPricePoint === 'recurring') score += 5

    return Math.max(0, Math.min(100, score))
}

function calculateTimeScore(formData: any): number {
    let score = 50

    if (formData.twoWeeksOff === 'Yes') score = 80
    else if (formData.twoWeeksOff === 'Maybe') score = 45
    else score = 20

    if (formData.hoursPerWeek === 'under-20') score += 10
    else if (formData.hoursPerWeek === '20-40') score += 5
    else if (formData.hoursPerWeek === '40-60') score -= 5
    else if (formData.hoursPerWeek === '60+') score -= 15

    if (formData.highValueWork === '60+') score += 10
    else if (formData.highValueWork === '40-60') score += 0
    else if (formData.highValueWork === '20-40') score -= 10
    else if (formData.highValueWork === 'under-20') score -= 15

    return Math.max(0, Math.min(100, score))
}

export function getRecommendedPackage(formData: any, auditScore: number): string {
    const painLevel = formData.painLevel?.[0] || 0

    if (painLevel >= 7) return 'full-build'
    if (formData.currentRevenue === 'pre-revenue' || formData.currentRevenue === 'under-100k' || formData.growthBudget === 'starter') return 'single-system'
    if (['500k-1m', '1m-3m', '3m+'].includes(formData.currentRevenue) || ['aggressive', 'enterprise'].includes(formData.growthBudget)) return 'full-build'
    return 'multi-system'
}
