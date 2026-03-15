/**
 * Eliana Tech — AI Blog Agent
 *
 * Generates SEO-optimized blog posts in Mia's voice using Claude.
 * 1. Plans 10 unique topics (avoids existing posts)
 * 2. Generates each post with internal links, proper structure, CTA
 * 3. Returns markdown files ready for commit to content/blog/
 */

import Anthropic from '@anthropic-ai/sdk'
import type { BlogPost } from './blog'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

// ─── Types ──────────────────────────────────────────────────

export interface TopicPlan {
  title: string
  slug: string
  category: string
  angle: string
  targetKeywords: string[]
}

export interface GeneratedBlogPost {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  category: string
  content: string
}

export interface GenerationResult {
  successful: GeneratedBlogPost[]
  failed: { topic: TopicPlan; error: string }[]
}

// ─── Topic Planning ─────────────────────────────────────────

export async function generateTopicPlan(
  existingPosts: BlogPost[],
  count: number = 10
): Promise<TopicPlan[]> {
  const existingSlugs = existingPosts.map(p => p.slug)
  const existingTitles = existingPosts.map(p => p.title)

  // Count categories for distribution awareness
  const categoryCounts: Record<string, number> = {}
  for (const post of existingPosts) {
    categoryCounts[post.category] = (categoryCounts[post.category] || 0) + 1
  }

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 4000,
    system: `You are an SEO content strategist for Eliana Tech, a business automation and AI implementation agency.

Your job is to pick ${count} blog post topics that:
- Are highly searchable (target real keywords business owners Google)
- Cover different categories to maintain breadth
- NEVER duplicate existing posts (check slugs AND angles)
- Appeal to SMB owners considering AI/automation investment
- Can naturally link back to /audit (our free business automation audit)

Categories to use: Strategy, Frameworks, AI Implementation, Tools & Tech, Industry Guides, Case Studies, ROI & Analytics, Operations

Respond with ONLY a JSON array of topic objects. No markdown, no explanation.`,
    messages: [
      {
        role: 'user',
        content: `═══ EXISTING POSTS (${existingPosts.length} total) ═══
${existingTitles.map((t, i) => `- [${existingSlugs[i]}] ${t} (${existingPosts[i].category})`).join('\n')}

═══ CATEGORY DISTRIBUTION ═══
${Object.entries(categoryCounts).map(([cat, count]) => `${cat}: ${count} posts`).join('\n')}

═══ INSTRUCTIONS ═══
Generate ${count} new blog post topics. Each topic must have:
- title: SEO-optimized title (50-65 chars ideal)
- slug: kebab-case URL slug (must NOT match any existing slug)
- category: one of the categories listed above
- angle: 1-sentence description of the unique angle/hook
- targetKeywords: array of 3-5 long-tail keywords to target

Return ONLY a valid JSON array. Example format:
[{"title": "...", "slug": "...", "category": "...", "angle": "...", "targetKeywords": ["...", "..."]}]`,
      },
    ],
  })

  const text = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map(block => block.text)
    .join('')

  // Parse JSON from response (handle potential markdown wrapping)
  const jsonMatch = text.match(/\[[\s\S]*\]/)
  if (!jsonMatch) {
    throw new Error('Failed to parse topic plan from Claude response')
  }

  const topics: TopicPlan[] = JSON.parse(jsonMatch[0])

  // Validate: no duplicate slugs with existing posts or within batch
  const seenSlugs = new Set(existingSlugs)
  const validTopics: TopicPlan[] = []

  for (const topic of topics) {
    if (seenSlugs.has(topic.slug)) {
      console.warn(`[BLOG-AGENT] Skipping duplicate slug: ${topic.slug}`)
      continue
    }
    seenSlugs.add(topic.slug)
    validTopics.push(topic)
  }

  return validTopics.slice(0, count)
}

// ─── Post Generation ────────────────────────────────────────

function buildBlogSystemPrompt(): string {
  return `You are writing a blog post for Eliana Tech as Mia Louviere, founder and systems architect.

VOICE & TONE:
- "Smart friend who happens to be a systems architect" — direct, confident, data-driven
- NEVER open with "In today's..." or "As a business owner..." or any filler opener
- Lead with the reader's pain point or a surprising reality they haven't considered
- Use specific numbers: dollar amounts, percentages, time savings, real benchmarks
- Short paragraphs (2-4 sentences max)
- No filler, no throat-clearing

STRUCTURE:
- Open with a hook that names a specific problem or cost
- Use H2 (##) for major sections, H3 (###) for subsections
- Include bulleted/numbered lists for actionable steps
- Bold (**) key metrics, findings, and takeaways
- NO code blocks or technical syntax — this is for business owners
- 1500-2500 words

INTERNAL LINKS:
- Include 2-3 links to related existing posts using format: [Link Text](/blog/slug)
- These should feel natural, not forced

CTA:
- End every post with a clear call-to-action section
- Direct readers to take our free audit at /audit
- Example: "Ready to see where AI fits in your business? [Take our free Business Automation Audit](/audit) — it takes 3 minutes and shows you exactly where you're leaving money on the table."

OUTPUT FORMAT:
Respond with ONLY a JSON object containing these fields:
- title: the post title
- excerpt: 1-sentence summary for card preview (under 160 chars)
- category: the assigned category
- content: the full markdown body (no frontmatter)

No markdown wrapping around the JSON. Just the raw JSON object.`
}

