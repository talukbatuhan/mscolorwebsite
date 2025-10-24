// src/components/AboutPage.jsx

import React from 'react';
import { useTranslation } from 'react-i18next'; // *** Yeni: Çeviri hook'u eklendi ***
import './AboutPage.css';

// Varsayılan İçerikler (Şirket adları ve yıllar sabit kalabilir, metinler çevrilecek)
const companyName = "MS COLOR";
const foundingYear = 2020;
const founderName = "Snorlax";

function AboutPage() {
    const { t } = useTranslation(); // *** Çeviri hook'u çağrıldı ***

    return (
        <div className="about-page-section">
            <div className="container">
                
                {/* 1. Üst Başlık ve Giriş */}
                <header className="about-header">
                    {/* companyName değişkenini çeviri anahtarı içinde kullanıyoruz */}
                    <h1>{t('about_title', { companyName: companyName })}</h1>
                    <p className="lead-text">
                        {/* foundingYear değişkenini çeviri anahtarı içinde kullanıyoruz */}
                        {t('about_lead_text_1', { foundingYear: foundingYear })}
                        <br /> {t('about_lead_text_2')} 
                        <br /> {t('about_lead_text_3')} 
                        <br /> {t('about_lead_text_4')}
                    </p>
                </header>

                {/* 2. Hikayemiz ve Tarihçe */}
                <section className="about-story">
                    <h2>{t('about_section_who_are_we_h2')}</h2>
                    <div className="story-content">
                        <p>
                            {/* companyName değişkenini çeviri anahtarı içinde kullanıyoruz */}
                            {t('about_story_p1', { companyName: companyName })}
                            <br />
                        
                        {t('about_story_p2')}</p>
                    </div>
                </section>

                {/* 3. Vizyon, Misyon, Değerler */}
                <section className="about-vmd-section">
                    <div className="vmd-item">
                        <i className="vmd-icon">🎯</i>
                        <h3>{t('about_vision_h3')}</h3>
                        <p>{t('about_vision_p')}</p>

                    </div>
                    
                    <div className="vmd-item">
                        <i className="vmd-icon">🛠️</i>
                        <h3>{t('about_mission_h3')}</h3>
                        <p>{t('about_mission_p')}</p>
                    </div>

                    <div className="vmd-item">
                        <i className="vmd-icon">🛡️</i>
                        <h3>{t('about_values_h3')}</h3>
                        <ul>
                            <li>{t('value_precision')}</li>
                            <li>{t('value_continuous_improvement')}</li>
                            <li>{t('value_solution_partner')}</li>
                            <li>{t('value_sustainable_tech')}</li>
                            <li>{t('value_domestic_power')}</li>
                            <li>{t('value_innovation_agility')}</li>
                            <li>{t('value_accessibility')}</li>
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
                            <h2>{t('founder_message_h2')}</h2>
                            <p>
                                {/* companyName değişkenini çeviri anahtarı içinde kullanıyoruz */}
                                {t('founder_message_p', { companyName: companyName })}
                            </p>
                            <p className="founder-signature">{founderName} <br/> <span>{t('founder_title')}</span></p>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default AboutPage;