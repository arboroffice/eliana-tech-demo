"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Rocket,
  Terminal,
  Shield,
  Cpu,
  Activity,
  FileText,
  Key,
  Plus,
  Search,
  Settings,
  UserCheck,
  BrainCircuit,
  Workflow,
  Send,
  User,
  Bot,
  ChevronRight,
  Layers,
  Sparkles,
  LayoutDashboard,
  Target,
  MessageSquare,
  HardDrive,
  BookOpen,
  Download,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  XCircle,
  Wifi,
  WifiOff,
  RotateCw,
  Eye,
  Lock,
  Unlock,
  Database,
  FileCode,
  FileJson,
  FileImage,
  FilePieChart,
  RefreshCw,
  TrendingUp,
  Mail,
  Phone,
  CreditCard,
  Megaphone,
  Zap,
  BarChart3,
} from 'lucide-react'
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Area, AreaChart } from "recharts"

// ──────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────
type TabId = 'dashboard' | 'missions' | 'agents' | 'chat' | 'drive' | 'security' | 'knowledge'

interface Log {
  id: string
  level: string
  message: string
  timestamp: any
  missionId?: string
}

interface Agent {
  id: string
  name: string
  type: string
  status: string
  proficiencyLevel: number
}

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  status?: 'thinking' | 'executing' | 'completed'
  progress?: number
  logs?: string[]
  viewportSnapshot?: string
  result?: {
    type: string
    url: string
    summary: string
    evidence: string
  } | null
}

interface Mission {
  id: string
  title: string
  description: string
  status: 'draft' | 'planning' | 'executing' | 'completed' | 'failed'
  department: string
  progress: number
  createdAt: string
}

interface DriveFile {
  id: string
  name: string
  type: 'pdf' | 'csv' | 'json' | 'image' | 'report'
  missionId: string
  size: string
  updatedAt: string
}

interface AuditEntry {
  id: string
  action: string
  actor: string
  timestamp: string
  severity: 'info' | 'warning' | 'critical'
}

interface KnowledgeEntry {
  id: string
  title: string
  type: 'API_DOC' | 'DATA_SCHEMA' | 'PLAYBOOK' | 'WORKFLOW'
  tokens: number
  updatedAt: string
  summary: string
}

// ──────────────────────────────────────────────
// Mock Data
// ──────────────────────────────────────────────
const BROWSER_MOCK_VIEWS = [
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop',
]

const MOCK_REVENUE_DATA = [
  { day: 'Mar 1', revenue: 4200 },
  { day: 'Mar 5', revenue: 5800 },
  { day: 'Mar 9', revenue: 4900 },
  { day: 'Mar 13', revenue: 7200 },
  { day: 'Mar 17', revenue: 6100 },
  { day: 'Mar 21', revenue: 8400 },
  { day: 'Mar 25', revenue: 7800 },
  { day: 'Mar 30', revenue: 9600 },
]

const MOCK_MISSIONS: Mission[] = [
  { id: 'M-201', title: 'Lead Nurture Sequence v3', description: 'Redesign the 14-day email drip for cold leads captured via Meta Ads.', status: 'executing', department: 'Marketing', progress: 68, createdAt: '2026-03-10' },
  { id: 'M-187', title: 'Voice Agent Script A/B Test', description: 'Split-test two objection-handling scripts on inbound sales calls.', status: 'completed', department: 'Sales', progress: 100, createdAt: '2026-03-05' },
  { id: 'M-204', title: 'Stripe Dunning Automation', description: 'Implement smart retry logic and SMS nudges for failed subscription payments.', status: 'planning', department: 'Operations', progress: 15, createdAt: '2026-03-11' },
  { id: 'M-199', title: 'Weekly Performance Digest', description: 'Auto-generate and email KPI dashboards to the founder every Monday.', status: 'completed', department: 'Fulfillment', progress: 100, createdAt: '2026-03-03' },
  { id: 'M-210', title: 'Competitor Pricing Monitor', description: 'Scrape and alert on competitor pricing changes across 5 SaaS verticals.', status: 'draft', department: 'Marketing', progress: 0, createdAt: '2026-03-12' },
]

