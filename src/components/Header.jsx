import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="site-header">
      <div className="container">
        {/* LOGO VE BAŞLIK KAPSAYICISI */}
        <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}> 
          <img src="/src/public/ms-color-logo.png" alt="Ms Color Logo" className="header-logo" /> {/* LOGO BURADA! */}
          <span className="logo-text">MS <span>Color</span></span> 
        </Link>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-expanded={isOpen}>
            {isOpen ? 'X' : '☰'}
        </button>

        <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={toggleMenu}>Anasayfa</Link></li>
            <li><Link to="/hakkimizda" onClick={toggleMenu}>Hakkımızda</Link></li>
            <li><Link to="/urunler" onClick={toggleMenu}>Ürünler</Link></li>
            <li><Link to="/iletisim" onClick={toggleMenu}>İletişim</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;