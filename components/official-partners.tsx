"use client"

interface OfficialPartnersProps {
    className?: string
    variant?: "light" | "dark"
}

export function OfficialPartners({ className = "", variant = "light" }: OfficialPartnersProps) {
    const labelColor = variant === "dark" ? "text-white/50" : "text-[#888]"

    const logos = [
        { src: "/images/claude-logo.png",   alt: "Claude",         darkBg: false, w: 110 },
        { src: "/images/openai-logo.png",   alt: "OpenAI",         darkBg: false, w: 110 },
        { src: "/images/meta-logo-new.png", alt: "Meta",           darkBg: false, w: 130 },
        { src: "/images/google-partner.svg",alt: "Google Partner", darkBg: false, w: 130 },
        { src: "/images/openclaw-logo.png", alt: "OpenClaw",       darkBg: true,  w: 110 },
    ]

    return (
        <div className={className}>
            <p className={`text-[9px] tracking-[0.4em] uppercase ${labelColor} font-black mb-6`}>
                Official Infrastructure Partners
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 20px",
                            border: logo.darkBg ? "none" : "1px solid #E4E3DE",
                            background: logo.darkBg ? "#0C0C0C" : "#ffffff",
                            borderRadius: 0,
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            width={logo.w}
                            height={40}
                            style={{
                                height: 36,
                                width: "auto",
                                objectFit: "contain",
                                filter: "none",
                                WebkitFilter: "none",
                                opacity: 1,
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
