// app/about/AboutPageClient.jsx 
"use client"; 
import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next'; 
import './AboutPage.css';

const companyName = "MS COLOR";
const foundingYear = 2020;
const founderName = "Malik Ekicim";

function AboutPageClient() {
    const { t } = useTranslation(); 

    return (
        <>
            <div className="about-page-section">
                <div className="container">
                    
                    <header className="about-header">
                        <h1>{t('about_title', { companyName: companyName })}</h1>
                        <p className="lead-text">
                            {t('about_lead_text_1', { foundingYear: foundingYear })}
                            <br /> {t('about_lead_text_2')} 
                            <br /> {t('about_lead_text_3')} 
                            <br /> {t('about_lead_text_4')}
                        </p>
                    </header>

                    <section className="about-story">
                        <h2>{t('about_section_who_are_we_h2')}</h2>
                        <div className="story-content">
                            <p>
                                {t('about_story_p1', { companyName: companyName })}
                                <br />
                            {t('about_story_p2')}</p>
                        </div>
                    </section>

                    <section className="about-vmd-section">
                        <div className="vmd-item">
                            <i className="vmd-icon"><img id='target' src="target.png" alt="vision png" /></i>
                            <h3>{t('about_vision_h3')}</h3>
                            <p>{t('about_vision_p')}</p>
                        </div>
                        
                        <div className="vmd-item">
                            <i className="vmd-icon"><img src="rocket.png" alt="vision png" /></i>
                            <h3>{t('about_mission_h3')}</h3>
                            <p>{t('about_mission_p')}</p>
                        </div>

                        <div className="vmd-item">
                            <i className="vmd-icon"><img src="award.png" alt="vision png" /></i>
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
                    <section className="founder-message-section">
                        <div className="founder-card">
                            <Image 
                                src="/images/kurucu-foto.jpg" 
                                alt={`Kurucu ${founderName} fotoğrafı`} 
                                className="founder-photo"
                                width={200} 
                                height={200}
                            />
                            <div className="founder-text-content">
                                <h2>{t('founder_message_h2')}</h2>
                                <p>
                                    {t('founder_message_p', { companyName: companyName })}
                                </p>
                                <p className="founder-signature">{founderName} <br/> <span>{t('founder_title')}</span></p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AboutPageClient;