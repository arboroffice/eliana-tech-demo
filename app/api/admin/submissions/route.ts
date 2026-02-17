import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { collection, getDocs, query, orderBy, doc, deleteDoc } from 'firebase/firestore'

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
