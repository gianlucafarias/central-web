import React from 'react'
import { getDisciplineBySlug, getAllDisciplineSlugs } from '@/lib/disciplines'
import DisciplineCategories from '@/components/disciplines/discipline-categories'
import DisciplineQuickLinks from '@/components/disciplines/discipline-quick-links'
import DisciplineNews from '@/components/disciplines/discipline-news'
import DisciplineContactForm from '@/components/disciplines/discipline-contact-form'
import DisciplineSpecificContact from '@/components/disciplines/discipline-specific-contact'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
	title: 'Disciplinas',
  };

interface DisciplinePageResolvedParams {
	slug: string;
}

interface DisciplinePageProps {
	params: Promise<DisciplinePageResolvedParams>;
}

export default async function DisciplinePage({ params }: DisciplinePageProps) {
	const resolvedParams = await params;

	const disciplineData = await getDisciplineBySlug(resolvedParams.slug)

	if (!disciplineData) {
		notFound()
	}

	return (
		<div>
			<div className="container mx-auto px-4 pt-48 pb-12 md:pb-16 mb-16">
				<h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-center md:text-left">
					{disciplineData.name}
				</h1>

				{disciplineData.quickLinks && (
					<div className="flex justify-center md:justify-start mb-8">
						<DisciplineQuickLinks links={disciplineData.quickLinks} />
					</div>
				)}

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					<div className="lg:col-span-2 space-y-10">
						<section>
							<h2 className="text-2xl md:text-3xl font-semibold mb-4 border-b-2 border-[#ffdc00] pb-2 font-mono">
								Información
							</h2>
							<p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
								{disciplineData.description}
							</p>
						</section>

						{disciplineData.relatedNews &&
							disciplineData.relatedNews.length > 0 && (
								<DisciplineNews newsItems={disciplineData.relatedNews.slice(0, 3)} />
							)}

						<DisciplineContactForm />
					</div>

					<aside className="lg:col-span-1 bg-neutral-900 text-white p-6 rounded-lg shadow-md h-fit sticky top-28 space-y-8">
						{disciplineData.categories &&
							disciplineData.categories.length > 0 && (
								<DisciplineCategories
									categories={disciplineData.categories}
									disciplineName={disciplineData.name}
								/>
							)}

						{disciplineData.contactInfo && (
							<DisciplineSpecificContact contactInfo={disciplineData.contactInfo} />
						)}
					</aside>
				</div>
			</div>

			<hr className="border-t border-neutral-200 dark:border-neutral-700" />

			<Footer />
		</div>
	)
}

export async function generateStaticParams() {
	const slugs = getAllDisciplineSlugs();
	return slugs
} 