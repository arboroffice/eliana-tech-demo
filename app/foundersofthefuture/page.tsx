"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const SYSTEM_EXAMPLES = [
  "AI answering calls and booking jobs",
  "Systems that follow up instantly",
  "Automated quoting tools",
  "Content engines running daily",
  "Backend workflows replacing admin work",
]

const STEPS = [
  { num: "01", text: "Join the community" },
  { num: "02", text: "Pick a system or pack" },
  { num: "03", text: "Copy and launch" },
  { num: "04", text: "Upgrade if you want help" },
]

const FOR_LIST = [
  "Local service business owners",
  "Agency owners",
  "Operators who want leverage",
  "Founders already using AI but not getting results",
]

const NOT_FOR_LIST = [
  "People looking for shortcuts without work",
  "People who just want to \"learn AI\"",
  "People who won't implement",
]

export default function FoundersOfTheFuturePage() {
  return (
    <div className="fotf-lp">
      <GlassmorphismNav />

      <main>
        {/* ══════ HERO ══════ */}
        <section className="lp-hero">
          <div className="lp-container">
            <div className="lp-eyebrow">Founders of the Future</div>
            <h1 className="lp-h1">
              Stop Playing With AI.<br />
              <span className="accent">Start Building Systems<br />That Make Money.</span>
            </h1>
            <p className="lp-sub">
              Use tools like Claude to run your backend, capture leads, and automate your business.
            </p>
            <div className="lp-cta-row">
              <Link href="/foundersofthefuture/apply" className="lp-btn-primary">
                Join the Community <ArrowRight size={16} />
              </Link>
              <a href="#what-founders-build" className="lp-btn-secondary">
                See What Founders Are Building
              </a>
            </div>
          </div>
        </section>

        {/* ══════ THE PROBLEM ══════ */}
        <section className="lp-section">
          <div className="lp-container lp-narrow">
            <div className="lp-label">The Problem</div>
            <h2 className="lp-h2">Right now most people<br />are using AI <span className="accent">wrong.</span></h2>

            <div className="lp-two-col">
              <div className="lp-col-bad">
                <p className="lp-col-tag">What most people do</p>
                <ul className="lp-list-plain">
                  <li>Generate content</li>
                  <li>Ask random questions</li>
                  <li>Test prompts</li>
                </ul>
                <p className="lp-col-note">Then go right back to doing everything manually.</p>
              </div>
              <div className="lp-col-good">
                <p className="lp-col-tag accent-tag">What a few founders are doing</p>
                <ul className="lp-list-plain">
                  <li>Answer their phones</li>
                  <li>Follow up with every lead</li>
                  <li>Send quotes automatically</li>
                  <li>Run parts of their business daily</li>
                </ul>
                <p className="lp-col-note highlight">Same tools. Different approach.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ THE SHIFT ══════ */}
        <section className="lp-statement-section">
          <div className="lp-container">
            <h2 className="lp-statement">
              AI is not just a tool.<br />
              <span className="accent">It&apos;s an operator.</span>
            </h2>
            <p className="lp-statement-sub">
              Once you understand that&hellip; you stop chatting with it and start building with it.
            </p>
          </div>
        </section>

        {/* ══════ WHAT THIS IS ══════ */}
        <section className="lp-section dark">
          <div className="lp-container lp-narrow">
            <div className="lp-label light">What This Is</div>
            <h2 className="lp-h2 light">A community for founders who want to become <span className="accent">AI-native.</span></h2>
            <p className="lp-body light">Inside, you don&apos;t get theory.</p>
            <div className="lp-three-cards">
              <div className="lp-card">
                <span className="lp-card-num">01</span>
                <h3>Real Workflows</h3>
                <p>Copy what&apos;s already working in other businesses.</p>
              </div>
              <div className="lp-card">
                <span className="lp-card-num">02</span>
                <h3>Real Systems</h3>
                <p>Plug-and-play automations you can launch today.</p>
              </div>
              <div className="lp-card">
                <span className="lp-card-num">03</span>
                <h3>Real Use Cases</h3>
                <p>See exactly how founders are using AI to operate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ WHAT YOU GET ══════ */}
        <section className="lp-section">
          <div className="lp-container">
            <div className="lp-label">What You Get</div>
            <h2 className="lp-h2">Four layers. <span className="accent">Pick your level.</span></h2>

            <div className="lp-tiers">
              <div className="lp-tier">
                <span className="lp-tier-num">01</span>
                <h3 className="lp-tier-title">Community</h3>
                <p className="lp-tier-desc">Founders sharing real builds daily. See exactly how others are using AI. Ask questions and get answers fast.</p>
              </div>
              <div className="lp-tier featured">
                <span className="lp-tier-num">02</span>
                <h3 className="lp-tier-title">AI System Packs</h3>
                <p className="lp-tier-desc">Plug-and-play systems by industry. Each pack shows you what to build, how it works, and exact prompts + structure.</p>
                <div className="lp-tier-examples">
                  <span>Lead capture + follow-up</span>
                  <span>AI receptionist + missed call text back</span>
                  <span>Instant estimate generators</span>
                  <span>CRM + backend automations</span>
                </div>
              </div>
              <div className="lp-tier">
                <span className="lp-tier-num">03</span>
                <h3 className="lp-tier-title">Build With You</h3>
                <p className="lp-tier-desc">Don&apos;t want to figure it out alone? We build it with you. Step-by-step. Get it live fast.</p>
                <span className="lp-tier-badge">Upgrade</span>
              </div>
              <div className="lp-tier">
                <span className="lp-tier-num">04</span>
                <h3 className="lp-tier-title">Done For You</h3>
                <p className="lp-tier-desc">Full system installs. Custom workflows. Built around your business. For operators who want everything handled.</p>
                <span className="lp-tier-badge">Application Only</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ WHAT FOUNDERS ARE BUILDING ══════ */}
        <section className="lp-section dark" id="what-founders-build">
          <div className="lp-container lp-narrow">
            <div className="lp-label light">Inside Right Now</div>
            <h2 className="lp-h2 light">What founders are <span className="accent">already building.</span></h2>
            <div className="lp-build-list">
              {SYSTEM_EXAMPLES.map((item, i) => (
                <div key={i} className="lp-build-item">
                  <span className="lp-build-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="lp-callout-dark">
              This is not theory. This is already happening.
            </div>
          </div>
        </section>

        {/* ══════ WHO THIS IS FOR / NOT FOR ══════ */}
        <section className="lp-section">
          <div className="lp-container">
            <div className="lp-two-col-fit">
              <div>
                <div className="lp-label">Who This Is For</div>
                <ul className="lp-check-list">
                  {FOR_LIST.map((item, i) => (
                    <li key={i}><span className="lp-check">+</span>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="lp-label not-for">Who This Is Not For</div>
                <ul className="lp-check-list not-for-list">
                  {NOT_FOR_LIST.map((item, i) => (
                    <li key={i}><span className="lp-x">&times;</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════ HOW IT WORKS ══════ */}
        <section className="lp-section dark">
          <div className="lp-container">
            <div className="lp-label light">How It Works</div>
            <h2 className="lp-h2 light">Four steps. <span className="accent">That&apos;s it.</span></h2>
            <div className="lp-steps">
              {STEPS.map((step, i) => (
                <div key={i} className="lp-step">
                  <span className="lp-step-num">{step.num}</span>
                  <span className="lp-step-text">{step.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════ WHY NOW ══════ */}
        <section className="lp-statement-section alt">
          <div className="lp-container">
            <div className="lp-label">Why Now</div>
            <h2 className="lp-statement sm">
              Most people are still playing with AI.<br />
              A few are building real systems with it.<br />
              <span className="accent">That gap is about to get very big.</span>
            </h2>
          </div>
        </section>

        {/* ══════ FINAL CLOSE ══════ */}
        <section className="lp-final">
          <div className="lp-container">
            <h2 className="lp-final-h2">
              You can keep using AI for small tasks.<br />
              <span className="accent">Or you can use it to run parts of your business.</span>
            </h2>
            <Link href="/foundersofthefuture/apply" className="lp-btn-primary lg">
              Join the Community <ArrowRight size={18} />
            </Link>

            <div className="lp-ps">
              <p>
                If you&apos;ve had the thought:<br />
                <strong>&ldquo;I could build something crazy with this&hellip;&rdquo;</strong>
              </p>
              <p className="accent-text">This is where you actually do it.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .fotf-lp {
          --red: #D90019;
          --black: #0C0C0C;
          --white: #FAFAF8;
          --off: #F2F1ED;
          --dim: #888;
          --border: #E4E3DE;
          background: var(--white);
          color: var(--black);
          font-family: var(--font-dm-mono), monospace;
        }

        /* ── Container ── */
        .lp-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .lp-narrow { max-width: 760px; }

        /* ── Labels ── */
        .lp-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: var(--red);
          margin-bottom: 20px;
          padding-left: 20px;
          position: relative;
        }
        .lp-label::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 1px;
          background: var(--red);
        }
        .lp-label.light { color: var(--red); }
        .lp-label.not-for { color: var(--dim); }
        .lp-label.not-for::before { background: var(--dim); }

        .lp-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--red);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .lp-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--red);
        }

        /* ── Hero ── */
        .lp-hero {
          padding: 160px 24px 100px;
          background: var(--black);
          color: var(--white);
        }
        .lp-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 7vw, 100px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }
        .lp-h1 .accent { color: var(--red); }
        .lp-sub {
          font-size: 16px;
          line-height: 1.7;
          color: #aaa;
          max-width: 520px;
          margin-bottom: 40px;
        }
        .lp-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        /* ── Buttons ── */
        .lp-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--red);
          color: white;
          padding: 16px 32px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-decoration: none;
          transition: all 0.2s;
          border: none;
          cursor: pointer;
        }
        .lp-btn-primary:hover { background: white; color: var(--black); }
        .lp-btn-primary.lg { padding: 20px 40px; font-size: 12px; }
        .lp-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-decoration: none;
          color: #aaa;
          border: 1px solid #333;
          transition: all 0.2s;
        }
        .lp-btn-secondary:hover { color: white; border-color: #888; }

        /* ── Sections ── */
        .lp-section {
          padding: 100px 24px;
        }
        .lp-section.dark {
          background: var(--black);
          color: var(--white);
        }

        /* ── Typography ── */
        .lp-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          margin-bottom: 32px;
          color: var(--black);
        }
        .lp-h2.light { color: white; }
        .lp-h2 .accent, .accent { color: var(--red); }
        .lp-body { font-size: 15px; line-height: 1.8; color: #555; margin-bottom: 20px; }
        .lp-body.light { color: #aaa; }

        /* ── Two Column (Problem) ── */
        .lp-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2px;
          margin-top: 40px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .lp-col-bad, .lp-col-good {
          padding: 40px;
          background: var(--white);
        }
        .lp-col-tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--dim);
          margin-bottom: 20px;
        }
        .accent-tag { color: var(--red) !important; }
        .lp-list-plain {
          list-style: none;
          padding: 0;
          margin: 0 0 20px;
        }
        .lp-list-plain li {
          font-size: 14px;
          color: #555;
          padding: 8px 0;
          border-bottom: 1px solid var(--off);
        }
        .lp-list-plain li:last-child { border-bottom: none; }
        .lp-col-note {
          font-size: 12px;
          color: var(--dim);
          font-style: italic;
        }
        .lp-col-note.highlight {
          color: var(--red);
          font-style: normal;
          font-weight: 700;
        }

        /* ── Statement Section ── */
        .lp-statement-section {
          padding: 120px 24px;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }
        .lp-statement-section.alt {
          background: var(--off);
          color: var(--black);
        }
        .lp-statement {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.95;
          letter-spacing: 0.02em;
        }
        .lp-statement.sm {
          font-size: clamp(28px, 4vw, 56px);
          line-height: 1.05;
        }
        .lp-statement .accent { color: var(--red); }
        .lp-statement-sub {
          font-size: 16px;
          color: #aaa;
          margin-top: 24px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.7;
        }

        /* ── Three Cards ── */
        .lp-three-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          margin-top: 40px;
          background: #222;
        }
        .lp-card {
          background: #111;
          padding: 40px 28px;
          transition: background 0.2s;
        }
        .lp-card:hover { background: #1a1a1a; }
        .lp-card-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 36px;
          color: #333;
          display: block;
          margin-bottom: 16px;
          transition: color 0.2s;
        }
        .lp-card:hover .lp-card-num { color: var(--red); }
        .lp-card h3 {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: white;
          margin-bottom: 8px;
        }
        .lp-card p {
          font-size: 13px;
          color: #888;
          line-height: 1.6;
        }

        /* ── Tiers ── */
        .lp-tiers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: var(--border);
          margin-top: 40px;
        }
        .lp-tier {
          background: var(--white);
          padding: 40px 28px;
          display: flex;
          flex-direction: column;
        }
        .lp-tier.featured {
          background: var(--black);
          color: white;
        }
        .lp-tier-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px;
          color: var(--border);
          margin-bottom: 16px;
        }
        .lp-tier.featured .lp-tier-num { color: #333; }
        .lp-tier-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px;
          letter-spacing: 0.02em;
          margin-bottom: 12px;
        }
        .lp-tier.featured .lp-tier-title { color: var(--red); }
        .lp-tier-desc {
          font-size: 13px;
          line-height: 1.7;
          color: #888;
          flex: 1;
          margin-bottom: 16px;
        }
        .lp-tier-examples {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 16px;
          border-top: 1px solid #222;
        }
        .lp-tier-examples span {
          font-size: 11px;
          color: #aaa;
          padding-left: 12px;
          border-left: 2px solid var(--red);
        }
        .lp-tier-badge {
          display: inline-block;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--red);
          border: 1px solid var(--red);
          padding: 6px 12px;
          margin-top: auto;
          text-align: center;
        }

        /* ── Build List ── */
        .lp-build-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .lp-build-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 0;
          border-bottom: 1px solid #222;
          font-size: 15px;
          color: #ccc;
        }
        .lp-build-item:last-child { border-bottom: none; }
        .lp-build-dot {
          width: 8px;
          height: 8px;
          background: var(--red);
          border-radius: 50%;
          flex-shrink: 0;
        }
        .lp-callout-dark {
          margin-top: 40px;
          padding: 24px 28px;
          background: rgba(217,0,25,0.08);
          border-left: 3px solid var(--red);
          font-size: 15px;
          font-weight: 700;
          color: white;
        }

        /* ── Check Lists ── */
        .lp-two-col-fit {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }
        .lp-check-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .lp-check-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: #555;
          padding: 14px 0;
          border-bottom: 1px solid var(--off);
        }
        .lp-check-list li:last-child { border-bottom: none; }
        .lp-check {
          color: var(--red);
          font-weight: 900;
          font-size: 16px;
          flex-shrink: 0;
        }
        .lp-x {
          color: var(--dim);
          font-weight: 400;
          font-size: 18px;
          flex-shrink: 0;
        }
        .not-for-list li { color: var(--dim); }

        /* ── Steps ── */
        .lp-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2px;
          background: #222;
          margin-top: 40px;
        }
        .lp-step {
          background: #111;
          padding: 40px 24px;
          text-align: center;
          transition: background 0.2s;
        }
        .lp-step:hover { background: #1a1a1a; }
        .lp-step-num {
          display: block;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 48px;
          color: var(--red);
          margin-bottom: 12px;
        }
        .lp-step-text {
          font-size: 13px;
          color: #aaa;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* ── Final ── */
        .lp-final {
          padding: 140px 24px;
          background: var(--black);
          color: var(--white);
          text-align: center;
        }
        .lp-final-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 1;
          letter-spacing: 0.02em;
          margin-bottom: 40px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        .lp-final-h2 .accent { color: var(--red); }
        .lp-ps {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid #222;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
        }
        .lp-ps p {
          font-size: 15px;
          color: #888;
          line-height: 1.7;
          margin-bottom: 12px;
        }
        .lp-ps strong { color: white; }
        .accent-text { color: var(--red) !important; font-weight: 700; }

        /* ── Mobile ── */
        @media (max-width: 900px) {
          .lp-hero { padding: 120px 20px 60px; }
          .lp-section { padding: 60px 16px; }
          .lp-two-col { grid-template-columns: 1fr; }
          .lp-three-cards { grid-template-columns: 1fr; }
          .lp-tiers { grid-template-columns: 1fr; }
          .lp-two-col-fit { grid-template-columns: 1fr; gap: 40px; }
          .lp-steps { grid-template-columns: 1fr 1fr; }
          .lp-statement-section { padding: 80px 20px; }
          .lp-final { padding: 80px 20px; }
          .lp-cta-row { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .lp-steps { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
