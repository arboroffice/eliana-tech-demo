import { NextResponse } from 'next/server'
import { osService } from '@/lib/os-service'

export async function GET() {
  try {
    const logs = await osService.getRecentLogs(20)
    return NextResponse.json(logs)
  } catch (error) {
    console.error('Error fetching agent feed:', error)
    return NextResponse.json({ error: 'Failed to fetch agent feed' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const logId = await osService.logAgentActivity(body)
    return NextResponse.json({ success: true, id: logId })
  } catch (error) {
    console.error('Error logging agent activity:', error)
    return NextResponse.json({ error: 'Failed to log agent activity' }, { status: 500 })
  }
}
