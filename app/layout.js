import '@/src/index.css'; 
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import ScrollToTop from '@/src/components/ScrollToTop'; 
import I18nProvider from '@/src/components/I18nProvider'; 

import { Oswald } from 'next/font/google';

const oswald = Oswald({
  weight: ['200', '300', '400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-oswald',
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={oswald.className}> 
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
