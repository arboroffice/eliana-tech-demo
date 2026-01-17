"use client"

import { Clock, MessageCircle, Home, MapPin } from "lucide-react"

export function RealEstateInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Inquiries",
            description: "Capture leads from portal inquiries instantly, even at midnight, preventing them from moving to the next listing."
        },
        {
            icon: Home,
            title: "Property Details",
            description: "Instantly answer specific questions: 'Is there a garage?', 'What are the HOA fees?', 'Is the backyard fenced?'"
        },
        {
            icon: MapPin,
            title: "Neighborhood Insights",
            description: "Provide details about schools, transport, and local amenities to interested buyers automatically."
        },
        {
            icon: MessageCircle,
            title: "Viewing Coordination",
            description: "Syncs with agent calendars to book private showings without the back-and-forth emails."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Always-On <span className="text-blue-400">Agent</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Never miss a buyer because you were at a closing.
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
