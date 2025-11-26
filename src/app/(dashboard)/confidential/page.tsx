"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAccessGuardContext } from "@/utils/accessguard"
import { Download, FileText, Lock } from "lucide-react"

export default function ConfidentialPage() {
  const context = getAccessGuardContext()

  const files = [
    {
      id: 1,
      name: "Financial_Report_Q1_2024.pdf",
      size: "2.4 MB",
      date: "2024-03-01",
      type: "PDF",
    },
    {
      id: 2,
      name: "Employee_Salary_Structure.xlsx",
      size: "850 KB",
      date: "2024-02-28",
      type: "Excel",
    },
    {
      id: 3,
      name: "Compliance_Audit_Report.docx",
      size: "1.2 MB",
      date: "2024-02-25",
      type: "Word",
    },
    {
      id: 4,
      name: "Board_Meeting_Minutes_Feb.pdf",
      size: "945 KB",
      date: "2024-02-20",
      type: "PDF",
    },
    {
      id: 5,
      name: "Strategic_Plan_2024-2026.pptx",
      size: "3.1 MB",
      date: "2024-02-15",
      type: "PowerPoint",
    },
  ]

  return (
      <div className="space-y-4 min-h-screen">
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 mb-6">
          <Lock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-amber-800">
            These files are confidential and protected by AccessGuard. Access is logged and monitored.
          </p>
        </div>

        {files.map((file) => (
          <Card key={file.id} className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1e1b4b] mb-1">{file.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{file.size}</span>
                    <span>•</span>
                    <span>{file.type}</span>
                    <span>•</span>
                    <span>
                      {new Date(file.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <Button
                disabled={context.readonly}
                className="bg-[#818cf8] hover:bg-[#6366f1] disabled:bg-gray-300 gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          </Card>
        ))}
      </div>

  )
}
