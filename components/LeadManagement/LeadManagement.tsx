"use client"

import type React from "react"
import { useState } from "react"
import Filters from "./Filters"
import LeadsTable from "./LeadsTable"
import AddLeadButton from "./AddLeadButton"
import AddLeadModal from "./AddLeadModal"

const LeadManagement: React.FC = () => {
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false)

  const handleResetFilters = () => {
    // Implement reset filters logic here
    console.log("Filters reset")
  }

  return (
    <div className="space-y-6">
      <Filters onReset={handleResetFilters} />
      <LeadsTable />
      <AddLeadButton onClick={() => setIsAddLeadModalOpen(true)} />
      <AddLeadModal isOpen={isAddLeadModalOpen} onClose={() => setIsAddLeadModalOpen(false)} />
    </div>
  )
}

export default LeadManagement

