// Podría ser Server Component si los datos vienen del servidor inicialmente
// 'use client'; 

// import { useState } from 'react'; // No se necesita estado aquí
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link'; // Importar Link
// No se necesita PerfilForm ni actions/types aquí

// TODO: Obtener datos reales del socio (desde el servidor o props)
const perfilData = {
	nombreCompleto: "Juan Ignacio Pérez",
	dni: "30.123.456",
	fechaNacimiento: "15/05/1983",
	fechaAltaSocio: "01/03/2015",
	email: "juan.perez@email.com",
	telefono: "+54 9 341 1234567",
	direccion: {
		calle: "Av. Siempre Viva",
		numero: "742",
		pisoDepto: "",
		localidad: "Rosario",
		codigoPostal: "S2000",
		provincia: "Santa Fe",
	},
	avatarUrl: "/placeholder-avatar.png",
};

function DisplayData({ label, value }: { label: string; value?: string | null }) {
	return (
		<div>
			<p className="text-sm font-medium text-muted-foreground">{label}</p>
			<p className="text-base text-foreground">{value || '-'}</p>
		</div>
	);
}

export default function PerfilPage() {
	// Ya no necesita estado isEditing ni la función handleFormSubmit
	// Tampoco necesita preparar formInitialData

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-start">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Mi Perfil</h1>
				{/* Botón ahora es un Link a la página de edición */}
				<Button asChild>
					<Link href="/socio/perfil/editar">Editar Perfil</Link>
				</Button>
			</div>

			{/* Vista de solo lectura */}
			<Card className="flex flex-col pt-5 pb-5">
				<CardHeader>
					<CardTitle>Datos Personales</CardTitle>
				</CardHeader>
				<CardContent className="grid gap-6 md:grid-cols-3 flex-grow">
					<div className="flex flex-col items-center space-y-2 md:col-span-1">
						<Image 
							src={perfilData.avatarUrl}
							alt="Avatar"
							width={128}
							height={128}
							className="rounded-full aspect-square object-cover border"
						/>
						{/* El botón Cambiar Foto podría ir a otra página dedicada o abrir un modal */}
						<Button variant="outline" size="sm" disabled>Cambiar Foto</Button>
					</div>
					<div className="space-y-4 md:col-span-2">
						<DisplayData label="Nombre Completo" value={perfilData.nombreCompleto} />
						<DisplayData label="DNI" value={perfilData.dni} />
						<DisplayData label="Fecha de Nacimiento" value={perfilData.fechaNacimiento} />
						<DisplayData label="Socio desde" value={perfilData.fechaAltaSocio} />
					</div>
				</CardContent>
			</Card>
			<div className="grid gap-6 md:grid-cols-2">
				<Card className="flex flex-col pt-5 pb-5">
					<CardHeader>
						<CardTitle>Datos de Contacto</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 flex-grow">
						<DisplayData label="Email" value={perfilData.email} />
						<DisplayData label="Teléfono / Celular" value={perfilData.telefono} />
					</CardContent>
				</Card>
				<Card className="flex flex-col pt-5 pb-5">
					<CardHeader>
						<CardTitle>Dirección</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4 flex-grow">
						<DisplayData label="Calle y Número" value={`${perfilData.direccion.calle} ${perfilData.direccion.numero}`} />
						<DisplayData label="Piso / Departamento" value={perfilData.direccion.pisoDepto} />
						<DisplayData label="Localidad" value={perfilData.direccion.localidad} />
						<DisplayData label="Código Postal" value={perfilData.direccion.codigoPostal} />
						<DisplayData label="Provincia" value={perfilData.direccion.provincia} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
} 