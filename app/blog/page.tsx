import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { getAllBlogPosts } from "../../lib/blog"
import BlogFilter from "./BlogFilter"

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
                <div className="px-6 max-w-7xl mx-auto mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                        Insights on the future of work, AI automation, and scaling your business without scaling headcount.
                    </p>

                    {/* Substack Newsletter CTA */}
                    <div className="flex justify-center mb-16 px-4">
                        <div className="bg-white p-1 rounded-xl shadow-2xl overflow-hidden max-w-full">
                            <iframe
                                src="https://miaelianaa.substack.com/embed"
                                width="480"
                                height="320"
                                style={{ border: 'none', background: 'white' }}
                                frameBorder="0"
                                scrolling="no"
                                className="max-w-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Filtered Blog Grid */}
                <div className="px-6 max-w-7xl mx-auto">
                    <BlogFilter posts={posts} />
                </div>
            </main>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
