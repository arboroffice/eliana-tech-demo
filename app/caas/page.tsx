"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const AGENT_TYPES = [
  {
    icon: "01",
    title: "Business Operations Agent",
    description: "Claude manages your calendar, email triage, meeting prep, SOPs, hiring workflows, and daily task delegation across your entire team.",
    result: "Reclaim 20+ hours per week of admin drag"
  },
  {
    icon: "02",
    title: "Sales & Revenue Agent",
    description: "Claude qualifies leads, writes proposals, follows up with prospects, handles objections via email/SMS, and books calls on your calendar.",
    result: "3x pipeline velocity without hiring SDRs"
  },
  {
    icon: "03",
    title: "Content & Marketing Agent",
    description: "Claude writes your blogs, social posts, email sequences, ad copy, and SEO content in your exact brand voice, publishing on autopilot.",
    result: "60+ pieces of content per month, zero burnout"
  },
  {
    icon: "04",
    title: "Customer Success Agent",
    description: "Claude handles support tickets, onboarding sequences, check-in emails, churn prevention outreach, and upsell identification.",
    result: "90% faster response times, 40% less churn"
  },
  {
    icon: "05",
    title: "Data & Intelligence Agent",
    description: "Claude analyzes your spreadsheets, CRM data, financials, and KPIs, delivering daily executive briefs and flagging anomalies before they become problems.",
    result: "Executive-level visibility without a data team"
  },
  {
    icon: "06",
    title: "Personal Life Agent",
    description: "Claude manages your personal calendar, travel booking, family logistics, health tracking, meal planning, and household coordination.",
    result: "Run your life like a Fortune 500 runs its operations"
  },
]

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Deep Discovery Call",
    description: "We map every workflow, bottleneck, and aspiration across your business and life. We identify the 20% of tasks consuming 80% of your time."
  },
  {
    num: "02",
    title: "Claude Architecture Design",
    description: "We design your custom Claude setup: which agents you need, what tools they connect to, what permissions they have, and how they communicate with each other."
  },
  {
    num: "03",
    title: "Agent Build & Training",
    description: "We build your agents in 7 days with custom system prompts, knowledge bases, tool integrations (CRM, email, calendar, Slack, databases), and decision logic tailored to your exact processes."
  },
  {
    num: "04",
    title: "Shadow Mode & Testing",
    description: "Your Claude agents run in supervised mode for 30 days of training. Every action is reviewed, refined, and approved before graduating to autonomous execution. The system learns your company inside and out."
  },
  {
    num: "05",
    title: "Hands-On Training",
    description: "We teach you and your team exactly how to prompt, manage, and extend your Claude setup. You leave with complete ownership and confidence."
  },
  {
    num: "06",
    title: "Launch & Ongoing Optimization",
    description: "Your agents go live. We monitor performance, add new capabilities monthly, and ensure your Claude infrastructure evolves as your business grows."
  },
]

const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Inquire",
    period: "",
    description: "One Claude agent, fully configured",
    features: [
      "1 custom Claude agent",
      "Up to 3 tool integrations",
      "Weekly optimization calls",
      "Custom knowledge base setup",
      "Prompt engineering & training",
      "Slack/email support",
    ],
    cta: "Book a Call",
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Claude as your digital workforce",
    features: [
      "Unlimited Claude agents",
      "Full business process automation",
      "Weekly strategy sessions",
      "Custom API & database integrations",
      "Executive & team training",
      "24/7 priority support",
      "Dedicated account manager",
      "Monthly evolution reviews",
    ],
    cta: "Book a Call",
    highlighted: true,
  },
]

const TESTIMONIAL_STATS = [
  { stat: "847", label: "Hours saved per client annually" },
  { stat: "23x", label: "Average ROI in first 90 days" },
  { stat: "94%", label: "Client retention rate" },
  { stat: "<4min", label: "Average agent response time" },
]

const USE_CASES = [
  {
    role: "Founder / CEO",
    before: "Drowning in emails, meetings, and decisions that don't need you",
    after: "Claude triages your inbox, preps your meetings, drafts decisions, and only escalates what truly needs your brain"
  },
  {
    role: "Agency Owner",
    before: "Writing proposals at midnight, chasing clients for content, managing 12 tools",
    after: "Claude writes proposals in your voice, manages client onboarding, and keeps every project on rails"
  },
  {
    role: "Sales Leader",
    before: "Reps spending 70% of time on admin instead of selling",
    after: "Claude handles CRM hygiene, follow-up sequences, meeting prep, and pipeline reporting automatically"
  },
  {
    role: "Real Estate Investor",
    before: "Manually analyzing deals, chasing contractors, losing track of properties",
    after: "Claude underwrites deals, coordinates renovations, and sends you a daily portfolio brief"
  },
  {
    role: "Busy Professional",
    before: "Work-life chaos: missed appointments, forgotten tasks, no system",
    after: "Claude runs your calendar, meal plans, travel, and family logistics like a world-class executive assistant"
  },
]

