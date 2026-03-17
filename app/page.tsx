"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { industries } from "@/lib/industry-data"

export default function HomePage() {
  return (
    <div className="fn">

      {/* STICKY NAV */}
      <nav className="fn-nav">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <Link href="/audit" className="fn-nav-cta">
          Get My Free Audit <ArrowRight size={12} />
        </Link>
      </nav>

      <main>

        {/* ═══ HERO ═══ */}
        <section className="fn-hero">
          <div className="fn-hero-content">
            <p className="fn-tag">Free AI Efficiency Audit</p>
            <h1 className="fn-h1">
              STOP WASTING<br />
              <span>10–30 HOURS</span><br />
              A WEEK.
            </h1>
            <p className="fn-sub">
              Get a free AI audit that shows exactly what to fix first — and how to get your time back.
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

        {/* ═══ PROBLEM ═══ */}
        <section className="fn-problem">
          <div className="fn-container">
            <p className="fn-label">The Problem</p>
            <h2 className="fn-h2">RIGHT NOW YOUR BUSINESS<br /><span>DEPENDS ON YOU.</span></h2>
            <div className="fn-problem-list">
              <p className="fn-problem-item">You follow up manually</p>
              <p className="fn-problem-item">You answer the same things every day</p>
              <p className="fn-problem-item">You keep operations moving</p>
              <p className="fn-problem-item">You fix what breaks</p>
            </div>
            <div className="fn-problem-callout">
              <p className="fn-problem-bold">That&apos;s not a system.</p>
              <p className="fn-problem-dim">That&apos;s you holding everything together.</p>
              <p className="fn-problem-dim">That&apos;s why you feel busy all the time.</p>
            </div>
          </div>
        </section>

        {/* ═══ REFRAME ═══ */}
        <section className="fn-bridge">
          <div className="fn-bridge-bg">SYSTEM</div>
          <div className="fn-container fn-bridge-inner">
            <h2 className="fn-bridge-h2">
              You don&apos;t need more tools.<br />
              You don&apos;t need more leads.<br /><br />
              <span>You need your business to run<br />without you doing everything.</span>
            </h2>
            <p className="fn-bridge-sub">
              Most people try AI and nothing changes. Not because AI doesn&apos;t work — because nothing is actually built into a system.
            </p>
          </div>
        </section>

        {/* ═══ THE AUDIT (Core Offer) ═══ */}
        <section className="fn-section">
          <div className="fn-container fn-audit-offer">
            <p className="fn-label">Your AI Efficiency Audit</p>
            <h2 className="fn-h2">WE BREAK DOWN YOUR BUSINESS<br /><span>AND SHOW YOU.</span></h2>
            <div className="fn-audit-grid">
              <div className="fn-audit-item">
                <span className="fn-audit-num">01</span>
                <p>Where your time is actually going</p>
              </div>
              <div className="fn-audit-item">
                <span className="fn-audit-num">02</span>
                <p>What to automate first</p>
              </div>
              <div className="fn-audit-item">
                <span className="fn-audit-num">03</span>
                <p>What it looks like in your workflow</p>
              </div>
              <div className="fn-audit-item">
                <span className="fn-audit-num">04</span>
                <p>How many hours you get back</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHAT YOU GET ═══ */}
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">What You Get</p>
            <h2 className="fn-h2">AFTER YOU <span>SUBMIT.</span></h2>
            <div className="fn-get-list">
              <div className="fn-get-item">
                <div className="fn-get-check" />
                <p>Your top 3 time leaks</p>
              </div>
              <div className="fn-get-item">
                <div className="fn-get-check" />
                <p>The first system to fix it</p>
              </div>
              <div className="fn-get-item">
                <div className="fn-get-check" />
                <p>A simple breakdown (no tech talk)</p>
              </div>
              <div className="fn-get-item">
                <div className="fn-get-check" />
                <p>Estimated hours saved per week</p>
              </div>
            </div>
            <p className="fn-get-bottom">This is about removing work from your day.</p>
          </div>
        </section>

        {/* ═══ PROCESS ═══ */}
        <section className="fn-section">
          <div className="fn-container">
            <p className="fn-label">How It Works</p>
            <h2 className="fn-h2">THREE <span>STEPS.</span></h2>
            <div className="fn-process">
              <div className="fn-process-step">
                <div className="fn-process-num">1</div>
                <h3 className="fn-process-title">Fill out the audit</h3>
                <p className="fn-process-desc">Tell us how your business runs.</p>
              </div>
              <div className="fn-process-arrow"><ArrowRight size={20} /></div>
              <div className="fn-process-step">
                <div className="fn-process-num">2</div>
                <h3 className="fn-process-title">Get your breakdown</h3>
                <p className="fn-process-desc">We show you exactly what to fix.</p>
              </div>
              <div className="fn-process-arrow"><ArrowRight size={20} /></div>
              <div className="fn-process-step">
                <div className="fn-process-num">3</div>
                <h3 className="fn-process-title">Decide your next move</h3>
                <p className="fn-process-desc">Build it yourself or have us do it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ MID-PAGE CTA ═══ */}
        <section className="fn-mid-cta">
          <div className="fn-container fn-mid-cta-inner">
            <h2 className="fn-mid-h2">Ready to see where your time is going?</h2>
            <Link href="/audit" className="fn-hero-cta" style={{ fontSize: 20, padding: '18px 48px' }}>
              Get My Free Audit <ArrowRight size={16} />
            </Link>
            <p className="fn-micro" style={{ marginTop: 16 }}>Takes 3 minutes. No call required.</p>
          </div>
        </section>

        {/* ═══ TRANSITION ═══ */}
        <section className="fn-transition">
          <div className="fn-container">
            <p className="fn-transition-text">If you want it built, this is what we do.</p>
          </div>
        </section>

        {/* ═══ THE SOLUTION — 6 Layers ═══ */}
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">The Solution</p>
            <h2 className="fn-h2">WE BUILD THE <span>OPERATING SYSTEM</span><br />YOUR BUSINESS IS MISSING.</h2>
            <p className="fn-desc-wide">Not another tool. Not another subscription. A connected system that removes manual work across your business.</p>

            <div className="fn-layers">
              {[
                { num: "01", title: "Attract", desc: "Get found without chasing.", tags: "Website · Content · Lead Gen" },
                { num: "02", title: "Capture", desc: "No lead gets missed.", tags: "AI Answering · Instant Response" },
                { num: "03", title: "Convert", desc: "Deals move without follow up work.", tags: "Pipeline · Proposals · Contracts" },
                { num: "04", title: "Deliver", desc: "Operations run without you.", tags: "Onboarding · Scheduling · Workflows" },
                { num: "05", title: "Retain", desc: "Clients come back automatically.", tags: "Reviews · Reactivation · Nurture" },
                { num: "06", title: "Intelligence", desc: "You see everything clearly.", tags: "Dashboards · Reporting · Planning" },
              ].map((layer, i) => (
                <div key={i} className="fn-layer">
                  <div className="fn-layer-num">{layer.num}</div>
                  <div className="fn-layer-content">
                    <h3 className="fn-layer-title">{layer.title}</h3>
                    <p className="fn-layer-desc">{layer.desc}</p>
                    <p className="fn-layer-tags">{layer.tags}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ HOW YOU WORK WITH US ═══ */}
        <section className="fn-section" style={{ borderTop: "1px solid var(--gray-100)", borderBottom: "1px solid var(--gray-100)" }}>
          <div className="fn-container">
            <div className="fn-roadmap-intro">
              <p className="fn-label">How You Work With Us</p>
              <h2 className="fn-h2">START SMALL.<br /><span>THEN SCALE.</span></h2>
            </div>

            <div className="fn-roadmap-v2">
              <div className="fn-roadmap-line" />
              {[
                { phase: "01", title: "Fix One Problem First", desc: "14 day build. Remove a key bottleneck. Show real time saved.", tag: "$5K+", href: "/apply", accent: true, meta: "The Proof" },
                { phase: "02", title: "Full System Build", desc: "All core operations automated. Systems connected end to end.", tag: "$25–75K+", href: "/apply", meta: "The Scale" },
                { phase: "03", title: "Ongoing AI Department", desc: "Systems evolve as you grow. Continuous improvements.", tag: "$5–10K/mo", href: "/apply", meta: "The Engine" },
                { phase: "04", title: "Long Term Alignment", desc: "Revenue share. Deep integration. Your growth is our growth.", tag: "Partnership", href: "/apply", meta: "The Partner" },
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
                      <span className="fn-rm-step-link">Apply Now <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHO THIS IS FOR ═══ */}
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">Who This Is For</p>
            <h2 className="fn-h2">THIS IS FOR YOU <span>IF.</span></h2>
            <div className="fn-for-grid">
              <div className="fn-for-yes">
                <h3 className="fn-for-heading">You&apos;re a fit if:</h3>
                <ul className="fn-for-list">
                  <li>You&apos;re doing $500K+</li>
                  <li>You feel busy but things are messy</li>
                  <li>You know you&apos;re wasting time</li>
                  <li>You want systems, not more work</li>
                </ul>
              </div>
              <div className="fn-for-no">
                <h3 className="fn-for-heading">Not for:</h3>
                <ul className="fn-for-list fn-for-list-dim">
                  <li>People looking for free ideas only</li>
                  <li>People who won&apos;t execute</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ INDUSTRY PLAYBOOKS ═══ */}
        <section className="fn-section">
          <div className="fn-container">
            <p className="fn-label">Built for Your Industry</p>
            <h2 className="fn-h2">INDUSTRY<br /><span>PLAYBOOKS.</span></h2>
            <p className="fn-desc-wide">Pre-built AI infrastructure blueprints tailored to how your industry actually operates.</p>

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

        {/* ═══ CLOSE ═══ */}
        <section className="fn-close">
          <div className="fn-container fn-close-inner">
            <p className="fn-close-dim">Most businesses stay stuck doing everything themselves.</p>
            <p className="fn-close-or">Or</p>
            <h2 className="fn-close-h2">You fix the system and<br /><span>get your time back.</span></h2>
            <Link href="/audit" className="fn-hero-cta" style={{ fontSize: 22, marginTop: 8 }}>
              Get My Free Audit <ArrowRight size={18} />
            </Link>
            <p className="fn-micro" style={{ marginTop: 16 }}>Takes 3 minutes. No call required.</p>
          </div>
        </section>

        {/* ═══ PARTNER CTA ═══ */}
        <section className="fn-partner-cta">
          <div className="fn-container fn-partner-inner">
            <h2 className="fn-partner-h2">Finding Partners to Build<br /><span>Industry Playbooks</span></h2>
            <p className="fn-partner-desc">
              We are looking for domain experts who want to formalize their industry&apos;s logic into autonomous agents.
              We build the tech. You provide the expertise. Together, we own the digital labor.
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
          <Link href="/custom">Custom</Link>
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
          font-size: 13px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--red); margin-bottom: 32px; font-weight: 500;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .fn-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(56px, 10vw, 140px); line-height: 0.88;
          color: var(--black); margin-bottom: 40px;
          letter-spacing: -0.02em; text-transform: uppercase;
          opacity: 0; animation: fnFadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards;
        }
        .fn-h1 span { color: var(--red); }
        .fn-sub {
          font-size: clamp(15px, 1.4vw, 19px); color: var(--gray-500);
          line-height: 1.7; max-width: 640px; margin-bottom: 48px;
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
          padding: 96px 48px; background: var(--white);
          border-top: 1px solid var(--gray-100);
        }
        .fn-problem-list {
          display: flex; flex-direction: column; gap: 12px;
          margin: 40px 0 48px; max-width: 500px;
        }
        .fn-problem-item {
          font-size: 15px; color: var(--gray-600);
          padding-left: 20px; position: relative; line-height: 1.7;
        }
        .fn-problem-item::before {
          content: ''; position: absolute; left: 0; top: 12px;
          width: 8px; height: 1px; background: var(--red);
        }
        .fn-problem-callout {
          border-left: 3px solid var(--red);
          padding: 24px 32px; background: var(--gray-50);
          max-width: 560px;
        }
        .fn-problem-bold {
          font-size: 18px; font-weight: 700; color: var(--black);
          margin-bottom: 8px;
        }
        .fn-problem-dim {
          font-size: 14px; color: var(--gray-500); line-height: 1.7;
        }

        /* ═══ SECTIONS ═══ */
        .fn-section { padding: 96px 48px; }
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
        .fn-desc-wide {
          font-size: 14px; color: var(--gray-500); line-height: 1.8;
          max-width: 640px; margin-bottom: 48px;
        }

        /* ═══ BRIDGE / REFRAME ═══ */
        .fn-bridge {
          padding: 120px 48px; background: var(--black);
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
          font-size: clamp(28px, 4vw, 56px); line-height: 1.15;
          color: #fff; letter-spacing: 0.02em;
        }
        .fn-bridge-h2 span { color: var(--red); }
        .fn-bridge-sub {
          font-size: 14px; color: rgba(255,255,255,0.4);
          line-height: 1.8; max-width: 520px; margin: 32px auto 0;
        }

        /* ═══ AUDIT OFFER ═══ */
        .fn-audit-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 24px; margin-top: 48px;
        }
        .fn-audit-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 24px; background: var(--gray-50);
          border: 1px solid var(--gray-100);
          transition: border-color 0.2s;
        }
        .fn-audit-item:hover { border-color: var(--red); }
        .fn-audit-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 28px; color: var(--red); line-height: 1; flex-shrink: 0;
        }
        .fn-audit-item p {
          font-size: 15px; color: var(--gray-600); line-height: 1.6;
          padding-top: 4px;
        }

        /* ═══ WHAT YOU GET ═══ */
        .fn-get-list {
          display: flex; flex-direction: column; gap: 16px;
          margin: 40px 0 32px; max-width: 500px;
        }
        .fn-get-item {
          display: flex; align-items: center; gap: 16px;
        }
        .fn-get-check {
          width: 20px; height: 20px; flex-shrink: 0;
          border: 2px solid var(--red); position: relative;
        }
        .fn-get-check::after {
          content: ''; position: absolute;
          left: 4px; top: 1px; width: 6px; height: 10px;
          border-right: 2px solid var(--red);
          border-bottom: 2px solid var(--red);
          transform: rotate(45deg);
        }
        .fn-get-item p {
          font-size: 15px; color: var(--gray-600); line-height: 1.5;
        }
        .fn-get-bottom {
          font-size: 16px; font-weight: 700; color: var(--black);
          border-left: 3px solid var(--red); padding-left: 20px;
          margin-top: 40px;
        }

        /* ═══ PROCESS ═══ */
        .fn-process {
          display: flex; align-items: flex-start; gap: 16px;
          margin-top: 48px;
        }
        .fn-process-step {
          flex: 1; text-align: center;
          padding: 32px 24px;
          background: var(--white); border: 1px solid var(--gray-100);
        }
        .fn-process-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 48px; color: var(--red); line-height: 1;
          margin-bottom: 16px;
        }
        .fn-process-title {
          font-size: 15px; font-weight: 700; color: var(--black);
          margin-bottom: 8px; text-transform: uppercase;
          letter-spacing: 0.02em;
        }
        .fn-process-desc {
          font-size: 13px; color: var(--gray-500); line-height: 1.6;
        }
        .fn-process-arrow {
          color: var(--gray-200); padding-top: 56px; flex-shrink: 0;
        }

        /* ═══ TRANSITION ═══ */
        .fn-transition {
          padding: 64px 48px; background: var(--gray-50);
          text-align: center;
          border-top: 1px solid var(--gray-100);
          border-bottom: 1px solid var(--gray-100);
        }
        .fn-transition-text {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(24px, 3.5vw, 40px);
          color: var(--gray-400); letter-spacing: 0.02em;
        }

        /* ═══ INFRASTRUCTURE LAYERS ═══ */
        .fn-layers {
          display: flex; flex-direction: column; gap: 1px;
          background: var(--gray-200); border: 1px solid var(--gray-200);
        }
        .fn-layer {
          display: grid; grid-template-columns: 80px 1fr;
          background: var(--white); transition: background 0.2s;
        }
        .fn-layer:hover { background: var(--gray-50); }
        .fn-layer-num {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 32px; color: var(--gray-200);
          display: flex; align-items: center; justify-content: center;
          border-right: 1px solid var(--gray-200); transition: color 0.2s;
        }
        .fn-layer:hover .fn-layer-num { color: var(--red); }
        .fn-layer-content { padding: 28px 32px; }
        .fn-layer-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; letter-spacing: 0.04em;
          color: var(--black); margin-bottom: 6px;
        }
        .fn-layer-desc {
          font-size: 12px; color: var(--gray-500); line-height: 1.7; margin-bottom: 10px;
        }
        .fn-layer-tags {
          font-size: 10px; color: var(--gray-400); letter-spacing: 0.02em; line-height: 1.6;
        }

        /* ═══ MID CTA ═══ */
        .fn-mid-cta {
          padding: 72px 48px; background: var(--white);
          border-top: 1px solid var(--gray-100);
          border-bottom: 1px solid var(--gray-100);
          text-align: center;
        }
        .fn-mid-cta-inner { max-width: 600px; }
        .fn-mid-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(28px, 4vw, 48px); line-height: 1.05;
          color: var(--black); margin-bottom: 28px;
        }

        /* ═══ WHO THIS IS FOR ═══ */
        .fn-for-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 48px; margin-top: 48px;
        }
        .fn-for-heading {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 24px; color: var(--black);
          margin-bottom: 20px; letter-spacing: 0.02em;
        }
        .fn-for-list {
          list-style: none; padding: 0; margin: 0;
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
        .fn-for-list-dim li::before {
          border-color: var(--gray-200);
        }

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
          font-size: 15px; color: rgba(255,255,255,0.35);
          margin-bottom: 16px; line-height: 1.7;
        }
        .fn-close-or {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; color: rgba(255,255,255,0.15);
          margin-bottom: 24px; letter-spacing: 0.15em;
        }
        .fn-close-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(40px, 7vw, 80px); line-height: 0.95;
          color: #fff; margin-bottom: 40px;
        }
        .fn-close-h2 span { color: var(--red); }

        /* ═══ PLAYBOOKS ═══ */
        .fn-playbooks-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 40px;
          margin-top: 40px;
          border-top: 1px solid var(--gray-100);
        }
        .fn-pb-item {
          display: flex; align-items: center; gap: 16px;
          padding: 20px 0;
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
          font-size: 16px; color: var(--gray-200); width: 28px;
          flex-shrink: 0; transition: color 0.2s;
        }
        .fn-pb-name {
          font-size: 14px; font-weight: 500; letter-spacing: 0.01em;
          transition: color 0.2s;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .fn-pb-line { flex: 1; height: 1px; background: transparent; }
        :global(.fn-pb-arrow) { color: var(--gray-300); transition: all 0.2s; flex-shrink: 0; }

        /* ═══ ROADMAP ═══ */
        .fn-roadmap-intro { margin-bottom: 64px; }
        .fn-roadmap-v2 {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .fn-roadmap-line {
          position: absolute; top: 40px; left: 0; right: 0;
          height: 1px; background: var(--gray-200);
          z-index: 1;
        }
        .fn-rm-step {
          position: relative; z-index: 2;
          text-decoration: none; color: inherit;
          display: flex; flex-direction: column;
        }
        .fn-rm-dot {
          width: 80px; height: 80px; background: var(--white);
          border: 1px solid var(--gray-200); border-radius: 50%;
          margin-bottom: 32px; display: flex; align-items: center; justify-content: center;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          position: relative;
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
        .fn-rm-step:hover .fn-rm-dot::after {
          border-color: var(--red); transform: rotate(45deg);
        }
        .fn-rm-step-accent .fn-rm-dot {
          background: var(--red); border-color: var(--red);
        }
        .fn-rm-step-accent .fn-rm-dot::after { border-color: rgba(255,255,255,0.3); }

        .fn-rm-step-header {
          display: flex; align-items: baseline; gap: 8px; margin-bottom: 12px;
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
          font-size: 15px; font-weight: 700; color: var(--black); margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .fn-rm-step-desc {
          font-size: 12px; color: var(--gray-500); line-height: 1.7;
          margin-bottom: 24px; flex: 1;
        }
        .fn-rm-step-footer {
          display: flex; flex-direction: column; gap: 12px;
          padding-top: 16px; border-top: 1px solid var(--gray-100);
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
          background: var(--red); padding: 100px 48px;
          color: #fff; text-align: center;
        }
        .fn-partner-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(32px, 5vw, 64px); line-height: 1;
          margin-bottom: 24px; letter-spacing: 0.02em;
        }
        .fn-partner-h2 span { color: rgba(255,255,255,0.7); }
        .fn-partner-desc {
          font-size: clamp(14px, 1.2vw, 18px); line-height: 1.7;
          max-width: 680px; margin: 0 auto 40px;
          color: rgba(255,255,255,0.9);
        }
        .fn-partner-btn {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20px; letter-spacing: 0.08em;
          padding: 20px 48px; text-decoration: none;
          background: #fff; color: var(--red);
          transition: all 0.3s;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .fn-partner-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
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
          .fn-h1 { font-size: clamp(44px, 11vw, 72px); margin-bottom: 24px; }
          .fn-sub { font-size: 14px; margin-bottom: 32px; }
          .fn-hero-cta { font-size: 18px; padding: 18px 40px; }

          .fn-problem { padding: 56px 20px; }

          .fn-bridge { padding: 64px 20px; }
          .fn-bridge-h2 { font-size: clamp(22px, 5vw, 36px); }

          .fn-section { padding: 56px 20px; }
          .fn-h2 { font-size: clamp(28px, 8vw, 44px); margin-bottom: 12px; }
          .fn-desc-wide { font-size: 12px; margin-bottom: 32px; }

          .fn-audit-grid { grid-template-columns: 1fr; gap: 12px; }

          .fn-process { flex-direction: column; gap: 12px; }
          .fn-process-arrow { display: none; }

          .fn-layer { grid-template-columns: 48px 1fr; }
          .fn-layer-num { font-size: 24px; }
          .fn-layer-content { padding: 16px; }
          .fn-layer-title { font-size: 18px; }
          .fn-layer-desc { font-size: 11px; margin-bottom: 6px; }
          .fn-layer-tags { font-size: 9px; }

          .fn-mid-cta { padding: 48px 20px; }
          .fn-mid-h2 { font-size: clamp(24px, 6vw, 36px); }

          .fn-for-grid { grid-template-columns: 1fr; gap: 32px; }

          .fn-playbooks-list {
            grid-template-columns: 1fr;
            gap: 0;
            margin-top: 24px;
          }
          .fn-pb-item { padding: 16px 0; }
          .fn-pb-name { font-size: 13px; }
          .fn-pb-num { font-size: 14px; }

          .fn-roadmap-v2 { grid-template-columns: 1fr; gap: 40px; }
          .fn-roadmap-line { display: none; }
          .fn-rm-step { flex-direction: row; gap: 24px; align-items: flex-start; }
          .fn-rm-dot { width: 80px; height: 80px; flex-shrink: 0; margin-bottom: 0; }
          .fn-rm-step-content { flex: 1; text-align: left; }
          .fn-rm-step-footer { flex-direction: row; align-items: center; justify-content: space-between; }

          .fn-close { padding: 64px 20px; }
          .fn-close-h2 { font-size: clamp(32px, 10vw, 56px); }

          .fn-transition { padding: 40px 20px; }

          .fn-footer {
            flex-direction: column; gap: 16px;
            text-align: center; padding: 24px 20px;
          }
          .fn-footer-links { flex-wrap: wrap; justify-content: center; gap: 16px; }
          .fn-footer-links a { font-size: 10px; }
          .fn-copy { font-size: 9px; }
        }

        @media (max-width: 500px) {
          .fn-hero-content { padding: 88px 16px 48px; }
          .fn-h1 { font-size: clamp(38px, 12vw, 52px); }
          .fn-sub { font-size: 13px; }
          .fn-hero-cta { font-size: 16px; padding: 16px 36px; width: 100%; justify-content: center; }

          .fn-problem { padding: 48px 16px; }
          .fn-bridge { padding: 56px 16px; }
          .fn-section { padding: 48px 16px; }
          .fn-h2 { font-size: clamp(24px, 8vw, 36px); }

          .fn-mid-cta { padding: 40px 16px; }
          .fn-close { padding: 56px 16px; }
          .fn-close-h2 { font-size: clamp(28px, 10vw, 44px); }

          .fn-footer { padding: 20px 16px; }
        }
      `}</style>
    </div>
  )
}
