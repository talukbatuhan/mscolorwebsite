import React from 'react';
import './CtaSection.css';

function CtaSection() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Projeniz İçin En Uygun Çözümü Bulalım</h2>
        <p>Boya makinelerimiz hakkında daha fazla bilgi almak veya özel bir teklif almak için bizimle iletişime geçin.</p>
        <a href="#iletisim" className="cta-button secondary">Bize Ulaşın</a>
      </div>
    </section>
  );
}

export default CtaSection;