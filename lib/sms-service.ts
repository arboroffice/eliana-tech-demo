/**
 * SMS Service using Twilio
 * Handles sending SMS messages for high-intent leads
 */

import twilio from 'twilio'
import { db } from './firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const twilioClient = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER // Your Twilio number
const YOUR_PHONE = process.env.YOUR_PHONE_NUMBER // Mia's phone for notifications

interface SMSParams {
    to: string
    name: string
    companyName: string
    painPoint: string
    intentLevel: string
    auditId: string
}

/**
 * Send SMS to high-intent leads
 */
export async function sendHighIntentSMS(params: SMSParams) {
    const { to, name, companyName, painPoint, auditId } = params
    const firstName = name.split(' ')[0]

    try {
        // Only send SMS if high intent
        if (params.intentLevel !== 'high') {
            console.log('[SMS] Skipping - not high intent')
            return null
        }

        // Message to the lead
        const message = `Hey ${firstName}, it's Mia from Eliana. Just reviewed your audit for ${companyName}. You mentioned "${painPoint}" - I've seen this exact issue before and have a quick solution. Got 5 min to chat? Book here: https://cal.com/mia-louviere-a4n2hk/30min`

        const result = await twilioClient.messages.create({
            body: message,
            from: TWILIO_PHONE,
            to: to
        })

        // Log to Firestore
        await addDoc(collection(db, 'sms_logs'), {
            to,
            message,
            status: 'sent',
            sid: result.sid,
            auditId,
            sentAt: serverTimestamp()
        })

        console.log(`[SMS SENT] To: ${to}, SID: ${result.sid}`)
        return result

    } catch (error) {
        console.error('[SMS ERROR]', error)

        // Log error to Firestore
        await addDoc(collection(db, 'sms_logs'), {
            to,
            message: 'Failed to send',
            status: 'failed',
            error: error instanceof Error ? error.message : 'Unknown error',
            auditId,
            failedAt: serverTimestamp()
        })

        throw error
    }
}

/**
 * Notify yourself when high-intent lead submits
 */
export async function notifyTeamOfHotLead(params: SMSParams) {
    const { name, companyName, painPoint } = params

    try {
        const message = `🔥 HOT LEAD ALERT!\n\n${name} from ${companyName}\n\nPain: "${painPoint}"\n\nAudit submitted just now. Follow up ASAP!`

        await twilioClient.messages.create({
            body: message,
            from: TWILIO_PHONE,
            to: YOUR_PHONE
        })

        console.log(`[SMS NOTIFICATION] Sent to team`)

    } catch (error) {
        console.error('[SMS NOTIFICATION ERROR]', error)
        // Don't throw - this is just a notification
    }
}

/**
 * Schedule follow-up SMS messages
 */
export async function scheduleSMSFollowUp(params: SMSParams & { delay: number, template: string }) {
    const { to, name, delay, template, auditId } = params

    try {
        await addDoc(collection(db, 'scheduled_sms'), {
            to,
            name,
            template,
            auditId,
            scheduledFor: new Date(Date.now() + delay * 24 * 60 * 60 * 1000), // delay in days
            status: 'pending',
            createdAt: serverTimestamp()
        })

        console.log(`[SMS SCHEDULED] ${template} for ${name} in ${delay} days`)

    } catch (error) {
        console.error('[SMS SCHEDULE ERROR]', error)
        throw error
    }
}

/**
 * SMS Templates for different scenarios
 */
export function getSMSTemplate(template: string, data: any): string {
    const { firstName, companyName, painPoint } = data
    const calLink = 'https://cal.com/mia-louviere-a4n2hk/30min'

    const templates: { [key: string]: string } = {
        immediate: `Hey ${firstName}, it's Mia from Eliana. Just reviewed your audit for ${companyName}. You mentioned "${painPoint}" - I've seen this exact issue before and have a quick solution. Got 5 min to chat? ${calLink}`,

        day1: `${firstName}, quick follow-up on ${companyName}'s audit. I put together 3 quick wins you can implement this week. Want me to send them over? Reply YES or book a call: ${calLink}`,

        day3: `Hey ${firstName}! Created a custom automation roadmap for ${companyName}. Shows exactly how to solve "${painPoint}" in 30 days. Want to see it? ${calLink}`,

        week1: `${firstName}, last ping from me 😊 Saw ${companyName} scored low on automation (costing you $$). If you change your mind about that free strategy call: ${calLink} - Mia`,

        booked: `Thanks for booking, ${firstName}! Looking forward to our call. I'll come prepared with specific ideas for ${companyName}. See you soon! - Mia`,

        post_call: `Great chatting with you, ${firstName}! Sending over the proposal for ${companyName} today. Check your email in 2 hours. - Mia`,

        reminder: `${firstName}, friendly reminder - our call is in 1 hour! If you need to reschedule, no worries: ${calLink} - Mia`
    }

    return templates[template] || templates['immediate']
}

/**
 * Check if phone number is valid for SMS
 */
export function isValidPhoneNumber(phone: string): boolean {
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '')

    // Must be 10-11 digits (US/CA format)
    // Could also use libphonenumber-js for international support
    return cleaned.length >= 10 && cleaned.length <= 11
}

/**
 * Format phone number for Twilio (E.164 format)
 */
export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '')

    // If no country code, assume US (+1)
    if (cleaned.length === 10) {
        return `+1${cleaned}`
    }

    // If 11 digits starting with 1, add +
    if (cleaned.length === 11 && cleaned.startsWith('1')) {
        return `+${cleaned}`
    }

    // Already formatted
    if (phone.startsWith('+')) {
        return phone
    }

    return `+${cleaned}`
}

// ─── Nurture SMS Templates ───────────────────────────────────────────

export const smsTemplates = {
  hot_day0: "Hey {firstName}! Just reviewed your AI audit — impressive business. I have some specific ideas for {companyName}. Mind if I call you in the next hour? - Mia, ElianaTech",
  warm_day2: "Hey {firstName}, did you get a chance to review your AI audit results? Happy to walk through them on a quick call: {calLink} - Mia",
  warm_day5: "{firstName}, quick question — what's the #1 thing you'd automate if you could? I see a big opportunity for {companyName}. - Mia",
  cold_day14: "No worries if timing isn't right {firstName}. Your audit results are saved whenever you're ready: elianatech.com/audit - Mia",
  team_hot_alert: "🔥 HOT LEAD: {name} from {companyName} ({industry}). Score: {auditScore}. Pain: {painLevel}/10. Budget: {budget}. CALL NOW: {phone}",
  team_warm_alert: "📊 New audit: {name} from {companyName}. Score: {auditScore}. Intent: {intentLevel}. Nurture sequence {sequence} started."
}

export function personalizeSMS(template: string, data: Record<string, string>): string {
  let result = template
  for (const [key, value] of Object.entries(data)) {
    result = result.replaceAll(`{${key}}`, value)
  }
  return result
}

/**
 * Opt-out handling (required by Twilio)
 */
export async function handleSMSOptOut(phoneNumber: string) {
    try {
        await addDoc(collection(db, 'sms_optouts'), {
            phoneNumber,
            optedOutAt: serverTimestamp()
        })

        console.log(`[SMS OPTOUT] ${phoneNumber}`)
    } catch (error) {
        console.error('[SMS OPTOUT ERROR]', error)
    }
}

/**
 * Check if phone number has opted out
 */
export async function isOptedOut(phoneNumber: string): Promise<boolean> {
    // TODO: Query Firestore for opt-outs
    // For now, return false
    return false
}
