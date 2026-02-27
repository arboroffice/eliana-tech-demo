"use client"

import { motion } from "framer-motion"

export function BrandLogos() {
    const logos = [
        "HubSpot",
        "Salesforce",
        "QuickBooks",
        "ServiceTitan",
        "Shopify",
        "Webflow",
        "Stripe",
        "Slack",
        "Zapier",
        "Zoom",
        "Notion",
        "Airtable",
        "Intercom",
        "Calendly",
        "GoHighLevel",
    ]

    // Double for seamless infinite loop
    const doubled = [...logos, ...logos]

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="flex w-full">
                <motion.div
                    className="flex shrink-0 gap-10 sm:gap-16 px-10 sm:px-16"
                    animate={{ x: [0, "-50%"] }}
                    transition={{ duration: 35, ease: "linear", repeat: Infinity }}
                >
                    {doubled.map((name, idx) => (
                        <div key={`${name}-${idx}`} className="flex items-center gap-4 group whitespace-nowrap">
                            <span className="w-1 h-1 rounded-full bg-stone-200 group-hover:bg-stone-400 transition-colors duration-300" />
                            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.35em] text-stone-300 group-hover:text-stone-900 transition-colors duration-300">
                                {name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient fade edges */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
    )
}
