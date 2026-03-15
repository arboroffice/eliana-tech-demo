/**
 * GoHighLevel (GHL) Integration Service
 * Handles contacts, opportunities, pipelines, and workflow triggers
 */

const GHL_API_KEY = process.env.GHL_API_KEY || ''
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID || ''
const GHL_BASE = 'https://services.leadconnectorhq.com'

// ═══════════════════════════════════════════════════════════════════════════
// API HELPERS
// ═══════════════════════════════════════════════════════════════════════════

async function ghlFetch(path: string, options: RequestInit = {}) {
    // Add locationId query param for company-level Private Integration tokens
    const separator = path.includes('?') ? '&' : '?'
    const url = `${GHL_BASE}${path}${separator}locationId=${GHL_LOCATION_ID}`

    const res = await fetch(url, {
        ...options,
        headers: {
            'Authorization': `Bearer ${GHL_API_KEY}`,
            'Content-Type': 'application/json',
            'Version': '2021-07-28',
            ...(options.headers || {}),
        },
    })

    if (!res.ok) {
        const text = await res.text()
        console.error(`[GHL ERROR] ${options.method || 'GET'} ${path} — ${res.status}: ${text}`)
        throw new Error(`GHL API error ${res.status}: ${text}`)
    }

    return res.json()
}

// ═══════════════════════════════════════════════════════════════════════════
// CONTACTS
// ═══════════════════════════════════════════════════════════════════════════

export interface GHLContact {
    id?: string
    firstName?: string
    lastName?: string
    name?: string
    email?: string
    phone?: string
    companyName?: string
    website?: string
    source?: string
    tags?: string[]
    customFields?: Array<{ id: string; value: string }>
}

export async function createOrUpdateContact(lead: any): Promise<{ id: string; isNew: boolean }> {
    const nameParts = (lead.fullName || '').split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // First try to find existing contact by email
    const existing = await searchContactByEmail(lead.email)
    if (existing) {
        // Update existing contact
        await updateContact(existing.id, lead)
        return { id: existing.id, isNew: false }
    }

    // Create new contact
    const body: any = {
        firstName,
        lastName,
        email: lead.email,
        phone: lead.phoneNumber || undefined,
        companyName: lead.companyName || undefined,
        website: lead.websiteUrl || undefined,
        source: 'Eliana AI Audit',
        tags: [
            'audit-lead',
            lead.intentLevel ? `intent-${lead.intentLevel}` : null,
            lead.businessType ? `biz-${lead.businessType}` : null,
        ].filter(Boolean),
    }

    const data = await ghlFetch('/contacts/', {
        method: 'POST',
        body: JSON.stringify(body),
    })

    console.log(`[GHL] Created contact: ${lead.fullName} (${data.contact?.id})`)
    return { id: data.contact?.id, isNew: true }
}

export async function searchContactByEmail(email: string): Promise<{ id: string } | null> {
    try {
        const data = await ghlFetch(`/contacts/search/duplicate?email=${encodeURIComponent(email)}`, {
            method: 'GET',
        })
        if (data.contact?.id) return { id: data.contact.id }
        return null
    } catch {
        return null
    }
}

export async function updateContact(contactId: string, lead: any) {
    const nameParts = (lead.fullName || '').split(' ')
    const body: any = {
        firstName: nameParts[0] || undefined,
        lastName: nameParts.slice(1).join(' ') || undefined,
        companyName: lead.companyName || undefined,
        website: lead.websiteUrl || undefined,
        phone: lead.phoneNumber || undefined,
        tags: [
            'audit-lead',
            lead.intentLevel ? `intent-${lead.intentLevel}` : null,
            lead.businessType ? `biz-${lead.businessType}` : null,
            lead.stage ? `stage-${lead.stage}` : null,
        ].filter(Boolean),
    }

    await ghlFetch(`/contacts/${contactId}`, {
        method: 'PUT',
        body: JSON.stringify(body),
    })

    console.log(`[GHL] Updated contact: ${contactId}`)
}

export async function getContact(contactId: string) {
    const data = await ghlFetch(`/contacts/${contactId}`)
    return data.contact
}

export async function addContactNote(contactId: string, noteBody: string) {
    await ghlFetch(`/contacts/${contactId}/notes`, {
        method: 'POST',
        body: JSON.stringify({ body: noteBody }),
    })
}

export async function addContactTags(contactId: string, tags: string[]) {
    await ghlFetch(`/contacts/${contactId}/tags`, {
        method: 'POST',
        body: JSON.stringify({ tags }),
    })
}

export async function removeContactTags(contactId: string, tags: string[]) {
    await ghlFetch(`/contacts/${contactId}/tags`, {
        method: 'DELETE',
        body: JSON.stringify({ tags }),
    })
}

// ═══════════════════════════════════════════════════════════════════════════
// PIPELINES & OPPORTUNITIES
// ═══════════════════════════════════════════════════════════════════════════

export async function getPipelines() {
    const data = await ghlFetch('/opportunities/pipelines')
    return data.pipelines || []
}

export async function createOpportunity(params: {
    contactId: string
    pipelineId: string
    stageId: string
    name: string
    monetaryValue?: number
    source?: string
}) {
    const data = await ghlFetch('/opportunities/', {
        method: 'POST',
        body: JSON.stringify({
            pipelineId: params.pipelineId,
            pipelineStageId: params.stageId,
            contactId: params.contactId,
            name: params.name,
            monetaryValue: params.monetaryValue,
            source: params.source || 'Eliana AI Audit',
            status: 'open',
        }),
    })

    console.log(`[GHL] Created opportunity: ${params.name} (${data.opportunity?.id})`)
    return data.opportunity
}

