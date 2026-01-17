"use client"
import { useState, useEffect, useRef } from "react"
import { MessageCircle, Clock, Zap, Phone, Calendar, Mail, ClipboardCheck, Layers } from "lucide-react"

const MODES = {
  sales: {
    id: "sales",
    label: "Sales & Lead Gen",
    icon: Zap,
    header: "Never Miss a Lead",
    subheader: "AI that sells while you sleep",
    description: "Capture, qualify, and book meetings with every visitor, 24/7.",
    quote: `"We went from missing 70% of after-hours inquiries to capturing every single lead. Our bookings increased 50%."`,
    author: "Mike Rodriguez, Dealership Owner",
    conversations: [
      {
        title: "Inbound Lead Qualification",
        messages: [
          { text: "Hi! I'm interested in the Premium Plan. What's included?", sender: "customer", delay: 0 },
          { text: "Great choice! The Premium Plan includes 24/7 AI, CRM integration, and unlimited seats. Are you looking to scale your support or sales team?", sender: "ai", delay: 1000 },
          { text: "Mostly sales. We have a lot of inbound leads.", sender: "customer", delay: 2500 },
          { text: "Perfect. I can set up a demo for your sales director. How does tomorrow at 2 PM look?", sender: "ai", delay: 3500 },
          { text: "That works!", sender: "customer", delay: 5000 },
          { text: "Booked! I've sent the calendar invite. Talk soon!", sender: "ai", delay: 6000 },
        ],
      },
      {
        title: "Re-activating Cold Leads",
        messages: [
          { text: "Hey! We saw you checked out our pricing page but didn't sign up. Any questions I can answer?", sender: "ai", delay: 0 },
          { text: "Just looking around. Is there a free trial?", sender: "customer", delay: 2000 },
          { text: "Yes! We offer a 14-day free trial, no credit card required. Want me to send you the link?", sender: "ai", delay: 3500 },
          { text: "Yes please.", sender: "customer", delay: 5000 },
        ],
      },
    ],
    features: [
      { title: "24/7 Lead Capture", description: " Engage every visitor instantly, day or night.", icon: Clock },
      { title: "Smart Qualification", description: "Ask the right questions to filter for quality.", icon: ClipboardCheck },
      { title: "Instant Booking", description: "Schedule meetings directly on your calendar.", icon: Calendar }
    ]
  },
  support: {
    id: "support",
    label: "Customer Support",
    icon: MessageCircle,
    header: "World-Class Support, Instantly",
    subheader: "Resolve 80% of tickets automatically",
    description: "Give your customers immediate answers to their questions, tracking updates, and troubleshooting help.",
    quote: `"Our response time dropped from 4 hours to 2 seconds. Our customers have never been happier."`,
    author: "Sarah Chen, SaaS Founder",
    conversations: [
      {
        title: "Order Status Inquiry",
        messages: [
          { text: "Where is my order #12345?", sender: "customer", delay: 0 },
          { text: "Let me check that for you... It looks like order #12345 is out for delivery today! You should receive it by 5 PM.", sender: "ai", delay: 1500 },
          { text: "Oh great! Can I change the delivery instructions?", sender: "customer", delay: 3000 },
          { text: "I can help with that. What note would you like to leave for the driver?", sender: "ai", delay: 4500 },
        ],
      },
      {
        title: "Troubleshooting",
        messages: [
          { text: "I can't log in to my account.", sender: "customer", delay: 0 },
          { text: "I can help. Are you getting a specific error message?", sender: "ai", delay: 1000 },
          { text: "It says 'Invalid Password'.", sender: "customer", delay: 2500 },
          { text: "No problem. I've just sent a password reset link to your email. Click that and you'll be back in seconds!", sender: "ai", delay: 4000 },
        ],
      }
    ],
    features: [
      { title: "Instant Answers", description: "Resolve FAQs without human intervention.", icon: Zap },
      { title: "Ticket Routing", description: "Send complex issues to the right human agent.", icon: Layers },
      { title: "Order Lookup", description: "Connect to your backend to give real-time status.", icon: ClipboardCheck }
    ]
  },
  operations: {
    id: "operations",
    label: "Operations & Admin",
    icon: Layers,
    header: "Put Your Admin on Autopilot",
    subheader: "Run your back-office efficiently",
    description: "Automate invoicing, chasing payments, scheduling internal meetings, and updating your CRM.",
    quote: `"I used to spend 10 hours a week on admin. Now Eliana handles it all, and I focus on strategy."`,
    author: "James Wilson, Agency Director",
    conversations: [
      {
        title: "Invoice Collection",
        messages: [
          { text: "Hi Dave, just a friendly reminder that Invoice #1024 is overdue by 3 days. Can I help you process that payment?", sender: "ai", delay: 0 },
          { text: "Sorry! Must have missed it. Can you send the link again?", sender: "customer", delay: 2000 },
          { text: "Sent! Let me know if you need anything else.", sender: "ai", delay: 3500 },
        ],
      },
      {
        title: "Scheduling Coordination",
        messages: [
          { text: "Hi Team, please updated your availability for next week's sprint planning.", sender: "ai", delay: 0 },
          { text: "Done. I'm free Tuesday morning.", sender: "customer", delay: 1500 },
          { text: "Thanks! I've locked in Tuesday at 10 AM for everyone. Calendar invites sent.", sender: "ai", delay: 3000 },
        ],
      }
    ],
    features: [
      { title: "Invoice Chasing", description: "Automated polite follow-ups for payments.", icon: Mail },
      { title: "CRM Updates", description: "Keep your data clean and up-to-date automatically.", icon: Layers },
      { title: "Internal Scheduling", description: "Coordinate team meetings without the email tag.", icon: Calendar }
    ]
  }
}

