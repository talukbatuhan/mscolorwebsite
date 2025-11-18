// components/Header/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next'; // 🎯 i18next hook'u eklendi

const Header: React.FC = () => {
    // 🎯 i18next hook'undan t (çeviri) ve i18n (kütüphane objesi) alınır
    const { t, i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    // ⚠️ currentLanguage state'i artık i18n.language tarafından yönetildiği için kaldırıldı
    const [scrolled, setScrolled] = useState(false);

    // Scroll efekti için
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // 🎯 Dili değiştiren fonksiyon, i18n kütüphanesini kullanır
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        closeMenu(); // Mobil menü açıksa dil değiştirince kapat
    };

    // Menü açıkken body scroll'unu engelle
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // 🎯 Navigasyon elemanları artık çeviri anahtarlarını (key) kullanıyor
    const navItems = [
        { href: '/', key: 'nav_home' }, // Varsayımsal key
        { href: '/products', key: 'nav_products' },
        { href: '/about', key: 'nav_about' },
        { href: '/gallery', key: 'nav_gallery' },
        { href: '/contact', key: 'nav_contact' }
    ];

    return (
        <>
            <header 
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? 'bg-[#193770] shadow-lg py-2' : 'bg-[#193770] py-4'
                }`}
            >
                <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    {/* LOGO */}
                    <Link 
                        href="/" 
                        className="flex items-center z-60 relative"
                        onClick={closeMenu}
                    >
                        <div className="relative w-24 h-12 sm:w-32 sm:h-14 md:w-36 md:h-16 transition-all duration-300">
                            <Image
                                src="/logo.png"
                                alt="Ms Color Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>
                    
                    {/* DESKTOP NAV & LANGUAGE SWITCHER */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        
                        {/* Desktop Navigation */}
                        <nav>
                            <ul className="flex items-center gap-6 xl:gap-8">
                                {navItems.map((item) => (
                                    <li key={item.href}>
                                        <Link 
                                            href={item.href}
                                            className="relative group text-base xl:text-lg font-bold text-white uppercase transition-colors duration-200 hover:text-[#fdbb2d] py-2"
                                        >
                                            {/* 🎯 Çeviri fonksiyonu ile metni çevirin */}
                                            {t(item.key)}
                                            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#fdbb2d] transition-all duration-300 ease-out group-hover:w-full" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Language Switcher */}
                        <div className="flex items-center gap-2 border-l-2 border-white/30 pl-6">
                            <button
                                onClick={() => changeLanguage('tr')}
                                className={`text-base xl:text-lg font-bold uppercase px-3 py-1 transition-all duration-200 ${
                                    // 🎯 i18n.language ile aktif dili kontrol edin
                                    i18n.language === 'tr'
                                        ? 'text-[#fdbb2d] border-b-2 border-[#fdbb2d]'
                                        : 'text-white hover:text-[#fdbb2d]'
                                }`}
                            >
                                TR
                            </button>
                            <span className="text-white/70 text-lg">|</span>
                            <button
                                onClick={() => changeLanguage('en')}
                                className={`text-base xl:text-lg font-bold uppercase px-3 py-1 transition-all duration-200 ${
                                    // 🎯 i18n.language ile aktif dili kontrol edin
                                    i18n.language === 'en'
                                        ? 'text-[#fdbb2d] border-b-2 border-[#fdbb2d]'
                                        : 'text-white hover:text-[#fdbb2d]'
                                }`}
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* HAMBURGER BUTTON (Mobile & Tablet) */}
                    <button
                        className="lg:hidden relative w-10 h-10 z-60 focus:outline-none group"
                        onClick={toggleMenu}
                        aria-label="Menu"
                        aria-expanded={isOpen}
                    >
                        <div className="absolute inset-0 flex flex-col justify-center items-center gap-1.5">
                            <span 
                                className={`block w-7 h-[3px] bg-white rounded-sm transition-all duration-300 ${
                                    isOpen ? 'rotate-45 translate-y-[9px]' : ''
                                }`}
                            />
                            <span 
                                className={`block w-7 h-[3px] bg-white rounded-sm transition-all duration-300 ${
                                    isOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            <span 
                                className={`block w-7 h-[3px] bg-white rounded-sm transition-all duration-300 ${
                                    isOpen ? '-rotate-45 -translate-y-[9px]' : ''
                                }`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* MOBILE FULLSCREEN MENU */}
            <div
                className={`fixed inset-0 bg-[#193770] z-40 lg:hidden transition-all duration-500 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className={`h-full flex flex-col justify-center transition-transform duration-500 ${
                    isOpen ? 'translate-y-0' : '-translate-y-full'
                }`}>
                    
                    {/* Mobile Navigation */}
                    <nav className="flex-1 flex items-center justify-center px-6">
                        <ul className="space-y-2 w-full max-w-md">
                            {navItems.map((item, index) => (
                                <li 
                                    key={item.href}
                                    className="border-b-2 border-white/20 last:border-0"
                                    style={{
                                        transitionDelay: isOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="block py-4 text-2xl sm:text-3xl font-extrabold text-white text-center transition-all duration-300 hover:bg-white hover:text-[#193770] hover:scale-105"
                                    >
                                        {/* 🎯 Metni çevirin */}
                                        {t(item.key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Language Switcher */}
                    <div className="pb-12 flex justify-center gap-4">
                        <button
                            onClick={() => changeLanguage('tr')}
                            className={`text-xl font-bold uppercase px-6 py-3 rounded-lg transition-all duration-200 ${
                                i18n.language === 'tr'
                                    ? 'bg-[#fdbb2d] text-[#193770]'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {/* 🎯 Çeviri key'leri kullanılabilir: t('language.turkish') */}
                            TÜRKÇE
                        </button>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`text-xl font-bold uppercase px-6 py-3 rounded-lg transition-all duration-200 ${
                                i18n.language === 'en'
                                    ? 'bg-[#fdbb2d] text-[#193770]'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                            }`}
                        >
                            {/* 🎯 Çeviri key'leri kullanılabilir: t('language.english') */}
                            ENGLISH
                        </button>
                    </div>
                </div>
            </div>

            {/* SPACER (Header için boşluk) */}
            <div className="h-16 sm:h-20 md:h-24" />
        </>
    );
};

export default Header;