import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { getAllBlogPosts, getBlogPost } from "@/lib/blog"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return { title: "Post Not Found" }
  return {
    title: `${post.title} | Elianatech`,
    description: post.excerpt,
    alternates: {
      canonical: `https://elianatech.com/blog/${params.slug}`,
    },
    openGraph: {
      title: `${post.title} | Elianatech`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [post.category],
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound() // Use Next.js notFound
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://elianatech.com/og-image.png",
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elianatech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elianatech.com/icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://elianatech.com/blog/${params.slug}`
    }
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://elianatech.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://elianatech.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://elianatech.com/blog/${params.slug}`
      }
    ]
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#0C0C0C] font-mono antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GlassmorphismNav />

      <article className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-[10px] tracking-[0.1em] uppercase text-[#888] no-underline transition-colors hover:text-[#0C0C0C] mb-12">
          <ArrowLeft size={14} className="inline mr-2" /> Back to Insights
        </Link>

        <header className="mb-16">
          <div className="flex gap-5 mb-8">
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#D90019] font-bold">
              <Tag size={12} className="inline mr-1" /> {post.category}
            </span>
            <span className="text-[10px] text-[#888]">
              <Calendar size={12} className="inline mr-1" /> {post.date}
            </span>
          </div>

          <h1 className="font-bebas-neue text-[clamp(48px,6vw,84px)] leading-[0.95] tracking-[0.01em] text-[#0C0C0C] mb-8">{post.title}</h1>

          <div className="flex flex-col">
            <span className="text-[9px] tracking-[0.2em] uppercase text-[#888] mb-1">Written by</span>
            <span className="font-syne text-base font-bold text-[#0C0C0C]">{post.author}</span>
          </div>
        </header>

        <div className="post-content prose prose-stone max-w-none text-base leading-[1.8] text-[#0C0C0C] 
                    prose-headings:font-syne prose-headings:font-bold prose-headings:text-[#0C0C0C] 
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                    prose-p:mb-6">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="mt-20 pt-10 border-t border-[#E4E3DE]">
          <h3 className="font-bebas-neue text-3xl text-[#0C0C0C] mb-6">Ready to scale without the chaos?</h3>
          <p className="mb-8 text-[#555]">
            We build the AI infrastructure that lets you step back from the day-to-day. Get started with the OS Audit - how ai fits into your business.
          </p>
          <Link href="/audit" className="font-dm-mono text-[11px] tracking-[0.2em] uppercase bg-[#D90019] text-[#FAFAF8] py-4 px-8 inline-block transition-opacity hover:opacity-80">
            Take Your OS Audit
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  )
}
