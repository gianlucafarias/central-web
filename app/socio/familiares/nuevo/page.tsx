'use client';

import { useRouter } from 'next/navigation';
import FamiliarForm from '@/components/socio/FamiliarForm';
import { agregarFamiliar } from '../actions';
import { type FamiliarFormData } from '../schema';

export default function NuevoFamiliarPage() {
	const router = useRouter();

	async function handleFormSubmit(data: FamiliarFormData) {
		const result = await agregarFamiliar(data);
		if (result?.success) {
			// TODO: Mostrar mensaje de éxito (Toast?)
			console.log(result.message);
			router.push('/socio/familiares'); // Redirigir de vuelta a la lista
			// Opcionalmente, forzar refresco si no se usa revalidatePath en la acción:
			// router.refresh(); 
		}
		// El manejo de errores ya está dentro de FamiliarForm
		return result; 
	}

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Añadir Nuevo Miembro</h1>
			<FamiliarForm 
				onSubmit={handleFormSubmit} 
				onCancel={() => router.push('/socio/familiares')} // Botón cancelar redirige
			/>
		</div>
	);
} 