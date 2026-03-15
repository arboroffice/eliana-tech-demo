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

// ─── Background Research Prompt (Step 0) ─────────────────

export function buildBackgroundResearchPrompt(websiteContent: string): string {
  return `You are analyzing a business website for a Business Automation Audit. Based on the website content below, generate 3-5 specific insights about this business that would be relevant for an automation/AI systems consultant.

Focus on:
- What the business sells and to whom
- What tech stack or platform they appear to use (Shopify, WordPress, etc.)
- Obvious automation gaps (no chatbot, manual booking, no email capture, etc.)
- Competitive positioning signals
- Scale indicators (team size, multiple locations, product count)

WEBSITE CONTENT:
${websiteContent}

Respond with a JSON array of objects, each with:
- "type": one of "discovery", "warning", or "opportunity"
- "message": a short, specific insight (1 sentence, under 120 chars)
- "icon": a single relevant emoji

Example format:
[
  {"type": "discovery", "message": "Detected Shopify store with 50+ products but no post-purchase email sequence", "icon": "🛍️"},
  {"type": "warning", "message": "No visible chatbot or live support — leads likely dropping after hours", "icon": "⚠️"}
]

Return ONLY the JSON array, no markdown fences or other text.`
}

// ─── Deep Analysis Prompts (Post-Submit) ─────────────────

export function buildScanningPrompt(websiteContent: string, formData: any): string {
  return `You are conducting a website scan for a business automation audit.

WEBSITE CONTENT:
${websiteContent}

BUSINESS TYPE: ${formData.businessType || 'unknown'}
COMPANY: ${formData.companyName || 'Unknown'}

Analyze their website and identify 2-3 specific findings about their online presence, tech stack, and digital infrastructure. Be specific — reference actual things you see on their site.

Respond with a JSON array of 2-3 short strings (each under 100 chars). Example:
["Built on WordPress with WooCommerce — no marketing automation detected", "Contact form only, no live chat or booking system"]

Return ONLY the JSON array.`
}

export function buildOperationsPrompt(formData: any, websiteFindings: string[]): string {
  return `You are analyzing business operations for an automation audit.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
WEBSITE FINDINGS: ${websiteFindings.join('; ')}

KEY DATA:
- Revenue: ${formData.currentRevenue}, Trend: ${formData.revenueTrend}
- Team Size: ${formData.teamSize}
- Hours/Week: ${formData.hoursPerWeek}, High-Value Work: ${formData.highValueWork}
- Support Hours: ${formData.supportHoursPerWeek}/week
- Automation Level: ${formData.percentAutomated}
- Onboarding Automated: ${formData.onboardingAutomated}
- Can Take 2 Weeks Off: ${formData.twoWeeksOff}
- Biggest Bottleneck: ${formData.bottleneck}
- Biggest Time Waste: ${formData.biggestTimeWaste || 'Not specified'}
- Tools: ${formData.tools?.join(', ') || 'None listed'}

Identify exactly 3 specific operational issues this business has, based on their data. Be specific and quantify where possible.

Respond with a JSON array of 3 short strings (each under 120 chars). Example:
["Spending 10+ hrs/week on manual support that AI could handle 80% of", "No automated onboarding — likely losing 30% of new customers in first 30 days"]

Return ONLY the JSON array.`
}

export function buildOpportunitiesPrompt(formData: any, websiteFindings: string[], operationalIssues: string[]): string {
  return `You are identifying automation opportunities for a business.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
REVENUE: ${formData.currentRevenue}, GOAL: ${formData.revenueGoal}
CHURN RATE: ${formData.churnRate}
CONVERSION RATE: ${formData.conversionRate}
PAIN LEVEL: ${Array.isArray(formData.painLevel) ? formData.painLevel[0] : formData.painLevel}/10
KEEPS THEM UP: ${formData.keepsUpAtNight || 'Not specified'}
PROBLEMS: ${formData.problems?.join(', ') || 'None listed'}

WEBSITE FINDINGS: ${websiteFindings.join('; ')}
OPERATIONAL ISSUES: ${operationalIssues.join('; ')}

Identify exactly 3 specific automation/AI opportunities with estimated ROI. Match findings to solutions they would actually benefit from.

Respond with a JSON array of 3 objects:
[{"opportunity": "string under 80 chars", "roi": "string under 60 chars"}]

Example:
[{"opportunity": "Automated post-purchase email sequence with AI personalization", "roi": "Est. +$24K/year from repeat purchases"}]

Return ONLY the JSON array.`
}

export function buildReportPrompt(
  formData: any,
  websiteFindings: string[],
  operationalIssues: string[],
  opportunities: { opportunity: string; roi: string }[]
): string {
  return `Compile a brief summary score assessment for this business audit.

BUSINESS: ${formData.companyName || 'Unknown'} (${formData.businessType || 'unknown'})
REVENUE: ${formData.currentRevenue}, TREND: ${formData.revenueTrend}
AUTOMATION: ${formData.percentAutomated}
CHURN: ${formData.churnRate}
CONVERSION: ${formData.conversionRate}
HOURS/WEEK: ${formData.hoursPerWeek}
CAN STEP AWAY: ${formData.twoWeeksOff}

WEBSITE FINDINGS: ${websiteFindings.join('; ')}
OPERATIONAL ISSUES: ${operationalIssues.join('; ')}
OPPORTUNITIES: ${opportunities.map(o => `${o.opportunity} (${o.roi})`).join('; ')}

Provide a JSON object with these scores (0-100) and a one-line summary for each:
{"revenue": {"score": N, "summary": "..."}, "automation": {"score": N, "summary": "..."}, "acquisition": {"score": N, "summary": "..."}, "retention": {"score": N, "summary": "..."}, "time": {"score": N, "summary": "..."}}

Base scores on the data provided. Be accurate — don't inflate. Return ONLY the JSON object.`
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
