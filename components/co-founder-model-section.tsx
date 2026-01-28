"use client"

export function CoFounderModelSection() {
    return (
        <section id="how-it-works" className="relative z-10">
            <div className="bg-white py-20 px-4 relative overflow-hidden">
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                        }}
                    />
                </div>

                <div className="max-w-5xl mx-auto relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
                            95% of AI implementations fail
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Most AI is Static.
                            <br />
                            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                                Yours Must Be Alive.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Static prompts decay. Outdated context creates errors. That's why we built something different.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 mb-16">
                        <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed text-center">
                            "It's not enough to just 'install AI'. If it doesn't learn from your daily operations,
                            it's just a fancy answering machine that will eventually break."
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">The Co-Founder Model</h3>
                        <p className="text-slate-600">AI that evolves with your business, not against it.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Business DNA",
                                text: "Trained on your actual operations, not generic internet data. It knows how you uniquely work."
                            },
                            {
                                num: "02",
                                title: "Context Loop",
                                text: "Learns from every correction, every interaction, every day. It gets smarter while you sleep."
                            },
                            {
                                num: "03",
                                title: "Hands-Free",
                                text: "Gets smarter without adding to your workload. This isn't a tool you babysit. It's a partner."
                            }
                        ].map((pillar, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="text-sm text-slate-400 font-medium mb-4">{pillar.num}</div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">{pillar.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{pillar.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
