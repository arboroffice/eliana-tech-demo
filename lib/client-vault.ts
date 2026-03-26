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

export interface DeploymentConfig {
    model: string
    tools: string[]
    system_prompt_ref: string
    endpoints: string[]
    api_keys_rotated: string
    notes: string
}

export interface ClientMetrics {
    monthly_spend: number
    hours_saved: number
    tickets_deflected: number
    response_time_before: string
    response_time_after: string
    roi_notes: string
    custom: Record<string, string>
}

export interface IssueEntry {
    id: string
    date: string
    title: string
    description: string
    resolution: string
    severity: 'low' | 'medium' | 'high' | 'critical'
    resolved: boolean
}

export type SectionKey = 'research' | 'strategy' | 'onboarding' | 'credentials' | 'timeline' | 'meetings' | 'deployment' | 'metrics' | 'issues'

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
    referred_by: string
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
    deployment: DeploymentConfig
    metrics: ClientMetrics
    issues: IssueEntry[]
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
        // Refresh cache for inter-client backlinks
        try { _allVaultsCache = await getAllVaults() } catch { /* use stale cache */ }

        const fs = await import('fs/promises')
        const slug = slugify(vault.company)
        const dir = `${VAULT_PATH}/01 - Clients`

        // Ensure directory exists
        await fs.mkdir(dir, { recursive: true })

        const md = renderVaultMarkdown(vault)
        await fs.writeFile(`${dir}/${slug}.md`, md, 'utf-8')

        // Sync credentials to separate file
        await syncCredentialsToObsidian(vault)

        // Auto-create project tracker for onboarding clients
        await syncProjectToObsidian(vault)
    } catch (err) {
        console.error('[VAULT SYNC ERROR]', err)
    }
}

// Store all vaults for cross-referencing (populated during sync)
let _allVaultsCache: VaultDoc[] = []

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

    // Inter-client backlinks: same industry
    const relatedClients = _allVaultsCache
        .filter(other => other.id !== v.id && other.industry && v.industry && other.industry.toLowerCase() === v.industry.toLowerCase())
        .map(other => `- [[${slugify(other.company)}|${other.company}]] (${other.stage})`)
    const relatedSection = relatedClients.length > 0
        ? relatedClients.join('\n')
        : '_No related clients._'

    // Referral backlink
    const referralLine = v.referred_by
        ? `> **Referred by:** [[${slugify(v.referred_by)}|${v.referred_by}]]`
        : ''

    // Proposal backlink
    const proposalSlug = slugify(v.company)
    const proposalLink = `[[${proposalSlug}-proposal|View Proposal]]`

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
referred_by: "${v.referred_by || ''}"
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
${referralLine}

---

## 🔍 Research
${v.research || '_No research yet. Click "Refresh Research" in admin to generate._'}

## 📋 Strategy
${v.strategy || '_No strategy notes yet._'}

## 📄 Proposal
${proposalLink}

## 🤖 Deployment
| Field | Value |
|-------|-------|
| Model | ${v.deployment?.model || '—'} |
| Tools | ${(v.deployment?.tools || []).join(', ') || '—'} |
| System Prompt | ${v.deployment?.system_prompt_ref ? `[[${v.deployment.system_prompt_ref}]]` : '—'} |
| Endpoints | ${(v.deployment?.endpoints || []).join(', ') || '—'} |
| Keys Rotated | ${v.deployment?.api_keys_rotated || '—'} |
${v.deployment?.notes ? `\n${v.deployment.notes}` : ''}

## 📊 Metrics & Spend
| Metric | Value |
|--------|-------|
| Monthly Spend | ${v.metrics?.monthly_spend ? `$${v.metrics.monthly_spend.toLocaleString()}` : '—'} |
| Hours Saved | ${v.metrics?.hours_saved || '—'} |
| Tickets Deflected | ${v.metrics?.tickets_deflected || '—'} |
| Response Time (Before) | ${v.metrics?.response_time_before || '—'} |
| Response Time (After) | ${v.metrics?.response_time_after || '—'} |
${v.metrics?.roi_notes ? `\n**ROI Notes:** ${v.metrics.roi_notes}` : ''}
${Object.entries(v.metrics?.custom || {}).map(([k, val]) => `| ${k} | ${val} |`).join('\n')}

## 🐛 Issues
${(v.issues || []).length > 0 ? (v.issues || []).map(issue => `- [${issue.resolved ? 'x' : ' '}] **${issue.title}** (${issue.severity}) — ${issue.date}\n  ${issue.description}${issue.resolution ? `\n  ✅ Resolution: ${issue.resolution}` : ''}`).join('\n') : '_No issues logged._'}

## 🚀 Onboarding
${checklist}

## 📞 Meetings
${meetingLinks}

## 🔗 Related Clients
${relatedSection}

## 📚 Industry Playbook
[[playbook-${slugify(v.industry || 'general')}|${v.industry || 'General'} Playbook]]

## 🔐 Credentials
> **Full credential vault:** [[${slugify(v.company)}-creds|Open Credential Vault]]

| Service | Username | Notes |
|---------|----------|-------|
${creds}

## 📋 Project
> [[${slugify(v.company)}-project|Open Project Board]]

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
        '07 - Proposals',
        '08 - Agents',
        '09 - Issues',
        '10 - Runbooks',
        '11 - Playbooks',
        '12 - Credentials',
        '13 - Projects',
        '13 - Projects/Archive',
        '14 - SOPs',
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

    // ─── Agent Library ─────────────────────────
    await fs.writeFile(`${VAULT_PATH}/08 - Agents/README.md`, `# Agent Library

Store reusable system prompts, tool configs, and agent architectures here.
Link them to clients: e.g. \`Acme uses [[customer-support-agent-v3]]\`

## Naming Convention
\`{function}-agent-v{version}.md\` — e.g. \`customer-support-agent-v3.md\`

## Template
\`\`\`
---
name: "Agent Name"
version: 3
model: "claude-sonnet-4-6"
tools: [tool1, tool2]
clients: []
tags: [agent]
---

# Agent Name v3

## System Prompt
\\\`\\\`\\\`
Your system prompt here...
\\\`\\\`\\\`

## Tools / MCPs
- tool1: description
- tool2: description

## Configuration Notes
...

## Clients Using This Agent
\\\`\\\`\\\`dataview
LIST
FROM "01 - Clients"
WHERE contains(deployment.system_prompt_ref, this.file.name)
\\\`\\\`\\\`
\`\`\`
`, 'utf-8')

    // ─── Issue Resolution KB Dashboard ──────────
    await fs.writeFile(`${VAULT_PATH}/09 - Issues/README.md`, `# Issue Resolution KB

When a client setup breaks, log it here linked to the client.
Next time you see the same error, backlinks show you the fix.

## All Open Issues
\`\`\`dataview
TABLE
  company AS "Client",
  severity AS "Severity",
  date AS "Date"
FROM "01 - Clients"
FLATTEN issues AS issue
WHERE !issue.resolved
SORT issue.severity DESC
\`\`\`

## Recently Resolved
\`\`\`dataview
TABLE
  company AS "Client",
  severity AS "Severity"
FROM "01 - Clients"
FLATTEN issues AS issue
WHERE issue.resolved
SORT issue.date DESC
LIMIT 20
\`\`\`
`, 'utf-8')

    // ─── Claw Setup Runbook ─────────────────────
    await fs.writeFile(`${VAULT_PATH}/10 - Runbooks/claw-setup.md`, `# OpenClaw / NemoClaw Setup Runbook

## Pre-Flight
- [ ] Client vault created and research complete
- [ ] Discovery call done — requirements documented
- [ ] Access credentials collected
- [ ] Client's existing tools/systems mapped
- [ ] Deployment tier confirmed (which agents, which tools)

## Environment Setup
- [ ] Clone base claw config
- [ ] Set up API keys (OpenAI / Anthropic / client-specific)
- [ ] Configure MCP servers for client's stack
- [ ] Set up monitoring / logging endpoint
- [ ] Test connectivity to all client systems

## Agent Configuration
- [ ] Select base agent template from [[08 - Agents/README|Agent Library]]
- [ ] Customize system prompt with client context
- [ ] Configure tool permissions and scopes
- [ ] Set up memory / context persistence
- [ ] Add client knowledge base docs if applicable

## Tool / MCP Integration
- [ ] Connect CRM (GHL / HubSpot / etc.)
- [ ] Connect email (Gmail / Outlook / Resend)
- [ ] Connect calendar (Cal.com / Google Calendar)
- [ ] Connect messaging (Slack / SMS / WhatsApp)
- [ ] Connect custom APIs / webhooks
- [ ] Test each integration individually

## Testing & QA
- [ ] Run through 10 sample interactions
- [ ] Test edge cases (angry customer, refund request, off-topic)
- [ ] Test fail-safes (what happens when API is down)
- [ ] Review response quality with client
- [ ] Load test if applicable

## Go-Live
- [ ] Client approval on test results
- [ ] Switch from staging to production
- [ ] Set up alerts / monitoring
- [ ] Document final config in client vault (Deployment section)
- [ ] Update client metrics baseline

## Post-Launch (Week 1)
- [ ] Daily check on logs / errors
- [ ] Collect initial metrics (response time, deflection rate)
- [ ] Client check-in call
- [ ] Tune system prompt based on real interactions
- [ ] Log any issues in [[09 - Issues/README|Issue KB]]

## Handoff (Week 2-4)
- [ ] Client training session
- [ ] Documentation handoff
- [ ] Set up ongoing monitoring
- [ ] Schedule 30-day review
- [ ] Update client vault with final metrics
`, 'utf-8')

    // ─── Playbook Dashboard ─────────────────────
    await fs.writeFile(`${VAULT_PATH}/11 - Playbooks/README.md`, `# Industry Playbooks

Auto-generated playbooks based on real client data across industries.
These aggregate what works, what clients spend, common issues, and winning configurations.

## All Playbooks
\`\`\`dataview
TABLE
  date AS "Last Updated",
  file.size AS "Size"
FROM "11 - Playbooks"
WHERE file.name != "README"
SORT date DESC
\`\`\`

## Client Count by Industry
\`\`\`dataview
TABLE
  length(rows) AS "Clients",
  rows.stage AS "Stages"
FROM "01 - Clients"
GROUP BY industry
SORT length(rows) DESC
\`\`\`
`, 'utf-8')

    // ─── Metrics Dashboard ──────────────────────
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Metrics.md`, `# Client Metrics & ROI

