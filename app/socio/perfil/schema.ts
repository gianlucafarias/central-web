import { z } from 'zod';

export const perfilFormSchema = z.object({
	nombreCompleto: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
	fechaNacimiento: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de fecha inválido (DD/MM/AAAA)."), // Validación simple de formato
	telefono: z.string().optional().or(z.literal('')), 
	direccion: z.object({
		calle: z.string().optional().or(z.literal('')),
		numero: z.string().optional().or(z.literal('')),
		pisoDepto: z.string().optional().or(z.literal('')),
		localidad: z.string().optional().or(z.literal('')),
		codigoPostal: z.string().optional().or(z.literal('')),
		provincia: z.string().optional().or(z.literal(''))
	}),
});

export type PerfilFormData = z.infer<typeof perfilFormSchema>; 