"use client"

import { MessageSquare, Globe, Mail, Phone, Share2 } from "lucide-react"
import { useEffect, useRef } from "react"

export function OmnichannelSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const channels = [
    {
      icon: MessageSquare,
      name: "WhatsApp",
      color: "from-red-400 to-red-500",
      description: "Direct messaging",
    },
    {
      icon: Globe,
      name: "Website Chatbot",
      color: "from-red-600 to-red-700",
      description: "Custom widget",
    },
    {
      icon: MessageSquare,
      name: "Messenger",
      color: "from-red-500 to-red-600",
      description: "Facebook integration",
    },
    {
      icon: Share2,
      name: "Instagram",
      color: "from-red-700 via-red-600 to-red-500",
      description: "DM automation",
    },
    {
      icon: Mail,
      name: "Email",
      color: "from-slate-500 to-slate-600",
      description: "Automated responses",
    },
    {
      icon: Phone,
      name: "Phone",
      color: "from-red-800 to-red-700",
      description: "Voice receptionist",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">
      
    </section>
  )
}
