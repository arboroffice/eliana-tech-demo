"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CustomPage() {
  return (
    <div className="custom-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="c-hero">
          <div className="c-container">
            <div className="c-eyebrow">Elianatech Custom</div>
            <h1 className="c-hero-h1">
              BUILT FOR THE FOUNDER<br />
              WHO IS DONE FIGURING<br />
              IT OUT <span className="accent">ALONE.</span>
            </h1>
            <p className="c-hero-sub">
              Elianatech Custom is not available to most businesses.<br />
              It is not meant to be.
            </p>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="c-section">
          <div className="c-container">
            <div className="c-eyebrow">Positioning</div>
            <h2 className="c-heading">THIS IS NOT <span className="accent">A SERVICE.</span></h2>

            <div className="c-prose">
              <p>
                Elianatech Custom is a permanent infrastructure partnership.
                Not a retainer. Not a project. Not a managed service with a support ticket queue.
              </p>
              <p>
                We take on five clients at a time. Always five. No exceptions.
              </p>
              <p>
                When a partnership opens, we are selective about who fills it. We are looking for a specific kind of founder — one building something serious, with real revenue and real complexity, who understands that the gap between where they are and where they are going is an infrastructure problem.
              </p>
              <p className="c-highlight">
                If that is you, we want to hear from you.<br />
                If it is not, this page is not for you — and that is completely fine.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT THIS LOOKS LIKE */}
        <section className="c-section c-alt">
          <div className="c-container">
            <div className="c-eyebrow">The Partnership</div>
            <h2 className="c-heading">WHAT A PARTNERSHIP <span className="accent">LOOKS LIKE.</span></h2>

            <p className="c-intro">
              We do not send deliverable lists. We build operational infrastructure that evolves as your business does. Here is how the partnership works in practice.
            </p>

            <div className="c-cards">
              <div className="c-card">
                <div className="c-card-num">01</div>
                <h3 className="c-card-title">DIRECT STRATEGIC ACCESS</h3>
                <p className="c-card-desc">
                  You work directly with Elianatech leadership. No account managers. No ticketing systems. No middlemen. When something needs to move, it moves.
                </p>
              </div>
              <div className="c-card">
                <div className="c-card-num">02</div>
                <h3 className="c-card-title">CONTINUOUS INFRASTRUCTURE EVOLUTION</h3>
                <p className="c-card-desc">
                  Your business will not look the same in six months. Your systems should not either. We build, optimize, and expand your infrastructure as you scale — not in response to crises, but ahead of them.
                </p>
              </div>
              <div className="c-card">
                <div className="c-card-num">03</div>
                <h3 className="c-card-title">FULL OPERATIONAL ARCHITECTURE</h3>
                <p className="c-card-desc">
                  Every system. Every automation. Every AI agent. Every workflow. Maintained, refined, and evolved under one partnership. Nothing falls through the cracks because nothing operates in silos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="c-cta">
          <div className="c-cta-grid" />
          <div className="c-container c-cta-content">
            <div className="c-eyebrow c-eyebrow-light">Next Step</div>
            <h2 className="c-cta-h2">
              START WITH <span className="accent">THE AUDIT.</span>
            </h2>
            <p className="c-cta-sub">
              Every Custom partnership begins with an infrastructure audit. It is how we understand your business, identify the gaps, and determine if we are the right fit for each other.
            </p>
            <Link href="/audit" className="c-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Get Your Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .custom-page {
          --red: #D90019;
          --black: #0C0C0C;
          --white: #FAFAF8;
          --off: #F4F3EF;
          --dim: #888;
          --mid: #555;
          --border: #E4E3DE;
          background: var(--white);
          color: var(--black);
          font-family: var(--font-dm-mono), monospace;
          overflow-x: hidden;
        }

        .c-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .c-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--red);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .c-eyebrow::before {
          content: '';
          width: 28px;
          height: 2px;
          background: var(--red);
        }
        .c-eyebrow-light { color: var(--red); }

        .accent { color: var(--red); }

        /* HERO */
        .c-hero {
          padding: 180px 40px 100px;
        }

        .c-hero-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: var(--black);
          margin-bottom: 32px;
        }

        .c-hero-sub {
          font-size: 15px;
          color: var(--mid);
          line-height: 1.9;
          max-width: 500px;
        }

        /* SECTIONS */
        .c-section {
          padding: 100px 40px;
          border-top: 1px solid var(--border);
        }
        .c-alt {
          background: var(--off);
        }

        .c-heading {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(36px, 5vw, 72px);
          line-height: 0.92;
          letter-spacing: 0.02em;
          color: var(--black);
          margin-bottom: 48px;
        }

        .c-prose {
          max-width: 680px;
        }
        .c-prose p {
          font-size: 14px;
          color: var(--mid);
          line-height: 1.9;
          margin-bottom: 24px;
        }
        .c-highlight {
          color: var(--black) !important;
          font-weight: 500;
          border-left: 2px solid var(--red);
          padding-left: 20px;
        }

        .c-intro {
          font-size: 14px;
          color: var(--mid);
          line-height: 1.9;
          max-width: 680px;
          margin-bottom: 48px;
        }

        /* CARDS */
        .c-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }

        .c-card {
          background: var(--white);
          padding: 40px;
          transition: all 0.3s;
        }
        .c-card:hover {
          background: var(--off);
        }
        .c-card:hover .c-card-num {
          color: var(--red);
        }

        .c-card-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 56px;
          color: var(--border);
          line-height: 1;
          margin-bottom: 16px;
          transition: color 0.3s;
        }

        .c-card-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px;
          letter-spacing: 0.04em;
          color: var(--black);
          margin-bottom: 12px;
        }

        .c-card-desc {
          font-size: 12px;
          color: var(--mid);
          line-height: 1.7;
        }

        /* CTA */
        .c-cta {
          background: #000;
          padding: 120px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .c-cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%);
        }
        .c-cta-content {
          position: relative;
          z-index: 2;
        }
        .c-cta-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 8vw, 100px);
          line-height: 0.9;
          color: #fff;
          margin-bottom: 24px;
        }
        .c-cta-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 48px;
        }

        .c-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: var(--red);
          color: #fff !important;
          padding: 18px 36px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .c-btn:hover {
          background: #fff;
          color: var(--red) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(255,255,255,0.15);
        }

        /* RESPONSIVE */
        @media (max-width: 880px) {
          .c-hero { padding: 120px 16px 64px; }
          .c-hero-h1 { font-size: clamp(36px, 12vw, 64px); }
          .c-section { padding: 56px 16px; }
          .c-heading { font-size: clamp(32px, 10vw, 48px); margin-bottom: 32px; }
          .c-cards { grid-template-columns: 1fr; }
          .c-card { padding: 28px 20px; }
          .c-cta { padding: 64px 16px; }
          .c-cta-h2 { font-size: clamp(36px, 12vw, 64px); }
          .c-cta-sub { font-size: 12px; }
        }
      `}</style>
    </div>
  )
}
