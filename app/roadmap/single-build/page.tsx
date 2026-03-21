"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"

export default function SingleBuildPage() {
  return (
    <div className="rm-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-container">
            <div className="rm-phase-tag">Phase 01 — Single Build</div>
            <h1 className="rm-hero-h1">
              SINGLE PROBLEM<br />
              <span className="accent">BUILD.</span>
            </h1>
            <p className="rm-hero-sub">
              One problem. One complete system. 7 days. We build it, return it to you, and you see it work. No long contracts. No massive commitments. We prove ourselves first.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/apply" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
                Apply for a Single Build <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rm-hero-stats">
              <div className="rm-stat">
                <div className="rm-stat-num">7</div>
                <div className="rm-stat-label">Days</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">1</div>
                <div className="rm-stat-label">Problem Solved</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">Yours</div>
                <div className="rm-stat-label">To Own</div>
              </div>
            </div>
          </div>
        </section>

        {/* THE IDEA */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Idea</div>
            <h2 className="rm-heading">PROVE IT <span className="accent">BEFORE YOU SCALE IT.</span></h2>

            <div className="rm-prose">
              <p>You have one problem that is eating your time, burning your team, or costing you revenue. Maybe it is lead follow-up. Maybe it is onboarding. Maybe it is a manual process that should have been automated two years ago.</p>
              <p>We take that single problem, build a complete AI-powered system to solve it, and hand it back to you in 7 days. You watch it work. You see the results. No guessing. No hoping.</p>
              <p className="rm-highlight">This is how we earn the right to do more. You do not have to trust a pitch deck or a promise. You trust the system we built — because it is already running.</p>
              <p>These systems are scoped to the single problem that will make the biggest difference in your business.</p>
            </div>
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="rm-section rm-alt">
          <div className="rm-container">
            <div className="rm-eyebrow">The Transformation</div>
            <h2 className="rm-heading">BEFORE & <span className="accent">AFTER.</span></h2>

            <div className="rm-comparison">
              <div className="rm-comp-side rm-comp-before">
                <div className="rm-comp-header">
                  <X size={16} />
                  <span>Before the Build</span>
                </div>
                <ul className="rm-comp-list">
                  <li>One problem draining hours every week</li>
                  <li>Manual processes you keep meaning to fix</li>
                  <li>No proof that AI actually works for your business</li>
                  <li>Hesitant to commit to a large engagement</li>
                </ul>
              </div>
              <div className="rm-comp-divider">
                <span className="rm-comp-vs">VS</span>
              </div>
              <div className="rm-comp-side rm-comp-after">
                <div className="rm-comp-header">
                  <Check size={16} />
                  <span>After the Build</span>
                </div>
                <ul className="rm-comp-list">
                  <li>That problem is solved — permanently</li>
                  <li>A working system you own and operate</li>
                  <li>Proof that AI delivers ROI for your business</li>
                  <li>Confidence to move into bigger partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BIG STATEMENT */}
        <section className="rm-statement">
          <div className="rm-statement-bg">PROVE</div>
          <div className="rm-container">
            <h2 className="rm-statement-h2">
              We do not ask you to trust us.<br />
              <span className="accent">We ask you to watch us deliver.</span>
            </h2>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">How It Works</div>
            <h2 className="rm-heading">7 DAYS. <span className="accent">ONE SYSTEM.</span></h2>

            <div className="rm-grid">
              {[
                { n: "01", title: "IDENTIFY THE PROBLEM", desc: "We get on one call, identify your single biggest operational bottleneck, and scope the build. No fluff. We agree on exactly what gets built and what success looks like." },
                { n: "02", title: "WE BUILD IT", desc: "Over 7 days, we architect and build the complete system. AI workflows, integrations, automations — whatever it takes to solve that one problem end to end." },
                { n: "03", title: "RETURNED TO YOU", desc: "The system is handed back to you fully operational. Documentation included. You own it. You run it. You watch it work." },
                { n: "04", title: "PROVE & EXPAND", desc: "Once you see the results, we talk about what is next. Full Buildout. AI Wing. Revenue Share. But only after you have seen proof that we deliver." },
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

        {/* WHAT WE CAN BUILD */}
        <section className="rm-section rm-dark">
          <div className="rm-dark-grid" />
          <div className="rm-container">
            <div className="rm-eyebrow rm-eyebrow-light">Examples</div>
            <h2 className="rm-heading rm-heading-light">PROBLEMS WE <span className="accent">SOLVE IN 7 DAYS.</span></h2>

            <div className="rm-who-grid">
              {[
                "Lead follow-up system that responds in under 60 seconds, 24/7",
                "Automated client onboarding — from signed contract to kickoff without you",
                "AI-powered intake and qualification that routes leads to the right place",
                "Content engine that produces weekly posts from your voice and data",
                "Internal knowledge base your team can query instead of asking you",
                "Appointment booking and reminders that eliminate no-shows",
              ].map((item, i) => (
                <div key={i} className="rm-who-item">
                  <Check size={16} className="rm-who-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="rm-who-close">
              If your biggest problem is not on this list, it does not matter. If it can be solved with AI infrastructure, we can scope it.
            </p>
          </div>
        </section>

        {/* OBJECTIONS */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">Straight Talk</div>
            <h2 className="rm-heading">QUESTIONS YOU ARE <span className="accent">ALREADY ASKING.</span></h2>

            <div className="rm-faq">
              {[
                { q: "Why only one problem?", a: "Because focus wins. Trying to fix everything at once is how most AI projects fail. We pick the one thing that will have the biggest impact, nail it, and then expand from there. One working system beats ten half-finished ones." },
                { q: "What if my problem is too big for 7 days?", a: "Then we scope it down to the highest-impact piece and build that. If the full solution requires a larger engagement, you will know that going in — and you will have a working piece of it as proof before committing." },
                { q: "What if it does not work?", a: "We do not take on builds we cannot deliver. The scoping call exists to make sure we can solve your problem in 7 days. If we cannot, we will tell you — and we will tell you what it would actually take." },
                { q: "What happens after the 7 days?", a: "You own the system. It is yours. Most clients move into Phase 02 (Full Buildout) or Phase 03 (AI Wing Retainer) because they see the results and want more. But there is zero obligation." },
                { q: "How is this different from hiring a freelancer?", a: "Freelancers build what you tell them to. We diagnose the problem, architect the solution, and build operational infrastructure that compounds. The difference is between installing a tool and redesigning how your business operates." },
              ].map((item, i) => (
                <div key={i} className="rm-faq-item">
                  <h3 className="rm-faq-q">{item.q}</h3>
                  <p className="rm-faq-a">{item.a}</p>
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
              ONE PROBLEM. <span className="accent">SOLVED.</span>
            </h2>
            <p className="rm-cta-sub">
              Tell us the one thing burning the most time in your business. We will tell you if we can solve it in 7 days.
            </p>
            <Link href="/apply" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Apply for a Single Build <ArrowRight size={16} />
            </Link>
            <div className="rm-next-phase">
              <span>Next phase:</span>
              <Link href="/roadmap/full-buildout">Full Buildout &rarr;</Link>
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

        /* HERO */
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

        /* SECTIONS */
        .rm-section { padding: 100px 40px; border-top: 1px solid var(--border); }
        .rm-alt { background: var(--off); }
        .rm-heading {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(36px, 5vw, 72px); line-height: 0.92;
          letter-spacing: 0.02em; color: var(--black); margin-bottom: 48px;
        }
        .rm-heading-light { color: #fff; }

        /* PROSE */
        .rm-prose { max-width: 680px; }
        .rm-prose p { font-size: 14px; color: var(--mid); line-height: 1.9; margin-bottom: 24px; }
        .rm-highlight {
          color: var(--black) !important; font-weight: 500;
          border-left: 2px solid var(--red); padding-left: 20px;
        }

        /* COMPARISON */
        .rm-comparison {
          display: grid; grid-template-columns: 1fr auto 1fr;
          border: 1px solid var(--border); overflow: hidden;
        }
        .rm-comp-side { padding: 40px; }
        .rm-comp-before { background: rgba(217,0,25,0.03); }
        .rm-comp-after { background: rgba(0,180,80,0.03); }
        .rm-comp-header {
          display: flex; align-items: center; gap: 8px;
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase;
          font-weight: 700; margin-bottom: 24px;
        }
        .rm-comp-before .rm-comp-header { color: var(--red); }
        .rm-comp-after .rm-comp-header { color: #0a8f4f; }
        .rm-comp-list {
          list-style: none; padding: 0; display: flex;
          flex-direction: column; gap: 14px;
        }
        .rm-comp-list li {
          font-size: 12px; color: var(--mid); line-height: 1.6;
          padding-left: 16px; position: relative;
        }
        .rm-comp-list li::before {
          content: ''; position: absolute; left: 0; top: 7px;
          width: 5px; height: 5px; border-radius: 50%;
        }
        .rm-comp-before .rm-comp-list li::before { background: var(--red); opacity: 0.4; }
        .rm-comp-after .rm-comp-list li::before { background: #0a8f4f; opacity: 0.6; }
        .rm-comp-divider {
          width: 1px; background: var(--border);
          display: flex; align-items: center; justify-content: center; position: relative;
        }
        .rm-comp-vs {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 14px; color: var(--dim); background: var(--white);
          padding: 8px; position: relative; z-index: 1;
        }

        /* STATEMENT */
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

        /* GRID */
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

        /* FAQ */
        .rm-faq { max-width: 720px; }
        .rm-faq-item {
          padding: 32px 0; border-bottom: 1px solid var(--border);
        }
        .rm-faq-item:first-child { border-top: 1px solid var(--border); }
        .rm-faq-q {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; letter-spacing: 0.04em; color: var(--black); margin-bottom: 12px;
        }
        .rm-faq-a { font-size: 13px; color: var(--mid); line-height: 1.8; }

        /* DARK SECTION */
        .rm-dark {
          background: #000; color: #fff; position: relative; overflow: hidden;
        }
        .rm-dark-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 70%);
        }
        .rm-who-grid {
          display: flex; flex-direction: column; gap: 20px; margin-bottom: 48px;
        }
        .rm-who-item {
          display: flex; align-items: center; gap: 16px;
          font-size: 14px; color: rgba(255,255,255,0.7);
        }
        :global(.rm-who-check) { color: var(--red); flex-shrink: 0; }
        .rm-who-close {
          font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.8;
          max-width: 560px;
        }

        /* CTA */
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
          .rm-grid { grid-template-columns: 1fr; }
          .rm-card { padding: 28px 20px; }
          .rm-comparison { grid-template-columns: 1fr; }
          .rm-comp-divider { width: 100%; height: 1px; flex-direction: row; }
          .rm-statement { padding: 64px 16px; }
          .rm-statement-h2 { font-size: clamp(22px, 5vw, 36px); }
          .rm-cta { padding: 64px 16px; }
          .rm-cta-h2 { font-size: clamp(36px, 12vw, 64px); }
        }
      `}</style>
    </div>
  )
}
