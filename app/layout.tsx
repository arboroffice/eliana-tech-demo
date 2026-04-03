import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Bebas_Neue, DM_Mono, Syne, Playfair_Display, Inter } from "next/font/google"
import StyledJsxRegistry from "@/lib/registry"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

const dmMono = DM_Mono({
  weight: ["300", "400"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://elianatech.com"),
  title: "Elianatech — Own Your Intelligence",
  description:
    "Transform your business with intelligent AI automation solutions. Empower your organization to operate at the speed of thought.",
  icons: {
    icon: "/icon.png",
  },
  generator: "v0.app",
  verification: {
    google: "M9V3w1l9ZxbylskIjpEzWrB_CJUPL6RS05HDEDazP8E",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${bebasNeue.variable} ${dmMono.variable} ${syne.variable} ${playfairDisplay.variable} ${inter.variable} font-sans antialiased text-gray-900`}>
        <StyledJsxRegistry>
          <Suspense fallback={null}>
            <NavigationTransition />
            <PageTransition>{children}</PageTransition>
          </Suspense>
        </StyledJsxRegistry>
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eliana Tech",
              "url": "https://elianatech.com",
              "logo": "https://elianatech.com/icon.png",
              "description": "Eliana Tech provides high-impact AI operations, founder-led automation, and custom Claude agents to transform business workflows.",
              "sameAs": [
                "https://x.com/elianatech",
                "https://www.linkedin.com/company/eliana-tech"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "USA"
              }
            })
          }}
        />
      </body>
    </html>
  )
}
