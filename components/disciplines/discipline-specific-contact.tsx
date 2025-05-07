import React from 'react'
import { Discipline } from '@/types/discipline' 
import { Mail, Phone } from 'lucide-react' 
import Link from 'next/link'

type ContactInfo = NonNullable<Discipline['contactInfo']>

interface DisciplineSpecificContactProps {
	contactInfo: ContactInfo
}

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
			<Link
				href={href}
				className="text-[#ffdc00] hover:text-yellow-300 break-all transition-colors"
			>
				{value}
			</Link>
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
	const hasContactInfo =
		contactInfo && (contactInfo.email || contactInfo.phone) 

	if (!hasContactInfo) {
		return null 
	}

	return (
		<section>
			<h2 className="text-xl font-semibold mb-4 text-white">Información Importante</h2>
			<ul className="list-none p-0 m-0">
				{contactInfo.phone && (
					<ContactItem
						icon={<Phone size={16} />} 
						label="Tel"
						value={contactInfo.phone}
						href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} 
					/>
				)}
				{contactInfo.email && (
					<ContactItem
						icon={<Mail size={16} />} 
						label="Email"
						value={contactInfo.email}
						href={`mailto:${contactInfo.email}`}
					/>
				)}
			</ul>
		</section>
	)
} 