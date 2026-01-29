"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}

const chapters = [
  {
    emoji: "≡ƒÜù",
    title: "Running My Dad's Car Dealership at 14",
    body: "While most kids my age were in school, I dropped out at 14 to run my dad's car dealership. The whole operation ΓÇö just me. Sales, customers, paperwork, all of it. I didn't know it then, but I was learning how to build.",
  },
  {
    emoji: "≡ƒî│",
    title: "Scaling My Dad's Tree Service at 16",
    body: "At 16, I took over my dad's tree service. I built systems for everything ΓÇö sales, scheduling, hiring, customer calls, operations. We scaled to multiple seven figures. I cut my dad's hours from 70 to 40 per week. But I was still buried in the day-to-day.\n\nI took all my skills and turned them into repeatable systems. I wanted to hire someone to replace myself. My dad said no. So I built AI systems to replace myself instead.",
  },
  {
    emoji: "≡ƒÆí",
    title: "The Moment Everything Clicked",
    body: 'Every business owner I talked to said the same thing: "I wish I had what you have, but I can\'t clone myself."\n\nThen AI came out. And I realized ΓÇö now you can.',
  },
  {
    emoji: "≡ƒÜÇ",
    title: "Building ElianaTech",
    body: "That's why ElianaTech was born. Most businesses run on manual work that AI could do better, faster, and cheaper. We're not a software company. We're an AI operations company. We put smart systems into businesses that cut busywork, catch every opportunity, and scale without burning out the founder.\n\nThe mission? Help 1 million businesses install AI operations.\nThe vision? Build a $100M company that changes how the world works.",
  },
  {
    emoji: "≡ƒîè",
    title: "Flow Over Force",
    body: "I used to believe in grinding harder than everyone else. Wake up earlier. Stay later. Outwork the competition. But I learned the hard way that force has a ceiling. Systems don't. The businesses that win aren't the ones working the hardest ΓÇö they're the ones with the best systems. Flow over force means building things that work while you sleep, scale without you, and grow over time.",
  },
]

const beliefs = [
  "Systems beat hustle. Every time.",
  "The best businesses run themselves.",
  "AI isn't replacing humans ΓÇö it's freeing them.",
  "Revenue is a lagging indicator. Systems are the lead.",
  "If you're the bottleneck, you don't have a business ΓÇö you have a job.",
  "The founders who win the next decade will be the ones who adopt AI first.",
  "Flow over force. Always.",
]

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-sans">
      <GlassmorphismNav />
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">Mia</h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium">Founder &amp; CEO, ElianaTech</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-600 to-transparent hidden md:block" />

          {chapters.map((ch, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`relative mb-20 md:w-[45%] ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute top-2 w-12 h-12 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-2xl"
                  style={{ [isLeft ? "right" : "left"]: "-1.5rem", transform: isLeft ? "translateX(50%)" : "translateX(-50%)" }}
                >
                  {ch.emoji}
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <span className="text-3xl md:hidden mb-3 block">{ch.emoji}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">{ch.title}</h2>
                  {ch.body.split("\n\n").map((p, j) => (
                    <p key={j} className="text-slate-300 leading-relaxed text-lg mb-4 last:mb-0 whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* What I Believe */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
          className="mt-32 mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What I Believe</h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {beliefs.map((b, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-xl md:text-2xl text-slate-200 font-medium border-l-2 border-slate-500 pl-6 py-1"
              >
                {b}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let&apos;s Build Something Together</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            If you&apos;re a business owner ready to stop grinding and start scaling with AI, I want to talk to you.
          </p>
          <Link
            href="/audit"
            className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-slate-200 transition-colors"
          >
            Work With Me ΓåÆ
          </Link>
        </motion.div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
