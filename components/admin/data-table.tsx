"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  // RowData, // Para tipar TableMeta si se desea
} from "@tanstack/react-table"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  PlusIcon,
  ArrowUpDown,
} from "lucide-react"

import { useSociosContext } from "@/components/admin/socios-provider"
import { AdminUserView } from "@/app/admin/dashboard/data-socios"
import { toast } from "sonner"
import { useIsMobile } from "@/hooks/use-mobile"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { PaymentDialog } from "./payment-dialog"
import { AddSocioDialog } from "./add-socio-dialog"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Para tipar table.options.meta si se desea mayor type-safety
// declare module '@tanstack/react-table' {
//   interface TableMeta<TData extends RowData> {
//     openPaymentModal?: (socio: TData) => void
//   }
// }


const createColumns = (socios: AdminUserView[]): ColumnDef<AdminUserView>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected()
              ? true
              : table.getIsSomePageRowsSelected()
                ? 'indeterminate'
                : false
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "numeroSocio",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        N° Socio
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue("numeroSocio")}</div>,
  },
  {
    accessorKey: "nombreCompleto",
    header: "Nombre Completo",
    cell: ({ row }) => {
      const nombre = (row.getValue("nombreCompleto") as string)
        .replace(" (Titular)", "")
        .replace(" (Individual)", "")
        .replace(" (Familiar)", "")
      return <div className="capitalize">{nombre}</div>
    },
  },
  {
    accessorKey: "dni",
    header: "DNI",
  },
  {
    id: "tipoDeSocio",
    header: "Tipo de Socio",
    cell: ({ row }) => {
      const user = row.original
      if (user.familyHeadId) {
        return <Badge variant="outline">Familiar</Badge>
      } else if (user.familyMembersCount > 0) {
        return <Badge variant="secondary">Titular</Badge>
      } else {
        return <Badge variant="secondary">Individual</Badge>
      }
    },
  },
  {
    id: "cabezaDeFamilia",
    header: "Titular Grupo",
    cell: ({ row }) => {
      const user = row.original
      if (user.familyHeadId) {
        // Buscar el titular en los datos actuales
        const head = socios.find(u => u.id === user.familyHeadId)
        const headName = head
          ? `${head.firstName} ${head.lastName}`.replace(" (Titular)", "").replace(" (Individual)", "").replace(" (Familiar)", "")
          : user.familyHeadId
        return <div className="text-xs text-muted-foreground">{headName}</div>
      }
      return <div className="text-center">-</div>
    },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Teléfono",
  },
  {
    accessorKey: "status",
    header: "Estado",
    cell: ({ row }) => {
      const status = row.getValue("status") as AdminUserView["status"]
      let variant: "default" | "destructive" | "outline" | "secondary" = "secondary"
      let displayText: string = status

      if (status === "ACTIVE") {
        variant = "default"
        displayText = "Activo"
      } else if (status === "INACTIVE") {
        variant = "destructive"
        displayText = "Inactivo"
      } else if (status === "PENDING_VALIDATION") {
        variant = "outline"
        displayText = "Pendiente"
      }
      return <Badge variant={variant}>{displayText}</Badge>
    },
  },
  {
    accessorKey: "createdAt",
    header: "Fecha de Alta",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt") as string)
      return <div>{date.toLocaleDateString("es-AR")}</div>
    },
  },
  {
    accessorKey: "familyMembersCount",
    header: "N° Fam.",
    cell: ({ row }) => <div className="text-center">{row.getValue("familyMembersCount")}</div>,
  },
  {
    id: "actions",
    cell: ({ row, table }) => {
      const socio = row.original
      return (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
              size="icon"
            >
              <MoreHorizontalIcon className="h-4 w-4" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(socio.numeroSocio)}
            >
              Copiar N° Socio
            </DropdownMenuItem>
            <DropdownMenuItem>
              Ver Detalles (Próximamente)
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                // Llama a la función openPaymentModal desde table.options.meta
                // El '(table.options.meta as any)' es para evitar problemas de tipado si TableMeta no está explícitamente definida.
                (table.options.meta as any)?.openPaymentModal(socio)
              }}
            >
              Registrar Pago
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTable() {
  const { socios, isLoading, error, refreshSocios } = useSociosContext()
  const [data, setData] = React.useState(socios)

  // Sincronizar datos cuando cambien los socios
  React.useEffect(() => {
    setData(socios)
  }, [socios])

  // Crear columnas con acceso a los datos de socios
  const columns = React.useMemo(() => createColumns(socios), [socios])
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })

  const [isPaymentModalOpen, setIsPaymentModalOpen] = React.useState(false)
  const [selectedSocioForPayment, setSelectedSocioForPayment] = React.useState<AdminUserView | null>(null)

  // Estado para el modal de agregar socio
  const [isAddSocioModalOpen, setIsAddSocioModalOpen] = React.useState(false)

  const handleOpenPaymentModal = (socio: AdminUserView) => {
    setSelectedSocioForPayment(socio)
    setIsPaymentModalOpen(true)
  }

  const handlePaymentSuccess = (payment: any) => {
    // Refrescar los datos desde la API para obtener la información más actualizada
    refreshSocios()
    toast.success(`Pago registrado exitosamente para ${selectedSocioForPayment?.nombreCompleto}`)
  }

  const handleSocioCreated = (newSocio: any) => {
    // Refrescar los datos desde la API para mostrar el nuevo socio
    refreshSocios()
    toast.success(`Socio ${newSocio.firstName} ${newSocio.lastName} agregado exitosamente`)
  }



  const table = useReactTable({
    data,
    columns, // Usamos la constante columns directamente
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    meta: { // Pasamos la función handleOpenPaymentModal a través de meta
      openPaymentModal: handleOpenPaymentModal,
    },
    getRowId: (row) => row.id,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  const currentStatusFilter = table.getColumn("status")?.getFilterValue() as AdminUserView["status"] | undefined

  return (
    <> {/* Fragmento React para envolver Tabs y Dialog */}
      <Tabs
        value={currentStatusFilter || "outline"}
        onValueChange={(value) => {
          if (value === "outline") {
            table.getColumn("status")?.setFilterValue(undefined)
          } else {
            table.getColumn("status")?.setFilterValue(value as AdminUserView["status"])
          }
        }}
        className="flex w-full flex-col justify-start gap-6"
      >
        <div className="flex items-center justify-between px-4 lg:px-6">
          <Select
            value={currentStatusFilter || "outline"}
            onValueChange={(value) => {
              if (value === "outline") { table.getColumn("status")?.setFilterValue(undefined); }
              else { table.getColumn("status")?.setFilterValue(value as AdminUserView["status"]); }
            }}
          >
            <SelectTrigger
              className="@4xl/main:hidden flex w-fit"
              id="view-selector"
            >
              <SelectValue placeholder="Seleccionar vista" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outline">Todos</SelectItem>
              <SelectItem value="ACTIVE">Activos</SelectItem>
              <SelectItem value="INACTIVE">Inactivos</SelectItem>
              <SelectItem value="PENDING_VALIDATION">Pendientes</SelectItem>
            </SelectContent>
          </Select>

          <TabsList className="@4xl/main:flex hidden">
            <TabsTrigger value="outline">Todos</TabsTrigger>
            <TabsTrigger value="ACTIVE" className="gap-1">
              Activos{" "}
              <Badge variant="secondary" className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30">
                {data.filter(u => u.status === 'ACTIVE').length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="INACTIVE" className="gap-1">
              Inactivos{" "}
              <Badge variant="secondary" className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30">
                {data.filter(u => u.status === 'INACTIVE').length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="PENDING_VALIDATION" className="gap-1">
              Pendientes{" "}
              <Badge variant="secondary" className="flex h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30">
                {data.filter(u => u.status === 'PENDING').length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="ml-auto">
                  Columnas <ChevronDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {table
                  .getAllColumns()
                  .filter(
                    (column) =>
                      typeof column.accessorFn !== "undefined" &&
                      column.getCanHide()
                  )
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
                        {typeof column.columnDef.header === 'string' ? column.columnDef.header : column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm" onClick={() => setIsAddSocioModalOpen(true)}>
              <PlusIcon className="mr-2 h-4 w-4" />
              <span className="hidden lg:inline">Cargar Socio</span>
            </Button>
          </div>
        </div>
        <TabsContent value={currentStatusFilter || "outline"} className="mt-0">
          <div className="overflow-hidden rounded-lg border">
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-muted">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
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
                      No hay resultados.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between px-4 py-4">
            <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
              {table.getFilteredSelectedRowModel().rows.length} de{" "}
              {table.getFilteredRowModel().rows.length} fila(s) seleccionadas.
            </div>
            <div className="flex w-full items-center gap-8 lg:w-fit">
              <div className="hidden items-center gap-2 lg:flex">
                <Label htmlFor="rows-per-page" className="text-sm font-medium">
                  Filas por página
                </Label>
                <Select
                  value={`${table.getState().pagination.pageSize}`}
                  onValueChange={(value) => {
                    table.setPageSize(Number(value))
                  }}
                >
                  <SelectTrigger className="w-20" id="rows-per-page">
                    <SelectValue
                      placeholder={table.getState().pagination.pageSize}
                    />
                  </SelectTrigger>
                  <SelectContent side="top">
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <SelectItem key={pageSize} value={`${pageSize}`}>
                        {pageSize}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-fit items-center justify-center text-sm font-medium">
                Página {table.getState().pagination.pageIndex + 1} de{" "}
                {table.getPageCount()}
              </div>
              <div className="ml-auto flex items-center gap-2 lg:ml-0">
                <Button
                  variant="outline"
                  className="hidden h-8 w-8 p-0 lg:flex"
                  onClick={() => table.setPageIndex(0)}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className="sr-only">Ir a primera página</span>
                  <ChevronsLeftIcon />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.previousPage()}
                  disabled={!table.getCanPreviousPage()}
                >
                  <span className="sr-only">Ir a página anterior</span>
                  <ChevronLeftIcon />
                </Button>
                <Button
                  variant="outline"
                  className="size-8"
                  size="icon"
                  onClick={() => table.nextPage()}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="sr-only">Ir a página siguiente</span>
                  <ChevronRightIcon />
                </Button>
                <Button
                  variant="outline"
                  className="hidden size-8 lg:flex"
                  size="icon"
                  onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                  disabled={!table.getCanNextPage()}
                >
                  <span className="sr-only">Ir a última página</span>
                  <ChevronsRightIcon />
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="ACTIVE" />
        <TabsContent value="INACTIVE" />
        <TabsContent value="PENDING_VALIDATION" />
      </Tabs>

      <PaymentDialog 
        isOpen={isPaymentModalOpen}
        onOpenChange={setIsPaymentModalOpen} 
        socio={selectedSocioForPayment}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <AddSocioDialog
        isOpen={isAddSocioModalOpen}
        onOpenChange={setIsAddSocioModalOpen}
        onSocioCreated={handleSocioCreated}
      />
    </>
  )
}