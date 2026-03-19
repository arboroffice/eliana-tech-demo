/**
 * Smart Follow-up Agent
 *
 * Uses vault context (timeline, stage, research, previous comms)
 * to write personalized, non-annoying follow-up emails.
 * Picks the right tone and approach based on where the client is.
 */

import Anthropic from '@anthropic-ai/sdk'
import { getVaultByEmail, appendTimeline, type VaultDoc, type TimelineEntry } from './client-vault'

const CAL_LINK = 'https://cal.com/elianatech/30min'

// ─── Follow-up Strategy Engine ───────────────────────────────

interface FollowUpContext {
    vault: VaultDoc
    trigger: 'post-audit' | 'gone-cold' | 'post-meeting' | 'post-proposal' | 'check-in' | 'value-drop' | 'custom'
    customNote?: string
}

interface FollowUpResult {
    subject: string
    body: string
    strategy: string
    tone: string
}

function analyzeClientState(vault: VaultDoc): {
    daysSinceLastContact: number
    emailCount: number
    smsCount: number
    meetingCount: number
    hasResearch: boolean
    hasProposal: boolean
    temperature: 'hot' | 'warm' | 'cold' | 'ice'
    suggestedTrigger: string
} {
    const now = new Date()
    const lastContact = vault.last_contact ? new Date(vault.last_contact) : new Date(vault.created)
    const daysSinceLastContact = Math.floor((now.getTime() - lastContact.getTime()) / (1000 * 60 * 60 * 24))

    let emailCount = 0
    let smsCount = 0
    for (const t of (vault.timeline || [])) {
        if (t.emoji === '📧' || t.text.includes('Email sent')) emailCount++
        if (t.emoji === '💬' || t.text.includes('SMS')) smsCount++
    }

    const meetingCount = (vault.meetings || []).length
    const hasResearch = !!vault.research
    const hasProposal = vault.timeline?.some(t => t.text.includes('Proposal')) || false

    let temperature: 'hot' | 'warm' | 'cold' | 'ice'
    if (daysSinceLastContact <= 2) temperature = 'hot'
    else if (daysSinceLastContact <= 7) temperature = 'warm'
    else if (daysSinceLastContact <= 21) temperature = 'cold'
    else temperature = 'ice'

    let suggestedTrigger = 'check-in'
    if (emailCount === 0 && vault.stage === 'new') suggestedTrigger = 'post-audit'
    else if (hasProposal && vault.stage === 'proposal-sent') suggestedTrigger = 'post-proposal'
    else if (meetingCount > 0 && daysSinceLastContact <= 3) suggestedTrigger = 'post-meeting'
    else if (temperature === 'cold' || temperature === 'ice') suggestedTrigger = 'gone-cold'
    else if (emailCount >= 2) suggestedTrigger = 'value-drop'

    return { daysSinceLastContact, emailCount, smsCount, meetingCount, hasResearch, hasProposal, temperature, suggestedTrigger }
}

// ─── Build the smart prompt ──────────────────────────────────