## Spend Overview
\`\`\`dataview
TABLE
  contact AS "Contact",
  metrics.monthly_spend AS "Monthly Spend",
  deal_value AS "Deal Value",
  metrics.hours_saved AS "Hours Saved",
  metrics.tickets_deflected AS "Tickets Deflected"
FROM "01 - Clients"
WHERE metrics.monthly_spend > 0 OR metrics.hours_saved > 0
SORT metrics.monthly_spend DESC
\`\`\`

## ROI Leaders
\`\`\`dataview
TABLE
  contact AS "Contact",
  metrics.hours_saved AS "Hours Saved",
  metrics.response_time_before AS "Before",
  metrics.response_time_after AS "After",
  metrics.roi_notes AS "Notes"
FROM "01 - Clients"
WHERE metrics.hours_saved > 0
SORT metrics.hours_saved DESC
\`\`\`

## Deployment Overview
\`\`\`dataview
TABLE
  deployment.model AS "Model",
  deployment.tools AS "Tools",
  deployment.system_prompt_ref AS "Agent",
  status AS "Status"
FROM "01 - Clients"
WHERE deployment.model != "" AND deployment.model
SORT company ASC
\`\`\`
`, 'utf-8')

    // ─── Home Dashboard (MOC) ─────────────────
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Home.md`, `---
cssclass: dashboard
---

# Eliana Tech — Command Center

> **Welcome back, Mia.** Here's your operational hub.

---

## Quick Access

| | |
|---|---|
| [[Pipeline]] | [[Client Overview]] |
| [[Onboarding Tracker]] | [[Credentials Dashboard]] |
| [[Project Board]] | [[Tasks Overview]] |
| [[Revenue]] | [[Metrics]] |
| [[Daily Ops]] | [[${new Date().toISOString().split('T')[0]}\\|Today's Note]] |

---

## Active Clients
\`\`\`dataview
TABLE
  contact AS "Contact",
  stage AS "Stage",
  deal_value AS "Deal $",
  status AS "Status"
FROM "01 - Clients"
WHERE status = "active" OR status = "onboarding"
SORT deal_value DESC
LIMIT 10
\`\`\`

## Hot Leads
\`\`\`dataview
TABLE
  contact AS "Contact",
  intent AS "Intent",
  lead_score AS "Score",
  budget AS "Budget"
FROM "01 - Clients"
WHERE intent = "high" AND status = "prospect"
SORT lead_score DESC
LIMIT 5
\`\`\`

## Recent Activity
\`\`\`dataview
TABLE
  contact AS "Contact",
  stage AS "Stage",
  last_contact AS "Last Touch"
FROM "01 - Clients"
SORT last_contact DESC
LIMIT 5
\`\`\`

---

## Resources
- [[Pricing Sheet]] | [[Services]] | [[Tech Stack Reference]]
- [[Vertical Guide - Online]] | [[Vertical Guide - Local]] | [[Vertical Guide - Professional]] | [[Vertical Guide - Product]]
- [[Objection Handling]]

## SOPs
- [[Client-Onboarding-Flow]] | [[Audit-to-Proposal]] | [[Monthly-Client-Review]]

## Runbooks
- [[claw-setup]] | [[ghl-setup]] | [[client-credentials-sop]] | [[new-client-intake]]
`, 'utf-8')

    // ─── Onboarding Tracker Dashboard ─────────
    await fs.writeFile(`${VAULT_PATH}/00 - Dashboard/Onboarding Tracker.md`, `# Onboarding Tracker

## Active Onboardings
\`\`\`dataview
TABLE
  contact AS "Contact",
  stage AS "Phase",
  deal_value AS "Deal Value",
  dateformat(date(created), "yyyy-MM-dd") AS "Started",
  round((date(today) - date(created)).days) AS "Days In"
FROM "01 - Clients"
WHERE status = "onboarding"
SORT created ASC
\`\`\`

## Blocked / Needs Attention (No contact in 7+ days)
\`\`\`dataview
TABLE
  contact AS "Contact",
  company AS "Company",
  last_contact AS "Last Contact"
FROM "01 - Clients"
WHERE status = "onboarding"
SORT last_contact ASC
\`\`\`

## Recently Completed Onboardings
\`\`\`dataview
TABLE
  contact AS "Contact",
  deal_value AS "Deal Value",
  last_contact AS "Completed"
FROM "01 - Clients"
WHERE status = "active"
SORT last_contact DESC
LIMIT 10
\`\`\`

## Onboarding Checklists by Tier
- [[Multi-System Checklist]] — $7,500 – $15,000 (2-4 weeks)
- [[Full Build Checklist]] — $15,000 – $40,000 (4-8 weeks)
- [[AI-Native Ops Checklist]] — $40,000+ (8-16 weeks)
- [[Onboarding SOP]] — Step-by-step for every new client
`, 'utf-8')

    // ─── Multi-System Build Checklist ─────────
    await fs.writeFile(`${VAULT_PATH}/02 - Onboarding/Multi-System Checklist.md`, `# Multi-System Build Onboarding — $7,500 to $15,000

> **Timeline:** 2-4 weeks | **Deliverables:** 3-5 connected systems
> **Support:** 30-day post-launch

---

## Phase 1: Discovery + Access (Days 1-3)
- [ ] Kickoff call completed (60 min deep-dive)
- [ ] Full audit review with client
- [ ] Access credentials collected → [[12 - Credentials/{{client}}-creds|Credential Vault]]
- [ ] Current tools mapped (5-8 integrations)
- [ ] Top 3-5 target systems confirmed from audit opportunities
- [ ] System architecture sign-off
- [ ] Communication cadence agreed (Slack/email, frequency)

## Phase 2: Build (Days 4-14)
- [ ] CRM + pipeline setup and configuration
- [ ] System 1: _____________________ — built and tested
- [ ] System 2: _____________________ — built and tested
- [ ] System 3: _____________________ — built and tested
- [ ] Integration layer connected (5-8 tools)
- [ ] Basic AI chatbot OR email automation configured
- [ ] KPI dashboard built with industry-specific metrics
- [ ] Internal QA pass

## Phase 3: Test + Train (Days 15-21)
- [ ] Client walkthrough and review
- [ ] Training session 1 — live demo + Q&A
- [ ] Training session 2 — hands-on practice
- [ ] SOPs recorded and documented
- [ ] Client feedback incorporated
- [ ] Final QA pass

## Phase 4: Handoff (Days 22-30)
- [ ] KPI dashboard delivered
- [ ] Full documentation handoff
- [ ] 30-day support period begins
- [ ] Post-launch check-in scheduled (Day 7)
- [ ] Client satisfaction check
- [ ] Update vault metrics baseline
- [ ] Phase 2 expansion conversation scheduled

---

## Deliverable Reference (by Vertical)
| Vertical | Typical Systems |
|----------|----------------|
| **Online** | Onboarding engine + churn prevention + content pipeline |
| **Local** | AI receptionist + booking automation + review engine |
| **Professional** | Client intake + proposal system + pipeline automation |
| **Product** | Cart recovery + post-purchase nurture + fulfillment alerts |
`, 'utf-8')

    // ─── AI-Native Ops Checklist ──────────────
    await fs.writeFile(`${VAULT_PATH}/02 - Onboarding/AI-Native Ops Checklist.md`, `# AI-Native Ops Onboarding — $40,000+

> **Timeline:** 8-16 weeks + ongoing retainer
> **Deliverables:** Everything in Full Build + custom AI agents, multi-department integration, advanced analytics
> **Support:** 6-month retainer with dedicated strategist

---

## Phase 1: Deep Discovery (Weeks 1-2)
- [ ] Executive kickoff call
- [ ] Multi-department interviews (sales, support, marketing, ops, finance)
- [ ] Full system audit across all departments
- [ ] Custom AI agent specification document
- [ ] All credentials collected → [[12 - Credentials/{{client}}-creds|Credential Vault]]
- [ ] Complete architecture document (9+ systems)
- [ ] Sprint plan finalized and signed off
- [ ] Dedicated Slack channel created
- [ ] Priority support SLA confirmed

## Phase 2: Foundation Build (Weeks 3-6)
- [ ] Phase 1 systems (3 foundation systems) — built
- [ ] Phase 2 systems (3 optimization systems) — built
- [ ] Phase 3 systems (3 scale systems) — built
- [ ] Multi-department integration layer
- [ ] All system integration testing
- [ ] Client review checkpoint 1

## Phase 3: AI Agent Development (Weeks 7-10)
- [ ] Custom AI agent 1: _____________________ — built and tested
- [ ] Custom AI agent 2: _____________________ — built and tested
- [ ] Custom AI agent 3: _____________________ — built and tested
- [ ] Advanced predictive analytics layer
- [ ] Forecasting + anomaly detection configured
- [ ] Opportunity scoring system
- [ ] Custom BI layer + executive dashboards
- [ ] Board-ready report templates
- [ ] Client review checkpoint 2

## Phase 4: Optimize + Launch (Weeks 11-14)
- [ ] Full integration testing
- [ ] User acceptance testing
- [ ] Performance optimization
- [ ] Security review
- [ ] Team training sessions (up to 4)
- [ ] Full SOP library created
- [ ] Training videos recorded
- [ ] Soft launch with pilot department
- [ ] Full production launch

## Phase 5: Retainer + Continuous Optimization (Weeks 15+)
- [ ] 90-day optimization period begins
- [ ] A/B testing on key systems
- [ ] Monthly ROI reports configured
- [ ] Quarterly Business Review 1 scheduled
- [ ] QBR 1 completed — strategy adjustments made
- [ ] QBR 2 completed
- [ ] 6-month retainer review + renewal discussion
`, 'utf-8')

    // ─── Onboarding SOP ──────────────────────
    await fs.writeFile(`${VAULT_PATH}/02 - Onboarding/Onboarding SOP.md`, `# Client Onboarding SOP

> Standard operating procedure for onboarding every new Eliana Tech client.
> Follow this checklist from the moment a proposal is signed.

---

## Step 1: Signed Proposal → Setup (Day 0)

1. **Update vault status** — Change client status from \`prospect\` to \`onboarding\` in admin panel
2. **Create project board** — Create \`13 - Projects/{client}-project.md\` from [[Project Kickoff]] template
3. **Select tier checklist**:
   - $7.5K–$15K → [[Multi-System Checklist]]
   - $15K–$40K → [[Full Build Checklist]]
   - $40K+ → [[AI-Native Ops Checklist]]
4. **Send welcome email** — Use the onboarding welcome template
5. **Schedule kickoff call** — Within 48 hours via cal.com/elianatech/30min
6. **Create credential vault** — Create \`12 - Credentials/{client}-creds.md\` from [[Credential Entry]] template

## Step 2: Kickoff Call (Day 1-2)

1. **Run the call**:
   - Review audit results together
   - Confirm top priorities and target systems
   - Discuss timeline and communication preferences
   - Identify all tools/platforms that need access
2. **After the call**:
   - Create meeting note from [[Meeting Notes]] template
   - Update strategy section in client vault
   - Send credential collection form/request
   - Update project board with confirmed deliverables

## Step 3: Credential Collection (Day 2-5)

1. **Send access request** — List every platform we need login/API access to
2. **Store credentials** — Use [[Credential Entry]] template, save to \`12 - Credentials/\`
3. **Test all access** — Log into each platform, verify permissions
4. **Note any blockers** — Missing access, pending invites, etc.
5. **Follow up daily** until all access is collected

> **Security:** Never store passwords in plain text in Slack/email.
> Use the credential vault with rotation tracking.
> For actual passwords, reference 1Password/Bitwarden entries.

## Step 4: Build Phase (Varies by Tier)

1. Follow the tier-specific checklist
2. Update project board daily
3. Log blockers immediately
4. Send weekly progress update to client
5. Schedule review calls at each phase checkpoint

## Step 5: Training + Handoff

1. Schedule training sessions per tier:
   - Multi-System: 2 sessions
   - Full Build: up to 4 sessions
   - AI-Native: up to 4 sessions + ongoing
2. Record all sessions
3. Create SOPs for each system
4. Generate [[Handoff Document]] from template
5. Deliver documentation package

## Step 6: Post-Launch

1. Monitor systems daily for first week
2. Check-in call at Day 7
3. Update vault metrics with baseline measurements
4. Begin support period (30 or 90 days)
5. Schedule next review (30-day or QBR)
6. Update client status to \`active\` when support period begins

---

## Communication Cadence

| Phase | Frequency | Channel |
|-------|-----------|---------|
| Discovery | Daily | Slack + email |
| Build | Weekly update + as-needed | Slack |
| Testing | 2-3x per week | Slack + calls |
| Post-launch | Weekly (first month) | Email + calls |
| Ongoing | Monthly | Email + QBR calls |
`, 'utf-8')

    // ─── Credential Entry Template ────────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Credential Entry.md`, `---
client: ""
platform: ""
type: credential
date_collected: {{date:YYYY-MM-DD}}
last_rotated: {{date:YYYY-MM-DD}}
rotation_interval_days: 90
tags: [credential]
---

# {{platform}} — Credentials

> **Client:** [[{{client}}]]
> **Collected:** {{date:YYYY-MM-DD}} | **Last Rotated:** {{date:YYYY-MM-DD}}

---

## Access Details

| Field | Value |
|-------|-------|
| **URL** | |
| **Username / Email** | |
| **Password** | \`[See 1Password/Bitwarden — entry: {{platform}}]\` |
| **API Key** | |
| **API Secret** | |
| **2FA Method** | None / TOTP / SMS / Email |
| **2FA Recovery Codes** | \`[See 1Password]\` |
| **Account Type** | Admin / Editor / Viewer |

## Connection Details (API/Webhooks)

| Field | Value |
|-------|-------|
| **Base URL** | |
| **Webhook URL** | |
| **OAuth Client ID** | |
| **OAuth Secret** | \`[See 1Password]\` |
| **Scopes** | |
| **Rate Limits** | |

## Notes

-

## Rotation Log

| Date | Rotated By | Notes |
|------|-----------|-------|
| {{date:YYYY-MM-DD}} | Mia | Initial collection |
`, 'utf-8')

    // ─── Project Kickoff Template ─────────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Project Kickoff.md`, `---
