"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, User, Bell, Lock, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Announcements", href: "/announcements", icon: Bell },
  { name: "Confidential Files", href: "/confidential", icon: Lock },
  { name: "Admin", href: "/admin", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#1e1b4b] border-r border-[#3730a3] pt-8 flex flex-col">
      {/* Logo */}
      <div className="px-6 mb-12">
        <div className="text-2xl font-bold text-white">
          <span className="text-[#818cf8]">Access</span> Guard
        </div>
        <p className="text-xs text-[#a5b4fc] mt-1">Secure Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                isActive ? "bg-[#818cf8] text-white" : "text-[#c7d2fe] hover:bg-[#312e81]",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-[#3730a3]">
        <button className="flex items-center gap-3 w-full px-4 py-3 text-[#c7d2fe] hover:bg-[#312e81] rounded-lg transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
