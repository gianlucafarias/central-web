"use client"

import { useState, useEffect, useCallback } from 'react'

export interface Socio {
  id: string
  numeroSocio: string
  firstName: string
  lastName: string
  nombreCompleto: string
  dni: string
  phone: string
  email: string
  status: string
  role: string
  createdAt: string
  familyHeadId?: string
  familyMembersCount: number
  lastPaymentAmount?: number
  lastPaymentDate?: string
  lastPaymentStatus?: string
}

interface SociosResponse {
  success: boolean
  socios: Socio[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export function useSocios() {
  const [socios, setSocios] = useState<Socio[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  })

  const fetchSocios = useCallback(async (page: number = 1, limit: number = 10) => {
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/admin/socios?page=${page}&limit=${limit}`)
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      
      const data: SociosResponse = await response.json()
      
      if (data.success) {
        setSocios(data.socios)
        setPagination(data.pagination)
      } else {
        throw new Error('Error en la respuesta del servidor')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
      setError(errorMessage)
      console.error('Error fetching socios:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const searchSocios = useCallback(async (query: string) => {
    if (!query || query.length < 2) {
      return []
    }
    
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/admin/socios/search?query=${encodeURIComponent(query)}`)
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      
      if (data.success) {
        return data.socios
      } else {
        throw new Error('Error en la respuesta del servidor')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Error desconocido'
      setError(errorMessage)
      console.error('Error searching socios:', err)
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  const refreshSocios = useCallback(() => {
    fetchSocios(pagination.page, pagination.limit)
  }, [fetchSocios, pagination.page, pagination.limit])

  // Controlar el montaje del componente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Cargar socios al montar el componente
  useEffect(() => {
    if (isMounted) {
      fetchSocios()
    }
  }, [isMounted, fetchSocios])

  return {
    socios,
    isLoading,
    error,
    pagination,
    fetchSocios,
    searchSocios,
    refreshSocios,
  }
}