client: ""
tier: ""
vertical: ""
deal_value: 0
start_date: {{date:YYYY-MM-DD}}
target_date: ""
current_phase: kickoff
status: active
tags: [project]
---

# Project — {{client}}

> **Tier:** {{tier}} | **Vertical:** {{vertical}}
> **Deal Value:** $\{{deal_value}} | **Start:** \{{date:YYYY-MM-DD}} | **Target:** \{{target_date}}

---

## Key Stakeholders

| Role | Name | Email | Notes |
|------|------|-------|-------|
| Client Contact | | | |
| Decision Maker | | | |
| Technical Contact | | | |
| Eliana Tech Lead | Mia Louviere | mia@eliana.tech | |

## Communication Plan

| Channel | Purpose | Frequency |
|---------|---------|-----------|
| Slack | Daily updates, quick questions | As needed |
| Email | Formal updates, deliverables | Weekly |
| Cal.com | Review calls | Per phase |

## Deliverables

### Phase 1 — Foundation
- [ ] Deliverable 1: _____________________
- [ ] Deliverable 2: _____________________
- [ ] Deliverable 3: _____________________

### Phase 2 — Optimization
- [ ] Deliverable 4: _____________________
- [ ] Deliverable 5: _____________________
- [ ] Deliverable 6: _____________________

### Phase 3 — Scale
- [ ] Deliverable 7: _____________________
- [ ] Deliverable 8: _____________________
- [ ] Deliverable 9: _____________________

## Blocker Log

| Date | Blocker | Owner | Status | Resolution |
|------|---------|-------|--------|------------|

## Change Requests

| Date | Request | Impact | Approved | Notes |
|------|---------|--------|----------|-------|

## Links
- **Credentials:** [[12 - Credentials/{{client}}-creds|Credential Vault]]
- **Client Vault:** [[01 - Clients/{{client}}|Client File]]
- **Proposal:** [[07 - Proposals/{{client}}-proposal|Proposal]]
`, 'utf-8')

    // ─── Phase Checklist Template ─────────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Phase Checklist.md`, `---
client: ""
phase: ""
start_date: {{date:YYYY-MM-DD}}
end_date: ""
status: not-started
tags: [phase]
---

# Phase: {{phase}} — {{client}}

> **Start:** {{date:YYYY-MM-DD}} | **Target End:** {{end_date}} | **Status:** {{status}}

---

## Deliverables
- [ ] _____________________
- [ ] _____________________
- [ ] _____________________

## Dependencies
- [ ] _____________________

## Blockers
-

## Sign-off
- [ ] Client reviewed and approved
- [ ] All deliverables tested
- [ ] Documentation updated
`, 'utf-8')

    // ─── Handoff Document Template ────────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Handoff Document.md`, `---
client: ""
tier: ""
handoff_date: {{date:YYYY-MM-DD}}
support_period: "30-day"
next_review_date: ""
tags: [handoff]
---

# Client Handoff — {{client}}

> **Tier:** {{tier}} | **Handoff Date:** {{date:YYYY-MM-DD}}
> **Support Period:** {{support_period}} | **Next Review:** {{next_review_date}}

---

## Systems Built

| System | Description | Status | Documentation |
|--------|-------------|--------|---------------|
| | | Live | [[link]] |
| | | Live | [[link]] |
| | | Live | [[link]] |

## Access & Credentials
- Full credential vault: [[12 - Credentials/{{client}}-creds]]

## Training Completed

| Session | Date | Recording | Attendees |
|---------|------|-----------|-----------|
| Session 1 | | [link] | |
| Session 2 | | [link] | |

## SOPs Delivered
- [ ] SOP 1: _____________________
- [ ] SOP 2: _____________________
- [ ] SOP 3: _____________________

## KPI Dashboard
- Dashboard URL:
- Key metrics being tracked:
  - Metric 1:
  - Metric 2:
  - Metric 3:

## Support Terms
- **Period:** {{support_period}}
- **Response time:** Within 24 hours (business days)
- **Channel:** Slack / Email
- **Scope:** Bug fixes, minor adjustments, questions
- **Out of scope:** New features, major changes (require new engagement)

## Baseline Metrics (at handoff)

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Hours/week on manual tasks | | | |
| Response time | | | |
| Conversion rate | | | |
| Churn rate | | | |

