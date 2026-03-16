import { NextResponse } from 'next/server'
import { createAuditNotebook, buildNotebookBrief } from '@/lib/notebooklm-service'
import { calculateSubScores, runPricingEngine } from '@/lib/pricing-engine'

export const maxDuration = 60 // Notebook creation + audio gen can take a while

export async function POST(request: Request) {
  try {
    const formData = await request.json()

    if (!formData || !formData.companyName) {
      return NextResponse.json(
        { success: false, error: 'Missing company data' },
        { status: 400 }
      )
    }

    // Build the research brief from audit data
    const scores = calculateSubScores(formData)
    const pricing = runPricingEngine(formData)
    const researchBrief = buildNotebookBrief(formData, scores, pricing)

    // Create the notebook via API
    const result = await createAuditNotebook({
      companyName: formData.companyName,
      fullName: formData.fullName || 'Prospect',
      websiteUrl: formData.websiteUrl,
      researchBrief,
    })

    return NextResponse.json({
      success: true,
      notebookId: result.notebookId,
      notebookUrl: result.notebookUrl,
      audioOverviewUrl: result.audioOverviewUrl,
    })
  } catch (error: any) {
    console.error('[NOTEBOOK API ERROR]', error)
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create notebook' },
      { status: 500 }
    )
  }
}
