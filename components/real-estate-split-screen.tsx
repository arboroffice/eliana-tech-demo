"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function RealEstateSplitScreen() {
    const [sectionInView, setSectionInView] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setSectionInView(true)
            })
        }, { threshold: 0.1 })

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative z-10">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg">
                <div className="grid lg:grid-cols-[40%_1fr] gap-8 lg:gap-12 items-center">
                    <div className={`transition-all duration-1000 ease-out ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400">
                            Modern Home Image
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-200 mb-4">
                            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">CoFounder by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">Always Open</span>{" "}
                            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                For Viewing
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Instant Qualification</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    "Are you a cash buyer or pre-approved?" AI asks the hard questions so you only deal with serious leads.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Automated Scheduling</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Leads book viewings directly into your calendar based on your availability. No more phone tag.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-slate-200">
                    <div className="max-w-md mx-auto bg-black rounded-3xl p-4 border-4 border-gray-800">
                        <div className="text-white text-center mb-4 font-bold">WhatsApp Business</div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Is 123 Oak Street still available?</p>
                            </div>
                            <div className="bg-emerald-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Yes it is! It's currently on the market. It has 4 beds and 2 baths. Would you like to schedule a viewing?</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Yes please, for tomorrow.</p>
                            </div>
                            <div className="bg-emerald-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Great. Just a quick question first - do you have mortgage approval in principle?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
