// app/gallery/page.tsx
// Bu dosya Next.js'te bir route (sayfa) bileşenini temsil eder.

import React from 'react';
// Ana Galeri Uygulamamızı components dizininden import ediyoruz.
// Lütfen yolu kendi dosya yapınıza göre ayarlayın (örneğin: "@/components/Gallery/GalleryApp").
import GalleryApp from '@/app/components/Gallery/GalleryApp'; 

export const metadata = {
  title: 'Galeri ve Medya Kaynakları | Şirket Adı',
  description: 'Şirketimizin ürün ve etkinlik görselleri ile videolarını inceleyin.',
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryApp />
    </main>
  );
}