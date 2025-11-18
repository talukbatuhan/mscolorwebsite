// app/components/I18nProvider.tsx
"use client";

import { I18nextProvider } from 'react-i18next';
// Kendi yapılandırma dosyanızı içe aktarın
import i18n from '@/app/i18n/config'; 

// Bu bileşen, uygulamanızın i18n yeteneğine sahip olmasını sağlar.
export default function I18nProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}