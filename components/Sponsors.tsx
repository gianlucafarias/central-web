'use client';

import Image from 'next/image';
import SectionDivider from './SectionDivider';

const sponsors = [
  {
    id: 1,
    name: 'Senador Felipe Michlig',
    icon: '/sponsors/felipe-michlig.png',
  },
  {
    id: 2,
    name: 'Dip. Marcelo Gonzalez',
    icon: '/sponsors/marcelo-gonzalez.png',
  },
  {
    id: 3,
    name: 'Gobierno de la Ciudad de Ceres',
    icon: '/sponsors/gob-ceres.png',
  },
  {
    id: 4,
    name: 'LENING',
    icon: '/sponsors/lening.png',
  },
 
  {
    id: 5,
    name: 'Gobierno de la Provincia de Santa Fe',
    icon: '/sponsors/santa-fe.png',
  },
 
];

export default function Sponsors() {
  return (
    <div id="#sponsors">
    <section className="bg-[#0F0F0F] w-full">
      <div className="container mx-auto px-6 pt-10 pb-10">
        <h2 className="text-xl font-bold text-white text-center pb-10 font-mono">
          NUESTROS SPONSORS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center items-center w-full">
              <Image
                src={sponsor.icon}
                alt={sponsor.name}
                width={180}
                height={140}
                className="opacity-70 object-contain max-w-full max-h-full"
              />
            </div>
          ))}
        </div>
      </div>      
    </section>
     <SectionDivider
     color="#0F0F0F" 
     className="h-20"
   />
   </div>
  );
}
