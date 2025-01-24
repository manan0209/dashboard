import type React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrganizationSettings from "./OrganizationSettings"
import Billing from "./Billing"
import Integrations from "./Integrations"

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      <Tabs defaultValue="organization" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="organization" className="mt-6">
          <OrganizationSettings />
        </TabsContent>
        <TabsContent value="billing" className="mt-6">
          <Billing />
        </TabsContent>
        <TabsContent value="integrations" className="mt-6">
          <Integrations />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Settings

