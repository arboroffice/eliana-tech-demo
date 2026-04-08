"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { OfficialPartners } from "@/components/official-partners"

export default function HomeClient() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const phases = [
    {
      num: "01",
      title: "See the Shift",
      summary: "An AI assistant connected to all your tools like a digital EA. You get 10–15 hours back instantly. Your voice is cloned. Your admin is handled.",
      items: ["AI inbox management & replies", "Dynamic calendar coordination", "Deal triage & follow-up", "Daily executive briefings", "Voice-cloned task execution"],
      cta: "Start here",
      href: "/audit"
    },
    {
      num: "02",
      title: "Build the System",
      summary: "Full AI infrastructure, industry playbooks, pipelines, and trained agents. Every repeating task is automated. Lead flow, client onboarding, and billing run on infrastructure.",
      items: ["Industry playbook installed", "AI agents across sales & ops", "Automated pipelines & triggers", "Tool-to-tool neural connections", "Team training for AI-native ops"],
      cta: "See what we'd build",
      href: "/audit"
    },
    {
      num: "03",
      title: "Go Deep",
      summary: "Autonomous agents executing together. Embed AI as your wing, automate every department, scale endlessly with zero increase in headcount.",
      items: ["Embedded AI department", "Monthly infrastructure shipping", "Department-wide automation", "Strategy-to-execution loop", "Revenue-share expansion models"],
      cta: "Apply for the AI wing",
      href: "/apply"
    }
  ]

  const faqItems = [
    {
      q: "How does AI infrastructure integrate with my current tools?",
      a: "Our agents connect to your existing stack (Slack, HubSpot, Gmail, Notion, etc.) via secure APIs. We don't replace your tools. We install an intelligence layer that operates them for you."
    },
    {
      q: "Is my business data secure?",
      a: "Yes. We use enterprise-tier AI environments with zero data retention. Your information is never used to train public models, and we implement role-based access for your specific team."
    },
    {
      q: "What is the typical ROI for an AI installation?",
      a: "Most clients see a 70% reduction in administrative overhead and a 3x increase in lead-to-close speed within the first 60 days. Our audit identifies exactly where your highest return will be."
    },
    {
      q: "Do I need to be a technical founder?",
      a: "No. You manage your workforce using plain English. If you can explain a task to a human, you can manage your AI operatives. We handle 100% of the architecture and training."
    },
    {
      q: "Is this better than just using ChatGPT?",
      a: "ChatGPT is a generic tool. Elianatech builds a proprietary intelligence system trained on your company data, your SOPs, and your exact industry playbooks."
    }
  ]

  return (
    <div className="font-sans antialiased selection:bg-[#D90019]/30">
      <GlassmorphismNav />

      {/* ─── HERO BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white min-h-[100dvh] flex flex-col justify-center items-center px-5 pt-16 sm:pt-20 pb-12 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[50%] h-[50%] bg-[#D90019]/8 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#D90019]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1100px] w-full mx-auto text-center relative z-10">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#D90019] mb-5 sm:mb-8">AI Infrastructure for Founders</p>
          <h1 className="font-bebas text-[46px] sm:text-7xl lg:text-[100px] leading-[0.88] tracking-tight mb-5 sm:mb-8 uppercase">
            Your Business.<br />
            <span className="text-[#D90019]">Rebuilt</span> as a Machine.
          </h1>
          <p className="text-[15px] sm:text-[19px] md:text-[22px] text-white/80 font-light leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12">
            We install autonomous AI systems that handle your admin, ops, and sales so you can focus on what only you can do.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16 w-full">
            <Link href="/audit" className="w-full sm:w-auto bg-[#D90019] text-white px-8 sm:px-12 py-4 sm:py-5 text-[11px] sm:text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center">
              Start Your Free Audit →
            </Link>
            <a href="https://cal.com/elianatech/30min" className="w-full sm:w-auto border border-white/30 text-white px-8 sm:px-12 py-4 sm:py-5 text-[11px] sm:text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all text-center">
              Book a Call
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 sm:pt-16 border-t border-white/10">
            {[
              { value: "40+", label: "Hours returned weekly" },
              { value: "12", label: "Industry playbooks" },
              { value: "3×", label: "Output in 90 days" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white mb-1 sm:mb-2">{s.value}</span>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/60 font-bold leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATEMENT RED ─── */}
      <section className="bg-[#D90019] text-white py-24 px-6 md:px-[80px]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight mb-8 uppercase">
            Efficiency is the New Currency.
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/90 font-light leading-relaxed max-w-3xl mx-auto mb-6">
            We go across your entire organization to systemize, automate, and iterate. Our process begins with a deep-dive audit of your time and your stack.
          </p>
          <p className="text-[18px] md:text-[20px] text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
            We identify the draining tasks and replace them with autonomous AI systems, freeing the founder and team to focus on high-leverage moves.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER STORY WHITE ─── */}
      <section className="bg-[#FAFAF8] text-[#0C0C0C] py-32 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Our Story</p>
              <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight mb-8 uppercase">
                We Built It Because<br />
                <span className="text-[#D90019]">We Needed It.</span>
              </h2>
              <div className="space-y-5 text-[17px] text-[#333] leading-relaxed">
                <p>
                  <strong className="text-[#0C0C0C]">Mia</strong> grew up running operations for her dad's company answering phones, chasing follow-ups, copying data between tools, holding everything in her head. No tool actually went and did the work. They just reminded her to.
                </p>
                <p>
                  <strong className="text-[#0C0C0C]">Tyler</strong> scaled and sold multiple brands through organic media and watched every one of them hit the same wall: the back-end couldn't keep up with the front-end.
                </p>
                <p>
                  We couldn't find a solution that actually <em>executed</em>. Not assisted, not reminded, not suggested. Everything required a human to be the glue.
                </p>
                <p className="font-bold text-[#0C0C0C] text-[18px]">
                  So we built the glue. Then we replaced it with infrastructure.
                </p>
              </div>
              <OfficialPartners className="mt-14" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/founders/mia.jpg" alt="Mia" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bebas text-3xl tracking-widest leading-none">MIA</p>
                  <p className="text-[9px] text-[#D90019] font-black uppercase tracking-widest">Co-Founder · Ops</p>
                </div>
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-12">
                <Image src="/images/founders/tyler.jpg" alt="Tyler" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-white font-bebas text-3xl tracking-widest leading-none">TYLER</p>
                  <p className="text-[9px] text-[#D90019] font-black uppercase tracking-widest">Co-Founder · Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE WORK BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white py-32 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Engagement</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase mb-6">
              How We Work Together
            </h2>
            <p className="text-[18px] text-white/70 max-w-2xl mx-auto font-light">
              Start small, prove it, then go as deep as you want.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <div key={i} className={`p-10 flex flex-col ${i === 1 ? "bg-[#D90019]" : "bg-[#1a1a1a]"}`}>
                <div className={`text-[13px] font-black mb-6 tracking-widest ${i === 1 ? "text-white/80" : "text-[#D90019]"}`}>{phase.num}</div>
                <h3 className="font-bebas text-4xl mb-4 tracking-tight uppercase">{phase.title}</h3>
                <p className={`text-[15px] leading-relaxed mb-6 ${i === 1 ? "text-white/90" : "text-white/80"}`}>{phase.summary}</p>

                <ul className="space-y-3 mb-10 flex-grow">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className={`flex items-start gap-3 text-[14px] ${i === 1 ? "text-white" : "text-white/70"}`}>
                      <span className={`mt-1.5 flex-shrink-0 ${i === 1 ? "text-white/60" : "text-[#D90019]"}`}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link href={phase.href} className={`text-[11px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group ${i === 1 ? "text-white" : "text-[#D90019]"} hover:opacity-70 transition-opacity`}>
                  {phase.cta} <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WEIGHT vs WISDOM WHITE ─── */}
      <section className="bg-[#FAFAF8] text-[#0C0C0C] py-32 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Philosophy</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase mb-6">
              Operate in Your Zone of Genius.
            </h2>
            <p className="text-[18px] text-[#444] max-w-2xl mx-auto font-light">
              80% of business owners spend their days fighting operational friction. We take the Weight so you can reclaim your Wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-[#E4E3DE]">
            <div className="bg-[#0C0C0C] text-white p-12">
              <h3 className="text-[11px] font-black text-[#D90019] uppercase tracking-[0.4em] mb-8">The Weight Tech Handles</h3>
              <div className="space-y-8">
                {[
                  { title: "Inbox Triage", desc: "Every email filtered, prioritized, and drafted by agents who know your voice." },
                  { title: "Lead Persistence", desc: "100% follow-up rate. Agents nurture leads for months until they are ready to buy." },
                  { title: "Data Plumbing", desc: "CRMs, spreadsheets, and tools synced instantly. Zero manual entry ever again." },
                  { title: "The Calendar Dance", desc: "Meetings booked, rescheduled, and prepared without a single 'when works for you?'" }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[17px] font-bold mb-2 uppercase tracking-tight text-white">{item.title}</h4>
                    <p className="text-white/70 text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#F2F1ED] text-[#0C0C0C] p-12 border-l border-[#E4E3DE]">
              <h3 className="text-[11px] font-black text-[#D90019] uppercase tracking-[0.4em] mb-8">Your Wisdom Humans Handle</h3>
              <div className="space-y-8">
                {[
                  { title: "Strategic Vision", desc: "Determining the next big thing and steering the company toward its North Star." },
                  { title: "Innovation", desc: "Creating new products, services, and experiences that leave competitors behind." },
                  { title: "Key Relationships", desc: "Building the partnerships and closing the deals that require a human soul." },
                  { title: "Company Growth", desc: "Working ON the business, not IN it. Scaling without adding operational drag." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[17px] font-bold mb-2 uppercase tracking-tight text-[#0C0C0C]">{item.title}</h4>
                    <p className="text-[#555] text-[14px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-[#D90019] text-white p-12 text-center">
            <h4 className="font-bebas text-4xl md:text-6xl mb-3 tracking-tight uppercase">25–40 Hours Saved Per Week</h4>
            <p className="text-white/90 text-[16px] mb-8 font-light">Average impact across all clients in the first 60 days.</p>
            <Link href="/audit" className="inline-block bg-white text-[#D90019] px-10 py-4 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#0C0C0C] hover:text-white transition-all">
              Reclaim Your Time →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BEFORE / AFTER BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white py-32 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Transformation</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase">
              Before and After Elianatech.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1a1a1a] p-10 lg:p-14">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/10">Before</div>
              <ul className="space-y-5">
                {[
                  "Every task needs a person to start it, track it, and finish it",
                  "Leads get lost. Invoices go out late. Follow-ups die in inboxes",
                  "12 tools that don't talk to each other data moved by hand",
                  "The owner is the bottleneck. Nothing moves without them",
                  "Growth breaks things. More revenue means more chaos",
                  "Nights and weekends: the business goes dark"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] text-white/50">
                    <span className="text-white/20 mt-1.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#D90019] p-10 lg:p-14">
              <div className="text-[10px] font-black text-white/80 uppercase tracking-[0.4em] mb-10 pb-4 border-b border-white/20">After</div>
              <ul className="space-y-5">
                {[
                  "Mornings that start with results, not a to-do list",
                  "Your team doing actual work not administrative survival",
                  "A business that keeps running when you step away",
                  "Every tool connected. Data moves on its own",
                  "Your attention back for decisions that need you",
                  "24/7/365 nights, weekends, holidays. It never stops"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] text-white font-medium">
                    <ArrowRight className="w-4 h-4 mt-1.5 flex-shrink-0 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY PLAYBOOKS WHITE ─── */}
      <section className="bg-[#FAFAF8] text-[#0C0C0C] py-32 px-6 md:px-[80px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Verticals</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase mb-6">Industry Playbooks.</h2>
            <p className="text-[17px] text-[#444] max-w-2xl mx-auto font-light">
              Every industry runs on different workflows. We install the playbook built specifically for your category.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#E4E3DE] border border-[#E4E3DE]">
            {[
              { feature: "Patient Intake & Billing", sector: "Medical & Dental" },
              { feature: "Lead-to-Close Pipeline", sector: "Home Services" },
              { feature: "Retention & Rebooking", sector: "Recurring Services" },
              { feature: "Client Intake & Case Mgmt", sector: "Legal Services" },
              { feature: "Booking & Retention", sector: "Beauty & Care" },
              { feature: "Lead Nurture & Transactions", sector: "Real Estate" },
              { feature: "Appointments & Care", sector: "Health & Wellness" },
              { feature: "Scheduling & Re-engagement", sector: "Pet Services" },
              { feature: "Service & Sales Pipeline", sector: "Automotive" },
              { feature: "Client Lifecycle", sector: "Professional & Finance" },
              { feature: "Bookings & Guest Experience", sector: "Events & Hospitality" },
              { feature: "Enrollment & Parent Comms", sector: "Education" },
              { feature: "Trial-to-Paid & Retention", sector: "SaaS Founders" },
              { feature: "Launch & Engagement", sector: "Course Creators" },
              { feature: "Pipeline & Delivery", sector: "Coaches & Consultants" },
              { feature: "Cart Recovery & LTV", sector: "E-commerce" },
              { feature: "Sales & Client Ops", sector: "Agencies" },
              { feature: "Leads & Operations", sector: "Local Services" }
            ].map((item, i) => (
              <div key={i} className="bg-[#FAFAF8] p-6 hover:bg-[#D90019] group transition-all cursor-default">
                <div className="text-[#D90019] text-[9px] font-black uppercase tracking-widest mb-2 group-hover:text-white/80 transition-colors">{item.feature}</div>
                <h5 className="text-[13px] font-bold uppercase tracking-tight text-[#0C0C0C] group-hover:text-white transition-colors leading-tight">{item.sector}</h5>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/audit" className="inline-flex items-center gap-2 bg-[#0C0C0C] text-white px-10 py-4 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#D90019] transition-all">
              Start the OS Audit We'll Match You <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ RED ─── */}
      <section className="bg-[#D90019] text-white py-32 px-6 md:px-[80px]">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.5em] uppercase text-white/70 font-black mb-6">FAQ</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase">
              Common Questions.
            </h2>
          </div>

          <div className="space-y-2">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white/10 border border-white/20 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-7 flex items-center justify-between text-left hover:bg-white/10 transition-colors"
                >
                  <span className="text-[16px] md:text-[17px] font-bold uppercase tracking-tight text-white pr-4">{item.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-white flex-shrink-0" /> : <Plus className="w-5 h-5 text-white/70 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-white/90 font-light leading-relaxed text-[15px]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white py-40 px-6 md:px-[80px]">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.6em] uppercase text-[#D90019] font-black mb-10">The End of Manual</p>
          <h2 className="font-bebas text-6xl md:text-[96px] leading-[0.85] tracking-tight uppercase mb-10">
            Your Business.<br />
            <span className="text-[#D90019]">Rebuilt</span> as a Machine.
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/80 max-w-[700px] mx-auto font-light leading-relaxed mb-14">
            "This is infrastructure surgery, not a software subscription. We go in, we rebuild, and we hand you back a business that runs without you holding it together."
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/audit" className="bg-[#D90019] text-white px-14 py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
              Start Your OS Audit →
            </Link>
            <a href="https://cal.com/elianatech/30min" className="border border-white/30 text-white px-14 py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .font-bebas { font-family: var(--font-bebas-neue), sans-serif; }
      `}</style>
    </div>
  )
}