## Next Steps
1. 30-day support monitoring begins
2. Weekly check-in calls (first month)
3. Monthly review after support period
4. Phase 2 expansion conversation at Day 30
`, 'utf-8')

    // ─── Weekly Review Template ───────────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Weekly Review.md`, `# Week of {{date:YYYY-MM-DD}} — Weekly Review

## Pipeline Changes
- New leads:
- Stage changes:
- Lost:

## Revenue
- Closed this week: $
- Pipeline total: $
- Invoices sent: $

## Onboarding Progress
| Client | Phase | % Complete | Blockers |
|--------|-------|-----------|----------|
| | | | |

## Client Health
| Client | Status | Notes |
|--------|--------|-------|
| | | |

## Wins
-

## Issues / Blockers
-

## Next Week Priorities
1.
2.
3.
`, 'utf-8')

    // ─── Proposal Follow-up Template ──────────
    await fs.writeFile(`${VAULT_PATH}/03 - Templates/Proposal Follow-up.md`, `---
client: ""
proposal_sent: {{date:YYYY-MM-DD}}
tier: ""
price: 0
status: pending
tags: [follow-up]
---

# Proposal Follow-up — {{client}}

> **Sent:** \{{date:YYYY-MM-DD}} | **Tier:** \{{tier}} | **Price:** $\{{price}}

---

## Follow-up Schedule

- [ ] **Day 2** — Quick check: "Did you get a chance to review?"
- [ ] **Day 5** — Value reinforcement: Share relevant case study or ROI example
- [ ] **Day 10** — Soft close: "Any questions? Happy to jump on a quick call"
- [ ] **Day 14** — Proposal expires: "Last chance at this pricing"

## Client Responses
| Date | Channel | Response | Next Action |
|------|---------|----------|-------------|
| | | | |

## Objections Raised
| Objection | Response | Outcome |
|-----------|----------|---------|
| | | |

## Notes
-
`, 'utf-8')

    // ─── Credentials Dashboard ────────────────
    await fs.writeFile(`${VAULT_PATH}/12 - Credentials/_Credentials Dashboard.md`, `# Credentials Dashboard

> Central view of all stored credentials across clients and internal tools.
> **Security:** Actual passwords should be stored in 1Password/Bitwarden. These notes store metadata, access details, and rotation tracking.

---

## All Client Credentials
\`\`\`dataview
TABLE
  client AS "Client",
  platform AS "Platform",
  date_collected AS "Collected",
  last_rotated AS "Last Rotated"
FROM "12 - Credentials"
WHERE type = "credential" AND file.name != "_Credentials Dashboard" AND file.name != "Internal Tools"
SORT client ASC
\`\`\`

## Rotation Needed (90+ days since last rotation)
\`\`\`dataview
TABLE
  client AS "Client",
  platform AS "Platform",
  last_rotated AS "Last Rotated",
  round((date(today) - date(last_rotated)).days) AS "Days Since Rotation"
FROM "12 - Credentials"
WHERE type = "credential" AND last_rotated AND (date(today) - date(last_rotated)).days > 90
SORT last_rotated ASC
\`\`\`

## Internal Tools
- [[Internal Tools|Eliana Tech Internal Credentials]]

## Quick Actions
- Create new credential entry: Use [[Credential Entry]] template
- Credential collection SOP: [[client-credentials-sop]]
`, 'utf-8')

    // ─── Internal Tools Credentials ───────────
    await fs.writeFile(`${VAULT_PATH}/12 - Credentials/Internal Tools.md`, `---
client: "Eliana Tech"
platform: "Internal"
type: credential
date_collected: ${new Date().toISOString().split('T')[0]}
last_rotated: ${new Date().toISOString().split('T')[0]}
tags: [credential, internal]
---

# Eliana Tech — Internal Tool Credentials

> **SENSITIVE** — Handle with care. Actual secrets in 1Password.

---

## Hosting & Deployment

### Vercel
| Field | Value |
|-------|-------|
| **URL** | https://vercel.com/dashboard |
| **Account** | mia@eliana.tech |
| **Password** | \`[1Password: Vercel]\` |
| **Team** | Eliana Tech |

### Domain Registrar
| Field | Value |
|-------|-------|
| **Provider** | |
| **URL** | |
| **Account** | |
| **Domains** | eliana.tech |

---

## Backend / Database

### Firebase
| Field | Value |
|-------|-------|
| **Console** | https://console.firebase.google.com |
| **Project ID** | |
| **Account** | mia@eliana.tech |
| **Service Account Key** | \`[1Password: Firebase SA Key]\` |

### Supabase
| Field | Value |
|-------|-------|
| **Dashboard** | https://supabase.com/dashboard |
| **Account** | mia@eliana.tech |
| **Project URL** | |
| **Anon Key** | \`[1Password: Supabase Anon]\` |
| **Service Key** | \`[1Password: Supabase Service]\` |

---

## Email & Communications

### Resend
| Field | Value |
|-------|-------|
| **Dashboard** | https://resend.com |
| **API Key** | \`[1Password: Resend API]\` |
| **Domain** | eliana.tech |
| **DNS Verified** | Yes / No |

### Cal.com
| Field | Value |
|-------|-------|
| **URL** | https://cal.com/elianatech |
| **Account** | mia@eliana.tech |
| **API Key** | \`[1Password: Cal.com API]\` |

### Twilio
| Field | Value |
|-------|-------|
| **Console** | https://console.twilio.com |
| **Account SID** | |
| **Auth Token** | \`[1Password: Twilio Auth]\` |
| **Phone Number** | |

---

## AI / LLM

### Anthropic (Claude)
| Field | Value |
|-------|-------|
| **Console** | https://console.anthropic.com |
| **API Key** | \`[1Password: Anthropic API]\` |
| **Usage Tier** | |

### OpenAI
| Field | Value |
|-------|-------|
| **Console** | https://platform.openai.com |
| **API Key** | \`[1Password: OpenAI API]\` |
| **Org ID** | |

---

## CRM / Client Tools

### GoHighLevel
| Field | Value |
|-------|-------|
| **URL** | https://app.gohighlevel.com |
| **Account** | mia@eliana.tech |
| **Agency ID** | |
| **API Key** | \`[1Password: GHL API]\` |

---

## Payments

### Stripe
| Field | Value |
|-------|-------|
| **Dashboard** | https://dashboard.stripe.com |
| **Account** | mia@eliana.tech |
| **Publishable Key** | |
| **Secret Key** | \`[1Password: Stripe Secret]\` |
| **Webhook Secret** | \`[1Password: Stripe Webhook]\` |

---

## Rotation Log

| Date | Service | Rotated By | Notes |
|------|---------|-----------|-------|
| ${new Date().toISOString().split('T')[0]} | — | Mia | Initial vault setup |
`, 'utf-8')

    // ─── Project Board (Kanban) ───────────────
    await fs.writeFile(`${VAULT_PATH}/13 - Projects/Project Board.md`, `---
kanban-plugin: basic
---

# Project Board

## Proposal Sent
- [ ] _Drag client projects here_

## Signed
- [ ] _Drag client projects here_

## Kickoff
- [ ] _Drag client projects here_

## Phase 1 — Foundation
- [ ] _Drag client projects here_

## Phase 2 — Optimization
- [ ] _Drag client projects here_

## Phase 3 — Scale
- [ ] _Drag client projects here_

## Handoff
- [ ] _Drag client projects here_

## Complete
- [ ] _Drag client projects here_

%% kanban:settings
\`\`\`
{"kanban-plugin":"basic","lane-width":220,"show-checkboxes":false}
\`\`\`
%%
`, 'utf-8')

    // ─── SOPs ─────────────────────────────────
    await fs.writeFile(`${VAULT_PATH}/14 - SOPs/Audit-to-Proposal.md`, `# SOP: Audit → Proposal Flow

> End-to-end process from when a prospect submits an audit to when they receive a proposal.

---

## 1. Audit Submitted (Automated)
- Prospect fills out the Business Automation Audit on eliana.tech
- System auto-calculates 5 category scores + overall score
- Intent level determined (high/medium/low)
- Immediate email sent based on intent level

## 2. Vault Created (Automated)
- Client vault auto-created in Firestore via \`createVaultFromAudit()\`
- .md file synced to \`01 - Clients/{slug}.md\` in Obsidian
- Timeline entry: "Audit submitted (score: X/100)"
- Tags auto-applied: industry, hot-lead (if high intent)

## 3. AI Research (Automated)
- \`runVaultResearch()\` fires automatically
- Scrapes prospect's website
- Claude generates research brief (what they do, market, opportunities)
- Research saved to vault

## 4. Lead Routing (Manual Review)
- [ ] Check admin panel for new audits
- [ ] Review audit score and intent signals
- [ ] Decide: Propose now / Nurture first / Disqualify

### Decision Matrix
| Intent | Score | Action |
|--------|-------|--------|
| HIGH (excitement 8+ OR pain 7+) | Any | Propose within 24 hours |
| MEDIUM | 35+ | Strategy call first, then propose |
| LOW | Any | Free advice, add to nurture list |
| Any | Disqualified | Free DIY Action Plan |

## 5. Pricing (Use the Algorithm)
- [ ] Follow the 6-step pricing algorithm from [[Pricing Sheet]]
- [ ] Step 1: Check floor (qualify/disqualify)
- [ ] Step 2: Pick starting tier based on score
- [ ] Step 3: Apply override rules
- [ ] Step 4: Add complexity factors
- [ ] Step 5: Check ROI ceiling
- [ ] Step 6: Apply discounts (max 15%)

## 6. Proposal Generation
- Pricing agent calculates tier + price
- Proposal agent generates from [[Proposal Template]]
- Proposal synced to \`07 - Proposals/{slug}-proposal.md\`
- Timeline entry: "Proposal generated"

## 7. Proposal Delivery
- [ ] Review generated proposal for accuracy
- [ ] Send to prospect via email
- [ ] Create [[Proposal Follow-up]] tracking note
- [ ] Update vault stage to "proposal-sent"
- [ ] Set follow-up reminders (Day 2, 5, 10, 14)

## 8. Follow-up Sequence
- Day 2: Quick check — "Did you get a chance to review?"
- Day 5: Value reinforcement — share relevant case study
- Day 10: Soft close — "Any questions?"
- Day 14: Proposal expires — "Last chance at this pricing"

## 9. Signed → Onboarding
- When prospect signs: jump to [[Client-Onboarding-Flow]]
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/14 - SOPs/Client-Onboarding-Flow.md`, `# SOP: Client Onboarding Flow

> From signed proposal to active client. Follow this for every new engagement.

---

## Phase 0: Signed (Day 0)

- [ ] Payment received or payment plan confirmed
- [ ] Update vault status: \`prospect\` → \`onboarding\`
- [ ] Update vault stage: \`signed\`
- [ ] Create project board entry: \`13 - Projects/{client}-project.md\`
- [ ] Create credential vault: \`12 - Credentials/{client}-creds.md\`
- [ ] Select onboarding checklist by tier:
  - $7.5K–$15K → [[Multi-System Checklist]]
  - $15K–$40K → [[Full Build Checklist]]
  - $40K+ → [[AI-Native Ops Checklist]]
- [ ] Send welcome email
- [ ] Schedule kickoff call within 48 hours

## Phase 1: Kickoff (Day 1-3)

- [ ] Kickoff call completed
- [ ] Review audit findings together
- [ ] Confirm priorities and target systems
- [ ] Discuss timeline expectations
- [ ] Identify all tools/platforms needing access
- [ ] Create meeting note in \`06 - Meetings/\`
- [ ] Send credential collection request
- [ ] Create communication channel (Slack/dedicated email thread)

## Phase 2: Credential Collection (Day 2-7)

- [ ] Send detailed access request with platform list
- [ ] Follow up daily until all credentials received
- [ ] Store each credential using [[Credential Entry]] template
- [ ] Test access to every platform
- [ ] Document any permission issues or blockers
- [ ] All credentials collected and verified

> **See also:** [[client-credentials-sop]]

## Phase 3: Build (Varies by Tier)

- [ ] System architecture finalized and approved
- [ ] Follow tier-specific checklist
- [ ] Update project board daily
- [ ] Send weekly progress email to client
- [ ] Schedule review call at each phase checkpoint
- [ ] Log all blockers immediately

## Phase 4: Testing + Training

- [ ] Internal QA complete
- [ ] Client walkthrough and feedback
- [ ] Training sessions delivered (recorded)
- [ ] SOPs written for each system
- [ ] Client signs off on all deliverables

## Phase 5: Handoff

- [ ] Generate [[Handoff Document]] from template
- [ ] Deliver documentation package
- [ ] KPI dashboard reviewed with client
- [ ] Baseline metrics recorded in vault
- [ ] Support period begins
- [ ] Post-launch monitoring schedule set

## Phase 6: Post-Launch

- [ ] Day 7: Check-in call
- [ ] Day 14: Metrics review
- [ ] Day 30: Support period review
- [ ] Update vault status: \`onboarding\` → \`active\`
- [ ] Phase 2 expansion conversation
- [ ] Monthly review cadence established
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/14 - SOPs/Monthly-Client-Review.md`, `# SOP: Monthly Client Review

> How to run monthly reviews for active clients.

---

## Preparation (Day Before)

1. [ ] Pull current metrics from client vault
2. [ ] Compare to baseline (from handoff document)
3. [ ] Check for open issues in \`09 - Issues/\`
4. [ ] Review recent timeline entries
5. [ ] Prepare talking points:
   - What's working well
   - Areas for improvement
   - New opportunities / upsell potential
   - Any system issues or maintenance needed

## During the Call

1. [ ] Share metrics: hours saved, tickets deflected, conversion improvements
2. [ ] Celebrate wins — show ROI numbers
3. [ ] Address any concerns or issues
4. [ ] Discuss upcoming priorities
5. [ ] Identify expansion opportunities
6. [ ] Confirm next review date

## After the Call

1. [ ] Create meeting note in \`06 - Meetings/\`
2. [ ] Update client vault metrics
3. [ ] Update ROI notes
4. [ ] Log any new issues
5. [ ] Update timeline with review entry
6. [ ] Send summary email to client
7. [ ] Update project board if scope changes

## Upsell / Expansion Signals

| Signal | Opportunity |
|--------|-------------|
| "We wish X was automated too" | Additional system build |
| "The team loves this" | Team training add-on |
| "Can we do this for another department?" | Multi-department expansion |
| "We're growing fast" | Scale tier upgrade |
| "Monthly retainer interest" | Ongoing partnership |
`, 'utf-8')

    // ─── Vertical Guides ──────────────────────
    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Vertical Guide - Online.md`, `# Vertical Guide: Online Business

