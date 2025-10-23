// src/components/MachineGrid.jsx

import React, { useState, useEffect } from 'react';
import './MachineGrid.css';

// ===================================
// VERİLER
// Görseldeki kısa özellikler (keyFeatures) eklendi.
// ===================================
const machines = [
    { 
        id: 1,
        brandPrefix: 'MasterMix',
        name: 'SHAKER',
        mainFeature: 'Yüksek Hacimli Otomasyon', 
        subFeature: '4 Kat Daha Hızlı, Tam Entegre Boyama Çözümü.',
        image: '/src/public/Shaker950.png',
        keyFeatures: [
            'KROM KAPLI VE İNDÜKSİYONLU VİDALI MİL SAYESİNDE UZUN',
            'ELEKTRONİK KAPI KİLİDİ VE DOKUNMATİK SENSÖR SAYESİNDE TAM GÜVENLİK',
            'ÇİFT DOĞRULAMALI ALGORİTMA İLE HER KOŞULDA DOĞRU SIKIŞTIRMA',
            'YALNIZCA 8 CİVATA İLE TÜM KAPAKLAR AÇILIR',
            '2.8" RENKLİ LCD EKRAN',
            '30 - 300 SANİYE ESNEK ÇALIŞMA ARALIĞI',
            '%100 YERLİ ÜRETİM'
        ],
        details: [
            { feature: 'Hız', value: '700 rpm' },
            { feature: 'Eksantrik Mesafesi', value: '44 mm' }, 
            { feature: 'Ekran', value: '2.8" LCD' },
            { feature: 'Sıkıştırma', value: 'Otomatik' },
            { feature: 'Motor', value: '0.75 KW' },
            { feature: 'Max Kova Yüksekliği', value: '410 mm' },
            { feature: 'Max Kova Çapı', value: '432 mm' },
            { feature: 'Max Kova Ağırlığı', value: '35 KG' },
            { feature: 'Güç/Besleme', value: '220V AC/50Hz' },
            { feature: 'Boyutlar (WXDXH)', value: '700X720X1290' }
        ]},
    { 
        id: 2,
        brandPrefix: 'GYROSCOPIC MIXER', 
        name: 'GyroMix',
        mainFeature: '6 Eksenli Milimetrik Hassasiyet', 
        subFeature: 'Kompleks Yüzeylerde Kusursuz Uygulama Garantisi.',
        image: '/src/public/GyroMixMachine.png',
        keyFeatures: [
            'KOVA BOYUTUNA GÖRE OTOMATİK AYARLANAN DÖNÜŞ HIZI',
            'KROM KAPLI VE İNDÜKSİYONLU VİDALI MİL SAYESİNDE UZUN ÖMÜRLÜ KULLANIM',
            'ÇİFT DOĞRULAMALI ALGORİTMA İLE HER KOŞULDA DOĞRU SIKIŞTIRMA',
            'HER İKİ EKSENDE HER İKİ YÖNE DÖNÜŞ',
            '2.8" RENKLİ LCD EKRAN',
            '0.5 - 8 DK ESNEK ÇALIŞMA ARALIĞI',
            '%100 YERLİ ÜRETİM'
          ],
        details: [
            { feature: 'Hız', value: 'Otomatik / Max 170 rpm' },
            { feature: 'Zamanlayıcı', value: 'Ayarlanabilir' },
            { feature: 'Ekran', value: '2.8" LCD' },
            { feature: 'Sıkıştırma', value: 'Tam Otomatik'},
            { feature: 'Motor', value: '1.1 KW AC Motor'},
            { feature: 'Max Kova Yüksekliği', value: '410 mm'},
            { feature: 'Max Kova Çapı', value: '400 mm'},
            { feature: 'Max Kova Ağırlığı', value: '35 KG'},
            { feature: 'Güç', value: '220V AC/50Hz'},
            { feature: 'Boyutlar (WxDxH)', value: '800x850x1010 mm'}
        ]},
    { 
        id: 3,
        brandPrefix: 'Dispenser',
        name: 'Dispenser',
        mainFeature: 'Anında Kuruma, Maksimum Verimlilik', 
        subFeature: 'Yeni Nesil LED UV Teknolojisi ile Enerji Tasarrufu.',
        image: '/Dispenser950v2.png', 
        keyFeatures: [
            'ÖZELLİKLER EKLENCEK',
            'ÖZELLİKLER EKLENCEK',
            'ÖZELLİKLER EKLENCEK',
            
            '2.8" RENKLİ LCD EKRAN',
            '0.5 - 8 DK ESNEK ÇALIŞMA ARALIĞI',
            '%100 YERLİ ÜRETİM'
        ],
        details: [
            { feature: 'Kutu / Hazne Sayısı', value: '24 adet' },
            { feature: 'Hassasiyet', value: '0.03 ml' },
            { feature: 'Ekran', value: 'Opsiyonel' },
            { feature: 'Kutu / Hazne Malzemesi', value: 'Polimer'},
            { feature: 'Karıştırma Hızı', value: 'Ayarlanabilir'},
            { feature: 'Kutu / Hazne Hacmi', value: 'Opsiyonel'},
            { feature: 'Pompa Hacmi', value: 'Opsiyonel'},
            { feature: 'Asansör', value: 'Otomatik'},
            { feature: 'Güç Kaynağı', value: '220V/50Hz'},
        ]},
];

