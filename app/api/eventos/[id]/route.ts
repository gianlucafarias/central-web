import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'

const prisma = new PrismaClient()

// GET - Obtener evento por ID (público)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const event = await prisma.event.findUnique({
      where: {
        id,
        isPublic: true // Solo eventos públicos
      },
      include: {
        discipline: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    })

    if (!event) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error fetching event:', error)
    return NextResponse.json(
      { error: 'Error al obtener evento' },
      { status: 500 }
    )
  }
}

// PUT - Actualizar evento (temporalmente sin protección)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Restaurar autenticación en producción
    // const authHeader = request.headers.get('authorization')
    // if (!verifyAuth(authHeader)) {
    //   return NextResponse.json(
    //     { error: 'No autorizado' },
    //     { status: 401 }
    //   )
    // }

    const body = await request.json()
    const { id } = await params
    // Verificar que el evento existe
    const existingEvent = await prisma.event.findUnique({
      where: { id }
    })

    if (!existingEvent) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }

    // Actualizar el evento
    const event = await prisma.event.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        type: body.type,
        status: body.status,
        eventDate: body.eventDate ? new Date(body.eventDate) : undefined,
        startTime: body.startTime,
        endTime: body.endTime,
        location: body.location,
        address: body.address,
        isPublic: body.isPublic,
        registrationRequired: body.registrationRequired,
        registrationDeadline: body.registrationDeadline ? new Date(body.registrationDeadline) : null,
        homeTeam: body.homeTeam,
        awayTeam: body.awayTeam,
        result: body.result,
        score: body.score,
        imageUrl: body.imageUrl,
        externalUrl: body.externalUrl,
        notes: body.notes,
        disciplineId: body.disciplineId || null,
      },
      include: {
        discipline: {
          select: {
            id: true,
            name: true,
            slug: true
          }
        }
      }
    })

    return NextResponse.json(event)
  } catch (error) {
    console.error('Error updating event:', error)
    return NextResponse.json(
      { error: 'Error al actualizar evento' },
      { status: 500 }
    )
  }
}

// DELETE - Eliminar evento (temporalmente sin protección)
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // TODO: Restaurar autenticación en producción
    // const authHeader = request.headers.get('authorization')
    // if (!verifyAuth(authHeader)) {
    //   return NextResponse.json(
    //     { error: 'No autorizado' },
    //     { status: 401 }
    //   )
    // }

    // Verificar que el evento existe
    const { id } = await params
    const existingEvent = await prisma.event.findUnique({
      where: { id }
    })

    if (!existingEvent) {
      return NextResponse.json(
        { error: 'Evento no encontrado' },
        { status: 404 }
      )
    }

    // Eliminar el evento
    await prisma.event.delete({
      where: { id }
    })

    return NextResponse.json({ message: 'Evento eliminado correctamente' })
  } catch (error) {
    console.error('Error deleting event:', error)
    return NextResponse.json(
      { error: 'Error al eliminar evento' },
      { status: 500 }
    )
  }
}
