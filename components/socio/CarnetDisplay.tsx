'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from '@react-pdf/renderer';
import CarnetPDF from './CarnetPDF';
import { useState, useEffect, useRef } from 'react';
// import { Download } from 'lucide-react'; // Para botón de descarga

interface MiembroData {
  id: string; 
  nombreCompleto: string;
  numeroSocio: string;
  categoria: string; 
  avatarUrl: string;
}

interface CarnetDisplayProps {
  miembro: MiembroData;
}

// Asume que tienes una URL base configurada o usa relativa
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''; 

export default function CarnetDisplay({ miembro }: CarnetDisplayProps) {
  const qrUrl = `${BASE_URL}/verificar?id=${miembro.id}`;
  const [qrDataURL, setQrDataURL] = useState<string>('');
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  // Efecto para generar el Data URL del QR desde el canvas oculto
  useEffect(() => {
    const canvas = document.querySelector(`#qr-canvas-${miembro.id}`) as HTMLCanvasElement;
    if (canvas) {
      try {
        // Pequeño delay para asegurar renderizado del canvas
        setTimeout(() => {
          const dataUrl = canvas.toDataURL('image/png');
          setQrDataURL(dataUrl);
        }, 50);
      } catch (error) {
        console.error("Error generating QR Data URL:", error);
      }
    } 
  }, [miembro.id]); // Ejecutar solo si el ID cambia

  return (
    // Ajustamos padding, mantenemos max-w-sm y gradiente
    <Card className="w-full max-w-xs overflow-hidden shadow-lg bg-gradient-to-br from-primary/90 to-primary/70 dark:from-primary/80 dark:to-primary/60 text-primary-foreground rounded-xl font-sans">
      {/* Encabezado con logo del club (opcional) */}
      {/* <div className="p-3 bg-black/20 text-center">
        <Image src="/logo-simple.png" alt="Logo Club" width={40} height={40} className="mx-auto"/>
      </div> */}

      <CardContent className="p-4">
        {/* Fila Principal: Foto a la izquierda, Datos+QR a la derecha */} 
        <div className="flex items-center space-x-3">
          {/* Columna Izquierda: Foto */}
          <div className="flex-shrink-0">
            <Image 
              src={miembro.avatarUrl}
              alt={`Foto de ${miembro.nombreCompleto}`}
              width={85} // Ancho similar a tarjeta física
              height={110} // Alto ajustado para proporción
              className="rounded object-cover border-2 border-primary-foreground/50 shadow-md"
            />
          </div>

          {/* Columna Derecha: Datos y QR */}
          <div className="flex-1 flex flex-col justify-between self-stretch min-w-0">
            {/* Datos */}
            <div className="space-y-0.5 text-xs truncate mb-2">
              <p className="font-semibold text-sm leading-tight truncate">{miembro.nombreCompleto}</p>
              <p>Socio N°: <span className="font-medium">{miembro.numeroSocio}</span></p>
              <p>Categoría: <span className="font-medium">{miembro.categoria}</span></p>
              {/* Podría ir DNI u otra info */}
            </div>

            {/* QR Visible (usamos SVG aquí para visualización nítida) */}
            <div className="bg-white p-1 rounded self-start"> 
              <QRCodeSVG 
                value={qrUrl} 
                size={64} 
                level={"L"}
              />
            </div>
          </div>
        </div>

        {/* Barra inferior con nombre del club o botón */}
         <div className="mt-3 pt-2 border-t border-primary-foreground/30 flex justify-center">
           {/* Usar PDFDownloadLink */}
           {qrDataURL ? (
             <PDFDownloadLink
               document={<CarnetPDF miembro={miembro} qrDataURL={qrDataURL} />} // Pasar data URL al PDF
               fileName={`carnet-${miembro.numeroSocio || miembro.id}.pdf`}
             >
               {({ blob, url, loading, error }) => (
                 <Button 
                   variant="secondary"
                   size="sm"
                   className="w-full"
                   disabled={loading}
                 >
                   {loading ? 'Generando PDF...' : 'Descargar PDF'}
                   {/* {error ? ' Error!' : <Download className="ml-1 h-3 w-3" />} */} 
                 </Button>
               )}
             </PDFDownloadLink>
           ) : (
             <Button variant="secondary" size="sm" className="w-full" disabled>
               Preparando descarga...
             </Button>
           )}
           {/* O texto simple: */}
           {/* <p className="text-xs opacity-80 font-mono uppercase">Club Central Argentino</p> */} 
         </div>

      </CardContent>
    </Card>
  );
} 