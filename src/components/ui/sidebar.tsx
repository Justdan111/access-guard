"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, User, Bell, Lock, Settings, LogOut, ChevronsLeft, ChevronsRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Announcements", href: "/announcements", icon: Bell },
  { name: "Confidential Files", href: "/confidential", icon: Lock },
   { name: "Profile", href: "/profile", icon: User },
//   { name: "Admin", href: "/admin", icon: Settings },
]

interface SidebarProps {
  onCollapseChange?: (isCollapsed: boolean) => void;
}

export function Sidebar({ onCollapseChange }: SidebarProps) {
    const router = useRouter();
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapse = () => {
    const newCollapsedState = !isCollapsed
    setIsCollapsed(newCollapsedState)
    
   
    if (onCollapseChange) {
      onCollapseChange(newCollapsedState)
    }
    
   
    const event = new CustomEvent('sidebarStateChange', { 
      detail: { isCollapsed: newCollapsedState } 
    })
    window.dispatchEvent(event)
  }

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-[#1e1b4b] border-r border-[#3730a3] pt-8 flex flex-col transition-all duration-300 ease-in-out",
      isCollapsed ? "w-20" : "w-64"
    )}>
      {/* Logo and Collapse Button */}
      <div className={cn("px-6 mb-12 flex items-start", isCollapsed ? "justify-center px-2" : "justify-between")} >
        <div className={cn(isCollapsed && "hidden")}>
          <div className="text-2xl font-bold text-white" >
            <span className="text-[#818cf8]">Access</span> Guard
          </div>
          <p className="text-xs text-[#a5b4fc] mt-1">Secure Portal</p>
        </div>
        {isCollapsed && (
          <div className="text-xl font-bold text-[#818cf8]">AG</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-[#c7d2fe] hover:bg-[#312e81] hover:text-white" 
          onClick={toggleCollapse}
        >
          {isCollapsed ? <ChevronsRight className="h-5 w-5" /> : <ChevronsLeft className="h-5 w-5" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className={cn("flex-1 space-y-2", isCollapsed ? "px-2" : "px-4")}>
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              title={isCollapsed ? item.name : ""}
              className={cn(
                "flex items-center gap-3 rounded-lg transition-colors",
                isCollapsed ? "px-2 py-3 justify-center" : "px-4 py-3",
                isActive ? "bg-[#818cf8] text-white" : "text-[#c7d2fe] hover:bg-[#312e81]",
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className={cn("border-t border-[#3730a3]", isCollapsed ? "p-2" : "p-4")}>
        <button 
          title={isCollapsed ? "Logout" : ""}
          className={cn(
            "flex items-center gap-3 w-full rounded-lg text-[#c7d2fe] hover:bg-[#312e81] transition-colors",
            isCollapsed ? "px-2 py-3 justify-center" : "px-4 py-3"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  )
}