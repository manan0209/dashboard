"use client"
import type React from "react"
import { useState } from "react"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"
import MainContent from "./MainContent"
import AIFAQAssistant from "./AIAssistant/AIFAQAssistant"
import { DashboardProvider, useDashboard } from "../contexts/DashboardContext"
import { ThemeProvider } from "./ThemeProvider"
import LoginPage from "./auth/LoginPage"
import NoAccountPage from "./auth/NoAccountPage"

const LayoutContent: React.FC = () => {
  const { userRole, setUserRole } = useDashboard()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showNoAccount, setShowNoAccount] = useState(false)

  const handleLogin = (email: string, password: string, role: string) => {
    // Here you would typically validate the credentials and role
    // For now, we'll just set isAuthenticated to true and update the user role
    console.log("Login attempt with:", email, password, role)
    setIsAuthenticated(true)
    setUserRole(role as "admin" | "manager" | "agent")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setShowNoAccount(false)
  }

  if (!isAuthenticated) {
    if (showNoAccount) {
      return <NoAccountPage onBackToLogin={() => setShowNoAccount(false)} />
    } else {
      return <LoginPage onLogin={handleLogin} onNoAccount={() => setShowNoAccount(true)} />
    }
  }

  return (
    <div className="flex flex-col h-screen bg-background text-foreground md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav onLogout={handleLogout} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <MainContent />
        </main>
      </div>
      <AIFAQAssistant />
    </div>
  )
}

const Layout: React.FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DashboardProvider>
        <LayoutContent />
      </DashboardProvider>
    </ThemeProvider>
  )
}

export default Layout

