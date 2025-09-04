import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/lib/generated/prisma'
import { createPaymentSchema } from '@/lib/validations/payment'
import { paymentService } from '@/lib/services/payment-service'
import { z } from 'zod'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		
		// Validar datos de entrada básicos
		const validatedData = {
			userId: body.userId,
			amount: parseFloat(body.amount),
			periodCovered: body.periodCovered,
			paymentMethod: body.paymentMethod || 'efectivo',
			notes: body.notes,
		}

		if (!validatedData.userId || !validatedData.amount || !validatedData.periodCovered) {
			return NextResponse.json(
				{ error: 'Faltan campos requeridos: userId, amount, periodCovered' },
				{ status: 400 }
			)
		}

		// Verificar que el usuario existe (opcional - para validación)
		const user = await prisma.user.findUnique({
			where: { id: validatedData.userId },
		})

		if (!user) {
			return NextResponse.json(
				{ error: 'Usuario no encontrado' },
				{ status: 404 }
			)
		}

		// Crear el pago usando el servicio real de pagos
		const servicePayment = await paymentService.createManualPayment({
			userId: validatedData.userId,
			amount: validatedData.amount,
			periodCovered: validatedData.periodCovered,
			paymentMethod: validatedData.paymentMethod,
			notes: validatedData.notes,
		})

		// ⚠️ NOTA: No hay sincronización automática con Prisma
		// El servicio Go maneja la persistencia de pagos
		// Para sincronizar, implementar webhook o endpoint de sincronización

		return NextResponse.json({
			success: true,
			payment: servicePayment,
			message: 'Pago registrado exitosamente en el servicio de pagos',
			note: 'El pago se procesó en el servicio externo. Para sincronizar con la DB local, implementar webhook.',
		})

	} catch (error) {
		console.error('Error creando pago:', error)

		// Error del servicio de pagos
		if (error instanceof Error) {
			return NextResponse.json(
				{ error: `Error en servicio de pagos: ${error.message}` },
				{ status: 502 }
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
		const userId = searchParams.get('userId')
		const page = parseInt(searchParams.get('page') || '1')
		const limit = parseInt(searchParams.get('limit') || '10')
		const skip = (page - 1) * limit

		const where = userId ? { userId } : {}

		const [payments, total] = await Promise.all([
			prisma.payment.findMany({
				where,
				include: {
					user: {
						select: {
							id: true,
							firstName: true,
							lastName: true,
							dni: true,
						},
					},
				},
				orderBy: { createdAt: 'desc' },
				skip,
				take: limit,
			}),
			prisma.payment.count({ where }),
		])

		return NextResponse.json({
			payments,
			pagination: {
				page,
				limit,
				total,
				pages: Math.ceil(total / limit),
			},
		})

	} catch (error) {
		console.error('Error obteniendo pagos:', error)
		return NextResponse.json(
			{ error: 'Error interno del servidor' },
			{ status: 500 }
		)
	} finally {
		await prisma.$disconnect()
	}
}
