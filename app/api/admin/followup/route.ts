import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { twilioClient, TWILIO_PHONE, formatPhoneNumber } from '@/lib/sms-service'
import { Resend } from 'resend'
import { logEmailActivity } from '@/lib/email-service'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Mia-Eliana476'
const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const resend = new Resend(RESEND_API_KEY)
const CAL_LINK = 'https://cal.com/elianatech/30min'

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

// Generate a personalized follow-up email using Claude
async function generateFollowUpEmail(lead: any, emailType: string, customContext?: string): Promise<{ subject: string; body: string }> {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    const firstName = (lead.fullName || '').split(' ')[0] || 'there'
    const painPoints = [
        lead.keepsUpAtNight,
        lead.bottleneck,
        lead.holdingBack,
    ].filter(Boolean)

    const tools = (lead.tools || []).join(', ') || 'unknown'
    const problems = (lead.problems || []).join(', ') || 'unknown'
    const opportunities = (lead.opportunities || []).map((o: any) => `${o.title} (${o.impact} impact): ${o.description}`).join('\n')

    const emailTypeInstructions: Record<string, string> = {
        'warm-nudge': `Write a warm, casual follow-up. Reference something specific from their audit. Keep it short (3-4 sentences). End with a soft CTA to book a call. Tone: friendly, not salesy.`,
        'value-drop': `Share a specific insight or quick win based on their audit data. Give them something actionable they can implement TODAY. Then mention you have more ideas if they want to hop on a call. Tone: generous, expert.`,
        'pain-agitate': `Acknowledge the specific pain point they mentioned. Paint a picture of what it costs them to NOT fix it (lost revenue, wasted hours). Then offer the solution. Tone: empathetic but direct.`,
        'case-study': `Reference a success story relevant to their industry/situation. Show specific before/after numbers. Connect it to their situation. Tone: proof-driven, inspiring.`,
        'breakup': `This is the final follow-up. Be honest and transparent — "I don't want to keep emailing if it's not helpful." Give them an easy out but also make the CTA clear. Tone: respectful, genuine.`,
        'custom': `Write a follow-up based on this specific context: ${customContext || 'Check in and see how they are doing.'}`,
    }

    const prompt = `You are Mia from ElianaTech, writing a personalized follow-up email to a lead who completed an AI readiness audit but hasn't booked a sales call yet.

LEAD DATA:
- Name: ${lead.fullName}
- Company: ${lead.companyName}
- Email: ${lead.email}
- Business Type: ${lead.businessType || 'unknown'}
- Revenue: ${lead.currentRevenue || 'unknown'}
- Revenue Trend: ${lead.revenueTrend || 'unknown'}
- Team Size: ${lead.teamSize || 'unknown'}
- AI Readiness Score: ${lead.auditScore || 'unknown'}/100
- Intent Level: ${lead.intentLevel || 'unknown'}
- Hours Worked/Week: ${lead.hoursPerWeek || 'unknown'}
- Pain Level: ${Array.isArray(lead.painLevel) ? lead.painLevel[0] : lead.painLevel || 'unknown'}/10
- Keeps Them Up at Night: ${lead.keepsUpAtNight || 'not specified'}
- Biggest Bottleneck: ${lead.bottleneck || 'not specified'}
- What's Holding Them Back: ${lead.holdingBack || 'not specified'}
- Current Tools: ${tools}
- Problems: ${problems}
- % Automated: ${lead.percentAutomated || 'unknown'}
- Growth Budget: ${lead.growthBudget || 'unknown'}
- Excitement Level: ${lead.excitementLevel || 'unknown'}
- Wants to Start: ${lead.startDate || 'unknown'}
${opportunities ? `\nIDENTIFIED OPPORTUNITIES:\n${opportunities}` : ''}
${painPoints.length > 0 ? `\nPAIN POINTS:\n${painPoints.join('\n')}` : ''}

EMAIL TYPE: ${emailType}
INSTRUCTIONS: ${emailTypeInstructions[emailType] || emailTypeInstructions['warm-nudge']}

RULES:
- Write as Mia, founder of ElianaTech. First person, conversational.
- Reference SPECIFIC details from their audit — don't be generic.
- Keep subject line under 60 chars, compelling but not clickbaity.
- The email body should be plain text (no HTML). Use line breaks for paragraphs.
- Include the calendar link naturally: ${CAL_LINK}
- Sign off as "Mia" or "Mia from Eliana"
- DO NOT use emojis in the subject line. Minimal emojis in body (0-1 max).
- Keep it under 150 words. Short paragraphs. Easy to scan on mobile.

Respond with ONLY valid JSON in this exact format:
{"subject": "your subject line", "body": "your email body text"}`

    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }],
    })

    const content = message.content[0]
    if (content.type !== 'text') throw new Error('Unexpected response type')

    try {
        return JSON.parse(content.text)
    } catch {
        // Try to extract JSON from the response
        const match = content.text.match(/\{[\s\S]*\}/)
        if (match) return JSON.parse(match[0])
        throw new Error('Failed to parse Claude response')
    }
}

