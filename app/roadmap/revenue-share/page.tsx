"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"

export default function RevenueSharePage() {
  return (
    <div className="rm-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-container">
            <div className="rm-phase-tag">Phase 04 — Partnership</div>
            <h1 className="rm-hero-h1">
              REVENUE<br />
              <span className="accent">SHARE.</span>
            </h1>
            <p className="rm-hero-sub">
              For the founders we believe in. We put skin in the game. Your growth is our growth. No invoices, no budgets, no limits — just aligned incentives and unlimited infrastructure.
            </p>
          </div>
        </section>

        {/* THE MODEL */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Model</div>
            <h2 className="rm-heading">SKIN IN <span className="accent">THE GAME.</span></h2>

            <div className="rm-prose">
              <p>This is not a service tier. It is not something you upgrade to. It is a fundamentally different relationship.</p>
              <p>In a revenue share partnership, we take a percentage of revenue growth in exchange for an unlimited, ongoing commitment to building and evolving your infrastructure. No monthly invoices. No scope limitations. No budget approvals.</p>
              <p>If building something will grow your business, we build it. If optimizing something will increase revenue, we optimize it. The only question is: will this make the company more money? If yes, it gets built.</p>
              <p className="rm-highlight">We are not your vendor. We are not your agency. We are your infrastructure partner with the same financial incentive you have — to make this business as successful as possible.</p>
            </div>
          </div>
        </section>


        {/* STATEMENT */}
        <section className="rm-statement">
          <div className="rm-statement-bg">PARTNER</div>
          <div className="rm-container">
            <h2 className="rm-statement-h2">
              When we win, you win. When you grow, we grow.<br />
              <span className="accent">There is no better alignment than shared upside.</span>
            </h2>
          </div>
        </section>

        {/* WHY THIS EXISTS */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">Why This Exists</div>
            <h2 className="rm-heading">THE PROBLEM WITH <span className="accent">FLAT FEES.</span></h2>

            <div className="rm-diff-grid">
              {[
                { flat: "You pay a flat fee regardless of results", rev: "We only earn when you grow — zero risk for you" },
                { flat: "Your vendor has no incentive to outperform", rev: "Every dollar of growth is a dollar we share" },
                { flat: "Scope is defined and limited by the contract", rev: "Scope is unlimited — we build whatever grows revenue" },
                { flat: "Budget conversations slow down momentum", rev: "No budgets, no approvals, no friction" },
                { flat: "Misaligned incentives from day one", rev: "Perfectly aligned from the first handshake" },
              ].map((item, i) => (
                <div key={i} className="rm-diff-row">
                  <div className="rm-diff-partial">
                    <span className="rm-diff-label rm-diff-label-red">Flat Fee</span>
                    <p>{item.flat}</p>
                  </div>
                  <div className="rm-diff-arrow">→</div>
                  <div className="rm-diff-complete">
                    <span className="rm-diff-label rm-diff-label-green">Revenue Share</span>
                    <p>{item.rev}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT DISQUALIFIES */}
        <section className="rm-section rm-alt">
          <div className="rm-container">
            <div className="rm-eyebrow">Full Transparency</div>
            <h2 className="rm-heading">THIS IS NOT <span className="accent">FOR EVERYONE.</span></h2>

            <div className="rm-two-col">
              <div className="rm-qualify-col">
                <h3 className="rm-qualify-header rm-qualify-yes">
                  <Check size={18} />
                  <span>Good Fit</span>
                </h3>
                <ul className="rm-qualify-list">
                  <li>Proven revenue and established operations</li>
                  <li>Clear product-market fit</li>
                  <li>Infrastructure is the bottleneck, not product</li>
                  <li>Willing to share financials transparently</li>
                  <li>Long-term mindset — building for years, not months</li>
                  <li>Ready to move fast on infrastructure decisions</li>
                </ul>
              </div>
              <div className="rm-qualify-col">
                <h3 className="rm-qualify-header rm-qualify-no">
                  <X size={18} />
                  <span>Not a Fit</span>
                </h3>
                <ul className="rm-qualify-list">
                  <li>Pre-revenue or still validating the offer</li>
                  <li>Looking for a quick fix or silver bullet</li>
                  <li>Uncomfortable with financial transparency</li>
                  <li>Want to maintain full control over every decision</li>
                  <li>Short-term thinking or exit-focused</li>
                  <li>Not willing to invest time in the partnership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="rm-section rm-dark">
          <div className="rm-dark-grid" />
          <div className="rm-container">
            <div className="rm-eyebrow rm-eyebrow-light">The Rare Few</div>
            <h2 className="rm-heading rm-heading-light">WE TAKE ON VERY FEW <span className="accent">PARTNERS.</span></h2>

            <div className="rm-prose rm-prose-dark">
              <p>At any given time, we maintain a maximum of five revenue share partnerships. This is intentional. Every partnership gets our full attention, our best thinking, and unlimited infrastructure commitment.</p>
              <p>When we say yes, it is because we have done our homework. We understand your business, we see the gap, and we believe the infrastructure can close it. We are betting on you — and we do not bet lightly.</p>
              <p className="rm-highlight-dark">If we say no, it is not a rejection. It means the timing or the fit is not right. Most founders start with the Build Program and graduate into a revenue share conversation when the time is right.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="rm-cta">
          <div className="rm-cta-grid" />
          <div className="rm-container rm-cta-content">
            <div className="rm-eyebrow rm-eyebrow-light">Next Step</div>
            <h2 className="rm-cta-h2">
              LET&apos;S <span className="accent">TALK.</span>
            </h2>
            <p className="rm-cta-sub">
              Revenue share starts with a conversation. Take the OS Audit so we can understand your business, then we will determine if a partnership makes sense for both sides.
            </p>
            <Link href="/audit" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Take Your OS Audit <ArrowRight size={16} />
            </Link>
            <div className="rm-next-phase">
              <span>Start from the beginning:</span>
              <Link href="/roadmap/build-program">Build Program →</Link>
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
        .rm-hero-sub { font-size: 15px; color: var(--mid); line-height: 1.9; max-width: 560px; }

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
        .rm-prose-dark p { color: rgba(255,255,255,0.6); }
        .rm-highlight { color: var(--black) !important; font-weight: 500; border-left: 2px solid var(--red); padding-left: 20px; }
        .rm-highlight-dark { color: rgba(255,255,255,0.8) !important; font-weight: 500; border-left: 2px solid var(--red); padding-left: 20px; }


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

        .rm-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }
        .rm-qualify-col {
          border: 1px solid var(--border); padding: 32px;
        }
        .rm-qualify-header {
          display: flex; align-items: center; gap: 10px;
          font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          font-weight: 700; margin-bottom: 24px;
        }
        .rm-qualify-yes { color: #0a8f4f; }
        .rm-qualify-no { color: var(--red); }
        .rm-qualify-list {
          list-style: none; padding: 0; display: flex;
          flex-direction: column; gap: 14px;
        }
        .rm-qualify-list li {
          font-size: 12px; color: var(--mid); line-height: 1.6;
          padding-left: 16px; position: relative;
        }
        .rm-qualify-list li::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%; background: var(--border);
        }
        .rm-qualify-yes + .rm-qualify-list li::before { background: #0a8f4f; opacity: 0.6; }
        .rm-qualify-no + .rm-qualify-list li::before { background: var(--red); opacity: 0.4; }

        .rm-dark { background: #000; color: #fff; position: relative; overflow: hidden; }
        .rm-dark-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%);
        }

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
          .rm-section { padding: 56px 16px; }
          .rm-heading { font-size: clamp(32px, 10vw, 48px); margin-bottom: 32px; }
          .rm-two-col { grid-template-columns: 1fr; }
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
