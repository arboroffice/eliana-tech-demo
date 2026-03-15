/**
 * Email Service
 * Handles sending emails using Resend
 */

import { Resend } from 'resend'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp, query, where, getDocs, updateDoc, doc, limit, arrayUnion } from 'firebase/firestore'

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789')
const CALENDAR_LINK = 'https://cal.com/elianatech/30min'

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
    await sendEmail({ 
        to, 
        subject, 
        html: htmlContent, 
        template: `INITIAL_AUDIT_${intentLevel.toUpperCase()}` 
    })
}

export async function scheduleFollowUpEmails(params: FollowUpParams) {
    const { email, name, companyName, intentLevel, formData, auditId } = params

    const firstName = name.split(' ')[0]

    // Define follow-up sequences based on intent using AI Agent Generation
    const sequences = {
        high: [
            { delay: 1, subject: "AI_GENERATED", template: 'ai_day1' },
            { delay: 3, subject: "AI_GENERATED", template: 'ai_day3' },
            { delay: 5, subject: "AI_GENERATED", template: 'ai_day5' }
        ],
        medium: [
            { delay: 2, subject: "AI_GENERATED", template: 'ai_day1' },
            { delay: 5, subject: "AI_GENERATED", template: 'ai_day3' },
            { delay: 9, subject: "AI_GENERATED", template: 'ai_day5' }
        ],
        low: [
            { delay: 3, subject: "AI_GENERATED", template: 'ai_day1' },
            { delay: 7, subject: "AI_GENERATED", template: 'ai_day3' },
            { delay: 14, subject: "AI_GENERATED", template: 'ai_day5' }
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
async function sendEmail({ to, subject, html, template = 'direct_email' }: { to: string, subject: string, html: string, template?: string }) {
    try {
        await resend.emails.send({
            from: 'ElianaTech <noreply@elianatech.com>',
            to,
            subject,
            html,
            replyTo: 'elianatech@yahoo.com'
        })
        console.log(`[EMAIL SENT] To: ${to}, Subject: ${subject}`)
        
        // Log to Admin Timeline
        await logEmailActivity(to, subject, template)
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

export async function cancelPendingEmails(email: string, templatePrefix?: string) {
    try {
        const scheduledEmailsRef = collection(db, 'scheduled_emails')
        const q = query(
            scheduledEmailsRef,
            where('to', '==', email),
            where('status', '==', 'pending')
        )
        
        const snapshot = await getDocs(q)
        for (const emailDoc of snapshot.docs) {
            const data = emailDoc.data()
            if (!templatePrefix || (data.template && data.template.startsWith(templatePrefix))) {
                 await updateDoc(doc(db, 'scheduled_emails', emailDoc.id), {
                    status: 'cancelled',
                    cancelledAt: serverTimestamp()
                })
                console.log(`[CANCELLED] ${data.template} for ${email}`)
            }
        }
    } catch (error) {
        console.error('[CANCEL ERROR]', error)
    }
}

export async function logEmailActivity(email: string, subject: string, template: string) {
    try {
        // 1. Log to the audit record notes (for Admin Timeline)
        const auditsRef = collection(db, 'audits')
        const q = query(auditsRef, where('email', '==', email), limit(1))
        const snapshot = await getDocs(q)
        
        const logEntry = {
            to: email,
            subject,
            template,
            sentAt: serverTimestamp()
        }

        // 2. Also log to a dedicated email_logs collection
        await addDoc(collection(db, 'email_logs'), logEntry)

        if (!snapshot.empty) {
            const auditDoc = snapshot.docs[0]
            await updateDoc(doc(db, 'audits', auditDoc.id), {
                notes: arrayUnion({
                    text: `Email Sent: ${subject} (${template})`,
                    type: 'system',
                    createdAt: new Date().toISOString()
                })
            })
        }
        console.log(`[LOGGED EMAIL] to ${email}: ${subject}`)
    } catch (error) {
        console.error('[LOG ERROR]', error)
    }
}

// Email Templates
function getHighIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }: any) {
    const opportunitiesList = opportunities.map((opp: any) =>
        `<li style="margin-bottom: 12px;"><strong>${opp.title}</strong> — ${opp.description}</li>`
    ).join('')

    return `
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
                        <td style="padding: 40px; background-color: #000000;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.02em;">AUDIT READY: ${firstName}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            <p style="font-size: 16px; margin-bottom: 24px;">Thank you for completing the AI readiness audit for <strong>${companyName}</strong>.</p>

                            <div style="background-color: #000000; color: #ffffff; padding: 30px; margin-bottom: 32px;">
                                <h2 style="margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #a1a1aa;">CRITICAL FINDING</h2>
                                <p style="margin: 12px 0 0; font-size: 32px; font-weight: 700;">Score: ${auditScore}/100</p>
                                <p style="margin: 8px 0 0; color: #a1a1aa; font-size: 14px;">Significant revenue leakage identified in current workflows.</p>
                            </div>

                            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 16px; border-bottom: 1px solid #000000; padding-bottom: 8px;">Key Opportunities</h3>
                            <ul style="padding-left: 20px; font-size: 15px;">
                                ${opportunitiesList}
                            </ul>

                            <p style="margin-top: 32px; font-weight: 600;">Next Step:</p>
                            <p style="margin-top: 8px;">We have reserved a strategy session for you tomorrow to map your exact roadmap.</p>

                            <div style="margin: 32px 0;">
                                <a href="${CALENDAR_LINK}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase;">Book Strategy Call →</a>
                            </div>

                            <p style="font-size: 14px; color: #71717a; margin-top: 40px;">
                                <strong>P.S.</strong> This is a working session with the Eliana team. You'll leave with a clear action plan.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}

function getMediumIntentEmail({ firstName, companyName, auditScore, opportunities, freebies }: any) {
    const top3Opportunities = opportunities.slice(0, 3).map((opp: any, idx: number) =>
        `<li style="margin-bottom: 8px;"><strong>${opp.title}</strong> — ${opp.impact} Impact</li>`
    ).join('')

    return `
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
                        <td style="padding: 40px; background-color: #000000;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">${companyName} Audit Results</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            <p>Hi ${firstName}, your detailed audit is ready for review.</p>

                            <div style="border: 2px solid #000000; padding: 30px; text-align: center; margin: 32px 0;">
                                <h2 style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">AI Readiness Score</h2>
                                <p style="margin: 10px 0 0; font-size: 48px; font-weight: 800;">${auditScore}/100</p>
                            </div>

                            <h3 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 12px;">Immediate Opportunities</h3>
                            <ul style="padding-left: 20px; margin-bottom: 32px;">
                                ${top3Opportunities}
                            </ul>

                            <div style="margin: 32px 0; display: table; width: 100%;">
                                <div style="display: table-cell; vertical-align: middle;">
                                    <a href="https://elianatech.com/audit/results" style="display: inline-block; background-color: #eeeeee; color: #000000; padding: 14px 24px; text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; margin-right: 12px;">View Full Report</a>
                                    <a href="${CALENDAR_LINK}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase;">Book Strategy Call</a>
                                </div>
                            </div>

                            <p style="margin-top: 32px; font-size: 14px; color: #71717a;">Best regards,<br>The Eliana Team</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: 'Inter', sans-serif; color: #000000;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; border: 1px solid #000000;">
                    <tr>
                        <td style="padding: 30px; border-bottom: 1px solid #000000;">
                            <h1 style="margin: 0; color: #000000; font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Audit Assessment Complete</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 40px;">
                            <p>Hi ${firstName}, thanks for completing the audit for <strong>${companyName}</strong>.</p>

                            <p>Your results are ready (Score: <strong>${auditScore}/100</strong>). We've included a set of resources below to help you get started.</p>

                            <div style="background-color: #fafafa; border: 1px solid #eeeeee; padding: 24px; margin: 32px 0;">
                                <h3 style="margin: 0 0 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Free Resources Included:</h3>
                                <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                                    <li style="margin-bottom: 8px;">Full AI Readiness Report</li>
                                    <li style="margin-bottom: 8px;">DIY Implementation Roadmap</li>
                                    <li style="margin-bottom: 8px;">Tool Recommendations</li>
                                    <li>ROI Calculator</li>
                                </ul>
                            </div>

                            <p style="font-size: 14px; color: #71717a;">View these at your convenience. If you have any questions, we are here.</p>
                            
                            <p style="margin-top: 32px; font-size: 14px; color: #000000; font-weight: 600;">The Eliana Team</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `
}
