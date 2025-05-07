import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IdCard, UsersRound } from "lucide-react";


const socioData = {
	nombre: "Juan Pérez", 
	numeroSocio: "12345",
	estadoCuota: "Al día", 
	fechaVencimientoCuota: "10/08/2024", 
	cantidadFamiliares: 2, 
};

export default function SocioDashboardPage() {
	return (
		<div className="space-y-6">
			<h1 className="text-3xl font-bold text-gray-800 dark:text-white">
				¡Bienvenido, {socioData.nombre}!
			</h1>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card className="flex flex-col pt-5 pb-5">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<IdCard className="h-7 w-7 " />
							<span className="font-mono">Estado de Socio</span>
						</CardTitle>
						<CardDescription>Tu información principal</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 pt-4 flex-grow">
						<div className="flex items-start space-x-2">
							<p className="text-sm">
								Número de Socio:{" "}
								<strong className="font-medium text-foreground">
									{socioData.numeroSocio}
								</strong>
							</p>
						</div>
						<div className="flex items-start space-x-2">
							<div className="text-sm">
								<p>
									Estado Cuota:{" "}
									<span
										className={socioData.estadoCuota === "Al día"
											? "font-semibold text-green-600 dark:text-green-400"
											: "font-semibold text-red-600 dark:text-red-400"}
									>
										{socioData.estadoCuota}
									</span>
								</p>
								{socioData.estadoCuota === "Al día" && (
									<p className="text-xs text-muted-foreground mt-1">
										Próximo vencimiento: {socioData.fechaVencimientoCuota}
									</p>
								)}
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between space-x-2">
						<Button asChild variant="outline">
							<Link href="/socio/carnet">Ver Carnet</Link>
						</Button>
						<Button asChild>
							<Link href="/socio/pagos">Gestionar Pagos</Link>
						</Button>
					</CardFooter>
				</Card>

				<Card className="flex flex-col pt-5 pb-5">
					<CardHeader>
						<CardTitle className="flex items-center space-x-2">
							<UsersRound className="h-7 w-7 " />
							<span className="font-mono">Grupo Familiar</span>
						</CardTitle>
						<CardDescription>Gestiona los miembros</CardDescription>
					</CardHeader>
					<CardContent className="flex-grow">
						<p>Tienes <strong>{socioData.cantidadFamiliares}</strong> miembro(s) registrado(s).</p>
					</CardContent>
					<CardFooter>
						<Button asChild variant="secondary">
							<Link href="/socio/familiares">Administrar Grupo</Link>
						</Button>
					</CardFooter>
				</Card>

			
			</div>
		</div>
	);
} 