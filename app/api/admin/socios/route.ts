import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'
import { z } from 'zod'
import { AdminUserView } from '@/app/admin/dashboard/data-socios'

const prisma = new PrismaClient()

// Schema de validación para crear socio
const createSocioSchema = z.object({
  firstName: z.string().min(1, 'El nombre es requerido'),
  lastName: z.string().min(1, 'El apellido es requerido'),
  dni: z.string().min(7, 'El DNI debe tener al menos 7 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(10, 'El teléfono debe tener al menos 10 caracteres'),
  birthDate: z.string().optional(),
  addressStreet: z.string().optional(),
  addressNumber: z.string().optional(),
  addressCity: z.string().optional(),
  addressZip: z.string().optional(),
  socioType: z.enum(['INDIVIDUAL', 'HEAD', 'FAMILY_MEMBER']).default('INDIVIDUAL'),
  membershipStatus: z.enum(['PENDING_VALIDATION', 'ACTIVE', 'INACTIVE']).default('PENDING_VALIDATION'),
  notes: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validar datos de entrada
    const validatedData = createSocioSchema.parse(body)

    // Verificar que el DNI no esté duplicado
    const existingUser = await prisma.user.findFirst({
      where: { dni: validatedData.dni }
    })

    if (existingUser) {
      return NextResponse.json(
        { error: 'Ya existe un socio con este DNI' },
        { status: 400 }
      )
    }

    // Verificar que el email no esté duplicado
    const existingEmail = await prisma.user.findFirst({
      where: { email: validatedData.email }
    })

    if (existingEmail) {
      return NextResponse.json(
        { error: 'Ya existe un socio con este email' },
        { status: 400 }
      )
    }

    // Crear el nuevo socio
    const newSocio = await prisma.user.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        dni: validatedData.dni,
        email: validatedData.email,
        phone: validatedData.phone,
        status: validatedData.membershipStatus,
        role: 'USER', // Usar el enum correcto del schema
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        dni: true,
        email: true,
        phone: true,
        status: true,
        role: true,
        createdAt: true,
        familyHeadId: true,
      }
    })

    return NextResponse.json({
      success: true,
      socio: newSocio,
      message: 'Socio creado exitosamente'
    })

  } catch (error) {
    console.error('Error creando socio:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Datos inválidos',
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

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url)
		const page = parseInt(searchParams.get('page') || '1')
		const limit = parseInt(searchParams.get('limit') || '10')
		const skip = (page - 1) * limit

		// Obtener socios con paginación
		const [socios, total] = await Promise.all([
			prisma.user.findMany({
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
				orderBy: [
					{ status: 'asc' },
					{ lastName: 'asc' },
					{ firstName: 'asc' }
				],
				skip,
				take: limit,
			}),
			prisma.user.count(),
		])

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
			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
			},
		})

	} catch (error) {
		console.error('Error obteniendo socios:', error)
		return NextResponse.json(
			{ error: 'Error interno del servidor' },
			{ status: 500 }
		)
	} finally {
		await prisma.$disconnect()
	}
}