"use client"

import { useEffect } from "react"

interface PrintReportProps {
  formData: any
  auditScore: number
}

function parseChurnPct(v: string): number {
  if (v === '20+') return 0.25; if (v === '10-20') return 0.15; if (v === '5-10') return 0.07; if (v === 'under-5') return 0.03; return 0.10
}
function parseProductPrice(v: string): number {
  if (v === '5k+') return 7500; if (v === '1k-5k') return 3000; if (v === '500-1k') return 750; if (v === '100-500') return 300; if (v === 'recurring') return 100; return 50
}
function parseListSize(v: string): number {
  if (v === '50k+') return 75000; if (v === '10k-50k') return 30000; if (v === '5k-10k') return 7500; if (v === '1k-5k') return 3000; return 500
}
function fmt$(n: number): string {
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`; if (n >= 1000) return `$${(n/1000).toFixed(0)}K`; return `$${Math.round(n)}`
}

function calcSub(fd: any) {
  // Revenue
  let revenue = 50
  if (fd.revenueTrend === 'Growing') revenue += 25
  else if (fd.revenueTrend === 'Declining') revenue -= 25
  if (fd.profitMargin === '60+') revenue += 15
  else if (fd.profitMargin === '40-60') revenue += 10
  else if (fd.profitMargin === 'under-20') revenue -= 10
  else if (fd.profitMargin === 'negative') revenue -= 20
  revenue = Math.max(0, Math.min(100, revenue))

  // Automation
  let automation = 0
  if (fd.percentAutomated === '60+') automation = 85
  else if (fd.percentAutomated === '30-60') automation = 60
  else if (fd.percentAutomated === 'under-30') automation = 35
  else if (fd.percentAutomated === 'none') automation = 15
  if (fd.onboardingAutomated === 'Yes') automation += 10
  else if (fd.onboardingAutomated === 'Partially') automation += 5
  automation = Math.max(0, Math.min(100, automation))

  // Acquisition
  let acquisition = 50
  if (fd.conversionRate === '10+') acquisition = 90
  else if (fd.conversionRate === '5-10') acquisition = 75
  else if (fd.conversionRate === '3-5') acquisition = 55
  else if (fd.conversionRate === '1-3') acquisition = 35
  else if (fd.conversionRate === 'under-1') acquisition = 15
  acquisition = Math.max(0, Math.min(100, acquisition))

  // Retention
  let retention = 50
  if (fd.churnRate === 'under-5') retention = 85
  else if (fd.churnRate === '5-10') retention = 60
  else if (fd.churnRate === '10-20') retention = 35
  else if (fd.churnRate === '20+') retention = 15
  retention = Math.max(0, Math.min(100, retention))

  // Time
  let time = 50
  if (fd.twoWeeksOff === 'Yes') time = 80
  else if (fd.twoWeeksOff === 'Maybe') time = 45
  else time = 20
  time = Math.max(0, Math.min(100, time))

  return { Revenue: revenue, Automation: automation, Acquisition: acquisition, Retention: retention, Time: time }
}

function quickWins(fd: any): string[] {
  const w: string[] = []
  if (fd.onboardingAutomated !== 'Yes') w.push("Set up automated onboarding emails — reduce early churn by 30%+")
  if (fd.churnRate === '20+' || fd.churnRate === '10-20') w.push("Launch a win-back email campaign to churned users — recover 10-20% lost revenue")
  if (fd.twoWeeksOff === 'No') w.push("Delegate email triage and support to AI — save 5-10 hrs/week")
  if (fd.percentAutomated === 'none' || fd.percentAutomated === 'under-30') w.push("Connect top 3 tools with Zapier/Make — eliminate 80% manual workflows")
  if (fd.supportHoursPerWeek === '10+' || fd.supportHoursPerWeek === '5-10') w.push("Add AI chatbot trained on your content — handle 80% of support automatically")
  if (fd.contentCreationHours === '20+' || fd.contentCreationHours === '10-20') w.push("Use AI to repurpose long-form content into social posts and emails")
  w.push("Create a real-time KPI dashboard — spot churn and engagement issues early")
  w.push("Segment your email list by engagement and send targeted re-activation campaigns")
  return w.slice(0, 5)
}

export function AuditReportPrint({ formData, auditScore }: PrintReportProps) {
  const sub = calcSub(formData)
  const wins = quickWins(formData)
  const churnPct = parseChurnPct(formData.churnRate)
  const price = parseProductPrice(formData.productPricePoint)
  const listSize = parseListSize(formData.listSize)
  const churnLossAnnual = Math.round(listSize * churnPct * price)
  const supportHrs = formData.supportHoursPerWeek === '10+' ? 12 : formData.supportHoursPerWeek === '5-10' ? 7 : 2
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  useEffect(() => {
    const timer = setTimeout(() => window.print(), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style jsx global>{`
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          @page { margin: 0.75in; }
        }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 p-8 max-w-3xl mx-auto font-sans">
        {/* Print button */}
        <div className="no-print mb-6 flex gap-3">
          <button onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700">
            Print / Save as PDF
          </button>
          <button onClick={() => window.close()}
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300">
            Close
          </button>
        </div>

        {/* Header */}
        <div className="border-b-2 border-blue-600 pb-6 mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-1">ElianaTech</h1>
          <h2 className="text-xl text-gray-600">Automation Audit Report</h2>
          <p className="text-gray-500 mt-2">
            Prepared for <strong>{formData.companyName || formData.fullName}</strong> · {today}
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-8 border">
          <div className="text-6xl font-bold text-blue-600 mb-2">{auditScore}<span className="text-2xl text-gray-400">/100</span></div>
          <p className="text-lg text-gray-600">
            {auditScore < 40 ? "Significant untapped automation potential identified." : auditScore < 70 ? "Strong foundation with clear optimization opportunities." : "Above average — ready for advanced automation systems."}
          </p>
        </div>

        {/* Score Breakdown */}
        <h3 className="text-xl font-bold mb-4">Score Breakdown</h3>
        <div className="space-y-3 mb-8">
          {Object.entries(sub).map(([cat, score]) => (
            <div key={cat} className="flex items-center gap-4">
              <span className="w-28 text-sm font-medium text-gray-600">{cat}</span>
              <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{
                  width: `${score}%`,
                  backgroundColor: score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444'
                }} />
              </div>
              <span className="w-10 text-right font-bold">{score}</span>
            </div>
          ))}
        </div>

        {/* Top Opportunities */}
        <h3 className="text-xl font-bold mb-4">Top Automation Opportunities</h3>
        <div className="space-y-4 mb-8">
          {(formData.onboardingAutomated === 'No' || formData.onboardingAutomated === 'Partially') && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">Automated Onboarding</h4>
              <p className="text-sm text-gray-600 mt-1">Manual onboarding creates bottlenecks and inconsistent experiences. AI-driven sequences can activate users 3x faster.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: 3x faster activation · Timeline: 2-3 weeks</p>
            </div>
          )}
          {(formData.churnRate === '20+' || formData.churnRate === '10-20') && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">Churn Prevention Engine</h4>
              <p className="text-sm text-gray-600 mt-1">Your {formData.churnRate}% churn rate is costing an estimated <strong>{fmt$(churnLossAnnual)}/year</strong>. Automated health scoring and re-engagement can cut churn by 30-50%.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: {fmt$(churnLossAnnual * 0.3)}/year saved · Timeline: 3-4 weeks</p>
            </div>
          )}
          {(formData.supportHoursPerWeek === '10+' || formData.supportHoursPerWeek === '5-10') && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">AI-Powered Support</h4>
              <p className="text-sm text-gray-600 mt-1">Spending {formData.supportHoursPerWeek} hrs/week on support. An AI assistant can handle 80% of questions instantly.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: {Math.round(supportHrs * 0.8 * 4)} hrs/month freed · Timeline: 2-3 weeks</p>
            </div>
          )}
          {(formData.percentAutomated === 'none' || formData.percentAutomated === 'under-30') && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">Workflow Automation Hub</h4>
              <p className="text-sm text-gray-600 mt-1">With most processes still manual, 15-20 hrs/week can be recovered through connected workflows.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: 15-20 hrs/week saved · Timeline: 3-4 weeks</p>
            </div>
          )}
        </div>

        {/* 90-Day Roadmap */}
        <h3 className="text-xl font-bold mb-4">90-Day Automation Roadmap</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { phase: "Days 1-14", title: "Install & Configure", items: ["Audit tech stack & integrations", "Automated onboarding sequences", "AI support chatbot setup"] },
            { phase: "Days 15-30", title: "Optimize & Tune", items: ["A/B test email sequences", "Churn prediction automation", "Content repurposing pipeline"] },
            { phase: "Days 31-90", title: "Scale & Grow", items: [`Target: ${fmt$(Math.round(churnLossAnnual * 0.3))}/yr saved from churn`, `${Math.round(supportHrs * 0.8 * 4)}+ hrs/mo freed`, "Owner-optional operations"] },
          ].map((p, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="text-xs text-gray-500 font-mono">{p.phase}</div>
              <h4 className="font-bold mb-2">{p.title}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Wins */}
        <h3 className="text-xl font-bold mb-4">Quick Wins — This Week</h3>
        <ol className="list-decimal list-inside space-y-2 mb-8 text-sm text-gray-700">
          {wins.map((w, i) => <li key={i}>{w}</li>)}
        </ol>

        {/* CTA */}
        <div className="border-t-2 border-blue-600 pt-6 mt-8 text-center">
          <p className="text-lg font-bold text-blue-600 mb-2">Ready to implement? Let&apos;s talk.</p>
          <p className="text-gray-600">Book your free strategy call at <strong>elianatech.com/audit</strong></p>
          <p className="text-gray-400 text-sm mt-4">&copy; {new Date().getFullYear()} ElianaTech &middot; elianatech.com</p>
        </div>
      </div>
    </>
  )
}
