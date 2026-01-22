import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://elianatech.com'

    // Main pages
    const routes = [
        '',
        '/about',
        '/contact',
        '/features',
        '/faq',
        '/privacy',
        '/terms',
        '/audit',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Industry pages
    const industries = [
        '/barbers-salons',
        '/car-dealerships',
        '/construction-trades',
        '/dentists',
        '/ecommerce',
        '/education-training',
        '/energy-solar',
        '/finance',
        '/food-hospitality',
        '/health-wellness',
        '/healthcare',
        '/home-services',
        '/industrial-b2b-services',
        '/legal-insurance',
        '/manufacturing-production',
        '/oil-gas',
        '/private-equity',
        '/professional-services',
        '/real-estate',
        '/restaurants',
        '/retail',
        '/tech-software',
        '/transportation-logistics',
        '/wholesale-distribution',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...industries]
}
