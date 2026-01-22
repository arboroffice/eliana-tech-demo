import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function NewsletterSignup() {
    return (
        <div className="w-full bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-y border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                        Weekly Strategy
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Get the AI Blueprint
                    </h2>
                    <p className="text-slate-300 max-w-xl">
                        Join 3.5k+ business owners receiving practical guides on automating their operations with AI agents. No fluff, just playbooks.
                    </p>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                    <a
                        href="https://beehiiv.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <Mail className="w-5 h-5" />
                        <span>Subscribe on Beehiiv</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="text-center text-slate-500 text-xs mt-3">
                        Read by founders from Techstars, YC, and more.
                    </p>
                </div>
            </div>
        </div>
    )
}
