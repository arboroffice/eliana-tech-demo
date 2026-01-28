"use client"

const industries = [
    "Home Services",
    "Automotive",
    "Real Estate",
    "Healthcare",
    "Restaurants",
    "Salons & Spas",
    "Construction",
    "Retail",
    "Professional Services"
]

export function IndustriesSection() {
    return (
        <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        We've Built Systems For
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {industries.map((industry, idx) => (
                        <span
                            key={idx}
                            className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm"
                        >
                            {industry}
                        </span>
                    ))}
                    <span className="px-5 py-2 rounded-full bg-white text-slate-900 text-sm font-medium">
                        And 50+ more
                    </span>
                </div>

                <p className="text-center text-slate-400 text-lg font-light">
                    "If your business has customers, leads, and operations — we can help."
                </p>
            </div>
        </section>
    )
}
