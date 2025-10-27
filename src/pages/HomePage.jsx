// Düzeltildi: useEffect artık React'tan içe aktarılıyor.
import React, { useEffect } from 'react'; 
import SplashCursor from '../components/SplashCursor';
import MachineGrid from '../components/MachineGrid'; 
import { useTranslation } from 'react-i18next'; 
import './HomePage.css'; 

function HomePage() {
  const backgroundVideoSrc = '/video1.mp4'; 

  const { t, i18n } = useTranslation();

    useEffect(() => {
      // NOT: Buradaki süre (3000000 ms), 50 dakikaya eşittir (300000 ms = 5 dakika)
      // Bu süreyi 5 dakikaya düşürmek isterseniz: 300000 yazmalısınız.
      const REFRESH_DELAY_MS = 30000; 

      const timer = setTimeout(() => {
        console.log("Sayfa otomatik yenileniyor.");
        window.location.reload();
      }, REFRESH_DELAY_MS);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    const changeLanguage = (lng) => { 
        i18n.changeLanguage(lng);
    };

  return (
    
    <div className="homepage-container">
      <SplashCursor />

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
          <h1>{t('homepage_title')}</h1> 
          
          {/* GÜÇLÜ SLOGAN (Eski 'hero-subtitle' yerine) */}
          <p className="hero-punchline">{t('homepage_punchline')}</p>
          
        </div>
      </header>
  
      {/* Makine Kartları Bölümü */}
      <MachineGrid />

    </div>
  );
}

export default HomePage;