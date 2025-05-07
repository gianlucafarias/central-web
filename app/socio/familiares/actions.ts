'use server';

import { type FamiliarFormData } from './schema';
// import { revalidatePath } from 'next/cache';

// Acción para agregar un nuevo miembro (placeholder)
export async function agregarFamiliar(data: FamiliarFormData) {
	console.log("Datos recibidos para agregar familiar:", data);
	// TODO: Implementar lógica de guardado en DB

	await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
	const success = Math.random() > 0.2; // Simular éxito/error

	if (success) {
		console.log("Familiar agregado (simulado).");
		// revalidatePath('/socio/familiares'); // Invalidar caché para refrescar la lista
		return { success: true, message: "Miembro familiar agregado con éxito." };
	} else {
		console.error("Error simulado al agregar familiar.");
		return { success: false, message: "Error al agregar miembro. Inténtalo de nuevo." };
	}
}

// Acción para quitar un miembro (placeholder)
export async function quitarFamiliar(id: string) {
	console.log("ID recibido para quitar familiar:", id);
	// TODO: Implementar lógica de borrado en DB

	await new Promise(resolve => setTimeout(resolve, 1000)); // Simular delay
	const success = Math.random() > 0.2; // Simular éxito/error

	if (success) {
		console.log("Familiar quitado (simulado).");
		// revalidatePath('/socio/familiares'); // Invalidar caché para refrescar la lista
		return { success: true, message: "Miembro familiar quitado con éxito." };
	} else {
		console.error("Error simulado al quitar familiar.");
		return { success: false, message: "Error al quitar miembro. Inténtalo de nuevo." };
	}
} 