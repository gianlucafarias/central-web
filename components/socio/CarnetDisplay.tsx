'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {  QRCodeSVG } from 'qrcode.react';
import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from '@react-pdf/renderer';
import CarnetPDF from './CarnetPDF';
import { useState, useEffect } from 'react';

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

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || ''; 

export default function CarnetDisplay({ miembro }: CarnetDisplayProps) {
  const qrUrl = `${BASE_URL}/verificar?id=${miembro.id}`;
  const [qrDataURL, setQrDataURL] = useState<string>('');

  useEffect(() => {
    const canvas = document.querySelector(`#qr-canvas-${miembro.id}`) as HTMLCanvasElement;
    if (canvas) {
      try {
        setTimeout(() => {
          const dataUrl = canvas.toDataURL('image/png');
          setQrDataURL(dataUrl);
        }, 50);
      } catch (error) {
        console.error("Error generating QR Data URL:", error);
      }
    } 
  }, [miembro.id]); 

  return (
    <Card className="w-full max-w-xs overflow-hidden shadow-lg bg-gradient-to-br from-primary/90 to-primary/70 dark:from-primary/80 dark:to-primary/60 text-primary-foreground rounded-xl font-sans">
    

      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <Image 
              src={miembro.avatarUrl}
              alt={`Foto de ${miembro.nombreCompleto}`}
              width={85} 
              height={110} 
              className="rounded object-cover border-2 border-primary-foreground/50 shadow-md"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between self-stretch min-w-0">
            <div className="space-y-0.5 text-xs truncate mb-2">
              <p className="font-semibold text-sm leading-tight truncate">{miembro.nombreCompleto}</p>
              <p>Socio N°: <span className="font-medium">{miembro.numeroSocio}</span></p>
              <p>Categoría: <span className="font-medium">{miembro.categoria}</span></p>
            </div>

            <div className="bg-white p-1 rounded self-start"> 
              <QRCodeSVG 
                value={qrUrl} 
                size={64} 
                level={"L"}
              />
            </div>
          </div>
        </div>

         <div className="mt-3 pt-2 border-t border-primary-foreground/30 flex justify-center">
           {qrDataURL ? (
             <PDFDownloadLink
               document={<CarnetPDF miembro={miembro} qrDataURL={qrDataURL} />} 
               fileName={`carnet-${miembro.numeroSocio || miembro.id}.pdf`}
             >
               {({ loading }) => (
                 <Button 
                   variant="secondary"
                   size="sm"
                   className="w-full"
                   disabled={loading}
                 >
                   {loading ? 'Generando PDF...' : 'Descargar PDF'}
                 </Button>
               )}
             </PDFDownloadLink>
           ) : (
             <Button variant="secondary" size="sm" className="w-full" disabled>
               Preparando descarga...
             </Button>
           )}
           
         </div>

      </CardContent>
    </Card>
  );
} 