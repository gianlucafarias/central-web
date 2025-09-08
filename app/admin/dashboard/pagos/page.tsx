import { SiteHeader } from "@/components/admin/site-header"
import { PaymentsTable } from "@/components/admin/payments-table"

export default function PagosPage() {
  return (
    <>
      <SiteHeader title="Gestión de Pagos" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <PaymentsTable />
          </div>
        </div>
      </div>
    </>
  )
}

