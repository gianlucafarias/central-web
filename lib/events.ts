export type EventType = 'MATCH' | 'TOURNAMENT' | 'TRAINING' | 'SOCIAL' | 'MEETING' | 'OTHER'
export type EventStatus = 'SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'POSTPONED'

export interface Event {
    id: string;
    title: string;
    description?: string;
    type: EventType;
    status: EventStatus;
    eventDate: Date;
    startTime?: string;
    endTime?: string;
    location: string;
    address?: string;
      isPublic: boolean;
  registrationRequired: boolean;
    registrationDeadline?: Date;
    
    // Campos para partidos/deportes
    homeTeam?: string;
    awayTeam?: string;
    result?: string;
    score?: string;
    
    // Campos adicionales
    imageUrl?: string;
    externalUrl?: string;
    notes?: string;
    
    // Timestamps
    createdAt: Date;
    updatedAt: Date;
    
    // Relación opcional con disciplina
    disciplineId?: string;
  }
  
// Función para obtener todos los eventos
export async function getAllEvents(): Promise<Event[]> {
  try {
    const response = await fetch('/api/eventos?type=all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Error al obtener eventos')
    }

    const events = await response.json()
    type EventApi = {
      id: string
      title: string
      description?: string | null
      type: EventType
      status: EventStatus
      eventDate: string
      startTime?: string | null
      endTime?: string | null
      location: string
      address?: string | null
      isPublic: boolean
      registrationRequired: boolean
      registrationDeadline?: string | null
      homeTeam?: string | null
      awayTeam?: string | null
      result?: string | null
      score?: string | null
      imageUrl?: string | null
      externalUrl?: string | null
      notes?: string | null
      createdAt: string
      updatedAt: string
      disciplineId?: string | null
    }
    return (events as EventApi[]).map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description || undefined,
      type: event.type as EventType,
      status: event.status as EventStatus,
      eventDate: new Date(event.eventDate),
      startTime: event.startTime || undefined,
      endTime: event.endTime || undefined,
      location: event.location,
      address: event.address || undefined,
      isPublic: event.isPublic,
      registrationRequired: event.registrationRequired,
      registrationDeadline: event.registrationDeadline ? new Date(event.registrationDeadline) : undefined,
      homeTeam: event.homeTeam || undefined,
      awayTeam: event.awayTeam || undefined,
      result: event.result || undefined,
      score: event.score || undefined,
      imageUrl: event.imageUrl || undefined,
      externalUrl: event.externalUrl || undefined,
      notes: event.notes || undefined,
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt),
      disciplineId: event.disciplineId || undefined,
    }))
  } catch (error) {
    console.error('Error fetching events:', error)
    return []
  }
}

// Función para obtener eventos próximos
export async function getUpcomingEvents(): Promise<Event[]> {
  try {
    const response = await fetch('/api/eventos?type=upcoming', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Error al obtener eventos próximos')
    }

    const events = await response.json()
    type EventApi = {
      id: string
      title: string
      description?: string | null
      type: EventType
      status: EventStatus
      eventDate: string
      startTime?: string | null
      endTime?: string | null
      location: string
      address?: string | null
      isPublic: boolean
      registrationRequired: boolean
      registrationDeadline?: string | null
      homeTeam?: string | null
      awayTeam?: string | null
      result?: string | null
      score?: string | null
      imageUrl?: string | null
      externalUrl?: string | null
      notes?: string | null
      createdAt: string
      updatedAt: string
      disciplineId?: string | null
    }
    return (events as EventApi[]).map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description || undefined,
      type: event.type as EventType,
      status: event.status as EventStatus,
      eventDate: new Date(event.eventDate),
      startTime: event.startTime || undefined,
      endTime: event.endTime || undefined,
      location: event.location,
      address: event.address || undefined,
      isPublic: event.isPublic,
      registrationRequired: event.registrationRequired,
      registrationDeadline: event.registrationDeadline ? new Date(event.registrationDeadline) : undefined,
      homeTeam: event.homeTeam || undefined,
      awayTeam: event.awayTeam || undefined,
      result: event.result || undefined,
      score: event.score || undefined,
      imageUrl: event.imageUrl || undefined,
      externalUrl: event.externalUrl || undefined,
      notes: event.notes || undefined,
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt),
      disciplineId: event.disciplineId || undefined,
    }))
  } catch (error) {
    console.error('Error fetching upcoming events:', error)
    return []
  }
}

// Función para obtener eventos pasados
export async function getPastEvents(): Promise<Event[]> {
  try {
    const response = await fetch('/api/eventos?type=past', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error('Error al obtener eventos pasados')
    }

    const events = await response.json()
    type EventApi = {
      id: string
      title: string
      description?: string | null
      type: EventType
      status: EventStatus
      eventDate: string
      startTime?: string | null
      endTime?: string | null
      location: string
      address?: string | null
      isPublic: boolean
      registrationRequired: boolean
      registrationDeadline?: string | null
      homeTeam?: string | null
      awayTeam?: string | null
      result?: string | null
      score?: string | null
      imageUrl?: string | null
      externalUrl?: string | null
      notes?: string | null
      createdAt: string
      updatedAt: string
      disciplineId?: string | null
    }
    return (events as EventApi[]).map((event) => ({
      id: event.id,
      title: event.title,
      description: event.description || undefined,
      type: event.type as EventType,
      status: event.status as EventStatus,
      eventDate: new Date(event.eventDate),
      startTime: event.startTime || undefined,
      endTime: event.endTime || undefined,
      location: event.location,
      address: event.address || undefined,
      isPublic: event.isPublic,
      registrationRequired: event.registrationRequired,
      registrationDeadline: event.registrationDeadline ? new Date(event.registrationDeadline) : undefined,
      homeTeam: event.homeTeam || undefined,
      awayTeam: event.awayTeam || undefined,
      result: event.result || undefined,
      score: event.score || undefined,
      imageUrl: event.imageUrl || undefined,
      externalUrl: event.externalUrl || undefined,
      notes: event.notes || undefined,
      createdAt: new Date(event.createdAt),
      updatedAt: new Date(event.updatedAt),
      disciplineId: event.disciplineId || undefined,
    }))
  } catch (error) {
    console.error('Error fetching past events:', error)
    return []
  }
}

// Función para obtener eventos agrupados (compatibilidad con el componente Calendar)
export async function getEventsGrouped(): Promise<{ upcoming: Event[]; past: Event[] }> {
  try {
    const [upcoming, past] = await Promise.all([
      getUpcomingEvents(),
      getPastEvents()
    ])
    
    return { upcoming, past }
  } catch (error) {
    console.error('Error fetching grouped events:', error)
    return { upcoming: [], past: [] }
  }
}