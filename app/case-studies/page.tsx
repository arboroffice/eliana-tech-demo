"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { CASE_STUDIES } from "../../lib/case-studies-data"

import { TransformationDemos } from "../../components/transformation-demos"

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">Success Stories</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto text-center mb-16">
                    See how companies are transforming their operations with Eliana Tech.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {CASE_STUDIES.map((study) => (
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

                            {/* Key Stats */}
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

                <TransformationDemos />
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
