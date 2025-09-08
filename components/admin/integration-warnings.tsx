"use client"

import * as React from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { 
  AlertTriangle, 
  Shield, 
  Database, 
  ExternalLink,
  Info,
} from "lucide-react"

interface IntegrationStatus {
  auth: 'missing' | 'configured'
  sync: 'manual' | 'webhook' | 'none'
  service: 'online' | 'offline'
}

export function IntegrationWarnings() {
  const [showDetails, setShowDetails] = React.useState(false)
  
  // En un caso real, esto vendría de un contexto o API
  const status: IntegrationStatus = {
    auth: 'missing',
    sync: 'none',
    service: 'online', // Servicio real conectado
  }

  const warnings = [
    {
      id: 'auth',
      type: 'warning' as const,
      title: 'Autenticación Pendiente',
      description: 'El servicio de pagos no tiene autenticación implementada',
      status: status.auth === 'missing' ? 'pending' : 'resolved',
      action: 'Implementar middleware de autenticación para endpoints admin',
      priority: 'high' as const,
    },
    {
      id: 'sync',
      type: 'info' as const,
      title: 'Sincronización Manual',
      description: 'Los pagos no se sincronizan automáticamente con Prisma',
      status: status.sync === 'none' ? 'pending' : 'resolved',
      action: 'Implementar webhook o endpoint de sincronización',
      priority: 'medium' as const,
    },
  ]

  const activeWarnings = warnings.filter(w => w.status === 'pending')

  if (activeWarnings.length === 0) {
    return null // No mostrar nada si todo está configurado
  }

  return (
    <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-900/10">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            <CardTitle className="text-base">Configuración de Integración</CardTitle>
            <Badge variant="outline" className="text-xs">
              {activeWarnings.length} pendiente{activeWarnings.length > 1 ? 's' : ''}
            </Badge>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs"
          >
            {showDetails ? 'Ocultar' : 'Ver detalles'}
          </Button>
        </div>
        <CardDescription className="text-sm">
          Hay algunos aspectos de la integración que requieren atención para un entorno de producción.
        </CardDescription>
      </CardHeader>

      {showDetails && (
        <CardContent className="pt-0">
          <div className="space-y-4">
            {activeWarnings.map((warning, index) => (
              <div key={warning.id}>
                <Alert className={warning.type === 'warning' ? 'border-amber-200' : 'border-blue-200'}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {warning.type === 'warning' ? (
                        <Shield className="h-4 w-4 text-amber-600" />
                      ) : (
                        <Database className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <AlertTitle className="text-sm font-medium">
                        {warning.title}
                        <Badge 
                          variant={warning.priority === 'high' ? 'destructive' : 'secondary'} 
                          className="ml-2 text-xs"
                        >
                          {warning.priority === 'high' ? 'Alta' : 'Media'} prioridad
                        </Badge>
                      </AlertTitle>
                      <AlertDescription className="text-xs mt-1 text-muted-foreground">
                        {warning.description}
                      </AlertDescription>
                      <div className="mt-2 p-2 bg-muted/50 rounded text-xs">
                        <strong>Acción recomendada:</strong> {warning.action}
                      </div>
                    </div>
                  </div>
                </Alert>
                {index < activeWarnings.length - 1 && <Separator className="my-3" />}
              </div>
            ))}

            <Separator />

            <div className="space-y-3">
              <h4 className="text-sm font-medium flex items-center gap-2">
                <Info className="h-4 w-4" />
                Opciones de Implementación
              </h4>
              
              <div className="grid gap-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-medium">Webhook de Sincronización</h5>
                    <Badge variant="outline">Recomendado</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Configura un webhook en el servicio Go para notificar cambios de estado de pagos.
                  </p>
                  <code className="text-xs bg-muted p-1 rounded">
                    POST /api/webhooks/payment-status
                  </code>
                </div>

                <div className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-sm font-medium">Autenticación JWT</h5>
                    <Badge variant="outline">Seguridad</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">
                    Implementa middleware de autenticación para proteger endpoints admin.
                  </p>
                  <code className="text-xs bg-muted p-1 rounded">
                    Authorization: Bearer &lt;token&gt;
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t">
              <span className="text-xs text-muted-foreground">
                💡 Estos avisos se ocultarán automáticamente cuando se resuelvan
              </span>
              <Button variant="ghost" size="sm" className="text-xs">
                <ExternalLink className="h-3 w-3 mr-1" />
                Documentación
              </Button>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}
