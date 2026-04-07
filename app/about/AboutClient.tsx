"use client"

import Link from "next/link"
import Image from "next/image"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"

export default function AboutClient() {
  return (
    <div className="font-sans antialiased">
      <GlassmorphismNav />

      {/* ─── HERO — BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white pt-40 pb-24 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Built By Operators</p>
          <h1 className="font-bebas text-6xl sm:text-8xl lg:text-[100px] leading-[0.88] tracking-tight uppercase mb-8">
            We Define, Design,<br />
            and Build <span className="text-[#D90019]">AI-Native</span><br />
            Businesses.
          </h1>
          <p className="text-[19px] text-white/80 font-light leading-relaxed max-w-2xl">
            Two operators who built it for themselves first — then opened the doors.
          </p>
        </div>
      </section>

      {/* ─── FOUNDERS — WHITE ─── */}
      <section className="bg-[#FAFAF8] text-[#0C0C0C] py-24 px-6 md:px-[80px]">
        <div className="max-w-[1240px] mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-12">The Team</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MIA */}
            <div className="bg-white border border-[#E4E3DE]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/founders/mia.jpg" alt="Mia — Co-Founder" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D90019]">Co-Founder · Operations</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-bebas text-5xl tracking-tight uppercase mb-4">Mia</h2>
                <p className="text-[16px] text-[#333] leading-relaxed mb-4">
                  Mia dropped out at 14 to scale her family's seven-figure business. She spent years deep in operations, learning how to build systems that allow a company to survive its own growth.
                </p>
                <p className="text-[16px] text-[#333] leading-relaxed mb-4">
                  She learned that <strong className="text-[#0C0C0C]">flow beats force</strong> every single time. She became obsessed with removing friction — not with tools that remind you, but with systems that actually execute.
                </p>
                <p className="text-[16px] text-[#333] leading-relaxed">
                  At Elianatech, Mia architects the automation infrastructure — the pipelines, the agents, the operating system that makes every client's business run without them.
                </p>
              </div>
            </div>

            {/* TYLER */}
            <div className="bg-white border border-[#E4E3DE]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/images/founders/tyler.jpg" alt="Tyler — Co-Founder" fill className="object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D90019]">Co-Founder · Growth</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-bebas text-5xl tracking-tight uppercase mb-4">Tyler</h2>
                <p className="text-[16px] text-[#333] leading-relaxed mb-4">
                  Tyler scaled and sold multiple brands through organic media and brand strategy. He's lived the cycle of explosive growth followed by operational collapse — and figured out how to break it.
                </p>
                <p className="text-[16px] text-[#333] leading-relaxed mb-4">
                  Every company he's built hit the same wall: the <strong className="text-[#0C0C0C]">back-end couldn't keep up with the front-end</strong>. Growth without systems is just a trap he's escaped too many times to count.
                </p>
                <p className="text-[16px] text-[#333] leading-relaxed">
                  At Elianatech, Tyler leads growth strategy and helps clients build the brand infrastructure to match their AI-native operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STORY — RED ─── */}
      <section className="bg-[#D90019] text-white py-24 px-6 md:px-[80px]">
        <div className="max-w-[1000px] mx-auto">
          <p className="text-[11px] tracking-[0.5em] uppercase text-white/70 font-black mb-6">Why This Exists</p>
          <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase mb-10">
            Two Halves of the Same Whole.
          </h2>
          <div className="space-y-6 text-[18px] text-white/90 font-light leading-relaxed">
            <p>
              When Mia and Tyler met in 2023, they realized they were looking at the same problem from two sides. Systems meets Business Growth. Not another agency selling AI hype — two operators who had already done it for themselves.
            </p>
            <p>
              Other founders saw their results and began asking: <strong className="text-white">"I wish I had someone like you for my business."</strong> They didn't just need a consultant. They needed someone to build the AI infrastructure and actually run it.
            </p>
            <p>
              So they built Elianatech. In one week, they install an AI system trained on your business, your data, and your operations — running continuously, learning over time, compounding forever.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA — BLACK ─── */}
      <section className="bg-[#0C0C0C] text-white py-32 px-6 md:px-[80px]">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[0.5em] uppercase text-[#D90019] font-black mb-6">Get Started</p>
              <h2 className="font-bebas text-5xl md:text-7xl leading-none tracking-tight uppercase mb-6">
                Install Your<br />
                AI System<br />
                <span className="text-[#D90019]">Today.</span>
              </h2>
              <p className="text-[17px] text-white/80 font-light leading-relaxed">
                We review your business and show you exactly what your new infrastructure would look like. Free, no commitment.
              </p>
            </div>
            <div className="bg-[#1a1a1a] border border-white/10 p-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D90019] block mb-4">Free · No Commitment</span>
              <h3 className="font-bebas text-4xl uppercase mb-4">Free AI Audit</h3>
              <p className="text-[15px] text-white/70 leading-relaxed mb-8">
                We map out exactly where your time is being lost and what it would look like to get it back.
              </p>
              <Link href="/audit" className="inline-flex items-center gap-3 bg-[#D90019] text-white px-8 py-4 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                Get Started <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .font-bebas { font-family: var(--font-bebas-neue), sans-serif; }
      `}</style>
    </div>
  )
}
