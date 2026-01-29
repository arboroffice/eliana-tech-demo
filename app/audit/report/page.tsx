"use client"

import { useEffect, useState } from "react"
import { AuditReportPrint } from "@/components/audit-report-print"

export default function AuditReportPage() {
  const [data, setData] = useState<{ formData: any; auditScore: number } | null>(null)

  useEffect(() => {
    try {
      const raw = localStorage.getItem("elianatech-audit-report")
      if (raw) setData(JSON.parse(raw))
    } catch {}
  }, [])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500">No audit data found. Please complete the audit first.</p>
      </div>
    )
  }

  return <AuditReportPrint formData={data.formData} auditScore={data.auditScore} />
}