> Course creators, coaches, memberships, SaaS, digital products, newsletters, cohorts

---

## Language to Use
Offers, launches, funnels, list, churn, content, audience, subscribers, modules, drip

## Common Pain Points
- Manual onboarding eating hours every week
- Content creation bottleneck — can't repurpose fast enough
- High churn, no automated retention system
- Disconnected tools (Kajabi + Stripe + email + calendar)
- Owner does everything — can't step away

## Typical Systems Built

### Multi-System ($7.5K–$15K)
- Onboarding engine + churn prevention + content pipeline

### Full Build ($15K–$40K)
| Phase | Systems |
|-------|---------|
| Foundation | AI lead capture + qualifier, Automated onboarding engine, AI support system |
| Optimization | Churn prevention engine, Content repurposing pipeline, Revenue intelligence dashboard |
| Scale | AI upsell + expansion engine, Predictive analytics layer, Partner + affiliate automation |

### AI-Native ($40K+)
All of the above + custom AI agents for content, support, and sales

## Key Metrics to Track
- Churn rate (target: under 5%)
- Onboarding completion rate
- Content output per week
- Revenue per subscriber
- Support ticket volume
- Time-to-first-value for new members

## Common Tool Stack
- Kajabi / Teachable / Thinkific (course platform)
- Stripe (payments)
- ConvertKit / Mailchimp (email)
- Slack / Circle (community)
- Cal.com (scheduling)
- Zapier / Make (automation glue)

## ROI Math Example
- $300K revenue, 15% churn → $45K/yr lost to churn
- Cut churn by 50% with retention engine → **$22.5K recovered**
- Save 15 hrs/week on manual tasks → **$58.5K/yr in time**
- Total first-year gain: **$81K** on a $15K investment = **5.4x ROI**
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Vertical Guide - Local.md`, `# Vertical Guide: Local Business

> Home services, healthcare, construction, restaurants

---

## Language to Use
Jobs, leads, estimates, technicians, service calls, appointments, reviews, dispatch

## Common Pain Points
- Missed calls = missed jobs (no after-hours capture)
- No automated booking or confirmation
- Zero review generation system
- Manual dispatching and scheduling
- Paper-based estimates and invoicing

## Typical Systems Built

### Multi-System ($7.5K–$15K)
- AI receptionist + booking automation + review engine

### Full Build ($15K–$40K)
| Phase | Systems |
|-------|---------|
| Foundation | AI receptionist + lead capture, Automated booking + confirmation, Automated review engine |
| Optimization | Customer follow-up + retention, Invoice + payment automation, Business health dashboard |
| Scale | Referral + loyalty program, Seasonal campaign engine, Team + dispatch automation |

### AI-Native ($40K+)
All of the above + custom AI agents for dispatch, quoting, and customer service

## Key Metrics to Track
- Missed call rate (target: under 5%)
- Booking conversion rate
- Average review rating + volume
- Revenue per technician/provider
- Job completion rate
- Customer lifetime value

## ROI Math Example
- $500K revenue, 20% missed calls → $100K/yr in lost jobs
- AI receptionist captures 60% of missed → **$60K recovered**
- Automated reviews → 3x review volume → 15% more leads → **$75K**
- Total first-year gain: **$135K** on a $15K investment = **9x ROI**
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Vertical Guide - Professional.md`, `# Vertical Guide: Professional Services

> Agencies, law firms, accounting, real estate, consulting

---

## Language to Use
Clients, retainers, proposals, engagements, pipeline, billable hours, utilization

## Common Pain Points
- Proposal creation takes hours per client
- No automated client intake or qualification
- Pipeline visibility is a spreadsheet (or nothing)
- Thought leadership content is sporadic
- Owner is the bottleneck for every decision

## Typical Systems Built

### Multi-System ($7.5K–$15K)
- Client intake + proposal system + pipeline automation

### Full Build ($15K–$40K)
| Phase | Systems |
|-------|---------|
| Foundation | AI client intake + qualification, Automated proposal system, Client portal + communication |
| Optimization | Pipeline + deal automation, Client health + retention, Thought leadership engine |
| Scale | Referral + partnership system, Revenue intelligence dashboard, Upsell + account expansion |

### AI-Native ($40K+)
All of the above + custom AI agents for proposals, client management, and research

## Key Metrics to Track
- Proposal-to-close rate
- Average engagement value
- Client retention rate
- Billable utilization rate
- Pipeline velocity (days to close)
- Referral rate

## ROI Math Example
- $1M revenue, 8 proposals/month taking 4 hrs each = 32 hrs/month
- AI proposal system → 30 min each = **28 hrs/month freed**
- Pipeline automation → 20% faster close → **$200K accelerated revenue**
- Total first-year gain: **$175K** on a $25K investment = **7x ROI**
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Vertical Guide - Product.md`, `# Vertical Guide: Product Business

> E-commerce, DTC brands, manufacturing

---

## Language to Use
Orders, SKUs, fulfillment, AOV, returns, inventory, shipping, LTV, repeat purchase

## Common Pain Points
- Cart abandonment with no recovery system
- Post-purchase experience is "thanks, bye"
- Customer service overwhelmed with repetitive questions
- No loyalty or retention program
- Inventory and fulfillment tracking is manual

## Typical Systems Built

### Multi-System ($7.5K–$15K)
- Cart recovery + post-purchase nurture + fulfillment alerts

### Full Build ($15K–$40K)
| Phase | Systems |
|-------|---------|
| Foundation | Abandoned cart recovery, Post-purchase nurture engine, AI customer service |
| Optimization | Customer retention + loyalty, Inventory + fulfillment automation, AI marketing + content engine |
| Scale | Revenue intelligence dashboard, Predictive reorder system, VIP + high-LTV program |

### AI-Native ($40K+)
All of the above + custom AI agents for customer service, inventory, and marketing

## Key Metrics to Track
- Cart abandonment rate (target: under 60%)
- Cart recovery rate
- Repeat purchase rate
- Average order value (AOV)
- Customer lifetime value (LTV)
- Return/refund rate
- Customer service resolution time

