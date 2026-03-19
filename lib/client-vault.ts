/**
 * Client Vault — Obsidian CRM + Firestore sync
 *
 * Creates and manages client vault documents in Firestore
 * and writes corresponding .md files to the local Obsidian vault.
 */

import { db } from '@/lib/firebase'
import {
    collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc,
    doc, query, where, orderBy, serverTimestamp
} from 'firebase/firestore'
import { researchCompany } from '@/lib/proposal-agent'
import Anthropic from '@anthropic-ai/sdk'

// ─── Constants ───────────────────────────────────────────────
const VAULT_PATH = 'C:/Users/mialo/Desktop/ElianaTech/elianatech'
const COLLECTION = 'client_vaults'
const IS_LOCAL = process.env.NODE_ENV === 'development' || process.env.VAULT_LOCAL === 'true'

// ─── Types ───────────────────────────────────────────────────

export interface TimelineEntry {
    timestamp: string
    emoji: string
    text: string
}

export interface CredentialEntry {
    service: string
    username: string
    notes: string
}

export interface MeetingNote {
    id: string
    date: string
    title: string
    attendees: string
    notes: string
    action_items: string[]
    created_at: string
}

export type SectionKey = 'research' | 'strategy' | 'onboarding' | 'credentials' | 'timeline' | 'meetings'

export interface VaultDoc {
    id?: string
    company: string
    contact: string
    email: string
    phone: string
    website: string
    industry: string
    status: 'prospect' | 'active' | 'onboarding' | 'churned' | 'paused'
    stage: string
    lead_score: number
    audit_score: number
    intent: string
    budget: string
    deal_value: number
    audit_id: string
    created: string
    last_contact: string
    tags: string[]
    // Sections
    research: string
    strategy: string
    onboarding_checklist: boolean[]
    credentials: CredentialEntry[]
    timeline: TimelineEntry[]
    meetings: MeetingNote[]
    // Firestore metadata
    createdAt?: any
    updatedAt?: any
}

const ONBOARDING_ITEMS = [
    'Kickoff call scheduled',
    'Access credentials collected',
    'Systems audit completed',
    'Strategy document approved',
    'Phase 1 build started',
    'Phase 1 QA complete',
    'Client training session',
    'Go-live',
    'Post-launch check-in',
]

// ─── Slug helper ─────────────────────────────────────────────

function slugify(name: string): string {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
}

// ─── Status emoji helper ─────────────────────────────────────

function statusEmoji(status: string): string {
    const map: Record<string, string> = {
        prospect: '🟡', active: '🟢', onboarding: '🔵', churned: '🔴', paused: '⚪',
    }
    return map[status] || '🟡'
}

function capitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// ─── Firestore CRUD ──────────────────────────────────────────

export async function createVault(data: Omit<VaultDoc, 'id'>): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION), {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
    })
    const vault = { ...data, id: docRef.id }
    await syncVaultToObsidian(vault)
    return docRef.id
}

export async function getVault(id: string): Promise<VaultDoc | null> {
    const snap = await getDoc(doc(db, COLLECTION, id))
    if (!snap.exists()) return null
    return { id: snap.id, ...snap.data() } as VaultDoc
}

export async function getVaultByAuditId(auditId: string): Promise<VaultDoc | null> {
    const q = query(collection(db, COLLECTION), where('audit_id', '==', auditId))
    const snap = await getDocs(q)
    if (snap.empty) return null
    const d = snap.docs[0]
    return { id: d.id, ...d.data() } as VaultDoc
}

export async function getVaultByEmail(email: string): Promise<VaultDoc | null> {
    const q = query(collection(db, COLLECTION), where('email', '==', email))
    const snap = await getDocs(q)
    if (snap.empty) return null
    const d = snap.docs[0]
    return { id: d.id, ...d.data() } as VaultDoc
}

export async function getAllVaults(): Promise<VaultDoc[]> {
    const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'))
    const snap = await getDocs(q)
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as VaultDoc))
}

