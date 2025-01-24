import type React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Lead {
  id: string
  name: string
  email: string
  phone: string
  status: string
  assignedAgent: string
  priority: "high" | "medium" | "low"
}

const mockLeads: Lead[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "(555) 123-4567",
    status: "New",
    assignedAgent: "Alice Smith",
    priority: "high",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "(555) 987-6543",
    status: "In Progress",
    assignedAgent: "Bob Johnson",
    priority: "medium",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@example.com",
    phone: "(555) 246-8135",
    status: "Qualified",
    assignedAgent: "Charlie Brown",
    priority: "low",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah@example.com",
    phone: "(555) 369-2580",
    status: "New",
    assignedAgent: "David Lee",
    priority: "high",
  },
  {
    id: "5",
    name: "Tom Brown",
    email: "tom@example.com",
    phone: "(555) 147-2589",
    status: "Lost",
    assignedAgent: "Eve Taylor",
    priority: "medium",
  },
]

const LeadsTable: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-white">Lead Name</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Phone</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Assigned Agent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="font-medium text-white">
                {lead.name}
                {lead.priority === "high" && <Badge className="ml-2 bg-red-500 text-white">High Priority</Badge>}
              </TableCell>
              <TableCell className="text-gray-300">{lead.email}</TableCell>
              <TableCell className="text-gray-300">{lead.phone}</TableCell>
              <TableCell className="text-gray-300">{lead.status}</TableCell>
              <TableCell className="text-gray-300">{lead.assignedAgent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4 px-4">
        <Button variant="outline" size="sm">
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button variant="outline" size="sm">
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default LeadsTable

