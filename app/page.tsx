import { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: "Eliana Tech | The Operating System for Your Business",
  description: "We don't give you tools. We install the system that runs your company. Your business, running on intelligence.",
  alternates: {
    canonical: "https://elianatech.com/",
  },
  openGraph: {
    title: "Eliana Tech | The Operating System for Your Business",
    description: "Your Business. Running on Intelligence. Elianatech installs the AI system that operates your company from leads to operations to revenue.",
    url: "https://elianatech.com/",
    siteName: "Eliana Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elianatech - The Operating System for Your Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function HomePage() {
  return <HomeClient />
}
