export interface DisciplineCategory {
	id: string
	name: string
	description?: string
	displayOrder: number
	isActive: boolean
	createdAt: Date
	updatedAt: Date
	disciplineId: string
}

export interface DisciplineQuickLink {
	id: string
	title: string
	url?: string
	icon?: string
	displayOrder: number
	isActive: boolean
	createdAt: Date
	updatedAt: Date
	disciplineId: string
}

export interface DisciplineContactInfo {
	id: string
	phone?: string
	email?: string
	whatsapp?: string
	address?: string
	schedule?: string
	createdAt: Date
	updatedAt: Date
	disciplineId: string
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
	isActive: boolean
	displayOrder: number
	createdAt: Date
	updatedAt: Date
	quickLinks?: DisciplineQuickLink[]
	categories?: DisciplineCategory[]
	relatedNews?: NewsLink[]
	contactInfo?: DisciplineContactInfo
}

// Tipos para compatibilidad con el código existente
export interface Category {
	name: string
	description?: string
} 