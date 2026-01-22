"use client"

import { useState } from "react"
import { GlassmorphismNav } from "../../components/glassmorphism-nav"
import Aurora from "../../components/Aurora"
import { Footer } from "../../components/footer"
import { faqData } from "../../lib/faq-data"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import { Input } from "../../components/ui/input"
import { Search } from "lucide-react"

export default function FAQPage() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredFaq = faqData.map(category => ({
        ...category,
        questions: category.questions.filter(
            item =>
                item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(category => category.questions.length > 0)

    return (
        <div className="min-h-screen bg-black overflow-hidden font-sans">
            <GlassmorphismNav />
            <div className="fixed inset-0 w-full h-full">
                <Aurora colorStops={["#475569", "#64748b", "#475569"]} amplitude={1.2} blend={0.6} speed={0.8} />
            </div>

            <main className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Everything you need to know about Eliana Tech's growth infrastructure and AI solutions.
                    </p>
                </div>

                <div className="relative mb-12">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                    <Input
                        type="text"
                        placeholder="Search questions..."
                        className="pl-10 py-6 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-xl focus-visible:ring-slate-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="space-y-12">
                    {filteredFaq.length > 0 ? (
                        filteredFaq.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-2">{category.category}</h2>
                                <Accordion type="single" collapsible className="w-full">
                                    {category.questions.map((item, qIdx) => (
                                        <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`} className="border-white/10">
                                            <AccordionTrigger className="text-left text-slate-200 hover:text-white hover:no-underline py-4 text-lg">
                                                {item.q}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-slate-400 text-base leading-relaxed pb-6">
                                                {item.a}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-2xl border border-white/10">
                            <p className="text-slate-400 text-lg">No questions found matching your search.</p>
                        </div>
                    )}
                </div>
            </main>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    )
}
