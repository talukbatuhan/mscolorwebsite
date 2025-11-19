// 🚀 src/components/Footer.tsx

"use client";
import React from 'react';
import Link from 'next/link'; 
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    // TEMEL SABİT METİNLER (i18n yerine)
    const texts = {
        logoAlt: 'Ms Color Logo',
        slogan: 'Renklerinizle Sınırları Aşın.',
        copyrightText: 'Tüm hakları saklıdır.',
        linksHeader: 'Hızlı Bağlantılar',
        contactHeader: 'İletişim',
        addressLine1: 'Bozburun Mahallesi Ahmet Nazif Zorlu Sanayi Sitesi 7153 Sokak No 15',
        addressLine2: 'Merkezefendi / DENİZLİ',
        phoneNumber: '+90 555 123 45 67',
        emailAddress: 'info@mscolor.com',
        navHome: 'Anasayfa',
        navProducts: 'Ürünler',
        navAbout: 'Hakkımızda',
        navGallery: 'Galeri',
        navContact: 'İletişim',
    };


    const siteFooterClasses = "bg-[#193770] text-[#ecf0f1] py-12 px-5 md:px-10"; 
    const footerContainerClasses = "max-w-[1200px] mx-auto flex justify-between gap-10 flex-wrap"; 
    const footerColumnClasses = "flex-1 min-w-[250px] md:text-left text-center"; 
    const brandTitleClasses = "flex items-center md:justify-start justify-center"; 
    const brandLogoClasses = "w-32 h-32 object-contain"; 
    const sloganClasses = "text-sm text-white"; 
    const copyrightClasses = "text-xs text-white mt-4"; 
    const h4Classes = "text-xl text-white mb-4 font-extrabold"; 
    const quickLinksListClasses = "list-none pl-0 font-normal m-0 md:text-left mx-auto md:mx-0 w-fit";
    const quickLinksLiClasses = "mb-2"; 
    const quickLinksAnchorClasses = "text-[#ecf0f1] no-underline transition-colors duration-300 hover:text-white"; 

    // İletişim
    const contactInfoPClasses = "text-sm text-[#ecf0f1]"; 
    const contactIconClasses = "inline-block text-white"; 

    return (
        <footer className={siteFooterClasses}>
            <div className={footerContainerClasses}>
                <div className={`${footerColumnClasses} brand-info`}>
                    <div className={brandTitleClasses}>
                        <img src="/logo.png" alt={texts.logoAlt} className={brandLogoClasses} />
                    </div>
                    <p className={sloganClasses}>{t('nav_slogan')}</p> 
                    <p className={copyrightClasses}>&copy; {currentYear} Ms Color. {t('copyright_text')}</p>
                </div>

                <div className={`${footerColumnClasses} quick-links`}>
                    <h4 className={h4Classes}>{t('quick_links')}</h4>
                    <ul className={quickLinksListClasses}>
                        <li className={quickLinksLiClasses}><Link href="/" className={quickLinksAnchorClasses}>{t('nav_home')}</Link></li>
                        <li className={quickLinksLiClasses}><Link href="/products" className={quickLinksAnchorClasses}>{t('nav_products')}</Link></li>
                        <li className={quickLinksLiClasses}><Link href="/about" className={quickLinksAnchorClasses}>{t('nav_about')}</Link></li>
                        <li className={quickLinksLiClasses}><Link href="/gallery" className={quickLinksAnchorClasses}>{t('nav_gallery')}</Link></li>
                        <li className={quickLinksLiClasses}><Link href="/contact" className={quickLinksAnchorClasses}>{t('nav_contact')}</Link></li>
                    </ul>
                </div>

                <div className={`${footerColumnClasses} contact-info`}>
                    <h4 className={h4Classes}>{t('contact')}</h4>

                    <p className={contactInfoPClasses}>
                       
                        <i className={`${contactIconClasses} fas fa-map-marker-alt`}></i>
                        {texts.addressLine1} <br />
                        <span className=" block">{texts.addressLine2}</span> 
                    </p>
                    
                    <p className={contactInfoPClasses}>
                        <i className={`${contactIconClasses} fas fa-phone`}></i> {texts.phoneNumber}
                    </p>
                    
                    <p className={contactInfoPClasses}>
                        <i className={`${contactIconClasses} fas fa-envelope`}></i> {texts.emailAddress}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;