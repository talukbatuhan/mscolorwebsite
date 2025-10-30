// app/about/page.js

import AboutPageClient from './AboutPageClient'; 
import { headers } from 'next/headers'; 

const companyName = "MS Color";
const founderName = "Malik Ekicim";
const foundingYear = 2020;

export const metadata = {
  title: `${companyName} - Hikayemiz ve Değerlerimiz`,
  description: `${companyName}, ${foundingYear} yılından beri kaliteli çözümler sunan bir teknoloji şirketidir. Vizyonumuz, Misyonumuz ve Değerlerimizi keşfedin.`,
  keywords: ['Ms Color', 'şirket bilgileri', 'kurucu Snorlax', 'vizyon', 'misyon', 'değerler', 'kurumsal'],
};

export default function AboutPageServer() {
  return (
    <>
      <AboutPageClient />
    </>
  );
}