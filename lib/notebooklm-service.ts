/**
 * NotebookLM API Service
 *
 * Uses Google service account authentication — no browser login needed.
 * Creates notebooks, adds sources, and generates audio overviews per audit.
 *
 * Required env vars:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL  — service account email
 *   GOOGLE_SERVICE_ACCOUNT_KEY    — private key (PEM format, newlines as \n)
 *   GOOGLE_NOTEBOOKLM_PROJECT_ID  — Google Cloud project ID
 */

import { google } from 'googleapis'

const NOTEBOOKLM_API_BASE = 'https://notebooklm.googleapis.com/v1alpha1'

// ─── Auth ────────────────────────────────────────────────────

async function getAuthToken(): Promise<string> {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: (process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '').replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/notebooklm'],
  })

  const client = await auth.getClient()
  const tokenResponse = await client.getAccessToken()
  if (!tokenResponse.token) throw new Error('Failed to get Google access token')
  return tokenResponse.token
}

async function apiRequest(
  method: 'GET' | 'POST' | 'PATCH',
  path: string,
  body?: any
) {
  const token = await getAuthToken()
  const url = `${NOTEBOOKLM_API_BASE}${path}`

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!res.ok) {
    const errorText = await res.text()
    throw new Error(`NotebookLM API error (${res.status}): ${errorText}`)
  }

  return res.json()
}

// ─── Notebook Operations ─────────────────────────────────────

export interface NotebookResult {
  notebookId: string
  notebookUrl: string
  audioOverviewUrl?: string
}

/**
 * Creates a new notebook, adds the research brief + website source,
 * and kicks off audio overview generation.
 */
export async function createAuditNotebook(auditData: {
  companyName: string
  fullName: string
  websiteUrl?: string
  researchBrief: string
}): Promise<NotebookResult> {
  const { companyName, fullName, websiteUrl, researchBrief } = auditData

  // 1. Create notebook
  const notebook = await apiRequest('POST', '/notebooks', {
    displayName: `Audit: ${companyName} — ${fullName}`,
  })

  const notebookId = notebook.name?.split('/').pop() || notebook.notebookId

  // 2. Add research brief as text source
  await apiRequest('POST', `/notebooks/${notebookId}/sources`, {
    type: 'TEXT',
    displayName: `Research Brief: ${companyName}`,
    content: researchBrief,
  })

  // 3. Add website source if provided
  if (websiteUrl && websiteUrl.startsWith('http')) {
    try {
      await apiRequest('POST', `/notebooks/${notebookId}/sources`, {
        type: 'WEBSITE',
        displayName: `Website: ${companyName}`,
        url: websiteUrl,
      })
    } catch (e: any) {
      console.warn(`[NotebookLM] Could not add website source: ${e.message}`)
    }
  }

  // 4. Generate audio overview
  let audioOverviewUrl: string | undefined
  try {
    const audioResult = await apiRequest(
      'POST',
      `/notebooks/${notebookId}/audioOverview:generate`,
      {}
    )
    audioOverviewUrl = audioResult.audioUrl || audioResult.uri
  } catch (e: any) {
    console.warn(`[NotebookLM] Audio overview generation failed: ${e.message}`)
  }

  const notebookUrl = `https://notebooklm.google.com/notebook/${notebookId}`

  return {
    notebookId,
    notebookUrl,
    audioOverviewUrl,
  }
}

/**
 * Build the research brief content that gets added to the notebook.
 * This is what NotebookLM uses to generate the audio overview.
 */
