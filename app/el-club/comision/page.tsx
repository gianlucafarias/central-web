import ClubHeroSection from '@/components/el-club.tsx/ClubHeroSection'
import Footer from '@/components/Footer'
import React from 'react'

interface MiembroInfo {
  nombre: string
  cargo: string
}

const presidenteData: MiembroInfo = {
  nombre: 'Andrés Bernabeu',
  cargo: 'Presidente',
}

const comisionDirectivaMiembros: MiembroInfo[] = [
  { nombre: 'Silvia Ferrero', cargo: 'Sec. General' },
  { nombre: 'Manuel Rodriguez', cargo: 'Tesorero' }, 
  { nombre: 'Ceferino Diaz', cargo: 'Pro Tesorero' }, 
  { nombre: 'Amilcar Cecotti', cargo: 'Voc. Titular 1°' },
  { nombre: 'José Cardonnet', cargo: 'Voc. Titular 2°' },
  { nombre: 'Marcelo Piazza', cargo: 'Voc. Titular 3°' },
]

const comisionRevisoraCuentasMiembros: MiembroInfo[] = [
  { nombre: 'Fabio Giudici', cargo: 'Titular 1°' },
  { nombre: 'Juan Tombolato', cargo: 'Titular 2°' },
  { nombre: 'Cecilia Scarafia', cargo: 'Titular 3°' },
  { nombre: 'Miguel Valdez', cargo: 'Suplente 1°' },
  { nombre: 'Alexis Geli', cargo: 'Suplente 2°' },
]

const comisionHaciendaMiembros: MiembroInfo[] = [
  { nombre: 'Natalia Taborda', cargo: 'Titular 1°' },
  { nombre: 'Andrés Valenti', cargo: 'Titular 2°' },
  { nombre: 'Leonardo Ambroggio', cargo: 'Titular 3°' },
  { nombre: 'Leonardo Romero', cargo: 'Suplente 1°' },
  { nombre: 'Federico Ferrer', cargo: 'Suplente 2°' },

]

const comisionVoleyMiembros: MiembroInfo[] = [
  { nombre: 'Sabrina Diaz', cargo: 'Titular 1°' },
  { nombre: 'Juan Ignacio Zin', cargo: 'Titular 2°' },
]


function ListaMiembros ({ miembros }: { miembros: MiembroInfo[] }) {
  if (!miembros || miembros.length === 0) return null
  return (
    <ul className='space-y-1 text-sm'>
      {miembros.map((miembro, index) => (
        <li key={index}>
          <span className='font-semibold'>{miembro.cargo}:</span> {miembro.nombre}
        </li>
      ))}
    </ul>
  )
}

export default function ComisionDirectivaPage () {
  return (
    <div>
      <ClubHeroSection title='Autoridades' />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-26'>

        <div className='flex flex-col md:flex-row md:gap-x-10 lg:gap-x-16'>
          <div className='md:w-1/2 space-y-6 mb-8 md:mb-0'>
            <section>
         
              <h2 className='text-2xl font-semibold text-gray-700 mb-4 uppercase border-b-2 border-[#ffdc00] pb-2 font-mono'>
                Comisión Directiva
              </h2>
              <div className='mb-2'>
                <p className='text-md font-semibold text-gray-700'>{presidenteData.cargo}: {presidenteData.nombre}</p>
                {/* Si se decide re-añadir la foto del presidente
                {presidenteData.fotoUrl && ( 
                  <img 
                    src={presidenteData.fotoUrl} 
                    alt={`Foto de ${presidenteData.nombre}`} 
                    className='w-full max-w-xs rounded-md shadow-lg object-cover mt-2' 
                  /> 
                )} 
                */}
              </div>
              <ListaMiembros miembros={comisionDirectivaMiembros} />
            </section>
          </div>

          <div className='md:w-1/2 space-y-8'>
            <section>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4 uppercase border-b-2 border-[#ffdc00] pb-2 font-mono'>
            Sub-Comisión de Fútbol
              </h2>
              <ListaMiembros miembros={comisionRevisoraCuentasMiembros} />
            </section>

            <section>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4 uppercase border-b-2 border-[#ffdc00] pb-2 font-mono'>
            Sub-Comisión de Basquet
              </h2>
              <ListaMiembros miembros={comisionHaciendaMiembros} />
            </section>
            <section>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4 uppercase border-b-2 border-[#ffdc00] pb-2 font-mono'>
            Sub-Comisión de Voley
              </h2>
              <ListaMiembros miembros={comisionVoleyMiembros} />
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
} 