export async function updateVault(id: string, updates: Partial<VaultDoc>): Promise<void> {
    await updateDoc(doc(db, COLLECTION, id), {
        ...updates,
        updatedAt: serverTimestamp(),
    })
    // Re-sync to Obsidian
    const vault = await getVault(id)
    if (vault) await syncVaultToObsidian(vault)
}

export async function deleteVault(id: string): Promise<void> {
    const vault = await getVault(id)
    await deleteDoc(doc(db, COLLECTION, id))
    // Remove .md file
    if (vault && IS_LOCAL) {
        try {
            const fs = await import('fs/promises')
            const path = `${VAULT_PATH}/01 - Clients/${slugify(vault.company)}.md`
            await fs.unlink(path).catch(() => {})
        } catch { /* skip on prod */ }
    }
}

// ─── Timeline ────────────────────────────────────────────────

export async function appendTimeline(vaultId: string, entry: TimelineEntry): Promise<void> {
    const vault = await getVault(vaultId)
    if (!vault) return
    const timeline = [...(vault.timeline || []), entry]
    await updateVault(vaultId, { timeline, last_contact: entry.timestamp })
}

export async function appendTimelineByEmail(email: string, entry: TimelineEntry): Promise<void> {
    const vault = await getVaultByEmail(email)
    if (!vault || !vault.id) return
    await appendTimeline(vault.id, entry)
}

// ─── AI Research ─────────────────────────────────────────────

export async function runVaultResearch(vaultId: string): Promise<string> {
    const vault = await getVault(vaultId)
    if (!vault) throw new Error('Vault not found')

    // Step 1: Scrape website
    const rawResearch = await researchCompany(vault.website || '')

    // Step 2: Claude analysis
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
    const msg = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 1500,
        messages: [{
            role: 'user',
            content: `You are a business analyst for ElianaTech. Analyze this company and write a concise research brief.

COMPANY: ${vault.company}
WEBSITE: ${vault.website}
INDUSTRY: ${vault.industry}

WEBSITE RESEARCH:
${rawResearch}

Write a research brief covering:
1. What the company does (2-3 sentences)
2. Target market & positioning
3. Key products/services found
4. Potential automation opportunities for ElianaTech
5. Competitive notes

Keep it under 400 words. Use bullet points. Be specific, not generic.`
        }]
    })

    const research = msg.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map(b => b.text)
        .join('\n')

    // Save to vault
    const now = new Date().toISOString()
    const entry: TimelineEntry = {
        timestamp: now,
        emoji: '🔬',
        text: 'AI research completed',
    }
    await updateVault(vaultId, { research })
    await appendTimeline(vaultId, entry)

    return research
}

// ─── Obsidian Sync ───────────────────────────────────────────

export async function syncVaultToObsidian(vault: VaultDoc): Promise<void> {
    if (!IS_LOCAL) return

    try {
        const fs = await import('fs/promises')
        const slug = slugify(vault.company)
        const dir = `${VAULT_PATH}/01 - Clients`

        // Ensure directory exists
        await fs.mkdir(dir, { recursive: true })

        const md = renderVaultMarkdown(vault)
        await fs.writeFile(`${dir}/${slug}.md`, md, 'utf-8')
    } catch (err) {
        console.error('[VAULT SYNC ERROR]', err)
    }
}

