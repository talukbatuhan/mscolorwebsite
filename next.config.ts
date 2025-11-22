/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Optimizasyon açık
    formats: ['image/webp', 'image/avif'],
    // YouTube görselleri için gerekli izin ayarı:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig