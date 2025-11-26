"use client"


import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "System Maintenance Scheduled",
      category: "Maintenance",
      date: "2024-03-15",
      content: "The banking portal will be under maintenance from 10 PM to 2 AM. Please plan accordingly.",
      priority: "high",
    },
    {
      id: 2,
      title: "New Security Policy Effective",
      category: "Policy",
      date: "2024-03-10",
      content: "All staff members must update their passwords to meet new security standards.",
      priority: "high",
    },
    {
      id: 3,
      title: "Q1 Performance Review Deadline",
      category: "HR",
      date: "2024-03-05",
      content: "Submit your Q1 performance reviews by March 31st.",
      priority: "medium",
    },
    {
      id: 4,
      title: "Team Building Event Confirmed",
      category: "Event",
      date: "2024-02-28",
      content: "Our annual team building event is scheduled for April 5th.",
      priority: "low",
    },
    {
      id: 5,
      title: "Training Session: Data Security",
      category: "Training",
      date: "2024-02-25",
      content: "Mandatory training on data security practices. Register in the training portal.",
      priority: "high",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Maintenance: "bg-blue-50 border-blue-200",
      Policy: "bg-purple-50 border-purple-200",
      HR: "bg-green-50 border-green-200",
      Event: "bg-pink-50 border-pink-200",
      Training: "bg-orange-50 border-orange-200",
    }
    return colors[category] || "bg-gray-50 border-gray-200"
  }

  return (
      <div className="space-y-4 h-min-screen ">
        {announcements.map((announcement) => (
          <Card
            key={announcement.id}
            className={`p-6 border-2 cursor-pointer hover:shadow-lg transition-shadow ${getCategoryColor(
              announcement.category,
            )}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-[#1e1b4b]">{announcement.title}</h3>
                  <Badge variant="secondary" className={getPriorityColor(announcement.priority)}>
                    {announcement.priority.charAt(0).toUpperCase() + announcement.priority.slice(1)}
                  </Badge>
                </div>
                <p className="text-gray-700 mb-3">{announcement.content}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Badge variant="outline">{announcement.category}</Badge>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                {new Date(announcement.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>
    
  )
}