function renderVaultMarkdown(v: VaultDoc): string {
    const checklist = ONBOARDING_ITEMS
        .map((item, i) => `- [${v.onboarding_checklist?.[i] ? 'x' : ' '}] ${item}`)
        .join('\n')

    const creds = (v.credentials || []).length > 0
        ? (v.credentials || []).map(c => `| ${c.service} | ${c.username} | ${c.notes} |`).join('\n')
        : '| — | — | — |'

    const timeline = (v.timeline || [])
        .map(t => `- **${t.timestamp}** — ${t.emoji} ${t.text}`)
        .join('\n')

    const meetingLinks = (v.meetings || []).length > 0
        ? (v.meetings || []).map(m => `- [[${slugify(v.company)}-${m.date}|${m.date} — ${m.title}]]`).join('\n')
        : '_No meetings yet._'

    return `---
company: "${v.company}"
contact: "${v.contact}"
email: "${v.email}"
phone: "${v.phone}"
website: "${v.website}"
industry: "${v.industry}"
status: ${v.status}
stage: ${v.stage}
lead_score: ${v.lead_score}
audit_score: ${v.audit_score}
deal_value: ${v.deal_value || 0}
intent: ${v.intent}
budget: "${v.budget}"
audit_id: "${v.audit_id}"
vault_id: "${v.id || ''}"
created: ${v.created}
last_contact: ${v.last_contact}
tags: [${v.tags.join(', ')}]
---

# ${v.company}

> **Contact:** ${v.contact} | ${v.email} | ${v.phone}
> **Status:** ${statusEmoji(v.status)} ${capitalize(v.status)} | **Stage:** ${capitalize(v.stage)} | **Score:** ${v.lead_score}/100
${v.deal_value ? `> **Deal Value:** $${v.deal_value.toLocaleString()}` : ''}

---

## 🔍 Research
${v.research || '_No research yet. Click "Refresh Research" in admin to generate._'}

## 📋 Strategy
${v.strategy || '_No strategy notes yet._'}

## 🚀 Onboarding
${checklist}

## 📞 Meetings
${meetingLinks}

## 🔐 Credentials
| Service | Username | Notes |
|---------|----------|-------|
${creds}

## 📅 Timeline
${timeline || '_No timeline entries yet._'}
`
}

// ─── Vault Scaffold ──────────────────────────────────────────

export async function scaffoldObsidianVault(): Promise<void> {
    if (!IS_LOCAL) return

    const fs = await import('fs/promises')

    const dirs = [
        '00 - Dashboard',
        '01 - Clients',
        '02 - Onboarding',
        '03 - Templates',
        '04 - Daily Notes',
        '05 - Resources',
        '06 - Meetings',
    ]

    for (const d of dirs) {
        await fs.mkdir(`${VAULT_PATH}/${d}`, { recursive: true })
    }

    // Pipeline.md — Kanban board
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Pipeline.md`, `---
kanban-plugin: basic
---

# Pipeline

## New
- [ ] _Drag clients here_

## Contacted
- [ ] _Drag clients here_

## Call Booked
- [ ] _Drag clients here_

## Proposal Sent
- [ ] _Drag clients here_

## Negotiating
- [ ] _Drag clients here_

## Won 🎉


## Lost


%% kanban:settings
\`\`\`
{"kanban-plugin":"basic","lane-width":250,"show-checkboxes":false}
\`\`\`
%%
`, 'utf-8')

    // Client Overview.md — Dataview dashboard
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Client Overview.md`, `# Client Overview

## All Clients
\`\`\`dataview
TABLE
  contact AS "Contact",
  email AS "Email",
  status AS "Status",
  stage AS "Stage",
  lead_score AS "Score",
  last_contact AS "Last Contact"
FROM "01 - Clients"
SORT lead_score DESC
\`\`\`

## Hot Leads (Score > 70)
\`\`\`dataview
TABLE
  contact AS "Contact",
  company AS "Company",
  intent AS "Intent",
  lead_score AS "Score",
  budget AS "Budget"
FROM "01 - Clients"
WHERE lead_score > 70
SORT lead_score DESC
\`\`\`

## By Stage
\`\`\`dataview
TABLE
  rows.company AS "Companies",
  length(rows) AS "Count"
FROM "01 - Clients"
GROUP BY stage
\`\`\`
`, 'utf-8')

    // Daily Ops.md
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Daily Ops.md`, `# Daily Ops

