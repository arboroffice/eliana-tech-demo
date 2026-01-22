import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { GlassmorphismNav } from "../../../components/glassmorphism-nav"
import { Footer } from "../../../components/footer"
import { getAllCaseStudies, getCaseStudyData } from "../../../lib/case-studies"

export async function generateStaticParams() {
    const posts = getAllCaseStudies()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const study = getCaseStudyData(params.slug)

    if (!study) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Case Study Not Found</div>
    }

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-blue-500/30">
            <GlassmorphismNav />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link href="/case-studies" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
                    </Link>

                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase mb-6">
                        {study.industry}
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        {study.title}
                    </h1>

                    <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                        {study.description}
                    </p>
                </div>
            </section>

            {/* Results Grid */}
            <section className="py-12 border-y border-white/5 bg-white/5">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {study.results.map((result, idx) => (
                            <div key={idx} className="bg-black/40 p-6 rounded-2xl border border-white/10">
                                <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                    {result.value}
                                </div>
                                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                    {result.metric}
                                </div>
                                <p className="text-sm text-slate-500">
                                    {result.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 px-6">
                <div className="max-w-3xl mx-auto space-y-16">

                    {/* Challenge */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-sm mr-4 border border-red-500/20">1</span>
                            The Challenge
                        </h2>
                        <div className="text-lg text-slate-300 leading-relaxed pl-12 border-l border-white/10 prose prose-invert max-w-none">
                            <ReactMarkdown>{study.challenge}</ReactMarkdown>
                        </div>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                            <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm mr-4 border border-blue-500/20">2</span>
                            The Solution
                        </h2>
                        <div className="text-lg text-slate-300 leading-relaxed pl-12 border-l border-white/10 prose prose-invert max-w-none">
                            <ReactMarkdown>{study.solution}</ReactMarkdown>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-slate-900 to-black p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-white">
                                <path d="M28.09 30.56C36.65 30.56 42.48 37.47 42.48 45.48C42.48 46.12 42.44 46.72 42.34 47.36L39.75 62.24C38.69 68.21 34.19 72.8 28.09 72.8C19.53 72.8 13.7 65.89 13.7 57.88C13.7 57.24 13.74 56.64 13.84 56L16.43 41.12C17.49 35.15 21.99 30.56 28.09 30.56ZM72.09 30.56C80.65 30.56 86.48 37.47 86.48 45.48C86.48 46.12 86.44 46.72 86.34 47.36L83.75 62.24C82.69 68.21 78.19 72.8 72.09 72.8C63.53 72.8 57.7 65.89 57.7 57.88C57.7 57.24 57.74 56.64 57.84 56L60.43 41.12C61.49 35.15 65.99 30.56 72.09 30.56Z" />
                            </svg>
                        </div>
                        <blockquote className="relative z-10">
                            <p className="text-xl md:text-2xl font-medium text-white mb-6 italic">
                                "{study.testimonial.quote}"
                            </p>
                            <footer>
                                <div className="font-bold text-white">{study.testimonial.author}</div>
                                <div className="text-slate-400">{study.testimonial.role}</div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/5">
                <Footer />
            </section>
        </div>
    )
}
