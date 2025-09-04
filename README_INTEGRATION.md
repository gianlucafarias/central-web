# Central Web Payments - Guía de Integración

## 🚀 Estado del Proyecto

✅ **LISTO PARA PRUEBAS** - El servicio está configurado correctamente para integrarse con tu frontend Next.js

## 📋 Resumen de Cambios Realizados

### 1. **Errores de Importación Corregidos**
- ✅ Todas las rutas de importación actualizadas al módulo correcto
- ✅ Constantes de estado sincronizadas
- ✅ Provider de MercadoPago corregido según SDK oficial
- ✅ Tipos de datos corregidos

### 2. **Nueva API v1 para Next.js**
Se agregaron endpoints específicos para la integración con tu frontend:

```
POST /api/v1/payments              # Crear pago desde frontend
GET  /api/v1/payments              # Listar pagos de usuario  
GET  /api/v1/payments/:paymentId   # Estado de pago específico
POST /api/v1/admin/payments        # Pagos manuales (admin panel)
POST /api/v1/webhooks/:alias       # Webhooks de providers
```

### 3. **DTOs Compatibles con Prisma**
Creados DTOs que mapean perfectamente con tu modelo de frontend:

- `CreatePaymentRequest` - Compatible con formularios Next.js
- `PaymentResponse` - Compatible con modelo Prisma Payment
- `ManualPaymentRequest` - Para admin panel

### 4. **Configuración CORS**
Configurado CORS para permitir requests desde Next.js (localhost:3000)

## 🔧 Configuración Necesaria

### Variables de Entorno
```bash
# Base de datos
DATABASE_URL=postgresql://user:password@localhost:5432/central_payments?sslmode=disable

# MercadoPago  
MP_ACCESS_TOKEN=TEST-1234567890-123456-abcdef1234567890abcdef1234567890-123456789

# Servidor
PORT=8080
BASE_URL=http://localhost:8080

# Frontend (ajustar según tu dominio)
FRONTEND_URL=http://localhost:3000
```

### Webhook URL para MercadoPago
Configura en tu cuenta de MercadoPago:
```
https://tu-dominio.com/api/v1/webhooks/mp
```

## 🧪 Cómo Probar

### 1. **Iniciar el Servicio**
```bash
go run cmd/server/main.go
```

### 2. **Crear Pago desde Frontend** 
```javascript
// Para TARJETAS (MercadoPago)
const response = await fetch('http://localhost:8080/api/v1/payments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'cuid_usuario',
    amount: '3500.00',
    periodCovered: '2024-01',
    paymentMethod: 'tarjeta_debito',  // o 'tarjeta_credito'
    concept: 'Cuota mensual enero'
  })
});

const payment = await response.json();
// payment.checkoutUrl -> URL para redirigir a MercadoPago
// payment.qrBase64 -> QR para mostrar en móvil
// payment.status -> "PENDING"

// Para EFECTIVO
const responseEfectivo = await fetch('http://localhost:8080/api/v1/payments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'cuid_usuario',
    amount: '3500.00',
    periodCovered: '2024-01',
    paymentMethod: 'efectivo',
    concept: 'Cuota mensual enero'
  })
});

// Para TRANSFERENCIA
const responseTransferencia = await fetch('http://localhost:8080/api/v1/payments', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'cuid_usuario',
    amount: '3500.00',
    periodCovered: '2024-01',
    paymentMethod: 'transferencia',
    concept: 'Cuota mensual enero'
  })
});
```

### 3. **Crear Pago Manual (Admin)**
```javascript
const response = await fetch('http://localhost:8080/api/v1/admin/payments', {
  method: 'POST', 
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 'cuid_usuario',
    amount: '3500.00',
    periodCovered: '2024-01',
    paymentMethod: 'cash',
    notes: 'Pago en efectivo recibido por administrador'
  })
});
```

## 📊 Mapeo de Estados

### Prisma ↔ Go Service
```
PENDING    ↔ OrderStatusPending
COMPLETED  ↔ OrderStatusApproved  
FAILED     ↔ OrderStatusRejected/Cancelled/Expired/Failed
REFUNDED   ↔ OrderStatusRefunded
```

### Métodos de Pago
```
Frontend → Backend Provider → Tipo de Pago
"efectivo"        → "cash"        → Pago manual (admin)
"transferencia"   → "transferencia" → Pago manual (admin)
"tarjeta_debito"  → "mp"          → MercadoPago (automático)
"tarjeta_credito" → "mp"          → MercadoPago (automático)
```

## 🔄 Flujo de Pagos

### 1. Pago con Tarjetas (MercadoPago)
1. Frontend llama `POST /api/v1/payments` con `paymentMethod: "tarjeta_debito"` o `"tarjeta_credito"`
2. Servicio crea preferencia en MercadoPago
3. Retorna `checkoutUrl` y `qrBase64`
4. Usuario paga en MercadoPago
5. MP envía webhook a `/api/v1/webhooks/mp`
6. Servicio actualiza estado del pago automáticamente
7. Frontend consulta estado con `GET /api/v1/payments/:paymentId`

### 2. Pago en Efectivo
1. Frontend llama `POST /api/v1/payments` con `paymentMethod: "efectivo"`
2. Servicio crea orden y la marca como PENDING
3. Admin confirma el pago manualmente
4. Se actualiza estado a COMPLETED

### 3. Pago por Transferencia
1. Frontend llama `POST /api/v1/payments` con `paymentMethod: "transferencia"`
2. Servicio crea orden y la marca como PENDING
3. Admin verifica transferencia y confirma manualmente
4. Se actualiza estado a COMPLETED

## 🚨 Próximos Pasos

1. **Configurar MercadoPago:**
   - Obtener ACCESS_TOKEN de producción
   - Configurar webhook URL en panel de MP

2. **Autenticación Admin (Recomendado):**
   - Agregar middleware de autenticación para `/api/v1/admin/*`
   - Implementar JWT o API key para endpoints admin

3. **Sincronizar con Prisma:**
   - **Opción A:** Webhook de notificación desde el servicio
   - **Opción B:** Endpoint de sincronización `/api/v1/sync/payments/:id`
   - **Opción C:** Sincronización manual desde frontend después de crear pago

4. **Suscripciones (Futuro):**
   - Implementar preapproval plans para pagos automáticos
   - Gestión de suscripciones mensuales

5. **Testing:**
   - Probar webhooks con ngrok o similar
   - Validar flujo completo end-to-end

## 🔗 Endpoints Disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/v1/payments` | Crear pago desde frontend |
| GET | `/api/v1/payments?userId=X` | Listar pagos de usuario |
| GET | `/api/v1/payments/:paymentId` | Estado de pago específico |
| POST | `/api/v1/admin/payments` | Crear pago manual (admin) |
| POST | `/api/v1/webhooks/mp` | Webhook MercadoPago |
| GET | `/health` | Health check |

¡El servicio está listo para integrarse con tu frontend Next.js! 🎉
