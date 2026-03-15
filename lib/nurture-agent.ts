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
    
    if (template === 'ai_day1') {
        instructions = `
        This is Day 1 of the sequence. 
        Focus: Value Drop & Initial Review. 
        Write a friendly, high-value email pointing out 1 specific major inefficiency you typical see in the ${industry} space regarding ${painPoint}. 
        Suggest a specific AI concept that solves it (e.g. AI voice agent, CRM automation) without being overly technical.
        End with a casual call to action to book a call using ${CAL_LINK}.
        `
    } else if (template === 'ai_day3') {
        instructions = `
        This is Day 3 of the sequence.
        Focus: Custom Roadmap & Process.
        Write an email mapping out a 3-step hypothetical AI implementation plan to directly solve their bottleneck of "${bottleneck}" at ${companyName}.
        Make the steps extremely actionable and tailored to ${industry}. 
        End with: "If you want me to build this exact system for you, grab a time here: ${CAL_LINK}".
        `
    } else if (template === 'ai_day5') {
        instructions = `
        This is Day 5 of the sequence.
        Focus: Urgency, Cost of Doing Nothing, Case Study.
        Point out the raw cost in hours or lost revenue of maintaining manual workflows using ${tools}. 
        Make it specific to the ${industry} industry. 
        Share a brief hypothetical or generalized success story of a ${industry} company that implemented AI and saved X hours or increased margins.
        Final push for a strategy session: ${CAL_LINK}.
        `
    } else {
        instructions = `
        Write a brief, friendly check-in email referencing their business ${companyName} in the ${industry} space. 
        Ask if they're still struggling with ${painPoint} and offer a strategy call: ${CAL_LINK}.
        `
    }

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
- Always include the calendar link ${CAL_LINK}.
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
                                <a href="https://cal.com/elianatech/30min" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Book Strategy Session →</a>
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
