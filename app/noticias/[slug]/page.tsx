import React from 'react'
import Image from 'next/image'
import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, User, Tag } from 'lucide-react' 
import { getNewsBySlug, getAllNewsSlugs, formatDate, slugify, getAllNews } from '@/lib/news'
import Footer from '@/components/Footer'
import Link from 'next/link' 

interface NewsArticlePageResolvedParams {
	slug: string;
}

interface NewsArticlePageProps {
	params: Promise<NewsArticlePageResolvedParams>; 
}

export async function generateMetadata(
	{ params }: NewsArticlePageProps, 
	_parent: ResolvingMetadata
): Promise<Metadata> {
	const resolvedParams = await params; 
	const newsItem = await getNewsBySlug(resolvedParams.slug) 

	if (!newsItem) {
		return {
			title: 'Noticia no encontrada',
		}
	}

	return {
		title: newsItem.title,
		description: newsItem.excerpt,
		openGraph: {
			images: [newsItem.imageUrl],
		},
	}
}

export default async function NewsArticlePage({
	params, 
}: NewsArticlePageProps) {
	const resolvedParams = await params; 
	const newsItem = await getNewsBySlug(resolvedParams.slug) 
	const allNews = await getAllNews() 

	if (!newsItem) {
		notFound() 
	}

	const recentNews = allNews
		.filter(n => n.slug !== newsItem.slug)
		.sort((a, b) => b.date.getTime() - a.date.getTime())
		.slice(0, 3) 

	const uniqueCategories = Array.from(new Set(allNews.map(n => n.category)))

	return (
		<div>
			<article className='bg-slate-100 px-4 py-36 md:py-20 lg:py-34'>
				<div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
					<div className='lg:col-span-2 w-full bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10'>
						<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-club-dark mb-4 md:mb-6 text-center lg:text-left font-mono'>
							{newsItem.title}
						</h1>

						<div className='flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-2 text-sm text-gray-600 mb-6 md:mb-8'>
							<div className='flex items-center gap-1.5'>
								<Calendar size={16} />
								<span>{formatDate(newsItem.date)}</span>
							</div>
							<div className='flex items-center gap-1.5'>
								<User size={16} />
								<span>{newsItem.author}</span>
							</div>
							<div className='flex items-center gap-1.5'>
								<Tag size={16} />
								<Link href={`/noticias/categoria/${slugify(newsItem.category)}`} legacyBehavior={false}>
									<span className='px-2 py-0.5 bg-club-dark text-white text-xs rounded-full font-mono uppercase hover:bg-club-secondary transition-colors cursor-pointer'>
										{newsItem.category}
									</span>
								</Link>
							</div>
						</div>

						<div className='relative w-full h-64 md:h-80 lg:h-96 mb-6 md:mb-8 rounded-lg overflow-hidden shadow-md'>
							<Image
								src={newsItem.imageUrl}
								alt={`Imagen para ${newsItem.title}`}
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='object-cover'
								priority
							/>
						</div>

						<div
							className='prose prose-lg max-w-none prose-headings:font-mono prose-headings:text-club-dark prose-a:text-club-primary hover:prose-a:text-club-secondary prose-strong:font-semibold'
						>
							{newsItem.content.split('\n\n').map((paragraph, index) => {
								const isBold = paragraph.startsWith('**') && paragraph.endsWith('**')
								const text = isBold ? paragraph.substring(2, paragraph.length - 2) : paragraph

								if (paragraph.startsWith('*   ')) {
									return <ul key={index} className='list-disc list-inside mb-4'><li>{paragraph.substring(4)}</li></ul>
								}

								return (
									<p key={index} className={`${isBold ? 'font-bold' : ''} mb-4 whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed`}>
										{text}
									</p>
								)
							})}
						</div>
					</div>

					<aside className='lg:col-span-1 w-full space-y-6 lg:sticky lg:top-28 h-fit'>
						<div className='rounded-xl space-y-4'>
							<div className='bg-gray-200 h-48 flex items-center justify-center rounded-md'>
								<p className='text-gray-500'>Publicidad 1</p>
							</div>

							<div className='bg-gray-200 h-48 flex items-center justify-center rounded-md'>
								<p className='text-gray-500'>Publicidad 2</p>
							</div>
						</div>

						{recentNews.length > 0 && (
							<div className='bg-white rounded-xl shadow-lg p-6'>
								<h3 className='text-xl font-semibold text-club-dark mb-4 font-mono'>Noticias Recientes</h3>
								<ul className='space-y-3'>
									{recentNews.map((rNews) => (
										<li key={rNews.id} className='text-sm'>
											<Link href={`/noticias/${rNews.slug}`} className='text-club-dark hover:text-club-primary hover:underline transition-colors'>
												{rNews.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
						
						{uniqueCategories.length > 0 && (
							<div className='bg-white rounded-xl shadow-lg p-6'>
								<h3 className='text-xl font-semibold text-club-dark mb-4 font-mono'>Categorías</h3>
								<ul className='space-y-3'>
									{uniqueCategories.map((cat, i) => (
										<li key={i} className='text-sm'>
											<Link href={`/noticias/categoria/${slugify(cat)}`} className='text-club-dark hover:text-club-primary hover:underline transition-colors'>
												{cat} 
											</Link>
										</li>
									))}
								</ul>
							</div>
						)}
					</aside>
				</div>
			</article>

			<Footer />
		</div>
	)
}

export async function generateStaticParams() {
	const slugs = await getAllNewsSlugs()
	return slugs.map((s) => ({ slug: s.slug }))
} 