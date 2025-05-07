import { z } from 'zod';

// Esquema Zod para la validación del formulario de nuevo familiar
export const familiarFormSchema = z.object({
	nombreCompleto: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
	dni: z.string().regex(/^\d{1,2}\.?\d{3}\.?\d{3}$/, "Formato de DNI inválido."), // Ajustar regex si es necesario
	fechaNacimiento: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de fecha inválido (DD/MM/AAAA)."),
	parentesco: z.string().min(1, "Debes seleccionar un parentesco."), // Podría ser un enum si hay opciones fijas
});

// Tipo inferido del esquema
export type FamiliarFormData = z.infer<typeof familiarFormSchema>; 