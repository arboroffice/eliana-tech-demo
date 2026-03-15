"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#FAFAF8] selection:bg-red-500/30 font-sans">
      <GlassmorphismNav />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 text-white uppercase">
          Privacy <span className="text-red-600">Policy</span>
        </h1>
        <p className="text-zinc-500 mb-16 font-mono text-sm uppercase tracking-[0.2em]">Effective Date: March 12, 2026</p>

        <div className="space-y-12 text-zinc-400 leading-relaxed max-w-3xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">1. Introduction</h2>
            <p>
              ElianaTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website elianatech.com and use our AI infrastructure services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">2. Information Collection</h2>
            <p className="mb-4">
              We collect information that you provide directly to us through our application forms, audit requests, and communication channels. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Business data and operational metrics</li>
              <li>Communication preferences and history</li>
              <li>Technical data (IP address, browser type, device info) via cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">3. Use of Information</h2>
            <p className="mb-4">
              We use the collected data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and maintain our AI Infrastructure services</li>
              <li>Analyze business patterns to build custom AI operating systems</li>
              <li>Communicate updates, reports, and strategic insights</li>
              <li>Improve our "Recursive Architect" and agentic models</li>
              <li>Ensure security and prevent unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">4. Data Security</h2>
            <p>
              We implement industry-standard security measures, including the "Secure Open-Claw Architecture," to protect your data. Your business intelligence is stored in encrypted environments with strict access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">5. Third-Party Services</h2>
            <p>
              We may utilize third-party AI models (e.g., Anthropic, OpenAI) to process data. These services are used within isolated, secure contexts to maintain the integrity of your proprietary business logic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">6. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at elianatech@yahoo.com or via our Command Center audit logs.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
