"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { IndustryContent, industries } from "@/lib/industry-data"
import { SolutionsSection } from "./SolutionsSection"

export function IndustryClient({ industry }: { industry: IndustryContent }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    return (
        <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono">
            <GlassmorphismNav />

            <main className="pt-32 pb-20 max-w-7xl mx-auto px-6">
                <section className="mb-24">
                    <div className="eyebrow">Industry Playbook</div>
                    <h1 className="s-title mb-6">
                        AI Wing for <br />
                        <span className="r">{industry.name}</span>
                    </h1>
                    <p className="text-sm text-[#555] max-w-2xl leading-relaxed mb-12">{industry.problem}</p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/audit" className="btn-red inline-block">
                            Book Your Free Audit
                        </Link>
                    </div>
                </section>

                <section className="mb-24 p-12 bg-[#F2F1ED] border border-[#E4E3DE] text-center">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#888] font-bold block mb-6"> The Challenge </span>
                    <p className="text-xl sm:text-3xl font-bold italic text-[#0C0C0C] leading-tight">&ldquo;{industry.operatorProblem}&rdquo;</p>
                </section>

                {industry.dreamVision && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">The Dream Outcome</span>
                            <h2 className="cat-title">Imagine Your {industry.name} Business Fully Autonomous</h2>
                        </div>
                        <div className="max-w-4xl">
                            <p className="text-base sm:text-lg text-[#333] leading-[1.9] whitespace-pre-line">{industry.dreamVision}</p>
                        </div>
                    </section>
                )}

                {industry.industryStats && industry.industryStats.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">Industry Intelligence</span>
                            <h2 className="cat-title">The Numbers That Matter</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 bg-[#CCCBC5]">
                            {industry.industryStats.map((item, idx) => (
                                <div key={idx} className="bg-white p-8 text-center">
                                    <div className="text-3xl sm:text-4xl font-bold text-[#D90019] font-syne mb-3">{item.stat}</div>
                                    <div className="text-[11px] text-[#555] uppercase tracking-wider leading-relaxed">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.subNiches && industry.subNiches.length > 0 && (
                    <section className="mb-16">
                        <div className="mb-8">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D90019] font-bold block mb-4">Sub-Niches We Build For</span>
                            <div className="flex flex-wrap gap-2">
                                {industry.subNiches.map((niche, i) => (
                                    <span key={i} className="text-[11px] px-3 py-1.5 bg-white border border-[#E4E3DE] text-[#555] font-medium rounded-full hover:border-[#D90019] transition-colors cursor-default">
                                        {niche}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {industry.geoKeywords && industry.geoKeywords.length > 0 && (
                    <section className="mb-24">
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] text-[#888] font-bold block mb-4">Serving {industry.name} Nationwide</span>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                {industry.geoKeywords.map((geo, i) => (
                                    <span key={i} className="text-[11px] text-[#999] hover:text-[#D90019] transition-colors cursor-default">
                                        {geo}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {industry.useCases && industry.useCases.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">Real-World Scenarios</span>
                            <h2 className="cat-title">How AI Transforms Your Day-to-Day</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-[#CCCBC5]">
                            {industry.useCases.map((uc, idx) => (
                                <div key={idx} className="bg-white p-10">
                                    <span className="text-[10px] text-[#D90019] font-bold uppercase tracking-widest font-mono block mb-4">Scenario 0{idx + 1}</span>
                                    <h4 className="font-syne font-bold text-lg text-[#0C0C0C] mb-4">{uc.title}</h4>
                                    <p className="text-sm text-[#555] leading-relaxed mb-6">{uc.scenario}</p>
                                    <div className="border-t border-[#E4E3DE] pt-4">
                                        <span className="text-[10px] text-[#888] uppercase tracking-wider font-bold block mb-2">Outcome</span>
                                        <p className="text-sm text-[#0C0C0C] font-medium leading-relaxed">{uc.outcome}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.solutions && (
                    <SolutionsSection solutions={industry.solutions} industryName={industry.name} />
                )}

                {industry.comparisonTable && industry.comparisonTable.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">The Transformation</span>
                            <h2 className="cat-title">Before vs. After AI Infrastructure</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-left text-[10px] uppercase tracking-widest text-[#888] font-bold p-4 border-b-2 border-[#CCCBC5]">Category</th>
                                        <th className="text-left text-[10px] uppercase tracking-widest text-[#888] font-bold p-4 border-b-2 border-[#CCCBC5]">Without AI</th>
                                        <th className="text-left text-[10px] uppercase tracking-widest text-[#D90019] font-bold p-4 border-b-2 border-[#CCCBC5]">With Eliana AI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {industry.comparisonTable.map((row, idx) => (
                                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-[#F2F1ED]"}>
                                            <td className="p-4 text-xs font-bold uppercase tracking-wider text-[#0C0C0C] border-b border-[#E4E3DE]">{row.category}</td>
                                            <td className="p-4 text-sm text-[#888] border-b border-[#E4E3DE]">{row.without}</td>
                                            <td className="p-4 text-sm text-[#0C0C0C] font-medium border-b border-[#E4E3DE]">{row.withAI}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                )}

                <section className="mb-24">
                    <div className="category-header mb-12">
                        <span className="cat-num">Automation Systems</span>
                        <h2 className="cat-title">The Industry Operating System</h2>
                    </div>

                    <div className="systems-grid">
                        <div className="system-card">
                            <h3 className="system-name">{industry.services.singleSystems.title}</h3>
                            <p className="system-what">{industry.services.singleSystems.description}</p>
                            <ul className="mt-6 space-y-4">
                                {industry.services.singleSystems.examples.map((ex, idx) => (
                                    <li key={idx}>
                                        <div className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider mb-1">{ex.title}</div>
                                        <div className="text-xs text-[#666] mb-1">{ex.detail}</div>
                                        <div className="text-[10px] text-[#D90019] font-bold">ROI: {ex.roi}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="system-card">
                            <h3 className="system-name">{industry.services.departments.title}</h3>
                            <p className="system-what">{industry.services.departments.description}</p>
                            <ul className="mt-6 space-y-6">
                                {industry.services.departments.areas.map((area, idx) => (
                                    <li key={idx}>
                                        <div className="text-xs font-bold text-[#0C0C0C] uppercase tracking-wider mb-1">{area.area}</div>
                                        <div className="text-xs text-[#666] mb-1">{area.detail}</div>
                                        <div className="text-[10px] text-[#D90019] font-bold italic">Impact: {area.impact}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="system-card highlighted">
                            <h3 className="system-name">{industry.services.custom.title}</h3>
                            <p className="system-what">{industry.services.custom.description}</p>
                            <ul className="mt-6 space-y-3">
                                {industry.services.custom.features.map((f, idx) => (
                                    <li key={idx} className="text-xs text-white/70 flex items-start gap-2">
                                        <span className="text-[#D90019]">■</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/audit" className="btn-white mt-10 inline-block text-center text-xs tracking-widest uppercase">
                                Custom Architecture Quote
                            </Link>
                        </div>
                    </div>
                </section>

                {industry.processSteps && industry.processSteps.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">Implementation Roadmap</span>
                            <h2 className="cat-title">How We Deploy Your AI Infrastructure</h2>
                        </div>
                        <div className="space-y-0">
                            {industry.processSteps.map((ps, idx) => (
                                <div key={idx} className="flex gap-8 p-8 border-b border-[#E4E3DE] last:border-b-0 items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-[#0C0C0C] flex items-center justify-center">
                                        <span className="text-[#D90019] font-bold font-mono text-lg">0{ps.step}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-syne font-bold text-lg text-[#0C0C0C] mb-3">{ps.title}</h4>
                                        <p className="text-sm text-[#555] leading-relaxed max-w-2xl">{ps.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.layers && industry.layers.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">Strategic Architecture</span>
                            <h2 className="cat-title">The Neural Blueprint</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {industry.layers.map((layer, idx) => (
                                <div key={idx} className="p-8 border border-[#E4E3DE] bg-white">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#D90019] mb-4">{layer.department}</h4>
                                    <div className="mb-6">
                                        <p className="text-[10px] text-[#888] uppercase mb-2">AI Roles</p>
                                        <div className="flex flex-wrap gap-2">
                                            {layer.roles.map((role, ridx) => (
                                                <span key={ridx} className="text-[10px] px-2 py-1 bg-[#F2F1ED] text-[#555]">{role}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#888] uppercase mb-2">Autonomous Tasks</p>
                                        <ul className="space-y-1">
                                            {layer.tasks.slice(0, 5).map((task, tidx) => (
                                                <li key={tidx} className="text-[11px] text-[#333] tracking-tight">- {task}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {industry.faq.length > 0 && (
                    <section className="mb-24">
                        <div className="category-header mb-12">
                            <span className="cat-num">Friction Points Resolved</span>
                            <h2 className="cat-title">{industry.name} FAQ</h2>
                        </div>
                        <div className="faq-list">
                            {industry.faq.map((item, idx) => (
                                <div key={idx} className={`faq-item ${openFaq === idx ? "open" : ""}`} onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                                    <div className="faq-q">
                                        <span className="faq-q-text">{item.q}</span>
                                        <span className="faq-icon">{openFaq === idx ? "−" : "+"}</span>
                                    </div>
                                    <div className="faq-a">
                                        <div className="faq-a-text leading-relaxed text-sm sm:text-base text-[#555]" dangerouslySetInnerHTML={{ __html: item.a.replace(/\n/g, "<br/>") }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className="mb-24">
                    <div className="category-header mb-12">
                        <span className="cat-num">Related Architecture</span>
                        <h2 className="cat-title">Proven Infrastructure for Adjacent Sectors</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {industries.filter(i => i.slug !== industry.slug).slice(0, 4).map((rel, idx) => (
                            <Link key={idx} href={`/industries/${rel.slug}`} className="p-6 bg-white border border-[#E4E3DE] hover:border-[#D90019] transition-all group">
                                <span className="text-[10px] text-[#D90019]/50 font-bold uppercase tracking-widest block mb-4">Playbook 0{idx + 1}</span>
                                <h4 className="text-sm font-bold text-[#0C0C0C] group-hover:text-[#D90019] transition-colors">{rel.name}</h4>
                                <p className="text-[11px] text-[#888] mt-2 line-clamp-2">{rel.problem}</p>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="mb-24 p-16 bg-[#0B0B0B] text-[#FAFAF8] text-center rounded-sm">
                    <h2 className="text-4xl font-syne font-bold mb-6">Ready to install your neural layer?</h2>
                    <p className="text-white/60 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">We build the infrastructure that turns your {industry.name.toLowerCase()} expertise into an autonomous operations machine.</p>
                    <Link href="/audit" className="btn-white inline-block">
                        Get Your Free Audit
                    </Link>
                </section>
            </main>

            <Footer />

            <style jsx>{`
        .eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #D90019;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: #D90019;
        }

        .s-title {
          font-family: var(--font-bebas-neue), sans-serif;
          font-size: clamp(44px, 6vw, 80px);
          line-height: 0.9;
          letter-spacing: 0.02em;
          color: #0C0C0C;
        }

        .r {
          color: #D90019;
        }

        .btn-red {
          font-family: var(--font-dm-mono), monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #D90019;
          color: #FAFAF8 !important;
          padding: 16px 32px;
          text-decoration: none;
          transition: opacity 0.2s;
        }

        .btn-red:hover {
          opacity: 0.8;
        }

        .btn-white {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #FAFAF8;
          color: #0C0C0C;
          padding: 18px 36px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .btn-white:hover {
          background: #D90019;
          color: white;
        }

        .category-header {
          border-bottom: 1px solid #CCCBC5;
          padding-bottom: 24px;
        }

        .cat-num {
          font-size: 9px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #888;
          display: block;
          margin-bottom: 12px;
        }

        .cat-title {
          font-family: var(--font-syne), sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #0C0C0C;
        }

        .systems-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1px;
          background: #CCCBC5;
        }

        .system-card {
          background: #FAFAF8;
          padding: 40px;
          display: flex;
          flex-direction: column;
        }

        .system-card.highlighted {
          background: #0C0C0C;
          color: #FAFAF8;
        }

        .system-card.highlighted .system-name,
        .system-card.highlighted .system-what {
          color: white;
        }

        .system-name {
          font-family: var(--font-syne), sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #0C0C0C;
          margin-bottom: 16px;
        }

        .system-what {
          font-size: 15px;
          color: #555;
          line-height: 1.8;
        }

        .faq-item {
          border-bottom: 1px solid #E4E3DE;
        }

        .faq-q {
          display: flex;
          justify-content: space-between;
          padding: 32px 0;
          cursor: pointer;
        }

        .faq-q-text {
          font-family: var(--font-syne), sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #0C0C0C;
        }

        .faq-icon {
          font-size: 20px;
          color: #888;
        }

        .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-a {
          max-height: 800px;
          padding-bottom: 32px;
        }

        @media (max-width: 640px) {
          .systems-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </div>
    )
}
