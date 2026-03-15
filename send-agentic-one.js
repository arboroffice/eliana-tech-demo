const { Resend } = require('resend');
const Anthropic = require('@anthropic-ai/sdk');

const resend = new Resend(process.env.RESEND_API_KEY);
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const CAL_LINK = 'https://cal.com/elianatech/30min';
const TO_EMAIL = 'mialouviere@gmail.com';
const FROM_EMAIL = 'ElianaTech <noreply@elianatech.com>';

async function generateAgenticFollowUp(template, data) {
    const { firstName, companyName, formData } = data
    const instructions = `Focus: ${template}. Client: ${firstName} at ${companyName}.`;
    const prompt = `Mia from ElianaTech. ${instructions}. Short email. JSON: {"subject": "...", "body": "..."}`;

    try {
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 300,
            messages: [{ role: 'user', content: prompt }],
        });

        const content = message.content[0].text;
        const parsed = JSON.parse(content);
        const htmlBody = parsed.body.replace(/\n/g, '<br>');
        const emailHtml = `<h1>ElianaTech</h1><div style="font-family:sans-serif;">${htmlBody}</div><p>${CAL_LINK}</p>`;

        return { subject: parsed.subject, html: emailHtml };
    } catch (e) {
        console.info("Error with claude-sonnet-4-20250514, trying claude-3-5-sonnet-20240620...");
        const message = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20240620',
            max_tokens: 300,
            messages: [{ role: 'user', content: prompt }],
        });
        const content = message.content[0].text;
        const parsed = JSON.parse(content);
        const htmlBody = parsed.body.replace(/\n/g, '<br>');
        const emailHtml = `<h1>ElianaTech</h1><div style="font-family:sans-serif;">${htmlBody}</div><p>${CAL_LINK}</p>`;
        return { subject: parsed.subject, html: emailHtml };
    }
}

async function run() {
    const data = { firstName: 'John', companyName: 'Acme', formData: {} };
    const t = process.argv[2] || 'ai_day1';
    console.log(`Sending ${t}...`);
    const result = await generateAgenticFollowUp(t, data);
    await resend.emails.send({ from: FROM_EMAIL, to: TO_EMAIL, subject: "[AGENTIC] " + result.subject, html: result.html });
    console.log(`Sent ${t}!`);
}

run().catch(console.error);
