"use client"

import { getAccessGuardContext } from "@/utils/accessguard"
import { Bell, User } from "lucide-react"


interface NavbarProps {
  title: string
}

export function Header({ title }: NavbarProps) {
  const context = getAccessGuardContext()

  return (
    <header className="fixed right-0 top-0 left-64 bg-white border-b border-gray-200 z-40">
      <div className="flex items-center justify-between px-8 py-4">
        <h1 className="text-2xl font-bold text-[#1e1b4b]">{title}</h1>

        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-[#1e1b4b]">{context.user.username}</p>
              <p className="text-xs text-gray-500 capitalize">{context.user.roles[0]}</p>
            </div>
            <div className="w-10 h-10 bg-[#818cf8] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