const MOCK_AGENTS: Agent[] = [
  { id: '1', name: 'Agent-PM-04', type: 'ProjectManager', status: 'active', proficiencyLevel: 98 },
  { id: '2', name: 'Learning-Core-V2', type: 'LearningAgent', status: 'idle', proficiencyLevel: 92 },
  { id: '3', name: 'MetaBuilder-X', type: 'MetaBuilder', status: 'training', proficiencyLevel: 75 },
  { id: '4', name: 'Twin-Browser-01', type: 'BrowserAutomator', status: 'active', proficiencyLevel: 88 },
  { id: '5', name: 'LeadQual-07', type: 'LeadQualifier', status: 'active', proficiencyLevel: 95 },
  { id: '6', name: 'ContentForge-V3', type: 'ContentWriter', status: 'idle', proficiencyLevel: 81 },
]

const MOCK_DRIVE_FILES: DriveFile[] = [
  { id: 'F-01', name: 'lead_nurture_v3_copy.pdf', type: 'pdf', missionId: 'M-201', size: '2.4 MB', updatedAt: '2026-03-11' },
  { id: 'F-02', name: 'ab_test_results.csv', type: 'csv', missionId: 'M-187', size: '840 KB', updatedAt: '2026-03-08' },
  { id: 'F-03', name: 'dunning_flow_schema.json', type: 'json', missionId: 'M-204', size: '12 KB', updatedAt: '2026-03-11' },
  { id: 'F-04', name: 'weekly_digest_mar3.pdf', type: 'report', missionId: 'M-199', size: '1.1 MB', updatedAt: '2026-03-03' },
  { id: 'F-05', name: 'competitor_landscape.png', type: 'image', missionId: 'M-210', size: '3.7 MB', updatedAt: '2026-03-12' },
  { id: 'F-06', name: 'voice_script_final.pdf', type: 'pdf', missionId: 'M-187', size: '540 KB', updatedAt: '2026-03-07' },
]

const MOCK_AUDIT_LOG: AuditEntry[] = [
  { id: 'A-01', action: 'Agent-PM-04 accessed CRM credentials', actor: 'Agent-PM-04', timestamp: '2026-03-12 09:14', severity: 'info' },
  { id: 'A-02', action: 'Failed login attempt from unknown IP 203.0.113.42', actor: 'System', timestamp: '2026-03-12 08:02', severity: 'critical' },
  { id: 'A-03', action: 'DLP scan completed — 0 PII exposures detected', actor: 'DLP-Module', timestamp: '2026-03-12 06:00', severity: 'info' },
  { id: 'A-04', action: 'Stripe API key rotated automatically', actor: 'Credential-Manager', timestamp: '2026-03-11 23:00', severity: 'warning' },
  { id: 'A-05', action: 'Twin-Browser-01 sandboxed after anomalous request pattern', actor: 'Security-Core', timestamp: '2026-03-11 17:45', severity: 'warning' },
]

const MOCK_KNOWLEDGE: KnowledgeEntry[] = [
  { id: 'K-01', title: 'Meta Ads API — Lead Forms', type: 'API_DOC', tokens: 4200, updatedAt: '2026-03-10', summary: 'Covers lead form creation, webhook setup, and instant form retrieval endpoints.' },
  { id: 'K-02', title: 'CRM Contact Schema v2', type: 'DATA_SCHEMA', tokens: 1800, updatedAt: '2026-03-08', summary: 'Canonical schema for contacts including custom fields, lifecycle stage, and scoring.' },
  { id: 'K-03', title: 'Outbound Sales Playbook', type: 'PLAYBOOK', tokens: 6500, updatedAt: '2026-03-05', summary: '5-step sequence for cold outreach with objection-handling decision trees.' },
  { id: 'K-04', title: 'Dunning Recovery Workflow', type: 'WORKFLOW', tokens: 3100, updatedAt: '2026-03-11', summary: 'Automated retry cadence: 1h, 24h, 72h with SMS and email nudge per step.' },
  { id: 'K-05', title: 'Google Ads Conversion Tracking', type: 'API_DOC', tokens: 2900, updatedAt: '2026-03-09', summary: 'Server-side conversion import via Google Ads API with enhanced conversions.' },
  { id: 'K-06', title: 'Client Onboarding Playbook', type: 'PLAYBOOK', tokens: 5200, updatedAt: '2026-03-06', summary: 'Day 0–14 onboarding checklist with automation triggers and QA gates.' },
]

