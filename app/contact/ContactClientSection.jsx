// app/contact/ContactClientSection.jsx
'use client'; 

import React from "react";
import ContactForm from '@/src/components/ContactForm.jsx';
import { useTranslation } from "react-i18next";
import './ContactPage.css';

export default function ContactClientSection() {
  const { t } = useTranslation();
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d482.1515923112698!2d29.075632845432526!3d37.83267708021564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7158e516f3c7f%3A0xe23ae3a96679efe9!2sMS%20COLOR!5e0!3m2!1str!2str!4v1761813759373!5m2!1str!2str"; // Test için geçici adres olduğunu varsayıyorum.

  return (
    <>
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-main-grid">
            <div className="map-placeholder-container">
              <iframe
                title={t('company_location_map') || "Şirket Konum Haritası"}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{border:0}}
                src={mapSrc}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
            <div className="contact-form-wrapper">
              <h1 className="page-main-title">{t('contact_us_title') || "İletişim"}</h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}