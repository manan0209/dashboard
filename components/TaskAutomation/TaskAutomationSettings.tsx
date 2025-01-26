"use client"

import type React from "react"
import { useState } from "react"
import AutomationTemplateCard from "./AutomationTemplateCard"
import CustomAutomationModal from "./CustomAutomationModal"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const TaskAutomationSettings: React.FC = () => {
  const [isCustomAutomationModalOpen, setIsCustomAutomationModalOpen] = useState(false)
  const [automationTemplates, setAutomationTemplates] = useState([
    {
      id: 1,
      title: "Welcome Email",
      description: "Sends a welcome email to new leads",
      isActive: true,
      executionCount: 1250,
      successRate: 98,
    },
    {
      id: 2,
      title: "Follow-Up Reminder",
      description: "Reminds agents to follow up with leads after 3 days",
      isActive: true,
      executionCount: 875,
      successRate: 92,
    },
    {
      id: 3,
      title: "Lead Scoring",
      description: "Automatically scores leads based on their interactions",
      isActive: false,
      executionCount: 3000,
      successRate: 95,
    },
  ])

  const toggleAutomation = (id: number) => {
    setAutomationTemplates(
      automationTemplates.map((template) =>
        template.id === id ? { ...template, isActive: !template.isActive } : template,
      ),
    )
  }

  const handleSaveCustomAutomation = (automation: any) => {
    // Here you would typically send this data to your backend
    console.log("New custom automation:", automation)
    // For now, we'll just add it to our local state
    setAutomationTemplates([
      ...automationTemplates,
      {
        id: automationTemplates.length + 1,
        title: automation.name,
        description: `Trigger: ${automation.triggerEvent}, Action: ${automation.action}`,
        isActive: true,
        executionCount: 0,
        successRate: 100,
      },
    ])
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Task Automation Settings</h2>
        <Button
          onClick={() => setIsCustomAutomationModalOpen(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          <Plus className="mr-2 h-4 w-4" /> Create Custom Automation
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automationTemplates.map((template) => (
          <AutomationTemplateCard
            key={template.id}
            title={template.title}
            description={template.description}
            isActive={template.isActive}
            executionCount={template.executionCount}
            successRate={template.successRate}
            onToggle={() => toggleAutomation(template.id)}
          />
        ))}
      </div>
      <CustomAutomationModal
        isOpen={isCustomAutomationModalOpen}
        onClose={() => setIsCustomAutomationModalOpen(false)}
        onSave={handleSaveCustomAutomation}
      />
    </div>
  )
}

export default TaskAutomationSettings

