"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="fn">

      {/* STICKY NAV */}
      <nav className="fn-nav">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <Link href="/audit" className="fn-nav-cta">
          Free AI Audit <ArrowRight size={12} />
        </Link>
      </nav>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="fn-hero">
          <div className="fn-hero-content">
            <p className="fn-tag">Your AI Department</p>
            <h1 className="fn-h1">
              WE MAKE YOUR<br />
              BUSINESS<br />
              <span>AI-NATIVE.</span>
            </h1>
            <p className="fn-sub">
              We become your AI wing — training technology to do the work so humans can do the living. Take our free audit and see exactly what to hand off first.
            </p>
            <Link href="/audit" className="fn-hero-cta">
              Get My Free Audit <ArrowRight size={18} />
            </Link>
            <p className="fn-micro">Takes 3 minutes. No call required.</p>
          </div>
          <div className="fn-hero-bg">
            <div className="fn-grid-overlay" />
            <div className="fn-glow" />
          </div>
          <div className="fn-scroll-indicator">
            <div className="fn-scroll-line" />
          </div>
        </section>

        {/* ═══ PROBLEM — tight, scannable ═══ */}
        <section className="fn-problem">
          <div className="fn-container">
            <div className="fn-problem-grid">
              <div>
                <p className="fn-label">The Problem</p>
                <h2 className="fn-h2">YOU ARE<br /><span>THE SYSTEM.</span></h2>
              </div>
              <div className="fn-problem-list">
                <p className="fn-problem-item">You follow up manually</p>
                <p className="fn-problem-item">You answer the same things daily</p>
                <p className="fn-problem-item">You keep everything moving</p>
                <p className="fn-problem-item">You fix what breaks</p>
                <div className="fn-problem-callout">
                  That&apos;s not a business. That&apos;s a job you built for yourself.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ REFRAME ═══ */}
        <section className="fn-bridge">
          <div className="fn-bridge-bg">FREEDOM</div>
          <div className="fn-container fn-bridge-inner">
            <h2 className="fn-bridge-h2">
              <span>AI-powered businesses</span><br />
              don&apos;t need you doing everything.
            </h2>
          </div>
        </section>


        {/* ═══ PROCESS — minimal ═══ */}
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">How It Works</p>
            <div className="fn-process">
              {[
                { num: "1", title: "Tell us how your business runs", desc: "3 minute audit" },
                { num: "2", title: "Get your breakdown", desc: "Instant results" },
                { num: "3", title: "Decide your next move", desc: "DIY or done for you" },
              ].map((step, i) => (
                <div key={i} className="fn-process-step">
                  <div className="fn-process-num">{step.num}</div>
                  <div>
                    <h3 className="fn-process-title">{step.title}</h3>
                    <p className="fn-process-desc">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE SOLUTION — 6 Layers ═══ */}
        <section className="fn-section">
          <div className="fn-container">
            <p className="fn-label">Your AI Wing</p>
            <h2 className="fn-h2">WE BUILD THE <span>AI-NATIVE</span><br />OPERATING SYSTEM.</h2>

            <div className="fn-layers">
              {[
                { num: "01", title: "Attract", desc: "Get found without chasing." },
                { num: "02", title: "Capture", desc: "No lead gets missed." },
                { num: "03", title: "Convert", desc: "Deals move without follow up." },
                { num: "04", title: "Deliver", desc: "Operations run without you." },
                { num: "05", title: "Retain", desc: "Clients come back automatically." },
                { num: "06", title: "Intelligence", desc: "You see everything clearly." },
              ].map((layer, i) => (
                <div key={i} className="fn-layer">
                  <div className="fn-layer-num">{layer.num}</div>
                  <div className="fn-layer-content">
                    <h3 className="fn-layer-title">{layer.title}</h3>
                    <p className="fn-layer-desc">{layer.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW YOU WORK WITH US ═══ */}
        <section className="fn-section fn-section-alt" style={{ borderTop: "1px solid var(--gray-100)" }}>
          <div className="fn-container">
            <div className="fn-roadmap-intro">
              <p className="fn-label">Your AI Department</p>
              <h2 className="fn-h2">START SMALL. <span>THEN SCALE.</span></h2>
            </div>

            <div className="fn-roadmap-v2">
              <div className="fn-roadmap-line" />
              {[
                { phase: "01", title: "Fix One Problem", desc: "14 day build. Remove a key bottleneck.", tag: "$5K+", href: "/apply", accent: true, meta: "Proof" },
                { phase: "02", title: "Full System Build", desc: "All core operations automated.", tag: "$25–75K+", href: "/apply", meta: "Scale" },
                { phase: "03", title: "Your AI Wing", desc: "We become your AI department.", tag: "$5–10K/mo", href: "/apply", meta: "Engine" },
                { phase: "04", title: "Chief AI Officer", desc: "Revenue share. Full alignment.", tag: "Partnership", href: "/apply", meta: "Partner" },
              ].map((s, i) => (
                <Link key={i} href={s.href} className={`fn-rm-step ${s.accent ? 'fn-rm-step-accent' : ''}`}>
                  <div className="fn-rm-dot" />
                  <div className="fn-rm-step-content">
                    <div className="fn-rm-step-header">
                      <span className="fn-rm-step-phase">{s.phase}</span>
                      <span className="fn-rm-step-meta">{s.meta}</span>
                    </div>
                    <h3 className="fn-rm-step-title">{s.title}</h3>
                    <p className="fn-rm-step-desc">{s.desc}</p>
                    <div className="fn-rm-step-footer">
                      <span className="fn-rm-step-tag">{s.tag}</span>
                      <span className="fn-rm-step-link">Apply <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR — compact ═══ */}
        <section className="fn-section">
          <div className="fn-container">
            <div className="fn-for-grid">
              <div className="fn-for-yes">
                <p className="fn-label">This is for you if</p>
                <ul className="fn-for-list">
                  <li>You&apos;re doing $500K+</li>
                  <li>You feel busy but things are messy</li>
                  <li>You know you&apos;re wasting time</li>
                  <li>You want systems, not more work</li>
                </ul>
              </div>
              <div className="fn-for-no">
                <p className="fn-label" style={{ color: 'var(--gray-400)' }}>Not for</p>
                <ul className="fn-for-list fn-for-list-dim">
                  <li>People looking for free ideas only</li>
                  <li>People who won&apos;t execute</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRY PLAYBOOKS ═══ */}
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">Built for Your Industry</p>
            <h2 className="fn-h2">INDUSTRY <span>PLAYBOOKS.</span></h2>
            <div className="fn-playbooks-list">
              {[
                { slug: "saas", name: "SaaS Founders" },
                { slug: "course-creators", name: "Course Creators" },
                { slug: "coaching", name: "Coaches & Consultants" },
                { slug: "ecommerce", name: "E-commerce & Retail" },
                { slug: "agencies", name: "Agencies" },
                { slug: "home-services", name: "Home Services" },
                { slug: "healthcare", name: "Healthcare & Dental" },
                { slug: "legal-finance", name: "Law Firms & Accounting" },
                { slug: "real-estate", name: "Real Estate" },
                { slug: "hospitality", name: "Restaurants & Hospitality" },
                { slug: "construction", name: "Construction & Trades" },
                { slug: "manufacturing", name: "Manufacturing & Logistics" },
                { slug: "membership", name: "Membership & Community" },
                { slug: "digital-products", name: "Digital Products" },
                { slug: "professional-services", name: "Professional Services" },
                { slug: "solar-installers", name: "Solar & Renewables" },
                { slug: "franchise-owners", name: "Franchise Owners" },
                { slug: "private-equity", name: "Private Equity & M&A" },
                { slug: "staffing-agencies", name: "Staffing & Recruiting" },
                { slug: "logistics-freight", name: "Logistics & Freight" },
                { slug: "med-spas", name: "Med Spas & Aesthetics" },
                { slug: "mortgage-brokers", name: "Mortgage Brokers" },
                { slug: "roofing", name: "Roofing & Restoration" },
                { slug: "luxury-real-estate", name: "Luxury Real Estate" },
                { slug: "agricultural", name: "Agricultural & Farming" },
                { slug: "financial-advisors", name: "Financial Advisors" },
                { slug: "senior-living", name: "Senior Living Facilities" },
                { slug: "yacht-charters", name: "Yacht Charter & Marine" },
                { slug: "venues-events", name: "Venues & Events" },
                { slug: "pool-construction", name: "Pool Construction" },
              ].map((ind, i) => (
                <Link key={i} href={`/industry-categories/${ind.slug}`} className="fn-pb-item">
                  <span className="fn-pb-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="fn-pb-name">{ind.name}</span>
                  <span className="fn-pb-line" />
                  <ArrowRight size={14} className="fn-pb-arrow" />
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ═══ PARTNER CTA ═══ */}
        <section className="fn-partner-cta">
          <div className="fn-container fn-partner-inner">
            <h2 className="fn-partner-h2">Finding Partners to Build<br /><span>Industry Playbooks</span></h2>
            <p className="fn-partner-desc">
              Domain experts who want to formalize their industry&apos;s logic into autonomous agents.
              We build the tech. You provide the expertise.
            </p>
            <Link href="/apply" className="fn-partner-btn">
              BECOME A BUILD PARTNER <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="fn-footer">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <div className="fn-footer-links">
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/audit">Audit</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:elianatech@yahoo.com">Contact</a>
          <Link href="/admin" className="fn-admin">Admin</Link>
        </div>
        <span className="fn-copy">&copy; 2026 ELIANATECH</span>
      </footer>

      <style jsx>{`
        /* ═══ BASE ═══ */
        .fn {
          --red: #D90019; --black: #0C0C0C; --white: #FAFAF8;
          --gray-50: #F7F7F5; --gray-100: #EDEDEB; --gray-200: #E0E0DC;
          --gray-400: #999; --gray-500: #666; --gray-600: #444;
          background: var(--white); color: var(--black);
          font-family: var(--font-dm-mono), monospace;
        }

        /* ═══ NAV ═══ */
        .fn-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 48px; height: 56px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(250,250,248,0.85);
          backdrop-filter: blur(16px) saturate(180%);
          border-bottom: 1px solid var(--gray-100);
        }
        .fn-logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; letter-spacing: 0.12em;
          text-decoration: none; color: var(--black);
        }
        .fn-logo span { color: var(--red); }
        .fn-nav-cta {
          font-size: 11px; letter-spacing: 0.08em;
          padding: 8px 16px; text-decoration: none;
          display: flex; align-items: center; gap: 6px;
          background: var(--red); color: #fff;
          transition: opacity 0.2s;
        }
        .fn-nav-cta:hover { opacity: 0.8; }

        /* ═══ HERO ═══ */
        .fn-hero {
          min-height: 100vh; position: relative;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; background: var(--white);
        }
        .fn-hero-content {
          position: relative; z-index: 10;
          padding: 120px 48px 80px;
          display: flex; flex-direction: column;
          align-items: center; text-align: center;
          max-width: 1200px; width: 100%;
        }
        .fn-tag {
          font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--red); margin-bottom: 32px; font-weight: 500;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .fn-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(60px, 11vw, 160px); line-height: 0.88;
          color: var(--black); margin-bottom: 40px;
          letter-spacing: -0.02em; text-transform: uppercase;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
        }
        .fn-h1 span { color: var(--red); }
        .fn-sub {
          font-size: clamp(15px, 1.4vw, 19px); color: var(--gray-500);
          line-height: 1.8; max-width: 560px; margin-bottom: 48px;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards;
        }
        .fn-hero-cta {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; letter-spacing: 0.08em;
          padding: 22px 64px; text-decoration: none;
          background: var(--red); color: #fff;
          display: inline-flex; align-items: center; gap: 12px;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 10px 40px rgba(217,0,25,0.2);
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.6s forwards;
        }
        .fn-hero-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(217,0,25,0.3);
          background: #c00016;
        }
        .fn-micro {
          font-size: 11px; color: var(--gray-400); margin-top: 20px;
          letter-spacing: 0.02em;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s forwards;
        }
        .fn-hero-bg { position: absolute; inset: 0; z-index: 1; }
        .fn-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }
        .fn-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw; height: 80vh;
          background: radial-gradient(circle, rgba(217,0,25,0.03) 0%, transparent 70%);
          pointer-events: none;
        }
        .fn-scroll-indicator {
          position: absolute; bottom: 40px; left: 50%;
          transform: translateX(-50%);
          z-index: 10; opacity: 0;
          animation: fnFadeIn 1s ease 1.2s forwards;
        }
        .fn-scroll-line {
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--red), transparent);
          animation: fnScrollLine 2s ease-in-out infinite;
          transform-origin: top;
        }

        @keyframes fnFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fnFadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes fnScrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          50.1% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* ═══ PROBLEM ═══ */
        .fn-problem {
          padding: 100px 48px;
          border-top: 1px solid var(--gray-100);
        }
        .fn-problem-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px; align-items: start;
        }
        .fn-problem-list {
          display: flex; flex-direction: column; gap: 14px;
          padding-top: 8px;
        }
        .fn-problem-item {
          font-size: 15px; color: var(--gray-500);
          padding-left: 20px; position: relative; line-height: 1.7;
        }
        .fn-problem-item::before {
          content: ''; position: absolute; left: 0; top: 12px;
          width: 8px; height: 1px; background: var(--red);
        }
        .fn-problem-callout {
          margin-top: 24px; font-size: 15px; font-weight: 600;
          color: var(--black); border-left: 3px solid var(--red);
          padding-left: 20px; line-height: 1.6;
        }

        /* ═══ SECTIONS ═══ */
        .fn-section { padding: 100px 48px; }
        .fn-section-alt { background: var(--gray-50); }
        .fn-container { max-width: 1000px; margin: 0 auto; }
        .fn-label {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--red); margin-bottom: 12px;
        }
        .fn-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(36px, 5vw, 64px); line-height: 0.95;
          color: var(--black); margin-bottom: 16px; letter-spacing: 0.01em;
        }
        .fn-h2 span { color: var(--red); }

        /* ═══ BRIDGE / REFRAME ═══ */
        .fn-bridge {
          padding: 100px 48px; background: var(--black);
          position: relative; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .fn-bridge-bg {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 30vw; color: rgba(255,255,255,0.02);
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%); white-space: nowrap;
          pointer-events: none; user-select: none;
        }
        .fn-bridge-inner { text-align: center; position: relative; z-index: 2; }
        .fn-bridge-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 72px); line-height: 1.1;
          color: #fff; letter-spacing: 0.02em;
        }
        .fn-bridge-h2 span { color: var(--red); }

        /* ═══ AUDIT OFFER ═══ */
        .fn-audit-row {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 16px; margin: 48px 0 56px;
        }
        .fn-audit-card {
          padding: 28px 24px;
          border: 1px solid var(--gray-100);
          transition: border-color 0.2s;
        }
        .fn-audit-card:hover { border-color: var(--red); }
        .fn-audit-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 32px; color: var(--red); line-height: 1;
          display: block; margin-bottom: 12px;
        }
        .fn-audit-card p {
          font-size: 14px; color: var(--gray-600); line-height: 1.5;
        }
        .fn-audit-cta {
          text-align: center;
        }

        /* ═══ PROCESS ═══ */
        .fn-process {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .fn-process-step {
          display: flex; align-items: flex-start; gap: 20px;
          padding: 28px 24px;
          background: var(--white); border: 1px solid var(--gray-100);
        }
        .fn-process-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 40px; color: var(--red); line-height: 1;
          flex-shrink: 0;
        }
        .fn-process-title {
          font-size: 14px; font-weight: 700; color: var(--black);
          margin-bottom: 4px;
        }
        .fn-process-desc {
          font-size: 12px; color: var(--gray-400);
        }

        /* ═══ INFRASTRUCTURE LAYERS ═══ */
        .fn-layers {
          display: flex; flex-direction: column; gap: 1px;
          background: var(--gray-200); border: 1px solid var(--gray-200);
          margin-top: 48px;
        }
        .fn-layer {
          display: grid; grid-template-columns: 72px 1fr;
          background: var(--white); transition: background 0.2s;
        }
        .fn-layer:hover { background: var(--gray-50); }
        .fn-layer-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px; color: var(--gray-200);
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid var(--gray-200); transition: color 0.2s;
        }
        .fn-layer:hover .fn-layer-num { color: var(--red); }
        .fn-layer-content {
          padding: 20px 28px;
          display: flex; align-items: center; gap: 16px;
        }
        .fn-layer-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; letter-spacing: 0.04em;
          color: var(--black); white-space: nowrap;
        }
        .fn-layer-desc {
          font-size: 12px; color: var(--gray-400); line-height: 1.5;
        }

        /* ═══ WHO THIS IS FOR ═══ */
        .fn-for-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 64px;
        }
        .fn-for-list {
          list-style: none; padding: 0; margin: 16px 0 0;
          display: flex; flex-direction: column; gap: 12px;
        }
        .fn-for-list li {
          font-size: 14px; color: var(--gray-600);
          padding-left: 20px; position: relative; line-height: 1.6;
        }
        .fn-for-list li::before {
          content: ''; position: absolute; left: 0; top: 10px;
          width: 8px; height: 8px; border: 2px solid var(--red);
        }
        .fn-for-list-dim li { color: var(--gray-400); }
        .fn-for-list-dim li::before { border-color: var(--gray-200); }

        /* ═══ CLOSE ═══ */
        .fn-close {
          background: var(--black); padding: 120px 48px;
          text-align: center;
        }
        .fn-close-inner {
          max-width: 700px;
          display: flex; flex-direction: column; align-items: center;
        }
        .fn-close-dim {
          font-size: 15px; color: rgba(255,255,255,0.3);
          margin-bottom: 20px;
        }
        .fn-close-or {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 18px; color: rgba(255,255,255,0.12);
          margin-bottom: 28px; letter-spacing: 0.2em;
        }
        .fn-close-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(40px, 7vw, 80px); line-height: 0.95;
          color: #fff; margin-bottom: 40px;
        }
        .fn-close-h2 span { color: var(--red); }

        /* ═══ PLAYBOOKS ═══ */
        .fn-playbooks-list {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 0 40px; margin-top: 32px;
          border-top: 1px solid var(--gray-100);
        }
        .fn-pb-item {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 0;
          border-bottom: 1px solid var(--gray-100);
          text-decoration: none; color: var(--black);
          transition: all 0.2s;
        }
        .fn-pb-item:hover { padding-left: 8px; }
        .fn-pb-item:hover .fn-pb-name { color: var(--red); }
        .fn-pb-item:hover .fn-pb-num { color: var(--red); }
        .fn-pb-item:hover .fn-pb-arrow { color: var(--red); transform: translateX(4px); }
        .fn-pb-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 14px; color: var(--gray-200); width: 24px;
          flex-shrink: 0; transition: color 0.2s;
        }
        .fn-pb-name {
          font-size: 13px; font-weight: 500;
          transition: color 0.2s;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .fn-pb-line { flex: 1; height: 1px; }
        :global(.fn-pb-arrow) { color: var(--gray-300); transition: all 0.2s; flex-shrink: 0; }

        /* ═══ ROADMAP ═══ */
        .fn-roadmap-intro { margin-bottom: 56px; }
        .fn-roadmap-v2 {
          position: relative;
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .fn-roadmap-line {
          position: absolute; top: 40px; left: 0; right: 0;
          height: 1px; background: var(--gray-200); z-index: 1;
        }
        .fn-rm-step {
          position: relative; z-index: 2;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column;
        }
        .fn-rm-dot {
          width: 80px; height: 80px; background: var(--white);
          border: 1px solid var(--gray-200); border-radius: 50%;
          margin-bottom: 28px; position: relative;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .fn-rm-dot::after {
          content: ''; position: absolute; inset: 8px;
          border: 1px dashed var(--gray-200); border-radius: 50%;
          transition: all 0.4s ease;
        }
        .fn-rm-step:hover .fn-rm-dot {
          border-color: var(--red); transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(217,0,25,0.1);
        }
        .fn-rm-step:hover .fn-rm-dot::after { border-color: var(--red); transform: rotate(45deg); }
        .fn-rm-step-accent .fn-rm-dot { background: var(--red); border-color: var(--red); }
        .fn-rm-step-accent .fn-rm-dot::after { border-color: rgba(255,255,255,0.3); }
        .fn-rm-step-header {
          display: flex; align-items: baseline; gap: 8px; margin-bottom: 10px;
        }
        .fn-rm-step-phase {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px; color: var(--black); line-height: 1;
        }
        .fn-rm-step-meta {
          font-size: 10px; color: var(--gray-400); text-transform: uppercase;
          letter-spacing: 0.1em; font-weight: 600;
        }
        .fn-rm-step-title {
          font-size: 14px; font-weight: 700; color: var(--black); margin-bottom: 8px;
        }
        .fn-rm-step-desc {
          font-size: 12px; color: var(--gray-500); line-height: 1.6;
          margin-bottom: 20px; flex: 1;
        }
        .fn-rm-step-footer {
          display: flex; flex-direction: column; gap: 10px;
          padding-top: 14px; border-top: 1px solid var(--gray-100);
        }
        .fn-rm-step-tag {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; color: var(--red);
        }
        .fn-rm-step-link {
          font-size: 11px; font-weight: 600; color: var(--black);
          text-transform: uppercase; letter-spacing: 0.05em;
          display: flex; align-items: center; gap: 6px;
          transition: gap 0.2s;
        }
        .fn-rm-step:hover .fn-rm-step-link { gap: 10px; color: var(--red); }

        /* ═══ PARTNER CTA ═══ */
        .fn-partner-cta {
          background: var(--red); padding: 80px 48px;
          color: #fff; text-align: center;
        }
        .fn-partner-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 56px); line-height: 1;
          margin-bottom: 20px; letter-spacing: 0.02em;
        }
        .fn-partner-h2 span { color: rgba(255,255,255,0.7); }
        .fn-partner-desc {
          font-size: 14px; line-height: 1.7;
          max-width: 560px; margin: 0 auto 32px;
          color: rgba(255,255,255,0.85);
        }
        .fn-partner-btn {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 18px; letter-spacing: 0.08em;
          padding: 18px 40px; text-decoration: none;
          background: #fff; color: var(--red);
          transition: all 0.3s;
        }
        .fn-partner-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.15);
          background: var(--black); color: #fff;
        }

        /* ═══ FOOTER ═══ */
        .fn-footer {
          padding: 32px 48px;
          display: flex; align-items: center; justify-content: space-between;
          border-top: 1px solid var(--gray-100);
        }
        .fn-footer-links { display: flex; gap: 24px; }
        .fn-footer-links a {
          font-size: 11px; color: var(--gray-400);
          text-decoration: none; transition: color 0.2s;
        }
        .fn-footer-links a:hover { color: var(--black); }
        .fn-copy { font-size: 10px; color: var(--gray-400); }
        .fn-admin { opacity: 0.1; }
        .fn-admin:hover { opacity: 1; }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width: 900px) {
          .fn-nav { padding: 0 16px; }
          .fn-nav-cta { padding: 6px 12px; font-size: 10px; }
          .fn-hero-content { padding: 100px 20px 56px; }
          .fn-tag { font-size: 10px; margin-bottom: 16px; }
          .fn-h1 { font-size: clamp(48px, 12vw, 80px); margin-bottom: 28px; }
          .fn-sub { font-size: 14px; margin-bottom: 32px; }
          .fn-hero-cta { font-size: 18px; padding: 18px 40px; }
          .fn-problem { padding: 56px 20px; }
          .fn-problem-grid { grid-template-columns: 1fr; gap: 32px; }
          .fn-bridge { padding: 56px 20px; }
          .fn-bridge-h2 { font-size: clamp(24px, 6vw, 40px); }
          .fn-section { padding: 56px 20px; }
          .fn-h2 { font-size: clamp(28px, 8vw, 44px); margin-bottom: 12px; }
          .fn-audit-row { grid-template-columns: 1fr 1fr; gap: 12px; margin: 32px 0 40px; }
          .fn-process { grid-template-columns: 1fr; gap: 12px; }
          .fn-process-step { gap: 16px; }
          .fn-layer { grid-template-columns: 48px 1fr; }
          .fn-layer-num { font-size: 22px; }
          .fn-layer-content { padding: 14px 16px; flex-direction: column; gap: 4px; align-items: flex-start; }
          .fn-layer-title { font-size: 16px; }
          .fn-layer-desc { font-size: 11px; }
          .fn-for-grid { grid-template-columns: 1fr; gap: 32px; }
          .fn-playbooks-list { grid-template-columns: 1fr; gap: 0; }
          .fn-roadmap-v2 { grid-template-columns: 1fr; gap: 32px; }
          .fn-roadmap-line { display: none; }
          .fn-rm-step { flex-direction: row; gap: 20px; align-items: flex-start; }
          .fn-rm-dot { width: 64px; height: 64px; flex-shrink: 0; margin-bottom: 0; }
          .fn-rm-step-content { flex: 1; }
          .fn-rm-step-footer { flex-direction: row; align-items: center; justify-content: space-between; }
          .fn-close { padding: 64px 20px; }
          .fn-close-h2 { font-size: clamp(32px, 10vw, 56px); }
          .fn-partner-cta { padding: 56px 20px; }
          .fn-footer {
            flex-direction: column; gap: 16px;
            text-align: center; padding: 24px 20px;
          }
          .fn-footer-links { flex-wrap: wrap; justify-content: center; gap: 16px; }
        }

        @media (max-width: 500px) {
          .fn-hero-content { padding: 88px 16px 48px; }
          .fn-h1 { font-size: clamp(40px, 13vw, 56px); }
          .fn-sub { font-size: 13px; }
          .fn-hero-cta { font-size: 16px; padding: 16px 36px; width: 100%; justify-content: center; }
          .fn-problem { padding: 48px 16px; }
          .fn-bridge { padding: 48px 16px; }
          .fn-section { padding: 48px 16px; }
          .fn-audit-row { grid-template-columns: 1fr; }
          .fn-close { padding: 56px 16px; }
          .fn-close-h2 { font-size: clamp(28px, 10vw, 44px); }
          .fn-footer { padding: 20px 16px; }
        }
      `}</style>
    </div>
  )
}
