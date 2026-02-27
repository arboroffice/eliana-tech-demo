"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"

const CATEGORIES = [
  {
    label: "Lead Generation",
    description: "Get people to find you and raise their hand. Stop losing leads before they even reach you.",
    systems: [
      { name: "AI Phone Answerer", what: "Answers calls 24/7, books appointments, takes messages, never misses a lead.", price: "$3,000+" },
      { name: "Missed Call Text-Back", what: "Texts back instantly when a call is missed so the lead does not go cold.", price: "$1,500+" },
      { name: "Lead Catcher", what: "Captures leads from forms, chat widgets, and pop-ups before they bounce.", price: "$2,500+" },
      { name: "Lead Chaser", what: "Automated follow-up via email, SMS, and calls until they book or say no.", price: "$3,000+" },
      { name: "Dead Lead Reviver", what: "Re-engages old leads who went cold and brings them back into the pipeline.", price: "$2,500+" },
      { name: "Referral Engine", what: "Automates referral requests and tracks them so word-of-mouth becomes a system.", price: "$2,000+" },
      { name: "Lead Gen Funnel", what: "Landing pages, ads integration, and conversion tracking built to convert.", price: "$5,000+" },
      { name: "Multi-Channel Lead System", what: "Leads from Google, social, email, and referrals all flowing into one pipeline.", price: "$7,500+" },
      { name: "Speed-to-Lead Responder", what: "Responds to every inquiry within seconds automatically — before your competitor does.", price: "$2,000+" },
      { name: "Content and Posting Automation", what: "Creates and schedules social content automatically so your brand stays visible.", price: "$3,500+" },
    ],
  },
  {
    label: "Sales and Conversion",
    description: "Turn leads into paying customers without chasing every deal by hand.",
    systems: [
      { name: "Sales Pipeline + CRM", what: "Tracks every lead, stage, and conversation in one place so nothing falls through.", price: "$2,500+" },
      { name: "Follow-Up Automation", what: "Multi-touch follow-up sequences across email, SMS, and calls on autopilot.", price: "$3,000+" },
      { name: "Proposal and Estimate System", what: "Generates and sends proposals and estimates in minutes instead of hours.", price: "$3,000+" },
      { name: "Contract and Signature System", what: "Sends contracts and collects e-signatures automatically with no back-and-forth.", price: "$2,000+" },
      { name: "Sales Script System", what: "AI-assisted objection handling and call frameworks so the team closes more.", price: "$2,000+" },
      { name: "Evergreen Sales Funnel", what: "Sells products or services 24/7 without live launching or manual effort.", price: "$5,000+" },
      { name: "Lead Scoring System", what: "Ranks leads by likelihood to buy so the team focuses on the best ones first.", price: "$3,000+" },
      { name: "Appointment Setter", what: "AI books discovery calls and consultations automatically so the calendar fills itself.", price: "$2,500+" },
    ],
  },
  {
    label: "Operations",
    description: "Remove the manual work running your business so your team can focus on what matters.",
    systems: [
      { name: "Workflow Automation", what: "Automates handoffs, approvals, and task routing so nothing waits on a person.", price: "$5,000+" },
      { name: "SOP and Team Playbook", what: "Documented processes so the team stops guessing and the founder stops repeating.", price: "$3,000+" },
      { name: "AI Scheduling System", what: "Handles booking, rescheduling, reminders, and no-shows without staff involvement.", price: "$2,500+" },
      { name: "Automated Invoicing", what: "Sends invoices, tracks payments, and chases late payers automatically.", price: "$3,000+" },
      { name: "Client Onboarding", what: "Welcome sequence, access setup, and first steps delivered on autopilot.", price: "$2,500+" },
      { name: "Internal AI Knowledge Base", what: "AI assistant that answers team questions about processes, policies, and history.", price: "$4,000+" },
      { name: "Capacity Planning System", what: "Shows who has bandwidth and where the bottlenecks are before they cause problems.", price: "$4,000+" },
      { name: "Meeting Notes Automation", what: "Records calls, summarizes notes, and assigns action items automatically.", price: "$2,000+" },
      { name: "Delegation System", what: "Routes tasks to the right person based on rules and availability.", price: "$3,000+" },
      { name: "Centralized Dashboard", what: "One screen showing every metric that matters so the owner has full visibility.", price: "$4,000+" },
    ],
  },
  {
    label: "Marketing and Reputation",
    description: "Build trust, stay visible, and keep customers coming back without doing it by hand.",
    systems: [
      { name: "Website and Brand Refresh", what: "New website built to convert visitors into leads, not just look good.", price: "$5,000+" },
      { name: "Review Collection System", what: "Asks happy customers for reviews automatically after every job or service.", price: "$2,000+" },
      { name: "Reputation Repair", what: "Responds to reviews, flags issues, and rebuilds online trust systematically.", price: "$3,000+" },
      { name: "Social Media Setup", what: "Profiles, content templates, and posting schedule built to run consistently.", price: "$3,500+" },
      { name: "Email Nurture System", what: "Segmented email sequences that build trust and bring leads back when ready.", price: "$3,000+" },
      { name: "SMS Marketing System", what: "Text campaigns for promotions, reminders, and re-engagement that actually get read.", price: "$2,000+" },
      { name: "SEO Foundation", what: "On-page optimization, local SEO, and Google Business Profile built to rank.", price: "$3,000+" },
      { name: "Content Repurposing Engine", what: "Turns one piece of content into 10+ posts, emails, and clips across platforms.", price: "$3,500+" },
      { name: "Testimonial Collector", what: "Gathers and formats social proof at the right moments without asking manually.", price: "$2,000+" },
    ],
  },
  {
    label: "AI and Automation",
    description: "Purpose-built AI systems that replace the most expensive manual work in your business.",
    systems: [
      { name: "AI Customer Support Agent", what: "Handles chat and email support questions automatically so the team focuses on real problems.", price: "$4,000+" },
      { name: "AI Hiring Pipeline", what: "Posts jobs, screens applicants, and schedules interviews without HR overhead.", price: "$3,500+" },
      { name: "System Integration", what: "Connects your tools so data flows between them automatically instead of being copied by hand.", price: "$3,000+" },
      { name: "Data Centralization", what: "Puts all business data in one place with one dashboard so you can see what is working.", price: "$4,000+" },
      { name: "AI Starter Kit", what: "3 quick-win automations for businesses starting from zero. Fast results, real ROI.", price: "$3,000+" },
      { name: "Custom AI Agents", what: "Purpose-built AI assistants for specific business functions unique to your operation.", price: "$5,000+" },
      { name: "Churn Prevention System", what: "Detects at-risk customers and triggers outreach automatically before they leave.", price: "$4,000+" },
      { name: "Billing and Dunning", what: "Handles failed payments, sends reminders, and recovers revenue without manual follow-up.", price: "$3,000+" },
      { name: "Abandoned Cart Recovery", what: "Recovers lost e-commerce sales via email, SMS, and retargeting sequences.", price: "$3,000+" },
      { name: "Loyalty and Referral System", what: "Rewards repeat buyers and incentivizes word of mouth so growth compounds.", price: "$3,000+" },
    ],
  },
]

