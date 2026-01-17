"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

export function SalonSplitScreen() {
    const [sectionInView, setSectionInView] = useState(false)
    const [whatsappInView, setWhatsappInView] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const whatsappSectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === sectionRef.current) setSectionInView(true)
                    if (entry.target === whatsappSectionRef.current) setWhatsappInView(true)
                }
            })
        }, { threshold: 0.1 })

        if (sectionRef.current) observer.observe(sectionRef.current)
        if (whatsappSectionRef.current) observer.observe(whatsappSectionRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative z-10">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg">
                <div className="grid lg:grid-cols-[40%_1fr] gap-8 lg:gap-12 items-center">
                    <div className={`transition-all duration-1000 ease-out ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400">
                            Salon Image Placeholder
                        </div>
                    </div>

                    <div className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-4">
                            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Clutch by Elianatech</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                            <span className="text-slate-900">Stop interrupting</span>{" "}
                            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                                your craft
                            </span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Instagram & DM Booking</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Turn "Do you have any slots?" DMs into confirmed bookings automatically, while you keep cutting.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-xl mb-3">Deposit Collection</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Reduce no-shows by automatically requesting deposits or card details before confirming appointments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div ref={whatsappSectionRef} className="mt-16 pt-16 border-t border-slate-200">
                    {/* Simple visual for Salon DM */}
                    <div className="max-w-md mx-auto bg-black rounded-3xl p-4 border-4 border-gray-800">
                        <div className="text-white text-center mb-4 font-bold">Instagram DM</div>
                        <div className="space-y-4">
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">Hey! Can I get a balayage this Saturday?</p>
                            </div>
                            <div className="bg-purple-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Hi! We have opening at 10am and 2pm this Saturday. Which one works for you? 💇‍♀️</p>
                            </div>
                            <div className="bg-gray-800 p-3 rounded-lg rounded-tl-none mr-8">
                                <p className="text-white text-sm">2pm please!</p>
                            </div>
                            <div className="bg-purple-700 p-3 rounded-lg rounded-tr-none ml-8">
                                <p className="text-white text-sm">Perfect! I've held that slot. Please click here to pay the €20 deposit to confirm. 💳</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
