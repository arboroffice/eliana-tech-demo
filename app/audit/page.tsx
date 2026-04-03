import { Metadata } from "next"
import AuditClient from "./AuditClient"

export const metadata: Metadata = {
  title: "OS Audit - how ai fits into your business | Eliana Tech",
  description: "Take the OS Audit - how ai fits into your business. We'll map your gaps, match you to the right industry playbook, and show exactly what AI infrastructure we'd build for you.",
  alternates: {
    canonical: "https://elianatech.com/audit",
  },
  openGraph: {
    title: "OS Audit - how ai fits into your business | Eliana Tech",
    description: "Take the OS Audit - how ai fits into your business. We'll map your gaps, match you to the right industry playbook, and show exactly what AI infrastructure we'd build for you.",
    url: "https://elianatech.com/audit",
    siteName: "Eliana Tech",
    locale: "en_US",
    type: "website",
  },
}

export default function AuditPage() {
  return <AuditClient />
}
