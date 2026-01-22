/**
 * Email Service
 * Handles sending emails using Resend
 */

import { Resend } from 'resend'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const resend = new Resend(process.env.RESEND_API_KEY)
const CALENDAR_LINK = 'https://cal.com/mia-louviere-a4n2hk/30min'

interface EmailParams {
    to: string
    name: string
    companyName: string
    auditScore: number
    opportunities: any[]
    freebies: any
    intentLevel: string
}

interface FollowUpParams {
    email: string
    name: string
    companyName: string
    intentLevel: string
    formData: any
    auditId: string
}

export async function sendAuditResultEmail(params: EmailParams) {
    const { to, name, companyName, auditScore, opportunities, freebies, intentLevel } = params

    const firstName = name.split(' ')[0]

    // Choose email template based on intent level
    let subject = ''
    let htmlContent = ''

    if (intentLevel === 'high') {
        subject = `${firstName}, Your AI Roadmap is Ready 🚀`
        htmlContent = getHighIntentEmail({ firstName, companyName, auditScore, opportunities, freebies })
    } else if (intentLevel === 'medium') {
        subject = `Your ${companyName} AI Audit Results`
        htmlContent = getMediumIntentEmail({ firstName, companyName, auditScore, opportunities, freebies })
    } else {
        subject = `Your audit results + free resources`
        htmlContent = getLowIntentEmail({ firstName, companyName, auditScore, freebies })
    }

    // Send email using your preferred service
    await sendEmail({ to, subject, html: htmlContent })
}

export async function scheduleFollowUpEmails(params: FollowUpParams) {
    const { email, name, companyName, intentLevel, formData, auditId } = params

    const firstName = name.split(' ')[0]

    // Define follow-up sequences based on intent
    const sequences = {
        high: [
            { delay: 1, subject: "Haven't booked yet? Here's why I'm following up...", template: 'high_day1' },
            { delay: 3, subject: `Free Resource: ${companyName} Quick Wins`, template: 'high_day3' },
            { delay: 7, subject: "Last follow-up (I promise)", template: 'high_week1' }
        ],
        medium: [
            { delay: 3, subject: "Free Checklist: Quick Automation Wins", template: 'medium_day3' },
            { delay: 7, subject: `Case Study: How a ${formData.specificIndustry} business automated in 60 days`, template: 'medium_week1' },
            { delay: 14, subject: "Still exploring? Here's your next step...", template: 'medium_week2' }
        ],
        low: [
            { delay: 7, subject: "Weekly Automation Tip #1: Start Here", template: 'low_week1' },
            { delay: 14, subject: "Weekly Automation Tip #2: Review Engine", template: 'low_week2' },
            { delay: 30, subject: "Still on my radar", template: 'low_month1' }
        ]
    }

    const sequence = sequences[intentLevel as keyof typeof sequences] || sequences.low

    // Schedule each email in the sequence
    for (const email_config of sequence) {
        await scheduleEmail({
            to: email,
            scheduledFor: new Date(Date.now() + email_config.delay * 24 * 60 * 60 * 1000),
            subject: email_config.subject,
            template: email_config.template,
            data: { firstName, companyName, formData, auditId }
        })
    }
}

// Email sending function using Resend
async function sendEmail({ to, subject, html }: { to: string, subject: string, html: string }) {
    try {
        await resend.emails.send({
            from: 'Eliana <noreply@eliana.tech>',
            to,
            subject,
            html,
            replyTo: 'mia@eliana.tech'
        })
        console.log(`[EMAIL SENT] To: ${to}, Subject: ${subject}`)
    } catch (error) {
        console.error('[EMAIL ERROR]', error)
        throw error
    }
}

async function scheduleEmail(params: any) {
    // Store scheduled email in Firestore for processing by cron job
    try {
        await addDoc(collection(db, 'scheduled_emails'), {
            to: params.to,
            subject: params.subject,
            template: params.template,
            data: params.data,
            scheduledFor: params.scheduledFor,
            status: 'pending',
            createdAt: serverTimestamp()
        })
        console.log(`[SCHEDULED EMAIL] ${params.subject} for ${params.scheduledFor}`)
    } catch (error) {
        console.error('[SCHEDULE ERROR]', error)
        throw error
    }
}

// Email Templates
function getHighIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }: any) {
    const opportunitiesList = opportunities.map((opp: any) =>
        `<li><strong>${opp.title}</strong> - ${opp.description}</li>`
    ).join('')

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .highlight { background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .cta-button { display: inline-block; background: #8b5cf6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
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
                <p style="font-size: 24px; font-weight: bold; color: #059669; margin: 10px 0;">Your AI Readiness Score: ${auditScore}/100</p>
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

function getMediumIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }: any) {
    const top3Opportunities = opportunities.slice(0, 3).map((opp: any, idx: number) =>
        `<li><strong>${idx + 1}. ${opp.title}</strong> - ${opp.impact} Impact</li>`
    ).join('')

    return `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .score-box { background: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0; }
        .cta-button { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 10px 5px; }
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
                <h2 style="margin: 0; color: #8b5cf6;">Overall AI Readiness Score</h2>
                <p style="font-size: 48px; font-weight: bold; margin: 10px 0;">${auditScore}/100</p>
            </div>

            <h3>Top 3 Opportunities:</h3>
            <ul>
                ${top3Opportunities}
            </ul>

            <p>I've also included a DIY roadmap if you want to tackle this yourself.</p>

            <div style="text-align: center; margin: 30px 0;">
                <a href="https://eliana.tech/audit/results" class="cta-button">View Full Report</a>
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

function getLowIntentEmail({ firstName, companyName, auditScore, freebies }: any) {
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
