// components/Gallery/GalleryDetail.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';
import { GALLERY_ITEMS, GALLERY_TEXTS } from './GalleryTypes'; 
import Image from 'next/image';
import YouTubePlayer from '@/app/components/Gallery/YouTubePlayer';

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
    
    const item = GALLERY_ITEMS[currentIndex];
    const isVideo = !!item.youtubeEmbedUrl; 
    
    const [isLoading, setIsLoading] = useState(false); 

    // 1. Yükleme Durumu Sıfırlama (DÜZELTİLDİ)
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (!isVideo) {
            // Görsel ise yükleniyor'u aç (Asenkron)
            timeoutId = setTimeout(() => {
                setIsLoading(true);
            }, 0);
        } else {
            // Video ise yükleniyor'u kapat (Asenkron - Hata buradaydı)
            timeoutId = setTimeout(() => {
                setIsLoading(false);
            }, 0);
        }

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [currentIndex, isVideo]); 

    // Görsel yükleme durumları
    const handleMediaLoad = useCallback(() => {
        if (!isVideo) {
            setIsLoading(false);
        }
    }, [isVideo]);

    const handleMediaError = useCallback(() => {
        console.error(`Medya yüklenirken hata oluştu: ${item.alt}`);
        setIsLoading(false); 
    }, [item.alt]);

    // 2. Navigasyon fonksiyonları
    const handlePrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        setTimeout(() => onSetCurrentIndex(prevIndex), 0);
    }, [currentIndex, onSetCurrentIndex]);

    const handleNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        setTimeout(() => onSetCurrentIndex(nextIndex), 0);
    }, [currentIndex, onSetCurrentIndex]);

    // 3. Klavye kontrolleri
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
        <div className="fixed inset-0 z-50 bg-linear-to-tr from-black/95 via-slate-900/98 to-black/95 backdrop-blur-2xl animate-in fade-in duration-300">

            {/* Kapatma Butonu */}
            <button 
                onClick={onClose}
                className="absolute top-3 right-3 sm:top-6 sm:right-6 z-51 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500/90 hover:border-red-500 hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                aria-label="Kapat"
            >
                <XMarkIcon className="w-5 h-5 sm:w-8 sm:h-8" />
            </button>
            
            {/* Tam Ekran Butonu (Sadece Görseller için) */}
            {!isVideo && (
                <button
                    onClick={onOpenFullscreen}
                    className="absolute top-3 right-16 sm:top-6 sm:right-24 z-51 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500/90 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                    aria-label={GALLERY_TEXTS.fullscreenButton}
                >
                    <ArrowsPointingOutIcon className="w-5 h-5 sm:w-8 sm:h-8" />
                </button>
            )}


            {/* Navigasyon Butonları */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:px-4 z-50 pointer-events-none">
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
                    
                    {/* Yükleniyor Ekranı */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl">
                            <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-white/20 border-t-blue-500"></div>
                            <p className="mt-4 sm:mt-6 text-white text-base sm:text-lg font-medium tracking-wide">Yükleniyor...</p>
                        </div>
                    )}

                    {/* VİDEO İÇERİĞİ */}
                    {isVideo ? (
                        <div className={`relative w-full max-w-5xl h-full flex items-center justify-center p-2 transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                            <YouTubePlayer
                                embedUrl={item.youtubeEmbedUrl!}
                                className="w-full max-w-full"
                            />
                        </div>

                    ) : (

                        /* GÖRSEL İÇERİĞİ */
                        <Image
                            src={item.src!}
                            alt={item.alt}
                            onLoad={handleMediaLoad} 
                            onError={handleMediaError} 
                            fill={true} 
                            sizes="(max-width: 1024px) 90vw, 70vw"
                            className={`relative z-1 max-w-full max-h-full object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        />
                    )}
                </div>
                
                {/* Alt Metin / İsim */}
                <div className="mt-4 text-center text-xl sm:text-2xl font-semibold text-white/90">
                    {item.alt}
                </div>
            </div>
        </div>
    );
}