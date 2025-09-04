import { z } from 'zod'

export const createPaymentSchema = z.object({
	userId: z.string().min(1, 'ID de usuario es requerido'),
	amount: z
		.number()
		.min(0.01, 'El monto debe ser mayor a 0')
		.max(999999.99, 'El monto es demasiado alto'),
	periodCovered: z
		.string()
		.min(1, 'El período cubierto es requerido')
		.max(100, 'El período es demasiado largo'),
	paymentDate: z
		.string()
		.datetime('Fecha de pago inválida')
		.or(z.date()),
	paymentMethod: z.enum(['MANUAL', 'MERCADOPAGO_AUTOMATIC', 'MERCADOPAGO_MANUAL'], {
		errorMap: () => ({ message: 'Método de pago inválido' }),
	}),
	status: z
		.enum(['PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'])
		.default('COMPLETED'),
	transactionId: z.string().optional(),
	notes: z.string().optional(),
})

export type CreatePaymentInput = z.infer<typeof createPaymentSchema>

export const updatePaymentSchema = createPaymentSchema.partial().extend({
	id: z.string().min(1, 'ID de pago es requerido'),
})

export type UpdatePaymentInput = z.infer<typeof updatePaymentSchema>
