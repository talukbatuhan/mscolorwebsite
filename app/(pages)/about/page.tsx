import type { Metadata } from 'next';
import About from './AboutPageClient'; 


export const metadata: Metadata = {
  title: 'Hakkımızda - Türkiye\'nin Boya Makinesi Üreticisi | MS Color',
  description: 'MS Color, Denizli\'de endüstriyel boya karıştırma makineleri üretiyor. Ar-Ge odaklı üretim, CE sertifikalı ürünler ve dünya çapında ihracat.',
  
  keywords: [
    'ms color hakkında',
    'türk boya makinesi üreticisi',
    'denizli boya fabrikası',
    'boya makinesi ar-ge',
    'ce sertifikalı boya makinesi',
    'boya makinesi ihracat'
  ],

  openGraph: {
    title: 'Hakkımızda | MS Color - Boya Makineleri Üreticisi',
    description: 'Denizli\'de boya karıştırma makineleri üretiyoruz',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'MS Color',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://mscolormachine.com/about',
  },
}
// page.tsx, varsayılan (default) olarak Sunucu Bileşenidir ve metadata'yı dışa aktarabilir.
export default function AboutPageServer() {
  // İstemci bileşenini burada render edin
  return <About />;
}