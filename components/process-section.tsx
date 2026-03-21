"use client"

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Three questions: What are you building? What have you already tried? Why now? Application only.",
  },
  {
    number: "02",
    title: "We Review",
    description: "We filter for founders who are serious. If you're ready, we reach out within 48 hours.",
  },
  {
    number: "03",
    title: "We Build Together",
    description: "7-day install. We build your systems, content, agents, and infrastructure alongside you. Then 30 days of training. Not coaching — building.",
  },
  {
    number: "04",
    title: "You're Running",
    description: "LLMs trained. Content waterfall live. Agents working. Business running without you as the bottleneck.",
  },
]

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6">
            Application Only. Scarcity Is Real.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            The application does the selling.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-white/20 mb-4">{step.number}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-sm font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
