"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react"
import { toast } from "sonner"

interface Payment {
  id: string
  amount: number
  periodCovered: string
  paymentDate: string
  paymentMethod: string
  status: string
  transactionId: string | null
  createdAt: string
  user: {
    id: string
    firstName: string | null
    lastName: string | null
    dni: string
  }
}

interface PaymentsResponse {
  payments: Payment[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export function PaymentsTable() {
  const [payments, setPayments] = React.useState<Payment[]>([])
  const [pagination, setPagination] = React.useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  })
  const [loading, setLoading] = React.useState(true)
  const [searchTerm, setSearchTerm] = React.useState('')
  const [statusFilter, setStatusFilter] = React.useState<string>('all')

  const fetchPayments = React.useCallback(async (page = 1) => {
    try {
      setLoading(true)
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
      })

      const response = await fetch(`/api/admin/payments?${params}`)
      if (!response.ok) {
        throw new Error('Error al cargar los pagos')
      }

      const data: PaymentsResponse = await response.json()
      setPayments(data.payments)
      setPagination(data.pagination)
    } catch (error) {
      console.error('Error:', error)
      toast.error('Error al cargar los pagos')
    } finally {
      setLoading(false)
    }
  }, [pagination.limit])

  React.useEffect(() => {
    fetchPayments()
  }, [fetchPayments])

  const filteredPayments = React.useMemo(() => {
    return payments.filter(payment => {
      const matchesSearch = searchTerm === '' || 
        payment.user.dni.toLowerCase().includes(searchTerm.toLowerCase()) ||
        `${payment.user.firstName} ${payment.user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.periodCovered.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = statusFilter === 'all' || payment.status === statusFilter
      
      return matchesSearch && matchesStatus
    })
  }, [payments, searchTerm, statusFilter])

  const handlePageChange = (newPage: number) => {
    fetchPayments(newPage)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(amount)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const getStatusBadge = (status: string) => {
    const variants = {
      COMPLETED: { variant: 'default' as const, text: 'Completado' },
      PENDING: { variant: 'outline' as const, text: 'Pendiente' },
      FAILED: { variant: 'destructive' as const, text: 'Fallido' },
      REFUNDED: { variant: 'secondary' as const, text: 'Reembolsado' },
    }
    
    const config = variants[status as keyof typeof variants] || { variant: 'outline' as const, text: status }
    return <Badge variant={config.variant}>{config.text}</Badge>
  }

  return (
    <div className="px-4 lg:px-6">
      <Card>
        <CardHeader>
          <CardTitle>Historial de Pagos</CardTitle>
          <CardDescription>
            Registro completo de todos los pagos registrados en el sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Filtros */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2">
              <SearchIcon className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por DNI, nombre o período..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="status-filter" className="text-sm font-medium">
                Estado:
              </Label>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger id="status-filter" className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="COMPLETED">Completados</SelectItem>
                  <SelectItem value="PENDING">Pendientes</SelectItem>
                  <SelectItem value="FAILED">Fallidos</SelectItem>
                  <SelectItem value="REFUNDED">Reembolsados</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabla */}
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Socio</TableHead>
                  <TableHead>DNI</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Período</TableHead>
                  <TableHead>Método</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha Pago</TableHead>
                  <TableHead>Registrado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      Cargando pagos...
                    </TableCell>
                  </TableRow>
                ) : filteredPayments.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      No se encontraron pagos
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredPayments.map((payment) => (
                    <TableRow key={payment.id}>
                      <TableCell className="font-medium">
                        {payment.user.firstName} {payment.user.lastName}
                      </TableCell>
                      <TableCell>{payment.user.dni}</TableCell>
                      <TableCell className="font-mono">
                        {formatCurrency(Number(payment.amount))}
                      </TableCell>
                      <TableCell>{payment.periodCovered}</TableCell>
                      <TableCell className="capitalize">
                        {payment.paymentMethod === 'MANUAL' ? 'Manual' : payment.paymentMethod}
                      </TableCell>
                      <TableCell>{getStatusBadge(payment.status)}</TableCell>
                      <TableCell>{formatDate(payment.paymentDate)}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {formatDate(payment.createdAt)}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Paginación */}
          {pagination.pages > 1 && (
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando {((pagination.page - 1) * pagination.limit) + 1} a{' '}
                {Math.min(pagination.page * pagination.limit, pagination.total)} de{' '}
                {pagination.total} pagos
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page - 1)}
                  disabled={pagination.page <= 1}
                >
                  <ChevronLeftIcon className="h-4 w-4" />
                  Anterior
                </Button>
                <span className="text-sm">
                  Página {pagination.page} de {pagination.pages}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handlePageChange(pagination.page + 1)}
                  disabled={pagination.page >= pagination.pages}
                >
                  Siguiente
                  <ChevronRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
