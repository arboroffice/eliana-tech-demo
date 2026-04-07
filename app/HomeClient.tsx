"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Target, MessageSquare, Zap, LineChart, Layers, Database, Mail, ShieldCheck, Settings, Rocket, Globe, CheckCircle2, ChevronDown, Plus, Minus } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"

export default function HomeClient() {
  const [mounted, setMounted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const stats = [
    { value: "40+", label: "Hours returned weekly" },
    { value: "12", label: "Industry playbooks deployed" },
    { value: "3×", label: "Output per member in 90 days" }
  ]

  const phases = [
    {
      num: "01",
      title: "Phase One",
      subtitle: "See the Shift.",
      summary: "Fastest way to feel the impact. An AI assistant you can tell to do things — connected to all your tools, like a digital EA.",
      outcome: "What happens: You get 10-15 hours back instantly. Your voice is cloned. Your admin is handled. You see the shift without touching your core systems.",
      items: [
        "AI inbox management & replies",
        "Dynamic calendar coordination",
        "Deal triage & follow-up",
        "Daily executive briefings",
        "Voice-cloned task execution"
      ],
      cta: "Start here →",
      href: "/audit"
    },
    {
      num: "02",
      title: "The Build",
      subtitle: "Build the System.",
      summary: "Infrastructure that runs without you. Full AI infrastructure, industry playbooks, pipelines, and trained agents.",
      outcome: "What happens: Every repeating task is automated. Lead flow, client onboarding, and billing run on infrastructure, not effort.",
      items: [
        "Industry playbook installed",
        "AI agents across sales & ops",
        "Automated pipelines & triggers",
        "Tool-to-tool neural connections",
        "Team training for AI-native ops"
      ],
      cta: "See what we'd build for you →",
      href: "/audit"
    },
    {
      num: "03",
      title: "Scale Up",
      subtitle: "Go Deep.",
      summary: "Autonomous agents executing together. Embed AI as your wing, automate every department, scale endlessly.",
      outcome: "What happens: Your business becomes a machine. Infinite scale with zero increase in operational complexity or headcount.",
      items: [
        "Embedded AI department",
        "Monthly infrastructure shipping",
        "Department-wide automation",
        "Strategy-to-execution loop",
        "Revenue-share expansion models"
      ],
      cta: "Apply for the AI wing →",
      href: "/apply"
    }
  ]

  const faqItems = [
    {
      q: "How does AI infrastructure integrate with my current tools?",
      a: "Our agents connect to your existing stack (Slack, HubSpot, Gmail, Notion, etc.) via secure APIs. We don't replace your tools; we install an intelligence layer that operates them for you."
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
      a: "ChatGPT is a generic tool. Elianatech builds a proprietary intelligence system trained on *your* company data, *your* SOPs, and *your* exact industry playbooks."
    }
  ]

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-[#D90019]/30 selection:text-white antialiased">
      <GlassmorphismNav />

      {/* --- HERO --- */}
      <section className="relative min-h-[90dvh] flex flex-col justify-center items-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
           <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#D90019]/5 rounded-full blur-[140px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-900/40 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-[1100px] w-full mx-auto text-center relative z-10">
          <ScrollReveal>
             <h1 className="font-bebas text-5xl sm:text-7xl lg:text-[90px] leading-[0.9] tracking-tighter mb-8 text-white uppercase">
                The Future of Business<br />
                <span className="bg-gradient-to-r from-zinc-300 to-zinc-600 bg-clip-text text-transparent">Building AI-Native Companies.</span>
             </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
             <p className="text-[18px] md:text-[20px] text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto mb-12">
                Go AI-native — for yourself, your team, and your company. Your business runs automatically while you focus on what humans do best: turning ideas into companies that scale themselves.
             </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
             <Link href="/audit" className="bg-[#D90019] text-white px-10 py-5 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                Start Your OS Audit →
             </Link>
          </ScrollReveal>

          {/* Stats Bar */}
          <ScrollReveal delay={0.4} className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto border-t border-zinc-900 pt-16">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bebas text-white mb-2 tracking-tight">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">{stat.label}</span>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* --- BANNER --- */}
      <section className="py-32 px-6 md:px-[80px] bg-[#0A070B] border-y border-zinc-900">
        <div className="max-w-[1000px] mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-bebas text-4xl md:text-6xl leading-none tracking-tighter mb-10 uppercase text-white">
              Efficiency is the new currency.
            </h2>
            <p className="text-[17px] md:text-[20px] text-zinc-300 font-light leading-relaxed mb-8">
              We go across your organization to systemize, automate, and iterate. Our process begins with a deep-dive audit of your time and your stack. We identify the &ldquo;draining tasks&rdquo; and replace them with autonomous AI systems, freeing the founder and the team to focus on high-leverage moves.
            </p>
            <p className="text-[17px] md:text-[20px] text-zinc-300 font-light leading-relaxed">
              We operate as a performance-tied partner. We want to be tied to the revenue we drive. We grow through referrals because our results turn companies into machines. You get a dedicated AI department focused exclusively on your evolution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* --- WHY THIS EXISTS (FOUNDER STORY) --- */}
      <section id="founders" className="py-32 px-6 md:px-[80px] bg-[#050505]">
         <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <ScrollReveal direction="left">
                <p className="text-[10px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-8">Background</p>
                <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter mb-10 uppercase">
                  Why This Exists<br />
                  <span className="text-zinc-700 italic">We built it because we needed it.</span>
                </h2>
                <div className="space-y-6 text-[16px] text-zinc-400 font-light leading-relaxed">
                  <p>
                    Mia grew up running operations for her dad's company. Answering phones, chasing follow-ups, copying data between tools, holding everything in her head. No tool actually went and did the work. They just reminded her to.
                  </p>
                  <p>
                    Tyler scaled and sold multiple brands through organic media — and watched every one of them hit the same wall: the back-end couldn't keep up with the front-end.
                  </p>
                  <p>
                    We are business owners who know how to scale and grow because we've done it. We couldn't find a solution that actually executed — not assisted, not reminded, not suggested. Everything required a human to be the glue.
                  </p>
                  <p className="text-white font-medium">
                    So we built the glue. Then we replaced it with infrastructure.
                  </p>
                </div>

                <div className="mt-20">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-zinc-600 font-black mb-10">OFFICIAL INFRASTRUCTURE PARTNERS</p>
                  <div className="flex flex-wrap gap-x-12 gap-y-8 items-center">
                     {[
                        { src: "/images/claude-logo.png", alt: "Claude", h: "h-6" },
                        { src: "/images/openai-logo.png", alt: "OpenAI", h: "h-6" },
                        { src: "/images/meta-logo-new.png", alt: "Meta", h: "h-5" },
                        { src: "/images/google-partner.svg", alt: "Google Partner", h: "h-11" },
                        { src: "/images/openclaw-logo.png", alt: "OpenClaw", h: "h-8" }
                     ].map((logo, i) => (
                        <div key={i} className="flex items-center justify-center">
                           <Image src={logo.src} alt={logo.alt} width={120} height={40} className={`${logo.h} w-auto object-contain brightness-110`} />
                        </div>
                     ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800">
                    <Image src="/images/founders/mia.jpg" alt="Mia" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-bebas text-2xl tracking-widest leading-none">MIA</p>
                      <p className="text-[8px] text-[#D90019] font-black uppercase tracking-widest">Co-Founder | Ops</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-8 pt-12">
                  <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden border border-zinc-800">
                    <Image src="/images/founders/tyler.jpg" alt="Tyler" fill className="object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-bebas text-2xl tracking-widest leading-none">TYLER</p>
                      <p className="text-[8px] text-[#D90019] font-black uppercase tracking-widest">Co-Founder | Media</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
         </div>
      </section>

      {/* --- HOW WE WORK TOGETHER (PHASES) --- */}
      <section className="py-32 px-6 md:px-[80px] bg-[#0A070B] border-y border-zinc-900">
         <div className="max-w-[1240px] mx-auto">
            <ScrollReveal className="text-center mb-24">
              <p className="text-[10px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-8">Engagement</p>
              <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
                How We Work Together
              </h2>
              <p className="text-[18px] text-zinc-500 max-w-2xl mx-auto font-light">
                An evolution — not a one-time transaction. We start small, prove it, then go as deep as you want.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
              {phases.map((phase, i) => (
                <div key={i} className="bg-[#050505] p-10 md:p-14 flex flex-col h-full hover:bg-zinc-900/40 transition-colors group">
                  <div className="text-[12px] font-black text-[#D90019] mb-8 tracking-widest">{phase.num} — {phase.title}</div>
                  <h3 className="font-bebas text-4xl mb-4 tracking-tight uppercase group-hover:text-[#D90019] transition-colors">{phase.subtitle}</h3>
                  <p className="text-zinc-300 text-[16px] leading-relaxed mb-6 font-medium">{phase.summary}</p>
                  <p className="text-zinc-500 text-[14px] leading-relaxed mb-10 font-light italic">{phase.outcome}</p>
                  
                  <ul className="space-y-4 mb-12 flex-grow">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[14px] text-zinc-400 font-light translate-y-0 group-hover:text-zinc-200 transition-colors">
                        <span className="text-[#D90019]/40 mt-1.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link href={phase.href} className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D90019] hover:text-white transition-all">
                    {phase.cta}
                  </Link>
                </div>
              ))}
            </div>

            <ScrollReveal delay={0.2} className="mt-20 text-center">
              <p className="text-zinc-500 text-[15px] max-w-3xl mx-auto font-light italic leading-relaxed">
                ✦ You don't have to commit to the whole thing upfront. Start with the assistant. See the shift. Then decide how far you want to take it. Every client who's gone deep started exactly where you are.
              </p>
            </ScrollReveal>
         </div>
      </section>

      {/* --- ZONE OF GENIUS (PHILOSOPHY) --- */}
      <section className="py-32 px-6 md:px-[80px] bg-[#050505]">
        <div className="max-w-[1240px] mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="text-[10px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-8">Philosophy</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
              Operate in Your<br />
              <span className="text-zinc-700 italic">Zone of Genius.</span>
            </h2>
            <p className="text-[17px] text-zinc-500 max-w-2xl mx-auto font-light">
              80% of business owners spend their days fighting operational friction. We take the "Weight" so you can reclaim your "Wisdom."
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left" className="bg-[#0A070B] p-12 border border-zinc-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[60px] font-bebas text-zinc-900 select-none">WEIGHT</div>
              <h3 className="text-[12px] font-black text-[#D90019] uppercase tracking-[0.4em] mb-10">The Weight (Tech Handles)</h3>
              <div className="space-y-10 relative z-10">
                {[
                  { title: "Inbox Triage", desc: "Every email filtered, prioritized, and drafted by agents who know your voice." },
                  { title: "Lead Persistence", desc: "100% follow-up rate. Agents nurture leads for months until they are ready to buy." },
                  { title: "Data Plumbing", desc: "CRMs, spreadsheets, and tools synced instantly. Zero manual entry ever again." },
                  { title: "The 'Calendar Dance'", desc: "Meetings booked, rescheduled, and prepared for without a single 'when works for you?'" }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[18px] font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-[14px] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="bg-[#0A070B] p-12 border border-zinc-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-[60px] font-bebas text-zinc-900 select-none">WISDOM</div>
              <h3 className="text-[12px] font-black text-indigo-500 uppercase tracking-[0.4em] mb-10">Your Wisdom (Humans Handle)</h3>
              <div className="space-y-10 relative z-10">
                {[
                  { title: "Strategic Vision", desc: "Determining the 'Next Big Thing' and steering the company toward its North Star." },
                  { title: "Innovation", desc: "Creating new products, services, and experiences that leave competitors in the dust." },
                  { title: "High-Level Relationships", desc: "Building the key partnerships and closing the deals that require a human soul." },
                  { title: "Company Growth", desc: "Working ON the business, not IN it. Scaling without adding operational drag." }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[18px] font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-zinc-500 text-[14px] font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="mt-20 text-center">
            <div className="inline-block p-12 border border-zinc-900 bg-zinc-950/50">
              <h4 className="font-bebas text-3xl md:text-5xl mb-4 tracking-tighter uppercase">Impact Measured Weekly</h4>
              <div className="text-5xl md:text-7xl font-bebas text-[#D90019] mb-4">25—40</div>
              <p className="text-zinc-500 text-[14px] font-black uppercase tracking-[0.4em]">Hours saved on average</p>
              <Link href="/audit" className="mt-10 inline-block text-[11px] font-black uppercase tracking-[0.3em] text-[#D90019] hover:text-white transition-all underline underline-offset-8 decoration-1">
                Reclaim Your Genius →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- THE TRANSFORMATION (BEFORE/AFTER) --- */}
      <section className="py-32 px-6 md:px-[80px] bg-[#0A070B] border-y border-zinc-900">
        <div className="max-w-[1240px] mx-auto">
          <ScrollReveal className="text-center mb-24">
            <p className="text-[10px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-8">Transformation</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
              What your business looks like<br />
              <span className="text-zinc-700 italic">Before and After.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
            {/* BEFORE */}
            <div className="bg-[#050505] p-12 lg:p-16">
              <div className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em] mb-12">Before Elianatech</div>
              <ul className="space-y-6">
                {[
                  "Every task needs a person to start it, track it, and finish it",
                  "Leads get lost. Invoices go out late. Follow-ups die in inboxes",
                  "12 tools that don't talk to each other. Data moved by hand",
                  "The owner is the bottleneck. Nothing moves without them",
                  "Growth breaks things. More revenue means more chaos",
                  "Nights and weekends: the business goes dark"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] text-zinc-600 font-light italic">
                    <span className="text-zinc-800 mt-1.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AFTER */}
            <div className="bg-[#050505] p-12 lg:p-16">
              <div className="text-[10px] font-black text-[#D90019] uppercase tracking-[0.4em] mb-12">After Elianatech</div>
              <ul className="space-y-6">
                {[
                  "Mornings that start with results, not a to-do list",
                  "Your team doing actual work — not administrative survival",
                  "A business that keeps running when you step away",
                  "Every tool connected. Data moves on its own",
                  "Your attention back — for decisions that need you",
                  "24/7/365 — nights, weekends, holidays. It never stops"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[15px] text-zinc-200 font-medium">
                    <ArrowRight className="text-[#D90019] w-4 h-4 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRY PLAYBOOKS (EXISTING BUT POLISHED) --- */}
      <section id="playbooks" className="py-32 px-6 md:px-[80px] bg-[#050505]">
          <div className="max-w-[1400px] mx-auto">
             <ScrollReveal className="text-center mb-20">
                <p className="text-[10px] tracking-[0.6em] uppercase text-[#D90019] font-black mb-6">Verticals</p>
                <h3 className="font-bebas text-[48px] md:text-[72px] leading-none mb-8 tracking-tighter uppercase">Industry Playbooks.</h3>
                <p className="text-zinc-500 font-light max-w-2xl mx-auto italic text-[15px] leading-relaxed">
                  Every industry runs on different workflows, different client journeys, and different failure points. We install the playbook built specifically for your category.
                </p>
             </ScrollReveal>

             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-900 border border-zinc-900">
                {[
                  { feature: "Patient Intake & Billing", sector: "Medical & Dental", desc: "Automate scheduling, insurance verification, follow-ups, and review collection" },
                  { feature: "Lead-to-Close Pipeline", sector: "Home Services (High Ticket)", desc: "Instant lead response, estimate automation, job scheduling, and invoice triggers" },
                  { feature: "Retention & Rebooking", sector: "Home Services (Recurring)", desc: "Automated rebooking, seasonal campaigns, review requests, and route optimization" },
                  { feature: "Client Intake & Case Mgmt", sector: "Legal Services", desc: "Automated intake forms, retainer billing, case status updates, and referral tracking" },
                  { feature: "Booking & Retention", sector: "Beauty & Personal Care", desc: "No-show reduction, rebooking sequences, loyalty programs, and review generation" },
                  { feature: "Lead Nurture & Transactions", sector: "Real Estate & Property", desc: "Automated lead follow-up, listing alerts, transaction coordination, and past-client outreach" },
                  { feature: "Appointments & Care", sector: "Health & Wellness", desc: "Booking automation, care plan follow-ups, membership retention, and HIPAA-aware comms" },
                  { feature: "Scheduling & Re-engagement", sector: "Pet Services", desc: "Appointment reminders, vaccination tracking, rebooking triggers, and review requests" },
                  { feature: "Service & Sales Pipeline", sector: "Automotive", desc: "Lead response, service reminders, estimate follow-ups, and reputation management" },
                  { feature: "Client Lifecycle", sector: "Professional & Financial", desc: "Proposal automation, retainer management, compliance workflows, and referral systems" },
                  { feature: "Bookings & Guest Experience", sector: "Events & Hospitality", desc: "Reservation management, guest comms, post-event follow-ups, and review generation" },
                  { feature: "Enrollment & Parent Comms", sector: "Education & Childcare", desc: "Enrollment funnels, parent updates, waitlist management, and re-enrollment campaigns" },
                  { feature: "Trial-to-Paid & Retention", sector: "SaaS Founders", desc: "Onboarding sequences, churn prevention, usage-based triggers, and expansion revenue" },
                  { feature: "Launch & Engagement", sector: "Course Creators", desc: "Launch sequences, student onboarding, completion nudges, and upsell automation" },
                  { feature: "Pipeline & Delivery", sector: "Coaches & Consultants", desc: "Discovery call booking, proposal delivery, client onboarding, and renewal triggers" },
                  { feature: "Cart Recovery & LTV", sector: "E-commerce & Retail", desc: "Abandoned cart flows, post-purchase sequences, reorder triggers, and review requests" },
                  { feature: "Sales & Client Ops", sector: "Agencies", desc: "Lead pipeline, proposal automation, project status updates, and client reporting" },
                  { feature: "Leads & Operations", sector: "Misc. Local Services", desc: "Lead follow-up, scheduling, invoicing, review generation, and client retention" }
                ].map((item, i) => (
                  <div key={i} className="bg-[#050505] p-6 hover:bg-zinc-900 group transition-all cursor-default overflow-hidden relative border border-transparent hover:border-zinc-800 h-full flex flex-col">
                     <div className="text-[#D90019] text-[9px] font-black uppercase tracking-widest mb-3 opacity-60 group-hover:opacity-100 transition-opacity">{item.feature}</div>
                     <h5 className="text-[14px] font-bold mb-3 uppercase tracking-tighter leading-tight text-white group-hover:text-[#D90019] transition-colors">{item.sector}</h5>
                     <p className="text-zinc-600 text-[11px] leading-relaxed group-hover:text-zinc-400 transition-colors font-light flex-grow">
                        {item.desc}
                     </p>
                  </div>
                ))}
             </div>
             
             <div className="mt-16 text-center">
                <Link href="/audit" className="text-[12px] font-black tracking-[0.3em] uppercase text-[#D90019] hover:text-white transition-all group">
                   Start the OS Audit - we'll match you. <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                </Link>
             </div>
          </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-32 px-6 md:px-[80px] bg-[#0A070B] border-y border-zinc-900">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal className="text-center mb-20">
            <p className="text-[10px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-8">FAQ</p>
            <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tighter mb-8 uppercase">
              Frequently Asked<br />
              <span className="text-zinc-700 italic">Operations.</span>
            </h2>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-zinc-900 bg-zinc-950/50 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-zinc-900 transition-colors"
                >
                  <span className="text-[16px] md:text-[18px] font-bold uppercase tracking-tight">{item.q}</span>
                  {openFaq === i ? <Minus className="w-5 h-5 text-[#D90019]" /> : <Plus className="w-5 h-5 text-zinc-700" />}
                </button>
                {openFaq === i && (
                  <div className="px-8 pb-8 text-zinc-500 font-light leading-relaxed text-[15px] animate-in slide-in-from-top-2 duration-300">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-52 px-6 md:px-[80px] bg-[#050505]">
          <div className="max-w-[1000px] mx-auto text-center relative z-10">
             <ScrollReveal>
                <p className="text-[11px] tracking-[0.8em] uppercase text-[#D90019] font-black mb-12 italic">The End of Manual</p>
                <h2 className="font-bebas text-5xl md:text-[92px] leading-[0.85] tracking-tight mb-16 italic uppercase">
                   Your Business.<br />
                   Rebuilt as a machine.
                </h2>
                <p className="text-[18px] md:text-[22px] text-zinc-500 max-w-[850px] mx-auto font-light leading-snug italic mb-20 px-6">
                   “This is infrastructure surgery, not a software subscription. We go in, we rebuild, and we hand you back a business that runs without you holding it together.”
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                   <Link href="/audit" className="bg-[#D90019] text-white px-14 py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                      Start Your OS Audit →
                   </Link>
                   <a href="https://cal.com/elianatech/30min" className="bg-transparent text-white border border-[#D90019]/40 px-14 py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-[#D90019]/10 transition-all">
                      Book Strategy Call
                   </a>
                </div>
             </ScrollReveal>
          </div>
      </section>

      <Footer />

      <style jsx global>{`
        .font-bebas { font-family: var(--font-bebas-neue), sans-serif; }
      `}</style>
    </div>
  )
}
