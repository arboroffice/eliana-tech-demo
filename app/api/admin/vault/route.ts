export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import {
    getAllVaults, getVault, getVaultByAuditId, createVault, updateVault, deleteVault,
    appendTimeline, runVaultResearch, syncVaultToObsidian, scaffoldObsidianVault,
    generateDailyNote, generateWeeklyDigest, createMeetingNote, updateMeetingNote, deleteMeetingNote,
    getObsidianUri, generateIndustryPlaybook, syncPlaybookToObsidian,
    type VaultDoc, type TimelineEntry, type CredentialEntry,
    type DeploymentConfig, type ClientMetrics, type IssueEntry,
} from '@/lib/client-vault'

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

// GET: List all vaults, or single by ?id= or ?auditId=
export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')
        const auditId = searchParams.get('auditId')

        if (id) {
            const vault = await getVault(id)
            if (!vault) return NextResponse.json({ error: 'Not found' }, { status: 404 })
            return NextResponse.json({ success: true, vault })
        }

        if (auditId) {
            const vault = await getVaultByAuditId(auditId)
            if (!vault) return NextResponse.json({ error: 'Not found' }, { status: 404 })
            return NextResponse.json({ success: true, vault })
        }

        const vaults = await getAllVaults()
        return NextResponse.json({ success: true, vaults })
    } catch (error) {
        console.error('[VAULT GET ERROR]', error)
        return NextResponse.json({ success: false, error: 'Failed to fetch vaults' }, { status: 500 })
    }
}

// POST: Create vault manually
export async function POST(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const body = await request.json()

        if (!body.company || !body.email) {
            return NextResponse.json({ error: 'Company name and email are required' }, { status: 400 })
        }

        const now = new Date().toISOString().split('T')[0]
        const vault: Omit<VaultDoc, 'id'> = {
            company: body.company,
            contact: body.contact || '',
            email: body.email,
            phone: body.phone || '',
            website: body.website || '',
            industry: body.industry || '',
            status: body.status || 'prospect',
            stage: body.stage || 'new',
            lead_score: body.lead_score || 0,
            audit_score: body.audit_score || 0,
            intent: body.intent || 'unknown',
            budget: body.budget || '',
            deal_value: body.deal_value || 0,
            referred_by: body.referred_by || '',
            audit_id: body.audit_id || '',
            created: now,
            last_contact: now,
            tags: body.tags || ['client'],
            research: '',
            strategy: '',
            onboarding_checklist: new Array(9).fill(false),
            credentials: [],
            meetings: [],
            deployment: { model: '', tools: [], system_prompt_ref: '', endpoints: [], api_keys_rotated: '', notes: '' },
            metrics: { monthly_spend: 0, hours_saved: 0, tickets_deflected: 0, response_time_before: '', response_time_after: '', roi_notes: '', custom: {} },
            issues: [],
            timeline: [{
                timestamp: new Date().toISOString(),
                emoji: '📝',
                text: 'Vault created manually',
            }],
        }

        const id = await createVault(vault)
        return NextResponse.json({ success: true, id })
    } catch (error) {
        console.error('[VAULT POST ERROR]', error)
        return NextResponse.json({ success: false, error: 'Failed to create vault' }, { status: 500 })
    }
}

