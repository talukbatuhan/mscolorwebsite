// src/components/MachineGrid.jsx

import React, { useState, useEffect, useRef } from 'react';
import './MachineGrid.css';

// ===================================
// VERİLER
// ===================================
const machines = [
    { 
        id: 1,
        brandPrefix: 'SHAKER',
        name: 'MasterMix',
        mainFeature: 'Yüksek Hacimli Otomasyon', 
        subFeature: '4 Kat Daha Hızlı, Tam Entegre Boyama Çözümü.',
        image: '/Shaker950.png',
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
        image: '/GyroMixMachine.png',
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
        name: 'MasterTint',
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
// DETAY BİLEŞENİ (ARKA YÜZ SADELEŞTİRİLMİŞ)
// ===================================

function FeatureDetailsBox({ machine, isCardBack = false }) {
    return (
        <div className={`feature-details-box-wrapper ${isCardBack ? 'card-back-content' : ''}`}>
            
            {/* SOL SÜTUN: ÜRÜN GÖRSELİ (Sadece Masaüstü Detay Kutusunda Göster) */}
            {!isCardBack && (
                <div className={`detail-col-left`}>
                    <div className="detail-image-main">
                        <img 
                            src={`${import.meta.env.BASE_URL}${machine.image.substring(1)}`} 
                            alt={machine.name} 
                        />
                    </div>
                </div>
            )}

            {/* SAĞ SÜTUN: KISA ÖZELLİKLER (Sadece Masaüstü Detay Kutusunda Göster) */}
            {!isCardBack && (
                <div className="detail-col-right desktop-only"> 
                    <div className="key-features-list">
                        {machine.keyFeatures.map((text, index) => (
                            <div key={index} className="key-feature-item">
                                {/* Dikey Çizgiyi oluşturacak ayırıcı */}
                                {index !== 0 && <div className="feature-separator-line"></div>}
                                <p className="feature-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* TEKNİK ÖZELLİKLER TABLOSU (Hem Masaüstünde hem de Mobil Arka Yüzde) */}
            <div className={`technical-specs-container ${isCardBack ? 'mobile-back-specs-full-width' : 'detail-col-full-width desktop-only'}`}> 
                <h3 className="technical-specs-title">{isCardBack ? machine.name + '' : 'TEKNİK ÖZELLİKLER'}</h3> 
                <ul className="technical-specs-list">
                    {machine.details.map((item, index) => (
                        <li key={index} className="spec-item">
                            <span className="spec-feature">{item.feature}</span>
                            <span className="spec-value">{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// ===================================
// KART BİLEŞENİ (ÇEVİRME EFEKTİ EKLENDİ)
// ===================================

function MachineCard({ machine, isSelected, onClick, isFlipped, onFlipToggle, detailsRef }) {
    
    // MASAÜSTÜ İŞLEVİ: window.scrollTo ile yumuşak kaydırmayı zorluyoruz
    const handleCardClickDesktop = (clickedMachine) => {
        onClick(clickedMachine); // Seçili makineyi değiştir

        // Kaydırma işlemini gecikmeli olarak ve window.scrollTo ile tetikle
        setTimeout(() => {
            if (detailsRef && detailsRef.current) {
                // Detay kutusunun sayfanın üstüne olan mesafesini hesapla
                const offsetTop = detailsRef.current.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    // 80: Header yüksekliği (sabit header'ı telafi etmek için örnek değer)
                    top: offsetTop - 80, 
                    behavior: 'smooth'  // Yumuşak kaydırmayı zorla
                });
            }
        }, 50); // 50ms gecikme, React'in render'ı bitirmesini bekler
    };

    // Mobil/Tablet cihazlarda çevirme işlevi
    const handleCardClickMobile = () => {
        onFlipToggle(machine.id);
    };

    // Ekran boyutunu kontrol eden özel bir hook
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

    // Eğer mobil değilse (masaüstüyse) yeni kaydırma işlevini kullan
    const clickHandler = isMobile ? handleCardClickMobile : () => handleCardClickDesktop(machine);
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
    
    // AÇIK KARTLAR (Mobil için Array tabanlı mantık)
    const [flippedCardIds, setFlippedCardIds] = useState([]); 
    
    // Detay kutusuna referans (Ref)
    const detailsRef = useRef(null); 

    // Mobil çevirme işlevi (Önceki gibi, yalnızca tıklanan kartı açar/kapatır, diğerlerini etkilemez)
    const handleFlipToggle = (machineId) => {
        // ID dizide var mı kontrol et
        const isFlipped = flippedCardIds.includes(machineId);

        setFlippedCardIds(prevIds => {
            if (isFlipped) {
                // Eğer kart açıksa, diziden çıkar (Kapat)
                return prevIds.filter(id => id !== machineId);
            } else {
                // Eğer kapalıysa, diziye ekle (Aç)
                return [...prevIds, machineId];
            }
        });
    };

    // Ekran boyutunu kontrol eden özel bir hook
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
                            // Masaüstü detay gösterme ve kaydırma için gönderdik
                            onClick={setSelectedMachine} 
                            detailsRef={detailsRef} 
                            // Mobil çevirme durumu (ID dizide var mı?)
                            isFlipped={isMobile && flippedCardIds.includes(machine.id)} 
                            onFlipToggle={handleFlipToggle} // Mobil çevirme işlevi
                        /> 
                    ))}
                </div>

                {/* YENİ MASTER DETAY KUTUSU (Sadece Masaüstünde Gösterilir) */}
                {selectedMachine && !isMobile && (
                    <div 
                        className="master-details-box new-style"
                        ref={detailsRef} // Ref'i detay kutusuna atıyoruz
                    > 
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