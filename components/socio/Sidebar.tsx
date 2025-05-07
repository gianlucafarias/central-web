'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils' 


const sidebarNavItems = [
	{ title: 'Inicio', href: '/socio/dashboard' },
	{ title: 'Mi Perfil', href: '/socio/perfil'  },
	{ title: 'Pagos', href: '/socio/pagos' /*, icon: CreditCard */ },
	{ title: 'Grupo Familiar', href: '/socio/familiares' /*, icon: Users */ },
	{ title: 'Carnet Digital', href: '/socio/carnet' /*, icon: IdCard */ },
]

export default function Sidebar() {
	const pathname = usePathname()

	return (
		<nav className="flex flex-col space-y-2">
			{sidebarNavItems.map((item) => {
				const isActive = pathname === item.href
				return (
					<Link
						key={item.href}
						href={item.href}
						className={cn(
							'flex items-center space-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
							isActive
								? 'bg-primary text-primary-foreground hover:bg-primary/90'
								: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
						)}
					>
						{/* {Icon && <Icon className="h-4 w-4" />} */}
						<span>{item.title}</span>
					</Link>
				)
			})}
			{/* Podríamos añadir un enlace de Logout aquí también */}
		</nav>
	)
} 