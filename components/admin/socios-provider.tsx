"use client"

import * as React from "react"
import { useSocios, Socio } from "@/hooks/use-socios"

interface SociosContextType {
  socios: Socio[]
  isLoading: boolean
  error: string | null
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
  fetchSocios: (page?: number, limit?: number) => Promise<void>
  searchSocios: (query: string) => Promise<Socio[]>
  refreshSocios: () => void
}

const SociosContext = React.createContext<SociosContextType | undefined>(undefined)

export function SociosProvider({ children }: { children: React.ReactNode }) {
  const sociosData = useSocios()

  return (
    <SociosContext.Provider value={sociosData}>
      {children}
    </SociosContext.Provider>
  )
}

export function useSociosContext() {
  const context = React.useContext(SociosContext)
  if (context === undefined) {
    throw new Error('useSociosContext must be used within a SociosProvider')
  }
  return context
}

