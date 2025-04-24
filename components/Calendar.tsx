'use client'

// Quitar useState si ya no se usa
// import { useState } from 'react'; 
import { Calendar as CalendarIcon } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
// Quitar import Calendar
// import { Calendar } from '../components/ui/calendar';
// Reimportar Tabs
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

// Definición de la interfaz para eventos
interface Event {
  id: number;
  title: string;
  type: string;
  date: Date;
  time: string;
  location: string;
  result?: string;
  homeTeam?: string;
  awayTeam?: string;
}

// Sample event data con objetos Date
// TODO: Mover esto a un archivo separado
const events: { upcoming: Event[]; past: Event[] } = {
  upcoming: [
    {
      id: 1,
      title: "C.A. Olimpico vs. Racing Club",
      type: "Fútbol - Liga Regional",
      date: new Date(2025, 3, 25),
      time: "16:00",
      location: "Estadio Municipal, Ceres",
      homeTeam: "C.A. Olimpico",
      awayTeam: "Racing Club",
    },
    {
      id: 2,
      title: "Torneo de Baloncesto Juvenil",
      type: "Baloncesto - Categorías Juveniles",
      date: new Date(2025, 3, 28),
      time: "10:00",
      location: "Polideportivo Central, Ceres",
    },
    {
      id: 3,
      title: "Atenas vs. C.A. Olimpico",
      type: "Fútbol - Liga Regional",
      date: new Date(2025, 4, 5),
      time: "17:30",
      location: "Estadio Ciudad Deportiva, San Cristóbal",
      homeTeam: "Atenas",
      awayTeam: "C.A. Olimpico",
    },
    {
      id: 4,
      title: "Jornada de Atletismo",
      type: "Atletismo - Todas las categorías",
      date: new Date(2025, 4, 12),
      time: "09:00",
      location: "Pista de Atletismo Municipal, Ceres",
    }
  ],
  past: [
    {
      id: 5,
      title: "C.A. Olimpico vs. San Martín",
      type: "Fútbol - Liga Regional",
      date: new Date(2025, 3, 15),
      time: "16:00",
      location: "Estadio Municipal, Ceres",
      result: "2-1",
      homeTeam: "C.A. Olimpico",
      awayTeam: "San Martín",
    },
    {
      id: 6,
      title: "Unión vs. C.A. Olimpico",
      type: "Fútbol - Liga Regional",
      date: new Date(2025, 3, 8),
      time: "17:00",
      location: "Estadio Ciudad Deportiva, Sunchales",
      result: "1-3",
      homeTeam: "Unión",
      awayTeam: "C.A. Olimpico",
    },
    {
      id: 7,
      title: "Torneo de Natación Provincial",
      type: "Natación - Categoría Adultos",
      date: new Date(2025, 3, 5),
      time: "10:00",
      location: "Complejo Acuático, Rafaela",
      result: "2° Puesto General",
    }
  ]
};


const EventCard = ({ event, isPast = false }: { event: Event, isPast?: boolean }) => {
  return (
    <Card className="mb-5 bg-club-light border border-club-secondary/10 shadow-sm overflow-hidden"> 
      <CardContent className="p-0">
        <div className="flex items-stretch"> 
          <div className="bg-club-primary text-club-secondary p-4 flex flex-col items-center justify-center text-center min-w-[80px]"> 
            <CalendarIcon className="h-5 w-5 mb-1 opacity-80" />
            <p className="text-xs font-medium uppercase tracking-wide">{format(event.date, 'LLL', { locale: es })}</p> 
            <p className="text-3xl font-bold leading-none">{format(event.date, 'd')}</p> 
            <p className="text-xs opacity-80">{format(event.date, 'yyyy')}</p> 
          </div>
          
          <div className="flex-1 p-4">
            <h3 className="font-bold text-club-dark text-lg mb-1">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{event.type}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-4 text-sm text-gray-600 mb-3">
              <div>
                <span className="font-medium text-gray-800">Hora:</span> {event.time}
              </div>
              <div>
                <span className="font-medium text-gray-800">Lugar:</span> {event.location}
              </div>
            </div>

            {(event.homeTeam && event.awayTeam) && (
              <div className="text-sm bg-gray-100 p-2 rounded-md inline-flex items-center justify-start gap-2">
                <span className={event.homeTeam === "C.A. Olimpico" ? "font-bold text-club-dark" : "text-gray-700"}>{event.homeTeam}</span>
                <span className="text-gray-400 font-bold">vs</span>
                <span className={event.awayTeam === "C.A. Olimpico" ? "font-bold text-club-dark" : "text-gray-700"}>{event.awayTeam}</span>
              </div>
            )}
             {isPast && event.result && (
                <div className="mt-2 text-sm font-medium text-club-dark bg-club-primary/30 p-2 rounded-md inline-block">
                  Resultado: {event.result}
                </div>
              )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const CalendarSection = () => {
  const maxEventsToShow = 4; 

  return (
    <section id="calendario" className="section-padding bg-white">
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-3 lg:gap-8">
        
        <div className="lg:col-span-2">
          <div className="text-center mb-12 md:mb-16 lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-club-dark mb-2 font-mono">Agenda de Eventos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Mantente al día con todos los eventos y partidos programados de nuestro club.
            </p>
          </div>

          <div className="w-full"> 
            <Tabs defaultValue="upcoming" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-club-light p-1 rounded-lg">
                <TabsTrigger 
                  value="upcoming"
                  className="data-[state=active]:bg-club-primary data-[state=active]:text-club-secondary data-[state=inactive]:text-club-dark rounded-md font-medium py-2"
                >
                  Próximos Eventos
                </TabsTrigger>
                <TabsTrigger 
                  value="past"
                  className="data-[state=active]:bg-club-primary data-[state=active]:text-club-secondary data-[state=inactive]:text-club-dark rounded-md font-medium py-2"
                >
                  Eventos Pasados
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                {events.upcoming.length > 0 ? (
                  events.upcoming.slice(0, maxEventsToShow).map(event => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-6">No hay próximos eventos.</p>
                )}
                {events.upcoming.length > maxEventsToShow && (
                  <div className="text-center mt-6">
                    <button className="text-club-primary font-semibold hover:underline">
                      Ver todos los próximos eventos
                    </button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="past">
                 {events.past.length > 0 ? (
                  events.past.slice(0, maxEventsToShow).map(event => (
                    <EventCard key={event.id} event={event} isPast={true} />
                  ))
                ) : (
                  <p className="text-center text-gray-500 py-6">No hay eventos pasados.</p>
                )}
                {events.past.length > maxEventsToShow && (
                  <div className="text-center mt-6">
                    <button className="text-club-primary font-semibold hover:underline">
                      Ver todos los eventos pasados
                    </button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <aside className="lg:col-span-1 mt-12 lg:mt-0">
          <div className="sticky top-24 p-4 ">
            <div className="h-64 bg-gray-300 flex items-center justify-center rounded">
              <p className="text-gray-500">Publicidad 1</p>
            </div>
            <div className="h-64 bg-gray-300 flex items-center justify-center rounded mt-4">
              <p className="text-gray-500">Publicidad 2</p>
            </div>
          </div>
        </aside>
        
      </div>
    </section>
  );
};

export default CalendarSection;