## Today's Follow-ups
\`\`\`dataview
TABLE
  contact AS "Contact",
  company AS "Company",
  stage AS "Stage",
  last_contact AS "Last Contact"
FROM "01 - Clients"
WHERE status = "prospect" OR status = "onboarding"
SORT last_contact ASC
LIMIT 10
\`\`\`

## Recently Updated
\`\`\`dataview
TABLE
  company AS "Company",
  status AS "Status",
  stage AS "Stage",
  last_contact AS "Updated"
FROM "01 - Clients"
SORT last_contact DESC
LIMIT 10
\`\`\`

## Onboarding In Progress
\`\`\`dataview
TABLE
  contact AS "Contact",
  company AS "Company",
  stage AS "Stage"
FROM "01 - Clients"
WHERE status = "onboarding"
SORT created DESC
\`\`\`
`, 'utf-8')

    // Templates
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/New Client.md`, `---
company: "{{company}}"
contact: "{{contact}}"
email: "{{email}}"
phone: "{{phone}}"
website: "{{website}}"
industry: "{{industry}}"
status: prospect
stage: new
lead_score: 0
audit_score: 0
intent: unknown
budget: ""
audit_id: ""
created: {{date:YYYY-MM-DD}}
last_contact: {{date:YYYY-MM-DD}}
tags: [client]
---

# {{company}}

> **Contact:** {{contact}} | {{email}} | {{phone}}
> **Status:** 🟡 Prospect | **Stage:** New | **Score:** 0/100

---

## 🔍 Research
_Run AI research from admin panel._

## 📋 Strategy
_Add strategy notes here._

## 🚀 Onboarding
- [ ] Kickoff call scheduled
- [ ] Access credentials collected
- [ ] Systems audit completed
- [ ] Strategy document approved
- [ ] Phase 1 build started
- [ ] Phase 1 QA complete
- [ ] Client training session
- [ ] Go-live
- [ ] Post-launch check-in

## 🔐 Credentials
| Service | Username | Notes |
|---------|----------|-------|

## 📅 Timeline
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Daily Note.md`, `# {{date:YYYY-MM-DD}} — Daily Ops

## 🎯 Top 3 Priorities
1.
2.
3.

## 📞 Calls & Meetings
-

## 📧 Follow-ups Sent
-

## 📝 Notes
-

## ✅ Done Today
-
`, 'utf-8')

    // Onboarding checklists
    await fs.writeFile(`${VAULT_PATH}/02 - Onboarding/AI COO Checklist.md`, `# AI COO Onboarding Checklist

## Phase 1: Discovery & Setup (Week 1-2)
- [ ] Discovery call completed
- [ ] Current systems documented
- [ ] Access credentials collected
- [ ] Communication channels set up
- [ ] Project timeline confirmed

## Phase 2: Build & Configure (Week 3-6)
- [ ] Core automations built
- [ ] Integrations connected
- [ ] AI agents configured
- [ ] Testing & QA pass
- [ ] Client review & feedback

## Phase 3: Launch & Optimize (Week 7-8)
- [ ] Soft launch
- [ ] Team training session
- [ ] Full go-live
- [ ] Post-launch monitoring
- [ ] 30-day check-in scheduled
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/02 - Onboarding/Full Build Checklist.md`, `# Full Build Onboarding Checklist

## Phase 1: Architecture & Planning (Week 1-3)
- [ ] Technical discovery deep-dive
- [ ] System architecture document
- [ ] Tool & platform selection
- [ ] All credentials & access collected
- [ ] Sprint plan finalized

## Phase 2: Core Build (Week 4-8)
- [ ] Backend infrastructure
- [ ] Frontend / client-facing interfaces
- [ ] Automation workflows
- [ ] AI integrations
- [ ] Data pipelines & dashboards

## Phase 3: Integration & Testing (Week 9-10)
- [ ] System integration testing
- [ ] User acceptance testing
- [ ] Performance optimization
- [ ] Security review
- [ ] Bug fixes

