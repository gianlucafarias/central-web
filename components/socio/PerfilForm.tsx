'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { perfilFormSchema, type PerfilFormData } from "@/app/socio/perfil/schema";
import { useState } from "react";

interface PerfilFormProps {
	initialData: PerfilFormData; 
	onSubmit: (data: PerfilFormData) => Promise<{ success: boolean; message: string } | void>;
	onCancel: () => void;
}

export default function PerfilForm({ initialData, onSubmit, onCancel }: PerfilFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState<string | null>(null);

	const form = useForm<PerfilFormData>({
		resolver: zodResolver(perfilFormSchema),
		defaultValues: initialData,
	});

	async function handleFormSubmit(values: PerfilFormData) {
		setIsSubmitting(true);
		setSubmitError(null);
		const result = await onSubmit(values);
		if (result && !result.success) {
			setSubmitError(result.message);
		}
		setIsSubmitting(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8">
				<Card className="pt-5 pb-5">
					<CardHeader>
						<CardTitle>Datos Personales</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<FormField
							control={form.control}
							name="nombreCompleto"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nombre Completo</FormLabel>
									<FormControl>
										<Input placeholder="Tu nombre completo" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="fechaNacimiento"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Fecha de Nacimiento</FormLabel>
									<FormControl>
										<Input placeholder="DD/MM/AAAA" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
				</Card>

				<Card className="pt-5 pb-5">
					<CardHeader>
						<CardTitle>Datos de Contacto</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<FormField
							control={form.control}
							name="telefono"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Teléfono / Celular</FormLabel>
									<FormControl>
										<Input placeholder="Tu número de contacto" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
				</Card>

				<Card className="pt-5 pb-5">
					<CardHeader>
						<CardTitle>Dirección</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<FormField control={form.control} name="direccion.calle" render={({ field }) => (<FormItem><FormLabel>Calle</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="direccion.numero" render={({ field }) => (<FormItem><FormLabel>Número</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="direccion.pisoDepto" render={({ field }) => (<FormItem><FormLabel>Piso / Depto.</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="direccion.localidad" render={({ field }) => (<FormItem><FormLabel>Localidad</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="direccion.codigoPostal" render={({ field }) => (<FormItem><FormLabel>Código Postal</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
						<FormField control={form.control} name="direccion.provincia" render={({ field }) => (<FormItem><FormLabel>Provincia</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>)} />
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
						{isSubmitting ? "Guardando..." : "Guardar Cambios"}
					</Button>
				</div>
			</form>
		</Form>
	);
} 