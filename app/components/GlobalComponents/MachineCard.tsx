'use client';

import React from 'react';
import { Machine } from '@/app/types/machine';
import { FeatureDetailsBox } from '@/app/components/GlobalComponents/FeatureDetailsBox';

interface MachineCardProps {
  machine: Machine;
  isSelected: boolean;
  isFlipped: boolean;
  isMobile: boolean;
  onClick: (machine: Machine) => void;
  onFlipToggle: (id: number) => void;
  detailsRef: React.RefObject<HTMLDivElement | null>;
}

export const MachineCard: React.FC<MachineCardProps> = ({
  machine,
  isSelected,
  isFlipped,
  isMobile,
  onClick,
  onFlipToggle,
  detailsRef
}) => {
  const handleCardClick = () => {
    if (isMobile) {
      onFlipToggle(machine.id);
    } else {
      onClick(machine);
      setTimeout(() => {
        if (detailsRef.current) {
          const offsetTop = detailsRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop - 80, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div
      className={`relative h-[450px] cursor-pointer transition-all duration-300 ${
        !isMobile && isSelected ? 'scale-[1.02] -translate-y-1' : ''
      }`}
      onClick={handleCardClick}
      style={{ perspective: '1000px' }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-600 ${
          isMobile && isFlipped ? 'transform-[rotateY(180deg)]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Face */}
        <div
          className="absolute w-full h-full bg-white text-black shadow-lg border-2 border-gray-200 overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex flex-col items-center p-4">
            <span className="block text-center text-black font-medium text-sm pt-4 tracking-widest uppercase">
              {machine.brandPrefix}
            </span>
            <h3 className="text-2xl font-black text-black my-2">{machine.name}</h3>
            <div
              className="w-full h-[300px] bg-white bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${machine.image})` }}
              aria-label={machine.name}
            />
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute w-full h-full from-slate-700 via-blue-800 to-slate-700 text-white shadow-lg border-2 border-gray-200 flex items-center justify-center p-5"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <FeatureDetailsBox machine={machine} isCardBack={true} />
        </div>
      </div>
    </div>
  );
};