'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  videoSrc: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ videoSrc }) => {
  const { t } = useTranslation();

  return (
    <header className="relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] overflow-hidden bg-black text-white text-center px-5 py-24 md:py-32">
      {/* Background Video */}
      {/* suppressHydrationWarning: Video özelliklerinin sunucu/istemci farkını görmezden gelmesini sağlar */}
      <video
        suppressHydrationWarning={true} 
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <p 
          className="text-2xl md:text-3xl font-light mb-1 tracking-[5px] uppercase opacity-80 drop-shadow-lg"
          suppressHydrationWarning={true}
        >
          Ms Color
        </p>
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-wide leading-tight drop-shadow-2xl"
          suppressHydrationWarning={true}
        >
          {t('homepage_title')}
        </h1>
      </div>
    </header>
  );
};