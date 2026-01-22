import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { getAllBlogPosts } from "../../lib/blog"
import { NewsletterSignup } from "../../components/newsletter-signup"

export default function BlogPage() {
    const posts = getAllBlogPosts()

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>

            <main className="relative z-10 pt-24 pb-20">
                {/* Hero */}
                <div className="px-6 max-w-7xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Values & Vistions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Insights on the future of work, AI automation, and scaling your business without scaling headcount.
                    </p>
                </div>

                {/* Newsletter Signup */}
                <div className="mb-24">
                    <NewsletterSignup />
                </div>

                {/* Blog Grid */}
                <div className="px-6 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {posts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center border-b border-white/5 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <span className="text-4xl opacity-50">📝</span>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{post.category}</div>
                                        <div className="text-xs text-slate-500 flex items-center gap-1">
                                            <Calendar className="w-3 h-3" /> {post.date}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-slate-400 mb-6 text-sm line-clamp-3 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-xs text-slate-400">
                                            <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold border border-indigo-500/30">
                                                <User className="w-3 h-3" />
                                            </div>
                                            {post.author}
                                        </div>
                                        <span className="text-blue-400 font-medium group-hover:text-white transition-colors flex items-center gap-2 text-sm">
                                            Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
