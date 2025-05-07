// Definición de la interfaz para eventos
export interface Event {
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
  export const events: { upcoming: Event[]; past: Event[] } = {
    upcoming: [
      {
        id: 1,
        title: "Cena A Beneficio",
        type: "Futbol Inferiores",
        date: new Date(2025, 4, 16),
        time: "21:00",
        location: "Salon de Patin",
      },
      {
        id: 2,
        title: "Basquet Masculino",
        type: "Primera",
        date: new Date(2025, 4, 9),
        time: "20:00",
        location: "Raul Braica, Ceres",
        homeTeam: "Central",
        awayTeam: "C.S.L.",
      },
      {
        id: 3,
        title: "Atenas vs. C.C.A.O.",
        type: "Fútbol - Liga Regional",
        date: new Date(2025, 4, 5),
        time: "17:30",
        location: "Estadio Ciudad Deportiva, San Cristóbal",
        homeTeam: "Atenas",
        awayTeam: "C.C.A.O.",
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