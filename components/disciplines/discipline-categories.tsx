'use client' // Accordion needs client-side interactivity

import React from 'react'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion' 
import { Category } from '@/types/discipline' 

interface DisciplineCategoriesProps {
	categories: Category[]
	disciplineName: string 
}

export default function DisciplineCategories({
	categories,
	disciplineName,
}: DisciplineCategoriesProps) {
	if (!categories || categories.length === 0) {
		return null 
	}

	return (
		<section className="mb-8">
			<h2 className="text-xl font-semibold mb-4 text-white">
				Categorías {disciplineName}
			</h2>
			<Accordion type="single" collapsible className="w-full">
				{categories.map((category, index) => (
					<AccordionItem
						value={`item-${index}`}
						key={category.name + index}
						className="border-gray-700 "
					>
						<AccordionTrigger className="cursor-pointer hover:no-underline text-gray-100 hover:text-white">
							{category.name}
						</AccordionTrigger>
						<AccordionContent className="text-gray-300">
							{category.description ? (
								<p>{category.description}</p>
							) : (
								<p>
									Información sobre {category.name} pronto
									disponible.
								</p>
							)}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
} 