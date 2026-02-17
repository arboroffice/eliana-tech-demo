import { GlassmorphismNav } from "../components/glassmorphism-nav"
import { Footer } from "../components/footer"
import Aurora from "../components/Aurora"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="fixed inset-0 w-full h-full">
          <Aurora colorStops={["#334155", "#475569", "#334155"]} amplitude={1.0} blend={0.5} speed={0.6} />
        </div>
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* HERO */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm sm:text-base uppercase tracking-[0.2em] text-slate-400 mb-6">
                AI Infrastructure for Info &amp; SaaS Companies
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8">
                SCALE TO{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 to-slate-500">
                  $1M+ ARR
                </span>{" "}
                WITHOUT SCALING HEADCOUNT
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-6 leading-relaxed italic">
                The fastest-growing info and SaaS companies aren't hiring more people. They're building AI systems that do the work of 10.
              </p>
              <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                We build the <span className="text-white font-semibold">automated backend</span> that runs your onboarding, support, retention, and growth ops—so you can focus on <span className="text-white font-semibold">product and revenue</span>.
              </p>
              <Link
                href="/audit"
                className="inline-block px-10 py-4 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Automation Audit →
              </Link>
            </div>
          </section>

          {/* PAIN — YOU'RE STUCK IN THE MACHINE */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  You're Stuck in the Machine
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  You built a product people love. Now you're drowning in the operations around it.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { pain: "Onboarding every new user or customer manually", twist: "You're doing $50/hr work in a $500/hr business." },
                  { pain: "Support tickets eating your entire day", twist: "Your inbox is a full-time job you didn't hire for." },
                  { pain: "Churn you can see coming but can't prevent", twist: "Users go quiet, then cancel—and you find out too late." },
                  { pain: "No idea which channels actually drive revenue", twist: "You're spending blind—budget over strategy." },
                  { pain: "Can't take a week off without things breaking", twist: "Your business is a job with better branding." },
                ].map((item) => (
                  <div
                    key={item.pain}
                    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 p-6 rounded-2xl border border-white/10 bg-white/5"
                  >
                    <p className="text-white font-medium flex-1">{item.pain}</p>
                    <p className="text-slate-400 italic flex-1">{item.twist}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* REFRAME */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-10">
                You Don't Need More Hires.<br />You Need Systems.
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8">
                Hiring more people adds more management. Buying more tools adds more tabs. Neither gets you out of the machine.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                You need <span className="text-white font-semibold">automated infrastructure</span> that runs your business behind the scenes—the same backend systems that let lean teams outperform companies 10x their size.
              </p>
            </div>
          </section>

          {/* SOLUTIONS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  What We Build for You
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  Concrete systems that replace the grind. Not tools—outcomes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Automated Onboarding", desc: "From signup to activation to first value—zero manual touches. AI-driven sequences that adapt to each user's behavior and guide them to 'aha' faster." },
                  { title: "Churn Prevention Engine", desc: "Detect at-risk users before they cancel. Automated health scoring, re-engagement sequences, and win-back campaigns that run 24/7." },
                  { title: "AI Content Engine", desc: "One long-form piece becomes 30+ assets. Clips, threads, carousels, emails—generated in your voice, not generic AI slop." },
                  { title: "Support That Scales", desc: "AI trained on your product and docs handles 80% of tickets instantly. Your team only gets pulled in when it actually matters." },
                  { title: "Revenue Intelligence", desc: "Know exactly which channel, campaign, and touchpoint drove each conversion. Kill what doesn't work. Double down on what does." },
                  { title: "Trial-to-Paid Automation", desc: "Behavior-triggered nudges, upgrade prompts, and personalized offers that convert free users into paying customers on autopilot." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* BEFORE / AFTER */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  The Transformation
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  What changes when your business runs on systems instead of you.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="p-8 rounded-2xl border border-red-500/20 bg-red-500/5">
                  <h3 className="text-sm uppercase tracking-wider text-red-400 font-bold mb-6">Before</h3>
                  <ul className="space-y-4">
                    {[
                      "60+ hours/week firefighting operations",
                      "Churn you can see but can't stop",
                      "Support backlog growing every week",
                      "Onboarding is a manual mess",
                      "Revenue plateaus despite more traffic",
                      "Burning out on the business you built",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-red-400 mt-0.5">✕</span>
                        <span className="text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After */}
                <div className="p-8 rounded-2xl border border-green-500/20 bg-green-500/5">
                  <h3 className="text-sm uppercase tracking-wider text-green-400 font-bold mb-6">After</h3>
                  <ul className="space-y-4">
                    {[
                      "20–25 hours/week focused on product & growth",
                      "Churn cut by 30–50% with automated retention",
                      "80% of support handled by AI instantly",
                      "Users activate themselves through smart sequences",
                      "Revenue compounds through automated upsells",
                      "Excited about your business again",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-green-400 mt-0.5">✓</span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-slate-900/20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  How It Works
                </h2>
                <p className="text-lg text-slate-400 max-w-xl mx-auto">
                  Three steps from overwhelmed operator to automated growth machine.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    step: "01",
                    title: "Automation Audit",
                    desc: "We map your entire business—every workflow, every bottleneck, every hour wasted on ops. You get a custom blueprint for what to automate and in what order.",
                  },
                  {
                    step: "02",
                    title: "Build & Install",
                    desc: "We build your AI systems and integrate them into your existing stack. Stripe, Intercom, ConvertKit, Webflow, your CRM—whatever you use, we plug into it.",
                  },
                  {
                    step: "03",
                    title: "Launch & Optimize",
                    desc: "Your systems go live. We monitor, tune, and optimize for 30 days. You get trained on everything so you're never dependent on us.",
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="text-5xl font-black text-white/10 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                  We Win When You Win
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                  No bloated retainers. No hourly billing. You pay a one-time setup fee to build the systems, then a performance fee tied to results. Our incentives are aligned with yours.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Setup Fee */}
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-slate-400">Step 1</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Setup Fee</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Covers the build — we architect and install your AI systems, integrate with your existing stack, and get everything live. You own it all.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Custom system architecture & build",
                      "Full integration with your tools",
                      "30 days of optimization & tuning",
                      "Team training & documentation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-white mt-0.5">—</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-slate-400 text-sm">Scoped per project. Starts at <span className="text-white font-bold">$5K</span> for a single system.</p>
                  </div>
                </div>

                {/* Performance Fee */}
                <div className="p-8 rounded-2xl border border-amber-500/30 bg-gradient-to-br from-amber-500/10 to-transparent">
                  <div className="mb-6">
                    <span className="text-sm uppercase tracking-wider text-amber-400">Step 2</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Performance Fee</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Once your systems are live, we earn a percentage of the revenue they help generate. If we don't move the needle, you don't pay.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      "Revenue share on system-attributed growth",
                      "Ongoing monitoring & optimization",
                      "Priority support & system upgrades",
                      "Quarterly strategy reviews with Mia",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-amber-400 mt-0.5">—</span>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-amber-500/20 pt-6">
                    <p className="text-slate-400 text-sm">Percentage based on scope. <span className="text-amber-400 font-bold">We only eat when you eat.</span></p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-2xl border border-white/10 bg-white/5 text-center">
                <p className="text-slate-300">
                  Not sure which systems you need? <span className="text-white font-semibold">Start with the free audit.</span> We'll map your business, identify the highest-ROI automations, and scope it out — no commitment.
                </p>
              </div>
            </div>
          </section>

          {/* BUILT FOR */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5 bg-slate-900/10">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12">
                Built for Info &amp; SaaS Companies
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {[
                  "Course Creators", "Coaches", "SaaS Founders", "Community Builders",
                  "Membership Sites", "Digital Product Sellers", "Newsletter Operators",
                  "Dev Tool Companies", "B2B SaaS", "Cohort-Based Programs",
                ].map((type) => (
                  <span
                    key={type}
                    className="px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 text-slate-300 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {type}
                  </span>
                ))}
              </div>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                If you sell software, knowledge, or access—and you're tired of being the entire operations team—we built this for you.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 sm:py-32 px-4 sm:px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-12 text-center">
                Common Questions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Do I need to be technical?",
                    a: "Not at all. We handle every aspect of the build. You just tell us how your business works, and we build the systems around it.",
                  },
                  {
                    q: "Will this work with my existing tools?",
                    a: "Yes. We integrate with Stripe, Intercom, ConvertKit, Kajabi, Teachable, Webflow, HubSpot, Zapier, and pretty much anything with an API. We build around your stack, not against it.",
                  },
                  {
                    q: "How long until my systems are live?",
                    a: "A single system takes 2–4 weeks. A full-stack build takes 6–8 weeks. Enterprise builds are scoped individually but typically 8–12 weeks.",
                  },
                  {
                    q: "What if I outgrow the system?",
                    a: "That's the point. These systems are built to scale with you. And if you need to expand, we can add new systems anytime—each one compounds on the last.",
                  },
                  {
                    q: "Is this just ChatGPT wrappers?",
                    a: "No. We build custom infrastructure—automated workflows, intelligent routing, data pipelines, and AI agents trained on your specific business. This is engineering, not prompt tricks.",
                  },
                ].map((item) => (
                  <div key={item.q} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                    <h3 className="text-lg font-bold text-white mb-3">{item.q}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="py-24 sm:py-32 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
                Your Business Should Work<br />Without You in It.
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Take the free automation audit. We'll show you exactly where you're losing time, what to automate first, and what it looks like on the other side.
              </p>
              <Link
                href="/audit"
                className="inline-block px-12 py-5 rounded-full bg-white text-black text-lg font-bold hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              >
                Get Your Free Automation Audit →
              </Link>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  )
}
