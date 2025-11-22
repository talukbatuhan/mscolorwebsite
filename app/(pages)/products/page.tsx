import React from 'react'
import {MachineGrid} from '@/app/components/GlobalComponents/MachineGrid';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boya Karıştırma Makineleri - Dispenser, GyroMix, MasterTint | MS Color',
  description: 'Denizli\'de üretilen yüksek hassasiyetli endüstriyel boya karıştırma makineleri. Dispenser, GyroMix mikser ve MasterTint renk dozajlama sistemleri. Fiyat teklifi için hemen iletişime geçin.',
  
  keywords: [
    'boya karıştırma makinesi',
    'boya mikseri fiyatları',
    'endüstriyel boya karıştırıcı',
    'paint dispenser',
    'gyromix mikser',
    'mastertint dozajlama',
    'boya makinesi satış',
    'denizli boya makineleri',
    'paint shaker',
    'tinting machine'
  ],

  openGraph: {
    title: 'Profesyonel Boya Karıştırma Makineleri | MS Color',
    description: 'Yüksek hassasiyetli boya dozajlama ve karıştırma sistemleri. Türkiye\'nin lider boya makinesi üreticisi.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'MS Color',
    images: [
      {
        url: '/logo.png', 
        width: 974,
        height: 256,
        alt: 'MS Color Boya Karıştırma Makineleri',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Boya Karıştırma Makineleri | MS Color',
    description: 'Profesyonel boya dozajlama ve mikser sistemleri',
    images: ['/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://mscolormachine.com/products',
    languages: {
      'tr-TR': 'https://mscolormachine.com/tr/products',
      'en-US': 'https://mscolormachine.com/en/products',
    },
  },

  other: {
    'geo.region': 'TR-20',
    'geo.placename': 'Denizli',
    'geo.position': '37.774929;29.088680', // MS Color'ın gerçek koordinatları
  },
}

const page = () => {
  return (
          <div className="min-h-screen bg-[#182d51]">
            <MachineGrid showHero={false} />
          </div>
  );
}

export default page
