"use client"

export function StorySection() {
    return (
        <section className="relative z-10">
            <div className="bg-white rounded-t-[3rem] pt-20 pb-20 px-4 relative overflow-hidden">
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

                <div className="max-w-4xl mx-auto relative">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
                            The Genesis
                        </div>
                    </div>

                    <div className="space-y-16">
                        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
                            <p className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed mb-6">
                                "At 14, I dropped out of school to help run my dad's tree service."
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We were drowning. He worked 100 hours a week. Missed dinners. Missed weekends.
                                The business owned him. He wasn't living — he was just working.
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
                            <p className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed mb-6">
                                "So I built systems. Simple ones. Then smarter ones."
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Within a few years, we hit 7 figures. And he cut his hours to just 10 per week.
                                The business finally worked for him instead of against him.
                            </p>
                        </div>

                        <div className="text-center">
                            <p className="text-2xl md:text-3xl font-light text-slate-800 leading-relaxed">
                                "Now I do the same thing for businesses like yours.
                                <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent font-medium"> But with AI.</span>"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
