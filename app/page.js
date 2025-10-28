'use client'; 

import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SplashCursor from '@/src/components/SplashCursor'; 
import './MachineGrid.css'; 

// ===================================
// HOMEPAGE SABİTLERİ
// ===================================
const backgroundVideoSrc = '/video1.mp4'; 
const REFRESH_DELAY_MS = 30000; // 30 saniye

// ===================================
// DATA (Translation Keys for texts used)
// ===================================
const machines = [
    { 
        id: 1,
        brandPrefix: 'SHAKER',
        name: 'MasterMix',
        image: '/Shaker950.png',
        keyFeaturesKeys: [ 
            'm1_key_f_1', 'm1_key_f_2', 'm1_key_f_3', 'm1_key_f_4', 'm1_key_f_5', 'm1_key_f_6', 'm1_key_f_7',
        ],

        details: [
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
            'm2_key_f_1', 'm2_key_f_2', 'm2_key_f_3', 'm2_key_f_4', 'm2_key_f_5', 'm2_key_f_6', 'm2_key_f_7',
        ],

        details: [
            { featureKey: 'spec_speed', value: 'Otomatik / Max 170 rpm' },
            { featureKey: 'spec_timer', value: 'Ayarlanabilir' },
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
            'm3_key_f_1', 'm3_key_f_2', 'm3_key_f_3', 'm3_key_f_4', 'm3_key_f_5', 'm3_key_f_6', 'm3_key_f_7',
        ],

        details: [
            { featureKey: 'spec_canister_count', value: '24 adet' },
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

// FeatureDetailsBox ve MachineCard bileşenleri
function FeatureDetailsBox({ machine, isCardBack = false }) {
    const { t } = useTranslation();
    const title = t('tech_specs_title'); 

    return (
        <div className={`feature-details-box-wrapper ${isCardBack ? 'card-back-content' : ''}`}>
            
            {/* LEFT COLUMN: PRODUCT IMAGE (Show only in Desktop Detail Box) */}
            {!isCardBack && (
                <div className={`detail-col-left`}>
                    <div className="detail-image-main">
                        <img 
                            src={machine.image} 
                            alt={machine.name} 
                        />
                    </div>
                </div>
            )}

            {/* RIGHT COLUMN: KEY FEATURES (Show only in Desktop Detail Box) */}
            {!isCardBack && (
                <div className="detail-col-right desktop-only"> 
                    <div className="key-features-list">
                        {machine.keyFeaturesKeys.map((key, index) => ( 
                            <div key={index} className="key-feature-item">
                                {index !== 0 && <div className="feature-separator-line"></div>}
                                <p className="feature-text">{t(key)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* TECHNICAL SPECIFICATIONS TABLE (On Desktop and Mobile Back Face) */}
            <div className={`technical-specs-container ${isCardBack ? 'mobile-back-specs-full-width' : 'detail-col-full-width desktop-only'}`}> 
                <h3 className="technical-specs-title">{isCardBack ? machine.name + ' ' : title}</h3> 
                <ul className="technical-specs-list">
                    {machine.details.map((item, index) => (
                        <li key={index} className="spec-item">
                            <span className="spec-feature">{t(item.featureKey)}</span>
                            <span className="spec-value">{item.value}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MachineCard({ machine, isSelected, onClick, isFlipped, onFlipToggle, detailsRef }) {
    const { t } = useTranslation();

    const handleCardClickDesktop = (clickedMachine) => {
        onClick(clickedMachine); 

        setTimeout(() => {
            if (detailsRef && detailsRef.current) {
                const offsetTop = detailsRef.current.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop - 80, 
                    behavior: 'smooth'
                });
            }
        }, 50); 
    };

    const handleCardClickMobile = () => {
        onFlipToggle(machine.id);
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

    const clickHandler = isMobile ? handleCardClickMobile : () => handleCardClickDesktop(machine);
    const flippedClass = isMobile && isFlipped ? 'is-flipped' : '';
    const selectedClass = !isMobile && isSelected ? 'is-selected' : '';

    return (
        <div 
            className={`machine-card ${selectedClass} ${flippedClass}`} 
            onClick={clickHandler}
        >
            <div className="card-inner"> 

                {/* FRONT FACE: IMAGE AND NAME */}
                <div className="card-front">
                    <div className="card-content"> 
                        {machine.brandPrefix && (
                            <span className="machine-brand-prefix">
                                {machine.brandPrefix}
                            </span>
                        )}
                        <h3>{machine.name}</h3>

                        <div className="machine-image-wrapper"
                            style={{ backgroundImage: `url(${machine.image})` }} 
                            aria-label={machine.name}
                        ></div>
                    </div>
                </div>

                {/* BACK FACE: TECHNICAL DETAILS (Visible only on mobile/tablet devices) */}
                <div className="card-back">
                    <FeatureDetailsBox machine={machine} isCardBack={true} />
                </div>
            </div>
        </div>
    );
}

export default function MachineGrid({ showHero = true }) { 
    // HomePage'den taşınan hook'lar
    const { t, i18n } = useTranslation();

    // MachineGrid'in hook'ları
    const [selectedMachine, setSelectedMachine] = useState(machines[0]); 
    const [flippedCardIds, setFlippedCardIds] = useState([]); 
    const detailsRef = useRef(null); 

    // Taşı: Otomatik sayfa yenileme 
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Page automatically refreshing.");
            window.location.reload(); 
        }, REFRESH_DELAY_MS);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleFlipToggle = (machineId) => {
        const isFlipped = flippedCardIds.includes(machineId);
        setFlippedCardIds(prevIds => {
            if (isFlipped) {
                return prevIds.filter(id => id !== machineId);
            } else {
                return [machineId];
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
        <div className="homepage-container"> 
            
            <SplashCursor />

            {/* VİDEO HERO BÖLÜMÜNÜ KOŞULLU OLARAK GÖSTER */}
            {showHero && (
                <header className="hero-section video-hero">
                    
                    {/* BACKGROUND VIDEO */}
                    <video 
                        className="hero-background-video"
                        src={backgroundVideoSrc}
                        autoPlay 
                        loop     
                        muted    
                        playsInline 
                    />
                    
                    {/* TRANSPARENT LAYER OVER VIDEO */}
                    <div className="video-overlay"></div>

                    {/* FOREGROUND CONTENT (Text and Button) */}
                    <div className="header-content">
                        
                        <p className="brand-name-text">Ms Color</p>
                        
                        <h1>{t('homepage_title')}</h1> 
                        
                        <p className="hero-punchline">{t('homepage_punchline')}</p>
                        
                    </div>
                </header>
            )}
        
            {/* Machine Cards Section (Bu kısım her zaman görünür) */}
            <div className="machine-grid-section" 
                // Eğer video yoksa, bu kısım sayfanın en üstüne oturmalıdır
                style={!showHero ? { marginTop: '0px', paddingTop: '40px' } : {}} 
            >
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

                    {/* NEW MASTER DETAIL BOX (Shown only on Desktop) */}
                    {selectedMachine && !isMobile && (
                        <div 
                            className="master-details-box new-style"
                            ref={detailsRef}
                        > 
                            <FeatureDetailsBox 
                                machine={selectedMachine} 
                                isCardBack={false}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}