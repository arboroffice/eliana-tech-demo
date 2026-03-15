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
                            Why everything else failed you
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Information Doesn't Build Systems.
                            <br />
                            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                                Building Builds Systems.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Every course you watched, coach you talked to, community you joined — none of it changed how your business actually runs day to day.
                        </p>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200 mb-16">
                        <p className="text-xl md:text-2xl text-slate-700 font-light leading-relaxed text-center">
                            "Most founders don't have a revenue problem. They have a freedom problem disguised as a revenue problem. They keep chasing the next milestone thinking that's when it gets easier. It never does. Because the business is built wrong from the start."
                        </p>
                    </div>

                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Your AI Growth Infrastructure</h3>
                        <p className="text-slate-600">We don't teach you how to build. We build your AI Department alongside you.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                num: "01",
                                title: "Your AI, Your Voice",
                                text: "LLMs trained on your actual business, your voice, and your offers. Not generic. Yours."
                            },
                            {
                                num: "02",
                                title: "Content Waterfall",
                                text: "100+ pieces a week from one pillar. Your content engine runs itself. You create once, it distributes everywhere."
                            },
                            {
                                num: "03",
                                title: "Agent Infrastructure",
                                text: "Content, support, and ops agents built into your business. Systems that run without you being the bottleneck."
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
