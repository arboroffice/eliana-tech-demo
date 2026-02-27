"use client"

import { useState } from "react"

export function BlogNewsletterForm() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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
            setStatus(data.success ? "success" : "error")
        } catch {
            setStatus("error")
        }
    }

    if (status === "success") {
        return (
            <div className="bg-black border border-white/10 rounded-2xl p-8 text-center max-w-md mx-auto">
                <p className="text-white font-bold text-lg mb-2">You&apos;re subscribed!</p>
                <p className="text-slate-400 text-sm">Check your inbox to confirm.</p>
            </div>
        )
    }

    return (
        <div className="bg-black border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
            <h3 className="text-white font-bold text-lg text-center mb-1">Join the Newsletter</h3>
            <p className="text-slate-400 text-sm text-center mb-5">
                AI playbooks for business owners. No fluff.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-slate-100 transition-all text-sm disabled:opacity-60"
                >
                    {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
                {status === "error" && (
                    <p className="text-red-400 text-xs text-center">Something went wrong. Try again.</p>
                )}
            </form>
        </div>
    )
}
