"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function AIWingRetainerPage() {
  return (
    <div className="rm-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-container">
            <div className="rm-phase-tag">Phase 03 — Retainer</div>
            <h1 className="rm-hero-h1">
              AI WING<br />
              <span className="accent">RETAINER.</span>
            </h1>
            <p className="rm-hero-sub">
              Your infrastructure evolves with your business. We manage, optimize, and expand your systems as you scale — so your company never outgrows what we built. It only gets smarter.
            </p>
            <div className="rm-hero-stats">
              <div className="rm-stat">
                <div className="rm-stat-num">Monthly</div>
                <div className="rm-stat-label">Partnership</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">Ongoing</div>
                <div className="rm-stat-label">Evolution</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">Direct</div>
                <div className="rm-stat-label">Access</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE PROBLEM WITH "DONE" */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Reality</div>
            <h2 className="rm-heading">INFRASTRUCTURE IS <span className="accent">NEVER "DONE."</span></h2>

            <div className="rm-prose">
              <p>Six months from now, your business will not look like it does today. You will have new offers, new markets, new complexity. The systems that work perfectly right now will start to strain.</p>
              <p>This is not a failure of the build. It is the nature of growth. Static infrastructure serves a static company. Your company is not static — it is evolving. Your infrastructure needs to evolve with it.</p>
              <p>Most companies hit this wall and hire. More people to manage more complexity. More overhead to handle more growth. The retainer is the alternative.</p>
              <p className="rm-highlight">Instead of hiring an internal team to manage your AI infrastructure, you keep the team that built it. We know every system, every agent, every integration — because we created them.</p>
            </div>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="rm-section rm-alt">
          <div className="rm-container">
            <div className="rm-eyebrow">What Is Included</div>
            <h2 className="rm-heading">CONTINUOUS <span className="accent">EVOLUTION.</span></h2>

            <div className="rm-grid">
              {[
                { n: "01", title: "SYSTEM MONITORING & OPTIMIZATION", desc: "Every agent, every workflow, every integration — monitored and optimized continuously. We track performance metrics, identify bottlenecks, and push improvements before you even notice something could be better. Your infrastructure does not degrade. It only improves." },
                { n: "02", title: "NEW AGENT & CAPABILITY DEPLOYMENT", desc: "As your business evolves, new opportunities emerge. A new service offering needs new sales agents. A new market needs new support workflows. We deploy new capabilities as your business demands them — proactively, not reactively." },
                { n: "03", title: "QUARTERLY STRATEGIC REVIEWS", desc: "Every 90 days, we sit down and map the next phase of your infrastructure evolution. What is working. What needs to change. Where the next opportunities are. Your systems roadmap stays aligned with your business strategy." },
                { n: "04", title: "PRIORITY ACCESS & RAPID RESPONSE", desc: "Direct access to the team that built your infrastructure. When something needs to move — a new workflow, a system adjustment, an urgent fix — it moves. No tickets. No SLAs. No waiting in a queue. You call, we build." },
              ].map((item, i) => (
                <div key={i} className="rm-card">
                  <div className="rm-card-num">{item.n}</div>
                  <h3 className="rm-card-title">{item.title}</h3>
                  <p className="rm-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="rm-statement">
          <div className="rm-statement-bg">EVOLVE</div>
          <div className="rm-container">
            <h2 className="rm-statement-h2">
              The retainer is not maintenance.<br />
              <span className="accent">It is compounding. Every month, your company gets smarter.</span>
            </h2>
          </div>
        </section>


        {/* RETAINER VS HIRING */}
        <section className="rm-section rm-alt">
          <div className="rm-container">
            <div className="rm-eyebrow">The Alternative</div>
            <h2 className="rm-heading">RETAINER VS <span className="accent">HIRING.</span></h2>

            <div className="rm-diff-grid">
              {[
                { hire: "Hire an AI engineer: six-figure salary + benefits", retain: "Retainer: a fraction of the cost for an entire team" },
                { hire: "One person with one perspective and limited bandwidth", retain: "A team that built your infrastructure and knows every piece" },
                { hire: "Onboarding takes months before they are productive", retain: "Zero onboarding — we are already inside your systems" },
                { hire: "They leave, and you lose institutional knowledge", retain: "Everything is documented, maintained, and continuously improved" },
                { hire: "Managing them is another job on your plate", retain: "We manage ourselves — you get results, not status updates" },
              ].map((item, i) => (
                <div key={i} className="rm-diff-row">
                  <div className="rm-diff-partial">
                    <span className="rm-diff-label rm-diff-label-red">Hiring</span>
                    <p>{item.hire}</p>
                  </div>
                  <div className="rm-diff-arrow">→</div>
                  <div className="rm-diff-complete">
                    <span className="rm-diff-label rm-diff-label-green">Retainer</span>
                    <p>{item.retain}</p>
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
            <h2 className="rm-heading rm-heading-light">FOUNDERS WHO NEVER WANT TO <span className="accent">GO BACK.</span></h2>

            <div className="rm-who-grid">
              {[
                "You went through the Build Program or Full Buildout and it changed how your business operates",
                "You are growing and need your infrastructure to grow with you",
                "You would rather invest in systems than headcount",
                "You want the team that built it to be the team that evolves it",
                "You understand that compounding infrastructure is the ultimate competitive advantage",
              ].map((item, i) => (
                <div key={i} className="rm-who-item">
                  <Check size={16} className="rm-who-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
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
              The retainer follows the buildout. Start with the audit and we will map the full path together.
            </p>
            <Link href="/audit" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Get Your Free Audit <ArrowRight size={16} />
            </Link>
            <div className="rm-next-phase">
              <span>Next phase:</span>
              <Link href="/roadmap/revenue-share">Revenue Share →</Link>
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
        .rm-stat-num { font-family: var(--font-bebas-neue), sans-serif; font-size: 48px; color: var(--red); line-height: 1; }
        .rm-stat-label { font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: var(--dim); margin-top: 4px; }

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
        .rm-highlight { color: var(--black) !important; font-weight: 500; border-left: 2px solid var(--red); padding-left: 20px; }

        .rm-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 1px; background: var(--border); border: 1px solid var(--border);
        }
        .rm-card { background: var(--white); padding: 40px; transition: all 0.3s; }
        .rm-card:hover { background: var(--off); }
        .rm-card:hover .rm-card-num { color: var(--red); }
        .rm-card-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 56px; color: var(--border); line-height: 1;
          margin-bottom: 16px; transition: color 0.3s;
        }
        .rm-card-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; letter-spacing: 0.04em; color: var(--black); margin-bottom: 12px;
        }
        .rm-card-desc { font-size: 12px; color: var(--mid); line-height: 1.7; }

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

        .rm-timeline { display: flex; flex-direction: column; gap: 0; }
        .rm-tl-item { display: flex; gap: 32px; }
        .rm-tl-marker { display: flex; flex-direction: column; align-items: center; padding-top: 6px; }
        .rm-tl-dot { width: 12px; height: 12px; border: 2px solid var(--red); border-radius: 50%; flex-shrink: 0; }
        .rm-tl-line { width: 2px; flex: 1; background: var(--border); margin: 8px 0; }
        .rm-tl-content { padding-bottom: 48px; }
        .rm-tl-week { font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: var(--red); margin-bottom: 8px; }
        .rm-tl-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; letter-spacing: 0.04em; color: var(--black); margin-bottom: 10px;
        }
        .rm-tl-desc { font-size: 13px; color: var(--mid); line-height: 1.7; max-width: 600px; }

        .rm-diff-grid { display: flex; flex-direction: column; }
        .rm-diff-row {
          display: grid; grid-template-columns: 1fr auto 1fr; gap: 24px;
          align-items: center; padding: 24px 0; border-bottom: 1px solid var(--border);
        }
        .rm-diff-row:first-child { border-top: 1px solid var(--border); }
        .rm-diff-label { font-size: 8px; letter-spacing: 0.25em; text-transform: uppercase; font-weight: 700; display: block; margin-bottom: 6px; }
        .rm-diff-label-red { color: var(--red); }
        .rm-diff-label-green { color: #0a8f4f; }
        .rm-diff-partial p, .rm-diff-complete p { font-size: 12px; color: var(--mid); line-height: 1.6; margin: 0; }
        .rm-diff-arrow { font-family: var(--font-bebas-neue), sans-serif; font-size: 24px; color: var(--border); }

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
        .rm-who-item { display: flex; align-items: center; gap: 16px; font-size: 14px; color: rgba(255,255,255,0.7); }
        :global(.rm-who-check) { color: var(--red); flex-shrink: 0; }

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
        .rm-cta-sub { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.8; max-width: 560px; margin: 0 auto 48px; }
        .rm-btn {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;
          background: var(--red); color: #fff !important;
          padding: 20px 40px; text-decoration: none; transition: all 0.3s;
          box-shadow: 0 0 60px rgba(217,0,25,0.4);
        }
        .rm-btn:hover { background: #fff; color: var(--red) !important; transform: translateY(-2px); box-shadow: 0 0 60px rgba(255,255,255,0.3); }
        .rm-next-phase { margin-top: 32px; font-size: 11px; letter-spacing: 0.1em; color: rgba(255,255,255,0.3); display: flex; align-items: center; justify-content: center; gap: 8px; }
        .rm-next-phase a { color: var(--red); text-decoration: none; transition: color 0.2s; }
        .rm-next-phase a:hover { color: #fff; }

        @media (max-width: 880px) {
          .rm-hero { padding: 120px 16px 64px; }
          .rm-hero-h1 { font-size: clamp(48px, 14vw, 80px); }
          .rm-hero-stats { gap: 24px; flex-wrap: wrap; }
          .rm-stat-num { font-size: 36px; }
          .rm-section { padding: 56px 16px; }
          .rm-heading { font-size: clamp(32px, 10vw, 48px); margin-bottom: 32px; }
          .rm-grid { grid-template-columns: 1fr; }
          .rm-card { padding: 28px 20px; }
          .rm-diff-row { grid-template-columns: 1fr; gap: 12px; }
          .rm-diff-arrow { display: none; }
          .rm-tl-item { gap: 20px; }
          .rm-statement { padding: 64px 16px; }
          .rm-statement-h2 { font-size: clamp(22px, 5vw, 36px); }
          .rm-cta { padding: 64px 16px; }
          .rm-cta-h2 { font-size: clamp(36px, 12vw, 64px); }
        }
      `}</style>
    </div>
  )
}
