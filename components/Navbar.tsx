'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: "Inicio", href: "/" },
  {
    name: "EL Club",
    subItems: [
      { name: "Historia", href: "/el-club/historia" },
      { name: "Comisión Directiva", href: "/el-club/comision" },
      { name: "Instalaciones", href: "/el-club/instalaciones" },
      { name: "Estatuto", href: "/el-club/estatuto" },
      { name: "Binguito", href: "/el-club/binguito" },

    ],
  },
  {
    name: "Disciplinas",
    subItems: [
      { name: "Fútbol", href: "/disciplinas/futbol" },
      { name: "Basquet", href: "/disciplinas/basquet" },
      { name: "Voley", href: "/disciplinas/voley" },
      { name: "Patín", href: "/disciplinas/patin" },
      { name: "Natación", href: "/disciplinas/natacion" },
      { name: "Padel", href: "/disciplinas/padel" },
      { name: "Inicación deportiva", href: "/disciplinas/inicacion-deportiva" },

    ],
  },
  {
    name: "Fiesta Nacional del Zapallo",
    href: "/fiestanacionaldelzapallo",
  },
  { name: "Contacto", href: "#contacto" }, 
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null); 
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const pathname = usePathname(); 

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

  const handleMobileMenuToggle = (itemName: string, hasSubItems?: boolean, href?: string) => {
    if (hasSubItems) {
      setOpenMobileSubMenu(openMobileSubMenu === itemName ? null : itemName);
    } else {
      if (href) {
        setIsMenuOpen(false);
        setOpenMobileSubMenu(null);
      }
    }
  };

  return (
    <nav 
      className={`fixed left-0 right-0 z-50 transition-colors duration-300 ease-in-out bg-club-black backdrop-blur-sm ${ 
        pathname === '/' && !isScrolled ? 'md:bg-transparent md:backdrop-blur-none' : '' 
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
                fill 
                sizes="80px" 
                className="object-contain"
              />
            </div>
            <span className="text-white text-l font-mono ml-3 leading-tight hidden lg:inline">CLUB CENTRAL <br /> ARGENTINO OLÍMPICO</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6"> 
          <div className="flex items-center space-x-6 text-white text-sm uppercase">
            {navItems.map((item) => {
              const isActive = item.href
                ? item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                : false;

              return (
                <div 
                  key={item.name}
                  className="relative" 
                  onMouseEnter={() => setHoveredItem(item.name)} 
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.href || '#'} 
                    className={`font-mono py-4 transition-colors flex items-center ${isActive ? 'text-[#ffdc00]' : 'text-white hover:text-[#ffdc00]'}`}
                    onClick={(e) => {
                      if (item.subItems && !item.href) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {item.name}
                    {item.subItems && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {item.subItems && hoveredItem === item.name && (
                    <div className="absolute left-0 top-full mt-3 w-48 bg-black/90 rounded-md shadow-lg py-2 z-50">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.name} 
                          href={subItem.href} 
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700/50 hover:text-[#ffdc00] transition-colors font-mono"
                          onClick={() => setHoveredItem(null)} 
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/register" className="bg-[#ffdc00] text-black font-semibold py-2 px-6 rounded-full hover:bg-yellow-500 transition-colors text-sm cursor-pointer font-mono">
              REGISTRARME
            </Link>
            <Link href="/login" className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors text-sm cursor-pointer font-mono">
              INGRESAR
            </Link>
          </div>
        </div>
        
        <button 
          className="md:hidden absolute right-3 top-1/2 -translate-y-1/2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 py-4 px-6">
          <div className="flex flex-col space-y-1 text-sm uppercase">
            {navItems.map((item) => {
              const isActive = item.href
                ? item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href)
                : false;
              
              const hasSubItems = !!item.subItems && item.subItems.length > 0;

              return (
                <div key={item.name}>
                  <div 
                    className={`flex justify-between items-center py-2 font-mono transition-colors cursor-pointer ${isActive && !hasSubItems ? 'text-[#ffdc00]' : 'text-white hover:text-[#ffdc00]'}`}
                    onClick={() => {
                      if (hasSubItems) {
                        handleMobileMenuToggle(item.name, true);
                      } else if (item.href) {
                        handleMobileMenuToggle(item.name, false, item.href);
                      }
                    }}
                  >
                    {item.href && !hasSubItems ? (
                      <Link href={item.href} className="w-full" onClick={() => setIsMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ) : (
                      <span className="flex-grow">{item.name}</span> 
                    )}
                    {hasSubItems && (
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform duration-200 ease-in-out ${openMobileSubMenu === item.name ? 'rotate-90' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  {hasSubItems && openMobileSubMenu === item.name && (
                    <div className="pl-4 pt-1 pb-2 flex flex-col space-y-1">
                      {item.subItems?.map((subItem) => {
                        const isSubActive = pathname.startsWith(subItem.href);
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block py-1 font-mono transition-colors ${isSubActive ? 'text-[#ffdc00]' : 'text-gray-300 hover:text-[#ffdc00]'}`}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileSubMenu(null);
                            }}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-3 flex flex-col space-y-2">
              <Link href="/register" className="w-full text-center bg-[#ffdc00] text-black font-semibold py-2 px-4 rounded-full hover:bg-yellow-500 transition-colors text-sm font-mono" onClick={() => setIsMenuOpen(false)}>
                REGISTRARME
              </Link>
              <Link href="/login" className="w-full text-center bg-white text-black font-semibold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors text-sm font-mono" onClick={() => setIsMenuOpen(false)}>
                INGRESAR
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 