"use client"

import { useState } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import Aurora from "@/components/Aurora"
import { Footer } from "@/components/footer"
import { Lock, Play, CheckCircle } from "lucide-react"

export default function VSLPage() {
    const [isLocked, setIsLocked] = useState(true)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        businessName: "",
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        setTimeout(() => {
            setIsLocked(false)
            setIsLoading(false)
        }, 1500)

        // In a real app, you would submit to an API/CRM here
        console.log("Form submitted:", formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans text-white">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            See How AI Can <span className="text-blue-500">Transform</span> Your Business
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Watch our 5-minute demo to see how Eliana automates lead qualification, booking, and support—24/7.
                        </p>
                    </div>

                    <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                        {isLocked ? (
                            <div className="relative aspect-video flex items-center justify-center bg-black/80">
                                {/* Background blur of video placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 blur-xl" />

                                <div className="relative z-10 max-w-md w-full mx-4 p-8 bg-black/90 border border-white/10 rounded-2xl shadow-2xl">
                                    <div className="text-center mb-6">
                                        <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                                            <Lock className="w-5 h-5" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Unlock the Full Demo</h3>
                                        <p className="text-sm text-slate-400">Enter your details below to get instant access.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Full Name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Work Email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone Number"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                            <input
                                                type="text"
                                                name="businessName"
                                                placeholder="Business Name"
                                                required
                                                value={formData.businessName}
                                                onChange={handleChange}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                                        >
                                            {isLoading ? (
                                                "Unlocking..."
                                            ) : (
                                                <>
                                                    <Play className="w-4 h-4 fill-current" />
                                                    Watch Video Now
                                                </>
                                            )}
                                        </button>
                                        <p className="text-xs text-slate-500 text-center mt-3">
                                            We respect your privacy. No spam.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video bg-black relative">
                                <div className="absolute inset-0 flex items-center justify-center flex-col">
                                    {/* Placeholder for YouTube Embed */}
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                                        title="Eliana Tech Functionality Demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>

                    {!isLocked && (
                        <div className="mt-12 text-center animate-in fade-in slide-in-from-bottom duration-700">
                            <h2 className="text-2xl font-bold mb-6">Ready to automate your business?</h2>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="https://calendly.com/your-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all transform hover:scale-105"
                                >
                                    Book a Strategy Call
                                </a>
                                <a
                                    href="/audit"
                                    className="text-white border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all"
                                >
                                    Get a Free Audit
                                </a>
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        {[
                            { title: "24/7 Availability", desc: "Never miss a lead, day or night." },
                            { title: "Instant Response", desc: "Engage visitors in under 2 seconds." },
                            { title: "Seamless Handoff", desc: "Perfect coordination with your team." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-4">
                                <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <div>
                                    <div className="font-bold text-white">{item.title}</div>
                                    <div className="text-sm text-slate-400">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    )
}
