export interface Category {
	name: string
	description?: string
}

export interface NewsLink {
	id: string
	title: string
	imageUrl: string
	date: Date 
	slug: string 
	category: string
}

export interface Discipline {
	id: string 
	name: string 
	slug: string 
	description: string 
	mainImageUrl?: string 
	quickLinks?: { title: string; url?: string; icon?: string }[] 
	categories?: Category[]
	relatedNews?: NewsLink[]
	contactInfo?: {
		phone?: string
		email?: string
	}
} 