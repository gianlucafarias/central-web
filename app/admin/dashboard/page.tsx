import { DataTable } from "@/components/admin/data-table"
import { SectionCards } from "@/components/admin/section-cards"
import { SiteHeader } from "@/components/admin/site-header"
import { QuickActionsBar } from "@/components/admin/quick-actions-bar"
import { IntegrationWarnings } from "@/components/admin/integration-warnings"

import { SociosProvider } from "@/components/admin/socios-provider"

export default function Page() {
  return (
    <>
      <SiteHeader title="Panel de Control" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6 space-y-4">
              <IntegrationWarnings />
              <QuickActionsBar />
            </div>
            <SociosProvider>
              <DataTable />
            </SociosProvider>
          </div>
        </div>
      </div>
    </>
  )
}
