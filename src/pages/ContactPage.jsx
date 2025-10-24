import React from 'react';
import ContactForm from '../components/ContactForm';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';

function ContactPage() {
  const { t } = useTranslation(); 
  
  return (
    <section className="contact-page-section"> 
      <div className="container">


        {/* ANA İKİ SÜTUNLU YAPI - CSS ile yönetiliyor */}
        <div className="contact-main-grid">
            
            {/* SOL SÜTUN: HARİTA */}
            <div className="map-placeholder-container">
                <iframe 
                    title="Şirket Konumu Haritası"
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{border:0}}
                    src="https://www.google.com/maps/embed?pb=!4v1760727182043!6m8!1m7!1sK7_ic7RReCqDAxaAmQVFmw!2m2!1d37.83253279853004!2d29.07564207058428!3f261.4879942547236!4f-9.241529324499083!5f0.7820865974627469"
                    allowFullScreen="" 
                    aria-hidden="false" 
                    tabIndex="0"
                ></iframe>
            </div>

            {/* SAĞ SÜTUN: İLETİŞİM FORMU */}
            <div className="contact-form-wrapper">
                
                <h2>{t('contact_us_title')}</h2> 
                <ContactForm />
            </div>

        </div>
        
      </div>
    </section>
  );
}

export default ContactPage;