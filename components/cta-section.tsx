"use client"

import { Button } from "./ui/button"

export function CTASection() {
  return (
    <section className="relative z-10">
      <div className="bg-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Every Transformation Starts With an Audit
          </h2>

          <p className="text-lg text-slate-600 mb-4 font-light">
            Apply for yours — it's free. In 5 minutes, we'll understand your business. Then we'll show you exactly where AI can give you your time back.
          </p>

          <p className="text-slate-500 mb-10">
            No pitch. No pressure. Just clarity.
          </p>

          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg font-medium"
            asChild
          >
            <a href="/audit">
              Apply for Your Free Audit
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