export async function updateOpportunityStage(opportunityId: string, stageId: string) {
    await ghlFetch(`/opportunities/${opportunityId}`, {
        method: 'PUT',
        body: JSON.stringify({ pipelineStageId: stageId }),
    })

    console.log(`[GHL] Updated opportunity stage: ${opportunityId} -> ${stageId}`)
}

export async function updateOpportunityStatus(opportunityId: string, status: 'open' | 'won' | 'lost' | 'abandoned') {
    await ghlFetch(`/opportunities/${opportunityId}`, {
        method: 'PUT',
        body: JSON.stringify({ status }),
    })

    console.log(`[GHL] Updated opportunity status: ${opportunityId} -> ${status}`)
}

export async function searchOpportunities(contactId: string, pipelineId: string) {
    try {
        const data = await ghlFetch(`/opportunities/search?contact_id=${contactId}&pipeline_id=${pipelineId}`)
        return data.opportunities || []
    } catch {
        return []
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// WORKFLOWS (TRIGGER EVENTS)
// ═══════════════════════════════════════════════════════════════════════════

export async function addContactToWorkflow(contactId: string, workflowId: string) {
    await ghlFetch(`/contacts/${contactId}/workflow/${workflowId}`, {
        method: 'POST',
    })
    console.log(`[GHL] Added contact ${contactId} to workflow ${workflowId}`)
}

export async function removeContactFromWorkflow(contactId: string, workflowId: string) {
    await ghlFetch(`/contacts/${contactId}/workflow/${workflowId}`, {
        method: 'DELETE',
    })
}

// ═══════════════════════════════════════════════════════════════════════════
// HIGH-LEVEL SYNC FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

// Map our pipeline stages to GHL stage names (user can configure via admin)
const DEFAULT_STAGE_MAP: Record<string, string> = {
    'new': 'New Lead',
    'contacted': 'Contacted',
    'call-booked': 'Appointment Scheduled',
    'proposal-sent': 'Proposal Sent',
    'negotiating': 'Negotiation',
    'won': 'Won',
    'lost': 'Lost',
}

/**
 * Push a lead to GHL: create contact + create opportunity
 * Called when a new audit submission comes in
 */
export async function pushLeadToGHL(lead: any, auditScore?: number): Promise<{ contactId: string; opportunityId?: string }> {
    // 1. Create or update contact
    const { id: contactId } = await createOrUpdateContact(lead)

    // 2. Add audit note to contact
    const noteLines = [
        `AI Audit Completed — Score: ${auditScore || lead.auditScore || 'N/A'}/100`,
        `Intent: ${lead.intentLevel || 'unknown'}`,
        `Business Type: ${lead.businessType || 'unknown'}`,
        `Revenue: ${lead.currentRevenue || 'unknown'}`,
        `Budget: ${lead.growthBudget || 'unknown'}`,
        lead.keepsUpAtNight ? `Pain: ${lead.keepsUpAtNight}` : null,
        lead.bottleneck ? `Bottleneck: ${lead.bottleneck}` : null,
    ].filter(Boolean).join('\n')

    try { await addContactNote(contactId, noteLines) } catch (e) { console.error('[GHL] Note error:', e) }

    // 3. Try to create opportunity in first pipeline
    let opportunityId: string | undefined
    try {
        const pipelines = await getPipelines()
        if (pipelines.length > 0) {
            const pipeline = pipelines[0]
            const firstStage = pipeline.stages?.[0]
            if (firstStage) {
                const opp = await createOpportunity({
                    contactId,
                    pipelineId: pipeline.id,
                    stageId: firstStage.id,
                    name: `${lead.companyName || lead.fullName} — AI Audit`,
                    source: 'Eliana AI Audit',
                })
                opportunityId = opp?.id
            }
        }
    } catch (e) {
        console.error('[GHL] Opportunity creation error:', e)
    }

    return { contactId, opportunityId }
}

/**
 * Sync a stage change to GHL
 * Called when stage is updated in admin
 */
export async function syncStageToGHL(lead: any, newStage: string) {
    if (!lead.ghlContactId) return

    try {
        // Update contact tags
        await updateContact(lead.ghlContactId, { ...lead, stage: newStage })

        // If we have an opportunity, update its stage
        if (lead.ghlOpportunityId) {
            if (newStage === 'won') {
                await updateOpportunityStatus(lead.ghlOpportunityId, 'won')
            } else if (newStage === 'lost') {
                await updateOpportunityStatus(lead.ghlOpportunityId, 'lost')
            } else {
                // Try to find matching stage in GHL pipeline
                const pipelines = await getPipelines()
                if (pipelines.length > 0) {
                    const stageName = DEFAULT_STAGE_MAP[newStage] || newStage
                    const ghlStage = pipelines[0].stages?.find(
                        (s: any) => s.name.toLowerCase() === stageName.toLowerCase()
                    )
                    if (ghlStage) {
                        await updateOpportunityStage(lead.ghlOpportunityId, ghlStage.id)
                    }
                }
            }
        }

        // Add note about stage change
        await addContactNote(lead.ghlContactId, `Stage changed to: ${newStage}`)
    } catch (e) {
        console.error('[GHL] Stage sync error:', e)
    }
}

/**
 * Test the GHL connection
 */
export async function testConnection(): Promise<{ ok: boolean; error?: string; pipelines?: any[]; locationId?: string }> {
    try {
        const pipelines = await getPipelines()
        return { ok: true, pipelines, locationId: GHL_LOCATION_ID }
    } catch (e: any) {
        return { ok: false, error: e.message, locationId: GHL_LOCATION_ID }
    }
}
