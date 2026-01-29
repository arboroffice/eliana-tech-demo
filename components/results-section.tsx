"use client"

const results = [
  {
    metric: "70 → 25",
    unit: "hours/week",
    description: "Owner reclaimed 45 hours per week after AI handled scheduling, follow-ups, and reporting.",
  },
  {
    metric: "312",
    unit: "calls handled by AI monthly",
    description: "Inbound calls answered, qualified, and routed, without a single human picking up.",
  },
  {
    metric: "47%",
    unit: "increase in lead conversion",
    description: "AI follow-up sequences turned cold leads into booked appointments on autopilot.",
  },
  {
    metric: "$240K",
    unit: "saved in annual labor costs",
    description: "Automated operations replaced 4 full-time roles across customer service and dispatch.",
  },
]

export function ResultsSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6">
            Real Outcomes
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Businesses We've Transformed
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            These are the kinds of results our clients experience when AI runs their operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-white mb-1">{result.metric}</div>
              <div className="text-sm text-slate-400 font-medium mb-4">{result.unit}</div>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
