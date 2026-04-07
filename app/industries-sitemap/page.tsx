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
            <div key={it.slug} className="space-y-4 p-8 bg-zinc-900/40 border border-zinc-800 hover:border-amber-500/50 transition-all rounded-2xl group">
              <Link href={`/industries/${it.slug}`} className="text-3xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
                {it.name}
              </Link>
              <p className="text-sm text-zinc-500 leading-relaxed">{it.hook}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
