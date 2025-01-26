"use client"
import type React from "react"
import { useState } from "react"
import UsersTable from "./UsersTable"
import AddUserModal from "./AddUserModal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const UserManagement: React.FC = () => {
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">User Management</h2>
        <Button
          onClick={() => setIsAddUserModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <UsersTable />
      </div>
      <AddUserModal isOpen={isAddUserModalOpen} onClose={() => setIsAddUserModalOpen(false)} />
    </div>
  )
}

export default UserManagement

