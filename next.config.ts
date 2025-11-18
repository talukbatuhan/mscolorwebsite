/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false, // Optimizasyon açık
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig