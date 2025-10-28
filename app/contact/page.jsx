"use client";

import React from "react";
import Head from 'next/head';
import ContactForm from '@/src/components/ContactForm.jsx';
import { useTranslation } from "react-i18next";
import './ContactPage.css';

function ContactPage() {
  const { t } = useTranslation();
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3747.4897484157104!2d29.079536349129796!3d37.83109651022775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1761656578019!5m2!1str!2str"; 


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

export default ContactPage;