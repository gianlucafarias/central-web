export function generateSocioNumber(): string {
    // Implementa tu lógica para generar un número de socio único
    // Por ejemplo: un timestamp + un número aleatorio corto
    return `SOC-${Date.now()}-${Math.floor(Math.random() * 1000)}`
}

// Función para obtener el último número de socio desde la base de datos
export async function getLastSocioNumber(): Promise<string | null> {
    try {
        const { PrismaClient } = await import('@/lib/generated/prisma')
        const prisma = new PrismaClient()
        
        // Buscar el último usuario creado para obtener un número de referencia
        const lastUser = await prisma.user.findFirst({
            orderBy: { createdAt: 'desc' },
            select: { id: true, createdAt: true }
        })
        
        await prisma.$disconnect()
        
        if (lastUser) {
            // Generar un número basado en la fecha del último usuario
            const date = new Date(lastUser.createdAt)
            const year = date.getFullYear()
            const month = String(date.getMonth() + 1).padStart(2, '0')
            const day = String(date.getDate()).padStart(2, '0')
            const random = Math.floor(Math.random() * 1000)
            return `${year}${month}${day}-${random}`
        }
        
        return null
    } catch (error) {
        console.error('Error obteniendo último número de socio:', error)
        return null
    }
}
