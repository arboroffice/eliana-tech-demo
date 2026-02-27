"use client"

import { useState } from "react"
import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/scroll-reveal"
import Aurora from "../components/Aurora"
import { motion } from "framer-motion"
import Link from "next/link"

const MARQUEE_ITEMS = [
  "Your AI Department",
  "Remove Bottlenecks",
  "Free The Founder",
  "Infrastructure Not Software",
  "AI Native Company",
  "Humans Do Human Work",
]

const PROBLEMS = [
  {
    icon: "📞",
    title: "Missed calls. Lost revenue.",
    body: "Every call that hits voicemail is a customer going to your competitor. That is money walking out the door while you sleep.",
  },
  {
    icon: "🔄",
    title: "Humans doing non-human jobs.",
    body: "Your team copies data, sends the same follow-ups, answers the same questions. That is robot work at human prices. $10,000+ a year per task.",
  },
  {
    icon: "🚧",
    title: "The founder is the bottleneck.",
    body: "Nothing moves without you. Your team waits. Growth stalls. You work 60 hours a week and still feel behind.",
  },
  {
    icon: "🤷",
    title: "No idea where to start with AI.",
    body: "You have heard about ChatGPT, automations, AI agents. Cool. But how do you actually put that inside a real business? Nobody shows you.",
  },
  {
    icon: "💸",
    title: "Leads falling through cracks.",
    body: "No follow-up system. No speed. Leads go cold while you are busy in the weeds. Your competitor answers first and wins.",
  },
  {
    icon: "🧩",
    title: "Tools that do not talk to each other.",
    body: "Your data lives in 5 different places. Nothing connects. You have no single view of what is working and what is not.",
  },
]

const STEPS = [
  { n: "1", title: "Audit your business", body: "We map every process and find where time and money are leaking." },
  { n: "2", title: "Separate human jobs from non-human jobs", body: "This task needs a person. This one does not. Simple as that." },
  { n: "3", title: "Build the AI infrastructure", body: "Custom built for your business. Not off-the-shelf software. Real operating systems." },
  { n: "4", title: "Test until it works perfectly", body: "We do not hand off broken things. It runs. It is proven. Then it is yours." },
  { n: "5", title: "Hand off or stay on as your AI department", body: "You own the operating system. We can manage it forever or train your team to run it." },
]

const OS_LAYERS = [
  {
    n: "01",
    name: "Attract",
    what: "Gets people to find you and raise their hand.",
    systems: ["Website", "SEO", "Social Media", "Content Engine", "Lead Gen Funnel", "Referral Engine"],
  },
  {
    n: "02",
    name: "Capture",
    what: "Grabs the lead before they disappear.",
    systems: ["Lead Catcher", "AI Phone Answerer", "Speed-to-Lead", "Missed Call Text-Back"],
  },
  {
    n: "03",
    name: "Convert",
    what: "Turns the lead into a paying customer.",
    systems: ["Lead Chaser", "Sales Pipeline", "Proposals", "Contracts", "Evergreen Funnel", "Appointment Setter"],
  },
  {
    n: "04",
    name: "Deliver",
    what: "Gives the customer a great experience.",
    systems: ["Client Onboarding", "Scheduling", "Workflow Automation", "Invoicing", "SOPs", "Delegation"],
  },
  {
    n: "05",
    name: "Retain",
    what: "Keeps them coming back and referring others.",
    systems: ["Review System", "Client Nurture", "Churn Prevention", "Loyalty System", "Reactivation", "Testimonial Collector"],
  },
  {
    n: "06",
    name: "Intelligence",
    what: "Gives the owner visibility and control.",
    systems: ["Dashboard", "Data Centralization", "AI Knowledge Base", "Capacity Planning", "Reporting"],
  },
]

const BELIEFS = [
  {
    quote: "You do not need more people. You need fewer bottlenecks.",
    body: "Most founders think scaling means hiring. It does not. It means removing the friction so the people you already have can do work that actually moves the needle.",
  },
  {
    quote: "Humans should do human work. Machines should do the rest.",
    body: "Creative thinking, relationships, leadership. That is human work. Everything else can be matched to AI and taken off your team's plate so they can focus on what matters.",
  },
  {
    quote: "We do not sell software. We build infrastructure.",
    body: "Software is a tool you log into. Infrastructure is the operating system your business runs on. We build the thing that lets you scale without more people or more chaos.",
  },
]



