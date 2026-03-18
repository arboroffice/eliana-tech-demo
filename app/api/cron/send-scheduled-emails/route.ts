export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore'
import { Resend } from 'resend'
import { generateAgenticFollowUp } from '@/lib/nurture-agent'
import { getSequence, personalizeEmail } from '@/lib/nurture-sequences'
import { logEmailActivity } from '@/lib/email-service'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

/**
 * Cron job to send scheduled emails
 * Configure in vercel.json or run manually
 */
export async function GET(request: Request) {
    try {
        if (!resend) {
            console.error("Resend API key missing");
            return NextResponse.json({ error: 'Configuration Error' }, { status: 500 })
        }

        // Verify cron secret to prevent unauthorized access
        const authHeader = request.headers.get('authorization')
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const now = new Date()
        const emailsSent = []

        // Query for pending emails that should be sent now
        const scheduledEmailsRef = collection(db, 'scheduled_emails')
        const q = query(
            scheduledEmailsRef,
            where('status', '==', 'pending'),
            where('scheduledFor', '<=', now)
        )

        const snapshot = await getDocs(q)

        for (const emailDoc of snapshot.docs) {
            const emailData = emailDoc.data()

            try {
                let emailContent = ''
                let emailSubject = emailData.subject

                // If this is an AI-driven sequence step, generate it dynamically
                if (emailData.template?.startsWith('ai_')) {
                    console.log(`[CRON] Generating AI email for ${emailData.to} using template ${emailData.template}`)
                    const agentResult = await generateAgenticFollowUp(emailData.template, emailData.data)
                    emailContent = agentResult.html
                    emailSubject = agentResult.subject
                } else if (emailData.template?.startsWith('SEQUENCE_')) {
                    // Format: SEQUENCE_ID_DAYX
                    console.log(`[CRON] Handling Nurture Sequence for ${emailData.to}: ${emailData.template}`)
                    const parts = emailData.template.split('_')
                    const seqId = parts[1] as any
                    const dayLabel = parts[2] // e.g. DAY0
                    const day = parseInt(dayLabel.replace('DAY', '')) || 0
                    
                    const sequence = getSequence(seqId)
                    const emailConfig = sequence.emails.find(e => e.day === day) || sequence.emails[0]
                    const personalized = personalizeEmail(emailConfig, emailData.data)
                    
                    emailContent = personalized.bodyHtml
                    emailSubject = personalized.subject
                } else {
                    // Fallback to static templates
                    emailContent = getEmailTemplate(emailData.template, emailData.data)
                }

                // Send email using Resend
                await resend.emails.send({
                    from: 'ElianaTech <noreply@elianatech.com>',
                    to: emailData.to,
                    subject: emailSubject,
                    html: emailContent,
                    replyTo: 'hello@elianatech.com'
                })

                // Log the activity to the admin timeline
                await logEmailActivity(emailData.to, emailSubject, emailData.template || 'scheduled_email')

                // Update status to 'sent'
                await updateDoc(doc(db, 'scheduled_emails', emailDoc.id), {
                    status: 'sent',
                    sentAt: new Date(),
                    actualSubject: emailSubject // Store the final subject
                })

                emailsSent.push({
                    id: emailDoc.id,
                    to: emailData.to,
                    subject: emailData.subject
                })

                console.log(`[CRON] Sent email to ${emailData.to}`)
            } catch (error) {
                console.error(`[CRON ERROR] Failed to send email ${emailDoc.id}:`, error)

                // Update status to 'failed'
                await updateDoc(doc(db, 'scheduled_emails', emailDoc.id), {
                    status: 'failed',
                    error: error instanceof Error ? error.message : 'Unknown error',
                    failedAt: new Date()
                })
            }
        }

        return NextResponse.json({
            success: true,
            emailsSent: emailsSent.length,
            details: emailsSent
        })

    } catch (error) {
        console.error('[CRON ERROR]', error)
        return NextResponse.json(
            { success: false, error: 'Failed to process scheduled emails' },
            { status: 500 }
        )
    }
}

