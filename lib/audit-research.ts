/**
 * Audit Research — Shared types and Claude prompt builders
 * Used by both /api/audit/research and /api/audit/deep-analysis
 */

// ─── Types ───────────────────────────────────────────────

export interface ResearchInsight {
  type: 'discovery' | 'warning' | 'opportunity'
  message: string
  icon?: string
}

export interface DeepAnalysisStage {
  stage: number
  label: string
  status: 'pending' | 'running' | 'complete'
  findings: string[]
}

export interface DeepAnalysisResult {
  stages: DeepAnalysisStage[]
  scores?: {
    revenue: number
    automation: number
    acquisition: number
    retention: number
    time: number
    overall: number
  }
}

export interface SalesBrief {
  buyerTemperature: 'hot' | 'warm' | 'cold'
  temperatureReason: string
  costOfInactionMonthly: number
  recommendedFirstProject: string
  firstProjectReason: string
  objectionFlags: string[]
  openingAngles: string[]
  toolstackGaps: string
}

// ─── Background Research Prompt (Step 0) ─────────────────

export function buildBackgroundResearchPrompt(websiteContent: string): string {
  return `You are a business systems auditor doing a quick pre-audit scan of a website. Your job is to spot PROBLEMS — gaps, leaks, and missing infrastructure — not to give compliments.

WEBSITE CONTENT:
${websiteContent}

Hunt for:
- GAPS: systems/tools this business should have but visibly doesn't (no booking system, no live chat, no email opt-in, no reviews widget, no FAQ/knowledge base)
- LEAKS: signs of leads or revenue bleeding out (no follow-up mechanism, no retargeting, dead contact forms, no urgency/offer on the page)
- WASTE SIGNALS: signs of manual work (generic contact@email, no automation pixels, PDF downloads instead of dynamic tools)
- TRUST GAPS: missing social proof, no testimonials, no case studies for a business that should have them
- TECH FLAGS: outdated platform, slow-loading indicators, missing integrations that are standard for their industry

Generate 4-6 SPECIFIC findings. Be blunt. Use "warning" for problems, "discovery" for notable observations, "opportunity" only when you've already named the gap it fixes.

Respond with a JSON array of objects, each with:
- "type": one of "discovery", "warning", or "opportunity"
- "message": a short, specific finding (1 sentence, under 130 chars) — name the PROBLEM, not the solution
- "icon": a single relevant emoji

Example:
[
  {"type": "warning", "message": "No email opt-in or lead magnet visible — 100% of visitors leave with no way to follow up", "icon": "⚠️"},
  {"type": "warning", "message": "Contact form only — no live chat or booking system, likely losing after-hours leads", "icon": "📵"},
  {"type": "discovery", "message": "Shopify store detected but no abandoned cart or post-purchase email sequence visible", "icon": "🛒"}
]

Return ONLY the JSON array, no markdown fences or other text.`
}

// ─── Deep Analysis Prompts (Post-Submit) ─────────────────

export function buildScanningPrompt(websiteContent: string, formData: any): string {
  return `You are a business systems auditor scanning a website for gaps, leaks, and missing infrastructure.

WEBSITE CONTENT:
${websiteContent}

BUSINESS TYPE: ${formData.businessType || 'unknown'}
COMPANY: ${formData.companyName || 'Unknown'}
REVENUE: ${formData.currentRevenue}

Your job is to find PROBLEMS — not compliments. Look for:
- Missing systems that a business this size should have (lead capture, live chat, booking, automation)
- Signs of manual work that should be automated (contact forms instead of booking tools, no chatbot, no reviews widget)
- Tech debt or outdated infrastructure (slow site, broken integrations, generic email contact vs. CRM)
- Revenue leaks visible from the outside (no upsells, no email capture, no retargeting pixels)

Be blunt and specific — reference what you actually see (or DON'T see) on the site.

Respond with a JSON array of 3 strings (each under 120 chars). Lead with the problem, not the solution.
Example:
["No lead capture or email opt-in — visitors leave with no way to follow up", "Contact form only — no live booking, likely losing after-hours leads", "No social proof, reviews, or trust signals visible above the fold"]

Return ONLY the JSON array.`
}

