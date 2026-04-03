import { Metadata } from "next"
import CaaSAdminClient from "./CaaSAdminClient"

export const metadata: Metadata = {
  title: "CaaS Admin Dashboard | Eliana Tech",
  description: "Internal administrative dashboard for Claude as a Service. Manage client portfolios, monitor agent deployments, and track real-time operational performance.",
  robots: "noindex, nofollow", // Internal admin page
  alternates: {
    canonical: "https://elianatech.com/caas/admin",
  },
}

export default function CaaSAdminPage() {
  return <CaaSAdminClient />
}
