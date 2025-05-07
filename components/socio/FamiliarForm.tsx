'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { familiarFormSchema, type FamiliarFormData } from "@/app/socio/familiares/schema";
import { useState } from "react";

interface FamiliarFormProps {
	// No necesita initialData si siempre es para añadir
	onSubmit: (data: FamiliarFormData) => Promise<{ success: boolean; message: string } | void>;
	onCancel: () => void;
}

// Opciones de ejemplo para parentesco
const opcionesParentesco = [
	{ value: "conyuge", label: "Cónyuge" },
	{ value: "hijo/a", label: "Hijo/a" },
	{ value: "otro", label: "Otro" }, 
];

export default function FamiliarForm({ onSubmit, onCancel }: FamiliarFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const form = useForm<FamiliarFormData>({
		resolver: zodResolver(familiarFormSchema),
		defaultValues: {
			nombreCompleto: "",
			dni: "",
			fechaNacimiento: "",
			parentesco: "",
		},
	});

	async function handleFormSubmit(values: FamiliarFormData) {
		setIsSubmitting(true);
		setSubmitError(null);
		const result = await onSubmit(values);
		if (result && !result.success) {
			setSubmitError(result.message);
		}
		// La redirección o cierre se maneja en la página contenedora
		setIsSubmitting(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
			<Card className="pt-5 pb-5">
			<CardHeader>
						<CardTitle>Datos del Nuevo Miembro</CardTitle>
						<CardDescription>Completa la información del familiar a agregar.</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<FormField control={form.control} name="nombreCompleto" render={({ field }) => (<FormItem><FormLabel>Nombre Completo</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="dni" render={({ field }) => (<FormItem><FormLabel>DNI</FormLabel><FormControl><Input placeholder="Ej: 12.345.678" {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="fechaNacimiento" render={({ field }) => (<FormItem><FormLabel>Fecha de Nacimiento</FormLabel><FormControl><Input placeholder="DD/MM/AAAA" {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField
							control={form.control}
							name="parentesco"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Parentesco</FormLabel>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Selecciona un parentesco" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{opcionesParentesco.map(opcion => (
												<SelectItem key={opcion.value} value={opcion.value}>
													{opcion.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
				</Card>

				{submitError && (
					<p className="text-sm font-medium text-destructive">{submitError}</p>
				)}

				<div className="flex justify-end space-x-2">
					<Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
						Cancelar
					</Button>
					<Button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Agregando..." : "Agregar Miembro"}
					</Button>
				</div>
			</form>
		</Form>
	);
} 