export function buildOperationsPrompt(formData: any, websiteFindings: string[]): string {
  const hoursWasted = (() => {
    if (formData.hoursPerWeek === '60+') return '60+'
    if (formData.hoursPerWeek === '40-60') return '40-60'
    if (formData.hoursPerWeek === '20-40') return '20-40'
    return formData.hoursPerWeek || 'unknown'
  })()
  const highValuePct = formData.highValueWork || 'unknown'
  const automatedPct = formData.percentAutomated || 'unknown'

  return `You are diagnosing a business for operational waste, money leaks, and time drains.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
WEBSITE PROBLEMS FOUND: ${websiteFindings.join('; ')}

OPERATIONAL DATA:
- Revenue: ${formData.currentRevenue} | Trend: ${formData.revenueTrend} | Margin: ${formData.profitMargin}
- Recurring Revenue %: ${formData.recurringRevenuePct || 'unknown'}
- Revenue Tracking: ${formData.revenueTracking || 'unknown'}
- Sales Process: ${formData.salesProcess || 'unknown'}
- Referral System: ${formData.referralSystem || 'unknown'}
- Team: ${formData.teamSize} people | Hours/Week Owner Works: ${hoursWasted}
- % Time on High-Value Work: ${highValuePct} — the rest is waste
- % Operations Automated: ${automatedPct} — everything else is manual labor
- What Requires Owner's Daily Involvement: ${formData.dailyInvolvement || 'not answered'}
- Hours/Week on Support: ${formData.supportHoursPerWeek}
- Onboarding Automated: ${formData.onboardingAutomated}
- Can Owner Step Away 2 Weeks: ${formData.twoWeeksOff}
- Biggest Bottleneck: ${formData.bottleneck}
- Biggest Time Waste Owner Named: ${formData.biggestTimeWaste || 'not answered'}
- What Keeps Them Up at Night: ${formData.keepsUpAtNight || 'not answered'}
- CRM Status: ${formData.hasCrm || 'unknown'}
- Email Sequences: ${formData.emailSequences || 'unknown'}
- Lead Management: ${formData.leadManagement || 'unknown'}
- Lead Response Time: ${formData.leadResponseTime || 'unknown'}
- Follow-Up Process: ${formData.followUpProcess || 'unknown'}
- Customer Communication: ${formData.customerCommunication || 'unknown'}
- Tools in Use: ${formData.tools?.join(', ') || 'none listed'}
- Monthly Ad Spend: ${formData.monthlyAdSpend || 'unknown'}
- Churn Rate: ${formData.churnRate} | Conversion Rate: ${formData.conversionRate}
- Content Creation Hours/Week: ${formData.contentCreationHours}

BUYER CONTEXT (for framing severity):
- Pain Level: ${Array.isArray(formData.painLevel) ? formData.painLevel[0] : formData.painLevel}/10
- What Keeps Them Up: ${formData.keepsUpAtNight || 'not answered'}
- What's Holding Them Back: ${formData.holdingBack || 'not answered'}
- Monthly Ad Spend: ${formData.monthlyAdSpend || 'not answered'}
- Have They Tried to Fix This Before: ${formData.triedBefore || 'not answered'}
- Excitement to Fix It: ${formData.excitementLevel || 'not answered'}/10
- 12-Month Personal Goal: ${formData.next12MonthsGoal || 'not answered'}

DIAGNOSE exactly 3 specific operational problems. Frame each as a LEAK, WASTE, or GAP:
- LEAK: revenue, leads, or customers being lost right now
- WASTE: time or money being spent on things that should be automated or eliminated
- GAP: a system or process that should exist but doesn't

Be specific — use their numbers. Do NOT give solutions here, only diagnose the problem.

Respond with a JSON array of 3 strings (each under 140 chars). Start each with the type in brackets.
Example:
["[LEAK] Churn at 10-20% with no automated re-engagement — losing est. $40K+/year in revenue that never comes back", "[WASTE] Owner spending 10+ hrs/week on support that AI could resolve instantly — 40+ hrs/month of high-cost manual triage", "[GAP] No automated client onboarding — new customers dropped into silence, causing early churn"]

Return ONLY the JSON array.`
}

