import { NextResponse } from 'next/server'
import { db } from '@/lib/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import {
    testConnection,
    pushLeadToGHL,
    syncStageToGHL,
    getPipelines,
    addContactToWorkflow,
    addContactNote,
} from '@/lib/ghl'

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
        const { action, ...payload } = await request.json()

        // Test GHL connection
        if (action === 'test-connection') {
            const result = await testConnection()
            return NextResponse.json({ success: true, ...result })
        }

        // Get pipelines
        if (action === 'get-pipelines') {
            const pipelines = await getPipelines()
            return NextResponse.json({ success: true, pipelines })
        }

        // Push a single lead to GHL
        if (action === 'push-lead') {
            const { lead } = payload
            if (!lead?.email) {
                return NextResponse.json({ error: 'Lead with email is required' }, { status: 400 })
            }

            const result = await pushLeadToGHL(lead, lead.auditScore)

            // Save GHL IDs back to Firestore
            if (lead.id) {
                try {
                    await updateDoc(doc(db, 'audits', lead.id), {
                        ghlContactId: result.contactId,
                        ghlOpportunityId: result.opportunityId || null,
                        ghlSyncedAt: new Date().toISOString(),
                    })
                } catch (e) {
                    console.error('[GHL] Failed to save IDs to Firestore:', e)
                }
            }

            return NextResponse.json({
                success: true,
                contactId: result.contactId,
                opportunityId: result.opportunityId,
            })
        }

        // Sync stage change to GHL
        if (action === 'sync-stage') {
            const { lead, stage } = payload
            if (!lead?.ghlContactId) {
                return NextResponse.json({ error: 'Lead is not synced to GHL yet' }, { status: 400 })
            }

            await syncStageToGHL(lead, stage)
            return NextResponse.json({ success: true })
        }

        // Trigger a GHL workflow
        if (action === 'trigger-workflow') {
            const { contactId, workflowId } = payload
            if (!contactId || !workflowId) {
                return NextResponse.json({ error: 'contactId and workflowId are required' }, { status: 400 })
            }

            await addContactToWorkflow(contactId, workflowId)
            return NextResponse.json({ success: true })
        }

        // Add a note to GHL contact
        if (action === 'add-note') {
            const { contactId, note } = payload
            if (!contactId || !note) {
                return NextResponse.json({ error: 'contactId and note are required' }, { status: 400 })
            }

            await addContactNote(contactId, note)
            return NextResponse.json({ success: true })
        }

        // Bulk push all leads to GHL
        if (action === 'bulk-push') {
            const { leads } = payload
            if (!Array.isArray(leads) || leads.length === 0) {
                return NextResponse.json({ error: 'Leads array is required' }, { status: 400 })
            }

            const results: { id: string; success: boolean; contactId?: string; error?: string }[] = []

            for (const lead of leads) {
                try {
                    const result = await pushLeadToGHL(lead, lead.auditScore)

                    // Save GHL IDs back to Firestore
                    if (lead.id) {
                        try {
                            await updateDoc(doc(db, 'audits', lead.id), {
                                ghlContactId: result.contactId,
                                ghlOpportunityId: result.opportunityId || null,
                                ghlSyncedAt: new Date().toISOString(),
                            })
                        } catch { /* ignore */ }
                    }

                    results.push({ id: lead.id, success: true, contactId: result.contactId })
                } catch (e: any) {
                    results.push({ id: lead.id, success: false, error: e.message })
                }
            }

            const successCount = results.filter(r => r.success).length
            return NextResponse.json({
                success: true,
                total: leads.length,
                synced: successCount,
                failed: leads.length - successCount,
                results,
            })
        }

        return NextResponse.json({ error: 'Unknown action' }, { status: 400 })
    } catch (error: any) {
        console.error('[GHL API ERROR]', error)
        return NextResponse.json(
            { success: false, error: error.message || 'GHL API error' },
            { status: 500 }
        )
    }
}