export default function SystemsPage() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black overflow-x-hidden">
      <GlassmorphismNav />

      <main>
        {/* HERO */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold block mb-6">The Systems Catalog</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]">
              Every system we build.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                Every bottleneck we remove.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              We work with any business in any industry. Every system below removes a specific bottleneck. The audit tells us which ones to build first.
            </p>
            <Link
              href="/audit"
              className="inline-block px-8 py-3.5 rounded-full bg-white text-black text-base font-black hover:bg-slate-200 transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              Get Your Free Audit →
            </Link>
          </div>
        </section>

        {/* CATEGORIES */}
        {CATEGORIES.map((cat, catIdx) => (
          <section
            key={cat.label}
            className={`py-16 sm:py-24 px-4 sm:px-6 border-t ${catIdx % 2 === 0 ? "bg-white text-stone-900 border-stone-200" : "bg-black text-white border-white/5"}`}
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-10 sm:mb-16">
                <span className={`text-[10px] uppercase tracking-[0.4em] font-bold block mb-3 ${catIdx % 2 === 0 ? "text-stone-400" : "text-slate-500"}`}>
                  Category {String(catIdx + 1).padStart(2, "0")}
                </span>
                <h2 className={`text-2xl sm:text-4xl font-black uppercase tracking-tighter mb-3 ${catIdx % 2 === 0 ? "text-stone-900" : "text-white"}`}>
                  {cat.label}
                </h2>
                <p className={`text-sm sm:text-base font-medium max-w-2xl ${catIdx % 2 === 0 ? "text-stone-400" : "text-slate-500"}`}>
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.systems.map((sys) => (
                  <div
                    key={sys.name}
                    className={`p-6 rounded-[1.75rem] space-y-3 ${catIdx % 2 === 0 ? "bg-stone-50 border border-stone-200" : "bg-stone-900/40 border border-white/5"}`}
                  >
                    <h3 className={`text-sm font-black uppercase tracking-tight leading-tight ${catIdx % 2 === 0 ? "text-stone-900" : "text-white"}`}>
                      {sys.name}
                    </h3>
                    <p className={`text-xs font-medium leading-relaxed ${catIdx % 2 === 0 ? "text-stone-500" : "text-slate-500"}`}>
                      {sys.what}
                    </p>
                    <p className={`text-[10px] font-black uppercase tracking-widest pt-1 ${catIdx % 2 === 0 ? "text-stone-400" : "text-slate-600"}`}>
                      {sys.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* BOTTOM LINE */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-t border-stone-200 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">The Bottom Line</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              We work with any industry.<br />
              <span className="text-stone-400 italic">We build any system that removes a bottleneck.</span>
            </h2>
            <p className="text-base sm:text-lg text-stone-500 font-medium leading-relaxed max-w-xl mx-auto mb-10">
              The only question is which problems to solve first. The audit tells us where to start. Get one free.
            </p>
            <Link
              href="/audit"
              className="inline-block px-10 py-4 rounded-full bg-stone-900 text-white text-lg font-black hover:bg-stone-800 transition-all duration-300 hover:scale-110 shadow-xl"
            >
              Get Your Free Audit →
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        h1, h2, h3, h4 { line-height: 1; }
      `}</style>
    </div>
  )
}
