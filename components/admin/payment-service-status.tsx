"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { RefreshCw, AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import { paymentService } from "@/lib/services/payment-service"
import { toast } from "sonner"

interface ServiceStatus {
  status: 'online' | 'offline' | 'checking'
  lastCheck: Date
  error?: string
}

export function PaymentServiceStatus() {
  const [status, setStatus] = React.useState<ServiceStatus>({
    status: 'checking',
    lastCheck: new Date(0), // Inicializar con fecha fija para evitar problemas de hidratación
  })
  const [isMounted, setIsMounted] = React.useState(false)

  const checkServiceStatus = React.useCallback(async () => {
    setStatus(prev => ({ ...prev, status: 'checking' }))
    
    try {
      await paymentService.healthCheck()
      setStatus({
        status: 'online',
        lastCheck: new Date(),
      })
    } catch (error) {
      console.error('Error checking payment service:', error)
      setStatus({
        status: 'offline',
        lastCheck: new Date(),
        error: error instanceof Error ? error.message : 'Error desconocido',
      })
    }
  }, [])

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      checkServiceStatus()
      
      // Verificar cada 5 minutos
      const interval = setInterval(checkServiceStatus, 5 * 60 * 1000)
      return () => clearInterval(interval)
    }
  }, [isMounted, checkServiceStatus])

  const getStatusInfo = () => {
    switch (status.status) {
      case 'online':
        return {
          icon: CheckCircle,
          text: 'Servicio Online',
          variant: 'default' as const,
          color: 'text-green-600',
        }
      case 'offline':
        return {
          icon: AlertCircle,
          text: 'Servicio Offline',
          variant: 'destructive' as const,
          color: 'text-red-600',
        }
      case 'checking':
        return {
          icon: RefreshCw,
          text: 'Verificando...',
          variant: 'outline' as const,
          color: 'text-yellow-600',
        }
    }
  }

  const statusInfo = getStatusInfo()
  const StatusIcon = statusInfo.icon

  const handleManualCheck = () => {
    checkServiceStatus()
    toast.info('Verificando estado del servicio...')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <StatusIcon 
            className={`h-4 w-4 ${statusInfo.color} ${status.status === 'checking' ? 'animate-spin' : ''}`} 
          />
          Estado del Servicio de Pagos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Estado:</span>
          <Badge variant={statusInfo.variant}>
            {statusInfo.text}
          </Badge>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Última verificación:</span>
          <span className="text-xs text-muted-foreground">
            {isMounted && status.lastCheck.getTime() > 0 ? status.lastCheck.toLocaleTimeString('es-AR') : 'Nunca'}
          </span>
        </div>

        {status.error && (
          <>
            <Separator />
            <div className="space-y-2">
              <span className="text-sm font-medium text-destructive">Error:</span>
              <p className="text-xs text-muted-foreground bg-destructive/10 p-2 rounded">
                {status.error}
              </p>
            </div>
          </>
        )}

        <Separator />

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleManualCheck}
            disabled={status.status === 'checking'}
            className="flex-1"
          >
            <RefreshCw className={`h-3 w-3 mr-1 ${status.status === 'checking' ? 'animate-spin' : ''}`} />
            Verificar
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open('http://localhost:8080/health', '_blank')}
            className="px-2"
          >
            <ExternalLink className="h-3 w-3" />
          </Button>
        </div>

        {status.status === 'offline' && (
          <div className="text-xs text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded border border-yellow-200 dark:border-yellow-800">
            <strong>💡 Tip:</strong> Asegúrate de que el servicio de pagos esté ejecutándose en{' '}
            <code className="bg-muted px-1 rounded">http://localhost:8080</code>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
