import { NextResponse } from 'next/server'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Mia-Eliana476'

export async function POST(request: Request) {
    try {
        const { password } = await request.json()

        if (password === ADMIN_PASSWORD) {
            // Return a simple token (base64 of password + timestamp)
            const token = Buffer.from(`${ADMIN_PASSWORD}:${Date.now()}`).toString('base64')
            return NextResponse.json({ success: true, token })
        }

        return NextResponse.json(
            { success: false, error: 'Invalid password' },
            { status: 401 }
        )
    } catch {
        return NextResponse.json(
            { success: false, error: 'Server error' },
            { status: 500 }
        )
    }
}
