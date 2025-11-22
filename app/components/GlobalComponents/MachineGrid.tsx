'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Machine } from '@/app/types/machine';
import { machines } from '@/app/data/machines';
import { HeroSection } from './HeroSection';
import { MachineCard } from './MachineCard';
import { FeatureDetailsBox } from './FeatureDetailsBox';

interface MachineGridProps {
  showHero?: boolean;
}

export const MachineGrid: React.FC<MachineGridProps> = ({ showHero = true }) => {
  const [selectedMachine, setSelectedMachine] = useState<Machine>(machines[0]);
  const [flippedCardIds, setFlippedCardIds] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFlipToggle = (machineId: number) => {
    setFlippedCardIds((prev) =>
      prev.includes(machineId) ? prev.filter((id) => id !== machineId) : [machineId]
    );
  };

  return (
    <div className="w-full overflow-x-hidden">
      {showHero && <HeroSection videoSrc="/intro.mp4" />}

      <div 
        className="relative w-full py-20 px-5 bg-linear-to-br from-slate-800 via-blue-900 to-slate-800 overflow-hidden" 
        style={!showHero ? { marginTop: 0, paddingTop: '80px' } : {}}
      >
        {/* Animasyonlu Arka Plan Efektleri */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* İçerik Konteyneri */}
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Başlık Bölümü */}


          {/* Makine Kartları Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {machines.map((machine) => (
              <MachineCard
                key={machine.id}
                machine={machine}
                isSelected={!isMobile && selectedMachine?.id === machine.id}
                isFlipped={isMobile && flippedCardIds.includes(machine.id)}
                isMobile={isMobile}
                onClick={setSelectedMachine}
                onFlipToggle={handleFlipToggle}
                detailsRef={detailsRef}
              />
            ))}
          </div>

          {/* Detay Kutusu (Desktop) */}
          {selectedMachine && !isMobile && (
            <div ref={detailsRef} className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">

                
                {/* İçerik Wrapper */}
                <div className="p-8">
                  
                  <FeatureDetailsBox machine={selectedMachine} isCardBack={false} />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};