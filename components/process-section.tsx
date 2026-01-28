"use client"

const steps = [
  {
    number: "01",
    title: "Apply for Your AI Audit",
    description: "Free. Takes 5 minutes. Tell us about your business and where you're stuck.",
  },
  {
    number: "02",
    title: "We Diagnose Your Business",
    description: "We find the leaks, map the opportunities, and show you what's possible with AI.",
  },
  {
    number: "03",
    title: "Choose Your Path",
    description: "The Container (learn with Mia) or Done-For-You (we handle everything). Your call.",
  },
  {
    number: "04",
    title: "Transform",
    description: "Systems installed. Operations automated. Freedom unlocked.",
  },
]

export function ProcessSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-slate-300 text-sm font-medium mb-6">
            Simple. Intentional. Effective.
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light">
            Four steps from overwhelmed to operating in flow.
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
