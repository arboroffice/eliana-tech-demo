"use client"

import { Clock, MessageCircle, Calendar, Users } from "lucide-react"

export function RestaurantInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Reservations",
            description: "Guests can book tables late at night or during the lunch rush without calling, directly into your reservation system."
        },
        {
            icon: MessageCircle,
            title: "Menu & Dietary AI",
            description: "Instantly answers questions like 'Is the soup gluten-free?' or 'Do you have a kids menu?' accurately tailored to your current menu."
        },
        {
            icon: Users,
            title: "Large Party Handling",
            description: "Screens requests for large groups (e.g. 10+) and alerts a manager for approval instead of auto-booking."
        },
        {
            icon: Calendar,
            title: "Events & Private Dining",
            description: "Captures leads for private events, sending brochures and pricing automatically to potential clients."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">More Than Just a <span className="text-orange-400">Chatbot</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        A dedicated concierge for every potential diner.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-orange-400" />
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
