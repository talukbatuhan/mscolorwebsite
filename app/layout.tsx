// app/layout.tsx
import type { Metadata } from 'next';
import I18nProvider from './components/GlobalComponents/I18nProvider';
import './globals.css';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://mscolormachine.com'),

  verification: {
    google: 'google40e8da556df0c1df', 
  },
  
  title: {
    default: 'MS Color | Boya Karıştırma Makineleri',
    template: '%s | MS Color',
  },

  description: 'Profesyonel boya karıştırma makineleri üreticisi. Dispenser, GyroMix ve MasterTint çözümleri.',

  applicationName: 'MS Color',
  
  authors: [
    { name: 'MS Color' },
    { name: 'MS Color Mühendislik', url: 'https://mscolormachine.com' },
  ],

  generator: 'Next.js',
  
  keywords: [
    'boya karıştırma makinesi',
    'paint tinting machine',
    'boya mikseri',
    'paint dispenser',
    'gyromix',
    'mastertint',
    'denizli',
    'türkiye'
  ],

  creator: 'MS Color',
  publisher: 'MS Color',

  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mscolormachine.com',
    siteName: 'MS Color',
    title: 'MS Color | Boya Karıştırma Makineleri',
    description: 'Profesyonel boya dozajlama ve karıştırma sistemleri',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico' },
    ],
    apple: [
      { url: '/favicon.ico' },
    ],
  },

  category: 'Industrial Equipment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}