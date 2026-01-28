"use client"

export function ProblemSection() {
    const problems = [
        "Answering the same questions over and over",
        "Chasing leads that go cold",
        "Managing people who need you for everything",
        "Putting out fires all day instead of growing"
    ]

    return (
        <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        You're Working Too Hard
                        <br />
                        <span className="text-slate-400 font-light">for What You've Built</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        You started this business for freedom. But somewhere along the way, it became a trap.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-16">
                    {problems.map((problem, idx) => (
                        <div
                            key={idx}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <p className="text-slate-300">{problem}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 text-center">
                    <p className="text-xl md:text-2xl text-slate-300 font-light mb-4">
                        You know AI could help.
                    </p>
                    <p className="text-xl md:text-2xl text-white font-medium">
                        But you don't have time to figure it out.
                    </p>
                    <p className="text-slate-400 mt-6">That's where we come in.</p>
                </div>
            </div>
        </section>
    )
}