export function buildOpportunitiesPrompt(formData: any, websiteFindings: string[], operationalIssues: string[]): string {
  return `You are building a specific ROI case for a business owner based on a real audit of their business.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
REVENUE NOW: ${formData.currentRevenue} | GOAL: ${formData.revenueGoal}
CHURN: ${formData.churnRate} | CONVERSION: ${formData.conversionRate}
HOURS/WEEK: ${formData.hoursPerWeek} | HIGH-VALUE %: ${formData.highValueWork}
AUTOMATED %: ${formData.percentAutomated}
PAIN LEVEL: ${Array.isArray(formData.painLevel) ? formData.painLevel[0] : formData.painLevel}/10
WHAT KEEPS THEM UP: ${formData.keepsUpAtNight || 'not specified'}
SELF-REPORTED PROBLEMS: ${formData.problems?.join(', ') || 'none listed'}
HOLDING THEM BACK: ${formData.holdingBack || 'not specified'}
MONTHLY AD SPEND: ${formData.monthlyAdSpend || 'not specified'}
TRIED TO FIX BEFORE: ${formData.triedBefore || 'not specified'}
EXCITEMENT LEVEL: ${formData.excitementLevel || 'not specified'}/10
START TIMELINE: ${formData.startDate || 'not specified'}
BUDGET: ${formData.growthBudget || 'not specified'}
DECISION MAKER: ${formData.decisionMaker || 'not specified'}
12-MONTH PERSONAL GOAL: ${formData.next12MonthsGoal || 'not specified'}

GAPS/LEAKS/WASTE FOUND:
${websiteFindings.map((f, i) => `Website ${i+1}: ${f}`).join('\n')}
${operationalIssues.map((f, i) => `Ops ${i+1}: ${f}`).join('\n')}

Identify exactly 3 high-impact opportunities that directly fix the leaks/gaps/waste above. Each opportunity must:
1. Be tied to a SPECIFIC problem found in the audit
2. Include a REALISTIC dollar or time ROI estimate based on their actual numbers
3. Be something a business at their revenue level can actually implement

Do NOT be generic. "Workflow automation" is not an opportunity — "Automate manual client intake to eliminate 8 hrs/week of admin at $X/hr" IS.

Respond with a JSON array of 3 objects:
[{"opportunity": "string under 100 chars", "roi": "string under 70 chars"}]

Return ONLY the JSON array.`
}

export function buildReportPrompt(
  formData: any,
  websiteFindings: string[],
  operationalIssues: string[],
  opportunities: { opportunity: string; roi: string }[]
): string {
  return `You are scoring a business audit. Score each area HARSHLY and ACCURATELY — do not inflate scores to make people feel good. A business with manual processes, high churn, and an owner who can't step away should score LOW.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
REVENUE: ${formData.currentRevenue} | TREND: ${formData.revenueTrend} | MARGIN: ${formData.profitMargin}
AUTOMATION: ${formData.percentAutomated} | TOOLS: ${formData.tools?.join(', ') || 'none'}
CHURN: ${formData.churnRate} | CONVERSION: ${formData.conversionRate}
HOURS/WEEK: ${formData.hoursPerWeek} | HIGH-VALUE %: ${formData.highValueWork}
CAN STEP AWAY: ${formData.twoWeeksOff}
ONBOARDING AUTOMATED: ${formData.onboardingAutomated}
SUPPORT HOURS/WEEK: ${formData.supportHoursPerWeek}

GAPS FOUND ON WEBSITE: ${websiteFindings.join('; ')}
OPERATIONAL PROBLEMS: ${operationalIssues.join('; ')}
TOP OPPORTUNITIES: ${opportunities.map(o => `${o.opportunity} (${o.roi})`).join('; ')}

SCORING GUIDE:
- Revenue: 70+ = growing with good margins; 40-69 = flat or thin margins; <40 = declining or pre-revenue
- Automation: 70+ = 60%+ automated with integrated tools; 40-69 = partial; <40 = mostly manual
- Acquisition: 70+ = strong conversion + diverse traffic; 40-69 = average; <40 = poor conversion or single channel
- Retention: 70+ = <5% churn; 40-69 = 5-10% churn; <40 = 10%+ churn or unknown
- Time: 70+ = owner can step away freely; 40-69 = owner-dependent; <40 = completely owner-dependent, 40+ hrs/week

Provide scores and a one-line summary that names the SPECIFIC problem (not a generic statement).
{"revenue": {"score": N, "summary": "..."}, "automation": {"score": N, "summary": "..."}, "acquisition": {"score": N, "summary": "..."}, "retention": {"score": N, "summary": "..."}, "time": {"score": N, "summary": "..."}}

Return ONLY the JSON object.`
}