const MOCK_FEED_LINES = [
  '[09:14:02] SCAN  Agent-PM-04 → CRM webhook validated. 214 leads in queue.',
  '[09:14:05] EXEC  LeadQual-07 → Scoring batch #47 started. Model confidence: 94%.',
  '[09:14:08] PLAN  MetaBuilder-X → Generating funnel variant C for M-201.',
  '[09:14:12] SEC   DLP-Module → Outbound payload sanitized. 0 PII tokens stripped.',
  '[09:14:15] META  Learning-Core-V2 → Strategy S-88 graduated to full autonomy.',
  '[09:14:19] EXEC  Twin-Browser-01 → Viewport captured for competitor pricing page.',
  '[09:14:22] SCAN  ContentForge-V3 → Blog draft queued. Estimated tokens: 3,400.',
  '[09:14:26] INFO  System → All agents nominal. Next heartbeat in 30s.',
]

// ──────────────────────────────────────────────
// Sidebar Tab Config
// ──────────────────────────────────────────────
const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'missions', label: 'Missions', icon: Target },
  { id: 'agents', label: 'Agents', icon: Cpu },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'drive', label: 'Drive', icon: HardDrive },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'knowledge', label: 'Knowledge', icon: BookOpen },
]

const chartConfig = {
  revenue: { label: 'Revenue', color: '#dc2626' },
}

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
function statusColor(status: string) {
  switch (status) {
    case 'active': return 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]'
    case 'training': return 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.4)]'
    case 'idle': return 'bg-zinc-600'
    case 'error': return 'bg-red-500'
    default: return 'bg-zinc-700'
  }
}

function missionStatusBadge(status: Mission['status']) {
  const map: Record<string, { label: string; cls: string }> = {
    draft: { label: 'Draft', cls: 'bg-zinc-700 text-zinc-300' },
    planning: { label: 'Planning', cls: 'bg-blue-600/20 text-blue-400 border border-blue-500/30' },
    executing: { label: 'Executing', cls: 'bg-amber-600/20 text-amber-400 border border-amber-500/30' },
    completed: { label: 'Completed', cls: 'bg-green-600/20 text-green-400 border border-green-500/30' },
    failed: { label: 'Failed', cls: 'bg-red-600/20 text-red-400 border border-red-500/30' },
  }
  const s = map[status] || map.draft
  return <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${s.cls}`}>{s.label}</span>
}

function fileIcon(type: DriveFile['type']) {
  switch (type) {
    case 'pdf': return <FileText className="w-4 h-4 text-red-400" />
    case 'csv': return <FilePieChart className="w-4 h-4 text-green-400" />
    case 'json': return <FileJson className="w-4 h-4 text-yellow-400" />
    case 'image': return <FileImage className="w-4 h-4 text-purple-400" />
    case 'report': return <FileCode className="w-4 h-4 text-blue-400" />
  }
}

function severityDot(severity: AuditEntry['severity']) {
  switch (severity) {
    case 'info': return <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
    case 'warning': return <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
    case 'critical': return <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
  }
}

function knowledgeTypeBadge(type: KnowledgeEntry['type']) {
  const map: Record<string, string> = {
    API_DOC: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
    DATA_SCHEMA: 'bg-purple-600/20 text-purple-400 border-purple-500/30',
    PLAYBOOK: 'bg-amber-600/20 text-amber-400 border-amber-500/30',
    WORKFLOW: 'bg-green-600/20 text-green-400 border-green-500/30',
  }
  return <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${map[type]}`}>{type.replace('_', ' ')}</span>
}

