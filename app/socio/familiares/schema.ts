import { z } from 'zod';

export const familiarFormSchema = z.object({
	nombreCompleto: z.string().min(3, "El nombre debe tener al menos 3 caracteres."),
	dni: z.string().regex(/^\d{1,2}\.?\d{3}\.?\d{3}$/, "Formato de DNI inválido."),
	fechaNacimiento: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Formato de fecha inválido (DD/MM/AAAA)."),
	parentesco: z.string().min(1, "Debes seleccionar un parentesco."), 
});

export type FamiliarFormData = z.infer<typeof familiarFormSchema>; 