export function AITeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentMode, setCurrentMode] = useState<keyof typeof MODES>('sales')
  const [activeConversationIndex, setActiveConversationIndex] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState<any[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Scroll chat to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [displayedMessages, isTyping])

  // Visibility Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current) }
  }, [])

  // Chat Logic
  useEffect(() => {
    // Reset when mode changes
    setActiveConversationIndex(0)
    setDisplayedMessages([])
  }, [currentMode])

  useEffect(() => {
    const modeData = MODES[currentMode]
    const conversation = modeData.conversations[activeConversationIndex]

    // Clear logic for new conversation
    setDisplayedMessages([])
    setIsTyping(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    let canceled = false
    const timeouts: NodeJS.Timeout[] = []

    conversation.messages.forEach((msg) => {
      const t = setTimeout(() => {
        if (canceled) return
        if (msg.sender === 'ai') {
          setIsTyping(true)
          // Typing lasts 800ms, then show message
          const t2 = setTimeout(() => {
            if (canceled) return
            setIsTyping(false)
            setDisplayedMessages(prev => [...prev, msg])
          }, 800)
          timeouts.push(t2)
        } else {
          setDisplayedMessages(prev => [...prev, msg])
        }
      }, msg.delay)
      timeouts.push(t)
    })

    // Schedule next conversation
    const lastMsgDelay = conversation.messages[conversation.messages.length - 1].delay
    const nextConvT = setTimeout(() => {
      if (canceled) return
      setActiveConversationIndex(prev => (prev + 1) % modeData.conversations.length)
    }, lastMsgDelay + 4000)
    timeouts.push(nextConvT)

    return () => {
      canceled = true
      timeouts.forEach(clearTimeout)
    }

  }, [currentMode, activeConversationIndex])


  return (
    <section id="ai-team" ref={sectionRef} className="relative z-10 py-24 bg-white rounded-b-[3rem] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header & Tabs */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Clock className="w-4 h-4" />
            Complete Business Autonomy
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Your AI Workforce Covers{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Everything
            </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {(Object.keys(MODES) as Array<keyof typeof MODES>).map((mode) => (
              <button
                key={mode}
                onClick={() => setCurrentMode(mode)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${currentMode === mode
                  ? "bg-slate-900 text-white shadow-lg scale-105"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                {/* Icon rendering needs the component from the object */}
                {mode === 'sales' && <Zap className="w-4 h-4" />}
                {mode === 'support' && <MessageCircle className="w-4 h-4" />}
                {mode === 'operations' && <Layers className="w-4 h-4" />}
                {MODES[mode].label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Left Side: Dynamic Content */}
          <div className="w-full lg:w-1/2 space-y-8 animate-in fade-in slide-in-from-left duration-500" key={`${currentMode}-text`}>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{MODES[currentMode].header}</h3>
              <p className="text-xl text-blue-600 font-medium mb-4">{MODES[currentMode].subheader}</p>
              <p className="text-slate-600 text-lg leading-relaxed">{MODES[currentMode].description}</p>
            </div>

            <div className="grid gap-4">
              {MODES[currentMode].features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <feature.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{feature.title}</div>
                    <div className="text-sm text-slate-500">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border-l-4 border-slate-900 italic text-slate-700">
              {MODES[currentMode].quote}
              <div className="mt-4 text-sm font-bold text-slate-900 not-italic">— {MODES[currentMode].author}</div>
            </div>
          </div>

          {/* Right Side: Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="max-w-md w-full relative">
              {/* Dynamic Phone Content */}
              <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl relative z-10">
                <div className="bg-white rounded-[2rem] overflow-hidden h-[600px] flex flex-col">
                  {/* Header */}
                  <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        {currentMode === 'sales' && <Zap className="w-5 h-5 text-blue-600" />}
                        {currentMode === 'support' && <MessageCircle className="w-5 h-5 text-blue-600" />}
                        {currentMode === 'operations' && <Layers className="w-5 h-5 text-blue-600" />}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">Eliana AI</div>
                        <div className="text-xs text-green-500 font-medium flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          Online Now
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 scroll-smooth">
                    {displayedMessages.map((msg, i) => (
                      <div key={i} className={`flex ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === 'customer'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
                          }`}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Area Mock */}
                  <div className="p-4 border-t border-slate-100 bg-white">
                    <div className="h-12 bg-slate-50 rounded-full border border-slate-200 flex items-center px-4 text-slate-400 text-sm">
                      Type a message...
                    </div>
                  </div>
                </div>
              </div>

              {/* Decor elements */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
