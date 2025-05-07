'use client'; 

import CarnetDisplay from '@/components/socio/CarnetDisplay';

const socioPrincipal = {
	id: 'socio-123', 
	nombreCompleto: 'Juan Ignacio Pérez',
	numeroSocio: '12345',
	categoria: 'Activo', 
	avatarUrl: '/placeholder-avatar.png',
};

const familiares = [
	{ id: 'fam-456', nombreCompleto: 'Maria Garcia', numeroSocio: '12345-F1', categoria: 'Adherente', avatarUrl: '/placeholder-avatar.png' },
	{ id: 'fam-789', nombreCompleto: 'Pedro Pérez', numeroSocio: '12345-F2', categoria: 'Adherente', avatarUrl: '/placeholder-avatar.png' },
];

export default function CarnetPage() {

	return (
		<div className="space-y-8">
			<div>
				<h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Mi Carnet Digital</h1>
				<CarnetDisplay miembro={socioPrincipal} />
			</div>

			{familiares.length > 0 && (
				<div>
					<h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Carnets Grupo Familiar</h2>
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"> 
						{familiares.map(familiar => (
							<CarnetDisplay key={familiar.id} miembro={familiar} />
						))}
					</div>
				</div>
			)}
		</div>
	);
} 