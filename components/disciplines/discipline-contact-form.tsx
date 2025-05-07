'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// Assuming you might have a toast component for feedback
// import { toast } from "@/components/ui/use-toast"

// Define the schema for validation
const formSchema = z.object({
	name: z.string().min(2, {
		message: 'El nombre debe tener al menos 2 caracteres.',
	}),
	email: z.string().email({
		message: 'Por favor ingresa un email válido.',
	}),
	phone: z.string().optional(), // Optional phone number
	message: z.string().min(10, {
		message: 'La consulta debe tener al menos 10 caracteres.',
	}),
})

export default function DisciplineContactForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// For now, just log to console. Replace with actual API call.
		console.log('Form submitted:', values)
		// Example feedback:
		// toast({
		//   title: "Consulta Enviada",
		//   description: "Gracias por contactarnos, te responderemos pronto.",
		// })
		form.reset() // Reset form after submission
	}

	return (
		<section>
			<h2 className="text-2xl font-semibold mb-4 font-mono">
				Consulta por la Disciplina
			</h2>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-4"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre y apellido</FormLabel>
								<FormControl>
									<Input placeholder="Juan Pérez" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input
											type="email"
											placeholder="juan.perez@ejemplo.com"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Teléfono (Opcional)</FormLabel>
									<FormControl>
										<Input
											type="tel"
											placeholder="3562..."
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Consulta / duda</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Escribe tu consulta aquí..."
										className="resize-none"
										rows={5}
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" disabled={form.formState.isSubmitting}>
						{form.formState.isSubmitting ? 'Enviando...' : 'Enviar'}
					</Button>
				</form>
			</Form>
		</section>
	)
} 