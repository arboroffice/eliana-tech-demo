import { NextResponse } from 'next/server'
import { getAllBlogPosts } from '@/lib/blog'
import { generateBatch, buildMarkdownFile } from '@/lib/blog-agent'
import { createCommitWithFiles } from '@/lib/github'
import { db } from '@/lib/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const maxDuration = 300

/**
 * Weekly blog generation cron job.
 * Generates 10 AI-written blog posts and commits them to GitHub.
 * Triggered every Monday at 8AM UTC via Vercel cron.
 */
export async function GET(request: Request) {
  const startTime = Date.now()

  try {
    // Auth check
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Step 1: Read existing posts
    const existingPosts = getAllBlogPosts()
    console.log(`[BLOG-CRON] Found ${existingPosts.length} existing posts`)

    // Step 2: Generate batch of 10 posts
    const result = await generateBatch(existingPosts, 10)

    if (result.successful.length === 0) {
      const logEntry = {
        timestamp: new Date(),
        status: 'failed',
        reason: 'No posts generated successfully',
        failures: result.failed.map(f => ({ slug: f.topic.slug, error: f.error })),
        durationMs: Date.now() - startTime,
      }
      await logToFirestore(logEntry)

      return NextResponse.json(
        { success: false, error: 'All post generations failed', failures: result.failed.length },
        { status: 500 }
      )
    }

    // Step 3: Build markdown files and commit to GitHub
    const files = result.successful.map(post => ({
      path: `content/blog/${post.slug}.md`,
      content: buildMarkdownFile(post),
    }))

    const commitResult = await createCommitWithFiles(
      files,
      `blog: add ${files.length} AI-generated posts [auto]`
    )

    console.log(`[BLOG-CRON] Committed ${commitResult.filesCommitted} files: ${commitResult.sha}`)

    // Step 4: Log to Firestore (fire-and-forget)
    const logEntry = {
      timestamp: new Date(),
      status: 'success',
      postsGenerated: result.successful.length,
      postsFailed: result.failed.length,
      slugs: result.successful.map(p => p.slug),
      commitSha: commitResult.sha,
      commitUrl: commitResult.url,
      failures: result.failed.map(f => ({ slug: f.topic.slug, error: f.error })),
      durationMs: Date.now() - startTime,
    }
    await logToFirestore(logEntry)

    return NextResponse.json({
      success: true,
      postsGenerated: result.successful.length,
      postsFailed: result.failed.length,
      slugs: result.successful.map(p => p.slug),
      commitSha: commitResult.sha,
      durationMs: Date.now() - startTime,
    })

  } catch (error) {
    console.error('[BLOG-CRON] Fatal error:', error)

    const logEntry = {
      timestamp: new Date(),
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      durationMs: Date.now() - startTime,
    }
    await logToFirestore(logEntry)

    return NextResponse.json(
      { success: false, error: 'Blog generation failed' },
      { status: 500 }
    )
  }
}

async function logToFirestore(data: Record<string, any>) {
  try {
    await addDoc(collection(db, 'blog_generation_log'), data)
  } catch (err) {
    console.error('[BLOG-CRON] Firestore logging failed (non-fatal):', err)
  }
}
