"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

const CATEGORIES = [
  {
    label: "Lead Generation",
    description: "Get people to find you and raise their hand. Stop losing leads before they even reach you.",
    systems: [
      { name: "AI Phone Answerer", what: "Answers calls 24/7, books appointments, takes messages, never misses a lead.", price: "$3,000+" },
      { name: "Missed Call Text-Back", what: "Texts back instantly when a call is missed so the lead does not go cold.", price: "$1,500+" },
      { name: "Lead Catcher", what: "Captures leads from forms, chat widgets, and pop-ups before they bounce.", price: "$2,500+" },
      { name: "Lead Chaser", what: "Automated follow-up via email, SMS, and calls until they book or say no.", price: "$3,000+" },
      { name: "Dead Lead Reviver", what: "Re-engages old leads who went cold and brings them back into the pipeline.", price: "$2,500+" },
      { name: "Referral Engine", what: "Automates referral requests and tracks them so word-of-mouth becomes a system.", price: "$2,000+" },
      { name: "Lead Gen Funnel", what: "Landing pages, ads integration, and conversion tracking built to convert.", price: "$5,000+" },
      { name: "Multi-Channel Lead System", what: "Leads from Google, social, email, and referrals all flowing into one pipeline.", price: "$7,500+" },
      { name: "Speed-to-Lead Responder", what: "Responds to every inquiry within seconds automatically — before your competitor does.", price: "$2,000+" },
      { name: "Content and Posting Automation", what: "Creates and schedules social content automatically so your brand stays visible.", price: "$3,500+" },
    ],
  },
  {
    label: "Sales and Conversion",
    description: "Turn leads into paying customers without chasing every deal by hand.",
    systems: [
      { name: "Sales Pipeline + CRM", what: "Tracks every lead, stage, and conversation in one place so nothing falls through.", price: "$2,500+" },
      { name: "Follow-Up Automation", what: "Multi-touch follow-up sequences across email, SMS, and calls on autopilot.", price: "$3,000+" },
      { name: "Proposal and Estimate System", what: "Generates and sends proposals and estimates in minutes instead of hours.", price: "$3,000+" },
      { name: "Contract and Signature System", what: "Sends contracts and collects e-signatures automatically with no back-and-forth.", price: "$2,000+" },
      { name: "Sales Script System", what: "AI-assisted objection handling and call frameworks so the team closes more.", price: "$2,000+" },
      { name: "Evergreen Sales Funnel", what: "Sells products or services 24/7 without live launching or manual effort.", price: "$5,000+" },
      { name: "Lead Scoring System", what: "Ranks leads by likelihood to buy so the team focuses on the best ones first.", price: "$3,000+" },
      { name: "Appointment Setter", what: "AI books discovery calls and consultations automatically so the calendar fills itself.", price: "$2,500+" },
    ],
  },
  {
    label: "Operations",
    description: "Remove the manual work running your business so your team can focus on what matters.",
    systems: [
      { name: "Operation Infrastructure Installation", what: "Automates handoffs, approvals, and task routing so nothing waits on a person.", price: "$5,000+" },
      { name: "Industry Playbooks", what: "AI-native playbooks and SOPs so the team stops guessing and the founder stops repeating.", price: "$3,000+" },
      { name: "AI Scheduling System", what: "Handles booking, rescheduling, reminders, and no-shows without staff involvement.", price: "$2,500+" },
      { name: "Automated Invoicing", what: "Sends invoices, tracks payments, and chases late payers automatically.", price: "$3,000+" },
      { name: "Client Onboarding", what: "Welcome sequence, access setup, and first steps delivered on autopilot.", price: "$2,500+" },
      { name: "Internal AI Knowledge Base", what: "AI assistant that answers team questions about processes, policies, and history.", price: "$4,000+" },
      { name: "Capacity Planning System", what: "Shows who has bandwidth and where the bottlenecks are before they cause problems.", price: "$4,000+" },
      { name: "Meeting Notes Automation", what: "Records calls, summarizes notes, and assigns action items automatically.", price: "$2,000+" },
      { name: "Delegation System", what: "Routes tasks to the right person based on rules and availability.", price: "$3,000+" },
      { name: "Backend Admin Dashboard", what: "One screen showing every metric that matters so the owner has full visibility.", price: "$4,000+" },
    ],
  },
]

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <section className="mb-24">
          <div className="eyebrow">The Skill Library</div>
          <h1 className="s-title mb-12">
            The Coworker <br />
            <span className="r">Skill Library</span>
          </h1>
          <p className="text-sm text-[#555] max-w-2xl leading-relaxed mb-12">
            Every business has bottlenecks. We remove them by installing specialized skills into your business operating system.
            The audit tells us where the friction is. The install makes it disappear.
          </p>
          <Link href="/audit" className="btn-red inline-block">
            Apply for an AI Install
          </Link>
        </section>

        {CATEGORIES.map((cat, i) => (
          <section key={i} className="mb-24">
            <div className="category-header mb-8">
              <span className="cat-num">Skill Set {String(i + 1).padStart(2, "0")}</span>
              <h2 className="cat-title">{cat.label}</h2>
              <p className="cat-desc">{cat.description}</p>
            </div>

            <div className="systems-grid">
              {cat.systems.map((sys, j) => (
                <div key={j} className="system-card">
                  <h3 className="system-name">{sys.name}</h3>
                  <p className="system-what">{sys.what}</p>
                  <span className="system-price">{sys.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />

      <style jsx>{`
        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #D90019;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: #D90019;
        }

        .s-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #0C0C0C;
        }

        .r {
          color: #D90019;
        }

        .btn-red {
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #D90019;
          color: #FAFAF8 !important;
          padding: 16px 32px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .btn-red:hover {
          opacity: 0.8;
        }

        .category-header {
          border-bottom: 1px solid #CCCBC5;
          padding-bottom: 24px;
        }

        .cat-num {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #888;
          display: block;
          margin-bottom: 12px;
        }

        .cat-title {
          font-family: var(--font-syne), sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0C0C0C;
          margin-bottom: 12px;
        }

        .cat-desc {
          font-size: 14px;
          color: #555;
          max-width: 600px;
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1px;
          background: #CCCBC5;
        }

        .system-card {
          background: #FAFAF8;
          padding: 32px;
          transition: background 0.2s;
        }

        .system-card:hover {
          background: #F2F1ED;
        }

        .system-name {
          font-family: var(--font-syne), sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #0C0C0C;
          margin-bottom: 12px;
        }

        .system-what {
          font-size: 13px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .system-price {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .systems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
