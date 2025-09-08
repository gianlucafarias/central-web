"use client"

import { useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  ArrowUpDown,
  ChevronDownIcon,
  MoreHorizontalIcon,
  Calendar,
  MapPin,
} from "lucide-react"

import { Event, EventType, EventStatus } from "@/lib/events"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"

// Función para obtener el color del badge según el estado
function getStatusBadgeVariant(status: EventStatus) {
  switch (status) {
    case 'SCHEDULED':
      return 'default'
    case 'IN_PROGRESS':
      return 'secondary'
    case 'COMPLETED':
      return 'outline'
    case 'CANCELLED':
      return 'destructive'
    case 'POSTPONED':
      return 'secondary'
    default:
      return 'default'
  }
}

// Función para obtener el color del badge según el tipo
function getTypeBadgeVariant(type: EventType) {
  switch (type) {
    case 'MATCH':
      return 'default'
    case 'TOURNAMENT':
      return 'secondary'
    case 'TRAINING':
      return 'outline'
    case 'SOCIAL':
      return 'destructive'
    case 'MEETING':
      return 'secondary'
    case 'OTHER':
      return 'outline'
    default:
      return 'default'
  }
}

// Función para formatear la fecha
function formatEventDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  // Validar que la fecha sea válida
  if (isNaN(dateObj.getTime())) {
    return 'Fecha inválida'
  }
  
  return new Intl.DateTimeFormat('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(dateObj)
}

// Función para formatear la hora
function formatEventTime(time: string | undefined): string {
  if (!time) return 'Sin hora'
  return time
}

export const columns: ColumnDef<Event>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? 'indeterminate'
              : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todos"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Título
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="max-w-[200px]">
        <div className="font-medium">{row.getValue("title")}</div>
        {row.original.description && (
          <div className="text-sm text-muted-foreground truncate">
            {row.original.description}
          </div>
        )}
      </div>
    ),
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row }) => {
      const type = row.getValue("type") as EventType
      return (
        <Badge variant={getTypeBadgeVariant(type)}>
          {type === 'MATCH' && 'Partido'}
          {type === 'TOURNAMENT' && 'Torneo'}
          {type === 'TRAINING' && 'Entrenamiento'}
          {type === 'SOCIAL' && 'Social'}
          {type === 'MEETING' && 'Reunión'}
          {type === 'OTHER' && 'Otro'}
        </Badge>
      )
    },
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as EventStatus
      return (
        <Badge variant={getStatusBadgeVariant(status)}>
          {status === 'SCHEDULED' && 'Programado'}
          {status === 'IN_PROGRESS' && 'En Progreso'}
          {status === 'COMPLETED' && 'Completado'}
          {status === 'CANCELLED' && 'Cancelado'}
          {status === 'POSTPONED' && 'Pospuesto'}
        </Badge>
      )
    },
  },
  {
    accessorKey: "eventDate",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          <Calendar className="mr-2 h-4 w-4" />
          Fecha
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const date = row.getValue("eventDate") as Date
      return (
        <div className="text-sm">
          <div>{formatEventDate(date)}</div>
          {row.original.startTime && (
            <div className="text-muted-foreground">
              {formatEventTime(row.original.startTime)}
            </div>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "location",
    header: "Ubicación",
    cell: ({ row }) => (
      <div className="max-w-[150px]">
        <div className="flex items-center text-sm">
          <MapPin className="mr-1 h-3 w-3" />
          <span className="truncate">{row.getValue("location")}</span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "homeTeam",
    header: "Partido",
    cell: ({ row }) => {
      const homeTeam = row.original.homeTeam
      const awayTeam = row.original.awayTeam
      
      if (!homeTeam || !awayTeam) {
        return <span className="text-muted-foreground">-</span>
      }
      
      return (
        <div className="text-sm">
          <div className="font-medium">{homeTeam}</div>
          <div className="text-muted-foreground">vs {awayTeam}</div>
          {row.original.result && (
            <div className="text-xs text-green-600 font-medium">
              {row.original.result}
            </div>
          )}
        </div>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const event = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(event.id)}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver detalles</DropdownMenuItem>
            <DropdownMenuItem>Editar evento</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Eliminar evento
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

interface EventosDataTableProps {
  data: Event[]
}

export function EventosDataTable({ data }: EventosDataTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar por título..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No hay eventos disponibles.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{" "}
          {table.getFilteredRowModel().rows.length} fila(s) seleccionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}
