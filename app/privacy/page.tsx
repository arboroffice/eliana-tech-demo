"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Privacy Policy
                </h1>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
                    <div className="prose prose-invert prose-slate max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                            <p className="text-slate-300 leading-relaxed">
                                At Eliana Tech, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
                            <p className="text-slate-300 leading-relaxed">
                                We collect information that you afford to us directly, such as when you create an account, subscribe to our newsletter, request a demo, or contact us for support. This may include your name, email address, phone number, and company name.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                            <p className="text-slate-300 leading-relaxed">
                                We use the information we collect to operate, maintain, and improve our services, to communicate with you, to monitor and analyze usage and trends, and to protect the security and integrity of our platform.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">4. Data Security</h2>
                            <p className="text-slate-300 leading-relaxed">
                                We implement reasonable security measures designed to protect your personal information from unauthorized access and disclosure. However, no data transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
