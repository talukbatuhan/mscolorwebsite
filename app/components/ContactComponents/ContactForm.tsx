"use client";

import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next';

// --- 1. TYPE DEFINITIONS ---
interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface Status {
    type: 'success' | 'error';
    message: string;
}

const ContactForm: React.FC = () => {
    
    // 1. i18n hook'unu kullanma
    const { t } = useTranslation();
    
    // --- 2. STATE MANAGEMENT ---
    const [formData, setFormData] = useState<FormData>({ 
        name: '', 
        email: '', 
        phone: '', 
        message: '' 
    });
    const [status, setStatus] = useState<Status | null>(null); 
    const [isSubmitting, setIsSubmitting] = useState(false); 

    // --- 3. INPUT CHANGE HANDLER ---
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // --- 4. SUBMIT HANDLER (API CALL) ---
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null); 

        // Not: Gerçek Next.js API rotasına istek gönderiliyor
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
                // E-posta gönderimi başarılı
                setStatus({ type: 'success', message: t('form_success_alert') });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                // API'den gelen mesajı veya genel hata çevirisini kullan
                setStatus({ type: 'error', message: result.message || t('form_error_generic') });
            }
        } catch (error) {
            // Ağ hatası çevirisini kullan
            setStatus({ type: 'error', message: t('form_error_network') });
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false); 
        }
    };

    // --- 5. TAILWIND SINIFLARI ---
    
    // Input/Textarea Base Styling
    const inputBaseClasses = "w-full p-3.5 md:p-4 border border-gray-300 rounded-lg text-lg text-gray-800 bg-gray-50 shadow-sm transition-all duration-300 ease-in-out box-border placeholder-gray-500";
    
    // Input/Textarea Focus Styling (using primary color #193770)
    const inputFocusClasses = "focus:border-[#193770] focus:ring-4 focus:ring-[#193770]/40 focus:outline-none focus:bg-white";

    // Submit Button Styling
    const submitButtonBaseClasses = "block w-full py-4 bg-[#193770] text-white border-none rounded-lg text-xl cursor-pointer transition-all duration-300 ease-in-out font-bold tracking-wider shadow-lg";
    
    // Submit Button Hover/Disabled Styling
    const submitButtonInteractiveClasses = "hover:bg-[#152e5d] hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed";

    // Status Message Styling
    const statusSuccessClasses = "p-3 mb-4 rounded-md text-sm border border-green-600 text-green-700 bg-green-50";
    const statusErrorClasses = "p-3 mb-4 rounded-md text-sm border border-red-600 text-red-700 bg-red-50";

    return ( 

        <form 

            className="w-full max-w-lg mx-auto px-1 sm:px-2 mt-0 bg-[#182D51]" 
            onSubmit={handleSubmit}
        >
            
            {/* Durum Mesajlarını Görüntüleme */}
            {status && (
                <p className={status.type === 'success' ? statusSuccessClasses : statusErrorClasses}>
                    {status.message}
                </p>
            )}

            <div className="mb-3.5">
                {/* t() ile label çevirisi */}
                <label htmlFor="name" className="sr-only">{t('form_label_name')}</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    // t() ile placeholder çevirisi
                    placeholder={t('form_placeholder_name')} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    className={`${inputBaseClasses} ${inputFocusClasses}`}
                />
            </div>

            <div className="mb-3.5">
                {/* t() ile label çevirisi */}
                <label htmlFor="email" className="sr-only">{t('form_label_email')}</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    // t() ile placeholder çevirisi
                    placeholder={t('form_placeholder_email')} 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`${inputBaseClasses} ${inputFocusClasses}`}
                />
            </div>

            <div className="mb-3.5">
                {/* t() ile label çevirisi */}
                <label htmlFor="phone" className="sr-only">{t('form_label_phone')}</label>
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    // t() ile placeholder çevirisi
                    placeholder={t('form_placeholder_phone')} 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={`${inputBaseClasses} ${inputFocusClasses}`}
                />
            </div>

            {/* Mesaj Alanı */}
            <div className="mb-5"> 
                {/* t() ile label çevirisi */}
                <label htmlFor="message" className="sr-only">{t('form_label_message')}</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    // t() ile placeholder çevirisi
                    placeholder={t('form_placeholder_message')} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    className={`resize-y min-h-[120px] ${inputBaseClasses} ${inputFocusClasses}`} 
                ></textarea>
            </div>

            <button 
                type="submit" 
                className={`${submitButtonBaseClasses} ${submitButtonInteractiveClasses}`} 
                disabled={isSubmitting}
            >
                {/* t() ile buton metni çevirisi */}
                {isSubmitting ? t('form_button_sending') : t('form_button_submit')}
            </button>
        </form>
    );
}

export default ContactForm;