"use client";
import type React from "react";
import { Sidebar } from "@/components/ui/sidebar";
import { Header } from "@/components/ui/header";
import { SidebarProvider } from "@/components/ui/sidebar-provider";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
// import { useAuth } from "@/lib/context/AuthContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const router = useRouter();


  useEffect(() => {
    const handleSidebarChange = (e: CustomEvent) => {
      setIsSidebarCollapsed(e.detail.isCollapsed);
    };

    window.addEventListener(
      "sidebarStateChange" as any,
      handleSidebarChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "sidebarStateChange" as any,
        handleSidebarChange as EventListener
      );
    };
  }, []);


  console.log("Dashboard Layout - Rendering dashboard");
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar onCollapseChange={setIsSidebarCollapsed} />
        <div
          className={`transition-all duration-300 ease-in-out ${
            isSidebarCollapsed ? "lg:pl-20" : "lg:pl-72"
          }`}
        >
          <Header title={""} />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
