import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma"
import { z } from "zod"
import { loginSchema } from "@/lib/validations/auth"
import bcrypt from "bcryptjs"


const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		const validatedData = loginSchema.parse(body)
        const user = await prisma.user.findUnique({
            where: { email: validatedData.email }
        })
        if (!user) {
            return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 })
        }
        const isPasswordValid = await bcrypt.compare(validatedData.password, user.password)
        if (!isPasswordValid) {
            return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 })
        }
        return NextResponse.json({ message: "Login exitoso" }, { status: 200 })
	} catch (error) {
		console.error("Error en login:", error)
		return NextResponse.json(
			{ error: "Error en login" },
			{ status: 500 }
		)
	}
}   
