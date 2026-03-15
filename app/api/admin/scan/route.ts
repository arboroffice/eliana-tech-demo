import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { researchCompany } from '@/lib/proposal-agent'

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
})

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

export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { url } = await request.json()

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 })
        }

        // 1. Scrape the website
        const websiteContent = await researchCompany(url)

        // 2. Use Claude to extract details
        const message = await anthropic.messages.create({
            model: 'claude-sonnet-4-6',
            max_tokens: 500,
            messages: [
                {
                    role: 'user',
                    content: `Extract the following information from this website content:
- Company Name
- Contact Name (if found, otherwise use "Business Owner")
- Phone Number
- Email Address
- Business Type (e.g. HVAC, Roofing, Online Course, Agency, SaaS, etc.)
- Website URL (the one provided)

WEBSITE CONTENT:
${websiteContent}

Respond ONLY with a JSON object in this format:
{
  "companyName": "string",
  "fullName": "string",
  "phoneNumber": "string",
  "email": "string",
  "businessType": "string",
  "websiteUrl": "${url}"
}

If a field is not found, use an empty string.`,
                },
            ],
        })

        const responseText = message.content
            .filter((block): block is Anthropic.TextBlock => block.type === 'text')
            .map((block) => block.text)
            .join('')

        // Clean up JSON response
        const jsonMatch = responseText.match(/\{[\s\S]*\}/)
        const jsonStr = jsonMatch ? jsonMatch[0] : responseText
        const data = JSON.parse(jsonStr)

        return NextResponse.json({ success: true, data })
    } catch (error) {
        console.error('Error scanning website:', error)
        return NextResponse.json(
            { success: false, error: 'Failed to scan website' },
            { status: 500 }
        )
    }
}
