// Cliente para el servicio de pagos externo
export interface CreatePaymentRequest {
	userId: string
	amount: string
	periodCovered: string
	paymentMethod: 'MERCADOPAGO_MANUAL' | 'MERCADOPAGO_AUTOMATIC' | 'MANUAL'
	concept: string
	notes?: string
}

export interface ManualPaymentRequest {
	userId: string
	amount: string
	periodCovered: string
	paymentMethod: 'cash' | 'transferencia' | 'tarjeta_debito' | 'tarjeta_credito' | 'cheque' | 'otro'
	notes?: string
	// URLs de retorno para MercadoPago
	backUrlSuccess?: string
	backUrlFailure?: string
	backUrlPending?: string
}

export interface PaymentResponse {
	id: string
	userId: string
	amount: string
	periodCovered: string
	paymentMethod: string
	status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'
	transactionId?: string
	checkoutUrl?: string
	qrBase64?: string
	createdAt: string
	updatedAt: string
}

export interface PaymentListResponse {
	payments: PaymentResponse[]
	total: number
	page: number
	limit: number
}

class PaymentServiceClient {
	private baseUrl: string

	constructor(baseUrl: string = process.env.PAYMENT_SERVICE_URL || 'http://localhost:8080') {
		this.baseUrl = baseUrl
	}

	// Mapear métodos de pago del frontend al servicio (según lo que realmente funciona)
	private mapPaymentMethod(frontendMethod: string): string {
		const methodMap: Record<string, string> = {
			'efectivo': 'efectivo',        // ✅ Funciona (PENDING)
			'transferencia': 'efectivo',   // Mapear transferencia a efectivo (mismo flujo)
			'tarjeta_debito': 'tarjeta_debito',  // MercadoPago automático
			'tarjeta_credito': 'tarjeta_credito', // MercadoPago automático
		}
		return methodMap[frontendMethod] || 'efectivo'
	}

	// Crear pago (unificado según documentación actualizada)
	async createManualPayment(request: {
		userId: string
		amount: number
		periodCovered: string
		paymentMethod: string
		notes?: string
	}): Promise<PaymentResponse> {
		const mappedMethod = this.mapPaymentMethod(request.paymentMethod)
		const isMercadoPago = mappedMethod === 'tarjeta_debito' || mappedMethod === 'tarjeta_credito'
		
		// Usar un solo endpoint para todos los pagos según documentación
		const payload: any = {
			userId: request.userId,
			amount: request.amount.toString(),
			periodCovered: request.periodCovered,
			paymentMethod: mappedMethod, // Usar el método mapeado directamente
			concept: request.notes || `Pago para período ${request.periodCovered}`,
		}

		// Agregar URLs de retorno para MercadoPago
		if (isMercadoPago) {
			const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000'
			payload['back_url.success'] = `${baseUrl}/admin/dashboard/pagos?status=success`
			payload['back_url.failure'] = `${baseUrl}/admin/dashboard/pagos?status=failure`
			payload['back_url.pending'] = `${baseUrl}/admin/dashboard/pagos?status=pending`
		}

		console.log('🔍 Payment Service Debug:', {
			originalMethod: request.paymentMethod,
			mappedMethod: mappedMethod,
			isMercadoPago: isMercadoPago,
			payload: payload,
			url: `${this.baseUrl}/api/v1/payments`
		})

		const response = await fetch(`${this.baseUrl}/api/v1/payments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			const error = await response.json().catch(() => ({ message: 'Error desconocido' }))
			console.error('❌ Payment Service Error:', {
				status: response.status,
				statusText: response.statusText,
				error: error
			})
			throw new Error(error.message || `Error ${response.status}: ${response.statusText}`)
		}

		return response.json()
	}

	// Crear pago con MercadoPago
	async createPayment(request: {
		userId: string
		amount: number
		periodCovered: string
		concept: string
	}): Promise<PaymentResponse> {
		const payload: CreatePaymentRequest = {
			userId: request.userId,
			amount: request.amount.toString(),
			periodCovered: request.periodCovered,
			paymentMethod: 'MERCADOPAGO_MANUAL',
			concept: request.concept,
		}

		const response = await fetch(`${this.baseUrl}/api/v1/payments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(payload),
		})

		if (!response.ok) {
			const error = await response.json().catch(() => ({ message: 'Error desconocido' }))
			throw new Error(error.message || `Error ${response.status}: ${response.statusText}`)
		}

		return response.json()
	}

	// Obtener estado de un pago
	async getPayment(paymentId: string): Promise<PaymentResponse> {
		const response = await fetch(`${this.baseUrl}/api/v1/payments/${paymentId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			const error = await response.json().catch(() => ({ message: 'Error desconocido' }))
			throw new Error(error.message || `Error ${response.status}: ${response.statusText}`)
		}

		return response.json()
	}

	// Listar pagos de un usuario
	async getUserPayments(userId: string, page: number = 1, limit: number = 10): Promise<PaymentListResponse> {
		const params = new URLSearchParams({
			userId,
			page: page.toString(),
			limit: limit.toString(),
		})

		const response = await fetch(`${this.baseUrl}/api/v1/payments?${params}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			const error = await response.json().catch(() => ({ message: 'Error desconocido' }))
			throw new Error(error.message || `Error ${response.status}: ${response.statusText}`)
		}

		return response.json()
	}

	// Verificar estado del servicio
	async healthCheck(): Promise<{ status: string }> {
		const response = await fetch(`${this.baseUrl}/health`, {
			method: 'GET',
		})

		if (!response.ok) {
			throw new Error(`Servicio de pagos no disponible: ${response.status}`)
		}

		return response.json()
	}
}

// Instancia singleton del cliente
export const paymentService = new PaymentServiceClient()

// Utilidades para mapear estados
export function mapPaymentStatus(serviceStatus: string): 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED' {
	const statusMap: Record<string, 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED'> = {
		'OrderStatusPending': 'PENDING',
		'OrderStatusApproved': 'COMPLETED',
		'OrderStatusRejected': 'FAILED',
		'OrderStatusCancelled': 'FAILED',
		'OrderStatusExpired': 'FAILED',
		'OrderStatusFailed': 'FAILED',
		'OrderStatusRefunded': 'REFUNDED',
	}
	return statusMap[serviceStatus] || 'PENDING'
}

export function getPaymentStatusDisplay(status: string): { text: string; variant: 'default' | 'destructive' | 'outline' | 'secondary' } {
	switch (status) {
		case 'COMPLETED':
			return { text: 'Completado', variant: 'default' }
		case 'PENDING':
			return { text: 'Pendiente', variant: 'outline' }
		case 'FAILED':
			return { text: 'Fallido', variant: 'destructive' }
		case 'REFUNDED':
			return { text: 'Reembolsado', variant: 'secondary' }
		default:
			return { text: status, variant: 'outline' }
	}
}
