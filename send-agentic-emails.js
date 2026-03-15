const { Resend } = require('resend');
const Anthropic = require('@anthropic-ai/sdk');

const resend = new Resend(process.env.RESEND_API_KEY);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CAL_LINK = 'https://cal.com/elianatech/30min';
const TO_EMAIL = 'MIALOUVIERE@YAHOO.COM';
const FROM_EMAIL = 'ElianaTech <noreply@elianatech.com>';

async function generateAgenticFollowUp(template, data) {
    const { firstName, companyName, formData } = data
    
    const industry = formData?.specificIndustry || formData?.businessType || 'real estate'
    const painPoint = formData?.keepsUpAtNight || formData?.bottleneck || 'manual lead follow up'
    const bottleneck = formData?.bottleneck || 'chasing leads'
    const tools = formData?.tools ? formData.tools.join(', ') : 'excel and text'
    
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

    const message = await anthropic.messages.create({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }],
    })

    const content = message.content[0].text
    const parsed = JSON.parse(content)

    const htmlBody = parsed.body
        .split('\n\n')
        .map((p) => `<p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.7;">${p.replace(/\\n/g, '<br>').replace(/\n/g, '<br>')}</p>`)
        .join('')

    const emailHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:20px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
<tr><td style="background:#1e293b;padding:24px 32px;text-align:center;">
<h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">ElianaTech</h1>
</td></tr>
<tr><td style="padding:32px;">
${htmlBody}
</td></tr>
<tr><td style="background:#f8fafc;padding:20px 32px;text-align:center;border-top:1px solid #e2e8f0;">
<p style="margin:0;color:#94a3b8;font-size:12px;">ElianaTech &middot; AI-Powered Business Automation</p>
</td></tr>
</table>
</td></tr>
</table>
</body></html>`

    return {
        subject: parsed.subject,
        html: emailHtml
    }
}

async function run() {
    const data = {
        firstName: 'John',
        companyName: 'Acme Real Estate',
        formData: {
            specificIndustry: 'Commercial Real Estate',
            keepsUpAtNight: 'Lead follow up speed',
            bottleneck: 'Manual outreach',
            tools: ['Excel', 'WhatsApp']
        }
    };

    const templates = ['ai_day1', 'ai_day3', 'ai_day5'];

    for (const t of templates) {
        console.log(`Generating and sending ${t}...`);
        const result = await generateAgenticFollowUp(t, data);
        await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            subject: "[AGENTIC] " + result.subject,
            html: result.html,
            replyTo: 'hello@elianatech.com'
        });
    }

    console.log("All agentic sequence emails sent!");
}

run().catch(console.error);
