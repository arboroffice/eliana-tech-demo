import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { getAllCaseStudies } from "../../lib/case-studies"
import { TransformationDemos } from "../../components/transformation-demos"
import { ResultsShowcase } from "../../components/results-showcase"

export default async function CaseStudiesPage() {
    const caseStudies = getAllCaseStudies()

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#1e3a5f", "#334155", "#1e3a5f"]} amplitude={1.0} blend={0.5} speed={0.6} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-center bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                    Results &amp; Success Stories
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto text-center mb-16">
                    Real transformations. Real numbers. See what happens when AI runs your business.
                </p>

                {/* Aggregate Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    {[
                        { label: "Avg ROI", value: "567%" },
                        { label: "Hours Saved / Week", value: "200+" },
                        { label: "Revenue Generated", value: "$30M+" },
                        { label: "Avg Deployment", value: "7 Weeks" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                            <div className="text-3xl md:text-4xl font-bold text-blue-400">{stat.value}</div>
                            <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Detailed Case Studies from case-study markdown files */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {caseStudies.map((study) => (
                        <Link
                            key={study.slug}
                            href={`/case-studies/${study.slug}`}
                            className="group block bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl mb-6 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform duration-500">
                                <span className="text-4xl">{
                                    study.industry === "Car Dealership" ? "🚗" :
                                        study.industry === "Real Estate" ? "🏠" :
                                            study.industry === "Dentistry" ? "🦷" : "📈"
                                }</span>
                            </div>
                            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">{study.industry}</div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{study.title}</h3>
                            <p className="text-slate-300 mb-6 line-clamp-2 text-sm">{study.description}</p>
                            <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/5">
                                {study.results.slice(0, 2).map((result, i) => (
                                    <div key={i}>
                                        <div className="text-xl font-bold text-white tracking-tight">{result.value}</div>
                                        <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">{result.metric}</div>
                                    </div>
                                ))}
                            </div>
                            <span className="text-white font-medium group-hover:underline flex items-center gap-2 text-sm">
                                Read Case Study <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Industry Results (merged from /results page) */}
                <ResultsShowcase />

                <TransformationDemos />

                {/* CTA */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Every one of these businesses started exactly where you are now. The only difference? They took the first step.
                    </p>
                    <Link
                        href="/audit"
                        className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                        Book Your Free AI Audit →
                    </Link>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
