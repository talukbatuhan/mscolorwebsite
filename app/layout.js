import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ScrollToTop from '@/src/components/ScrollToTop'; 
import I18nProvider from '@/src/components/I18nProvider'; 

import { Oswald } from 'next/font/google';

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
    icon: '/ms-color-logo.png',
    shortcut: '/ms-color-logo.png',
    apple: '/ms-color-logo.png', 
  }
};

const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-oswald',
});

export default function RootLayout({ children }) {
  return (
    // Font ayarı, html etiketine className olarak eklenir
    <html lang="tr" className={oswald.className}> 
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
