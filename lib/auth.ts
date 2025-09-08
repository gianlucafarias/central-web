
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]'

// Para RSC / Route Handlers (App Router)
export function authRsc() {
	return getServerSession(authOptions)
}


// Función simplificada para verificar autenticación
// En producción, implementar con JWT o sesiones reales
export function verifyAuth(authHeader: string | null): boolean {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return false
  }

  const token = authHeader.substring(7)
  
  // Para desarrollo, aceptar cualquier token que no esté vacío
  // En producción, verificar el JWT contra la base de datos
  return token.length > 0
}

// Función para extraer el token
export function extractToken(authHeader: string | null): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  
  return authHeader.substring(7)
}