## ROI Math Example
- $2M revenue, 75% cart abandonment, 0% recovery
- Cart recovery system captures 15% of abandoned → **$225K recovered**
- Post-purchase nurture → 20% increase in repeat purchase → **$200K**
- AI customer service → 50% ticket deflection → **$60K/yr in support savings**
- Total first-year gain: **$485K** on a $25K investment = **19x ROI**
`, 'utf-8')

    // ─── Tech Stack Reference ─────────────────
    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Tech Stack Reference.md`, `# Eliana Tech — Tech Stack Reference

> All platforms and tools we use internally and for client builds.

---

## Frontend
| Tool | Purpose | Docs |
|------|---------|------|
| Next.js | React framework, SSR, API routes | nextjs.org/docs |
| Tailwind CSS | Utility-first CSS | tailwindcss.com/docs |
| shadcn/ui | Component library | ui.shadcn.com |
| Vercel | Hosting, deployment, cron jobs | vercel.com/docs |

## Backend / Database
| Tool | Purpose | Docs |
|------|---------|------|
| Firebase / Firestore | NoSQL database, auth | firebase.google.com/docs |
| Supabase | PostgreSQL database, auth, edge functions | supabase.com/docs |

## AI / LLM
| Tool | Purpose | Docs |
|------|---------|------|
| Anthropic Claude | Primary LLM (Sonnet 4.6, Opus 4.6) | docs.anthropic.com |
| OpenAI GPT | Secondary LLM, embeddings | platform.openai.com/docs |

## Email & Communications
| Tool | Purpose | Docs |
|------|---------|------|
| Resend | Transactional email | resend.com/docs |
| Twilio | SMS, voice, WhatsApp | twilio.com/docs |
| Cal.com | Scheduling / booking | cal.com/docs |

## CRM / Client Management
| Tool | Purpose | Docs |
|------|---------|------|
| GoHighLevel | Full CRM, pipelines, automation | help.gohighlevel.com |

## Automation
| Tool | Purpose | Docs |
|------|---------|------|
| Zapier | No-code automation glue | zapier.com/help |
| Make (Integromat) | Advanced automation workflows | make.com/en/help |
| n8n | Self-hosted workflow automation | docs.n8n.io |

## Knowledge Management
| Tool | Purpose | Docs |
|------|---------|------|
| Obsidian | Internal CRM, project management, SOPs | obsidian.md/help |

## Common Gotchas
- **Vercel cron jobs**: Max 1 per route, 6-hour minimum on free plan
- **Resend free tier**: 100 emails/day, 3000/month — upgrade for production clients
- **Firebase**: Watch Firestore read costs — use caching
- **GHL API**: Rate limited, use webhooks where possible
- **Twilio**: Phone number verification required for new numbers
`, 'utf-8')

    // ─── Objection Handling ───────────────────
    await fs.writeFile(`${VAULT_PATH}/05 - Resources/Objection Handling.md`, `# Objection Handling Guide

> Common objections and how to respond. Use on calls and in follow-up emails.

---

## "It's too expensive"

**Reframe:** "I understand. Let me ask — what is the cost of NOT doing this? Based on your audit, you're leaving approximately $X on the table every month. Our engagement pays for itself in [payback period]."

**Follow-up:** Show the ROI math from their audit. Every $1 invested → $X back in year one.

**If budget is genuinely tight:** Offer the Multi-System Build as a starting point. Phase 1 pays for Phase 2.

---

## "I need to think about it"

**Reframe:** "Absolutely. What specific concerns would help me address so you can make a confident decision?"

**Follow-up:** Send relevant case study within 24 hours. Follow up at Day 5 with a specific insight from their audit.

**Key:** Surface the real objection. "Think about it" usually means price, timing, or trust.

---

## "I already have someone for this"

**Reframe:** "That's great! What specifically are they handling? Based on your audit scores, there are gaps that suggest some areas aren't being addressed — particularly [specific gap]."

**Follow-up:** Position as complementary, not competitive. "We specialize in the AI infrastructure layer that connects and automates what your existing team builds."

---

## "The timeline is too long"

**Reframe:** "I hear you. Here's the thing — Phase 1 goes live in [2-3 weeks]. You start seeing ROI before we're even halfway through the full build."

**Follow-up:** Break down what they get in week 1, week 2, etc. Show the early wins.

**If they want faster:** Rush delivery option (+25% of base price) is available.

---

## "Can I just do this myself?"

**Reframe:** "You absolutely can! We actually give every audit a free DIY Action Plan. The question is: your time is worth $X/hour. Is the 200+ hours of implementation the best use of it?"

**Follow-up:** Point to DIY resources in audit results. Add to nurture list. They often come back in 60-90 days.

---

## "I'm not the decision maker"

**Action:** "No problem! Would it be helpful if I put together a one-page summary for [decision maker]? I can also join a quick call with both of you."

**Key:** Never present a full proposal to someone who can't sign. Get to the decision maker first.

---

## "Just exploring / not ready yet"

**Action:** "Totally understand. I'll add you to our monthly insights list — real automation case studies, no spam. When the timing is right, everything from your audit will still be here."

**Follow-up:** Low-intent nurture sequence. Follow up in 30 days with a relevant tip.

---

## Quick Reference

| Objection | Core Strategy |
|-----------|--------------|
| Too expensive | Show ROI math, reframe as investment |
| Need to think | Surface real concern, send case study |
| Have someone | Position as complementary |
| Timeline too long | Show early Phase 1 wins |
| DIY | Respect it, calculate time cost |
| Not decision maker | Get to the real buyer |
| Just exploring | Nurture, follow up in 30 days |
`, 'utf-8')

    // ─── Runbooks ─────────────────────────────
    await fs.writeFile(`${VAULT_PATH}/10 - Runbooks/ghl-setup.md`, `# GoHighLevel Setup Runbook

> Step-by-step for setting up a new client in GoHighLevel.

---

## Pre-Flight
- [ ] Client vault created
- [ ] GHL sub-account access from client (or create new)
- [ ] Client's domain info for custom branding

## Sub-Account Setup
- [ ] Create or access sub-account
- [ ] Configure business info (name, address, phone, timezone)
- [ ] Set up custom domain (if applicable)
- [ ] Connect Twilio for SMS/voice
- [ ] Connect email (Mailgun / SMTP)
- [ ] Upload client branding (logo, colors)

## Pipeline Configuration
- [ ] Create sales pipeline stages (New → Contacted → Booked → Proposal → Won → Lost)
- [ ] Configure pipeline automation triggers
- [ ] Set up deal values and custom fields
- [ ] Create pipeline dashboard views

## Automations / Workflows
- [ ] Lead capture → auto-assign
- [ ] New lead notification
- [ ] Appointment booking confirmation
- [ ] Post-appointment follow-up
- [ ] Review request automation
- [ ] Missed call text-back
- [ ] Birthday / anniversary campaigns (if applicable)

## Integrations
- [ ] Google Calendar sync
- [ ] Facebook Lead Ads (if applicable)
- [ ] Google My Business (if applicable)
- [ ] Stripe / payment integration
- [ ] Website form integration
- [ ] Zapier / webhook connections

## Testing
- [ ] Submit test lead through every entry point
- [ ] Verify all automations fire correctly
- [ ] Test appointment booking flow
- [ ] Test SMS and email delivery
- [ ] Verify pipeline tracking works

## Handoff
- [ ] Client login created with appropriate permissions
- [ ] Training session on pipeline management
- [ ] Training session on reviewing reports
- [ ] SOPs documented
- [ ] Store credentials in [[12 - Credentials/{{client}}-creds|Credential Vault]]
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/10 - Runbooks/client-credentials-sop.md`, `# Client Credentials Collection SOP

> How to securely collect, store, and manage client credentials.

---

## What to Collect

Every client engagement requires access to their tools. Here's the standard list:

### Always Needed
- [ ] CRM login (GHL / HubSpot / etc.)
- [ ] Email platform (Mailchimp / ConvertKit / etc.)
- [ ] Website admin (WordPress / Shopify / etc.)
- [ ] Payment processor (Stripe / PayPal)
- [ ] Google Analytics / Search Console

### If Applicable
- [ ] Social media accounts (Facebook Business, Instagram)
- [ ] Ad platforms (Google Ads, Meta Ads)
- [ ] Course platform (Kajabi / Teachable)
- [ ] Scheduling tool (Calendly / Cal.com)
- [ ] Support tool (Zendesk / Intercom)
- [ ] Custom APIs / webhooks

## How to Collect

1. **Send the access request email** after kickoff call
2. **Be specific** — list exact platforms and what access level you need
3. **Offer alternatives:**
   - Invite mia@eliana.tech as admin/editor
   - Create a service account for API access
   - Share via 1Password / Bitwarden vault
4. **Never ask** for credentials via Slack DM or plain text email for sensitive accounts

## How to Store

1. Create a new credential file: \`12 - Credentials/{client-slug}-creds.md\`
2. Use the [[Credential Entry]] template
3. **Actual passwords/secrets** → 1Password (reference the entry in the note)
4. **Metadata** (URLs, usernames, notes, scopes) → credential vault file
5. Set \`last_rotated\` date

## Rotation Policy

- Rotate all client API keys every **90 days**
- Rotate after any team member change
- Rotate immediately if compromise suspected
- Log every rotation in the Rotation Log table

## Security Rules

1. Never commit credentials to git
2. Never share credentials in Slack/email body
3. Always use environment variables for API keys in code
4. Remove access when client engagement ends
5. Delete credential files for churned clients after 90-day retention period
`, 'utf-8')

    await fs.writeFile(`${VAULT_PATH}/10 - Runbooks/new-client-intake.md`, `# New Client Intake Runbook

> Complete checklist for processing a new client from first contact to kickoff.

---

## Stage 1: First Contact

- [ ] Audit submitted on eliana.tech
- [ ] Vault auto-created (check admin panel)
- [ ] AI research completed (auto)
- [ ] Review audit scores and intent signals
- [ ] Determine routing: Propose / Nurture / Disqualify

## Stage 2: Qualification

- [ ] Review scores against [[Pricing Sheet]] decision matrix
- [ ] Check disqualification criteria (pre-revenue, budget <$5K + low everything)
- [ ] If qualified: schedule strategy call
- [ ] If disqualified: send DIY resources, add to nurture

## Stage 3: Strategy Call

- [ ] Prep: review vault research, audit scores, opportunities
- [ ] Run the call (30 min via cal.com/elianatech/30min)
- [ ] Create meeting note from [[Meeting Notes]] template
- [ ] Update vault with strategy notes
- [ ] Confirm tier and scope direction

## Stage 4: Proposal

- [ ] Run 6-step pricing algorithm ([[Pricing Sheet]])
- [ ] Generate proposal
- [ ] Review for accuracy
- [ ] Send to prospect
- [ ] Update stage: "proposal-sent"
- [ ] Create [[Proposal Follow-up]] tracking

## Stage 5: Close

- [ ] Follow up per schedule (Day 2, 5, 10, 14)
- [ ] Handle objections ([[Objection Handling]])
- [ ] Negotiate if needed (max 15% discount, $7,500 floor)
- [ ] Get signature + payment
- [ ] Update stage: "won"

## Stage 6: Handoff to Onboarding

- [ ] Jump to [[Client-Onboarding-Flow]]
- [ ] Update status: \`prospect\` → \`onboarding\`
- [ ] Celebrate the win!
`, 'utf-8')

    // ─── .obsidian Plugin Configuration ───────
    const obsidianDir = `${VAULT_PATH}/.obsidian`
    await fs.mkdir(`${obsidianDir}/plugins/dataview`, { recursive: true })
    await fs.mkdir(`${obsidianDir}/plugins/obsidian-kanban`, { recursive: true })
    await fs.mkdir(`${obsidianDir}/plugins/templater-obsidian`, { recursive: true })
    await fs.mkdir(`${obsidianDir}/plugins/obsidian-tasks-plugin`, { recursive: true })

    await fs.writeFile(`${obsidianDir}/community-plugins.json`, JSON.stringify([
        "dataview",
        "obsidian-kanban",
        "templater-obsidian",
        "obsidian-tasks-plugin"
    ], null, 2), 'utf-8')

    await fs.writeFile(`${obsidianDir}/plugins/dataview/data.json`, JSON.stringify({
        renderNullAs: "—",
        taskCompletionTracking: true,
        taskCompletionUseEmojiShorthand: false,
        taskCompletionText: "completion",
        recursiveSubTaskCompletion: false,
        warnOnEmptyResult: true,
        refreshEnabled: true,
        refreshInterval: 2500,
        defaultDateFormat: "MMMM dd, yyyy",
        defaultDateTimeFormat: "h:mm a - MMMM dd, yyyy",
        maxRecursiveRenderDepth: 4,
        tableIdColumnName: "File",
        tableGroupColumnName: "Group",
        showResultCount: true,
        allowHtml: false,
        inlineQueryPrefix: "=",
        inlineJsQueryPrefix: "$=",
        inlineQueriesInCodeblocks: true,
        enableInlineDataview: true,
        enableDataviewJs: false,
        enableInlineDataviewJs: false,
        prettyRenderInlineFields: true,
        prettyRenderInlineFieldsInLivePreview: true,
    }, null, 2), 'utf-8')

    await fs.writeFile(`${obsidianDir}/plugins/templater-obsidian/data.json`, JSON.stringify({
        templates_folder: "03 - Templates",
        templates_pairs: [],
        trigger_on_file_creation: false,
        auto_jump_to_cursor: true,
        enable_system_commands: false,
        shell_path: "",
        user_scripts_folder: "",
        enable_folder_templates: false,
        folder_templates: [],
        syntax_highlighting: true,
        syntax_highlighting_mobile: false,
        enabled_templates_hotkey_file_creation: [],
    }, null, 2), 'utf-8')

    await fs.writeFile(`${obsidianDir}/plugins/obsidian-kanban/data.json`, JSON.stringify({
        "new-card-insertion-method": "prepend",
        "show-checkboxes": false,
        "prepend-archive-date": false,
        "prepend-archive-format": "YYYY-MM-DD",
    }, null, 2), 'utf-8')

    await fs.writeFile(`${obsidianDir}/plugins/obsidian-tasks-plugin/data.json`, JSON.stringify({
        globalFilter: "",
        removeGlobalFilter: false,
        setDoneDate: true,
        autoSuggestInEditor: true,
        autoSuggestMinMatch: 0,
        autoSuggestMaxItems: 6,
        provideAccessKeys: true,
        useFilenameAsScheduledDate: false,
    }, null, 2), 'utf-8')

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

