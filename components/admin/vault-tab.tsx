"use client"

import React, { useState, useEffect, useCallback } from "react"
import {
    Search, RefreshCw, Plus, Users, Zap, Clock, Building2,
    FileText, Loader2, FolderOpen, Calendar, Globe, Mail,
    Phone, Target, AlertTriangle
} from "lucide-react"

interface VaultSummary {
    id: string
    company: string
    contact: string
    email: string
    status: string
    stage: string
    lead_score: number
    intent: string
    last_contact: string
    created: string
    timeline?: { timestamp: string; emoji: string; text: string }[]
}

const STATUS_COLORS: Record<string, string> = {
    prospect: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    active: 'bg-green-400/10 text-green-400 border-green-400/20',
    onboarding: 'bg-blue-400/10 text-blue-400 border-blue-400/20',
    churned: 'bg-red-400/10 text-red-400 border-red-400/20',
    paused: 'bg-slate-400/10 text-slate-400 border-slate-400/20',
}

export default function VaultTab({
    token,
    onSelectVault,
}: {
    token: string
    onSelectVault: (id: string) => void
}) {
    const [vaults, setVaults] = useState<VaultSummary[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [scaffolding, setScaffolding] = useState(false)
    const [showCreate, setShowCreate] = useState(false)

    // Create form state
    const [createForm, setCreateForm] = useState({ company: '', contact: '', email: '', phone: '', website: '', industry: '' })
    const [creating, setCreating] = useState(false)

    const fetchVaults = useCallback(async () => {
        setLoading(true); setError("")
        try {
            const res = await fetch("/api/admin/vault", { headers: { Authorization: `Bearer ${token}` } })
            const data = await res.json()
            if (data.success) setVaults(data.vaults)
            else setError("Failed to load vaults")
        } catch { setError("Connection error") } finally { setLoading(false) }
    }, [token])

    useEffect(() => { fetchVaults() }, [fetchVaults])

    const handleScaffold = async () => {
        if (!confirm("Create Obsidian vault folder structure? This will create folders and template files.")) return
        setScaffolding(true)
        try {
            await fetch("/api/admin/vault", {
                method: "PATCH",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ id: '_scaffold', action: 'scaffold' }),
            })
        } catch { /* ignore */ } finally { setScaffolding(false) }
    }

    const handleCreate = async () => {
        if (!createForm.company || !createForm.email) return
        setCreating(true)
        try {
            const res = await fetch("/api/admin/vault", {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(createForm),
            })
            const data = await res.json()
            if (data.success) {
                setShowCreate(false)
                setCreateForm({ company: '', contact: '', email: '', phone: '', website: '', industry: '' })
                fetchVaults()
            }
        } catch { /* ignore */ } finally { setCreating(false) }
    }

    const filtered = vaults.filter(v => {
        const q = search.toLowerCase()
        const matchesSearch = !search || v.company.toLowerCase().includes(q) || v.contact.toLowerCase().includes(q) || v.email.toLowerCase().includes(q)
        const matchesStatus = statusFilter === "all" || v.status === statusFilter
        return matchesSearch && matchesStatus
    })

    const total = vaults.length
    const prospects = vaults.filter(v => v.status === 'prospect').length
    const activeCount = vaults.filter(v => v.status === 'active').length
    const onboardingCount = vaults.filter(v => v.status === 'onboarding').length

    return (
        <div>
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-red-500/10"><Users className="w-5 h-5 text-red-400" /></div>
                    <div><p className="text-2xl font-bold text-white">{total}</p><p className="text-xs text-slate-500">Total Vaults</p></div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-yellow-500/10"><Target className="w-5 h-5 text-yellow-400" /></div>
                    <div><p className="text-2xl font-bold text-white">{prospects}</p><p className="text-xs text-slate-500">Prospects</p></div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-green-500/10"><Zap className="w-5 h-5 text-green-400" /></div>
                    <div><p className="text-2xl font-bold text-white">{activeCount}</p><p className="text-xs text-slate-500">Active</p></div>
                </div>
                <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10"><Clock className="w-5 h-5 text-blue-400" /></div>
                    <div><p className="text-2xl font-bold text-white">{onboardingCount}</p><p className="text-xs text-slate-500">Onboarding</p></div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input
                        type="text" value={search} onChange={e => setSearch(e.target.value)}
                        placeholder="Search company, contact, email..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-white/30 text-sm"
                    />
                </div>
                <div className="flex gap-2">
                    <select
                        value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
                        className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none appearance-none cursor-pointer"
                    >
                        <option value="all">All Status</option>
                        <option value="prospect">Prospects</option>
                        <option value="active">Active</option>
                        <option value="onboarding">Onboarding</option>
                        <option value="churned">Churned</option>
                        <option value="paused">Paused</option>
                    </select>
                    <button onClick={fetchVaults} className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
                        <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    </button>
                    <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors">
                        <Plus className="w-4 h-4" /> New Vault
                    </button>
                    <button
                        onClick={handleScaffold}
                        disabled={scaffolding}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium hover:bg-purple-500/20 transition-all disabled:opacity-50"
                    >
                        {scaffolding ? <Loader2 className="w-4 h-4 animate-spin" /> : <FolderOpen className="w-4 h-4" />}
                        Scaffold Obsidian
                    </button>
                </div>
            </div>

            {/* Create Modal */}
            {showCreate && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                    <h3 className="text-white font-semibold mb-4 flex items-center gap-2"><FileText className="w-4 h-4" /> Create New Vault</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Company *</label>
                            <input value={createForm.company} onChange={e => setCreateForm(p => ({ ...p, company: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Contact Name</label>
                            <input value={createForm.contact} onChange={e => setCreateForm(p => ({ ...p, contact: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Email *</label>
                            <input value={createForm.email} onChange={e => setCreateForm(p => ({ ...p, email: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Phone</label>
                            <input value={createForm.phone} onChange={e => setCreateForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Website</label>
                            <input value={createForm.website} onChange={e => setCreateForm(p => ({ ...p, website: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                        <div>
                            <label className="text-slate-400 text-xs mb-1 block">Industry</label>
                            <input value={createForm.industry} onChange={e => setCreateForm(p => ({ ...p, industry: e.target.value }))} className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-white/30" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={handleCreate}
                            disabled={creating || !createForm.company || !createForm.email}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-slate-200 transition-colors disabled:opacity-50"
                        >
                            {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                            Create
                        </button>
                        <button onClick={() => setShowCreate(false)} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-sm hover:text-white transition-colors">
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            {/* Error / Loading */}
            {error && <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 text-red-400 text-sm flex items-center gap-2"><AlertTriangle className="w-4 h-4" />{error}</div>}
            {loading && <div className="flex items-center justify-center py-20"><RefreshCw className="w-6 h-6 text-slate-500 animate-spin" /></div>}

            {/* Vault Grid */}
            {!loading && filtered.length === 0 && (
                <div className="text-center py-20">
                    <FileText className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                    <p className="text-slate-400">{total === 0 ? "No vaults yet. Create one or submit an audit." : "No results match your filters."}</p>
                </div>
            )}

            {!loading && filtered.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filtered.map(v => {
                        const lastActivity = v.timeline && v.timeline.length > 0
                            ? v.timeline[v.timeline.length - 1]
                            : null
                        return (
                            <div
                                key={v.id}
                                onClick={() => onSelectVault(v.id)}
                                className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 cursor-pointer hover:border-white/15 transition-all group"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-white font-semibold text-sm group-hover:text-white/90">{v.company}</h3>
                                        <p className="text-slate-500 text-xs">{v.contact}</p>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${STATUS_COLORS[v.status] || STATUS_COLORS.prospect}`}>
                                        {v.status.toUpperCase()}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" />{v.email}</span>
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/5 text-slate-400 border border-white/5">{v.stage}</span>
                                    <span className="text-xs text-slate-500">Score: {v.lead_score}</span>
                                    {v.intent === 'high' && <span className="text-xs text-red-400 font-medium">HOT</span>}
                                </div>
                                {lastActivity && (
                                    <p className="text-slate-600 text-[11px] truncate">
                                        {lastActivity.emoji} {lastActivity.text}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
