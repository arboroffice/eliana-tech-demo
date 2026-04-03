import { industries } from "@/lib/industry-data"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "AI Automation Industries & Locations | Eliana Tech",
  description: "Browse our complete directory of AI automation solutions by industry and location. Specialized systems for SaaS, Agencies, E-commerce, and more across the USA.",
  alternates: {
    canonical: "https://elianatech.com/industries-sitemap"
  }
}

export default function IndustriesIndex() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans antialiased">
      <GlassmorphismNav />
      
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <h1 className="text-6xl font-black tracking-tighter mb-12">Industries <span className="text-amber-500">&</span> Locations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {industries.map((it) => (
            <div key={it.slug} className="space-y-6">
              <Link href={`/industries/${it.slug}`} className="text-2xl font-bold tracking-tight text-amber-500 hover:underline">
                {it.name}
              </Link>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {it.geoKeywords?.map((geo) => (
                  <Link 
                    key={geo} 
                    href={`/industries/${it.slug}/${geo.toLowerCase().replace(/ /g, "-")}`}
                    className="text-xs text-zinc-500 hover:text-white transition-colors"
                  >
                    AI in {geo}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
