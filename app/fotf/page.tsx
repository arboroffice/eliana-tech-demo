"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Aurora from "@/components/Aurora"
import Link from "next/link"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

export default function FOTFPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <main className="min-h-screen relative overflow-hidden">
                {/* Background */}
                <div className="fixed inset-0 w-full h-full">
                    <Aurora
                        colorStops={["#1e293b", "#334155", "#0f172a"]}
                        amplitude={1.2}
                        blend={0.6}
                        speed={0.4}
                    />
                </div>

                <div className="relative z-10">
                    <GlassmorphismNav />

                    {/* HERO SECTION */}
                    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
                        <div className="max-w-5xl mx-auto text-center">
                            <motion.p
                                className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-6"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Founders of the Future
                            </motion.p>
                            <motion.h1
                                className="text-4xl sm:text-6xl lg:text-8xl font-black text-white tracking-tight mb-8 uppercase leading-[1.1]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                            >
                                A new way to build.<br />A new way to live.
                            </motion.h1>
                            <motion.p
                                className="text-lg sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.7 }}
                            >
                                FOTF is a newsletter, a podcast, a community, and a complete business-building system. Everything starts from one idea and flows into everything else. No hustle. No burnout. Just smart systems, AI, and a life designed on purpose.
                            </motion.p>
                            <motion.div
                                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            >
                                <Link
                                    href="#plans"
                                    className="px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all"
                                >
                                    See all plans
                                </Link>
                                <Link
                                    href="#newsletter"
                                    className="px-10 py-4 rounded-full bg-white/5 border border-white/10 text-white text-lg font-bold hover:bg-white/10 transition-all"
                                >
                                    Read the free newsletter
                                </Link>
                            </motion.div>
                        </div>
                    </section>

                    {/* THREE THINGS IN ONE PLACE */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-50 text-stone-900 overflow-hidden">
                        <div className="max-w-5xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-20">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6 font-bold">What is FOTF</h2>
                                    <h3 className="text-4xl sm:text-6xl font-black mb-6 uppercase tracking-tight">Three things in one place.</h3>
                                    <p className="text-xl text-stone-600 max-w-2xl mx-auto italic">
                                        "Most programs give you one thing and hope you figure out the rest. FOTF gives you the ideas, the tools, and the people all in the same room."
                                    </p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                                <ScrollReveal delay={0.1}>
                                    <div className="space-y-6">
                                        <span className="text-6xl">✉</span>
                                        <h4 className="text-2xl font-black uppercase tracking-tight">The newsletter</h4>
                                        <p className="text-stone-600 leading-relaxed">Two letters every week. One deep essay. One short truth. About AI, business, freedom, and building a life that actually feels like yours. Free to read. Always honest. Never fluff.</p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.2}>
                                    <div className="space-y-6">
                                        <span className="text-6xl">🤝</span>
                                        <h4 className="text-2xl font-black uppercase tracking-tight">The community</h4>
                                        <p className="text-stone-600 leading-relaxed">A monthly membership for founders who build the same way you do. Live calls. Real conversations. Shared wins. People who actually get what it is like to build something from nothing.</p>
                                    </div>
                                </ScrollReveal>
                                <ScrollReveal delay={0.3}>
                                    <div className="space-y-6">
                                        <span className="text-6xl">🎓</span>
                                        <h4 className="text-2xl font-black uppercase tracking-tight">The Boardroom</h4>
                                        <p className="text-stone-600 leading-relaxed">The full system. 52 lessons, 30+ templates, word-for-word scripts, a 12-week action plan, and lifetime access to everything. This is the complete business-building blueprint.</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* THE PROBLEM SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white relative border-y border-white/5">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">The problem</h2>
                                    <h3 className="text-4xl sm:text-7xl font-black mb-8 uppercase tracking-tight">
                                        You started a business for freedom.<br />
                                        Now it owns you.
                                    </h3>
                                    <p className="text-2xl italic text-slate-400">Something broke along the way. You know it. You feel it.</p>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-16">
                                {[
                                    { num: "01", title: "You are the bottleneck", detail: "Every lead, every follow up, every decision goes through you. If you stop working, everything stops." },
                                    { num: "02", title: "You have knowledge but no system", detail: "You have watched hundreds of hours of content and bought courses. But nothing is connected into something that actually runs." },
                                    { num: "03", title: "AI feels like hype", detail: "Every week there is a new tool. Nobody shows you how to actually plug AI into your business in a way that saves time and makes money." },
                                    { num: "04", title: "Revenue feels random", detail: "Good months come and go. You do not have a system that brings in money on repeat because everything depends on you showing up." },
                                    { num: "05", title: "You are lonely at the top", detail: "Your friends and family do not get it. You need people around you who understand what it feels like to build something from nothing." }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-12 border-b border-white/10 group">
                                            <div className="md:col-span-1">
                                                <span className="text-4xl font-black text-slate-700 group-hover:text-white transition-colors">{item.num}</span>
                                            </div>
                                            <div className="md:col-span-3">
                                                <h4 className="text-2xl font-bold mb-4 uppercase">{item.title}</h4>
                                                <p className="text-slate-400 text-lg leading-relaxed">{item.detail}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* THE NEWSLETTER SECTION */}
                    <section id="newsletter" className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <ScrollReveal>
                                        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6">The newsletter (free)</h2>
                                        <h3 className="text-4xl sm:text-6xl font-black mb-8 uppercase tracking-tight">Two letters a week.<br />Straight to your inbox.</h3>
                                    </ScrollReveal>

                                    <div className="space-y-12">
                                        <ScrollReveal delay={0.1}>
                                            <div>
                                                <h4 className="text-xl font-black uppercase mb-3">Letter A: The deep essay</h4>
                                                <p className="text-stone-600 leading-relaxed mb-4">800 to 1,500 words. Published every Tuesday. This is where I write about things that matter. AI and what it means for your life. The old rules that do not work anymore. What it really takes to build something that gives you freedom.</p>
                                                <p className="text-stone-400 italic">These are the essays people screenshot and send to their friends.</p>
                                            </div>
                                        </ScrollReveal>
                                        <ScrollReveal delay={0.2}>
                                            <div>
                                                <h4 className="text-xl font-black uppercase mb-3">Letter B: The short truth</h4>
                                                <p className="text-stone-600 leading-relaxed">400 to 800 words. Published every Thursday. One idea, explored fast. More direct. Sometimes a quick framework. Sometimes a hard truth. Sometimes just a question that changes how you see things.</p>
                                            </div>
                                        </ScrollReveal>
                                    </div>
                                </div>

                                <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100 shadow-xl relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h4 className="text-2xl font-black uppercase mb-6">Start reading today</h4>
                                        <p className="text-stone-600 mb-10">Join founders who want to build with AI, live with freedom, and stop grinding for a business that does not give back.</p>
                                        <div className="space-y-4">
                                            <input
                                                type="email"
                                                placeholder="Your email address"
                                                className="w-full px-6 py-4 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
                                            />
                                            <button className="w-full py-4 rounded-xl bg-stone-900 text-white font-bold hover:bg-stone-800 transition-all uppercase tracking-widest text-sm">
                                                Subscribe to FOTF
                                            </button>
                                            <p className="text-[10px] text-stone-400 text-center uppercase tracking-tighter">Two letters a week. No spam. Unsubscribe anytime.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* SIX ARCS */}
                            <div className="mt-40">
                                <ScrollReveal>
                                    <div className="text-center mb-20">
                                        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6">What I write about</h2>
                                        <h3 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tight">Six arcs. 35 letters and counting.</h3>
                                        <p className="text-stone-500">Every letter falls into one of six arcs. Each arc hits a different part of who you are.</p>
                                    </div>
                                </ScrollReveal>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {[
                                        { icon: "💡", title: "Philosophy", detail: "The big ideas. How to think about building. How to think about living.", examples: "\"the age of the architect\" / \"you are the algorithm\"" },
                                        { icon: "🔓", title: "Deprogramming", detail: "The old beliefs holding you back. The lies about hustle and what success looks like.", examples: "\"you were never meant to manage people\" / \"the cult of busy\"" },
                                        { icon: "💰", title: "Bold money", detail: "How to charge what you are worth. How to build wealth that is quiet and designed.", examples: "\"why i charge what i charge\" / \"wealth is quiet\"" },
                                        { icon: "🌱", title: "Wild and free", detail: "Lifestyle. Energy. The feminine way of building. Protecting your peace like it is money.", examples: "\"the feminine way of building empires\" / \"red lip days\"" },
                                        { icon: "🔮", title: "Vision", detail: "Where AI is going. Where business is going. What the next decade looks like.", examples: "\"3 people and 300 systems\" / \"the death of the middleman\"" },
                                        { icon: "🔥", title: "Confrontation", detail: "Tough love. The letters that make you uncomfortable because they are true.", examples: "\"most of you will not make it\" / \"your business is a treadmill\"" }
                                    ].map((item, idx) => (
                                        <ScrollReveal key={idx} delay={idx * 0.05}>
                                            <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 group hover:bg-stone-900 hover:text-white transition-all duration-300">
                                                <span className="text-4xl mb-6 block">{item.icon}</span>
                                                <h5 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h5>
                                                <p className="text-stone-600 mb-6 text-sm group-hover:text-stone-400 transition-colors">{item.detail}</p>
                                                <p className="text-[10px] uppercase font-bold tracking-widest text-stone-400">{item.examples}</p>
                                            </div>
                                        </ScrollReveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE WATERFALL SYSTEM */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-900 text-white">
                        <div className="max-w-5xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">The waterfall system</h2>
                                    <h3 className="text-4xl sm:text-6xl font-black mb-8 uppercase tracking-tight">One idea. Every platform.</h3>
                                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">This is how I create 30 plus pieces of content a week without burning out. Every week starts with two letters. Then everything flows downhill.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                {[
                                    { step: "1", label: "Write the two letters", sub: "Letter A and Letter B. The seeds.", platform: "Substack" },
                                    { step: "2", label: "Record the podcast", sub: "Two episodes. Talk like FaceTime.", platform: "Spotify / Apple" },
                                    { step: "3", label: "Film the YouTube videos", sub: "Sit-down, vlog, short hot take.", platform: "YouTube" },
                                    { step: "4", label: "Pull the LinkedIn posts", sub: "Five angles. Stories, lessons.", platform: "LinkedIn" },
                                    { step: "5", label: "Social content", sub: "Clips, reels, carousels, stories.", platform: "IG / Twitter" }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-full flex flex-col justify-between">
                                            <div>
                                                <span className="text-xs font-bold text-slate-500 mb-2 block uppercase tracking-tighter">Step {item.step}</span>
                                                <h5 className="text-sm font-black uppercase mb-2">{item.label}</h5>
                                                <p className="text-[10px] text-slate-400 mb-4">{item.sub}</p>
                                            </div>
                                            <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-white/50 uppercase font-mono self-start">{item.platform}</span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <div className="mt-12 text-center">
                                <ScrollReveal delay={0.6}>
                                    <p className="text-2xl font-black uppercase tracking-tight text-white/80">✓ 30 plus pieces from two ideas</p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* THE PODCAST */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-t border-stone-100">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <ScrollReveal>
                                    <div>
                                        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6 font-bold">The podcast</h2>
                                        <h3 className="text-4xl sm:text-6xl font-black mb-8 uppercase tracking-tight">Founders of the Future: The Show</h3>
                                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">Regular episodes with Mia exploring the thinking behind the letters. No performance, just raw conversation about building a life on purpose. Short enough for a walk, deep enough to change your mind.</p>

                                        <div className="space-y-4 text-sm font-bold uppercase tracking-widest text-stone-400">
                                            <p className="flex items-center gap-3"><span className="text-xl">✓</span> Twice a week (Tue/Thu)</p>
                                            <p className="flex items-center gap-3"><span className="text-xl">✓</span> 10 to 20 minutes each</p>
                                            <p className="flex items-center gap-3"><span className="text-xl">✓</span> Spotify, Apple Podcasts, YouTube</p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2}>
                                    <div className="relative group">
                                        <div className="absolute inset-0 bg-stone-900 rounded-[2.5rem] rotate-2 transition-transform group-hover:rotate-1"></div>
                                        <div className="relative bg-stone-50 border border-stone-200 rounded-[2.5rem] p-10 shadow-2xl overflow-hidden aspect-square flex flex-col items-center justify-center text-center">
                                            <div className="w-24 h-24 bg-stone-900 rounded-full flex items-center justify-center mb-8 shadow-xl">
                                                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                                            </div>
                                            <h4 className="text-xl font-black uppercase tracking-tight mb-2">Listen to the Latest</h4>
                                            <p className="text-stone-400 text-xs">Evergreen episodes now streaming.</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* THE BOARDROOM SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white">
                        <div className="max-w-6xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">The program (Boardroom only)</h2>
                                    <h3 className="text-4xl sm:text-7xl font-black mb-8 uppercase tracking-tight">7 parts. 52 lessons. One clear path.</h3>
                                    <p className="text-xl text-slate-400 max-w-3xl mx-auto italic">The Boardroom gives you the full system. Every part builds on the one before it. You start with how to think and end with a business that runs without you.</p>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-8">
                                {[
                                    { part: "1", title: "The Philosophy", lessons: "5", detail: "Why the old model of business is dying. Why one person with AI can do what used to take 50. Why flow beats force every single time." },
                                    { part: "2", title: "Find Your Genius Zone", lessons: "8", detail: "Your interests, skills, and story combined into something only you can offer. The Genius Zone Blueprint, Skill Stack Matrix, and Personal Monopoly Builder." },
                                    { part: "3", title: "AI Mastery", lessons: "10", detail: "The CRAFT Prompting Framework. Voice training. How to build AI systems that sound like you, think like you, and save you hours every day." },
                                    { part: "4", title: "Content and Leverage", lessons: "8", detail: "The 4-Stage Content Flywheel. Platform strategy. The waterfall system. How to create 30 plus pieces a week from two ideas." },
                                    { part: "5", title: "Build Your Business", lessons: "10", detail: "The 5-Level Offer Stack. Pricing Calculator. Launch Framework. How to build something people want to buy and make it easy to say yes." },
                                    { part: "6", title: "Systems and Freedom", lessons: "6", detail: "Automation Priority Order. Client onboarding. CRM setup. n8n, Zapier, and Make workflows." },
                                    { part: "7", title: "Sales Mastery", lessons: "5", detail: "Word-for-word discovery call scripts. Objection handling. DM conversation flows. The 7-Touch Follow Up System." }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.05}>
                                        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                                            <div className="flex flex-col sm:flex-row gap-8 sm:items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="text-xs font-black text-slate-600 uppercase tracking-widest block mb-2">Part {item.part}</span>
                                                    <h4 className="text-2xl font-black uppercase text-white group-hover:text-slate-200 transition-colors">{item.title}</h4>
                                                </div>
                                                <div className="hidden sm:block w-px h-12 bg-white/10"></div>
                                                <div className="flex-grow">
                                                    <p className="text-slate-400 leading-relaxed text-sm mb-2">{item.detail}</p>
                                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{item.lessons} lessons with templates</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            {/* STATS GRID */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-20">
                                {[
                                    { num: "52", label: "Lessons", sub: "Video training" },
                                    { num: "30+", label: "Templates", sub: "Fill in the blank" },
                                    { num: "15+", label: "Scripts", sub: "Word for word" },
                                    { num: "10+", label: "Systems", sub: "Plug and play" },
                                    { num: "500+", label: "Prompts", sub: "Tested library" },
                                    { num: "12", label: "Weeks", sub: "Action plan" }
                                ].map((stat, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.05}>
                                        <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                                            <p className="text-4xl font-black mb-1">{stat.num}</p>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                                            <p className="text-[8px] text-slate-600 uppercase">{stat.sub}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* WHO THIS IS FOR */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 overflow-hidden">
                        <div className="max-w-5xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-20">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6 font-bold">Who this is for</h2>
                                    <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 leading-none">Built for founders who<br />want more from life.</h3>
                                    <p className="text-stone-500 italic">Not less of it.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: "🌱", title: "New founders starting fresh", detail: "You want to do it the smart way from day one. No wasted years. No trial and error. Just a clear system that works." },
                                    { icon: "🚀", title: "Business owners ready to grow", detail: "You have something working but you are doing too much by hand. You need systems that scale without needing more of your time." },
                                    { icon: "💡", title: "People leaving their 9 to 5", detail: "You are ready to bet on yourself. You need a real plan, real tools, and real people who understand what you are going through." },
                                    { icon: "🤖", title: "AI curious builders", detail: "You know AI is the future but you want someone to show you how to actually use it in your business. Not theory. Real steps." }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="p-10 rounded-3xl bg-stone-50 border border-stone-100 flex gap-6">
                                            <span className="text-4xl flex-shrink-0">{item.icon}</span>
                                            <div>
                                                <h4 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h4>
                                                <p className="text-stone-600 leading-relaxed text-sm">{item.detail}</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* YOUR GUIDE SECTION */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-900 text-white relative">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                                <ScrollReveal>
                                    <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden group">
                                        <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-4xl font-black text-white/10 uppercase tracking-widest leading-none">
                                            MIA
                                        </div>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal delay={0.2}>
                                    <div>
                                        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">Your guide</h2>
                                        <h3 className="text-6xl sm:text-8xl font-black mb-8 uppercase tracking-tighter">I am Mia.</h3>
                                        <div className="space-y-6 text-lg text-slate-300 leading-relaxed mb-12">
                                            <p>I scaled a tree service company from $400K to $2M. Not by hiring more people. Not by working longer hours. By building smart systems that did the work so I did not have to.</p>
                                            <p>Now I run Elianatech. We build AI departments for businesses. The kind of systems that handle your content, your follow ups, your admin, and your lead generation while you focus on the work that actually matters.</p>
                                            <p>Founders of the Future is everything I know packed into one place. The philosophy. The systems. The tools. The scripts. And the community of people who build the same way I do.</p>
                                            <p className="text-white font-bold italic">I work 20 hours a week. Not because I am lazy. Because my systems handle the rest. I want to show you how.</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8">
                                            <div>
                                                <p className="text-3xl font-black mb-1">$400K to $2M</p>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Revenue scaled</p>
                                            </div>
                                            <div>
                                                <p className="text-3xl font-black mb-1">20 hrs/wk</p>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Work schedule</p>
                                            </div>
                                        </div>

                                        <div className="mt-16 pt-12 border-t border-white/10">
                                            <h4 className="text-xl font-black uppercase mb-4 tracking-tight text-white/90">Read my book: AI PROOF</h4>
                                            <p className="text-slate-400 text-sm mb-6 leading-relaxed">The foundational philosophy of personal agency, consciousness, and freedom in the age of AI.</p>
                                            <a
                                                href="https://aiproof-kappa.vercel.app/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block text-xs font-bold uppercase tracking-widest text-white border-b border-white hover:text-slate-400 hover:border-slate-400 transition-all pb-1"
                                            >
                                                Read for free →
                                            </a>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* WHAT I BELIEVE (PHILOSOPHY) */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-white text-stone-900 border-t border-stone-100">
                        <div className="max-w-5xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6 font-bold">What I believe</h2>
                                    <h3 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4">The ideas that built FOTF.</h3>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {[
                                    { title: "Everyone alive right now can be a founder", detail: "AI is the equalizer. You do not need a big team or a trust fund. You need a laptop, the right systems, and the willingness to build." },
                                    { title: "Flow over force", detail: "Grinding does not make you successful. It makes you tired. The best work happens when you design your business around your energy, not against it." },
                                    { title: "Systems not people", detail: "One person with the right setup can do what used to take 10. Solopreneur empires will outperform agencies and teams in the next decade." },
                                    { title: "Info products are dead", detail: "We do not sell PDFs and hope for the best. We build agents. We build systems. We build things that give back more than they take." },
                                    { title: "Freedom is the real metric", detail: "Revenue means nothing if you are chained to your desk. The goal is a business that gives you time, money, and peace at the same time." },
                                    { title: "The educated founder is dangerous", detail: "When you understand AI, systems, and leverage, you become impossible to compete with. That is what FOTF builds." }
                                ].map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.05}>
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-black uppercase tracking-tight italic">"{item.title}"</h4>
                                            <p className="text-stone-600 leading-relaxed text-sm">{item.detail}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CHOOSE YOUR PATH (PRICING) */}
                    <section id="plans" className="py-24 sm:py-32 px-4 sm:px-6 bg-stone-50 text-stone-900 border-y border-stone-200">
                        <div className="max-w-6xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-24">
                                    <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400 mb-6 font-bold">Choose your path</h2>
                                    <h3 className="text-4xl sm:text-7xl font-black uppercase tracking-tight mb-6">Three ways to join FOTF.</h3>
                                    <p className="text-xl text-stone-500">Start free. Go deeper when you are ready. No pressure. No tricks.</p>
                                </div>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                {/* FREE */}
                                <ScrollReveal delay={0.1}>
                                    <div className="p-10 rounded-3xl bg-white border border-stone-200 h-full flex flex-col justify-between hover:shadow-xl transition-all">
                                        <div>
                                            <h4 className="text-2xl font-black uppercase mb-4">The Newsletter</h4>
                                            <div className="mb-8">
                                                <span className="text-5xl font-black">$0</span>
                                                <span className="text-stone-400 block uppercase tracking-widest text-[10px] mt-1">Free forever</span>
                                            </div>
                                            <p className="text-stone-500 text-sm mb-10">Two letters a week about AI, business, and building a life with freedom. The starting point for everything.</p>
                                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-stone-600 mb-12">
                                                <li>• Letter A (Deep Essay)</li>
                                                <li>• Letter B (Short Truth)</li>
                                                <li>• Full letter archive</li>
                                                <li>• Podcast episodes</li>
                                            </ul>
                                        </div>
                                        <Link href="#newsletter" className="w-full py-5 rounded-xl bg-stone-100 text-stone-900 border border-stone-200 text-center font-black uppercase tracking-widest text-xs hover:bg-stone-200 transition-colors">Subscribe free</Link>
                                    </div>
                                </ScrollReveal>

                                {/* POPULAR - COMMUNITY */}
                                <ScrollReveal delay={0.2}>
                                    <div className="p-10 rounded-3xl bg-stone-900 text-white h-full flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 p-6">
                                            <span className="bg-white/10 text-white/50 text-[8px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">Popular</span>
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-black uppercase mb-4">The Community</h4>
                                            <div className="mb-8">
                                                <span className="text-5xl font-black">$97</span>
                                                <span className="text-slate-500 block uppercase tracking-widest text-[10px] mt-1">per month</span>
                                            </div>
                                            <p className="text-slate-400 text-sm mb-10">Everything in the newsletter plus a room full of founders who are building the same way you are.</p>
                                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-slate-300 mb-12">
                                                <li>• Private community access</li>
                                                <li>• Monthly live group calls</li>
                                                <li>• Q&A + Hot seats</li>
                                                <li>• Accountability loops</li>
                                                <li>• Shared wins & feedback</li>
                                            </ul>
                                        </div>
                                        <button className="w-full py-5 rounded-xl bg-white text-black text-center font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">Join the community</button>
                                    </div>
                                </ScrollReveal>

                                {/* FULL ACCESS - BOARDROOM */}
                                <ScrollReveal delay={0.3}>
                                    <div className="p-10 rounded-3xl bg-white border border-stone-200 h-full flex flex-col justify-between hover:shadow-xl transition-all">
                                        <div>
                                            <h4 className="text-2xl font-black uppercase mb-4">The Boardroom</h4>
                                            <div className="mb-8">
                                                <span className="text-5xl font-black">$7,777</span>
                                                <span className="text-stone-400 block uppercase tracking-widest text-[10px] mt-1">One time. Lifetime.</span>
                                            </div>
                                            <p className="text-stone-500 text-sm mb-10">The complete business-building system. The program, all templates, and every script.</p>
                                            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-stone-600 mb-12">
                                                <li>• 52 step-by-step lessons</li>
                                                <li>• 30+ templates & SOPs</li>
                                                <li>• Sales & DM scripts</li>
                                                <li>• 12-week action plan</li>
                                                <li>• Plug-and-play workflows</li>
                                                <li>• Lifetime community access</li>
                                            </ul>
                                        </div>
                                        <button className="w-full py-5 rounded-xl bg-stone-900 text-white text-center font-black uppercase tracking-widest text-xs hover:bg-stone-800 transition-colors">Join the Boardroom</button>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal delay={0.5}>
                                <div className="mt-20 p-8 rounded-[2rem] bg-stone-100 border border-stone-200 text-center">
                                    <p className="text-2xl font-black uppercase mb-2 tracking-tight">💪 The FOTF promise</p>
                                    <p className="text-stone-500 max-w-2xl mx-auto">Follow the steps. Do the work. If you do not see a real result in 30 days, you get a free one-on-one review with Mia to get you unstuck. We are that sure this works.</p>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    {/* THE ELIANATECH PATH */}
                    <section className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white relative">
                        <div className="max-w-5xl mx-auto text-center">
                            <ScrollReveal>
                                <h2 className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-6 font-bold">The Elianatech path</h2>
                                <h3 className="text-4xl sm:text-6xl font-black uppercase mb-12 tracking-tight">How we grow together.</h3>
                                <p className="text-slate-400 max-w-2xl mx-auto mb-20 text-lgitalic">"Every tier solves your biggest problem and naturally creates the next one. You grow at your own pace."</p>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {[
                                    { name: "FOTF", detail: "Learn it yourself. The system.", price: "$97/mo or $7,777" },
                                    { name: "Build With Us", detail: "We guide. You build. You own it.", price: "$14,997" },
                                    { name: "We Build", detail: "We build the whole thing for you.", price: "$25K+" },
                                    { name: "Inner Circle", detail: "Full AI department partner.", price: "$60K+" }
                                ].map((tier, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.1}>
                                        <div className="p-8 rounded-2xl bg-white/5 border border-white/5 flex flex-col justify-between h-full group hover:bg-white/10 transition-colors">
                                            <div className="mb-6">
                                                <h5 className="text-xl font-black uppercase mb-2">{tier.name}</h5>
                                                <p className="text-[10px] text-slate-500 mb-4">{tier.detail}</p>
                                            </div>
                                            <span className="text-xs font-bold text-white uppercase tracking-widest">{tier.price}</span>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>

                            <ScrollReveal delay={0.6}>
                                <div className="mt-32">
                                    <h3 className="text-3xl font-black mb-8 uppercase tracking-tight">Ready to build different?</h3>
                                    <p className="text-slate-500 mb-12 max-w-xl mx-auto">Stop trading all your time for money. Start building a business that runs on systems, not stress.</p>
                                    <Link
                                        href="#plans"
                                        className="inline-block px-12 py-5 rounded-full bg-white text-black text-xl font-bold hover:scale-105 transition-transform"
                                    >
                                        SEE ALL PLANS →
                                    </Link>
                                </div>
                            </ScrollReveal>
                        </div>
                    </section>

                    <Footer />
                </div>
            </main>
        </div>
    )
}
