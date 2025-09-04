import { Discipline, DisciplineCategory, DisciplineQuickLink, DisciplineContactInfo } from '@/types/discipline';

// Función helper para crear disciplinas con datos mock
function createMockDiscipline(data: Partial<Discipline>): Discipline {
	return {
		id: data.id || '',
		name: data.name || '',
		slug: data.slug || '',
		description: data.description || '',
		mainImageUrl: data.mainImageUrl,
		isActive: data.isActive ?? true,
		displayOrder: data.displayOrder ?? 0,
		createdAt: data.createdAt || new Date(),
		updatedAt: data.updatedAt || new Date(),
		quickLinks: data.quickLinks || [],
		categories: data.categories || [],
		relatedNews: data.relatedNews || [],
		contactInfo: data.contactInfo,
	}
}

export const disciplines: Discipline[] = [
	createMockDiscipline({
		id: 'basquet',
		name: 'Básquet',
		slug: 'basquet',
		description:
			'El básquetbol en el club ofrece un espacio dinámico para desarrollar habilidades físicas y estratégicas. Con entrenamientos enfocados en técnica individual y juego en equipo, promovemos la disciplina y el espíritu deportivo. Nuestras instalaciones cuentan con canchas adecuadas para todas las categorías, desde iniciación hasta competencia. Fomentamos la participación en torneos locales y regionales, brindando a nuestros jugadores la oportunidad de crecer y competir al máximo nivel.\n\nAdemás del aspecto competitivo, valoramos la formación integral, inculcando valores como el respeto, la perseverancia y el trabajo en equipo. ¡Únete a nuestra familia del básquet y vive la pasión por este deporte!',
		mainImageUrl: '/images/disciplines/basquet-banner.jpg',
		displayOrder: 1,
		quickLinks: [
			{ id: 'ql1', title: 'Masculino y Femenino', displayOrder: 1, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql2', title: 'Desde Mini hasta Primera', displayOrder: 2, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql3', title: 'Competencia Local y Regional', icon: '🏆', displayOrder: 3, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat1', name: 'Mini Básquet (Mosquitos, Pre-Mini, Mini)', displayOrder: 1, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat2', name: 'Formativas (U13, U15, U17, U19)', displayOrder: 2, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat3', name: 'Primera División', displayOrder: 3, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat4', name: 'Básquet Femenino', displayOrder: 4, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat5', name: 'Maxi Básquet', displayOrder: 5, isActive: true, disciplineId: 'basquet', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [
			{ id: '5', title: 'Gran Cierre de Año para el Básquet Formativo', date: new Date(2023, 11, 15), slug: 'cierre-basquet-formativo', imageUrl: '', category: 'Básquet' },
			{ id: '6', title: 'Unión Campeón en U15', date: new Date(2023, 11, 28), slug: 'union-campeon-u15', imageUrl: '', category: 'Básquet' },
		],
		contactInfo: {
			id: 'contact1',
			email: 'basquet@clubexample.com',
			phone: '3562 987-654',
			disciplineId: 'basquet',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
	createMockDiscipline({
		id: 'futbol',
		name: 'Fútbol',
		slug: 'futbol',
		description:
			'El fútbol es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde fútbol infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos futbolistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia futbolística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 2,
		quickLinks: [
			{ id: 'ql4', title: 'Fútbol Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql5', title: 'Primera y Reserva', displayOrder: 2, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql6', title: 'Escuela de Fútbol', icon: '⚽', displayOrder: 3, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat6', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat7', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat8', name: 'Juveniles (13-17 años)', displayOrder: 3, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat9', name: 'Reserva', displayOrder: 4, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat10', name: 'Primera División', displayOrder: 5, isActive: true, disciplineId: 'futbol', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			id: 'contact2',
			email: 'futbol@clubexample.com',
			phone: '3562 555-123',
			disciplineId: 'futbol',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),

	createMockDiscipline({
		id: 'voley',
		name: 'Voley',
		slug: 'voley',
		description:
			'El voley es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde voley infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos voleybolistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia voleybolística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 3,
		quickLinks: [
			{ id: 'ql7', title: 'Voley Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql8', title: 'Primera y Reserva', displayOrder: 2, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql9', title: 'Escuela de Voley', icon: '🏐', displayOrder: 3, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat11', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat12', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat13', name: 'Juveniles (13-17 años)', displayOrder: 3, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat14', name: 'Primera División', displayOrder: 4, isActive: true, disciplineId: 'voley', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [],
		contactInfo: {
			id: 'contact3',
			email: 'voley@clubcentral.com',
			phone: '3562 555-123',
			disciplineId: 'voley',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
	createMockDiscipline({
		id: 'patin',
		name: 'Patin',
		slug: 'patin',
		description:
			'El patin es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde patin infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos patinistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia patinística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 4,
		quickLinks: [
			{ id: 'ql10', title: 'Patin Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql11', title: 'Primera y Reserva', displayOrder: 2, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql12', title: 'Escuela de Patin', icon: '🏃‍♂️', displayOrder: 3, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat15', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat16', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat17', name: 'Juveniles (13-17 años)', displayOrder: 3, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat18', name: 'Reserva', displayOrder: 4, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat19', name: 'Primera División', displayOrder: 5, isActive: true, disciplineId: 'patin', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [],
		contactInfo: {
			id: 'contact4',
			email: 'patin@clubexample.com',
			phone: '3562 555-123',
			disciplineId: 'patin',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
	createMockDiscipline({
		id: 'natacion',
		name: 'Natación',
		slug: 'natacion',
		description:
			'La natación es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde natación infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos natadores, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia natatoria!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 5,
		quickLinks: [
			{ id: 'ql13', title: 'Natación Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql14', title: 'Primera y Reserva', displayOrder: 2, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql15', title: 'Escuela de Natación', icon: '🏊‍♂️', displayOrder: 3, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat20', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat21', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat22', name: 'Juveniles (13-17 años)', displayOrder: 3, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat23', name: 'Reserva', displayOrder: 4, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat24', name: 'Primera División', displayOrder: 5, isActive: true, disciplineId: 'natacion', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [],
		contactInfo: {
			id: 'contact5',
			email: 'natacion@clubexample.com',
			phone: '3562 555-123',
			disciplineId: 'natacion',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
	createMockDiscipline({
		id: 'padel',
		name: 'Padel',
		slug: 'padel',
		description:
			'El padel es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde padel infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos padelistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia padelística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 6,
		quickLinks: [
			{ id: 'ql16', title: 'Padel Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql17', title: 'Primera y Reserva', displayOrder: 2, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql18', title: 'Escuela de Padel', displayOrder: 3, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat25', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat26', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat27', name: 'Juveniles (13-17 años)', displayOrder: 3, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat28', name: 'Reserva', displayOrder: 4, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat29', name: 'Primera División', displayOrder: 5, isActive: true, disciplineId: 'padel', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [],
		contactInfo: {
			id: 'contact6',
			email: 'padel@clubexample.com',
			phone: '3562 555-123',
			disciplineId: 'padel',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
	createMockDiscipline({
		id: 'inicacion-deportiva',
		name: 'Iniciación Deportiva',
		slug: 'inicacion-deportiva',
		description:
			'La iniciación deportiva es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde iniciación deportiva infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos iniciados deportivos, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia iniciación deportiva!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg',
		displayOrder: 7,
		quickLinks: [
			{ id: 'ql19', title: 'Iniciación Deportiva Infantil y Juvenil', displayOrder: 1, isActive: true, disciplineId: 'inicacion-deportiva', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'ql20', title: 'Escuela de Iniciación Deportiva', icon: '⚽', displayOrder: 2, isActive: true, disciplineId: 'inicacion-deportiva', createdAt: new Date(), updatedAt: new Date() },
		],
		categories: [
			{ id: 'cat30', name: 'Escuelita (4-6 años)', displayOrder: 1, isActive: true, disciplineId: 'inicacion-deportiva', createdAt: new Date(), updatedAt: new Date() },
			{ id: 'cat31', name: 'Infantiles (7-12 años)', displayOrder: 2, isActive: true, disciplineId: 'inicacion-deportiva', createdAt: new Date(), updatedAt: new Date() },
		],
		relatedNews: [],
		contactInfo: {
			id: 'contact7',
			email: 'iniciacion@clubexample.com',
			phone: '3562 555-123',
			disciplineId: 'inicacion-deportiva',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	}),
]

// Function to get all slugs (useful for generateStaticParams)
export function getAllDisciplineSlugs() {
	return disciplines.map((discipline) => ({
		slug: discipline.slug,
	}))
}

// Function to get discipline data by slug
export async function getDisciplineBySlug(slug: string): Promise<Discipline | null> {
	// Simulate async behavior (optional, but good practice for future DB calls)
	// await new Promise(resolve => setTimeout(resolve, 0)); // Uncomment for simulation if needed
	const discipline = disciplines.find((d) => d.slug === slug);
	return discipline || null; // Return directly, async function wraps in Promise
} 