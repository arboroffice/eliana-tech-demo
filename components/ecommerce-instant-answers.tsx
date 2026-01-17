"use client"

import { Clock, MessageCircle, Truck, RefreshCcw } from "lucide-react"

export function EcommerceInstantAnswers() {
    const features = [
        {
            icon: Clock,
            title: "Instant Support",
            description: "Customers buying at 2 AM get the same instant answers as those buying at 2 PM. No wait times, no friction."
        },
        {
            icon: Truck,
            title: "Order Tracking",
            description: "Proactively notify customers about shipping updates, reducing 'Where is my order?' tickets by up to 90%."
        },
        {
            icon: RefreshCcw,
            title: "Returns & Exchanges",
            description: "Guide customers through your return process automatically, generating labels and instructions without support staff."
        },
        {
            icon: MessageCircle,
            title: "Shopping Assistant",
            description: "Recommend products based on customer preferences and answer specific questions about sizing or materials."
        }
    ]

    return (
        <section className="py-24 bg-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Automate Your <span className="text-indigo-400">CX</span></h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Deliver a VIP experience to every customer, at any scale.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                                <feature.icon className="w-6 h-6 text-indigo-400" />
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
