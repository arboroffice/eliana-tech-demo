import { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: "Eliana Tech | Build your AI operations layer. Scale without headcount.",
  description: "Turn your business into an AI-powered machine. We install infrastructure that executes tasks, connects tools, and runs your business in the background.",
  alternates: {
    canonical: "https://elianatech.com/",
  },
  openGraph: {
    title: "Eliana Tech | Build your AI operations layer. Scale without headcount.",
    description: "Turn your business into an AI-powered machine. We install infrastructure that executes tasks, connects tools, and runs your business in the background.",
    url: "https://elianatech.com/",
    siteName: "Eliana Tech",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return <HomeClient />
}
