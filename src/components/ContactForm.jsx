// src/components/ContactForm.jsx 

"use client";

import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import './ContactForm.css'; 

function ContactForm() {
    const { t } = useTranslation();
    
    // --- 1. STATE MANAGEMENT ---
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '' 
    });
    const [status, setStatus] = useState(null); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    // --- 2. INPUT CHANGE HANDLER ---
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // --- 3. SUBMIT HANDLER (API CALL) ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null); 

        try {

            const response = await fetch('/api/contact', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                // Başarılı olursa, formu sıfırla ve durumu güncelle
                setStatus({ type: 'success', message: t('form_success_alert') });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                // Hata durumunda (400, 500 vb. kodlar)
                setStatus({ type: 'error', message: result.message || t('form_error_generic') });
            }
        } catch (error) {
            // Ağ veya bağlantı hatası (Vercel'de bu hata nadiren görülür)
            setStatus({ type: 'error', message: t('form_error_network') });
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false); 
        }
    };

    return (
        <form className="contact-form-luxury" onSubmit={handleSubmit}>
            {/* Durum Mesajlarını Görüntüleme */}
            {status && (
                <p 
                    style={{ 
                        color: status.type === 'success' ? 'green' : 'red', 
                        padding: '10px', 
                        border: `1px solid ${status.type === 'success' ? 'green' : 'red'}`,
                        borderRadius: '5px'
                    }}
                >
                    {status.message}
                </p>
            )}

            {/* İsim Alanı (Değerler ve olay yöneticileri bağlandı) */}
            <div className="form-group">
                <label htmlFor="name" className="visually-hidden">{t('form_label_name')}</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder={t('form_placeholder_name')} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className="luxury-input"
                />
            </div>

            {/* E-posta Alanı */}
            <div className="form-group">
                <label htmlFor="email" className="visually-hidden">{t('form_label_email')}</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder={t('form_placeholder_email')} 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="luxury-input" 
                />
            </div>

            {/* Telefon Alanı */}
            <div className="form-group">
                <label htmlFor="phone" className="visually-hidden">{t('form_label_phone')}</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder={t('form_placeholder_phone')} 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="luxury-input" 
                />
            </div>

            {/* Mesaj Alanı */}
            <div className="form-group">
                <label htmlFor="message" className="visually-hidden">{t('form_label_message')}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder={t('form_placeholder_message')} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className="luxury-textarea" 
                ></textarea>
            </div>

            <button type="submit" className="submit-button-luxury" disabled={isSubmitting}>
                {isSubmitting ? t('form_button_sending') : t('form_button_submit')}
            </button>
        </form>
    );
}

export default ContactForm;