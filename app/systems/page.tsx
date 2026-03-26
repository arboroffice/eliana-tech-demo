"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

const CATEGORIES = [
  {
    label: "Autonomous Infrastructure",
    description: "Private server deployment that handles the core functions of your business without human intervention.",
    systems: [
      { name: "Lead Follow-up AI", what: "Autonomous agents that respond to every lead instantly and follow up until they close." },
      { name: "Content Creation Engine", what: "Systematic generation and deployment of high-level content tailored to your brand." },
      { name: "Financial Reporting Ops", what: "Real-time visibility into margins and performance via private dashboards." },
      { name: "Private Server Deployment", what: "Your own dedicated AI infrastructure for total data security and control." },
      { name: "Custom Integration Suite", what: "Connecting our automations into your existing software in just one week." },
      { name: "Monthly System Upgrades", what: "Continuous evolution of your AI agents with the latest industry playbooks." },
      { name: "Infinite Scalability Ops", what: "Systems built to handle 10x volume without adding human headcount." },
      { name: "Self-Sustaining Backend", what: "A complete operational engine that runs whether you are there or not." },
    ],
  },
  {
    label: "Lead Generation",
    description: "Get people to find you and raise their hand. Stop losing leads before they even reach you.",
    systems: [
      { name: "AI Phone Answerer", what: "Answers calls 24/7, books appointments, takes messages, never misses a lead." },
      { name: "Missed Call Text-Back", what: "Texts back instantly when a call is missed so the lead does not go cold." },
      { name: "Lead Catcher", what: "Captures leads from forms, chat widgets, and pop-ups before they bounce." },
      { name: "Dead Lead Reviver", what: "Re-engages old leads who went cold and brings them back into the pipeline." },
      { name: "Referral Engine", what: "Automates referral requests and tracks them so word-of-mouth becomes a system." },
    ],
  },
  {
    label: "Operations & Sales",
    description: "Remove the manual work running your business to focus on lifestyle-centric growth.",
    systems: [
      { name: "Industry Playbooks", what: "AI-native playbooks and SOPs so the team stops guessing." },
      { name: "Client Onboarding", what: "Welcome sequence, access setup, and first steps delivered on autopilot." },
      { name: "Sales Pipeline + CRM", what: "Tracks every lead, stage, and conversation in one place." },
      { name: "Contract and Signature System", what: "Collects e-signatures automatically with no back-and-forth." },
      { name: "Capacity Planning System", what: "Shows where the bottlenecks are before they cause problems." },
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
                  <span className="system-price">Contact for pricing</span>
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
