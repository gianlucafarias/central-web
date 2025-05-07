'use client';
import { useRef, useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function HeroSection() {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlayThrough = () => setIsVideoLoading(false);
    const handleError = () => {
      console.error("Error loading video.");
      setIsVideoLoading(false);
    };

    if (videoElement.readyState >= 4) {
      handleCanPlayThrough();
    } else {
      videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
      videoElement.addEventListener('error', handleError);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.removeEventListener('error', handleError);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {isVideoLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-30 bg-black">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#ffdc00]"></div>
        </div>
      )}

      <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-yellow-500/60 z-10 "></div>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/ccaodrone-optimized.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className={`relative z-20 h-full flex flex-col justify-center transition-opacity duration-1000 delay-300 ${isVideoLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="container px-6 max-w-screen-xl mx-auto">
          <div className="">
            <div className="text-center mx-auto max-w-3xl">
              <div className="py-6 md:py-8 inline-block min-h-[100px] md:min-h-[120px]">
                <h1 className="text-white text-4xl md:text-5xl lg:text-5xl font-mono font-semibold">
                  CENTRAL ES{' '}
                  <span className="text-[#ffdc00] inline-block">
                    <Typewriter
                      options={{
                        delay: 100,
                        deleteSpeed: 75,
                        loop: true,
                        cursorClassName: 'Typewriter__cursor'
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString('UN SENTIMIENTO')
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString('UNA PASIÓN')
                          .pauseFor(2000)
                          .deleteAll()
                          .typeString('COMUNIDAD')
                          .pauseFor(2000)
                          .deleteAll()
                          .start();
                      }}
                    />
                  </span>
                </h1>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-6 justify-center">
                  <span className="w-5 h-0.5 bg-[#ffdc00] mt-3 mr-3 flex-shrink-0"></span>
                  <p className="text-white text-base">
                    Formá parte de nuestra comunidad y disfrutá de todos los beneficios exclusivos para socios. 
                    Acceso a todas las instalaciones, descuentos especiales y participación en eventos.
                  </p>
                </div>
              </div>
              { /*
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                <button className="bg-[#ffdc00] text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 hover-transition w-full sm:w-auto font-mono" onClick={() => window.location.href = '#hacete-socio'}>
                  ASOCIARME AHORA
                </button>
                <button className="border border-[#ffdc00] text-[#ffdc00] font-semibold py-3 px-8 rounded-full hover:bg-[#ffdc00]/10 hover-transition w-full sm:w-auto font-mono">
                  CONOCER BENEFICIOS
                </button>
              </div>
              */}
            </div>
              
           
          </div>
          
        </div>
        
        <div className="absolute bottom-10 md:bottom-20 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <span className="text-white text-xs mb-2">Desplaza para ver más</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
} 