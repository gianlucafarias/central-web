"use client" // Necesario para el estado y los handlers

import * as React from "react" // Necesario para useState
import Link from "next/link" // Importar Link
import { SiteHeader } from "@/components/admin/site-header"
import { Button } from "@/components/ui/button"
import { PlusCircleIcon } from "lucide-react"
import { mockNewsArticles } from "./data-noticias" // Importar datos mock
import { NoticiasDataTable } from "@/components/admin/noticias-data-table" // Importar la tabla
import { buttonVariants } from "@/components/ui/button"

export default function NoticiasPage() {
  return (
    <>
      <SiteHeader title="Gestión de Noticias" />
      <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Listado de Artículos</h2>
          <Link href="/admin/dashboard/noticias/nuevo" className={buttonVariants({ variant: "default" })}>
            <PlusCircleIcon className="mr-2 h-4 w-4" />
            Cargar Nuevo Artículo
          </Link>
        </div>

        {/* Reemplazar placeholder con la tabla de noticias */}
        <NoticiasDataTable data={mockNewsArticles} />
      </div>
    </>
  )
} 