import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { researchCompany } from '@/lib/proposal-agent'
import {
  buildBackgroundResearchPrompt,
  safeParseJSON,
  type ResearchInsight,
} from '@/lib/audit-research'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { websiteUrl } = await request.json()

    if (!websiteUrl || websiteUrl.length < 5) {
      return NextResponse.json({ success: false, insights: [], websiteContent: '' })
    }

    // Scrape the website (reuse existing function)
    const websiteContent = await researchCompany(websiteUrl)

    // If scraping failed or returned a fallback message, return empty insights
    if (
      websiteContent.includes('Unable to research') ||
      websiteContent.includes('took too long') ||
      websiteContent.includes('Could not fetch')
    ) {
      return NextResponse.json({
        success: false,
        insights: [],
        websiteContent,
      })
    }

    // Send to Claude for quick analysis
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 500,
      messages: [
        {
          role: 'user',
          content: buildBackgroundResearchPrompt(websiteContent),
        },
      ],
    })

    const responseText = message.content
      .filter((block): block is Anthropic.TextBlock => block.type === 'text')
      .map((block) => block.text)
      .join('')

    const insights = safeParseJSON<ResearchInsight[]>(responseText, [])

    return NextResponse.json({
      success: true,
      insights,
      websiteContent,
    })
  } catch (error) {
    console.error('[AUDIT RESEARCH ERROR]', error)
    return NextResponse.json({
      success: false,
      insights: [],
      websiteContent: '',
    })
  }
}
