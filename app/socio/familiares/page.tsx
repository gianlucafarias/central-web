'use client';

import { useState, useTransition } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from 'next/link';
import { quitarFamiliar } from './actions';

interface MiembroFamiliar {
	id: string; 
	nombreCompleto: string;
	dni: string;
	parentesco: string;
}

const datosInicialesFamiliares: MiembroFamiliar[] = [
	{ id: '1', nombreCompleto: 'Maria Garcia', dni: '32.111.222', parentesco: 'Cónyuge' },
	{ id: '2', nombreCompleto: 'Pedro Pérez', dni: '50.333.444', parentesco: 'Hijo/a' },
	{ id: '3', nombreCompleto: 'Ana Pérez', dni: '52.555.666', parentesco: 'Hijo/a' },
];

export default function FamiliaresPage() {
	const [familiares, setFamiliares] = useState<MiembroFamiliar[]>(datosInicialesFamiliares);
	const [isPending, startTransition] = useTransition();

	const handleQuitar = async (id: string) => {
		if (!confirm("¿Estás seguro de que deseas quitar a este miembro familiar?")) {
			return;
		}

		startTransition(async () => {
			const result = await quitarFamiliar(id);
			if (result?.success) {
				setFamiliares(prev => prev.filter(m => m.id !== id));
				console.log(result.message);
			} else {
				console.error(result?.message || "Error al quitar familiar.");
				alert(result?.message || "Error al quitar miembro.");
			}
		});
	};

	return (
		<div className="space-y-6">
			<div className="flex justify-between items-start">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-white">Grupo Familiar</h1>
				<Button asChild>
					<Link href="/socio/familiares/nuevo">Añadir Miembro</Link>
				</Button>
			</div>

			<Card className="px-7 py-10">
				<CardHeader>
					<CardTitle>Miembros Registrados</CardTitle>
					<CardDescription>
						Visualiza y gestiona los miembros de tu grupo familiar asociados a tu cuenta.
					</CardDescription>
				</CardHeader>
				<CardContent>
					{familiares.length > 0 ? (
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Nombre Completo</TableHead>
									<TableHead>DNI</TableHead>
									<TableHead>Parentesco</TableHead>
									<TableHead className="text-right">Acciones</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{familiares.map((miembro) => (
									<TableRow key={miembro.id}>
										<TableCell className="font-medium">{miembro.nombreCompleto}</TableCell>
										<TableCell>{miembro.dni}</TableCell>
										<TableCell>{miembro.parentesco}</TableCell>
										<TableCell className="text-right">
											<Button 
												variant="destructive"
												size="sm"
												onClick={() => handleQuitar(miembro.id)}
												disabled={isPending}
											>
												{isPending ? 'Quitando...' : 'Quitar'}
											</Button>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					) : (
						<p className="text-sm text-muted-foreground">
							No tienes miembros familiares registrados.
						</p>
					)}
				</CardContent>
			</Card>
		</div>
	);
} 