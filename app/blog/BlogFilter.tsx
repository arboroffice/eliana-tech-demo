"use client"

import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { useState } from "react"
import type { BlogPost } from "../../lib/blog"

const CATEGORY_ORDER = [
  "All",
  "Strategy",
  "AI Implementation",
  "Industry Guides",
  "Frameworks",
  "Tools & Tech",
  "Case Studies",
]

export default function BlogFilter({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState("All")

  const allCategories = Array.from(new Set(posts.map((p) => p.category))).sort()
  const categories = [
    "All",
    ...CATEGORY_ORDER.filter((c) => c !== "All" && allCategories.includes(c)),
    ...allCategories.filter((c) => !CATEGORY_ORDER.includes(c)),
  ]

  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              active === cat
                ? "bg-white text-black border-white"
                : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:border-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {filtered.map((post) => (
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
    </>
  )
}