function buildFollowUpPrompt(ctx: FollowUpContext, state: ReturnType<typeof analyzeClientState>): string {
    const v = ctx.vault

    // Build previous comms summary (last 5 timeline entries with content)
    const recentComms = (v.timeline || [])
        .filter(t => t.emoji === '📧' || t.emoji === '💬' || t.text.includes('Email') || t.text.includes('SMS'))
        .slice(-5)
        .map(t => `  [${new Date(t.timestamp).toLocaleDateString()}] ${t.text.split('\n')[0]}`)
        .join('\n')

    // Build meeting notes summary
    const recentMeetings = (v.meetings || [])
        .slice(-2)
        .map(m => `  [${m.date}] ${m.title}: ${m.notes?.slice(0, 200) || 'No notes'}`)
        .join('\n')

    const triggerInstructions: Record<string, string> = {
        'post-audit': `This person JUST completed their AI readiness audit. This is the first real touchpoint. Be warm, reference their specific score and biggest pain point. Don't sell — acknowledge what they shared and show you actually read it. Soft CTA to book a call.`,

        'gone-cold': `It's been ${state.daysSinceLastContact} days since last contact. They've received ${state.emailCount} emails already. Do NOT be aggressive or guilt-trippy. Instead, lead with genuine value — share a quick win or insight relevant to their industry. If they're not interested, that's fine. One gentle mention of the call link. This should feel like a friend checking in, not a sales rep following up.`,

        'post-meeting': `You just had a meeting with them. Reference what was discussed (see meeting notes below). The email should recap key points, confirm next steps, and feel like a natural continuation of the conversation — not a sales follow-up.`,

        'post-proposal': `A proposal was sent. This is a follow-up on the proposal. Don't re-pitch — ask if they have questions, offer to walk through any part of it, and make it easy to say yes OR ask for changes. Be confident but not pushy.`,

        'check-in': `Casual check-in. Maybe share something relevant you noticed about their industry, a new tool, or a quick tip. The goal is to stay top of mind without being annoying. No pressure, no CTA unless it flows naturally.`,

        'value-drop': `Give them something genuinely useful. Based on their audit data and industry, share a specific actionable insight they can implement WITHOUT hiring you. This builds trust and positions you as the expert. Mention you have more ideas if they want to chat, but the value should stand on its own.`,

        'custom': ctx.customNote || 'Write a thoughtful, personalized follow-up.',
    }

    return `You are Mia from ElianaTech. You're writing a follow-up email that should feel like it's from a real person who actually cares — not a CRM automation.

═══ CLIENT CONTEXT ═══
Name: ${v.contact} (Company: ${v.company})
Email: ${v.email}
Industry: ${v.industry}
Status: ${v.status} | Stage: ${v.stage}
Lead Score: ${v.lead_score}/100 | Audit Score: ${v.audit_score}/100
Intent: ${v.intent} | Budget: ${v.budget}
Deal Value: ${v.deal_value ? `$${v.deal_value.toLocaleString()}` : 'Not set'}
Created: ${v.created} | Last Contact: ${v.last_contact}
Days Since Last Contact: ${state.daysSinceLastContact}

═══ COMMUNICATION HISTORY ═══
Emails sent: ${state.emailCount} | SMS sent: ${state.smsCount} | Meetings: ${state.meetingCount}
Temperature: ${state.temperature.toUpperCase()}
${recentComms ? `\nRecent messages:\n${recentComms}` : '\nNo previous messages sent.'}
${recentMeetings ? `\nRecent meetings:\n${recentMeetings}` : ''}

═══ RESEARCH ═══
${v.research ? v.research.slice(0, 500) : 'No research available.'}

═══ STRATEGY NOTES ═══
${v.strategy ? v.strategy.slice(0, 300) : 'No strategy notes.'}

═══ TRIGGER: ${ctx.trigger.toUpperCase()} ═══
${triggerInstructions[ctx.trigger]}

═══ RULES ═══
1. Write as Mia, founder of ElianaTech. First person. Conversational. Like texting a smart friend.
2. Reference SPECIFIC details from their data — their score, their industry, their pain point, their tools. Never be generic.
3. DO NOT repeat anything from previous emails. If you've already sent a warm-nudge, try a different angle.
4. Subject line: under 50 chars. No emojis. No clickbait. Something they'd actually open from a person they know.
5. Body: plain text. Under 120 words. Short paragraphs. Easy to scan on mobile.
6. ${state.emailCount >= 3 ? 'They have received 3+ emails. Be EXTRA careful not to be annoying. Consider whether this email is truly necessary.' : ''}
7. Include cal link ONLY if it makes sense: ${CAL_LINK}
8. Sign off as "Mia" — not "Mia from ElianaTech" or with a corporate signature.
9. NO emojis in subject. Max 1 emoji in body if it feels natural.
10. If the trigger is "gone-cold" or they seem uninterested, keep it SHORT (2-3 sentences max).

Respond with ONLY valid JSON:
{"subject": "...", "body": "...", "strategy": "one sentence explaining your approach", "tone": "one word: warm/casual/direct/generous/gentle"}`
}

// ─── Main Agent Function ─────────────────────────────────────

export async function generateSmartFollowUp(
    email: string,
    trigger?: string,
    customNote?: string
): Promise<FollowUpResult & { state: ReturnType<typeof analyzeClientState> }> {
    const vault = await getVaultByEmail(email)
    if (!vault) throw new Error('No vault found for this email')

    const state = analyzeClientState(vault)
    const effectiveTrigger = (trigger || state.suggestedTrigger) as FollowUpContext['trigger']

    const ctx: FollowUpContext = {
        vault,
        trigger: effectiveTrigger,
        customNote,
    }

    const prompt = buildFollowUpPrompt(ctx, state)

    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const message = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        messages: [{ role: 'user', content: prompt }],
    })

    const content = message.content[0]
    if (content.type !== 'text') throw new Error('Unexpected response type')

    let result: FollowUpResult
    try {
        result = JSON.parse(content.text)
    } catch {
        const match = content.text.match(/\{[\s\S]*\}/)
        if (match) result = JSON.parse(match[0])
        else throw new Error('Failed to parse agent response')
    }

    return { ...result, state }
}

// ─── Batch: Suggest follow-ups for all stale clients ─────────

export async function suggestFollowUps(vaults: VaultDoc[]): Promise<Array<{
    vaultId: string
    company: string
    email: string
    suggestedTrigger: string
    temperature: string
    daysSinceLastContact: number
    emailCount: number
}>> {
    const suggestions = []

    for (const v of vaults) {
        if (!v.email || v.status === 'churned' || v.stage === 'won' || v.stage === 'lost') continue

        const state = analyzeClientState(v)

        // Only suggest follow-ups for clients that need attention
        if (state.daysSinceLastContact >= 3 || (state.emailCount === 0 && state.daysSinceLastContact >= 1)) {
            suggestions.push({
                vaultId: v.id!,
                company: v.company,
                email: v.email,
                suggestedTrigger: state.suggestedTrigger,
                temperature: state.temperature,
                daysSinceLastContact: state.daysSinceLastContact,
                emailCount: state.emailCount,
            })
        }
    }

    // Sort: coldest first (need most attention)
    suggestions.sort((a, b) => b.daysSinceLastContact - a.daysSinceLastContact)

    return suggestions
}
