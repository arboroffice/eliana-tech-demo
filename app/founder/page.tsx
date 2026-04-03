"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const chapters = [
  {
    emoji: "\u{1F697}",
    title: "Running My Dad\u2019s Car Dealership at 14",
    body: "While most kids my age were in school, I dropped out at 14 to run my dad\u2019s car dealership. The whole operation \ -  just me. Sales, customers, paperwork, all of it. I didn\u2019t know it then, but I was learning how to build.",
  },
  {
    emoji: "\u{1F333}",
    title: "Scaling My Dad\u2019s Tree Service at 16",
    body: "At 16, I took over my dad\u2019s tree service. I built systems for everything \ -  sales, scheduling, hiring, customer calls, operations. We scaled to multiple seven figures. I cut my dad\u2019s hours from 90 to 10 per week. But I was still buried in the day-to-day. I took all my skills and turned them into repeatable systems. I wanted to hire someone to replace myself. My dad said no. So I built AI systems to replace myself instead.",
  },
  {
    emoji: "\u{1F4A1}",
    title: "The Moment Everything Clicked",
    body: "Every business owner I talked to said the same thing: \"I wish I had what you have, but I can\u2019t clone myself.\"\n\nThen AI came out. And I realized \ -  now you can.",
  },
  {
    emoji: "\u{1F680}",
    title: "Building ElianaTech",
    body: "That\u2019s why Elianatech was born. Most businesses run on manual work that AI could do better, faster, and cheaper. We\u2019re not a software company. We\u2019re an AI operations company. We put smart systems into businesses that cut busywork, catch every opportunity, and scale without burning out the founder.",
  },
]

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <section className="mb-24">
          <div className="eyebrow">The Founder</div>
          <h1 className="s-title mb-12">
            Meet <br />
            <span className="r">Mia</span>
          </h1>

          <div className="story-layout mb-24">
            <div className="story-content">
              <p className="story-pull">
                "Flow over force. Always. I built Elianatech to give founders their lives back through systems that work while they sleep."
              </p>
            </div>
          </div>

          <div className="chapters-grid">
            {chapters.map((ch, i) => (
              <div key={i} className="chapter-card">
                <span className="chapter-emoji">{ch.emoji}</span>
                <h2 className="chapter-title">{ch.title}</h2>
                <p className="chapter-body">{ch.body}</p>
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

        .story-pull {
          font-family: var(--font-syne), sans-serif;
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          color: #0C0C0C;
          line-height: 1.45;
          border-left: 2px solid #D90019;
          padding-left: 24px;
        }

        .chapters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1px;
          background: #CCCBC5;
        }

        .chapter-card {
          background: #FAFAF8;
          padding: 40px;
          transition: background 0.2s;
        }

        .chapter-card:hover {
          background: #F2F1ED;
        }

        .chapter-emoji {
          font-size: 32px;
          margin-bottom: 20px;
          display: block;
        }

        .chapter-title {
          font-family: var(--font-syne), sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #0C0C0C;
          margin-bottom: 16px;
        }

        .chapter-body {
          font-size: 14px;
          color: #555;
          line-height: 1.8;
        }

        @media (max-width: 880px) {
          .chapters-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
