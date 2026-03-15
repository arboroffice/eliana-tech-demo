/**
 * Eliana Tech — GitHub API Integration
 *
 * Creates atomic multi-file commits via the Git Trees API.
 * Used by the blog agent to commit generated posts in a single commit.
 */

const GITHUB_API = 'https://api.github.com'

interface FileToCommit {
  path: string   // e.g. "content/blog/my-post.md"
  content: string // file content
}

interface CommitResult {
  sha: string
  url: string
  filesCommitted: number
}

function getConfig() {
  const token = process.env.GITHUB_TOKEN
  const owner = process.env.GITHUB_REPO_OWNER
  const repo = process.env.GITHUB_REPO_NAME

  if (!token || !owner || !repo) {
    throw new Error('Missing GitHub config: GITHUB_TOKEN, GITHUB_REPO_OWNER, or GITHUB_REPO_NAME')
  }

  return { token, owner, repo }
}

async function githubFetch(endpoint: string, options: RequestInit = {}): Promise<any> {
  const { token } = getConfig()
  const url = endpoint.startsWith('http') ? endpoint : `${GITHUB_API}${endpoint}`

  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API ${response.status}: ${body}`)
  }

  return response.json()
}

/**
 * Creates an atomic commit with multiple files using the Git Trees API.
 *
 * Steps:
 * 1. Get latest commit SHA on master
 * 2. Get base tree SHA from that commit
 * 3. Create blobs for each file
 * 4. Create new tree with all blobs
 * 5. Create commit pointing to new tree
 * 6. Update master ref to new commit
 *
 * Retries once if the ref update fails (stale ref from concurrent push).
 */
export async function createCommitWithFiles(
  files: FileToCommit[],
  message: string
): Promise<CommitResult> {
  const { owner, repo } = getConfig()

  async function attemptCommit(): Promise<CommitResult> {
    // 1. Get latest commit SHA on master
    const ref = await githubFetch(`/repos/${owner}/${repo}/git/ref/heads/master`)
    const latestCommitSha: string = ref.object.sha

    // 2. Get base tree SHA
    const commit = await githubFetch(`/repos/${owner}/${repo}/git/commits/${latestCommitSha}`)
    const baseTreeSha: string = commit.tree.sha

    // 3. Create blobs for each file
    const blobPromises = files.map(file =>
      githubFetch(`/repos/${owner}/${repo}/git/blobs`, {
        method: 'POST',
        body: JSON.stringify({
          content: file.content,
          encoding: 'utf-8',
        }),
      })
    )
    const blobs = await Promise.all(blobPromises)

    // 4. Create new tree
    const tree = await githubFetch(`/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      body: JSON.stringify({
        base_tree: baseTreeSha,
        tree: files.map((file, i) => ({
          path: file.path,
          mode: '100644', // regular file
          type: 'blob',
          sha: blobs[i].sha,
        })),
      }),
    })

    // 5. Create commit
    const newCommit = await githubFetch(`/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      body: JSON.stringify({
        message,
        tree: tree.sha,
        parents: [latestCommitSha],
      }),
    })

    // 6. Update master ref
    await githubFetch(`/repos/${owner}/${repo}/git/refs/heads/master`, {
      method: 'PATCH',
      body: JSON.stringify({
        sha: newCommit.sha,
      }),
    })

    return {
      sha: newCommit.sha,
      url: newCommit.html_url || `https://github.com/${owner}/${repo}/commit/${newCommit.sha}`,
      filesCommitted: files.length,
    }
  }

  // Try once, retry on stale ref
  try {
    return await attemptCommit()
  } catch (error) {
    const msg = error instanceof Error ? error.message : ''
    if (msg.includes('422') || msg.includes('Update is not a fast forward')) {
      console.warn('[GITHUB] Stale ref detected, retrying...')
      return await attemptCommit()
    }
    throw error
  }
}
