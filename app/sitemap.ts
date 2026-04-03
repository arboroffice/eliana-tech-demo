import { MetadataRoute } from 'next'
import { industries } from '../lib/industry-data'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elianatech.com'

    // Main pages (clean single-offer architecture)
    const staticRoutes = [
        '',
        '/about',
        '/audit',
        '/caas',
        '/os/command-center',
        '/industries-sitemap',
        '/faq',
        '/founder',
        '/privacy',
        '/terms'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Industry pages (main categories)
    const industryRoutes = industries.map((industry) => ({
        url: `${baseUrl}/industries/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // 100% Geo-optimized landing pages
    const geoRoutes: MetadataRoute.Sitemap = []
    industries.forEach((industry) => {
        industry.geoKeywords?.forEach((location) => {
            const locationSlug = location.toLowerCase().replace(/ /g, "-")
            geoRoutes.push({
                url: `${baseUrl}/industries/${industry.slug}/${locationSlug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.5,
            })
        })
    })

    // Blog posts (supporting .md and .mdx)
    const blogDirectory = path.join(process.cwd(), 'content/blog')
    let blogRoutes: MetadataRoute.Sitemap = []

    try {
        const filenames = fs.readdirSync(blogDirectory)
        blogRoutes = filenames
            .filter((filename) => filename.endsWith('.md') || filename.endsWith('.mdx'))
            .map((filename) => {
                const slug = filename.replace(/\.mdx?$/, '')
                return {
                    url: `${baseUrl}/blog/${slug}`,
                    lastModified: new Date(),
                    changeFrequency: 'monthly' as const,
                    priority: 0.6,
                }
            })
    } catch (error) {
        // blog might be empty, just skip
    }

    return [...staticRoutes, ...industryRoutes, ...geoRoutes, ...blogRoutes]
}
