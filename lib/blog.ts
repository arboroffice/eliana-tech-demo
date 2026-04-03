import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
    slug: string
    title: string
    date: string
    author: string
    excerpt: string
    category: string
    content: string
}

export function getAllBlogPosts(): BlogPost[] {
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
        .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map((fileName) => {
            const slug = fileName.replace(/\.mdx?$/, '')
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')
            const { data, content } = matter(fileContents)

            return {
                slug,
                content,
                ...data,
            } as BlogPost
        })

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function getBlogPost(slug: string): BlogPost | null {
    try {
        let fullPath = path.join(postsDirectory, `${slug}.md`)
        if (!fs.existsSync(fullPath)) {
            fullPath = path.join(postsDirectory, `${slug}.mdx`)
        }
        
        if (!fs.existsSync(fullPath)) return null

        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
            slug,
            content,
            ...data,
        } as BlogPost
    } catch (err) {
        return null
    }
}
