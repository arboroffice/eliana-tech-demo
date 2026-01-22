"use client"

import { ArrowRight, Sparkles } from "lucide-react"

export function DentistHeroHeader() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact")
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in-up">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-blue-100">AI For Dental Practices</span>
            </div>

            <p className="text-base sm:text-lg text-white/90 mb-4 font-medium animate-fade-in-up">
                Rent or own our technology for your company
            </p>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up animation-delay-100 text-balance">
                Focus on <span className="text-blue-500">Patients</span>, Not{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Phone Calls
                </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed animate-fade-in-up animation-delay-200 text-balance">
                Automatically triage emergencies, fill cancellations, and answer patient questions 24/7.
                The AI receptionist that understands dentistry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up animation-delay-300">
                <button
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-100 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl shadow-white/10"
                >
                    Get My Free Audit
                    <ArrowRight className="w-5 h-5" />
                </button>
                <button
                    onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-md"
                >
                    See It In Action
                </button>
            </div>
        </div>
    )
}
