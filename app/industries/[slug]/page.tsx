import { notFound } from "next/navigation"
import { industries } from "@/lib/industry-data"
import { IndustryClient } from "./IndustryClient"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug)
  if (!industry) return {}

  return {
    title: `AI Infrastructure for ${industry.name} — Eliana Tech`,
    description: industry.problem.slice(0, 160),
    openGraph: {
      title: `AI Infrastructure for ${industry.name} | Operation Architecture`,
      description: industry.hook,
      type: "website",
    },
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return <IndustryClient industry={industry} />
}
