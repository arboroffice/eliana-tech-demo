import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { sendWhatsAppNotification } from '@/lib/sms-service'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
    try {
        const { fullName, email, phone, linkedinOrWebsite, currentRole, motivation, source } = await req.json()

        // Store in Firestore
        await addDoc(collection(db, 'partner_applications'), {
            fullName,
            email,
            phone,
            linkedinOrWebsite,
            currentRole,
            motivation,
            source,
            status: 'pending',
            createdAt: serverTimestamp()
        })

        // Send notification email
        await resend.emails.send({
            from: 'Eliana <noreply@eliana.tech>',
            to: 'elianatech@yahoo.com',
            subject: `New Certified Partner Application: ${fullName}`,
            html: `
                <h2>New Certified Partner Application</h2>
                <table style="border-collapse:collapse;width:100%">
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Full Name</td><td style="padding:8px;border:1px solid #ddd">${fullName}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #ddd">${phone || 'N/A'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">LinkedIn/Website</td><td style="padding:8px;border:1px solid #ddd">${linkedinOrWebsite || 'N/A'}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Current Role</td><td style="padding:8px;border:1px solid #ddd">${currentRole}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Motivation</td><td style="padding:8px;border:1px solid #ddd">${motivation}</td></tr>
                    <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">Source</td><td style="padding:8px;border:1px solid #ddd">${source || 'N/A'}</td></tr>
                </table>
            `,
            replyTo: 'mia@eliana.tech'
        })

        // Send WhatsApp notification
        await sendWhatsAppNotification('Certified Partner', { Name: fullName, Email: email, Role: currentRole })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[PARTNER APPLICATION ERROR]', error)
        return NextResponse.json({ error: 'Failed to process application' }, { status: 500 })
    }
}
