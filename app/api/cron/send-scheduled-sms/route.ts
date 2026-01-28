import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, query, where, getDocs, updateDoc, doc } from 'firebase/firestore'
import twilio from 'twilio'
import { getSMSTemplate } from '@/lib/sms-service'

let twilioClient: any = null;
if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
    twilioClient = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
    )
}

const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER

/**
 * Cron job to send scheduled SMS messages
 * Run every 6 hours
 */
export async function GET(request: Request) {
    try {
        if (!twilioClient) {
            console.error("Twilio credentials missing");
            return NextResponse.json({ error: 'Configuration Error' }, { status: 500 })
        }

        // Verify cron secret
        const authHeader = request.headers.get('authorization')
        if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const now = new Date()
        const smsSent = []

        // Query for pending SMS that should be sent now
        const scheduledSMSRef = collection(db, 'scheduled_sms')
        const q = query(
            scheduledSMSRef,
            where('status', '==', 'pending'),
            where('scheduledFor', '<=', now)
        )

        const snapshot = await getDocs(q)

        for (const smsDoc of snapshot.docs) {
            const smsData = smsDoc.data()

            try {
                const firstName = smsData.name.split(' ')[0]

                // Get SMS content from template
                const message = getSMSTemplate(smsData.template, {
                    firstName,
                    companyName: smsData.companyName || '',
                    painPoint: smsData.painPoint || 'your business goals'
                })

                // Send SMS using Twilio
                await twilioClient.messages.create({
                    body: message,
                    from: TWILIO_PHONE,
                    to: smsData.to
                })

                // Update status to 'sent'
                await updateDoc(doc(db, 'scheduled_sms', smsDoc.id), {
                    status: 'sent',
                    sentAt: new Date()
                })

                smsSent.push({
                    id: smsDoc.id,
                    to: smsData.to,
                    template: smsData.template
                })

                console.log(`[CRON SMS] Sent to ${smsData.to}`)
            } catch (error) {
                console.error(`[CRON SMS ERROR] Failed to send ${smsDoc.id}:`, error)

                // Update status to 'failed'
                await updateDoc(doc(db, 'scheduled_sms', smsDoc.id), {
                    status: 'failed',
                    error: error instanceof Error ? error.message : 'Unknown error',
                    failedAt: new Date()
                })
            }
        }

        return NextResponse.json({
            success: true,
            smsSent: smsSent.length,
            details: smsSent
        })

    } catch (error) {
        console.error('[CRON SMS ERROR]', error)
        return NextResponse.json(
            { success: false, error: 'Failed to process scheduled SMS' },
            { status: 500 }
        )
    }
}
