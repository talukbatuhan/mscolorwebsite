// app/layout.tsx
import type { Metadata } from 'next';
import I18nProvider from './components/GlobalComponents/I18nProvider';
import './globals.css';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';

export const metadata: Metadata = {
  title: 'Ms Color - Machines',
  description: 'Color Solutions for Tomorrow',
};

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