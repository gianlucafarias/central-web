import ClubHeroSection from "@/components/el-club.tsx/ClubHeroSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import HistoricalCarousel from "@/components/el-club/HistoricalCarousel";

export default function ElClub() {
  return (
    <div>
      <ClubHeroSection title="El Club" />
      <div className="bg-slate-100 flex flex-col items-center justify-center px-4 py-8 md:px-6 lg:px-8 -mt-10 pt-20 mb-16">
        <section className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="mb-6 text-center text-3xl font-bold font-mono">
            Nuestra Historia
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4 text-lg">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative h-64 w-full md:h-auto">
              <Image
                src="/historia/hist1.jpeg" 
                alt="Imagen de la historia del club"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="mb-6 text-center text-3xl font-bold font-mono">
            Hitos Destacados
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-64 w-full md:h-auto md:order-1">
              <Image
                src="/historia/hist2.jpeg" 
                alt="Imagen de hitos del club"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="space-y-4 text-lg md:order-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="mb-6 text-center text-3xl font-bold font-mono">
            Momentos Inolvidables
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4 text-lg md:order-1">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative h-64 w-full md:h-auto md:order-2">
              <Image
                src="/historia/hist3.jpeg" 
                alt="Imagen de momentos inolvidables del club"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="mb-6 text-center text-3xl font-bold font-mono">
            Galería Histórica
          </h2>
          <HistoricalCarousel />
        </section>

        <section className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="mb-6 text-center text-3xl font-bold font-mono">
            Nuestra Ubicación y Contacto
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13836.986297774289!2d-61.94667709049074!3d-29.885995014494487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f17!3m3!1m2!1s0x9436789d17750f79%3A0x7efbfd2a90399fcc!2sClub%20Central%20Argentino%20Ol%C3%ADmpico!5e0!3m2!1ses!2sar!4v1746570023885!5m2!1ses!2sar"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Club Central Argentino Olímpico en Google Maps"
              ></iframe>
            </div>
            <div className="space-y-4 text-lg">
              <div>
                <h3 className="text-xl font-semibold mb-2">Dirección</h3>
                <p>Calle Falsa 123, Ciudad, Provincia</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p>(0123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>contacto@elclub.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horarios de Atención</h3>
                <p>Lunes a Viernes: 09:00 - 21:00</p>
                <p>Sábados: 10:00 - 18:00</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
