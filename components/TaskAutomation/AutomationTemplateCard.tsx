import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"

interface AutomationTemplateProps {
  title: string
  description: string
  isActive: boolean
  executionCount: number
  successRate: number
  onToggle: () => void
}

const AutomationTemplateCard: React.FC<AutomationTemplateProps> = ({
  title,
  description,
  isActive,
  executionCount,
  successRate,
  onToggle,
}) => {
  return (
    <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-purple-500/50">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white flex items-center justify-between">
          {title}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className={`${isActive ? "text-green-400" : "text-gray-400"} hover:text-white`}
          >
            {isActive ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Executions</p>
            <p className="text-lg font-semibold text-white">{executionCount}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Success Rate</p>
            <div className="relative pt-1">
              <div className="overflow-hidden h-2 text-xs flex rounded bg-purple-200">
                <div
                  style={{ width: `${successRate}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                >
                  <div className="absolute top-0 -mt-1 text-xs text-white">{successRate}%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AutomationTemplateCard

