import { format } from 'date-fns'
import { es } from 'date-fns/locale'

export interface NewsItem {
	id: number | string 
	slug: string 
	title: string
	excerpt?: string    
	content?: string    
	date: Date
	author?: string     
	imageUrl: string
	category: string
}

// Datos de ejemplo actualizados
const newsItemsData: NewsItem[] = [
	{
		id: 1,
		slug: 'victoria-decisiva-lrcf',
		title: 'Victoria decisiva para pelear la Liga Regional Ceresina',
		excerpt:
			'Este miercoles se le quitò uno de los asteriscos al torneo superior liguista. Por la 7ª fecha completaron en cancha del CCAO; el local y Uniòn Deportiva Arrufo.',
		content: `
Este miercoles se le quitò uno de los asteriscos al torneo superior liguista. Por la 7ª fecha completaron en cancha del CCAO; el local y Uniòn Deportiva Arrufo.

El desarrollo del partido dejó poco para analizar desde lo futbolistico. Hubo 4 goles, y el empate pareciò lo màs justo ante un cotejo que fue màs disputado que jugado. En un primer tiempo de pocas llegadas a los arcos, el visitante aprovechò un centro de la izquierda de Gonzalo Santillan que pudo acertar Toloza en el segundo palo, y eso fue todo, triunfo parcial de CUDA 1 a 0.

En la etapa complementaria, Central saliò a buscarlo, pero un «golazo» del Pachu Sanabria, ponia el 2 a 0 parcial en el partido y parecia que el resultado le quedaba demasiado grande al cotejo.

Central fue a buscarlo, con mas actitud que fùtbol, y Santiago Marquetti pudo cabecear un centro de la izquierda y descontar para poner el 1-2. Mas tarde llegaria la expulsiòn de Carrizo, y el local se quedaba con uno menos. Pero no bajo la intensidad, y fue a buscarlo, arriesgò con uno menos. Y lo empatò sobre el tiempo adicionado al reglamentario con un tiro de esquina de Sayago, que pudo convertir en gol Santiago Marquetti. Fue 2 a 2.

El final estuvo de màs. Central reclamò màs minutos, se lo protestò al arbitro. Pero hubo un encontronazo entre jugadores y terminò en tumulto. Un final inesperado, porque durante el desarrollo del partido entre jugadores no habìa sucedido absolutamente nada.

El arbitraje de Javier Vazquez no convenciò a nadie.

En sub 23, el partido terminò 0 a 0, y ambos siguen sin ganar en el torneo.
    `,
		date: new Date(2025, 3, 20), // Mes es 0-indexado, 3 es Abril
		author: 'Carlos Suárez',
		imageUrl:
			'/noticias/central-vs-ferro.webp',
		category: 'Futbol',
	},
	{
		id: 2,
		slug: 'segunda-victoria-consecutiva-de-central',
		title: 'Segunda victoria consecutiva de Central',
		excerpt:
			'El «aurinegro» y en el cierre de la sexta fecha del Torneo Apertura, derrotó a Atlético Tostado 70-64.',
		content: `
Después de un desarrollo equilibrado y cambiante, los dirigidos por Krogslunfd, pudieron imponer condiciones en el segmento final.

El primer cuarto fue favorable a Central (24-21) y logró irse al descanso por la mínima ventaja (37-36).

La reanudación lo mostró mejor al «verde» y se puso arriba en el score, pero pudo cerrarlo mejor el local en esos diez minutos finales.

POSICIONES:

Unión y Juventud 8 (4-0); San Lorenzo (T) 8 (3-2); Atlético Tostado 8 (3-2); Central 7 (2-3); Atlético Ceres 5 (0-5).

Fuente: Adrián Tavella
    `,
		date: new Date(2025, 3, 15),
		author: 'María Fernández',
		imageUrl:
			'/noticias/central-basquet.jpg',
		category: 'Basquet',
	},
	{
		id: 3,
		slug: 'entrega-luminarias-led-estadio-adolfo-carlos-maero',
		title: 'Se entregaron luminarias led para el estadio Adolfo Carlos Maero de Central',
		excerpt:
			'El club anuncia importantes mejoras en las instalaciones que beneficiarán a todos los deportistas y socios.',
		content: `
El Club se complace en anunciar el inicio de un ambicioso proyecto de renovación y modernización de sus instalaciones deportivas. Estas mejoras tienen como objetivo ofrecer a nuestros socios y deportistas espacios de la más alta calidad, fomentando la práctica deportiva y el bienestar de toda la comunidad del club.

**Detalles del Proyecto**

Las obras, que comenzarán el próximo mes, incluirán:

*   **Remodelación integral del gimnasio principal:** Se adquirirán nuevas máquinas de última generación, se ampliará la zona de peso libre y se crearán nuevos espacios para clases grupales.
*   **Nuevas pistas de pádel:** Se construirán dos nuevas pistas de pádel con cerramientos de cristal e iluminación LED, respondiendo a la creciente demanda de este deporte.
*   **Mejora de los vestuarios:** Se modernizarán los vestuarios de todas las disciplinas, mejorando la comodidad y funcionalidad para los usuarios.
*   **Optimización de la eficiencia energética:** Se instalarán sistemas de iluminación LED en todas las áreas y se mejorará el aislamiento térmico de los edificios para reducir el consumo energético.
*   **Accesibilidad:** Se realizarán adaptaciones para garantizar la plena accesibilidad de todas las instalaciones a personas con movilidad reducida.

**Impacto y Beneficios**

"Esta inversión es un reflejo de nuestro compromiso con nuestros socios y con el fomento del deporte", afirmó el presidente del Club, Jorge Martínez. "Queremos que nuestras instalaciones estén a la vanguardia y que todos puedan disfrutar de ellas en las mejores condiciones. Estas mejoras no solo beneficiarán a nuestros deportistas de competición, sino a todos los socios que utilizan nuestras instalaciones para mantenerse activos y saludables".

Se estima que las obras tendrán una duración de seis meses, durante los cuales se intentará minimizar las molestias a los usuarios, estableciendo planes de contingencia y horarios alternativos para las actividades.

El Club agradece de antemano la comprensión y colaboración de todos sus miembros durante este periodo de transformación, que sin duda redundará en un futuro más moderno y funcional para todos.
    `,
		date: new Date(2025, 3, 10),
		author: 'Roberto Gómez',
		imageUrl:
			'/noticias/luminarias-led-felipe.webp',
		category: 'Infraestructura',
	},
]

