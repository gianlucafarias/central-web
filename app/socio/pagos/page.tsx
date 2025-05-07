import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Card } from "@/components/ui/card";


export default function PagosPage() {
	return (
<div className="space-y-6">
<h1 className="text-3xl font-bold text-gray-800 dark:text-white">
			Gestión de Pagos recientes
			</h1>
            <Card className="px-7 py-10">
			<Table>
  <TableCaption>Lista de pagos</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Fecha</TableHead>
      <TableHead>Concepto</TableHead>
      <TableHead>Monto</TableHead>
      <TableHead className="text-right">Estado</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">2025-01-01</TableCell>
      <TableCell>Cuota Mensual</TableCell>
      <TableCell>$2500.00</TableCell>
      <TableCell className="text-right">Pendiente</TableCell>
    </TableRow>
  </TableBody>
</Table>
</Card>
		</div>
	)
} 