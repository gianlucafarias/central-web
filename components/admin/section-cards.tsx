'use client'

import { mockAdminUsers } from '@/app/admin/dashboard/data-socios'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, UserPlus, DollarSign, UserCheck } from 'lucide-react'
import { calculateAndFormatSociosKPIs, SociosKPIs } from '@/lib/utils'
import { PaymentServiceStatus } from './payment-service-status'

export function SectionCards() {
  const kpis: SociosKPIs = calculateAndFormatSociosKPIs(mockAdminUsers)

  const cardItems = [
    {
      title: 'Total Socios',
      value: kpis.totalSocios.toString(),
      icon: Users,
      description: 'Número total de socios registrados',
    },
    {
      title: 'Socios Activos',
      value: kpis.sociosAlDia.toString(),
      icon: UserCheck,
      description: 'Socios con membresía activa',
    },
    {
      title: 'Ingresos del Mes',
      value: `$${kpis.ingresosEsteMes.toLocaleString('es-AR')}`,
      icon: DollarSign,
      description: 'Total de cuotas cobradas este mes',
    },
    {
      title: 'Nuevos Socios (Mes)',
      value: kpis.sociosNuevosEsteMes.toString(),
      icon: UserPlus,
      description: 'Socios registrados este mes',
    },
  ]

  return (
    <div className="px-4 lg:px-6 space-y-4">
      {/* KPIs Cards */}
      <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 md:grid-cols-2 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card">
        {cardItems.map((item, index) => (
          <Card key={index} data-slot="card" className="flex flex-col">
            <CardHeader className="pb-2 p-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold">
                  {item.title}
                </CardTitle>
                <item.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow justify-between p-4">
              <div className="text-3xl font-bold">{item.value}</div>
              {item.description && (
                <p className="text-xs text-muted-foreground mt-1">
                  {item.description}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Payment Service Status */}
      <div className="flex justify-end">
        <PaymentServiceStatus />
      </div>
    </div>
  )
}