export default function CaaSLandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const faqs = [
    { q: "What exactly is Claude?", a: "Claude is Anthropic's frontier AI assistant. It's the most capable, safest, and most steerable AI model available. We configure, train, and deploy Claude specifically for your business workflows so it operates as a true AI employee, not a chatbot." },
    { q: "How is this different from just using ChatGPT or Claude.ai?", a: "Using Claude.ai directly is like having a genius intern with no context about your business. We give Claude deep knowledge of your processes, connect it to your tools (CRM, email, calendar, databases), build custom agents for specific roles, and train it to make decisions the way you would." },
    { q: "What tools and platforms does Claude integrate with?", a: "Everything. Gmail, Outlook, Google Calendar, Slack, HubSpot, Salesforce, Notion, Airtable, Google Sheets, Stripe, QuickBooks, Zapier, Make, custom APIs, databases, and more. If it has an API, Claude can work with it." },
    { q: "Is my data safe?", a: "Absolutely. We use Anthropic's enterprise-tier API with zero data retention. Your information never trains any public model. We implement role-based access controls and can deploy in your own cloud environment for maximum security." },
    { q: "How long does setup take?", a: "Most clients are live within 7 days. We handle discovery, architecture, building, and installation in one focused sprint. Then 30 days of training where the system learns your company data. Complex enterprise deployments may take 2-3 weeks for the install." },
    { q: "Do I need to be technical?", a: "Not at all. We handle all the technical setup. Our training sessions teach you to work with Claude using plain English. If you can write an email, you can manage your Claude agents." },
    { q: "What happens if Claude makes a mistake?", a: "During shadow mode, every action is human-reviewed. Post-launch, we build guardrails, approval workflows, and escalation rules. Claude flags uncertain decisions for your review rather than guessing. The system gets smarter over time." },
    { q: "Can I cancel anytime?", a: "Yes. Month-to-month after the initial 3-month commitment. You own all your agents, prompts, and configurations. We believe in earning your business every month, not locking you in." },
  ]

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      <GlassmorphismNav />

      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-amber-900/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-900/20 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10">
        {/* HERO */}
        <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-amber-950/30 border border-amber-500/30 rounded-full mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-amber-500 font-bold">Now Accepting Applications</span>
            </div>

            <h1 className="text-6xl md:text-[8rem] font-black mb-8 leading-[0.85] tracking-tighter">
              CLAUDE<br />
              <span className="text-amber-500">AS A</span><br />
              SERVICE
            </h1>

            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed max-w-3xl mb-6">
              We set up, train, and deploy <span className="text-white font-bold">Claude as your AI workforce</span>. Custom agents that run your business, manage your life, and multiply your output.
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl mb-12">
              Not a chatbot. Not a template. A fully configured AI operations layer built around your exact workflows, tools, and decision-making patterns.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/caas/apply" className="bg-amber-500 text-black px-12 py-6 text-xs uppercase tracking-[0.3em] font-black hover:bg-white transition-colors text-center">
                Apply for CaaS
              </Link>
              <a href="#how-it-works" className="border border-zinc-800 text-zinc-400 px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:text-white hover:border-zinc-400 transition-all text-center">
                See How It Works
              </a>
            </div>
          </motion.div>
        </section>

        {/* STATS STRIP */}
        <section className="border-y border-zinc-900 bg-zinc-900/20 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {TESTIMONIAL_STATS.map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <span className="block text-3xl md:text-4xl font-black text-white mb-2">{item.stat}</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">The Agent Suite</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
              Claude Agents We Build <span className="text-amber-500">For You</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl">Each agent is custom-trained on your business, connected to your tools, and designed to operate autonomously.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden">
            {AGENT_TYPES.map((agent, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#0a0a0a] p-10 hover:bg-zinc-900/80 transition-colors group"
              >
                <span className="text-4xl font-black text-zinc-800 group-hover:text-amber-500 transition-colors block mb-6">{agent.icon}</span>
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{agent.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-6">{agent.description}</p>
                <div className="border-t border-zinc-800 pt-4">
                  <span className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">{agent.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-32 bg-zinc-900/10 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">Who This Is For</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Your Role. <span className="text-amber-500">Transformed.</span></h2>
            </div>

            <div className="space-y-px bg-zinc-800 rounded-2xl overflow-hidden">
              {USE_CASES.map((uc, i) => (
                <div key={i} className="bg-[#0a0a0a] p-8 md:p-12 grid md:grid-cols-[200px_1fr_1fr] gap-8 items-center">
                  <div>
                    <span className="text-xs font-black text-amber-500 uppercase tracking-widest">{uc.role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-600 uppercase tracking-widest block mb-2">Before CaaS</span>
                    <p className="text-sm text-zinc-500 italic">{uc.before}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-500 uppercase tracking-widest block mb-2">After CaaS</span>
                    <p className="text-sm text-white font-medium">{uc.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">The Process</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              From Zero to <span className="text-amber-500">Autonomous</span> in 7 Days
            </h2>
          </div>

          <div className="space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-8 md:gap-12 p-8 md:p-12 border-b border-zinc-900 last:border-b-0 items-start group hover:bg-zinc-900/20 transition-colors"
              >
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-zinc-900 border border-zinc-800 group-hover:border-amber-500/50 transition-colors flex items-center justify-center rounded-xl">
                  <span className="text-amber-500 font-black font-mono text-xl">{step.num}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section className="py-32 bg-zinc-900/10 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20 text-center">
              <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">Investment</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto">Every plan includes custom agent building, tool integration, training, and ongoing optimization.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-zinc-800 rounded-2xl overflow-hidden">
              {PRICING_TIERS.map((tier, i) => (
                <div key={i} className={`p-12 flex flex-col ${tier.highlighted ? 'bg-amber-500 text-black' : 'bg-[#0a0a0a]'}`}>
                  <span className={`text-[10px] uppercase tracking-widest font-black mb-4 ${tier.highlighted ? 'text-black/60' : 'text-zinc-500'}`}>{tier.name}</span>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-black">{tier.price}</span>
                    <span className={`text-sm ${tier.highlighted ? 'text-black/60' : 'text-zinc-500'}`}>{tier.period}</span>
                  </div>
                  <p className={`text-sm mb-8 ${tier.highlighted ? 'text-black/70' : 'text-zinc-500'}`}>{tier.description}</p>
                  <ul className="space-y-3 mb-10 flex-grow">
                    {tier.features.map((f, j) => (
                      <li key={j} className={`text-sm flex items-start gap-3 ${tier.highlighted ? 'text-black/80' : 'text-zinc-400'}`}>
                        <span className={`mt-1 ${tier.highlighted ? 'text-black' : 'text-amber-500'}`}>+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/caas/apply"
                    className={`block text-center py-4 text-xs uppercase tracking-[0.2em] font-black transition-all ${
                      tier.highlighted
                        ? 'bg-black text-white hover:bg-zinc-900'
                        : 'bg-zinc-900 text-white hover:bg-amber-500 hover:text-black border border-zinc-800'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT CLAUDE CAN ACCESS */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">Integrations</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Claude Plugs Into Your Entire Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Gmail", "Outlook", "Google Calendar", "Slack", "HubSpot", "Salesforce",
              "Notion", "Airtable", "Google Sheets", "Stripe", "QuickBooks", "Zapier",
              "Make", "GitHub", "Linear", "Jira", "Trello", "Asana",
              "Twilio", "SendGrid", "Mailchimp", "WordPress", "Shopify", "GoHighLevel",
            ].map((tool, i) => (
              <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-4 text-center text-xs text-zinc-400 font-mono uppercase tracking-wider hover:border-amber-500/50 hover:text-white transition-colors">
                {tool}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-32 bg-zinc-900/10 border-y border-zinc-900">
          <div className="max-w-4xl mx-auto px-6">
            <div className="mb-16 text-center">
              <span className="text-[10px] text-amber-500 uppercase tracking-[0.5em] font-black block mb-6">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Common Questions</h2>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-zinc-800 last:border-b-0">
                  <button
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center py-8 text-left group"
                  >
                    <span className="text-base md:text-lg font-bold text-white group-hover:text-amber-500 transition-colors pr-8">{faq.q}</span>
                    <span className="text-xl text-zinc-500 flex-shrink-0">{activeFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-96 pb-8' : 'max-h-0'}`}>
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-40 px-6">
          <div className="max-w-4xl mx-auto text-center border border-amber-500/30 bg-amber-950/10 p-16 md:p-32 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
              Stop Working<br />
              <span className="text-amber-500">Like It's 2019</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              The most productive people in the world already have Claude running their operations. The question is whether you'll be next.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/caas/apply" className="bg-amber-500 text-black px-14 py-6 text-sm uppercase tracking-[0.3em] font-black hover:bg-white transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx global>{`
        .font-mono {
          font-family: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
        }
      `}</style>
    </div>
  )
}
