"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  CreditCard, 
  UserPlus, 
  FileText, 
  BarChart3,
  Zap
} from "lucide-react"
import { QuickPaymentDialog } from "./quick-payment-dialog"
import { AddSocioDialog } from "./add-socio-dialog"
import { toast } from "sonner"

export function QuickActionsBar() {
  const [isQuickPaymentOpen, setIsQuickPaymentOpen] = React.useState(false)
  const [isAddSocioOpen, setIsAddSocioOpen] = React.useState(false)

  const handlePaymentSuccess = (payment: any) => {
    toast.success(`Pago registrado exitosamente por $${payment.amount}`)
    // Aquí podrías actualizar algún estado global o refrescar datos
  }

  const handleSocioCreated = (newSocio: any) => {
    toast.success(`Socio ${newSocio.firstName} ${newSocio.lastName} agregado exitosamente`)
    // Aquí podrías actualizar algún estado global o refrescar datos
  }

  const quickActions = [
    {
      title: "Registrar Pago",
      description: "Búsqueda rápida por DNI o N° Socio",
      icon: CreditCard,
      onClick: () => setIsQuickPaymentOpen(true),
      variant: "default" as const,
      shortcut: "Ctrl+P",
    },
    {
      title: "Agregar Socio",
      description: "Registrar nuevo socio",
      icon: UserPlus,
      onClick: () => setIsAddSocioOpen(true),
      variant: "outline" as const,
      shortcut: "Ctrl+N",
    },
    {
      title: "Nueva Noticia",
      description: "Crear publicación",
      icon: FileText,
      onClick: () => toast.info("Próximamente disponible"),
      variant: "outline" as const,
      shortcut: "Ctrl+A",
    },
    {
      title: "Ver Reportes",
      description: "Estadísticas y métricas",
      icon: BarChart3,
      onClick: () => toast.info("Próximamente disponible"),
      variant: "outline" as const,
      shortcut: "Ctrl+R",
    },
  ]

  // Manejo de shortcuts de teclado
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key.toLowerCase()) {
          case 'p':
            event.preventDefault()
            setIsQuickPaymentOpen(true)
            break
          case 'n':
            event.preventDefault()
            setIsAddSocioOpen(true)
            break
          case 'a':
            event.preventDefault()
            toast.info("Nueva noticia - Próximamente disponible")
            break
          case 'r':
            event.preventDefault()
            toast.info("Reportes - Próximamente disponible")
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <>
      <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Acciones Rápidas</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant={action.variant}
                  onClick={action.onClick}
                  className="h-auto p-4 flex flex-col items-start gap-2 text-left relative group"
                >
                  <div className="flex items-center gap-2 w-full">
                    <action.icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium text-sm">{action.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground line-clamp-1">
                    {action.description}
                  </span>
                  
                  {/* Shortcut badge */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-muted/80 text-muted-foreground text-xs px-1.5 py-0.5 rounded border">
                      {action.shortcut}
                    </div>
                  </div>
                </Button>
              ))}
            </div>

            
          </CardContent>
        </Card>

      {/* Modals */}
      <QuickPaymentDialog
        isOpen={isQuickPaymentOpen}
        onOpenChange={setIsQuickPaymentOpen}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <AddSocioDialog
        isOpen={isAddSocioOpen}
        onOpenChange={setIsAddSocioOpen}
        onSocioCreated={handleSocioCreated}
      />
    </>
  )
}