// PATCH: Various update actions
export async function PATCH(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { id, action, ...payload } = await request.json()
        if (!id) return NextResponse.json({ error: 'Missing vault ID' }, { status: 400 })

        const vault = await getVault(id)
        if (!vault) return NextResponse.json({ error: 'Vault not found' }, { status: 404 })

        switch (action) {
            case 'update-status': {
                const { status, stage } = payload
                const updates: Partial<VaultDoc> = {}
                if (status) updates.status = status
                if (stage) updates.stage = stage
                await updateVault(id, updates)
                return NextResponse.json({ success: true })
            }

            case 'update-section': {
                const { section, content } = payload
                if (!['research', 'strategy'].includes(section)) {
                    return NextResponse.json({ error: 'Invalid section' }, { status: 400 })
                }
                await updateVault(id, { [section]: content })
                return NextResponse.json({ success: true })
            }

            case 'add-timeline': {
                const { emoji, text } = payload
                const entry: TimelineEntry = {
                    timestamp: new Date().toISOString(),
                    emoji: emoji || '📝',
                    text: text || '',
                }
                await appendTimeline(id, entry)
                return NextResponse.json({ success: true })
            }

            case 'toggle-checklist': {
                const { index } = payload
                const checklist = [...(vault.onboarding_checklist || new Array(9).fill(false))]
                if (index >= 0 && index < checklist.length) {
                    checklist[index] = !checklist[index]
                    await updateVault(id, { onboarding_checklist: checklist })
                }
                return NextResponse.json({ success: true, checklist })
            }

            case 'add-credential': {
                const { service, username, notes } = payload
                const cred: CredentialEntry = { service: service || '', username: username || '', notes: notes || '' }
                const creds = [...(vault.credentials || []), cred]
                await updateVault(id, { credentials: creds })
                return NextResponse.json({ success: true })
            }

            case 'remove-credential': {
                const { credIndex } = payload
                const creds = [...(vault.credentials || [])]
                if (credIndex >= 0 && credIndex < creds.length) {
                    creds.splice(credIndex, 1)
                    await updateVault(id, { credentials: creds })
                }
                return NextResponse.json({ success: true })
            }

            case 'refresh-research': {
                const research = await runVaultResearch(id)
                return NextResponse.json({ success: true, research })
            }

            case 'sync-obsidian': {
                const freshVault = await getVault(id)
                if (freshVault) await syncVaultToObsidian(freshVault)
                return NextResponse.json({ success: true })
            }

            case 'scaffold': {
                await scaffoldObsidianVault()
                const vaults = await getAllVaults()
                await generateDailyNote(vaults)
                return NextResponse.json({ success: true })
            }

            case 'daily-note': {
                const vaults = await getAllVaults()
                await generateDailyNote(vaults)
                return NextResponse.json({ success: true })
            }

            case 'update-deal-value': {
                const { deal_value } = payload
                await updateVault(id, { deal_value: Number(deal_value) || 0 })
                return NextResponse.json({ success: true })
            }

            case 'create-meeting': {
                const { date, title, attendees, notes: meetingNotes, action_items } = payload
                if (!title || !date) {
                    return NextResponse.json({ error: 'Title and date are required' }, { status: 400 })
                }
                const meeting = await createMeetingNote(id, {
                    date,
                    title,
                    attendees: attendees || '',
                    notes: meetingNotes || '',
                    action_items: action_items || [],
                })
                return NextResponse.json({ success: true, meeting })
            }

            case 'update-meeting': {
                const { meetingId, ...meetingUpdates } = payload
                if (!meetingId) {
                    return NextResponse.json({ error: 'Meeting ID is required' }, { status: 400 })
                }
                await updateMeetingNote(id, meetingId, meetingUpdates)
                return NextResponse.json({ success: true })
            }

            case 'delete-meeting': {
                const { meetingId: delMeetingId } = payload
                if (!delMeetingId) {
                    return NextResponse.json({ error: 'Meeting ID is required' }, { status: 400 })
                }
                await deleteMeetingNote(id, delMeetingId)
                return NextResponse.json({ success: true })
            }

            case 'update-referral': {
                const { referred_by } = payload
                await updateVault(id, { referred_by: referred_by || '' })
                return NextResponse.json({ success: true })
            }

            case 'weekly-digest': {
                const allVaults = await getAllVaults()
                await generateWeeklyDigest(allVaults)
                return NextResponse.json({ success: true })
            }

            case 'get-obsidian-uri': {
                const uri = getObsidianUri(vault.company)
                return NextResponse.json({ success: true, uri })
            }

            case 'update-deployment': {
                const deployment: DeploymentConfig = {
                    model: payload.model || vault.deployment?.model || '',
                    tools: payload.tools || vault.deployment?.tools || [],
                    system_prompt_ref: payload.system_prompt_ref || vault.deployment?.system_prompt_ref || '',
                    endpoints: payload.endpoints || vault.deployment?.endpoints || [],
                    api_keys_rotated: payload.api_keys_rotated || vault.deployment?.api_keys_rotated || '',
                    notes: payload.notes ?? vault.deployment?.notes ?? '',
                }
                await updateVault(id, { deployment })
                return NextResponse.json({ success: true })
            }

            case 'update-metrics': {
                const metrics: ClientMetrics = {
                    monthly_spend: payload.monthly_spend ?? vault.metrics?.monthly_spend ?? 0,
                    hours_saved: payload.hours_saved ?? vault.metrics?.hours_saved ?? 0,
                    tickets_deflected: payload.tickets_deflected ?? vault.metrics?.tickets_deflected ?? 0,
                    response_time_before: payload.response_time_before ?? vault.metrics?.response_time_before ?? '',
                    response_time_after: payload.response_time_after ?? vault.metrics?.response_time_after ?? '',
                    roi_notes: payload.roi_notes ?? vault.metrics?.roi_notes ?? '',
                    custom: payload.custom ?? vault.metrics?.custom ?? {},
                }
                await updateVault(id, { metrics })
                return NextResponse.json({ success: true })
            }

            case 'add-issue': {
                const issue: IssueEntry = {
                    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
                    date: payload.date || new Date().toISOString().split('T')[0],
                    title: payload.title || '',
                    description: payload.description || '',
                    resolution: payload.resolution || '',
                    severity: payload.severity || 'medium',
                    resolved: false,
                }
                const issues = [...(vault.issues || []), issue]
                await updateVault(id, { issues })
                await appendTimeline(id, { timestamp: new Date().toISOString(), emoji: '🐛', text: `Issue: ${issue.title} (${issue.severity})` })
                return NextResponse.json({ success: true, issue })
            }

            case 'resolve-issue': {
                const { issueId, resolution: issueResolution } = payload
                const issues = (vault.issues || []).map(i =>
                    i.id === issueId ? { ...i, resolved: true, resolution: issueResolution || i.resolution } : i
                )
                await updateVault(id, { issues })
                const resolved = issues.find(i => i.id === issueId)
                if (resolved) {
                    await appendTimeline(id, { timestamp: new Date().toISOString(), emoji: '✅', text: `Issue resolved: ${resolved.title}` })
                }
                return NextResponse.json({ success: true })
            }

            case 'delete-issue': {
                const { issueId: delIssueId } = payload
                const updatedIssues = (vault.issues || []).filter(i => i.id !== delIssueId)
                await updateVault(id, { issues: updatedIssues })
                return NextResponse.json({ success: true })
            }

            case 'generate-playbook': {
                const { industry: playbookIndustry } = payload
                const targetIndustry = playbookIndustry || vault.industry
                if (!targetIndustry) return NextResponse.json({ error: 'Industry is required' }, { status: 400 })
                const allVaults = await getAllVaults()
                const content = await generateIndustryPlaybook(targetIndustry, allVaults)
                await syncPlaybookToObsidian(targetIndustry, content, allVaults)
                return NextResponse.json({ success: true, content })
            }

            default:
                return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
        }
    } catch (error: any) {
        console.error('[VAULT PATCH ERROR]', error)
        return NextResponse.json({ success: false, error: error.message || 'Failed to update vault' }, { status: 500 })
    }
}

// DELETE: Remove vault
export async function DELETE(request: Request) {
    const authHeader = request.headers.get('authorization')
    if (!verifyToken(authHeader)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    try {
        const { id } = await request.json()
        if (!id) return NextResponse.json({ error: 'Missing vault ID' }, { status: 400 })
        await deleteVault(id)
        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('[VAULT DELETE ERROR]', error)
        return NextResponse.json({ success: false, error: 'Failed to delete vault' }, { status: 500 })
    }
}
