import { NextResponse } from 'next/server'
import { osService } from '@/lib/os-service'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const clientId = searchParams.get('clientId') || 'default-client'
  
  try {
    const missions = await osService.getMissions(clientId)
    return NextResponse.json(missions)
  } catch (error) {
    console.error('Error fetching missions:', error)
    return NextResponse.json({ error: 'Failed to fetch missions' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const missionId = await osService.createMission(body)
    
    // Auto-log the mission initialization
    await osService.logAgentActivity({
      level: 'INFO',
      message: `Mission '${body.title}' initialized. PM Agent assigned.`,
      clientId: body.clientId,
      missionId: missionId
    } as any)

    return NextResponse.json({ success: true, id: missionId })
  } catch (error) {
    console.error('Error creating mission:', error)
    return NextResponse.json({ error: 'Failed to create mission' }, { status: 500 })
  }
}
