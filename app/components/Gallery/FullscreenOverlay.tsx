// components/Gallery/FullscreenOverlay.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';
// GalleryItem arayüzünde 'type' özelliği olmadığını varsayıyoruz.
import { GALLERY_ITEMS } from './GalleryTypes'; 
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
// ancak orijinal kodunuzda Next/Image import'u vardı, bu yüzden tutuyorum.
// import Image from 'next/image'; 


interface FullscreenOverlayProps {
    currentIndex: number;
    onClose: () => void;
    onSetCurrentIndex: (index: number) => void;
}

const totalItems = GALLERY_ITEMS.length;

export default function FullscreenOverlay({ 
    currentIndex, 
    onClose, 
    onSetCurrentIndex, 
}: FullscreenOverlayProps) {
    
    // Yükleme durumu sadece resim yüklenene kadar devam eder.
    const [isLoading, setIsLoading] = useState(true); 
    const item = GALLERY_ITEMS[currentIndex];

    // Medya değiştiğinde yeniden yüklemeyi başlat
    useEffect(() => {
        // Senkron setState uyarısından kaçınmak için asenkron başlatma
        // (Resim değiştiğinde spinner'ı tekrar gösterir)
        const timer = setTimeout(() => {
            setIsLoading(true); 
        }, 0); 
        
        return () => clearTimeout(timer);

    }, [currentIndex]);

    // Medya Yüklendiğinde çağrılır
    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Medya Yüklenemediğinde çağrılır
    const handleMediaError = useCallback(() => {
        console.error(`Tam ekran medyası yüklenirken hata oluştu: ${item.alt}`);
        setIsLoading(false); 
    }, [item.alt]);
    
    // Geri gitme işlemi
    const handlePrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        onSetCurrentIndex(prevIndex);
    }, [currentIndex, onSetCurrentIndex]);

    // İleri gitme işlemi
    const handleNext = useCallback(() => {
        const nextIndex = (currentIndex + 1) % totalItems;
        onSetCurrentIndex(nextIndex);
    }, [currentIndex, onSetCurrentIndex]);


    // Klavye kontrolleri (ESC, Sol/Sağ Ok tuşları)
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
        // Tailwind/CSS sınıflarınızı bu div'e uyguladığınızı varsayıyorum
        <div className="fullscreen-overlay fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col justify-between items-center"> 
            
            {/* 1. Kapatma Butonu */}
            <button 
                className="close-button absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-gray-700 bg-opacity-50 transition" 
                onClick={onClose}
                aria-label="Kapat"
            >
                <XMarkIcon className="w-8 h-8 md:w-10 md:h-10" />
            </button>

            {/* 2. Navigasyon Butonları */}
            <div className="navigation-buttons absolute inset-0 flex items-center justify-between pointer-events-none p-4">
                <button 
                    className="nav-button prev-button pointer-events-auto text-white p-3 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition disabled:opacity-30 disabled:cursor-not-allowed" 
                    onClick={handlePrev}
                    aria-label="Önceki"
                >
                    <ArrowLeftIcon className="w-8 h-8 md:w-12 md:h-12" />
                </button>
                <button 
                    className="nav-button next-button pointer-events-auto text-white p-3 rounded-full bg-gray-700 bg-opacity-50 hover:bg-opacity-70 transition disabled:opacity-30 disabled:cursor-not-allowed" 
                    onClick={handleNext}
                    aria-label="Sonraki"
                >
                    <ArrowRightIcon className="w-8 h-8 md:w-12 md:h-12" />
                </button>
            </div>
            
            {/* 3. Medya Konteyneri */}
            <div className="media-container-fullscreen w-full h-full flex items-center justify-center pt-20 pb-20">
                
                {/* Yükleniyor Spinner'ı */}
                {isLoading && (
                    <div className="loading-spinner-fullscreen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
                        <p className="mt-4 text-white text-base">Yükleniyor...</p>
                    </div>
                )}

                {/* Sadece Resim Gösterimi */}
                {/* item.type kontrolü kaldırıldı */}
                <Image
                    // Next.js Image yerine standart img kullanıldığı varsayılıyor.
                    src={item.src}
                    alt={item.alt}
                    onLoad={handleMediaLoad} 
                    onError={handleMediaError} 
                    // Yüklenene kadar gizler, sonra görünür yapar
                    className={`fullscreen-image max-w-full max-h-full object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>

            {/* 4. Bilgi Alt Çubuğu */}
            <div className="fullscreen-info-bar absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white flex justify-between items-center">
                   <h3 className="item-name-info text-lg font-semibold truncate max-w-[70%]">{item.alt}</h3>
                   <p className="item-counter text-sm font-medium">{currentIndex + 1} / {totalItems}</p>
            </div>
        </div>
    );
}