import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { 
    getNewsByCategory,
    getAllCategorySlugs,
    unslugify,
} from '@/lib/news'
import NewsCard from '@/components/NewsCard' 
import Footer from '@/components/Footer'
import ClubHeroSection from '@/components/el-club.tsx/ClubHeroSection' 

interface CategoryPageResolvedParams {
    categorySlug: string;
}

interface CategoryPageProps {
    params: Promise<CategoryPageResolvedParams>; 
}

export async function generateMetadata(
    { params }: CategoryPageProps, 
    _parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params; 
    const categoryName = unslugify(resolvedParams.categorySlug) 
    const newsItems = await getNewsByCategory(resolvedParams.categorySlug) 

    if (newsItems.length === 0) {
        return {
            title: 'Categoría no encontrada',
        }
    }

    return {
        title: `Noticias de ${categoryName}`,
        description: `Explora las últimas noticias y artículos sobre ${categoryName} en nuestro club.`,
    }
}

export default async function CategoryPage({ params }: CategoryPageProps) { 
    const resolvedParams = await params; 
    const { categorySlug } = resolvedParams 
    const newsItems = await getNewsByCategory(categorySlug)
    const categoryName = unslugify(categorySlug)

    if (newsItems.length === 0) {
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

export async function generateStaticParams() {
    const categorySlugs = await getAllCategorySlugs()
    return categorySlugs.map((cat) => ({
        categorySlug: cat.categorySlug,
    }))
} 