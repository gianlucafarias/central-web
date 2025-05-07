/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // Puedes agregar más remotePatterns aquí para otros dominios de imágenes
    ],
  },
  // Otras configuraciones que puedas tener
}

module.exports = nextConfig 