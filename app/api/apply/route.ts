import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

export async function POST(request: Request) {
    try {
        const data = await request.json()

        // Validate required fields
        if (!data.fullName?.trim() || !data.email?.trim()) {
            return NextResponse.json(
                { success: false, error: 'Name and email are required' },
                { status: 400 }
            )
        }

        if (!data.whatBuilding?.trim() || !data.whatTried?.trim() || !data.whyNow?.trim()) {
            return NextResponse.json(
                { success: false, error: 'All three application questions are required' },
                { status: 400 }
            )
        }

        // Store in Firebase — same 'audits' collection so it shows in admin
        const docRef = await addDoc(collection(db, 'audits'), {
            // Contact info
            fullName: data.fullName.trim(),
            email: data.email.trim(),
            phoneNumber: data.phoneNumber?.trim() || '',
            companyName: data.companyName?.trim() || '',
            // Application questions
            whatBuilding: data.whatBuilding.trim(),
            whatTried: data.whatTried.trim(),
            whyNow: data.whyNow.trim(),
            // Metadata
            source: 'build_program_application',
            accountType: 'apply',
            stage: 'new',
            notes: [],
            createdAt: serverTimestamp(),
            submittedAt: new Date().toISOString(),
        })

        // Subscribe to FOTF on Substack
        try {
            await fetch('https://miaelianaa.substack.com/api/v1/free?nojs=true', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email: data.email.trim(),
                    first_url: 'https://elianatech.com/apply',
                    first_referrer: 'https://elianatech.com',
                    current_url: 'https://elianatech.com/apply',
                    current_referrer: 'https://elianatech.com',
                }).toString(),
            })
            console.log(`[SUBSTACK] Subscribed ${data.email.trim()} to FOTF`)
        } catch (substackError) {
            console.error('[SUBSTACK ERROR]', substackError)
        }

        return NextResponse.json({
            success: true,
            id: docRef.id,
        })
    } catch (error) {
        console.error('Application submission error:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to submit application' },
            { status: 500 }
        )
    }
}