export async function getAllNews(): Promise<NewsItem[]> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(newsItemsData)
		}, 500) 
	})
}

export async function getNewsBySlug(
	slug: string
): Promise<NewsItem | undefined> {
	const allNews = await getAllNews()
	return allNews.find((news) => news.slug === slug)
}

export async function getAllNewsSlugs(): Promise<{ slug: string }[]> {
	const allNews = await getAllNews()
	return allNews.map((news) => ({
		slug: news.slug,
	}))
}

export const formatDate = (date: Date): string => {
	return format(date, 'd LLL, yyyy', { locale: es })
}

export const slugify = (text: string): string => {
	return text
		.toString()
		.toLowerCase()
		.trim()
		.replace(/\s+/g, '-') 
		.replace(/[^\w\-]+/g, '') 
		.replace(/\-\-+/g, '-') 
}

export const unslugify = (slug: string): string => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export async function getNewsByCategory(
	categorySlug: string
): Promise<NewsItem[]> {
	const allNews = await getAllNews()
	return allNews.filter(
		(news) => slugify(news.category) === categorySlug
	)
}

export async function getAllCategorySlugs(): Promise<{ categorySlug: string }[]> {
	const allNews = await getAllNews()
	const uniqueCategories = new Set(allNews.map((news) => slugify(news.category)))
	return Array.from(uniqueCategories).map((slug) => ({
		categorySlug: slug,
	}))
} 