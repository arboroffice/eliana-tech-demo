/**
 * Auto Proposal Generator
 * Generates custom proposals based on audit data
 */

export interface Proposal {
  clientName: string
  companyName: string
  industry: string
  date: string
  painPoints: string[]
  recommendedPackage: 'ai-coo' | 'full-infrastructure'
  systems: { name: string; description: string; value: string }[]
  timeline: { phase: string; weeks: string; deliverables: string[] }[]
  investment: string
  roi: { metric: string; value: string }[]
  guarantee: string
}

export function generateProposal(formData: any, auditScore: number): Proposal {
  const painPoints = extractPainPoints(formData)
  const recommendedPackage = determinePackage(formData, auditScore)
  const systems = buildSystemsList(formData, recommendedPackage)
  const roi = calculateROI(formData)

  return {
    clientName: formData.fullName || 'Valued Client',
    companyName: formData.companyName || 'Your Company',
    industry: formData.specificIndustry || formData.industry || 'Business',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    painPoints,
    recommendedPackage,
    systems,
    timeline: getTimeline(recommendedPackage),
    investment: recommendedPackage === 'ai-coo' ? '$10,000' : '$25,000 - $50,000',
    roi,
    guarantee: '90-Day Performance Guarantee — If you don\'t see measurable improvements within 90 days, we\'ll continue working at no additional cost until you do.'
  }
}

function extractPainPoints(formData: any): string[] {
  const points: string[] = []
  if (formData.keepsUpAtNight) points.push(formData.keepsUpAtNight)
  if (formData.missedCalls && formData.missedCalls !== '0-5') points.push(`Missing ${formData.missedCalls} calls/week`)
  if (formData.bottleneck) points.push(formData.bottleneck)
  if (formData.systematicFollowUp === 'No') points.push('No systematic follow-up process')
  if (formData.twoWeeksOff === 'No way') points.push('Cannot step away from business')
  if (formData.hoursPerWeek === '60+') points.push('Working 60+ hours/week')
  if (formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') points.push('Little to no automation in place')
  if (formData.askReviewsSystem === 'none') points.push('No review generation system')
  return points.length ? points : ['Operational inefficiency', 'Manual processes limiting growth']
}

function determinePackage(formData: any, auditScore: number): 'ai-coo' | 'full-infrastructure' {
  const hasNoWebsite = formData.hasWebsite === 'No' || formData.hasWebsite === false
  const hasNoContent = formData.contentStrategy === 'none' || formData.contentStrategy === 'No'
  const hasNoCRM = formData.crm === 'none' || formData.crm === 'No' || !formData.crm
  const complexNeeds = [hasNoWebsite, hasNoContent, hasNoCRM].filter(Boolean).length >= 2

  if (auditScore < 40 || complexNeeds) return 'full-infrastructure'
  return 'ai-coo'
}

function buildSystemsList(formData: any, pkg: 'ai-coo' | 'full-infrastructure') {
  const systems: { name: string; description: string; value: string }[] = []

  // Core systems for both packages
  if (formData.missedCalls !== '0-5') {
    systems.push({ name: 'AI Lead Capture & Response', description: '24/7 AI receptionist that answers calls, qualifies leads, and books appointments automatically.', value: '$3,000-$8,000/mo in recovered revenue' })
  }
  if (formData.systematicFollowUp !== 'Yes') {
    systems.push({ name: 'Smart Follow-Up Engine', description: 'Automated email and SMS sequences that nurture every lead with personalized messaging.', value: '40-60% conversion rate improvement' })
  }
  if (formData.askReviewsSystem === 'none' || formData.askReviewsSystem === 'manual') {
    systems.push({ name: 'Review Generation System', description: 'Automated review requests at the perfect moment after service delivery.', value: '3x review generation rate' })
  }

  systems.push({ name: 'Operations Dashboard', description: 'Centralized command center showing leads, appointments, revenue, and team performance.', value: '5-10 hrs/week saved on reporting' })
  systems.push({ name: 'Task & Workflow Automation', description: 'Automated scheduling, reminders, invoicing, and recurring task management.', value: '15-20 hrs/week reclaimed' })

  if (pkg === 'full-infrastructure') {
    systems.push({ name: 'Website Design & Development', description: 'Conversion-optimized website built for your industry with SEO and lead capture.', value: 'Professional online presence + lead gen' })
    systems.push({ name: 'Content Strategy & Creation', description: 'Blog posts, social media content, and email newsletters — all planned and scheduled.', value: 'Consistent brand authority building' })
    systems.push({ name: 'CRM Setup & Integration', description: 'Full CRM implementation with pipeline management and automated data flow.', value: 'Single source of truth for all contacts' })
  }

  return systems
}

function getTimeline(pkg: 'ai-coo' | 'full-infrastructure') {
  if (pkg === 'ai-coo') {
    return [
      { phase: 'Phase 1: Install', weeks: 'Weeks 1-3', deliverables: ['AI lead capture system live', 'Follow-up sequences configured', 'Review automation activated', 'Dashboard configured'] },
      { phase: 'Phase 2: Optimize', weeks: 'Weeks 4-8', deliverables: ['Performance tuning based on real data', 'A/B testing messaging', 'Workflow refinement', 'Team training'] },
      { phase: 'Phase 3: Scale', weeks: 'Weeks 9-12', deliverables: ['Advanced automation rules', 'Expansion to new channels', 'ROI reporting & analysis', 'Strategic growth planning'] }
    ]
  }
  return [
    { phase: 'Phase 1: Foundation', weeks: 'Weeks 1-4', deliverables: ['Brand strategy & website wireframes', 'CRM setup & data migration', 'Core automation systems live', 'Content strategy approved'] },
    { phase: 'Phase 2: Build', weeks: 'Weeks 5-8', deliverables: ['Website development & launch', 'Full automation suite live', 'Content creation pipeline active', 'Team onboarding & training'] },
    { phase: 'Phase 3: Scale', weeks: 'Weeks 9-12', deliverables: ['Performance optimization', 'Advanced integrations', 'Growth strategy execution', 'Full handoff & ongoing support'] }
  ]
}

function calculateROI(formData: any) {
  const roi: { metric: string; value: string }[] = []

  const missedCalls = formData.missedCalls === '30+' ? 35 : formData.missedCalls === '10-30' ? 20 : formData.missedCalls === '5-10' ? 7 : 3
  roi.push({ metric: 'Leads recovered per month', value: `${missedCalls * 4}+` })
  roi.push({ metric: 'Estimated revenue recovered', value: `$${(missedCalls * 4 * 200).toLocaleString()}-$${(missedCalls * 4 * 500).toLocaleString()}/mo` })
  roi.push({ metric: 'Hours saved per week', value: '15-20 hours' })
  roi.push({ metric: 'Annual time value saved', value: `$${(17 * 50 * 52).toLocaleString()}` })
  roi.push({ metric: 'Conversion rate improvement', value: '30-50%' })
  roi.push({ metric: 'Expected payback period', value: '30-60 days' })

  return roi
}
