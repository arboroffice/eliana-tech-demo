import { Metadata } from "next"
import CommandCenterClient from "./CommandCenterClient"

export const metadata: Metadata = {
  title: "OS Command Center | Eliana Tech",
  description: "Monitor your AI-native workforce in real-time. Manage agents, track missions, and oversee your autonomous business infrastructure from a single pane of glass.",
  alternates: {
    canonical: "https://elianatech.com/os/command-center",
  },
  openGraph: {
    title: "OS Command Center | Eliana Tech",
    description: "Monitor your AI-native workforce in real-time. Manage agents, track missions, and oversee your autonomous business infrastructure from a single pane of glass.",
    url: "https://elianatech.com/os/command-center",
    siteName: "Eliana Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function ElianaChatOS() {
  return <CommandCenterClient />
}
