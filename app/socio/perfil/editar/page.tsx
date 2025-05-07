'use client';

import { useRouter } from 'next/navigation';
import PerfilForm from '@/components/socio/PerfilForm';
import { actualizarPerfil } from '../actions';
import { type PerfilFormData } from '../schema';
import { useState, useEffect } from 'react'; 


function cargarDatosIniciales(): PerfilFormData {
	console.log("Simulando carga de datos iniciales para el formulario...");
	return {
		nombreCompleto: "Juan Ignacio Pérez (Cargado)",
		fechaNacimiento: "15/05/1983",
		telefono: "+54 9 341 1234567",
		direccion: {
			calle: "Av. Siempre Viva",
			numero: "742",
			pisoDepto: "",
			localidad: "Rosario",
			codigoPostal: "S2000",
			provincia: "Santa Fe",
		}
	};
}

export default function EditarPerfilPage() {
	const router = useRouter();
	const [initialData, setInitialData] = useState<PerfilFormData | null>(null);

	// Simular carga de datos al montar el componente
	useEffect(() => {
		const data = cargarDatosIniciales();
		setInitialData(data);
	}, []);

	async function handleFormSubmit(data: PerfilFormData) {
		const result = await actualizarPerfil(data);
		if (result?.success) {
			console.log(result.message);
			router.push('/socio/perfil'); 
		}
		return result; 
	}

	if (!initialData) {
		return <div>Cargando datos del perfil...</div>;
	}

	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Editar Mi Perfil</h1>
			<PerfilForm 
				initialData={initialData} 
				onSubmit={handleFormSubmit} 
				onCancel={() => router.push('/socio/perfil')} 
			/>
		</div>
	);
} 