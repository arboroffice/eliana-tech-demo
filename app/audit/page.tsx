"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { AuditForm } from "@/components/audit-form"
import Link from "next/link"

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
      <GlassmorphismNav minimal={true} />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-end mb-8">
          <a href="https://cal.com/elianatech/30min" className="nav-btn">
            Book a Call
          </a>
        </div>
        <section className="mb-16">
          <div className="eyebrow">Free Automation Audit</div>
          <h1 className="s-title mb-8">
            Find Your Biggest <br />
            <span className="r">Automation Wins</span>
          </h1>

          <p className="text-sm text-[#555] leading-relaxed max-w-2xl mb-12">
            Take 5 minutes to map your business. We'll identify the workflows costing you the most time, the automation
            opportunities with the highest ROI, and exactly where to start.
          </p>

          <div className="audit-form-container">
            <AuditForm />
          </div>
        </section>

        <div className="flex flex-col items-center justify-center py-20 border-t border-[#E4E3DE] mt-20">
          <p className="text-[#555] text-sm mb-6 font-mono uppercase tracking-widest">Prefer to skip the audit?</p>
          <a href="https://cal.com/elianatech/30min" className="btn-red">
            Book Your Strategy Session
          </a>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #D90019;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: #D90019;
        }

        .s-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #0C0C0C;
        }

        .r {
          color: #D90019;
        }

        .audit-form-container {
          background: #F2F1ED;
          padding: 40px;
          border: 1px solid #E4E3DE;
          position: relative;
        }

        .vsl-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #F2F1ED;
          padding: 16px 24px;
          border: 1px solid #E4E3DE;
          border-bottom: none;
          gap: 16px;
        }

        @media (max-width: 880px) {
          .vsl-banner {
            flex-direction: column;
            align-items: flex-start;
          }
          .vsl-banner Link,
          .vsl-banner a {
            width: 100%;
            text-align: center;
          }
          .audit-form-container {
            padding: 24px;
          }
        }
      `}</style>
    </div>
  )
}
