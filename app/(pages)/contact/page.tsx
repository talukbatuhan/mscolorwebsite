// app/contact/page.tsx
import type { Metadata } from 'next'
import ContactMap from "@/app/components/ContactComponents/ContactMap";
import ContactForm from "@/app/components/ContactComponents/ContactForm";

export const metadata: Metadata= {
  title: 'İletişim - Boya Makinesi Fiyat Teklifi | MS Color Denizli',
  description: 'MS Color boya karıştırma makineleri için fiyat teklifi alın. Denizli merkez fabrikamızdan teknik destek ve satış danışmanlığı. Telefon: [TELEFON] - Email: [EMAIL]',
  
  keywords: [
    'ms color iletişim',
    'boya makinesi fiyat teklifi',
    'denizli boya makinesi',
    'ms color telefon',
    'boya makinesi satış',
    'teknik destek boya makinesi'
  ],

  openGraph: {
    title: 'İletişim | MS Color - Boya Makineleri',
    description: 'Boya karıştırma makineleri için fiyat teklifi ve teknik destek',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'MS Color',
  },

  twitter: {
    card: 'summary',
    title: 'İletişim | MS Color',
    description: 'Bize ulaşın - Boya makineleri için fiyat teklifi alın',
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://mscolor.com/contact',
  },
}

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 min-h-[calc(80vh)] flex justify-center items-center">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-2 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#182D51] p-2 sm:p-4 rounded-xl border-2 border-[#193770] h-[500px] flex flex-col justify-center">
            <ContactForm />
          </div>

          <div className="bg-white p-0 rounded-xl overflow-hidden h-[500px]">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}