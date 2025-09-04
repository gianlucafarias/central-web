import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'
import { EventType, EventStatus } from '@/lib/events'
import { verifyAuth } from '@/lib/auth'

const prisma = new PrismaClient()

// GET - Obtener todos los eventos (público)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // upcoming, past, all
    const disciplineId = searchParams.get('disciplineId')
    const limit = searchParams.get('limit')

    let whereClause: any = {
      isPublic: true // Solo eventos públicos
    }

    // Filtrar por disciplina si se especifica
    if (disciplineId) {
      whereClause.disciplineId = disciplineId
    }

    // Filtrar por tipo de eventos
    if (type === 'upcoming') {
      whereClause.eventDate = {
        gte: new Date()
      }
      whereClause.status = {
        not: 'CANCELLED'
      }
    } else if (type === 'past') {
      whereClause.OR = [
        {
          eventDate: {
            lt: new Date()
          }
        },
        {
          status: 'COMPLETED'
        }
      ]
    }

    const events = await prisma.event.findMany({
      where: whereClause,
      orderBy: type === 'upcoming' 
        ? { eventDate: 'asc' }
        : { eventDate: 'desc' },
      take: limit ? parseInt(limit) : undefined,
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

    return NextResponse.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return NextResponse.json(
      { error: 'Error al obtener eventos' },
      { status: 500 }
    )
  }
}

// POST - Crear nuevo evento (temporalmente sin protección)
export async function POST(request: NextRequest) {
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
    
    // Validar datos requeridos
    if (!body.title || !body.eventDate || !body.location) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Crear el evento
    const event = await prisma.event.create({
      data: {
        title: body.title,
        description: body.description,
        type: body.type || 'OTHER',
        status: body.status || 'SCHEDULED',
        eventDate: new Date(body.eventDate),
        startTime: body.startTime,
        endTime: body.endTime,
        location: body.location,
        address: body.address,
        isPublic: body.isPublic ?? true,
        registrationRequired: body.registrationRequired ?? false,
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

    return NextResponse.json(event, { status: 201 })
  } catch (error) {
    console.error('Error creating event:', error)
    return NextResponse.json(
      { error: 'Error al crear evento' },
      { status: 500 }
    )
  }
}