// ─── Proposal Sync to Obsidian ───────────────────────────────

export async function syncProposalToObsidian(
    company: string,
    proposalMarkdown: string,
    pricing?: { tierLabel?: string; finalPrice?: number; priceRange?: string }
): Promise<void> {
    if (!IS_LOCAL) return

    try {
        const fs = await import('fs/promises')
        const dir = `${VAULT_PATH}/07 - Proposals`
        await fs.mkdir(dir, { recursive: true })

        const slug = slugify(company)
        const today = new Date().toISOString().split('T')[0]

        const md = `---
client: "[[${slug}|${company}]]"
date: ${today}
tier: "${pricing?.tierLabel || 'Unknown'}"
price: ${pricing?.finalPrice || 0}
price_range: "${pricing?.priceRange || ''}"
type: proposal
tags: [proposal, ${slug}]
---

# Proposal — ${company}

> **Client:** [[${slug}|${company}]] | **Generated:** ${today}
> **Tier:** ${pricing?.tierLabel || 'TBD'} | **Price:** ${pricing?.finalPrice ? `$${pricing.finalPrice.toLocaleString()}` : 'TBD'}

---

${proposalMarkdown}
`
        await fs.writeFile(`${dir}/${slug}-proposal.md`, md, 'utf-8')
        console.log(`[VAULT] Proposal synced for ${company}`)
    } catch (err) {
        console.error('[PROPOSAL SYNC ERROR]', err)
    }
}

// ─── Obsidian URI Helper ─────────────────────────────────────

const VAULT_NAME = 'elianatech'

