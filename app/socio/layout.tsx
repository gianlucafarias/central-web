import React from 'react'
import Sidebar from '@/components/socio/Sidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Socios',
	description: 'Gestiona tu cuenta como socio',
}

// TODO: Importar el componente Sidebar cuando esté creado
// import Sidebar from '@/components/socio/Sidebar'

export default function SocioLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="flex h-screen bg-gray-100 dark:bg-gray-900 pt-28">
			{/* Sidebar real */}
			<aside className="hidden md:block w-64 flex-shrink-0 bg-white dark:bg-gray-800 p-4 shadow-md overflow-y-auto">
				<h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Menú Socio</h2>
				<Sidebar />
			</aside>

			{/* Contenedor para el botón móvil y el contenido */}
			<div className="flex flex-col flex-1 overflow-hidden">
				{/* Botón para mostrar/ocultar Sidebar en móvil (Placeholder) */}
				{/* TODO: Implementar lógica para menú móvil */}
				<div className="md:hidden p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
					<button className="text-gray-600 dark:text-gray-300">
						{/* Icono Hamburguesa (ejemplo) */}
						<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6H4" /> 
						</svg>
					</button>
				</div>

				{/* Contenido Principal con scroll */}
				<main className="flex-1 overflow-y-auto p-6">{children}</main>
			</div>
		</div>
	)
} 