import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { 
    getNewsByCategory,
    getAllCategorySlugs,
    unslugify,
    NewsItem // Importar NewsItem si aún no está
} from '@/lib/news'
import NewsCard from '@/components/NewsCard' // Componente para mostrar cada noticia
import Footer from '@/components/Footer'
// Podrías crear un HeroSection más genérico o reutilizar ClubHeroSection si lo ajustas
import ClubHeroSection from '@/components/el-club.tsx/ClubHeroSection' 

// Definir el tipo para los parámetros resueltos
interface CategoryPageResolvedParams {
    categorySlug: string;
}

// Definir el tipo para las props de la página, con params como una Promise
interface CategoryPageProps {
    params: Promise<CategoryPageResolvedParams>; // <--- CAMBIO AQUÍ
}

// Generar metadatos dinámicos para la página de categoría
export async function generateMetadata(
    { params }: CategoryPageProps, // <--- USA LA INTERFAZ ACTUALIZADA
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params; // <--- AWAIT PARAMS
    const categoryName = unslugify(resolvedParams.categorySlug) // <--- USA resolvedParams
    // Podrías verificar si la categoría existe y tiene noticias antes de generar metadatos
    const newsItems = await getNewsByCategory(resolvedParams.categorySlug) // <--- USA resolvedParams

    if (newsItems.length === 0) {
        return {
            title: 'Categoría no encontrada',
        }
    }

    return {
        title: `Noticias de ${categoryName}`,
        description: `Explora las últimas noticias y artículos sobre ${categoryName} en nuestro club.`,
        // Puedes agregar openGraph images si tienes una imagen representativa para la categoría
    }
}

export default async function CategoryPage({ params }: CategoryPageProps) { // <--- USA LA INTERFAZ ACTUALIZADA
    const resolvedParams = await params; // <--- AWAIT PARAMS
    const { categorySlug } = resolvedParams // <--- USA resolvedParams
    const newsItems = await getNewsByCategory(categorySlug)
    const categoryName = unslugify(categorySlug)

    if (newsItems.length === 0) {
        // Opcional: podrías tener una página más amigable para categorías sin noticias
        // o simplemente redirigir o mostrar un mensaje específico.
        // Por ahora, si no hay noticias, podría interpretarse como que la categoría no es válida o no tiene contenido.
        notFound()
    }

    return (
        <div>
            <ClubHeroSection title={`Noticias sobre ${categoryName}`} />

            <div className='bg-slate-100 px-4 py-12 md:py-16 lg:py-20 -mt-10 pt-20 mb-16'>
                <div className='container mx-auto'>
                    {newsItems.length > 0 ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                            {newsItems.map((news) => (
                                <NewsCard key={news.id} {...news} />
                            ))}
                        </div>
                    ) : (
                        <div className='text-center py-10'>
                            <h2 className='text-2xl font-semibold mb-4'>No hay noticias en esta categoría.</h2>
                            <p className='text-gray-600'>Prueba explorando otras categorías o vuelve más tarde.</p>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    )
}

// Generar rutas estáticas para cada categoría con noticias
export async function generateStaticParams() {
    const categorySlugs = await getAllCategorySlugs()
    return categorySlugs.map((cat) => ({
        categorySlug: cat.categorySlug,
    }))
} 