export default function HomePage() {
  const marqueeItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-white selection:text-black overflow-x-hidden">
      <GlassmorphismNav />

      <main className="relative">

        {/* HERO */}
        <section className="min-h-[85vh] sm:min-h-screen flex items-center justify-center px-4 sm:px-6 relative py-20 sm:py-0 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Aurora colorStops={["#1e293b", "#475569", "#1e293b"]} amplitude={0.8} blend={0.7} speed={0.4} />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,black_70%)]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-slate-500 font-bold block mb-6"
            >
              Your Chief AI Officer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 uppercase leading-[0.9]"
            >
              Your business does not<br />have an AI department.<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
                Now it does.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
            >
              We find the processes wasting your time and money, build AI to handle them, and hand the whole operating system back to you. Your team does what matters. The machines do the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/audit"
                className="w-full sm:w-auto inline-block px-8 py-3.5 rounded-full bg-white text-black text-base font-black hover:bg-slate-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] shadow-[0_0_30px_rgba(255,255,255,0.15)]"
              >
                Get Your Free Audit →
              </Link>
              <Link
                href="#how-it-works"
                className="w-full sm:w-auto inline-block px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white text-base font-black hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                See How It Works
              </Link>
            </motion.div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="border-y border-white/5 py-4 overflow-hidden bg-black">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {marqueeItems.map((item, i) => (
              <span key={i} className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-slate-500 shrink-0">
                {item} <span className="text-white/20 mx-4">&middot;</span>
              </span>
            ))}
          </div>
        </div>

        {/* TAGLINE */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-black text-center">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-slate-500 font-bold uppercase tracking-widest mb-2">We are not paid to install software.</p>
              <p className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">We are paid to remove bottlenecks.</p>
            </div>
          </ScrollReveal>
        </section>

        {/* THE BIG PICTURE */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">What We Are</span>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                    An AI department<br />
                    <span className="text-stone-400 italic">for hire.</span>
                  </h2>
                  <div className="space-y-5 text-base sm:text-lg text-stone-500 font-medium leading-relaxed">
                    <p>We work with any business in any industry. The reason is simple: every business has repeat processes. Every business has bottlenecks. Every business has people doing non-human work.</p>
                    <p>We find those things and replace them with AI so the humans can focus on what actually matters.</p>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-6">
                  <div className="p-8 rounded-[2rem] bg-stone-900 text-white space-y-3 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    <p className="text-base sm:text-lg font-black uppercase tracking-tight leading-tight">We do not install software.</p>
                    <p className="text-base sm:text-lg font-black uppercase tracking-tight leading-tight text-slate-400">We build infrastructure.</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed pt-2">We build the operating system that runs a business so the founder and team can stop being stuck in the middle of everything.</p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Any Industry", sub: "If it has bottlenecks, we fix it" },
                      { label: "Any Size", sub: "10 employees to 1,000" },
                      { label: "Any Stage", sub: "Pre-revenue to scaling" },
                    ].map((item) => (
                      <div key={item.label} className="p-5 rounded-[1.5rem] bg-stone-50 border border-stone-200 text-center space-y-1 hover:-translate-y-1 hover:shadow-md hover:border-stone-300 transition-all duration-300">
                        <p className="text-xs font-black uppercase tracking-tight text-stone-900">{item.label}</p>
                        <p className="text-[10px] text-stone-400 font-medium leading-tight">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-4">The Problem</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] mb-4">
                  AI is at the top of every<br />founder&apos;s list. But nobody<br />knows where to start.
                </h2>
                <p className="text-base sm:text-lg text-stone-400 font-medium max-w-2xl mx-auto leading-relaxed">
                  You know you need it. You hear about it everywhere. But right now your team is still doing robot work by hand while you try to figure it out alone.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROBLEMS.map((p) => (
                <StaggerItem key={p.title}>
                  <div className="p-8 rounded-[2rem] bg-stone-50 border border-stone-200 space-y-4 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 transition-all duration-300 h-full">
                    <span className="text-4xl block">{p.icon}</span>
                    <h3 className="text-base font-black uppercase tracking-tight text-stone-900">{p.title}</h3>
                    <p className="text-sm text-stone-500 font-medium leading-relaxed">{p.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="py-16 sm:py-32 px-4 sm:px-6 bg-black text-white border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold block mb-4">How It Works</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                  We build the operating system<br />
                  <span className="text-slate-500 italic">that runs your business.</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-4">
                  Think of us as your AI department and your Chief AI Officer rolled into one. We do not just give you tools. We build the infrastructure that lets your business grow without adding more people.
                </p>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-widest max-w-2xl mx-auto">
                  Every repeated task is a bottleneck. Every bottleneck we remove is time and money back in your pocket.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {STEPS.map((step) => (
                <StaggerItem key={step.n}>
                  <div className="p-6 rounded-[2rem] bg-stone-900/40 border border-white/5 space-y-4 hover:border-white/15 hover:bg-stone-900/60 transition-all duration-300 h-full group">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-slate-500 transition-colors duration-300">{step.n}</span>
                    <h3 className="text-sm font-black uppercase tracking-tight text-white leading-tight">{step.title}</h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{step.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* THE OPERATING SYSTEM */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-4">The Operating System</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
                  Every system we build lives<br />
                  <span className="text-stone-400 italic">inside one of 6 layers.</span>
                </h2>
                <p className="text-base text-stone-400 font-medium max-w-2xl mx-auto leading-relaxed">
                  This is not a pile of tools. This is an operating system. Every layer feeds the next. Every system removes a bottleneck. The result is a business that runs without the founder in the middle of everything.
                </p>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {OS_LAYERS.map((layer) => (
                <StaggerItem key={layer.n}>
                  <div className="p-8 rounded-[2rem] bg-stone-50 border border-stone-200 space-y-4 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 transition-all duration-300 h-full group">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 px-3 py-1.5 border border-stone-200 rounded-full bg-white group-hover:bg-stone-900 group-hover:text-white group-hover:border-stone-900 transition-all duration-300">Layer {layer.n}</span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-stone-900">{layer.name}</h3>
                    <p className="text-xs text-stone-500 font-medium leading-relaxed">{layer.what}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {layer.systems.map((s) => (
                        <span key={s} className="text-[9px] font-black uppercase tracking-[0.15em] px-2.5 py-1.5 bg-white border border-stone-200 rounded-full text-stone-500 group-hover:border-stone-300 transition-colors duration-300">{s}</span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 p-8 sm:p-12 rounded-[2rem] bg-stone-900 text-white text-center hover:shadow-2xl transition-shadow duration-300">
                <p className="text-lg sm:text-2xl font-black uppercase italic tracking-tight mb-3 leading-tight">
                  &ldquo;The result is a business that runs without the founder<br className="hidden sm:block" /> in the middle of everything.&rdquo;
                </p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Every layer feeds the next. Every system removes a bottleneck.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* TWO WAYS TO WORK */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-4">Two Ways To Work With Us</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
                  Your AI infrastructure.<br />
                  <span className="text-stone-400 italic">Built or managed.</span>
                </h2>
                <p className="text-base text-stone-400 font-medium">
                  Most clients start with The Build and move into The Partnership once they see how much time and money they save.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {/* The Build */}
              <ScrollReveal direction="left">
                <div className="p-8 sm:p-14 rounded-[2.5rem] bg-stone-50 border border-stone-200 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-6 flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 px-3 py-1.5 border border-stone-200 rounded-full">One Time</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">The Build</h3>
                  <p className="text-base font-black text-stone-400 uppercase tracking-widest mb-8">Starting at $7,500</p>
                  <p className="text-sm sm:text-base text-stone-500 font-medium leading-relaxed mb-8">
                    We come in, remove the bottlenecks, build your AI operating system, and hand it back. You own everything.
                  </p>
                  <div className="space-y-3 mb-12 flex-grow">
                    {[
                      "Full business process audit",
                      "Custom AI infrastructure built from scratch",
                      "Non-human jobs matched to AI systems",
                      "Testing until everything runs clean",
                      "Training so your team can manage it",
                      "You own the operating system forever",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-stone-900 font-bold uppercase tracking-tight text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-900 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/audit"
                    className="inline-block text-center px-8 py-4 rounded-full bg-stone-900 text-white text-xs font-black uppercase tracking-widest hover:bg-stone-800 hover:shadow-lg transition-all duration-300"
                  >
                    Start With An Audit
                  </Link>
                </div>
              </ScrollReveal>

              {/* The Partnership */}
              <ScrollReveal direction="right">
                <div className="p-8 sm:p-14 rounded-[2.5rem] bg-stone-900 border border-white/5 flex flex-col text-white hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(0,0,0,0.3)] hover:border-white/10 transition-all duration-300 h-full">
                  <div className="mb-6 flex justify-between items-start">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 px-3 py-1.5 border border-white/10 rounded-full">Ongoing</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">The Partnership</h3>
                  <p className="text-base font-black text-slate-400 uppercase tracking-widest mb-8">30% of setup fee/month</p>
                  <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed mb-8">
                    We stay on as your AI department. We manage, improve, and grow the infrastructure with you every month.
                  </p>
                  <div className="space-y-3 mb-12 flex-grow">
                    {[
                      "Everything in The Build",
                      "Your dedicated AI department",
                      "New automations and systems monthly",
                      "Strategy calls and ongoing support",
                      "Bottleneck removal as you scale",
                      "No hiring. No learning curve. Just results.",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-white font-bold uppercase tracking-tight text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/audit"
                    className="inline-block text-center px-8 py-4 rounded-full bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-slate-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300"
                  >
                    Talk To Us →
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* WHAT WE BELIEVE */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-black text-white border-b border-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 sm:mb-20">
                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-bold block mb-4">What We Believe</span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95]">
                  This is how we think about<br />
                  <span className="text-slate-500 italic">every business we touch.</span>
                </h2>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BELIEFS.map((b) => (
                <StaggerItem key={b.quote}>
                  <div className="p-8 rounded-[2rem] bg-stone-900/40 border border-white/5 space-y-4 hover:border-white/15 hover:bg-stone-900/60 transition-all duration-300 h-full">
                    <p className="text-base sm:text-lg font-black italic text-white leading-tight">&ldquo;{b.quote}&rdquo;</p>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{b.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* THE FOUNDER */}
        <section className="py-16 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
              <ScrollReveal direction="left">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">The Founder</span>
                  <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                    Built by someone<br />
                    <span className="text-stone-400 italic">who has lived it.</span>
                  </h2>
                  <div className="space-y-5 text-base sm:text-lg text-stone-500 font-medium leading-relaxed mb-10">
                    <p>At 14, I dropped out to help save my dad&apos;s tree service. He was working 70 hours a week and breaking. I did not work harder. I built systems.</p>
                    <p>Took the company to seven figures. Got his hours down. Now I work 20 hours a week. I built this life on purpose.</p>
                    <p>Elianatech exists because every business deserves an AI department and an operating system that runs without the founder stuck in the middle of everything.</p>
                  </div>
                  <p className="text-sm font-black uppercase tracking-widest text-stone-400 italic">Flow over force. Always.</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: "14", label: "Age I started building systems" },
                    { stat: "7-fig", label: "Revenue through systems alone" },
                    { stat: "20", label: "Hours I work per week" },
                    { stat: "Flow", label: "Over force. Always." },
                  ].map((s) => (
                    <div key={s.stat} className="p-8 rounded-[2rem] bg-stone-50 border border-stone-200 text-center space-y-2 hover:-translate-y-1 hover:shadow-lg hover:border-stone-300 transition-all duration-300">
                      <p className="text-3xl sm:text-4xl font-black uppercase tracking-tighter text-stone-900">{s.stat}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">{s.label}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* FINAL CTA */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 text-center border-t border-stone-200">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold block mb-6">Ready?</span>
              <h2 className="text-3xl sm:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Stop being the bottleneck.<br />
                <span className="text-stone-400 italic">Start building the machine.</span>
              </h2>
              <p className="text-base sm:text-lg text-stone-500 font-medium leading-relaxed max-w-xl mx-auto mb-10">
                Get a free business audit. We will show you exactly where your time and money are leaking and what AI can do about it. No pressure. Just clarity.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-stone-900 text-white text-lg font-black hover:bg-stone-800 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              >
                Get Your Free Audit →
              </Link>
            </div>
          </ScrollReveal>
        </section>

      </main>

      <Footer />

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        h1, h2, h3, h4 {
          line-height: 1;
        }
      `}</style>
    </div>
  )
}
