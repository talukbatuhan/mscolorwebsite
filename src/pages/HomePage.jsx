// src/pages/HomePage.jsx

import React from 'react';

import SplashCursor from '../components/SplashCursor';
import MachineGrid from '../components/MachineGrid'; 
import './HomePage.css'; 


function HomePage() {
  const backgroundVideoSrc = '/video1.mp4'; // Ana video yolunuz
  
  return (
    
    <div className="homepage-container">
      <SplashCursor/>
      {/* HEADER BÖLÜMÜ - DİNAMİK VİDEO ARKA PLANI */}
      <header className="hero-section video-hero">
        
        {/* ARKA PLAN VİDEOSU */}
        <video 
            className="hero-background-video"
            src={backgroundVideoSrc}
            autoPlay 
            loop     
            muted    
            playsInline 
        />
        
        {/* VİDEO ÜZERİNDEKİ SAYDAM KATMAN */}
        <div className="video-overlay"></div>

        {/* ÖN PLAN İÇERİĞİ (Metin ve Buton) */}
        <div className="header-content">
          
          {/* LOGO VE BAŞLIK KAPSAYICISI (Marka adı ve H1'i ayırıp daha güçlü bir H1 kullanacağız) */}
          
          <p className="brand-name-text">Ms Color</p> {/* Yeni, daha küçük marka adı alanı */}
          
          {/* YENİ VE DAHA ÇARPICI BAŞLIK */}
          <h1>Geleceğin Boya Teknolojilerini Bugün Keşfedin</h1> 
          
          {/* GÜÇLÜ SLOGAN (Eski 'hero-subtitle' yerine) */}
          <p className="hero-punchline">Sanayide En Yüksek Verimlilik, Kusursuz Renk Kalitesi.</p>
          
          {/* DAHA NET BUTON METNİ */}
      
        </div>
      </header>
      {/* ------------------------------------------------------------- */}


      {/* Makine Kartları Bölümü */}
      <MachineGrid />
      
      {/* Footer bileşeni buraya import edilmelidir */}

    </div>
  );
}

export default HomePage;