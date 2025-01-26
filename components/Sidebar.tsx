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
  Bot,
  BarChart2,
  Zap,
  HelpCircle,
} from "lucide-react"

const Sidebar: React.FC = () => {
  const { activePage, setActivePage, userRole } = useDashboard()
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, page: "dashboard" as const, roles: ["admin", "manager", "agent"] },
    { name: "Leads", icon: Users, page: "leads" as const, roles: ["admin", "manager", "agent"] },
    { name: "Pipeline", icon: GitBranch, page: "pipeline" as const, roles: ["admin", "manager", "agent"] },
    { name: "Campaigns", icon: Megaphone, page: "campaigns" as const, roles: ["admin", "manager"] },
    { name: "Users", icon: UserCircle, page: "users" as const, roles: ["admin"] },
    { name: "AI Automation", icon: Bot, page: "ai-automation" as const, roles: ["admin", "manager"] },
    { name: "Task Automation", icon: Zap, page: "task-automation" as const, roles: ["admin", "manager"] },
    { name: "Performance", icon: BarChart2, page: "performance" as const, roles: ["admin"] },
    { name: "FAQ & Training", icon: HelpCircle, page: "faq" as const, roles: ["admin", "manager", "agent"] },
    { name: "Settings", icon: Settings, page: "settings" as const, roles: ["admin", "manager", "agent"] },
  ]

  return (
    <motion.aside
      className={`bg-card text-card-foreground h-screen sticky top-0 transition-all duration-300 ease-in-out ${
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
            className="text-muted-foreground hover:text-foreground hover:bg-accent"
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

