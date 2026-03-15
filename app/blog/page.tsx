import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { getAllBlogPosts } from "@/lib/blog"
import BlogFilter from "./BlogFilter"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono antialiased">
      <GlassmorphismNav />

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <section className="mb-16 text-center">
          <div className="text-[10px] tracking-[0.4em] uppercase text-[#D90019] flex items-center justify-center gap-3 mb-6
                        before:content-[''] before:w-6 before:h-[1px] before:bg-[#D90019]">
            Insights
          </div>
          <h1 className="font-bebas-neue text-[clamp(44px,6vw,80px)] leading-[0.9] tracking-[0.02em] text-[#0C0C0C] mb-6">
            Own Your <span className="text-[#D90019]">Intelligence</span>
          </h1>
          <p className="text-sm text-[#555] max-w-2xl mx-auto leading-relaxed">
            Insights on the future of work, AI automation, and scaling your business without scaling headcount.
          </p>
        </section>

        <section className="mb-24">
          <BlogFilter posts={posts} />
        </section>
      </main>

      <Footer />
    </div>
  )
}
