import React from 'react';
import { Document, Page, View, Text, Image, StyleSheet, Font } from '@react-pdf/renderer';

// Definir interfaces (pueden importarse si están centralizadas)
interface MiembroData {
  id: string;
  nombreCompleto: string;
  numeroSocio: string;
  categoria: string;
  avatarUrl: string;
}

interface CarnetPDFProps {
  miembro: MiembroData;
  qrDataURL: string; // Recibe la imagen QR como Data URL
}

// Registrar fuentes (opcional, pero recomendado para consistencia)
// Asegúrate de tener los archivos de fuente en tu proyecto (ej. en /public/fonts)
// Font.register({
//   family: 'Oswald', 
//   fonts: [
//     { src: '/fonts/Oswald-Regular.ttf' }, 
//     { src: '/fonts/Oswald-SemiBold.ttf', fontWeight: 600 },
//   ]
// });
// Font.register({ family: 'GeistSans', src: '/fonts/GeistVF.ttf' });

// Estilos para el PDF usando StyleSheet de react-pdf
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
    fontFamily: 'Helvetica', // Fuente por defecto si no registras otras
  },
  carnet: {
    width: 240, // Ancho aprox carnet (puntos PDF)
    height: 150, // Alto aprox carnet
    backgroundColor: '#4a90e2', // Un color base (el gradiente es complejo en PDF)
    borderRadius: 8,
    padding: 10,
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 5,
    opacity: 0.8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ffffffa0',
    paddingBottom: 3,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
  },
  avatar: {
    width: 60,
    height: 80,
    borderRadius: 4,
    objectFit: 'cover',
    borderWidth: 1,
    borderColor: '#ffffffa0',
    marginRight: 8,
  },
  datosContainer: {
    flex: 1,
    justifyContent: 'space-between', // Distribuye espacio entre datos y QR
    height: '100%', // Ocupa altura disponible
  },
  datosText: {
    fontSize: 9,
    marginBottom: 1,
  },
  datosNombre: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  qrContainer: {
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 2,
    width: 50, // Tamaño contenedor QR
    height: 50,
    alignSelf: 'flex-start',
  },
  qrCode: {
    width: '100%',
    height: '100%',
  },
  footer: {
    fontSize: 8,
    textAlign: 'center',
    opacity: 0.7,
    marginTop: 5,
    paddingTop: 3,
    borderTopWidth: 0.5,
    borderTopColor: '#ffffffa0',
  }
});

// Asume que tienes una URL base configurada
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';

const CarnetPDF: React.FC<CarnetPDFProps> = ({ miembro, qrDataURL }) => {
  return (
    <Document>
      <Page size="A7" style={styles.page} orientation="landscape">
        <View style={styles.carnet}>
          {/* Encabezado */}
          <Text style={styles.header}>CLUB CENTRAL ARGENTINO</Text>
          
          {/* Contenido Principal */}
          <View style={styles.contentRow}>
            {/* Avatar */}
            {/* Nota: Image requiere URL absoluta o Data URI para src */}
            <Image 
              style={styles.avatar} 
              src={miembro.avatarUrl.startsWith('/') ? `${BASE_URL}${miembro.avatarUrl}` : miembro.avatarUrl}
            />
            {/* Datos y QR */}
            <View style={styles.datosContainer}>
              <View>
                 <Text style={styles.datosNombre}>{miembro.nombreCompleto}</Text>
                 <Text style={styles.datosText}>Socio N°: {miembro.numeroSocio}</Text>
                 <Text style={styles.datosText}>Categoría: {miembro.categoria}</Text>
              </View>
              {/* Usar la Imagen QR recibida */}
               <View style={styles.qrContainer}>
                 {qrDataURL ? (
                   <Image style={styles.qrCode} src={qrDataURL} />
                 ) : (
                   <Text style={{ fontSize: 6, textAlign: 'center', color: 'black' }}>Error QR</Text>
                 )}
               </View>
            </View>
          </View>

          {/* Footer */}
          {/* <Text style={styles.footer}>Presentar al ingresar</Text> */}
        </View>
      </Page>
    </Document>
  );
};

export default CarnetPDF; 