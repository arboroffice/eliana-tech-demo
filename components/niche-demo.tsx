"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { industries } from "@/lib/industry-data"
import {
    Cpu,
    Workflow,
    Database,
    Layers,
    Sparkles,
    Zap,
    ShieldCheck,
    LayoutDashboard,
    Users,
    Target,
    Rocket,
    ChevronRight,
    Plus,
    ArrowRight,
    TrendingUp,
    Clock,
    Briefcase,
    Search,
    CheckCircle2,
    Info
} from "lucide-react"

export function NicheArchitectureDemo() {
    const [selectedSlug, setSelectedSlug] = useState(industries[0].slug)
    const [activeTab, setActiveTab] = useState<'blueprint' | 'agents' | 'departments'>('blueprint')
    const [hoveredAgent, setHoveredAgent] = useState<any>(null)
    const [searchQuery, setSearchQuery] = useState("")
    const scrollRef = useRef<HTMLDivElement>(null)

    const activeNiche = industries.find(n => n.slug === selectedSlug) || industries[0]

    const filteredIndustries = industries.filter(ind =>
        ind.name.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Handle scroll on niche selector
    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <section className="niche-demo-section s" id="blueprint">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="eyebrow mx-auto justify-center mb-4">The Infrastructure Engine</div>
                    <h2 className="s-title mb-6">
                        Deep <span className="r">Industry Playbooks.</span>
                    </h2>
                    <p className="arch-subtitle max-w-2xl mx-auto">
                        We don't build generic AI. We build the specific digital nervous system your niche requires.
                        Exploration of 12+ high-leverage sectors.
                    </p>
                </div>

                {/* SEARCH & SELECTOR */}
                <div className="max-w-5xl mx-auto mb-16">
                    <div className="search-bar-wrap mb-8">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search your industry..."
                            className="industry-search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="selector-container">
                        <button className="scroll-btn left" onClick={() => scroll('left')}><ChevronRight className="rotate-180" /></button>
                        <div className="niche-selector-tabs" ref={scrollRef}>
                            {filteredIndustries.map((niche) => (
                                <button
                                    key={niche.slug}
                                    onClick={() => setSelectedSlug(niche.slug)}
                                    className={`niche-tab-v2 ${selectedSlug === niche.slug ? 'active' : ''}`}
                                >
                                    {niche.name}
                                </button>
                            ))}
                        </div>
                        <button className="scroll-btn right" onClick={() => scroll('right')}><ChevronRight /></button>
                    </div>
                </div>

                {/* MAIN INTERACTIVE AREA */}
                <div className="demo-stage">
                    <div className="demo-nav">
                        {['blueprint', 'agents', 'departments'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`demo-nav-btn ${activeTab === tab ? 'active' : ''}`}
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <div className="demo-content-wrapper">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${selectedSlug}-${activeTab}`}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                className="demo-grid"
                            >
                                {/* LEFT INFO PANEL */}
                                <div className="demo-info-panel">
                                    <div className="niche-header">
                                        <h3 className="niche-title">{activeNiche.name}</h3>
                                        <p className="niche-hook">{activeNiche.hook}</p>
                                    </div>

                                    <div className="problem-card">
                                        <span className="feat-label">THE BOTTLENECK</span>
                                        <p>{activeNiche.problem}</p>
                                    </div>

                                    <div className="outcome-card">
                                        <div className="outcome-icon-wrap">
                                            <TrendingUp className="w-5 h-5 text-red-500" />
                                        </div>
                                        <div>
                                            <span className="feat-label">THE OUTCOME</span>
                                            <p>{activeNiche.result}</p>
                                        </div>
                                    </div>

                                    {activeNiche.services?.custom && (
                                        <div className="os-feature-list mt-8">
                                            <span className="feat-label mb-4 block">{activeNiche.services.custom.title}</span>
                                            <div className="os-grid">
                                                {activeNiche.services.custom.features.map((f, i) => (
                                                    <div key={i} className="os-item">
                                                        <CheckCircle2 className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                                                        <span>{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* RIGHT VISUAL PANEL */}
                                <div className="demo-visual-panel">
                                    {activeTab === 'blueprint' && (
                                        <div className="blueprint-visual-v2">
                                            <div className="blueprint-stack">
                                                {activeNiche.layers?.map((layer, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="stack-layer"
                                                        initial={{ x: 50, opacity: 0 }}
                                                        animate={{ x: 0, opacity: 1 }}
                                                        transition={{ delay: i * 0.1 }}
                                                        style={{ zIndex: 10 - i }}
                                                    >
                                                        <div className="layer-tag">LEVEL 0{i + 1}</div>
                                                        <div className="layer-info">
                                                            <h4>{layer.department}</h4>
                                                            <div className="role-pills">
                                                                {layer.roles.map((r, ri) => (
                                                                    <span key={ri} className="role-pill">{r}</span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="layer-tasks-v2">
                                                            {layer.tasks.slice(0, 3).map((t, ti) => (
                                                                <div key={ti} className="task-row">
                                                                    <div className="task-bullet" />
                                                                    <span>{t}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'agents' && (
                                        <div className="agents-visual-v2">
                                            <div className="agents-grid">
                                                {activeNiche.services?.singleSystems.examples.map((agent, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="agent-card-v2"
                                                        onMouseEnter={() => setHoveredAgent(agent)}
                                                        onMouseLeave={() => setHoveredAgent(null)}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                    >
                                                        <div className="agent-card-header">
                                                            <div className="agent-icon-box">
                                                                <Zap className="w-4 h-4 text-red-500" />
                                                            </div>
                                                            <h5>{agent.title}</h5>
                                                        </div>
                                                        <p className="agent-detail-short">{agent.detail}</p>
                                                        <div className="agent-roi">
                                                            <TrendingUp className="w-3 h-3 mr-1" />
                                                            <span>ROI: {agent.roi}</span>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === 'departments' && (
                                        <div className="dept-visual-v2">
                                            <div className="dept-list">
                                                {activeNiche.services?.departments.areas.map((area, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="dept-area-card"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.1 }}
                                                    >
                                                        <div className="dept-area-header">
                                                            <div className="dept-icon-circle" />
                                                            <h6>{area.area}</h6>
                                                        </div>
                                                        <p className="dept-detail">{area.detail}</p>
                                                        <div className="dept-impact">
                                                            <span className="feat-label">IMPACT</span>
                                                            <p>{area.impact}</p>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* BOTTOM CTA */}
                <div className="demo-footer-cta mt-20 text-center">
                    <p className="mb-8 text-mid italic">"This is not a software suite. It's a custom-built infrastructure layer."</p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="infrastructure-badge">
                            <ShieldCheck className="w-4 h-4 mr-2" />
                            <span>HIPAA & SOC2 READY</span>
                        </div>
                        <div className="infrastructure-badge">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>4-WEEK DEPLOYMENT</span>
                        </div>
                        <div className="infrastructure-badge">
                            <Rocket className="w-4 h-4 mr-2" />
                            <span>SCALABLE TO $100M+</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .niche-demo-section {
                    padding: 120px 0;
                    background: var(--white);
                    border-top: 1px solid var(--border);
                }

                /* SELECTOR */
                .search-bar-wrap {
                    position: relative;
                    max-width: 400px;
                    margin: 0 auto;
                }
                .search-icon {
                    position: absolute;
                    left: 16px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 18px;
                    height: 18px;
                    color: var(--dim);
                }
                .industry-search {
                    width: 100%;
                    padding: 14px 14px 14px 48px;
                    background: var(--off);
                    border: 1px solid var(--border);
                    font-family: var(--font-dm-mono), monospace;
                    font-size: 13px;
                    outline: none;
                }
                .industry-search:focus {
                    border-color: var(--black);
                }

                .selector-container {
                    position: relative;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .niche-selector-tabs {
                    display: flex;
                    overflow-x: auto;
                    gap: 12px;
                    padding: 8px 0;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    flex: 1;
                }
                .niche-selector-tabs::-webkit-scrollbar {
                    display: none;
                }
                .scroll-btn {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--off);
                    border: 1px solid var(--border);
                    cursor: pointer;
                    transition: all 0.2s;
                    flex-shrink: 0;
                }
                .scroll-btn:hover {
                    background: var(--black);
                    color: white;
                }
                .niche-tab-v2 {
                    white-space: nowrap;
                    padding: 12px 24px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    background: var(--off);
                    border: 1px solid var(--border);
                    color: var(--mid);
                    transition: all 0.2s;
                    cursor: pointer;
                }
                .niche-tab-v2:hover {
                    border-color: var(--black);
                    color: var(--black);
                }
                .niche-tab-v2.active {
                    background: var(--black);
                    color: white;
                    border-color: var(--black);
                }

                /* DEMO STAGE */
                .demo-stage {
                    max-width: 1400px;
                    margin: 0 auto;
                    background: var(--white);
                    border: 1px solid var(--border);
                    box-shadow: 0 40px 100px rgba(0,0,0,0.05);
                }
                .demo-nav {
                    display: flex;
                    border-bottom: 1px solid var(--border);
                }
                .demo-nav-btn {
                    flex: 1;
                    padding: 20px;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.2em;
                    color: var(--dim);
                    border-right: 1px solid var(--border);
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .demo-nav-btn:last-child {
                    border-right: none;
                }
                .demo-nav-btn.active {
                    background: var(--black);
                    color: white;
                }

                .demo-grid {
                    display: grid;
                    grid-template-columns: 450px 1fr;
                    min-height: 600px;
                }

                /* INFO PANEL */
                .demo-info-panel {
                    padding: 60px;
                    border-right: 1px solid var(--border);
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }
                .niche-header {
                    margin-bottom: 20px;
                }
                .niche-title {
                    font-size: 38px;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: -0.04em;
                    line-height: 0.9;
                    margin-bottom: 16px;
                }
                .niche-hook {
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--red);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }
                .problem-card {
                    padding: 32px;
                    background: var(--off);
                    border-left: 4px solid var(--black);
                }
                .problem-card p {
                    font-size: 15px;
                    line-height: 1.6;
                    color: var(--mid);
                    margin-top: 12px;
                }
                .outcome-card {
                    display: flex;
                    gap: 20px;
                    align-items: flex-start;
                }
                .outcome-icon-wrap {
                    width: 48px;
                    height: 48px;
                    background: var(--off);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
                .outcome-card p {
                    font-size: 16px;
                    font-weight: 600;
                    margin-top: 8px;
                    line-height: 1.4;
                }

                .os-item {
                    display: flex;
                    gap: 12px;
                    align-items: flex-start;
                    font-size: 13px;
                    font-weight: 500;
                    margin-bottom: 12px;
                    color: var(--mid);
                }

                /* VISUAL PANEL */
                .demo-visual-panel {
                    padding: 60px;
                    background: var(--off);
                    position: relative;
                    overflow: hidden;
                }

                /* BLUEPRINT STACK */
                .blueprint-stack {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    perspective: 1000px;
                }
                .stack-layer {
                    background: var(--white);
                    border: 1px solid var(--border);
                    padding: 32px;
                    box-shadow: 10px 10px 0 var(--border);
                    transition: all 0.3s;
                }
                .stack-layer:hover {
                    box-shadow: 20px 20px 0 var(--border-mid);
                    transform: translate(-5px, -5px);
                }
                .layer-tag {
                    font-size: 10px;
                    font-weight: 900;
                    color: var(--red);
                    margin-bottom: 16px;
                    letter-spacing: 0.2em;
                }
                .layer-info h4 {
                    font-size: 20px;
                    font-weight: 800;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                }
                .role-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-bottom: 24px;
                }
                .role-pill {
                    font-size: 9px;
                    font-weight: 700;
                    background: var(--black);
                    color: white;
                    padding: 3px 10px;
                    text-transform: uppercase;
                }
                .layer-tasks-v2 {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .task-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--mid);
                }
                .task-bullet {
                    width: 6px;
                    height: 6px;
                    background: var(--red);
                    border-radius: 50%;
                }

                /* AGENTS GRID */
                .agents-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                }
                .agent-card-v2 {
                    background: var(--white);
                    padding: 24px;
                    border: 1px solid var(--border);
                    transition: all 0.2s;
                }
                .agent-card-v2:hover {
                    border-color: var(--black);
                    transform: translateY(-4px);
                }
                .agent-card-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                }
                .agent-icon-box {
                    width: 32px;
                    height: 32px;
                    background: var(--off);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .agent-card-header h5 {
                    font-size: 14px;
                    font-weight: 800;
                    text-transform: uppercase;
                }
                .agent-detail-short {
                    font-size: 12px;
                    color: var(--mid);
                    line-height: 1.5;
                    margin-bottom: 16px;
                }
                .agent-roi {
                    display: inline-flex;
                    align-items: center;
                    font-size: 11px;
                    font-weight: 800;
                    color: var(--red);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                }

                /* DEPT LIST */
                .dept-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .dept-area-card {
                    background: var(--white);
                    padding: 32px;
                    border: 1px solid var(--border);
                }
                .dept-area-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    margin-bottom: 16px;
                }
                .dept-icon-circle {
                    width: 12px;
                    height: 12px;
                    border: 2px solid var(--black);
                    border-radius: 50%;
                }
                .dept-area-header h6 {
                    font-size: 16px;
                    font-weight: 800;
                    text-transform: uppercase;
                }
                .dept-detail {
                    font-size: 14px;
                    color: var(--mid);
                    margin-bottom: 24px;
                }
                .dept-impact {
                    padding-top: 16px;
                    border-top: 1px solid var(--off);
                }
                .dept-impact p {
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--black);
                    margin-top: 4px;
                }

                /* FOOTER */
                .infrastructure-badge {
                    display: flex;
                    align-items: center;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.2em;
                    color: var(--dim);
                    padding: 10px 20px;
                    border: 1px solid var(--border);
                }

                @media (max-width: 1100px) {
                    .demo-grid {
                        grid-template-columns: 1fr;
                    }
                    .demo-info-panel {
                        border-right: none;
                        border-bottom: 1px solid var(--border);
                        padding: 40px;
                    }
                }
            `}</style>
        </section>
    )
}
