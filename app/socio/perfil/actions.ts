'use server';

import { type PerfilFormData } from './schema';

export async function actualizarPerfil(data: PerfilFormData) {
	console.log("Datos recibidos para actualizar:", data);

	await new Promise(resolve => setTimeout(resolve, 1000));

	const success = Math.random() > 0.2; 

	if (success) {
		console.log("Perfil actualizado simulado con éxito.");
		return { success: true, message: "Perfil actualizado con éxito." };
	} else {
		console.error("Error simulado al actualizar perfil.");
		return { success: false, message: "Error al actualizar el perfil. Inténtalo de nuevo." };
	}
}
 