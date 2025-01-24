import React from "react"
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
} from "lucide-react"

const Sidebar: React.FC = () => {
  const { activePage, setActivePage, userRole } = useDashboard()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" as const },
    { name: "Leads", icon: Users, page: "leads" as const },
    { name: "Pipeline", icon: GitBranch, page: "pipeline" as const },
    { name: "Campaigns", icon: Megaphone, page: "campaigns" as const },
    { name: "Users", icon: UserCircle, page: "users" as const, adminOnly: true },
    { name: "Settings", icon: Settings, page: "settings" as const },
  ]

  return (
    <motion.aside
      className={`bg-black text-white h-screen sticky top-0 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
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
            className="text-white hover:bg-gray-800"
          >
            {isCollapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {navItems.map((item) => {
              if (item.adminOnly && userRole !== "admin") return null
              return (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-white hover:bg-gray-800 ${
                      activePage === item.page
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                        : ""
                    }`}
                    onClick={() => setActivePage(item.page)}
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
  )
}

export default Sidebar

