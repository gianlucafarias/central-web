import React from 'react'
import { Discipline } from '@/types/discipline' // Assuming types alias works
import { Mail, Phone } from 'lucide-react' // Example icons

// Extract ContactInfo type for clarity
type ContactInfo = NonNullable<Discipline['contactInfo']>

interface DisciplineSpecificContactProps {
	contactInfo: ContactInfo
}

// Helper to create consistent list items
const ContactItem = ({
	icon,
	label,
	value,
	href,
}: {
	icon: React.ReactNode
	label: string
	value: string
	href?: string
}) => (
	<li className="flex items-center text-sm mb-2">
		<span className="mr-2 text-gray-400">{icon}</span>
		<span className="font-medium mr-1 text-gray-200">{label}:</span>
		{href ? (
			<a
				href={href}
				className="text-[#ffdc00] hover:text-yellow-300 break-all transition-colors"
			>
				{value}
			</a>
		) : (
			<span className="text-gray-300 break-all">
				{value}
			</span>
		)}
	</li>
)

export default function DisciplineSpecificContact({
	contactInfo,
}: DisciplineSpecificContactProps) {
	// Check if contactInfo exists and has any relevant keys
	const hasContactInfo =
		contactInfo && (contactInfo.email || contactInfo.phone) // Add more checks if needed

	if (!hasContactInfo) {
		return null // Don't render if no specific info provided
	}

	return (
		<section>
			<h2 className="text-xl font-semibold mb-4 text-white">Información Importante</h2>
			<ul className="list-none p-0 m-0">
				{contactInfo.phone && (
					<ContactItem
						icon={<Phone size={16} />} // Ensure lucide-react is installed
						label="Tel"
						value={contactInfo.phone}
						href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} // Basic tel link
					/>
				)}
				{contactInfo.email && (
					<ContactItem
						icon={<Mail size={16} />} // Ensure lucide-react is installed
						label="Email"
						value={contactInfo.email}
						href={`mailto:${contactInfo.email}`}
					/>
				)}
				{/* Add other contact fields here as needed (e.g., address, specific social media) */}
			</ul>
		</section>
	)
} 