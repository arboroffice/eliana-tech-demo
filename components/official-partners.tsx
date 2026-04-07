"use client"
import Image from "next/image"

interface OfficialPartnersProps {
    className?: string
    variant?: "light" | "dark"
}

export function OfficialPartners({ className = "", variant = "light" }: OfficialPartnersProps) {
    const labelColor = variant === "dark" ? "text-white/50" : "text-[#888]"

    return (
        <div className={className}>
            <p className={`text-[9px] tracking-[0.4em] uppercase ${labelColor} font-black mb-8`}>Official Infrastructure Partners</p>
            <div className="flex flex-wrap gap-x-8 gap-y-6 items-center">

                {/* Claude */}
                <div className="rounded overflow-hidden h-10 w-auto">
                    <Image src="/images/claude-logo.png" alt="Claude" width={100} height={40} className="h-10 w-auto object-contain" />
                </div>

                {/* OpenAI */}
                <Image src="/images/openai-logo.png" alt="OpenAI" width={110} height={40} className="h-9 w-auto object-contain" />

                {/* Meta */}
                <Image src="/images/meta-logo-new.png" alt="Meta Business Partner" width={120} height={40} className="h-10 w-auto object-contain" />

                {/* Google Partner */}
                <Image src="/images/google-partner.svg" alt="Google Partner" width={120} height={48} className="h-12 w-auto object-contain" />

                {/* OpenClaw — dark bg logo, show on a dark pill */}
                <div className="bg-[#0C0C0C] rounded px-3 py-1.5 flex items-center">
                    <Image src="/images/openclaw-logo.png" alt="OpenClaw" width={100} height={32} className="h-7 w-auto object-contain" />
                </div>

            </div>
        </div>
    )
}