## Phase 4: Launch & Handoff (Week 11-12)
- [ ] Soft launch with pilot users
- [ ] Team training sessions
- [ ] Documentation handoff
- [ ] Full production launch
- [ ] 30-day support period begins
`, 'utf-8')

    // Resources
    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Pricing Sheet.md`, `# ElianaTech Pricing

## Tiers
| Tier | Price Range | Timeline | Best For |
|------|-----------|----------|----------|
| Multi-System Build | $7,500 – $15,000 | 4-6 weeks | Targeted automation of 2-3 systems |
| Full Build | $15,000 – $40,000 | 8-12 weeks | End-to-end business operating system |
| AI-Native Ops | $40,000+ | 12-16 weeks | Full AI transformation & custom agents |

## Add-ons
- Custom AI agent: $2,500+
- Data migration: $1,500+
- Extended support: $1,000/month
- Training sessions: $500/session

## Payment Options
- Pay in full: 5-10% discount
- 2 payments: 50/50
- 3 monthly payments
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Services.md`, `# ElianaTech Services

## Core Services
1. **AI Readiness Audit** — Free assessment of business automation potential
2. **Multi-System Build** — Targeted automation for specific workflows
3. **Full Build** — Complete business operating system
4. **AI-Native Ops** — Full AI transformation with custom agents

## What We Automate
- Client onboarding & communication
- Sales pipeline & CRM
- Content creation & distribution
- Support & ticketing
- Reporting & analytics
- Scheduling & calendar management
- Invoice & payment processing

## Tech Stack
- Next.js / React frontends
- Firebase / Supabase backends
- OpenAI / Claude AI integrations
- Twilio communications
- GoHighLevel CRM
- Cal.com scheduling
- Resend email
- Custom automation workflows
`, 'utf-8')

    // Revenue Dashboard
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Revenue.md`, `# Revenue Dashboard

## Pipeline Value by Stage
\`\`\`dataview
TABLE
  rows.company AS "Companies",
  length(rows) AS "Count",
  sum(rows.deal_value) AS "Total Value"
FROM "01 - Clients"
WHERE deal_value > 0
GROUP BY stage
\`\`\`

## All Deals with Value
\`\`\`dataview
TABLE
  contact AS "Contact",
  stage AS "Stage",
  deal_value AS "Deal Value",
  status AS "Status",
  intent AS "Intent"
FROM "01 - Clients"
WHERE deal_value > 0
SORT deal_value DESC
\`\`\`

## Won Revenue
\`\`\`dataview
TABLE
  contact AS "Contact",
  deal_value AS "Value",
  last_contact AS "Closed"
FROM "01 - Clients"
WHERE stage = "won" AND deal_value > 0
SORT deal_value DESC
\`\`\`

## Prospects with No Deal Value
\`\`\`dataview
TABLE
  contact AS "Contact",
  stage AS "Stage",
  lead_score AS "Score",
  intent AS "Intent"
FROM "01 - Clients"
WHERE deal_value = 0 OR !deal_value
SORT lead_score DESC
\`\`\`
`, 'utf-8')

    // Tasks Overview — aggregates all tasks across clients using Tasks plugin
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Tasks Overview.md`, `# Tasks Overview

> This dashboard uses the **Tasks** plugin to aggregate all open tasks across the vault.
> Install the Tasks plugin from Obsidian Community Plugins for this to work.

## All Open Onboarding Tasks
\`\`\`tasks
not done
path includes 01 - Clients
description includes Kickoff call scheduled OR description includes Access credentials collected OR description includes Systems audit completed OR description includes Strategy document approved OR description includes Phase 1 build started OR description includes Phase 1 QA complete OR description includes Client training session OR description includes Go-live OR description includes Post-launch check-in
group by filename
\`\`\`

## Open Action Items from Meetings
\`\`\`tasks
not done
path includes 06 - Meetings
group by filename
sort by due
\`\`\`

## Open Follow-ups from Daily Notes
\`\`\`tasks
not done
path includes 04 - Daily Notes
sort by due
\`\`\`

## All Overdue Tasks
\`\`\`tasks
not done
is before today
group by path
\`\`\`

## Recently Completed
\`\`\`tasks
done
done after 7 days ago
group by filename
sort by done reverse
\`\`\`
`, 'utf-8')

    // Meeting Notes template
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Meeting Notes.md`, `---
client: "[[{{client}}]]"
date: {{date:YYYY-MM-DD}}
attendees: "{{attendees}}"
type: meeting
tags: [meeting]
---

