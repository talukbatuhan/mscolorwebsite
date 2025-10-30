// app/contact/page.js
import ContactClientSection from './ContactClientSection'; 

export const metadata = {
  title: 'Bize Ulaşın - MS Color Websitesi',
  description: 'Ms Color ile iletişime geçin. Müşteri hizmetleri ve destek ekibimizle hızlıca görüşün.',
  keywords: ['iletişim', 'telefon', 'adres', 'destek', 'müşteri hizmetleri'],
};


export default function ContactPage() {
  return <ContactClientSection />;
}