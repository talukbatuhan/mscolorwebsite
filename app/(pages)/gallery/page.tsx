// app/gallery/page.tsx
// Bu dosya Next.js'te bir route (sayfa) bileşenini temsil eder.

import React from 'react';
// Ana Galeri Uygulamamızı components dizininden import ediyoruz.
// Lütfen yolu kendi dosya yapınıza göre ayarlayın (örneğin: "@/components/Gallery/GalleryApp").
import GalleryApp from '@/app/components/Gallery/GalleryApp'; 
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri - Boya Makineleri Fotoğraf ve Videolar | MS Color',
  description: 'MS Color boya karıştırma makineleri galerisi. GyroMix, Dispenser ve MasterTint ürünlerinin çalışma videoları ve fotoğrafları.',
  
  keywords: [
    'boya makinesi görselleri',
    'gyromix video',
    'dispenser fotoğraf',
    'mastertint görsel',
    'boya makinesi çalışma videosu'
  ],

  openGraph: {
    title: 'Galeri | MS Color Boya Makineleri',
    description: 'Ürünlerimizin fotoğraf ve videolarını inceleyin',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'MS Color',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://mscolor.com/gallery',
  },
}


export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <GalleryApp />
    </main>
  );
}