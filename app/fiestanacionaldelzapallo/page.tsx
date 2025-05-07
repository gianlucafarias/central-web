'use client' // Necesario para hooks como useState, useEffect, useRef

import Image from 'next/image'
import Footer from '@/components/Footer' // Asumiendo que existe un componente Footer
import { useState, useEffect, useRef } from 'react'; // Importar hooks
import { Facebook, Instagram, Twitter, Youtube, MapPin } from "lucide-react";

// No se puede exportar metadata directamente desde un client component de esta forma.
// Se deberá manejar a través del componente Layout o usando la API de metadata en un Server Component padre si es posible.
// export const metadata: Metadata = {
// 	title: 'Fiesta Nacional del Zapallo',
//   };
const imageUrl = '/fnz/fnzdia2.jpg' 

// Hook useOnScreen (copiado de SociosSection.tsx)
function useOnScreen(ref: React.RefObject<Element | null>, options?: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]); 

  return isIntersecting;
}

export default function FiestaNacionalDelZapallo() {
	const [edicionesCount, setEdicionesCount] = useState(0);
	const [diasCount, setDiasCount] = useState(0);
	const [expositoresCount, setExpositoresCount] = useState(0);
	const [visitantesCount, setVisitantesCount] = useState(0);
	const [hasAnimated, setHasAnimated] = useState(false);

	const statsSectionRef = useRef<HTMLDivElement>(null);
	const isStatsSectionVisible = useOnScreen(statsSectionRef, { threshold: 0.3 });

	const targetEdiciones = 53;
	const targetDias = 3;
	const targetExpositores = 50;
	const targetVisitantes = 4000;
	const animationDuration = 2000; // ms

	// Refs y estados para animación de secciones
	const actividadesSectionRef = useRef<HTMLElement>(null);
	const isActividadesSectionVisible = useOnScreen(actividadesSectionRef, { threshold: 0.1 });
	const [hasActividadesFadedIn, setHasActividadesFadedIn] = useState(false);

	const soberanasSectionRef = useRef<HTMLElement>(null);
	const isSoberanasSectionVisible = useOnScreen(soberanasSectionRef, { threshold: 0.1 });
	const [hasSoberanasFadedIn, setHasSoberanasFadedIn] = useState(false);

	useEffect(() => {
		if (isStatsSectionVisible && !hasAnimated) {
			setHasAnimated(true);
			let startTime: number | null = null;

			const animateStats = (timestamp: number) => {
				if (!startTime) startTime = timestamp;
				const progress = timestamp - startTime;
				const progressRatio = Math.min(progress / animationDuration, 1);

				setEdicionesCount(Math.floor(progressRatio * targetEdiciones));
				setDiasCount(Math.floor(progressRatio * targetDias));
				setExpositoresCount(Math.floor(progressRatio * targetExpositores));
				setVisitantesCount(Math.floor(progressRatio * targetVisitantes));

				if (progress < animationDuration) {
					requestAnimationFrame(animateStats);
				} else {
					setEdicionesCount(targetEdiciones);
					setDiasCount(targetDias);
					setExpositoresCount(targetExpositores);
					setVisitantesCount(targetVisitantes);
				}
			};
			requestAnimationFrame(animateStats);
		}
	}, [isStatsSectionVisible, hasAnimated]);

	useEffect(() => {
    if (isActividadesSectionVisible && !hasActividadesFadedIn) {
      setHasActividadesFadedIn(true);
    }
  }, [isActividadesSectionVisible, hasActividadesFadedIn]);

  useEffect(() => {
    if (isSoberanasSectionVisible && !hasSoberanasFadedIn) {
      setHasSoberanasFadedIn(true);
    }
  }, [isSoberanasSectionVisible, hasSoberanasFadedIn]);

	return (
		<div className="pt-25 pb-1 md:pb-16">
			{/* Hero Section - Definido directamente aquí */}
			<div
				className="relative flex h-[50vh] min-h-[400px] items-center justify-center bg-cover bg-center text-center text-white "
				style={{ backgroundImage: "url('/fnz.jpg')" }} // Placeholder o imagen relevante
			>
				{/* Overlay oscuro para mejorar legibilidad del texto */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Contenido del Hero */}
				<div className="relative z-10 px-4">
					<Image src="/fnz/logofnz2.png" className="w-3/4 mx-auto" alt="Logo" width={700} height={300} />
				</div>
			</div>

			{/* Stats Section */}
			<section ref={statsSectionRef} className="bg-[#035F4D] py-8 text-white">
				<div className="container mx-auto px-4 md:px-6 lg:px-8">
					<div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-8">
						<div>
							<p className="text-4xl font-bold">53</p>
							<p className="text-sm uppercase tracking-wider">Ediciones</p>
						</div>
						<div>
							<p className="text-4xl font-bold">3</p>
							<p className="text-sm uppercase tracking-wider">
								Días
							</p>
						</div>
						<div>
							<p className="text-4xl font-bold">+{expositoresCount}</p>
							<p className="text-sm uppercase tracking-wider">
								Expositores
							</p>
						</div>
						<div>
							<p className="text-4xl font-bold">+{visitantesCount}</p>
							<p className="text-sm uppercase tracking-wider">Visitantes</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contenido de la página */}
			<main className="py-16">
				{/* Activity Grid Section */}
				<section 
					ref={actividadesSectionRef}
					className={`container mx-auto mb-16 px-4 md:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${hasActividadesFadedIn ? 'opacity-100' : 'opacity-0'}`}
					id="actividades"
				>
					<h2 className="mb-10 text-center text-4xl font-bold tracking-tight text-gray-700">
						¿Qué Podés Disfrutar?
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{/* Card 1: Objetivo y Espectáculos */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/espectaculos.jpg"
								alt="Espectáculos Folclóricos"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Espectáculos en vivo
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Disfruta de emocionantes espectáculos folclóricos y música en vivo para toda la familia.
								</p>
							</div>
							{/* Podríamos añadir un tooltip o modal con el texto detallado al hacer hover/click */}
						</div>

						{/* Card 2: Muestra Ganadera */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/academias.jpg"
								alt="Muestra Ganadera"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Academias de Baile
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Maravíllate con las destrezas de nuestras academias de baile presentando danzas tradicionales.
								</p>
							</div>
						</div>

						{/* Card 3: Ceres y su Historia */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/juegos.jpg"
								alt="Ciudad de Ceres"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Parque de Juegos
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Diversión asegurada con juegos para todas las edades.
								</p>
							</div>
						</div>

						{/* Card 4: Actividades Recreativas */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/patiocomidas.jpg"
								alt="Juego de la Herradura"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Paseo Gastronómico
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Saborea una variada oferta gastronómica en nuestro gran patio de comidas.
								</p>
							</div>
						</div>

						{/* Card 5: Última Edición */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/paseo.jpg" // Usamos la imagen real que tenías
								alt="Última Edición Fiesta del Zapallo"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Paseo Comercial y artesanal
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Desde emprendedores y artesanos hasta la industria automotriz, metalúrgica y agrícola.
								</p>
							</div>
						</div>

                        {/* Card 6: Última Edición */}
						<div className="group relative h-64 overflow-hidden rounded-xl shadow-lg">
							<Image
								src="/fnz/charlas.jpg" // Usamos la imagen real que tenías
								alt="Última Edición Fiesta del Zapallo"
								layout="fill"
								objectFit="cover"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-[#035F4D] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
							<div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
								<h3 className="text-center text-2xl font-semibold text-white opacity-100 group-hover:opacity-0 transition-opacity duration-300">
									Charlas para el Agro
								</h3>
								<p className="absolute text-center text-m text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
									Participa en charlas y talleres informativos enfocados en el sector agropecuario.
								</p>
							</div>
						</div>

					</div>
				</section>

				{/* Reviví la Última Edición Section */}
				<section
			className="relative bg-cover bg-center bg-no-repeat bg-fixed py-16" // Añadido bg-fixed para parallax
			style={{ backgroundImage: `url(${imageUrl})` }}
			aria-label="Sección Fiesta del Zapallo"
		>
				<div className="absolute inset-0 bg-[#FCB711]/70 z-0"></div>

					<div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8">
						<h2 className="text-white mb-12 text-center text-4xl font-bold tracking-tight">
							Reviví la Última Edición
						</h2>
						<div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 md:gap-16">
							{/* Círculo Día 1 */}
							<a
								href="https://www.instagram.com/fiestanacionaldelzapallo/reel/DBAdnUIgSRk/?hl=es" // Replace with actual Instagram link for Day 1
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center text-center"
							>
								<div className="relative mb-3 flex h-36 w-36 items-center justify-center rounded-full shadow-[0_25px_50px_-12px_rgba(255,255,255,0.35)] transition-transform hover:scale-105 overflow-hidden md:h-40 md:w-40">
                                     <Image 
                                        src="/fnz/dia1.png" 
                                        alt="Día 1"
                                        layout="fill"
                                        objectFit="cover"
                                     />
								</div>
								
							</a>
							{/* Círculo Día 2 */}
							<a
								href="https://www.instagram.com/fiestanacionaldelzapallo/reel/DBDVC7Xgbsc/?hl=es" // Replace with actual Instagram link for Day 2
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center text-center"
							>
                            <div className="relative mb-3 flex h-36 w-36 items-center justify-center rounded-full shadow-[0_25px_50px_-12px_rgba(255,255,255,0.35)] transition-transform hover:scale-105 overflow-hidden md:h-40 md:w-40">
                            <Image 
                                        src="/fnz/dia2.png" 
                                        alt="Día 2"
                                        layout="fill"
                                        objectFit="cover"
                                     />
								</div>
							</a>
							{/* Círculo Día 3 */}
							<a
								href="https://www.instagram.com/fiestanacionaldelzapallo/reel/DBFrKyOAnu4/?hl=es" // Replace with actual Instagram link for Day 3
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center text-center"
							>
                            <div className="relative mb-3 flex h-36 w-36 items-center justify-center rounded-full shadow-[0_25px_50px_-12px_rgba(255,255,255,0.35)] transition-transform hover:scale-105 overflow-hidden md:h-40 md:w-40">
                            <Image 
                                        src="/fnz/dia3.png" 
                                        alt="Día 3"
                                        layout="fill"
                                        objectFit="cover"
                                     />
								</div>
							</a>
						</div>
					</div>
				</section>

				{/* Soberanas Section */}
				<section 
					ref={soberanasSectionRef}
					className={`py-16 transition-opacity duration-1000 ease-in-out ${hasSoberanasFadedIn ? 'opacity-100' : 'opacity-0'}`}
					id="soberanas"
				>
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-gray-700">
							Nuestras Soberanas
						</h2>
						{/* Contenedor principal para la jerarquía */}
						<div className="flex flex-col items-center gap-12">
							{/* Reina - Centrada y potencialmente más grande */}
							<div className="w-full max-w-sm">
								{/* Card Reina */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-72 w-full">
										<Image
											src="/fnz/reina.png" // Placeholder
											alt="Reina Nacional del Zapallo"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Liz María Mata Teloni
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												Reina Nacional del Zapallo
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Contenedor para Princesas */}
							<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:max-w-2xl lg:max-w-3xl">
								{/* Card 1ra Princesa */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-64 w-full">
										<Image
											src="/fnz/1eraprincesa.png" // Placeholder
											alt="1ra Princesa"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Damaris López
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												1ra Princesa
											</p>
										</div>
									</div>
								</div>
								{/* Card 2da Princesa */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-64 w-full">
										<Image
											src="/fnz/2daprincesa.png" // Placeholder
											alt="2da Princesa"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Ludmila Barberis
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												2da Princesa
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Contenedor para Otros Títulos */}
							<div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
								{/* Card Embajadora */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-64 w-full">
										<Image
											src="/fnz/embajadora.png" // Placeholder
											alt="Embajadora"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Thiara Cravero
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												Embajadora
											</p>
										</div>
									</div>
								</div>
								{/* Card Miss Elegancia */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-64 w-full">
										<Image
											src="/fnz/elegancia.png" // Placeholder
											alt="Miss Elegancia"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Priscila Córdoba
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												Miss Elegancia
											</p>
										</div>
									</div>
								</div>
								{/* Card Miss Simpatia */}
								<div className="relative overflow-hidden rounded-xl bg-white text-center shadow-lg">
									<div className="relative h-64 w-full">
										<Image
											src="/fnz/simpatia.png" // Placeholder
											alt="Miss Simpatia"
											layout="fill"
											objectFit="cover"
											objectPosition="top"
										/>
									</div>
									<div className="absolute bottom-2 left-0 right-0 z-10 px-4 pb-2 flex flex-col items-center">
										<div className="inline-block rounded-lg bg-amber-100 px-6 py-3 shadow">
											<h3 className="text-xl font-semibold text-amber-900">
												Florencia Paula Tognolini
											</h3>
											<p className="text-sm uppercase tracking-wide text-amber-700">
												Miss Simpatía
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Sumate Section */}
				<section className="bg-amber-50 py-16" id="sumate">
					<div className="container mx-auto px-4 text-center md:px-6 lg:px-8">
						<h2 className="mb-8 text-4xl font-bold tracking-tight">
							¡Sumate!
						</h2>
						<p className="mb-10 text-lg text-gray-700">
							Seguinos en nuestras redes sociales para no perderte
							ninguna novedad.
						</p>
						<div className="flex items-center justify-center space-x-6">
							{/* Placeholder Icon Facebook */}
							<a
								href="#" // Replace with actual link
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-600 transition-colors hover:text-amber-800"
								aria-label="Facebook"
							>
								<Facebook className="h-10 w-10" />
							</a>
							{/* Placeholder Icon Instagram */}
							<a
								href="#" // Replace with actual link
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-600 transition-colors hover:text-amber-800"
								aria-label="Instagram"
							>
								<Instagram className="h-10 w-10" />
								
							</a>
							{/* Placeholder Icon X/Twitter */}
							<a
								href="#" // Replace with actual link
								target="_blank"
								rel="noopener noreferrer"
								className="text-amber-600 transition-colors hover:text-amber-800"
								aria-label="X (antes Twitter)"
							>
								<Twitter className="h-10 w-10" />
								
							</a>
						</div>
					</div>
				</section>

				{/* Sponsors Section Placeholder */}
				<section className="py-12" id="sponsors">
					<div className="container mx-auto px-4 md:px-6 lg:px-8">
						<h2 className="mb-10 text-center text-3xl font-semibold text-gray-700">
							Acompañan
						</h2>
						<div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
							{/* Placeholder Logos */}
							<Image
								src="/FNZ DIA 2 (622).jpg"
								alt="Sponsor 1"
								width={150}
								height={60}
							/>
							<Image
								src="/FNZ DIA 2 (622).jpg"
								alt="Sponsor 2"
								width={150}
								height={60}
							/>
							<Image
								src="/FNZ DIA 2 (622).jpg"
								alt="Sponsor 3"
								width={150}
								height={60}
							/>
							<Image
								src="/FNZ DIA 2 (622).jpg"
								alt="Sponsor 4"
								width={150}
								height={60}
							/>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
}
