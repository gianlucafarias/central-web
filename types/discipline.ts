// types/discipline.ts
export interface Category {
	name: string
	description?: string
	// Add other relevant fields later, like schedules, coaches, etc.
}

export interface NewsLink {
	id: string
	title: string
	imageUrl: string
	date: Date // Or Date type if preferred
	slug: string // To link to the full news article
	category: string
}

export interface Discipline {
	id: string // Unique identifier (e.g., 'hockey-patines')
	name: string // Display name (e.g., 'Hockey sobre Patines')
	slug: string // URL slug (e.g., 'hockey-sobre-patines')
	description: string // Main informational text
	mainImageUrl?: string // Optional main banner image
	quickLinks?: { title: string; url?: string; icon?: string }[] // Optional specific links
	categories?: Category[]
	relatedNews?: NewsLink[]
	contactInfo?: {
		// Specific contact details if different from the club's general info
		phone?: string
		email?: string
		// Add other fields as needed
	}
} 