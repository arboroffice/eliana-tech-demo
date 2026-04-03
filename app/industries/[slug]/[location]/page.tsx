import { Metadata } from "next"
import { notFound } from "next/navigation"
import { industries } from "@/lib/industry-data"
import { IndustryClient } from "../IndustryClient"

export async function generateMetadata({ params }: { params: { slug: string; location: string } }): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}

  // Format the location name (e.g. san-francisco -> San Francisco)
  const locationName = params.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

  return {
    title: `AI Automation for ${industry.name} in ${locationName} | Eliana Tech`,
    description: `Leading AI infrastructure and automation solutions for ${industry.name} based in ${locationName}. ${industry.hook.slice(0, 80)}...`,
    alternates: {
      canonical: `https://elianatech.com/industries/${params.slug}/${params.location}`,
    },
    openGraph: {
      title: `AI Infrastructure for ${industry.name} | ${locationName}`,
      description: `${industry.hook} We build autonomous AI operations for ${industry.name} in ${locationName} and nationwide.`,
      url: `https://elianatech.com/industries/${params.slug}/${params.location}`,
      type: "website",
    },
    keywords: [
      `AI for ${industry.name.toLowerCase()} in ${locationName}`,
      `${industry.name.toLowerCase()} automation ${locationName}`,
      `${locationName} AI agency`,
      `${locationName} business automation`,
      `Eliana Tech ${locationName}`
    ].join(", "),
  }
}

export async function generateStaticParams() {
  const params: { slug: string; location: string }[] = []
  
  industries.forEach((industry) => {
    industry.geoKeywords?.forEach((location) => {
      // Slugify the location name for the URL
      const locationSlug = location.toLowerCase().replace(/ /g, "-")
      params.push({
        slug: industry.slug,
        location: locationSlug,
      })
    })
  })

  return params
}

export default function IndustryLocationPage({ params }: { params: { slug: string; location: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)
  
  if (!industry) {
    notFound()
  }

  const locationName = params.location.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

  // Inject the location context into the industry data for the client component
  const localizedIndustry = {
    ...industry,
    name: `${industry.name} in ${locationName}`,
    hook: industry.hook.replace(/\./g, "") + ` for ${locationName} operations.`,
    localizedName: locationName
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `AI Automation for ${industry.name} in ${locationName}`,
    "description": industry.hook + " Specialized for businesses in " + locationName,
    "provider": {
      "@type": "Organization",
      "name": "Eliana Tech",
      "url": "https://elianatech.com"
    },
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Local AI Solutions",
      "itemListElement": (industry.services.singleSystems.examples || []).map(ex => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": ex.title,
          "description": ex.detail
        }
      }))
    },
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": (industry.faq || []).map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <IndustryClient industry={localizedIndustry as any} />
    </>
  )
}
