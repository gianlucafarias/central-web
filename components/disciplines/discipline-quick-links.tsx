import React from 'react'
import Link from 'next/link'
import { Discipline } from '@/types/discipline' 

type QuickLink = NonNullable<Discipline['quickLinks']>[number]

interface DisciplineQuickLinksProps {
	links: QuickLink[]
}

export default function DisciplineQuickLinks({ links }: DisciplineQuickLinksProps) {
	if (!links || links.length === 0) {
		return null
	}

	return (
		<div className="mb-6 flex flex-wrap gap-4 items-center">
			{links.map((link, index) => (
				<div
					key={link.title + index}
					className="flex items-center text-sm text-gray-700 dark:text-gray-300"
				>
					{link.icon && <span className="mr-2">{link.icon}</span>}
					{link.url ? (
						<Link
							href={link.url}
							className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							{link.title}
						</Link>
					) : (
						<span>{link.title}</span> 
					)}
				</div>
			))}
		</div>
	)
} 