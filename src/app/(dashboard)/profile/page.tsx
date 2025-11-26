"use client"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getAccessGuardContext } from "@/utils/accessguard"
import { useState } from "react"

export default function ProfilePage() {
  const context = getAccessGuardContext()
  const [isEditing, setIsEditing] = useState(false)

  const profileData = {
    fullName: "John Doe",
    department: "Corporate Banking",
    email: "john.doe@wemabank.com",
    staffId: "WB-2024-001234",
    phone: "+234 (0) 701 234 5678",
    position: "Senior Analyst",
    joinDate: "January 15, 2020",
  }

  return (
   
      <div className="max-w-2xl min-h-screen">
        {/* Profile Header */}
        <Card className="p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-linear-to-br from-[#818cf8] to-[#3730a3] rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">JD</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#1e1b4b]">{profileData.fullName}</h2>
                <p className="text-gray-600">{profileData.position}</p>
              </div>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              disabled={context.readonly}
              className="bg-[#818cf8] hover:bg-[#6366f1] disabled:bg-gray-300"
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </Button>
          </div>
        </Card>

        {/* Profile Form */}
        <Card className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
              <Input
                value={profileData.fullName}
                disabled={!isEditing || context.readonly}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Staff ID</label>
              <Input
                value={profileData.staffId}
                disabled={true}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
              <Input
                value={profileData.email}
                disabled={!isEditing || context.readonly}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
              <Input
                value={profileData.phone}
                disabled={!isEditing || context.readonly}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Department</label>
              <Input
                value={profileData.department}
                disabled={!isEditing || context.readonly}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Position</label>
              <Input
                value={profileData.position}
                disabled={true}
                className="disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex gap-3 pt-4">
              <Button disabled={context.readonly} className="bg-[#818cf8] hover:bg-[#6366f1] disabled:bg-gray-300">
                Save Changes
              </Button>
              <Button onClick={() => setIsEditing(false)} variant="outline">
                Cancel
              </Button>
            </div>
          )}
        </Card>
      </div>
   
  )
}
