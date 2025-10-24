// src/components/AboutPage.jsx

import React from 'react';
import './AboutPage.css';

// Varsayılan İçerikler
const companyName = "MS COLOR";
const foundingYear = 2020;
const founderName = "Snorlax";

function AboutPage() {
    return (
        <div className="about-page-section">
            <div className="container">
                
                {/* 1. Üst Başlık ve Giriş */}
                <header className="about-header">
                    <h1>{companyName} Hakkında</h1>
                    <p className="lead-text">
                        {foundingYear} yılından bu yana boya ve otomasyon sektöründe ezber bozan çözümler sunarak endüstriye taze bir bakış açısı getiriyoruz. <br /> Temel misyonumuz, ileri teknolojiyi kusursuz güvenilirlikle birleştirmek ve bu sayede müşterilerimizin üretim hatlarında maksimum verimlilik sağlamaktır. <br /> Yerli mühendislik gücümüzle geliştirdiğimiz her makine, hassasiyet ve dayanıklılık taahhüdümüzün somut bir kanıtıdır. <br /> Biz, sadece makine üretmekle kalmıyor; müşterilerimizin gelecekteki rekabet gücüne yatırım yapıyoruz.
                    </p>
                </header>

                {/* 2. Hikayemiz ve Tarihçe */}
                <section className="about-story">
                    <h2>Biz Kimiz?</h2>
                    <div className="story-content">
                        <p>
                            {companyName} olarak, yerli üretim anlayışıyla geliştirdiğimiz makinelerimizi Türkiye ve dünyadaki boya üreticilerinin hizmetine sunuyoruz. Amacımız, profesyonel hizmet anlayışımız ve kaliteli ürünler ile müşterilerimize değer katan çözümler sunmaktır. <br />
                  
                       Ar-Ge'ye verdiğimiz önemle güncel teknolojiyi takip ediyor, yenilikçi çözümler sunuyor ve ürünlerimizi sürekli olarak daha iyiye ulaştırmak için çalışıyoruz.</p>
                    </div>
                </section>

                {/* 3. Vizyon, Misyon, Değerler */}
                <section className="about-vmd-section">
                    <div className="vmd-item">
                        <i className="vmd-icon">🎯</i>
                        <h3>Vizyonumuz</h3>
                        <p>Boyama ve kimya otomasyonu alanında global ölçekte lider bir çözüm ortağı olmaktır. Sektördeki yenilikleri sadece takip etmekle kalmayıp, bu yeniliklere yön veren, güvenilir ve öncü bir marka olmayı hedefliyoruz. Geliştirdiğimiz her ürün ve sunduğumuz her hizmet ile müşterilerimizin üretim süreçlerinde verimliliği ve hassasiyeti en üst düzeye çıkarmayı amaçlıyoruz</p>

                    </div>
                    
                    <div className="vmd-item">
                        <i className="vmd-icon">🛠️</i>
                        <h3>Misyonumuz</h3>
                        <p>Yerli üretime katkı sağlayarak dünya standartlarında yüksek kaliteli makine üretimini sağlamaktır. Enerji ve gayretimizi, ürettiğimiz yerli makinelerle ülkemizi dünyada en güzel şekilde temsil etmek</p>
                    </div>

                    <div className="vmd-item">
                        <i className="vmd-icon">🛡️</i>
                        <h3>Değerlerimiz</h3>
                        <ul>
                            <li>Hassasiyet ve Mükemmeliyet</li>
                            <li>Sürekli İyileştirme ve Geliştirme (Kaizen)</li>
                            <li>Çözüm Ortaklığı ve Güven</li>
                            <li>Sürdürülebilir Teknoloji</li>
                            <li>Yerli Güç ve Global Etki</li>
                            <li>İnovasyon Çevikliği</li>
                            <li>Erişilebilirlik ve Destek</li>
                        </ul>
                    </div>
                </section>

                {/* 4. Kurucu Mesajı */}
                <section className="founder-message-section">
                    <div className="founder-card">
                        <img 
                            src="" 
                            alt={founderName} 
                            className="founder-photo"
                        />
                        <div className="founder-text-content">
                            <h2>Kurucu Mesajı</h2>
                            <p>
                                "Başladığımız günden bu yana inancımız hiç değişmedi: Yüksek kalite ve yerli üretim birleştiğinde, sonuç her zaman uluslararası standartların ötesindedir. Gelecek, otomasyon ve hassasiyetle şekillenecek. Biz, {companyName} olarak bu geleceğe yön vermeye kararlıyız."
                            </p>
                            <p className="founder-signature">{founderName} <br/> <span>Kurucu & CEO</span></p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AboutPage;