export function buildNotebookBrief(auditData: any, scores: any, pricing: any): string {
  return `# Discovery Brief: ${auditData.companyName}

## About This Brief
This is a personalized analysis prepared by Eliana Tech for ${auditData.fullName} at ${auditData.companyName}.
The purpose of this notebook is to provide a clear picture of where the business stands today,
what Eliana Tech can build, and the exact next steps to get started.

## Current State — Where ${auditData.companyName} Stands

### Audit Score: ${scores.overall}/100
- Revenue Health: ${scores.revenue}/100
- Automation Maturity: ${scores.automation}/100
- Acquisition Engine: ${scores.acquisition}/100
- Retention System: ${scores.retention}/100
- Time Freedom: ${scores.time}/100

### The Core Problem
${auditData.fullName} is spending ${auditData.hoursPerWeek || '20+'} hours per week on manual operations.
The biggest bottleneck is: ${auditData.bottleneck || 'unclear operational flow'}.
What keeps them up at night: "${auditData.keepsUpAtNight || 'Growing the business without burning out'}".

### Current Tools & Stack
${auditData.tools?.length ? auditData.tools.map((t: string) => `- ${t}`).join('\n') : '- No specific tools mentioned'}

These tools are disconnected — requiring manual "glue work" to function together.

### Key Metrics
- Team Size: ${auditData.teamSize || 'Solo/Small'}
- Current Revenue: ${auditData.currentRevenue || 'Not disclosed'}
- Revenue Goal: ${auditData.revenueGoal || 'Growth'}
- Customer/List Size: ${auditData.listSize || 'Building'}
- Conversion Rate: ${auditData.conversionRate || 'Unknown'}
- Churn Rate: ${auditData.churnRate || 'Unknown'}
- Automation Level: ${auditData.percentAutomated || 'Minimal'}
- Pain Level: ${auditData.painLevel || '?'}/10

## What Eliana Tech Can Do — The Solution

### Recommended System: ${pricing.tierLabel}
Investment: ${pricing.priceRange}
Timeline: ${pricing.timeline}

We don't sell software. We install an AI-Native Operating System that replaces the manual
decision-making and repetitive tasks that are currently eating ${auditData.hoursPerWeek || '20+'} hours every week.

### What Gets Automated
1. **${auditData.bottleneck || 'Primary Bottleneck'}** — The #1 thing draining time and revenue gets automated first
2. **Customer Communication & Follow-Up** — No more leads going cold because nobody texted back fast enough
3. **Operational Workflows** — Onboarding, reporting, scheduling, and internal handoffs run on autopilot
4. **Data & Intelligence** — Real-time dashboards replace guesswork and spreadsheet archaeology

### The 90-Day Transformation
- Month 1: Core system architecture + primary automation deployed
- Month 2: Integration with existing tools + team training
- Month 3: Optimization, edge cases handled, full autonomy

After 90 days, the ${auditData.hoursPerWeek || '20+'} hours of manual work per week are gone.
The team of ${auditData.teamSize || 'a few'} is doing 10x more.
The "${auditData.revenueGoal || 'growth goal'}" becomes a structural inevitability, not a wish.

## Next Steps — How to Get Started

### How Eliana Tech Works (We Don't Do Sales Calls)
1. **You've already completed Step 1** — the audit. We now know exactly where you stand.
2. **Step 2: Secure your build slot** — Pay a $5,000 deposit to lock in your project. This is applied toward your total investment.
3. **Step 3: Discovery Call** — Once the deposit is received, we schedule a focused discovery session. This is NOT a sales pitch — it's a deep-dive into your systems to architect the exact solution.
4. **If we're not a fit, you get a same-day refund.** No questions, no runaround. If during discovery we determine we can't deliver the results, your $5,000 is returned that same day.

### Why a Deposit First?
We only take on builds we can win. The deposit ensures both sides are serious.
It filters for business owners who are ready to move — not "just exploring."
And because we refund same-day if it's not a fit, there is zero risk.

### The Bottom Line
${auditData.companyName} is leaving significant revenue on the table due to infrastructure debt.
Every week without a system is another ${auditData.hoursPerWeek || '20+'} hours of manual labor
and missed opportunities. The audit score of ${scores.overall}/100 confirms it.

The fix is not "more tools." It's an operating system.

**Pay the $5,000 deposit → Discovery Call → Build begins (or same-day refund).**

Book your slot: https://cal.com/elianatech/discovery
`
}
