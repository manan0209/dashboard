"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useDashboard } from "../contexts/DashboardContext"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  GitBranch,
  Megaphone,
  UserCircle,
  Settings,
  ChevronLeft,
  ChevronRight,
  Bot,
  BarChart2,
  Zap,
  HelpCircle,
  Menu,
  PieChart,
  X,
} from "lucide-react"

const Sidebar: React.FC = () => {
  const { activePage, setActivePage, userRole } = useDashboard()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" as const, roles: ["admin", "manager", "agent"] },
    { name: "Leads", icon: Users, page: "leads" as const, roles: ["admin", "manager", "agent"] },
    { name: "Pipeline", icon: GitBranch, page: "pipeline" as const, roles: ["admin", "manager", "agent"] },
    { name: "Campaigns", icon: Megaphone, page: "campaigns" as const, roles: ["admin", "manager"] },
    { name: "Customer Retention", icon: Users, page: "customer-retention" as const, roles: ["admin", "manager"] },
    { name: "Users", icon: UserCircle, page: "users" as const, roles: ["admin"] },
    { name: "AI Automation", icon: Bot, page: "ai-automation" as const, roles: ["admin", "manager"] },
    { name: "Task Automation", icon: Zap, page: "task-automation" as const, roles: ["admin", "manager"] },
    { name: "Performance", icon: BarChart2, page: "performance" as const, roles: ["admin", "manager"] },
    { name: "Analytics", icon: PieChart, page: "analytics" as const, roles: ["admin", "manager"] },
    { name: "FAQ & Training", icon: HelpCircle, page: "faq" as const, roles: ["admin", "manager", "agent"] },
    { name: "Settings", icon: Settings, page: "settings" as const, roles: ["admin", "manager", "agent"] },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      <motion.aside
        className={`bg-card text-card-foreground fixed md:sticky top-0 left-0 h-screen transition-all duration-300 ease-in-out z-40 ${
          isCollapsed ? "w-16" : "w-64"
        } ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        initial={false}
        animate={{ width: isCollapsed ? 64 : 256 }}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h1 className={`text-2xl font-bold ${isCollapsed ? "hidden" : "block"}`}>GhostSales</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-muted-foreground hover:text-foreground hover:bg-accent hidden md:flex"
            >
              {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
          <nav className="flex-grow">
            <ul className="space-y-2">
              {navItems.map((item) => {
                if (!item.roles.includes(userRole)) return null
                return (
                  <li key={item.name}>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-foreground hover:bg-accent ${
                        activePage === item.page ? "bg-accent text-accent-foreground" : ""
                      }`}
                      onClick={() => {
                        setActivePage(item.page)
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {!isCollapsed && <span>{item.name}</span>}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar

