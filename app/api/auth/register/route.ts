import { NextRequest, NextResponse } from "next/server"
import { registerSchema } from "@/lib/validations/auth"
import { PrismaClient } from "@/lib/generated/prisma"
import bcrypt from "bcryptjs"
import { z } from "zod"

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = registerSchema.parse(body)

    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: validatedData.email },
          { dni: validatedData.dni }
        ]
      }
    })

    if (existingUser) {
      return NextResponse.json(
        { 
          error: "El email o DNI ya están registrados",
          field: existingUser.email === validatedData.email ? "email" : "dni"
        },
        { status: 400 }
      )
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(validatedData.password, 12)

    // Crear el usuario
    const user = await prisma.user.create({
      data: {
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        dni: validatedData.dni,
        email: validatedData.email,
        phone: validatedData.phone,
        password: hashedPassword, // ← DESCOMENTAR ESTA LÍNEA
        role: "USER",
        status: "ACTIVE" // ← Cambiar a ACTIVE para que pueda hacer login inmediatamente
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        dni: true,
        status: true,
        createdAt: true
      }
    })

    return NextResponse.json(
      { 
        message: "Usuario registrado exitosamente", 
        user: {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          status: user.status
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error("Error en registro:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Datos inválidos", 
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    )
  }
}