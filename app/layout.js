import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ScrollToTop from '@/src/components/ScrollToTop'; 
import I18nProvider from '@/src/components/I18nProvider'; 

import { Oswald, Roboto } from 'next/font/google'; 

export const metadata = {
  title: {
    default: 'Ms Color - Boya Karıştırma Makineleri ve Endüstriyel Ar-Ge Çözümleri', 
    template: '%s | Ms Color', 
  },
  description: 'Ms Color, Denizli merkezli, boya karıştırma ve endüstriyel mikser teknolojilerinde uzmanlaşmış bir Ar-Ge firmasıdır. Yüksek performanslı boya karıştırıcı sistemleri üretiyoruz.',
  keywords: [
    'boya karıştırma makinesi', 
    'endüstriyel boya mikseri',
    'paint shaker', 
    'sanayi tipi boya karıştırıcı', 
    'Denizli boya makinesi üreticisi', 
    'endüstriyel boya makineleri',
    'Ar-Ge boya teknolojileri',
    'Ms Color Machine'
  ],
  openGraph: {
    title: 'Ms Color | Endüstriyel Boya Karıştırma Çözümleri',
    description: 'Denizli merkezli, yüksek performanslı boya karıştırma makineleri ve mikser sistemleri üreticisi Ar-Ge firması.', // OG açıklamasını güncelledik.
    url: 'https://mscolormachine.com',
    siteName: 'MsColorMachine',
    locale: 'tr_TR', 
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', 
    site: '@MsColorMachine', 
    title: 'Ms Color | Boya Karıştırma ve Mikser Teknolojileri',
    description: 'Boya karıştırma ve endüstriyel mikser sistemlerinde uzmanlaşmış, Denizli merkezli Ar-Ge ve üretim firması.',
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png', 
  }
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'], 
  subsets: ['latin'],
  variable: '--font-roboto', 
  display: 'swap', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${roboto.className}`}> 
      <body>
        <div className="app-container">
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