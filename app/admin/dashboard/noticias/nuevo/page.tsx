"use client"

import * as React from "react"
import { useRouter } from 'next/navigation'
import { SiteHeader } from "@/components/admin/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeftIcon, SaveIcon, UploadCloudIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator" // Podríamos no necesitarlo si las cards son suficientes


// Mock de categorías, en una app real vendrían de la DB o una config
const mockCategories = ['Fútbol', 'Básquet', 'Vóley', 'Institucional', 'Eventos Especiales', 'Actividades Sociales']

export default function NuevaNoticiaPage() {
  const router = useRouter()
  const [title, setTitle] = React.useState("")
  const [slug, setSlug] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [status, setStatus] = React.useState("draft")
  const [imageUrl, setImageUrl] = React.useState("")
  const [summary, setSummary] = React.useState("")
  const [content, setContent] = React.useState<string | undefined>("**Hello world!!!**") // El editor espera string | undefined
  const [publicationDate, setPublicationDate] = React.useState(new Date().toISOString().split('T')[0])

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setTitle(newTitle)
    setSlug(newTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''))
  }

  const handleSubmit = async (publish: boolean = false) => {
    const finalStatus = publish ? 'published' : 'draft'
    const newArticleData = {
      title,
      slug,
      category,
      status: finalStatus,
      imageUrl,
      summary,
      content,
      publicationDate: new Date(publicationDate), 
    }
    console.log('Enviando nuevo artículo:', newArticleData)
    alert(`Artículo guardado como ${finalStatus} (simulado)`)
    router.push('/admin/dashboard/noticias') 
  }

  return (
    <>
      <SiteHeader title="Crear Nuevo Artículo" />
      <div className="container mx-auto max-w-screen-xl py-8 px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Volver al Listado
          </Button>
          <div className="w-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Columna Principal (Contenido del Artículo) */} 
          <div className="flex-grow lg:w-[calc(100%-24rem-2rem)] space-y-6"> {/* Ajustar ancho para el gap */} 
            <div className="space-y-2">
              <Label htmlFor="articleTitle" className="text-base font-medium">Título del Artículo <span className="text-red-500">*</span></Label>
              <Input 
                id="articleTitle" 
                value={title} 
                onChange={handleTitleChange} 
                placeholder="Ej: Gran victoria del equipo local" 
                required 
                className="text-xl p-3 h-12" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="articleContent" className="text-base font-medium">Contenido Principal <span className="text-red-500">*</span></Label>
              <div data-color-mode="light"> {/* O "dark" si tienes tema oscuro */} 
              
              </div>
            </div>
          </div>

          {/* Barra Lateral (Configuraciones y Acciones) */} 
          <div className="lg:w-96 space-y-6 flex-shrink-0"> {/* Ancho fijo para la sidebar */} 
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Publicación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="articleStatus" className="text-sm font-medium">Estado</Label>
                  <Select onValueChange={setStatus} defaultValue={status} value={status}>
                    <SelectTrigger id="articleStatus">
                      <SelectValue placeholder="Seleccionar estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Borrador</SelectItem>
                      <SelectItem value="published">Publicado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="articleDate" className="text-sm font-medium">Fecha de Publicación</Label>
                    <Input id="articleDate" type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => handleSubmit(false)} className="w-full sm:w-auto">Guardar Borrador</Button>
                <Button onClick={() => handleSubmit(true)} className="w-full sm:w-auto"><SaveIcon className="mr-2 h-4 w-4" />Publicar</Button>
              </CardFooter>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Detalles del Artículo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                    <div className="space-y-1.5">
                        <Label htmlFor="articleCategory" className="text-sm font-medium">Categoría <span className="text-red-500">*</span></Label>
                        <Select onValueChange={setCategory} value={category} required>
                            <SelectTrigger id="articleCategory">
                            <SelectValue placeholder="Seleccionar categoría" />
                            </SelectTrigger>
                            <SelectContent>
                            {mockCategories.map(cat => (
                                <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>{cat}</SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="articleSlug" className="text-sm font-medium">Slug (URL Amigable) <span className="text-red-500">*</span></Label>
                        <Input id="articleSlug" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="Ej: gran-victoria-equipo-local" required />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="articleSummary" className="text-sm font-medium">Resumen / Entradilla</Label>
                        <Textarea id="articleSummary" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Un breve resumen que aparecerá en las listas de noticias..." rows={4} />
                    </div>
                </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Imagen Destacada</CardTitle>
                <CardDescription className="text-sm">Sube o selecciona una imagen principal para el artículo.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center rounded-md border-2 border-dashed border-muted-foreground/25 p-6 py-10 hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <UploadCloudIcon className="mx-auto h-10 w-10 text-muted-foreground/80" aria-hidden="true" />
                    <div className="mt-3 flex text-sm items-center justify-center">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-semibold text-primary hover:text-primary/80 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
                      >
                        <span>Sube un archivo</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1 text-muted-foreground">o arrástralo aquí</p>
                    </div>
                    <p className="text-xs text-muted-foreground/90 mt-1">PNG, JPG, GIF hasta 10MB</p>
                  </div>
                </div>
                {imageUrl && (
                    <div className="mt-4 space-y-1.5">
                        <Label className="text-sm font-medium">Imagen Actual:</Label>
                        <img src={imageUrl} alt="Preview" className="mt-1 rounded-md border max-h-48 w-full object-contain" />
                        <Button variant="link" size="sm" className="text-xs px-0" onClick={() => setImageUrl('')}>
                            Quitar imagen
                        </Button>
                    </div>
                )}
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </>
  )
} 