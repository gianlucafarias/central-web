import { Discipline } from '@/types/discipline';

export const disciplines: Discipline[] = [
	
	{
		id: 'basquet',
		name: 'Básquet',
		slug: 'basquet',
		description:
			'El básquetbol en el club ofrece un espacio dinámico para desarrollar habilidades físicas y estratégicas. Con entrenamientos enfocados en técnica individual y juego en equipo, promovemos la disciplina y el espíritu deportivo. Nuestras instalaciones cuentan con canchas adecuadas para todas las categorías, desde iniciación hasta competencia. Fomentamos la participación en torneos locales y regionales, brindando a nuestros jugadores la oportunidad de crecer y competir al máximo nivel.\n\nAdemás del aspecto competitivo, valoramos la formación integral, inculcando valores como el respeto, la perseverancia y el trabajo en equipo. ¡Únete a nuestra familia del básquet y vive la pasión por este deporte!',
		mainImageUrl: '/images/disciplines/basquet-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Masculino y Femenino' },
			{ title: 'Desde Mini hasta Primera' },
			{ title: 'Competencia Local y Regional', icon: '🏆' },
		],
		categories: [
			{ name: 'Mini Básquet (Mosquitos, Pre-Mini, Mini)' },
			{ name: 'Formativas (U13, U15, U17, U19)' },
			{ name: 'Primera División' },
			{ name: 'Básquet Femenino' },
			{ name: 'Maxi Básquet' },
		],
		relatedNews: [
			{ id: '5', title: 'Gran Cierre de Año para el Básquet Formativo', date: new Date(2023, 11, 15), slug: 'cierre-basquet-formativo', imageUrl: '', category: 'Básquet' },
			{ id: '6', title: 'Unión Campeón en U15', date: new Date(2023, 11, 28), slug: 'union-campeon-u15', imageUrl: '', category: 'Básquet' },
		],
		contactInfo: {
			email: 'basquet@clubexample.com',
			phone: '3562 987-654',
		},
	},
	{
		id: 'futbol',
		name: 'Fútbol',
		slug: 'futbol',
		description:
			'El fútbol es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde fútbol infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos futbolistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia futbolística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Fútbol Infantil y Juvenil' },
			{ title: 'Primera y Reserva' },
			{ title: 'Escuela de Fútbol', icon: '⚽' },
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
			{ name: 'Juveniles (13-17 años)' },
			{ name: 'Reserva' },
			{ name: 'Primera División' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'futbol@clubexample.com',
			phone: '3562 555-123',
		},
	},

	{
		id: 'voley',
		name: 'Voley',
		slug: 'voley',
		description:
			'El voley es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde voley infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos voleybolistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia voleybolística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Voley Infantil y Juvenil' },
			{ title: 'Primera y Reserva' },
			{ title: 'Escuela de Voley', icon: '🏐' },
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
			{ name: 'Juveniles (13-17 años)' },
			{ name: 'Primera División' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'voley@clubcentral.com',
			phone: '3562 555-123',
		},
	},
	{
		id: 'patin',
		name: 'Patin',
		slug: 'patin',
		description:
			'El patin es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde patin infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos patinistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia patinística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Patin Infantil y Juvenil' },
			{ title: 'Primera y Reserva' },
			{ title: 'Escuela de Patin', icon: '🏃‍♂️' },
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
			{ name: 'Juveniles (13-17 años)' },
			{ name: 'Reserva' },
			{ name: 'Primera División' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'futbol@clubexample.com',
			phone: '3562 555-123',
		},
	},
	{
		id: 'natacion',
		name: 'Natación',
		slug: 'natacion',
		description:
			'La natación es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde natación infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos natadores, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia natatoria!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Natación Infantil y Juvenil' },
			{ title: 'Primera y Reserva' },
			{ title: 'Escuela de Natación', icon: '🏊‍♂️' },
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
			{ name: 'Juveniles (13-17 años)' },
			{ name: 'Reserva' },
			{ name: 'Primera División' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'natacion@clubexample.com',
			phone: '3562 555-123',
		},
	},
	{
		id: 'padel',
		name: 'Padel',
		slug: 'padel',
		description:
			'El padel es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde padel infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos padelistas, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia padelística!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Padel Infantil y Juvenil' },
			{ title: 'Primera y Reserva' },
			{ title: 'Escuela de Padel'},
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
			{ name: 'Juveniles (13-17 años)' },
			{ name: 'Reserva' },
			{ name: 'Primera División' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'padel@clubexample.com',
			phone: '3562 555-123',
		},
	},
	{
		id: 'inicacion-deportiva',
		name: 'Iniciación Deportiva',
		slug: 'inicacion-deportiva',
		description:
			'La iniciación deportiva es el deporte rey y en nuestro club lo vivimos con pasión. Ofrecemos categorías para todas las edades, desde iniciación deportiva infantil hasta equipos mayores compitiendo en ligas locales. Nuestros entrenadores calificados se enfocan en el desarrollo técnico, táctico y físico de los jugadores, promoviendo siempre el juego limpio y el compañerismo.\n\nContamos con campos de entrenamiento bien mantenidos y un programa deportivo que busca no solo formar buenos iniciados deportivos, sino también grandes personas. Participamos activamente en campeonatos y torneos, buscando siempre alcanzar nuevos logros deportivos. ¡Vení a formar parte de nuestra historia iniciación deportiva!',
		mainImageUrl: '/images/disciplines/futbol-banner.jpg', // Example path
		quickLinks: [
			{ title: 'Iniciación Deportiva Infantil y Juvenil' },
			{ title: 'Escuela de Iniciación Deportiva', icon: '⚽' },
		],
		categories: [
			{ name: 'Escuelita (4-6 años)' },
			{ name: 'Infantiles (7-12 años)' },
		],
		relatedNews: [
			// Add example news links here later
			{ id: '1', title: 'Unión se Posiciona Dentro de los 6 Equipos de Argentina', date: new Date(2023, 4, 7), slug: 'union-top-6', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '2', title: 'Unión Dentro los Mejores 8 Equipos Argentinos de la Máxima Categoría', date: new Date(2023, 4, 4), slug: 'union-top-8', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '3', title: 'El Hockey Sobre Patines - Categoría Infantil, se Encuentra en San Juan', date: new Date(2022, 11, 12), slug: 'hockey-infantil-san-juan', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
			{ id: '4', title: 'Culminó el Campeonato Argentino Categoría Juvenil Femenino', date: new Date(2022, 5, 25), slug: 'campeonato-juvenil-femenino', imageUrl: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', category: 'Futbol' },
		],
		contactInfo: {
			email: 'futbol@clubexample.com',
			phone: '3562 555-123',
		},
	},
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