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
                { phase: "01", title: "Fix One Problem", desc: "14 day build. Remove a key bottleneck.", href: "/apply", accent: true, meta: "Proof" },
                { phase: "02", title: "Full System Build", desc: "All core operations automated.", href: "/apply", meta: "Scale" },
                { phase: "03", title: "Your AI Wing", desc: "We become your AI department.", href: "/apply", meta: "Engine" },
                { phase: "04", title: "Chief AI Officer", desc: "Revenue share. Full alignment.", href: "/apply", meta: "Partner" },
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
                { slug: "medical-dental", name: "Medical & Dental" },
                { slug: "home-services-high-ticket", name: "Home Services — High Ticket" },
                { slug: "legal", name: "Legal Services" },
                { slug: "beauty-personal-care", name: "Beauty & Personal Care" },
                { slug: "home-services-recurring", name: "Home Services — Recurring" },
                { slug: "real-estate-property", name: "Real Estate & Property" },
                { slug: "health-wellness", name: "Health & Wellness" },
                { slug: "pet-services", name: "Pet Services" },
                { slug: "automotive", name: "Automotive" },
                { slug: "professional-financial", name: "Professional & Financial Services" },
                { slug: "events-hospitality", name: "Events & Hospitality" },
                { slug: "education-childcare", name: "Education & Childcare" },
                { slug: "misc-local-services", name: "Misc. Local Services" },
                { slug: "saas", name: "SaaS Founders" },
                { slug: "course-creators", name: "Course Creators" },
                { slug: "coaching", name: "Coaches & Consultants" },
                { slug: "ecommerce", name: "E-commerce & Retail" },
                { slug: "agencies", name: "Agencies" },
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


        {/* ═══ META VERIFIED + INTEGRATIONS ═══ */}
        <section className="fn-trust">
          <div className="fn-container">

            {/* Meta Verified Badge */}
            <div className="fn-meta-badge">
              <svg className="fn-meta-logo" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 0C8.06 0 0 8.06 0 18s8.06 18 18 18 18-8.06 18-18S27.94 0 18 0z" fill="#0081FB"/>
                <path d="M24.71 10.24c-1.46 0-2.8.98-4.06 2.72-.47.65-.92 1.38-1.35 2.17l-.3.56c-.6-1.14-1.15-2.06-1.67-2.73-1.27-1.64-2.56-2.72-4.1-2.72-3.12 0-6.23 4.67-6.23 10.18 0 3.35 1.56 5.82 4.12 5.82 1.52 0 2.86-.88 4.37-3.12.46-.68.92-1.45 1.38-2.3l.13-.24c.54 1.01 1.04 1.85 1.51 2.54 1.51 2.17 2.85 3.12 4.37 3.12 2.55 0 4.12-2.47 4.12-5.82 0-5.51-3.11-10.18-6.29-10.18zM13.23 22.68c-1.1 1.58-1.82 2.04-2.58 2.04-1.26 0-1.97-1.42-1.97-3.87 0-4.14 2.09-8.23 4.05-8.23.86 0 1.6.59 2.54 1.96.53.77 1.07 1.72 1.65 2.85l.09.17c-1.46 2.72-2.72 4.42-3.78 5.08zm8.31 2.04c-.76 0-1.48-.46-2.58-2.04-.5-.66-1.03-1.49-1.6-2.48l-.6-1.06.46-.84c.58-1.07 1.13-1.97 1.64-2.72.95-1.37 1.68-1.96 2.54-1.96 1.96 0 4.05 4.09 4.05 8.23 0 2.45-.71 3.87-1.91 3.87z" fill="white"/>
              </svg>
              <div className="fn-meta-text">
                <span className="fn-meta-label">Meta Verified Integration</span>
                <span className="fn-meta-sub">Official Business Partner</span>
              </div>
              <svg className="fn-verified-check" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#0081FB"/>
                <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Integrations Grid */}
            <div className="fn-integrations">
              <p className="fn-label" style={{ textAlign: 'center' }}>Trusted Integrations</p>
              <h2 className="fn-h2" style={{ textAlign: 'center' }}>
                <span>THESE + MORE</span> INTEGRATIONS<br />TO BUILD TRUST.
              </h2>
              <p className="fn-int-sub">
                OpenClaw &middot; Codex &middot; Cursor
              </p>

              <div className="fn-int-grid">

                {/* OpenAI */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                  </div>
                  <span className="fn-int-name">OpenAI</span>
                </div>

                {/* Claude */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#D4A27F' }}>
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M4.709 15.955l4.72-2.756.08-.046 2.702-1.578c.414-.242.414-.636 0-.878L9.51 8.92l-.08-.046-4.72-2.756c-.415-.242-.753-.044-.753.44v8.957c0 .484.338.682.753.44zm6.628-3.677L24 5.291v13.418l-12.663-6.43z"/></svg>
                  </div>
                  <span className="fn-int-name">Claude</span>
                </div>

                {/* ElevenLabs */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><rect x="8" y="4" width="3" height="16" rx="1.5"/><rect x="13" y="4" width="3" height="16" rx="1.5"/></svg>
                  </div>
                  <span className="fn-int-name">ElevenLabs</span>
                </div>

                {/* Gemini */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#fff', border: '1px solid #e0e0dc' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24"><defs><linearGradient id="gm" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#4285F4"/><stop offset="1" stopColor="#886FBF"/></linearGradient></defs><path d="M12 2C12 2 17 7.5 17 12s-5 10-5 10c0 0-5-5.5-5-10S12 2 12 2z" fill="url(#gm)"/></svg>
                  </div>
                  <span className="fn-int-name">Gemini</span>
                </div>

                {/* Kling */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: 'linear-gradient(135deg, #7C3AED, #3B82F6)' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/></svg>
                  </div>
                  <span className="fn-int-name">Kling</span>
                </div>

                {/* Sora 2 */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="white"><circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <span className="fn-int-name">Sora 2</span>
                </div>

                {/* GHL / GoHighLevel */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#14B8A6' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4zm0 2.18L18 7.3v4.7c0 4.42-3.06 8.58-6 9.83-2.94-1.25-6-5.41-6-9.83V7.3L12 4.18z"/><path d="M10 14.2l-2.6-2.6L6 13l4 4 8-8-1.4-1.4z"/></svg>
                  </div>
                  <span className="fn-int-name">GoHighLevel</span>
                </div>

                {/* Airtable */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#18BFFF' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M11.52 2.309l-8.39 3.054a.6.6 0 0 0 .007 1.125l8.468 3.019a1.5 1.5 0 0 0 1.008-.003l8.347-3.016a.6.6 0 0 0 .006-1.125l-8.43-3.054a1.5 1.5 0 0 0-1.018 0z"/><path d="M12.7 11.238v8.406c0 .376.393.622.734.46l9.048-4.157a.48.48 0 0 0 .278-.434V7.16c0-.378-.397-.623-.737-.458L12.98 10.78a.48.48 0 0 0-.28.458z" fill="rgba(255,255,255,0.85)"/><path d="M11.1 11.335L1.518 15.96a.48.48 0 0 1-.718-.415V7.228a.48.48 0 0 1 .287-.44l9.4-4.11" fill="rgba(255,255,255,0.7)"/></svg>
                  </div>
                  <span className="fn-int-name">Airtable</span>
                </div>

                {/* Zapier */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#FF4A00' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M15.477 12.89l2.8-2.8a.6.6 0 0 0 0-.848l-.52-.52a.6.6 0 0 0-.848 0l-2.8 2.8-2.8-2.8a.6.6 0 0 0-.848 0l-.52.52a.6.6 0 0 0 0 .849l2.8 2.8-2.8 2.8a.6.6 0 0 0 0 .848l.52.52a.6.6 0 0 0 .849 0l2.8-2.8 2.8 2.8a.6.6 0 0 0 .848 0l.52-.52a.6.6 0 0 0 0-.849l-2.8-2.8z"/><circle cx="14.109" cy="12.89" r="9.5" fill="none" stroke="white" strokeWidth="1.5"/></svg>
                  </div>
                  <span className="fn-int-name">Zapier</span>
                </div>

                {/* HubSpot */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#FF7A59' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M16.5 7.56V5.85a1.62 1.62 0 0 0 .94-1.46 1.63 1.63 0 0 0-1.63-1.63 1.63 1.63 0 0 0-1.63 1.63c0 .63.37 1.18.9 1.44v1.73a4.65 4.65 0 0 0-2.27 1.12L7.63 4.6a1.96 1.96 0 0 0 .07-.49A1.94 1.94 0 1 0 5.76 6.05c.44 0 .85-.15 1.18-.41l5.07 3.94a4.65 4.65 0 0 0-.64 2.35 4.65 4.65 0 0 0 .79 2.59l-1.59 1.59a1.52 1.52 0 0 0-.45-.08 1.55 1.55 0 1 0 1.55 1.55c0-.16-.03-.31-.08-.45l1.56-1.56a4.66 4.66 0 0 0 2.65.83 4.67 4.67 0 0 0 4.67-4.67 4.67 4.67 0 0 0-3.97-4.62zm-.69 7.08a2.45 2.45 0 1 1 0-4.9 2.45 2.45 0 0 1 0 4.9z"/></svg>
                  </div>
                  <span className="fn-int-name">HubSpot</span>
                </div>

                {/* Stripe */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#635BFF' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.918 3.757 7.075c0 4.257 2.636 5.71 6.544 7.158 2.508.927 3.208 1.583 3.208 2.564 0 1.015-.874 1.61-2.354 1.61-1.945 0-4.915-.936-6.872-2.19L3.4 21.742C5.137 22.95 8.208 24 11.042 24c2.635 0 4.797-.632 6.302-1.835 1.64-1.304 2.476-3.218 2.476-5.49 0-4.352-2.696-5.828-5.844-7.525z"/></svg>
                  </div>
                  <span className="fn-int-name">Stripe</span>
                </div>

                {/* Slack */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#4A154B' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.527 2.527 0 0 1 2.52-2.52h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
                  </div>
                  <span className="fn-int-name">Slack</span>
                </div>

                {/* Notion */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.98-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.373.466l1.822 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.934-.56.934-1.166V6.354c0-.606-.233-.933-.747-.886l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.747 0-.934-.234-1.494-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.886.747-.933l3.222-.186zM2.877.56l13.916-.934c1.68-.14 2.1.093 2.8.607L23.4 2.946c.467.373.607.84.607 1.493v17.08c0 1.073-.373 1.68-1.587 1.773l-15.457.933c-.887.047-1.307-.093-1.774-.7L1.89 19.468C1.377 18.815 1.143 18.302 1.143 17.7V2.9c0-.793.373-1.447 1.307-1.587z" fillRule="evenodd"/></svg>
                  </div>
                  <span className="fn-int-name">Notion</span>
                </div>

                {/* Shopify */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#96BF48' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.058-.121-.074l-.914 21.104zm-1.332-17.48c0-.135-.014-.28-.035-.416-.5-2.554-2.195-3.747-3.933-3.747-.124 0-.25.007-.375.023l-.07-.072c-.509-.577-1.15-.845-1.835-.845-3.146 0-4.653 3.935-5.126 5.935l-2.17.672c-.662.21-.683.23-.77.854C-.066 9.686.0 9.695.0 9.695L5.405 24l8.6-2.116s-1.074-12.088-1.074-12.088c0 0 .674-.21 1.074-.297z"/><path d="M12.27 6.62l-.727 2.245s-.85-.392-1.862-.392c-1.505 0-1.58.944-1.58 1.182 0 1.298 3.39 1.796 3.39 4.836 0 2.392-1.518 3.932-3.566 3.932-2.456 0-3.711-1.528-3.711-1.528l.656-2.17s1.291 1.109 2.381 1.109c.711 0 1.001-.56 1.001-.97 0-1.695-2.783-1.77-2.783-4.554 0-2.343 1.681-4.612 5.076-4.612.873 0 1.725.23 1.725.23z" fill="rgba(255,255,255,0.9)"/></svg>
                  </div>
                  <span className="fn-int-name">Shopify</span>
                </div>

                {/* Twilio */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#F22F46' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 0C5.381 0 0 5.381 0 12s5.381 12 12 12 12-5.381 12-12S18.619 0 12 0zm0 20.8c-4.862 0-8.8-3.938-8.8-8.8S7.138 3.2 12 3.2s8.8 3.938 8.8 8.8-3.938 8.8-8.8 8.8zm3.6-12.4a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-4.8-4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm0 4.8a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fillRule="evenodd"/></svg>
                  </div>
                  <span className="fn-int-name">Twilio</span>
                </div>

                {/* Make */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#6D00CC' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="2"/><circle cx="12" cy="4" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="4.69" cy="8" r="2"/><circle cx="19.31" cy="16" r="2"/><circle cx="4.69" cy="16" r="2"/><circle cx="19.31" cy="8" r="2"/></svg>
                  </div>
                  <span className="fn-int-name">Make</span>
                </div>

                {/* Mailchimp */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#FFE01B' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="#241C15"><path d="M18.824 10.72c.15-.005.3.06.376.196.08.14.068.312-.03.44-.5.648-.736 1.164-.693 1.533.044.383.38.583.993.594 1.3.024 2.167.578 2.58 1.645.576 1.487-.124 3.554-1.942 4.553-.853.47-1.73.7-2.59.7-1.426 0-2.59-.64-3.276-1.67h-.003c-.73.47-1.735.78-2.835.78h-.06c-.558-.004-1.08-.09-1.554-.24l-.197.38c-.18.342-.038.527.05.59.088.065.316.16.478.228l.135.057c.55.236 1.12.48 1.3.887.196.444.012.993-.543 1.48-.633.555-1.786.873-3.164.873l-.22-.004c-1.852-.054-3.292-.656-3.794-1.5-.315-.532-.242-1.1.053-1.558-.99-.58-1.595-1.31-1.595-2.113 0-.17.027-.342.082-.512-1.032-.75-1.666-1.897-1.666-3.212 0-1.064.39-2.09 1.098-2.89-.13-.68-.147-1.71.507-2.788C3.614 7.453 5.225 6.72 7.282 6.41 8.748 4.04 11.177 2.62 12.48 2.62c.066 0 .127.004.183.013.86-.685 2.776-1.615 4.398-1.023.695.254 1.572.856 1.81 2.59.178 1.287-.042 3.203-.62 4.363l-.004.008.017.014c.13.108.238.23.313.356.136-.05.263-.097.372-.128.11-.035.268-.068.4-.072l-.006-.001zm-.69.926c-.36.12-.627.325-.81.564l.47.524c.23.26.288.574.162.874l.032.014c.34-.62.57-1.223.638-1.694l-.003-.004c-.08-.115-.18-.214-.3-.26-.058-.022-.123-.027-.19-.018zm-7.525 2.276c-.05.252-.063.52-.035.8.082.82.535 1.55 1.156 2.03h.003c.31-.26.774-.503 1.34-.695-.32-.4-.53-.87-.584-1.39-.056-.543.05-1.092.294-1.575-.3-.1-.58-.223-.84-.36-.57.19-.97.53-1.2.93-.05.08-.097.165-.134.26zm4.468-.394c-.24.357-.368.79-.33 1.262.046.455.26.868.576 1.204.627-.155 1.32-.232 2.016-.218.014-.032.027-.063.04-.094.206-.5-.01-.95-.35-1.33-.33-.37-.852-.68-1.352-.796-.2-.054-.403-.06-.6-.028zm2.41 3.183c-.69-.017-1.387.06-2.01.22.584.37 1.3.6 2.08.614.37.007.654-.048.847-.167.194-.12.3-.3.287-.527-.014-.073-.065-.112-.16-.13-.116-.016-.43-.002-1.043-.01zm-5.22-1.59c-.09-.908-.56-1.718-1.243-2.193-.26.41-.407.88-.41 1.354-.003.493.147.983.46 1.4.15.195.327.36.52.492.26-.41.52-.725.764-.963-.03-.03-.06-.057-.09-.09zm-3.3-3.08c.57-.24 1.27-.32 2.037-.2.15-.158.29-.33.41-.52.36-.557.52-1.233.44-1.894-.27-.045-.563-.034-.86.04-.78.19-1.49.73-1.79 1.5-.16.41-.23.79-.24 1.073zm-1.423-.197c-.61.71-.92 1.593-.92 2.48 0 1.02.455 1.922 1.2 2.59.082-.22.2-.42.38-.59l.1-.098c-.22-.16-.42-.34-.6-.55-.41-.5-.63-1.106-.63-1.73 0-.59.17-1.19.52-1.715l.02-.026c-.03-.12-.054-.24-.07-.36zm7.73-5.89c-1.18.04-3.34 1.38-4.66 3.5l-.154.254c.66-.12 1.35-.07 1.98.13.3-.77 1.07-1.38 1.94-1.59.4-.1.79-.12 1.14-.08.057-.73.034-1.48-.077-2.065-.008-.05-.022-.1-.032-.148-.36-.03-.74-.02-1.14 0zm4.71-2.02c-.41-.15-.88-.15-1.39-.01-.48.13-.98.39-1.44.72.02.05.032.1.05.16.15.8.2 1.68.15 2.5.2.08.36.2.48.33.48-.97.72-2.36.58-3.38-.02-.11-.04-.216-.07-.31l-.36-.01z"/></svg>
                  </div>
                  <span className="fn-int-name">Mailchimp</span>
                </div>

                {/* Midjourney */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M2.4 3.6L7.2 12l-4.8 8.4h3.6l3-5.4 3 5.4h3.6L10.8 12l4.8-8.4h-3.6l-3 5.4-3-5.4H2.4zm10.8 0L18 12l-4.8 8.4h3.6L21.6 12l-4.8-8.4h-3.6z"/></svg>
                  </div>
                  <span className="fn-int-name">Midjourney</span>
                </div>

                {/* Perplexity */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#1FB8CD' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M12 1L5 5.5V11l-4 2.5v5L8 22l4-2.5L16 22l7-3.5v-5L19 11V5.5L12 1zm0 2.3l5 3.2v4L12 14 7 10.5v-4L12 3.3zm-6 9l4 2.5v4.5l-4-2.5V12.3zm12 0v4.5l-4 2.5v-4.5l4-2.5z"/></svg>
                  </div>
                  <span className="fn-int-name">Perplexity</span>
                </div>

                {/* Runway */}
                <div className="fn-int-item">
                  <div className="fn-int-icon" style={{ background: '#000' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><path d="M3 4h18v2H3zm0 7h12v2H3zm0 7h18v2H3zm15-7l4 3.5L18 15v-4z"/></svg>
                  </div>
                  <span className="fn-int-name">Runway</span>
                </div>

              </div>

              <p className="fn-int-tagline">+ more integrations coming soon</p>
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

        /* ═══ TRUST / META / INTEGRATIONS ═══ */
        .fn-trust {
          padding: 80px 48px;
          border-top: 1px solid var(--gray-100);
          background: var(--gray-50);
        }
        .fn-meta-badge {
          display: flex; align-items: center; gap: 16px;
          background: #fff; border: 1px solid var(--gray-100);
          padding: 20px 28px; margin-bottom: 56px;
          max-width: 440px; margin-left: auto; margin-right: auto;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .fn-meta-logo { width: 36px; height: 36px; flex-shrink: 0; }
        .fn-meta-text { display: flex; flex-direction: column; gap: 2px; flex: 1; }
        .fn-meta-label {
          font-size: 14px; font-weight: 700; color: var(--black);
          letter-spacing: 0.01em;
        }
        .fn-meta-sub { font-size: 11px; color: var(--gray-400); }
        .fn-verified-check { width: 24px; height: 24px; flex-shrink: 0; }

        .fn-integrations { text-align: center; }
        .fn-int-sub {
          font-size: 14px; color: var(--gray-500); text-align: center;
          margin-bottom: 40px; letter-spacing: 0.04em;
        }
        .fn-int-grid {
          display: grid; grid-template-columns: repeat(5, 1fr);
          gap: 24px 20px; max-width: 700px; margin: 0 auto 24px;
        }
        .fn-int-item {
          display: flex; flex-direction: column; align-items: center; gap: 10px;
        }
        .fn-int-icon {
          width: 56px; height: 56px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 700; font-size: 14px;
          letter-spacing: 0.02em;
          font-family: var(--font-dm-mono), monospace;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }
        .fn-int-item:hover .fn-int-icon { transform: translateY(-3px); }
        .fn-int-name {
          font-size: 11px; color: var(--gray-500); font-weight: 500;
        }
        .fn-int-tagline {
          font-size: 12px; color: var(--gray-400); text-align: center;
          letter-spacing: 0.02em;
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
          .fn-trust { padding: 56px 20px; }
          .fn-int-grid { grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .fn-int-icon { width: 48px; height: 48px; font-size: 12px; border-radius: 12px; }
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
          .fn-trust { padding: 48px 16px; }
          .fn-meta-badge { padding: 16px 20px; margin-bottom: 40px; }
          .fn-int-grid { grid-template-columns: repeat(4, 1fr); gap: 12px; }
          .fn-int-icon { width: 44px; height: 44px; font-size: 11px; }
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
