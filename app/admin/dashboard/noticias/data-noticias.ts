export type NewsStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED'

export interface NewsArticle {
  id: string;
  title: string;
  slug: string; // Para la URL amigable
  category: string; // Ej: 'Fútbol', 'Básquet', 'Institucional'
  author?: string; // Opcional, podría ser un ID de usuario o nombre
  publicationDate: Date;
  status: NewsStatus;
  summary?: string; // Un breve resumen o entradilla
  excerpt?: string; // Resumen corto para listados
  content?: string; // El contenido completo del artículo (Markdown, HTML)
  imageUrl?: string; // URL de la imagen principal del artículo
  viewCount: number; // Contador de vistas
  createdAt: Date;
  updatedAt: Date;
}

export const mockNewsArticles: NewsArticle[] = [
  {
    id: 'news_1',
    title: 'Gran victoria del equipo de fútbol en el clásico local',
    slug: 'gran-victoria-futbol-clasico-local',
    category: 'Fútbol',
    author: 'Juan Reportero',
    publicationDate: new Date('2024-05-10T10:00:00Z'),
    status: 'PUBLISHED',
    summary: 'El equipo mayor de fútbol consiguió una importante victoria por 3-1 contra nuestro eterno rival, asegurando su posición en la tabla.',
    excerpt: 'Victoria histórica del equipo de fútbol en el clásico local por 3-1.',
    content: 'El equipo mayor de fútbol consiguió una importante victoria por 3-1 contra nuestro eterno rival, asegurando su posición en la tabla. El partido fue emocionante desde el primer minuto...',
    imageUrl: '/placeholder-news-1.jpg',
    viewCount: 1502,
    createdAt: new Date('2024-05-10T10:00:00Z'),
    updatedAt: new Date('2024-05-10T10:00:00Z'),
  },
  {
    id: 'news_2',
    title: 'Inscripciones abiertas para la colonia de vacaciones de invierno',
    slug: 'inscripciones-colonia-vacaciones-invierno',
    category: 'Institucional',
    author: 'María González',
    publicationDate: new Date('2024-05-15T09:00:00Z'),
    status: 'PUBLISHED',
    summary: 'Ya se encuentran abiertas las inscripciones para nuestra tradicional colonia de vacaciones de invierno. ¡Cupos limitados!',
    excerpt: 'Inscripciones abiertas para la colonia de vacaciones de invierno con cupos limitados.',
    content: 'Ya se encuentran abiertas las inscripciones para nuestra tradicional colonia de vacaciones de invierno. ¡Cupos limitados! La colonia incluirá actividades deportivas, recreativas y educativas...',
    imageUrl: '/placeholder-news-2.jpg',
    viewCount: 875,
    createdAt: new Date('2024-05-15T09:00:00Z'),
    updatedAt: new Date('2024-05-15T09:00:00Z'),
  },
  {
    id: 'news_3',
    title: 'Nuevo taller de ajedrez para socios jóvenes',
    slug: 'nuevo-taller-ajedrez-socios-jovenes',
    category: 'Actividades Sociales',
    author: 'Ana Lista',
    publicationDate: new Date('2024-05-20T14:30:00Z'),
    status: 'DRAFT',
    summary: 'Se está preparando el lanzamiento de un nuevo taller de ajedrez gratuito para socios menores de 18 años. Próximamente más detalles.',
    excerpt: 'Nuevo taller de ajedrez gratuito para socios jóvenes próximamente.',
    content: 'Se está preparando el lanzamiento de un nuevo taller de ajedrez gratuito para socios menores de 18 años. Próximamente más detalles sobre horarios y modalidad...',
    viewCount: 120,
    createdAt: new Date('2024-05-20T14:30:00Z'),
    updatedAt: new Date('2024-05-20T14:30:00Z'),
  },
  {
    id: 'news_4',
    title: 'El equipo de básquet se prepara para las finales del torneo',
    slug: 'equipo-basquet-prepara-finales-torneo',
    category: 'Básquet',
    author: 'Carlos Suárez',
    publicationDate: new Date('2024-04-28T11:00:00Z'),
    status: 'PUBLISHED',
    summary: 'Tras una excelente temporada regular, nuestro primer equipo de básquet se enfoca en los playoffs del torneo provincial.',
    excerpt: 'El equipo de básquet se prepara para las finales del torneo provincial.',
    content: 'Tras una excelente temporada regular, nuestro primer equipo de básquet se enfoca en los playoffs del torneo provincial. El equipo ha mostrado un gran nivel durante toda la temporada...',
    imageUrl: '/placeholder-news-3.jpg',
    viewCount: 950,
    createdAt: new Date('2024-04-28T11:00:00Z'),
    updatedAt: new Date('2024-04-28T11:00:00Z'),
  },
  {
    id: 'news_5',
    title: 'Convocatoria a Asamblea General Ordinaria (Archivado)',
    slug: 'convocatoria-asamblea-general-ordinaria-archivado',
    category: 'Institucional',
    author: 'Roberto Gómez',
    publicationDate: new Date('2023-11-10T18:00:00Z'),
    status: 'ARCHIVED',
    summary: 'Se convocó a los socios a la Asamblea General Ordinaria el pasado Diciembre de 2023.',
    excerpt: 'Convocatoria a Asamblea General Ordinaria de Diciembre 2023.',
    content: 'Se convocó a los socios a la Asamblea General Ordinaria el pasado Diciembre de 2023. La asamblea se realizó con éxito y se trataron temas importantes para el club...',
    viewCount: 300,
    createdAt: new Date('2023-11-10T18:00:00Z'),
    updatedAt: new Date('2023-11-10T18:00:00Z'),
  },
]; 