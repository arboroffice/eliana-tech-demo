"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

const leadMagnets = [
  {
    icon: "🔍",
    title: "The Hidden $200K",
    subtitle: "Free AI Audit Checklist",
    description: "Discover the revenue hiding in your business right now. This checklist walks you through every department — sales, ops, marketing, support — and shows you exactly where AI can save you time and make you money. Most businesses find $200K+ in untapped potential.",
    format: "PDF Checklist • 12 Pages",
    color: "blue"
  },
  {
    icon: "🌊",
    title: "Flow Over Force Playbook",
    subtitle: "7 Systems to Run Your Business on Autopilot",
    description: "Stop grinding. Start flowing. This playbook breaks down the 7 core systems every business needs to run without the founder doing everything. From automated lead capture to AI-powered operations, this is the blueprint for building a business that works without you.",
    format: "Digital Playbook • 28 Pages",
    color: "purple"
  },
  {
    icon: "🤖",
    title: "The AI COO Blueprint",
    subtitle: "Install AI Operations Step-by-Step",
    description: "What if you had a COO that worked 24/7, never called in sick, and cost less than a part-time hire? This blueprint shows you exactly how to install AI into your operations — from intake to fulfillment — in 30 days or less.",
    format: "Step-by-Step Guide • 35 Pages",
    color: "green"
  }
]

const blogPosts = [
  {
    title: "Why 90% of Businesses Will Fail Without AI by 2027",
    excerpt: "The businesses that refuse to adopt AI aren't just falling behind — they're signing their own death warrant. Here's why.",
    date: "January 2026",
    readTime: "6 min read"
  },
  {
    title: "The $200K Hiding in Your Business Right Now",
    excerpt: "Most business owners are leaving six figures on the table because they're doing manually what AI could do in seconds.",
    date: "January 2026",
    readTime: "8 min read"
  },
  {
    title: "Flow Over Force: Why Systems Beat Hustle Every Time",
    excerpt: "I used to work 80-hour weeks. Now my business runs itself. Here's the philosophy shift that changed everything.",
    date: "December 2025",
    readTime: "5 min read"
  }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden font-sans">
      <GlassmorphismNav />
      <div className="fixed inset-0 w-full h-full">
        <Aurora colorStops={["#1e3a5f", "#475569", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.6} />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto text-white">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            Free AI Resources for<br />Business Owners
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to start leveraging AI in your business — guides, playbooks, and blueprints. All free.
          </p>
        </motion.div>

        {/* Lead Magnets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {leadMagnets.map((magnet, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col hover:border-blue-500/30 transition-all duration-300 hover:bg-white/[0.07]"
            >
              <span className="text-4xl mb-4">{magnet.icon}</span>
              <h3 className="text-2xl font-bold mb-1">{magnet.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-4">{magnet.subtitle}</p>
              <p className="text-slate-300 leading-relaxed mb-6 flex-1">{magnet.description}</p>
              <div className="text-xs text-slate-500 mb-4">{magnet.format}</div>
              <Link
                href="/audit"
                className="block text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
              >
                Get Free Access →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 text-center mb-24"
        >
          <div className="text-4xl mb-4">📬</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Founders of the Future</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Weekly insights on AI, automation, and building businesses that scale without burning out. Join 2,000+ founders who are building the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
            <Link
              href="/audit"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Subscribe
            </Link>
          </div>
        </motion.div>

        {/* Blog Preview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 cursor-pointer hover:bg-white/[0.07]"
              >
                <div className="text-xs text-slate-500 mb-3">{post.date} • {post.readTime}</div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-slate-400 text-sm">{post.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YouTube Placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Watch &amp; Learn</h2>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl aspect-video flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">▶️</div>
              <p className="text-slate-400 text-lg">YouTube Channel Coming Soon</p>
              <p className="text-slate-500 text-sm mt-2">AI tutorials, business breakdowns, and behind-the-scenes</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to See What AI Can Do for You?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Skip the reading. Get a personalized AI audit for your business — completely free.
          </p>
          <Link
            href="/audit"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            Get Your Free AI Audit →
          </Link>
        </motion.div>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
