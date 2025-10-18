import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <section className="about-section" id="hakkimizda">
      <div className="container">
        <h2>Kimdir Biz?</h2>
        <p>Yılların deneyimiyle, endüstriyel boyama sektörüne en yenilikçi ve güvenilir boya makinelerini sunmaktayız. Müşterilerimizin ihtiyaçlarına özel çözümler geliştirerek, üretim süreçlerini optimize etmelerine yardımcı oluyoruz.</p>
        <p>Mühendislik uzmanlığımız ve kaliteye olan bağlılığımızla, sektördeki en ileri teknolojileri makinelerimize entegre ediyoruz. Amacımız, sadece makine satmak değil, aynı zamanda müşterilerimizin başarısına katkıda bulunmaktır.</p>
        <a href="#iletisim" className="learn-more-button">Daha Fazlasını Öğren</a>
      </div>
    </section>
  );
}

export default AboutSection;