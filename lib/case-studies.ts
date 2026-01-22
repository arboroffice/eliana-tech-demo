import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/case-studies')

export interface CaseStudy {
    slug: string
    title: string
    industry: string
    description: string
    testimonial: {
        quote: string
        author: string
        role: string
    }
    results: {
        metric: string
        value: string
        description: string
    }[]
    content: string
    challenge: string
    solution: string
}

export function getAllCaseStudies(): CaseStudy[] {
    // Get file names under /content/case-studies
    if (!fs.existsSync(postsDirectory)) {
        return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get slug
        const slug = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        // Basic parsing for list view (challenge/solution not strictly needed but good to have consistent types)
        return {
            slug,
            content,
            challenge: "",
            solution: "",
            ...data,
        } as CaseStudy
    })

    return allPostsData
}

export function getCaseStudyData(slug: string): CaseStudy | null {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const { data, content } = matter(fileContents)

        // Parse Challenge and Solution sections
        const challengeMatch = content.match(/## Challenge\s+([\s\S]*?)(?=## Solution|$)/i);
        const solutionMatch = content.match(/## Solution\s+([\s\S]*)/i);

        const challenge = challengeMatch ? challengeMatch[1].trim() : "";
        const solution = solutionMatch ? solutionMatch[1].trim() : "";

        return {
            slug,
            content,
            challenge,
            solution,
            ...data,
        } as CaseStudy
    } catch (err) {
        return null
    }
}
