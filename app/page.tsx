// app/page.tsx

import type { Metadata } from 'next';

import HomePageClient from '@/HomePageClient'; 


export const metadata: Metadata = {
    title: 'MS Color - Profesyonel Boya Karıştırma Makineleri | Denizli',
    description: 'Türkiye\'nin önde gelen boya karıştırma makinesi üreticisi. Dispenser, GyroMix mikser ve MasterTint dozajlama sistemleri. CE sertifikalı, yüksek hassasiyetli çözümler.',
    
    keywords: [
        'boya karıştırma makinesi',
        'paint tinting machine',
        'boya mikseri',
        'dispenser makinesi',
        'gyromix',
        'mastertint',
        'denizli boya makinesi',
        'endüstriyel karıştırıcı'
    ],

    openGraph: {
        title: 'MS Color | Boya Karıştırma Makineleri Üreticisi',
        description: 'Profesyonel boya dozajlama ve karıştırma sistemleri',
        type: 'website',
        locale: 'tr_TR',
        url: 'https://mscolormachine.com',
        siteName: 'MS Color',
        images: [
            {
                url: '/og-home.jpg',
                width: 1200,
                height: 630,
                alt: 'MS Color Ana Sayfa',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'MS Color | Boya Karıştırma Makineleri',
        description: 'Türkiye\'nin önde gelen boya makinesi üreticisi',
        images: ['/logo.png'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },

    verification: {
        google: 'your-google-verification-code', // Google Search Console'dan alınacak
        yandex: 'your-yandex-verification-code',
    },

    alternates: {
        canonical: 'https://mscolormachine.com',
    },
}

export default function Home() {
    return <HomePageClient />;
}