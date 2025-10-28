import '@/src/index.css'; 

import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ScrollToTop from '@/src/components/ScrollToTop'; 


import I18nProvider from '@/src/components/I18nProvider'; 


export const metadata = {
  title: 'MS Color | Endüstriyel Boyama Otomasyonu',
  description: 'Yüksek hassasiyetli boyama ve otomasyon çözümleri.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
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