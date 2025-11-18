// components/Gallery/GalleryDetail.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS, GalleryItem } from './GalleryTypes'; 
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/solid';
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
            
            {/* Kapatma Butonu */}
            <button 
                onClick={onClose}
                className="absolute top-6 right-6 z-10001 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-red-500/90 hover:border-red-500 hover:rotate-90 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
                <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Navigasyon Butonları */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 z-10000 pointer-events-none">
                <button 
                    onClick={handlePrev}
                    className="pointer-events-auto w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:-translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                >
                    <ArrowLeftIcon className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                    onClick={handleNext}
                    className="pointer-events-auto w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-tr from-white/15 to-white/5 backdrop-blur-xl border border-white/25 text-white hover:bg-white/25 hover:scale-110 hover:translate-x-1 transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 group"
                >
                    <ArrowRightIcon className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
            
            {/* Medya ve Bilgi Alanı */}
            <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-8 p-8 max-w-7xl mx-auto">
                
                {/* Medya Konteyneri */}
                <div className="relative flex-1 w-full h-[60vh] lg:h-[80vh] flex items-center justify-center">
                    
                    {/* Dekoratif Arka Plan Efekti */}
                    <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-3xl blur-3xl"></div>
                    
                    {/* Yükleniyor Spinner */}
                    {isLoading && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-black/40 backdrop-blur-sm rounded-3xl">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-blue-500"></div>
                            <p className="mt-6 text-white text-lg font-medium tracking-wide">Yükleniyor...</p>
                        </div>
                    )}

                    {/* Resim */}
                    {item.type === 'image' && (
                        <img
                            src={item.src}
                            alt={item.alt}
                            onLoad={handleMediaLoad} 
                            onError={handleMediaError} 
                            className={`relative z-[1] max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        />
                    )}
                    
                    {/* Video */}
                    {item.type === 'video' && (
                        <video
                            src={item.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={handleMediaLoad} 
                            onError={handleMediaError}
                            className={`relative z-[1] max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-white/10 transition-all duration-700 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                        />
                    )}

                </div>



            </div>
        </div>
    );
}