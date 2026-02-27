"use client"

import { useState } from "react"
import { ArrowRight, Mail, Loader2, CheckCircle2 } from "lucide-react"

export function NewsletterSignup() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !email.includes("@")) return

        setStatus("loading")
        try {
            const res = await fetch("/api/newsletter/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            })
            const data = await res.json()
            if (data.success) {
                setStatus("success")
                setMessage(data.message)
                setEmail("")
            } else {
                setStatus("error")
                setMessage(data.error || "Something went wrong.")
            }
        } catch {
            setStatus("error")
            setMessage("Something went wrong. Please try again.")
        }
    }

    return (
        <div className="w-full bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border-y border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                        Newsletter
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Join the Newsletter
                    </h2>
                    <p className="text-slate-300 max-w-xl">
                        Join 3.5k+ business owners receiving practical guides on automating their operations with AI agents. No fluff, just playbooks.
                    </p>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto md:min-w-[340px]">
                    {status === "success" ? (
                        <div className="flex items-center justify-center gap-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-8 py-4 rounded-full font-bold">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>{message}</span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                required
                                className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="group flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-60 disabled:hover:scale-100 text-sm whitespace-nowrap"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                    <Mail className="w-4 h-4" />
                                )}
                                <span>{status === "loading" ? "Subscribing..." : "Subscribe"}</span>
                                {status !== "loading" && <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    )}
                    {status === "error" && (
                        <p className="text-center text-red-400 text-xs mt-2">{message}</p>
                    )}
                    {status === "idle" && (
                        <p className="text-center text-slate-500 text-xs mt-3">
                            Read by founders from Techstars, YC, and more.
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
