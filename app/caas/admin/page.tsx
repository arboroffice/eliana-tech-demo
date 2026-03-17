"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface Client {
  id: string
  name: string
  company: string
  plan: "starter" | "growth" | "enterprise"
  agents: { name: string; status: "active" | "shadow" | "building" | "paused"; type: string; tasksCompleted: number; lastActive: string }[]
  status: "active" | "onboarding" | "churned"
  mrr: number
  startDate: string
}

const MOCK_CLIENTS: Client[] = [
  {
    id: "cl_001",
    name: "Marcus Chen",
    company: "Apex Ventures",
    plan: "growth",
    status: "active",
    mrr: 5000,
    startDate: "2026-01-15",
    agents: [
      { name: "Sales Pipeline Agent", status: "active", type: "sales", tasksCompleted: 2847, lastActive: "2 min ago" },
      { name: "Email Triage Agent", status: "active", type: "ops", tasksCompleted: 12304, lastActive: "Just now" },
      { name: "Content Engine", status: "active", type: "marketing", tasksCompleted: 891, lastActive: "15 min ago" },
      { name: "Financial Analyst", status: "shadow", type: "data", tasksCompleted: 134, lastActive: "1 hour ago" },
    ],
  },
  {
    id: "cl_002",
    name: "Sarah Williams",
    company: "Greenfield Properties",
    plan: "enterprise",
    status: "active",
    mrr: 12000,
    startDate: "2025-11-01",
    agents: [
      { name: "Deal Underwriter", status: "active", type: "data", tasksCompleted: 456, lastActive: "5 min ago" },
      { name: "Tenant Comms Agent", status: "active", type: "ops", tasksCompleted: 8921, lastActive: "Just now" },
      { name: "Contractor Coordinator", status: "active", type: "ops", tasksCompleted: 3211, lastActive: "30 min ago" },
      { name: "Market Intelligence", status: "active", type: "data", tasksCompleted: 1102, lastActive: "1 hour ago" },
      { name: "Personal Assistant", status: "active", type: "personal", tasksCompleted: 5623, lastActive: "10 min ago" },
    ],
  },
  {
    id: "cl_003",
    name: "David Park",
    company: "Park Digital Agency",
    plan: "growth",
    status: "active",
    mrr: 5000,
    startDate: "2026-02-01",
    agents: [
      { name: "Proposal Writer", status: "active", type: "sales", tasksCompleted: 234, lastActive: "20 min ago" },
      { name: "Client Onboarding", status: "active", type: "ops", tasksCompleted: 567, lastActive: "1 hour ago" },
      { name: "SEO Content Agent", status: "building", type: "marketing", tasksCompleted: 0, lastActive: "N/A" },
    ],
  },
  {
    id: "cl_004",
    name: "Jessica Torres",
    company: "Solo Consulting",
    plan: "starter",
    status: "onboarding",
    mrr: 2500,
    startDate: "2026-03-10",
    agents: [
      { name: "Ops & Calendar Agent", status: "building", type: "ops", tasksCompleted: 0, lastActive: "N/A" },
    ],
  },
  {
    id: "cl_005",
    name: "Ryan Mitchell",
    company: "Mitchell Law Group",
    plan: "growth",
    status: "active",
    mrr: 5000,
    startDate: "2026-01-20",
    agents: [
      { name: "Intake Qualifier", status: "active", type: "sales", tasksCompleted: 1893, lastActive: "3 min ago" },
      { name: "Document Analyst", status: "active", type: "data", tasksCompleted: 4521, lastActive: "Just now" },
      { name: "Follow-Up Agent", status: "active", type: "sales", tasksCompleted: 3102, lastActive: "8 min ago" },
    ],
  },
]

const OVERVIEW_STATS = [
  { label: "Total MRR", value: "$29,500", delta: "+18% MoM" },
  { label: "Active Clients", value: "5", delta: "+2 this month" },
  { label: "Total Agents Deployed", value: "16", delta: "4 in shadow" },
  { label: "Tasks Completed (30D)", value: "45,806", delta: "+32% MoM" },
]

const RECENT_ACTIVITY = [
  { time: "2 min ago", event: "Sales Pipeline Agent completed 'Qualify inbound lead from HubSpot'", client: "Apex Ventures", type: "task" },
  { time: "5 min ago", event: "Deal Underwriter flagged potential zoning issue on 1847 Oak St", client: "Greenfield Properties", type: "alert" },
  { time: "15 min ago", event: "Content Engine published blog post: 'Q1 Market Trends'", client: "Apex Ventures", type: "task" },
  { time: "30 min ago", event: "Intake Qualifier booked consultation with pre-qualified lead", client: "Mitchell Law Group", type: "task" },
  { time: "1 hour ago", event: "Financial Analyst graduated from shadow mode to autonomous", client: "Apex Ventures", type: "milestone" },
  { time: "2 hours ago", event: "Ops & Calendar Agent build started - integrating Google Calendar", client: "Solo Consulting", type: "build" },
  { time: "3 hours ago", event: "SEO Content Agent spec approved by client", client: "Park Digital Agency", type: "build" },
]

