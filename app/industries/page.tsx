"use client"

import Link from "next/link"
import { ArrowRight, Search, Zap, Building2, TrendingUp, Cpu, Users, GraduationCap, ShoppingCart, HeartPulse, Scale, Home, Car, Scissors, Briefcase } from "lucide-react"
import { useState } from "react"
import { industries } from "@/lib/industry-data"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

export default function IndustriesIndex() {
  const [search, setSearch] = useState("")

  const filtered = industries.filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) || 
    i.subNiches?.some(n => n.toLowerCase().includes(search.toLowerCase()))
  )

  const getIcon = (slug: string) => {
    if (slug.includes("home-services")) return <Home className="w-5 h-5" />
    if (slug.includes("medical")) return <HeartPulse className="w-5 h-5" />
    if (slug.includes("legal")) return <Scale className="w-5 h-5" />
    if (slug.includes("real-estate")) return <Building2 className="w-5 h-5" />
    if (slug.includes("ecommerce")) return <ShoppingCart className="w-5 h-5" />
    if (slug.includes("agencies")) return <Users className="w-5 h-5" />
    if (slug.includes("saas")) return <Cpu className="w-5 h-5" />
    if (slug.includes("course-creators")) return <GraduationCap className="w-5 h-5" />
    if (slug.includes("automotive")) return <Car className="w-5 h-5" />
    if (slug.includes("beauty")) return <Scissors className="w-5 h-5" />
    return <Briefcase className="w-5 h-5" />
  }

  return (
    <div className="bg-[#FAFAF8] text-[#0C0C0C] min-h-screen py-32 px-6 md:px-[80px]">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-24 text-center max-w-[800px] mx-auto">
          <ScrollReveal>
             <h4 className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-bold mb-8">Infrastructure Repository</h4>
             <h1 className="text-[56px] md:text-[92px] font-bold tracking-tighter leading-[0.9] mb-12">Industry Playbooks.</h1>
             <p className="text-[18px] md:text-[22px] text-[#555] font-light leading-relaxed mb-16">
              We have architected autonomous systems for over 40 distinct sectors. <br />
              <span className="text-[#0C0C0C] font-medium italic underline decoration-[#D90019]/30">Find your specialized infrastructure.</span>
             </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2} className="relative max-w-[600px] mx-auto">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888]" />
             <input 
                type="text" 
                placeholder="Search industries, niches, or keywords..." 
                className="w-full bg-white border border-[#E4E3DE] py-6 pl-16 pr-8 text-[16px] focus:outline-none focus:border-[#D90019] transition-all shadow-sm rounded-none placeholder:text-[#888]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />
          </ScrollReveal>
        </header>

        {filtered.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filtered.map((ind, i) => (
              <StaggerItem key={ind.slug} className="group relative bg-white border border-[#E4E3DE] p-12 hover:border-[#D90019]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-[#F2F1ED] flex items-center justify-center group-hover:bg-[#D90019] group-hover:text-white transition-all duration-500">
                    {getIcon(ind.slug)}
                  </div>
                  <TrendingUp className="w-5 h-5 text-[#E4E3DE] group-hover:text-[#D90019]/20 transition-all" />
                </div>
                
                <h3 className="text-[28px] font-bold tracking-tighter mb-6 underline decoration-[#E4E3DE] decoration-2 group-hover:decoration-[#D90019]/20 transition-all">{ind.name}</h3>
                <p className="text-[#888] text-[15px] leading-relaxed mb-12 group-hover:text-[#555] transition-colors">{ind.hook}</p>
                
                <div className="flex flex-wrap gap-2 mb-12">
                   {ind.subNiches?.slice(0, 3).map((n, idx) => (
                     <span key={idx} className="text-[10px] uppercase font-bold tracking-widest text-[#888] px-3 py-1 bg-[#F2F1ED] border border-[#E4E3DE] group-hover:border-[#D90019]/10">{n}</span>
                   ))}
                </div>

                <Link href={`/industries/${ind.slug}`} className="flex items-center gap-4 text-[13px] font-bold uppercase tracking-widest text-[#0C0C0C] group-hover:text-[#D90019] transition-all border-t border-[#F2F1ED] pt-8">
                  View Full Playbook <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <div className="absolute top-0 right-0 p-8 text-[40px] font-black text-[#F2F1ED]/40 group-hover:text-[#F2F1ED] transition-colors italic leading-none pointer-events-none select-none">
                  {i + 1 < 10 ? `0${i + 1}` : i + 1}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-40 border border-dashed border-[#E4E3DE]">
             <Zap className="w-12 h-12 text-[#E4E3DE] mx-auto mb-8" />
             <p className="text-[#888] text-[20px] font-light">We specialize in systems for over 100+ niches. <br /> Try another keyword or contact us for custom architecture.</p>
          </div>
        )}
      </div>
      
      <footer className="mt-40 pt-20 border-t border-[#E4E3DE] text-center">
         <p className="text-[11px] uppercase tracking-[0.6em] text-[#888] font-bold mb-8 italic">Operating System Library v2.4</p>
         <div className="flex justify-center gap-12 font-light text-[#888] text-[14px]">
            <span>Verified Efficiency.</span>
            <span>Hard-Coded Growth.</span>
            <span>Architected Profit.</span>
         </div>
      </footer>
    </div>
  )
}
