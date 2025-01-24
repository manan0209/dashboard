import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Megaphone, UserPlus2 } from "lucide-react"

const QuickActions: React.FC = () => {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <UserPlus className="mr-2 h-4 w-4" /> Add Lead
        </Button>
        <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Megaphone className="mr-2 h-4 w-4" /> Create Campaign
        </Button>
        <Button className="w-full bg-gradient-to-r from-green-500 to-yellow-500 hover:from-green-600 hover:to-yellow-600 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <UserPlus2 className="mr-2 h-4 w-4" /> Invite User
        </Button>
      </CardContent>
    </Card>
  )
}

export default QuickActions

