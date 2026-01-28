"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"

export default function IntegrationPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Seamless Integrations</h1>
                    <p className="text-xl text-slate-300">
                        We don't replace your stack-we supercharge it. Eliana connects natively with the tools you already use, creating a unified flow of data across your entire business.
                    </p>
                </div>

                {/* Integration Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">The Connected Ecosystem</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                Stop copy-pasting data between tabs. Our agents read and write directly to your CRM, Calendar, and Communication platforms in real-time.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <div className="text-blue-400 mb-4 font-bold tracking-wide text-sm uppercase">CRM & Sales</div>
                                <ul className="space-y-2 text-slate-300">
                                    <li>• Salesforce</li>
                                    <li>• HubSpot</li>
                                    <li>• Pipedrive</li>
                                    <li>• GoHighLevel</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <div className="text-green-400 mb-4 font-bold tracking-wide text-sm uppercase">Communication</div>
                                <ul className="space-y-2 text-slate-300">
                                    <li>• WhatsApp</li>
                                    <li>• SMS / Twilio</li>
                                    <li>• Email (Gmail/Outlook)</li>
                                    <li>• Slack / Teams</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <div className="text-purple-400 mb-4 font-bold tracking-wide text-sm uppercase">Scheduling</div>
                                <ul className="space-y-2 text-slate-300">
                                    <li>• Calendly</li>
                                    <li>• Acuity</li>
                                    <li>• Google Calendar</li>
                                    <li>• Outlook Calendar</li>
                                </ul>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                <div className="text-orange-400 mb-4 font-bold tracking-wide text-sm uppercase">Payments</div>
                                <ul className="space-y-2 text-slate-300">
                                    <li>• Stripe</li>
                                    <li>• PayPal</li>
                                    <li>• QuickBooks</li>
                                    <li>• Xero</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Simple Workflow Visual */}
                    <div className="relative bg-gradient-to-br from-slate-800 to-black border border-white/10 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px] rounded-3xl" />

                        <div className="relative z-10 w-full max-w-sm space-y-6">
                            {/* Step 1 */}
                            <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                <div>
                                    <div className="text-white font-bold">New Lead</div>
                                    <div className="text-slate-400 text-sm">Arrives via Website/Socials</div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="h-8 w-0 border-l-2 border-dashed border-slate-600 mx-auto" />

                            {/* Step 2 */}
                            <div className="bg-slate-900 border border-blue-500/50 p-4 rounded-xl flex items-center gap-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                                <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl">🤖</div>
                                <div>
                                    <div className="text-blue-400 font-bold">Eliana AI</div>
                                    <div className="text-slate-300 text-sm">Qualifies & Books Meeting</div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="h-8 w-0 border-l-2 border-dashed border-slate-600 mx-auto" />

                            {/* Step 3 */}
                            <div className="bg-slate-900 border border-green-500/30 p-4 rounded-xl flex items-center gap-4 shadow-xl">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                <div>
                                    <div className="text-white font-bold">Syncs Everywhere</div>
                                    <div className="text-slate-400 text-sm">CRM updated, Calendar blocked</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* API Section */}
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-4">Need something custom?</h3>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                        We have a flexible API that can connect to proprietary databases, legacy systems, and custom internal tools.
                    </p>
                    <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors">
                        View API Documentation
                    </button>
                </div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
