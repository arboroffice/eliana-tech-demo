"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"

export default function AboutPage() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
          }
        })
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" },
    )

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const addToReveal = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
  }

  return (
    <div className="elianatech-about">
      <GlassmorphismNav />

      <main>
        <section className="about-hero">
          <div className="hero-bg-word">STORY</div>
          <div className="hero-tag">Built By Operators</div>
          <h1 className="hero-h1">SYSTEMS MEETS <span className="r">BRAND.</span></h1>
          <div className="hero-divider"></div>
        </section>

        <section className="s">
          <div className="about-layout r-anim" ref={addToReveal}>
            <div className="about-content">
              <div className="big-pull">The backend companies wish they had.</div>

              <div className="story-rich">
                <p>
                  <strong>We are natural systems thinkers.</strong> While most companies look at their problems as isolated "issues," we look at the entire engine.
                  We don't see a "marketing problem" or an "operations problem"—we see a design flaw in the business's architecture.
                </p>

                <p>
                  Mia dropped out at 14 to scale her family’s seven‑figure business. She spent her life deep in the backend, learning how to build systems that allow a company to survive its own growth.
                  She learned that <strong>flow beats force</strong> every single time.
                </p>

                <p>
                  In 2023, she met Tyler. Tyler was an elite business owner who had scaled and sold multiple companies through world‑class brand and marketing—but like every successful founder, she hit a wall.
                  The backend couldn't keep up with her creativity. The admin was a bottleneck to her vision.
                </p>

                <p>
                  They realized they were two halves of the same whole: <strong>Systems meets Brand.</strong> When you combine high‑level operations with high‑level marketing, the business stops being a weight you carry and starts being an engine you drive.
                </p>

                <p>
                  Other founders saw the results and began asking, <em>“I wish I had someone like you for my business.”</em> They didn't just need a consultant; they needed a <strong>specialized provider of AI‑driven infrastructure</strong>.
                </p>

                <p>
                  So we built Elianatech to liberate business owners from daily operational tasks. By deploying <strong>autonomous agents on private servers</strong>, we handle essential functions like lead follow‑up, content creation, and financial reporting without human intervention.
                </p>

                <p>
                  Our model transforms traditional companies into <strong>self‑sustaining systems</strong> that operate continuously. We integrate custom automations into your existing software suite in just one week—allowing you to step away from the labor of a "job" to focus on the business you always wanted.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-wrap">
          <div className="cta-bg">READY</div>
          <div className="cta-inner">
            <div className="r-anim" ref={addToReveal}>
              <div className="cta-eyebrow">Direct</div>
              <div className="cta-title">
                BUILD YOUR
                <br />
                BACKEND
                <br />
                <span style={{ color: "var(--red)" }}>TODAY.</span>
              </div>
            </div>
            <div className="cta-right r-anim d2" ref={addToReveal}>
              <div className="cta-card">
                <span className="cta-card-label">Free · No Commitment</span>
                <div className="cta-card-title">Backend Audit</div>
                <p className="cta-card-body">
                  We review your business and show you exactly what your new infrastructure would look like.
                </p>
                <Link href="/audit" className="btn-red">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Link href="/" className="footer-logo">
          ELIANA<em>TECH</em>
        </Link>
        <ul className="footer-links">
          <li>
            <Link href="/#what-we-do">What We Do</Link>
          </li>
          <li>
            <Link href="/#how-it-works">How It Works</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="mailto:elianatech@yahoo.com">Contact</a>
          </li>
        </ul>
        <span className="footer-copy">© 2026 ELIANATECH</span>
      </footer>

      <style jsx>{`
        .elianatech-about {
          --red: #D90019;
          --black: #0C0C0C;
          --white: #FAFAF8;
          --off: #F2F1ED;
          --dim: #888;
          --mid: #555;
          --border: #E4E3DE;
          background: var(--white);
          color: var(--black);
          font-family: var(--font-dm-mono), monospace;
          overflow-x: hidden;
        }



        .about-hero {
          padding: 180px 52px 80px;
          text-align: center;
          position: relative;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
        }

        .hero-bg-word {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 25vw;
          color: rgba(0, 0, 0, 0.02);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-tag {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 24px;
          position: relative;
        }

        .hero-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(52px, 8vw, 120px);
          line-height: 0.9;
          position: relative;
        }

        .hero-h1 .r { color: var(--red); }

        .hero-divider {
          width: 50px;
          height: 1px;
          background: var(--red);
          margin: 40px auto 0;
        }

        .s { padding: 96px 52px; }

        .about-layout {
          max-width: 800px;
          margin: 0 auto;
        }

        .big-pull {
          font-family: var(--font-syne), sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 48px;
          border-left: 2px solid var(--red);
          padding-left: 32px;
        }

        .story-rich {
          display: flex;
          flex-direction: column;
          gap: 24px;
          font-size: 16px;
          line-height: 1.8;
          color: var(--mid);
        }

        .story-rich strong { color: var(--black); }

        /* CTA */
        .cta-wrap {
          background: var(--black);
          padding: 100px 52px;
          position: relative;
          color: var(--white);
        }

        .cta-bg {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 20vw;
          color: rgba(255, 255, 255, 0.02);
          position: absolute;
          bottom: -20px;
          left: 20px;
          pointer-events: none;
        }

        .cta-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          position: relative;
          z-index: 1;
        }

        .cta-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--red);
          margin-bottom: 24px;
        }

        .cta-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 6vw, 88px);
          line-height: 0.9;
        }

        .cta-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px;
        }

        .cta-card-label {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--red);
          display: block;
          margin-bottom: 12px;
        }

        .cta-card-title {
          font-family: var(--font-syne), sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .cta-card-body {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .btn-red {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: var(--red);
          color: var(--white) !important;
          padding: 16px 32px;
          text-decoration: none;
        }

        footer {
          padding: 44px 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border);
        }

        .footer-logo {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: 22px;
          letter-spacing: 0.2em;
          text-decoration: none;
          color: var(--black);
        }

        .footer-logo em { color: var(--red); }

        .footer-links {
          list-style: none;
          display: flex;
          gap: 24px;
        }

        .footer-links a {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--dim);
          text-decoration: none;
        }

        .footer-copy {
          font-size: 10px;
          color: var(--dim);
          letter-spacing: 0.1em;
        }

        :global(.r-anim) {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        :global(.r-anim.in) {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 880px) {
          .cta-inner { grid-template-columns: 1fr; }
          .about-hero { padding: 140px 24px 60px; }
          .s { padding: 64px 24px; }
          footer { flex-direction: column; gap: 24px; text-align: center; }
        }
      `}</style>
    </div>
  )
}
