// src/components/ContactForm.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // *** Yeni: Çeviri hook'u eklendi ***
import './ContactForm.css';

function ContactForm() {
    const { t, i18n } = useTranslation(); // *** Çeviri hook'u çağrıldı ***

    const handleSubmit = (e) => {
        e.preventDefault();
        // Çeviri anahtarı ile dinamik alert mesajı
        alert(t("form_success_alert")); 
        // Gerçek uygulamada burada API çağrısı yapılmalıdır.
    };

    return (
        <form className="contact-form-luxury" onSubmit={handleSubmit}>
            
            <div className="form-group">
                {/* label içeriği visually-hidden olduğu için burada görünmüyor, ancak çeviri anahtarı kullanıldı */}
                <label htmlFor="name" className="visually-hidden">{t('form_label_name')}</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    // placeholder için çeviri anahtarı kullanıldı
                    placeholder={t('form_placeholder_name')} 
                    required 
                    className="luxury-input"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="visually-hidden">{t('form_label_email')}</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    // placeholder için çeviri anahtarı kullanıldı
                    placeholder={t('form_placeholder_email')} 
                    required 
                    className="luxury-input" 
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="visually-hidden">{t('form_label_phone')}</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    // placeholder için çeviri anahtarı kullanıldı
                    placeholder={t('form_placeholder_phone')} 
                    className="luxury-input" 
                />
            </div>

            <div className="form-group">
                <label htmlFor="message" className="visually-hidden">{t('form_label_message')}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    // placeholder için çeviri anahtarı kullanıldı
                    placeholder={t('form_placeholder_message')} 
                    required 
                    className="luxury-textarea" 
                ></textarea>
            </div>

            <button type="submit" className="submit-button-luxury">
                {/* button metni için çeviri anahtarı kullanıldı */}
                {t('form_button_submit')}
            </button>
        </form>
    );
}

export default ContactForm;