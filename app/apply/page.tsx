"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

/* ─── APPLICATION FORM ─── */
function ApplicationForm() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    whatBuilding: "",
    whatTried: "",
    whyNow: "",
  })

  const set = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const canAdvance = () => {
    if (step === 0) return form.fullName.trim() && form.email.trim()
    if (step === 1) return form.whatBuilding.trim()
    if (step === 2) return form.whatTried.trim()
    if (step === 3) return form.whyNow.trim()
    return false
  }

  const next = () => {
    if (!canAdvance()) {
      setError(step === 0 ? "Name and email are required." : "Please answer before continuing.")
      return
    }
    if (step < 3) setStep(step + 1)
    else submit()
  }

  const back = () => { if (step > 0) setStep(step - 1) }

  const submit = async () => {
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        router.push("/audit")
        return
      }
      else setError(data.error || "Something went wrong.")
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const stepLabels = ["Contact Info", "What are you building?", "What have you tried?", "Why now?"]

  if (submitted) {
    return (
      <div className="app-box text-center" style={{ padding: "60px 40px" }}>
        <div style={{ width: 64, height: 64, background: "#D90019", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="app-q-title" style={{ marginBottom: 12 }}>Application Received</h3>
        <p className="app-body" style={{ maxWidth: 440, margin: "0 auto 32px" }}>
          We review every application personally. If you&apos;re a fit, we&apos;ll reach out within 48 hours. Keep an eye on your inbox.
        </p>
        <Link href="/" className="app-btn-primary">Back to Home</Link>
      </div>
    )
  }

  return (
    <>
      {/* Progress */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        {stepLabels.map((label, i) => (
          <div key={i} style={{ flex: 1 }}>
            <div style={{ height: 3, background: i <= step ? "#D90019" : "#E4E3DE", transition: "background 0.3s" }} />
            <p className="app-step-label" style={{ fontWeight: i === step ? 900 : 400, color: i === step ? "#0C0C0C" : "#aaa" }}>{label}</p>
          </div>
        ))}
      </div>

      <div className="app-box">
        {step === 0 && (
          <div className="app-fields">
            <div>
              <label className="app-label">Full Name *</label>
              <input type="text" value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Your full name" className="app-input" />
            </div>
            <div>
              <label className="app-label">Email *</label>
              <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="your@email.com" className="app-input" />
            </div>
            <div>
              <label className="app-label">Phone</label>
              <input type="tel" value={form.phoneNumber} onChange={(e) => set("phoneNumber", e.target.value)} placeholder="+1 (555) 000-0000" className="app-input" />
            </div>
            <div>
              <label className="app-label">Company / Brand Name</label>
              <input type="text" value={form.companyName} onChange={(e) => set("companyName", e.target.value)} placeholder="Your company or brand" className="app-input" />
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h3 className="app-q-title">What are you building?</h3>
            <p className="app-q-sub">Tell us about the business, the vision, and where AI infrastructure would actually change the game for you. We&apos;re looking for people who can see around corners — even if they can&apos;t yet build what they see.</p>
            <textarea value={form.whatBuilding} onChange={(e) => set("whatBuilding", e.target.value)} placeholder="Describe your business and what you're building..." rows={7} className="app-input app-textarea" />
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="app-q-title">What have you already tried?</h3>
            <p className="app-q-sub">Courses, tools, hires, consultants, late nights on YouTube — lay it out. We&apos;re not looking for a perfect track record. We&apos;re looking for someone who moves, learns, and doesn&apos;t pretend otherwise.</p>
            <textarea value={form.whatTried} onChange={(e) => set("whatTried", e.target.value)} placeholder="What you've tried and why it didn't get you there..." rows={7} className="app-input app-textarea" />
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="app-q-title">Why now?</h3>
            <p className="app-q-sub">Something brought you here today. Not the market. Not the trend. You. What shifted? The people who answer this honestly are usually the ones we can do the best work with.</p>
            <textarea value={form.whyNow} onChange={(e) => set("whyNow", e.target.value)} placeholder="What's driving you to act now..." rows={7} className="app-input app-textarea" />
          </div>
        )}

        {error && <p className="app-error">{error}</p>}

        <div className="app-nav">
          {step > 0 ? <button onClick={back} className="app-btn-back">Back</button> : <div />}
          <button onClick={next} disabled={loading} className="app-btn-primary">
            {loading ? "Submitting..." : step === 3 ? "Submit Application" : "Continue"}
          </button>
        </div>
      </div>
    </>
  )
}

/* ─── PAGE ─── */
export default function ApplyPage() {
  const applyRef = useRef<HTMLDivElement>(null)
  const scrollToApply = () => applyRef.current?.scrollIntoView({ behavior: "smooth" })

  return (
    <div className="fotf-page">
      <GlassmorphismNav />

      <main>
        {/* ══════ HERO ══════ */}
        <section className="fotf-hero">
          <div className="fotf-container">
            <div className="fotf-eyebrow">Founders of the Future</div>
            <h1 className="fotf-h1">
              The Ground Is Shifting.<br />
              <span className="accent">Most Owners Feel It.<br />Few Can Name It.</span>
            </h1>
          </div>
        </section>

        {/* ══════ THE PROBLEM ══════ */}
        <section className="fotf-section">
          <div className="fotf-container fotf-prose">
            <p>You built something real.</p>
            <p>Years of it. Clients. Systems. A reputation. Revenue that didn&apos;t exist until you made it exist.</p>
            <p>And somewhere in the middle of all that building, <strong>you became the business.</strong></p>
            <p>Every decision runs through you. Every problem finds you. Every important thing waits on you. The business works — but it only works because you&apos;re in it. Constantly. That was supposed to be temporary. It became permanent.</p>
            <p>That&apos;s the first problem.</p>
            <p>You already knew that one. You&apos;ve been living with it.</p>

            <div className="fotf-callout">
              <p>Here&apos;s the one you can&apos;t fully name yet.</p>
            </div>

            <p>The world just changed. Not gradually. Not theoretically. Changed — in the last 18 months — in ways that make the old rules unreliable and the old advantages smaller.</p>
            <p>You&apos;ve watched the videos. Read the articles. Seen the headlines. You know AI is a big deal. You&apos;re not dismissing it.</p>
            <p><strong>But you haven&apos;t done anything about it.</strong> Not really. And the gap between knowing and doing is where the danger lives.</p>

            <h2 className="fotf-h2">Here&apos;s what&apos;s actually happening right now:</h2>
            <p>A 24-year-old with no clients, no reputation, no years in the game — is building what you built, in a fraction of the time, at a fraction of the cost. Not because they&apos;re smarter. Because they&apos;re building with different tools. Tools that don&apos;t sleep. Tools that don&apos;t charge $80 an hour. Tools that work at 2am without complaint.</p>
            <p>Your competitors — some of them already doing this — are getting faster. Cheaper. More consistent. They&apos;re producing more content, closing more leads, and operating with leaner teams than you thought possible.</p>
            <p><strong>And the gap isn&apos;t closing. It&apos;s accelerating.</strong></p>
            <p>Every month you wait, the distance grows.</p>
            <p>The fear most people carry in private isn&apos;t that AI will replace them. It&apos;s more specific than that. It&apos;s that a version of what they do — faster, cheaper, running 24/7 — will simply take the market. Not because it&apos;s better. Because it&apos;s relentless.</p>

            <div className="fotf-callout accent-callout">
              <p>You&apos;re not behind on information. You&apos;re behind on installation.</p>
            </div>

            <p>That&apos;s the part nobody&apos;s solving.</p>
          </div>
        </section>

        {/* ══════ STATEMENT BREAK ══════ */}
        <section className="fotf-statement">
          <div className="fotf-container">
            <h2 className="statement-h2">Why Everything You&apos;ve Tried<br /><span className="accent">Hasn&apos;t Fixed This</span></h2>
          </div>
        </section>

        {/* ══════ THE MECHANISM ══════ */}
        <section className="fotf-section dark">
          <div className="fotf-container fotf-prose light-text">
            <p>You&apos;ve tried. Let&apos;s just name it.</p>
            <p>You&apos;ve downloaded the prompt packs. Watched the tutorials. Maybe bought a course from someone who launched their AI career nine months ago. You tried ChatGPT for a week or two — wrote some emails, generated some content, felt a spark — and then went back to doing things the old way.</p>
            <p><strong>Nothing stuck.</strong></p>
            <p>Not because you&apos;re slow. Not because you&apos;re not smart enough.</p>

            <div className="fotf-callout dark-callout">
              <p>Because information without installation is entertainment.</p>
            </div>

            <p>Knowing what AI can do and having AI running inside your business are two completely different things. The distance between them is enormous. And nobody is helping you cross it.</p>
            <p>The courses teach theory. The agencies build generic. The consultants advise from the sidelines. The tools are powerful but directionless without strategy. And the people shouting loudest about AI on social media are mostly selling the shouting.</p>

            <h2 className="fotf-h2 light-h2">The gap in the market is simple and massive:</h2>
            <p>Someone who understands business architecture — real business, not startup fantasy — AND who can build AI infrastructure from the inside out. Not advise. Not teach. <strong>Build.</strong> In your business. With your voice. Around your operations. Beside you.</p>
            <p>That&apos;s what doesn&apos;t exist yet.</p>
            <p><strong>Except here.</strong></p>
          </div>
        </section>

        {/* ══════ HOW IT WORKS ══════ */}
        <section className="fotf-section">
          <div className="fotf-container fotf-prose">
            <div className="fotf-eyebrow" style={{ marginBottom: 16 }}>How This Works</div>
            <p>There&apos;s no webinar. No 47-minute VSL.</p>
            <p><strong>You apply.</strong></p>
            <p>Three questions. That&apos;s it.</p>
            <p>We read every application personally. If it&apos;s a fit, you&apos;re in. If it&apos;s not, we&apos;ll tell you honestly and point you somewhere better.</p>
            <p>The spots are limited — not because of manufactured scarcity, but because the work is custom, hands-on, and real. We build WITH you. That takes time, attention, and capacity. When the spots are full, they&apos;re full.</p>

            <div className="fotf-callout accent-callout" style={{ marginTop: 32 }}>
              <p>If you&apos;ve read this far, you already know whether this is for you. The question isn&apos;t whether this is worth it. The question is whether you&apos;re ready.</p>
            </div>

            <div style={{ textAlign: "center", marginTop: 40 }}>
              <button onClick={scrollToApply} className="app-btn-primary" style={{ fontSize: 12, padding: "18px 40px" }}>
                Apply Below
              </button>
            </div>
          </div>
        </section>

        {/* ══════ APPLICATION ══════ */}
        <section className="fotf-section" id="apply" ref={applyRef}>
          <div className="fotf-container" style={{ maxWidth: 640 }}>
            <div className="fotf-eyebrow" style={{ marginBottom: 16 }}>Apply to Work With Us</div>
            <p className="fotf-body" style={{ marginBottom: 32 }}>
              This is how we figure out if we are the right fit for each other. Three questions. We read every application personally and respond within 48 hours.
            </p>
            <ApplicationForm />
            <p className="fotf-body" style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#888" }}>
              Submit your application. It might be the first clear move you&apos;ve made in months.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .fotf-page {
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

        /* ── Hero ── */
        .fotf-hero {
          padding: 160px 40px 100px;
          background: var(--black);
          color: var(--white);
        }
        .fotf-h1 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 0.9;
          letter-spacing: 0.02em;
        }
        .fotf-h1 .accent { color: var(--red); }

        /* ── Shared ── */
        .fotf-container {
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .fotf-section { padding: 80px 0; }
        .fotf-section.dark {
          background: var(--black);
          color: var(--white);
        }
        .fotf-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--red);
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .fotf-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--red);
        }
        .light-eyebrow { color: var(--red); }
        .light-eyebrow::before { background: var(--red); }

        /* ── Typography ── */
        .fotf-prose p {
          font-size: 15px;
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
        }
        .fotf-prose strong { color: var(--black); font-weight: 700; }
        .fotf-prose.light-text p { color: #aaa; }
        .fotf-prose.light-text strong { color: white; }

        .fotf-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1;
          letter-spacing: 0.02em;
          margin: 48px 0 20px;
          color: var(--black);
        }
        .light-h2 { color: white; }

        .fotf-body {
          font-size: 14px;
          line-height: 1.7;
          color: #555;
        }

        /* ── Callouts ── */
        .fotf-callout {
          background: var(--off);
          border-left: 3px solid var(--border);
          padding: 24px 28px;
          margin: 32px 0;
        }
        .fotf-callout p {
          font-size: 16px !important;
          font-weight: 700;
          color: var(--black) !important;
          margin: 0 !important;
          line-height: 1.5;
        }
        .accent-callout {
          border-left-color: var(--red);
        }
        .dark-callout {
          background: rgba(255,255,255,0.05);
          border-left-color: var(--red);
        }
        .dark-callout p { color: white !important; }

        /* ── Statement ── */
        .fotf-statement {
          padding: 100px 0;
          background: var(--off);
          text-align: center;
        }
        .statement-h2 {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(40px, 6vw, 80px);
          line-height: 0.9;
          letter-spacing: 0.02em;
        }
        .statement-h2 .accent { color: var(--red); }

        /* ── Price Block ── */
        .price-block {
          text-align: center;
          margin: 32px 0 40px;
        }
        .price {
          display: block;
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(60px, 10vw, 120px);
          line-height: 1;
          color: white;
          letter-spacing: 0.02em;
        }
        .price-sub {
          display: block;
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          margin-top: 8px;
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .fotf-hero { padding: 120px 20px 60px; }
          .fotf-section { padding: 48px 0; }
          .fotf-statement { padding: 60px 0; }
          .fotf-build-card { padding: 24px; }
          .fotf-container { padding: 0 16px; }
        }
      `}</style>

      <style jsx global>{`
        /* ── Application Form ── */
        .app-box {
          background: #F2F1ED;
          border: 1px solid #E4E3DE;
          padding: 32px;
        }
        .app-fields { display: flex; flex-direction: column; gap: 20px; }
        .app-label {
          display: block;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: #888;
          margin-bottom: 8px;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-input {
          width: 100%;
          background: white;
          border: 1px solid #E4E3DE;
          padding: 14px 16px;
          font-family: var(--font-dm-mono), monospace;
          font-size: 14px;
          color: #0C0C0C;
          outline: none;
          transition: border-color 0.2s;
          box-sizing: border-box;
        }
        .app-input:focus { border-color: #D90019; }
        .app-input::placeholder { color: #bbb; }
        .app-textarea {
          resize: vertical;
          min-height: 160px;
          line-height: 1.7;
        }
        .app-q-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(28px, 4vw, 40px);
          line-height: 1;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
          color: #0C0C0C;
        }
        .app-q-sub {
          font-size: 13px;
          color: #888;
          line-height: 1.7;
          margin-bottom: 20px;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-step-label {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 8px;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-error {
          color: #D90019;
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 16px;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #E4E3DE;
        }
        .app-btn-primary {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          background: #0C0C0C;
          color: white;
          padding: 14px 32px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
          display: inline-block;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-btn-primary:hover { background: #D90019; }
        .app-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
        .app-btn-back {
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          background: transparent;
          color: #888;
          padding: 14px 24px;
          border: 1px solid #E4E3DE;
          cursor: pointer;
          transition: all 0.2s;
          font-family: var(--font-dm-mono), monospace;
        }
        .app-btn-back:hover { border-color: #0C0C0C; color: #0C0C0C; }

        @media (max-width: 640px) {
          .app-box { padding: 24px 16px; }
        }
      `}</style>
    </div>
  )
}