# {{title}}

> **Client:** [[{{client}}]] | **Date:** {{date:YYYY-MM-DD}}
> **Attendees:** {{attendees}}

---

## Agenda
1.
2.
3.

## Notes


## Decisions Made
-

## Action Items
- [ ] [Action] — @owner — due {{date:YYYY-MM-DD}}
- [ ] [Action] — @owner — due {{date:YYYY-MM-DD}}

## Next Meeting
- Date:
- Topics:
`, 'utf-8')

    console.log('[VAULT] Obsidian vault scaffolded at', VAULT_PATH)
}

// ─── Meeting Notes ───────────────────────────────────────────

export async function createMeetingNote(
    vaultId: string,
    meeting: Omit<MeetingNote, 'id' | 'created_at'>
): Promise<MeetingNote> {
    const vault = await getVault(vaultId)
    if (!vault) throw new Error('Vault not found')

    const note: MeetingNote = {
        ...meeting,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        created_at: new Date().toISOString(),
    }

    const meetings = [...(vault.meetings || []), note]
    await updateVault(vaultId, { meetings })

    // Add timeline entry
    await appendTimeline(vaultId, {
        timestamp: new Date().toISOString(),
        emoji: '📞',
        text: `Meeting: ${meeting.title}`,
    })

    // Write individual meeting .md to Obsidian
    await syncMeetingToObsidian(vault, note)

    return note
}

export async function updateMeetingNote(
    vaultId: string,
    meetingId: string,
    updates: Partial<Omit<MeetingNote, 'id' | 'created_at'>>
): Promise<void> {
    const vault = await getVault(vaultId)
    if (!vault) throw new Error('Vault not found')

    const meetings = (vault.meetings || []).map(m =>
        m.id === meetingId ? { ...m, ...updates } : m
    )
    await updateVault(vaultId, { meetings })

    // Re-sync the meeting file
    const updated = meetings.find(m => m.id === meetingId)
    if (updated) await syncMeetingToObsidian(vault, updated)
}

export async function deleteMeetingNote(vaultId: string, meetingId: string): Promise<void> {
    const vault = await getVault(vaultId)
    if (!vault) throw new Error('Vault not found')

    const meeting = (vault.meetings || []).find(m => m.id === meetingId)
    const meetings = (vault.meetings || []).filter(m => m.id !== meetingId)
    await updateVault(vaultId, { meetings })

    // Remove the .md file
    if (meeting && IS_LOCAL) {
        try {
            const fs = await import('fs/promises')
            const filename = `${slugify(vault.company)}-${meeting.date}.md`
            await fs.unlink(`${VAULT_PATH}/06 - Meetings/${filename}`).catch(() => {})
        } catch { /* skip */ }
    }
}

async function syncMeetingToObsidian(vault: VaultDoc, meeting: MeetingNote): Promise<void> {
    if (!IS_LOCAL) return

    try {
        const fs = await import('fs/promises')
        const dir = `${VAULT_PATH}/06 - Meetings`
        await fs.mkdir(dir, { recursive: true })

        const slug = slugify(vault.company)
        const actionItems = (meeting.action_items || [])
            .map(item => `- [ ] ${item}`)
            .join('\n')

        const md = `---
client: "[[${slug}|${vault.company}]]"
date: ${meeting.date}
attendees: "${meeting.attendees}"
type: meeting
tags: [meeting, ${slug}]
---

# ${meeting.title}

> **Client:** [[${slug}|${vault.company}]] | **Date:** ${meeting.date}
> **Attendees:** ${meeting.attendees}

---

## Notes
${meeting.notes || '_No notes yet._'}

