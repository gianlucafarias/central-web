"use client"

import * as React from "react"
import { AdminUserView } from "@/app/admin/dashboard/data-socios"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"
import { Loader2, Search, User, CreditCard, X } from "lucide-react"
import { PaymentDialog } from "./payment-dialog"
import type { PaymentResponse } from "@/lib/services/payment-service"

interface QuickPaymentDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onPaymentSuccess?: (payment: PaymentResponse) => void
}

interface SearchResult {
  success: boolean
  socios: AdminUserView[]
  total: number
  query: string
}

export function QuickPaymentDialog({ 
  isOpen, 
  onOpenChange, 
  onPaymentSuccess 
}: QuickPaymentDialogProps) {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [searchResults, setSearchResults] = React.useState<AdminUserView[]>([])
  const [isSearching, setIsSearching] = React.useState(false)
  const [selectedSocio, setSelectedSocio] = React.useState<AdminUserView | null>(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false)
  const [hasSearched, setHasSearched] = React.useState(false)

  // Debounce para la búsqueda
  const [debouncedQuery, setDebouncedQuery] = React.useState('')

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

  // Realizar búsqueda cuando cambia el query debounced
  React.useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      performSearch(debouncedQuery)
    } else {
      setSearchResults([])
      setHasSearched(false)
    }
  }, [debouncedQuery])

  const performSearch = async (query: string) => {
    if (!query.trim()) return

    setIsSearching(true)
    setHasSearched(true)

    try {
      const response = await fetch(`/api/admin/socios/search?query=${encodeURIComponent(query)}`)
      
      if (!response.ok) {
        throw new Error('Error al buscar socios')
      }

      const data: SearchResult = await response.json()
      
      if (data.success) {
        setSearchResults(data.socios)
      } else {
        setSearchResults([])
        toast.error('Error en la búsqueda')
      }

    } catch (error) {
      console.error('Error en búsqueda:', error)
      toast.error('Error al buscar socios')
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleSocioSelect = (socio: AdminUserView) => {
    setSelectedSocio(socio)
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSuccess = (payment: PaymentResponse) => {
    onPaymentSuccess?.(payment)
    // Actualizar el socio en los resultados de búsqueda
    setSearchResults(prev => 
      prev.map(socio => 
        socio.id === payment.userId 
          ? {
              ...socio,
              lastPaymentAmount: Number(payment.amount),
              lastPaymentDate: new Date(payment.createdAt),
              status: 'ACTIVE' as const,
            }
          : socio
      )
    )
  }

  const handleClose = () => {
    setSearchQuery('')
    setSearchResults([])
    setHasSearched(false)
    setSelectedSocio(null)
    onOpenChange(false)
  }

  const handlePaymentModalClose = (open: boolean) => {
    setIsPaymentModalOpen(open)
    if (!open) {
      setSelectedSocio(null)
    }
  }

  const getSocioTypeInfo = (socio: AdminUserView) => {
    if (socio.familyHeadId) {
      return { type: 'Familiar', variant: 'outline' as const }
    } else if (socio.familyMembersCount > 0) {
      return { type: 'Titular', variant: 'secondary' as const }
    } else {
      return { type: 'Individual', variant: 'secondary' as const }
    }
  }

  const getStatusInfo = (status: AdminUserView['status']) => {
    switch (status) {
      case 'ACTIVE':
        return { text: 'Activo', variant: 'default' as const }
      case 'INACTIVE':
        return { text: 'Inactivo', variant: 'destructive' as const }
      case 'PENDING_VALIDATION':
        return { text: 'Pendiente', variant: 'outline' as const }
      default:
        return { text: status, variant: 'outline' as const }
    }
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleClose} modal={true}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Registro Rápido de Pago
            </DialogTitle>
            <DialogDescription>
              Busca un socio por DNI, número de socio o nombre para registrar un pago
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Campo de búsqueda */}
            <div className="space-y-2">
              <Label htmlFor="search-socio">Buscar Socio</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="search-socio"
                  placeholder="Ingresa DNI, número de socio o nombre..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-10"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2 p-0"
                    onClick={() => setSearchQuery('')}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Escribe al menos 2 caracteres para buscar
              </p>
            </div>

            {/* Indicador de carga */}
            {isSearching && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="ml-2 text-sm text-muted-foreground">Buscando...</span>
              </div>
            )}

            {/* Resultados de búsqueda */}
            {!isSearching && hasSearched && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">
                    Resultados ({searchResults.length})
                  </Label>
                  {searchResults.length > 0 && (
                    <span className="text-xs text-muted-foreground">
                      Selecciona un socio para registrar el pago
                    </span>
                  )}
                </div>

                {searchResults.length === 0 ? (
                  <div className="text-center py-8">
                    <User className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <p className="mt-2 text-sm text-muted-foreground">
                      No se encontraron socios con &#39;{searchQuery}&#39;
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Intenta con DNI, número de socio o nombre completo
                    </p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-[300px] pr-4">
                    <div className="space-y-2">
                      {searchResults.map((socio) => {
                        const typeInfo = getSocioTypeInfo(socio)
                        const statusInfo = getStatusInfo(socio.status)

                        return (
                          <div
                            key={socio.id}
                            className="flex items-center justify-between rounded-lg border p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                            onClick={() => handleSocioSelect(socio)}
                          >
                            <div className="flex-1 space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-medium">
                                  {socio.firstName} {socio.lastName}
                                </span>
                                <Badge variant={typeInfo.variant} className="text-xs">
                                  {typeInfo.type}
                                </Badge>
                                <Badge variant={statusInfo.variant} className="text-xs">
                                  {statusInfo.text}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <span>DNI: {socio.dni}</span>
                                <span>N° Socio: {socio.numeroSocio}</span>
                                {socio.lastPaymentDate && (
                                  <span>
                                    Último pago: {new Date(socio.lastPaymentDate).toLocaleDateString('es-AR')}
                                  </span>
                                )}
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              Registrar Pago
                            </Button>
                          </div>
                        )
                      })}
                    </div>
                  </ScrollArea>
                )}
              </div>
            )}

            {/* Mensaje inicial */}
            {!hasSearched && !isSearching && (
              <div className="text-center py-8">
                <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Comienza escribiendo para buscar socios
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <Button variant="outline" onClick={handleClose}>
              Cancelar
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modal de pago */}
      <PaymentDialog
        isOpen={isPaymentModalOpen}
        onOpenChange={handlePaymentModalClose}
        socio={selectedSocio}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </>
  )
}
