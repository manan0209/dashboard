'use client';

import type React from "react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"
import MainContent from "./MainContent"
import { DashboardProvider, useDashboard } from "../contexts/DashboardContext"
import { Button } from "@/components/ui/button"

const LayoutContent: React.FC = () => {
  const { userRole, setUserRole } = useDashboard()

  const toggleRole = () => {
    const roles = ["admin", "manager", "agent", "user"]
    const currentIndex = roles.indexOf(userRole)
    const nextIndex = (currentIndex + 1) % roles.length
    setUserRole(roles[nextIndex] as "admin" | "manager" | "agent" | "user")
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <MainContent />
        </main>
        <div className="p-4 bg-gray-800">
          <Button
            onClick={toggleRole}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            Toggle Role (Current: {userRole})
          </Button>
        </div>
      </div>
    </div>
  )
}

const Layout: React.FC = () => {
  return (
    <DashboardProvider>
      <LayoutContent />
    </DashboardProvider>
  )
}

export default Layout

