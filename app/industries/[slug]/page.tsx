import { notFound } from "next/navigation"
import { industries } from "@/lib/industry-data"
import { IndustryClient } from "./IndustryClient"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}

  const geoText = industry.geoKeywords?.slice(0, 5).join(", ") || "Nationwide"
  const subNicheText = industry.subNiches?.slice(0, 3).join(", ") || industry.name

  return {
    title: `AI Automation for ${industry.name} | ${geoText} | Eliana Tech`,
    description: `${industry.hook} ${industry.problem.slice(0, 120)}... We build AI infrastructure for ${subNicheText} and more.`,
    openGraph: {
      title: `AI Infrastructure for ${industry.name} | Eliana Tech`,
      description: industry.hook + " " + (industry.result || industry.problem.slice(0, 100)),
      type: "website",
    },
    keywords: [
      `AI for ${industry.name.toLowerCase()}`,
      `${industry.name.toLowerCase()} automation`,
      `${industry.name.toLowerCase()} AI systems`,
      ...(industry.subNiches?.slice(0, 10).map(n => `AI for ${n.toLowerCase()}`) || []),
      ...(industry.geoKeywords?.slice(0, 10).map(g => `${industry.name.toLowerCase()} AI ${g}`) || []),
    ].join(", "),
  }
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return <IndustryClient industry={industry} />
}
