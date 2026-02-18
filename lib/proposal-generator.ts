/**
 * Auto Proposal Generator — All Industries
 * Generates custom proposals based on audit data
 */

export interface Proposal {
  clientName: string
  companyName: string
  businessType: string
  date: string
  painPoints: string[]
  recommendedPackage: 'single-system' | 'multi-system' | 'full-build'
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
    businessType: formData.businessType || 'Business',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    painPoints,
    recommendedPackage,
    systems,
    timeline: getTimeline(recommendedPackage),
    investment: recommendedPackage === 'single-system' ? '$5,000 - $10,000' : recommendedPackage === 'multi-system' ? '$10,000 - $25,000' : '$25,000 - $50,000',
    roi,
    guarantee: '90-Day Performance Guarantee — If you don\'t see measurable improvements within 90 days, we\'ll continue working at no additional cost until you do.'
  }
}

function extractPainPoints(formData: any): string[] {
  const points: string[] = []
  if (formData.keepsUpAtNight) points.push(formData.keepsUpAtNight)
  if (formData.churnRate === '20+' || formData.churnRate === '10-20') points.push(`${formData.churnRate}% churn rate eating into growth`)
  if (formData.bottleneck) points.push(formData.bottleneck)
  if (formData.onboardingAutomated === 'No') points.push('No automated onboarding — losing customers early')
  if (formData.twoWeeksOff === 'No') points.push('Cannot step away from business')
  if (formData.hoursPerWeek === '60+') points.push('Working 60+ hours/week')
  if (formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30') points.push('Little to no automation in place')
  if (formData.supportHoursPerWeek === '10+') points.push('10+ hours/week on customer support')
  if (formData.contentCreationHours === '20+') points.push('20+ hours/week on content creation')
  return points.length ? points : ['Manual operations limiting growth', 'Scaling requires adding headcount']
}

function determinePackage(formData: any, auditScore: number): 'single-system' | 'multi-system' | 'full-build' {
  const painLevel = Array.isArray(formData.painLevel) ? parseInt(String(formData.painLevel[0])) || 0 : parseInt(String(formData.painLevel)) || 0

  if (painLevel >= 7) return 'full-build'
  if (formData.currentRevenue === 'pre-revenue' || formData.currentRevenue === 'under-100k' || formData.growthBudget === 'starter') return 'single-system'
  if (['500k-1m', '1m-3m', '3m+'].includes(formData.currentRevenue) || ['aggressive', 'enterprise'].includes(formData.growthBudget)) return 'full-build'
  return 'multi-system'
}

function buildSystemsList(formData: any, pkg: 'single-system' | 'multi-system' | 'full-build') {
  const systems: { name: string; description: string; value: string }[] = []

  // Core systems based on needs
  if (formData.onboardingAutomated !== 'Yes') {
    systems.push({ name: 'Automated Onboarding Engine', description: 'Behavior-triggered welcome sequences that guide new customers to their first win and reduce early churn.', value: '30%+ reduction in early churn' })
  }
  if (formData.churnRate === '20+' || formData.churnRate === '10-20') {
    systems.push({ name: 'Churn Prevention System', description: 'Health scoring, at-risk alerts, and automated re-engagement sequences to save customers before they leave.', value: '30-50% reduction in churn' })
  }
  if (formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10') {
    systems.push({ name: 'AI Support Assistant', description: 'AI chatbot trained on your content that handles 80% of customer questions instantly, 24/7.', value: '60-80% fewer support tickets' })
  }

  systems.push({ name: 'Analytics & Insights Dashboard', description: 'Real-time visibility into MRR, churn, activation rates, and engagement — spot problems before they grow.', value: 'Data-driven decisions + early warning system' })
  systems.push({ name: 'Workflow Automation Hub', description: 'Connected automation across your tools — purchase → access → onboarding → support → upsell, all automated.', value: '15-20 hrs/week reclaimed' })

  if (pkg === 'multi-system' || pkg === 'full-build') {
    systems.push({ name: 'AI Content Engine', description: 'Repurpose 1 piece of content into 30+ assets in your voice and style. Social, email, threads — all automated.', value: '10-15 hrs/week saved on content' })
    systems.push({ name: 'Email Nurture & Segmentation', description: 'Behavior-based email sequences for leads, customers, and at-risk users with AI-optimized send times.', value: '2-3x email engagement' })
  }

  if (pkg === 'full-build') {
    systems.push({ name: 'Funnel Optimization Suite', description: 'A/B testing, lead scoring, and conversion optimization across your entire sales funnel.', value: '2-3x conversion rate improvement' })
    systems.push({ name: 'Revenue Intelligence', description: 'Predictive analytics for MRR forecasting, expansion revenue opportunities, and LTV optimization.', value: 'Strategic growth acceleration' })
  }

  return systems
}

function getTimeline(pkg: 'single-system' | 'multi-system' | 'full-build') {
  if (pkg === 'single-system') {
    return [
      { phase: 'Phase 1: Install', weeks: 'Weeks 1-2', deliverables: ['Core system configured and live', 'Integrations connected', 'Automation sequences activated', 'Team walkthrough'] },
      { phase: 'Phase 2: Optimize', weeks: 'Weeks 3-6', deliverables: ['Performance tuning from real data', 'A/B testing messaging', 'Workflow refinement', 'ROI reporting'] },
      { phase: 'Phase 3: Scale', weeks: 'Weeks 7-12', deliverables: ['Advanced automation rules', 'Strategic recommendations', 'Handoff documentation', 'Ongoing support plan'] }
    ]
  }
  if (pkg === 'multi-system') {
    return [
      { phase: 'Phase 1: Foundation', weeks: 'Weeks 1-3', deliverables: ['Tech stack audit & integration map', 'Core automations live', 'Onboarding sequences activated', 'Support chatbot deployed'] },
      { phase: 'Phase 2: Build', weeks: 'Weeks 4-8', deliverables: ['Content engine operational', 'Email nurture sequences live', 'Churn prevention system active', 'Dashboard configured'] },
      { phase: 'Phase 3: Scale', weeks: 'Weeks 9-12', deliverables: ['Performance optimization', 'Advanced automations', 'Team training', 'Growth strategy execution'] }
    ]
  }
  return [
    { phase: 'Phase 1: Foundation', weeks: 'Weeks 1-3', deliverables: ['Full tech stack audit', 'Core systems configured', 'Onboarding + support automation live', 'Analytics dashboard deployed'] },
    { phase: 'Phase 2: Build', weeks: 'Weeks 4-8', deliverables: ['Content engine + nurture sequences', 'Churn prevention active', 'Funnel optimization started', 'Revenue intelligence setup'] },
    { phase: 'Phase 3: Scale', weeks: 'Weeks 9-12', deliverables: ['Full optimization pass', 'Advanced A/B testing', 'Growth strategy execution', 'Team training + handoff + ongoing support'] }
  ]
}

function calculateROI(formData: any) {
  const roi: { metric: string; value: string }[] = []

  const churnPct = formData.churnRate === '20+' ? 0.25 : formData.churnRate === '10-20' ? 0.15 : formData.churnRate === '5-10' ? 0.07 : 0.03
  const price = formData.productPricePoint === '5k+' ? 7500 : formData.productPricePoint === '1k-5k' ? 3000 : formData.productPricePoint === '500-1k' ? 750 : formData.productPricePoint === '100-500' ? 300 : formData.productPricePoint === 'recurring' ? 100 : 50
  const listSize = formData.listSize === '50k+' ? 75000 : formData.listSize === '10k-50k' ? 30000 : formData.listSize === '5k-10k' ? 7500 : formData.listSize === '1k-5k' ? 3000 : 500

  const churnSaved = Math.round(listSize * churnPct * price * 0.3)
  const supportHrs = formData.supportHoursPerWeek === '10+' ? 12 : formData.supportHoursPerWeek === '5-10' ? 7 : 2

  roi.push({ metric: 'Revenue saved from reduced churn (30%)', value: `$${churnSaved.toLocaleString()}/year` })
  roi.push({ metric: 'Support hours saved (80% deflection)', value: `${Math.round(supportHrs * 0.8 * 4)} hrs/month` })
  roi.push({ metric: 'Owner hours reclaimed', value: '15-20 hours/week' })
  roi.push({ metric: 'Content creation time saved', value: '10-15 hours/week' })
  roi.push({ metric: 'Activation rate improvement', value: '2-3x faster onboarding' })
  roi.push({ metric: 'Expected payback period', value: '30-60 days' })

  return roi
}
