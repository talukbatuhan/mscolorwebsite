// app/about/AboutPageClient.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next'; 

type ImageSrc = string | import('next/image').StaticImageData;

const companyName = "MS COLOR";
const foundingYear = 2020;

const icons: { [key: string]: ImageSrc } = {
    target: "/images/target.png", 
    visions: "/images/visions.png", 
    award: "/images/award.png", 
};

interface VMDItemProps {
    icon: keyof typeof icons;

    titleKey: string; 
    contentKey: string | string[];
}

const VMDItem: React.FC<VMDItemProps> = ({ icon, titleKey, contentKey }) => {
    const { t } = useTranslation();


    let content: string | string[];

    if (Array.isArray(contentKey)) {

        content = contentKey.map(key => t(key));
    } else {

        content = t(contentKey);
    }

    return (
        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white p-6 sm:p-8 h-full rounded-xl shadow-xl transition duration-300 hover:shadow-2xl hover:border-[#193770] border-t-4 border-[#193770]">
                <div className="flex justify-center mb-4">

                    <Image
                        src={icons[icon]}
                        alt={`${t(titleKey)} icon`}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-contain"
                    />
                </div>

                <h3 className="text-2xl font-bold text-[#193770] mb-4 text-center">{t(titleKey)}</h3>

                {Array.isArray(content) ? (

                    <ul className="space-y-3 text-gray-700 list-none p-0">
                        {content.map((item, index) => (
                            <li key={index} className="flex items-start text-base font-medium">
                                {/* SVG Checkmark ikonu */}
                                <svg className="w-4 h-4 mr-2 mt-1 text-red-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                ) : (

                    <p className="text-gray-700 text-center text-lg leading-relaxed">{content}</p>
                )}
            </div>
        </div>
    );
};



function About() {
    const { t } = useTranslation();

    const interpolationVars = { companyName, foundingYear };

    const valueKeys = [
        "value_precision",
        "value_continuous_improvement",
        "value_solution_partner",
        "value_sustainable_tech",
        "value_domestic_power",
        "value_innovation_agility",
        "value_accessibility",
    ];
    
    // JSON'daki "about_lead_text_1" - "about_lead_text_4" anahtarlarını bir diziye alın.
    const leadTextKeys = [
        "about_lead_text_1",
        "about_lead_text_2",
        "about_lead_text_3",
        "about_lead_text_4",
    ];

    return (
        <div className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 min-h-screen py-16 sm:py-20 lg:py-24">
            

            <div className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
                

                <header className="text-center mb-16 lg:mb-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">

                        {t('about_title', interpolationVars)}
                    </h1>
                    <div className="text-lg sm:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed space-y-3">

                        {leadTextKeys.map((key, index) => (
                            <span key={index} className="block">
                                {t(key, interpolationVars)}
                            </span>
                        ))}
                    </div>
                </header>


                <section className="bg-white p-6 sm:p-12 rounded-xl shadow-2xl mb-12 lg:mb-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#193770] mb-6 inline-block pb-1">

                            {t('about_section_who_are_we_h2')}
                        </h2>
                        <div className="text-lg space-y-6 text-gray-800 leading-relaxed">

                            <p className='font-semibold'>{t('about_story_p1', interpolationVars)}</p>
                            <p>{t('about_story_p2')}</p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-wrap -m-4">
                    
                    <VMDItem 
                        icon="target" 
                        titleKey="about_vision_h3" 
                        contentKey="about_vision_p" 
                    />
                    
                    <VMDItem 
                        icon="visions" 
                        titleKey="about_mission_h3"
                        contentKey="about_mission_p" 
                    />

                    <VMDItem 
                        icon="award" 
                        titleKey="about_values_h3" 
                        contentKey={valueKeys} 
                    />
                </section>

            </div>
        </div>
    );
}

export default About;