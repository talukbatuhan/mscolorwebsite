import React from 'react';
import './HeroSection.css'; 

function HeroSection() {
  return (
    <section className="hero-section" id="anasayfa">
      <div className="container">
        <h1>Devrim Niteliğinde Boya Makineleri</h1>
        <p>Endüstriyel boyama çözümlerinde lider teknoloji ve güvenilirlik.</p>
        <button className="cta-button">Ürünlerimizi Keşfet</button>
      </div>
    </section>
  );
}

export default HeroSection;