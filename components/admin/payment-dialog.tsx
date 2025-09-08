"use client"

import * as React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { paymentService, type PaymentResponse } from "@/lib/services/payment-service"
import { Loader2 } from "lucide-react"


interface PaymentSocio {
  id: string
  nombreCompleto: string
  numeroSocio: string
  status: string
}

interface PaymentDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  socio: PaymentSocio | null
  onPaymentSuccess?: (payment: PaymentResponse) => void
}

interface PaymentFormData {
  amount: string
  periodCovered: string
  paymentDate: string
  paymentMethod: string
  notes: string
}

export function PaymentDialog({ isOpen, onOpenChange, socio, onPaymentSuccess }: PaymentDialogProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState<PaymentFormData>({
    amount: '',
    periodCovered: '',
    paymentDate: new Date().toISOString().split('T')[0],
    paymentMethod: '',
    notes: '',
  })

  if (!socio) {
    return null
  }

  const handleInputChange = (field: keyof PaymentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData({
      amount: '',
      periodCovered: '',
      paymentDate: new Date().toISOString().split('T')[0],
      paymentMethod: '',
      notes: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validación básica del frontend
    if (!formData.amount || !formData.periodCovered || !formData.paymentMethod) {
      toast.error('Por favor completa todos los campos requeridos')
      return
    }

    const amount = parseFloat(formData.amount)
    if (isNaN(amount) || amount <= 0) {
      toast.error('El monto debe ser un número válido mayor a 0')
      return
    }

    setIsLoading(true)

    try {
      const result = await paymentService.createManualPayment({
        userId: socio.id,
        amount,
        periodCovered: formData.periodCovered,
        paymentMethod: formData.paymentMethod,
        notes: formData.notes,
      })

      if (result.checkoutUrl) {
        toast.success('Redirigiendo a MercadoPago...')
        window.open(result.checkoutUrl, '_blank')
      } else {
        toast.success('Pago registrado exitosamente. Estado: PENDING')
      }

      onPaymentSuccess?.(result)
      resetForm()
      onOpenChange(false)

    } catch (error) {
      console.error('Error registrando pago:', error)
      toast.error(error instanceof Error ? error.message : 'Error al registrar el pago')
    } finally {
      setIsLoading(false)
    }
  }

  const handleClose = () => {
    if (!isLoading) {
      resetForm()
      onOpenChange(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose} modal={true}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Registrar Pago Manual</DialogTitle>
          <DialogDescription>
            Registrando pago para{' '}
            <span className="font-medium">{socio.nombreCompleto}</span>{' '}
            (N° Socio: {socio.numeroSocio}).
            <br />
            Estado actual:{' '}
            <Badge 
              variant={
                socio.status === 'ACTIVE' 
                  ? 'default' 
                  : socio.status === 'INACTIVE' 
                    ? 'destructive' 
                    : 'outline'
              }
            >
              {socio.status === 'ACTIVE' ? 'Activo' : 
               socio.status === 'INACTIVE' ? 'Inactivo' : 'Pendiente'}
            </Badge>
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="paymentAmount">Monto *</Label>
              <Input 
                id="paymentAmount" 
                type="number"
                step="0.01"
                min="0.01"
                placeholder="Ej: 3000.00"
                value={formData.amount}
                onChange={(e) => handleInputChange('amount', e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="periodCovered">Período Cubierto *</Label>
              <Input 
                id="periodCovered"
                placeholder="Ej: Noviembre 2024, Cuota Mensual, etc."
                value={formData.periodCovered}
                onChange={(e) => handleInputChange('periodCovered', e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="paymentDate">Fecha de Pago *</Label>
              <Input 
                id="paymentDate" 
                type="date"
                value={formData.paymentDate}
                onChange={(e) => handleInputChange('paymentDate', e.target.value)}
                disabled={isLoading}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="paymentMethod">Método de Pago *</Label>
              <Select 
                value={formData.paymentMethod}
                onValueChange={(value) => handleInputChange('paymentMethod', value)}
                disabled={isLoading}
                required
              >
                <SelectTrigger id="paymentMethod">
                  <SelectValue placeholder="Seleccionar método" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="efectivo">Efectivo</SelectItem>
                  <SelectItem value="tarjeta_debito">Tarjeta de Débito</SelectItem>
                  <SelectItem value="tarjeta_credito">Tarjeta de Crédito</SelectItem>
                  <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                  <SelectItem value="cheque">Cheque</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="paymentNotes">Notas Adicionales</Label>
              <Textarea 
                id="paymentNotes"
                placeholder="Observaciones, detalles del pago, etc. (opcional)"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
                disabled={isLoading}
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button 
              type="submit"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? 'Procesando...' : 'Confirmar Pago'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
} 