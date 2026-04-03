/**
 * Audit Analyzer — All Industries
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
    const rev = formData.revenue || formData.currentRevenue || ''

    if (rev.includes('$1M-$5M') || rev.includes('$5M+')) score += 30
    else if (rev.includes('$250K-$1M')) score += 15
    else if (rev.includes('Under $250K')) score += 5
    else if (rev.includes('pre-revenue')) score -= 10

    return Math.max(0, Math.min(100, score))
}

function calculateAutomationScore(formData: any): number {
    let score = 20
    const ops = parseInt(formData.opsScore) || 5
    score = ops * 10 

    // AI Use bonus
    if (formData.aiUse?.includes('Yes')) score += 15
    else if (formData.aiUse?.includes('little')) score += 5

    return Math.max(0, Math.min(100, score))
}

function calculateAcquisitionScore(formData: any): number {
    let score = 50
    const problems = formData.problems || formData.bottlenecks || []
    
    if (problems.some((p: string) => p.toLowerCase().includes('lead') || p.toLowerCase().includes('marketing'))) {
        score -= 20
    } else {
        score += 10
    }

    return Math.max(0, Math.min(100, score))
}

function calculateRetentionScore(formData: any): number {
    let score = 60
    const problems = formData.problems || formData.bottlenecks || []

    if (problems.some((p: string) => p.toLowerCase().includes('review') || p.toLowerCase().includes('past client'))) {
        score -= 15
    }

    return Math.max(0, Math.min(100, score))
}

function calculateTimeScore(formData: any): number {
    let score = 50
    const hours = formData.hoursOnAdmin || formData.hoursPerWeek || ''

    if (hours === '30h+' || hours === '20-30h') score = 20
    else if (hours === '10-20h') score = 35
    else if (hours === '5-10h') score = 60
    else if (hours === '1-5h') score = 85

    return Math.max(0, Math.min(100, score))
}

export function getRecommendedPackage(formData: any, auditScore: number): string {
    const painLevel = formData.painLevel?.[0] || 0

    if (painLevel >= 7) return 'full-build'
    if (formData.currentRevenue === 'pre-revenue' || formData.currentRevenue === 'under-100k' || formData.growthBudget === 'starter') return 'single-system'
    if (['500k-1m', '1m-3m', '3m+'].includes(formData.currentRevenue) || ['aggressive', 'enterprise'].includes(formData.growthBudget)) return 'full-build'
    return 'multi-system'
}
