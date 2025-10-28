"use client";
import { I18nextProvider } from 'react-i18next';
// Hata çözümü: '@/src/i18n' yerine standart göreceli yol kullanıldı.
import i18n from '../i18n'; 
import React from 'react';

// This provider component is necessary to wrap the entire client-side section
// that uses the useTranslation hook (e.g., Header, Footer, MachineGrid).

/**
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export default function I18nProvider({ children }) {
  // We use I18nextProvider to ensure all descendant components have access to i18n context
  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}
