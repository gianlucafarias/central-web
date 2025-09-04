import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'
import { z } from 'zod'
import { AdminUserView } from '@/app/admin/dashboard/data-socios'

const prisma = new PrismaClient()

const searchSchema = z.object({
	query: z.string().min(1, 'El término de búsqueda es requerido'),
})

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const query = searchParams.get('query')
		
		// Validar parámetros
		const { query: validatedQuery } = searchSchema.parse({ query })

		// Buscar en la base de datos real usando Prisma
		const socios = await prisma.user.findMany({
			where: {
				OR: [
					{ dni: { contains: validatedQuery, mode: 'insensitive' } },
					{ firstName: { contains: validatedQuery, mode: 'insensitive' } },
					{ lastName: { contains: validatedQuery, mode: 'insensitive' } },
					// Búsqueda por nombre completo
					{
						AND: [
							{ firstName: { contains: validatedQuery.split(' ')[0] || '', mode: 'insensitive' } },
							{ lastName: { contains: validatedQuery.split(' ')[1] || '', mode: 'insensitive' } }
						]
					}
				],
			},
			select: {
				id: true,
				firstName: true,
				lastName: true,
				dni: true,
				phone: true,
				email: true,
				status: true,
				role: true,
				createdAt: true,
				familyHeadId: true,
				_count: {
					select: {
						familyMembers: true,
						payments: true,
					},
				},
			},
			take: 10,
			orderBy: [
				{ status: 'asc' },
				{ lastName: 'asc' },
				{ firstName: 'asc' }
			]
		})

		// Formatear datos para el frontend
		const formattedSocios: AdminUserView[] = socios.map(socio => ({
			id: socio.id,
			numeroSocio: socio.id, // Usar el ID como número de socio temporalmente
			firstName: socio.firstName || '',
			lastName: socio.lastName || '',
			nombreCompleto: `${socio.firstName || ''} ${socio.lastName || ''}`.trim(),
			dni: socio.dni,
			phone: socio.phone,
			email: socio.email || '',
			status: socio.status,
			role: socio.role,
			createdAt: socio.createdAt.toISOString(),
			familyHeadId: socio.familyHeadId,
			familyMembersCount: socio._count.familyMembers,
			lastPaymentAmount: null, // Temporalmente null hasta implementar consulta de payments
			lastPaymentDate: null,
			lastPaymentStatus: null,
		}))

		return NextResponse.json({
			success: true,
			socios: formattedSocios,
			total: formattedSocios.length,
			query: validatedQuery,
		})

	} catch (error) {
		console.error('Error buscando socios:', error)

		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{
					error: 'Parámetros inválidos',
					details: error.errors.map(err => ({
						field: err.path.join('.'),
						message: err.message,
					})),
				},
				{ status: 400 }
			)
		}

		return NextResponse.json(
			{ error: 'Error interno del servidor' },
			{ status: 500 }
		)
	} finally {
		await prisma.$disconnect()
	}
}