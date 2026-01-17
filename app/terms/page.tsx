"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Terms of Service
                </h1>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
                    <div className="prose prose-invert prose-slate max-w-none space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">1. Acceptance of Terms</h2>
                            <p className="text-slate-300 leading-relaxed">
                                By accessing or using the Eliana Tech website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">2. Use of Services</h2>
                            <p className="text-slate-300 leading-relaxed">
                                You may use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">3. Intellectual Property</h2>
                            <p className="text-slate-300 leading-relaxed">
                                The content, features, and functionality of our services are owned by Eliana Tech and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">4. Limitation of Liability</h2>
                            <p className="text-slate-300 leading-relaxed">
                                To the fullest extent permitted by law, Eliana Tech shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
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
