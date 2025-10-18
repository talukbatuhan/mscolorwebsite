import React from 'react';
import './Footer.css'; // Footer için CSS dosyasını import ediyoruz

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Sol Sütun: Logo ve Marka */}
        <div className="footer-column brand-info">
          <div className="brand-title-footer">
            <img src="/src/public/ms-color-logo.png" alt="Ms Color Logo" className="brand-logo-footer" />
            <h3>Ms Color</h3>
          </div>
          <p className="slogan">Endüstriyel Boyama Sistemlerinde Güven ve Teknoloji.</p>
          <p className="copyright">&copy; {currentYear} Ms Color. Tüm hakları saklıdır.</p>
        </div>

        {/* Orta Sütun: Hızlı Bağlantılar */}
        <div className="footer-column quick-links">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li><a href="#home">Anasayfa</a></li>
            <li><a href="#products">Ürünler</a></li>
            <li><a href="#about">Hakkımızda</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </div>

        {/* Sağ Sütun: İletişim */}
        <div className="footer-column contact-info">
          <h4>Bize Ulaşın</h4>
          <p>
            <i className="fas fa-map-marker-alt"></i> Organize Sanayi Bölgesi, Ankara/Türkiye
          </p>
          <p>
            <i className="fas fa-phone"></i> +90 555 123 45 67
          </p>
          <p>
            <i className="fas fa-envelope"></i> info@mscolor.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;