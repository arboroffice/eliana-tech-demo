"use client"

import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

// --- Mock Data for Interactive Elements ---

const AGENT_LOGS = [
  { time: "11:32:04", level: "INFO", message: "Project Manager Agent initializing mission: 'Dental Practice G H L Pipeline'" },
  { time: "11:32:05", level: "SCAN", message: "Audit Analysis: Identifying 14 bottlenecks in current lead routing." },
  { time: "11:32:07", level: "PLAN", message: "Meta-Builder Agent generating blueprint: 'LocalHealth-Neural-v4'" },
  { time: "11:32:10", level: "EXEC", message: "Deploying Autonomous Follow-up Agent (Proficiency: 94/100)" },
  { time: "11:32:12", level: "SEC", message: "Secure Open-Claw: Sandbox container established for external API syncing." },
  { time: "11:32:15", level: "META", message: "Learning Agent codifying new 'Lead Priority' skill from mission performance." },
]

const PERFORMANCE_METRICS = [
  { label: "Active Leads", value: "1,284", delta: "+12%" },
  { label: "Tasks Completed", value: "8,402", delta: "+24%" },
  { label: "Revenue (30D)", value: "$241,500", delta: "+8%" },
  { label: "Agent Efficiency", value: "98.2%", delta: "+1.5%" },
]

const CORE_LAYERS = [
  {
    title: "Recursive Architect",
    subtitle: "Meta-Learning Layer",
    description: "A self-evolving engine that interprets missions and autonomously builds AI infrastructure using Claude 3.5 Sonnet & OpenAI o1.",
    agents: ["PM Agent", "Learning Agent", "Meta-Builder"],
    color: "from-red-500 to-orange-600"
  },
  {
    title: "AI Employee Mastery",
    subtitle: "Platform Knowledge",
    description: "Agents with intrinsic knowledge of Eliana-OS, outperforming human operators via self-referential optimization and reflection.",
    agents: ["PKB Integration", "Reflection Module", "Skill Engine"],
    color: "from-zinc-400 to-zinc-600"
  },
  {
    title: "Secure Open-Claw",
    subtitle: "Enterprise-Grade Integration",
    description: "Isolated execution environments for secure, autonomous interaction with external systems via Secure Gateway & DLP.",
    agents: ["CMS Vault", "DLP Module", "Secure Gateway"],
    color: "from-red-900 to-zinc-900"
  }
]

const NEURAL_STACK = [
  { name: "Claude 3.5 Sonnet", role: "The Brain (Reasoning)", task: "System Architecture & Strategy" },
  { name: "GPT-4o Multimodal", role: "The Eyes (Vision)", task: "UI Interpretation & Interaction" },
  { name: "ElevenLabs / Deepgram", role: "The Voice (Communication)", task: "Dynamic Sales & Support" },
  { name: "DeepSeek-V3 / R1", role: "The Workhorse (High-Volume)", task: "Data Processing & SEO" },
]

const TWIN_GRADUATIONS = [
  { step: "01", title: "Context Injection", description: "Creating a vector store of human expert actions and decision patterns." },
  { step: "02", title: "Behavioral Cloning", description: "Generating Playbooks from human-performance recordings." },
  { step: "03", title: "Shadow Graduation", description: "The AI 'graduates' from human approval to fully autonomous execution." },
]

// --- Components ---

