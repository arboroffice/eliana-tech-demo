export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import {
    getAllVaults, getVault, getVaultByAuditId, createVault, updateVault, deleteVault,
    appendTimeline, runVaultResearch, syncVaultToObsidian, scaffoldObsidianVault,
    generateDailyNote,
    type VaultDoc, type TimelineEntry, type CredentialEntry,
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
            audit_id: body.audit_id || '',
            created: now,
            last_contact: now,
            tags: body.tags || ['client'],
            research: '',
            strategy: '',
            onboarding_checklist: new Array(9).fill(false),
            credentials: [],
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
