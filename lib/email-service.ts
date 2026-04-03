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
    auditScore: number
}

export async function sendAuditNotificationToTeam(params: { 
    formData: any, 
    auditScore: number, 
    opportunities: any[], 
    intentLevel: string, 
    auditId: string 
}) {
    const { formData, auditScore, opportunities, intentLevel, auditId } = params
    
    const subject = `🔥 NEW AUDIT: ${formData.companyName} (${intentLevel.toUpperCase()})`
    
    const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px;">
            <h2 style="color: #D90019; border-bottom: 2px solid #D90019; padding-bottom: 10px;">New Audit Submission</h2>
            <p><strong>Company:</strong> ${formData.companyName}</p>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phoneNumber || 'N/A'}</p>
            <hr />
            <table width="100%">
                <tr>
                    <td><strong>Score:</strong></td>
                    <td style="font-size: 24px; font-weight: bold; color: #D90019;">${auditScore}/100</td>
                </tr>
                <tr>
                    <td><strong>Intent:</strong></td>
                    <td style="text-transform: uppercase; font-weight: bold;">${intentLevel}</td>
                </tr>
            </table>
            <hr />
            <p><strong>Industry:</strong> ${formData.specificIndustry || 'N/A'}</p>
            <p><strong>Growth Budget:</strong> ${formData.growthBudget || 'N/A'}</p>
            <p><strong>Keeps Up At Night:</strong> ${formData.keepsUpAtNight || 'N/A'}</p>
            <hr />
            <h3>Opportunities:</h3>
            <ul style="padding-left: 20px;">
                ${opportunities.map((o: any) => `<li style="margin-bottom: 8px;"><strong>${o.title}</strong>: ${o.description}</li>`).join('')}
            </ul>
            <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; text-align: center;">
                <p><a href="https://elianatech.com/admin/audits/${auditId}" style="display: inline-block; padding: 12px 24px; background: #000; color: #fff; text-decoration: none; font-weight: bold;">View in Admin Dashboard</a></p>
            </div>
        </div>
    `

    // Send to both addresses as requested
    try {
        await sendEmail({ 
            to: ['mia@elianatech.com', 'sales@elianatech.com'], 
            subject, 
            html, 
            template: 'TEAM_NOTIFICATION' 
        } as any) // Cast to any because our interface says string, but Resend takes string[]
    } catch (teamError) {
        console.error('[TEAM NOTIFY ERROR]', teamError)
    }
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
    const { email, name, companyName, intentLevel, formData, auditId, auditScore } = params
    const firstName = name.split(' ')[0]

    // 7-day follow-up sequence
    // If they book a call, Cal.com webhook cancels remaining emails with 'SEQUENCE_N' prefix
    for (let day = 1; day <= 7; day++) {
        await scheduleEmail({
            to: email,
            scheduledFor: new Date(Date.now() + day * 24 * 60 * 60 * 1000),
            subject: "AI_GENERATED", // Subject will be pulled from NurtureSequence in Cron
            template: `SEQUENCE_N_DAY${day}`,
            data: { ...formData, firstName, companyName, auditScore, auditId }
        })
    }
}

// Email sending function using Resend
export async function sendEmail({ to, subject, html, template = 'direct_email' }: { to: string | string[], subject: string, html: string, template?: string }) {
    try {
        await resend.emails.send({
            from: 'ElianaTech <noreply@elianatech.com>',
            to,
            subject,
            html,
            replyTo: 'support@elianatech.com'
        })
        console.log(`[EMAIL SENT] To: ${to}, Subject: ${subject}`)
        
        // Log to Admin Timeline
        const logTo = Array.isArray(to) ? to.join(', ') : to
        await logEmailActivity(logTo, subject, template)
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
        console.log(`[SCHEDULED EMAIL] ${params.template} for ${params.scheduledFor}`)
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

// --- Helpers ---
function getResourceLinks(resources: any[]) {
    const items = resources || [
        { title: 'Full AI Readiness Report', url: '/audit/report' },
        { title: 'DIY Implementation Roadmap', url: '/roadmap' },
        { title: 'Tool Recommendations', url: '/tools' },
        { title: 'ROI Calculator', url: '/roi' }
    ]
    
    return items.map((r: any) => 
        `<li style="margin-bottom: 12px; font-size: 14px;"><strong>${r.title}</strong> — <a href="https://elianatech.com${r.url}" style="color: #000000; text-decoration: underline; font-weight: 600;">Download Now →</a></li>`
    ).join('')
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

                            <div style="background-color: #fafafa; border: 1px solid #eeeeee; padding: 24px; margin: 32px 0;">
                                <h3 style="margin: 0 0 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Free Resources Included:</h3>
                                <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                                    ${getResourceLinks(freebies?.resources)}
                                </ul>
                            </div>

                            <p style="margin-top: 32px; font-weight: 600;">Next Step:</p>
                            <p style="margin-top: 8px;">We have reserved a strategy session for you tomorrow to map your exact roadmap.</p>

                             <div style="margin: 32px 0;">
                                <a href="${CALENDAR_LINK}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 16px 32px; text-decoration: none; font-weight: 700; font-size: 14px; text-transform: uppercase;">Book Strategy Call →</a>
                            </div>

                            <p style="font-size: 14px; color: #71717a; margin-top: 40px;">
                                <strong>P.S.</strong> We only have 4 slots available for new builds this month. Grab a time now to ensure we can get you on the roadmap.
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

                            <div style="background-color: #fafafa; border: 1px solid #eeeeee; padding: 24px; margin: 12px 0 32px 0;">
                                <h3 style="margin: 0 0 16px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Free Resources Included:</h3>
                                <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
                                    ${getResourceLinks(freebies?.resources)}
                                </ul>
                            </div>

                            <div style="margin: 32px 0; display: table; width: 100%;">
                                <div style="display: table-cell; vertical-align: middle;">
                                    <a href="https://elianatech.com/audit/results" style="display: inline-block; background-color: #eeeeee; color: #000000; padding: 14px 24px; text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; margin-right: 12px; margin-bottom: 12px;">View Full Report</a>
                                    <a href="${CALENDAR_LINK}" style="display: inline-block; background-color: #000000; color: #ffffff; padding: 14px 24px; text-decoration: none; font-weight: 600; font-size: 13px; text-transform: uppercase; margin-bottom: 12px;">Book Strategy Call</a>
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
                                    ${getResourceLinks(freebies?.resources)}
                                </ul>
                            </div>

                            <p style="margin-top: 24px; font-weight: 600;">Next Steps:</p>
                            <p style="font-size: 14px; margin-bottom: 24px;">Review your audit report and start with the "quick wins" — most can be implemented in under 2 hours.</p>

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
