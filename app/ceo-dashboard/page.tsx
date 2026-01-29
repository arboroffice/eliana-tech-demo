"use client"

import { motion } from "framer-motion"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Footer from "@/components/footer"
import Aurora from "@/components/Aurora"
import {
  Bot, Zap, Mail, Phone, Video, Handshake, Brain, TrendingUp,
  FileText, MessageSquare, Clock, CheckCircle2, AlertCircle,
  ExternalLink, BarChart3, Users, DollarSign, Target, Flame,
  Calendar, Send, Database, CreditCard, Activity, Megaphone,
  Shield, ArrowRight, Eye, Settings, FileBarChart
} from "lucide-react"
import { useEffect, useState } from "react"

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
})

function StatCard({ icon: Icon, label, value, color }: { icon: any; label: string; value: string; color: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  )
}

function AICard({ title, emoji, items }: { title: string; emoji: string; items: string[] }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-emerald-500/20 rounded-xl p-5 hover:border-emerald-500/40 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full flex items-center gap-1">
          {emoji} Active
        </span>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function MiaCard({ title, emoji, icon: Icon, items }: { title: string; emoji: string; icon: any; items: string[] }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-amber-500/20 rounded-xl p-5 hover:border-amber-500/40 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-lg bg-amber-500/20">
          <Icon className="w-5 h-5 text-amber-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title} {emoji}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
            <ArrowRight className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const pipelineStages = [
  { label: "Visitors", count: 12847, pct: "100%" },
  { label: "Audit Starts", count: 1463, pct: "11.4%" },
  { label: "Audit Completes", count: 892, pct: "61.0%" },
  { label: "Call Booked", count: 214, pct: "24.0%" },
  { label: "Call Done", count: 156, pct: "72.9%" },
  { label: "Closed", count: 47, pct: "30.1%" },
]

const leads = [
  { name: "Sarah Chen", company: "BrightPath Solar", industry: "Solar", score: 94, intent: "Hot", status: "Call Scheduled", date: "Jan 15" },
  { name: "Marcus Johnson", company: "GreenWave Energy", industry: "HVAC", score: 87, intent: "Hot", status: "New", date: "Jan 15" },
  { name: "Lisa Nakamura", company: "Apex Roofing Co", industry: "Roofing", score: 72, intent: "Warm", status: "Nurturing", date: "Jan 14" },
  { name: "David Torres", company: "EcoHome Installs", industry: "Solar", score: 65, intent: "Warm", status: "Nurturing", date: "Jan 13" },
  { name: "Rachel Kim", company: "Summit HVAC", industry: "HVAC", score: 41, intent: "Cold", status: "Closed Lost", date: "Jan 12" },
  { name: "James Wright", company: "ProSolar TX", industry: "Solar", score: 91, intent: "Hot", status: "Closed Won", date: "Jan 11" },
]

const intentColor: Record<string, string> = {
  Hot: "text-red-400 bg-red-500/20",
  Warm: "text-yellow-400 bg-yellow-500/20",
  Cold: "text-blue-400 bg-blue-500/20",
}

const statusColor: Record<string, string> = {
  New: "text-emerald-400",
  Nurturing: "text-purple-400",
  "Call Scheduled": "text-amber-400",
  "Closed Won": "text-green-400",
  "Closed Lost": "text-gray-500",
}

const automationSystems = [
  { name: "Content Crons", status: "running", detail: "Morning Brief, Evening Recap, Weekly Report, Blog Deploy", icon: FileText },
  { name: "Email Sequences", status: "pending", detail: "Needs Resend API key", icon: Mail },
  { name: "SMS Follow-ups", status: "pending", detail: "Needs Twilio creds", icon: MessageSquare },
  { name: "Database", status: "pending", detail: "Needs Supabase", icon: Database },
  { name: "Stripe Payments", status: "running", detail: "COO checkout connected", icon: CreditCard },
  { name: "Audit Form", status: "running", detail: "Live at /audit", icon: FileBarChart },
  { name: "Lead Scoring", status: "running", detail: "Built — activates with database", icon: Target },
]

const quickActions = [
  { label: "View Audit Submissions", href: "/api/audit", icon: Eye },
  { label: "Review Applications", href: "#", icon: Users },
  { label: "Content Calendar", href: "#", icon: Calendar },
  { label: "Update Offers", href: "/ai-coo", icon: Settings },
  { label: "View Site Analytics", href: "https://vercel.com/analytics", icon: BarChart3 },
]

export default function CEODashboard() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <Aurora colorStops={["#10b981", "#f59e0b", "#3b82f6"]} amplitude={1.2} speed={0.3} />
      </div>
      <GlassmorphismNav />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        {/* Top Bar */}
        <motion.div {...fade(0)} className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-amber-400 to-blue-400 bg-clip-text text-transparent">
                ElianaTech CEO Dashboard
              </h1>
              <p className="text-gray-400 mt-1">
                {now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} · {now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Shield className="w-4 h-4" /> Internal — Mia only
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Users} label="Total Audit Leads" value="892" color="bg-blue-600" />
            <StatCard icon={Flame} label="Hot Leads" value="37" color="bg-red-600" />
            <StatCard icon={Phone} label="Calls Booked" value="12" color="bg-amber-600" />
            <StatCard icon={DollarSign} label="Revenue This Month" value="$24.8k" color="bg-emerald-600" />
          </div>
        </motion.div>

        {/* Section 1: AI Handles */}
        <motion.div {...fade(0.1)} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-emerald-500/20">
              <Bot className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">AI Handles <span className="text-emerald-400">(Automated)</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AICard title="Content Engine" emoji="🟢" items={[
              "Daily blog posts deployed (SEO)",
              "Morning briefs sent (7am)",
              "Evening recaps sent (6pm)",
              "Weekly reports (Friday 5pm)",
              "Social content written & scheduled"
            ]} />
            <AICard title="Lead Capture" emoji="🟢" items={[
              "Audit form live at /audit",
              "13-step deep-dive audit (reducing to 8)",
              "Instant AI-powered results",
              "PDF report auto-generated",
              "Lead scored: Hot/Warm/Cold automatically"
            ]} />
            <AICard title="Nurture & Follow-Up" emoji="🟢" items={[
              "Hot leads: 5-email sequence over 7 days",
              "Warm leads: 7-email sequence over 21 days",
              "Cold leads: 4-email sequence over 30 days",
              "SMS follow-ups (Day 0, 2, 5, 14)",
              "Exit-intent capture for abandoned audits"
            ]} />
            <AICard title="Sales Support" emoji="🟢" items={[
              "Auto-generated proposals",
              "ROI calculator with their numbers",
              "Quick wins checklist personalized",
              "Industry playbook delivered",
              "Case studies matched to industry"
            ]} />
            <AICard title="Operations" emoji="🟢" items={[
              "Email triage & draft responses",
              "Calendar management",
              "Lead qualification & pipeline",
              "Performance tracking & reporting"
            ]} />
          </div>
        </motion.div>

        {/* Section 2: Mia's Role */}
        <motion.div {...fade(0.2)} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-amber-500/20">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Mia&apos;s Role <span className="text-amber-400">(You Do This)</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <MiaCard title="Sales Calls" emoji="📞" icon={Phone} items={[
              "Take audit/strategy calls (30 min)",
              "Close deals on calls",
              "Review hot lead notifications (act within 1 hour)"
            ]} />
            <MiaCard title="Content Creation" emoji="🎬" icon={Video} items={[
              "Film YouTube videos & Reels (scripts provided)",
              "Record talking head content",
              "Approve content before posting (optional)"
            ]} />
            <MiaCard title="Client Delivery" emoji="🤝" icon={Handshake} items={[
              "Kickoff calls with new clients",
              "Major strategic decisions",
              "Quality review on installations"
            ]} />
            <MiaCard title="Growth Decisions" emoji="🧠" icon={Brain} items={[
              "Approve new partnerships",
              "Review affiliate/partner applications",
              "Set pricing & offers"
            ]} />
          </div>
        </motion.div>

        {/* Section 3: Sales Pipeline */}
        <motion.div {...fade(0.3)} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Sales Pipeline</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 space-y-3">
            {pipelineStages.map((stage, i) => {
              const widthPct = Math.max(8, (stage.count / pipelineStages[0].count) * 100)
              const hue = 200 + (i * 25) // blue → green gradient
              return (
                <div key={stage.label} className="flex items-center gap-4">
                  <span className="text-sm text-gray-400 w-32 shrink-0 text-right">{stage.label}</span>
                  <div className="flex-1 relative">
                    <div
                      className="h-10 rounded-lg flex items-center px-4 justify-between transition-all"
                      style={{
                        width: `${widthPct}%`,
                        background: `linear-gradient(90deg, hsl(${hue}, 70%, 40%), hsl(${hue + 20}, 70%, 50%))`,
                      }}
                    >
                      <span className="text-sm font-bold text-white">{stage.count.toLocaleString()}</span>
                      <span className="text-xs text-white/70">{stage.pct}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Section 4: Lead Activity */}
        <motion.div {...fade(0.4)} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Lead Activity</h2>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-gray-400">
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Company</th>
                    <th className="text-left p-4 hidden md:table-cell">Industry</th>
                    <th className="text-left p-4">Score</th>
                    <th className="text-left p-4">Intent</th>
                    <th className="text-left p-4 hidden sm:table-cell">Status</th>
                    <th className="text-left p-4 hidden lg:table-cell">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white font-medium">{lead.name}</td>
                      <td className="p-4 text-gray-300">{lead.company}</td>
                      <td className="p-4 text-gray-400 hidden md:table-cell">{lead.industry}</td>
                      <td className="p-4">
                        <span className={`font-bold ${lead.score >= 80 ? "text-emerald-400" : lead.score >= 60 ? "text-yellow-400" : "text-gray-400"}`}>
                          {lead.score}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`text-xs px-2 py-1 rounded-full ${intentColor[lead.intent]}`}>
                          {lead.intent}
                        </span>
                      </td>
                      <td className={`p-4 hidden sm:table-cell ${statusColor[lead.status]}`}>{lead.status}</td>
                      <td className="p-4 text-gray-500 hidden lg:table-cell">{lead.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Section 5: Automation Status */}
        <motion.div {...fade(0.5)} className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-purple-500/20">
              <Settings className="w-6 h-6 text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Automation Status</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {automationSystems.map((sys) => {
              const running = sys.status === "running"
              return (
                <div key={sys.name} className={`bg-white/5 backdrop-blur-md border rounded-xl p-4 ${running ? "border-emerald-500/20" : "border-yellow-500/20"}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <sys.icon className={`w-5 h-5 ${running ? "text-emerald-400" : "text-yellow-400"}`} />
                    <span className="text-white font-medium">{sys.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${running ? "bg-emerald-400" : "bg-yellow-400"} animate-pulse`} />
                    <span className={`text-xs ${running ? "text-emerald-400" : "text-yellow-400"}`}>
                      {running ? "Running" : "Pending Setup"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{sys.detail}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Section 6: Quick Actions */}
        <motion.div {...fade(0.6)}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickActions.map((action) => (
              <a
                key={action.label}
                href={action.href}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-blue-500/30 transition-all group flex flex-col items-center text-center gap-3"
              >
                <action.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-sm text-gray-300 group-hover:text-white font-medium">{action.label}</span>
                <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-gray-400" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
