"use client"

import { useEffect, useState, useRef } from "react"

// Lead Generation Planning Demo
const LeadGenPlanDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "typing" | "thinking" | "executing">("idle")
    const [typedText, setTypedText] = useState("")
    const [currentStep, setCurrentStep] = useState(-1)
    const [stepProgress, setStepProgress] = useState<number[]>([0, 0, 0, 0, 0, 0])

    const prompt = "Create me a plan to get more leads this month"
    const steps = [
        { name: "Analyzing your market data", icon: "📊" },
        { name: "Ordering EDDM flyers (2,500 homes)", icon: "📬" },
        { name: "Scheduling flyer delivery routes", icon: "🗺️" },
        { name: "Creating social media content", icon: "📱" },
        { name: "Setting up SMS campaign", icon: "💬" },
        { name: "Building email drip sequence", icon: "📧" },
    ]

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setTypedText("")
            setCurrentStep(-1)
            setStepProgress([0, 0, 0, 0, 0, 0])
            return
        }

        // Start typing
        setPhase("typing")
        let i = 0
        const typeInterval = setInterval(() => {
            if (i < prompt.length) {
                setTypedText(prompt.substring(0, i + 1))
                i++
            } else {
                clearInterval(typeInterval)
                setTimeout(() => {
                    setPhase("thinking")
                    setTimeout(() => {
                        setPhase("executing")
                        setCurrentStep(0)
                    }, 1500)
                }, 500)
            }
        }, 50)

        return () => clearInterval(typeInterval)
    }, [isActive])

    useEffect(() => {
        if (phase !== "executing" || currentStep < 0) return

        const progressInterval = setInterval(() => {
            setStepProgress(prev => {
                const newProgress = [...prev]
                if (newProgress[currentStep] < 100) {
                    newProgress[currentStep] = Math.min(newProgress[currentStep] + 10, 100)
                } else if (currentStep < steps.length - 1) {
                    setCurrentStep(currentStep + 1)
                }
                return newProgress
            })
        }, 100)

        return () => clearInterval(progressInterval)
    }, [phase, currentStep])

    return (
        <div className="bg-slate-900 rounded-2xl p-6 h-80 overflow-hidden font-mono text-sm">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-slate-500 text-xs ml-2">nexus-ai-terminal</span>
            </div>

            {/* Input Line */}
            <div className="flex items-start gap-2 mb-4">
                <span className="text-green-400">→</span>
                <span className="text-white">{typedText}</span>
                {phase === "typing" && <span className="text-white animate-pulse">|</span>}
            </div>

            {/* Thinking State */}
            {phase === "thinking" && (
                <div className="flex items-center gap-2 text-slate-400">
                    <div className="flex gap-1">
                        <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                    </div>
                    <span>Building your lead generation plan</span>
                </div>
            )}

            {/* Execution Steps */}
            {phase === "executing" && (
                <div className="space-y-2">
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            className={`flex items-center gap-3 transition-all duration-300 ${idx <= currentStep ? "opacity-100" : "opacity-30"
                                }`}
                        >
                            <span>{step.icon}</span>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-slate-300 text-xs">{step.name}</span>
                                    {stepProgress[idx] === 100 && (
                                        <span className="text-green-400 text-xs">✓ Done</span>
                                    )}
                                </div>
                                <div className="h-1 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-green-500 transition-all duration-100"
                                        style={{ width: `${stepProgress[idx]}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

// Customer Support Demo
const CustomerSupportDemo = ({ isActive }: { isActive: boolean }) => {
    const [messages, setMessages] = useState<{ text: string; isBot: boolean; typing?: boolean }[]>([])
    const [resolved, setResolved] = useState(false)

    const conversation = [
        { text: "Hi, I need to reschedule my appointment for tomorrow", isBot: false },
        { text: "Of course! I can help with that. Let me pull up your booking...", isBot: true },
        { text: "I found your appointment for tomorrow at 2pm. When would you like to reschedule?", isBot: true },
        { text: "How about Friday at 10am?", isBot: false },
        { text: "Friday at 10am works! I've updated your appointment and sent a confirmation to your email.", isBot: true },
    ]

    useEffect(() => {
        if (!isActive) {
            setMessages([])
            setResolved(false)
            return
        }

        let msgIndex = 0
        const addMessage = () => {
            if (msgIndex < conversation.length) {
                const msg = conversation[msgIndex]
                if (msg.isBot) {
                    setMessages(prev => [...prev, { text: "", isBot: true, typing: true }])
                    setTimeout(() => {
                        setMessages(prev => prev.map((m, i) =>
                            i === prev.length - 1 ? { ...msg, typing: false } : m
                        ))
                        msgIndex++
                        setTimeout(addMessage, 1000)
                    }, 1200)
                } else {
                    setMessages(prev => [...prev, msg])
                    msgIndex++
                    setTimeout(addMessage, 800)
                }
            } else {
                setTimeout(() => setResolved(true), 500)
            }
        }

        setTimeout(addMessage, 500)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-slate-700">AI Support Agent</span>
                </div>
                {resolved && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Resolved</span>
                )}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${msg.isBot
                            ? "bg-slate-100 text-slate-800"
                            : "bg-slate-800 text-white"
                            }`}>
                            {msg.typing ? (
                                <div className="flex gap-1">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            ) : msg.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Lead Qualification Demo
const LeadQualificationDemo = ({ isActive }: { isActive: boolean }) => {
    const [leads, setLeads] = useState([
        { name: "Sarah Mitchell", source: "Website Form", score: 0, status: "new", qualified: null as boolean | null },
        { name: "James Cooper", source: "Phone Call", score: 0, status: "new", qualified: null as boolean | null },
        { name: "Emily Chen", source: "Referral", score: 0, status: "new", qualified: null as boolean | null },
    ])
    const [currentLead, setCurrentLead] = useState(-1)

    useEffect(() => {
        if (!isActive) {
            setLeads(leads.map(l => ({ ...l, score: 0, status: "new", qualified: null })))
            setCurrentLead(-1)
            return
        }

        const targetScores = [92, 45, 88]
        const qualifications = [true, false, true]

        setTimeout(() => setCurrentLead(0), 500)

        leads.forEach((_, idx) => {
            setTimeout(() => {
                setCurrentLead(idx)
                setLeads(prev => prev.map((l, i) =>
                    i === idx ? { ...l, status: "analyzing" } : l
                ))

                // Animate score
                let score = 0
                const interval = setInterval(() => {
                    score += 5
                    if (score >= targetScores[idx]) {
                        score = targetScores[idx]
                        clearInterval(interval)
                        setLeads(prev => prev.map((l, i) =>
                            i === idx ? { ...l, score, status: "done", qualified: qualifications[idx] } : l
                        ))
                    } else {
                        setLeads(prev => prev.map((l, i) =>
                            i === idx ? { ...l, score } : l
                        ))
                    }
                }, 50)
            }, idx * 1500 + 500)
        })
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Lead Qualification Engine</span>
            </div>

            <div className="p-4 space-y-3">
                {leads.map((lead, idx) => (
                    <div
                        key={idx}
                        className={`p-4 rounded-xl border transition-all duration-300 ${currentLead === idx ? "border-slate-300 bg-slate-50" : "border-slate-200"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="font-medium text-slate-800">{lead.name}</p>
                                <p className="text-xs text-slate-500">{lead.source}</p>
                            </div>
                            {lead.status === "done" && (
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${lead.qualified
                                    ? "bg-green-100 text-green-700"
                                    : "bg-slate-100 text-slate-600"
                                    }`}>
                                    {lead.qualified ? "Hot Lead 🔥" : "Nurture"}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-100 ${lead.score >= 80 ? "bg-green-500" : lead.score >= 50 ? "bg-yellow-500" : "bg-slate-400"
                                        }`}
                                    style={{ width: `${lead.score}%` }}
                                />
                            </div>
                            <span className="text-sm font-medium text-slate-600 w-12 text-right">
                                {lead.status === "analyzing" ? "..." : lead.score > 0 ? `${lead.score}%` : "-"}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Appointment Booking Demo
const AppointmentDemo = ({ isActive }: { isActive: boolean }) => {
    const [step, setStep] = useState(0)
    const [selectedDate, setSelectedDate] = useState<number | null>(null)
    const [selectedTime, setSelectedTime] = useState<string | null>(null)
    const [booked, setBooked] = useState(false)

    const times = ["9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"]
    const days = Array.from({ length: 7 }, (_, i) => i + 15)

    useEffect(() => {
        if (!isActive) {
            setStep(0)
            setSelectedDate(null)
            setSelectedTime(null)
            setBooked(false)
            return
        }

        setTimeout(() => setStep(1), 500)
        setTimeout(() => setSelectedDate(17), 1500)
        setTimeout(() => setStep(2), 2000)
        setTimeout(() => setSelectedTime("2:00 PM"), 3000)
        setTimeout(() => setStep(3), 3500)
        setTimeout(() => setBooked(true), 4000)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Smart Booking</span>
                {booked && <span className="text-xs text-green-600">✓ Confirmed</span>}
            </div>

            <div className="p-4">
                {step >= 1 && (
                    <div className="mb-4">
                        <p className="text-xs text-slate-500 mb-2">Select a date</p>
                        <div className="flex gap-2">
                            {days.map(day => (
                                <div
                                    key={day}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm transition-all ${selectedDate === day
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600"
                                        }`}
                                >
                                    {day}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {step >= 2 && (
                    <div className="mb-4">
                        <p className="text-xs text-slate-500 mb-2">Available times</p>
                        <div className="grid grid-cols-2 gap-2">
                            {times.map(time => (
                                <div
                                    key={time}
                                    className={`px-3 py-2 rounded-lg text-sm text-center transition-all ${selectedTime === time
                                        ? "bg-slate-900 text-white"
                                        : "bg-slate-100 text-slate-600"
                                        }`}
                                >
                                    {time}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {booked && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                        <p className="text-green-800 font-medium">Appointment Booked!</p>
                        <p className="text-green-600 text-sm">Jan 17 at 2:00 PM</p>
                        <p className="text-green-600 text-xs mt-1">Confirmation sent via SMS & Email</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// SMS Campaign Demo
const SMSCampaignDemo = ({ isActive }: { isActive: boolean }) => {
    const [sent, setSent] = useState(0)
    const [delivered, setDelivered] = useState(0)
    const [responses, setResponses] = useState(0)
    const [phase, setPhase] = useState<"idle" | "sending" | "done">("idle")

    useEffect(() => {
        if (!isActive) {
            setSent(0)
            setDelivered(0)
            setResponses(0)
            setPhase("idle")
            return
        }

        setPhase("sending")

        const sentInterval = setInterval(() => {
            setSent(prev => {
                if (prev >= 500) {
                    clearInterval(sentInterval)
                    return 500
                }
                return prev + 25
            })
        }, 50)

        setTimeout(() => {
            const deliveredInterval = setInterval(() => {
                setDelivered(prev => {
                    if (prev >= 487) {
                        clearInterval(deliveredInterval)
                        return 487
                    }
                    return prev + 20
                })
            }, 50)
        }, 500)

        setTimeout(() => {
            const responseInterval = setInterval(() => {
                setResponses(prev => {
                    if (prev >= 73) {
                        clearInterval(responseInterval)
                        setPhase("done")
                        return 73
                    }
                    return prev + 5
                })
            }, 100)
        }, 1500)
    }, [isActive])

    return (
        <div className="bg-slate-900 rounded-2xl h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">SMS Campaign Blast</span>
                {phase === "sending" && (
                    <span className="text-xs text-green-400 animate-pulse">● Sending...</span>
                )}
                {phase === "done" && (
                    <span className="text-xs text-green-400">● Complete</span>
                )}
            </div>

            <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-white">{sent}</p>
                        <p className="text-xs text-slate-500">Sent</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-green-400">{delivered}</p>
                        <p className="text-xs text-slate-500">Delivered</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-blue-400">{responses}</p>
                        <p className="text-xs text-slate-500">Responses</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="bg-slate-800 rounded-lg p-3">
                        <p className="text-slate-400 text-xs mb-1">Campaign Message:</p>
                        <p className="text-white text-sm">"Hi! This is a reminder about our January special - 20% off all services. Reply YES to book!"</p>
                    </div>

                    {responses > 30 && (
                        <div className="bg-slate-800 rounded-lg p-3">
                            <p className="text-slate-400 text-xs mb-2">Recent Responses:</p>
                            <div className="space-y-1 text-sm">
                                <p className="text-green-400">+1 (555) 0123: "YES please!"</p>
                                <p className="text-green-400">+1 (555) 0456: "Yes, tomorrow?"</p>
                                <p className="text-green-400">+1 (555) 0789: "YES"</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

// Missed Call Text-Back Demo
const MissedCallDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "ringing" | "missed" | "texting" | "sent" | "response">("idle")

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            return
        }

        setPhase("ringing")
        setTimeout(() => setPhase("missed"), 1500)
        setTimeout(() => setPhase("texting"), 2500)
        setTimeout(() => setPhase("sent"), 3500)
        setTimeout(() => setPhase("response"), 5000)
    }, [isActive])

    return (
        <div className="bg-slate-900 rounded-2xl h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Missed Call Recovery</span>
                {phase === "response" && <span className="text-xs text-green-400">Lead Captured!</span>}
            </div>

            <div className="p-4 space-y-4">
                {/* Phone Call UI */}
                <div className={`bg-slate-800 rounded-xl p-4 transition-all ${phase === "ringing" ? "ring-2 ring-green-500 animate-pulse" : ""}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-white font-medium">+1 (555) 867-5309</p>
                            <p className="text-slate-500 text-xs">Unknown Caller</p>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${phase === "ringing" ? "bg-green-500 animate-pulse" : phase === "missed" ? "bg-red-500" : "bg-slate-700"
                            }`}>
                            {phase === "ringing" && <span className="text-white">📞</span>}
                            {phase !== "ringing" && phase !== "idle" && <span className="text-white text-xs">✕</span>}
                        </div>
                    </div>
                    {phase !== "idle" && phase !== "ringing" && (
                        <p className="text-red-400 text-xs mt-2">Missed call at 3:42 PM</p>
                    )}
                </div>

                {/* Auto Text Response */}
                {(phase === "texting" || phase === "sent" || phase === "response") && (
                    <div className="bg-slate-800 rounded-xl p-4">
                        <p className="text-slate-400 text-xs mb-2">Auto-reply sent:</p>
                        <div className="bg-blue-600 rounded-lg p-3 text-white text-sm">
                            "Hi! Sorry we missed your call. How can we help you today? Reply here or we'll call you back within 5 minutes."
                        </div>
                        {phase === "sent" && <p className="text-green-400 text-xs mt-2">✓ Delivered</p>}
                    </div>
                )}

                {/* Customer Response */}
                {phase === "response" && (
                    <div className="bg-slate-800 rounded-xl p-4">
                        <p className="text-slate-400 text-xs mb-2">Customer replied:</p>
                        <div className="bg-slate-700 rounded-lg p-3 text-white text-sm">
                            "Hi! I need a quote for tree removal. Big oak in my backyard."
                        </div>
                        <p className="text-green-400 text-xs mt-2">→ Lead added to CRM</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// Review Response Demo
const ReviewResponseDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "new" | "analyzing" | "drafting" | "posted">("idle")
    const [responseText, setResponseText] = useState("")

    const fullResponse = "Thank you so much for the kind words, Sarah! We're thrilled you loved the service. Our team takes pride in every job. See you next time! 🙏"

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setResponseText("")
            return
        }

        setPhase("new")
        setTimeout(() => setPhase("analyzing"), 1000)
        setTimeout(() => setPhase("drafting"), 2000)

        setTimeout(() => {
            let i = 0
            const typeInterval = setInterval(() => {
                if (i < fullResponse.length) {
                    setResponseText(fullResponse.substring(0, i + 1))
                    i++
                } else {
                    clearInterval(typeInterval)
                    setTimeout(() => setPhase("posted"), 500)
                }
            }, 30)
        }, 2500)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Review Management</span>
                {phase === "posted" && <span className="text-xs text-green-600">✓ Published</span>}
            </div>

            <div className="p-4 space-y-3">
                {/* Review */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center text-xs">SM</div>
                        <div>
                            <p className="text-sm font-medium text-slate-800">Sarah M.</p>
                            <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        </div>
                        {phase === "new" && <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">New</span>}
                    </div>
                    <p className="text-slate-600 text-sm">"Amazing service! They showed up on time, did great work, and cleaned up perfectly. Highly recommend!"</p>
                </div>

                {/* AI Response */}
                {phase !== "idle" && phase !== "new" && (
                    <div className="border border-slate-200 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs text-slate-500">AI Response:</span>
                            {phase === "analyzing" && <span className="text-xs text-blue-500">Analyzing sentiment...</span>}
                            {phase === "drafting" && <span className="text-xs text-blue-500">Drafting reply...</span>}
                        </div>
                        {responseText && (
                            <p className="text-slate-700 text-sm">{responseText}<span className={phase !== "posted" ? "animate-pulse" : "hidden"}>|</span></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// Invoice Collection Demo
const InvoiceCollectionDemo = ({ isActive }: { isActive: boolean }) => {
    const [invoices, setInvoices] = useState([
        { client: "Johnson Home", amount: 2450, days: 15, status: "overdue" },
        { client: "Martinez LLC", amount: 890, days: 7, status: "overdue" },
        { client: "Park Family", amount: 1200, days: 3, status: "due" },
    ])
    const [currentAction, setCurrentAction] = useState(-1)

    useEffect(() => {
        if (!isActive) {
            setInvoices(invoices.map(inv => ({ ...inv, status: inv.days > 7 ? "overdue" : "due" })))
            setCurrentAction(-1)
            return
        }

        invoices.forEach((_, idx) => {
            setTimeout(() => {
                setCurrentAction(idx)
                setInvoices(prev => prev.map((inv, i) =>
                    i === idx ? { ...inv, status: "sending" } : inv
                ))

                setTimeout(() => {
                    setInvoices(prev => prev.map((inv, i) =>
                        i === idx ? { ...inv, status: "sent" } : inv
                    ))
                }, 1000)
            }, idx * 1500 + 500)
        })
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Invoice Follow-Up</span>
            </div>

            <div className="p-4 space-y-3">
                {invoices.map((inv, idx) => (
                    <div
                        key={idx}
                        className={`p-4 rounded-xl border transition-all ${currentAction === idx ? "border-blue-300 bg-blue-50" : "border-slate-200"
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <p className="font-medium text-slate-800">{inv.client}</p>
                                <p className="text-xs text-slate-500">{inv.days} days outstanding</p>
                            </div>
                            <p className="font-bold text-slate-900">${inv.amount.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className={`text-xs px-2 py-1 rounded-full ${inv.status === "overdue" ? "bg-red-100 text-red-700" :
                                inv.status === "due" ? "bg-yellow-100 text-yellow-700" :
                                    inv.status === "sending" ? "bg-blue-100 text-blue-700" :
                                        "bg-green-100 text-green-700"
                                }`}>
                                {inv.status === "sending" ? "Sending reminder..." :
                                    inv.status === "sent" ? "✓ Reminder sent" :
                                        inv.status === "overdue" ? "Overdue" : "Due soon"}
                            </span>
                            {inv.status === "sent" && (
                                <span className="text-xs text-slate-500">via SMS + Email</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// Daily Report Demo
const DailyReportDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "gathering" | "analyzing" | "complete">("idle")
    const [stats, setStats] = useState({ calls: 0, leads: 0, booked: 0, revenue: 0 })

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setStats({ calls: 0, leads: 0, booked: 0, revenue: 0 })
            return
        }

        setPhase("gathering")
        setTimeout(() => setPhase("analyzing"), 1500)

        setTimeout(() => {
            const interval = setInterval(() => {
                setStats(prev => ({
                    calls: Math.min(prev.calls + 3, 47),
                    leads: Math.min(prev.leads + 1, 12),
                    booked: Math.min(prev.booked + 1, 8),
                    revenue: Math.min(prev.revenue + 800, 12450)
                }))
            }, 50)

            setTimeout(() => {
                clearInterval(interval)
                setStats({ calls: 47, leads: 12, booked: 8, revenue: 12450 })
                setPhase("complete")
            }, 1500)
        }, 2000)
    }, [isActive])

    return (
        <div className="bg-slate-900 rounded-2xl h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Daily Business Report</span>
                <span className="text-xs text-slate-500">Jan 28, 2025</span>
            </div>

            <div className="p-4">
                {phase === "gathering" && (
                    <div className="text-center py-8">
                        <div className="animate-spin w-8 h-8 border-2 border-slate-600 border-t-white rounded-full mx-auto mb-3" />
                        <p className="text-slate-400 text-sm">Gathering data from all sources...</p>
                    </div>
                )}

                {phase === "analyzing" && (
                    <div className="text-center py-8">
                        <div className="animate-pulse w-8 h-8 bg-blue-500 rounded-lg mx-auto mb-3" />
                        <p className="text-slate-400 text-sm">Analyzing performance...</p>
                    </div>
                )}

                {(phase === "complete" || stats.calls > 0) && phase !== "gathering" && phase !== "analyzing" && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="bg-slate-800 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold text-white">{stats.calls}</p>
                                <p className="text-xs text-slate-500">Total Calls</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold text-blue-400">{stats.leads}</p>
                                <p className="text-xs text-slate-500">New Leads</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold text-green-400">{stats.booked}</p>
                                <p className="text-xs text-slate-500">Jobs Booked</p>
                            </div>
                            <div className="bg-slate-800 rounded-lg p-3 text-center">
                                <p className="text-2xl font-bold text-white">${stats.revenue.toLocaleString()}</p>
                                <p className="text-xs text-slate-500">Revenue</p>
                            </div>
                        </div>

                        {phase === "complete" && (
                            <div className="bg-slate-800 rounded-lg p-3">
                                <p className="text-green-400 text-sm">📈 +23% vs last Tuesday</p>
                                <p className="text-slate-400 text-xs mt-1">Report sent to your inbox at 6:00 PM</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// Social Media Posting Demo
const SocialPostDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "creating" | "preview" | "scheduling" | "done">("idle")
    const [platforms, setPlatforms] = useState([false, false, false])

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setPlatforms([false, false, false])
            return
        }

        setPhase("creating")
        setTimeout(() => setPhase("preview"), 1500)
        setTimeout(() => {
            setPhase("scheduling")
            setPlatforms([true, false, false])
            setTimeout(() => setPlatforms([true, true, false]), 400)
            setTimeout(() => setPlatforms([true, true, true]), 800)
        }, 3000)
        setTimeout(() => setPhase("done"), 4500)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Social Media Automation</span>
                {phase === "done" && <span className="text-xs text-green-600">✓ Scheduled</span>}
            </div>

            <div className="p-4">
                {phase === "creating" && (
                    <div className="text-center py-6">
                        <div className="animate-pulse bg-slate-200 h-4 w-3/4 mx-auto rounded mb-2" />
                        <div className="animate-pulse bg-slate-200 h-4 w-1/2 mx-auto rounded" />
                        <p className="text-slate-500 text-xs mt-4">AI writing post...</p>
                    </div>
                )}

                {phase !== "creating" && phase !== "idle" && (
                    <div className="space-y-3">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                            <p className="text-slate-800 text-sm mb-3">
                                "🌳 Spring is here! Time to get your yard ready. Book your tree trimming this week and get 15% off. Link in bio! #TreeService #SpringCleanup"
                            </p>
                            <div className="bg-slate-200 rounded-lg h-20 flex items-center justify-center text-slate-400 text-xs">
                                [Generated Image Preview]
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-xs text-slate-500">Posting to:</span>
                            <div className="flex gap-2">
                                {["FB", "IG", "X"].map((platform, idx) => (
                                    <div
                                        key={platform}
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${platforms[idx]
                                            ? "bg-green-500 text-white"
                                            : "bg-slate-200 text-slate-400"
                                            }`}
                                    >
                                        {platforms[idx] ? "✓" : platform}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {phase === "done" && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                                <p className="text-green-700 text-sm">Scheduled for tomorrow at 10:00 AM</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// Quote Generator Demo
const QuoteGeneratorDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "input" | "calculating" | "ready">("idle")
    const [lineItems, setLineItems] = useState<{ item: string; price: number; visible: boolean }[]>([])

    const items = [
        { item: "Tree removal (large oak)", price: 1200 },
        { item: "Stump grinding", price: 250 },
        { item: "Debris hauling", price: 150 },
        { item: "Permit fee", price: 75 },
    ]

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setLineItems([])
            return
        }

        setPhase("input")
        setTimeout(() => setPhase("calculating"), 1500)

        items.forEach((item, idx) => {
            setTimeout(() => {
                setLineItems(prev => [...prev, { ...item, visible: true }])
            }, 2000 + idx * 500)
        })

        setTimeout(() => setPhase("ready"), 4500)
    }, [isActive])

    const total = lineItems.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Instant Quote Generator</span>
                {phase === "ready" && <span className="text-xs text-green-600">Ready to send</span>}
            </div>

            <div className="p-4">
                {phase === "input" && (
                    <div className="bg-slate-50 rounded-lg p-3 mb-3">
                        <p className="text-slate-500 text-xs mb-1">Customer request:</p>
                        <p className="text-slate-800 text-sm">"I need a large oak tree removed from my backyard, including the stump."</p>
                    </div>
                )}

                {phase !== "idle" && phase !== "input" && (
                    <div className="space-y-2">
                        {lineItems.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex items-center justify-between p-2 bg-slate-50 rounded-lg transition-all duration-300 ${item.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                    }`}
                            >
                                <span className="text-slate-700 text-sm">{item.item}</span>
                                <span className="text-slate-900 font-medium">${item.price}</span>
                            </div>
                        ))}

                        {lineItems.length > 0 && (
                            <div className="border-t border-slate-200 pt-2 mt-2">
                                <div className="flex items-center justify-between p-2">
                                    <span className="text-slate-900 font-bold">Total</span>
                                    <span className="text-slate-900 font-bold text-lg">${total.toLocaleString()}</span>
                                </div>
                            </div>
                        )}

                        {phase === "ready" && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center mt-3">
                                <p className="text-blue-700 text-sm">Quote ready! Send via SMS or Email?</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// Customer Win-Back Demo
const WinBackDemo = ({ isActive }: { isActive: boolean }) => {
    const [customers, setCustomers] = useState([
        { name: "David Park", lastVisit: "6 months ago", status: "idle" },
        { name: "Lisa Wong", lastVisit: "4 months ago", status: "idle" },
        { name: "Tom Bradley", lastVisit: "8 months ago", status: "idle" },
    ])

    useEffect(() => {
        if (!isActive) {
            setCustomers(prev => prev.map(c => ({ ...c, status: "idle" })))
            return
        }

        customers.forEach((_, idx) => {
            setTimeout(() => {
                setCustomers(prev => prev.map((c, i) =>
                    i === idx ? { ...c, status: "sending" } : c
                ))
                setTimeout(() => {
                    setCustomers(prev => prev.map((c, i) =>
                        i === idx ? { ...c, status: idx === 1 ? "booked" : "sent" } : c
                    ))
                }, 1000)
            }, idx * 1200 + 500)
        })
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Customer Win-Back Campaign</span>
            </div>
            <div className="p-4">
                <div className="bg-slate-50 rounded-lg p-3 mb-4 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-1">Auto-message:</p>
                    <p className="text-sm text-slate-700">"Hey [Name]! We miss you 😊 Come back this month and get 20% off your next service."</p>
                </div>
                <div className="space-y-3">
                    {customers.map((c, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                            <div>
                                <p className="font-medium text-slate-800 text-sm">{c.name}</p>
                                <p className="text-xs text-slate-500">{c.lastVisit}</p>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${c.status === "booked" ? "bg-green-100 text-green-700" :
                                c.status === "sent" ? "bg-blue-100 text-blue-700" :
                                    c.status === "sending" ? "bg-yellow-100 text-yellow-700" :
                                        "bg-slate-100 text-slate-500"
                                }`}>
                                {c.status === "booked" ? "🎉 Booked!" :
                                    c.status === "sent" ? "✓ Sent" :
                                        c.status === "sending" ? "Sending..." : "Dormant"}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// Voicemail Transcription Demo
const VoicemailDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "playing" | "transcribing" | "done">("idle")
    const [transcript, setTranscript] = useState("")
    const fullTranscript = "Hi, this is Mark from 542 Oak Street. I've got a big branch hanging over my roof after the storm. Can someone come take a look? My number is 555-0147. Thanks!"

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setTranscript("")
            return
        }

        setPhase("playing")
        setTimeout(() => setPhase("transcribing"), 2000)

        setTimeout(() => {
            let i = 0
            const interval = setInterval(() => {
                if (i < fullTranscript.length) {
                    setTranscript(fullTranscript.substring(0, i + 1))
                    i++
                } else {
                    clearInterval(interval)
                    setPhase("done")
                }
            }, 25)
        }, 2500)
    }, [isActive])

    return (
        <div className="bg-slate-900 rounded-2xl h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Voicemail AI</span>
                {phase === "done" && <span className="text-xs text-green-400">Transcribed & Tagged</span>}
            </div>
            <div className="p-4 space-y-4">
                <div className="bg-slate-800 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center ${phase === "playing" ? "animate-pulse" : ""}`}>
                            {phase === "playing" ? "🔊" : "📞"}
                        </div>
                        <div>
                            <p className="text-white text-sm">New Voicemail</p>
                            <p className="text-slate-500 text-xs">Today at 2:34 PM • 0:18</p>
                        </div>
                    </div>
                    {phase === "playing" && (
                        <div className="flex items-center gap-1">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-1 bg-blue-500 rounded animate-pulse" style={{ height: `${Math.random() * 20 + 5}px`, animationDelay: `${i * 50}ms` }} />
                            ))}
                        </div>
                    )}
                </div>

                {phase !== "idle" && phase !== "playing" && (
                    <div className="bg-slate-800 rounded-lg p-4">
                        <p className="text-slate-400 text-xs mb-2">Transcript:</p>
                        <p className="text-white text-sm">{transcript}<span className={phase !== "done" ? "animate-pulse" : "hidden"}>|</span></p>
                        {phase === "done" && (
                            <div className="mt-3 flex gap-2">
                                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Emergency</span>
                                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">New Lead</span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

// Employee Scheduling Demo
const SchedulingDemo = ({ isActive }: { isActive: boolean }) => {
    const [messages, setMessages] = useState<{ from: string; text: string; time: string }[]>([])
    const [resolved, setResolved] = useState(false)

    const convo = [
        { from: "Mike T.", text: "Hey I can't make my shift tomorrow, kid is sick", time: "8:42 AM" },
        { from: "AI", text: "Got it Mike. Checking who's available...", time: "8:42 AM" },
        { from: "AI", text: "Sarah is available and confirmed. Your shift is covered! 👍", time: "8:43 AM" },
    ]

    useEffect(() => {
        if (!isActive) {
            setMessages([])
            setResolved(false)
            return
        }

        convo.forEach((msg, idx) => {
            setTimeout(() => {
                setMessages(prev => [...prev, msg])
                if (idx === convo.length - 1) {
                    setTimeout(() => setResolved(true), 500)
                }
            }, idx * 1200 + 500)
        })
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-700">Shift Management AI</span>
                {resolved && <span className="text-xs text-green-600">✓ Shift Covered</span>}
            </div>
            <div className="p-4 space-y-3">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.from === "AI" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[85%] rounded-2xl px-4 py-2 ${msg.from === "AI" ? "bg-slate-100" : "bg-blue-500 text-white"}`}>
                            <p className="text-xs text-slate-500 mb-1">{msg.from} • {msg.time}</p>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    </div>
                ))}
                {resolved && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                        <p className="text-green-700 text-sm">Schedule updated. Both employees notified.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// Feedback Collection Demo
const FeedbackDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "sending" | "received" | "analyzing">("idle")
    const [rating, setRating] = useState(0)

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            setRating(0)
            return
        }

        setPhase("sending")
        setTimeout(() => setPhase("received"), 1500)
        setTimeout(() => {
            let r = 0
            const interval = setInterval(() => {
                if (r < 5) {
                    r++
                    setRating(r)
                } else {
                    clearInterval(interval)
                    setPhase("analyzing")
                }
            }, 200)
        }, 2500)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Post-Job Feedback</span>
            </div>
            <div className="p-4 space-y-4">
                <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                    <p className="text-xs text-slate-500 mb-2">Auto-sent after job completion:</p>
                    <p className="text-sm text-slate-700">"Thanks for choosing us! How would you rate your experience today?"</p>
                </div>

                {phase !== "idle" && phase !== "sending" && (
                    <div className="text-center py-4">
                        <p className="text-sm text-slate-600 mb-3">Customer response:</p>
                        <div className="flex justify-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className={`text-2xl transition-all ${star <= rating ? "text-yellow-400 scale-110" : "text-slate-300"}`}>
                                    ★
                                </span>
                            ))}
                        </div>
                        {rating === 5 && (
                            <p className="text-slate-600 text-sm italic">"Excellent work, very professional!"</p>
                        )}
                    </div>
                )}

                {phase === "analyzing" && (
                    <div className="space-y-2">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-green-700 text-sm">✓ 5-star review request sent</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-blue-700 text-sm">✓ Added to testimonials queue</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// Competitor Price Monitor Demo
const CompetitorDemo = ({ isActive }: { isActive: boolean }) => {
    const [competitors, setCompetitors] = useState([
        { name: "ABC Tree Service", price: 0, change: "" },
        { name: "Pro Tree Guys", price: 0, change: "" },
        { name: "Green Thumb Co", price: 0, change: "" },
    ])
    const [alert, setAlert] = useState(false)

    useEffect(() => {
        if (!isActive) {
            setCompetitors(prev => prev.map(c => ({ ...c, price: 0, change: "" })))
            setAlert(false)
            return
        }

        const prices = [
            { price: 299, change: "" },
            { price: 275, change: "↓ $25" },
            { price: 320, change: "↑ $15" },
        ]

        competitors.forEach((_, idx) => {
            setTimeout(() => {
                setCompetitors(prev => prev.map((c, i) =>
                    i === idx ? { ...c, ...prices[idx] } : c
                ))
            }, idx * 800 + 500)
        })

        setTimeout(() => setAlert(true), 3000)
    }, [isActive])

    return (
        <div className="bg-slate-900 rounded-2xl h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">Competitor Intel</span>
                <span className="text-xs text-slate-500">Tree Trimming Prices</span>
            </div>
            <div className="p-4 space-y-3">
                {competitors.map((c, idx) => (
                    <div key={idx} className="bg-slate-800 rounded-lg p-4 flex items-center justify-between">
                        <span className="text-slate-300 text-sm">{c.name}</span>
                        <div className="text-right">
                            {c.price > 0 ? (
                                <>
                                    <span className="text-white font-bold">${c.price}</span>
                                    {c.change && (
                                        <span className={`text-xs ml-2 ${c.change.includes("↓") ? "text-red-400" : "text-green-400"}`}>
                                            {c.change}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span className="text-slate-600">Scanning...</span>
                            )}
                        </div>
                    </div>
                ))}

                {alert && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                        <p className="text-yellow-400 text-sm">⚠️ Pro Tree Guys dropped prices. Consider promotional offer?</p>
                    </div>
                )}
            </div>
        </div>
    )
}

// Referral Request Demo
const ReferralDemo = ({ isActive }: { isActive: boolean }) => {
    const [phase, setPhase] = useState<"idle" | "trigger" | "sending" | "response">("idle")

    useEffect(() => {
        if (!isActive) {
            setPhase("idle")
            return
        }

        setPhase("trigger")
        setTimeout(() => setPhase("sending"), 1500)
        setTimeout(() => setPhase("response"), 3500)
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Referral Engine</span>
            </div>
            <div className="p-4 space-y-4">
                {phase !== "idle" && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-green-700 text-xs mb-1">Trigger detected:</p>
                        <p className="text-green-800 text-sm">Sarah M. left a 5-star review</p>
                    </div>
                )}

                {(phase === "sending" || phase === "response") && (
                    <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
                        <p className="text-slate-500 text-xs mb-2">Auto-sent referral request:</p>
                        <p className="text-slate-700 text-sm">"Thanks for the amazing review, Sarah! Know anyone who could use our services? Refer a friend and you both get $50 off! 🎁"</p>
                    </div>
                )}

                {phase === "response" && (
                    <div className="space-y-2">
                        <div className="bg-slate-100 rounded-lg p-3">
                            <p className="text-slate-500 text-xs mb-1">Sarah replied:</p>
                            <p className="text-slate-800 text-sm">"Yes! My neighbor John needs his trees done. His number is 555-0199"</p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                            <p className="text-blue-700 text-sm">✓ New lead created: John (Referral from Sarah M.)</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

// Email Triage Demo
const EmailTriageDemo = ({ isActive }: { isActive: boolean }) => {
    const [emails, setEmails] = useState([
        { subject: "URGENT: Fallen tree blocking driveway", priority: "", action: "" },
        { subject: "Newsletter from TreeTech Weekly", priority: "", action: "" },
        { subject: "Quote request - 3 trees", priority: "", action: "" },
        { subject: "Invoice #4521 from supplier", priority: "", action: "" },
    ])

    useEffect(() => {
        if (!isActive) {
            setEmails(prev => prev.map(e => ({ ...e, priority: "", action: "" })))
            return
        }

        const results = [
            { priority: "🔴 High", action: "→ Dispatched to crew" },
            { priority: "⚪ Low", action: "→ Archived" },
            { priority: "🟡 Medium", action: "→ Quote sent" },
            { priority: "🟢 Normal", action: "→ Forwarded to accounting" },
        ]

        emails.forEach((_, idx) => {
            setTimeout(() => {
                setEmails(prev => prev.map((e, i) =>
                    i === idx ? { ...e, ...results[idx] } : e
                ))
            }, idx * 700 + 500)
        })
    }, [isActive])

    return (
        <div className="bg-white rounded-2xl border border-slate-200 h-80 overflow-hidden">
            <div className="px-4 py-3 border-b border-slate-200 bg-slate-50">
                <span className="text-sm font-medium text-slate-700">Email Triage AI</span>
            </div>
            <div className="p-4 space-y-2">
                {emails.map((email, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-slate-800 truncate">{email.subject}</p>
                            {email.action && <p className="text-xs text-slate-500">{email.action}</p>}
                        </div>
                        {email.priority ? (
                            <span className="text-xs whitespace-nowrap">{email.priority}</span>
                        ) : (
                            <span className="text-xs text-slate-400">Analyzing...</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

const demos = [
    {
        title: "AI Command Center",
        description: "Tell the AI what you need and watch it execute. From marketing campaigns to operational tasks.",
        demo: LeadGenPlanDemo,
        size: "large"
    },
    {
        title: "24/7 Customer Support",
        description: "AI handles customer inquiries, reschedules appointments, and resolves issues instantly.",
        demo: CustomerSupportDemo,
        size: "medium"
    },
    {
        title: "Smart Lead Qualification",
        description: "Automatically score and qualify incoming leads based on your criteria.",
        demo: LeadQualificationDemo,
        size: "medium"
    },
    {
        title: "Missed Call Text-Back",
        description: "Never lose a lead. AI instantly texts back anyone who calls when you can't answer.",
        demo: MissedCallDemo,
        size: "medium"
    },
    {
        title: "Review Response AI",
        description: "Automatically respond to Google, Yelp, and Facebook reviews with personalized replies.",
        demo: ReviewResponseDemo,
        size: "medium"
    },
    {
        title: "Voicemail Transcription",
        description: "Every voicemail transcribed, categorized, and turned into action items automatically.",
        demo: VoicemailDemo,
        size: "medium"
    },
    {
        title: "SMS Campaign Blasts",
        description: "Send targeted SMS campaigns to your customer list and track responses in real-time.",
        demo: SMSCampaignDemo,
        size: "large"
    },
    {
        title: "Invoice Follow-Up",
        description: "AI chases unpaid invoices with polite, persistent reminders until you get paid.",
        demo: InvoiceCollectionDemo,
        size: "medium"
    },
    {
        title: "Automated Booking",
        description: "Let customers book appointments without any back-and-forth.",
        demo: AppointmentDemo,
        size: "medium"
    },
    {
        title: "Customer Win-Back",
        description: "Automatically reach out to dormant customers with personalized offers to bring them back.",
        demo: WinBackDemo,
        size: "medium"
    },
    {
        title: "Shift Management",
        description: "AI handles employee call-outs and finds coverage without you lifting a finger.",
        demo: SchedulingDemo,
        size: "medium"
    },
    {
        title: "Daily Business Reports",
        description: "Wake up to a complete summary of yesterday's calls, leads, bookings, and revenue.",
        demo: DailyReportDemo,
        size: "medium"
    },
    {
        title: "Post-Job Feedback",
        description: "Automatically collect reviews after every job and funnel 5-stars to Google.",
        demo: FeedbackDemo,
        size: "medium"
    },
    {
        title: "Social Media Automation",
        description: "AI creates, schedules, and posts content across all your social platforms.",
        demo: SocialPostDemo,
        size: "medium"
    },
    {
        title: "Competitor Intel",
        description: "Monitor competitor pricing and get alerts when the market shifts.",
        demo: CompetitorDemo,
        size: "medium"
    },
    {
        title: "Referral Engine",
        description: "Turn happy customers into referral machines with automated asks at the perfect moment.",
        demo: ReferralDemo,
        size: "medium"
    },
    {
        title: "Email Triage AI",
        description: "AI reads, prioritizes, and routes every email so nothing falls through the cracks.",
        demo: EmailTriageDemo,
        size: "large"
    },
    {
        title: "Instant Quote Generator",
        description: "Turn customer requests into professional quotes in seconds, not hours.",
        demo: QuoteGeneratorDemo,
        size: "medium"
    },
]

export function InteractiveDemosSection() {
    const [activeDemo, setActiveDemo] = useState<number | null>(null)
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="relative z-10">
            <div className="bg-white py-20 px-4 relative overflow-hidden">
                {/* Subtle dot pattern */}
                <div className="absolute inset-0 opacity-[0.02]">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,0,0) 1px, transparent 0)`,
                            backgroundSize: "24px 24px",
                        }}
                    />
                </div>

                <div className="max-w-7xl mx-auto relative">
                    <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-6">
                            See It In Action
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                            Your AI Team{" "}
                            <span className="bg-gradient-to-r from-slate-600 to-slate-400 bg-clip-text text-transparent">
                                Never Sleeps
                            </span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            Hover over each demo to see your AI handle real business tasks automatically.
                        </p>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        {demos.map((demo, idx) => (
                            <div
                                key={idx}
                                className={`group transition-all duration-500 ${demo.size === "large" ? "md:col-span-2" : ""}`}
                                onMouseEnter={() => setActiveDemo(idx)}
                                onMouseLeave={() => setActiveDemo(null)}
                            >
                                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-slate-200 hover:border-slate-300">
                                    <div className="mb-6">
                                        <demo.demo isActive={activeDemo === idx} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                                        {demo.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {demo.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
