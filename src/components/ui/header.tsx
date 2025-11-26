"use client"

import { getAccessGuardContext } from "@/utils/accessguard"
import { Bell, User } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"


interface NavbarProps {
  title: string
}

export function Header({ }: NavbarProps) {
    const context = getAccessGuardContext()
  const pathname = usePathname();
  const router = useRouter();
  const formatPageTitle = () => {
    // Remove leading slash and split the path
    const segments = pathname.split("/").filter((segment) => segment !== "");

    // Handle different scenarios
    if (segments.length === 0) return "Dashboard";

    // Only take the first segment (main route)
    const mainRoute = segments[0];

    // Format the main route (capitalize, replace hyphens)
    return mainRoute
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
 <header className="sticky top-0 z-40 border-b bg-background">
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-foreground">
            {formatPageTitle()}
          </h1>
        </div>

        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button onClick={() => router.push("/notifications")} className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm font-medium text-[#1e1b4b]">{context.user.username}</p>
              <p className="text-xs text-gray-500 capitalize">{context.user.roles[0]}</p>
            </div>
            <button onClick={() => router.push("/profile")} className="w-10 h-10 bg-[#818cf8] rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
