"use client"

import * as React from "react"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Loader2, UserPlus } from "lucide-react"

interface AddSocioDialogProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  onSocioCreated?: (socio: Socio) => void
}

interface Socio {
  id: string
  firstName: string
  lastName: string
  dni: string
  email: string
}

interface FormData {
  firstName: string
  lastName: string
  dni: string
  email: string
  phone: string
  birthDate: string
  addressStreet: string
  addressNumber: string
  addressCity: string
  addressZip: string
  socioType: string
  membershipStatus: string
  notes: string
}

interface FormErrors {
  firstName?: string
  lastName?: string
  dni?: string
  email?: string
  phone?: string
}

export function AddSocioDialog({ isOpen, onOpenChange, onSocioCreated }: AddSocioDialogProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [formData, setFormData] = React.useState<FormData>({
    firstName: '',
    lastName: '',
    dni: '',
    email: '',
    phone: '',
    birthDate: '',
    addressStreet: '',
    addressNumber: '',
    addressCity: '',
    addressZip: '',
    socioType: 'INDIVIDUAL',
    membershipStatus: 'PENDING_VALIDATION',
    notes: '',
  })
  const [errors, setErrors] = React.useState<FormErrors>({})

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'El nombre es requerido'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'El apellido es requerido'
    }

    if (!formData.dni.trim()) {
      newErrors.dni = 'El DNI es requerido'
    } else if (formData.dni.length < 7) {
      newErrors.dni = 'El DNI debe tener al menos 7 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'El teléfono debe tener al menos 10 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dni: '',
      email: '',
      phone: '',
      birthDate: '',
      addressStreet: '',
      addressNumber: '',
      addressCity: '',
      addressZip: '',
      socioType: 'INDIVIDUAL',
      membershipStatus: 'PENDING_VALIDATION',
      notes: '',
    })
    setErrors({})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch('/api/admin/socios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al crear socio')
      }

      toast.success(data.message || 'Socio creado exitosamente')
      resetForm()
      onOpenChange(false)
      onSocioCreated?.(data.socio)
    } catch (error) {
      console.error('Error creando socio:', error)
      toast.error(error instanceof Error ? error.message : 'Error desconocido al crear socio')
    } finally {
      setIsLoading(false)
    }
  }

  React.useEffect(() => {
    if (!isOpen) {
      resetForm()
    }
  }, [isOpen])

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl max-h-[95vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            Agregar Nuevo Socio
          </DialogTitle>
          <DialogDescription>
            Complete los campos para registrar un nuevo socio en el sistema.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto pr-4">
            <div className="grid gap-4 py-4">
              {/* Información Personal */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Información Personal</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nombre(s) *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="Juan Carlos"
                      className={errors.firstName ? 'border-red-500' : ''}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="lastName">Apellido(s) *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Pérez García"
                      className={errors.lastName ? 'border-red-500' : ''}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dni">DNI *</Label>
                    <Input
                      id="dni"
                      value={formData.dni}
                      onChange={(e) => handleInputChange('dni', e.target.value)}
                      placeholder="12345678"
                      className={errors.dni ? 'border-red-500' : ''}
                    />
                    {errors.dni && (
                      <p className="text-sm text-red-500 mt-1">{errors.dni}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                    <Input
                      id="birthDate"
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Información de Contacto */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Información de Contacto</h3>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="juan.perez@email.com"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+54 341 123-4567"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    value={formData.addressStreet}
                    onChange={(e) => handleInputChange('addressStreet', e.target.value)}
                    placeholder="Av. Siempre Viva 742, Rosario"
                  />
                </div>
              </div>

              {/* Información de Socio */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Información de Socio</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="socioType">Tipo de Socio</Label>
                    <Select
                      value={formData.socioType}
                      onValueChange={(value) => handleInputChange('socioType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                        <SelectItem value="HEAD">Titular de Grupo Familiar</SelectItem>
                        <SelectItem value="FAMILY_MEMBER">Miembro de Familia</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="membershipStatus">Estado de Membresía</Label>
                    <Select
                      value={formData.membershipStatus}
                      onValueChange={(value) => handleInputChange('membershipStatus', value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PENDING_VALIDATION">Pendiente de Validación</SelectItem>
                        <SelectItem value="ACTIVE">Activo</SelectItem>
                        <SelectItem value="INACTIVE">Inactivo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Notas</Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Información adicional sobre el socio..."
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="mt-4 flex-shrink-0">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Creando...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Crear Socio
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}