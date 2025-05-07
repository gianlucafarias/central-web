import React from 'react'
import { NewsLink } from '@/types/discipline' 
import NewsCard from '../NewsCard'

interface DisciplineNewsProps {
	newsItems: NewsLink[]
}

export default function DisciplineNews({ newsItems }: DisciplineNewsProps) {
	if (!newsItems || newsItems.length === 0) {
		return null 
	}

	return (
		<section className="mb-8">
			<h2 className="text-2xl font-semibold mb-4 font-mono">Noticias</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{newsItems.map((item) => (
					<NewsCard key={item.id} {...item} />
				))}
			</div>
		</section>
	)
} 
					