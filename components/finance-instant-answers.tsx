"use client"

import { Clock, MessageCircle, FileText, PieChart } from "lucide-react"

export function FinanceInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Support",
            description: "Financial anxiety doesn't sleep. Be there for your clients to answer basic account or service questions anytime."
        },
        {
            icon: MessageCircle,
            title: "Lead Scoring",
            description: "Identify high-value prospects based on their inquiries (e.g., 'retirement planning' vs 'atm location') and route them to senior advisors."
        },
        {
            icon: FileText,
            title: "Onboarding Automation",
            description: "Guide new clients through document submission processes automatically via chat, reducing incomplete applications."
        },
        {
            icon: PieChart,
            title: "Product Education",
            description: "Explain complex financial products in simple terms instantly, helping clients make better decisions faster."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Build Trust <span className="text-emerald-400">Automatically</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Modern finance requires modern responsiveness.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