function getEmailTemplate(templateName: string, data: any): string {
    const { firstName, companyName, formData } = data
    const CALENDAR_LINK = 'https://cal.com/elianatech/30min'

    const wrap = (title: string, content: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', sans-serif; color: #000000;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border: 1px solid #000000;">
                    <tr>
                        <td style="padding: 30px; background-color: #000000; text-align: left;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">${title}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px; font-size: 16px; line-height: 1.6;">
                            ${content}
                            <p style="margin-top: 40px; border-top: 1px solid #f4f4f5; padding-top: 20px; font-size: 13px; color: #71717a;">
                                Best,<br><span style="color: #000000; font-weight: 600;">The Eliana Team</span>
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

    const cta = (text: string, link: string = CALENDAR_LINK) => `
<div style="margin: 32px 0;">
    <a href="${link}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: 700; font-size: 13px; text-transform: uppercase;">${text}</a>
</div>`;

    const templates: { [key: string]: string } = {
        // High Intent Templates
        high_day1: wrap("Inquiry Follow-up", `
            <p>Hey ${firstName},</p>
            <p>I know you're busy running <strong>${companyName}</strong>. That's exactly why I'm following up.</p>
            <p>You mentioned that <em>"${formData?.keepsUpAtNight || 'growing your business'}"</em> is a primary challenge.</p>
            <p>We solve this specifically with high-efficiency neural layers and automated workflows.</p>
            <p><strong>Quick question:</strong> What's stopping you from booking that call?</p>
            <ul style="padding-left: 20px; margin: 20px 0;">
                <li>Too busy? (That's what we fix)</li>
                <li>Not sure it's worth it? (We have the data)</li>
                <li>Budget concerns? (We have high-ROI options)</li>
            </ul>
            ${cta("Let's Talk")}
        `),

        high_day3: wrap("Resource Access", `
            <p>${firstName},</p>
            <p>I put together something useful for <strong>${companyName}</strong>:</p>
            <p style="font-weight: 700; font-size: 18px; margin: 24px 0;">"The 30-Day Quick Wins for ${companyName}"</p>
            <p>This checklist shows you exactly how to automate the 3 largest bottlenecks in your business, starting this week.</p>
            <p>It's yours to keep, whether we work together or not.</p>
            ${cta("Download Now", "https://elianatech.com/resources/quick-wins")}
            <p style="font-size: 14px;">If you want to discuss the implementation roadmap, my calendar is here: <a href="${CALENDAR_LINK}" style="color: #000000; font-weight: 600;">Book a call</a></p>
        `),

        high_week1: wrap("Final Review", `
            <p>${firstName},</p>
            <p>This is my last follow-up — I want to be respectful of your inbox.</p>
            <p>I wanted to share one result: Last month, we onboarded a business similar to <strong>${companyName}</strong>.</p>
            <div style="background-color: #fafafa; border-left: 3px solid #000000; padding: 20px; margin: 24px 0;">
                <p style="margin: 0; font-weight: 600;">60 days after installation:</p>
                <ul style="margin: 10px 0 0; padding-left: 20px;">
                    <li>✓ 40+ additional leads per month</li>
                    <li>✓ 100% automated follow-up</li>
                    <li>✓ 20 hours/week reclaimed for the owner</li>
                </ul>
            </div>
            <p>We rebuilt their processes to be AI-native. We can do the same for you.</p>
            ${cta("Claim Your Installation Spot")}
        `),

        // Medium Intent Templates
        medium_day3: wrap("Operational Checklist", `
            <p>Hi ${firstName},</p>
            <p>I created a specific document for <strong>${companyName}</strong>:</p>
            <p style="font-weight: 700; margin: 20px 0;">The 30-Day Automation Quick Start Checklist</p>
            <p>Covering:</p>
            <ul style="padding-left: 20px;">
                <li>5 automations for your specific industry</li>
                <li>Recommended tech stack</li>
                <li>ROI Tracking Model</li>
            </ul>
            ${cta("Download Checklist", "https://elianatech.com/resources/checklist")}
            <p style="font-size: 14px;">If you get stuck, reply here or <a href="${CALENDAR_LINK}" style="color: #000000; font-weight: 600;">schedule a sync</a>.</p>
        `),

        // Low Intent Templates
        low_week1: wrap("Weekly Automation Tip", `
            <p>Hey ${firstName},</p>
            <p>Quick tip for <strong>${companyName}</strong>:</p>
            <p style="font-weight: 700; margin: 20px 0;">Week 1 Focus: Automated Onboarding</p>
            <p>The core path to reducing churn is a high-speed onboarding experience. Here’s the formula:</p>
            <ol style="padding-left: 20px;">
                <li>Identify the first "value moment" for your customer.</li>
                <li>Trigger a 3-email welcome sequence immediately.</li>
                <li>Automate the intake/documentation collection.</li>
            </ol>
            <p><strong>Potential ROI:</strong> 30%+ reduction in churn.</p>
            <p>Need help? Just reply to this email.</p>
        `)
    }

    return templates[templateName] || templates['medium_day3']
}
