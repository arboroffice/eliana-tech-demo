"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import Image from "next/image"
import { TheBriefSection } from "@/components/the-brief-section"

export default function HomeClient() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const allIndustries = [
    { name: "Medical & Dental", slug: "medical-dental", tag: "Patient Intake & Billing", desc: "Automate scheduling, insurance verification, follow-ups, and review collection" },
    { name: "Home Services (High Ticket)", slug: "home-services-high-ticket", tag: "Lead-to-Close Pipeline", desc: "Instant lead response, estimate automation, job scheduling, and invoice triggers" },
    { name: "Home Services (Recurring)", slug: "home-services-recurring", tag: "Retention & Rebooking", desc: "Automated rebooking, seasonal campaigns, review requests, and route optimization" },
    { name: "Legal Services", slug: "legal", tag: "Client Intake & Case Mgmt", desc: "Automated intake forms, retainer billing, case status updates, and referral tracking" },
    { name: "Beauty & Personal Care", slug: "beauty-personal-care", tag: "Booking & Retention", desc: "No-show reduction, rebooking sequences, loyalty programs, and review generation" },
    { name: "Real Estate & Property", slug: "real-estate-property", tag: "Lead Nurture & Transactions", desc: "Automated lead follow-up, listing alerts, transaction coordination, and past-client outreach" },
    { name: "Health & Wellness", slug: "health-wellness", tag: "Appointments & Care", desc: "Booking automation, care plan follow-ups, membership retention, and HIPAA-aware comms" },
    { name: "Pet Services", slug: "pet-services", tag: "Scheduling & Re-engagement", desc: "Appointment reminders, vaccination tracking, rebooking triggers, and review requests" },
    { name: "Automotive", slug: "automotive", tag: "Service & Sales Pipeline", desc: "Lead response, service reminders, estimate follow-ups, and reputation management" },
    { name: "Professional & Financial", slug: "professional-financial", tag: "Client Lifecycle", desc: "Proposal automation, retainer management, compliance workflows, and referral systems" },
    { name: "Events & Hospitality", slug: "events-hospitality", tag: "Bookings & Guest Experience", desc: "Reservation management, guest comms, post-event follow-ups, and review generation" },
    { name: "Education & Childcare", slug: "education-childcare", tag: "Enrollment & Parent Comms", desc: "Enrollment funnels, parent updates, waitlist management, and re-enrollment campaigns" },
    { name: "SaaS Founders", slug: "saas", tag: "Trial-to-Paid & Retention", desc: "Onboarding sequences, churn prevention, usage-based triggers, and expansion revenue" },
    { name: "Course Creators", slug: "course-creators", tag: "Launch & Engagement", desc: "Launch sequences, student onboarding, completion nudges, and upsell automation" },
    { name: "Coaches & Consultants", slug: "coaching", tag: "Pipeline & Delivery", desc: "Discovery call booking, proposal delivery, client onboarding, and renewal triggers" },
    { name: "E-commerce & Retail", slug: "ecommerce", tag: "Cart Recovery & LTV", desc: "Abandoned cart flows, post-purchase sequences, reorder triggers, and review requests" },
    { name: "Agencies", slug: "agencies", tag: "Sales & Client Ops", desc: "Lead pipeline, proposal automation, project status updates, and client reporting" },
    { name: "Misc. Local Services", slug: "misc-local-services", tag: "Leads & Operations", desc: "Lead follow-up, scheduling, invoicing, review generation, and client retention" },
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
            { label: "The Founders", href: "#story" },
            { label: "The Shift", href: "#transform" },
            { label: "The Framework", href: "#phases" },
            { label: "Playbooks", href: "#playbooks" },
            { label: "OS Audit", href: "/audit" },
          ].map(l => (
            <a key={l.href} href={l.href} className="text-[12px] text-white/40 tracking-wide hover:text-white transition-colors">{l.label}</a>
          ))}
        </div>
        <Link href="/audit" className="bg-[#D90019] text-white px-4 md:px-6 py-2 md:py-2.5 text-[11px] md:text-[12px] font-semibold tracking-wide hover:brightness-110 transition-all">Take Your OS Audit</Link>
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
            The Future of Business
          </p>

          <h1 className="font-playfair text-[clamp(34px,6vw,84px)] leading-[0.92] text-[#F2EEF5] max-w-[900px] tracking-tight relative z-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Build <em className="text-[#D90019]">AI-Powered</em><br />Businesses & Founders<span className="text-[#D90019]">.</span>
          </h1>

          <div className="grid md:grid-cols-2 gap-10 md:gap-[120px] mt-10 md:mt-16 relative z-10 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div>
              <div className="text-[15px] md:text-[18px] text-white/40 leading-relaxed max-w-[540px]">
                <ul className="space-y-4 mb-8">
                  {[
                    "Turn your business into an AI-powered machine",
                    "Become a founder using AI from your knowledge or interests",
                    "Go AI-native — for yourself, your team, and your company"
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#D90019] mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[#D90019]" />
                      <span className="text-white font-medium">{text}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-t border-white/10 pt-6 italic font-playfair">
                  Your business runs automatically. You focus on what humans do best. Your ideas turn into companies that scale themselves.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <a href="https://brief-sage-omega.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#D90019] text-white px-7 md:px-9 py-3.5 md:py-4 text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-0.5 transition-all inline-block shadow-[0_12px_48px_rgba(217,0,25,0.2)]">
                  Get Your Daily Brief →
                </a>
                <a href="https://www.skool.com/founders-of-the-future-3908/about" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white/40 px-7 md:px-9 py-3.5 md:py-4 text-[13px] border border-white/[0.07] hover:text-white hover:border-white/20 transition-all inline-block">
                  Join Founders of the Future →
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
        <section className="bg-white border-t border-b border-black/[0.04]" id="story">
          <div className="px-6 md:px-[72px] py-20 md:py-40 relative overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.04)_0%,transparent_70%)] -bottom-[100px] -left-[100px] pointer-events-none" />
            
            <ScrollReveal>
              <div className="space-y-16">
                <div className="max-w-[800px]">
                  <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                    <span className="w-6 h-px bg-[#D90019]" />Why This Exists
                  </p>
                  <h2 className="font-playfair text-[clamp(32px,4.5vw,62px)] leading-[1.02] text-[#060406] mb-8">
                    We built this because<br />we needed it and<br /><em className="text-[#D90019]">it didn&apos;t exist.</em>
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    <p className="text-[16px] text-[#060406]/60 leading-relaxed">
                      Mia grew up running operations for her dad&apos;s company. <strong className="text-[#060406] font-medium">Answering phones, chasing follow-ups, copying data between tools, holding everything in her head.</strong> No tool actually went and did the work. They just reminded her to. Tyler scaled and sold multiple brands through organic media — and watched every one of them hit the same wall: <strong className="text-[#060406] font-medium">the back-end couldn&apos;t keep up with the front-end.</strong>
                    </p>
                    <p className="text-[16px] text-[#060406]/60 leading-relaxed md:border-l md:border-black/[0.07] md:pl-8">
                      We are business owners who know how to scale and grow because we&apos;ve done it. We couldn&apos;t find a solution that actually <strong className="text-[#060406] font-medium">executed</strong> — not assisted, not reminded, not suggested. Everything required a human to be the glue.<br /><br />
                      So we built the glue. Then we replaced it with infrastructure. Deepening our foundation, we have a world-class team of <strong className="text-[#060406] font-medium">AI professionals, developers, and consultants</strong> who implement the exact strategies and processes we architect. We don&apos;t just give you a plan; we deploy the team and technology to run it.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 pt-8 border-t border-black/[0.04] max-w-full overflow-hidden">
                  {/* Mia */}
                  <div className="group/founder shrink-0 w-full md:w-auto">
                    <div className="relative w-40 h-40 md:w-52 md:h-52 mb-6 mx-auto md:mx-0">
                      <div className="absolute inset-0 rounded-full border-2 border-[#D90019]/10 p-2 group-hover/founder:border-[#D90019]/30 transition-all duration-700 overflow-hidden">
                        <Image
                          src="/images/founders/mia.jpg"
                          alt="Mia"
                          fill
                          priority
                          className="rounded-full object-cover object-[50%_15%] grayscale group-hover/founder:grayscale-0 transition-all duration-1000 scale-[1.15] group-hover/founder:scale-100"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-playfair italic text-[28px] md:text-[36px] text-[#060406] mb-1 leading-none">Mia</p>
                      <p className="text-[11px] tracking-[3px] uppercase text-[#D90019] font-bold leading-tight">Co-Founder<br />Infrastructure & Ops</p>
                    </div>
                  </div>

                  {/* Partnerships Column */}
                  <div className="flex flex-col items-center gap-10 py-12 md:py-8 border-y md:border-y-0 md:border-x border-black/[0.04] md:px-12 self-stretch justify-center shrink-0 w-full md:w-auto">
                    <p className="text-[9px] tracking-[3px] uppercase text-[#060406]/30 font-bold whitespace-nowrap">Official Partners</p>
                    <div className="flex flex-row md:flex-col items-center gap-10 md:gap-12 opacity-60 hover:opacity-100 transition-all duration-700">
                      <img src="/images/claude-logo.png" alt="Claude Partner" className="h-8 md:h-12 w-auto object-contain transition-all" />
                      <img src="/images/openai-logo.png" alt="OpenAI Partner" className="h-9 md:h-16 w-auto object-contain transition-all" />
                      <img src="/images/meta-logo-new.png" alt="Meta Partner" className="h-8 md:h-12 w-auto object-contain transition-all" />
                    </div>
                  </div>

                  {/* Tyler */}
                  <div className="group/founder shrink-0 w-full md:w-auto">
                    <div className="relative w-48 h-48 md:w-60 md:h-60 mb-6 mx-auto md:mx-0">
                      <div className="absolute inset-0 rounded-full border-2 border-[#D90019]/10 p-2 group-hover/founder:border-[#D90019]/30 transition-all duration-700 overflow-hidden">
                        <Image
                          src="/images/founders/tyler.jpg"
                          alt="Tyler"
                          fill
                          priority
                          className="rounded-full object-cover object-[50%_5%] grayscale group-hover/founder:grayscale-0 transition-all duration-1000 scale-100 group-hover/founder:scale-[1.05]"
                        />
                      </div>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-playfair italic text-[28px] md:text-[36px] text-[#060406] mb-1 leading-none">Tyler</p>
                      <p className="text-[12px] tracking-[3px] uppercase text-[#D90019] font-bold leading-tight">Co-Founder<br />Brand & Media</p>
                    </div>
                  </div>
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
                Take the OS Audit. We&apos;ll map your gaps and tell you<br className="hidden md:block" />
                <em>exactly</em> what the system looks like for your business.
              </p>
            </div>
            <Link href="/audit" className="bg-white text-[#D90019] px-9 py-4 text-[13px] font-bold tracking-wide hover:bg-white/90 transition-all shrink-0 inline-block whitespace-nowrap">
              Start Your OS Audit &#8594;
            </Link>
          </section>
        </ScrollReveal>

        {/* ─── TRANSFORMATION ─── */}
        <section className="bg-white px-6 md:px-[72px] py-20 md:py-40 relative overflow-hidden" id="transform">
          <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.04)_0%,transparent_70%)] -left-[200px] -bottom-[200px] pointer-events-none" />
          <ScrollReveal>
            <div className="mb-12 md:mb-24 max-w-[800px]">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                <span className="w-6 h-px bg-[#D90019]" />The Transformation
              </p>
              <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-[#060406]">
                What your business looks like<br />before and <em className="text-[#D90019]">after.</em>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_80px_1fr] gap-4 md:gap-0">
              {/* Before */}
              <div className="bg-[#F8F7F9] border border-black/[0.04] p-6 md:p-14">
                <span className="text-[10px] tracking-[3px] uppercase text-black/20 font-semibold block mb-5">Before Elianatech</span>
                <p className="font-playfair italic text-[28px] text-[#060406] leading-[1.1] mb-7">A business that runs on<br />human effort and memory.</p>
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
                    <li key={i} className="text-[14px] text-[#060406]/60 leading-relaxed flex gap-3 items-start">
                      <span className="text-[13px] mt-0.5 shrink-0 text-[#060406]/20">—</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Middle divider */}
              <div className="hidden md:flex items-center justify-center flex-col gap-3">
                <span className="font-playfair italic text-[20px] text-[#060406]/10 tracking-[4px]" style={{ writingMode: "vertical-rl" }}>AFTER</span>
              </div>
              {/* After */}
              <div className="bg-gradient-to-br from-[#D90019]/[0.05] to-[#F8F7F9] border border-[#D90019]/15 p-6 md:p-14">
                <span className="text-[10px] tracking-[3px] uppercase text-[#D90019] font-semibold block mb-5">After Elianatech</span>
                <p className="font-playfair italic text-[28px] text-[#060406] leading-[1.1] mb-7">A machine that operates<br />on infrastructure, not effort.</p>
                <ul className="flex flex-col gap-3.5">
                  {[
                    "Mornings that start with results, not a to-do list you're already behind on",
                    "Your team doing actual work — not administrative survival every day",
                    "A business that keeps running when you step away — not one that pauses",
                    "Every tool connected. Data moves on its own. Nothing copied by hand",
                    "Your attention back — for the decisions that actually need you",
                    "The system scales with you. More volume, no more chaos",
                    "24/7/365 — nights, weekends, holidays. It never stops",
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#060406]/65 leading-relaxed flex gap-3 items-start">
                      <span className="text-[#D90019] text-[13px] mt-0.5 shrink-0">&#8594;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── BRIEF CTA BANNER ─── */}
        <ScrollReveal>
          <section className="bg-[#D90019] px-6 md:px-[72px] py-4 md:py-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <p className="text-[12px] md:text-[14px] font-bold text-white tracking-wide uppercase">
                THE DAILY OS: GET <span className="underline decoration-white/40 underline-offset-4 decoration-2">THE BRIEF</span>. 
              </p>
            </div>
            <p className="text-[11px] md:text-[13px] text-white/70 italic font-playfair tracking-wide border-x border-white/20 px-6 hidden lg:block">
              Daily AI intelligence briefing. 7:00 AM. 
            </p>
            <a href="https://brief-sage-omega.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white text-[#D90019] px-6 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-white/90 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.15)]">
              Secure Your Briefing &#8594;
            </a>
          </section>
        </ScrollReveal>

        {/* ─── ENGAGEMENT MODEL ─── */}
        <section className="bg-white border-t border-black/[0.04] px-6 md:px-[72px] py-20 md:py-40 overflow-hidden relative" id="phases">
          <div className="absolute w-[800px] h-[800px] bg-[radial-gradient(ellipse,rgba(217,0,25,0.03)_0%,transparent_70%)] -right-[200px] -bottom-[200px] pointer-events-none" />
          <ScrollReveal>
            <div className="mb-10 md:mb-20 max-w-[760px]">
              <p className="flex items-center gap-3 text-[10px] tracking-[4px] uppercase text-[#D90019] font-semibold mb-5">
                <span className="w-6 h-px bg-[#D90019]" />How We Work Together
              </p>
              <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-[#060406] mb-5">
                An evolution — not a<br />one-time <em className="text-[#D90019]">transaction.</em>
              </h2>
              <p className="text-[17px] text-[#060406]/60 leading-relaxed mt-5 max-w-[600px]">
                Most businesses aren&apos;t ready to hand the keys to AI on day one. They need to see it work first. So we start small, prove it, then go as deep as you want.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {[
              {
                num: "01", tier: "Phase One", name: <>See the <em className="text-[#D90019]">Shift.</em></>,
                price: "Fastest way to feel the impact.",
                desc: "Start with an AI assistant inside your business — inbox, deals, calendar, tasks. We clear the noise so you can see the potential.",
                why: "What happens:",
                whySub: "You get 10-15 hours back instantly. Your voice is cloned. Your admin is handled. You see the shift without touching your core systems.",
                items: ["AI inbox management & replies", "Dynamic calendar coordination", "Deal triage & follow-up", "Daily executive briefings", "Voice-cloned task execution"],
                featured: false,
              },
              {
                num: "02", tier: "The Build", name: <>Build the <em className="text-[#D90019]">System.</em></>,
                price: "Infrastructure that runs without you.",
                desc: "Full AI infrastructure, industry playbooks, pipelines, and trained agents. We gut the manual plumbing and replace it with code.",
                why: "What happens:",
                whySub: "Every repeating task is automated. Lead flow, client onboarding, and billing run on infrastructure, not effort.",
                items: ["Industry playbook installed", "AI agents across sales & ops", "Automated pipelines & triggers", "Tool-to-tool neural connections", "Team training for AI-native ops"],
                featured: true,
              },
              {
                num: "03", tier: "Scale Up", name: <>Go <em className="text-[#D90019]">Deep.</em></>,
                price: "AI as your operating wing.",
                desc: "Embed AI as your wing, automate every department, scale endlessly. We become your dedicated AI R&D and operations department.",
                why: "What happens:",
                whySub: "Your business becomes a machine. Infinite scale with zero increase in operational complexity or headcount.",
                items: ["Embedded AI department", "Monthly infrastructure shipping", "Department-wide automation", "Strategy-to-execution loop", "Revenue-share expansion models"],
                featured: false,
              },
              {
                num: "04", tier: "FOTF", name: <>Become a <em className="text-[#D90019]">Founder.</em></>,
                price: "The Founders of the Future path.",
                desc: "Take your knowledge or interests and build an AI-native company with our community & guidance. Scale ideas into assets.",
                why: "What happens:",
                whySub: "You stop trading time for money. You build systems that create value while you focus on vision and decisions.",
                items: ["AI-native company blueprint", "Founders of the Future community", "Step-by-step product/market fit", "Automated asset creation", "Infinite scalability guidance"],
                featured: false,
              },
            ].map((ev, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid grid-cols-[48px_1fr] md:grid-cols-[80px_1fr] group">
                  <div className="flex flex-col items-center pt-1">
                    <div className={`w-11 h-11 border flex items-center justify-center font-playfair italic text-[17px] bg-white shrink-0 relative z-10 transition-all ${ev.featured ? "border-[#D90019] text-[#D90019] bg-[#D90019]/[0.03]" : "border-black/[0.07] text-black/20 group-hover:border-[#D90019] group-hover:text-[#D90019]"}`}>
                      {ev.num}
                    </div>
                    {i < 3 && <div className="flex-1 w-px bg-black/[0.04] mt-2" />}
                  </div>
                  <div className={`border p-8 md:p-12 ml-3 md:ml-6 mb-0 transition-colors ${ev.featured ? "bg-gradient-to-br from-[#D90019]/[0.05] to-orange-500/[0.02] border-[#D90019]/15" : "border-black/[0.05] bg-[#F8F7F9]/50 hover:border-[#D90019]/20"}`}>
                    <span className={`text-[10px] tracking-[3px] uppercase font-semibold block mb-3.5 ${ev.featured ? "text-[#D90019]" : "text-black/30"}`}>{ev.tier}</span>
                    <h3 className="font-playfair text-[clamp(28px,3vw,44px)] leading-[1.03] text-[#060406] mb-2">{ev.name}</h3>
                    <p className="text-[14px] text-[#060406]/60 mb-5 leading-snug"><strong className="text-[#060406] font-semibold">{ev.price}</strong></p>
                    <p className="text-[15px] text-[#060406]/60 leading-relaxed mb-4 max-w-[680px]">{ev.desc}</p>
                    <p className="text-[13px] text-[#D90019]/75 font-semibold mb-5 leading-relaxed max-w-[680px]">
                      {ev.why} <span className="text-[#060406]/50 font-light">{ev.whySub}</span>
                    </p>
                    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                      {ev.items.map((item, j) => (
                        <li key={j} className={`text-[13px] flex gap-2 items-start leading-snug ${ev.featured ? "text-[#060406]/60" : "text-[#060406]/35"}`}>
                          <span className={`shrink-0 ${ev.featured ? "text-[#D90019]" : "text-[#D90019]/40"}`}>—</span>{item}
                        </li>
                      ))}
                    </ul>
                    {i === 3 ? (
                       <a href="https://www.skool.com/founders-of-the-future-3908/about" target="_blank" rel="noopener noreferrer" className="text-[12px] font-semibold text-[#D90019] border-b border-[#D90019]/30 pb-0.5 hover:border-[#D90019] transition-all">
                        Join Founders of the Future &#8594;
                      </a>
                    ) : (
                      <a href="#audit" className="text-[12px] font-semibold text-[#D90019] border-b border-[#D90019]/30 pb-0.5 hover:border-[#D90019] transition-all">
                        {i === 0 ? "Start here" : i === 1 ? "See what we'd build for you" : "Apply for the AI wing"} &#8594;
                      </a>
                    )}
                  </div>
                </div>
                {i < 3 && (
                  <div className="flex items-center gap-6 pl-[48px] md:pl-[80px] my-0">
                    <div className="w-0.5 h-14 bg-gradient-to-b from-black/[0.04] to-[#D90019] ml-[21px] md:ml-5 shrink-0" />
                    <span className="text-[12px] text-[#D90019] italic font-playfair tracking-wide opacity-80">
                      {i === 0 ? "You see it work. Now we build." : i === 1 ? "Business is running. Now we scale it." : "System is thriving. Now we build new assets."}
                    </span>
                  </div>
                )}
              </ScrollReveal>
            ))}
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4 mt-12 justify-center">
                <a href="https://brief-sage-omega.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-[#D90019] text-white px-9 py-4 text-[13px] font-bold tracking-wide hover:brightness-110 transition-all shadow-[0_12px_48px_rgba(217,0,25,0.2)]">
                  Get Your Daily Brief →
                </a>
                <a href="https://www.skool.com/founders-of-the-future-3908/about" target="_blank" rel="noopener noreferrer" className="bg-white text-[#D90019] px-9 py-4 text-[13px] font-bold border border-[#D90019]/10 hover:bg-gray-50 transition-all">
                  Join Founders of the Future →
                </a>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="bg-[#D90019]/[0.03] border border-[#D90019]/10 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mt-14">
              <span className="text-[28px] shrink-0 text-[#D90019]/40">&#10022;</span>
              <p className="text-[15px] text-[#060406]/55 leading-relaxed">
                You don&apos;t have to commit to the whole thing upfront. <strong className="text-[#060406] font-medium">Start with the assistant. See the shift. Then decide how far you want to take it.</strong> Every client who&apos;s gone deep started exactly where you are — not sure if AI could actually run their business. The data always changes that.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── WHY IT WORKS ─── */}
        <section className="bg-[#D90019] px-6 md:px-[72px] py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
          <ScrollReveal>
            <div className="max-w-[900px] mx-auto text-center">
              <p className="text-[10px] tracking-[4px] uppercase text-white/60 font-bold mb-8">Why It Works</p>
              <h2 className="font-playfair text-[clamp(36px,5vw,72px)] leading-[1.05] text-white mb-16">
                Infrastructure surgery to turn your<br />knowledge into a <em className="italic">scalable machine.</em>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { t: "Human Decision-Making", d: "AI runs the work, humans run the decisions. We build the systems that filter for your attention." },
                  { t: "Proven Playbooks", d: "No guessing. Deep infrastructure built for dozens of specific industries and client journeys." },
                  { t: "Quantified Wins", d: "Metrics-backed transformation: 3× output, 40+ hours saved weekly, zero complexity gain." },
                  { t: "Founder Creation", d: "Step-by-step guidance to turn your knowledge into a scalable AI-powered business asset." }
                ].map((item, i) => (
                  <div key={i} className="text-left bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all">
                    <div className="w-8 h-px bg-white/30 mb-6" />
                    <h3 className="text-white font-medium text-[17px] mb-3 leading-tight">{item.t}</h3>
                    <p className="text-white/60 text-[13px] leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
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
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] border border-white/[0.04]">
            {allIndustries.map((cat, i) => (
              <StaggerItem key={i}>
                <Link href={`/industry-categories/${cat.slug}`} className="group bg-[#0A070B] p-6 md:p-7 flex flex-col hover:bg-[#0F0B10] border-l-2 border-transparent hover:border-[#D90019] transition-all h-full relative overflow-hidden">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-[10px] tracking-[2px] uppercase font-semibold text-[#D90019]/50">{cat.tag}</span>
                    <ArrowRight size={14} className="text-[#D90019] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                  </div>
                  <h3 className="text-[16px] md:text-[17px] text-white font-medium tracking-wide leading-snug mb-2 group-hover:text-white transition-colors">{cat.name}</h3>
                  <p className="text-[12px] text-white/30 leading-relaxed group-hover:text-white/45 transition-colors">{cat.desc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <p className="text-[13px] text-white/[0.16] mt-6 tracking-wide">
            Every playbook comes with pre-trained agents, automated pipelines, and industry-specific infrastructure. <Link href="/audit" className="text-[#D90019] hover:underline">Start the OS Audit — we&apos;ll match you. &#8594;</Link>
          </p>
        </section>


        {/* ─── STANDALONE AUDIT CTA ─── */}
        <section className="bg-white py-20 md:py-32 px-6 md:px-[72px] border-t border-black/[0.04] text-center">
          <ScrollReveal>
            <p className="text-[10px] tracking-[4px] uppercase text-[#D90019] font-bold mb-6">Operations Blueprint</p>
            <h2 className="font-playfair text-[clamp(40px,5vw,72px)] leading-[1] text-[#060406] mb-8">
              Map your gaps.<br />Match your <em className="text-[#D90019]">playbook.</em>
            </h2>
            <p className="text-[17px] text-[#060406]/60 max-w-2xl mx-auto mb-12 leading-relaxed">
              Before we build anything, we need to know what we&apos;re working with. Spend 5 minutes mapping your operation. We&apos;ll tell you exactly what agents we&apos;d deploy and what impact they&apos;ll have — before we ever talk about cost.
            </p>
            <Link href="/audit" className="bg-[#D90019] text-white px-12 py-5 text-[15px] font-bold tracking-widest uppercase hover:brightness-110 hover:-translate-y-1 transition-all inline-block shadow-[0_20px_80px_rgba(217,0,25,0.25)]">
              Start Your OS Audit &#8594;
            </Link>
          </ScrollReveal>
        </section>
        {/* ─── THE BRIEF ─── */}
        <TheBriefSection />

        {/* ─── FINAL CTA ─── */}
        <section className="bg-[#D90019] px-6 md:px-[72px] py-20 md:py-40 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute font-playfair italic text-[22vw] text-white/[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none whitespace-nowrap leading-none tracking-tight">
            rebuild
          </div>
          <ScrollReveal>
            <p className="flex items-center justify-center gap-3 text-[10px] tracking-[4px] uppercase text-white/60 font-semibold mb-7 relative z-10">
              <span className="w-10 h-px bg-white/20" />The Decision<span className="w-10 h-px bg-white/20" />
            </p>
            <h2 className="font-playfair text-[clamp(52px,7vw,108px)] leading-[0.93] text-white mb-7 relative z-10 tracking-tight">
              Your business.<br />Rebuilt as a<br /><em>machine.</em>
            </h2>
            <p className="text-[17px] text-white/70 max-w-[480px] mx-auto mb-12 leading-relaxed relative z-10">
              This is infrastructure surgery, not a software subscription. We go in, we rebuild, and we hand you back a business that runs without you holding it together.
            </p>
            <div className="flex flex-wrap gap-3 justify-center relative z-10">
              <Link href="/audit" className="bg-white text-[#D90019] px-9 py-4 text-[13px] font-semibold tracking-wide hover:bg-white/90 hover:-translate-y-0.5 transition-all inline-block shadow-[0_12px_48px_rgba(0,0,0,0.2)]">
                Start Your OS Audit
              </Link>
              <a href="https://cal.com/elianatech/30min" className="bg-transparent text-white px-9 py-4 text-[13px] border border-white/30 hover:bg-white/10 transition-all inline-block">
                Book a Strategy Call
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="bg-[#060406] border-t border-white/[0.04] px-6 md:px-[72px] py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="font-playfair italic text-[21px] text-white mb-2">Elianatech<span className="text-[#D90019] not-italic">.</span></p>
            <p className="text-[12px] text-white/[0.16] max-w-[200px] leading-relaxed">We build AI-native businesses.</p>
          </div>
          <div className="text-left md:text-right text-[12px] text-white/[0.16] leading-relaxed">
            <span className="font-playfair italic text-[#D90019] text-[14px] block mb-1">Flow Over Force.</span>
            <p>&copy; 2026 Elianatech. All rights reserved.</p>
            <p className="mt-1">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              {" \u00B7 "}
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              {" \u00B7 "}
              <Link href="mailto:support@elianatech.com" className="hover:text-white transition-colors">Support</Link>
              {" \u00B7 "}
              <Link href="mailto:sales@elianatech.com" className="hover:text-white transition-colors">Sales</Link>
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
      </main>
    </div>
  )
}
