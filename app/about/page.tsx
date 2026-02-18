"use client"

import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { motion } from "framer-motion"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>
            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">About Eliana Tech</h1>
                <div className="prose prose-invert prose-lg max-w-none space-y-6">
                    <p className="text-xl text-slate-300 leading-relaxed text-center mb-12">
                        We build AI infrastructure that frees founders from their businesses, so they can scale without scaling headcount.
                    </p>
                    <p>
                        Most growing companies hit the same wall: revenue goes up, but so does the operational chaos. More users means more support tickets. More customers means more onboarding. More growth means more busywork that pulls founders away from the thing that actually matters—building great products and serving their audience.
                    </p>
                    <p>
                        Eliana Tech exists to solve that. We build automated systems—onboarding flows, churn prevention engines, AI-powered support, content pipelines, revenue intelligence—that handle the operational grind so you don't have to.
                    </p>
                    <p>
                        We're not consultants who hand you a PDF and leave. We're not an agency renting you hours. We build real infrastructure that becomes part of your company, compounds in value over time, and lets lean teams operate like organizations 10x their size.
                    </p>
                </div>

                {/* Meet the Founder CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Founder</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
                        From running a car dealership at 14 to building an AI infrastructure company — meet Mia, the force behind ElianaTech.
                    </p>
                    <Link
                        href="/founder"
                        className="inline-block px-8 py-4 bg-white text-black font-semibold rounded-full text-lg hover:bg-slate-200 transition-colors"
                    >
                        Read Mia&apos;s Story →
                    </Link>
                </motion.div>
            </main>
            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
