"use client"

import { useState } from "react"
import type { IndustrySolutions } from "@/lib/industry-data"

const PARTS = [
    { key: "revenueSales" as const, label: "Revenue & Sales", icon: "$" },
    { key: "operationsDelivery" as const, label: "Operations", icon: "+" },
    { key: "customerAcquisition" as const, label: "Acquisition", icon: ">" },
    { key: "customerRetention" as const, label: "Retention", icon: "=" },
    { key: "timeTeam" as const, label: "Time & Team", icon: "~" },
    { key: "dataIntelligence" as const, label: "Intelligence", icon: "#" },
]

export function SolutionsSection({ solutions, industryName }: { solutions: IndustrySolutions; industryName: string }) {
    const [activeTab, setActiveTab] = useState<keyof IndustrySolutions>("revenueSales")
    const active = solutions[activeTab]

    return (
        <section className="sol-section">
            <div className="sol-header">
                <span className="sol-eyebrow">The 6-Part System</span>
                <h2 className="sol-title">What We Build for <span className="sol-r">{industryName}</span></h2>
                <p className="sol-desc">Every business has 6 core engines. Here is exactly how we rebuild each one for your industry.</p>
            </div>

            <div className="sol-tabs">
                {PARTS.map((p) => (
                    <button
                        key={p.key}
                        onClick={() => setActiveTab(p.key)}
                        className={`sol-tab ${activeTab === p.key ? "sol-tab-active" : ""}`}
                    >
                        <span className="sol-tab-icon">{p.icon}</span>
                        <span className="sol-tab-label">{p.label}</span>
                    </button>
                ))}
            </div>

            <div className="sol-content">
                <div className="sol-pain">
                    <span className="sol-pain-label">The Problem</span>
                    <p className="sol-pain-text">&ldquo;{active.painPoint}&rdquo;</p>
                </div>

                <div className="sol-dream">
                    <span className="sol-dream-label">The Dream Outcome</span>
                    <p className="sol-dream-text">{active.dreamOutcome}</p>
                </div>

                <div className="sol-systems">
                    <span className="sol-systems-label">AI Systems We Install</span>
                    <div className="sol-systems-grid">
                        {active.systems.map((sys, i) => (
                            <div key={i} className="sol-system-card">
                                <span className="sol-system-num">0{i + 1}</span>
                                <h4 className="sol-system-name">{sys.name}</h4>
                                <p className="sol-system-desc">{sys.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="sol-transform">
                    <div className="sol-transform-before">
                        <span className="sol-transform-label">Before</span>
                        <p className="sol-transform-text">{active.transformation.before}</p>
                    </div>
                    <div className="sol-transform-arrow">
                        <span>&rarr;</span>
                    </div>
                    <div className="sol-transform-after">
                        <span className="sol-transform-label">After</span>
                        <p className="sol-transform-text">{active.transformation.after}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .sol-section {
                    margin-bottom: 96px;
                }
                .sol-header {
                    margin-bottom: 48px;
                    border-bottom: 1px solid #CCCBC5;
                    padding-bottom: 24px;
                }
                .sol-eyebrow {
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: #D90019;
                    display: block;
                    margin-bottom: 12px;
                    font-weight: 700;
                }
                .sol-title {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(24px, 3vw, 40px);
                    font-weight: 700;
                    color: #0C0C0C;
                    line-height: 1.1;
                    margin-bottom: 12px;
                }
                .sol-r { color: #D90019; }
                .sol-desc {
                    font-size: 14px;
                    color: #555;
                    max-width: 600px;
                }
                .sol-tabs {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 1px;
                    background: #CCCBC5;
                    margin-bottom: 48px;
                }
                @media (max-width: 768px) {
                    .sol-tabs {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 480px) {
                    .sol-tabs {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                .sol-tab {
                    background: #FAFAF8;
                    border: none;
                    padding: 20px 12px;
                    cursor: pointer;
                    text-align: center;
                    transition: all 0.2s;
                    font-family: var(--font-dm-mono), monospace;
                }
                .sol-tab:hover {
                    background: #F2F1ED;
                }
                .sol-tab-active {
                    background: #0C0C0C !important;
                    color: #FAFAF8;
                }
                .sol-tab-active .sol-tab-icon {
                    color: #D90019;
                }
                .sol-tab-active .sol-tab-label {
                    color: #FAFAF8;
                }
                .sol-tab-icon {
                    display: block;
                    font-size: 18px;
                    font-weight: 700;
                    color: #D90019;
                    margin-bottom: 8px;
                }
                .sol-tab-label {
                    font-size: 10px;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    color: #555;
                }
                .sol-content {
                    display: flex;
                    flex-direction: column;
                    gap: 48px;
                }
                .sol-pain {
                    padding: 48px;
                    background: #F2F1ED;
                    border: 1px solid #E4E3DE;
                    text-align: center;
                }
                .sol-pain-label {
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: #888;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 16px;
                }
                .sol-pain-text {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(18px, 2.5vw, 26px);
                    font-weight: 600;
                    font-style: italic;
                    color: #0C0C0C;
                    line-height: 1.4;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .sol-dream {
                    padding: 48px;
                    background: #0C0C0C;
                    text-align: center;
                }
                .sol-dream-label {
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: #D90019;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 16px;
                }
                .sol-dream-text {
                    font-family: var(--font-syne), sans-serif;
                    font-size: clamp(18px, 2.5vw, 28px);
                    font-weight: 700;
                    color: #FAFAF8;
                    line-height: 1.3;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .sol-systems-label {
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    color: #888;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 24px;
                }
                .sol-systems-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 1px;
                    background: #CCCBC5;
                }
                .sol-system-card {
                    background: #FAFAF8;
                    padding: 32px;
                }
                .sol-system-num {
                    font-size: 10px;
                    color: #D90019;
                    font-weight: 700;
                    font-family: var(--font-dm-mono), monospace;
                    display: block;
                    margin-bottom: 12px;
                }
                .sol-system-name {
                    font-family: var(--font-syne), sans-serif;
                    font-size: 17px;
                    font-weight: 700;
                    color: #0C0C0C;
                    margin-bottom: 8px;
                }
                .sol-system-desc {
                    font-size: 13px;
                    color: #555;
                    line-height: 1.7;
                }
                .sol-transform {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr;
                    gap: 24px;
                    align-items: center;
                    padding: 48px;
                    border: 1px solid #E4E3DE;
                    background: white;
                }
                @media (max-width: 640px) {
                    .sol-transform {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                    .sol-transform-arrow {
                        transform: rotate(90deg);
                    }
                }
                .sol-transform-label {
                    font-size: 9px;
                    letter-spacing: 0.4em;
                    text-transform: uppercase;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 12px;
                }
                .sol-transform-before .sol-transform-label {
                    color: #888;
                }
                .sol-transform-after .sol-transform-label {
                    color: #D90019;
                }
                .sol-transform-text {
                    font-size: 15px;
                    color: #333;
                    line-height: 1.6;
                    font-style: italic;
                }
                .sol-transform-after .sol-transform-text {
                    color: #0C0C0C;
                    font-weight: 600;
                    font-style: normal;
                }
                .sol-transform-arrow {
                    font-size: 32px;
                    color: #D90019;
                    font-weight: 700;
                }
            `}</style>
        </section>
    )
}
