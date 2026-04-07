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
  title: "Elianatech | Bringing AI to Businesses Worldwide",
  description:
    "The official architecture for modern business. We install specialized AI infrastructure that handles the admin, ops, and data — so you can operate at the speed of thought.",
  icons: {
    icon: [
      { url: "/icon.png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    title: "Elianatech | Bringing AI to Businesses Worldwide",
    description: "The official architecture for modern business. We install specialized AI infrastructure that handles the admin, ops, and data.",
    url: "https://elianatech.com",
    siteName: "Elianatech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elianatech - AI Operations Layer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elianatech | Bringing AI to Businesses Worldwide",
    description: "The official architecture for modern business.",
    images: ["/og-image.png"],
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
              },
              "areaServed": [
                { "@type": "City", "name": "New York" },
                { "@type": "City", "name": "Silicon Valley" },
                { "@type": "City", "name": "Austin" },
                { "@type": "City", "name": "London" },
                { "@type": "City", "name": "Dubai" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Architecture & Operations",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autonomous Infrastructure Installation" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "The Managed Workforce (AI Operatives)" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Operations Audit" } }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}