export async function generateBlogPost(
  topic: TopicPlan,
  existingPosts: BlogPost[],
  date: string
): Promise<GeneratedBlogPost> {
  // Pick 5-8 related posts for internal linking context
  const relatedPosts = existingPosts
    .filter(p => p.category === topic.category || topic.targetKeywords.some(kw =>
      p.title.toLowerCase().includes(kw.split(' ')[0].toLowerCase())
    ))
    .slice(0, 8)

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 8000,
    system: buildBlogSystemPrompt(),
    messages: [
      {
        role: 'user',
        content: `═══ TOPIC ═══
Title: ${topic.title}
Category: ${topic.category}
Angle: ${topic.angle}
Target Keywords: ${topic.targetKeywords.join(', ')}

═══ RELATED POSTS (for internal linking) ═══
${relatedPosts.map(p => `- [${p.slug}] "${p.title}" (${p.category})`).join('\n') || 'None in this category yet.'}

═══ INSTRUCTIONS ═══
Write a 1500-2500 word blog post on this topic. Include 2-3 internal links to the related posts above (use format [Text](/blog/slug)). End with a CTA to /audit.

Return ONLY a valid JSON object:
{"title": "...", "excerpt": "...", "category": "...", "content": "..."}`,
      },
    ],
  })

  const text = message.content
    .filter((block): block is Anthropic.TextBlock => block.type === 'text')
    .map(block => block.text)
    .join('')

  // Parse JSON (handle potential markdown wrapping)
  const jsonMatch = text.match(/\{[\s\S]*\}/)
  if (!jsonMatch) {
    throw new Error('Failed to parse blog post from Claude response')
  }

  const parsed = JSON.parse(jsonMatch[0])

  return {
    slug: topic.slug,
    title: parsed.title || topic.title,
    date,
    author: 'Mia Eliana',
    excerpt: parsed.excerpt,
    category: parsed.category || topic.category,
    content: parsed.content,
  }
}

// ─── Markdown Builder ───────────────────────────────────────

export function buildMarkdownFile(post: GeneratedBlogPost): string {
  // Escape quotes in frontmatter values
  const escapeYaml = (str: string) => str.replace(/"/g, '\\"')

  return `---
slug: ${post.slug}
title: "${escapeYaml(post.title)}"
date: "${post.date}"
author: "${escapeYaml(post.author)}"
excerpt: "${escapeYaml(post.excerpt)}"
category: "${escapeYaml(post.category)}"
---

${post.content}
`
}

// ─── Batch Orchestrator ─────────────────────────────────────

export async function generateBatch(
  existingPosts: BlogPost[],
  count: number = 10
): Promise<GenerationResult> {
  // Step 1: Generate topic plan
  console.log(`[BLOG-AGENT] Generating ${count} topics...`)
  const topics = await generateTopicPlan(existingPosts, count)
  console.log(`[BLOG-AGENT] Got ${topics.length} valid topics`)

  // Step 2: Calculate staggered dates (Mon-Fri, 2/day)
  const today = new Date()
  // Find next Monday (or today if Monday)
  const monday = new Date(today)
  const dayOfWeek = monday.getDay()
  const daysUntilMonday = dayOfWeek === 1 ? 0 : (8 - dayOfWeek) % 7 || 7
  monday.setDate(monday.getDate() + daysUntilMonday)

  const dates: string[] = []
  for (let i = 0; i < topics.length; i++) {
    const dayOffset = Math.floor(i / 2) // 0,0,1,1,2,2,3,3,4,4
    const postDate = new Date(monday)
    postDate.setDate(postDate.getDate() + dayOffset)
    dates.push(postDate.toISOString().split('T')[0])
  }

  // Step 3: Generate each post sequentially
  const result: GenerationResult = { successful: [], failed: [] }

  for (let i = 0; i < topics.length; i++) {
    const topic = topics[i]
    const date = dates[i] || dates[dates.length - 1]

    try {
      console.log(`[BLOG-AGENT] Generating post ${i + 1}/${topics.length}: ${topic.slug}`)
      const post = await generateBlogPost(topic, existingPosts, date)
      result.successful.push(post)
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      console.error(`[BLOG-AGENT] Failed to generate ${topic.slug}: ${errorMsg}`)
      result.failed.push({ topic, error: errorMsg })
    }
  }

  console.log(`[BLOG-AGENT] Batch complete: ${result.successful.length} succeeded, ${result.failed.length} failed`)
  return result
}
