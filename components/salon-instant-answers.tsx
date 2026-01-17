"use client"

import { Clock, MessageCircle, Calendar, DollarSign } from "lucide-react"

export function SalonInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Booking",
            description: "Clients can book appointments at midnight when they finally remember, without waiting for you to open."
        },
        {
            icon: DollarSign,
            title: "Quote Automation",
            description: "Instantly answer 'How much for balayage?' with starting prices and a prompt to book a consultation."
        },
        {
            icon: Calendar,
            title: "Waitlist Management",
            description: "Automatically notify waitlisted clients when a spot opens up due to a cancellation."
        },
        {
            icon: MessageCircle,
            title: "Style Consultations",
            description: "Collect reference photos and hair history via chat before the appointment begins."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Digital <span className="text-purple-400">Receptionist</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Stop interrupting your art to answer the phone.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-purple-400" />
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
