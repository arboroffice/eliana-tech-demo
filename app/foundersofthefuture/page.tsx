import { Metadata } from "next"
import FOTFClient from "./FOTFClient"

export const metadata: Metadata = {
  title: "Founders Of The Future | Eliana Tech",
  description: "A movement of founders building systems that run their businesses. Stop playing with AI, start building money-making infrastructure.",
  alternates: {
    canonical: "https://elianatech.com/foundersofthefuture",
  },
  openGraph: {
    title: "Founders Of The Future | Eliana Tech",
    description: "A movement of founders building systems that run their businesses. Stop playing with AI, start building money-making infrastructure.",
    url: "https://elianatech.com/foundersofthefuture",
    siteName: "Eliana Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function FoundersOfTheFuturePage() {
  return <FOTFClient />
}
