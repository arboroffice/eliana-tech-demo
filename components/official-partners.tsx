"use client"
import Image from "next/image"

interface OfficialPartnersProps {
    className?: string
    variant?: "light" | "dark"
}

export function OfficialPartners({ className = "", variant = "light" }: OfficialPartnersProps) {
    const labelColor = variant === "dark" ? "text-white/50" : "text-[#888]"

    const logos = [
        { src: "/images/claude-logo.png",      alt: "Claude",           w: 110, darkBg: false },
        { src: "/images/openai-logo.png",       alt: "OpenAI",           w: 110, darkBg: false },
        { src: "/images/meta-logo-new.png",     alt: "Meta",             w: 130, darkBg: false },
        { src: "/images/google-partner.svg",    alt: "Google Partner",   w: 130, darkBg: false },
        { src: "/images/openclaw-logo.png",     alt: "OpenClaw",         w: 110, darkBg: true  },
    ]

    return (
        <div className={className}>
            <p className={`text-[9px] tracking-[0.4em] uppercase ${labelColor} font-black mb-6`}>
                Official Infrastructure Partners
            </p>
            <div className="flex flex-wrap gap-4 items-center">
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className={`flex items-center justify-center px-5 py-3 border ${
                            logo.darkBg
                                ? "bg-[#0C0C0C] border-[#0C0C0C]"
                                : "bg-white border-[#E4E3DE]"
                        }`}
                        style={{ minWidth: 80 }}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.w}
                            height={44}
                            className="h-10 w-auto object-contain"
                            style={{ filter: "none" }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
