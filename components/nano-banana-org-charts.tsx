"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { 
  Cpu, 
  Factory, 
  Stethoscope, 
  Building2, 
  ShoppingCart, 
  Network, 
  Database, 
  Bot, 
  UserCircle2, 
  ArrowRight,
  Repeat,
  BarChart3,
  ShieldCheck,
  Zap,
  TrendingUp,
  LineChart
} from "lucide-react"

type Industry = "manufacturing" | "healthcare" | "realestate" | "ecommerce" | "dealerships" | "professional" | "homeservices" | "techsaas" | "hospitality" | "finance" | "legal" | "creative"

interface NodeProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  type: "brain" | "agent" | "infra" | "human"
  details?: string[]
}

const Node = ({ title, subtitle, icon, type, details }: NodeProps) => {
  const getColors = () => {
    switch (type) {
      case "brain": return "bg-black text-white border-white/10 shadow-[0_0_30px_-10px_rgba(217,0,25,0.4)]"
      case "agent": return "bg-white/80 backdrop-blur-md text-black border-gray-100/50 hover:border-[#D90019]/30"
      case "infra": return "bg-gray-50/50 backdrop-blur-sm text-gray-500 border-dashed border-gray-200/50 uppercase text-[10px]"
      case "human": return "bg-[#D90019] text-white border-[#D90019] shadow-[0_4px_15px_-5px_rgba(217,0,25,0.5)]"
      default: return "bg-white border-black"
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`group relative p-7 border rounded-[2rem] transition-all duration-300 ${getColors()} shadow-xl hover:shadow-2xl`}
    >
      <div className="flex items-center gap-5">
        <div className={`p-4 rounded-2xl ${type === 'brain' ? 'bg-white/10 text-white' : 'bg-gray-50 text-black'} group-hover:bg-[#D90019] group-hover:text-white transition-all duration-300`}>
          {icon}
        </div>
        <div className="flex-grow text-left">
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-1.5 opacity-50 font-mono">{subtitle}</p>
          <h4 className="font-bebas text-3xl uppercase tracking-tighter leading-none">{title}</h4>
        </div>
      </div>
      
      {details && (
        <div className="mt-6 pt-6 border-t border-black/5 space-y-2.5">
          {details.map((detail, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D90019]/40 group-hover:bg-[#D90019] transition-colors" />
              <span className="text-[10px] font-bold uppercase tracking-wider leading-none text-gray-600 group-hover:text-black transition-colors">{detail}</span>
            </div>
          ))}
        </div>
      )}

      {/* Modern Accent Glow */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D90019]/0 to-[#D90019]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  )
}

const ConnectionLine = ({ horizontal = false }: { horizontal?: boolean }) => (
  <div className={`relative ${horizontal ? 'h-[2px] w-full mx-4' : 'w-[2px] h-16 mx-auto'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-[#D90019]/20 to-transparent ${!horizontal && 'bg-gradient-to-b'}`} />
    <motion.div 
      animate={horizontal ? { left: ["-100%", "200%"] } : { top: ["-100%", "200%"] }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      className={`absolute ${horizontal ? 'w-20 h-full left-0 bg-gradient-to-r' : 'h-20 w-full top-0 bg-gradient-to-b'} from-transparent via-[#D90019]/40 to-transparent`}
    />
  </div>
)

export function NanoBananaOrgCharts() {
  const [activeIndustry, setActiveIndustry] = useState<Industry>("manufacturing")

  const industries: Record<Industry, any> = {
    manufacturing: {
      title: "Manufacturing & Logistics",
      subtitle: "Industrial Autonomous Infrastructure",
      nodes: {
        brain: { title: "Supply Chain Oracle", subtitle: "Strategic AI Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["Demand Forecasting", "Risk Mitigation", "Cost Optimization"] },
        agents: [
          { title: "Maintenance AI", subtitle: "Operational Agent", icon: <Factory className="w-6 h-6" />, details: ["IoT Feed Monitoring", "MTBF Prediction", "Parts Inventory"] },
          { title: "Route Optimizer", subtitle: "Operational Agent", icon: <Network className="w-6 h-6" />, details: ["Dynamic Dispatch", "Fuel Efficiency", "Carrier Sync"] },
          { title: "Warehouse Orchestrator", subtitle: "Operational Agent", icon: <Bot className="w-6 h-6" />, details: ["Robotic Sorter Link", "Peak Flow Control", "Safety Monitoring"] }
        ],
        infra: { title: "Industrial Data Lake", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    healthcare: {
      title: "Healthcare & Medical",
      subtitle: "Clinical Intelligence Network",
      nodes: {
        brain: { title: "Care Strategy Engine", subtitle: "Clinical Hub", icon: <LineChart className="w-6 h-6" />, details: ["Outcome Analytics", "Resource Allocation", "Patient Flow"] },
        agents: [
          { title: "Triage Assistant", subtitle: "Front-Door Agent", icon: <Stethoscope className="w-6 h-6" />, details: ["Symptom Analysis", "Virtual Check-in", "Wait-Time Control"] },
          { title: "Medical Documentation", subtitle: "Clinical Support Agent", icon: <Bot className="w-6 h-6" />, details: ["Ambient Scribe", "ICD-10 Tagging", "Compliance Audit"] },
          { title: "Billing Compliance", subtitle: "Operational Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Claim Optimization", "Denial Prediction", "Revenue Recovery"] }
        ],
        infra: { title: "HIPAA Secure Memory", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    realestate: {
      title: "Modern Real Estate",
      subtitle: "Transaction Yield Infrastructure",
      nodes: {
        brain: { title: "Yield Maximizer", subtitle: "Strategic Controller", icon: <Building2 className="w-6 h-6" />, details: ["Market Trend Analysis", "Portfolio Strategy", "Asset Valuation"] },
        agents: [
          { title: "Lead Concierge", subtitle: "Conversion Agent", icon: <Zap className="w-6 h-6" />, details: ["Omnichannel Response", "Lead Scoring", "Calendar Sync"] },
          { title: "Value Estimator", subtitle: "Valuation Agent", icon: <LineChart className="w-6 h-6" />, details: ["Real-time Appraisal", "Comp Analysis", "ROI Projections"] },
          { title: "Contract AI", subtitle: "Compliance Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Doc Generation", "Autonomous Follow-up", "Closing Milestones"] }
        ],
        infra: { title: "MLS Intelligence Sync", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    ecommerce: {
      title: "E-commerce & Retail",
      subtitle: "Consumer Velocity Protocol",
      nodes: {
        brain: { title: "Growth Catalyst", subtitle: "Brand Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["LTV/CAC Intelligence", "Marketing Attribution", "Strategic Roadmap"] },
        agents: [
          { title: "Personal Shopper", subtitle: "CX Agent", icon: <ShoppingCart className="w-6 h-6" />, details: ["Predictive Recommendations", "Visual Search", "Upsell Engine"] },
          { title: "Price Dynamicist", subtitle: "Margin Agent", icon: <Zap className="w-6 h-6" />, details: ["Real-time Competition", "Inventory-Aware Pricing", "Promo Alerts"] },
          { title: "Support Analyst", subtitle: "Success Agent", icon: <Bot className="w-6 h-6" />, details: ["Proactive Ticket Solve", "Sentiment Monitoring", "Churn Warning"] }
        ],
        infra: { title: "Customer Data Platform", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    dealerships: {
      title: "Dealership & Auto Sales",
      subtitle: "Showroom Autonomy Grid",
      nodes: {
        brain: { title: "Inventory Oracle", subtitle: "Sales Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["Market Pricing Feed", "Trade-in Prediction", "Stock Velocity"] },
        agents: [
          { title: "Appointment Bot", subtitle: "Intake Agent", icon: <Zap className="w-6 h-6" />, details: ["24/7 Lead Capture", "Test Drive Booking", "Credit Pre-qual"] },
          { title: "Service Nurturer", subtitle: "Retention Agent", icon: <Repeat className="w-6 h-6" />, details: ["Maintenance Alerts", "Recall Sync", "Upsell Triggers"] },
          { title: "Reputation Guard", subtitle: "Success Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Review Generation", "Sentiment Triage", "Social Proof Sync"] }
        ],
        infra: { title: "DMS Intelligence Layer", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    professional: {
      title: "Professional Services & Agency",
      subtitle: "Client Alpha Infrastructure",
      nodes: {
        brain: { title: "Pipeline Strategist", subtitle: "Margin Controller", icon: <LineChart className="w-6 h-6" />, details: ["Utilization Analytics", "Lead Quality Scoring", "Revenue Forecasting"] },
        agents: [
          { title: "Proposal Architect", subtitle: "Sales Agent", icon: <Zap className="w-6 h-6" />, details: ["Autonomous SOW Gen", "Dynamic Pricing", "Follow-up Loops"] },
          { title: "Intake Screen", subtitle: "Ops Agent", icon: <Bot className="w-6 h-6" />, details: ["Qualifying Filter", "KYC / Conflict Check", "Meeting Triage"] },
          { title: "Reporting Engine", subtitle: "Success Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Real-time KPI Sync", "Client Health Score", "Monthly Brief Gen"] }
        ],
        infra: { title: "Unified CRM/PM Matrix", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    homeservices: {
      title: "Home & Local Services",
      subtitle: "Dispatch Autonomy Protocol",
      nodes: {
        brain: { title: "Job Maximizer", subtitle: "Efficiency Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["Market Gap Analysis", "Seasonality Prediction", "Margin Optimization"] },
        agents: [
          { title: "AI Receptionist", subtitle: "Intake Agent", icon: <Zap className="w-6 h-6" />, details: ["24/7 Call/SMS Handling", "Instant Estimating", "On-site Booking"] },
          { title: "Dispatch AI", subtitle: "Ops Agent", icon: <Repeat className="w-6 h-6" />, details: ["Real-time Routing", "Crew Load Balance", "Parts Check-in"] },
          { title: "Review Engine", subtitle: "Success Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Post-job Feedback", "Referral Generation", "Social Proof Boost"] }
        ],
        infra: { title: "Local Market Sync", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    techsaas: {
      title: "Tech & SaaS",
      subtitle: "Product Velocity Infrastructure",
      nodes: {
        brain: { title: "Product Oracle", subtitle: "Roadmap Controller", icon: <LineChart className="w-6 h-6" />, details: ["Usage Trend Sync", "Churn Risk Scoring", "Feature Gap Analysis"] },
        agents: [
          { title: "Dev Support AI", subtitle: "Technical Agent", icon: <Bot className="w-6 h-6" />, details: ["Autonomous Triage", "Codebase Assistance", "Docs Generation"] },
          { title: "Growth Funnel", subtitle: "Sales Agent", icon: <Zap className="w-6 h-6" />, details: ["Self-Serve Onboarding", "In-app Upgrade Path", "Viral Loops"] },
          { title: "Success Analyst", subtitle: "Retention Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["NPS Sentiment Link", "Proactive Outbound", "Onboarding Health"] }
        ],
        infra: { title: "Real-time Event Stream", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    hospitality: {
      title: "Hospitality & Hotel",
      subtitle: "Guest Experience Matrix",
      nodes: {
        brain: { title: "Yield Strategist", subtitle: "Revenue Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["Dynamic RevPAR Feed", "Occupancy Forecasting", "Channel Mix Sync"] },
        agents: [
          { title: "Guest Concierge", subtitle: "CX Agent", icon: <Zap className="w-6 h-6" />, details: ["Instant Multi-language Support", "Pre-arrival Nurture", "Service Upsells"] },
          { title: "Housekeep AI", subtitle: "Ops Agent", icon: <Repeat className="w-6 h-6" />, details: ["Room Turn Optimization", "Supply Chain Link", "Staff Load Balance"] },
          { title: "Loyalty Engine", subtitle: "Success Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Preference Personalization", "Review Generation", "Direct Booking Loops"] }
        ],
        infra: { title: "PMS Intelligence Core", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    finance: {
      title: "Finance & FinTech",
      subtitle: "Capital Intelligence Network",
      nodes: {
        brain: { title: "Risk Oracle", subtitle: "Governance Controller", icon: <LineChart className="w-6 h-6" />, details: ["Market Volatility Feed", "Anomaly Detection", "Portfolio Balancing"] },
        agents: [
          { title: "Fraud Guard", subtitle: "Security Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Real-time Triage", "Pattern Recognition", "Alert Automation"] },
          { title: "Wealth Bot", subtitle: "Advisory Agent", icon: <Bot className="w-6 h-6" />, details: ["Personalized Strategy", "Tax Optimization Feed", "Balance Allocation"] },
          { title: "KYC/AML Bot", subtitle: "Compliance Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Auto-verification", "Conflict Sync", "Audit Trail Gen"] }
        ],
        infra: { title: "Encrypted Ledger Stream", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    legal: {
      title: "Legal & Compliance",
      subtitle: "Juris Autonomy Protocol",
      nodes: {
        brain: { title: "Case Strategist", subtitle: "Knowledge Controller", icon: <LineChart className="w-6 h-6" />, details: ["Precedent Analytics", "Risk Scoring", "Outcome Prediction"] },
        agents: [
          { title: "Discovery AI", subtitle: "Research Agent", icon: <Bot className="w-6 h-6" />, details: ["Contract Triage", "Pattern Extraction", "Document Parsing"] },
          { title: "Drafting Engine", subtitle: "Production Agent", icon: <Repeat className="w-6 h-6" />, details: ["Clause Bank Sync", "Consistency Check", "Signature Routing"] },
          { title: "Conflict Guard", subtitle: "Ethics Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Auto-Check Loops", "Compliance Monitoring", "Disclosure Sync"] }
        ],
        infra: { title: "Private Juris Data Lake", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    },
    creative: {
      title: "Creative & Media Agency",
      subtitle: "Content Velocity Matrix",
      nodes: {
        brain: { title: "Brand Oracle", subtitle: "Creative Controller", icon: <TrendingUp className="w-6 h-6" />, details: ["Trend Attribution", "Campaign ROI Sync", "Audience Scoring"] },
        agents: [
          { title: "Content Engine", subtitle: "Production Agent", icon: <Zap className="w-6 h-6" />, details: ["Asset Repurposing", "Multi-format Gen", "Style Guide Link"] },
          { title: "Media Optimizer", subtitle: "Growth Agent", icon: <Repeat className="w-6 h-6" />, details: ["A/B Variation Gen", "Spend Triage", "Placement Sync"] },
          { title: "Success Analyst", subtitle: "Client Agent", icon: <ShieldCheck className="w-6 h-6" />, details: ["Automated Briefing", "Sentiment Loops", "Expansion Trigger"] }
        ],
        infra: { title: "Unified Asset Memory", subtitle: "Core Layer", icon: <Database className="w-4 h-4" /> }
      }
    }
  }

  const current = industries[activeIndustry]

  return (
    <section className="py-24 bg-[#FAFAF8] text-black font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Industry Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {(Object.keys(industries) as Industry[]).map((ind) => (
            <button
              key={ind}
              onClick={() => setActiveIndustry(ind)}
              className={`px-8 py-3 border-2 font-bebas text-xl uppercase tracking-widest transition-all ${
                activeIndustry === ind 
                ? "bg-black text-white border-black" 
                : "bg-white text-black border-black/10 hover:border-[#D90019]"
              }`}
            >
              {ind.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          ))}
        </div>

        <div className="relative border-x border-b border-black/5 p-12 bg-white/50 backdrop-blur-sm">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          <div className="relative text-center mb-16">
            <p className="text-[#D90019] font-bold tracking-[0.5em] uppercase text-[12px] mb-4">NANO BANANA PROTOCOL — {activeIndustry}</p>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tighter leading-none mb-2">{current.title}</h2>
            <p className="font-inter text-gray-400 font-light text-xl italic">{current.subtitle}</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndustry}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="space-y-0"
              >
                {/* Level 1: The Brain */}
                <div className="max-w-md mx-auto">
                  <Node 
                    title={current.nodes.brain.title} 
                    subtitle={current.nodes.brain.subtitle}
                    type="brain"
                    icon={current.nodes.brain.icon}
                    details={current.nodes.brain.details}
                  />
                </div>

                <div className="grid grid-cols-3 w-full">
                    <div className="border-r-2 border-[#D90019]/20 h-10 ml-[50%]" />
                    <div className="h-10 border-t-2 border-[#D90019]/20" />
                    <div className="border-l-2 border-[#D90019]/20 h-10 mr-[50%]" />
                </div>

                {/* Level 2: The Agents */}
                <div className="grid md:grid-cols-3 gap-8">
                  {current.nodes.agents.map((agent: any, i: number) => (
                    <Node 
                      key={i}
                      title={agent.title}
                      subtitle={agent.subtitle}
                      type="agent"
                      icon={agent.icon}
                      details={agent.details}
                    />
                  ))}
                </div>

                <ConnectionLine />

                {/* Level 3: Infrastructure */}
                <div className="max-w-sm mx-auto">
                  <Node 
                    title={current.nodes.infra.title}
                    subtitle={current.nodes.infra.subtitle}
                    type="infra"
                    icon={current.nodes.infra.icon}
                  />
                </div>

                <ConnectionLine />

                {/* Level 4: Humans */}
                <div className="max-w-xs mx-auto">
                  <Node 
                    title="Executive Oversight"
                    subtitle="Human-in-the-Loop"
                    type="human"
                    icon={<UserCircle2 className="w-6 h-6" />}
                    details={["Strategic Approval", "Governance Link", "Exception Handling"]}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Industrial Sidebar Meta */}
          <div className="hidden lg:block absolute right-6 top-1/2 -rotate-90 translate-x-1/2 origin-center">
            <p className="text-[10px] font-bold font-mono tracking-[0.5em] text-black/10 uppercase">
              DECENTRALIZED ARCHITECTURE // V-2.0.4 // NANO_BANANA_SYSTEMS
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 p-10 border-2 border-black">
          <div className="max-w-xl">
             <h3 className="font-bebas text-4xl uppercase mb-4">Total System Autonomy</h3>
             <p className="text-gray-500 font-inter leading-relaxed">
               This infrastructure allows your business to self-regulate, self-optimize, and self-heal. 
               The Executive AI doesn't just process data; it executes strategy across your fleet of specialized agents.
             </p>
          </div>
          <div className="flex-shrink-0">
             <button className="group px-10 py-5 bg-[#D90019] text-white font-bebas text-2xl uppercase tracking-widest flex items-center gap-4 hover:bg-black transition-colors">
               Deploy Infrastructure <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
             </button>
          </div>
        </div>

      </div>
    </section>
  )
}
