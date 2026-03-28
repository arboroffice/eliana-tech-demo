"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import { EmbeddedAudit } from "@/components/embedded-audit"

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const allIndustries = [
    { name: "Medical & Dental", slug: "medical-dental" },
    { name: "Home Services (High Ticket)", slug: "home-services-high-ticket" },
    { name: "Home Services (Recurring)", slug: "home-services-recurring" },
    { name: "Legal Services", slug: "legal" },
    { name: "Beauty & Personal Care", slug: "beauty-personal-care" },
    { name: "Real Estate & Property", slug: "real-estate-property" },
    { name: "Health & Wellness", slug: "health-wellness" },
    { name: "Pet Services", slug: "pet-services" },
    { name: "Automotive", slug: "automotive" },
    { name: "Professional & Financial", slug: "professional-financial" },
    { name: "Events & Hospitality", slug: "events-hospitality" },
    { name: "Education & Childcare", slug: "education-childcare" },
    { name: "SaaS Founders", slug: "saas" },
    { name: "Course Creators", slug: "course-creators" },
    { name: "Coaches & Consultants", slug: "coaching" },
    { name: "E-commerce & Retail", slug: "ecommerce" },
    { name: "Agencies", slug: "agencies" },
    { name: "Misc. Local Services", slug: "misc-local-services" },
  ]

  const freedoms = [
    { n: "01", text: <><strong>Mornings that start with results,</strong> not a to-do list you&apos;re already behind on</> },
    { n: "02", text: <>Your team doing <strong>actual work</strong> — not administrative survival every day</> },
    { n: "03", text: <>A business that <strong>keeps running when you step away</strong> — not one that pauses</> },
    { n: "04", text: <><strong>Every tool connected.</strong> Data moves on its own. Nothing copied by hand</> },
    { n: "05", text: <>Your attention back — <strong>for the decisions that actually need you</strong></> },
  ]

  const activityFeed = [
    { color: "#4ADE80", text: <><strong>Lead followed up</strong> — 4 min after inquiry</>, chip: "AUTO", chipColor: "g" },
    { color: "#D90019", text: <><strong>Invoice generated</strong> — triggered on job close</>, chip: "AUTO", chipColor: "g" },
    { color: "#4ADE80", text: <><strong>Review requested</strong> — 2h post-service</>, chip: "AUTO", chipColor: "g" },
    { color: "#D90019", text: <><strong>Campaign written & sent</strong> — AI monthly email</>, chip: "AI", chipColor: "r" },
    { color: "#4ADE80", text: <><strong>KPI report compiled</strong> — sent at 6am</>, chip: "AUTO", chipColor: "g" },
    { color: "#D90019", text: <><strong>Dormant client re-engaged</strong> — 14 outreach sent</>, chip: "AUTO", chipColor: "g" },
  ]

  return (
    <div className="bg-[#060406] text-[#F2EEF5] font-inter overflow-x-hidden selection:bg-[#D90019] selection:text-white">

      {/* ─── NAV ─── */}
      <nav className={`fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-6 md:px-[72px] h-[72px] transition-all duration-400 ${scrolled ? "bg-[#060406]/[0.96] backdrop-blur-2xl border-b border-white/[0.04]" : "bg-transparent"}`}>
        <Link href="/" className="font-playfair italic text-[21px] text-[#F2EEF5] tracking-wide">
          Elianatech<span className="text-[#D90019] not-italic">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "The Story", href: "#story" },
            { label: "The Transformation", href: "#transform" },
            { label: "How It Works", href: "#phases" },
            { label: "Playbooks", href: "#playbooks" },
            { label: "Free Audit", href: "#audit" },
          ].map(l => (
            <a key={l.href} href={l.href} className="text-[12px] text-white/40 tracking-wide hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
        <a href="#audit" className="bg-[#D90019] text-white px-4 md:px-6 py-2 md:py-2.5 text-[11px] md:text-[12px] font-semibold tracking-wide hover:brightness-110 transition-all">Get Your Audit</a>
      </nav>

      <main>

        {/* ─── HERO ─── */}
        <section className="relative flex flex-col justify-end px-6 md:px-[72px] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(rgba(217,0,25,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(217,0,25,0.025) 1px,transparent 1px)",
            backgroundSize: "88px 88px"
          }} />
          <div className="absolute w-[600px] md:w-[1100px] h-[600px] md:h-[1100px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.09)_0%,transparent_70%)] -top-[150px] md:-top-[300px] -right-[150px] md:-right-[300px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

          <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-white/40 font-semibold mb-6 md:mb-9 relative z-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="w-8 h-px bg-[#D90019]" />
            Elianatech — AI Infrastructure
          </p>

          <h1 className="font-playfair text-[clamp(38px,7vw,110px)] leading-[0.92] text-[#F2EEF5] max-w-[1100px] tracking-tight relative z-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            We gut your business.<br />Rebuild it as an<br /><em className="text-[#D90019]">autonomous machine.</em>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 md:gap-[120px] mt-10 md:mt-16 relative z-10 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div>
              <p className="text-[15px] md:text-[18px] text-white/40 leading-relaxed max-w-[480px]">
                <strong className="text-white font-medium">We go inside your operation, rip out the manual plumbing, and install AI infrastructure that runs your business in the background — permanently.</strong>
              </p>
              <div className="flex flex-wrap gap-3 mt-7 md:mt-9">
                <a href="#audit" className="bg-[#D90019] text-white px-7 md:px-9 py-3.5 md:py-4 text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all inline-block shadow-[0_12px_48px_rgba(217,0,25,0.2)]">
                  Start Your Free Audit
                </a>
                <a href="#transform" className="bg-transparent text-white/40 px-7 md:px-9 py-3.5 md:py-4 text-[13px] border border-white/[0.07] hover:text-white hover:border-white/20 transition-all inline-block">
                  See the Transformation
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between md:justify-end gap-4 md:gap-7 overflow-x-auto">
              {[
                { n: "40+", l: "Hours returned weekly" },
                { n: "12", l: "Industry playbooks deployed" },
                { n: "3\u00D7", l: "Output per member in 90 days" },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-[#D90019] pl-4 md:pl-6 shrink-0">
                  <p className="font-playfair italic text-[36px] md:text-[52px] text-white leading-none mb-1">{s.n}</p>
                  <p className="text-[11px] md:text-[13px] text-white/40 tracking-wide">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATEMENT STRIP ─── */}
        <ScrollReveal>
          <section className="bg-[#D90019] px-6 md:px-[72px] py-10 overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-[60px]">
              <p className="font-playfair text-[clamp(22px,2.5vw,36px)] text-white leading-[1.2] flex-1">
                We install an AI system that <em>executes tasks, connects your tools, and runs your business in the background</em> — so your team can do the work only humans can do.
              </p>
              <div className="hidden md:block w-px h-[72px] bg-white/25 shrink-0" />
              <p className="text-[14px] text-white/65 leading-relaxed max-w-xs shrink-0">
                Agents trained on your industry data. Proven infrastructure. Built once, running forever.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* ─── FOUNDER ─── */}
        <section className="bg-[#0A070B] border-t border-b border-white/[0.04]" id="story">
          <div className="grid md:grid-cols-2">
            <ScrollReveal>
              <div className="px-6 md:px-[72px] py-14 md:py-24 md:border-r border-b md:border-b-0 border-white/[0.04] relative overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.07)_0%,transparent_70%)] -bottom-[100px] -left-[100px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                    <span className="w-6 h-px bg-[#D90019]" />Why This Exists
                  </p>
                  <h2 className="font-playfair text-[clamp(32px,4.5vw,62px)] leading-[1.02] text-white mb-6 md:mb-8">
                    We built this because<br />we needed it and<br /><em className="text-[#D90019]">it didn&apos;t exist.</em>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-9 mb-10 md:mb-16">
                    <p className="text-[15px] text-white/40 leading-relaxed">
                      Mia grew up running operations for her dad&apos;s company. <strong className="text-white font-medium">Answering phones, chasing follow-ups, copying data between tools, holding everything in her head.</strong> No tool actually went and did the work. They just reminded her to. Tyler scaled and sold multiple brands through organic media — and watched every one of them hit the same wall: <strong className="text-white font-medium">the back-end couldn&apos;t keep up with the front-end.</strong>
                    </p>
                    <p className="text-[15px] text-white/40 leading-relaxed md:border-l md:border-white/[0.07] md:pl-7">
                      We couldn&apos;t find a solution that actually <strong className="text-white font-medium">executed</strong> — not assisted, not reminded, not suggested. Everything required a human to be the glue.<br /><br />So we built the glue. Then we replaced it with infrastructure. We combined <strong className="text-white font-medium">brand strategy, media, and operational systems</strong> — and figured out how to install it inside any business in any industry.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
                    <div>
                      <p className="font-playfair italic text-[18px] text-white/40 mb-0.5">Mia</p>
                      <p className="text-[10px] tracking-[2px] uppercase text-white/[0.16] font-semibold">Co-Founder · Infrastructure & Operations</p>
                    </div>
                    <div>
                      <p className="font-playfair italic text-[18px] text-white/40 mb-0.5">Tyler</p>
                      <p className="text-[10px] tracking-[2px] uppercase text-white/[0.16] font-semibold">Co-Founder · Brand Strategy & Media</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="px-6 md:px-[72px] py-14 md:py-24">
                <p className="text-[10px] tracking-[3px] uppercase text-white/[0.16] font-semibold mb-6 md:mb-9">What changes when it works</p>
                <div className="flex flex-col">
                  {freedoms.map((f, i) => (
                    <div key={i} className="flex items-start gap-5 py-6 border-b border-white/[0.04] first:border-t hover:pl-2 transition-all">
                      <span className="font-playfair italic text-[13px] text-[#D90019]/35 min-w-[20px] mt-0.5 shrink-0">{f.n}</span>
                      <span className="text-[16px] text-white/40 leading-relaxed [&_strong]:text-white [&_strong]:font-medium">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── EARLY AUDIT CTA ─── */}
        <ScrollReveal>
          <section className="bg-[#D90019] px-6 md:px-[72px] py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-[3px] uppercase text-white/60 font-semibold mb-2.5">Ready to See What We&apos;d Build?</p>
              <p className="font-playfair text-[clamp(22px,2.5vw,34px)] text-white leading-[1.15]">
                Take the free audit. We&apos;ll map your gaps and tell you<br className="hidden md:block" />
                <em>exactly</em> what the system looks like for your business.
              </p>
            </div>
            <a href="#audit" className="bg-white text-[#D90019] px-9 py-4 text-[13px] font-bold tracking-wide hover:bg-white/90 transition-all shrink-0 inline-block whitespace-nowrap">
              Start Free Audit &#8594;
            </a>
          </section>
        </ScrollReveal>

        {/* ─── TRANSFORMATION ─── */}
        <section className="px-6 md:px-[72px] py-20 md:py-40 relative overflow-hidden" id="transform">
          <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.07)_0%,transparent_70%)] -left-[200px] -bottom-[200px] pointer-events-none" />
          <ScrollReveal>
            <div className="mb-12 md:mb-24 max-w-[800px]">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                <span className="w-6 h-px bg-[#D90019]" />The Transformation
              </p>
              <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white">
                What your business looks like<br />before and <em className="text-[#D90019]">after.</em>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-4 md:gap-0">
              {/* Before */}
              <div className="bg-[#0A070B] border border-white/[0.04] p-6 md:p-14">
                <span className="text-[10px] tracking-[3px] uppercase text-white/[0.16] font-semibold block mb-5">Before Elianatech</span>
                <p className="font-playfair italic text-[28px] text-white leading-[1.1] mb-7">A business that runs on<br />human effort and memory.</p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "Every task needs a person to start it, track it, and finish it",
                    "Leads get lost. Invoices go out late. Follow-ups die in inboxes",
                    "12 tools that don't talk to each other. Data moved by hand",
                    "The owner is the bottleneck. Nothing moves without them",
                    "Growth breaks things. More revenue means more chaos",
                    "Nights and weekends: the business goes dark",
                    "No visibility. You find out things went wrong after the damage",
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-white/40 leading-relaxed flex gap-3 items-start">
                      <span className="text-[13px] mt-0.5 shrink-0">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Middle divider */}
              <div className="hidden md:flex items-center justify-center flex-col gap-3">
                <span className="font-playfair italic text-[20px] text-white/[0.16] tracking-[4px]" style={{ writingMode: "vertical-rl" }}>AFTER</span>
              </div>
              {/* After */}
              <div className="bg-gradient-to-br from-[#D90019]/[0.07] to-orange-500/[0.03] border border-[#D90019]/20 p-6 md:p-14">
                <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-5">After Elianatech</span>
                <p className="font-playfair italic text-[28px] text-white leading-[1.1] mb-7">A machine that operates<br />on infrastructure, not effort.</p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "Tasks execute on triggers. Work happens without anyone starting it",
                    "Every lead followed up in 5 minutes. Every invoice sent. Every deal tracked",
                    "Every tool connected. One system. Data flows automatically",
                    "You set direction. The machine handles execution",
                    "The system scales with you. More volume, no more chaos",
                    "24/7/365 — nights, weekends, holidays. It never stops",
                    "Live dashboard. You know what's happening before it becomes a problem",
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-white/40 leading-relaxed flex gap-3 items-start">
                      <span className="text-[#D90019] text-[13px] mt-0.5 shrink-0">&#8594;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── PHASES ─── */}
        <section className="bg-[#0A070B] border-t border-b border-white/[0.04] px-6 md:px-[72px] py-20 md:py-40 relative overflow-hidden" id="phases">
          <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.06)_0%,transparent_70%)] -right-[200px] top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 mb-12 md:mb-24 items-end">
            <ScrollReveal>
              <div>
                <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                  <span className="w-6 h-px bg-[#D90019]" />How We Build It
                </p>
                <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white">
                  Three phases.<br />One complete <em className="text-[#D90019]">rebuild.</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[17px] text-white/40 leading-relaxed">
                We don&apos;t install software and walk away. We go inside your operation, learn how it works, rip out what shouldn&apos;t exist, and rebuild the whole thing — then stay in to make sure it runs.
              </p>
            </ScrollReveal>
          </div>
          <div className="flex flex-col relative">
            <div className="absolute left-[28px] top-14 bottom-14 w-px bg-gradient-to-b from-transparent via-white/[0.07] to-transparent pointer-events-none hidden md:block" />
            {[
              { num: "I", tag: "Phase One — Discovery", name: <>The <em className="text-[#D90019]">Audit.</em></>, desc: "We map your entire operation — every tool, every manual task, every gap, every place revenue leaks — before we touch a single thing." },
              { num: "II", tag: "Phase Two — Build", name: <>The <em className="text-[#D90019]">Rebuild.</em></>, desc: "We install agents trained on your industry data, connect every tool in your stack, and build automated pipelines across every department — then train your team to work with the machine." },
              { num: "III", tag: "Phase Three — Operate", name: <>The <em className="text-[#D90019]">Machine.</em></>, desc: "We hand you a running system — owned by you, not us. Then we stay in to monitor, retrain, and expand it as your business grows. You don't maintain this. We do." },
            ].map((phase, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="grid grid-cols-[56px_1fr] gap-6 md:gap-10 py-14 border-b border-white/[0.04] last:border-b-0 hover:pl-2 transition-all group">
                  <div className="relative z-10">
                    <div className="w-14 h-14 border border-white/[0.07] flex items-center justify-center font-playfair italic text-[20px] text-white/[0.16] bg-[#0A070B] group-hover:border-[#D90019] group-hover:text-[#D90019] group-hover:bg-[#D90019]/[0.06] transition-all">
                      {phase.num}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[3px] uppercase text-white/[0.16] font-semibold mb-3 group-hover:text-[#D90019] transition-colors">{phase.tag}</p>
                    <h3 className="font-playfair text-[clamp(26px,2.5vw,38px)] text-white leading-[1.05] mb-4">{phase.name}</h3>
                    <p className="text-[15px] text-white/40 leading-relaxed max-w-[600px]">{phase.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ─── INDUSTRY PLAYBOOKS ─── */}
        <section className="bg-[#0A070B] border-t border-white/[0.04] px-6 md:px-[72px] py-20 md:py-40 overflow-hidden" id="playbooks">
          <ScrollReveal>
            <div className="mb-10 md:mb-20 max-w-[700px]">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                <span className="w-6 h-px bg-[#D90019]" />Industry Playbooks
              </p>
              <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white mb-5">
                Proven infrastructure<br />built for how your<br /><em className="text-[#D90019]">industry works.</em>
              </h2>
              <p className="text-[16px] text-white/40 leading-relaxed mt-5">
                Every industry runs on different workflows, different client journeys, and different failure points. We don&apos;t install a generic system. We install the playbook built specifically for your category.
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-white/[0.04] border border-white/[0.04]">
            {allIndustries.map((cat, i) => (
              <StaggerItem key={i}>
                <Link href={`/industry-categories/${cat.slug}`} className="group bg-[#0A070B] px-5 py-6 flex flex-col gap-3 hover:bg-[#0F0B10] border-l-2 border-transparent hover:border-[#D90019] transition-all h-full">
                  <ArrowRight size={11} className="text-[#D90019] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[11px] uppercase tracking-[1.5px] font-semibold text-white/40 group-hover:text-white/70 transition-colors leading-snug">{cat.name}</span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-[13px] text-white/[0.16] mt-6 tracking-wide">
            Every playbook comes with pre-trained agents, automated pipelines, and industry-specific infrastructure. <a href="#audit" className="text-[#D90019] hover:underline">Start the audit — we&apos;ll match you. &#8594;</a>
          </p>
        </section>

        {/* ─── PROOF / DATA ─── */}
        <section className="px-6 md:px-[72px] py-20 md:py-40 relative overflow-hidden">
          <div className="absolute w-[700px] h-[700px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.06)_0%,transparent_70%)] -right-[150px] top-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-end mb-10 md:mb-16">
            <ScrollReveal>
              <div>
                <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                  <span className="w-6 h-px bg-[#D90019]" />What the Data Shows
                </p>
                <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white">
                  Numbers from businesses<br />running on the <em className="text-[#D90019]">infrastructure.</em>
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="text-[16px] text-white/40 leading-relaxed">
                These are real outcomes from businesses across every industry in our playbook — measured at 90 days post-install. Same teams. Same hours. Different systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
            {/* Stats Card */}
            <ScrollReveal>
              <div className="bg-white/[0.025] border border-white/[0.04] p-9 hover:border-[#D90019]/20 transition-colors">
                <p className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-semibold mb-2">Hours Returned Per Team — Weekly</p>
                <p className="font-playfair italic text-[clamp(40px,5vw,72px)] text-white leading-none mb-1">
                  <span className="text-[#D90019]">34</span>h
                </p>
                <p className="text-[12px] text-white/40 mb-6">Average &middot; <span className="text-emerald-400 font-semibold">&#8593; From under 3h before install</span></p>
                <div className="flex items-end gap-[7px] h-[100px] relative">
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.04]" />
                  {[28, 22, 30, 64, 80, 92, 100].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
                      <div className={`w-full ${i < 3 ? "bg-white/8" : "bg-[#D90019] shadow-[0_0_12px_rgba(217,0,25,0.2)]"}`} style={{ height: `${h}%` }} />
                      {(i === 0 || i === 3 || i === 6) && (
                        <span className="text-[9px] text-white/[0.16]">{i === 0 ? "Pre" : i === 3 ? "+30d" : "+90d"}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Activity Feed */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white/[0.025] border border-white/[0.04] p-9 hover:border-[#D90019]/20 transition-colors">
                <p className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-semibold mb-4">The Machine — Live Right Now</p>
                <div className="flex flex-col">
                  {activityFeed.map((item, i) => (
                    <div key={i} className="flex items-center gap-3.5 py-3.5 border-b border-white/[0.04] last:border-b-0">
                      <div className="w-1.5 h-1.5 shrink-0" style={{ backgroundColor: item.color }} />
                      <span className="text-[13px] text-white/40 flex-1 leading-snug [&_strong]:text-white [&_strong]:font-medium">{item.text}</span>
                      <span className={`text-[9px] font-bold tracking-[1.2px] uppercase px-2 py-0.5 ${item.chipColor === "g" ? "bg-emerald-400/8 text-emerald-400" : "bg-[#D90019]/8 text-[#D90019]"}`}>
                        {item.chip}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Revenue Growth */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/[0.025] border border-white/[0.04] p-9 mt-4 hover:border-[#D90019]/20 transition-colors">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
                <div>
                  <p className="text-[10px] tracking-[2.5px] uppercase text-white/40 font-semibold mb-2">Revenue Growth — 6 Months Post-Install</p>
                  <p className="font-playfair italic text-[clamp(40px,5vw,72px)] text-white leading-none mb-1">
                    <span className="text-[#D90019]">+41</span>%
                  </p>
                  <p className="text-[12px] text-white/40 mb-4">Average across all industries &middot; <span className="text-emerald-400 font-semibold">Same team, same hours</span></p>
                  <p className="text-[14px] text-white/40 leading-relaxed mb-7">When humans stop doing what machines should do, they do what only humans can. Revenue follows every time.</p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-l border-white/[0.04] pl-5">
                      <p className="font-playfair italic text-[36px] text-white leading-none mb-1">5<span className="text-[20px]">min</span></p>
                      <p className="text-[12px] text-white/40">Avg lead response time after install</p>
                    </div>
                    <div className="border-l border-white/[0.04] pl-5">
                      <p className="font-playfair italic text-[36px] text-white leading-none mb-1">3&#215;</p>
                      <p className="text-[12px] text-white/40">Output per team member, 90 days</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <svg viewBox="0 0 560 130" className="w-full">
                    <defs><linearGradient id="rg2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D90019" stopOpacity="0.4" /><stop offset="100%" stopColor="#D90019" stopOpacity="0" /></linearGradient></defs>
                    <line x1="0" y1="32" x2="560" y2="32" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="0" y1="65" x2="560" y2="65" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="0" y1="98" x2="560" y2="98" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <path d="M0,118 L93,113 L186,104 L280,84 L373,56 L466,28 L560,10 L560,130 L0,130 Z" fill="url(#rg2)" opacity="0.1" />
                    <path d="M0,118 L93,113 L186,104 L280,84 L373,56 L466,28 L560,10" fill="none" stroke="#D90019" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    {[[0, 118, 3], [93, 113, 3.5], [186, 104, 3.5], [280, 84, 4], [373, 56, 4], [466, 28, 4.5], [560, 10, 6]].map(([cx, cy, r], i) => (
                      <circle key={i} cx={cx} cy={cy} r={r} fill="#D90019" style={i === 6 ? { filter: "drop-shadow(0 0 8px rgba(217,0,25,0.7))" } : {}} />
                    ))}
                  </svg>
                  <div className="flex justify-between mt-2">
                    {["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"].map(m => (
                      <span key={m} className="text-[9px] text-white/[0.16]">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── ENGAGEMENT MODEL ─── */}
        <section className="bg-[#0A070B] border-t border-white/[0.04] px-6 md:px-[72px] py-20 md:py-40 overflow-hidden relative" id="engage">
          <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.06)_0%,transparent_70%)] -right-[200px] -bottom-[200px] pointer-events-none" />
          <ScrollReveal>
            <div className="mb-10 md:mb-20 max-w-[760px]">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                <span className="w-6 h-px bg-[#D90019]" />How We Work Together
              </p>
              <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-white mb-5">
                An evolution — not a<br />one-time <em className="text-[#D90019]">transaction.</em>
              </h2>
              <p className="text-[17px] text-white/40 leading-relaxed mt-5 max-w-[600px]">
                Most businesses aren&apos;t ready to hand the keys to AI on day one. They need to see it work first. So we start small, prove it, then go as deep as you want.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {[
              {
                num: "01", tier: "Start Here", name: <>Your AI Assistant<span className="text-[#D90019]">.</span></>,
                price: "One-time setup. Scoped after your audit.",
                desc: "Before we touch your systems, we put an AI executive assistant inside your business. It handles your inbox, drafts your replies, manages your calendar, follows up on deals, and clears the noise.",
                why: "Why we start here:",
                whySub: "You need to trust it before you hand it more. This is the fastest way to feel the shift.",
                items: ["AI assistant trained on your voice", "Inbox management, replies, and triage", "Deal follow-up and calendar coordination", "Daily briefings and task prioritization", "30-day data collection on your business"],
                featured: false,
              },
              {
                num: "02", tier: "The Build", name: <>AI Systems &<br /><em className="text-[#D90019]">Infrastructure.</em></>,
                price: "One-time build fee. Scoped after your audit.",
                desc: "Now we go deep. Using the data from your assistant phase, we gut the manual plumbing and install the full infrastructure — industry playbook deployed, agents trained on your data, every tool connected.",
                why: "Why it works now:",
                whySub: "We already know your operation. The build is faster, sharper, and more accurate because we didn't skip step one.",
                items: ["Full industry playbook installed", "AI agents across sales, ops, finance, service", "Every tool connected and automated", "Pipelines built for leads, clients, invoices, reviews", "Team trained to work with the machine", "Optional maintenance retainer"],
                featured: true,
              },
              {
                num: "03", tier: "The Deep End", name: <>Your AI <em className="text-[#D90019]">Wing.</em></>,
                price: "Retainer or revenue share. Scoped together.",
                desc: "We embed as your dedicated AI department. Not a vendor. We come on as part of your operation — continuously shipping new infrastructure and expanding automation into every function.",
                why: "Who this is for:",
                whySub: "Founders who've seen AI work and want to make it the operating system for everything.",
                items: ["Embedded AI team inside your operation", "New infrastructure shipped every month", "Every department automated as you grow", "AI strategy as a core business function", "Revenue share available for the right businesses", "End goal: every repeatable function runs on AI"],
                featured: false,
              },
            ].map((ev, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] group">
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-11 h-11 border flex items-center justify-center font-playfair italic text-[17px] bg-[#0A070B] shrink-0 relative z-10 transition-all ${ev.featured ? "border-[#D90019] text-[#D90019] bg-[#D90019]/[0.06]" : "border-white/[0.07] text-white/[0.16] group-hover:border-[#D90019] group-hover:text-[#D90019]"}`}>
                      {ev.num}
                    </div>
                    {i < 2 && <div className="flex-1 w-px bg-white/[0.04] mt-2" />}
                  </div>
                  <div className={`border p-8 md:p-12 ml-3 md:ml-6 mb-0 transition-colors ${ev.featured ? "bg-gradient-to-br from-[#D90019]/[0.07] to-orange-500/[0.03] border-[#D90019]/20" : "border-white/[0.04] hover:border-[#D90019]/20"}`}>
                    <span className={`text-[10px] tracking-[3px] uppercase font-semibold block mb-3.5 ${ev.featured ? "text-[#D90019]" : "text-white/[0.16]"}`}>{ev.tier}</span>
                    <h3 className="font-playfair text-[clamp(28px,3vw,44px)] leading-[1.03] text-white mb-2">{ev.name}</h3>
                    <p className="text-[14px] text-white/40 mb-5 leading-snug"><strong className="text-white font-semibold">{ev.price}</strong></p>
                    <p className="text-[15px] text-white/40 leading-relaxed mb-4 max-w-[680px]">{ev.desc}</p>
                    <p className="text-[13px] text-[#D90019]/65 font-semibold mb-5 leading-relaxed max-w-[680px]">
                      {ev.why} <span className="text-white/40 font-light">{ev.whySub}</span>
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                      {ev.items.map((item, j) => (
                        <li key={j} className={`text-[13px] flex gap-2 items-start leading-snug ${ev.featured ? "text-white/40" : "text-white/[0.16]"}`}>
                          <span className={`shrink-0 ${ev.featured ? "text-[#D90019]" : "text-[#D90019]/35"}`}>—</span>{item}
                        </li>
                      ))}
                    </ul>
                    <a href="#audit" className="text-[12px] font-semibold text-[#D90019] border-b border-[#D90019]/30 pb-0.5 hover:border-[#D90019] transition-all">
                      {i === 0 ? "Start here" : i === 1 ? "See what we'd build for you" : "Apply for the AI wing"} &#8594;
                    </a>
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex items-center gap-6 pl-[48px] md:pl-[80px] my-0">
                    <div className="w-0.5 h-14 bg-gradient-to-b from-white/[0.04] to-[#D90019] ml-[21px] md:ml-5 shrink-0" />
                    <span className="text-[12px] text-[#D90019] italic font-playfair tracking-wide opacity-80">
                      {i === 0 ? "You see it work. Now we build." : "Business is running. Now we scale it."}
                    </span>
                  </div>
                )}
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="bg-[#D90019]/[0.07] border border-[#D90019]/15 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mt-14">
              <span className="text-[28px] shrink-0">&#10022;</span>
              <p className="text-[15px] text-white/40 leading-relaxed">
                You don&apos;t have to commit to the whole thing upfront. <strong className="text-white font-medium">Start with the assistant. See the shift. Then decide how far you want to take it.</strong> Every client who&apos;s gone deep started exactly where you are — not sure if AI could actually run their business. The data always changes that.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── EMBEDDED AUDIT ─── */}
        <section className="bg-[#0A070B] border-t border-white/[0.04]" id="audit">
          <EmbeddedAudit />
        </section>

        {/* ─── FINAL CTA ─── */}
        <section className="px-6 md:px-[72px] py-20 md:py-40 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(217,0,25,0.07)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute font-playfair italic text-[22vw] text-[#D90019]/[0.025] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap leading-none tracking-tight">
            rebuild
          </div>
          <ScrollReveal>
            <p className="flex items-center justify-center gap-3 text-[10px] tracking-[4px] uppercase text-white/40 font-semibold mb-7 relative z-10">
              <span className="w-10 h-px bg-white/[0.07]" />The Decision<span className="w-10 h-px bg-white/[0.07]" />
            </p>
            <h2 className="font-playfair text-[clamp(52px,7vw,108px)] leading-[0.93] text-white mb-7 relative z-10 tracking-tight">
              Your business.<br />Rebuilt as a<br /><em className="text-[#D90019]">machine.</em>
            </h2>
            <p className="text-[17px] text-white/40 max-w-[480px] mx-auto mb-12 leading-relaxed relative z-10">
              This is infrastructure surgery, not a software subscription. We go in, we rebuild, and we hand you back a business that runs without you holding it together.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              <a href="#audit" className="bg-[#D90019] text-white px-9 py-4 text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all inline-block shadow-[0_12px_48px_rgba(217,0,25,0.2)]">
                Start Your Free Audit
              </a>
              <a href="https://cal.com/elianatech/30min" className="bg-transparent text-white/40 px-9 py-4 text-[13px] border border-white/[0.07] hover:text-white hover:border-white/20 transition-all inline-block">
                Book a Strategy Call
              </a>
            </div>
          </ScrollReveal>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#060406] border-t border-white/[0.04] px-6 md:px-[72px] py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <p className="font-playfair italic text-[21px] text-white mb-2">Elianatech<span className="text-[#D90019] not-italic">.</span></p>
          <p className="text-[12px] text-white/[0.16] max-w-[200px] leading-relaxed">AI infrastructure and industry playbooks. We rebuild businesses as autonomous machines.</p>
        </div>
        <div className="text-left md:text-right text-[12px] text-white/[0.16] leading-relaxed">
          <span className="font-playfair italic text-[#D90019] text-[14px] block mb-1">Flow Over Force.</span>
          <p>&copy; 2026 Elianatech. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            {" \u00B7 "}
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            {" \u00B7 "}
            <Link href="mailto:elianatech@yahoo.com" className="hover:text-white transition-colors">Contact</Link>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        .font-playfair { font-family: var(--font-playfair), serif; }
        .font-inter { font-family: var(--font-inter), sans-serif; }
        .font-bebas { font-family: var(--font-bebas-neue), cursive; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.9s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