// ─── Sales Brief Prompt (Stage 5 — Internal Intel) ───────

export function buildSalesBriefPrompt(
  formData: any,
  websiteFindings: string[],
  operationalIssues: string[],
  opportunities: { opportunity: string; roi: string }[]
): string {
  return `You are a senior sales strategist preparing a pre-call brief for a consultative sales team. Based on this business audit data, generate actionable intel they need before the strategy session.

LEAD INFO:
- Name: ${formData.fullName || 'Unknown'} | Company: ${formData.companyName || 'Unknown'}
- Business Type: ${formData.businessType || 'unknown'} | Revenue: ${formData.currentRevenue}
- Website: ${formData.websiteUrl || 'not provided'}

BUYING SIGNALS:
- Pain Level: ${Array.isArray(formData.painLevel) ? formData.painLevel[0] : formData.painLevel}/10
- Excitement to Fix: ${formData.excitementLevel || 'not answered'}/10
- Start Timeline: ${formData.startDate || 'not answered'}
- Budget Range: ${formData.growthBudget || 'not answered'}
- Decision Maker: ${formData.decisionMaker || 'not answered'}
- What Keeps Them Up: ${formData.keepsUpAtNight || 'not answered'}
- What's Holding Them Back: ${formData.holdingBack || 'not answered'}
- Tried to Fix Before: ${formData.triedBefore || 'not answered'}
- Monthly Ad Spend: ${formData.monthlyAdSpend || 'not answered'}

OPERATIONAL PROFILE:
- Churn: ${formData.churnRate} | Conversion: ${formData.conversionRate}
- Hours/Week: ${formData.hoursPerWeek} | % Automated: ${formData.percentAutomated}
- Can Step Away: ${formData.twoWeeksOff} | Tools: ${formData.tools?.join(', ') || 'none listed'}
- CRM: ${formData.hasCrm || 'unknown'} | Email Sequences: ${formData.emailSequences || 'unknown'}
- Lead Management: ${formData.leadManagement || 'unknown'} | Response Time: ${formData.leadResponseTime || 'unknown'}
- Follow-Up Process: ${formData.followUpProcess || 'unknown'}
- Sales Process: ${formData.salesProcess || 'unknown'} | Referral System: ${formData.referralSystem || 'unknown'}
- Daily Owner Involvement: ${formData.dailyInvolvement || 'not answered'}
- Success Vision: ${formData.successVision || 'not answered'}
- Biggest Time Waste: ${formData.biggestTimeWaste || 'not answered'}
- Revenue Trend: ${formData.revenueTrend} | Profit Margin: ${formData.profitMargin}
- Recurring Revenue %: ${formData.recurringRevenuePct || 'unknown'}

AUDIT FINDINGS:
Website Problems: ${websiteFindings.join('; ')}
Operational Issues: ${operationalIssues.join('; ')}
Top Opportunities: ${opportunities.map(o => `${o.opportunity} (${o.roi})`).join('; ')}

Generate a concise sales brief. Be blunt — this is for the team, not the prospect.

Return ONLY this JSON object (no markdown):
{
  "buyerTemperature": "hot|warm|cold",
  "temperatureReason": "1 sentence — cite specific signals (pain + budget + timeline + decision authority)",
  "costOfInactionMonthly": <integer dollar amount — sum of churn loss + wasted labor cost per month>,
  "recommendedFirstProject": "specific project name in under 60 chars",
  "firstProjectReason": "why this is the highest-ROI first engagement for this specific person — 1-2 sentences",
  "objectionFlags": ["specific objection based on their data — quote the field that signals it", "second objection if applicable"],
  "openingAngles": ["lead-in #1 — specific stat or their own words to open with", "lead-in #2 — second angle"],
  "toolstackGaps": "1-2 sentences on what they have vs. what's missing — name actual tools"
}`
}

// ─── Parse helpers ───────────────────────────────────────

export function safeParseJSON<T>(text: string, fallback: T): T {
  try {
    // Strip markdown fences if present
    const cleaned = text.replace(/```(?:json)?\n?/g, '').replace(/\n?```/g, '').trim()
    return JSON.parse(cleaned)
  } catch {
    return fallback
  }
}
