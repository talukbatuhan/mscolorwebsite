// src/components/Header.jsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import './Header.css'; 

function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    
    // i18n hook'unu burada çağırıyoruz
    const { t, i18n } = useTranslation(); // *** Yeni Eklendi ***

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    };
    
    // Dil değiştirme işlevi
    const changeLanguage = (lng) => { // *** Yeni Eklendi ***
        i18n.changeLanguage(lng);
    };

    return (
        <header className="site-header">
            <div className="super-navbar-container">
                
                {/* LOGO ALANI - Sol Üst (Çeviriye gerek yok) */}
                <Link to="/" className="logo-link" onClick={closeMenu}> 
                    <img src={'/ms-color-logo.png'}
                    alt='Ms Color Logo'
                    className='header-logo'></img>
                    {/* Marka adını çeviriye alsak daha iyi olur (i18n.js'deki 'ms_color_name' anahtarını kullanırız) */}
                    <span className="color-span">MS COLOR</span> 
                </Link>
                
                {/* MASAÜSTÜ NAVİGASYON VE BUTONLAR */}
                <div className="desktop-nav-utility">
                    <nav className="desktop-main-nav">
                        <ul>
                            {/* Menü öğeleri için çeviri anahtarları kullanıyoruz */}
                            <li><Link to="/" onClick={closeMenu}>{t('nav_home')}</Link></li>
                            <li><Link to="/products" onClick={closeMenu}>{t('nav_products')}</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>{t('nav_about')}</Link></li>
                            <li><Link to="/contact" onClick={closeMenu}>{t('nav_contact')}</Link></li>
                        </ul>
                    </nav>

                    {/* DİL DEĞİŞTİRME BUTONLARI (super-action-button yerine daha mantıklı bir yapı) */}
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
                    
                    {/* HAMBURGER BUTONU */}
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

            {/* TAM EKRAN NAVİGASYON MENÜSÜ */}
            <nav id="main-navigation" className={`fullscreen-nav ${isOpen ? 'open' : ''}`}>
                <div className="menu-list-wrapper">
                    <ul className="fullscreen-menu-list">
                        {/* Mobil menü öğeleri için çeviri anahtarları kullanıyoruz */}
                        <li className="menu-item-wrapper"><Link to="/" onClick={closeMenu}>{t('nav_home')}</Link></li>
                        <li className="menu-item-wrapper"><Link to="/products" onClick={closeMenu}>{t('nav_products')}</Link></li>
                        <li className="menu-item-wrapper"><Link to="/about" onClick={closeMenu}>{t('nav_about')}</Link></li>
                        <li className="menu-item-wrapper"><Link to="/contact" onClick={closeMenu}>{t('nav_contact')}</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Header;