import type React from "react"
import { useDashboard } from "../contexts/DashboardContext"
import StatisticsCard from "./StatisticsCard"
import ActivityFeed from "./ActivityFeed"
import QuickActions from "./QuickActions"
import TeamPerformanceChart from "./TeamPerformanceChart"
import TopCampaignsTable from "./TopCampaignsTable"
import UpcomingTasks from "./UpcomingTasks"
import AssignedLeadsTable from "./AssignedLeadsTable"
import PersonalTaskList from "./PersonalTaskList"
import DailyProgressSummary from "./DailyProgressSummary"
import LeadManagement from "./LeadManagement/LeadManagement"
import PipelineManagement from "./PipelineManagement/PipelineManagement"
import CampaignManagement from "./CampaignManagement/CampaignManagement"
import UserManagement from "./UserManagement/UserManagement"
import Settings from "./Settings/Settings"

const MainContent: React.FC = () => {
  const { activePage, userRole } = useDashboard()

  const renderDashboard = () => {
    if (userRole === "admin") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-3">
            <StatisticsCard />
          </div>
          <div className="md:col-span-2">
            <ActivityFeed />
          </div>
          <div className="md:col-span-1">
            <QuickActions />
          </div>
        </div>
      )
    } else if (userRole === "manager") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <TeamPerformanceChart />
          </div>
          <div className="md:col-span-1">
            <UpcomingTasks />
          </div>
          <div className="md:col-span-3">
            <TopCampaignsTable />
          </div>
        </div>
      )
    } else if (userRole === "agent") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <AssignedLeadsTable />
          </div>
          <div className="md:col-span-1">
            <PersonalTaskList />
          </div>
          <div className="md:col-span-3">
            <DailyProgressSummary />
          </div>
        </div>
      )
    } else {
      return (
        <p className="text-gray-300">
          Role based access control.
        </p>
      )
    }
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
      </h2>
      {activePage === "dashboard" ? (
        renderDashboard()
      ) : activePage === "leads" ? (
        <LeadManagement />
      ) : activePage === "pipeline" ? (
        <PipelineManagement />
      ) : activePage === "campaigns" ? (
        <CampaignManagement />
      ) : activePage === "users" ? (
        <UserManagement />
      ) : activePage === "settings" ? (
        <Settings />
      ) : (
        <p className="text-gray-300">
          This is the {activePage} page. Content for this page will be dynamically loaded here.
        </p>
      )}
    </div>
  )
}

export default MainContent

