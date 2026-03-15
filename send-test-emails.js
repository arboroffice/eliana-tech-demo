const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const CALENDAR_LINK = 'https://cal.com/elianatech/30min'

function getHighIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }) {
    const opportunitiesList = opportunities.map((opp) =>
        `<li><strong>${opp.title}</strong> - ${opp.description}</li>`
    ).join('')

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .cta-button { display: inline-block; background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .opportunities { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Your AI Roadmap is Ready, ${firstName}!</h1>
        </div>
        <div class="content">
            <p>Hi ${firstName},</p>

            <p>Thank you for completing your AI readiness audit for <strong>${companyName}</strong>.</p>

            <div class="highlight">
                <h2 style="margin-top: 0;">⚠️ Critical Finding</h2>
                <p>Based on your responses, you're currently leaving significant revenue on the table.</p>
                <p style="font-size: 24px; font-weight: bold; color: #dc2626; margin: 10px 0;">Your AI Readiness Score: ${auditScore}/100</p>
            </div>

            <div class="opportunities">
                <h3>Here's what stood out:</h3>
                <ul>
                    ${opportunitiesList}
                </ul>
            </div>

            <p><strong>Next Step:</strong> I've blocked off time tomorrow at 2 PM and 4 PM EST for strategy calls.</p>

            <div style="text-align: center;">
                <a href="${CALENDAR_LINK}" class="cta-button">Book Your Strategy Call</a>
            </div>

            <p>This isn't a sales pitch. It's a working session where we'll map out your exact automation roadmap.</p>

            <p>Looking forward to it,<br>
            The Eliana Team</p>

            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">

            <p style="font-size: 14px; color: #6b7280;">
                <strong>P.S.</strong> Even if we don't end up working together, you'll leave the call with a clear action plan.
            </p>
        </div>
    </div>
</body>
</html>
    `
}

function getMediumIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }) {
    const top3Opportunities = opportunities.slice(0, 3).map((opp, idx) =>
        `<li><strong>${idx + 1}. ${opp.title}</strong> - ${opp.impact} Impact</li>`
    ).join('')

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .score-box { background: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .cta-button { display: inline-block; background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your ${companyName} AI Audit Results</h1>
        </div>
        <div class="content">
            <p>Hi ${firstName},</p>

            <p>Your detailed audit is ready! Here are the key findings:</p>

            <div class="score-box">
                <h2 style="margin: 0; color: #dc2626;">Overall AI Readiness Score</h2>
                <p style="font-size: 48px; font-weight: bold; margin: 10px 0;">${auditScore}/100</p>
            </div>

            <h3>Top 3 Opportunities:</h3>
            <ul>
                ${top3Opportunities}
            </ul>

            <p>I've also included a DIY roadmap if you want to tackle this yourself.</p>

            <div style="text-align: center; margin: 30px 0;">
                <a href="https://elianatech.com/audit/results" class="cta-button">View Full Report</a>
                <a href="${CALENDAR_LINK}" class="cta-button">Book Strategy Call</a>
            </div>

            <p>Best regards,<br>
            The Eliana Team</p>
        </div>
    </div>
</body>
</html>
    `
}

function getLowIntentEmail({ firstName, companyName, auditScore, freebies }) {
    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #1f2937; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .resources { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Your Audit Results + Free Resources</h1>
        </div>
        <div class="content">
            <p>Hi ${firstName},</p>

            <p>Thanks for completing the audit for <strong>${companyName}</strong>.</p>

            <p>Your results are ready (Score: <strong>${auditScore}/100</strong>). No pressure to act on them right now.</p>

            <div class="resources">
                <h3>📦 Free Resources Included:</h3>
                <ul>
                    <li>✓ Full AI Readiness Report</li>
                    <li>✓ DIY Implementation Roadmap</li>
                    <li>✓ Tool Recommendations</li>
                    <li>✓ ROI Calculator</li>
                </ul>
            </div>

            <p>Explore these at your own pace. If you ever want to chat, I'm here.</p>

            <p>Best,<br>
            The Eliana Team</p>
        </div>
    </div>
</body>
</html>
    `
}

const TO_EMAIL = 'mialouviere@gmail.com';
const FROM_EMAIL = 'ElianaTech <noreply@elianatech.com>';

async function run() {
    console.log("Sending High Intent...");
    await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `John, Your AI Roadmap is Ready 🚀`,
        html: getHighIntentEmail({
            firstName: 'John',
            companyName: 'Acme Corp',
            auditScore: 45,
            opportunities: [
                { title: 'Automated Lead Nurturing', description: 'Save 10 hours/week' },
                { title: 'AI Customer Support', description: 'Reduce response time by 80%' }
            ],
            freebies: {}
        }),
        replyTo: 'elianatech@yahoo.com'
    });

    console.log("Sending Medium Intent...");
    await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Your Acme Corp AI Audit Results`,
        html: getMediumIntentEmail({
            firstName: 'John',
            companyName: 'Acme Corp',
            auditScore: 65,
            opportunities: [
                { title: 'Data Extraction', impact: 'High' },
                { title: 'Meeting Summaries', impact: 'Medium' }
            ],
            freebies: {}
        }),
        replyTo: 'elianatech@yahoo.com'
    });

    console.log("Sending Low Intent...");
    await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `Your audit results + free resources`,
        html: getLowIntentEmail({
            firstName: 'John',
            companyName: 'Acme Corp',
            auditScore: 85,
            freebies: {}
        }),
        replyTo: 'elianatech@yahoo.com'
    });

    console.log("Sending Partner Application (Admin Notification)...");
    await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `TEST: New Certified Partner Application: Jane Doe`,
        html: `
            <h2>New Certified Partner Application</h2>
            <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">Jane Doe</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">jane@example.com</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">+1234567890</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">LinkedIn/Website</td><td style="padding:8px;border:1px solid #ddd">linkedin.com/in/janedoe</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Current Role</td><td style="padding:8px;border:1px solid #ddd">AI Consultant</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Motivation</td><td style="padding:8px;border:1px solid #ddd">I love what you guys do.</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Source</td><td style="padding:8px;border:1px solid #ddd">Twitter</td></tr>
            </table>
        `,
        replyTo: 'hello@elianatech.com'
    });

    console.log("Sending Affiliate Application (Admin Notification)...");
    await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        subject: `TEST: New Affiliate Application: Mark Smith`,
        html: `
            <h2>New Affiliate Application</h2>
            <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">Mark Smith</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">mark@example.com</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">+0987654321</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Referral Method</td><td style="padding:8px;border:1px solid #ddd">Blog</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Website</td><td style="padding:8px;border:1px solid #ddd">marksmith.blog</td></tr>
            </table>
        `,
        replyTo: 'hello@elianatech.com'
    });

    console.log("Sending Custom Admin Followup wrapper test...");
    
    const htmlBody = "Hey John, just checking in. Let me know if you want to chat."
        .split('\n\n')
        .map(p => `<p style="margin:0 0 16px;color:#334155;font-size:15px;line-height:1.7;">${p.replace(/\n/g, '<br>')}</p>`)
        .join('');

    const emailHtml = `<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:20px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;">
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
</body></html>`;

    await resend.emails.send({
        from: `Mia from ElianaTech <noreply@elianatech.com>`,
        to: TO_EMAIL,
        subject: `TEST: Admin Follow Up Email Template Wrapper`,
        html: emailHtml,
        replyTo: 'elianatech@yahoo.com'
    });


    console.log("All emails sent successfully!");
}

run().catch(console.error);
