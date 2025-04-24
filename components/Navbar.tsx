'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define navigation structure
const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "EL Club",
    href: "/el-club",
    subItems: [
      { name: "Historia", href: "/el-club/historia" },
      { name: "Comisión Directiva", href: "/el-club/comision" },
      { name: "Instalaciones", href: "/el-club/instalaciones" },
      { name: "Estatuto", href: "/el-club/estatuto" },
      { name: "Fiesta Nacional del Zapallo", href: "/el-club/estatuto" },
      { name: "Binguito", href: "/el-club/estatuto" },

    ],
  },
  {
    name: "Disciplinas",
    href: "/disciplinas", // Optional: Main disciplines overview page
    subItems: [
      { name: "Fútbol", href: "/disciplinas/futbol" },
      { name: "Basquet Masculino", href: "/disciplinas/baloncesto" },
      { name: "Basquet Inferiores", href: "/disciplinas/baloncesto" },
      { name: "Voley Masculino", href: "/disciplinas/voleibol" },
      { name: "Voley Femenino", href: "/disciplinas/natacion" },
      { name: "Patín", href: "/disciplinas/gimnasia" },
      { name: "Padel", href: "/disciplinas/gimnasia" },

    ],
  },
  { name: "Contacto", href: "#contacto" }, // Assuming contact is a section on the homepage
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); // State for hover

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-colors duration-300 ease-in-out bg-black/80 backdrop-blur-sm ${ 
        !isScrolled ? 'md:bg-transparent md:backdrop-blur-none' : '' // Only make desktop transparent when not scrolled
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-3 py-3 flex justify-center md:justify-between items-center relative">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative w-[80px] h-[80px]">
              <Image 
                src="/central-logo.png" 
                alt="Logo" 
                fill // Use fill for responsive images within relative parent
                sizes="80px" // Provide sizes hint
                className="object-contain"
              />
            </div>
            <span className="text-white text-l font-mono ml-3 leading-tight hidden lg:inline">CLUB CENTRAL <br /> ARGENTINO OLÍMPICO</span>
          </Link>
        </div>
        
        {/* Wrapper for Navigation and Action Buttons */}
        <div className="hidden md:flex items-center space-x-6"> 
          {/* Navigation Links - Desktop */} 
          <div className="flex items-center space-x-6 text-white text-sm uppercase">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative" 
                onMouseEnter={() => setHoveredItem(item.name)} 
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link href={item.href || '#'} className="hover:text-[#ffdc00] transition-colors font-mono py-4">
                  {item.name}
                </Link>
                {/* Dropdown Menu */} 
                {item.subItems && hoveredItem === item.name && (
                  <div className="absolute left-0 top-full mt-3 w-48 bg-black/90 backdrop-blur-sm rounded-md shadow-lg py-2 z-50">
                    {item.subItems.map((subItem) => (
                      <Link 
                        key={subItem.name} 
                        href={subItem.href} 
                        className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50 hover:text-[#ffdc00] transition-colors font-mono"
                        onClick={() => setHoveredItem(null)} // Close menu on click
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Action Buttons - Desktop */} 
          <div className="flex items-center space-x-4">
            <button className="bg-[#ffdc00] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors text-sm cursor-pointer font-mono">
              ASOCIATE AHORA
            </button>
            <Link href="/login" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors text-sm cursor-pointer font-mono">
              INGRESAR
            </Link>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Panel */} 
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 py-4 px-6">
          <div className="flex flex-col space-y-3 text-sm uppercase">
            {/* TODO: Add mobile submenu logic */} 
            {navItems.map((item) => (
              <Link key={item.name} href={item.href || '#'} className="text-white hover:text-[#ffdc00] py-2 font-mono" onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <button className="w-full bg-[#ffdc00] text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition-colors text-sm font-mono">
                ASOCIATE
              </button>
              <button className="w-full bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors text-sm font-mono">
                INGRESAR
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 