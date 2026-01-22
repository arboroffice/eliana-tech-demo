import Link from "next/link"
import { ArrowLeft, User, Calendar, Tag } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { GlassmorphismNav } from "../../../components/glassmorphism-nav"
import { Footer } from "../../../components/footer"
import { getAllBlogPosts, getBlogPost } from "../../../lib/blog"
import { NewsletterSignup } from "../../../components/newsletter-signup"

export async function generateStaticParams() {
    const posts = getAllBlogPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostDetail({ params }: { params: { slug: string } }) {
    const post = getBlogPost(params.slug)

    if (!post) {
        return <div className="min-h-screen bg-black text-white flex items-center justify-center">Post Not Found</div>
    }

    return (
        <div className="min-h-screen bg-black font-sans selection:bg-blue-500/30">
            <GlassmorphismNav />

            {/* Header / Hero */}
            <header className="relative pt-32 pb-16 px-6 overflow-hidden border-b border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
                    </Link>

                    <div className="flex items-center justify-center gap-4 mb-8 text-sm text-slate-400">
                        <span className="flex items-center gap-1 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                            <Tag className="w-3 h-3 text-blue-400" /> {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                            <User className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                            <div className="text-white font-medium">{post.author}</div>
                            <div className="text-slate-500 text-xs uppercase tracking-wider">Author</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Body */}
            <article className="py-20 px-6 max-w-3xl mx-auto">
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-slate-300 prose-a:text-blue-400 prose-strong:text-white prose-li:text-slate-300">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>

            {/* Mid-Content CTA */}
            <section className="mb-20">
                <NewsletterSignup />
            </section>

            <section className="py-12 border-t border-white/5">
                <Footer />
            </section>
        </div>
    )
}