export default function CaaSAdminPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "clients" | "agents" | "activity">("overview")

  const allAgents = MOCK_CLIENTS.flatMap(c => c.agents.map(a => ({ ...a, clientName: c.name, company: c.company })))
  const activeAgents = allAgents.filter(a => a.status === "active")
  const shadowAgents = allAgents.filter(a => a.status === "shadow")
  const buildingAgents = allAgents.filter(a => a.status === "building")

  const statusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500"
      case "shadow": return "bg-amber-500"
      case "building": return "bg-blue-500"
      case "paused": return "bg-zinc-500"
      default: return "bg-zinc-500"
    }
  }

  const planBadge = (plan: string) => {
    switch (plan) {
      case "starter": return "bg-zinc-800 text-zinc-400"
      case "growth": return "bg-amber-500/20 text-amber-500"
      case "enterprise": return "bg-purple-500/20 text-purple-400"
      default: return "bg-zinc-800 text-zinc-400"
    }
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      {/* TOP BAR */}
      <header className="border-b border-zinc-900 bg-[#0a0a0a] px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <Link href="/caas" className="text-lg font-black tracking-tighter">
            C<span className="text-amber-500">aa</span>S
          </Link>
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] text-green-500 font-bold uppercase tracking-wider">{activeAgents.length} Agents Online</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-black text-xs font-black">E</div>
        </div>
      </header>

      <div className="flex">
        {/* SIDEBAR */}
        <nav className="w-56 border-r border-zinc-900 bg-[#0a0a0a] min-h-[calc(100vh-57px)] p-4 flex-shrink-0">
          <div className="space-y-1">
            {(["overview", "clients", "agents", "activity"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelectedClient(null) }}
                className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest font-bold rounded-lg transition-colors ${
                  activeTab === tab ? 'bg-amber-500/10 text-amber-500' : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-900">
            <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-4 px-4">Quick Stats</span>
            <div className="space-y-4 px-4">
              <div>
                <span className="text-[10px] text-zinc-600 block">Active</span>
                <span className="text-sm font-bold text-green-500">{activeAgents.length} agents</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-600 block">Shadow Mode</span>
                <span className="text-sm font-bold text-amber-500">{shadowAgents.length} agents</span>
              </div>
              <div>
                <span className="text-[10px] text-zinc-600 block">Building</span>
                <span className="text-sm font-bold text-blue-500">{buildingAgents.length} agents</span>
              </div>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8">
          <AnimatePresence mode="wait">
            {/* OVERVIEW TAB */}
            {activeTab === "overview" && !selectedClient && (
              <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl font-black tracking-tight mb-8">Dashboard Overview</h2>

                <div className="grid grid-cols-4 gap-4 mb-8">
                  {OVERVIEW_STATS.map((stat, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
                      <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">{stat.label}</span>
                      <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                      <span className="text-[10px] text-amber-500 font-bold">{stat.delta}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Recent Activity</h3>
                    <div className="space-y-4">
                      {RECENT_ACTIVITY.slice(0, 5).map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                            item.type === "alert" ? "bg-red-500" :
                            item.type === "milestone" ? "bg-amber-500" :
                            item.type === "build" ? "bg-blue-500" : "bg-green-500"
                          }`} />
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-zinc-300 truncate">{item.event}</p>
                            <div className="flex gap-3 mt-1">
                              <span className="text-[10px] text-zinc-600">{item.client}</span>
                              <span className="text-[10px] text-zinc-700">{item.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-6">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Client Portfolio</h3>
                    <div className="space-y-3">
                      {MOCK_CLIENTS.map(client => (
                        <button
                          key={client.id}
                          onClick={() => { setSelectedClient(client); setActiveTab("clients") }}
                          className="w-full flex items-center justify-between p-4 bg-zinc-900/60 rounded-lg hover:bg-zinc-800/60 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-amber-500">
                              {client.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="text-left">
                              <span className="text-xs font-bold text-white block">{client.company}</span>
                              <span className="text-[10px] text-zinc-500">{client.agents.length} agents</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-bold text-white">${client.mrr.toLocaleString()}/mo</span>
                            <span className={`block text-[10px] uppercase tracking-wider mt-0.5 ${
                              client.status === "active" ? "text-green-500" : client.status === "onboarding" ? "text-blue-500" : "text-zinc-500"
                            }`}>{client.status}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CLIENTS TAB / CLIENT DETAIL */}
            {activeTab === "clients" && (
              <motion.div key="clients" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {selectedClient ? (
                  <div>
                    <button onClick={() => setSelectedClient(null)} className="text-[10px] text-zinc-500 uppercase tracking-widest hover:text-amber-500 transition-colors mb-6">
                      ← All Clients
                    </button>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-lg font-bold text-amber-500">
                        {selectedClient.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <h2 className="text-2xl font-black tracking-tight">{selectedClient.company}</h2>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-zinc-500">{selectedClient.name}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-widest font-bold ${planBadge(selectedClient.plan)}`}>
                            {selectedClient.plan}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">MRR</span>
                        <span className="text-2xl font-black">${selectedClient.mrr.toLocaleString()}</span>
                      </div>
                      <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">Agents</span>
                        <span className="text-2xl font-black">{selectedClient.agents.length}</span>
                      </div>
                      <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-2">Tasks (Total)</span>
                        <span className="text-2xl font-black">{selectedClient.agents.reduce((s, a) => s + a.tasksCompleted, 0).toLocaleString()}</span>
                      </div>
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Deployed Agents</h3>
                    <div className="space-y-3">
                      {selectedClient.agents.map((agent, i) => (
                        <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-2.5 h-2.5 rounded-full ${statusColor(agent.status)}`} />
                            <div>
                              <span className="text-sm font-bold text-white">{agent.name}</span>
                              <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mt-0.5">{agent.type}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="text-right">
                              <span className="text-xs font-bold text-white">{agent.tasksCompleted.toLocaleString()}</span>
                              <span className="text-[10px] text-zinc-500 block">tasks</span>
                            </div>
                            <div className="text-right w-24">
                              <span className="text-[10px] text-zinc-500">{agent.lastActive}</span>
                            </div>
                            <span className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                              agent.status === "active" ? "bg-green-500/10 text-green-500" :
                              agent.status === "shadow" ? "bg-amber-500/10 text-amber-500" :
                              agent.status === "building" ? "bg-blue-500/10 text-blue-500" :
                              "bg-zinc-800 text-zinc-500"
                            }`}>{agent.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-2xl font-black tracking-tight mb-8">All Clients</h2>
                    <div className="space-y-3">
                      {MOCK_CLIENTS.map(client => (
                        <button
                          key={client.id}
                          onClick={() => setSelectedClient(client)}
                          className="w-full bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl flex items-center justify-between hover:border-zinc-700 transition-colors"
                        >
                          <div className="flex items-center gap-6">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-sm font-bold text-amber-500">
                              {client.name.split(" ").map(n => n[0]).join("")}
                            </div>
                            <div className="text-left">
                              <span className="text-base font-bold text-white block">{client.company}</span>
                              <span className="text-xs text-zinc-500">{client.name}</span>
                            </div>
                            <span className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold ${planBadge(client.plan)}`}>
                              {client.plan}
                            </span>
                          </div>
                          <div className="flex items-center gap-8">
                            <div className="text-right">
                              <span className="text-sm font-bold text-white">{client.agents.length}</span>
                              <span className="text-[10px] text-zinc-500 block">agents</span>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-white">${client.mrr.toLocaleString()}</span>
                              <span className="text-[10px] text-zinc-500 block">/month</span>
                            </div>
                            <span className={`text-[10px] uppercase tracking-wider font-bold ${
                              client.status === "active" ? "text-green-500" : "text-blue-500"
                            }`}>{client.status}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* AGENTS TAB */}
            {activeTab === "agents" && (
              <motion.div key="agents" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl font-black tracking-tight mb-8">All Agents ({allAgents.length})</h2>

                <div className="flex gap-3 mb-8">
                  {["all", "active", "shadow", "building"].map(filter => (
                    <span key={filter} className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400 rounded-lg cursor-pointer hover:border-amber-500/50 hover:text-white transition-colors">
                      {filter} ({filter === "all" ? allAgents.length : filter === "active" ? activeAgents.length : filter === "shadow" ? shadowAgents.length : buildingAgents.length})
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  {allAgents.map((agent, i) => (
                    <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${statusColor(agent.status)}`} />
                        <div>
                          <span className="text-sm font-bold text-white">{agent.name}</span>
                          <span className="text-[10px] text-zinc-500 ml-3">{agent.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <span className="text-xs text-zinc-400 font-mono">{agent.tasksCompleted.toLocaleString()} tasks</span>
                        <span className="text-[10px] text-zinc-600">{agent.lastActive}</span>
                        <span className={`text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                          agent.status === "active" ? "bg-green-500/10 text-green-500" :
                          agent.status === "shadow" ? "bg-amber-500/10 text-amber-500" :
                          "bg-blue-500/10 text-blue-500"
                        }`}>{agent.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* ACTIVITY TAB */}
            {activeTab === "activity" && (
              <motion.div key="activity" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl font-black tracking-tight mb-8">Activity Feed</h2>
                <div className="space-y-0">
                  {RECENT_ACTIVITY.map((item, i) => (
                    <div key={i} className="flex gap-6 p-6 border-b border-zinc-900 last:border-b-0 items-start hover:bg-zinc-900/20 transition-colors">
                      <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${
                        item.type === "alert" ? "bg-red-500" :
                        item.type === "milestone" ? "bg-amber-500" :
                        item.type === "build" ? "bg-blue-500" : "bg-green-500"
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm text-zinc-300 mb-2">{item.event}</p>
                        <div className="flex gap-4">
                          <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">{item.client}</span>
                          <span className="text-[10px] text-zinc-600">{item.time}</span>
                          <span className={`text-[10px] uppercase tracking-widest font-bold ${
                            item.type === "alert" ? "text-red-500" :
                            item.type === "milestone" ? "text-amber-500" :
                            item.type === "build" ? "text-blue-500" : "text-green-500"
                          }`}>{item.type}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
