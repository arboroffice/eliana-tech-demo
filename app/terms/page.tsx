"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-[#FAFAF8] selection:bg-red-500/30 font-sans">
      <GlassmorphismNav />
      
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-red-500 transition-colors mb-12 text-sm uppercase tracking-widest font-bold">
          <ArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter mb-8 text-white uppercase">
          Terms & <span className="text-red-600">Conditions</span>
        </h1>
        <p className="text-zinc-500 mb-16 font-mono text-sm uppercase tracking-[0.2em]">Effective Date: March 12, 2026</p>

        <div className="space-y-12 text-zinc-400 leading-relaxed max-w-3xl">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">1. Agreement to Terms</h2>
            <p>
              By accessing elianatech.com or utilizing Eliana-OS services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our infrastructure or engage our AI agents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">2. Infrastructure & Services</h2>
            <p>
              ElianaTech provide AI-native infrastructure, "Neural Layers," and autonomous agentic systems. We build and install these systems within your business environment as "Operating Systems." You acknowledge that these systems involve recursive learning and digital labor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">3. Intelligence Ownership</h2>
            <p>
              You maintain ownership of your proprietary business data. ElianaTech maintains ownership of the underlying "Recursive Architect" frameworks and base playbooks unless explicitly transferred via a Revenue Share or Partnership agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">4. Prohibited Uses</h2>
            <p className="mb-4">
              You may not use our AI infrastructure for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Illegal activities or regulatory violations</li>
              <li>Unauthorized scraping of proprietary logic</li>
              <li>Attempting to bypass security vaults or open-claw boundaries</li>
              <li>Building competing AI-native operating systems using our blueprints</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">5. Limitation of Liability</h2>
            <p>
              ElianaTech building the infrastructure as a service. While we aim for 10x efficiency, we are not liable for autonomous agent decisions that occur outside of defined sandbox environments or as a result of misconfigured human-in-the-loop overrides.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">6. Termination</h2>
            <p>
              We reserve the right to terminate access to the Eliana-OS Command Center for violations of these terms or non-payment of strategic retainer fees.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
