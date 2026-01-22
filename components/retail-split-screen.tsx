"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function RetailSplitScreen() {
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
                            Storefront Image
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-rose-100 border border-pink-200 mb-4">
                            <span className="text-pink-600 font-semibold text-sm uppercase tracking-wide">CoFounder by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">Never Say</span>{" "}
                            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-red-500 bg-clip-text text-transparent">
                                "We're Closed"
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Inventory Lookup</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    AI checks your stock levels instantly. "Do you have the Nike 270s in size 10?" "Yes, we have 2 pairs left."
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Store Guidance</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Directions, parking info, and opening hours answered automatically, driving foot traffic to your door.
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
                                <p className="text-white text-sm">Do you have the new iPhone cases in stock?</p>
                            </div>
                            <div className="bg-pink-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Yes, we have the silicone cases in black, red, and blue for all iPhone 15 models.</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Great, are you open until 8?</p>
                            </div>
                            <div className="bg-pink-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Yes! We're open until 9pm tonight. We're located on Main St, next to Starbucks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
