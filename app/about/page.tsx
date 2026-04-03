import { Metadata } from "next"
import AboutClient from "./AboutClient"

export const metadata: Metadata = {
  title: "About Eliana Tech | Turning Expertise into Autonomous Infrastructure",
  description: "We are natural systems thinkers. We design and build the AI-native architecture that allows your business to scale without human effort.",
  alternates: {
    canonical: "https://elianatech.com/about",
  },
  openGraph: {
    title: "About Eliana Tech | Turning Expertise into Autonomous Infrastructure",
    description: "We are natural systems thinkers. We design and build the AI-native architecture that allows your business to scale without human effort.",
    url: "https://elianatech.com/about",
    siteName: "Eliana Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": [
      {
        "@type": "Person",
        "name": "Mia",
        "jobTitle": "Founder & Operations Specialist",
        "description": "Mia specializes in business architecture and systems thinking, with over a decade of experience scaling seven-figure operations.",
        "affiliation": {
          "@type": "Organization",
          "name": "Eliana Tech"
        }
      },
      {
        "@type": "Person",
        "name": "Tyler",
        "jobTitle": "Co-Founder & Growth Strategist",
        "description": "Tyler is a serial founder who has scaled and sold multiple companies through brand and organic marketing strategies.",
        "affiliation": {
          "@type": "Organization",
          "name": "Eliana Tech"
        }
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Eliana Tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://elianatech.com/icon.png"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutClient />
    </>
  )
}
