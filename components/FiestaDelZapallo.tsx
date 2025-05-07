'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
const imageUrl = '/herofnz.jpg' 

export default function FiestaDelZapallo() {
	const router = useRouter();

	const handleVisitandoClick = () => {
		router.push('/fiestanacionaldelzapallo');
	};

	return (
		<section
			className="relative bg-cover bg-center bg-no-repeat bg-fixed py-40" // Añadido bg-fixed para parallax
			style={{ backgroundImage: `url(${imageUrl})` }}
			aria-label="Sección Fiesta del Zapallo"
		>
			<div className="absolute inset-0 bg-black/50 z-0"></div>

			<div className="relative z-10 container mx-auto px-6 text-center text-white">
				<h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
					Fiesta Nacional del Zapallo
				</h2>
				<p className="text-lg md:text-xl mb-8">
				Una fiesta de historia, presente y futuro.				</p>
				<button className="cursor-pointer bg-[#ffdc00] text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors font-mono" onClick={handleVisitandoClick}>
					CONOCÉ MÁS
				</button>
			</div>
		</section>
	)
}
