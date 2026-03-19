"use client"

import React, { useState, useEffect, useCallback } from "react"
import {
    ArrowLeft, RefreshCw, Loader2, Save, Mail, Phone, Globe,
    Building2, Target, Calendar, FileText, Shield, Clock,
    CheckCircle2, Circle, Plus, Trash2, Copy, Check,
    Sparkles, Download
} from "lucide-react"

interface TimelineEntry { timestamp: string; emoji: string; text: string }
interface CredentialEntry { service: string; username: string; notes: string }

interface VaultDoc {
    id: string
    company: string
    contact: string
    email: string
    phone: string
    website: string
    industry: string
    status: string
    stage: string
    lead_score: number
    audit_score: number
    intent: string
    budget: string
    audit_id: string
    created: string
    last_contact: string
    tags: string[]
    research: string
    strategy: string
    onboarding_checklist: boolean[]
    credentials: CredentialEntry[]
    timeline: TimelineEntry[]
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

const STATUS_OPTIONS = ['prospect', 'active', 'onboarding', 'churned', 'paused']
const STAGE_OPTIONS = ['new', 'contacted', 'call-booked', 'proposal-sent', 'negotiating', 'won', 'lost']

const STATUS_COLORS: Record<string, string> = {
    prospect: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    active: 'bg-green-400/10 text-green-400 border-green-400/20',
    onboarding: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    churned: 'bg-red-400/10 text-red-400 border-red-400/20',
    paused: 'bg-slate-400/10 text-slate-400 border-slate-400/20',
}

export default function VaultDetail({
    vaultId,
    token,
    onBack,
}: {
    vaultId: string
    token: string
    onBack: () => void
}) {
    const [vault, setVault] = useState<VaultDoc | null>(null)
    const [loading, setLoading] = useState(true)
    const [activeTab, setActiveTab] = useState<'research' | 'strategy' | 'onboarding' | 'credentials' | 'timeline'>('research')

    // Edit states
    const [editingResearch, setEditingResearch] = useState(false)
    const [editingStrategy, setEditingStrategy] = useState(false)
    const [researchDraft, setResearchDraft] = useState("")
    const [strategyDraft, setStrategyDraft] = useState("")
    const [saving, setSaving] = useState(false)
    const [refreshingResearch, setRefreshingResearch] = useState(false)
    const [syncing, setSyncing] = useState(false)

    // Credential form
    const [newCred, setNewCred] = useState({ service: '', username: '', notes: '' })

    // Timeline form
    const [newTimeline, setNewTimeline] = useState({ emoji: '📝', text: '' })

    const fetchVault = useCallback(async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/admin/vault?id=${vaultId}`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            const data = await res.json()
            if (data.success) {
                setVault(data.vault)
                setResearchDraft(data.vault.research || '')
                setStrategyDraft(data.vault.strategy || '')
            }
        } catch { /* ignore */ } finally { setLoading(false) }
    }, [vaultId, token])

    useEffect(() => { fetchVault() }, [fetchVault])

    const patchVault = async (action: string, payload: any) => {
        const res = await fetch("/api/admin/vault", {
            method: "PATCH",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
            body: JSON.stringify({ id: vaultId, action, ...payload }),
        })
        return res.json()
    }

    const handleSaveSection = async (section: 'research' | 'strategy') => {
        setSaving(true)
        try {
            await patchVault('update-section', {
                section,
                content: section === 'research' ? researchDraft : strategyDraft,
            })
            await fetchVault()
            if (section === 'research') setEditingResearch(false)
            else setEditingStrategy(false)
        } catch { /* ignore */ } finally { setSaving(false) }
    }

    const handleRefreshResearch = async () => {
        setRefreshingResearch(true)
        try {
            const data = await patchVault('refresh-research', {})
            if (data.success) {
                await fetchVault()
            }
        } catch { /* ignore */ } finally { setRefreshingResearch(false) }
    }

    const handleSyncObsidian = async () => {
        setSyncing(true)
        try { await patchVault('sync-obsidian', {}) } catch { /* ignore */ } finally { setSyncing(false) }
    }

    const handleStatusChange = async (status: string) => {
        await patchVault('update-status', { status })
        fetchVault()
    }

    const handleStageChange = async (stage: string) => {
        await patchVault('update-status', { stage })
        await patchVault('add-timeline', { emoji: '🔄', text: `Stage changed to "${stage}"` })
        fetchVault()
    }

    const handleToggleChecklist = async (index: number) => {
        await patchVault('toggle-checklist', { index })
        fetchVault()
    }

    const handleAddCredential = async () => {
        if (!newCred.service) return
        await patchVault('add-credential', newCred)
        setNewCred({ service: '', username: '', notes: '' })
        fetchVault()
    }

    const handleRemoveCredential = async (index: number) => {
        await patchVault('remove-credential', { credIndex: index })
        fetchVault()
    }

    const handleAddTimeline = async () => {
        if (!newTimeline.text) return
        await patchVault('add-timeline', newTimeline)
        setNewTimeline({ emoji: '📝', text: '' })
        fetchVault()
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <RefreshCw className="w-6 h-6 text-slate-500 animate-spin" />
            </div>
        )
    }

    if (!vault) {
        return (
            <div className="text-center py-20">
                <p className="text-slate-400">Vault not found.</p>
                <button onClick={onBack} className="mt-4 text-sm text-white underline">Go back</button>
            </div>
        )
    }

    const completedSteps = (vault.onboarding_checklist || []).filter(Boolean).length
    const totalSteps = ONBOARDING_ITEMS.length

    return (
        <div>
            {/* Back button */}
            <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Vaults
            </button>

            {/* Header */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 mb-6">
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Main info */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h1 className="text-2xl font-bold text-white">{vault.company}</h1>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${STATUS_COLORS[vault.status] || STATUS_COLORS.prospect}`}>
                                {vault.status.toUpperCase()}
                            </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-4">
                            <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" />{vault.contact}</span>
                            <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{vault.email}</span>
                            {vault.phone && <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{vault.phone}</span>}
                            {vault.website && <span className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" />{vault.website}</span>}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {vault.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-500 border border-white/5">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar actions */}
                    <div className="lg:w-64 space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <div className="bg-white/5 rounded-xl p-3">
                                <p className="text-xl font-bold text-white">{vault.lead_score}</p>
                                <p className="text-[10px] text-slate-500">Lead Score</p>
                            </div>
                            <div className="bg-white/5 rounded-xl p-3">
                                <p className="text-xl font-bold text-white">{vault.audit_score}</p>
                                <p className="text-[10px] text-slate-500">Audit Score</p>
                            </div>
                        </div>

                        {/* Status selector */}
                        <div>
                            <label className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 block">Status</label>
                            <select
                                value={vault.status}
                                onChange={e => handleStatusChange(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none appearance-none cursor-pointer"
                            >
                                {STATUS_OPTIONS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
                            </select>
                        </div>

                        {/* Stage selector */}
                        <div>
                            <label className="text-slate-500 text-[10px] uppercase tracking-wider mb-1 block">Pipeline Stage</label>
                            <select
                                value={vault.stage}
                                onChange={e => handleStageChange(e.target.value)}
                                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none appearance-none cursor-pointer"
                            >
                                {STAGE_OPTIONS.map(s => <option key={s} value={s}>{s.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</option>)}
                            </select>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleRefreshResearch}
                                disabled={refreshingResearch}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium hover:bg-purple-500/20 transition-all disabled:opacity-50 w-full"
                            >
                                {refreshingResearch ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                                Refresh Research
                            </button>
                            <button
                                onClick={handleSyncObsidian}
                                disabled={syncing}
                                className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-all disabled:opacity-50 w-full"
                            >
                                {syncing ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Download className="w-3.5 h-3.5" />}
                                Sync to Obsidian
                            </button>
                        </div>

                        <div className="text-[10px] text-slate-600 space-y-0.5">
                            <p>Created: {vault.created}</p>
                            <p>Last Contact: {vault.last_contact}</p>
                            {vault.audit_id && <p>Audit: {vault.audit_id.slice(0, 8)}...</p>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
                {(['research', 'strategy', 'onboarding', 'credentials', 'timeline'] as const).map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${activeTab === tab ? 'bg-white text-black' : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'}`}
                    >
                        {tab === 'research' && '🔍 Research'}
                        {tab === 'strategy' && '📋 Strategy'}
                        {tab === 'onboarding' && `🚀 Onboarding (${completedSteps}/${totalSteps})`}
                        {tab === 'credentials' && `🔐 Credentials (${(vault.credentials || []).length})`}
                        {tab === 'timeline' && `📅 Timeline (${(vault.timeline || []).length})`}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                {/* Research */}
                {activeTab === 'research' && (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-white font-semibold flex items-center gap-2"><Sparkles className="w-4 h-4 text-purple-400" /> AI Research</h2>
                            <button
                                onClick={() => { setEditingResearch(!editingResearch); setResearchDraft(vault.research || '') }}
                                className="text-xs text-slate-400 hover:text-white transition-colors"
                            >
                                {editingResearch ? 'Cancel' : 'Edit'}
                            </button>
                        </div>
                        {editingResearch ? (
                            <div>
                                <textarea
                                    value={researchDraft}
                                    onChange={e => setResearchDraft(e.target.value)}
                                    rows={15}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 font-mono resize-y"
                                />
                                <button
                                    onClick={() => handleSaveSection('research')}
                                    disabled={saving}
                                    className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50"
                                >
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
                                </button>
                            </div>
                        ) : (
                            <div className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                                {vault.research || <span className="text-slate-600 italic">No research yet. Click &quot;Refresh Research&quot; to generate AI analysis.</span>}
                            </div>
                        )}
                    </div>
                )}

                {/* Strategy */}
                {activeTab === 'strategy' && (
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-white font-semibold flex items-center gap-2"><Target className="w-4 h-4 text-blue-400" /> Strategy Notes</h2>
                            <button
                                onClick={() => { setEditingStrategy(!editingStrategy); setStrategyDraft(vault.strategy || '') }}
                                className="text-xs text-slate-400 hover:text-white transition-colors"
                            >
                                {editingStrategy ? 'Cancel' : 'Edit'}
                            </button>
                        </div>
                        {editingStrategy ? (
                            <div>
                                <textarea
                                    value={strategyDraft}
                                    onChange={e => setStrategyDraft(e.target.value)}
                                    rows={15}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 font-mono resize-y"
                                />
                                <button
                                    onClick={() => handleSaveSection('strategy')}
                                    disabled={saving}
                                    className="mt-3 flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50"
                                >
                                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
                                </button>
                            </div>
                        ) : (
                            <div className="text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                                {vault.strategy || <span className="text-slate-600 italic">No strategy notes yet. Click Edit to add notes.</span>}
                            </div>
                        )}
                    </div>
                )}

                {/* Onboarding */}
                {activeTab === 'onboarding' && (
                    <div>
                        <h2 className="text-white font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-400" /> Onboarding Checklist
                            <span className="text-xs text-slate-500 font-normal ml-2">{completedSteps}/{totalSteps} complete</span>
                        </h2>
                        {/* Progress bar */}
                        <div className="w-full bg-white/5 rounded-full h-2 mb-6">
                            <div
                                className="bg-green-400 rounded-full h-2 transition-all"
                                style={{ width: `${(completedSteps / totalSteps) * 100}%` }}
                            />
                        </div>
                        <div className="space-y-2">
                            {ONBOARDING_ITEMS.map((item, i) => {
                                const checked = vault.onboarding_checklist?.[i] || false
                                return (
                                    <button
                                        key={i}
                                        onClick={() => handleToggleChecklist(i)}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all text-left ${checked ? 'bg-green-500/5 border border-green-500/10 text-green-400' : 'bg-white/[0.02] border border-white/5 text-slate-400 hover:border-white/10'}`}
                                    >
                                        {checked ? <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" /> : <Circle className="w-4 h-4 text-slate-600 shrink-0" />}
                                        <span className={checked ? 'line-through opacity-70' : ''}>{item}</span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                {/* Credentials */}
                {activeTab === 'credentials' && (
                    <div>
                        <h2 className="text-white font-semibold mb-4 flex items-center gap-2"><Shield className="w-4 h-4 text-yellow-400" /> Credentials</h2>
                        {(vault.credentials || []).length > 0 && (
                            <div className="overflow-x-auto mb-4">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="text-left text-slate-500 text-xs py-2 px-3">Service</th>
                                            <th className="text-left text-slate-500 text-xs py-2 px-3">Username</th>
                                            <th className="text-left text-slate-500 text-xs py-2 px-3">Notes</th>
                                            <th className="text-right text-slate-500 text-xs py-2 px-3 w-16"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(vault.credentials || []).map((cred, i) => (
                                            <tr key={i} className="border-b border-white/5">
                                                <td className="py-2 px-3 text-white">{cred.service}</td>
                                                <td className="py-2 px-3 text-slate-300 font-mono text-xs">{cred.username}</td>
                                                <td className="py-2 px-3 text-slate-500">{cred.notes}</td>
                                                <td className="py-2 px-3 text-right">
                                                    <button onClick={() => handleRemoveCredential(i)} className="text-slate-600 hover:text-red-400 transition-colors">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {/* Add credential form */}
                        <div className="flex gap-2 items-end">
                            <div className="flex-1">
                                <label className="text-slate-500 text-[10px] mb-1 block">Service</label>
                                <input value={newCred.service} onChange={e => setNewCred(p => ({ ...p, service: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none" placeholder="e.g. GHL" />
                            </div>
                            <div className="flex-1">
                                <label className="text-slate-500 text-[10px] mb-1 block">Username</label>
                                <input value={newCred.username} onChange={e => setNewCred(p => ({ ...p, username: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none" placeholder="admin@..." />
                            </div>
                            <div className="flex-1">
                                <label className="text-slate-500 text-[10px] mb-1 block">Notes</label>
                                <input value={newCred.notes} onChange={e => setNewCred(p => ({ ...p, notes: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none" placeholder="Main CRM" />
                            </div>
                            <button onClick={handleAddCredential} disabled={!newCred.service} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors disabled:opacity-50">
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Timeline */}
                {activeTab === 'timeline' && (
                    <div>
                        <h2 className="text-white font-semibold mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> Timeline</h2>
                        {/* Add entry */}
                        <div className="flex gap-2 mb-6">
                            <select
                                value={newTimeline.emoji}
                                onChange={e => setNewTimeline(p => ({ ...p, emoji: e.target.value }))}
                                className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none appearance-none cursor-pointer w-16"
                            >
                                {['📝', '📧', '📞', '🟢', '🔄', '⚡', '🎯', '✅', '❌', '🔬'].map(e => (
                                    <option key={e} value={e}>{e}</option>
                                ))}
                            </select>
                            <input
                                value={newTimeline.text}
                                onChange={e => setNewTimeline(p => ({ ...p, text: e.target.value }))}
                                placeholder="What happened?"
                                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30"
                                onKeyDown={e => { if (e.key === 'Enter') handleAddTimeline() }}
                            />
                            <button onClick={handleAddTimeline} disabled={!newTimeline.text} className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50">
                                Add
                            </button>
                        </div>
                        {/* Timeline entries */}
                        <div className="space-y-1">
                            {[...(vault.timeline || [])].reverse().map((entry, i) => (
                                <div key={i} className="flex gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                                    <span className="text-base shrink-0">{entry.emoji}</span>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-slate-300 text-sm">{entry.text}</p>
                                        <p className="text-slate-600 text-[10px] mt-0.5">{new Date(entry.timestamp).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                            {(!vault.timeline || vault.timeline.length === 0) && (
                                <p className="text-slate-600 text-sm text-center py-8">No timeline entries yet.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
