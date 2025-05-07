'use client';

import Image from 'next/image';
import SectionDivider from '@/components/SectionDivider';
import Footer from '@/components/Footer';

export default function InstallationsSection() {
  const installations = [
    {
      id: 1,
      title: 'Canchas de Fútbol 5',
      description: 'Césped natural y sintético de última generación con iluminación nocturna.',
      image: '/inferiores.jpg',
    },
    {
      id: 2,
      title: 'Pileta Climatizada',
      description: 'Disponible todo el año con vestuarios completos y guardavidas permanente.',
      image: '/inferiores.jpg',
    },
    {
      id: 3,
      title: 'Canchas de Padel',
      description: 'Equipamiento moderno, entrenadores especializados y diversas actividades.',
      image: '/inferiores.jpg',
    },
    {
      id: 4,
      title: 'SUM y Quincho',
      description: 'Espacios para eventos, cumpleaños y reuniones exclusivas para socios.',
      image: '/inferiores.jpg',
    },
  ];

  return (
    <section id="instalaciones" className="relative bg-white">
      {/* Separador de sección con efecto rasgado */}
      <div className="-mt-1">
        <SectionDivider color="#ffffff" className="h-20" />
      </div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-mono">Nuestras Instalaciones</h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con instalaciones deportivas de primer nivel para que disfrutes de tu actividad favorita en un ambiente cómodo y seguro.
          </p>
        </div>

        {/* Grid de instalaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {installations.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="h-56 relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  // Fallback para imágenes no disponibles
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/800x600/111/fff?text=${item.title.replace(/\s+/g, '+')}`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-[#ffdc00] font-semibold hover:text-yellow-600 transition-colors flex items-center">
                    Ver fotos
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Banner de reservas */}
        <div className="mt-16 bg-gray-100 rounded-xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">¿Querés reservar un espacio?</h4>
              <p className="text-gray-600">
                Como socio podés reservar nuestras instalaciones para eventos privados. Contamos con opciones para cumpleaños, reuniones y eventos especiales.
              </p>
            </div>
            <button className="whitespace-nowrap bg-[#ffdc00] text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors">
              Consultar Disponibilidad
            </button>
          </div>
        </div>
      </div>

      {/* Separador inverso en la parte inferior (opcional) */}
      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
} 