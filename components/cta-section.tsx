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
            Are You Serious About Building?
          </h2>

          <p className="text-lg text-slate-600 mb-4 font-light">
            The founders who hesitate at $10,000 are the ones still thinking like employees — trading money for information. The founders who move are the ones who understand that $10,000 of infrastructure that runs forever is worth more than $10,000 of anything else.
          </p>

          <p className="text-slate-500 mb-10">
            Three questions. No pitch. Application only.
          </p>

          <Button
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-10 py-6 text-lg font-medium"
            asChild
          >
            <a href="/apply">
              Apply to the Build Program
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
