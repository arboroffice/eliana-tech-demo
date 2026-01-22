"use client"
import { useEffect, useRef, useState } from "react"
import type React from "react"

import Image from "next/image"

export function DentistSplitScreen() {
    const [sectionInView, setSectionInView] = useState(false)
    const [whatsappInView, setWhatsappInView] = useState(false)
    const [voiceInView, setVoiceInView] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const whatsappSectionRef = useRef<HTMLDivElement>(null)
    const voiceSectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === sectionRef.current) {
                        setSectionInView(true)
                    } else if (entry.target === whatsappSectionRef.current) {
                        setWhatsappInView(true)
                    } else if (entry.target === voiceSectionRef.current) {
                        setVoiceInView(true)
                    }
                }
            })
        }, observerOptions)

        if (sectionRef.current) observer.observe(sectionRef.current)
        if (whatsappSectionRef.current) observer.observe(whatsappSectionRef.current)
        if (voiceSectionRef.current) observer.observe(voiceSectionRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                setScrollY(window.scrollY)
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        const handleResize = () => {
            if (typeof window !== "undefined" && window.innerWidth < 1024) {
                setScrollY(0)
            }
        }
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const getParallaxOffset = (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (!sectionRef.current || typeof window === "undefined" || window.innerWidth < 1024) {
            return 0
        }

        const rect = sectionRef.current.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionHeight = rect.height
        const windowHeight = window.innerHeight

        const scrollIntoSection = scrollY + windowHeight / 2 - sectionTop
        const scrollProgress = Math.max(0, Math.min(1, scrollIntoSection / sectionHeight))

        return scrollProgress * 80
    }

    const whatsappParallax = getParallaxOffset(whatsappSectionRef)
    const voiceParallax = getParallaxOffset(voiceSectionRef)

    return (
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-20 relative z-10">
            <div>
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-lg">
                    <div className="grid lg:grid-cols-[40%_1fr] gap-8 lg:gap-12 items-center">
                        <div
                            className={`transition-all duration-1000 ease-out ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                                <Image
                                    src="/images/dentist-office.png"
                                    alt="Modern Dentist Office"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div
                            className={`transition-all duration-1000 ease-out delay-200 ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                }`}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 mb-4">
                                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">CoFounder by Elianatech</span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-balance">
                                <span className="text-slate-900">Fill your chair with</span>{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                    Automated Triage
                                </span>
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3">Emergency Triage</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Automatically prioritize patients in pain. Our AI asks the right clinical questions to identify true emergencies vs routine checkups.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3">24/7 Booking</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Fill cancellations instantly. Patients can book, reschedule, or cancel appointments anytime without tying up your front desk.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3">Post-Op Checkups</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Automated follow-ups after procedures. "How is your tooth feeling today?" Ensures patient care doesn't end at the door.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900 text-xl mb-3">Insurance Queries</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        Answer common insurance and intake questions automatically, filtering for serious patients.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={whatsappSectionRef} className="mt-16 lg:mt-24 pt-16 lg:pt-24 border-t border-slate-200">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div
                                className={`transition-all duration-1000 ease-out ${whatsappInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 mb-4">
                                    <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">Patient Messaging</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                                    <span className="text-slate-900">Reduce Anxiety with</span>{" "}
                                    <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                                        Instant Answers
                                    </span>
                                </h2>

                                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                    Patients hate waiting in pain. Give them immediate reassurance and clear next steps, even at 2 AM on a Sunday.
                                </p>
                            </div>

                            {/* Mockup Right */}
                            <div
                                className={`transition-all duration-1000 ease-out delay-200 ${whatsappInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                                    }`}
                            >
                                <div className="relative h-[550px] lg:h-[700px] max-w-[500px] lg:max-w-none mx-auto">
                                    {/* Simplified Mockup for Dentist - Chat */}
                                    <div className="bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-8 border-slate-800 h-full overflow-hidden">
                                        <div className="bg-[#0a5c4a] rounded-t-xl px-4 py-3 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">🦷</div>
                                            <div className="text-white font-bold">Dental Care</div>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="bg-[#1f2c34] rounded-lg rounded-tl-none p-3 max-w-[85%]">
                                                <p className="text-white text-sm">I have a throbbing pain in my molar, started an hour ago.</p>
                                            </div>
                                            <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto">
                                                <p className="text-white text-sm">I'm sorry to hear that. On a scale of 1-10, how severe is the pain? Is there any swelling?</p>
                                            </div>
                                            <div className="bg-[#1f2c34] rounded-lg rounded-tl-none p-3 max-w-[85%]">
                                                <p className="text-white text-sm">About an 8. Yes, a little swelling.</p>
                                            </div>
                                            <div className="bg-[#005c4b] rounded-lg rounded-tr-none p-3 max-w-[85%] ml-auto">
                                                <p className="text-white text-sm">This sounds like it requires immediate attention. I can fit you in with Dr. Smith tomorrow at 9 AM for an emergency exam. Shall I book that?</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
