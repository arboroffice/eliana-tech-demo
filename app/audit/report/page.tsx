import { Metadata } from "next"
import AuditReportClient from "./AuditReportClient"

export const metadata: Metadata = {
  title: "Your OS Audit Result | Eliana Tech",
  description: "View your personalized OS Audit - how ai fits into your business result report. Highlighting gaps, opportunities, and your custom implementation blueprint.",
  robots: "noindex, follow", // Audit reports are personal, usually don't want them indexed
  alternates: {
    canonical: "https://elianatech.com/audit/report",
  },
}

export default function AuditReportPage() {
  return <AuditReportClient />
}
