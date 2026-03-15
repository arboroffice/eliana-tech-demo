import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp, query, where, getDocs, limit } from 'firebase/firestore'

export async function POST(request: Request) {
    try {
        const { email, name, formData, currentStep } = await request.json()
        
        if (!email) {
            return NextResponse.json({ success: false, message: 'Email required' })
        }

        // 1. Store partial audit progress
        const partialAuditRef = await addDoc(collection(db, 'partial_audits'), {
            email,
            fullName: name || '',
            formData: formData || {},
            currentStep: currentStep || 0,
            status: 'abandoned_pending',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        })

        // 2. Check if a nurture email for Abandonment is already scheduled
        // If not, schedule Sequence F Day 0 for 1 hour from now
        const scheduledEmailsRef = collection(db, 'scheduled_emails')
        const q = query(
            scheduledEmailsRef,
            where('to', '==', email),
            where('template', '==', 'SEQUENCE_F_DAY0'),
            where('status', '==', 'pending'),
            limit(1)
        )
        const snapshot = await getDocs(q)

        if (snapshot.empty) {
            // Schedule the nudge for 1 hour in the future
            // If they finish the audit before then, the submit route will cancel this.
            await addDoc(collection(db, 'scheduled_emails'), {
                to: email,
                subject: "Finish your AI Audit",
                template: 'SEQUENCE_F_DAY0',
                data: { 
                    firstName: (name || '').split(' ')[0] || 'there',
                    companyName: formData?.companyName || 'your business'
                },
                scheduledFor: new Date(Date.now() + 60 * 60 * 1000), // 1 hour from now
                status: 'pending',
                createdAt: serverTimestamp()
            })
            console.log(`[ABANDONMENT] Scheduled Sequence F for ${email}`)
        }

        return NextResponse.json({ success: true, id: partialAuditRef.id })
    } catch (error) {
        console.error('[SAVE PROGRESS ERROR]', error)
        return NextResponse.json({ success: false, error: 'Failed to save progress' }, { status: 500 })
    }
}
