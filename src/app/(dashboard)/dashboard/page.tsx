"use client"


import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    {
      title: "Announcements",
      value: "5",
      icon: <Clock className="w-6 h-6" />,
      color: "bg-blue-50",
      textColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      title: "Pending Tasks",
      value: "12",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
    },
    {
      title: "Risk Alerts",
      value: "2",
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
  ]

  return (
      <div className=" min-h-screen">
        {/* Welcome Section */}
        <div className="bg-linear-to-r from-[#1e1b4b] to-[#3730a3] rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-[#c7d2fe]">Here's your banking portal overview. Stay secure with AccessGuard.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title} className={`p-6 border-2 ${stat.borderColor} ${stat.color}`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-2">{stat.title}</p>
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <div className={stat.textColor}>{stat.icon}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="p-6">
          <h3 className="text-lg font-bold text-[#1e1b4b] mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[
              {
                activity: "Security update completed",
                time: "2 hours ago",
              },
              {
                activity: "Profile information verified",
                time: "5 hours ago",
              },
              {
                activity: "New announcement available",
                time: "1 day ago",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
                <p className="text-gray-700">{item.activity}</p>
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
   
  )
}