const AgentFeed = () => {
  const [logs, setLogs] = useState(AGENT_LOGS.slice(0, 3));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const nextIndex = (AGENT_LOGS.indexOf(prev[prev.length - 1]) + 1) % AGENT_LOGS.length;
        const newLogs = [...prev.slice(1), AGENT_LOGS[nextIndex]];
        return newLogs;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/80 border border-zinc-800 rounded-lg p-4 font-mono text-[10px] h-48 overflow-hidden relative">
      <div className="absolute top-0 left-0 right-0 bg-zinc-900/50 px-3 py-1 border-b border-zinc-800 flex justify-between items-center z-10">
        <span className="text-zinc-500 uppercase tracking-widest">Live Agent Feed</span>
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <AnimatePresence mode="popLayout">
          {logs.map((log, i) => (
            <motion.div
              key={log.message}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="flex gap-3 items-start"
            >
              <span className="text-zinc-600">[{log.time}]</span>
              <span className={`px-1 rounded ${
                log.level === 'SEC' ? 'bg-red-900/30 text-red-400' : 
                log.level === 'PLAN' ? 'bg-blue-900/30 text-blue-400' : 
                'bg-zinc-800 text-zinc-400'
              }`}>{log.level}</span>
              <span className="text-zinc-300">{log.message}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

const AgentDrive = () => (
  <div className="bg-black/40 border border-zinc-800 rounded p-4 mt-6">
    <div className="flex items-center gap-2 mb-4">
      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
      <span className="text-[10px] text-zinc-400 uppercase tracking-widest">Agent Drive / Outputs</span>
    </div>
    <div className="space-y-2 text-[10px] font-mono">
      <div className="flex justify-between hover:text-white transition-colors cursor-pointer">
        <span className="text-zinc-500">📄 blueprint_recovery.json</span>
        <span className="text-zinc-700">2.4kb</span>
      </div>
      <div className="flex justify-between hover:text-white transition-colors cursor-pointer">
        <span className="text-zinc-500">📄 confirmation_workflow.html</span>
        <span className="text-zinc-700">12.1kb</span>
      </div>
      <div className="flex justify-between hover:text-white transition-colors cursor-pointer text-red-400">
        <span>📄 dental-competitor-intel.pdf</span>
        <span className="text-zinc-700">1.2mb</span>
      </div>
    </div>
  </div>
)

const MissionControl = () => (
  <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-8 backdrop-blur-xl relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-black tracking-tight flex items-center gap-3">
          <span className="w-2 h-2 bg-red-600 rounded-full" />
          MISSION COMMAND
        </h3>
        <span className="text-[10px] text-zinc-500 font-mono">v4.0.0-STABLE</span>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="text-[10px] text-zinc-500 uppercase tracking-widest mb-3 block">Primary Objective</label>
          <div className="bg-black/50 border border-zinc-800 p-4 rounded text-sm text-zinc-300 font-mono italic">
            "Build an autonomous dental referral engine that synchronizes with GHL and automates follow-ups until booking."
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded">
            <span className="text-[10px] text-zinc-500 uppercase block mb-1">Status</span>
            <span className="text-xs font-bold text-red-500">EXECUTING ARCHITECTURE</span>
          </div>
          <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded">
            <span className="text-[10px] text-zinc-500 uppercase block mb-1">Assigned PM</span>
            <span className="text-xs font-bold text-white">Agent-PM-04</span>
          </div>
        </div>

        <AgentDrive />

        <button className="w-full bg-red-600 hover:bg-white hover:text-black transition-colors py-4 text-xs font-black tracking-[0.2em] uppercase">
          Initialize New Mission
        </button>
      </div>
    </div>
  </div>
)

export default function ElianaOSPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-red-500/30 overflow-x-hidden">
      <GlassmorphismNav />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-red-900/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-900/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50 mix-blend-overlay" />
      </div>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 px-3 py-1 bg-red-950/30 border border-red-500/30 rounded-full mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-red-500 font-bold">10X Edition Active</span>
                </div>
                
                <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter">
                  ELIANA<span className="text-red-600">-</span>OS<br />
                  <span className="text-zinc-500 font-light italic">AUTONOMOUS</span>
                </h1>
                
                <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-12">
                  The world's first AI-native Operating System for business. We don't just provide tools; we install <span className="text-white font-bold">Autonomous AI Employees</span> that build, manage, and optimize your entire infrastructure.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href="/os/command-center" className="bg-red-600 text-white px-10 py-6 text-xs uppercase tracking-[0.3em] font-black hover:scale-105 transition-transform text-center relative overflow-hidden group">
                    <span className="relative z-10">Launch Command Center</span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Link>
                  <Link href="#architecture" className="border border-zinc-800 text-zinc-400 px-10 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:text-white hover:border-zinc-400 transition-all text-center">
                    System specs
                  </Link>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="relative z-10"
              >
                <div className="absolute -inset-4 bg-red-600/10 blur-3xl rounded-full" />
                <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-black shadow-2xl">
                  <Image 
                    src="/eliana_os_10x_hero_1773332916793.png" 
                    alt="Eliana-OS interface mockup" 
                    width={600} 
                    height={800} 
                    className="opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="p-6 bg-zinc-900/50 backdrop-blur-md border-t border-zinc-800">
                    <AgentFeed />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PERFORMANCE KPI STRIP */}
        <section className="border-y border-zinc-900 bg-zinc-900/20 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {PERFORMANCE_METRICS.map((kpi, i) => (
                <div key={i} className="text-center md:text-left">
                  <span className="block text-[10px] text-zinc-600 uppercase tracking-widest mb-2">{kpi.label}</span>
                  <div className="flex items-baseline gap-3 justify-center md:justify-start">
                    <span className="text-3xl font-black text-white">{kpi.value}</span>
                    <span className="text-xs font-mono text-red-500">{kpi.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE ARCHITECTURE LAYERS */}
        <section id="architecture" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">THE THREE PILLARS</h2>
            <p className="text-zinc-500 text-lg">Eliana-OS 10x Edition is built on a foundation of recursive learning, platform mastery, and secure external orchestration.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CORE_LAYERS.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-1 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-red-500/50 transition-colors"
              >
                <div className="p-10 h-full flex flex-col">
                  <div className={`w-12 h-1 bg-gradient-to-r ${layer.color} mb-8`} />
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">{layer.subtitle}</span>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-red-500 transition-colors">{layer.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8 flex-grow">
                    {layer.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.agents.map((agent, j) => (
                      <span key={j} className="px-3 py-1 bg-zinc-800 text-[9px] uppercase tracking-widest text-zinc-400 rounded">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMMAND CENTER INTERACTIVE SECTION */}
        <section className="py-32 bg-zinc-900/10 border-y border-zinc-900 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter">
                  REAL-TIME <br />
                  <span className="text-red-600">MISSION CONTROL</span>
                </h2>
                <p className="text-xl text-zinc-400 mb-12">
                  Every mission is a conversation between business intent and AI execution. Input your objective, and Eliana-OS blueprints the infrastructure in real-time.
                </p>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-red-950/50 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Autonomous Blueprinting</h4>
                      <p className="text-sm text-zinc-500">The Meta-Builder agent creates industry-specific schemas and agent clusters tailored to your KPIs.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">Open-Claw Integration</h4>
                      <p className="text-sm text-zinc-500">Securely connects to CRM, Ads, and Email through isolated ephemeral environments.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <MissionControl />
              </motion.div>
            </div>
          </div>
        </section>

        {/* NEURAL STACK SECTION */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[10px] text-red-600 uppercase tracking-[0.5em] font-black mb-8">Model Infrastructure</div>
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-none tracking-tighter uppercase italic">
                A TEAM OF <br />
                <span className="text-white">MODELS.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12">
                We don't rely on a single LLM. Eliana-OS orchestrates a <span className="text-white font-bold">multi-model hybrid architecture</span> to ensure every task is handled by the most capable intelligence.
              </p>
              
              <div className="space-y-4">
                {NEURAL_STACK.map((model, i) => (
                  <div key={i} className="flex justify-between items-center p-6 border border-zinc-900 bg-zinc-900/10 rounded-xl hover:border-zinc-700 transition-colors">
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{model.name}</h4>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest">{model.role}</p>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-mono hidden md:block">{model.task}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-600/20 to-transparent rounded-full blur-[120px] absolute inset-0 animate-pulse" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center group hover:border-red-500/50 transition-colors">
                    <span className="text-2xl mb-4">🧠</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500">Reasoning</span>
                    <span className="text-xs font-bold text-white mt-1">Sonnet / o1</span>
                  </div>
                  <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center group hover:border-red-500/50 transition-colors">
                    <span className="text-2xl mb-4">👁️</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500">Vision</span>
                    <span className="text-xs font-bold text-white mt-1">GPT-4o / Qwen</span>
                  </div>
                </div>
                <div className="space-y-4 mt-12">
                  <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center group hover:border-red-500/50 transition-colors">
                    <span className="text-2xl mb-4">🎙️</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500">Voice</span>
                    <span className="text-xs font-bold text-white mt-1">v2.5 / Nova-2</span>
                  </div>
                  <div className="aspect-square bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col items-center justify-center p-8 text-center group hover:border-red-500/50 transition-colors">
                    <span className="text-2xl mb-4">🔨</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-500">Scale</span>
                    <span className="text-xs font-bold text-white mt-1">DeepSeek / Llama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIGITAL TWIN GRADUATION SECTION */}
        <section className="py-32 bg-red-600/5 border-y border-zinc-900">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-24 text-center">
              <div className="text-[10px] text-red-600 uppercase tracking-[0.5em] font-black mb-6">The Digital Twin Strategy</div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter">THE GRADUATION PATH</h2>
              <p className="text-zinc-500 text-lg max-w-2xl mx-auto">We clone expert behavior to create identical digital workforce capabilities that operate autonomously at 10x speed.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden">
              {TWIN_GRADUATIONS.map((step, i) => (
                <div key={i} className="bg-black p-12 hover:bg-zinc-900/50 transition-colors group">
                  <span className="text-5xl font-black text-zinc-800 group-hover:text-red-600 transition-colors mb-8 block">{step.step}</span>
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold italic">S</div>
                <div>
                  <h4 className="font-bold">Shadow Mode Active</h4>
                  <p className="text-xs text-zinc-500">AI recording performance data for behavioral cloning graduation.</p>
                </div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className={`w-1 h-8 rounded-full ${i < 5 ? 'bg-red-600' : 'bg-zinc-800'}`} />
                ))}
                <span className="ml-4 text-xs font-mono self-center">80% CLONE_STABILITY</span>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY: AI EMPLOYEE MASTERY */}
        <section className="py-40 px-6 max-w-7xl mx-auto border-b border-zinc-900">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-10 bg-red-600/5 blur-[100px] rounded-full" />
              <div className="relative bg-zinc-900/40 border border-zinc-800 p-12 rounded-2xl font-mono">
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-zinc-800 pb-4">
                    <span className="text-zinc-500">PLATFORM_KNOWLEDGE_BASE</span>
                    <span className="text-green-500">SYNCED</span>
                  </div>
                  <div className="text-xs space-y-4">
                    <div className="text-zinc-400">{`> GET /api/v4/agent-proficiency`}</div>
                    <div className="flex justify-between items-center text-white bg-zinc-800 p-4 rounded">
                      <span>Agent_Sales_Lead_01</span>
                      <span className="text-red-500 font-black">98 / 100</span>
                    </div>
                    <div className="text-zinc-600">Mastery identified: Deep CRM Logic, Lead Routing, Strategic Follow-up</div>
                    <div className="text-zinc-400">{`> ANALYZE_PERFORMANCE --mode reflecting`}</div>
                    <div className="text-zinc-500 italic">"Detected 14% latency in lead handover. Optimizing Skill: 'Instant_Neural_Routing'..."</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-[10px] text-red-600 uppercase tracking-[0.5em] font-black mb-8">AI Employee Paradox</div>
              <h2 className="text-4xl md:text-7xl font-black mb-10 leading-none tracking-tighter uppercase italic">
                Beyond <br />
                <span className="text-white">Programming</span>
              </h2>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                Traditional agents are programmed. Eliana-OS agents <span className="text-white font-bold">master the platform.</span> 
              </p>
              <p className="text-lg text-zinc-500 mb-12">
                Our "AI Employees" possess intrinsic knowledge of Eliana-OS internal APIs and data models. They don't just follow instructions; they reflect on their own performance, identify bottlenecks, and codify their own best practices into new Skill models.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">Self-Observation</h4>
                  <div className="h-0.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} className="h-full bg-red-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase text-xs tracking-widest mb-3">Skill Generation</h4>
                  <div className="h-0.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "92%" }} className="h-full bg-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: THE BLUEPRINT PROGRAM */}
        <section className="py-40 px-6">
          <div className="max-w-4xl mx-auto text-center border border-red-600/30 bg-red-950/10 p-16 md:p-32 rounded-[2rem] relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
            
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
              Become the <br />
              <span className="text-white">Architect</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              We are currently selecting partners to build the next generation of industry-specific AI playbooks. 10x your operations or build a new category.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/audit" className="bg-white text-black px-12 py-6 text-sm uppercase tracking-[0.4em] font-black hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_70px_rgba(225,29,72,0.2)]">
                Initialize Audit
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        
        body {
          background-color: #050505;
          font-family: 'Inter', sans-serif;
        }

        .font-mono {
          font-family: 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
        }

        ::selection {
          background: #E11D48;
          color: white;
        }
      `}</style>
    </div>
  )
}
