"use client"

import type React from "react"
import { useState } from "react"
import FloatingAssistantButton from "./FloatingAssistantButton"
import ChatbotModal from "./ChatbotModal"
import PredefinedFAQs from "./PredefinedFAQs"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AIFAQAssistant: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <FloatingAssistantButton onClick={() => setIsModalOpen(true)} />
      <ChatbotModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default AIFAQAssistant

