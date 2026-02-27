/**
 * Eliana Tech — AI Proposal Agent
 *
 * 1. Researches the prospect's company (fetches their website)
 * 2. Runs the 6-step pricing engine
 * 3. Sends everything to Claude to generate a personalized proposal
 * 4. Returns markdown proposal
 */

import Anthropic from '@anthropic-ai/sdk'
import { runPricingEngine, calculateSubScores, getRevenueNumbers, type PricingResult, type AuditScores } from './pricing-engine'
import { getBusinessCategory } from './audit-industry-config'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// ─── Company Research ──────────────────────────────────────

async function researchCompany(websiteUrl: string): Promise<string> {
  if (!websiteUrl || websiteUrl.length < 5) {
    return 'No website provided. Unable to research company online presence.'
  }

  try {
    // Normalize URL
    let url = websiteUrl.trim()
    if (!url.startsWith('http')) url = 'https://' + url

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 8000)

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ElianaTechAudit/1.0)',
        'Accept': 'text/html',
      },
    })
    clearTimeout(timeout)

    if (!response.ok) {
      return `Website returned status ${response.status}. Limited research available.`
    }

    const html = await response.text()

    // Extract useful text content (strip tags, scripts, styles)
    const cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<nav[\s\S]*?<\/nav>/gi, '')
      .replace(/<footer[\s\S]*?<\/footer>/gi, '')
      .replace(/<header[\s\S]*?<\/header>/gi, '[HEADER] ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#\d+;/g, '')
      .trim()

    // Extract meta description
    const metaMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i)
    const metaDesc = metaMatch ? metaMatch[1] : ''

    // Extract title
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
    const title = titleMatch ? titleMatch[1].trim() : ''

    // Get first 3000 chars of content (enough for Claude to understand the business)
    const contentPreview = cleaned.slice(0, 3000)

    return [
      `WEBSITE TITLE: ${title}`,
      metaDesc ? `META DESCRIPTION: ${metaDesc}` : '',
      `WEBSITE CONTENT:\n${contentPreview}`,
    ].filter(Boolean).join('\n\n')
  } catch (error: any) {
    if (error.name === 'AbortError') {
      return 'Website took too long to respond. Limited research available.'
    }
    return `Could not fetch website (${error.message}). Generating proposal from audit data only.`
  }
}

// ─── System Prompt ──────────────────────────────────────────

function buildSystemPrompt(): string {
  return `You are the Eliana Tech Proposal Agent. You write personalized growth proposals for business owners who just completed our Business Automation Audit.

YOUR ROLE:
- You are writing as Mia Louviere, founder of Eliana Tech
- You are direct, confident, and data-driven
- You reference SPECIFIC numbers from their audit and company research
- You write proposals that close — clear problems, clear solutions, clear ROI, clear next steps
- You speak the language of their industry vertical (online, local, professional, or product)

TONE:
- Professional but not corporate. Think "smart friend who happens to be a systems architect."
- Never use filler phrases like "In today's fast-paced world..." or "As a business owner..."
- Lead with their pain. Name the specific thing that's broken. Quantify the cost.
- Be specific — use their actual numbers, tools, and business context

PRICING RULES (CRITICAL):
- Our minimum is $7,500. NEVER propose anything under $7,500.
- Multi-System Build: $7,500 – $15,000
- Full Build: $15,000 – $40,000
- AI-Native Ops: $40,000+
- Present the recommended tier first, then briefly mention the next tier up as an option
- Always show ROI math — they should see their investment pays for itself in 2-4 months

PROPOSAL STRUCTURE:
1. Executive Summary (personal, reference what keeps them up at night)
2. Critical Findings (from audit scores — what's broken, what it costs them)
3. Where You Stand (scores vs industry benchmarks)
4. Recommended Solution (tier, specific systems, what each one does for THEIR business)
5. Implementation Roadmap (phased timeline)
6. ROI Projection (specific dollar math from their data)
7. Investment & Next Steps (price, payment options, CTA)

FORMAT:
- Output clean markdown
- Use ## for major sections, ### for subsections
- Use tables where they add clarity
- Use **bold** for key numbers and findings
- Keep it under 2500 words — long enough to be thorough, short enough to actually read`
}

// ─── Build the prompt with all context ──────────────────────

