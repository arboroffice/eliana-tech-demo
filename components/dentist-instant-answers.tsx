"use client"

import { Clock, MessageCircle, Calendar, FileText } from "lucide-react"

export function DentistInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "After-Hours Triage",
            description: "Patients in pain don't wait. Eliana screens emergency requests at 2 AM and schedules priority slots for the morning."
        },
        {
            icon: Calendar,
            title: "Smart Scheduling",
            description: "Integrates with your practice management software to book cleanings, exams, and consults directly into your calendar."
        },
        {
            icon: MessageCircle,
            title: "Post-Op Check-ins",
            description: "Automatically follow up with patients after procedures to ensure recovery is going well, alerting staff only if issues arise."
        },
        {
            icon: FileText,
            title: "Pricing & Insurance",
            description: "Instantly answer common questions about insurance acceptance, financing options, and treatment costs."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stop Being the <span className="text-blue-400">Receptionist</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Your front desk is overwhelmed. Let AI handle the routine questions so your staff can focus on patient care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-blue-400" />
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
