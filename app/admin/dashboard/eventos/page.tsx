"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SiteHeader } from "@/components/admin/site-header"
import { PlusCircleIcon } from "lucide-react"
import { EventosDataTable } from "@/components/admin/eventos-data-table"
import { buttonVariants } from "@/components/ui/button"
import { Event } from "@/lib/events"

export default function EventosPage() {
  const [eventos, setEventos] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('/api/eventos?type=all', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const data = await response.json()
          // Convertir fechas de string a Date objects
          const eventosWithDates = data.map((event: Event) => ({
            ...event,
            eventDate: new Date(event.eventDate),
            createdAt: new Date(event.createdAt),
            updatedAt: new Date(event.updatedAt),
            registrationDeadline: event.registrationDeadline ? new Date(event.registrationDeadline) : undefined,
          }))
          setEventos(eventosWithDates)
        } else {
          console.error('Error al obtener eventos')
        }
      } catch (error) {
        console.error('Error al obtener eventos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEventos()
  }, [])

  if (loading) {
    return (
      <>
        <SiteHeader title="Gestión de Eventos" />
        <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
          <div className="text-center">Cargando eventos...</div>
        </div>
      </>
    )
  }

  return (
    <>
      <SiteHeader title="Gestión de Eventos" />
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Listado de Eventos</h2>
          <Link href="/admin/dashboard/eventos/nuevo" className={buttonVariants({ variant: "default" })}>
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Crear Nuevo Evento
          </Link>
        </div>

        <EventosDataTable data={eventos} />
      </div>
    </>
  )
}
