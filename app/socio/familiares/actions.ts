'use server';

import { type FamiliarFormData } from './schema';

export async function agregarFamiliar(data: FamiliarFormData) {
	console.log("Datos recibidos para agregar familiar:", data);

	await new Promise(resolve => setTimeout(resolve, 1000)); 
	const success = Math.random() > 0.2; 

	if (success) {
		console.log("Familiar agregado (simulado).");
		return { success: true, message: "Miembro familiar agregado con éxito." };
	} else {
		console.error("Error simulado al agregar familiar.");
		return { success: false, message: "Error al agregar miembro. Inténtalo de nuevo." };
	}
}

export async function quitarFamiliar(id: string) {
	console.log("ID recibido para quitar familiar:", id);


	await new Promise(resolve => setTimeout(resolve, 1000)); 
	const success = Math.random() > 0.2; 

	if (success) {
		console.log("Familiar quitado (simulado).");
		return { success: true, message: "Miembro familiar quitado con éxito." };
	} else {
		console.error("Error simulado al quitar familiar.");
		return { success: false, message: "Error al quitar miembro. Inténtalo de nuevo." };
	}
} 