"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function FAQPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faqs = [
        { q: "What if it fails?", a: "Then we failed. We fix it. We stand behind every build and stay engaged until it works. If a system underperforms, we rebuild it at no additional cost." },
        { q: "Do I need to be technical?", a: "No. You explain your business in plain English. We handle 100% of the architecture, setup, and training. If you can describe a task to a human employee, you can manage your AI systems." },
        { q: "Will it work with my stack?", a: "If it has an API, yes. We integrate with Stripe, HubSpot, Salesforce, Notion, Slack, Gmail, GoHighLevel, QuickBooks, and 100+ others. If you use a niche tool, we'll assess it during the audit." },
        { q: "How long does it take?", a: "Single system: 7-day install, then 30 days of live training on your company data. Full department build: 2 to 4 weeks. Enterprise builds are scoped custom after the audit." },
        { q: "Why start with an audit?", a: "Because guessing is expensive. The audit maps every place your time is leaking, ranks them by ROI, and tells us exactly which system to build first. Most clients recover the audit's value in week one." },
        { q: "Do I own what you build?", a: "Yes. Everything we build is yours. The IP, the agents, the documentation, the automations. You are not renting access to our platform. It lives on your infrastructure." },
        { q: "Is my data safe?", a: "Yes. We use enterprise-grade AI environments with zero data retention policies. Your business data is never used to train public models. We implement role-based access controls specific to your team." },
        { q: "What kind of businesses do you work with?", a: "We work with founders and operators running 6-8 figure businesses across 18+ industries. If you have repeating tasks, a sales pipeline, or a team doing manual work, we can automate it. See our industry playbooks for specifics." },
        { q: "What is the difference between Done-For-You and the Co-Founder model?", a: "Done-For-You means we build and manage everything for you on a retainer basis. The Co-Founder model means we embed as part of your team long-term, with a stake in the outcomes we drive. Most clients start with Done-For-You." },
        { q: "Can I start small before committing to a full build?", a: "Yes. Phase One is our entry point: a single AI assistant connected to your tools that returns 10-15 hours immediately. Most clients who start there end up going deeper after seeing the results firsthand." },
        { q: "How do you measure results?", a: "Every engagement is tied to measurable outcomes: hours saved per week, leads responded to, tasks automated, and revenue influenced. We track these weekly and share reports so you always know what the system is doing." },
        { q: "What happens after the build is done?", a: "We don't disappear. Every build includes an initial monitoring period where we tune performance. After that, clients choose between a monthly management retainer, a scale-up plan, or self-management with full documentation." },
        { q: "Is this better than hiring someone?", a: "A full-time operations hire costs $60-90k per year and still needs sleep, has bad days, and can quit. Our systems run 24/7/365, never forget a follow-up, and get faster over time as they learn your business." },
        { q: "Do you work with teams or just solo founders?", a: "Both. We work with solo founders who need to stop being the bottleneck, and with teams of 5-50 who are drowning in internal coordination and manual work. The audit determines the right scope." },
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
          max-height: 400px;
          padding-bottom: 32px;
        }

        .faq-a-text {
          font-size: 15px;
          color: #333;
          line-height: 1.8;
          max-width: 700px;
        }
      `}</style>
        </div>
    )
}
