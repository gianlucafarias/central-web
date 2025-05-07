/** @type {import('next').NextConfig} */
const nextConfig = {
  // Añadir configuración de ESLint aquí
  eslint: {
    // ADVERTENCIA: Esto permite builds de producción exitosos incluso
    // si tu proyecto tiene errores de ESLint.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig; 