// ──────────────────────────────────────────────
// Main Component
// ──────────────────────────────────────────────
export default function CommandCenterClient() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard')

  // Chat state
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 'default-1', role: 'assistant', content: "Hello. I am the Eliana-OS Recursive Architect. What business mission shall we execute today?" }
  ])
  const [missionInput, setMissionInput] = useState('')
  const [activeDepartment, setActiveDepartment] = useState('Operations')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Missions state
  const [missions, setMissions] = useState<Mission[]>(MOCK_MISSIONS)
  const [missionFilter, setMissionFilter] = useState<string>('all')
  const [showNewMission, setShowNewMission] = useState(false)
  const [newMissionTitle, setNewMissionTitle] = useState('')
  const [newMissionDesc, setNewMissionDesc] = useState('')
  const [newMissionDept, setNewMissionDept] = useState('Operations')

  // Drive state
  const [driveSearch, setDriveSearch] = useState('')

  // Knowledge state
  const [kbSearch, setKbSearch] = useState('')
  const [kbTypeFilter, setKbTypeFilter] = useState<string>('all')

  // Agent feed
  const [feedLines, setFeedLines] = useState<string[]>(MOCK_FEED_LINES.slice(0, 3))
  const feedRef = useRef<HTMLDivElement>(null)

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Live agent feed simulation
  useEffect(() => {
    if (activeTab !== 'agents') return
    let idx = 3
    const interval = setInterval(() => {
      if (idx < MOCK_FEED_LINES.length) {
        setFeedLines(prev => [...prev, MOCK_FEED_LINES[idx]])
        idx++
      } else {
        idx = 0
        setFeedLines([MOCK_FEED_LINES[0]])
      }
    }, 2200)
    return () => clearInterval(interval)
  }, [activeTab])

  useEffect(() => {
    feedRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [feedLines])

  const handleSendMessage = async () => {
    if (!missionInput.trim()) return

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', content: missionInput }
    const assistantMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: "Initializing infrastructure cluster...",
      status: 'thinking',
      progress: 0,
      logs: []
    }

    setMessages(prev => [...prev, userMsg, assistantMsg])
    const currentInput = missionInput
    setMissionInput('')

    const missionId = `M-${Math.floor(Math.random() * 900) + 100}`

    const steps = [
      { msg: 'Vision Layer active. Mapping browser coordinate space...', level: 'SCAN' },
      { msg: 'Recursive Architect generating deployment strategy.', level: 'PLAN' },
      { msg: 'Executing creation: Provisioning isolated database.', level: 'EXEC' },
      { msg: 'Security Audit: DLP module verified. Risk 0%.', level: 'SEC' },
    ]

    for (let i = 0; i < steps.length; i++) {
      await new Promise(r => setTimeout(r, 1800))
      setMessages(prev => prev.map(m =>
        m.id === assistantMsg.id ? {
          ...m,
          status: 'executing',
          progress: (i + 1) * 25,
          viewportSnapshot: BROWSER_MOCK_VIEWS[i % BROWSER_MOCK_VIEWS.length],
          logs: [...(m.logs || []), steps[i].msg]
        } : m
      ))
    }

    await new Promise(r => setTimeout(r, 1000))
    setMessages(prev => prev.map(m =>
      m.id === assistantMsg.id ? {
        ...m,
        status: 'completed',
        progress: 100,
        content: `Mission ${missionId} resolved. I've successfully deployed the "${currentInput}" infrastructure in your target ${activeDepartment} environment.`,
        result: { type: 'Deployment Artifact', url: '#', summary: 'Unified agent cluster integrated with target CRM. Recursive triggers established.', evidence: '14 validation points passed.' }
      } : m
    ))
  }

  const handleCreateMission = () => {
    if (!newMissionTitle.trim()) return
    const m: Mission = {
      id: `M-${Math.floor(Math.random() * 900) + 100}`,
      title: newMissionTitle,
      description: newMissionDesc,
      status: 'draft',
      department: newMissionDept,
      progress: 0,
      createdAt: '2026-03-12',
    }
    setMissions(prev => [m, ...prev])
    setNewMissionTitle('')
    setNewMissionDesc('')
    setShowNewMission(false)
  }

  const filteredMissions = missions.filter(m => missionFilter === 'all' || m.status === missionFilter)
  const filteredFiles = MOCK_DRIVE_FILES.filter(f => !driveSearch || f.name.toLowerCase().includes(driveSearch.toLowerCase()) || f.missionId.toLowerCase().includes(driveSearch.toLowerCase()))
  const filteredKB = MOCK_KNOWLEDGE.filter(k => {
    const matchType = kbTypeFilter === 'all' || k.type === kbTypeFilter
    const matchSearch = !kbSearch || k.title.toLowerCase().includes(kbSearch.toLowerCase()) || k.summary.toLowerCase().includes(kbSearch.toLowerCase())
    return matchType && matchSearch
  })

  // Tab Renderers
  const renderDashboard = () => (
    <div className="p-8 space-y-8 overflow-y-auto h-full antialiased">
      <div>
        <h2 className="text-lg font-black tracking-tight mb-1">Command Center</h2>
        <p className="text-xs text-zinc-500">Eliana-OS v4.0 — all systems nominal</p>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {[
          { label: 'Active Leads', value: '1,247', icon: TrendingUp, delta: '+12%' },
          { label: 'Messages Sent', value: '8,431', icon: Mail, delta: '+8%' },
          { label: 'Tasks Completed', value: '342', icon: CheckCircle2, delta: '+23%' },
          { label: 'Emails Sent', value: '12,809', icon: Send, delta: '+5%' },
        ].map((m) => (
          <div key={m.label} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <m.icon className="w-4 h-4 text-zinc-500" />
              <span className="text-[10px] text-green-500 font-bold">{m.delta}</span>
            </div>
            <div className="text-xl font-black tracking-tight">{m.value}</div>
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-black tracking-tight">Revenue (30D)</h3>
            <p className="text-[10px] text-zinc-500 mt-0.5">Total: $54,100</p>
          </div>
          <Badge variant="outline" className="text-green-400 border-green-500/30 text-[10px]">+18% vs prev</Badge>
        </div>
        <ChartContainer config={chartConfig} className="h-[220px] w-full">
          <AreaChart data={MOCK_REVENUE_DATA} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#dc2626" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#dc2626" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
            <XAxis dataKey="day" tick={{ fill: '#71717a', fontSize: 10 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#71717a', fontSize: 10 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Area type="monotone" dataKey="revenue" stroke="#dc2626" strokeWidth={2} fill="url(#revGrad)" />
          </AreaChart>
        </ChartContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Integrations</h3>
          <div className="space-y-3">
            {[
              { name: 'Meta Ads', status: 'connected', icon: Megaphone },
              { name: 'Google Ads', status: 'connected', icon: BarChart3 },
              { name: 'Mailgun', status: 'connected', icon: Mail },
              { name: 'Twilio', status: 'connected', icon: Phone },
              { name: 'Stripe', status: 'connected', icon: CreditCard },
            ].map((int) => (
              <div key={int.name} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                  <int.icon className="w-4 h-4 text-zinc-500" />
                  <span className="text-xs text-zinc-300">{int.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] text-green-500 font-bold uppercase">Live</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
          <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'New Mission', icon: Rocket, action: () => { setActiveTab('missions'); setShowNewMission(true) } },
              { label: 'Open Chat', icon: MessageSquare, action: () => setActiveTab('chat') },
              { label: 'View Agents', icon: Cpu, action: () => setActiveTab('agents') },
              { label: 'Security Audit', icon: Shield, action: () => setActiveTab('security') },
            ].map((qa) => (
              <button key={qa.label} onClick={qa.action} className="flex items-center gap-2 bg-zinc-800/60 hover:bg-zinc-700/60 border border-zinc-700/50 rounded-xl p-3 transition-colors text-left">
                <qa.icon className="w-4 h-4 text-red-500" />
                <span className="text-[11px] font-bold text-zinc-300">{qa.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderMissions = () => (
    <div className="p-8 space-y-6 overflow-y-auto h-full antialiased">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black tracking-tight">Missions</h2>
          <p className="text-xs text-zinc-500">{missions.length} total — {missions.filter(m => m.status === 'executing').length} active</p>
        </div>
        <button onClick={() => setShowNewMission(true)} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-xl transition-colors">
          <Plus className="w-4 h-4" /> New Mission
        </button>
      </div>

      <div className="flex gap-2">
        {['all', 'draft', 'planning', 'executing', 'completed', 'failed'].map(f => (
          <button key={f} onClick={() => setMissionFilter(f)} className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${missionFilter === f ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:text-white'}`}>
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {filteredMissions.map(m => (
          <div key={m.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[10px] font-mono text-zinc-600">{m.id}</span>
                  {missionStatusBadge(m.status)}
                </div>
                <h4 className="text-sm font-bold text-white">{m.title}</h4>
              </div>
              <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full font-bold">{m.department}</span>
            </div>
            <p className="text-xs text-zinc-500 mb-4">{m.description}</p>
            <div className="flex items-center gap-3">
              <div className="flex-grow h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 transition-all" style={{ width: `${m.progress}%` }} />
              </div>
              <span className="text-[10px] font-mono text-zinc-500">{m.progress}%</span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showNewMission && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowNewMission(false)}>
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} onClick={e => e.stopPropagation()} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 w-full max-w-lg shadow-2xl">
              <h3 className="text-sm font-black uppercase tracking-widest mb-6">New Mission</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1.5">Title</label>
                  <input value={newMissionTitle} onChange={e => setNewMissionTitle(e.target.value)} placeholder="e.g., Lead Nurture Sequence v4" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500" />
                </div>
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1.5">Description</label>
                  <textarea value={newMissionDesc} onChange={e => setNewMissionDesc(e.target.value)} placeholder="Describe the mission objective..." rows={3} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 resize-none" />
                </div>
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold block mb-1.5">Department</label>
                  <select value={newMissionDept} onChange={e => setNewMissionDept(e.target.value)} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-red-500">
                    {['Operations', 'Marketing', 'Sales', 'Fulfillment'].map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={() => setShowNewMission(false)} className="flex-1 py-2.5 text-xs font-bold text-zinc-400 bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors">Cancel</button>
                <button onClick={handleCreateMission} className="flex-1 py-2.5 text-xs font-bold text-white bg-red-600 rounded-xl hover:bg-red-700 transition-colors">Create Mission</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const renderAgents = () => (
    <div className="p-8 space-y-6 overflow-y-auto h-full antialiased">
      <div>
        <h2 className="text-lg font-black tracking-tight">Agent Cluster</h2>
        <p className="text-xs text-zinc-500">{MOCK_AGENTS.filter(a => a.status === 'active').length} active — {MOCK_AGENTS.length} total</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {MOCK_AGENTS.map(agent => (
          <div key={agent.id} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">{agent.name}</div>
                  <span className="text-[9px] text-zinc-500 font-mono">{agent.type}</span>
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${statusColor(agent.status)}`} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px]">
                <span className="text-zinc-500">Proficiency</span>
                <span className="text-zinc-300 font-mono">{agent.proficiencyLevel}%</span>
              </div>
              <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 transition-all" style={{ width: `${agent.proficiencyLevel}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black/60 border border-zinc-800 rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-zinc-800 flex items-center justify-between">
          <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest flex items-center gap-2">
            <Terminal className="w-3 h-3" /> Live Agent Feed
          </span>
          <Activity className="w-3 h-3 text-red-500 animate-pulse" />
        </div>
        <div className="p-4 font-mono text-[10px] space-y-2 max-h-[240px] overflow-y-auto">
          {feedLines.map((line, i) => (
            <motion.div key={`${i}-${line}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-zinc-500 leading-relaxed">
              <span className="text-red-900 mr-1">»</span>{line}
            </motion.div>
          ))}
          <div ref={feedRef} />
        </div>
      </div>
    </div>
  )

  const renderChat = () => (
    <div className="flex flex-col h-full overflow-hidden antialiased">
      <div className="p-6 border-b border-zinc-900 bg-zinc-900/40 flex justify-between items-center z-10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center font-black italic">E</div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-900" />
          </div>
          <div>
            <h3 className="text-sm font-black tracking-widest uppercase">Recursive Architect</h3>
            <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
              Deployment Mode: <span className="text-red-500">{activeDepartment}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {['Fulfillment', 'Sales', 'Marketing', 'Operations'].map(dept => (
            <button key={dept} onClick={() => setActiveDepartment(dept)} className={`text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors ${activeDepartment === dept ? 'bg-red-600 text-white' : 'bg-zinc-800 text-zinc-500 hover:text-white'}`}>
              {dept}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-grow overflow-y-auto p-8 space-y-8 scroll-smooth">
        {messages.map((msg) => (
          <motion.div key={msg.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-zinc-800' : 'bg-red-600 shadow-[0_0_20px_rgba(220,38,38,0.3)]'}`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
            </div>
            <div className={`max-w-[70%] space-y-4 ${msg.role === 'user' ? 'text-right items-end flex flex-col' : ''}`}>
              <div className={`p-6 rounded-3xl leading-relaxed text-sm ${msg.role === 'user' ? 'bg-red-600 text-white font-bold' : 'bg-zinc-900/80 border border-zinc-800 text-zinc-300 backdrop-blur-md'}`}>
                {msg.content}
              </div>
              {msg.viewportSnapshot && (
                <div className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-video ring-4 ring-black shadow-2xl">
                  <img src={msg.viewportSnapshot} alt="System View" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </motion.div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="p-8 bg-gradient-to-t from-black to-transparent shrink-0">
        <div className="relative max-w-4xl mx-auto">
          <input
            type="text"
            value={missionInput}
            onChange={e => setMissionInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your command..."
            className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 text-sm text-white focus:outline-none focus:border-red-600"
          />
        </div>
      </div>
    </div>
  )

  const renderCurrentTab = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard()
      case 'missions': return renderMissions()
      case 'agents': return renderAgents()
      case 'chat': return renderChat()
      default: return <div className="p-12 text-zinc-500 font-mono text-xs antialiased">INTERFACE_LOADING_ERROR: MOD_NOT_IMPLEMENTED</div>
    }
  }

  return (
    <div className="flex h-screen bg-black text-[#FAFAF8] font-sans selection:bg-red-500/30 overflow-hidden antialiased">
      <div className="w-[280px] bg-zinc-900/40 border-r border-zinc-900 flex flex-col shrink-0">
        <div className="p-8 border-b border-zinc-900">
          <h1 className="font-playfair italic text-[24px] uppercase tracking-tighter">ELIANA<span className="text-red-600 not-italic">OS</span></h1>
        </div>
        <nav className="flex-grow p-4 space-y-1">
          {TABS.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeTab === tab.id ? 'bg-red-600 text-white shadow-[0_10px_30px_rgba(220,38,38,0.2)]' : 'text-zinc-500 hover:text-white hover:bg-zinc-800/50'}`}>
              <tab.icon className="w-4 h-4" /> {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-8 border-t border-zinc-900">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><User className="w-4 h-4" /></div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Admin_Session</div>
          </div>
          <button className="text-[9px] text-zinc-600 hover:text-red-500 transition-colors uppercase font-bold tracking-widest flex items-center gap-2"><Lock className="w-3 h-3" /> Terminate Session</button>
        </div>
      </div>
      <main className="flex-grow relative flex flex-col min-w-0">
        {renderCurrentTab()}
      </main>
    </div>
  )
}
