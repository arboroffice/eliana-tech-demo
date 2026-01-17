"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function FinanceSplitScreen() {
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
                            Office Handshake Image
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 border border-amber-200 mb-4">
                            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wide">Clutch by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">Stop Playing</span>{" "}
                            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                Phone Tag
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Pre-Call Qualification</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Ensure every booked meeting is with a qualified prospect. AI gathers income, debt, and goal details beforehand.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Document Collection</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Automate the chase for payslips and IDs. AI follows up politely but persistently until files are uploaded.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-16 border-t border-slate-200">
                    <div className="max-w-md mx-auto bg-black rounded-3xl p-4 border-4 border-gray-800">
                        <div className="text-white text-center mb-4 font-bold">Secure Chat</div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Hi, I'm looking for a mortgage for a first-time buyer.</p>
                            </div>
                            <div className="bg-amber-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Excellent. To match you with the best advisor, can I ask your approximate annual household income?</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">It's about €85,000 combined.</p>
                            </div>
                            <div className="bg-amber-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Thank you. Based on that, I can schedule a consultation with our First Time Buyer specialist. Does Tuesday at 10am work?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
