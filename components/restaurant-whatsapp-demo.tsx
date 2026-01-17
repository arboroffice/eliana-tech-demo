"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { MessageSquare, Check, Utensils, Shield } from "lucide-react"

export function RestaurantWhatsAppDemo() {
    const [messages, setMessages] = useState<Array<{ text: string, isUser: boolean, time: string }>>([])
    const containerRef = useRef(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })

    const conversation = [
        { text: "Hi, do you have any tables for 4 people tonight around 7:30?", isUser: true, delay: 500 },
        { text: "Hello! Checking availability for tonight...", isUser: false, delay: 1500 },
        { text: "We're fully booked at 7:30, but we have a table for 4 available at 8:15 PM inside, or 6:45 PM on the patio. Do either of those work?", isUser: false, delay: 2500 },
        { text: "8:15 inside sounds good.", isUser: true, delay: 4000 },
        { text: "Perfect! Table for 4 at 8:15 PM tonight is confirmed. See you then! 🍷", isUser: false, delay: 5000 }
    ]

    useEffect(() => {
        if (isInView) {
            conversation.forEach((msg, index) => {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        text: msg.text,
                        isUser: msg.isUser,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }])
                }, msg.delay)
            })
        }
    }, [isInView])

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div ref={containerRef}>
                        <div className="md:w-[380px] mx-auto bg-white rounded-[2.5rem] p-4 shadow-2xl border-8 border-slate-900 relative">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-10"></div>

                            {/* Header */}
                            <div className="bg-[#075E54] text-white p-4 rounded-t-2xl flex items-center gap-3 pt-8 pb-4">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <Utensils className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">La Piazza Bistro</h3>
                                    <p className="text-xs text-green-100 flex items-center gap-1">
                                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                        Online
                                    </p>
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="bg-[#e5ddd5] h-[450px] overflow-y-auto p-4 flex flex-col gap-4">
                                {messages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`max-w-[80%] p-3 rounded-lg shadow-sm text-sm relative ${msg.isUser ? "bg-[#dcf8c6] self-end rounded-tr-none" : "bg-white self-start rounded-tl-none"
                                            }`}
                                    >
                                        <p className="text-slate-800">{msg.text}</p>
                                        <span className="text-[10px] text-slate-500 block text-right mt-1">{msg.time}</span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Input Area */}
                            <div className="bg-[#f0f0f0] p-3 rounded-b-2xl flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                <div className="flex-1 h-10 bg-white rounded-full"></div>
                                <div className="w-10 h-10 rounded-full bg-[#075E54] flex items-center justify-center">
                                    <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Fill Your Tables <span className="text-emerald-400">Automatically</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Eliana handles dining reservations, menu questions, and large party inquiries instantly. Stop missing covers because you were too busy serving tables to answer the phone.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Zero missed interaction",
                                "Handle dietary questions instantly",
                                "Manage reservations 24/7",
                                "Send automated reminders"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
