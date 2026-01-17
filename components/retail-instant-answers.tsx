"use client"

import { Clock, MessageCircle, MapPin, Tag } from "lucide-react"

export function RetailInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "24/7 Shopping",
            description: "Customers browse late. Answer their questions about fit, material, and availability instantly, securing the sale before they sleep."
        },
        {
            icon: MessageCircle,
            title: "Return Handling",
            description: "Automate return requests and status checks, turning a potential frustration into a smooth, self-serve experience."
        },
        {
            icon: MapPin,
            title: "Local SEO Boost",
            description: "Guide customers to your nearest open location with directions and parking tips automatically."
        },
        {
            icon: Tag,
            title: "Deal Notifications",
            description: "Alert interested customers about sales on items they've asked about, driving urgency and conversion."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your Best Salesperson <span className="text-pink-400">Never Sleeps</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Turn every interaction into a transaction.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-pink-400" />
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
