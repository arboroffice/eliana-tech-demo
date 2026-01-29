'use client'

import { useEffect, useState } from 'react'
import { generateProposal, Proposal } from '@/lib/proposal-generator'
import { calculateAuditScore } from '@/lib/audit-analyzer'

export default function ProposalPage() {
  const [proposal, setProposal] = useState<Proposal | null>(null)

  useEffect(() => {
    const savedData = localStorage.getItem('auditFormData')
    if (savedData) {
      const formData = JSON.parse(savedData)
      const auditScore = calculateAuditScore(formData)
      setProposal(generateProposal(formData, auditScore))
    }
  }, [])

  if (!proposal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">No Audit Data Found</h2>
          <p className="text-gray-600 mb-6">Please complete the AI audit first to generate your proposal.</p>
          <a href="/audit" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
            Take the Audit →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-lg"
        >
          🖨️ Print / Save PDF
        </button>
        <a
          href="https://cal.com/mia-louviere-a4n2hk/30min"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 shadow-lg"
        >
          📞 Book a Call
        </a>
      </div>

      {/* Header */}
      <div className="bg-slate-800 text-white py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-300 font-semibold mb-2">CUSTOM PROPOSAL</p>
          <h1 className="text-4xl font-bold mb-4">
            AI Automation Proposal for {proposal.companyName}
          </h1>
          <div className="flex flex-wrap gap-6 text-slate-300 text-sm mt-6">
            <span>Prepared for: <strong className="text-white">{proposal.clientName}</strong></span>
            <span>Industry: <strong className="text-white">{proposal.industry}</strong></span>
            <span>Date: <strong className="text-white">{proposal.date}</strong></span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 py-12 space-y-12">
        {/* Pain Points */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">The Challenge</h2>
          <p className="text-gray-600 mb-4">Based on your AI readiness audit, here are the key challenges holding {proposal.companyName} back:</p>
          <ul className="space-y-2">
            {proposal.painPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-red-500 mt-1">⚠️</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recommended Package */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Recommended Solution</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2">
              {proposal.recommendedPackage === 'ai-coo' ? '🤖 AI COO Package' : '🏗️ Full Infrastructure Package'}
            </h3>
            <p className="text-blue-700">
              {proposal.recommendedPackage === 'ai-coo'
                ? 'A complete AI operations officer that manages leads, follow-ups, reviews, and reporting — 24/7.'
                : 'End-to-end digital infrastructure: website, CRM, content strategy, AI automation, and ongoing management.'}
            </p>
          </div>
        </section>

        {/* Systems */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">What We'll Build</h2>
          <div className="space-y-4">
            {proposal.systems.map((system, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-800">{system.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{system.description}</p>
                  </div>
                  <span className="text-green-600 text-sm font-semibold whitespace-nowrap ml-4">{system.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Implementation Timeline</h2>
          <div className="space-y-6">
            {proposal.timeline.map((phase, i) => (
              <div key={i} className="border-l-4 border-blue-500 pl-6">
                <h4 className="font-bold text-slate-800">{phase.phase}</h4>
                <p className="text-blue-600 text-sm font-medium mb-2">{phase.weeks}</p>
                <ul className="space-y-1">
                  {phase.deliverables.map((d, j) => (
                    <li key={j} className="text-gray-600 text-sm flex items-center gap-2">
                      <span className="text-green-500">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ROI */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Expected ROI</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {proposal.roi.map((item, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-green-50' : 'bg-white'}>
                    <td className="px-6 py-3 font-medium text-gray-700">{item.metric}</td>
                    <td className="px-6 py-3 text-right font-bold text-green-700">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Investment */}
        <section>
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Investment</h2>
          <div className="bg-slate-800 text-white rounded-xl p-8 text-center">
            <p className="text-slate-300 mb-2">Total Investment</p>
            <p className="text-4xl font-bold mb-4">{proposal.investment}</p>
            <p className="text-slate-300 text-sm max-w-md mx-auto">{proposal.guarantee}</p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 print:hidden">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-6">Book a call to discuss this proposal and get your questions answered.</p>
          <a
            href="https://cal.com/mia-louviere-a4n2hk/30min"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700"
          >
            Book Your Strategy Call →
          </a>
        </section>
      </div>

      {/* Print Footer */}
      <div className="hidden print:block border-t border-gray-200 py-8 px-8 text-center text-gray-500 text-sm">
        <p>ElianaTech &middot; elianatech.com &middot; Book a call: cal.com/mia-louviere-a4n2hk/30min</p>
      </div>
    </div>
  )
}
