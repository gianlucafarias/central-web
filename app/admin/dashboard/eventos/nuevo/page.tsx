"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SiteHeader } from "@/components/admin/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Save, X } from "lucide-react"
import Link from "next/link"
import { EventType, EventStatus } from "@/lib/events"

export default function NuevoEventoPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'OTHER' as EventType,
    status: 'SCHEDULED' as EventStatus,
    eventDate: '',
    startTime: '',
    endTime: '',
    location: '',
    address: '',
    isPublic: true,
    registrationRequired: false,
    registrationDeadline: '',
    homeTeam: '',
    awayTeam: '',
    imageUrl: '',
    externalUrl: '',
    notes: '',
    disciplineId: '',
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // TODO: Restaurar autenticación en producción
          // 'Authorization': 'Bearer admin-token'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        router.push('/admin/dashboard/eventos')
      } else {
        const error = await response.json()
        console.error('Error al crear evento:', error)
        // Aquí podrías mostrar un toast de error
      }
    } catch (error) {
      console.error('Error al crear evento:', error)
      // Aquí podrías mostrar un toast de error
    }
  }

  const handleCancel = () => {
    router.push('/admin/dashboard/eventos')
  }

  return (
    <>
      <SiteHeader title="Crear Nuevo Evento" />
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/admin/dashboard/eventos">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver
              </Button>
            </Link>
            <h2 className="text-2xl font-semibold">Nuevo Evento</h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Información Principal */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Información Principal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Título *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder="Título del evento"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo de Evento *</Label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) => handleInputChange('type', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MATCH">Partido</SelectItem>
                        <SelectItem value="TOURNAMENT">Torneo</SelectItem>
                        <SelectItem value="TRAINING">Entrenamiento</SelectItem>
                        <SelectItem value="SOCIAL">Social</SelectItem>
                        <SelectItem value="MEETING">Reunión</SelectItem>
                        <SelectItem value="OTHER">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="Descripción del evento"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventDate">Fecha del Evento *</Label>
                    <Input
                      id="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleInputChange('eventDate', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Estado</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) => handleInputChange('status', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar estado" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SCHEDULED">Programado</SelectItem>
                        <SelectItem value="IN_PROGRESS">En Progreso</SelectItem>
                        <SelectItem value="COMPLETED">Completado</SelectItem>
                        <SelectItem value="CANCELLED">Cancelado</SelectItem>
                        <SelectItem value="POSTPONED">Pospuesto</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="startTime">Hora de Inicio</Label>
                    <Input
                      id="startTime"
                      type="time"
                      value={formData.startTime}
                      onChange={(e) => handleInputChange('startTime', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="endTime">Hora de Fin</Label>
                    <Input
                      id="endTime"
                      type="time"
                      value={formData.endTime}
                      onChange={(e) => handleInputChange('endTime', e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuración */}
            <Card>
              <CardHeader>
                <CardTitle>Configuración</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isPublic"
                    checked={formData.isPublic}
                    onCheckedChange={(checked) => handleInputChange('isPublic', checked as boolean)}
                  />
                  <Label htmlFor="isPublic">Evento Público</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="registrationRequired"
                    checked={formData.registrationRequired}
                    onCheckedChange={(checked) => handleInputChange('registrationRequired', checked as boolean)}
                  />
                  <Label htmlFor="registrationRequired">Requiere Inscripción</Label>
                </div>


                <div className="space-y-2">
                  <Label htmlFor="registrationDeadline">Fecha Límite de Inscripción</Label>
                  <Input
                    id="registrationDeadline"
                    type="date"
                    value={formData.registrationDeadline}
                    onChange={(e) => handleInputChange('registrationDeadline', e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ubicación */}
          <Card>
            <CardHeader>
              <CardTitle>Ubicación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="location">Lugar *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Nombre del lugar"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Dirección específica"
                />
              </div>
            </CardContent>
          </Card>

          {/* Información Deportiva */}
          <Card>
            <CardHeader>
              <CardTitle>Información Deportiva</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="homeTeam">Equipo Local</Label>
                  <Input
                    id="homeTeam"
                    value={formData.homeTeam}
                    onChange={(e) => handleInputChange('homeTeam', e.target.value)}
                    placeholder="Nombre del equipo local"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="awayTeam">Equipo Visitante</Label>
                  <Input
                    id="awayTeam"
                    value={formData.awayTeam}
                    onChange={(e) => handleInputChange('awayTeam', e.target.value)}
                    placeholder="Nombre del equipo visitante"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Información Adicional */}
          <Card>
            <CardHeader>
              <CardTitle>Información Adicional</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="imageUrl">URL de Imagen</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="externalUrl">URL Externa</Label>
                <Input
                  id="externalUrl"
                  value={formData.externalUrl}
                  onChange={(e) => handleInputChange('externalUrl', e.target.value)}
                  placeholder="https://ejemplo.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notas</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  placeholder="Notas adicionales"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Botones de Acción */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline" onClick={handleCancel}>
              <X className="mr-2 h-4 w-4" />
              Cancelar
            </Button>
            <Button type="submit">
              <Save className="mr-2 h-4 w-4" />
              Guardar Evento
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