// ===================================
// YENİ İKİ SÜTUNLU DETAY BİLEŞENİ
// NOT: Bu bileşen hem ana detay kutusu hem de kartın arka yüzü olarak kullanılacak.
// ===================================

// isCardBack prop'u eklendi
function FeatureDetailsBox({ machine, isCardBack = false }) {
    
    // NOT: isCardBack true ise, mobil cihazda arka yüzü temsil eder.
    // Mobil/Tablet için kısaltılmış özellikler artık gösterilmiyor. 
    // Bunun yerine sadece teknik özellikler tablosu gösterilecek.

    return (
        <div className={`feature-details-box-wrapper ${isCardBack ? 'card-back-content' : ''}`}>
            
            {/* SOL SÜTUN: ÜRÜN GÖRSELİ (Sadece isCardBack false ise göster) */}
            {!isCardBack && (
                <div className={`detail-col-left ${isCardBack ? 'mobile-back-left' : ''}`}>
                    <div className="detail-image-main">
                        <img 
                            src={`${import.meta.env.BASE_URL}${machine.image.substring(1)}`} 
                            alt={machine.name} 
                        />
                    </div>
                </div>
            )}

            {/* SAĞ SÜTUN: METİN ÖZELLİKLERİ VE AYIRICILAR (Sadece Masaüstünde Görünür) */}
            {/* Kartın arka yüzünde gösterilmeyecek */}
            {!isCardBack && (
                <div className="detail-col-right desktop-only"> 
                    <div className="key-features-list">
                        {machine.keyFeatures.map((text, index) => (
                            <div key={index} className="key-feature-item">
                                {/* Dikey Çizgiyi oluşturacak ayırıcı (CSS ile yatay çizgi görünümü verilecek) */}
                                {index !== 0 && <div className="feature-separator-line"></div>}
                                
                                <p className="feature-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* TEKNİK ÖZELLİKLER TABLOSU (Masaüstünde Aşağıda Geniş, Kart Arka Yüzünde Sağda) */}
            {/* isCardBack true ise bu alan sağ sütun olarak görev yapacak, tam genişlik alması için sadece technical-specs-container sınıfı kalacak */}
            <div className={`technical-specs-container ${isCardBack ? 'mobile-back-specs-full-width' : 'detail-col-full-width desktop-only'}`}> 
                <h3 className="technical-specs-title">{isCardBack ? machine.name + '' : 'TEKNİK ÖZELLİKLER'}</h3> {/* Başlık güncellendi */}
                <ul className="technical-specs-list">
                    {machine.details.map((item, index) => (
                        <li key={index} className="spec-item">
                            <span className="spec-feature">{item.feature}</span>
                            <span className="spec-value">{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Eski KARTIN ARKA YÜZÜ İÇİN KISA ÖZELLİKLER kaldırıldı. */}
            {/* Mobil kısaltılmış özellikler artık kullanılmayacak. */}

        </div>
    );
}

// ===================================
// KART BİLEŞENİ (ÇEVİRME EFEKTİ EKLENDİ)
// ===================================

function MachineCard({ machine, isSelected, onClick, isFlipped, onFlipToggle }) {
    
    // Masaüstünde kartı seçme işlevi
    const handleCardClickDesktop = () => {
        onClick(machine);
    };

    // Mobil/Tablet cihazlarda çevirme işlevi
    const handleCardClickMobile = () => {
        onFlipToggle(machine.id);
    };

    // Ekran boyutunu kontrol eden özel bir hook kullanalım (basit haliyle)
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            // 900px altı mobil/tablet olarak kabul edildi
            setIsMobile(window.innerWidth < 900); 
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const clickHandler = isMobile ? handleCardClickMobile : handleCardClickDesktop;
    const flippedClass = isMobile && isFlipped ? 'is-flipped' : '';
    const selectedClass = !isMobile && isSelected ? 'is-selected' : '';

    return (
        <div 
            className={`machine-card ${selectedClass} ${flippedClass}`} 
            onClick={clickHandler}
        >
            <div className="card-inner"> {/* Çevirme efektini bu div'e uygulayacağız */}

                {/* ÖN YÜZ: GÖRSEL VE İSİM */}
                <div className="card-front">
                    <div className="card-content"> 
                        {machine.brandPrefix && (
                            <span className="machine-brand-prefix">
                                {machine.brandPrefix}
                            </span>
                        )}
                        <h3>{machine.name}</h3>
                        <div className="machine-image-wrapper"
                            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}${machine.image.substring(1)})` }} 
                            aria-label={machine.name}
                        ></div>
                    </div>
                </div>

                {/* ARKA YÜZ: TEKNİK DETAYLAR (Sadece mobil/tablet cihazlarda görünecek) */}
                <div className="card-back">
                    {/* isCardBack prop'u eklendi */}
                    <FeatureDetailsBox machine={machine} isCardBack={true} />
                </div>
            </div>
        </div>
    );
}

// ===================================
// ANA GRID BİLEŞENİ
// ===================================

function MachineGrid({ isFullPage }) { 
    const [selectedMachine, setSelectedMachine] = useState(machines[0]); 
    // Mobil çevirme durumunu yönetmek için yeni state
    const [flippedCardId, setFlippedCardId] = useState(null); 

    // Kart çevirme işlevi (Sadece mobil/tablet için)
    const handleFlipToggle = (machineId) => {
        setFlippedCardId(flippedCardId === machineId ? null : machineId);
    };

    // Ekran boyutunu kontrol eden özel bir hook kullanalım
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 900); 
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div className="machine-grid-section">
            <div className="container">
                
                <div className="machine-grid">
                    {machines.map((machine) => (
                        <MachineCard 
                            key={machine.id} 
                            machine={machine} 
                            // Masaüstü seçili durumu
                            isSelected={!isMobile && selectedMachine && selectedMachine.id === machine.id}
                            onClick={setSelectedMachine} // Masaüstü detay gösterme
                            // Mobil çevirme durumu
                            isFlipped={isMobile && flippedCardId === machine.id} 
                            onFlipToggle={handleFlipToggle} // Mobil çevirme işlevi
                        /> 
                    ))}
                </div>

                {/* YENİ MASTER DETAY KUTUSU (Sadece Masaüstünde Gösterilir) */}
                {selectedMachine && !isMobile && (
                    <div className="master-details-box new-style"> 
                        <FeatureDetailsBox 
                            machine={selectedMachine} 
                            isCardBack={false} // Masaüstü detay kutusu
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default MachineGrid;