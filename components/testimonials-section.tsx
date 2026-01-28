"use client"

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Rodriguez Tree & Lawn",
    text: "We went from missing 70% of after-hours inquiries to capturing every single lead. Bookings up 50% in the first month.",
  },
  {
    name: "Michael Torres",
    company: "Torres Auto Group",
    text: "Our conversion rates increased 85%. Weekend revenue up 40%.",
  },
  {
    name: "Jennifer Walsh",
    company: "Walsh Home Services",
    text: "The AI handles questions 24/7. My team focuses on closing instead of answering the same questions all day.",
  }
]

export function TestimonialsSection() {
  return (
    <section className="relative z-10">
      <div className="bg-white py-20 px-4 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
              Real Results
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-slate-700 mb-6 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-medium text-slate-900">{t.name}</p>
                  <p className="text-slate-500 text-sm">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
