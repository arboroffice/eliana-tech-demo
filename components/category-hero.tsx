"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface CategoryHeroProps {
    title: string
    subtitle: string
    backgroundImage?: string
}

export function CategoryHero({ title, subtitle, backgroundImage = "/images/hero-bg.jpg" }: CategoryHeroProps) {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
            {/* Background - generic dark gradient for now if no image */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 opacity-50" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-white tracking-tight">
                        {title}
                    </h1>
                    <p className="text-xl text-slate-300 md:text-2xl max-w-2xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="/audit"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-black hover:bg-slate-200 transition-all hover:scale-105"
                        >
                            Get Your Free Audit <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
