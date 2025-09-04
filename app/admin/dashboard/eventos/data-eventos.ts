import { Event, EventType, EventStatus } from '@/lib/events'

export const mockEventos: Event[] = [
  {
    id: 'event_1',
    title: 'Cena A Beneficio',
    description: 'Cena benéfica para recaudar fondos para el club',
    type: 'SOCIAL',
    status: 'SCHEDULED',
    eventDate: new Date(2025, 4, 16),
    startTime: '21:00',
    endTime: '23:00',
    location: 'Salon de Patin',
    isPublic: true,
    registrationRequired: true,
    registrationDeadline: new Date(2025, 4, 14),
    createdAt: new Date(2025, 3, 1),
    updatedAt: new Date(2025, 3, 1),
  },
  {
    id: 'event_2',
    title: 'Basquet Masculino',
    description: 'Partido de básquet masculino primera división',
    type: 'MATCH',
    status: 'SCHEDULED',
    eventDate: new Date(2025, 4, 9),
    startTime: '20:00',
    endTime: '22:00',
    location: 'Raul Braica, Ceres',
    homeTeam: 'Central',
    awayTeam: 'C.S.L.',
    isPublic: true,
    disciplineId: 'basquet',
    createdAt: new Date(2025, 3, 1),
    updatedAt: new Date(2025, 3, 1),
  },
  {
    id: 'event_3',
    title: 'Atenas vs. C.C.A.O.',
    description: 'Partido de fútbol de la Liga Regional',
    type: 'MATCH',
    status: 'SCHEDULED',
    eventDate: new Date(2025, 4, 5),
    startTime: '17:30',
    endTime: '19:30',
    location: 'Estadio Ciudad Deportiva, San Cristóbal',
    homeTeam: 'Atenas',
    awayTeam: 'C.C.A.O.',
    isPublic: true,
    disciplineId: 'futbol',
    createdAt: new Date(2025, 3, 1),
    updatedAt: new Date(2025, 3, 1),
  },
  {
    id: 'event_4',
    title: 'Jornada de Atletismo',
    description: 'Competencia de atletismo para todas las categorías',
    type: 'TOURNAMENT',
    status: 'SCHEDULED',
    eventDate: new Date(2025, 4, 12),
    startTime: '09:00',
    endTime: '18:00',
    location: 'Pista de Atletismo Municipal, Ceres',
    isPublic: true,
    registrationRequired: true,
    registrationDeadline: new Date(2025, 4, 10),
    createdAt: new Date(2025, 3, 1),
    updatedAt: new Date(2025, 3, 1),
  },
  {
    id: 'event_5',
    title: 'C.A. Olimpico vs. San Martín',
    description: 'Partido de fútbol de la Liga Regional',
    type: 'MATCH',
    status: 'COMPLETED',
    eventDate: new Date(2025, 3, 15),
    startTime: '16:00',
    endTime: '18:00',
    location: 'Estadio Municipal, Ceres',
    result: '2-1',
    score: '2-1',
    homeTeam: 'C.A. Olimpico',
    awayTeam: 'San Martín',
    isPublic: true,
    disciplineId: 'futbol',
    createdAt: new Date(2025, 2, 1),
    updatedAt: new Date(2025, 3, 15),
  },
  {
    id: 'event_6',
    title: 'Unión vs. C.A. Olimpico',
    description: 'Partido de fútbol de la Liga Regional',
    type: 'MATCH',
    status: 'COMPLETED',
    eventDate: new Date(2025, 3, 8),
    startTime: '17:00',
    endTime: '19:00',
    location: 'Estadio Ciudad Deportiva, Sunchales',
    result: '1-3',
    score: '1-3',
    homeTeam: 'Unión',
    awayTeam: 'C.A. Olimpico',
    isPublic: true,
    disciplineId: 'futbol',
    createdAt: new Date(2025, 2, 1),
    updatedAt: new Date(2025, 3, 8),
  },
  {
    id: 'event_7',
    title: 'Torneo de Natación Provincial',
    description: 'Competencia provincial de natación categoría adultos',
    type: 'TOURNAMENT',
    status: 'COMPLETED',
    eventDate: new Date(2025, 3, 5),
    startTime: '10:00',
    endTime: '16:00',
    location: 'Complejo Acuático, Rafaela',
    result: '2° Puesto General',
    isPublic: true,
    disciplineId: 'natacion',
    createdAt: new Date(2025, 2, 1),
    updatedAt: new Date(2025, 3, 5),
  },
  {
    id: 'event_8',
    title: 'Entrenamiento de Fútbol Juvenil',
    description: 'Entrenamiento regular de fútbol juvenil',
    type: 'TRAINING',
    status: 'CANCELLED',
    eventDate: new Date(2025, 4, 20),
    startTime: '18:00',
    endTime: '20:00',
    location: 'Cancha de Fútbol, Ceres',
    isPublic: false,
    disciplineId: 'futbol',
    notes: 'Cancelado por mal tiempo',
    createdAt: new Date(2025, 3, 1),
    updatedAt: new Date(2025, 4, 19),
  },
]

// Función para obtener eventos próximos
export function getUpcomingEvents(): Event[] {
  const now = new Date()
  return mockEventos
    .filter(event => event.eventDate >= now && event.status !== 'CANCELLED')
    .sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime())
}

// Función para obtener eventos pasados
export function getPastEvents(): Event[] {
  const now = new Date()
  return mockEventos
    .filter(event => event.eventDate < now || event.status === 'COMPLETED')
    .sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime())
}

// Función para obtener todos los eventos
export function getAllEvents(): Event[] {
  return mockEventos.sort((a, b) => b.eventDate.getTime() - a.eventDate.getTime())
}
