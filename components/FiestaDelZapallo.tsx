'use client'

import React from 'react'

const imageUrl = '/_MGL2626e.jpg' 

export default function FiestaDelZapallo() {
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
					Celebrando nuestra tradición y cultura en Ceres.
				</p>
				<button className="bg-[#ffdc00] text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-colors font-mono">
					CONOCÉ MÁS
				</button>
			</div>
		</section>
	)
}
