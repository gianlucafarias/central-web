import { type AdminUserView } from '@/app/admin/dashboard/data-socios'

// Definición de la estructura de los KPIs calculados (puede ser exportada si se usa en otros lugares)
export interface SociosKPIs {
  totalSocios: number
  sociosAlDia: number
  // Consideraremos INACTIVE como una mezcla de Atrasados/Cancelados para los KPIs de SectionCards
  // Si se necesita un desglose más fino, se ajustaría aquí o se añadirían más KPIs.
  sociosInactivos: number 
  sociosPendientes: number
  ingresosEsteMes: number
  sociosNuevosEsteMes: number
}

export function calculateAndFormatSociosKPIs(socios: AdminUserView[]): SociosKPIs {
  const ahora = new Date()
  const primerDiaMesActual = new Date(ahora.getFullYear(), ahora.getMonth(), 1)
  const ultimoDiaMesActual = new Date(ahora.getFullYear(), ahora.getMonth() + 1, 0)

  let ingresosEsteMes = 0
  let sociosNuevosEsteMes = 0

  socios.forEach(socio => {
    if (socio.lastPaymentDate && socio.lastPaymentAmount) {
      const fechaPago = new Date(socio.lastPaymentDate) // Ya es Date, pero por si acaso
      if (fechaPago >= primerDiaMesActual && fechaPago <= ultimoDiaMesActual) {
        ingresosEsteMes += socio.lastPaymentAmount
      }
    }
    
    const fechaAlta = new Date(socio.createdAt) // Ya es Date
    if (fechaAlta >= primerDiaMesActual && fechaAlta <= ultimoDiaMesActual) {
      sociosNuevosEsteMes++
    }
  })

  return {
    totalSocios: socios.length,
    sociosAlDia: socios.filter(s => s.status === 'ACTIVE').length,
    sociosInactivos: socios.filter(s => s.status === 'INACTIVE').length,
    sociosPendientes: socios.filter(s => s.status === 'PENDING_VALIDATION').length,
    ingresosEsteMes,
    sociosNuevosEsteMes,
  }
}

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