function buildUserPrompt(
  formData: any,
  scores: AuditScores,
  pricing: PricingResult,
  revenue: ReturnType<typeof getRevenueNumbers>,
  companyResearch: string
): string {
  const cat = getBusinessCategory(formData.businessType || '')

  const verticalNames: Record<string, string> = {
    online: 'Online Business',
    local: 'Local Service Business',
    professional: 'Professional Services',
    product: 'Product / E-commerce Business',
  }

  return `Generate a personalized growth proposal for this client. Use ALL of the data below.

═══ CLIENT INFO ═══
Name: ${formData.fullName || 'Client'}
Company: ${formData.companyName || 'Their Business'}
Email: ${formData.email || ''}
Phone: ${formData.phoneNumber || ''}
Website: ${formData.websiteUrl || 'Not provided'}
Business Type: ${formData.businessType} (${verticalNames[cat] || 'Business'})
Vertical: ${cat}

═══ COMPANY RESEARCH ═══
${companyResearch}

═══ AUDIT SCORES ═══
Revenue: ${scores.revenue}/100
Automation: ${scores.automation}/100
Acquisition: ${scores.acquisition}/100
Retention: ${scores.retention}/100
Time: ${scores.time}/100
OVERALL: ${scores.overall}/100

═══ KEY FORM ANSWERS ═══
Product/Service Description: ${formData.productDescription || 'Not provided'}
Primary Price Point: ${formData.productPricePoint}
Number of Products/Services: ${formData.numberOfProducts}
Platform: ${formData.platform}
Delivery Method: ${formData.deliveryMethod}
Current Revenue: ${formData.currentRevenue}
Revenue Trend: ${formData.revenueTrend}
Profit Margin: ${formData.profitMargin}
12-Month Goal: ${formData.revenueGoal}
Biggest Bottleneck: ${formData.bottleneck}
Team Size: ${formData.teamSize}
List/Customer Size: ${formData.listSize}
Traffic Source: ${formData.trafficSource}
Conversion Rate: ${formData.conversionRate}
Churn Rate: ${formData.churnRate}
Hours/Week: ${formData.hoursPerWeek}
% High-Value Work: ${formData.highValueWork}
Support Hours/Week: ${formData.supportHoursPerWeek}
Onboarding Automated: ${formData.onboardingAutomated}
Can Take 2 Weeks Off: ${formData.twoWeeksOff}
Pain Level: ${Array.isArray(formData.painLevel) ? formData.painLevel[0] : formData.painLevel}/10
What Keeps Them Up at Night: ${formData.keepsUpAtNight || 'Not specified'}
Tools Used: ${formData.tools?.join(', ') || 'None listed'}
% Automated: ${formData.percentAutomated}
Biggest Time Waste: ${formData.biggestTimeWaste || 'Not specified'}
#1 Goal (12 months): ${formData.next12MonthsGoal || 'Not specified'}
Problems: ${formData.problems?.join(', ') || 'None listed'}
Excitement Level: ${formData.excitementLevel}
Timeline: ${formData.startDate}
Budget Comfort: ${formData.growthBudget}
Decision Maker: ${formData.decisionMaker}

═══ PRICING ENGINE OUTPUT ═══
Recommended Tier: ${pricing.tierLabel}
Final Price: $${pricing.finalPrice.toLocaleString()}
Price Range: ${pricing.priceRange}
Timeline: ${pricing.timeline}
Intent Level: ${pricing.intentLevel.toUpperCase()}
${pricing.overrides.length > 0 ? `Overrides Applied: ${pricing.overrides.join('; ')}` : ''}
${pricing.complexityAddOns.length > 0 ? `Complexity Add-Ons: ${pricing.complexityAddOns.map(a => `${a.reason} (+$${a.amount.toLocaleString()})`).join('; ')}` : ''}
ROI Ceiling: $${pricing.roiCeiling.toLocaleString()}
Reasoning: ${pricing.reasoning.join(' ')}

═══ REVENUE MATH ═══
Estimated Current Revenue: $${revenue.currentRevenue.toLocaleString()}/year
Average Customer Value: $${revenue.avgPrice.toLocaleString()}
Customer/List Size: ${revenue.listSize.toLocaleString()}
Churn Rate: ${(revenue.churnPct * 100).toFixed(0)}%
Annual Churn Loss: $${revenue.annualChurnLoss.toLocaleString()}/year
Support Hours/Week: ${revenue.supportHrs}
Monthly Support Cost: $${revenue.supportCostMonthly.toLocaleString()}/month

═══ INSTRUCTIONS ═══
1. Write the proposal in markdown format
2. Use their ACTUAL company name, their ACTUAL numbers, their ACTUAL pain points
3. If you found relevant info from their website research, weave it naturally into the proposal (reference their actual products, services, brand, etc.)
4. The recommended tier is ${pricing.tierLabel} at $${pricing.finalPrice.toLocaleString()}
5. Show specific ROI math: what they're losing now vs. what they save after implementation
6. End with clear next steps and a CTA to book a call at cal.com/mia-louviere-a4n2hk/30min
7. Make it feel like this proposal was hand-written for them — because it essentially was, using their data
8. Payment options: Pay in full (5-10% off), 2 payments (50/50), or 3 monthly payments`
}

// ─── Main Agent Function ────────────────────────────────────

export async function generateAIProposal(formData: any): Promise<{
  proposal: string
  pricing: PricingResult
  scores: AuditScores
}> {
  // Step 1: Calculate scores
  const scores = calculateSubScores(formData)

  // Step 2: Run pricing engine
  const pricing = runPricingEngine(formData)

  // Step 3: Research company
  const companyResearch = await researchCompany(formData.websiteUrl || '')

  // Step 4: Get revenue numbers
  const revenue = getRevenueNumbers(formData)

  // Step 5: Generate proposal with Claude
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4000,
    messages: [
      {
        role: 'user',
        content: buildUserPrompt(formData, scores, pricing, revenue, companyResearch),
      },
    ],
    system: buildSystemPrompt(),
  })

  // Extract text from response
  const proposal = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map(block => block.text)
    .join('\n')

  return { proposal, pricing, scores }
}
