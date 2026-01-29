"use client"

import { useEffect } from "react"

interface PrintReportProps {
  formData: any
  auditScore: number
}

function parseMissedCalls(v: string): number {
  if (v === '30+') return 35; if (v === '10-30') return 20; if (v === '5-10') return 7; return 3
}
function parseDealSize(v: string): number {
  if (v === 'enterprise') return 50000; if (v === 'high') return 15000; if (v === 'medium') return 5000; if (v === 'small') return 500; return 100
}
function parseConv(v: string): number {
  if (v === '50%+') return 0.55; if (v === '30-50%') return 0.4; if (v === '20-30%') return 0.25; if (v === '10-20%') return 0.15; return 0.07
}
function fmt$(n: number): string {
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`; if (n >= 1000) return `$${(n/1000).toFixed(0)}K`; return `$${Math.round(n)}`
}

function calcSub(fd: any) {
  return {
    Revenue: fd.revenueTrend === 'Growing' ? 78 : fd.revenueTrend === 'Flat' ? 48 : 22,
    Automation: fd.percentAutomated === '>70%' ? 85 : fd.percentAutomated === '30-70%' ? 58 : fd.percentAutomated === '<30%' ? 32 : 12,
    Sales: fd.conversionRate === '50%+' ? 88 : fd.conversionRate === '30-50%' ? 68 : fd.conversionRate === '20-30%' ? 48 : fd.conversionRate === '10-20%' ? 28 : 14,
    Retention: fd.repeatCustomers === '50%+' ? 85 : fd.repeatCustomers === '25-50%' ? 62 : fd.repeatCustomers === '10-25%' ? 38 : 18,
    Time: fd.twoWeeksOff === 'Yes' ? 82 : fd.twoWeeksOff === 'Maybe' ? 48 : 18,
  }
}

function quickWins(fd: any): string[] {
  const w: string[] = []
  if (fd.systematicFollowUp !== 'Yes') w.push("Set up automated follow-up sequences — increase conversions by 50%")
  if (fd.askReviewsSystem === 'none' || fd.askReviewsSystem === 'manual') w.push("Automate review requests after every job — 2× reviews in 30 days")
  if (fd.twoWeeksOff === 'No') w.push("Delegate email triage to AI — save 5-10 hrs/week")
  if (fd.percentAutomated === 'none' || fd.percentAutomated === '<30%') w.push("Connect top 3 tools with automation — eliminate 80% manual work")
  if (fd.missedCalls !== '0-5') w.push("Install AI receptionist — capture leads 24/7")
  w.push("Create a real-time KPI dashboard")
  w.push("Add chatbot to website for instant lead capture")
  return w.slice(0, 5)
}

export function AuditReportPrint({ formData, auditScore }: PrintReportProps) {
  const sub = calcSub(formData)
  const wins = quickWins(formData)
  const missed = parseMissedCalls(formData.missedCalls)
  const deal = parseDealSize(formData.dealSize)
  const conv = parseConv(formData.conversionRate)
  const lostAnnual = missed * 52 * deal * conv
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
          <h2 className="text-xl text-gray-600">AI Readiness Audit Report</h2>
          <p className="text-gray-500 mt-2">
            Prepared for <strong>{formData.companyName || formData.fullName}</strong> · {today}
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-gray-50 rounded-xl p-8 text-center mb-8 border">
          <div className="text-6xl font-bold text-blue-600 mb-2">{auditScore}<span className="text-2xl text-gray-400">/100</span></div>
          <p className="text-lg text-gray-600">
            {auditScore < 40 ? "Significant untapped AI potential identified." : auditScore < 70 ? "Strong foundation with clear optimization opportunities." : "Above average — ready for advanced AI systems."}
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
        <h3 className="text-xl font-bold mb-4">Top AI Opportunities</h3>
        <div className="space-y-4 mb-8">
          {formData.missedCalls !== '0-5' && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">AI-Powered Call Capture</h4>
              <p className="text-sm text-gray-600 mt-1">Missing ~{missed} calls/week × {fmt$(deal)} avg deal = <strong>{fmt$(lostAnnual)} lost annually</strong></p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: {fmt$(lostAnnual/12)}/month · Timeline: 2-3 weeks</p>
            </div>
          )}
          {formData.systematicFollowUp !== 'Yes' && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">Automated Follow-Up Sequences</h4>
              <p className="text-sm text-gray-600 mt-1">No systematic follow-up means leads go cold. AI nurture can recover 30-50% more conversions.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: 30-50% more conversions · Timeline: 2-4 weeks</p>
            </div>
          )}
          {(formData.percentAutomated === 'none' || formData.percentAutomated === '<30%') && (
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-blue-600">Workflow Automation Hub</h4>
              <p className="text-sm text-gray-600 mt-1">With low automation, 15-25 hrs/week can be recovered through connected workflows.</p>
              <p className="text-sm text-emerald-600 mt-1">Potential impact: {fmt$(20*50*4)}/month in saved labor · Timeline: 3-4 weeks</p>
            </div>
          )}
        </div>

        {/* 90-Day Roadmap */}
        <h3 className="text-xl font-bold mb-4">90-Day AI Roadmap</h3>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { phase: "Days 1-14", title: "Install & Configure", items: ["AI call capture setup", "CRM integration", "Follow-up automation"] },
            { phase: "Days 15-30", title: "Optimize & Tune", items: ["Tune scripts from data", "A/B test sequences", "Team training"] },
            { phase: "Days 31-90", title: "Scale & Grow", items: [`Target: ${fmt$(missed*4*deal*conv)}/mo recovered`, "Expand to new channels", "Owner-optional ops"] },
          ].map((p, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="text-xs text-gray-500 font-mono">{p.phase}</div>
              <h4 className="font-bold mb-2">{p.title}</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {p.items.map((it, j) => <li key={j}>✓ {it}</li>)}
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
          <p className="text-gray-400 text-sm mt-4">© {new Date().getFullYear()} ElianaTech · elianatech.com</p>
        </div>
      </div>
    </>
  )
}
