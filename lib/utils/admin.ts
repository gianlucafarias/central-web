import { AdminUserView } from "@/app/admin/dashboard/data-socios"

export function updateUserAfterPayment(
	users: AdminUserView[], 
	payment: any
): AdminUserView[] {
	return users.map(user => 
		user.id === payment.userId 
			? {
					...user,
					lastPaymentAmount: Number(payment.amount),
					lastPaymentDate: new Date(payment.paymentDate),
					status: 'ACTIVE' as const, // El pago exitoso activa al socio
				}
			: user
	)
}

export function formatPaymentAmount(amount: number): string {
	return new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARS',
	}).format(amount)
}

export function formatPaymentDate(date: string | Date): string {
	const dateObj = typeof date === 'string' ? new Date(date) : date
	return dateObj.toLocaleDateString('es-AR', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})
}

export function getPaymentMethodDisplayName(method: string): string {
	const methodNames: Record<string, string> = {
		'MANUAL': 'Manual',
		'MERCADOPAGO_AUTOMATIC': 'MercadoPago Automático',
		'MERCADOPAGO_MANUAL': 'MercadoPago Manual',
		'efectivo': 'Efectivo',
		'tarjeta_debito': 'Tarjeta de Débito',
		'tarjeta_credito': 'Tarjeta de Crédito',
		'transferencia': 'Transferencia Bancaria',
		'cheque': 'Cheque',
		'otro': 'Otro',
	}
	
	return methodNames[method] || method
}

export function getPaymentStatusDisplayName(status: string): string {
	const statusNames: Record<string, string> = {
		'COMPLETED': 'Completado',
		'PENDING': 'Pendiente',
		'FAILED': 'Fallido',
		'REFUNDED': 'Reembolsado',
	}
	
	return statusNames[status] || status
}
