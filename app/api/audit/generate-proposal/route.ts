import { NextResponse } from 'next/server'
import { generateAIProposal } from '@/lib/proposal-agent'

export const maxDuration = 30 // Allow up to 30s for research + Claude generation

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    if (!formData || !formData.businessType) {
      return NextResponse.json(
        { success: false, error: 'Invalid form data' },
        { status: 400 }
      )
    }

    const { proposal, pricing, scores } = await generateAIProposal(formData)

    return NextResponse.json({
      success: true,
      proposal,
      pricing: {
        qualified: pricing.qualified,
        tier: pricing.tier,
        tierLabel: pricing.tierLabel,
        finalPrice: pricing.finalPrice,
        priceRange: pricing.priceRange,
        timeline: pricing.timeline,
        intentLevel: pricing.intentLevel,
      },
      scores: {
        revenue: scores.revenue,
        automation: scores.automation,
        acquisition: scores.acquisition,
        retention: scores.retention,
        time: scores.time,
        overall: scores.overall,
      },
    })
  } catch (error: any) {
    console.error('[PROPOSAL AGENT ERROR]', error)
    return NextResponse.json(
      { success: false, error: 'Failed to generate proposal' },
      { status: 500 }
    )
  }
}
