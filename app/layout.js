import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ScrollToTop from '@/src/components/ScrollToTop'; 
import I18nProvider from '@/src/components/I18nProvider'; 

import { Oswald, Montserrat } from 'next/font/google'; // Montserrat'ı buraya ekledik

// Next.js App Router, bu export'u otomatik olarak <head> etiketine çevirir.
export const metadata = {
  title: {
    default: 'Ms Color - Anasayfa',
    template: '%s | Ms Color', // Diğer sayfaların başlıkları bu şablona göre oluşur.
  },
  description: 'Ms Color olarak size en yeni ürünleri ve çözümleri sunuyoruz.',
  keywords: ['renk', 'web sitesi', 'ürünler', 'teknoloji'],
  
  // Sosyal medya paylaşım ayarları
  openGraph: {
    title: 'Ms Color',
    description: 'Son teknoloji boya makineleri',
    url: 'https://mscolormachine.com',
    siteName: 'MsColorMachine',
    locale: 'tr_TR', // Genellikle TR büyük harf ile yazılır
    type: 'website',
  },
  
  // Favicon ve Ikon ayarları (app/ klasöründe bu dosyaların var olduğunu varsayar)
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png', 
  }
};

// 1. Oswald fontu tanımı (Ana font olarak kalmaya devam ediyor)
const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-oswald', // Variable tanımı eklendi (kullanılmasa bile iyi uygulama)
});

/** 
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat', 
  display: 'swap',
});
*/
// ${montserrat.variable}

export default function RootLayout({ children }) {
  return (

    <html lang="tr" className={`${oswald.className}`}> 
      <body>
        <div className="app-container">
          {/* I18nProvider ve Client Component'ler (Header, Footer, ScrollToTop) */}
          <I18nProvider>
              <ScrollToTop /> 
              <Header />
              <main>
                {children}
              </main>
              <Footer />
          </I18nProvider>
        </div>
      </body>
    </html>
  );
}