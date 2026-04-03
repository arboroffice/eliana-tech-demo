import { NanoBananaOrgCharts } from "@/components/nano-banana-org-charts"
import { ArchitectureMap } from "@/components/architecture-map-section"

export const metadata = {
  title: "Nano Banana AI Infrastructure — Org Charts",
  description: "Autonomous industry org charts for manufacturing, healthcare, real estate, and e-commerce.",
}

export default function OrgChartsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <div className="py-32 px-6 border-b border-black/5 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#D90019] font-bold tracking-[1em] uppercase text-[10px] mb-8">System Preview</p>
          <h1 className="font-bebas text-7xl sm:text-9xl uppercase tracking-tighter leading-[0.8]">
            Nano Banana<br />
            <span className="text-gray-200">Infrastructure.</span>
          </h1>
          <p className="max-w-xl text-gray-400 font-inter mt-10 text-xl font-light leading-relaxed">
            The organizational architecture for the autonomous era. Specialized AI agents, governed by a central executive brain, integrated into your industry's legacy backbone.
          </p>
        </div>
      </div>

      <NanoBananaOrgCharts />
      
      <div className="py-24 border-t border-black bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D90019] font-bold tracking-[0.5em] uppercase text-[12px] mb-4">Underlying Matrix</p>
          <h2 className="font-bebas text-5xl uppercase mb-16 underline decoration-[#D90019] hover:decoration-black transition-all">The Technical Blueprint</h2>
          <ArchitectureMap />
        </div>
      </div>
    </main>
  )
}
