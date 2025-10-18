// src/components/Header.jsx

import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  // ... (toggleMenu state ve fonksiyonları değişmedi)

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}> 
          {/* LOGO YOLU DÜZELTİLDİ: Base URL kullanılıyor */}
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Ms Color Logo" 
            className="header-logo" 
          />
          <span className="logo-text">MS <span>Color</span></span> 
        </Link>
        
        {/* ... (Geri kalan menü butonu ve navigasyon kodu değişmedi) */}
      </div>
    </header>
  );
}

export default Header;