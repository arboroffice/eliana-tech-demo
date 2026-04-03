import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { cancelPendingEmails } from '@/lib/email-service'

/**
 * Cal.com Webhook Handler
 * Triggers sequences based on booking events
 */
export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { triggerEvent, payload } = body
        
        // Cal.com payload structure
        const attendee = payload?.attendees?.[0]
        const email = attendee?.email
        const name = attendee?.name || 'there'
        const firstName = name.split(' ')[0]
        
        if (!email) {
            return NextResponse.json({ success: false, message: 'No email found' })
        }

        console.log(`[CAL WEBHOOK] Event: ${triggerEvent} for ${email}`)

        // 1. Handle No-Show / Cancellation (Sequence D)
        const isMissedEvent = [
            'BOOKING_CANCELLED', 
            'BOOKING_REJECTED', 
            'BOOKING_NO_SHOW', 
            'BOOKING_NOSHOW_UPDATED'
        ].includes(triggerEvent)

        if (isMissedEvent) {
            await addDoc(collection(db, 'scheduled_emails'), {
                to: email,
                subject: "Sorry we missed each other",
                template: 'SEQUENCE_D_DAY0',
                data: { 
                    firstName,
                    companyName: payload?.responses?.companyName?.value || 'your business'
                },
                scheduledFor: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours later
                status: 'pending',
                createdAt: serverTimestamp()
            })
            console.log(`[CAL] Scheduled Recovery Sequence (D) for ${email}`)
        }

        // 2. Handle Re-booking or Success Events (Cancel Recovery/Abandonment)
        const isSuccessEvent = [
            'BOOKING_CREATED', 
            'BOOKING_RESCHEDULED', 
            'BOOKING_PAID'
        ].includes(triggerEvent)

        if (isSuccessEvent) {
            // Cancel No-Show recovery if they re-booked or rescheduled
            await cancelPendingEmails(email, 'SEQUENCE_D')
            // Also cancel abandonment emails if they completed the goal
            await cancelPendingEmails(email, 'SEQUENCE_F')
            // Cancel the standard 7-day nurture sequence
            await cancelPendingEmails(email, 'SEQUENCE_N')
            
            console.log(`[CAL] Success event (${triggerEvent}) for ${email}. Cancelled nurture/recovery.`)
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[CAL WEBHOOK ERROR]', error)
        return NextResponse.json({ success: false, error: 'Webhook processing failed' }, { status: 500 })
    }
}
