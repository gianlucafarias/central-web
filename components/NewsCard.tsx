import { User, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { es } from 'date-fns/locale'
import { format } from 'date-fns'
import Link from 'next/link'
import Image from 'next/image'
import { NewsItem, slugify } from '@/lib/news'

export default function NewsCard(news: NewsItem) {
	const categorySlug = slugify(news.category)

	return (
		<Card
			key={news.id}
			className='overflow-hidden card-hover bg-white flex flex-col h-full'
		>
			<Link href={`/noticias/${news.slug}`} legacyBehavior={false}>
				<div className='h-44 overflow-hidden cursor-pointer relative'>
					<Image
						src={news.imageUrl}
						alt={news.title}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						className='object-cover'
					/>
				</div>
			</Link>
			<div className='flex flex-col flex-grow px-4 pb-4'>
				<CardHeader className='pb-1 pt-0 px-0'>
					<div className='flex justify-between items-center mb-1.5'>
						<Link href={`/noticias/categoria/${categorySlug}`} legacyBehavior={false} className='hover:opacity-80 transition-opacity'>
							<span className='text-xs font-semibold px-2.5 py-1 bg-club-dark text-white rounded-full uppercase tracking-wider font-mono hover:bg-club-secondary hover-transition cursor-pointer'>
								{news.category}
							</span>
						</Link>
					</div>
					<Link href={`/noticias/${news.slug}`} legacyBehavior={false} className='hover:text-club-primary transition-colors'>
						<CardTitle className='text-lg font-sans font-bold text-club-dark leading-snug line-clamp-2'>
							{news.title}
						</CardTitle>
					</Link>
				</CardHeader>
				<CardContent className='flex-grow pb-2 pt-1 px-0'>
					<p className='text-gray-600 mb-3 text-sm line-clamp-3'>
						{news.excerpt}
					</p>
					<div className='flex text-gray-500 text-xs gap-4'>
						<div className='flex items-center gap-1'>
							<Calendar size={14} />
							<span>
								{format(news.date, 'd LLL, yyyy', { locale: es })}
							</span>
						</div>
					</div>
				</CardContent>
				<CardFooter className='pt-2 pb-0 px-0 mt-auto'>
					<Link href={`/noticias/${news.slug}`} legacyBehavior={false} passHref>
						<Button
							variant='link'
							className='text-club-dark font-semibold p-0 h-auto hover:text-club-primary'
						>
							Leer más
						</Button>
					</Link>
				</CardFooter>
			</div>
		</Card>
	)
}
