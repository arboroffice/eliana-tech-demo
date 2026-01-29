"use client"

import { motion } from "framer-motion"

const caseStudies = [
  {
    type: "Marketing Agency",
    revenue: "$3.2M",
    newRevenue: "$5.1M",
    problem: "Drowning in manual client reporting, social scheduling, and campaign optimization. Team burned out, client churn rising.",
    installed: "AI Content Engine, Automated Reporting Dashboard, AI Campaign Optimizer, Smart Client Communication System",
    results: [
      "Saved 94 hours/week across the team",
      "Revenue grew from $3.2M to $5.1M in 11 months",
      "Client retention increased from 71% to 94%",
      "Onboarded 22 new clients without hiring"
    ],
    timeline: "8 weeks to full deployment",
    roi: "412% ROI",
    before: ["Manual reports taking 15+ hrs/week", "3 missed deadlines/month", "71% client retention", "$3.2M revenue"],
    after: ["Auto-generated reports in seconds", "Zero missed deadlines", "94% client retention", "$5.1M revenue"]
  },
  {
    type: "Law Firm",
    revenue: "$8M",
    newRevenue: "$12.4M",
    problem: "Intake process was slow and inconsistent. Leads fell through the cracks. Attorneys spending time on unqualified prospects.",
    installed: "AI Intake System, Lead Scoring Engine, Automated Follow-Up Sequences, Smart Case Assignment",
    results: [
      "3x lead conversion rate (8% → 24%)",
      "Average response time dropped from 4.2 hours to 90 seconds",
      "Attorneys freed up 12 hours/week each",
      "Revenue increased 55% year-over-year"
    ],
    timeline: "6 weeks to full deployment",
    roi: "680% ROI",
    before: ["4.2 hour avg response time", "8% lead conversion", "Attorneys doing intake calls", "$8M revenue"],
    after: ["90 second avg response time", "24% lead conversion", "AI handles all intake", "$12.4M revenue"]
  },
  {
    type: "E-commerce Brand",
    revenue: "$12M",
    newRevenue: "$17.6M",
    problem: "Content creation bottleneck killing organic growth. Product descriptions, blog posts, and social content couldn't keep pace with catalog.",
    installed: "AI Content Engine, SEO Optimization System, Automated Product Description Generator, Social Content Pipeline",
    results: [
      "47% increase in organic traffic in 6 months",
      "Content output went from 12 to 180 pieces/month",
      "Average order value increased 23%",
      "Revenue grew from $12M to $17.6M"
    ],
    timeline: "5 weeks to full deployment",
    roi: "520% ROI",
    before: ["12 content pieces/month", "Stagnant organic traffic", "Generic product descriptions", "$12M revenue"],
    after: ["180 content pieces/month", "47% organic traffic increase", "AI-optimized descriptions", "$17.6M revenue"]
  },
  {
    type: "Home Services Company",
    revenue: "$4.5M",
    newRevenue: "$6.5M",
    problem: "Scheduling chaos, missed follow-ups, and no-shows costing hundreds of thousands. Dispatchers overwhelmed during peak season.",
    installed: "AI Dispatch System, Automated Scheduling & Follow-Up, Customer Communication Bot, Review Generation Engine",
    results: [
      "$2M revenue increase in first year",
      "No-show rate dropped from 18% to 3%",
      "Review volume increased 340%",
      "Dispatchers reduced from 4 to 1"
    ],
    timeline: "7 weeks to full deployment",
    roi: "890% ROI",
    before: ["18% no-show rate", "4 full-time dispatchers", "42 Google reviews", "$4.5M revenue"],
    after: ["3% no-show rate", "1 dispatcher + AI", "185 Google reviews", "$6.5M revenue"]
  },
  {
    type: "SaaS Company",
    revenue: "$18M",
    newRevenue: "$24M",
    problem: "Support tickets overwhelming the team. Onboarding drop-off at 40%. Churn increasing quarter over quarter.",
    installed: "AI Onboarding System, Intelligent Support Agent, Proactive Churn Detection, Automated Health Scoring",
    results: [
      "60% reduction in support tickets",
      "Onboarding completion rate: 58% → 89%",
      "Monthly churn dropped from 4.2% to 1.8%",
      "NPS score increased from 34 to 72"
    ],
    timeline: "10 weeks to full deployment",
    roi: "340% ROI",
    before: ["1,200+ support tickets/month", "58% onboarding completion", "4.2% monthly churn", "$18M ARR"],
    after: ["480 support tickets/month", "89% onboarding completion", "1.8% monthly churn", "$24M ARR"]
  },
  {
    type: "Real Estate Brokerage",
    revenue: "$6M",
    newRevenue: "$13.8M",
    problem: "Leads going cold because agents couldn't follow up fast enough. No system for nurturing long-term prospects.",
    installed: "AI Lead Nurture System, Automated Follow-Up Sequences, Smart Lead Routing, Market Update Engine",
    results: [
      "2.3x more closings year-over-year",
      "Lead response time: 6 hours → 2 minutes",
      "Database reactivation generated $1.4M in closed deals",
      "Agent productivity up 180%"
    ],
    timeline: "6 weeks to full deployment",
    roi: "760% ROI",
    before: ["6 hour avg lead response", "12% lead-to-closing rate", "Dead database of 4,000 leads", "$6M GCI"],
    after: ["2 minute avg lead response", "28% lead-to-closing rate", "Reactivated $1.4M from database", "$13.8M GCI"]
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
}

export function ResultsShowcase() {
  return (
    <div className="mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Industry Transformations</h2>
      <p className="text-lg text-slate-400 text-center mb-12 max-w-2xl mx-auto">
        Detailed breakdowns of what we installed and the results it produced.
      </p>
      <div className="space-y-12">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <div className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Case Study #{i + 1}</div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{study.type}</h3>
                <p className="text-slate-400 mt-1">Starting Revenue: {study.revenue}</p>
              </div>
              <div className="mt-4 md:mt-0 bg-blue-500/20 border border-blue-500/30 rounded-xl px-6 py-3 text-center">
                <div className="text-2xl font-bold text-blue-400">{study.roi}</div>
                <div className="text-xs text-slate-400">First Year</div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-red-400 mb-2">🔴 The Problem</h4>
              <p className="text-slate-300">{study.problem}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">⚡ What We Installed</h4>
              <p className="text-slate-300">{study.installed}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-green-400 mb-3">✅ Results</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {study.results.map((result, j) => (
                  <div key={j} className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-slate-200">
                    {result}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-red-400 mb-4">❌ Before</h4>
                <ul className="space-y-2">
                  {study.before.map((item, j) => (
                    <li key={j} className="text-slate-300 flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-green-400 mb-4">✅ After</h4>
                <ul className="space-y-2">
                  {study.after.map((item, j) => (
                    <li key={j} className="text-slate-300 flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-sm text-slate-500">⏱ Timeline: {study.timeline}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
