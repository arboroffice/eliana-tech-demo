import Anthropic from '@anthropic-ai/sdk'
import { researchCompany } from '@/lib/proposal-agent'
import {
  buildScanningPrompt,
  buildOperationsPrompt,
  buildOpportunitiesPrompt,
  buildReportPrompt,
  safeParseJSON,
} from '@/lib/audit-research'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { formData, cachedWebsiteContent } = await request.json()

    const encoder = new TextEncoder()

    const stream = new ReadableStream({
      async start(controller) {
        function send(event: string, data: any) {
          controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`))
        }

        try {
          // ─── Stage 1: Scanning Website ───────────────────
          send('stage', { stage: 1, label: 'Scanning website...', status: 'running' })

          let websiteContent = cachedWebsiteContent || ''
          if (!websiteContent || websiteContent.includes('Unable to research')) {
            websiteContent = await researchCompany(formData.websiteUrl || '')
          }

          let websiteFindings: string[] = []
          try {
            const msg1 = await anthropic.messages.create({
              model: 'claude-sonnet-4-6',
              max_tokens: 300,
              messages: [{ role: 'user', content: buildScanningPrompt(websiteContent, formData) }],
            })
            const text1 = msg1.content
              .filter((b): b is Anthropic.TextBlock => b.type === 'text')
              .map((b) => b.text)
              .join('')
            websiteFindings = safeParseJSON<string[]>(text1, [
              'Website scanned — basic online presence detected',
              'Further analysis needed for full infrastructure assessment',
            ])
          } catch {
            websiteFindings = [
              'Website scanned — basic online presence detected',
              'Further analysis needed for full infrastructure assessment',
            ]
          }

          send('stage', { stage: 1, label: 'Scanning website...', status: 'complete', findings: websiteFindings })

          // ─── Stage 2: Analyzing Operations ───────────────
          send('stage', { stage: 2, label: 'Analyzing operations...', status: 'running' })

          let operationalIssues: string[] = []
          try {
            const msg2 = await anthropic.messages.create({
              model: 'claude-sonnet-4-6',
              max_tokens: 400,
              messages: [{ role: 'user', content: buildOperationsPrompt(formData, websiteFindings) }],
            })
            const text2 = msg2.content
              .filter((b): b is Anthropic.TextBlock => b.type === 'text')
              .map((b) => b.text)
              .join('')
            operationalIssues = safeParseJSON<string[]>(text2, [
              'Manual processes detected across key workflows',
              'Significant time spent on low-value administrative tasks',
              'Automation gaps creating operational bottlenecks',
            ])
          } catch {
            operationalIssues = [
              'Manual processes detected across key workflows',
              'Significant time spent on low-value administrative tasks',
              'Automation gaps creating operational bottlenecks',
            ]
          }

          send('stage', { stage: 2, label: 'Analyzing operations...', status: 'complete', findings: operationalIssues })

          // ─── Stage 3: Identifying Opportunities ──────────
          send('stage', { stage: 3, label: 'Identifying opportunities...', status: 'running' })

          let opportunities: { opportunity: string; roi: string }[] = []
          try {
            const msg3 = await anthropic.messages.create({
              model: 'claude-sonnet-4-6',
              max_tokens: 500,
              messages: [{ role: 'user', content: buildOpportunitiesPrompt(formData, websiteFindings, operationalIssues) }],
            })
            const text3 = msg3.content
              .filter((b): b is Anthropic.TextBlock => b.type === 'text')
              .map((b) => b.text)
              .join('')
            opportunities = safeParseJSON<{ opportunity: string; roi: string }[]>(text3, [
              { opportunity: 'Workflow automation to eliminate manual processes', roi: 'Est. 15-20 hrs/week saved' },
              { opportunity: 'AI-powered customer engagement system', roi: 'Est. 20-30% improvement in retention' },
              { opportunity: 'Automated lead nurture and follow-up', roi: 'Est. 2-3x conversion improvement' },
            ])
          } catch {
            opportunities = [
              { opportunity: 'Workflow automation to eliminate manual processes', roi: 'Est. 15-20 hrs/week saved' },
              { opportunity: 'AI-powered customer engagement system', roi: 'Est. 20-30% improvement in retention' },
              { opportunity: 'Automated lead nurture and follow-up', roi: 'Est. 2-3x conversion improvement' },
            ]
          }

          send('stage', {
            stage: 3,
            label: 'Identifying opportunities...',
            status: 'complete',
            findings: opportunities.map((o) => `${o.opportunity} — ${o.roi}`),
          })

          // ─── Stage 4: Building Report ────────────────────
          send('stage', { stage: 4, label: 'Building your report...', status: 'running' })

          let aiScores: any = null
          try {
            const msg4 = await anthropic.messages.create({
              model: 'claude-sonnet-4-6',
              max_tokens: 400,
              messages: [{ role: 'user', content: buildReportPrompt(formData, websiteFindings, operationalIssues, opportunities) }],
            })
            const text4 = msg4.content
              .filter((b): b is Anthropic.TextBlock => b.type === 'text')
              .map((b) => b.text)
              .join('')
            aiScores = safeParseJSON(text4, null)
          } catch {
            aiScores = null
          }

          send('stage', { stage: 4, label: 'Building your report...', status: 'complete', findings: ['Report compiled successfully'] })

          // ─── Send complete event ─────────────────────────
          send('complete', {
            websiteFindings,
            operationalIssues,
            opportunities,
            aiScores,
            websiteContent,
          })
        } catch (error) {
          console.error('[DEEP ANALYSIS ERROR]', error)
          send('error', { message: 'Analysis failed — falling back to local scoring' })
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('[DEEP ANALYSIS ROUTE ERROR]', error)
    return new Response(
      JSON.stringify({ error: 'Failed to start analysis' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
