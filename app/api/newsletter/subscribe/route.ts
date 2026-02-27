import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Subscribe via Substack API (no redirect, server-side)
    const substackRes = await fetch('https://miaelianaa.substack.com/api/v1/free?nojs=true', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        email,
        first_url: 'https://elianatech.com',
        first_referrer: 'https://elianatech.com',
        current_url: 'https://elianatech.com',
        current_referrer: 'https://elianatech.com',
      }).toString(),
    })

    // Substack returns various status codes — 200 or 302 both mean success
    if (!substackRes.ok && substackRes.status !== 302) {
      console.error('[NEWSLETTER] Substack returned status:', substackRes.status)
    }

    console.log(`[NEWSLETTER] Subscribed ${email} to newsletter`)

    return NextResponse.json({
      success: true,
      message: 'You\'re in! Check your inbox to confirm your subscription.',
    })
  } catch (error: any) {
    console.error('[NEWSLETTER ERROR]', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
