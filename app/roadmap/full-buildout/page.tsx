"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function FullBuildoutPage() {
  return (
    <div className="rm-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-container">
            <div className="rm-phase-tag">Phase 02 — Full Operational Architecture</div>
            <h1 className="rm-hero-h1">
              FULL<br />
              <span className="accent">BUILDOUT.</span>
            </h1>
            <p className="rm-hero-sub">
              Your foundation is live. Now we go deeper. Full operational architecture deployed across your entire company — every department, every workflow, every system unified under one intelligent infrastructure.
            </p>
            <div className="rm-hero-stats">
              <div className="rm-stat">
                <div className="rm-stat-num">Full</div>
                <div className="rm-stat-label">Automation</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">Full</div>
                <div className="rm-stat-label">Company Scope</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">Every</div>
                <div className="rm-stat-label">Department</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY GO DEEPER */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Reality</div>
            <h2 className="rm-heading">THE FOUNDATION WAS <span className="accent">JUST THE BEGINNING.</span></h2>

            <div className="rm-prose">
              <p>After the Build Program, you experienced something most founders never have: a business that runs parts of itself. Leads getting answered. Onboarding flowing. Systems humming in the background.</p>
              <p>And then you noticed the gap. The parts of your business that are still manual. The departments that are still disconnected. The growth ceiling that comes from having a partial system instead of a complete one.</p>
              <p>The Build Program gave you a taste. The Full Buildout gives you the full meal.</p>
              <p className="rm-highlight">This is not an upgrade. It is the difference between a pilot project and a company-wide transformation. Every department. Every workflow. Every system. One unified architecture.</p>
            </div>
          </div>
        </section>

        {/* WHAT GETS BUILT */}
        <section className="rm-section rm-alt">
          <div className="rm-container">
            <div className="rm-eyebrow">What Gets Built</div>
            <h2 className="rm-heading">COMPLETE OPERATIONAL <span className="accent">ARCHITECTURE.</span></h2>

            <div className="rm-grid-3">
              {[
                { n: "01", title: "SALES INFRASTRUCTURE", desc: "End-to-end AI sales pipeline. Lead scoring, qualification agents, automated follow-up sequences, proposal generation, pipeline management. Your sales operation runs like a machine — whether you are in the room or not." },
                { n: "02", title: "MARKETING ENGINE", desc: "Content systems, distribution automation, analytics dashboards, campaign management. Your marketing operates on infrastructure, not inspiration. Consistent output without consistent effort." },
                { n: "03", title: "OPERATIONS CENTER", desc: "Project management automation, client communication flows, delivery tracking, quality assurance systems. Every project runs through a system, not through your memory." },
                { n: "04", title: "SUPPORT & SUCCESS", desc: "AI-powered customer support, escalation routing, satisfaction monitoring, proactive outreach. Your clients feel taken care of 24/7 because they are." },
                { n: "05", title: "FINANCE & REPORTING", desc: "Automated invoicing, revenue tracking, expense categorization, real-time dashboards. You know exactly where your business stands at any moment — without asking anyone." },
                { n: "06", title: "ADVANCED AGENT NETWORK", desc: "Multi-agent systems that communicate across departments. Sales agents that trigger onboarding agents. Support agents that flag upsell opportunities. A network of AI that works as one organism." },
              ].map((item, i) => (
                <div key={i} className="rm-card-3">
                  <div className="rm-card-num-sm">{item.n}</div>
                  <h3 className="rm-card-title">{item.title}</h3>
                  <p className="rm-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="rm-statement">
          <div className="rm-statement-bg">SCALE</div>
          <div className="rm-container">
            <h2 className="rm-statement-h2">
              A partial system creates partial freedom.<br />
              <span className="accent">A complete system creates a company that runs itself.</span>
            </h2>
          </div>
        </section>

        {/* THE DIFFERENCE */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Difference</div>
            <h2 className="rm-heading">PARTIAL VS <span className="accent">COMPLETE.</span></h2>

            <div className="rm-diff-grid">
              {[
                { partial: "Sales is automated but onboarding is manual", complete: "Lead becomes client without you touching a thing" },
                { partial: "Marketing runs but sales does not follow up", complete: "Marketing feeds sales feeds onboarding — one flow" },
                { partial: "Support handles basics but escalations pile up", complete: "AI handles 90%, humans handle the 10% that matters" },
                { partial: "Reporting requires pulling from 5 tools", complete: "One dashboard, real-time, everything connected" },
                { partial: "You still check in daily to keep things moving", complete: "You check in weekly because nothing needs you" },
              ].map((item, i) => (
                <div key={i} className="rm-diff-row">
                  <div className="rm-diff-partial">
                    <span className="rm-diff-label rm-diff-label-red">Partial</span>
                    <p>{item.partial}</p>
                  </div>
                  <div className="rm-diff-arrow">→</div>
                  <div className="rm-diff-complete">
                    <span className="rm-diff-label rm-diff-label-green">Complete</span>
                    <p>{item.complete}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="rm-section rm-dark">
          <div className="rm-dark-grid" />
          <div className="rm-container">
            <div className="rm-eyebrow rm-eyebrow-light">Who This Is For</div>
            <h2 className="rm-heading rm-heading-light">FOUNDERS WHO SAW THE FUTURE <span className="accent">AND WANT ALL OF IT.</span></h2>

            <div className="rm-who-grid">
              {[
                "You completed the Build Program and saw what is possible",
                "You are scaling and complexity is outpacing your current systems",
                "You want every department operating on infrastructure, not effort",
                "You are ready to build a company that truly runs without you",
                "You understand that partial automation creates partial freedom",
              ].map((item, i) => (
                <div key={i} className="rm-who-item">
                  <Check size={16} className="rm-who-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="rm-who-close">
              The price range depends on complexity. A 3-person operation and a 30-person operation need different architectures. The audit tells us exactly what your business needs.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="rm-cta">
          <div className="rm-cta-grid" />
          <div className="rm-container rm-cta-content">
            <div className="rm-eyebrow rm-eyebrow-light">Next Step</div>
            <h2 className="rm-cta-h2">
              IT STARTS WITH <span className="accent">THE AUDIT.</span>
            </h2>
            <p className="rm-cta-sub">
              Whether you are graduating from the Build Program or coming in fresh, the audit maps your entire operation and shows us exactly where to build.
            </p>
            <Link href="/audit" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Get Your Free Audit <ArrowRight size={16} />
            </Link>
            <div className="rm-next-phase">
              <span>Next phase:</span>
              <Link href="/roadmap/ai-wing-retainer">AI Wing Retainer →</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .rm-page {
          --red: #D90019; --black: #0C0C0C; --white: #FAFAF8; --off: #F4F3EF;
          --dim: #888; --mid: #555; --border: #E4E3DE;
          background: var(--white); color: var(--black);
          font-family: var(--font-dm-mono), monospace; overflow-x: hidden;
        }
        .rm-container { max-width: 900px; margin: 0 auto; position: relative; z-index: 2; }
        .rm-eyebrow {
          font-size: 10px; letter-spacing: 0.4em; text-transform: uppercase;
          color: var(--red); display: flex; align-items: center; gap: 12px; margin-bottom: 24px;
        }
        .rm-eyebrow::before { content: ''; width: 28px; height: 2px; background: var(--red); }
        .rm-eyebrow-light { color: var(--red); }
        .accent { color: var(--red); }

        .rm-hero { padding: 180px 40px 100px; }
        .rm-phase-tag {
          font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--red); padding: 8px 18px;
          border: 1px solid rgba(217,0,25,0.2); background: rgba(217,0,25,0.04);
          display: inline-block; margin-bottom: 32px;
        }
        .rm-hero-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(64px, 12vw, 140px); line-height: 0.88;
          letter-spacing: 0.02em; color: var(--black); margin-bottom: 32px;
        }
        .rm-hero-sub { font-size: 15px; color: var(--mid); line-height: 1.9; max-width: 560px; margin-bottom: 48px; }
        .rm-hero-stats { display: flex; gap: 48px; }
        .rm-stat-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 48px; color: var(--red); line-height: 1;
        }
        .rm-stat-label {
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          color: var(--dim); margin-top: 4px;
        }

        .rm-section { padding: 100px 40px; border-top: 1px solid var(--border); }
        .rm-alt { background: var(--off); }
        .rm-heading {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(36px, 5vw, 72px); line-height: 0.92;
          letter-spacing: 0.02em; color: var(--black); margin-bottom: 48px;
        }
        .rm-heading-light { color: #fff; }

        .rm-prose { max-width: 680px; }
        .rm-prose p { font-size: 14px; color: var(--mid); line-height: 1.9; margin-bottom: 24px; }
        .rm-highlight {
          color: var(--black) !important; font-weight: 500;
          border-left: 2px solid var(--red); padding-left: 20px;
        }

        .rm-grid-3 {
          display: grid; grid-template-columns: 1fr 1fr 1fr;
          gap: 1px; background: var(--border); border: 1px solid var(--border);
        }
        .rm-card-3 { background: var(--white); padding: 32px; transition: all 0.3s; }
        .rm-card-3:hover { background: var(--off); }
        .rm-card-3:hover .rm-card-num-sm { color: var(--red); }
        .rm-card-num-sm {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 40px; color: var(--border); line-height: 1;
          margin-bottom: 12px; transition: color 0.3s;
        }
        .rm-card-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 18px; letter-spacing: 0.04em; color: var(--black); margin-bottom: 10px;
        }
        .rm-card-desc { font-size: 11px; color: var(--mid); line-height: 1.7; }

        .rm-statement {
          padding: 120px 40px; background: var(--black);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .rm-statement-bg {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 30vw; color: rgba(255,255,255,0.02);
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%); white-space: nowrap;
          pointer-events: none; user-select: none;
        }
        .rm-statement-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(28px, 4vw, 56px); line-height: 1.15;
          color: #fff; text-align: center; letter-spacing: 0.02em;
          position: relative; z-index: 2;
        }

        .rm-diff-grid { display: flex; flex-direction: column; gap: 0; }
        .rm-diff-row {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px;
          align-items: center; padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }
        .rm-diff-row:first-child { border-top: 1px solid var(--border); }
        .rm-diff-label {
          font-size: 8px; letter-spacing: 0.25em; text-transform: uppercase;
          font-weight: 700; display: block; margin-bottom: 6px;
        }
        .rm-diff-label-red { color: var(--red); }
        .rm-diff-label-green { color: #0a8f4f; }
        .rm-diff-partial p, .rm-diff-complete p { font-size: 12px; color: var(--mid); line-height: 1.6; margin: 0; }
        .rm-diff-arrow {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; color: var(--border);
        }

        .rm-dark { background: #000; color: #fff; position: relative; overflow: hidden; }
        .rm-dark-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%);
        }
        .rm-who-grid { display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px; }
        .rm-who-item {
          display: flex; align-items: center; gap: 16px;
          font-size: 14px; color: rgba(255,255,255,0.7);
        }
        :global(.rm-who-check) { color: var(--red); flex-shrink: 0; }
        .rm-who-close { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.8; max-width: 560px; }

        .rm-cta {
          background: #000; padding: 120px 40px; text-align: center;
          position: relative; overflow: hidden;
        }
        .rm-cta-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%);
        }
        .rm-cta-content { position: relative; z-index: 2; }
        .rm-cta-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 8vw, 100px); line-height: 0.9;
          color: #fff; margin-bottom: 24px;
        }
        .rm-cta-sub {
          font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.8;
          max-width: 560px; margin: 0 auto 48px;
        }
        .rm-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
          background: var(--red); color: #fff !important;
          padding: 20px 40px; text-decoration: none; transition: all 0.3s;
          box-shadow: 0 0 60px rgba(217,0,25,0.4);
        }
        .rm-btn:hover {
          background: #fff; color: var(--red) !important;
          transform: translateY(-2px); box-shadow: 0 0 60px rgba(255,255,255,0.3);
        }
        .rm-next-phase {
          margin-top: 32px; font-size: 11px; letter-spacing: 0.1em; color: rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .rm-next-phase a { color: var(--red); text-decoration: none; transition: color 0.2s; }
        .rm-next-phase a:hover { color: #fff; }

        @media (max-width: 880px) {
          .rm-hero { padding: 120px 16px 64px; }
          .rm-hero-h1 { font-size: clamp(48px, 14vw, 80px); }
          .rm-hero-stats { gap: 24px; flex-wrap: wrap; }
          .rm-stat-num { font-size: 36px; }
          .rm-section { padding: 56px 16px; }
          .rm-heading { font-size: clamp(32px, 10vw, 48px); margin-bottom: 32px; }
          .rm-grid-3 { grid-template-columns: 1fr; }
          .rm-card-3 { padding: 24px 20px; }
          .rm-diff-row { grid-template-columns: 1fr; gap: 12px; }
          .rm-diff-arrow { display: none; }
          .rm-statement { padding: 64px 16px; }
          .rm-statement-h2 { font-size: clamp(22px, 5vw, 36px); }
          .rm-cta { padding: 64px 16px; }
          .rm-cta-h2 { font-size: clamp(36px, 12vw, 64px); }
        }
      `}</style>
    </div>
  )
}
