// src/components/Header.jsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="site-header">
            <div className="super-navbar-container">
                
                {/* LOGO ALANI - Sol Üst */}
                <Link to="/" className="logo-link" onClick={closeMenu}> 
                    <img src={'/ms-color-logo.png'}
                    alt='Ms Color Logo'
                    className='header-logo'></img>
                    <span className="color-span">MS COLOR</span>
                </Link>
                
                {/* MASAÜSTÜ NAVİGASYON VE BUTONLAR */}
                <div className="desktop-nav-utility">
                    <nav className="desktop-main-nav">
                        <ul>
                            <li><Link to="/" onClick={closeMenu}>ANASAYFA</Link></li>
                            <li><Link to="/products" onClick={closeMenu}>ÜRÜNLER</Link></li>
                            <li><Link to="/about" onClick={closeMenu}>HAKKIMIZDA</Link></li>
                            <li><Link to="/contact" onClick={closeMenu}>İLETİŞİM</Link></li>
                        </ul>
                    </nav>

                    {/* Hellosuperheroes esintili özel buton */}
                    <button className="super-action-button">TR/EN</button>
                    
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
                        <li className="menu-item-wrapper"><Link to="/" onClick={closeMenu}>ANASAYFA</Link></li>
                        <li className="menu-item-wrapper"><Link to="/products" onClick={closeMenu}>ÜRÜNLER</Link></li>
                        <li className="menu-item-wrapper"><Link to="/about" onClick={closeMenu}>HAKKIMIZDA</Link></li>
                        <li className="menu-item-wrapper"><Link to="/contact" onClick={closeMenu}>İLETİŞİM</Link></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
}

export default Header;