// Send email via Resend
async function sendViaResend(params: {
    to: string
    subject: string
    body: string
    fromName?: string
    replyTo?: string
}) {
    const { to, subject, body, fromName = 'Mia from Eliana', replyTo = 'elianatech@yahoo.com' } = params

    // Convert plain text body to simple HTML
    const htmlBody = body
        .split('\n\n')
        .map(p => `<p style="margin:0 0 16px; font-size:16px; line-height:1.6;">${p.replace(/\n/g, '<br>')}</p>`)
        .join('')

    const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #000000; -webkit-font-smoothing: antialiased;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border: 1px solid #000000;">
                    <tr>
                        <td style="padding: 40px; text-align: left; background-color: #000000;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; text-transform: uppercase;">ELIANATECH</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            ${htmlBody}
                            
                            <div style="margin: 32px 0;">
                                <a href="https://cal.com/elianatech/30min" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; border: 1px solid #000000; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Book Response Session →</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px; border-top: 1px solid #f4f4f5; background-color: #ffffff; text-align: left;">
                            <p style="margin: 0; color: #000000; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em;">ElianaTech OS</p>
                            <p style="margin: 4px 0 0; color: #71717a; font-size: 10px;">The infrastructure for decentralized intelligence.</p>
                        </td>
                    </tr>
                </table>
                <p style="margin-top: 24px; color: #a1a1aa; font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em; text-align: center;">© 2026 ELIANA TECHNOLOGIES CORP.</p>
            </td>
        </tr>
    </table>
</body>
</html>`

    try {
        await resend.emails.send({
            from: `${fromName} <noreply@elianatech.com>`,
            to,
            subject,
            html: emailHtml,
            replyTo,
        })
        console.log(`[RESEND EMAIL SENT] To: ${to}, Subject: ${subject}`)
    } catch (error) {
        console.error('[RESEND ERROR]', error)
        throw new Error(`Resend API error: ${error}`)
    }
}

// POST: Generate + send a follow-up email
export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { lead, emailType, customContext, previewOnly, method } = await request.json()

        if (!lead || (!lead.email && method !== 'sms') || (!lead.phoneNumber && method === 'sms')) {
            return NextResponse.json({ error: 'Lead data with contact info is required' }, { status: 400 })
        }

        // Generate personalized text with Claude
        const genResult = await generateFollowUpEmail(lead, emailType || 'warm-nudge', customContext)

        // If preview only, return the generated content
        if (previewOnly) {
            return NextResponse.json({ success: true, email: genResult, preview: true })
        }

        if (method === 'sms') {
            try {
                const formattedPhone = formatPhoneNumber(lead.phoneNumber)
                const smsBody = genResult.body || genResult.subject || 'Hi, please complete your AI Audit here: https://elianatech.com/audit'
                
                await twilioClient.messages.create({
                    body: smsBody,
                    from: TWILIO_PHONE,
                    to: formattedPhone
                })

                // Log SMS activity
                await logEmailActivity(lead.email || 'unknown', `[SMS] Follow-up`, `MANUAL_SMS_${(emailType || 'warm-nudge').toUpperCase()}`)
                
                return NextResponse.json({
                    success: true,
                    content: smsBody,
                    sent: true,
                    method: 'sms',
                    sentAt: new Date().toISOString(),
                })
            } catch (smsError: any) {
                console.error('[SMS FOLLOWUP ERROR]', smsError)
                return NextResponse.json({ success: false, error: 'Failed to send SMS' }, { status: 500 })
            }
        }

        // Send via Resend
        await sendViaResend({
            to: lead.email,
            subject: genResult.subject,
            body: genResult.body,
        })

        // Log Email activity
        await logEmailActivity(lead.email, genResult.subject, `MANUAL_EMAIL_${(emailType || 'warm-nudge').toUpperCase()}`)

        return NextResponse.json({
            success: true,
            email: genResult,
            sent: true,
            method: 'email',
            sentAt: new Date().toISOString(),
        })
    } catch (error: any) {
        console.error('[FOLLOWUP ERROR]', error)
        return NextResponse.json(
            { success: false, error: error.message || 'Failed to send follow-up' },
            { status: 500 }
        )
    }
}
