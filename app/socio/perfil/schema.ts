import { z } from 'zod';

// Esquema Zod para la validación del formulario de perfil
export const perfilFormSchema = z.object({
	nombreCompleto: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
	fechaNacimiento: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de fecha inválido (DD/MM/AAAA)."), // Validación simple de formato
	telefono: z.string().optional().or(z.literal('')), // Opcional
	// Dirección anidada
	direccion: z.object({
		calle: z.string().optional().or(z.literal('')),
		numero: z.string().optional().or(z.literal('')),
		pisoDepto: z.string().optional().or(z.literal('')),
		localidad: z.string().optional().or(z.literal('')),
		codigoPostal: z.string().optional().or(z.literal('')),
		provincia: z.string().optional().or(z.literal(''))
	}),
	// Campos no editables (DNI, Email, fechaAlta) no se incluyen aquí
	// avatarUrl se manejaría por separado
});

// Tipo inferido del esquema para usar en el formulario
export type PerfilFormData = z.infer<typeof perfilFormSchema>; 