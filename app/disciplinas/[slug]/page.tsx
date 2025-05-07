import React from 'react'
import Image from 'next/image' // Import Image
// Import functions and types from the new data file
import { getDisciplineBySlug, getAllDisciplineSlugs } from '@/lib/disciplines' // Corrected path
import DisciplineCategories from '@/components/disciplines/discipline-categories' // Reverted to alias
import DisciplineQuickLinks from '@/components/disciplines/discipline-quick-links' // Import the new component
import DisciplineNews from '@/components/disciplines/discipline-news' // Import the new component
import DisciplineContactForm from '@/components/disciplines/discipline-contact-form' // Import the new component
import DisciplineSpecificContact from '@/components/disciplines/discipline-specific-contact' // Import the new component
import { Metadata } from 'next'
import { notFound } from 'next/navigation' // Import notFound
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
	title: 'Disciplinas',
  };

interface DisciplinePageProps {
	params: {
		slug: string
	}
}

export default async function DisciplinePage({ params }: DisciplinePageProps) {
	// Fetch data using the imported async function with await
	const disciplineData = await getDisciplineBySlug(params.slug)

	if (!disciplineData) {
		// Use notFound for better 404 handling
		notFound()
	}

	return (
		<div>
			{/* Container for the main content - Added mb-16 for extra bottom margin */}
			<div className="container mx-auto px-4 pt-48 pb-12 md:pb-16 mb-16">
				{/* Page Title - Larger and more margin */}
				<h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left">
					{disciplineData.name}
				</h1>

				{/* Quick Links - centered below title on small screens */} 
				{disciplineData.quickLinks && (
					<div className="flex justify-center md:justify-start mb-8">
						<DisciplineQuickLinks links={disciplineData.quickLinks} />
					</div>
				)}

				{/* Main content grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Main Content Area (Left/Center) */}
					<div className="lg:col-span-2 space-y-10"> {/* Added space-y for spacing between sections */}
						{/* Discipline Info Section */}
						<section>
							{/* Use accent color for heading border */} 
							<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-[#ffdc00] pb-2 font-mono">
								Información
							</h2>
							{/* Apply prose for better text formatting if needed */}
							<p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
								{disciplineData.description}
							</p>
						</section>

						{/* Related News Component */}
						{disciplineData.relatedNews &&
							disciplineData.relatedNews.length > 0 && (
								<DisciplineNews newsItems={disciplineData.relatedNews.slice(0, 3)} />
							)}

						{/* Contact Form Component */}
						<DisciplineContactForm />
					</div>

					{/* Sidebar Area (Right) - Styled darker */} 
					<aside className="lg:col-span-1 bg-neutral-900 text-white p-6 rounded-lg shadow-md h-fit sticky top-28 space-y-8">
						{/* Use Categories Component - Adjust trigger text color if needed */} 
						{disciplineData.categories &&
							disciplineData.categories.length > 0 && (
								<DisciplineCategories
									categories={disciplineData.categories}
									disciplineName={disciplineData.name}
								/>
							)}

						{/* Use Specific Contact Info Component - Adjust text colors inside */}
						{disciplineData.contactInfo && (
							<DisciplineSpecificContact contactInfo={disciplineData.contactInfo} />
						)}
					</aside>
				</div>
			</div>

			{/* Add a divider */}
			<hr className="border-t border-neutral-200 dark:border-neutral-700" />

			{/* Footer outside the container */}
			<Footer />
		</div>
	)
}

// Optional: Add generateStaticParams if you know all slugs beforehand
export async function generateStaticParams() {
	// Use the imported function to get all slugs
	const slugs = getAllDisciplineSlugs();
	return slugs // Return the array of slug objects
} 