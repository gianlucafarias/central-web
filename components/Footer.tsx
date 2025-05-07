import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";
import SectionDivider from "./SectionDivider";
import Image from "next/image";
const Footer = () => {
  return (
    
    <section id="contacto">
             <div className="bg-[#0F0F0F]">
        <SectionDivider 
          color="#0F0F0F" 
          className="h-20 -mt-20"
          flipY={true} 
        />
      </div>   
    <footer className="bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center text-club-primary font-bold">
                <Image src="/central-logo.png" alt="Logo" width={100} height={100} />
              </div>
              <span className="font-bold text-xl">C.C.A.O</span>
            </div>
            <p className="text-white/80 mb-6">
              Club Central Argentino Olimpico, fundado en 1930. Uniendo pasión y tradición deportiva en Ceres, Santa Fe.
            </p>
            <div className="flex space-x-4">
              <a target="_blank" href="https://www.facebook.com/centralceresoficial" className="text-white hover:text-club-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a target="_blank" href="https://www.instagram.com/centralceresoficial" className="text-white hover:text-club-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a target="_blank" href="https://www.instagram.com/centralceresoficial" className="text-white hover:text-club-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a target="_blank" href="https://www.instagram.com/centralceresoficial" className="text-white hover:text-club-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/80 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="/el-club" className="text-white/80 hover:text-white transition-colors">El Club</a>
              </li>
              <li>
                <a href="/el-club/comision-directiva" className="text-white/80 hover:text-white transition-colors">Comisión Directiva</a>
              </li>
              <li>
                <a href="/el-club/instalaciones" className="text-white/80 hover:text-white transition-colors">Instalaciones</a>
              </li>
              <li>
                <a href="/register" className="text-white/80 hover:text-white transition-colors">Hacete Socio</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Disciplinas</h3>
            <ul className="space-y-2">
              <li>
                <a href="/disciplinas/futbol" className="text-white/80 hover:text-white transition-colors">Fútbol</a>
              </li>
              <li>
                <a href="/disciplinas/basquet" className="text-white/80 hover:text-white transition-colors">Basquet</a>
              </li>
              <li>
                <a href="/disciplinas/voley" className="text-white/80 hover:text-white transition-colors">Voley</a>
              </li>
              <li>
                <a href="/disciplinas/natacion" className="text-white/80 hover:text-white transition-colors">Natación</a>
              </li>
              <li>
                <a href="/disciplinas/patin" className="text-white/80 hover:text-white transition-colors">Patin</a>
              </li>
              <li>
                <a href="/disciplinas/padel" className="text-white/80 hover:text-white transition-colors">Padel</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-club-accent shrink-0" />
                <span className="text-white/80">Av. San Martín 500, Ceres, Santa Fe, Argentina</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-club-accent" />
                <span className="text-white/80">+54 3491 123456</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-club-accent" />
                <span className="text-white/80">contacto@centralceres.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Club Central Argentino Olimpico. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;