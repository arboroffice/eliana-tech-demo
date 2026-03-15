"use client"

import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { useState } from "react"
import type { BlogPost } from "@/lib/blog"

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
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`filter-btn ${active === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="blog-grid">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
            <div className="card-top">
              <span className="card-category">{post.category}</span>
              <span className="card-date">
                <Calendar size={12} className="inline mr-1" /> {post.date}
              </span>
            </div>
            <h3 className="card-title">{post.title}</h3>
            <p className="card-excerpt">{post.excerpt}</p>
            <div className="card-footer">
              <span className="read-more">
                Read Article <ArrowRight size={14} className="inline ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .filter-btn {
          font-family: var(--font-dm-mono), monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 8px 20px;
          background: #F2F1ED;
          color: #888;
          border: 1px solid #E4E3DE;
          cursor: pointer;
          transition: all 0.2s;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: #0C0C0C;
          color: #FAFAF8;
          border-color: #0C0C0C;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1px;
          background: #CCCBC5;
          border: 1px solid #CCCBC5;
        }

        .blog-card {
          background: #FAFAF8;
          padding: 40px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: background 0.2s;
        }

        .blog-card:hover {
          background: #F2F1ED;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .card-category {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #D90019;
          font-weight: 700;
        }

        .card-date {
          font-size: 10px;
          color: #888;
        }

        .card-title {
          font-family: var(--font-syne), sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0C0C0C;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .card-excerpt {
          font-size: 13px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .card-footer {
          padding-top: 24px;
          border-top: 1px solid #E4E3DE;
        }

        .read-more {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0C0C0C;
          font-weight: 700;
        }

        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
