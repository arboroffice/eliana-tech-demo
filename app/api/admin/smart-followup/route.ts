export const dynamic = 'force-dynamic'
export const maxDuration = 30

import { NextResponse } from 'next/server'
import { generateSmartFollowUp, suggestFollowUps } from '@/lib/followup-agent'
import { getAllVaults, appendTimelineByEmail } from '@/lib/client-vault'
import { Resend } from 'resend'
import { logEmailActivity } from '@/lib/email-service'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Mia-Eliana476'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const resend = new Resend(RESEND_API_KEY)

function verifyToken(authHeader: string | null): boolean {
    if (!authHeader?.startsWith('Bearer ')) return false
    try {
        const token = authHeader.split(' ')[1]
        const decoded = Buffer.from(token, 'base64').toString('utf-8')
        const [password] = decoded.split(':')
        return password === ADMIN_PASSWORD
    } catch {
        return false
    }
}

// GET: Suggest follow-ups for all stale clients
export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const vaults = await getAllVaults()
        const suggestions = await suggestFollowUps(vaults)
        return NextResponse.json({ success: true, suggestions })
    } catch (error: any) {
        console.error('[SMART FOLLOWUP ERROR]', error)
        return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }
}

// POST: Generate + optionally send a smart follow-up
export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { email, trigger, customNote, send } = await request.json()

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 })
        }

        // Generate the follow-up
        const result = await generateSmartFollowUp(email, trigger, customNote)

        // Preview only
        if (!send) {
            return NextResponse.json({
                success: true,
                preview: true,
                email: { subject: result.subject, body: result.body },
                strategy: result.strategy,
                tone: result.tone,
                state: {
                    temperature: result.state.temperature,
                    daysSinceLastContact: result.state.daysSinceLastContact,
                    emailCount: result.state.emailCount,
                    suggestedTrigger: result.state.suggestedTrigger,
                },
            })
        }

        // Send via Resend
        const htmlBody = result.body
            .split('\n\n')
            .map((p: string) => `<p style="margin:0 0 16px; font-size:16px; line-height:1.6;">${p.replace(/\n/g, '<br>')}</p>`)
            .join('')

        const emailHtml = `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#fff;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#000;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#fff;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;border:1px solid #000;">
<tr><td style="padding:40px;background:#000;"><h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;letter-spacing:-0.02em;text-transform:uppercase;">ELIANATECH</h1></td></tr>
<tr><td style="padding:40px;">${htmlBody}
<div style="margin:32px 0;"><a href="https://cal.com/elianatech/30min" style="display:inline-block;background:#000;color:#fff;padding:16px 32px;text-decoration:none;font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:0.05em;">Book Response Session</a></div>
</td></tr>
<tr><td style="padding:40px;border-top:1px solid #f4f4f5;"><p style="margin:0;color:#000;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">ElianaTech OS</p></td></tr>
</table>
</td></tr></table>
</body></html>`

        await resend.emails.send({
            from: 'Mia from Eliana <noreply@elianatech.com>',
            to: email,
            subject: result.subject,
            html: emailHtml,
            replyTo: 'elianatech@yahoo.com',
        })

        // Log
        await logEmailActivity(email, result.subject, `SMART_FOLLOWUP_${(trigger || result.state.suggestedTrigger).toUpperCase()}`)

        // Vault timeline (full content)
        const emailLog = `Email sent: "${result.subject}" (smart: ${trigger || result.state.suggestedTrigger})\nStrategy: ${result.strategy}\nTone: ${result.tone}\n---\n${result.body}`
        await appendTimelineByEmail(email, {
            timestamp: new Date().toISOString(),
            emoji: '🤖',
            text: emailLog,
        }).catch(console.error)

        return NextResponse.json({
            success: true,
            sent: true,
            email: { subject: result.subject, body: result.body },
            strategy: result.strategy,
            tone: result.tone,
            sentAt: new Date().toISOString(),
        })
    } catch (error: any) {
        console.error('[SMART FOLLOWUP ERROR]', error)
        return NextResponse.json({ success: false, error: error.message || 'Failed to generate follow-up' }, { status: 500 })
    }
}
