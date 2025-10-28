"use client";
import React from 'react';
import Link from 'next/link'; // next/link eklendi
import { useTranslation } from 'react-i18next'; // *** Yeni: Çeviri hook'u eklendi ***
import './Footer.css'; // Footer için CSS dosyasını import ediyoruz

function Footer() {
    const { t } = useTranslation(); // *** Çeviri hook'u çağrıldı ***
    const currentYear = new Date().getFullYear();

    // Not: İletişim bilgileri ve navigasyon bağlantıları (href'ler hariç) i18n üzerinden alınacak

    return (
        <footer className="site-footer">
            <div className="footer-container">
                
                {/* Sol Sütun: Logo ve Marka */}
                <div className="footer-column brand-info">
                    <div className="brand-title-footer">
                        <img src="/ms-color-logo.png" alt={t('footer_logo_alt')} className="brand-logo-footer" />
                        <h3>MS COLOR</h3>
                    </div>
                    {/* Slogan */}
                    <p className="slogan">{t('footer_slogan')}</p> 
                    {/* Copyright */}
                    <p className="copyright">&copy; {currentYear} Ms Color. {t('footer_copyright_text')}</p>
                </div>

                {/* Orta Sütun: Hızlı Bağlantılar */}
                <div className="footer-column quick-links">
                    {/* Başlık */}
                    <h4>{t('footer_links_h4')}</h4>
                    <ul>
                        <li><Link href="/">{t('nav_home')}</Link></li>
                        <li><Link href="/products">{t('nav_products')}</Link></li>
                        <li><Link href="/about">{t('nav_about')}</Link></li>
                        <li><Link href="/contact">{t('nav_contact')}</Link></li>
                    </ul>
                </div>

                {/* Sağ Sütun: İletişim */}
                <div className="footer-column contact-info">
                    {/* Başlık */}
                    <h4>{t('footer_contact_h4')}</h4>
                    <p className="footer-address">
                        <i className="fas fa-map-marker-alt"></i>
                        {/* Adres 1 ve 2 satırlarını çeviri anahtarlarıyla birleştiriyoruz */}
                        {t('footer_address_line1')} <br />
                        {t('footer_address_line2')}
                    </p>
                    <p className="footer-phone">
                        <i className="fas fa-phone"></i> {t('footer_phone_number')}
                    </p>
                    <p className="footer-email">
                        <i className="fas fa-envelope"></i> {t('footer_email_address')}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;