import Anthropic from '@anthropic-ai/sdk'

const CAL_LINK = 'https://cal.com/elianatech/30min'

export async function generateAgenticFollowUp(template: string, data: any): Promise<{ subject: string, html: string }> {
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    const { firstName, companyName, formData } = data
    
    const industry = formData?.specificIndustry || formData?.businessType || 'business'
    const painPoint = formData?.keepsUpAtNight || formData?.bottleneck || 'operational bottlenecks'
    const bottleneck = formData?.bottleneck || 'manual tasks'
    const tools = formData?.tools ? formData.tools.join(', ') : 'current tools'
    
    let instructions = ''

    const dayInstructions: Record<string, string> = {
        'ai_day1': `
        Day 1 — Value Drop & Quick Insight.
        Write a friendly, high-value email pointing out 1 specific major inefficiency you typically see in the ${industry} space regarding ${painPoint}.
        Suggest a specific AI concept that solves it (e.g. AI voice agent, CRM automation, automated intake) without being overly technical.
        Keep it conversational and brief. End with a casual CTA to book a strategy call: ${CAL_LINK}.
        `,

        'ai_day2': `
        Day 2 — Quick Win They Can Do Today.
        Give ${firstName} one specific, actionable thing they can implement THIS WEEK at ${companyName} to start saving time on "${bottleneck}".
        Make it concrete — name a free tool, a workflow change, or a simple automation they can set up in under an hour.
        Then position the strategy call as the way to go deeper: "This is just the surface — on a call I can map out the full system. Grab a time: ${CAL_LINK}"
        `,

        'ai_day3': `
        Day 3 — Custom 3-Step Roadmap.
        Write an email mapping out a 3-step AI implementation plan to directly solve their bottleneck of "${bottleneck}" at ${companyName}.
        Make the steps extremely actionable and tailored to ${industry}.
        End with: "If you want me to build this exact system for you, grab a time here: ${CAL_LINK}"
        `,

        'ai_day4': `
        Day 4 — Social Proof & Results.
        Share a brief, generalized success story of a business in the ${industry} space that implemented AI automation and saw measurable results (hours saved, faster response times, fewer missed opportunities).
        Do NOT mention specific pricing, revenue numbers, or financial predictions. Focus on operational improvements and time saved.
        Connect it back to ${companyName}'s situation with "${painPoint}".
        End with: "Want to see what this looks like for ${companyName}? Let's map it out: ${CAL_LINK}"
        `,

        'ai_day5': `
        Day 5 — Cost of Doing Nothing.
        Point out the real cost of maintaining manual workflows using ${tools} — in terms of HOURS lost, missed opportunities, slower response times, and team burnout.
        Do NOT predict revenue or give dollar amounts. Keep it about time and operational drag.
        Make it specific to the ${industry} industry.
        Frame the strategy call as the fix: "Let me show you exactly how to eliminate this. 30 minutes: ${CAL_LINK}"
        `,

        'ai_day6': `
        Day 6 — Personal Note from Mia.
        Write a short, genuine, personal email. No pitch frameworks. Just be real.
        Acknowledge that ${firstName} is probably busy running ${companyName} and might not have had time to look at this.
        Mention that you've been thinking about their specific situation with "${painPoint}" and have some ideas.
        Keep it under 5 sentences. End with a soft CTA: "No pressure — if you ever want to talk through it, I'm here: ${CAL_LINK}"
        `,

        'ai_day7': `
        Day 7 — Final Follow-Up.
        This is the last email in the sequence. Be upfront about that.
        Briefly recap: they completed the audit, you identified opportunities around "${painPoint}" and "${bottleneck}" at ${companyName}.
        Let them know this is your last follow-up and you respect their time.
        Leave the door open: "Whenever you're ready, the link is here: ${CAL_LINK}. I'll be here."
        Keep it short, respectful, and warm. No guilt trips.
        `
    }

    instructions = dayInstructions[template] || `
        Write a brief, friendly check-in email referencing their business ${companyName} in the ${industry} space.
        Ask if they're still struggling with ${painPoint} and offer a strategy call: ${CAL_LINK}.
        `

    const prompt = `You are Mia from ElianaTech, writing a highly personalized, automated follow-up email to a lead who completed our AI Readiness Audit.

LEAD CONTEXT:
- Name: ${firstName}
- Company: ${companyName}
- Industry: ${industry}
- Pain Point: ${painPoint}
- Bottleneck: ${bottleneck}
- Tools: ${tools}

YOUR INSTRUCTIONS:
${instructions}

RULES:
- Write in the first person ("I", "my") as Mia, founder of ElianaTech.
- Tone should be razor-sharp, professional but friendly, authoritative, and deeply understanding of their specific industry.
- NO fluff. Get straight to the point.
- Keep the subject line compelling, short, and personalized. Do not use emojis in subject.
- Format the body as plain text with line breaks (no HTML tags, I will map line breaks to HTML later).
- Always include the calendar link ${CAL_LINK} as the primary CTA.
- NEVER mention pricing, costs, dollar amounts, revenue predictions, or financial projections. Focus on time saved, operational improvements, and efficiency gains.
- NEVER include payment links or "buy now" type CTAs. The only CTA is booking a strategy call.
- Sign off as "Mia" or "Mia from ElianaTech".

Respond with ONLY valid JSON in this exact format:
{"subject": "your subject line", "body": "your email body text"}
`

    try {
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 600,
            messages: [{ role: 'user', content: prompt }],
        })

        const content = message.content[0]
        if (content.type !== 'text') throw new Error('Unexpected response type')
        
        let parsed: any;
        try {
            parsed = JSON.parse(content.text)
        } catch {
            const match = content.text.match(/\{[\s\S]*\}/)
            if (match) parsed = JSON.parse(match[0])
            else throw new Error('Failed to parse JSON from Claude')
        }

        const htmlBody = parsed.body
            .split('\n\n')
            .map((p: string) => `<p style="margin:0 0 16px; font-size:16px; line-height:1.6;">${p.replace(/\\n/g, '<br>').replace(/\n/g, '<br>')}</p>`)
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
                                <a href="${CAL_LINK}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin-right: 12px; margin-bottom: 12px;">Book Strategy Session →</a>
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

        return {
            subject: parsed.subject,
            html: emailHtml
        }
    } catch (error) {
        console.error('[AGENTIC EMAIL ERROR]', error)
        throw error
    }
}
