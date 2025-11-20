// components/Gallery/GalleryDetail.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
// Sadece resimler için gerekli ikonları bıraktım
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid'; 
import { GALLERY_ITEMS } from './GalleryTypes'; 
import Image from 'next/image';

interface GalleryDetailProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
    onOpenFullscreen: () => void;
}

const totalItems = GALLERY_ITEMS.length;

export default function GalleryDetail({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex, 
    onOpenFullscreen 
}: GalleryDetailProps) {
    
    const [isLoading, setIsLoading] = useState(true); 
    const item = GALLERY_ITEMS[currentIndex];

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(`Medya değişimi algılandı: Yükleme başlatıldı (Asenkron).`);
            setIsLoading(true);
        }, 0); 
        
        return () => clearTimeout(timer);
    }, [currentIndex]);

    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleMediaError = useCallback(() => {
        console.error(`Medya yüklenirken hata oluştu: ${item.alt}`);
        setIsLoading(false); 
    }, [item.alt]);

    // Navigasyon fonksiyonları korundu
    const handlePrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        onSetCurrentIndex(prevIndex);
    }, [currentIndex, onSetCurrentIndex]);

    const handleNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        onSetCurrentIndex(nextIndex);
    }, [currentIndex, onSetCurrentIndex]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                handlePrev();
            } else if (event.key === 'ArrowRight') {
                handleNext();
            } else if (event.key === 'Escape') {
                onClose();
            } 
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handlePrev, handleNext, onClose]); 


    return (
        <div className="fixed inset-0 z-9999 bg-linear-to-tr from-black/95 via-slate-900/98 to-black/95 backdrop-blur-2xl animate-in fade-in duration-300">

            <button 
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10001 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500/90 hover:border-red-500 hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                aria-label="Kapat"
            >
                <XMarkIcon className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>

            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 z-10000 pointer-events-none">
                <button 
                    onClick={handlePrev}
                    className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:-translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                    aria-label="Önceki"
                >
                    <ArrowLeftIcon className="w-5 h-5 sm:w-8 sm:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                    onClick={handleNext}
                    className="pointer-events-auto w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                    aria-label="Sonraki"
                >
                    <ArrowRightIcon className="w-5 h-5 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
            
            <div className="h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">

                <div 
                    className="relative w-full h-[70vh] sm:h-[75vh] lg:h-[80vh] flex items-center justify-center"
                >
                    
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl"></div>
                    
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl">
                            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-white/20 border-t-blue-500"></div>
                            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium tracking-wide">Yükleniyor...</p>
                        </div>
                    )}

                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={100}
                        onLoad={handleMediaLoad} 
                        onError={handleMediaError} 
                        className={`relative z-1 max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                    />
                </div>
            </div>
        </div>
    );
}