'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'

const IMAGES = [
	{ src: '/historia/hist1.jpeg', alt: 'Imagen histórica del club 1' },
	{ src: '/historia/hist2.jpeg', alt: 'Imagen histórica del club 2' },
	{ src: '/historia/hist3.jpeg', alt: 'Imagen histórica del club 3' },
	{ src: '/historia/hist4.jpeg', alt: 'Imagen histórica del club 4' },
	{ src: '/historia/hist5.webp', alt: 'Imagen histórica del club 5' },
	
]

export default function HistoricalCarousel() {
	const [selectedIndex, setSelectedIndex] = useState(0)
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: 'keepSnaps',
		dragFree: true,
	})

	const onThumbClick = useCallback(
		(index: number) => {
			if (!emblaApi || !emblaThumbsApi) return
			emblaApi.scrollTo(index)
		},
		[emblaApi, emblaThumbsApi]
	)

	const onSelect = useCallback(() => {
		if (!emblaApi || !emblaThumbsApi) return
		setSelectedIndex(emblaApi.selectedScrollSnap())
		emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap())
	}, [emblaApi, emblaThumbsApi, setSelectedIndex])

	useEffect(() => {
		if (!emblaApi) return
		onSelect()
		emblaApi.on('select', onSelect)
		emblaApi.on('reInit', onSelect)
	}, [emblaApi, onSelect])

	const scrollPrev = React.useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = React.useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className='relative w-full'>
			<div className='overflow-hidden rounded-lg' ref={emblaRef}>
				<div className='flex'>
					{IMAGES.map((img, index) => (
						<div className='relative min-w-0 flex-shrink-0 flex-grow-0 basis-full aspect-video' key={index}>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
								className='rounded-lg object-cover'
							/>
						</div>
					))}
				</div>
			</div>
			<div className='mt-4'>
				<div className='overflow-hidden rounded-lg' ref={emblaThumbsRef}>
					<div className='flex gap-2'>
						{IMAGES.map((img, index) => (
							<button
								onClick={() => onThumbClick(index)}
								key={index}
								className={`relative aspect-video w-1/5 flex-shrink-0 cursor-pointer overflow-hidden rounded-md transition-opacity ${
									index === selectedIndex ? 'opacity-100' : 'opacity-50 hover:opacity-75'
								}`}
								aria-label={`Ver imagen ${index + 1}`}
							>
								<Image
									src={img.src}
									alt={`Thumbnail de ${img.alt}`}
									fill
									sizes='20vw'
									className='object-cover'
								/>
							</button>
						))}
					</div>
				</div>
			</div>
			<button
				className='absolute top-1/2 left-4 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 focus:outline-none'
				onClick={scrollPrev}
				aria-label='Imagen anterior'
			>
				<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
					<path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
				</svg>
			</button>
			<button
				className='absolute top-1/2 right-4 -translate-y-1/2 transform rounded-full bg-black/50 p-2 text-white transition hover:bg-black/75 focus:outline-none'
				onClick={scrollNext}
				aria-label='Siguiente imagen'
			>
				<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6'>
					<path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
				</svg>
			</button>
		</div>
	)
} 