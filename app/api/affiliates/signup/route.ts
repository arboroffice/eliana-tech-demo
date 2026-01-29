import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendWhatsAppNotification } from '@/lib/sms-service'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, referralMethod, website } = await req.json()

        // Store in Firestore
        await addDoc(collection(db, 'affiliate_applications'), {
            name,
            email,
            phone,
            referralMethod,
            website,
            status: 'pending',
            createdAt: serverTimestamp()
        })

        // Send notification email
        await resend.emails.send({
            from: 'Eliana <noreply@eliana.tech>',
            to: 'elianatech@yahoo.com',
            subject: `New Affiliate Application: ${name}`,
            html: `
                <h2>New Affiliate Application</h2>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || 'N/A'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Referral Method</td><td style="padding:8px;border:1px solid #ddd">${referralMethod}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Website</td><td style="padding:8px;border:1px solid #ddd">${website || 'N/A'}</td></tr>
                </table>
            `,
            replyTo: 'mia@eliana.tech'
        })

        // Send WhatsApp notification
        await sendWhatsAppNotification('Affiliate', { Name: name, Email: email, Method: referralMethod })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[AFFILIATE SIGNUP ERROR]', error)
        return NextResponse.json({ error: 'Failed to process application' }, { status: 500 })
    }
}
