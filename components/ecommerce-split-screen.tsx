"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function EcommerceSplitScreen() {
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
                            Online Shopping Image
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 border border-indigo-200 mb-4">
                            <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wide">Clutch by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">Support That</span>{" "}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                                Doesn't Sleep
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Instant Order Tracking</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Deflect 80% of support tickets by instantly answering "Where is my order?" with real-time status updates.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Product Recommendations</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    AI analyzes user intent to suggest the perfect product, increasing average order value automatically.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-slate-200">
                    <div className="max-w-md mx-auto bg-black rounded-3xl p-4 border-4 border-gray-800">
                        <div className="text-white text-center mb-4 font-bold">Website Chat</div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Do you have anything suitable for dry skin?</p>
                            </div>
                            <div className="bg-indigo-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Absolutely! Our Ultra-Hydrating Night Cream is perfect for dry skin types. It's €45. Would you like to read the reviews?</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">No thanks, I'll take it. When will it arrive?</p>
                            </div>
                            <div className="bg-indigo-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Great choice. If you order in the next 2 hours, it ships today for delivery tomorrow! 🚚 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
