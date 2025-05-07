import Link from 'next/link';
import { 
  Footprints, // Fútbol
  Dribbble,   // Básquet (alternativa)
  Volleyball, 
  Waves,      // Natación (alternativa)
  Snowflake,  // Patín (alternativa Snowflake)
  Disc3       // Pádel
} from 'lucide-react';
import FutbolIcon from '../public/disciplinas/FutbolIcon';
import BasquetIcon from '../public/disciplinas/BasquetIcon';
import NatacionIcon from '../public/disciplinas/NatacionIcon';
import IniciacionDeportivaIcon from '../public/disciplinas/IniciacionDeportiva';
import PatinIcon from '../public/disciplinas/PatinIcon';
import PadelIcon from '../public/disciplinas/PadelIcon';

const disciplinas = [
  { nombre: "Fútbol", Icono: FutbolIcon, href: "/disciplinas/futbol" },
  { nombre: "Básquet", Icono: BasquetIcon, href: "/disciplinas/basquet" }, 
  { nombre: "Vóley", Icono: Volleyball, href: "/disciplinas/voley" },
  { nombre: "Natación", Icono: NatacionIcon, href: "/disciplinas/natacion" },
  { nombre: "Patín", Icono: PatinIcon, href: "/disciplinas/patin" },
  { nombre: "Iniciación Deportiva", Icono: IniciacionDeportivaIcon, href: "/disciplinas/iniciacion-deportiva" },
  { nombre: "Pádel", Icono: PadelIcon, href: "/disciplinas/padel" }, 
];

export default function Disciplinas() {
  return (
    <section className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-club-dark mb-3 font-mono">
            Nuestras Disciplinas
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Descubrí todas las actividades deportivas que ofrecemos en el club para todas las edades.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {disciplinas.map((disciplina) => (
            <Link 
              key={disciplina.nombre} 
              href={disciplina.href}
              className="group font-mono text-2xl p-4 bg-club-primary rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:bg-club-dark hover:border-club-primary transition-all duration-300 ease-in-out aspect-square flex flex-col items-center justify-center text-center w-[150px] md:w-[180px]"
            >
              <disciplina.Icono 
                className="h-10 w-10 md:h-12 md:w-12 mb-2 text-gray-700 group-hover:text-club-primary transition-colors" 
                strokeWidth={1.5} 
              />
              <span className="font-medium text-xs md:text-sm text-gray-700 group-hover:text-club-primary transition-colors">
                {disciplina.nombre}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
