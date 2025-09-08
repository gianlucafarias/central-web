'use client'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { registerSchema } from "@/lib/validations/auth"
import  { z } from "zod"

interface FieldError {
  field: string
  message: string
}

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([])

  const router = useRouter()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setFieldErrors([])

    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dni: formData.get("dni") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      birthdate: formData.get("birthdate") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    }

    console.log(data)
    

    try {
      const validatedData = registerSchema.parse(data)
      
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.details) {
          setFieldErrors(result.details)
        } else {
          setError(result.error || "Error en el registro")
        }
        return
      }

      // Registro exitoso
      setError("")
      setFieldErrors([])
      
      // Redirigir al login con mensaje de éxito
      router.push("/login?message=Registro exitoso. Tu cuenta está pendiente de validación.")
      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors = error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
        setFieldErrors(errors)
      } else {
        setError("Error inesperado. Intenta nuevamente.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Registrate en el Club</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Crea tu cuenta para acceder a los servicios del Club
        </p>
      </div>

      {fieldErrors.length > 0 && (
        <div className="space-y-2">
          {fieldErrors.map((error) => (
            <p key={error.field} className="text-destructive text-sm">
              {error.message}
            </p>
          ))}
        </div>
      )}


      <div className="grid gap-6">
        {error && (
          <p className="text-sm text-destructive" role="alert">{error}</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label htmlFor="firstName">Nombre</Label>
            <Input id="firstName" name="firstName" type="text" placeholder="Juan" required />
            {fieldErrors.find(error => error.field === "firstName") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "firstName")?.message}
              </p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName">Apellido</Label>
            <Input id="lastName" name="lastName" type="text" placeholder="Perez" required />
            {fieldErrors.find(error => error.field === "lastName") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "lastName")?.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid gap-2">
            <Label htmlFor="dni">DNI</Label>
            <Input id="dni" name="dni" type="number" placeholder="12345678" required />
            {fieldErrors.find(error => error.field === "dni") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "dni")?.message}
              </p>
            )}
        </div>
        <div className="grid gap-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" name="email" type="email" placeholder="m@example.com" required />
            {fieldErrors.find(error => error.field === "email") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "email")?.message}
              </p>
            )}
        </div>
        <div className="grid gap-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" name="phone" type="tel" placeholder="1234567890" required />
            {fieldErrors.find(error => error.field === "phone") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "phone")?.message}
              </p>
            )}
        </div>
        <div className="grid gap-2">
            <Label htmlFor="birthdate">Fecha de nacimiento</Label>
            <Input id="birthdate" name="birthdate" type="date" required />
            {fieldErrors.find(error => error.field === "birthdate") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "birthdate")?.message}
              </p>
            )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input id="password" name="password" type="password" required />
          {fieldErrors.find(error => error.field === "password") && (
            <p className="text-destructive text-sm">
              {fieldErrors.find(error => error.field === "password")?.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
            <Label htmlFor="password">Confirmar contraseña</Label>
            <Input id="password" name="confirmPassword" type="password" placeholder="Confirmar contraseña" required />
            {fieldErrors.find(error => error.field === "confirmPassword") && (
              <p className="text-destructive text-sm">
                {fieldErrors.find(error => error.field === "confirmPassword")?.message}
              </p>
            )}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Registrando..." : "Registrarme"}
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            O continua con
          </span>
        </div>
        <Button variant="outline" className="w-full">
        <svg viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/></svg>
          Ingresar con Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Ya tenés una cuenta?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Ingresá
        </Link>
      </div>
    </form>
  )
}
