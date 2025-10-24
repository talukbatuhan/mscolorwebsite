// src/components/MachineGrid.jsx

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next'; // *** Yeni: Çeviri hook'u eklendi ***
import './MachineGrid.css';

// ===================================
// VERİLER (Metinler Yerine Çeviri Anahtarları Kullanıldı)
// ===================================
const machines = [
    { 
        id: 1,
        brandPrefix: 'SHAKER',
        name: 'MasterMix',
        image: '/Shaker950.png',
        keyFeaturesKeys: [ // Veri yapısı 'keyFeaturesKeys' olarak güncellendi
            'm1_key_f_1',
            'm1_key_f_2',
            'm1_key_f_3',
            'm1_key_f_4',
            'm1_key_f_5',
            'm1_key_f_6',
            'm1_key_f_7',
        ],
        details: [
            // Özellik isimleri için çeviri anahtarları kullanılıyor
            { featureKey: 'spec_speed', value: '700 rpm' },
            { featureKey: 'spec_eccentric', value: '44 mm' }, 
            { featureKey: 'spec_screen', value: '2.8" LCD' },
            { featureKey: 'spec_compression', value: 'Otomatik' },
            { featureKey: 'spec_engine', value: '0.75 KW' },
            { featureKey: 'spec_max_bucket_height', value: '410 mm' },
            { featureKey: 'spec_max_bucket_diameter', value: '432 mm' },
            { featureKey: 'spec_mac_bucket_weight', value: '35 KG' },
            { featureKey: 'spec_power', value: '220V AC/50Hz' },
            { featureKey: 'spec_dimensions', value: '700X720X1290' }
        ]},
    { 
        id: 2,
        brandPrefix: 'GYROSCOPIC MIXER', 
        name: 'GyroMix',
        image: '/GyroMixMachine.png',
        keyFeaturesKeys: [
            'm2_key_f_1', 
            'm2_key_f_2',
            'm2_key_f_3',
            'm2_key_f_4',
            'm2_key_f_5',
            'm2_key_f_6',
            'm2_key_f_7',
        ],
        details: [
            { featureKey: 'spec_speed', value: 'Otomatik / Max 170 rpm' },
            { featureKey: 'spec_timer', value: 'Ayarlanabilir' }, // Yeni anahtar varsayılır
            { featureKey: 'spec_screen', value: '2.8" LCD' },
            { featureKey: 'spec_compression', value: 'Tam Otomatik'},
            { featureKey: 'spec_engine', value: '1.1 KW AC Motor'},
            { featureKey: 'spec_max_bucket_height', value: '410 mm'},
            { featureKey: 'spec_max_bucket_diameter', value: '400 mm'},
            { featureKey: 'spec_mac_bucket_weight', value: '35 KG'},
            { featureKey: 'spec_power', value: '220V AC/50Hz'},
            { featureKey: 'spec_dimensions', value: '800x850x1010 mm'}
        ]},
    { 
        id: 3,
        brandPrefix: 'Dispenser',
        name: 'MasterTint',
        image: '/dispenser950v5.png', 
        keyFeaturesKeys: [
            'm3_key_f_1',
            'm3_key_f_2',
            'm3_key_f_3',
            'm3_key_f_4',
            'm3_key_f_5',
            'm3_key_f_6',
            'm3_key_f_7',
        ],
        details: [
            { featureKey: 'spec_canister_count', value: '24 adet' }, // Yeni anahtar varsayılır
            { featureKey: 'spec_precision', value: '0.03 ml' },
            { featureKey: 'spec_screen', value: 'Opsiyonel' },
            { featureKey: 'spec_canister_material', value: 'Polimer'},
            { featureKey: 'spec_mixing_speed', value: 'Ayarlanabilir'},
            { featureKey: 'spec_canister_volume', value: 'Opsiyonel'},
            { featureKey: 'spec_pump_volume', value: 'Opsiyonel'},
            { featureKey: 'spec_elevator', value: 'Otomatik'},
            { featureKey: 'spec_power', value: '220V/50Hz'},
        ]},
];

// ===================================
// DETAY BİLEŞENİ (ARKA YÜZ SADELEŞTİRİLMİŞ)
// ===================================

function FeatureDetailsBox({ machine, isCardBack = false }) {
    const { t } = useTranslation(); // *** Çeviri hook'u eklendi ***

    // Başlık metnini çeviri anahtarı kullanarak alıyoruz
    const title = t('tech_specs_title'); 

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
                        {/* Çeviri anahtarlarını kullanarak özellik metinlerini alıyoruz */}
                        {machine.keyFeaturesKeys.map((key, index) => ( 
                            <div key={index} className="key-feature-item">
                                {/* Dikey Çizgiyi oluşturacak ayırıcı */}
                                {index !== 0 && <div className="feature-separator-line"></div>}
                                <p className="feature-text">{t(key)}</p> {/* *** Çeviri Uygulandı *** */}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* TEKNİK ÖZELLİKLER TABLOSU (Hem Masaüstünde hem de Mobil Arka Yüzde) */}
            <div className={`technical-specs-container ${isCardBack ? 'mobile-back-specs-full-width' : 'detail-col-full-width desktop-only'}`}> 
                {/* Mobil arka yüzde sadece makine adı, masaüstünde sabit başlık */}
                <h3 className="technical-specs-title">{isCardBack ? machine.name + ' '  : title}</h3> 
                <ul className="technical-specs-list">
                    {machine.details.map((item, index) => (
                        <li key={index} className="spec-item">
                            {/* item.feature (anahtar) çevriliyor, item.value (değer) sabit kalıyor */}
                            <span className="spec-feature">{t(item.featureKey)}</span> {/* *** Çeviri Uygulandı *** */}
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
    const { t } = useTranslation(); // *** Çeviri hook'u eklendi ***

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
                    behavior: 'smooth'  // Yumuşak kaydırmayı zorla
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
                        
                        {/* Ana Özellik ve Alt Özelliği Çeviriyoruz */}
                        <p className="main-feature-text">{t(machine.mainFeatureKey)}</p>
                        <p className="sub-feature-text">{t(machine.subFeatureKey)}</p>

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
    // ... (Mevcut mantık kodunda çeviriye gerek yok) ...
    const [selectedMachine, setSelectedMachine] = useState(machines[0]); 
    const [flippedCardIds, setFlippedCardIds] = useState([]); 
    const detailsRef = useRef(null); 

    const handleFlipToggle = (machineId) => {
        const isFlipped = flippedCardIds.includes(machineId);
        setFlippedCardIds(prevIds => {
            if (isFlipped) {
                return prevIds.filter(id => id !== machineId);
            } else {
                return [...prevIds, machineId];
            }
        });
    };

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
                            isSelected={!isMobile && selectedMachine && selectedMachine.id === machine.id}
                            onClick={setSelectedMachine} 
                            detailsRef={detailsRef} 
                            isFlipped={isMobile && flippedCardIds.includes(machine.id)} 
                            onFlipToggle={handleFlipToggle} 
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