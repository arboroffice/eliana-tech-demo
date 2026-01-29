"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

const storyChapters = [
  {
    title: "Selling Cars at 18",
    icon: "🚗",
    content: "While most people my age were figuring out college, I was on a car lot learning how to read people, close deals, and outwork everyone around me. I sold my first car within 72 hours of starting. By month three, I was outselling reps who had been there for years. That's when I realized — I wasn't built for a normal path. I was built to build."
  },
  {
    title: "Building a Tree Service at 22",
    icon: "🌳",
    content: "I took everything I learned about sales and started a tree service company from scratch. No investors. No connections. Just a truck and relentless hustle. I learned operations, hiring, dispatching, customer management — all of it the hard way. We scaled fast, but I was working 80-hour weeks just to keep the machine running. I was the machine. And machines break."
  },
  {
    title: "The AI Pivot",
    icon: "⚡",
    content: "One night, exhausted from putting out fires all day, I started experimenting with AI tools. Within a week, I had automated my entire follow-up system. Within a month, AI was handling scheduling, customer communication, and lead qualification — tasks that used to eat 30+ hours of my week. That's when it hit me: AI doesn't just save time. It replaces entire departments. And if it could do this for my tree service, it could do it for any business."
  },
  {
    title: "Flow Over Force",
    icon: "🌊",
    content: "I used to believe in grinding harder than everyone else. Wake up earlier. Stay later. Outwork the competition. But I learned the hard way that force has a ceiling. Systems don't. The businesses that win aren't the ones working the hardest — they're the ones with the best systems. Flow over force means building infrastructure that works while you sleep, scales without you, and compounds over time."
  },
  {
    title: "Building ElianaTech",
    icon: "🚀",
    content: "ElianaTech was born from a simple realization: most businesses are running on manual labor that AI could handle better, faster, and cheaper. We're not a software company. We're an AI operations company. We install intelligent systems into businesses that eliminate busywork, capture every opportunity, and scale without burning out the founder. The mission? Help 10,000 businesses install AI operations. The vision? Build a $100M company that changes how the world works."
  }
]

const beliefs = [
  "Systems beat hustle. Every time.",
  "The best businesses run themselves.",
  "AI isn't replacing humans — it's freeing them.",
  "Revenue is a lagging indicator. Systems are the lead.",
  "If you're the bottleneck, you don't have a business — you have a job.",
  "The founders who win the next decade will be the ones who adopt AI first.",
  "Flow over force. Always.",
  "Execution without systems is just organized chaos.",
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-sans">
      <GlassmorphismNav />
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.2} blend={0.6} speed={0.7} />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-5xl mx-auto text-white">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-blue-500/20 border border-blue-500/30 rounded-full px-6 py-2 text-blue-400 text-sm font-semibold mb-6">
            The Story Behind ElianaTech
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Mia
          </h1>
          <p className="text-xl md:text-2xl text-slate-300">
            Founder &amp; CEO, ElianaTech
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <a
              href="https://instagram.com/miaelianaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              📸 @miaelianaa
            </a>
            <a
              href="https://twitter.com/miaelianaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
            >
              𝕏 @miaelianaa
            </a>
          </div>
        </motion.div>

        {/* Story Chapters */}
        <div className="space-y-12 mb-20">
          {storyChapters.map((chapter, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{chapter.icon}</span>
                <h2 className="text-2xl md:text-3xl font-bold">{chapter.title}</h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">{chapter.content}</p>
            </motion.div>
          ))}
        </div>

        {/* What I Believe */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">What I Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beliefs.map((belief, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-4"
              >
                <span className="text-blue-400 text-2xl font-bold shrink-0">→</span>
                <p className="text-lg text-slate-200">{belief}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s Build Something Together</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            If you&apos;re a business owner ready to stop grinding and start scaling with AI, I want to talk to you.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Work With Me →
          </Link>
        </motion.div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
