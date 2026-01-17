"use client"

import { Clock, MessageCircle, Heart, FileText } from "lucide-react"

export function HealthcareInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Triage",
            description: "Guide patients to the right care right away. Is it an emergency? Do they need to come in? Answer instantly."
        },
        {
            icon: FileText,
            title: "Paperwork Automation",
            description: "Send and collect digital intake forms before the patient arrives, reducing waiting room time."
        },
        {
            icon: Heart,
            title: "Post-Care Follow-up",
            description: "Automatically check in on patients day after surgery or treatment to ensure recovery is on track."
        },
        {
            icon: MessageCircle,
            title: "FAQ Resolution",
            description: "Instantly answer questions about parking, visiting hours, and insurance acceptance without tying up phone lines."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Focus on <span className="text-cyan-400">Healing</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Let AI handle the logistics so you can handle the care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-cyan-400" />
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
