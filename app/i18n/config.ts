// app/i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Çeviri dosyalarını içe aktarın
import trTranslation from '@/app/i18n/locales/tr.json'; 
import enTranslation from '@/app/i18n/locales/en.json'; 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: trTranslation
      },
      en: {
        translation: enTranslation
      }
    },
    fallbackLng: 'tr',
    debug: false,
    interpolation: {
      escapeValue: false, // React zaten XSS'e karşı koruma sağlar
    },
    // Next.js'e uyumlu olması için varsayılan ad alanı ('default') kullanıldı
    ns: ['translation'],
    defaultNS: 'translation'
  });

export default i18n;