"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Check, X } from "lucide-react"

export default function BuildProgramPage() {
  return (
    <div className="rm-page">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="rm-hero">
          <div className="rm-container">
            <div className="rm-phase-tag">The Container</div>
            <h1 className="rm-hero-h1">
              BUILD<br />
              <span className="accent">PROGRAM.</span>
            </h1>
            <p className="rm-hero-sub">
              Learn to build with AI. Train yourself to think, architect, and operate with AI infrastructure — so you never depend on anyone again. The container to become dangerous with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link href="/apply" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
                Apply for the Program <ArrowRight size={16} />
              </Link>
            </div>
            <div className="rm-hero-stats">
              <div className="rm-stat">
                <div className="rm-stat-num">YOU</div>
                <div className="rm-stat-label">Learn to Build</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">AI</div>
                <div className="rm-stat-label">Train Yourself</div>
              </div>
              <div className="rm-stat">
                <div className="rm-stat-num">OWN</div>
                <div className="rm-stat-label">Your Systems</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="rm-section rm-dark">
          <div className="rm-dark-grid" />
          <div className="rm-container">
            <div className="rm-eyebrow rm-eyebrow-light">Who This Is For</div>
            <h2 className="rm-heading rm-heading-light">FOR PEOPLE WHO WANT TO <span className="accent">BUILD IT THEMSELVES.</span></h2>

            <div className="rm-who-grid">
              {[
                "Founders who want to understand AI — not just use it",
                "Operators who want to build their own automations and workflows",
                "Leaders who want to train their team on AI infrastructure",
                "Builders who want to stop outsourcing and start owning",
                "Anyone who wants to become dangerous with AI — permanently",
              ].map((item, i) => (
                <div key={i} className="rm-who-item">
                  <Check size={16} className="rm-who-check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="rm-who-close">
              If that sounds like you, the next step is to apply. We only take a limited number of builds per month to ensure quality.
            </p>
          </div>
        </section>

        {/* THE SHIFT */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">The Shift</div>
            <h2 className="rm-heading">STOP OUTSOURCING. <span className="accent">START OWNING.</span></h2>

            <div className="rm-prose">
              <p>Every time you hire someone to build your AI, you become dependent on them. When they leave, the system breaks. When you want to change something, you wait. You are renting capability instead of owning it.</p>
              <p>The Build Program is a container where you learn to build AI infrastructure yourself. Not theory. Not frameworks. You build real systems alongside us — and walk away knowing how to do it on your own.</p>
              <p className="rm-highlight">This is not a course. This is a container where you train yourself to think, architect, and operate with AI — so you never need to depend on anyone again.</p>
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
                  <li>You depend on developers for every change</li>
                  <li>AI feels overwhelming and confusing</li>
                  <li>You watch tutorials but never implement</li>
                  <li>Every automation requires hiring someone</li>
                  <li>You know AI matters but do not know where to start</li>
                  <li>Your competitors are moving faster than you</li>
                </ul>
              </div>
              <div className="rm-comp-divider">
                <span className="rm-comp-vs">VS</span>
              </div>
              <div className="rm-comp-side rm-comp-after">
                <div className="rm-comp-header">
                  <Check size={16} />
                  <span>After the Container</span>
                </div>
                <ul className="rm-comp-list">
                  <li>You build and modify your own AI systems</li>
                  <li>AI is a tool you understand and operate</li>
                  <li>You have real systems running in your business</li>
                  <li>You can automate anything without hiring</li>
                  <li>You think in systems, not tasks</li>
                  <li>You are the one moving fast</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BIG STATEMENT */}
        <section className="rm-statement">
          <div className="rm-statement-bg">BUILD</div>
          <div className="rm-container">
            <h2 className="rm-statement-h2">
              Hiring someone to build your AI makes you dependent.<br />
              <span className="accent">Learning to build it yourself makes you dangerous.</span>
            </h2>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">What You Learn</div>
            <h2 className="rm-heading">YOUR SKILLSET, <span className="accent">PIECE BY PIECE.</span></h2>

            <div className="rm-grid">
              {[
                { n: "01", title: "AI THINKING", desc: "Learn how to think about problems through the lens of AI infrastructure. What to automate, what to augment, and what to leave alone. This is the mental model that makes everything else work." },
                { n: "02", title: "BUILD YOUR OWN WORKFLOWS", desc: "Hands-on construction. You build real AI workflows for your business — lead follow-up, onboarding, content, operations. Not watching someone else do it. You do it, with guidance." },
                { n: "03", title: "CONNECT YOUR STACK", desc: "Learn to wire your tools into one operating layer. CRM, email, calendar, invoicing — you learn how to connect them so data flows and systems talk to each other without you." },
                { n: "04", title: "OPERATE INDEPENDENTLY", desc: "Walk away with the ability to build, modify, and scale your own AI systems. No more waiting on developers. No more paying for every change. You own the skill." },
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


        {/* OBJECTIONS */}
        <section className="rm-section">
          <div className="rm-container">
            <div className="rm-eyebrow">Straight Talk</div>
            <h2 className="rm-heading">QUESTIONS YOU ARE <span className="accent">ALREADY ASKING.</span></h2>

            <div className="rm-faq">
              {[
                { q: "Is this a course?", a: "No. Courses give you information and leave you to figure it out. The Build Program is a hands-on container where you build real systems for your business with direct guidance. You leave with working infrastructure and the skills to maintain and expand it." },
                { q: "Do I need to be technical?", a: "No. If you can use a computer and follow instructions, you can do this. AI tools today are designed for operators, not engineers. We teach you the thinking and the process — the tools handle the complexity." },
                { q: "How is this different from watching YouTube tutorials?", a: "YouTube teaches you what is possible. The Build Program teaches you how to do it — on your business, with your data, for your specific problems. You leave with real systems running, not a bookmark folder." },
                { q: "What happens after the container?", a: "You keep building. That is the point. You have the skills, the mental models, and the foundation to build and scale AI infrastructure on your own. If you want us to build for you, that is what the Single Problem Build and Full Buildout are for." },
                { q: "What if I want you to just build it for me instead?", a: "That is what Phase 01 is for — the Single Problem Build. We take one problem, solve it in 7 days, and hand it back. The Build Program is for people who want to learn to do it themselves." },
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
              LEARN TO <span className="accent">BUILD.</span>
            </h2>
            <p className="rm-cta-sub">
              Stop depending on others to build your AI. Train yourself to think, architect, and operate — and own the skill forever.
            </p>
            <Link href="/apply" className="rm-btn" style={{ background: '#D90019', color: '#ffffff' }}>
              Apply for the Build Program <ArrowRight size={16} />
            </Link>
            <div className="rm-next-phase">
              <span>Want us to build for you instead?</span>
              <Link href="/roadmap/single-build">Single Problem Build &rarr;</Link>
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

        /* TIMELINE */
        .rm-timeline { display: flex; flex-direction: column; gap: 0; }
        .rm-tl-item { display: flex; gap: 32px; }
        .rm-tl-marker { display: flex; flex-direction: column; align-items: center; padding-top: 6px; }
        .rm-tl-dot { width: 12px; height: 12px; border: 2px solid var(--red); border-radius: 50%; flex-shrink: 0; }
        .rm-tl-line { width: 2px; flex: 1; background: var(--border); margin: 8px 0; }
        .rm-tl-content { padding-bottom: 48px; }
        .rm-tl-week {
          font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase;
          color: var(--red); margin-bottom: 8px;
        }
        .rm-tl-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; letter-spacing: 0.04em; color: var(--black); margin-bottom: 10px;
        }
        .rm-tl-desc { font-size: 13px; color: var(--mid); line-height: 1.7; max-width: 600px; }

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
          .rm-tl-item { gap: 20px; }
          .rm-cta { padding: 64px 16px; }
          .rm-cta-h2 { font-size: clamp(36px, 12vw, 64px); }
        }
      `}</style>
    </div>
  )
}
