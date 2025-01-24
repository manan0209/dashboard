import type React from "react"
import { createContext, useContext, useState } from "react"

type Page = "dashboard" | "leads" | "pipeline" | "campaigns" | "users" | "settings"
type Role = "admin" | "manager" | "agent" | "user"

interface DashboardContextType {
  activePage: Page
  setActivePage: (page: Page) => void
  userRole: Role
  setUserRole: (role: Role) => void
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined)

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePage, setActivePage] = useState<Page>("dashboard")
  const [userRole, setUserRole] = useState<Role>("admin")

  return (
    <DashboardContext.Provider value={{ activePage, setActivePage, userRole, setUserRole }}>
      {children}
    </DashboardContext.Provider>
  )
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}

