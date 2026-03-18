export const dynamic = 'force-dynamic'
import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, getDocs, addDoc, query, orderBy, doc, deleteDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore'
import { syncStageToGHL } from '@/lib/ghl'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Mia-Eliana476'

function verifyToken(authHeader: string | null): boolean {
    if (!authHeader?.startsWith('Bearer ')) return false
    try {
        const token = authHeader.split(' ')[1]
        const decoded = Buffer.from(token, 'base64').toString('utf-8')
        const [password] = decoded.split(':')
        return password === ADMIN_PASSWORD
    } catch {
        return false
    }
}

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const auditsRef = collection(db, 'audits')
        const q = query(auditsRef, orderBy('createdAt', 'desc'))
        const snapshot = await getDocs(q)

        const submissions = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate?.()?.toISOString() || doc.data().submittedAt || null,
        }))

        return NextResponse.json({ success: true, submissions })
    } catch (error) {
        console.error('Error fetching submissions:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to fetch submissions' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { id } = await request.json()
        if (!id) {
            return NextResponse.json({ error: 'Missing submission ID' }, { status: 400 })
        }

        await deleteDoc(doc(db, 'audits', id))
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Error deleting submission:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to delete submission' },
            { status: 500 }
        )
    }
}

export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const submission = await request.json()

        // Ensure we have minimal required fields
        if (!submission.fullName || !submission.email || !submission.companyName) {
            return NextResponse.json(
                { success: false, error: 'Name, Email, and Company Name are required' },
                { status: 400 }
            )
        }

        const auditsRef = collection(db, 'audits')
        const data = {
            ...submission,
            stage: 'new',
            notes: [],
            createdAt: new Date(),
            submittedAt: new Date().toISOString(),
            source: 'admin_manual_entry'
        }

        const docRef = await addDoc(auditsRef, data)

        return NextResponse.json({
            success: true,
            id: docRef.id,
            submission: {
                id: docRef.id,
                ...data,
                createdAt: data.createdAt.toISOString()
            }
        })
    } catch (error) {
        console.error('Error adding submission:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to add submission' },
            { status: 500 }
        )
    }
}

// PATCH: Update stage, add note, or update fields on a submission
export async function PATCH(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { id, action, ...payload } = await request.json()
        if (!id) {
            return NextResponse.json({ error: 'Missing submission ID' }, { status: 400 })
        }

        const docRef = doc(db, 'audits', id)

        if (action === 'update-stage') {
            const { stage } = payload
            const validStages = ['new', 'contacted', 'call-booked', 'proposal-sent', 'negotiating', 'won', 'lost']
            if (!validStages.includes(stage)) {
                return NextResponse.json({ error: 'Invalid stage' }, { status: 400 })
            }
            await updateDoc(docRef, {
                stage,
                stageUpdatedAt: new Date().toISOString(),
            })
            // Also add an auto-note for stage change
            await updateDoc(docRef, {
                notes: arrayUnion({
                    text: `Stage changed to "${stage}"`,
                    type: 'system',
                    createdAt: new Date().toISOString(),
                })
            })

            // Sync stage to GHL if contact is linked
            try {
                const snap = await getDoc(docRef)
                const data = snap.data()
                if (data?.ghlContactId) {
                    await syncStageToGHL(data, stage)
                }
            } catch (e) {
                console.error('[GHL] Stage sync error:', e)
            }

            return NextResponse.json({ success: true, stage })
        }

        if (action === 'add-note') {
            const { text, type = 'note' } = payload
            if (!text?.trim()) {
                return NextResponse.json({ error: 'Note text is required' }, { status: 400 })
            }
            const note = {
                text: text.trim(),
                type,
                createdAt: new Date().toISOString(),
            }
            await updateDoc(docRef, {
                notes: arrayUnion(note)
            })
            return NextResponse.json({ success: true, note })
        }

        if (action === 'update-fields') {
            const { fields } = payload
            if (!fields || typeof fields !== 'object') {
                return NextResponse.json({ error: 'Fields object is required' }, { status: 400 })
            }
            await updateDoc(docRef, fields)
            return NextResponse.json({ success: true })
        }

        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    } catch (error) {
        console.error('Error updating submission:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to update submission' },
            { status: 500 }
        )
    }
}
