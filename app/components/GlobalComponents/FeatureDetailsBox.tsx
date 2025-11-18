'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Machine } from '@/app/types/machine';

interface FeatureDetailsBoxProps {
  machine: Machine;
  isCardBack?: boolean;
}

export const FeatureDetailsBox: React.FC<FeatureDetailsBoxProps> = ({ 
  machine, 
  isCardBack = false 
}) => {
  const { t } = useTranslation();

  if (isCardBack) {
    // Mobile back face
    return (
      <div className="w-full h-full flex flex-col justify-center px-4">
        <h3 className="text-2xl font-bold text-white text-center mb-4 pb-2 border-b-2 border-white">
          {machine.name}
        </h3>
        <ul className="space-y-2">
          {machine.details.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-1 border-b border-white/20 last:border-0">
              <span className="font-medium text-gray-200 text-sm">{t(item.featureKey)}</span>
              <span className="font-bold text-white text-sm text-right">{t(item.value)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Desktop detail box
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white">
      {/* Left: Image */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          <img
            src={machine.image}
            alt={machine.name}
            className="w-full h-[500px] object-contain"
          />
        </div>
      </div>

      {/* Right: Key Features */}
      <div className="border-l border-gray-300 pl-8 hidden md:flex flex-col justify-around min-h-[500px]">
        {machine.keyFeaturesKeys.map((key, index) => (
          <div key={index} className="relative py-5">
            {index !== 0 && <div className="absolute top-0 left-0 w-full h-px bg-gray-300" />}
            <p className="text-lg font-bold text-black leading-snug">{t(key)}</p>
          </div>
        ))}
      </div>

      {/* Full Width: Technical Specs */}
      <div className="col-span-1 md:col-span-2 px-0 md:px-8">
        <h3 className="text-3xl font-medium text-black text-center mt-8 mb-6 pb-2 border-b-4 border-black">
          {t('tech_specs_title')}
        </h3>
        <ul className="space-y-0">
          {machine.details.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="font-bold text-black">{t(item.featureKey)}</span>
              <span className="text-black text-right">{t(item.value)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};