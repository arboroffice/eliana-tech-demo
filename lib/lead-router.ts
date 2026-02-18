/**
 * Lead Scoring & Routing — All Industries
 */

export interface LeadScore {
  level: 'hot' | 'warm' | 'cold'
  score: number
  reasons: string[]
  recommendedActions: string[]
  nurturSequence: 'A' | 'B' | 'C'
}

export function scoreAndRouteLead(formData: any, auditScore: number): LeadScore {
  const excitementLevel = parseInt(formData.excitementLevel) || 0
  const painLevel = parseInt(formData.painLevel?.[0] || formData.painLevel) || 0
  const budget = (formData.growthBudget || '').toLowerCase()

  let score = 0
  const reasons: string[] = []

  // Excitement scoring (0-30 points)
  score += Math.min(30, excitementLevel * 3)
  if (excitementLevel >= 8) reasons.push(`High excitement (${excitementLevel}/10)`)

  // Pain scoring (0-30 points)
  score += Math.min(30, painLevel * 3)
  if (painLevel >= 8) reasons.push(`High pain level (${painLevel}/10)`)

  // Budget scoring (0-20 points)
  const budgetScores: Record<string, number> = {
    enterprise: 20, aggressive: 15, moderate: 10, starter: 5
  }
  score += budgetScores[budget] || 0
  if (['enterprise', 'aggressive'].includes(budget)) {
    reasons.push(`Strong budget signal (${budget})`)
  }

  // Audit score bonus (0-10 points) — lower audit = more opportunity
  const opportunityBonus = Math.round((100 - auditScore) / 10)
  score += opportunityBonus
  if (auditScore < 40) reasons.push(`Low automation readiness (${auditScore}/100) = high opportunity`)

  // Business-specific intent signals (0-10 points)
  if (formData.churnRate === '20+' || formData.churnRate === '10-20') {
    score += 5
    reasons.push('High churn rate — urgent need')
  }
  if (formData.onboardingAutomated === 'No') {
    score += 3
    reasons.push('No onboarding automation')
  }
  if (formData.twoWeeksOff === 'No') {
    score += 2
    reasons.push('Cannot step away from business')
  }
  if (formData.supportHoursPerWeek === '10+') {
    score += 3
    reasons.push('10+ hrs/week on support')
  }

  score = Math.min(100, Math.max(0, score))

  const isHot =
    score >= 80 ||
    excitementLevel >= 8 ||
    painLevel >= 8 ||
    (['aggressive', 'enterprise'].includes(budget) && excitementLevel >= 5)

  const isWarm =
    !isHot && (
      score >= 50 ||
      (excitementLevel >= 5 && excitementLevel <= 7) ||
      (painLevel >= 5 && painLevel <= 7) ||
      (budgetScores[budget] >= 10)
    )

  if (isHot) {
    return {
      level: 'hot',
      score: Math.max(score, 80),
      reasons,
      recommendedActions: [
        'Notify team immediately',
        'Send instant email with Cal.com link',
        'SMS within 5 minutes',
        'Priority follow-up'
      ],
      nurturSequence: 'A'
    }
  }

  if (isWarm) {
    return {
      level: 'warm',
      score: Math.max(score, 50),
      reasons,
      recommendedActions: [
        'Email nurture sequence',
        'SMS on Day 2',
        'Send case study',
        'Weekly check-in'
      ],
      nurturSequence: 'B'
    }
  }

  return {
    level: 'cold',
    score,
    reasons: reasons.length ? reasons : ['Low engagement signals', 'Early research phase'],
    recommendedActions: [
      'Add to newsletter',
      'Monthly value email',
      'Re-engage at Day 30'
    ],
    nurturSequence: 'C'
  }
}