## Action Items
${actionItems || '_No action items._'}
`
        await fs.writeFile(`${dir}/${slug}-${meeting.date}.md`, md, 'utf-8')
    } catch (err) {
        console.error('[MEETING SYNC ERROR]', err)
    }
}

// ─── Auto-create from audit ──────────────────────────────────

export async function createVaultFromAudit(
    auditId: string,
    formData: {
        companyName: string
        fullName: string
        email: string
        phoneNumber?: string
        websiteUrl?: string
        businessType?: string
        auditScore?: number
        intentLevel?: string
        growthBudget?: string
        opportunities?: any[]
    }
): Promise<string> {
    // Check if vault already exists for this audit
    const existing = await getVaultByAuditId(auditId)
    if (existing) return existing.id!

    const now = new Date().toISOString().split('T')[0]
    const nowFull = new Date().toISOString()

    const tags = ['client']
    if (formData.businessType) tags.push(formData.businessType.toLowerCase().replace(/\s+/g, '-'))
    if (formData.intentLevel === 'high') tags.push('hot-lead')

    const vault: Omit<VaultDoc, 'id'> = {
        company: formData.companyName || 'Unknown',
        contact: formData.fullName || 'Unknown',
        email: formData.email || '',
        phone: formData.phoneNumber || '',
        website: formData.websiteUrl || '',
        industry: formData.businessType || 'Unknown',
        status: 'prospect',
        stage: 'new',
        lead_score: formData.auditScore || 0,
        audit_score: formData.auditScore || 0,
        intent: formData.intentLevel || 'unknown',
        budget: formData.growthBudget || '',
        deal_value: 0,
        audit_id: auditId,
        created: now,
        last_contact: now,
        tags,
        research: '',
        strategy: '',
        onboarding_checklist: new Array(ONBOARDING_ITEMS.length).fill(false),
        credentials: [],
        meetings: [],
        timeline: [
            {
                timestamp: nowFull,
                emoji: '🟢',
                text: `Audit submitted (score: ${formData.auditScore || 0}/100)`,
            },
        ],
    }

    const vaultId = await createVault(vault)

    // Fire-and-forget: run AI research
    runVaultResearch(vaultId).catch(err => {
        console.error('[VAULT RESEARCH ERROR]', err)
    })

    return vaultId
}

// ─── Daily Note ──────────────────────────────────────────────

export async function generateDailyNote(vaults: VaultDoc[]): Promise<void> {
    if (!IS_LOCAL) return

    const fs = await import('fs/promises')
    const today = new Date().toISOString().split('T')[0]
    const dir = `${VAULT_PATH}/04 - Daily Notes`
    await fs.mkdir(dir, { recursive: true })

    const prospects = vaults.filter(v => v.status === 'prospect')
    const onboarding = vaults.filter(v => v.status === 'onboarding')
    const active = vaults.filter(v => v.status === 'active')
    const needsFollowUp = vaults
        .filter(v => v.status === 'prospect' || v.status === 'onboarding')
        .sort((a, b) => new Date(a.last_contact).getTime() - new Date(b.last_contact).getTime())
        .slice(0, 5)

    const newToday = vaults.filter(v => v.created === today)

    const md = `# ${today} — Daily Ops

## 📊 Overview
- **Total Clients:** ${vaults.length}
- **Prospects:** ${prospects.length}
- **Onboarding:** ${onboarding.length}
- **Active:** ${active.length}

## 🔥 New Today
${newToday.length > 0 ? newToday.map(v => `- [[${slugify(v.company)}|${v.company}]] — ${v.contact} (${v.intent} intent, score: ${v.lead_score})`).join('\n') : '_None_'}

## 📞 Follow-up Queue
${needsFollowUp.length > 0 ? needsFollowUp.map(v => `- [ ] [[${slugify(v.company)}|${v.company}]] — Last contact: ${v.last_contact} (${v.stage})`).join('\n') : '_All caught up!_'}

## 🎯 Top 3 Priorities
1.
2.
3.

## 📝 Notes
-
`

    await fs.writeFile(`${dir}/${today}.md`, md, 'utf-8')
}
