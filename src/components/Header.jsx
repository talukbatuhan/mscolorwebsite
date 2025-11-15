"use client"; // CRITICAL: Must be marked as a Client Component

import React, { useState } from 'react'; 
// NEXT.JS FIX: Use Link from 'next/link' for client-side navigation
import Link from 'next/link'; 

import { useTranslation } from 'react-i18next';
import './Header.css'; 

function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    
    // i18n hook is called here
    const { t, i18n } = useTranslation(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    };
    
    // Function to change language
    const changeLanguage = (lng) => { 
        i18n.changeLanguage(lng);
    };

    return (
        <header className="site-header">
            <div className="super-navbar-container">
                
                {/* LOGO AREA - Top Left (Navigation link uses next/link) */}
                <Link href="/" className="logo-link" onClick={closeMenu}> 
                    <img src={'/logo.png'}
                    alt='Ms Color Logo'
                    className='header-logo'></img>
                    {/*<span className="color-span">MS COLOR</span> */}
                </Link>
                
                {/* DESKTOP NAVIGATION AND BUTTONS */}
                <div className="desktop-nav-utility">
                    <nav className="desktop-main-nav">
                        <ul>
                            {/* Menu items use Link from 'next/link' */}
                            <li><Link href="/" onClick={closeMenu}>{t('nav_home')}</Link></li>
                            <li><Link href="/products" onClick={closeMenu}>{t('nav_products')}</Link></li>
                            <li><Link href="/about" onClick={closeMenu}>{t('nav_about')}</Link></li>
                            <li><Link href="/gallery" onClick={closeMenu}>{t('nav_gallery')}</Link></li>
                            <li><Link href="/contact" onClick={closeMenu}>{t('nav_contact')}</Link></li>
                        </ul>
                    </nav>

                    {/* LANGUAGE SWITCHER BUTTONS */}
                    <div className="language-switcher">
                        <button 
                            onClick={() => changeLanguage('tr')}
                            className={`lang-button ${i18n.language === 'tr' ? 'active-lang' : ''}`}
                        >
                            TR
                        </button>
                        <span className="lang-separator">|</span>
                        <button 
                            onClick={() => changeLanguage('en')}
                            className={`lang-button ${i18n.language === 'en' ? 'active-lang' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                    
                    {/* HAMBURGER BUTTON */}
                    <button 
                        className={`menu-toggle ${isOpen ? 'open' : ''}`} 
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="main-navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    
                </div>
            </div>

            {/* FULLSCREEN NAVIGATION MENU */}
            <nav id="main-navigation" className={`fullscreen-nav ${isOpen ? 'open' : ''}`}>
                <div className="menu-list-wrapper">
                    <ul className="fullscreen-menu-list">
                        {/* Mobile menu items use Link from 'next/link' */}
                        <li className="menu-item-wrapper"><Link href="/" onClick={closeMenu}>{t('nav_home')}</Link></li>
                        <li className="menu-item-wrapper"><Link href="/products" onClick={closeMenu}>{t('nav_products')}</Link></li>
                        <li className="menu-item-wrapper"><Link href="/about" onClick={closeMenu}>{t('nav_about')}</Link></li>
                        <li className="menu-item-wrapper"><Link href="/gallery" onClick={closeMenu}>{t('nav_gallery')}</Link></li>
                        <li className="menu-item-wrapper"><Link href="/contact" onClick={closeMenu}>{t('nav_contact')}</Link></li>
                    </ul>
                    {/*<a target='_blank' href="https://www.linkedin.com/company/orenda-ar-ge-m%C3%BChendi%CC%87sli%CC%87k/"><img src="/linkedin.png" alt="" /></a>*/}
                    <a target='_blank' href="https://www.linkedin.com/company/orenda-ar-ge-m%C3%BChendi%CC%87sli%CC%87k/"><img src="/linkedin.png" alt="" /></a>
                    
                </div>
            </nav>

        </header>
    );
}

export default Header;