export function getObsidianUri(company: string): string {
    const slug = slugify(company)
    const filePath = `01 - Clients/${slug}`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

export function getObsidianProposalUri(company: string): string {
    const slug = slugify(company)
    const filePath = `07 - Proposals/${slug}-proposal`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

export function getObsidianMeetingUri(company: string, date: string): string {
    const slug = slugify(company)
    const filePath = `06 - Meetings/${slug}-${date}`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

export function getObsidianCredentialUri(company: string): string {
    const slug = slugify(company)
    const filePath = `12 - Credentials/${slug}-creds`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

export function getObsidianProjectUri(company: string): string {
    const slug = slugify(company)
    const filePath = `13 - Projects/${slug}-project`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

export function getObsidianDashboardUri(dashboard: string = 'Home'): string {
    const filePath = `00 - Dashboard/${dashboard}`
    return `obsidian://open?vault=${encodeURIComponent(VAULT_NAME)}&file=${encodeURIComponent(filePath)}`
}

// ─── Credential Vault Sync ───────────────────────────────────

export async function syncCredentialsToObsidian(vault: VaultDoc): Promise<void> {
    if (!IS_LOCAL) return
    if (!vault.credentials || vault.credentials.length === 0) return

    try {
        const fs = await import('fs/promises')
        const slug = slugify(vault.company)
        const dir = `${VAULT_PATH}/12 - Credentials`
        await fs.mkdir(dir, { recursive: true })

        const today = new Date().toISOString().split('T')[0]

        const credSections = vault.credentials.map(c => `
## ${c.service}

| Field | Value |
|-------|-------|
| **Username / Email** | ${c.username} |
| **Password** | \`[See 1Password — entry: ${c.service}]\` |
| **Notes** | ${c.notes} |
`).join('\n---\n')

        const md = `---
client: "[[${slug}|${vault.company}]]"
platform: "Multiple"
type: credential
date_collected: ${today}
last_rotated: ${today}
tags: [credential, ${slug}]
---

# ${vault.company} — Credentials

> **Client:** [[${slug}|${vault.company}]]
> **Last Updated:** ${today}
> **Total Services:** ${vault.credentials.length}

---
${credSections}

---

## Rotation Log

| Date | Service | Rotated By | Notes |
|------|---------|-----------|-------|
| ${today} | — | Auto-sync | Initial sync from vault |
`
        await fs.writeFile(`${dir}/${slug}-creds.md`, md, 'utf-8')
    } catch (err) {
        console.error('[CREDENTIAL SYNC ERROR]', err)
    }
}

// ─── Project Tracker Sync ────────────────────────────────────

export async function syncProjectToObsidian(vault: VaultDoc): Promise<void> {
    if (!IS_LOCAL) return
    if (vault.status !== 'onboarding' && vault.status !== 'active') return

    try {
        const fs = await import('fs/promises')
        const slug = slugify(vault.company)
        const dir = `${VAULT_PATH}/13 - Projects`
        await fs.mkdir(dir, { recursive: true })

        // Don't overwrite existing project files (they may have manual edits)
        try {
            await fs.access(`${dir}/${slug}-project.md`)
            return // File exists, don't overwrite
        } catch {
            // File doesn't exist, create it
        }

        const today = new Date().toISOString().split('T')[0]

        // Determine tier from deal value
        let tier = 'multi-system'
        let vertical = vault.industry?.toLowerCase() || 'unknown'
        if (vault.deal_value >= 40000) tier = 'ai-native'
        else if (vault.deal_value >= 15000) tier = 'full-build'

        const md = `---
client: "[[${slug}|${vault.company}]]"
tier: ${tier}
vertical: "${vertical}"
deal_value: ${vault.deal_value || 0}
start_date: ${today}
target_date: ""
current_phase: kickoff
status: active
tags: [project, ${tier}, ${slug}]
---

# Project — ${vault.company}

> **Tier:** ${tier} | **Vertical:** ${vertical}
> **Deal Value:** $${(vault.deal_value || 0).toLocaleString()} | **Start:** ${today}
> **Contact:** [[${slug}|${vault.contact}]] | ${vault.email}

---

## Key Links
- **Client Vault:** [[${slug}|${vault.company}]]
- **Credentials:** [[${slug}-creds|Credential Vault]]
- **Proposal:** [[${slug}-proposal|Proposal]]

## Deliverables

### Phase 1 — Foundation
- [ ] System 1: _____________________
- [ ] System 2: _____________________
- [ ] System 3: _____________________

### Phase 2 — Optimization
- [ ] System 4: _____________________
- [ ] System 5: _____________________
- [ ] System 6: _____________________

### Phase 3 — Scale
- [ ] System 7: _____________________
- [ ] System 8: _____________________
- [ ] System 9: _____________________

## Blocker Log

| Date | Blocker | Owner | Status | Resolution |
|------|---------|-------|--------|------------|

## Weekly Updates

### Week 1
-

## Change Requests

| Date | Request | Impact | Approved | Notes |
|------|---------|--------|----------|-------|
`
        await fs.writeFile(`${dir}/${slug}-project.md`, md, 'utf-8')
    } catch (err) {
        console.error('[PROJECT SYNC ERROR]', err)
    }
}

// ─── Weekly Digest ───────────────────────────────────────────

export async function generateWeeklyDigest(vaults: VaultDoc[]): Promise<void> {
    if (!IS_LOCAL) return

    const fs = await import('fs/promises')
    const now = new Date()
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
    const today = now.toISOString().split('T')[0]
    const weekAgoStr = weekAgo.toISOString().split('T')[0]

    const dir = `${VAULT_PATH}/04 - Daily Notes`
    await fs.mkdir(dir, { recursive: true })

    // New leads this week
    const newThisWeek = vaults.filter(v => v.created >= weekAgoStr)

    // Stage changes this week (check timeline for stage change entries)
    const stageChanges: { company: string; text: string; timestamp: string }[] = []
    for (const v of vaults) {
        for (const t of (v.timeline || [])) {
            if (t.timestamp >= weekAgo.toISOString() && t.text.includes('Stage changed')) {
                stageChanges.push({ company: v.company, text: t.text, timestamp: t.timestamp })
            }
        }
    }

    // Meetings this week
    const meetingsThisWeek: { company: string; title: string; date: string }[] = []
    for (const v of vaults) {
        for (const m of (v.meetings || [])) {
            if (m.date >= weekAgoStr && m.date <= today) {
                meetingsThisWeek.push({ company: v.company, title: m.title, date: m.date })
            }
        }
    }

    // Pipeline summary
    const pipelineValue = vaults.reduce((sum, v) => sum + (v.deal_value || 0), 0)
    const wonThisWeek = vaults.filter(v => v.stage === 'won' && v.timeline?.some(t => t.timestamp >= weekAgo.toISOString() && t.text.includes('Stage changed to "won"')))
    const wonValue = wonThisWeek.reduce((sum, v) => sum + (v.deal_value || 0), 0)

    // Emails/SMS sent (count timeline entries with email/sms emoji)
    let emailsSent = 0
    let smsSent = 0
    for (const v of vaults) {
        for (const t of (v.timeline || [])) {
            if (t.timestamp >= weekAgo.toISOString()) {
                if (t.emoji === '📧' || t.text.includes('Email sent')) emailsSent++
                if (t.emoji === '💬' || t.text.includes('SMS')) smsSent++
            }
        }
    }

    const md = `# Week of ${weekAgoStr} — Weekly Digest

## 📊 Pipeline Snapshot
- **Total Clients:** ${vaults.length}
- **Pipeline Value:** $${pipelineValue.toLocaleString()}
- **Won This Week:** ${wonThisWeek.length} ($${wonValue.toLocaleString()})
- **Prospects:** ${vaults.filter(v => v.status === 'prospect').length}
- **Active:** ${vaults.filter(v => v.status === 'active').length}
- **Onboarding:** ${vaults.filter(v => v.status === 'onboarding').length}

## 🔥 New Leads (${newThisWeek.length})
${newThisWeek.length > 0 ? newThisWeek.map(v => `- [[${slugify(v.company)}|${v.company}]] — ${v.contact} (${v.intent} intent, score: ${v.lead_score})`).join('\n') : '_None this week._'}

## 🔄 Stage Changes (${stageChanges.length})
${stageChanges.length > 0 ? stageChanges.map(s => `- [[${slugify(s.company)}|${s.company}]] — ${s.text}`).join('\n') : '_No stage changes._'}

## 📞 Meetings Held (${meetingsThisWeek.length})
${meetingsThisWeek.length > 0 ? meetingsThisWeek.map(m => `- [[${slugify(m.company)}-${m.date}|${m.company}: ${m.title}]] (${m.date})`).join('\n') : '_No meetings this week._'}

## 📧 Outreach
- **Emails Sent:** ${emailsSent}
- **SMS Sent:** ${smsSent}

## 🎯 Next Week Priorities
1.
2.
3.

## 📝 Notes
-
`

    await fs.writeFile(`${dir}/week-of-${weekAgoStr}.md`, md, 'utf-8')
    console.log(`[VAULT] Weekly digest generated: week-of-${weekAgoStr}`)
}

// ─── Industry Playbook Generator ─────────────────────────────

export async function generateIndustryPlaybook(industry: string, vaults: VaultDoc[]): Promise<string> {
    const industryClients = vaults.filter(v =>
        v.industry && v.industry.toLowerCase() === industry.toLowerCase()
    )

    if (industryClients.length === 0) {
        return 'No clients found for this industry.'
    }

    // Aggregate data
    const totalClients = industryClients.length
    const avgScore = Math.round(industryClients.reduce((s, v) => s + (v.audit_score || 0), 0) / totalClients)
    const avgDealValue = Math.round(industryClients.reduce((s, v) => s + (v.deal_value || 0), 0) / totalClients)
    const totalSpend = industryClients.reduce((s, v) => s + (v.metrics?.monthly_spend || 0), 0)
    const avgHoursSaved = Math.round(industryClients.reduce((s, v) => s + (v.metrics?.hours_saved || 0), 0) / totalClients)
    const avgTicketsDeflected = Math.round(industryClients.reduce((s, v) => s + (v.metrics?.tickets_deflected || 0), 0) / totalClients)

    // Common tools across clients
    const toolCounts: Record<string, number> = {}
    for (const v of industryClients) {
        for (const tool of (v.deployment?.tools || [])) {
            toolCounts[tool] = (toolCounts[tool] || 0) + 1
        }
    }
    const topTools = Object.entries(toolCounts).sort((a, b) => b[1] - a[1]).slice(0, 10)

    // Common models
    const modelCounts: Record<string, number> = {}
    for (const v of industryClients) {
        if (v.deployment?.model) modelCounts[v.deployment.model] = (modelCounts[v.deployment.model] || 0) + 1
    }

    // Issues patterns
    const allIssues = industryClients.flatMap(v => (v.issues || []))
    const issuesByTitle: Record<string, number> = {}
    for (const issue of allIssues) {
        const key = issue.title.toLowerCase().slice(0, 50)
        issuesByTitle[key] = (issuesByTitle[key] || 0) + 1
    }
    const commonIssues = Object.entries(issuesByTitle).sort((a, b) => b[1] - a[1]).slice(0, 5)

    // Stage distribution
    const stageCounts: Record<string, number> = {}
    for (const v of industryClients) {
        stageCounts[v.stage] = (stageCounts[v.stage] || 0) + 1
    }

    // Build with Claude
    const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

    const clientSummaries = industryClients.slice(0, 10).map(v =>
        `- ${v.company}: score ${v.audit_score}, deal $${v.deal_value || 0}, stage ${v.stage}, spend $${v.metrics?.monthly_spend || 0}/mo, ${v.metrics?.hours_saved || 0} hrs saved, tools: ${(v.deployment?.tools || []).join(', ') || 'none'}`
    ).join('\n')

    const msg = await anthropic.messages.create({
        model: 'claude-sonnet-4-6',
        max_tokens: 2000,
        messages: [{
            role: 'user',
            content: `You are a business analyst for ElianaTech. Generate an industry playbook based on real client data.

INDUSTRY: ${industry}
TOTAL CLIENTS: ${totalClients}
AVG AUDIT SCORE: ${avgScore}/100
AVG DEAL VALUE: $${avgDealValue.toLocaleString()}
TOTAL MONTHLY SPEND: $${totalSpend.toLocaleString()}
AVG HOURS SAVED: ${avgHoursSaved}/client
AVG TICKETS DEFLECTED: ${avgTicketsDeflected}/client

TOP TOOLS USED:
${topTools.map(([tool, count]) => `- ${tool}: ${count} clients`).join('\n') || 'No deployment data yet.'}

MODELS USED:
${Object.entries(modelCounts).map(([m, c]) => `- ${m}: ${c} clients`).join('\n') || 'No deployment data yet.'}

COMMON ISSUES:
${commonIssues.map(([title, count]) => `- "${title}": ${count} occurrences`).join('\n') || 'No issues logged yet.'}

STAGE DISTRIBUTION:
${Object.entries(stageCounts).map(([s, c]) => `- ${s}: ${c}`).join('\n')}

CLIENT SUMMARIES:
${clientSummaries}

Write a playbook covering:
1. **Industry Overview** — What ${industry} businesses typically need
2. **Winning Configuration** — Best model + tools combo based on data
3. **Common Pain Points** — What keeps these clients up at night
4. **Typical ROI** — Hours saved, tickets deflected, spend patterns
5. **Setup Recommendations** — Step-by-step for new ${industry} clients
6. **Common Pitfalls** — Issues to watch for (from the issue data)
7. **Pricing Guidance** — What these clients typically spend/accept
8. **Upsell Opportunities** — Where to expand after initial setup

Be specific. Use the actual numbers. This is an internal playbook, not a sales doc.
Keep it under 800 words.`
        }]
    })

    const playbookContent = msg.content
        .filter((b): b is Anthropic.TextBlock => b.type === 'text')
        .map(b => b.text)
        .join('\n')

    return playbookContent
}

export async function syncPlaybookToObsidian(industry: string, content: string, vaults: VaultDoc[]): Promise<void> {
    if (!IS_LOCAL) return

    try {
        const fs = await import('fs/promises')
        const dir = `${VAULT_PATH}/11 - Playbooks`
        await fs.mkdir(dir, { recursive: true })

        const slug = slugify(industry || 'general')
        const today = new Date().toISOString().split('T')[0]
        const industryClients = vaults.filter(v =>
            v.industry && v.industry.toLowerCase() === industry.toLowerCase()
        )

        const clientLinks = industryClients
            .map(v => `- [[${slugify(v.company)}|${v.company}]] — ${v.stage}, score ${v.audit_score}`)
            .join('\n')

        const md = `---
industry: "${industry}"
date: ${today}
clients: ${industryClients.length}
type: playbook
tags: [playbook, ${slug}]
---

# ${industry} Playbook

> **Last Updated:** ${today} | **Clients:** ${industryClients.length}

---

${content}

---

## Clients in This Industry
${clientLinks || '_None yet._'}
`
        await fs.writeFile(`${dir}/playbook-${slug}.md`, md, 'utf-8')
    } catch (err) {
        console.error('[PLAYBOOK SYNC ERROR]', err)
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
        referred_by: '',
        audit_id: auditId,
        created: now,
        last_contact: now,
        tags,
        research: '',
        strategy: '',
        onboarding_checklist: new Array(ONBOARDING_ITEMS.length).fill(false),
        credentials: [],
        meetings: [],
        deployment: { model: '', tools: [], system_prompt_ref: '', endpoints: [], api_keys_rotated: '', notes: '' },
        metrics: { monthly_spend: 0, hours_saved: 0, tickets_deflected: 0, response_time_before: '', response_time_after: '', roi_notes: '', custom: {} },
        issues: [],
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
