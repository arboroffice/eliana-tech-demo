"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import { Footer } from "../../components/footer"
import Aurora from "../../components/Aurora"
import { ScrollReveal } from "../../components/scroll-reveal"

export default function FAQPage() {
    const faqs = [
        {
            q: "What if it fails?",
            a: "Then we failed. We fix it.",
        },
        {
            q: "Do I need to be technical?",
            a: "No. You explain your business. We build the system.",
        },
        {
            q: "Will it work with my stack?",
            a: "If it has an API, yes. We integrate with Stripe, HubSpot, Salesforce, and 100+ others.",
        },
        {
            q: "How long does it take?",
            a: "Single system: 30 days. Department build: 6 to 8 weeks. Enterprise builds are scoped custom.",
        },
        {
            q: "Why start with an audit?",
            a: "Because guessing is expensive. We find the highest ROI system first.",
        },
        {
            q: "Do you offer retainers?",
            a: "Only after the first build proves itself. We don't want your money if we aren't making you more.",
        },
        {
            q: "What is the 'Build Fee'?",
            a: "A one-time payment for a finished, working system that you own forever.",
        },
        {
            q: "Can my team maintain this?",
            a: "Yes. Every build includes team training and documentation.",
        },
        {
            q: "Is this just ChatGPT wrappers?",
            a: "No. We build custom infrastructure, logic gates, and database integrations.",
        },
        {
            q: "What industries do you serve?",
            a: "SaaS, Home Services, Real Estate, Healthcare, Law, Construction, and more.",
        },
        {
            q: "Do you take equity?",
            a: "In some Revenue Partnerships after Phase One, yes.",
        },
        {
            q: "What if I use legacy software?",
            a: "We build bridge layers. If there's a database or a web interface, we can automate it.",
        },
        {
            q: "Do you build custom AI models?",
            a: "We fine-tune models on your proprietary data to ensure accuracy.",
        },
        {
            q: "What is the ROI?",
            a: "Minimum 3-5x in time or revenue within the first 6 months is our benchmark.",
        },
        {
            q: "Who is Mia?",
            a: "The architect. Every project is overseen by her to ensure systems-level quality.",
        },
        {
            q: "Is my data secure?",
            a: "We build on your own cloud infrastructure. We never hold your customer data.",
        },
        {
            q: "How do we get started?",
            a: "Book the Free Automation Audit. We map your business and show you the blueprint.",
        },
        {
            q: "What if I have no systems yet?",
            a: "We build them. You can't automate chaos, so we clarify the process first.",
        },
        {
            q: "Do you help with sales side or ops side?",
            a: "Both. Anywhere there is a repeatable human task, we can deploy a system.",
        },
        {
            q: "What's the difference between you and an agency?",
            a: "Agencies sell services. We install assets. You keep the asset after we leave.",
        },
        {
            q: "Do you integrate with Slack/Discord?",
            a: "Yes. We turn your communication apps into command centers for your AI.",
        },
        {
            q: "How do you handle edge cases?",
            a: "We build human-in-the-loop triggers for anything the AI handles with low confidence.",
        },
        {
            q: "Can I cancel mid-build?",
            a: "We work in milestones. You can stop any time, but we keep working until the current phase succeeds.",
        },
        {
            q: "Do you provide 24/7 support?",
            a: "We provide systems monitoring. If a system breaks, we are alerted before you are.",
        },
        {
            q: "What happens after the 30 days?",
            a: "You own it. You can manage it, or we can discuss a Revenue Partnership to keep growing.",
        },
        {
            q: "Is AI actually ready for this?",
            a: "For 90% of operational tasks: Yes. The remaining 10% is where our architecture shines.",
        },
        {
            q: "Will this replace my employees?",
            a: "It replaces their manual tasks. It allows them to do the work you actually hired them for.",
        },
        {
            q: "What is the average setup time?",
            a: "First 7 days is mapping. Next 14 is building. Final 7 is testing and training.",
        },
        {
            q: "Do you sign NDAs?",
            a: "Standard. Your proprietary processes are your competitive advantage.",
        },
        {
            q: "Is there a limit to how many systems we can build?",
            a: "Only your bandwidth for growth. We build one major node at a time.",
        },
        {
            q: "What is 'The Boardroom'?",
            a: "Our private network for founders who have already survived the 'system installation' phase.",
        },
    ]

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <main className="min-h-screen relative overflow-hidden">
                <div className="fixed inset-0 w-full h-full">
                    <Aurora colorStops={["#1e293b", "#334155", "#1e293b"]} amplitude={1.2} blend={0.6} speed={0.4} />
                </div>

                <div className="relative z-10">
                    <GlassmorphismNav />

                    <section className="pt-40 pb-24 px-4 sm:px-6">
                        <div className="max-w-4xl mx-auto">
                            <ScrollReveal>
                                <div className="text-center mb-16">
                                    <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mb-6 text-white text-shadow-xl">
                                        Straight Answers
                                    </h1>
                                    <p className="text-xl text-slate-400 font-medium italic">"No fluff. Just operations."</p>
                                </div>
                            </ScrollReveal>

                            <div className="space-y-4">
                                {faqs.map((item, idx) => (
                                    <ScrollReveal key={idx} delay={idx * 0.05}>
                                        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-white border border-stone-200 shadow-2xl mb-8 last:mb-0 transform transition-all hover:scale-[1.01]">
                                            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-6 text-black">
                                                <span className="text-stone-400 mr-3 block sm:inline mb-1 sm:mb-0 font-extrabold group-hover:text-black">Q.</span> {item.q}
                                            </h3>
                                            <div className="pl-0 sm:pl-12 border-l-2 border-stone-100">
                                                <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-medium italic">"{item.a}"</p>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </section>

                    <Footer />
                </div>
            </main>
        </div>
    )
}
