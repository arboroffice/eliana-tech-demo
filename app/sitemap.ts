import { MetadataRoute } from 'next'
import { industries } from '../lib/industry-data'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elianatech.com'

    // Main pages
    const staticRoutes = [
        '',
        '/about',
        '/audit',
        '/faq',
        '/founder',
        '/privacy',
        '/terms',
        '/webinar',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Industry pages
    const industryRoutes = industries.map((industry) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Blog posts
    const blogDirectory = path.join(process.cwd(), 'content/blog')
    let blogRoutes: MetadataRoute.Sitemap = []

    try {
        const filenames = fs.readdirSync(blogDirectory)
        blogRoutes = filenames
            .filter((filename) => filename.endsWith('.md'))
            .map((filename) => {
                const slug = filename.replace('.md', '')
                return {
                    url: `${baseUrl}/blog/${slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.6,
                }
            })
    } catch (error) {
        console.error('Error reading blog directory for sitemap:', error)
    }

    return [...staticRoutes, ...industryRoutes, ...blogRoutes]
}
