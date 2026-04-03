import { Metadata } from "next"
import CaaSClient from "./CaaSClient"

export const metadata: Metadata = {
  title: "Claude as a Service (CaaS) | Eliana Tech",
  description: "We set up, train, and deploy Claude as your AI workforce. Custom agents that run your business, manage your life, and multiply your output.",
  alternates: {
    canonical: "https://elianatech.com/caas",
  },
  openGraph: {
    title: "Claude as a Service (CaaS) | Eliana Tech",
    description: "We set up, train, and deploy Claude as your AI workforce. Custom agents that run your business, manage your life, and multiply your output.",
    url: "https://elianatech.com/caas",
    siteName: "Eliana Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function CaaSLandingPage() {
  return <CaaSClient />
}
