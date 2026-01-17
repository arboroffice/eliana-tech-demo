"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function RestaurantSplitScreen() {
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
                            Restaurant Image
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 mb-4">
                            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wide">Clutch by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">More Covers,</span>{" "}
                            <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                                Less Chaos
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Instant Reservations</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Handle booking requests from Google, Instagram, and Website instantly. No more missed calls during service.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Menu Q&A</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    "Do you have vegan options?" "Is there a kids menu?" AI answers these automatically with your specific details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-slate-200">
                    <div className="max-w-md mx-auto bg-black rounded-3xl p-4 border-4 border-gray-800">
                        <div className="text-white text-center mb-4 font-bold">Google Maps Chat</div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Table for 4 tonight at 8?</p>
                            </div>
                            <div className="bg-orange-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">We are fully booked at 8pm, but I have a table available at 6:30pm or 9pm. Would either of those work?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
