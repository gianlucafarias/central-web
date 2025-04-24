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
    name: 'AgroSinergia',
    icon: '/sponsors/sinergia.png',
  },
  {
    id: 5,
    name: 'Balsuar3',
    icon: '/sponsors/balsuar.png',
  },
  {
    id: 6,
    name: 'Gobierno de la Provincia de Santa Fe',
    icon: '/sponsors/santa-fe.png',
  },
 
];

export default function Sponsors() {
  return (
    <div>
    <section className="bg-[#0F0F0F] w-full">
      <div className="container mx-auto px-6 pt-10 pb-10">
        <h2 className="text-xl font-bold text-white text-center pb-10 font-mono">
          NUESTROS SPONSORS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 justify-center items-center">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex justify-center items-center">
              <Image
                src={sponsor.icon}
                alt={sponsor.name}
                width={200}
                height={200}
                className="opacity-70"
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
