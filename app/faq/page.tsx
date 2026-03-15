"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faqs = [
        { q: "What if it fails?", a: "Then we failed. We fix it." },
        { q: "Do I need to be technical?", a: "No. You explain your business. We build the system." },
        { q: "Will it work with my stack?", a: "If it has an API, yes. We integrate with Stripe, HubSpot, Salesforce, and 100+ others." },
        { q: "How long does it take?", a: "Single system: 30 days. Department build: 6 to 8 weeks. Enterprise builds are scoped custom." },
        { q: "Why start with an audit?", a: "Because guessing is expensive. We find the highest ROI system first." },
        { q: "Do I own what you build?", a: "Yes. Everything we build is yours. The IP, the documentation, the systems. You are not renting access." },
    ]

    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
            <GlassmorphismNav />

            <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <section className="mb-16">
                    <div className="eyebrow">Straight Answers</div>
                    <h1 className="s-title mb-12">
                        Real <br />
                        <span className="r">Questions</span>
                    </h1>
                    <p className="text-sm text-[#555] max-w-2xl leading-relaxed mb-12">
                        If your question is not here, just book a call. We will answer it directly, no pitch.
                    </p>
                </section>

                <section className="mb-24">
                    <div className="faq-list">
                        {faqs.map((item, idx) => (
                            <div key={idx} className={`faq-item ${openFaq === idx ? "open" : ""}`} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                <div className="faq-q">
                                    <span className="faq-q-text">{item.q}</span>
                                    <span className="faq-icon">{openFaq === idx ? "−" : "+"}</span>
                                </div>
                                <div className="faq-a">
                                    <p className="faq-a-text">{item.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
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

        .faq-item {
          border-bottom: 1px solid #E4E3DE;
        }

        .faq-q {
          display: flex;
          justify-content: space-between;
          padding: 32px 0;
          cursor: pointer;
        }

        .faq-q-text {
          font-family: var(--font-syne), sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0C0C0C;
        }

        .faq-icon {
          font-size: 24px;
          color: #888;
        }

        .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-a {
          max-height: 200px;
          padding-bottom: 32px;
        }

        .faq-a-text {
          font-size: 14px;
          color: #555;
          line-height: 1.8;
          max-width: 600px;
        }
      `}</style>
        </div>
    )
}
