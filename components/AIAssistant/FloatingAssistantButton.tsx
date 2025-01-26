import type React from "react"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

interface FloatingAssistantButtonProps {
  onClick: () => void
}

const FloatingAssistantButton: React.FC<FloatingAssistantButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-8 right-8 rounded-full w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg ease-in-out transform hover:scale-105"
    >
      <HelpCircle className="h-8 w-8 text-white" />
    </Button>
  )
}

export default FloatingAssistantButton

