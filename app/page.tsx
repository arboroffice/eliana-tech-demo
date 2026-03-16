"use client"

import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { industries } from "@/lib/industry-data"

export default function HomePage() {
  return (
    <div className="fn">

      {/* STICKY NAV — minimal for funnel */}
      <nav className="fn-nav">
        <Link href="/" className="fn-logo">ELIANA<span>TECH</span></Link>
        <Link href="/apply" className="fn-nav-cta">
          Apply Now <ArrowRight size={12} />
        </Link>
      </nav>

      <main>

        {/* ═══ 1. HERO — Hook + Single CTA ═══ */}
        <section className="fn-hero">
          <div className="fn-hero-content">
            <p className="fn-tag">AI Infrastructure for Founders</p>
            <h1 className="fn-h1">
              THE AI COMPANY<br />
              <span>BUILDER.</span>
            </h1>
            <p className="fn-sub">
              We build AI-native infrastructure that runs your business — so you can stop being the system and start being the architect.
            </p>
            <Link href="/apply" className="fn-hero-cta">
              Apply Now <ArrowRight size={18} />
            </Link>
            <p className="fn-micro">Three questions. We review every application within 48 hours.</p>
          </div>
          <div className="fn-hero-bg">
            <div className="fn-grid-overlay" />
            <div className="fn-glow" />
          </div>
          <div className="fn-scroll-indicator">
            <div className="fn-scroll-line" />
          </div>
        </section>

        {/* ═══ 3. BRIDGE — What changes ═══ */}
        <section className="fn-bridge">
          <div className="fn-bridge-bg">FLUENCY</div>
          <div className="fn-container fn-bridge-inner">
            <h2 className="fn-bridge-h2">
              Transform your business into an<br />
              <span>autonomous machine.</span>
            </h2>
          </div>
        </section>



        {/* ═══ YOUR ROADMAP ═══ */}
        <section className="fn-section" style={{ borderTop: "1px solid var(--gray-100)", borderBottom: "1px solid var(--gray-100)" }}>
          <div className="fn-container">
            <div className="fn-roadmap-intro">
              <p className="fn-label">How It Works</p>
              <h2 className="fn-h2">YOUR <span>ROADMAP.</span></h2>
              <p className="fn-desc-wide">We do not ask you to commit to everything upfront. You start small. We prove ourselves. Then we scale together.</p>
            </div>

            <div className="fn-roadmap-v2">
              <div className="fn-roadmap-line" />
              {[
                { phase: "01", title: "Single Problem Build", desc: "14 days. This may be a Claude setup, team training, or a single autonomous build like an Executive Assistant or Secretary. If your needs go deeper, we build this first and talk further.", tag: "$5K+", href: "/apply", accent: true, meta: "The Proof" },
                { phase: "02", title: "Full Buildout", desc: "Complete operational architecture across every department. All six layers — built, connected, running.", tag: "$25–75K+", href: "/apply", meta: "The Scale" },
                { phase: "03", title: "AI Wing Retainer", desc: "Ongoing evolution. Your infrastructure grows and adapts as you scale. We become your AI department.", tag: "$5–10K/mo+", href: "/apply", meta: "The Engine" },
                { phase: "04", title: "Revenue Share", desc: "Skin in the game. Your growth is our growth. Full alignment. Multi-year legacy building.", tag: "Partnership", href: "/apply", meta: "The Partner" },
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
        <section className="fn-section fn-section-alt">
          <div className="fn-container">
            <p className="fn-label">The Solution</p>
            <h2 className="fn-h2">WE BUILD THE <span>OPERATING SYSTEM</span><br />YOUR COMPANY IS MISSING.</h2>
            <p className="fn-desc-wide">Not another tool. Not another SaaS subscription. A complete AI infrastructure — six layers that connect every part of your business into one system that runs itself.</p>

            <div className="fn-layers">
              {[
                { num: "01", title: "Attract", desc: "Your company shows up everywhere your customers look.", tags: "Website · SEO · Content Engine · Social Media · Lead Generation" },
                { num: "02", title: "Capture", desc: "No lead disappears. Every inquiry — handled in under 60 seconds.", tags: "AI Phone Answerer · Speed to Lead · Missed Call Text Back · Lead Capture" },
                { num: "03", title: "Convert", desc: "Leads become clients without manual chasing.", tags: "Sales Pipeline · Proposal Automation · Contracts · Appointments · Follow Up" },
                { num: "04", title: "Deliver", desc: "Operations stop depending on the founder.", tags: "Client Onboarding · Scheduling · Workflow Automation · SOPs · Invoicing" },
                { num: "05", title: "Retain", desc: "Clients return. Reputation compounds. Revenue stabilizes.", tags: "Review Systems · Client Nurture · Reactivation · Churn Prevention" },
                { num: "06", title: "Intelligence", desc: "The business becomes aware of itself.", tags: "Dashboards · Knowledge Base · Reporting · Capacity Planning" },
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

        {/* ═══ MID-PAGE CTA ═══ */}
        <section className="fn-mid-cta">
          <div className="fn-container fn-mid-cta-inner">
            <h2 className="fn-mid-h2">Ready to see what this looks like <span>for your business?</span></h2>
            <Link href="/audit" className="fn-btn-outline">
              Get a Free AI Audit <ArrowRight size={14} />
            </Link>
          </div>
        </section>


        {/* ═══ 6. INDUSTRY PROOF ═══ */}
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




        {/* ═══ 7. PARTNERSHIP CTA ═══ */}
        <section className="fn-partner-cta">
          <div className="fn-container fn-partner-inner">
            <h2 className="fn-partner-h2">Finding Partners to Build<br /><span>Industry Playbooks</span></h2>
            <p className="fn-partner-desc">
              We are looking for domain experts who want to formalize their industry's logic into autonomous agents. 
              We build the tech. You provide the expertise. Together, we own the digital labor.
            </p>
            <Link href="/audit" className="fn-partner-btn">
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

        /* ═══ NAV — minimal funnel nav ═══ */
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
          background: var(--black); color: #fff;
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

        /* ═══ BRIDGE ═══ */
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



        /* ═══ COMMAND CENTER STYLES ═══ */
        .fn-cc-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          margin-top: 48px;
          align-items: center;
        }
        .fn-cc-chat {
          background: var(--black);
          border-radius: 12px;
          border: 1px solid #222;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          height: 480px;
        }
        .fn-cc-chat-header {
          padding: 16px 20px;
          background: #111;
          border-bottom: 1px solid #222;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .fn-cc-status {
          font-size: 10px; color: #fff; letter-spacing: 0.15em;
          display: flex; align-items: center; gap: 8px;
        }
        .fn-cc-status-dot {
          width: 6px; height: 6px; background: var(--red); border-radius: 50%;
          box-shadow: 0 0 10px var(--red);
          animation: fnPulse 2s infinite;
        }
        .fn-cc-version { font-size: 9px; color: #444; }
        .fn-cc-messages {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .fn-msg {
          font-size: 12px; line-height: 1.6; max-width: 85%;
        }
        .fn-msg-user {
          align-self: flex-end;
          color: #fff;
          background: #222;
          padding: 12px 16px;
          border-radius: 12px 12px 2px 12px;
        }
        .fn-msg-ai {
          align-self: flex-start;
          color: #999;
          border-left: 1px solid var(--red);
          padding-left: 16px;
        }
        .fn-msg-meta {
          font-size: 9px; color: var(--red); letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .fn-cc-input {
          padding: 20px;
          background: #0a0a0a;
          border-top: 1px solid #222;
          color: #444;
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .fn-cc-cursor { width: 1px; height: 14px; background: var(--red); animation: fnFlash 1s infinite; }
        
        .fn-cc-info { display: flex; flex-direction: column; gap: 32px; }
        .fn-cc-info-card { border-left: 1px solid var(--gray-200); padding-left: 24px; }
        .fn-cc-info-h3 { font-size: 13px; font-weight: 700; color: var(--black); margin-bottom: 8px; }
        .fn-cc-info-p { font-size: 12px; color: var(--gray-500); line-height: 1.6; }

        @keyframes fnPulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fnFlash {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
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
        .fn-mid-h2 span { color: var(--red); }
        .fn-btn-outline {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 12px; letter-spacing: 0.06em;
          padding: 16px 32px; text-decoration: none;
          border: 1px solid var(--black); color: var(--black);
          transition: all 0.3s;
        }
        .fn-btn-outline:hover {
          background: var(--black); color: #fff;
          transform: translateY(-2px);
        }


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



        /* ═══ FINAL CTA ═══ */
        .fn-final-cta {
          background: var(--black); padding: 120px 48px;
          text-align: center; position: relative; overflow: hidden;
        }
        .fn-final-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%);
        }
        .fn-final-inner { position: relative; z-index: 2; max-width: 700px; }
        .fn-final-tag {
          font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;
          color: var(--red); margin-bottom: 24px;
        }
        .fn-final-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 8vw, 100px); line-height: 0.9;
          color: #fff; margin-bottom: 24px;
        }
        .fn-final-h2 span { color: var(--red); }
        .fn-final-sub {
          font-size: 13px; color: rgba(255,255,255,0.35); line-height: 1.7;
          margin-bottom: 40px;
        }
        .fn-final-btn {
          display: inline-flex; align-items: center; gap: 12px;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px; letter-spacing: 0.08em;
          padding: 22px 64px; text-decoration: none;
          background: var(--red); color: #fff;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 10px 40px rgba(217,0,25,0.25);
        }
        .fn-final-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(217,0,25,0.35);
          background: #c00016;
        }
        .fn-final-alt {
          margin-top: 28px; font-size: 12px; color: rgba(255,255,255,0.25);
          display: flex; align-items: center; justify-content: center; gap: 8px;
        }
        .fn-final-alt a {
          color: var(--red); text-decoration: none; transition: color 0.2s;
        }
        .fn-final-alt a:hover { color: #fff; }

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
          .fn-pain-grid { grid-template-columns: 1fr; gap: 10px; margin-top: 28px; }
          .fn-pain-item { padding: 16px 20px; font-size: 12px; }

          .fn-bridge { padding: 64px 20px; }
          .fn-bridge-h2 { font-size: clamp(22px, 5vw, 36px); }

          .fn-section { padding: 56px 20px; }
          .fn-h2 { font-size: clamp(28px, 8vw, 44px); margin-bottom: 12px; }
          .fn-desc-wide { font-size: 12px; margin-bottom: 32px; }

          .fn-layer { grid-template-columns: 48px 1fr; }
          .fn-layer-num { font-size: 24px; }
          .fn-layer-content { padding: 16px; }
          .fn-layer-title { font-size: 18px; }
          .fn-layer-desc { font-size: 11px; margin-bottom: 6px; }
          .fn-layer-tags { font-size: 9px; }

          .fn-cc-grid { grid-template-columns: 1fr; gap: 32px; }
          .fn-cc-chat { height: 400px; }
          .fn-cc-info { gap: 24px; }



          .fn-mid-cta { padding: 48px 20px; }
          .fn-mid-h2 { font-size: clamp(24px, 6vw, 36px); }


          .fn-playbooks-list {
            grid-template-columns: 1fr;
            gap: 0;
            margin-top: 24px;
          }
          .fn-pb-item { padding: 16px 0; }
          .fn-pb-name { font-size: 13px; }
          .fn-pb-num { font-size: 14px; }

          .fn-roadmap-v2 { grid-template-columns: 1fr; gap: 40px; }
          .fn-roadmap-line { left: 40px; top: 0; bottom: 0; width: 1px; height: auto; }
          .fn-rm-step { flex-direction: row; gap: 24px; align-items: flex-start; }
          .fn-rm-dot { width: 80px; height: 80px; flex-shrink: 0; margin-bottom: 0; }
          .fn-rm-step-content { flex: 1; text-align: left; }
          .fn-rm-step-footer { flex-direction: row; align-items: center; justify-content: space-between; }
          
          .fn-diy-section { padding-left: 0; margin-top: 56px; }
          .fn-diy-line { display: none; }
          .fn-diy-card { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px; }
          .fn-diy-badge { width: 48px; height: 48px; font-size: 14px; }

          .fn-faq-item { padding: 24px 0; }
          .fn-faq-q { font-size: 18px; }
          .fn-faq-a { font-size: 12px; }

          .fn-final-cta { padding: 64px 20px; }
          .fn-final-h2 { font-size: clamp(36px, 12vw, 64px); }
          .fn-final-btn { font-size: 18px; padding: 18px 40px; }
          .fn-final-alt { flex-direction: column; gap: 4px; font-size: 11px; }

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
          .fn-final-cta { padding: 56px 16px; }
          .fn-final-h2 { font-size: clamp(28px, 10vw, 44px); }
          .fn-final-btn { width: 100%; justify-content: center; }

          .fn-footer { padding: 20px 16px; }
        }
      `}</style>
    </div>
  )
}
